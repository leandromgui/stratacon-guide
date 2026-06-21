import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

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
  status: string;
  notes: string | null;
  created_at: string;
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
  const [statusFilter, setStatusFilter] = useState<string>("all");

  useEffect(() => {
    supabase
      .from("leads")
      .select("id, name, email, whatsapp, interest, source_page, utm_source, utm_medium, utm_campaign, status, notes, created_at")
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
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  }

  async function updateStatus(id: string, status: string) {
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    if (error) {
      setError(error.message);
      return;
    }
    setLeads((prev) => prev?.map((l) => (l.id === id ? { ...l, status } : l)) ?? null);
  }

  const filtered = (leads ?? []).filter((l) => {
    if (statusFilter !== "all" && l.status !== statusFilter) return false;
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
        <div className="flex flex-wrap gap-3 items-center mb-6">
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Buscar por nome, e-mail, interesse, UTM…"
            className="flex-1 min-w-[260px] rounded-sm border border-border bg-card px-3 py-2 text-sm"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-sm border border-border bg-card px-3 py-2 text-sm"
          >
            <option value="all">Todos os status</option>
            <option value="novo">Novo</option>
            <option value="contatado">Contatado</option>
            <option value="qualificado">Qualificado</option>
            <option value="descartado">Descartado</option>
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
                <th className="text-left px-3 py-3">Origem</th>
                <th className="text-left px-3 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((l) => (
                <tr key={l.id} className="border-t border-border align-top">
                  <td className="px-3 py-3 text-xs text-muted-foreground whitespace-nowrap">
                    {new Date(l.created_at).toLocaleString("pt-BR")}
                  </td>
                  <td className="px-3 py-3 font-medium">{l.name}</td>
                  <td className="px-3 py-3 text-xs">
                    <div>{l.email}</div>
                    <div className="text-muted-foreground">{l.whatsapp}</div>
                  </td>
                  <td className="px-3 py-3 text-xs">{l.interest}</td>
                  <td className="px-3 py-3 text-xs text-muted-foreground">
                    <div>{l.source_page ?? "—"}</div>
                    {(l.utm_source || l.utm_campaign) && (
                      <div>UTM: {l.utm_source ?? "—"} / {l.utm_campaign ?? "—"}</div>
                    )}
                  </td>
                  <td className="px-3 py-3">
                    <select
                      value={l.status}
                      onChange={(e) => updateStatus(l.id, e.target.value)}
                      className="rounded-sm border border-border bg-card px-2 py-1 text-xs"
                    >
                      <option value="novo">Novo</option>
                      <option value="contatado">Contatado</option>
                      <option value="qualificado">Qualificado</option>
                      <option value="descartado">Descartado</option>
                    </select>
                  </td>
                </tr>
              ))}
              {leads && filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-3 py-8 text-center text-sm text-muted-foreground">
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