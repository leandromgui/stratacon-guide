import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Fragment, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type LeadStatus = "novo" | "contatado" | "qualificado" | "perdido";

const STATUS_LABEL: Record<LeadStatus, string> = {
  novo: "Novo",
  contatado: "Contatado",
  qualificado: "Qualificado",
  perdido: "Perdido",
};

const STATUS_COLOR: Record<LeadStatus, string> = {
  novo: "bg-blue-500/15 text-blue-600 border-blue-500/30",
  contatado: "bg-amber-500/15 text-amber-600 border-amber-500/30",
  qualificado: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
  perdido: "bg-rose-500/15 text-rose-600 border-rose-500/30",
};

const STATUSES: LeadStatus[] = ["novo", "contatado", "qualificado", "perdido"];

const DUE_SOON_WINDOW_MS = 24 * 60 * 60 * 1000;

function isOverdue(l: Lead, now: number) {
  if (!l.next_followup_at || l.status === "perdido") return false;
  return new Date(l.next_followup_at).getTime() < now;
}

function isDueSoon(l: Lead, now: number) {
  if (!l.next_followup_at || l.status === "perdido") return false;
  const t = new Date(l.next_followup_at).getTime();
  return t >= now && t - now <= DUE_SOON_WINDOW_MS;
}

function relativeFromNow(iso: string, now: number) {
  const diff = new Date(iso).getTime() - now;
  const abs = Math.abs(diff);
  const min = Math.round(abs / 60000);
  const past = diff < 0;
  if (min < 60) return past ? `há ${min} min` : `em ${min} min`;
  const h = Math.round(min / 60);
  if (h < 48) return past ? `há ${h} h` : `em ${h} h`;
  const d = Math.round(h / 24);
  return past ? `há ${d} d` : `em ${d} d`;
}

type Lead = {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  interest: string;
  source_page: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  status: LeadStatus;
  notes: string | null;
  lost_reason: string | null;
  last_contact_at: string | null;
  next_followup_at: string | null;
  created_at: string;
};

type HistoryEntry = {
  id: string;
  from_status: LeadStatus | null;
  to_status: LeadStatus;
  note: string | null;
  created_at: string;
  changed_by: string | null;
};

export const Route = createFileRoute("/_authenticated/admin/leads")({
  head: () => ({
    meta: [
      { title: "Leads | Painel DCON" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminLeads,
});

function AdminLeads() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "all">("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [overdueOnly, setOverdueOnly] = useState(false);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(t);
  }, []);

  const refresh = () =>
    supabase
      .from("leads")
      .select("id, name, email, whatsapp, interest, source_page, utm_source, utm_medium, utm_campaign, status, notes, lost_reason, last_contact_at, next_followup_at, created_at")
      .order("created_at", { ascending: false })
      .limit(500)
      .then(({ data, error }) => {
        if (error) {
          setError(error.message.includes("row-level") || error.code === "PGRST301"
            ? "Acesso negado: seu usuário ainda não é admin."
            : error.message);
          return;
        }
        setLeads(data as Lead[]);
      });

  useEffect(() => {
    refresh();
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  }

  async function updateLead(id: string, patch: Partial<Lead>) {
    const wantsContacted =
      patch.status === "contatado" &&
      leads?.find((l) => l.id === id)?.status !== "contatado";
    const finalPatch: Partial<Lead> = { ...patch };
    if (wantsContacted && !patch.last_contact_at) {
      finalPatch.last_contact_at = new Date().toISOString();
    }
    const { data, error } = await supabase
      .from("leads")
      .update(finalPatch)
      .eq("id", id)
      .select("id, name, email, whatsapp, interest, source_page, utm_source, utm_medium, utm_campaign, status, notes, lost_reason, last_contact_at, next_followup_at, created_at")
      .single();
    if (error) {
      setError(error.message);
      return;
    }
    setLeads((prev) => prev?.map((l) => (l.id === id ? (data as Lead) : l)) ?? null);
  }

  const filtered = (leads ?? []).filter((l) => {
    if (statusFilter !== "all" && l.status !== statusFilter) return false;
    if (overdueOnly && !isOverdue(l, now)) return false;
    if (!filter) return true;
    const q = filter.toLowerCase();
    return (
      l.name.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      l.interest.toLowerCase().includes(q) ||
      (l.utm_source ?? "").toLowerCase().includes(q) ||
      (l.source_page ?? "").toLowerCase().includes(q)
    );
  });

  const active = (leads ?? []).filter((l) => l.status !== "perdido");
  const overdue = active
    .filter((l) => isOverdue(l, now))
    .sort((a, b) => (a.next_followup_at ?? "").localeCompare(b.next_followup_at ?? ""));
  const dueSoon = active.filter((l) => isDueSoon(l, now));
  const missing = active.filter((l) => !l.next_followup_at && l.status !== "qualificado");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Painel DCON</div>
            <h1 className="font-display text-lg tracking-tight">Leads</h1>
          </div>
          <button onClick={signOut} className="text-xs uppercase tracking-[0.16em] hover:text-gold">
            Sair
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <FollowupSummary
          overdue={overdue}
          dueSoon={dueSoon}
          missing={missing}
          now={now}
          onOpen={(id) => {
            setOpenId(id);
            setTimeout(() => document.getElementById(`lead-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
          }}
          onQuickContacted={async (id) => {
            await updateLead(id, { status: "contatado" });
          }}
          onToggleFilter={() => setOverdueOnly((v) => !v)}
          overdueOnly={overdueOnly}
        />

        <div className="flex flex-wrap gap-3 items-center mb-6">
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Buscar por nome, e-mail, interesse, UTM…"
            className="flex-1 min-w-[260px] rounded-sm border border-border bg-card px-3 py-2 text-sm"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as LeadStatus | "all")}
            className="rounded-sm border border-border bg-card px-3 py-2 text-sm"
          >
            <option value="all">Todos os status</option>
            {STATUSES.map((s) => (
              <option key={s} value={s}>{STATUS_LABEL[s]}</option>
            ))}
          </select>
          <span className="text-xs text-muted-foreground">
            {leads ? `${filtered.length} de ${leads.length}` : "carregando…"}
          </span>
        </div>

        {error && (
          <div className="mb-6 border border-destructive/40 bg-destructive/10 text-destructive text-sm p-4 rounded-sm">
            {error}
          </div>
        )}

        <div className="overflow-x-auto border border-border rounded-sm">
          <table className="w-full text-sm">
            <thead className="bg-secondary text-secondary-foreground text-[11px] uppercase tracking-[0.14em]">
              <tr>
                <th className="text-left px-3 py-3">Data</th>
                <th className="text-left px-3 py-3">Nome</th>
                <th className="text-left px-3 py-3">Contato</th>
                <th className="text-left px-3 py-3">Interesse</th>
                <th className="text-left px-3 py-3">Follow-up</th>
                <th className="text-left px-3 py-3">Origem</th>
                <th className="text-left px-3 py-3">Status</th>
                <th className="px-3 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((l) => (
                <Fragment key={l.id}>
            <tr id={`lead-${l.id}`} className={`border-t border-border align-top ${isOverdue(l, now) ? "bg-rose-500/5" : ""}`}>
                  <td className="px-3 py-3 text-xs text-muted-foreground whitespace-nowrap">
                    {new Date(l.created_at).toLocaleString("pt-BR")}
                  </td>
                  <td className="px-3 py-3 font-medium">{l.name}</td>
                  <td className="px-3 py-3 text-xs">
                    <div>{l.email}</div>
                    <div className="text-muted-foreground">{l.whatsapp}</div>
                  </td>
                  <td className="px-3 py-3 text-xs">{l.interest}</td>
              <td className="px-3 py-3 text-xs whitespace-nowrap">
                {l.next_followup_at ? (
                  <span className={isOverdue(l, now) ? "text-rose-600 font-medium" : isDueSoon(l, now) ? "text-amber-600" : "text-muted-foreground"}>
                    {relativeFromNow(l.next_followup_at, now)}
                  </span>
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </td>
                  <td className="px-3 py-3 text-xs text-muted-foreground">
                    <div>{l.source_page ?? "—"}</div>
                    {(l.utm_source || l.utm_campaign) && (
                      <div>UTM: {l.utm_source ?? "—"} / {l.utm_campaign ?? "—"}</div>
                    )}
                  </td>
                  <td className="px-3 py-3">
                    <select
                      value={l.status}
                      onChange={(e) => updateLead(l.id, { status: e.target.value as LeadStatus })}
                      className={`rounded-sm border px-2 py-1 text-xs font-medium ${STATUS_COLOR[l.status]}`}
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>{STATUS_LABEL[s]}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <button
                      onClick={() => setOpenId(openId === l.id ? null : l.id)}
                      className="text-xs uppercase tracking-[0.14em] hover:text-gold"
                    >
                      {openId === l.id ? "Fechar" : "Detalhes"}
                    </button>
                  </td>
                </tr>
                {openId === l.id && (
                  <tr className="border-t border-border bg-muted/30">
                    <td colSpan={8} className="px-3 py-4">
                      <LeadDetails lead={l} onChange={(patch) => updateLead(l.id, patch)} />
                    </td>
                  </tr>
                )}
                </Fragment>
              ))}
              {leads && filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-3 py-8 text-center text-sm text-muted-foreground">
                    Nenhum lead encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function LeadDetails({ lead, onChange }: { lead: Lead; onChange: (patch: Partial<Lead>) => void }) {
  const [history, setHistory] = useState<HistoryEntry[] | null>(null);
  const [notes, setNotes] = useState(lead.notes ?? "");
  const [lostReason, setLostReason] = useState(lead.lost_reason ?? "");
  const [nextFollowup, setNextFollowup] = useState(
    lead.next_followup_at ? lead.next_followup_at.slice(0, 16) : "",
  );
  const [savedMsg, setSavedMsg] = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from("lead_status_history")
      .select("id, from_status, to_status, note, created_at, changed_by")
      .eq("lead_id", lead.id)
      .order("created_at", { ascending: false })
      .then(({ data }) => setHistory((data as HistoryEntry[]) ?? []));
  }, [lead.id, lead.status]);

  async function save() {
    await onChange({
      notes: notes || null,
      lost_reason: lostReason || null,
      next_followup_at: nextFollowup ? new Date(nextFollowup).toISOString() : null,
    });
    setSavedMsg("Salvo");
    setTimeout(() => setSavedMsg(null), 1500);
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-3">
        <div>
          <label className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
            Próximo follow-up
          </label>
          <input
            type="datetime-local"
            value={nextFollowup}
            onChange={(e) => setNextFollowup(e.target.value)}
            className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm"
          />
          {lead.last_contact_at && (
            <p className="text-[11px] text-muted-foreground mt-1">
              Último contato: {new Date(lead.last_contact_at).toLocaleString("pt-BR")}
            </p>
          )}
        </div>
        {lead.status === "perdido" && (
          <div>
            <label className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
              Motivo da perda
            </label>
            <input
              value={lostReason}
              onChange={(e) => setLostReason(e.target.value)}
              placeholder="Preço, timing, concorrente, sem fit…"
              className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm"
            />
          </div>
        )}
        <div>
          <label className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
            Notas internas
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm"
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={save}
            className="bg-primary text-primary-foreground px-4 py-2 text-xs uppercase tracking-[0.14em] hover:opacity-90"
          >
            Salvar
          </button>
          {savedMsg && <span className="text-xs text-emerald-600">{savedMsg}</span>}
        </div>
      </div>

      <div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
          Histórico de status
        </div>
        {!history && <p className="text-xs text-muted-foreground">Carregando…</p>}
        {history && history.length === 0 && (
          <p className="text-xs text-muted-foreground">
            Sem alterações registradas. Mude o status para começar o histórico.
          </p>
        )}
        <ol className="space-y-2">
          {history?.map((h) => (
            <li key={h.id} className="border-l-2 border-gold/40 pl-3 text-xs">
              <div className="flex items-center gap-2">
                <span className={`px-1.5 py-0.5 rounded-sm border ${STATUS_COLOR[h.to_status]}`}>
                  {STATUS_LABEL[h.to_status]}
                </span>
                {h.from_status && (
                  <span className="text-muted-foreground">← {STATUS_LABEL[h.from_status]}</span>
                )}
              </div>
              <div className="text-muted-foreground mt-0.5">
                {new Date(h.created_at).toLocaleString("pt-BR")}
              </div>
              {h.note && <div className="mt-1">{h.note}</div>}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}