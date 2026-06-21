import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import {
  auditSeoUrls,
  type AuditResult,
} from "@/lib/seo-audit.functions";

type UrlEntry = { path: string; kind: "canonical" | "redirect"; note?: string };

const CANONICAL_PATHS: UrlEntry[] = [
  { path: "/", kind: "canonical" },
  { path: "/diagnostico", kind: "canonical" },
  { path: "/metodo", kind: "canonical" },
  { path: "/temas-estrategicos", kind: "canonical" },
  { path: "/contato", kind: "canonical" },
  { path: "/goiania", kind: "canonical" },
  { path: "/sobre", kind: "canonical" },
  { path: "/sobre/leandro", kind: "canonical" },
  { path: "/solucoes", kind: "canonical" },
  { path: "/solucoes/planejamento-tributario", kind: "canonical" },
  { path: "/solucoes/regularizacao-fiscal", kind: "canonical" },
  { path: "/solucoes/holding-patrimonial", kind: "canonical" },
  { path: "/solucoes/departamento-pessoal", kind: "canonical" },
  { path: "/solucoes/departamento-fiscal", kind: "canonical" },
  { path: "/solucoes/contabilidade-empresarial", kind: "canonical" },
  { path: "/solucoes/reforma-tributaria", kind: "canonical" },
  { path: "/solucoes/recuperacao-creditos-tributarios", kind: "canonical" },
  { path: "/solucoes/defesas-fiscais", kind: "canonical" },
  { path: "/solucoes/bpo-financeiro", kind: "canonical" },
  { path: "/solucoes/societario-legalizacao", kind: "canonical" },
  { path: "/solucoes/tecnologia-contabil", kind: "canonical" },
  { path: "/solucoes/pessoa-fisica-irpf", kind: "canonical" },
  { path: "/solucoes/valuation-kpis", kind: "canonical" },
  { path: "/solucoes/registro-marca-inpi", kind: "canonical" },
  { path: "/solucoes/abrir-empresa", kind: "canonical" },
  { path: "/solucoes/trocar-contabilidade", kind: "canonical" },
  { path: "/segmentos", kind: "canonical" },
  { path: "/segmentos/medicos-clinicas", kind: "canonical", note: "Saúde (canônica unificada)" },
  { path: "/segmentos/comercio", kind: "canonical", note: "Comércio/ICMS (canônica unificada)" },
  { path: "/conteudos", kind: "canonical" },
  { path: "/conteudos/regimes-tributarios", kind: "canonical", note: "Regimes (canônica unificada)" },
];

const REDIRECT_PATHS: UrlEntry[] = [
  { path: "/conteudos/planejamento-tributario", kind: "redirect" },
  { path: "/conteudos/regularizacao-fiscal", kind: "redirect" },
  { path: "/conteudos/holding-patrimonio", kind: "redirect" },
  { path: "/conteudos/dp-esocial", kind: "redirect" },
  { path: "/conteudos/comercio-icms", kind: "redirect" },
  { path: "/conteudos/saude-clinicas", kind: "redirect" },
  { path: "/segmentos/pendencias-fiscais", kind: "redirect" },
  { path: "/segmentos/simples-nacional", kind: "redirect" },
  { path: "/segmentos/lucro-presumido", kind: "redirect" },
  { path: "/segmentos/lucro-real", kind: "redirect" },
  { path: "/sobre/metodologia", kind: "redirect" },
];

const ALL_ENTRIES: UrlEntry[] = [...CANONICAL_PATHS, ...REDIRECT_PATHS];

export const Route = createFileRoute("/_authenticated/admin/auditoria-seo")({
  head: () => ({
    meta: [
      { title: "Auditoria SEO | Painel DCON" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AuditoriaSeo,
});

function AuditoriaSeo() {
  const navigate = useNavigate();
  const run = useServerFn(auditSeoUrls);

  const defaultOrigin =
    typeof window !== "undefined" ? window.location.origin : "";
  const [siteUrl, setSiteUrl] = useState(
    defaultOrigin ? `${defaultOrigin}/` : "",
  );
  const [filter, setFilter] = useState<"all" | "canonical" | "redirect">("all");
  const [running, setRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<AuditResult[] | null>(null);
  const [checkedAt, setCheckedAt] = useState<string | null>(null);

  const visibleEntries = useMemo(
    () =>
      ALL_ENTRIES.filter((e) => filter === "all" || e.kind === filter),
    [filter],
  );

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  }

  async function runAudit() {
    setError(null);
    setRunning(true);
    try {
      const base = siteUrl.replace(/\/+$/, "");
      const payload = {
        siteUrl: siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`,
        urls: visibleEntries.map((e) => ({
          url: `${base}${e.path}`,
          kind: e.kind,
        })),
      };
      const res = await run({ data: payload });
      setResults(res.results);
      setCheckedAt(res.checkedAt);
    } catch (e: any) {
      setError(e?.message ?? String(e));
    } finally {
      setRunning(false);
    }
  }

  function exportCsv() {
    if (!results) return;
    const headers = [
      "url",
      "tipo",
      "ok",
      "verdict",
      "coverage",
      "indexing",
      "robots",
      "pageFetch",
      "googleCanonical",
      "userCanonical",
      "lastCrawl",
      "crawledAs",
      "error",
    ];
    const rows = results.map((r) =>
      [
        r.url,
        r.kind,
        r.ok ? "sim" : "nao",
        r.verdict ?? "",
        r.coverageState ?? "",
        r.indexingState ?? "",
        r.robotsTxtState ?? "",
        r.pageFetchState ?? "",
        r.googleCanonical ?? "",
        r.userCanonical ?? "",
        r.lastCrawlTime ?? "",
        r.crawledAs ?? "",
        r.error ?? "",
      ]
        .map((v) => `"${String(v).replace(/"/g, '""')}"`)
        .join(","),
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const ts = (checkedAt ?? new Date().toISOString())
      .replace(/[:.]/g, "-")
      .slice(0, 19);
    a.download = `auditoria-seo-${ts}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const summary = useMemo(() => {
    if (!results) return null;
    const ok = results.filter((r) => r.ok).length;
    const failed = results.length - ok;
    const canonicals = results.filter((r) => r.kind === "canonical");
    const indexedPass = canonicals.filter(
      (r) => r.verdict === "PASS",
    ).length;
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
        (r.pageFetchState === "REDIRECT" || r.coverageState?.includes("redirect") || r.coverageState?.toLowerCase().includes("alternate")),
    ).length;
    return { ok, failed, indexedPass, canonicalMismatch, redirectsOk, totalCanonical: canonicals.length, totalRedirects: redirects.length };
  }, [results]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold">
              Painel DCON
            </div>
            <h1 className="font-display text-lg tracking-tight">
              Auditoria SEO · Google Search Console
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/admin/leads"
              className="text-xs uppercase tracking-[0.16em] hover:text-gold"
            >
              Leads
            </Link>
            <button
              onClick={signOut}
              className="text-xs uppercase tracking-[0.16em] hover:text-gold"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8 space-y-6">
        <div className="rounded-lg border border-border bg-card p-5">
          <h2 className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Configuração
          </h2>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto_auto_auto] items-end">
            <label className="text-xs text-muted-foreground">
              Site verificado no GSC
              <input
                type="url"
                value={siteUrl}
                onChange={(e) => setSiteUrl(e.target.value)}
                placeholder="https://seudominio.com.br/"
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="all">Todas ({ALL_ENTRIES.length})</option>
              <option value="canonical">
                Canônicas ({CANONICAL_PATHS.length})
              </option>
              <option value="redirect">
                Redirecionadas ({REDIRECT_PATHS.length})
              </option>
            </select>
            <button
              onClick={runAudit}
              disabled={running || !siteUrl}
              className="rounded-md bg-gold px-4 py-2 text-sm font-medium text-background disabled:opacity-50"
            >
              {running ? "Verificando…" : "Verificar agora"}
            </button>
            <button
              onClick={exportCsv}
              disabled={!results || results.length === 0}
              className="rounded-md border border-border px-4 py-2 text-sm disabled:opacity-50"
            >
              Exportar CSV
            </button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            A consulta usa a URL Inspection API do Google Search Console.
            Requer: (1) site publicado, (2) propriedade verificada no GSC, (3)
            conector <strong>Google Search Console</strong> vinculado ao
            projeto. Quota: ~2.000 inspeções/dia.
          </p>
          {checkedAt && (
            <p className="mt-1 text-xs text-muted-foreground">
              Última verificação: {new Date(checkedAt).toLocaleString("pt-BR")}
            </p>
          )}
        </div>

        {error && (
          <div className="rounded-md border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-700">
            <strong>Erro:</strong> {error}
            {error.toLowerCase().includes("conector") && (
              <p className="mt-2 text-xs">
                Vincule o conector pelo menu Connectors → Google Search Console.
                Depois recarregue esta página.
              </p>
            )}
          </div>
        )}

        {summary && (
          <div className="grid gap-3 sm:grid-cols-5">
            <SummaryCard label="OK" value={summary.ok} total={summary.ok + summary.failed} />
            <SummaryCard label="Falhas API" value={summary.failed} tone="bad" />
            <SummaryCard label="Canônicas indexadas" value={summary.indexedPass} total={summary.totalCanonical} tone="good" />
            <SummaryCard label="Canonical divergente" value={summary.canonicalMismatch} tone={summary.canonicalMismatch ? "warn" : undefined} />
            <SummaryCard label="301 detectados" value={summary.redirectsOk} total={summary.totalRedirects} />
          </div>
        )}

        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="text-left px-3 py-2">URL</th>
                <th className="text-left px-3 py-2">Tipo</th>
                <th className="text-left px-3 py-2">Veredito</th>
                <th className="text-left px-3 py-2">Cobertura</th>
                <th className="text-left px-3 py-2">Fetch</th>
                <th className="text-left px-3 py-2">Canonical Google</th>
                <th className="text-left px-3 py-2">Última crawl</th>
              </tr>
            </thead>
            <tbody>
              {(results ?? visibleEntries.map((e) => placeholderRow(e, siteUrl))).map(
                (r) => (
                  <tr key={r.url} className="border-t border-border align-top">
                    <td className="px-3 py-2 font-mono text-xs break-all max-w-[280px]">
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gold"
                      >
                        {stripOrigin(r.url, siteUrl)}
                      </a>
                    </td>
                    <td className="px-3 py-2">
                      <KindBadge kind={r.kind} />
                    </td>
                    <td className="px-3 py-2">
                      {r.ok ? (
                        <VerdictBadge verdict={r.verdict} />
                      ) : results ? (
                        <span className="text-rose-600 text-xs">{r.error}</span>
                      ) : (
                        <span className="text-muted-foreground text-xs">—</span>
                      )}
                    </td>
                    <td className="px-3 py-2 text-xs">{r.coverageState ?? "—"}</td>
                    <td className="px-3 py-2 text-xs">{r.pageFetchState ?? "—"}</td>
                    <td className="px-3 py-2 text-xs font-mono break-all max-w-[260px]">
                      {r.googleCanonical ? (
                        <CanonicalCell
                          declared={r.userCanonical}
                          google={r.googleCanonical}
                        />
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="px-3 py-2 text-xs">
                      {r.lastCrawlTime
                        ? new Date(r.lastCrawlTime).toLocaleDateString("pt-BR")
                        : "—"}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function placeholderRow(e: UrlEntry, siteUrl: string): AuditResult {
  const base = siteUrl.replace(/\/+$/, "");
  return { url: `${base}${e.path}`, kind: e.kind, ok: false };
}

function stripOrigin(url: string, siteUrl: string) {
  try {
    const s = new URL(siteUrl).origin;
    return url.startsWith(s) ? url.slice(s.length) || "/" : url;
  } catch {
    return url;
  }
}

function KindBadge({ kind }: { kind: "canonical" | "redirect" }) {
  const cls =
    kind === "canonical"
      ? "bg-emerald-500/15 text-emerald-600 border-emerald-500/30"
      : "bg-amber-500/15 text-amber-600 border-amber-500/30";
  return (
    <span
      className={`inline-block rounded border px-2 py-0.5 text-[10px] uppercase tracking-wider ${cls}`}
    >
      {kind === "canonical" ? "200" : "301"}
    </span>
  );
}

function VerdictBadge({ verdict }: { verdict?: string | null }) {
  if (!verdict)
    return <span className="text-xs text-muted-foreground">—</span>;
  const cls =
    verdict === "PASS"
      ? "bg-emerald-500/15 text-emerald-600 border-emerald-500/30"
      : verdict === "PARTIAL" || verdict === "NEUTRAL"
        ? "bg-amber-500/15 text-amber-600 border-amber-500/30"
        : "bg-rose-500/15 text-rose-600 border-rose-500/30";
  return (
    <span
      className={`inline-block rounded border px-2 py-0.5 text-[10px] uppercase tracking-wider ${cls}`}
    >
      {verdict}
    </span>
  );
}

function CanonicalCell({
  declared,
  google,
}: {
  declared?: string | null;
  google: string;
}) {
  const mismatch = declared && declared !== google;
  return (
    <div className="space-y-0.5">
      <div className={mismatch ? "text-rose-600" : "text-foreground"}>
        {google}
      </div>
      {declared && declared !== google && (
        <div className="text-muted-foreground">
          declarada: <span className="line-through">{declared}</span>
        </div>
      )}
    </div>
  );
}

function SummaryCard({
  label,
  value,
  total,
  tone,
}: {
  label: string;
  value: number;
  total?: number;
  tone?: "good" | "warn" | "bad";
}) {
  const toneCls =
    tone === "good"
      ? "text-emerald-600"
      : tone === "warn"
        ? "text-amber-600"
        : tone === "bad"
          ? "text-rose-600"
          : "text-foreground";
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
      <div className={`mt-1 font-display text-2xl ${toneCls}`}>
        {value}
        {total != null && (
          <span className="text-sm text-muted-foreground"> / {total}</span>
        )}
      </div>
    </div>
  );
}
