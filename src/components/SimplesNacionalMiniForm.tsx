import { useId, useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
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

type FormData = z.infer<typeof schema>;

export function SimplesNacionalMiniForm() {
  const [step, setStep] = useState<"form" | "review">("form");
  const [draft, setDraft] = useState<FormData | null>(null);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "ok_no_record" | "err">("idle");
  const [err, setErr] = useState<string>("");
  const formId = useId();
  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const whatsappId = `${formId}-whatsapp`;
  const cnaeId = `${formId}-cnae`;
  const anexoId = `${formId}-anexo`;
  const faturamentoId = `${formId}-faturamento`;
  const errorId = `${formId}-error`;
  const consentId = `${formId}-consent`;

  function onReview(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
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
    setStatus("idle");
    setErr("");
    setDraft(parsed.data);
    setStep("review");
  }

  async function onConfirm() {
    if (!draft) return;
    if (!consent) {
      setStatus("err");
      setErr("É necessário aceitar a Política de Privacidade (LGPD) para enviar.");
      return;
    }
    setStatus("sending");
    setErr("");
    const params = new URLSearchParams(window.location.search);
    const sessionId = getSessionId();
    const lastFaq = getLastFaqQuestion();
    const interest = `Simples Nacional · ${draft.anexo} · CNAE/Atividade: ${draft.cnae} · Faturamento: ${draft.faturamento}`;
    const msg = `Olá, sou ${draft.name}. Quero diagnóstico do Simples Nacional. ${draft.anexo} · CNAE ${draft.cnae} · Faturamento ${draft.faturamento}. E-mail: ${draft.email}.`;
    const url = `https://wa.me/5562992890898?text=${encodeURIComponent(msg)}`;
    let insertFailed = false;
    try {
      const { error } = await supabase.from("leads").insert({
        name: draft.name,
        email: draft.email,
        whatsapp: draft.whatsapp,
        interest: interest.slice(0, 160),
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
          cta_label: "guia-simples-nacional-miniform",
          cta_target: "/diagnostico",
          essential: true,
          metadata: {
            page: "conteudos",
            anexo: draft.anexo,
            cnae: draft.cnae,
            faturamento: draft.faturamento,
            lgpd_consent: true,
            consent_timestamp: new Date().toISOString(),
          },
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
      setDraft(null);
      setConsent(false);
      setStep("form");
      return;
    }
    setStatus("ok");
    setDraft(null);
    setConsent(false);
    setStep("form");
  }

  const inputCls =
    "rounded-sm border border-border bg-card px-3 py-2.5 text-sm w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold focus:border-gold";
  const labelCls = "text-xs font-medium text-muted-foreground mb-1 block";

  return (
    <section className="border-t border-border pt-16">
      <div className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold">
            Qualificar diagnóstico
          </div>
          <h2 className="mt-4 font-display text-3xl tracking-tight">
            Diagnóstico técnico inicial do seu Simples.
          </h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Responda 3 perguntas técnicas — Anexo, CNAE/atividade e faixa de faturamento —
            e a equipe da DCON retorna com um plano de ação direcionado: revisão de regime,
            Fator R, sublimite estadual e recuperação de créditos dos últimos 5 anos.
          </p>
          <ul className="mt-6 space-y-2 text-[13px] text-muted-foreground">
            <li className="flex gap-3"><span className="text-gold">·</span> Sem custo na avaliação inicial.</li>
            <li className="flex gap-3"><span className="text-gold">·</span> Diagnóstico técnico inicial em até 7 dias úteis após o recebimento completo dos documentos e a definição do escopo.</li>
            <li className="flex gap-3"><span className="text-gold">·</span> Sigilo sob responsabilidade do CRC do escritório.</li>
          </ul>
        </header>
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 mb-4 text-[11px] uppercase tracking-[0.22em]">
            <span className={step === "form" ? "text-gold" : "text-muted-foreground"}>
              01 / Dados
            </span>
            <span className="text-border">—</span>
            <span className={step === "review" ? "text-gold" : "text-muted-foreground"}>
              02 / Revisão e consentimento
            </span>
          </div>
          {step === "form" && (
            <form
              onSubmit={onReview}
              aria-label="Diagnóstico técnico inicial do Simples Nacional"
              noValidate
              className="grid gap-3 sm:grid-cols-2 bg-card border border-border p-6 md:p-8"
            >
              <div>
                <label htmlFor={nameId} className={labelCls}>Nome</label>
                <input
                  id={nameId}
                  name="name"
                  defaultValue={draft?.name ?? ""}
                  placeholder="Nome"
                  required
                  aria-required="true"
                  aria-invalid={status === "err" || undefined}
                  aria-describedby={status === "err" ? errorId : undefined}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor={emailId} className={labelCls}>E-mail corporativo</label>
                <input
                  id={emailId}
                  name="email"
                  type="email"
                  defaultValue={draft?.email ?? ""}
                  placeholder="E-mail corporativo"
                  required
                  aria-required="true"
                  aria-invalid={status === "err" || undefined}
                  aria-describedby={status === "err" ? errorId : undefined}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor={whatsappId} className={labelCls}>WhatsApp</label>
                <input
                  id={whatsappId}
                  name="whatsapp"
                  defaultValue={draft?.whatsapp ?? ""}
                  placeholder="WhatsApp"
                  required
                  aria-required="true"
                  aria-invalid={status === "err" || undefined}
                  aria-describedby={status === "err" ? errorId : undefined}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor={cnaeId} className={labelCls}>CNAE principal ou atividade</label>
                <input
                  id={cnaeId}
                  name="cnae"
                  defaultValue={draft?.cnae ?? ""}
                  placeholder="CNAE principal ou atividade"
                  required
                  aria-required="true"
                  aria-invalid={status === "err" || undefined}
                  aria-describedby={status === "err" ? errorId : undefined}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor={anexoId} className={labelCls}>Anexo do Simples</label>
                <select
                  id={anexoId}
                  name="anexo"
                  required
                  aria-required="true"
                  aria-invalid={status === "err" || undefined}
                  aria-describedby={status === "err" ? errorId : undefined}
                  defaultValue={draft?.anexo ?? ""}
                  className={inputCls}
                >
                  <option value="" disabled>Selecione o anexo</option>
                  {ANEXOS.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor={faturamentoId} className={labelCls}>Faturamento anual</label>
                <select
                  id={faturamentoId}
                  name="faturamento"
                  required
                  aria-required="true"
                  aria-invalid={status === "err" || undefined}
                  aria-describedby={status === "err" ? errorId : undefined}
                  defaultValue={draft?.faturamento ?? ""}
                  className={inputCls}
                >
                  <option value="" disabled>Selecione o faturamento</option>
                  {FATURAMENTO.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
              <button
                type="submit"
                className="sm:col-span-2 inline-flex justify-center items-center bg-secondary text-secondary-foreground px-6 py-3 text-[12px] uppercase tracking-[0.16em] font-medium hover:bg-gold hover:text-gold-foreground"
              >
                Revisar antes de enviar →
              </button>
              <div className="sm:col-span-2" role="status" aria-live="polite">
                {status === "err" && <p id={errorId} className="text-xs text-destructive" role="alert">{err}</p>}
                {(status === "ok" || status === "ok_no_record") && (
                  <p className="text-xs text-muted-foreground">
                    {status === "ok"
                      ? "Recebido. Estamos abrindo o WhatsApp com sua mensagem — a equipe DCON responde em horário comercial."
                      : "WhatsApp aberto com sua mensagem — a equipe DCON responde em horário comercial."}
                  </p>
                )}
              </div>
            </form>
          )}
          {step === "review" && draft && (
            <div className="bg-card border border-border p-6 md:p-8">
              <h3 className="font-display text-xl tracking-tight">Confirme antes de enviar</h3>
              <p className="mt-2 text-[13px] text-muted-foreground">
                Revise os dados que serão enviados à equipe DCON. Você pode editar antes de confirmar.
              </p>
              <dl className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-[14px]">
                <Row label="Nome" value={draft.name} />
                <Row label="E-mail" value={draft.email} />
                <Row label="WhatsApp" value={draft.whatsapp} />
                <Row label="CNAE / Atividade" value={draft.cnae} />
                <Row label="Anexo do Simples" value={draft.anexo} />
                <Row label="Faturamento anual" value={draft.faturamento} />
              </dl>
              <label htmlFor={consentId} className="mt-6 flex items-start gap-3 p-4 border border-border bg-muted/30 cursor-pointer">
                <input
                  id={consentId}
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[var(--color-gold)]"
                  aria-describedby={`${consentId}-help`}
                />
                <span id={`${consentId}-help`} className="text-[13px] text-foreground/85 leading-relaxed">
                  <strong className="font-medium">Consentimento LGPD.</strong> Autorizo a DCON Serviços
                  Contábeis a tratar meus dados pessoais (nome, e-mail, WhatsApp) e os dados da empresa
                  informados acima com a finalidade exclusiva de retornar com o diagnóstico solicitado,
                  conforme a{" "}
                  <a href="/privacidade/" className="underline hover:text-gold" target="_blank" rel="noopener noreferrer">
                    Política de Privacidade
                  </a>
                  . Posso revogar este consentimento a qualquer momento.
                </span>
              </label>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onConfirm}
                  disabled={!consent || status === "sending"}
                  className="inline-flex items-center bg-gold px-6 py-3 text-[12px] uppercase tracking-[0.16em] font-medium text-gold-foreground hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Enviando…" : "Confirmar e enviar →"}
                </button>
                <button
                  type="button"
                  onClick={() => { setStep("form"); setStatus("idle"); setErr(""); }}
                  disabled={status === "sending"}
                  className="inline-flex items-center border border-border px-6 py-3 text-[12px] uppercase tracking-[0.16em] hover:border-gold hover:text-gold"
                >
                  Editar dados
                </button>
              </div>
              <div role="status" aria-live="polite">
                {status === "err" && <p className="mt-4 text-xs text-destructive" role="alert">{err}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-dashed border-border pb-2">
      <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-foreground">{value}</dd>
    </div>
  );
}
