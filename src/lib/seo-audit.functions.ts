import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  ALL_ENTRIES,
  type AuditUrlKind,
  type UrlEntry,
} from "@/lib/seo-audit-urls";

export type { AuditUrlKind } from "@/lib/seo-audit-urls";

export type AuditResult = {
  url: string;
  kind: AuditUrlKind;
  ok: boolean;
  error?: string | null;
  verdict?: string | null;
  coverageState?: string | null;
  indexingState?: string | null;
  robotsTxtState?: string | null;
  pageFetchState?: string | null;
  lastCrawlTime?: string | null;
  googleCanonical?: string | null;
  userCanonical?: string | null;
  crawledAs?: string | null;
};

export type StoredRun = {
  id: string;
  trigger_source: string;
  triggered_by: string | null;
  site_url: string;
  started_at: string;
  finished_at: string | null;
  total: number;
  ok_count: number;
  failed_count: number;
  indexed_pass: number;
  canonical_mismatch: number;
  redirects_ok: number;
  error: string | null;
};

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";

export async function inspectOneUrl(
  url: string,
  siteUrl: string,
  lovableKey: string,
  connKey: string,
): Promise<Omit<AuditResult, "url" | "kind">> {
  const res = await fetch(`${GATEWAY}/v1/urlInspection/index:inspect`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": connKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inspectionUrl: url,
      siteUrl,
      languageCode: "pt-BR",
    }),
  });
  const text = await res.text();
  let payload: any = null;
  try {
    payload = text ? JSON.parse(text) : null;
  } catch {
    /* keep text */
  }
  if (!res.ok) {
    const msg =
      payload?.error?.message ||
      payload?.message ||
      text?.slice(0, 220) ||
      `HTTP ${res.status}`;
    return { ok: false, error: `${res.status} — ${msg}` };
  }
  const idx = payload?.inspectionResult?.indexStatusResult ?? {};
  return {
    ok: true,
    verdict: idx.verdict ?? null,
    coverageState: idx.coverageState ?? null,
    indexingState: idx.indexingState ?? null,
    robotsTxtState: idx.robotsTxtState ?? null,
    pageFetchState: idx.pageFetchState ?? null,
    lastCrawlTime: idx.lastCrawlTime ?? null,
    googleCanonical: idx.googleCanonical ?? null,
    userCanonical: idx.userCanonical ?? null,
    crawledAs: idx.crawledAs ?? null,
  };
}

export function buildUrlsForSite(siteUrl: string, entries: UrlEntry[] = ALL_ENTRIES) {
  const base = siteUrl.replace(/\/+$/, "");
  return entries.map((e) => ({ url: `${base}${e.path}`, kind: e.kind }));
}

export function summarize(results: AuditResult[]) {
  const ok = results.filter((r) => r.ok).length;
  const failed = results.length - ok;
  const canonicals = results.filter((r) => r.kind === "canonical");
  const indexedPass = canonicals.filter((r) => r.verdict === "PASS").length;
  const canonicalMismatch = canonicals.filter(
    (r) =>
      r.ok &&
      r.googleCanonical &&
      r.userCanonical &&
      r.googleCanonical !== r.userCanonical,
  ).length;
  const redirects = results.filter((r) => r.kind === "redirect");
  const redirectsOk = redirects.filter(
    (r) =>
      r.ok &&
      (r.pageFetchState === "REDIRECT" ||
        (r.coverageState ?? "").toLowerCase().includes("alternate") ||
        (r.coverageState ?? "").toLowerCase().includes("redirect")),
  ).length;
  return {
    total: results.length,
    ok_count: ok,
    failed_count: failed,
    indexed_pass: indexedPass,
    canonical_mismatch: canonicalMismatch,
    redirects_ok: redirectsOk,
    totalCanonical: canonicals.length,
    totalRedirects: redirects.length,
  };
}

const InputSchema = z.object({
  siteUrl: z.string().url(),
  urls: z
    .array(
      z.object({
        url: z.string().url(),
        kind: z.enum(["canonical", "redirect"]),
      }),
    )
    .min(1)
    .max(60),
});

export const auditSeoUrls = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => InputSchema.parse(d))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { data: isAdmin, error: roleErr } = await supabase.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });
    if (roleErr) throw new Error(roleErr.message);
    if (!isAdmin) throw new Error("Acesso negado: requer papel admin.");

    const lovableKey = process.env.LOVABLE_API_KEY;
    const connKey = process.env.GOOGLE_SEARCH_CONSOLE_API_KEY;
    if (!lovableKey || !connKey) {
      throw new Error(
        "Conector Google Search Console não está vinculado a este projeto.",
      );
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: runRow, error: runErr } = await supabaseAdmin
      .from("seo_audit_runs")
      .insert({
        triggered_by: userId,
        trigger_source: "manual",
        site_url: data.siteUrl,
        total: data.urls.length,
      })
      .select("id")
      .single();
    if (runErr || !runRow) throw new Error(runErr?.message ?? "Falha ao criar run");
    const runId = runRow.id;

    const results: AuditResult[] = [];
    for (const item of data.urls) {
      try {
        const r = await inspectOneUrl(item.url, data.siteUrl, lovableKey, connKey);
        results.push({ url: item.url, kind: item.kind, ...r });
      } catch (e: any) {
        results.push({
          url: item.url,
          kind: item.kind,
          ok: false,
          error: e?.message ?? String(e),
        });
      }
    }

    await supabaseAdmin.from("seo_audit_results").insert(
      results.map((r) => ({
        run_id: runId,
        url: r.url,
        kind: r.kind,
        ok: r.ok,
        verdict: r.verdict ?? null,
        coverage_state: r.coverageState ?? null,
        indexing_state: r.indexingState ?? null,
        robots_txt_state: r.robotsTxtState ?? null,
        page_fetch_state: r.pageFetchState ?? null,
        google_canonical: r.googleCanonical ?? null,
        user_canonical: r.userCanonical ?? null,
        last_crawl_time: r.lastCrawlTime ?? null,
        crawled_as: r.crawledAs ?? null,
        error: r.error ?? null,
      })),
    );

    const summary = summarize(results);
    await supabaseAdmin
      .from("seo_audit_runs")
      .update({
        finished_at: new Date().toISOString(),
        total: summary.total,
        ok_count: summary.ok_count,
        failed_count: summary.failed_count,
        indexed_pass: summary.indexed_pass,
        canonical_mismatch: summary.canonical_mismatch,
        redirects_ok: summary.redirects_ok,
      })
      .eq("id", runId);

    return { runId, results, checkedAt: new Date().toISOString(), siteUrl: data.siteUrl };
  });

export const listAuditRuns = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    const { data: isAdmin } = await supabase.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Acesso negado.");
    const { data, error } = await supabase
      .from("seo_audit_runs")
      .select(
        "id,trigger_source,triggered_by,site_url,started_at,finished_at,total,ok_count,failed_count,indexed_pass,canonical_mismatch,redirects_ok,error",
      )
      .order("started_at", { ascending: false })
      .limit(50);
    if (error) throw new Error(error.message);
    return (data ?? []) as StoredRun[];
  });

const GetRunInput = z.object({ runId: z.string().uuid() });

export const getAuditRun = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => GetRunInput.parse(d))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { data: isAdmin } = await supabase.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Acesso negado.");
    const { data: run } = await supabase
      .from("seo_audit_runs")
      .select("*")
      .eq("id", data.runId)
      .single();
    const { data: rows } = await supabase
      .from("seo_audit_results")
      .select("*")
      .eq("run_id", data.runId)
      .order("url");
    const results: AuditResult[] = (rows ?? []).map((r: any) => ({
      url: r.url,
      kind: r.kind,
      ok: r.ok,
      error: r.error,
      verdict: r.verdict,
      coverageState: r.coverage_state,
      indexingState: r.indexing_state,
      robotsTxtState: r.robots_txt_state,
      pageFetchState: r.page_fetch_state,
      googleCanonical: r.google_canonical,
      userCanonical: r.user_canonical,
      lastCrawlTime: r.last_crawl_time,
      crawledAs: r.crawled_as,
    }));
    return { run: run as StoredRun, results };
  });

export type AuditSettings = {
  site_url: string | null;
  schedule: "off" | "daily" | "weekly";
  enabled: boolean;
  updated_at: string;
};

export const getAuditSettings = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    const { data: isAdmin } = await supabase.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Acesso negado.");
    const { data, error } = await supabase
      .from("seo_audit_settings")
      .select("site_url,schedule,enabled,updated_at")
      .eq("id", true)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return (
      (data as AuditSettings | null) ?? {
        site_url: null,
        schedule: "off",
        enabled: false,
        updated_at: new Date().toISOString(),
      }
    );
  });

const SettingsInput = z.object({
  site_url: z.string().url().nullable(),
  schedule: z.enum(["off", "daily", "weekly"]),
  enabled: z.boolean(),
});

export const updateAuditSettings = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => SettingsInput.parse(d))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { data: isAdmin } = await supabase.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Acesso negado.");
    const { error } = await supabase
      .from("seo_audit_settings")
      .upsert({
        id: true,
        site_url: data.site_url,
        schedule: data.schedule,
        enabled: data.enabled,
        updated_at: new Date().toISOString(),
        updated_by: userId,
      });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
