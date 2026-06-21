import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

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
        </div>
      )}
    </div>
  );
}

export type FollowupRule = Rule;