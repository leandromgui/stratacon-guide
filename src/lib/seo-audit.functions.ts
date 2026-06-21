import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type AuditUrlKind = "canonical" | "redirect";

export type AuditResult = {
  url: string;
  kind: AuditUrlKind;
  ok: boolean;
  error?: string;
  verdict?: string | null;
  coverageState?: string | null;
  indexingState?: string | null;
  robotsTxtState?: string | null;
  pageFetchState?: string | null;
  lastCrawlTime?: string | null;
  googleCanonical?: string | null;
  userCanonical?: string | null;
  crawledAs?: string | null;
  inspectionLink?: string | null;
};

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

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";

async function inspectOne(
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
    inspectionLink: payload?.inspectionResult?.inspectionResultLink ?? null,
  };
}

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

    const results: AuditResult[] = [];
    // Sequencial p/ respeitar quota da API (~600/min) e simplificar erros.
    for (const item of data.urls) {
      try {
        const r = await inspectOne(item.url, data.siteUrl, lovableKey, connKey);
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
    return { checkedAt: new Date().toISOString(), siteUrl: data.siteUrl, results };
  });
