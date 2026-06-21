import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type Status = "novo" | "contatado" | "qualificado" | "perdido";

const LABEL: Record<Status, string> = {
  novo: "Novo",
  contatado: "Contatado",
  qualificado: "Qualificado",
  perdido: "Perdido",
};

const ORDER: Status[] = ["novo", "contatado", "qualificado", "perdido"];

type Rule = {
  status: Status;
  suggest_after_hours: number;
  remind_after_hours: number;
  enabled: boolean;
};

function formatHours(h: number) {
  if (!h) return "—";
  if (h % 24 === 0) return `${h / 24}d`;
  return `${h}h`;
}

export function FollowupRulesCard() {
  const [rules, setRules] = useState<Rule[] | null>(null);
  const [open, setOpen] = useState(false);
  const [savingStatus, setSavingStatus] = useState<Status | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[] | null>(null);
  const [historyError, setHistoryError] = useState<string | null>(null);
  const [historyLoading, setHistoryLoading] = useState(false);

  async function loadHistory() {
    setHistoryLoading(true);
    setHistoryError(null);
    const { data, error } = await supabase
      .from("lead_followup_rules_history" as never)
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100);
    setHistoryLoading(false);
    if (error) {
      setHistoryError(error.message);
      return;
    }
    setHistory((data as unknown as HistoryEntry[]) ?? []);
  }

  function buildRows() {
    return (history ?? []).map((h) => ({
      data: new Date(h.created_at).toLocaleString("pt-BR"),
      status: LABEL[h.status],
      sugerir:
        h.prev_suggest_after_hours !== h.new_suggest_after_hours
          ? `${h.prev_suggest_after_hours ?? "—"}h → ${h.new_suggest_after_hours ?? "—"}h`
          : "",
      lembrete:
        h.prev_remind_after_hours !== h.new_remind_after_hours
          ? `${h.prev_remind_after_hours ?? "—"}h → ${h.new_remind_after_hours ?? "—"}h`
          : "",
      ativa:
        h.prev_enabled !== h.new_enabled
          ? `${h.prev_enabled === null ? "—" : h.prev_enabled ? "sim" : "não"} → ${h.new_enabled ? "sim" : "não"}`
          : "",
      autor: h.changed_by ?? "sistema",
    }));
  }

  function exportCsv() {
    const rows = buildRows();
    const header = ["Data", "Status", "Sugerir (h)", "Lembrete (h)", "Ativa", "Autor"];
    const escape = (v: string) => `"${String(v).replace(/"/g, '""')}"`;
    const csv = [
      header.map(escape).join(","),
      ...rows.map((r) => [r.data, r.status, r.sugerir, r.lembrete, r.ativa, r.autor].map(escape).join(",")),
    ].join("\n");
    const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" });
    triggerDownload(blob, `historico-regras-followup-${stamp()}.csv`);
  }

  function exportPdf() {
    const rows = buildRows();
    const doc = new jsPDF({ orientation: "landscape" });
    doc.setFontSize(14);
    doc.text("Histórico de alterações — Regras de follow-up", 14, 16);
    doc.setFontSize(9);
    doc.text(`Gerado em ${new Date().toLocaleString("pt-BR")}`, 14, 22);
    autoTable(doc, {
      startY: 28,
      head: [["Data", "Status", "Sugerir (h)", "Lembrete (h)", "Ativa", "Autor"]],
      body: rows.map((r) => [r.data, r.status, r.sugerir, r.lembrete, r.ativa, r.autor]),
      styles: { fontSize: 8, cellPadding: 2 },
      headStyles: { fillColor: [30, 30, 30] },
    });
    doc.save(`historico-regras-followup-${stamp()}.pdf`);
  }

  useEffect(() => {
    if (historyOpen && history === null) void loadHistory();
  }, [historyOpen, history]);

  useEffect(() => {
    supabase
      .from("lead_followup_rules")
      .select("status, suggest_after_hours, remind_after_hours, enabled")
      .then(({ data, error }) => {
        if (error) {
          setError(error.message);
          return;
        }
        const ordered = ORDER.map(
          (s) =>
            (data as Rule[]).find((r) => r.status === s) ?? {
              status: s,
              suggest_after_hours: 24,
              remind_after_hours: 24,
              enabled: false,
            },
        );
        setRules(ordered);
      });
  }, []);

  async function patch(status: Status, patch: Partial<Rule>) {
    setSavingStatus(status);
    const { data, error } = await supabase
      .from("lead_followup_rules")
      .update(patch)
      .eq("status", status)
      .select("status, suggest_after_hours, remind_after_hours, enabled")
      .single();
    setSavingStatus(null);
    if (error) {
      setError(error.message);
      return;
    }
    setRules((prev) => prev?.map((r) => (r.status === status ? (data as Rule) : r)) ?? null);
    if (historyOpen) void loadHistory();
    else setHistory(null);
  }

  return (
    <div className="mb-6 border border-border rounded-sm bg-card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 border-b border-border text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.22em] text-gold">Automação</span>
          <h2 className="font-display text-base tracking-tight">Regras de follow-up por status</h2>
          {rules && (
            <span className="hidden md:inline text-xs text-muted-foreground">
              {rules
                .filter((r) => r.enabled)
                .map((r) => `${LABEL[r.status]} ${formatHours(r.suggest_after_hours)}`)
                .join(" · ")}
            </span>
          )}
        </div>
        <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {open ? "Recolher" : "Configurar"}
        </span>
      </button>

      {open && (
        <div className="px-4 py-4">
          {error && (
            <div className="mb-3 border border-destructive/40 bg-destructive/10 text-destructive text-xs p-2 rounded-sm">
              {error}
            </div>
          )}
          <p className="text-xs text-muted-foreground mb-4">
            Quando o status muda, o sistema agenda automaticamente o próximo follow-up usando estas regras. Vencido o prazo
            de “lembrete”, o lead aparece destacado no painel.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <tr>
                  <th className="text-left py-2 pr-3">Status</th>
                  <th className="text-left py-2 pr-3">Sugerir follow-up em (h)</th>
                  <th className="text-left py-2 pr-3">Lembrete após vencido (h)</th>
                  <th className="text-left py-2 pr-3">Ativa</th>
                </tr>
              </thead>
              <tbody>
                {rules?.map((r) => (
                  <tr key={r.status} className="border-t border-border">
                    <td className="py-2 pr-3 font-medium">{LABEL[r.status]}</td>
                    <td className="py-2 pr-3">
                      <input
                        type="number"
                        min={0}
                        max={24 * 60}
                        value={r.suggest_after_hours}
                        onChange={(e) => {
                          const v = Math.max(0, Number(e.target.value) || 0);
                          setRules((prev) =>
                            prev?.map((x) => (x.status === r.status ? { ...x, suggest_after_hours: v } : x)) ?? null,
                          );
                        }}
                        onBlur={(e) => patch(r.status, { suggest_after_hours: Math.max(0, Number(e.target.value) || 0) })}
                        className="w-24 rounded-sm border border-border bg-background px-2 py-1 text-sm"
                      />
                      <span className="ml-2 text-[11px] text-muted-foreground">
                        ≈ {formatHours(r.suggest_after_hours)}
                      </span>
                    </td>
                    <td className="py-2 pr-3">
                      <input
                        type="number"
                        min={0}
                        max={24 * 60}
                        value={r.remind_after_hours}
                        onChange={(e) => {
                          const v = Math.max(0, Number(e.target.value) || 0);
                          setRules((prev) =>
                            prev?.map((x) => (x.status === r.status ? { ...x, remind_after_hours: v } : x)) ?? null,
                          );
                        }}
                        onBlur={(e) => patch(r.status, { remind_after_hours: Math.max(0, Number(e.target.value) || 0) })}
                        className="w-24 rounded-sm border border-border bg-background px-2 py-1 text-sm"
                      />
                      <span className="ml-2 text-[11px] text-muted-foreground">
                        ≈ {formatHours(r.remind_after_hours)}
                      </span>
                    </td>
                    <td className="py-2 pr-3">
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={r.enabled}
                          onChange={(e) => patch(r.status, { enabled: e.target.checked })}
                          className="accent-gold"
                        />
                        <span className="text-xs text-muted-foreground">
                          {r.enabled ? "Ativa" : "Desativada"}
                          {savingStatus === r.status && " · salvando…"}
                        </span>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[11px] text-muted-foreground">
            Dica: deixe “Perdido” desativado para não reabrir lembretes de leads encerrados. As mudanças aplicam-se a partir
            da próxima alteração de status; leads atuais mantêm a data já agendada.
          </p>

          <div className="mt-5 border-t border-border pt-4">
            <button
              onClick={() => setHistoryOpen((v) => !v)}
              className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition"
            >
              <span>{historyOpen ? "▾" : "▸"}</span>
              <span>Histórico de alterações</span>
              {history && <span className="normal-case tracking-normal">({history.length})</span>}
            </button>
            {historyOpen && (
              <div className="mt-3">
                <div className="flex items-center gap-2 mb-3">
                  <button
                    onClick={exportCsv}
                    disabled={!history || history.length === 0}
                    className="text-[11px] uppercase tracking-[0.16em] border border-border px-3 py-1 rounded-sm hover:bg-muted disabled:opacity-40"
                  >
                    Exportar CSV
                  </button>
                  <button
                    onClick={exportPdf}
                    disabled={!history || history.length === 0}
                    className="text-[11px] uppercase tracking-[0.16em] border border-border px-3 py-1 rounded-sm hover:bg-muted disabled:opacity-40"
                  >
                    Exportar PDF
                  </button>
                </div>
                {historyError && (
                  <div className="mb-3 border border-destructive/40 bg-destructive/10 text-destructive text-xs p-2 rounded-sm">
                    {historyError}
                  </div>
                )}
                {historyLoading && <p className="text-xs text-muted-foreground">Carregando…</p>}
                {!historyLoading && history && history.length === 0 && (
                  <p className="text-xs text-muted-foreground">Nenhuma alteração registrada.</p>
                )}
                {!historyLoading && history && history.length > 0 && (
                  <ul className="space-y-2 max-h-72 overflow-y-auto pr-1">
                    {history.map((h) => (
                      <li
                        key={h.id}
                        className="text-xs border border-border rounded-sm px-3 py-2 bg-background/40"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-medium">{LABEL[h.status]}</span>
                          <span className="text-muted-foreground">
                            {new Date(h.created_at).toLocaleString("pt-BR")}
                          </span>
                        </div>
                        <div className="mt-1 text-muted-foreground space-y-0.5">
                          {h.prev_suggest_after_hours !== h.new_suggest_after_hours && (
                            <div>
                              Sugerir em: <span className="line-through">{h.prev_suggest_after_hours ?? "—"}h</span>{" "}
                              → <span className="text-foreground">{h.new_suggest_after_hours ?? "—"}h</span>
                            </div>
                          )}
                          {h.prev_remind_after_hours !== h.new_remind_after_hours && (
                            <div>
                              Lembrete após: <span className="line-through">{h.prev_remind_after_hours ?? "—"}h</span>{" "}
                              → <span className="text-foreground">{h.new_remind_after_hours ?? "—"}h</span>
                            </div>
                          )}
                          {h.prev_enabled !== h.new_enabled && (
                            <div>
                              Ativa: <span className="line-through">{String(h.prev_enabled ?? "—")}</span>{" "}
                              → <span className="text-foreground">{String(h.new_enabled)}</span>
                            </div>
                          )}
                          <div className="text-[10px] uppercase tracking-[0.16em] mt-1">
                            Autor: {h.changed_by ? h.changed_by.slice(0, 8) : "sistema"}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export type FollowupRule = Rule;

type HistoryEntry = {
  id: string;
  status: Status;
  prev_suggest_after_hours: number | null;
  new_suggest_after_hours: number | null;
  prev_remind_after_hours: number | null;
  new_remind_after_hours: number | null;
  prev_enabled: boolean | null;
  new_enabled: boolean;
  changed_by: string | null;
  created_at: string;
};