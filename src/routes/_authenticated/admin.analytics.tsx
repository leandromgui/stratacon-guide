import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type EventRow = {
  event_name: string;
  faq_question: string | null;
  cta_label: string | null;
  cta_target: string | null;
  page_path: string | null;
  session_id: string | null;
  created_at: string;
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

function Page() {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [leads, setLeads] = useState<LeadRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [days, setDays] = useState(30);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
    Promise.all([
      supabase
        .from("analytics_events")
        .select("event_name,faq_question,cta_label,cta_target,page_path,session_id,created_at")
        .gte("created_at", since)
        .order("created_at", { ascending: false })
        .limit(5000),
      supabase
        .from("leads")
        .select("session_id,last_faq_question,created_at")
        .gte("created_at", since)
        .limit(5000),
    ])
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
  }, [days]);

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

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Analytics</div>
          <h1 className="mt-2 font-display text-3xl tracking-tight">FAQ × Leads</h1>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            Quais perguntas geram mais aberturas, cliques em CTAs do diagnóstico e leads efetivos
            nos últimos {days} dias.
          </p>
        </div>
        <div className="flex gap-2">
          {[7, 30, 90].map((d) => (
            <button
              key={d}
              onClick={() => setDays(d)}
              className={`text-[11px] uppercase tracking-[0.16em] border px-3 py-2 ${
                days === d ? "border-gold text-gold" : "border-border hover:border-gold/60"
              }`}
            >
              {d} dias
            </button>
          ))}
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