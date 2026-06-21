import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import {
  ALL_ENTRIES,
  CANONICAL_PATHS,
  REDIRECT_PATHS,
} from "@/lib/seo-audit-urls";
import {
  auditSeoUrls,
  getAuditRun,
  getAuditSettings,
  listAuditRuns,
  updateAuditSettings,
  type AuditResult,
  type AuditSettings,
  type StoredRun,
} from "@/lib/seo-audit.functions";

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
  const runAudit = useServerFn(auditSeoUrls);
  const fetchRuns = useServerFn(listAuditRuns);
  const fetchRun = useServerFn(getAuditRun);
  const fetchSettings = useServerFn(getAuditSettings);
  const saveSettings = useServerFn(updateAuditSettings);

  const defaultOrigin =
    typeof window !== "undefined" ? window.location.origin : "";
  const [siteUrl, setSiteUrl] = useState(
    defaultOrigin ? `${defaultOrigin}/` : "",
  );
  const [filter, setFilter] = useState<"all" | "canonical" | "redirect">("all");
  const [running, setRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [runs, setRuns] = useState<StoredRun[] | null>(null);
  const [selectedRunId, setSelectedRunId] = useState<string | null>(null);
  const [currentResults, setCurrentResults] = useState<AuditResult[] | null>(null);
  const [previousResults, setPreviousResults] = useState<AuditResult[] | null>(null);
  const [currentRun, setCurrentRun] = useState<StoredRun | null>(null);

  const [settings, setSettings] = useState<AuditSettings | null>(null);
  const [savingSettings, setSavingSettings] = useState(false);

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  }

  async function refreshHistory(selectId?: string | null) {
    try {
      const list = await fetchRuns();
      setRuns(list);
      const target = selectId ?? list[0]?.id ?? null;
      if (target) {
        const idx = list.findIndex((r) => r.id === target);
        setSelectedRunId(target);
        const [cur, prev] = await Promise.all([
          fetchRun({ data: { runId: target } }),
          idx + 1 < list.length
            ? fetchRun({ data: { runId: list[idx + 1].id } })
            : Promise.resolve(null),
        ]);
        setCurrentRun(cur.run);
        setCurrentResults(cur.results);
        setPreviousResults(prev?.results ?? null);
      } else {
        setSelectedRunId(null);
        setCurrentRun(null);
        setCurrentResults(null);
        setPreviousResults(null);
      }
    } catch (e: any) {
      setError(e?.message ?? String(e));
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const s = await fetchSettings();
        setSettings(s);
        if (s.site_url) setSiteUrl(s.site_url);
      } catch (e: any) {
        setError(e?.message ?? String(e));
      }
      refreshHistory();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const visibleEntries = useMemo(
    () => ALL_ENTRIES.filter((e) => filter === "all" || e.kind === filter),
    [filter],
  );

  async function onRunNow() {
    setError(null);
    setRunning(true);
    try {
      const base = siteUrl.replace(/\/+$/, "");
      const res = await runAudit({
        data: {
          siteUrl: siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`,
          urls: visibleEntries.map((e) => ({
            url: `${base}${e.path}`,
            kind: e.kind,
          })),
        },
      });
      await refreshHistory(res.runId);
    } catch (e: any) {
      setError(e?.message ?? String(e));
    } finally {
      setRunning(false);
    }
  }

  async function onSelectRun(id: string) {
    setSelectedRunId(id);
    try {
      const idx = runs?.findIndex((r) => r.id === id) ?? -1;
      const [cur, prev] = await Promise.all([
        fetchRun({ data: { runId: id } }),
        runs && idx + 1 < runs.length
          ? fetchRun({ data: { runId: runs[idx + 1].id } })
          : Promise.resolve(null),
      ]);
      setCurrentRun(cur.run);
      setCurrentResults(cur.results);
      setPreviousResults(prev?.results ?? null);
    } catch (e: any) {
      setError(e?.message ?? String(e));
    }
  }

  async function onSaveSettings(next: AuditSettings) {
    setSavingSettings(true);
    try {
      await saveSettings({
        data: {
          site_url: next.site_url,
          schedule: next.schedule,
          enabled: next.enabled,
        },
      });
      const fresh = await fetchSettings();
      setSettings(fresh);
    } catch (e: any) {
      setError(e?.message ?? String(e));
    } finally {
      setSavingSettings(false);
    }
  }

  function exportCsv() {
    if (!currentResults) return;
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
    const rows = currentResults.map((r) =>
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
    const ts = (currentRun?.started_at ?? new Date().toISOString())
      .replace(/[:.]/g, "-")
      .slice(0, 19);
    a.download = `auditoria-seo-${ts}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const previousByUrl = useMemo(() => {
    const m = new Map<string, AuditResult>();
    (previousResults ?? []).forEach((r) => m.set(r.url, r));
    return m;
  }, [previousResults]);

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
        {/* Schedule settings */}
        {settings && (
          <ScheduleCard
            settings={settings}
            saving={savingSettings}
            onSave={onSaveSettings}
          />
        )}

        {/* Run controls */}
        <div className="rounded-lg border border-border bg-card p-5">
          <h2 className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Execução manual
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
              onClick={onRunNow}
              disabled={running || !siteUrl}
              className="rounded-md bg-gold px-4 py-2 text-sm font-medium text-background disabled:opacity-50"
            >
              {running ? "Verificando…" : "Verificar agora"}
            </button>
            <button
              onClick={exportCsv}
              disabled={!currentResults?.length}
              className="rounded-md border border-border px-4 py-2 text-sm disabled:opacity-50"
            >
              Exportar CSV
            </button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Cada execução é gravada em <code>seo_audit_runs</code>. Quota da
            URL Inspection API: ~2.000/dia.
          </p>
        </div>

        {error && (
          <div className="rounded-md border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-700">
            <strong>Erro:</strong> {error}
          </div>
        )}

        {/* History list */}
        <div className="rounded-lg border border-border bg-card p-5">
          <h2 className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Histórico de execuções
          </h2>
          {!runs || runs.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Nenhuma execução registrada ainda.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="text-muted-foreground uppercase tracking-wider">
                  <tr>
                    <th className="text-left py-2 px-2">Quando</th>
                    <th className="text-left py-2 px-2">Origem</th>
                    <th className="text-left py-2 px-2">Site</th>
                    <th className="text-right py-2 px-2">OK / Falhas</th>
                    <th className="text-right py-2 px-2">Indexadas</th>
                    <th className="text-right py-2 px-2">Divergente</th>
                    <th className="text-right py-2 px-2">301</th>
                  </tr>
                </thead>
                <tbody>
                  {runs.map((r) => (
                    <tr
                      key={r.id}
                      onClick={() => onSelectRun(r.id)}
                      className={`border-t border-border cursor-pointer hover:bg-muted/40 ${
                        selectedRunId === r.id ? "bg-muted/60" : ""
                      }`}
                    >
                      <td className="py-2 px-2">
                        {new Date(r.started_at).toLocaleString("pt-BR")}
                      </td>
                      <td className="py-2 px-2">
                        <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase">
                          {r.trigger_source}
                        </span>
                      </td>
                      <td className="py-2 px-2 font-mono text-[11px] text-muted-foreground truncate max-w-[260px]">
                        {r.site_url}
                      </td>
                      <td className="py-2 px-2 text-right">
                        {r.ok_count}/{r.total}
                        {r.failed_count > 0 && (
                          <span className="text-rose-600">
                            {" "}
                            · {r.failed_count}
                          </span>
                        )}
                      </td>
                      <td className="py-2 px-2 text-right">{r.indexed_pass}</td>
                      <td
                        className={`py-2 px-2 text-right ${
                          r.canonical_mismatch ? "text-amber-600" : ""
                        }`}
                      >
                        {r.canonical_mismatch}
                      </td>
                      <td className="py-2 px-2 text-right">{r.redirects_ok}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Current run summary */}
        {currentRun && currentResults && (
          <>
            <div className="grid gap-3 sm:grid-cols-5">
              <SummaryCard
                label="OK"
                value={currentRun.ok_count}
                total={currentRun.total}
              />
              <SummaryCard
                label="Falhas API"
                value={currentRun.failed_count}
                tone={currentRun.failed_count ? "bad" : undefined}
              />
              <SummaryCard
                label="Canônicas indexadas"
                value={currentRun.indexed_pass}
                tone="good"
              />
              <SummaryCard
                label="Canonical divergente"
                value={currentRun.canonical_mismatch}
                tone={currentRun.canonical_mismatch ? "warn" : undefined}
              />
              <SummaryCard
                label="301 detectados"
                value={currentRun.redirects_ok}
              />
            </div>

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
                    <th className="text-left px-3 py-2">Δ vs anterior</th>
                  </tr>
                </thead>
                <tbody>
                  {currentResults.map((r) => {
                    const prev = previousByUrl.get(r.url);
                    const change = diffResult(prev, r);
                    return (
                      <tr
                        key={r.url}
                        className="border-t border-border align-top"
                      >
                        <td className="px-3 py-2 font-mono text-xs break-all max-w-[280px]">
                          <a
                            href={r.url}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-gold"
                          >
                            {stripOrigin(r.url, currentRun.site_url)}
                          </a>
                        </td>
                        <td className="px-3 py-2">
                          <KindBadge kind={r.kind} />
                        </td>
                        <td className="px-3 py-2">
                          {r.ok ? (
                            <VerdictBadge verdict={r.verdict} />
                          ) : (
                            <span className="text-rose-600 text-xs">
                              {r.error}
                            </span>
                          )}
                        </td>
                        <td className="px-3 py-2 text-xs">
                          {r.coverageState ?? "—"}
                        </td>
                        <td className="px-3 py-2 text-xs">
                          {r.pageFetchState ?? "—"}
                        </td>
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
                            ? new Date(r.lastCrawlTime).toLocaleDateString(
                                "pt-BR",
                              )
                            : "—"}
                        </td>
                        <td className="px-3 py-2 text-xs">
                          {prev ? (
                            change.length === 0 ? (
                              <span className="text-muted-foreground">=</span>
                            ) : (
                              <ul className="space-y-0.5 text-amber-700">
                                {change.map((c) => (
                                  <li key={c}>{c}</li>
                                ))}
                              </ul>
                            )
                          ) : (
                            <span className="text-muted-foreground">novo</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function diffResult(prev: AuditResult | undefined, cur: AuditResult): string[] {
  if (!prev) return [];
  const out: string[] = [];
  if (prev.verdict !== cur.verdict)
    out.push(`veredito: ${prev.verdict ?? "—"} → ${cur.verdict ?? "—"}`);
  if ((prev.coverageState ?? "") !== (cur.coverageState ?? ""))
    out.push(`cobertura mudou`);
  if ((prev.googleCanonical ?? "") !== (cur.googleCanonical ?? ""))
    out.push(`canonical mudou`);
  if ((prev.pageFetchState ?? "") !== (cur.pageFetchState ?? ""))
    out.push(`fetch: ${prev.pageFetchState ?? "—"} → ${cur.pageFetchState ?? "—"}`);
  if (prev.ok !== cur.ok)
    out.push(cur.ok ? "voltou a responder" : "falhou agora");
  return out;
}

function ScheduleCard({
  settings,
  saving,
  onSave,
}: {
  settings: AuditSettings;
  saving: boolean;
  onSave: (next: AuditSettings) => void;
}) {
  const [siteUrl, setSiteUrl] = useState(settings.site_url ?? "");
  const [schedule, setSchedule] = useState<AuditSettings["schedule"]>(
    settings.schedule,
  );
  const [enabled, setEnabled] = useState(settings.enabled);

  useEffect(() => {
    setSiteUrl(settings.site_url ?? "");
    setSchedule(settings.schedule);
    setEnabled(settings.enabled);
  }, [settings]);

  const dirty =
    siteUrl !== (settings.site_url ?? "") ||
    schedule !== settings.schedule ||
    enabled !== settings.enabled;

  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h2 className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-3">
        Agendamento automático
      </h2>
      <div className="grid gap-3 sm:grid-cols-[1fr_auto_auto_auto] items-end">
        <label className="text-xs text-muted-foreground">
          Site verificado (URL completa com /)
          <input
            type="url"
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
            placeholder="https://seudominio.com.br/"
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </label>
        <label className="text-xs text-muted-foreground">
          Frequência
          <select
            value={schedule}
            onChange={(e) =>
              setSchedule(e.target.value as AuditSettings["schedule"])
            }
            className="mt-1 block rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option value="off">Desligado</option>
            <option value="daily">Diária (04:00 UTC)</option>
            <option value="weekly">Semanal (seg, 04:30 UTC)</option>
          </select>
        </label>
        <label className="flex items-center gap-2 text-xs">
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />
          Ativo
        </label>
        <button
          onClick={() =>
            onSave({
              site_url: siteUrl || null,
              schedule,
              enabled,
              updated_at: settings.updated_at,
            })
          }
          disabled={!dirty || saving || (enabled && !siteUrl)}
          className="rounded-md bg-gold px-4 py-2 text-sm font-medium text-background disabled:opacity-50"
        >
          {saving ? "Salvando…" : "Salvar"}
        </button>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Os jobs <code>seo-audit-daily</code> e <code>seo-audit-weekly</code> rodam
        sempre, mas a execução só prossegue se a frequência configurada acima
        corresponder. Última alteração:{" "}
        {new Date(settings.updated_at).toLocaleString("pt-BR")}.
      </p>
    </div>
  );
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
