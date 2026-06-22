import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { submitLead } from "../lib/leads.functions";
import { getLastFaqQuestion, getSessionId, trackEvent } from "../lib/analytics";

const ANEXOS = ["Anexo I", "Anexo II", "Anexo III", "Anexo IV", "Anexo V", "Não sei"] as const;
const FATURAMENTO = [
  "Até R$ 360 mil/ano",
  "R$ 360 mil – R$ 1,8 mi",
  "R$ 1,8 mi – R$ 3,6 mi",
  "R$ 3,6 mi – R$ 4,8 mi",
  "Acima de R$ 4,8 mi",
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(20),
  anexo: z.enum(ANEXOS, { message: "Selecione o anexo" }),
  cnae: z.string().trim().min(2, "Informe o CNAE ou atividade").max(80),
  faturamento: z.enum(FATURAMENTO, { message: "Selecione o faturamento" }),
});

export function SimplesNacionalMiniForm() {
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
      anexo: fd.get("anexo"),
      cnae: fd.get("cnae"),
      faturamento: fd.get("faturamento"),
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
    const interest = `Simples Nacional · ${parsed.data.anexo} · CNAE/Atividade: ${parsed.data.cnae} · Faturamento: ${parsed.data.faturamento}`;
    try {
      const res = await submit({
        data: {
          name: parsed.data.name,
          email: parsed.data.email,
          whatsapp: parsed.data.whatsapp,
          interest: interest.slice(0, 160),
          source_page: window.location.pathname,
          referrer: document.referrer || null,
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
          user_agent: navigator.userAgent.slice(0, 500),
          session_id: sessionId,
          last_faq_question: lastFaq,
        },
      });
      if (!res.ok) {
        setStatus("err");
        setErr(res.error);
        return;
      }
      trackEvent({
        event_name: "lead_submitted",
        faq_question: lastFaq,
        cta_label: "guia-simples-nacional-miniform",
        cta_target: "/diagnostico",
        metadata: {
          page: "conteudos",
          anexo: parsed.data.anexo,
          cnae: parsed.data.cnae,
          faturamento: parsed.data.faturamento,
        },
      });
      const msg = `Olá, sou ${parsed.data.name}. Quero diagnóstico do Simples Nacional. ${parsed.data.anexo} · CNAE ${parsed.data.cnae} · Faturamento ${parsed.data.faturamento}. E-mail: ${parsed.data.email}.`;
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

  const inputCls =
    "rounded-sm border border-border bg-card px-3 py-2.5 text-sm focus:outline-none focus:border-gold";

  return (
    <section className="border-t border-border pt-16">
      <div className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold">
            Qualificar diagnóstico
          </div>
          <h2 className="mt-4 font-display text-3xl tracking-tight">
            Diagnóstico do seu Simples em 7 dias.
          </h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Responda 3 perguntas técnicas — Anexo, CNAE/atividade e faixa de faturamento —
            e a equipe da DCON retorna com um plano de ação direcionado: revisão de regime,
            Fator R, sublimite estadual e recuperação de créditos dos últimos 5 anos.
          </p>
          <ul className="mt-6 space-y-2 text-[13px] text-muted-foreground">
            <li className="flex gap-3"><span className="text-gold">·</span> Sem custo na avaliação inicial.</li>
            <li className="flex gap-3"><span className="text-gold">·</span> Devolutiva técnica em até 7 dias úteis.</li>
            <li className="flex gap-3"><span className="text-gold">·</span> Sigilo sob responsabilidade do CRC do escritório.</li>
          </ul>
        </header>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-8 grid gap-3 sm:grid-cols-2 bg-card border border-border p-6 md:p-8"
        >
          <input name="name" placeholder="Nome" required className={inputCls} />
          <input name="email" type="email" placeholder="E-mail corporativo" required className={inputCls} />
          <input name="whatsapp" placeholder="WhatsApp" required className={inputCls} />
          <input name="cnae" placeholder="CNAE principal ou atividade" required className={inputCls} />
          <select name="anexo" required defaultValue="" className={inputCls}>
            <option value="" disabled>Anexo do Simples</option>
            {ANEXOS.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
          <select name="faturamento" required defaultValue="" className={inputCls}>
            <option value="" disabled>Faturamento anual</option>
            {FATURAMENTO.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
          <button
            type="submit"
            disabled={status === "sending"}
            className="sm:col-span-2 inline-flex justify-center items-center bg-gold px-6 py-3 text-[12px] uppercase tracking-[0.16em] font-medium text-gold-foreground hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending" ? "Enviando…" : "Solicitar diagnóstico do Simples →"}
          </button>
          {status === "err" && <p className="sm:col-span-2 text-xs text-destructive">{err}</p>}
          {status === "ok" && (
            <p className="sm:col-span-2 text-xs text-muted-foreground">
              Recebido. Estamos abrindo o WhatsApp com sua mensagem — a equipe DCON responde em horário comercial.
            </p>
          )}
          <p className="sm:col-span-2 text-[11px] text-muted-foreground/80 leading-relaxed">
            Ao enviar, você concorda com nossa{" "}
            <a href="/privacidade" className="underline hover:text-gold">Política de Privacidade</a>.
            Usamos seus dados apenas para retornar com o diagnóstico.
          </p>
        </form>
      </div>
    </section>
  );
}