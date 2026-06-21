import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type EventRow = {
  event_name: string;
  faq_question: string | null;
  cta_label: string | null;
  cta_target: string | null;
  page_path: string | null;
  session_id: string | null;
  created_at: string;
  metadata: Record<string, unknown> | null;
};

type LeadRow = {
  session_id: string | null;
  last_faq_question: string | null;
  created_at: string;
};

type Row = { key: string; opens: number; clicks: number; leads: number };

export const Route = createFileRoute("/_authenticated/admin/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics de FAQ | Painel DCON" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: Page,
});

type QuickRange = 7 | 30 | 90;

type FilterState =
  | { mode: "quick"; days: QuickRange }
  | { mode: "custom"; start: Date; end: Date };

// Resolve the user's local timezone — filters are anchored to the day
// boundaries the user actually sees in the dashboard, not to UTC midnight.
const LOCAL_TZ =
  typeof Intl !== "undefined"
    ? Intl.DateTimeFormat().resolvedOptions().timeZone || "local"
    : "local";

function startOfLocalDay(d: Date) {
  const copy = new Date(d);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function endOfLocalDay(d: Date) {
  const copy = new Date(d);
  copy.setHours(23, 59, 59, 999);
  return copy;
}

// Resolve a FilterState to the absolute [start, end] instants used to query
// the database. Quick ranges are anchored to local-day boundaries (end of
// today, start of N-1 days ago) so the buttons match the calendar the user
// sees instead of a rolling 24h*N window measured from "now".
function resolveRange(f: FilterState): { startISO: string; endISO: string; startLabel: string; endLabel: string } {
  let start: Date;
  let end: Date;
  if (f.mode === "quick") {
    end = endOfLocalDay(new Date());
    const s = new Date();
    s.setDate(s.getDate() - (f.days - 1));
    start = startOfLocalDay(s);
  } else {
    start = startOfLocalDay(f.start);
    end = endOfLocalDay(f.end);
  }
  return {
    startISO: start.toISOString(),
    endISO: end.toISOString(),
    startLabel: format(start, "dd/MM/yyyy"),
    endLabel: format(end, "dd/MM/yyyy"),
  };
}

function periodLabel(f: FilterState) {
  const r = resolveRange(f);
  if (f.mode === "quick") {
    return `últimos ${f.days} dias (${r.startLabel} – ${r.endLabel}, ${LOCAL_TZ})`;
  }
  return `${r.startLabel} – ${r.endLabel} (${LOCAL_TZ})`;
}

function Page() {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [leads, setLeads] = useState<LeadRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterState>({ mode: "quick", days: 30 });

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    let evQuery = supabase
      .from("analytics_events")
      .select("event_name,faq_question,cta_label,cta_target,page_path,session_id,created_at,metadata")
      .order("created_at", { ascending: false })
      .limit(5000);
    let ldQuery = supabase
      .from("leads")
      .select("session_id,last_faq_question,created_at")
      .limit(5000);

    const { startISO, endISO } = resolveRange(filter);
    evQuery = evQuery.gte("created_at", startISO).lte("created_at", endISO);
    ldQuery = ldQuery.gte("created_at", startISO).lte("created_at", endISO);

    Promise.all([evQuery, ldQuery])
      .then(([ev, ld]) => {
        if (cancelled) return;
        if (ev.error) setError(ev.error.message);
        else setEvents((ev.data ?? []) as EventRow[]);
        if (!ev.error && ld.error) setError(ld.error.message);
        else if (!ld.error) setLeads((ld.data ?? []) as LeadRow[]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [filter]);

  const byQuestion = useMemo<Row[]>(() => {
    const map = new Map<string, Row>();
    const get = (k: string): Row => {
      const cur = map.get(k);
      if (cur) return cur;
      const next = { key: k, opens: 0, clicks: 0, leads: 0 };
      map.set(k, next);
      return next;
    };
    for (const e of events) {
      if (!e.faq_question) continue;
      if (e.event_name === "faq_open") get(e.faq_question).opens += 1;
      if (e.event_name === "faq_cta_click") get(e.faq_question).clicks += 1;
    }
    // Leads atribuídos por session_id quando há FAQ aberta na sessão; caem em "—" caso contrário.
    const sessionToQuestion = new Map<string, string>();
    for (const e of events) {
      if (e.event_name === "faq_open" && e.session_id && e.faq_question) {
        // mantém a última pergunta vista por sessão
        sessionToQuestion.set(e.session_id, e.faq_question);
      }
    }
    for (const l of leads) {
      const q =
        l.last_faq_question ||
        (l.session_id ? sessionToQuestion.get(l.session_id) : null) ||
        "— sem FAQ associada";
      get(q).leads += 1;
    }
    return [...map.values()].sort(
      (a, b) => b.leads - a.leads || b.clicks - a.clicks || b.opens - a.opens,
    );
  }, [events, leads]);

  const byCtaTarget = useMemo(() => {
    const map = new Map<string, number>();
    for (const e of events) {
      if (e.event_name !== "faq_cta_click" || !e.cta_target) continue;
      map.set(e.cta_target, (map.get(e.cta_target) ?? 0) + 1);
    }
    return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15);
  }, [events]);

  const totals = useMemo(() => {
    let opens = 0;
    let clicks = 0;
    for (const e of events) {
      if (e.event_name === "faq_open") opens += 1;
      if (e.event_name === "faq_cta_click") clicks += 1;
    }
    return { opens, clicks, leads: leads.length };
  }, [events, leads]);

  const quickDays: QuickRange[] = [7, 30, 90];
  const [dateStart, setDateStart] = useState<Date | undefined>(undefined);
  const [dateEnd, setDateEnd] = useState<Date | undefined>(undefined);

  const isQuick = filter.mode === "quick";
  const activeQuick = isQuick ? filter.days : null;

  function applyQuick(d: QuickRange) {
    setFilter({ mode: "quick", days: d });
  }

  function applyCustom() {
    if (!dateStart || !dateEnd) return;
    setFilter({ mode: "custom", start: dateStart, end: dateEnd });
  }

  function clearCustom() {
    setDateStart(undefined);
    setDateEnd(undefined);
    setFilter({ mode: "quick", days: 30 });
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Analytics</div>
          <h1 className="mt-2 font-display text-3xl tracking-tight">FAQ × Leads</h1>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            Quais perguntas geram mais aberturas, cliques em CTAs do diagnóstico e leads efetivos
            no período: <span className="text-foreground font-medium">{periodLabel(filter)}</span>.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {quickDays.map((d) => (
            <button
              key={d}
              onClick={() => applyQuick(d)}
              className={`text-[11px] uppercase tracking-[0.16em] border px-3 py-2 ${
                activeQuick === d ? "border-gold text-gold" : "border-border hover:border-gold/60"
              }`}
            >
              {d} dias
            </button>
          ))}

          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={`text-[11px] uppercase tracking-[0.16em] border px-3 py-2 flex items-center gap-1.5 ${
                  filter.mode === "custom" ? "border-gold text-gold" : "border-border hover:border-gold/60"
                }`}
              >
                <CalendarIcon className="size-3.5" />
                {filter.mode === "custom" ? `${format(filter.start, "dd/MM")} – ${format(filter.end, "dd/MM")}` : "Custom"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-3 pointer-events-auto" align="end">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">De</span>
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className={cn(
                            "text-sm border border-border px-2 py-1.5 min-w-[120px] text-left flex items-center justify-between",
                            !dateStart && "text-muted-foreground"
                          )}
                        >
                          {dateStart ? format(dateStart, "dd/MM/yyyy") : "Início"}
                          <CalendarIcon className="size-3.5 text-muted-foreground" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                        <Calendar
                          mode="single"
                          selected={dateStart}
                          onSelect={setDateStart}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Até</span>
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className={cn(
                            "text-sm border border-border px-2 py-1.5 min-w-[120px] text-left flex items-center justify-between",
                            !dateEnd && "text-muted-foreground"
                          )}
                        >
                          {dateEnd ? format(dateEnd, "dd/MM/yyyy") : "Fim"}
                          <CalendarIcon className="size-3.5 text-muted-foreground" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                        <Calendar
                          mode="single"
                          selected={dateEnd}
                          onSelect={setDateEnd}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={applyCustom}
                    disabled={!dateStart || !dateEnd}
                    className="text-[11px] uppercase tracking-[0.16em] border px-3 py-2 border-gold text-gold hover:bg-gold/10 disabled:opacity-40 disabled:hover:bg-transparent"
                  >
                    Aplicar
                  </button>
                  <button
                    type="button"
                    onClick={clearCustom}
                    className="text-[11px] uppercase tracking-[0.16em] border px-3 py-2 border-border hover:border-gold/60"
                  >
                    Limpar
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </header>

      <div className="mt-8 grid grid-cols-3 gap-px bg-border border border-border">
        <Metric label="Aberturas de FAQ" value={totals.opens} />
        <Metric label="Cliques em CTA" value={totals.clicks} />
        <Metric label="Leads no período" value={totals.leads} />
      </div>

      {error && (
        <p className="mt-6 text-sm text-destructive">Erro ao carregar dados: {error}</p>
      )}
      {loading && <p className="mt-6 text-sm text-muted-foreground">Carregando…</p>}

      <section className="mt-12">
        <h2 className="font-display text-xl tracking-tight">Perguntas ranqueadas por leads gerados</h2>
        <div className="mt-4 border border-border overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground bg-muted/40">
              <tr>
                <th className="text-left p-3">Pergunta</th>
                <th className="text-right p-3">Aberturas</th>
                <th className="text-right p-3">Cliques CTA</th>
                <th className="text-right p-3">Leads</th>
                <th className="text-right p-3">Conv.</th>
              </tr>
            </thead>
            <tbody>
              {byQuestion.length === 0 && !loading && (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-muted-foreground">
                    Nenhum evento de FAQ registrado no período.
                  </td>
                </tr>
              )}
              {byQuestion.map((r) => {
                const conv = r.opens > 0 ? (r.leads / r.opens) * 100 : 0;
                return (
                  <tr key={r.key} className="border-t border-border align-top">
                    <td className="p-3 max-w-xl">{r.key}</td>
                    <td className="p-3 text-right tabular-nums">{r.opens}</td>
                    <td className="p-3 text-right tabular-nums">{r.clicks}</td>
                    <td className="p-3 text-right tabular-nums font-medium">{r.leads}</td>
                    <td className="p-3 text-right tabular-nums text-muted-foreground">
                      {conv.toFixed(1)}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl tracking-tight">Destinos de CTA mais clicados</h2>
        <ul className="mt-4 divide-y divide-border border border-border">
          {byCtaTarget.length === 0 && !loading && (
            <li className="p-4 text-sm text-muted-foreground">Sem cliques registrados.</li>
          )}
          {byCtaTarget.map(([target, count]) => (
            <li key={target} className="flex items-center justify-between p-3 text-sm">
              <span className="font-mono text-[12px]">{target}</span>
              <span className="tabular-nums">{count}</span>
            </li>
          ))}
        </ul>
      </section>

      <HeatmapPanel events={events} loading={loading} />
    </div>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-card p-6">
      <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-3xl tabular-nums">{value}</div>
    </div>
  );
}

const HEATMAP_PAGES = [
  { value: "/conteudos/holding-familiar", label: "Holding Familiar" },
];

function csvEscape(value: unknown): string {
  if (value === null || value === undefined) return "";
  const str = String(value);
  if (/[",\n\r;]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
}

function downloadCsv(filename: string, rows: (string | number | null | undefined)[][]) {
  const csv = rows.map((r) => r.map(csvEscape).join(",")).join("\r\n");
  // BOM para Excel reconhecer UTF-8 corretamente.
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function HeatmapPanel({ events, loading }: { events: EventRow[]; loading: boolean }) {
  const [page, setPage] = useState(HEATMAP_PAGES[0].value);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [iframeSize, setIframeSize] = useState<{ w: number; h: number } | null>(null);

  const pageEvents = useMemo(
    () => events.filter((e) => e.page_path === page),
    [events, page],
  );

  const scrollFunnel = useMemo(() => {
    const buckets: Record<number, Set<string>> = { 25: new Set(), 50: new Set(), 75: new Set(), 100: new Set() };
    const sessions = new Set<string>();
    for (const e of pageEvents) {
      if (e.session_id) sessions.add(e.session_id);
      if (e.event_name !== "scroll_depth") continue;
      const depth = Number((e.metadata as { depth?: number } | null)?.depth);
      if (!depth || !buckets[depth]) continue;
      if (e.session_id) buckets[depth].add(e.session_id);
    }
    const total = sessions.size || 1;
    return [25, 50, 75, 100].map((m) => ({
      depth: m,
      sessions: buckets[m].size,
      pct: (buckets[m].size / total) * 100,
    }));
  }, [pageEvents]);

  const bySection = useMemo(() => {
    const map = new Map<string, number>();
    for (const e of pageEvents) {
      if (e.event_name !== "page_click") continue;
      const section = String((e.metadata as { section?: string } | null)?.section ?? "—");
      map.set(section, (map.get(section) ?? 0) + 1);
    }
    return [...map.entries()].sort((a, b) => b[1] - a[1]);
  }, [pageEvents]);

  const points = useMemo(() => {
    const arr: { x: number; y: number }[] = [];
    for (const e of pageEvents) {
      if (e.event_name !== "page_click") continue;
      const m = e.metadata as { x?: number; y?: number } | null;
      if (typeof m?.x === "number" && typeof m?.y === "number") {
        arr.push({ x: m.x, y: m.y });
      }
    }
    return arr;
  }, [pageEvents]);

  function onIframeLoad() {
    const el = iframeRef.current;
    if (!el) return;
    try {
      const doc = el.contentDocument;
      const w = doc?.documentElement.scrollWidth ?? el.clientWidth;
      const h = doc?.documentElement.scrollHeight ?? el.clientHeight;
      setIframeSize({ w, h });
      el.style.height = `${h}px`;
    } catch {
      /* cross-origin — usa altura fixa */
      setIframeSize({ w: el.clientWidth, h: 4000 });
      el.style.height = "4000px";
    }
  }

  function safeSlug(path: string) {
    return path.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "") || "pagina";
  }

  function exportClicksCsv() {
    const stamp = new Date().toISOString().slice(0, 10);
    const rows: (string | number | null | undefined)[][] = [
      [
        "created_at",
        "page_path",
        "session_id",
        "section",
        "tag",
        "x_norm",
        "y_norm",
        "page_width",
        "page_height",
        "faq_question",
        "cta_label",
      ],
    ];
    for (const e of pageEvents) {
      if (e.event_name !== "page_click") continue;
      const m = (e.metadata as Record<string, unknown> | null) ?? {};
      rows.push([
        e.created_at,
        e.page_path,
        e.session_id,
        (m.section as string) ?? "",
        (m.tag as string) ?? "",
        typeof m.x === "number" ? m.x : "",
        typeof m.y === "number" ? m.y : "",
        typeof m.page_width === "number" ? m.page_width : "",
        typeof m.page_height === "number" ? m.page_height : "",
        e.faq_question ?? "",
        e.cta_label ?? "",
      ]);
    }
    downloadCsv(`heatmap-cliques-${safeSlug(page)}-${stamp}.csv`, rows);
  }

  function exportScrollCsv() {
    const stamp = new Date().toISOString().slice(0, 10);
    const rows: (string | number | null | undefined)[][] = [
      ["created_at", "page_path", "session_id", "depth_pct"],
    ];
    for (const e of pageEvents) {
      if (e.event_name !== "scroll_depth") continue;
      const depth = Number((e.metadata as { depth?: number } | null)?.depth);
      if (!depth) continue;
      rows.push([e.created_at, e.page_path, e.session_id, depth]);
    }
    // Resumo (sessões únicas por marco) ao final, separado por linha em branco.
    rows.push([]);
    rows.push(["resumo_depth_pct", "sessoes_unicas", "pct_sessoes"]);
    for (const s of scrollFunnel) {
      rows.push([s.depth, s.sessions, `${s.pct.toFixed(2)}%`]);
    }
    downloadCsv(`heatmap-scroll-${safeSlug(page)}-${stamp}.csv`, rows);
  }

  const clicksCount = pageEvents.filter((e) => e.event_name === "page_click").length;
  const scrollCount = pageEvents.filter((e) => e.event_name === "scroll_depth").length;

  return (
    <section className="mt-12">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-xl tracking-tight">Heatmap de cliques e scroll</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Quais trechos da página recebem mais atenção antes do CTA do diagnóstico.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={page}
            onChange={(e) => setPage(e.target.value)}
            className="border border-border bg-card px-3 py-2 text-sm"
          >
            {HEATMAP_PAGES.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={exportClicksCsv}
            disabled={clicksCount === 0}
            className="text-[11px] uppercase tracking-[0.16em] border border-border px-3 py-2 hover:border-gold hover:text-gold disabled:opacity-40 disabled:hover:border-border disabled:hover:text-current"
            title={`Exportar ${clicksCount} cliques`}
          >
            ↓ CSV cliques ({clicksCount})
          </button>
          <button
            type="button"
            onClick={exportScrollCsv}
            disabled={scrollCount === 0}
            className="text-[11px] uppercase tracking-[0.16em] border border-border px-3 py-2 hover:border-gold hover:text-gold disabled:opacity-40 disabled:hover:border-border disabled:hover:text-current"
            title={`Exportar ${scrollCount} eventos de scroll`}
          >
            ↓ CSV scroll ({scrollCount})
          </button>
        </div>
      </header>

      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
        {scrollFunnel.map((s) => (
          <div key={s.depth} className="bg-card p-5">
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Atingiram {s.depth}%
            </div>
            <div className="mt-2 font-display text-2xl tabular-nums">{s.sessions}</div>
            <div className="mt-1 text-xs text-muted-foreground tabular-nums">
              {s.pct.toFixed(1)}% das sessões
            </div>
            <div className="mt-3 h-1.5 bg-muted">
              <div
                className="h-full bg-gold"
                style={{ width: `${Math.min(100, s.pct)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4">
          <h3 className="font-display text-base tracking-tight">Cliques por seção</h3>
          <ul className="mt-3 divide-y divide-border border border-border">
            {bySection.length === 0 && !loading && (
              <li className="p-3 text-sm text-muted-foreground">Sem cliques registrados.</li>
            )}
            {bySection.map(([section, count]) => (
              <li key={section} className="flex items-center justify-between p-3 text-sm">
                <span className="truncate pr-3">{section}</span>
                <span className="tabular-nums text-muted-foreground">{count}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            {points.length} pontos plotados no overlay.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div
            ref={containerRef}
            className="relative w-full border border-border bg-card overflow-hidden"
          >
            <iframe
              ref={iframeRef}
              src={page}
              title="Página com heatmap"
              onLoad={onIframeLoad}
              className="w-full block pointer-events-none"
              style={{ height: iframeSize?.h ? `${iframeSize.h}px` : "1200px" }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden
              style={{ mixBlendMode: "multiply" }}
            >
              {points.map((p, i) => (
                <span
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    left: `${p.x * 100}%`,
                    top: `${p.y * 100}%`,
                    width: 28,
                    height: 28,
                    background:
                      "radial-gradient(circle, rgba(220,38,38,0.55) 0%, rgba(220,38,38,0.18) 55%, rgba(220,38,38,0) 75%)",
                  }}
                />
              ))}
            </div>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Cada ponto vermelho é um clique normalizado em relação ao tamanho da página. Áreas
            mais saturadas concentram interesse.
          </p>
        </div>
      </div>
    </section>
  );
}