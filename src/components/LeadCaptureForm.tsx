import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { submitLead } from "../lib/leads.functions";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(20),
  interest: z.string().trim().min(2).max(120),
});

export function LeadCaptureForm({ page }: { page: "solucoes" | "segmentos" | "conteudos" }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [err, setErr] = useState<string>("");
  const submit = useServerFn(submitLead);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      whatsapp: fd.get("whatsapp"),
      interest: fd.get("interest"),
    });
    if (!parsed.success) {
      setStatus("err");
      setErr(parsed.error.issues[0]?.message ?? "Dados inválidos");
      return;
    }
    setStatus("sending");
    const params = new URLSearchParams(window.location.search);
    try {
      const res = await submit({
        data: {
          ...parsed.data,
          source_page: window.location.pathname,
          referrer: document.referrer || null,
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
          user_agent: navigator.userAgent.slice(0, 500),
        },
      });
      if (!res.ok) {
        setStatus("err");
        setErr(res.error);
        return;
      }
      const msg = `Olá, sou ${parsed.data.name}. Tenho interesse em: ${parsed.data.interest}. E-mail: ${parsed.data.email}. WhatsApp: ${parsed.data.whatsapp}.`;
      const url = `https://wa.me/5562992890898?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("ok");
      form.reset();
    } catch (e2) {
      console.error(e2);
      setStatus("err");
      setErr("Falha ao enviar. Tente novamente.");
    }
  }

  return (
    <article className="border-l-2 border-primary/60 pl-6">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Solicite uma análise técnica</h2>
      <p className="mt-3 text-muted-foreground">Preencha os dados e fale com a equipe da DCON.</p>
      <form onSubmit={onSubmit} className="mt-5 grid gap-3 sm:grid-cols-2 max-w-2xl">
        <input name="name" placeholder="Nome" required className="rounded-md border border-border bg-card px-3 py-2 text-sm" />
        <input name="email" type="email" placeholder="E-mail" required className="rounded-md border border-border bg-card px-3 py-2 text-sm" />
        <input name="whatsapp" placeholder="WhatsApp" required className="rounded-md border border-border bg-card px-3 py-2 text-sm" />
        <input name="interest" placeholder={page === "segmentos" ? "Seu segmento" : page === "conteudos" ? "Tema de interesse" : "Solução de interesse"} required className="rounded-md border border-border bg-card px-3 py-2 text-sm" />
        <button
          type="submit"
          disabled={status === "sending"}
          className="sm:col-span-2 inline-flex justify-center items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Enviando…" : "Enviar e abrir WhatsApp"}
        </button>
        {status === "err" && <p className="sm:col-span-2 text-xs text-destructive">{err}</p>}
        {status === "ok" && <p className="sm:col-span-2 text-xs text-muted-foreground">Recebido — abrindo WhatsApp com sua mensagem.</p>}
      </form>
    </article>
  );
}