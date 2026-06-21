import { createFileRoute } from "@tanstack/react-router";
import {
  buildUrlsForSite,
  inspectOneUrl,
  summarize,
  type AuditResult,
} from "@/lib/seo-audit.functions";

/**
 * Cron-callable endpoint. Authentication = Supabase publishable key in the
 * `apikey` header (matches the canonical pg_cron pattern).
 *
 * Trigger via pg_cron:
 *   select net.http_post(
 *     url := 'https://project--<project-id>.lovable.app/api/public/hooks/seo-audit-run',
 *     headers := '{"Content-Type":"application/json","apikey":"<PUBLISHABLE_KEY>"}'::jsonb,
 *     body := '{"schedule":"daily"}'::jsonb
 *   );
 */
export const Route = createFileRoute("/api/public/hooks/seo-audit-run")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apikey = request.headers.get("apikey");
        const expected = process.env.SUPABASE_PUBLISHABLE_KEY;
        if (!expected || apikey !== expected) {
          return json({ error: "unauthorized" }, 401);
        }

        let body: { schedule?: "daily" | "weekly" } = {};
        try {
          body = (await request.json()) as any;
        } catch {
          /* empty body ok */
        }
        const expectedSchedule = body.schedule ?? "daily";

        const { supabaseAdmin } = await import(
          "@/integrations/supabase/client.server"
        );

        const { data: settings, error: setErr } = await supabaseAdmin
          .from("seo_audit_settings")
          .select("site_url,schedule,enabled")
          .eq("id", true)
          .maybeSingle();
        if (setErr) return json({ error: setErr.message }, 500);
        if (!settings || !settings.enabled) {
          return json({ skipped: true, reason: "disabled" });
        }
        if (settings.schedule !== expectedSchedule) {
          return json({
            skipped: true,
            reason: `schedule mismatch (configured: ${settings.schedule}, called: ${expectedSchedule})`,
          });
        }
        if (!settings.site_url) {
          return json({ error: "site_url not configured" }, 400);
        }

        const lovableKey = process.env.LOVABLE_API_KEY;
        const connKey = process.env.GOOGLE_SEARCH_CONSOLE_API_KEY;
        if (!lovableKey || !connKey) {
          return json(
            { error: "Google Search Console connector not linked" },
            503,
          );
        }

        const siteUrl = settings.site_url.endsWith("/")
          ? settings.site_url
          : `${settings.site_url}/`;
        const targets = buildUrlsForSite(siteUrl);

        const { data: runRow, error: runErr } = await supabaseAdmin
          .from("seo_audit_runs")
          .insert({
            trigger_source: `cron:${expectedSchedule}`,
            site_url: siteUrl,
            total: targets.length,
          })
          .select("id")
          .single();
        if (runErr || !runRow) return json({ error: runErr?.message }, 500);
        const runId = runRow.id;

        const results: AuditResult[] = [];
        for (const t of targets) {
          try {
            const r = await inspectOneUrl(t.url, siteUrl, lovableKey, connKey);
            results.push({ url: t.url, kind: t.kind, ...r });
          } catch (e: any) {
            results.push({
              url: t.url,
              kind: t.kind,
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
            ok_count: summary.ok_count,
            failed_count: summary.failed_count,
            indexed_pass: summary.indexed_pass,
            canonical_mismatch: summary.canonical_mismatch,
            redirects_ok: summary.redirects_ok,
          })
          .eq("id", runId);

        return json({ ok: true, runId, ...summary });
      },
    },
  },
});

function json(payload: unknown, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
