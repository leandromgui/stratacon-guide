import { useId, useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { getLastFaqQuestion, getSessionId, trackEvent } from "../lib/analytics";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(20),
  interest: z.string().trim().min(2).max(120),
});

const labelCls = "text-xs font-medium text-muted-foreground mb-1";
const fieldCls = "rounded-md border border-border bg-card px-3 py-2 text-sm w-full";

export function LeadCaptureForm({ page }: { page: "solucoes" | "segmentos" | "conteudos" | "diagnostico" }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "ok_no_record" | "err">("idle");
  const [err, setErr] = useState<string>("");
  const formId = useId();
  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const whatsappId = `${formId}-whatsapp`;
  const interestId = `${formId}-interest`;
  const errorId = `${formId}-error`;

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
    const sessionId = getSessionId();
    const lastFaq = getLastFaqQuestion();
    const msg = `Olá, sou ${parsed.data.name}. Tenho interesse em: ${parsed.data.interest}. E-mail: ${parsed.data.email}. WhatsApp: ${parsed.data.whatsapp}.`;
    const url = `https://wa.me/5562992890898?text=${encodeURIComponent(msg)}`;
    let insertFailed = false;
    try {
      const { error } = await supabase.from("leads").insert({
        ...parsed.data,
        source_page: window.location.pathname,
        referrer: document.referrer || null,
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        user_agent: navigator.userAgent.slice(0, 500),
        session_id: sessionId,
        last_faq_question: lastFaq,
      });
      if (error) {
        insertFailed = true;
        console.error(error);
      } else {
        trackEvent({
          event_name: "lead_submitted",
          faq_question: lastFaq,
          cta_label: parsed.data.interest,
          cta_target: "/lead",
          essential: true,
          metadata: { page },
        });
      }
    } catch (e2) {
      insertFailed = true;
      console.error(e2);
    }
    // Sempre abre o WhatsApp, mesmo se o registro falhar.
    window.open(url, "_blank", "noopener,noreferrer");
    if (insertFailed) {
      setStatus("ok_no_record");
      form.reset();
      return;
    }
    setStatus("ok");
    form.reset();
  }

  const interestLabel =
    page === "segmentos" ? "Seu segmento" : page === "conteudos" ? "Tema de interesse" : "Solução de interesse";

  return (
    <article className="border-l-2 border-primary/60 pl-6">
      <h2 id={`${formId}-heading`} className="text-2xl md:text-3xl font-semibold tracking-tight">
        Solicite uma análise técnica
      </h2>
      <p className="mt-3 text-muted-foreground">Preencha os dados e fale com a equipe da DCON.</p>
      <form
        onSubmit={onSubmit}
        aria-labelledby={`${formId}-heading`}
        noValidate
        className="mt-5 grid gap-3 sm:grid-cols-2 max-w-2xl"
      >
        <div>
          <label htmlFor={nameId} className={labelCls}>Nome</label>
          <input
            id={nameId}
            name="name"
            placeholder="Nome"
            required
            aria-required="true"
            aria-invalid={status === "err" || undefined}
            aria-describedby={status === "err" ? errorId : undefined}
            className={fieldCls}
          />
        </div>
        <div>
          <label htmlFor={emailId} className={labelCls}>E-mail</label>
          <input
            id={emailId}
            name="email"
            type="email"
            placeholder="E-mail"
            required
            aria-required="true"
            aria-invalid={status === "err" || undefined}
            aria-describedby={status === "err" ? errorId : undefined}
            className={fieldCls}
          />
        </div>
        <div>
          <label htmlFor={whatsappId} className={labelCls}>WhatsApp</label>
          <input
            id={whatsappId}
            name="whatsapp"
            placeholder="WhatsApp"
            required
            aria-required="true"
            aria-invalid={status === "err" || undefined}
            aria-describedby={status === "err" ? errorId : undefined}
            className={fieldCls}
          />
        </div>
        <div>
          <label htmlFor={interestId} className={labelCls}>{interestLabel}</label>
          <input
            id={interestId}
            name="interest"
            placeholder={interestLabel}
            required
            aria-required="true"
            aria-invalid={status === "err" || undefined}
            aria-describedby={status === "err" ? errorId : undefined}
            className={fieldCls}
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          aria-busy={status === "sending" || undefined}
          className="sm:col-span-2 inline-flex justify-center items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Enviando…" : "Enviar e abrir WhatsApp"}
        </button>
        <div className="sm:col-span-2" role="status" aria-live="polite">
          {status === "err" && <p id={errorId} className="text-xs text-destructive" role="alert">{err}</p>}
          {status === "ok" && <p className="text-xs text-muted-foreground">Recebido — abrindo WhatsApp com sua mensagem.</p>}
          {status === "ok_no_record" && <p className="text-xs text-muted-foreground">WhatsApp aberto com sua mensagem — pode enviar normalmente.</p>}
        </div>
      </form>
    </article>
  );
}
