import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { isValidElement } from "react";
import { getCrossLinks } from "../lib/crossLinks";
import { rememberLastFaqQuestion, trackEvent } from "../lib/analytics";
import { AnimatedHeroBg } from "./AnimatedHeroBg";
import { Reveal } from "./Reveal";
import heroBg from "../assets/hero-bg.png";

const DIAGNOSTIC_WA_MESSAGE =
  "Olá, Dcon. Vim pelo site e gostaria de solicitar um diagnostico para a minha empresa.";
const DIAGNOSTIC_WA_HREF = `https://wa.me/5562992890898?text=${encodeURIComponent(DIAGNOSTIC_WA_MESSAGE)}`;

function CtaLink({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: ReactNode;
}) {
  if (to === "/diagnostico") {
    return (
      <a
        href={DIAGNOSTIC_WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export interface H3Item {
  title: string;
  body: string;
}

export interface Section {
  h2: string;
  lead?: string;
  h3?: H3Item[];
}

export interface FaqItem { q: string; a: string | ReactNode }

export type CtaVariant = "diagnostic" | "risk" | "opportunity" | "institutional";

const CTA_VARIANTS: Record<CtaVariant, {
  eyebrow: string;
  title: string;
  body: string;
  primary: { label: string; to: string };
  secondary: { label: string; to: string };
}> = {
  diagnostic: {
    eyebrow: "Próximo passo",
    title: "Solicite um diagnóstico técnico da sua empresa.",
    body: "Entrega em até 7 dias úteis. Análise fiscal, contábil, tributária, trabalhista e societária, com plano de ação acionável.",
    primary: { label: "Solicitar diagnóstico", to: "/diagnostico" },
    secondary: { label: "Falar com a DCON", to: "/contato" },
  },
  risk: {
    eyebrow: "Reduzir exposição",
    title: "Solicite uma análise de exposição fiscal e trabalhista.",
    body: "Mapeamos passivos, prazos e medidas de defesa antes que o risco vire autuação ou execução.",
    primary: { label: "Solicitar análise de exposição", to: "/diagnostico" },
    secondary: { label: "Falar com a DCON", to: "/contato" },
  },
  opportunity: {
    eyebrow: "Capturar oportunidade",
    title: "Solicite um diagnóstico de créditos e regime tributário.",
    body: "Revisamos os últimos 5 anos e simulamos cenários para identificar créditos recuperáveis e economia tributária.",
    primary: { label: "Solicitar diagnóstico de créditos", to: "/diagnostico" },
    secondary: { label: "Falar com consultor DCON", to: "/contato" },
  },
  institutional: {
    eyebrow: "Próximo passo",
    title: "Fale com a equipe técnica da DCON.",
    body: "Apresentação institucional, método de trabalho e proposta técnica sob responsabilidade do CRC do escritório.",
    primary: { label: "Falar com consultor DCON", to: "/contato" },
    secondary: { label: "Conhecer o Método DCON", to: "/metodo" },
  },
};

export interface PageScaffoldProps {
  eyebrow?: string;
  h1: string;
  lead?: string;
  intro?: string;
  audience?: string[];
  sections: Section[];
  ctaPrimary: { label: string; to: string };
  ctaSecondary?: { label: string; to: string };
  ctaTertiary?: { label: string; to: string };
  /** Citação validada do doc DCON, renderizada logo abaixo do hero. */
  respostaValidada?: string;
  observation?: string;
  intent?: string;
  children?: ReactNode;
  breadcrumbs?: { label: string; to: string }[];
  method?: H3Item[];
  technology?: H3Item[];
  risks?: H3Item[];
  documents?: string[];
  faq?: FaqItem[];
  deliverables?: H3Item[];
  relatedLinks?: { label: string; to: string; eyebrow?: string }[];
  /** Slug da página-pilar para auto-resolver relatedLinks via src/lib/crossLinks.ts */
  pillarKey?: string;
  /** Contexto do CTA de fechamento. Default: "diagnostic". */
  ctaVariant?: CtaVariant;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[11px] uppercase tracking-[0.24em] text-gold">
      {children}
    </div>
  );
}

// Paleta on-brand alinhada à Home: gold + secondary alternados.
const PANEL_ACCENTS = [
  "var(--gold)",
  "var(--secondary)",
  "var(--gold)",
  "var(--secondary)",
  "var(--gold)",
  "var(--secondary)",
] as const;

export function PageScaffold(p: PageScaffoldProps) {
  const resolvedRelated =
    p.relatedLinks ?? (p.pillarKey ? getCrossLinks(p.pillarKey) : undefined);
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <AnimatedHeroBg imageUrl={heroBg} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            {p.breadcrumbs && (
              <nav className="text-[11px] uppercase tracking-[0.2em] text-white/55 mb-6 flex flex-wrap gap-2">
                <Link to="/" className="hover:text-gold">Início</Link>
                {p.breadcrumbs.map((b) => (
                  <span key={b.to} className="flex gap-2">
                    <span className="opacity-40">/</span>
                    <Link to={b.to} className="hover:text-gold">{b.label}</Link>
                  </span>
                ))}
              </nav>
            )}
            {p.eyebrow && (
              <Reveal as="div" className="text-gold text-[11px] font-semibold uppercase tracking-[0.22em] border-l-2 border-gold pl-4">
                {p.eyebrow}
              </Reveal>
            )}
            <Reveal as="h1" delay={80} className="mt-8 md:mt-10 font-display text-4xl md:text-6xl font-light tracking-tight leading-[1.05] max-w-3xl">
              {p.h1}
            </Reveal>
            {p.lead && (
              <Reveal as="p" delay={140} className="mt-6 max-w-2xl text-lg md:text-xl font-display text-white/85 leading-snug">
                {p.lead}
              </Reveal>
            )}
            {p.intro && (
              <Reveal as="p" delay={200} className="mt-6 max-w-2xl text-[15px] md:text-[17px] leading-relaxed text-white/70">
                {p.intro}
              </Reveal>
            )}
            {p.audience && p.audience.length > 0 && (
              <Reveal as="ul" delay={260} className="mt-7 flex flex-wrap gap-2 max-w-2xl">
                {p.audience.map((a) => (
                  <li key={a} className="text-[11px] uppercase tracking-[0.16em] border border-white/25 px-3 py-1.5 text-white/75">
                    {a}
                  </li>
                ))}
              </Reveal>
            )}
            <Reveal delay={300} className="mt-9 flex flex-wrap gap-3">
              <CtaLink
                to={p.ctaPrimary.to}
                className="inline-flex items-center bg-gold px-6 py-3 text-[12px] uppercase tracking-[0.16em] font-medium text-gold-foreground hover:opacity-90"
              >
                {p.ctaPrimary.label} →
              </CtaLink>
              {p.ctaSecondary && (
                <CtaLink
                  to={p.ctaSecondary.to}
                  className="inline-flex items-center border border-white/30 px-6 py-3 text-[12px] uppercase tracking-[0.16em] hover:border-gold hover:text-gold transition-colors"
                >
                  {p.ctaSecondary.label}
                </CtaLink>
              )}
              {p.ctaTertiary && (
                <CtaLink
                  to={p.ctaTertiary.to}
                  className="inline-flex items-center border border-dashed border-white/30 px-6 py-3 text-[12px] uppercase tracking-[0.16em] hover:border-gold hover:text-gold transition-colors"
                >
                  {p.ctaTertiary.label}
                </CtaLink>
              )}
            </Reveal>
            <Reveal delay={360} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-white/50 border-t border-white/15 pt-5">
              <span><span className="text-gold">●</span> DCON CRC-GO 1202/O-5</span>
              <span className="text-white/25">/</span>
              <span>Resp. técnico CRC-GO 16.395/O-9</span>
              <span className="text-white/25">/</span>
              <span>Atendimento nacional</span>
              <span className="text-white/25">/</span>
              <span>Diagnóstico em 7 dias úteis</span>
            </Reveal>
          </div>
          <aside className="lg:col-span-4 lg:border-l lg:border-white/15 lg:pl-10 flex flex-col justify-end">
            <div className="text-[10px] uppercase tracking-[0.24em] text-white/50 mb-3">
              Responsabilidade técnica
            </div>
            <p className="text-sm text-white/75 leading-relaxed">
              Entregas conduzidas sob supervisão direta do responsável técnico, com CRC
              ativo e revisão cruzada. Atendimento em Goiânia e online em todo o Brasil.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-display text-2xl">+20</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/55">anos</div>
              </div>
              <div>
                <div className="font-display text-2xl">7d</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/55">diagnóstico</div>
              </div>
              <div>
                <div className="font-display text-2xl">BR</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/55">atende</div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {p.respostaValidada && (
        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-16 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.24em] text-gold">
                Resposta validada DCON
              </div>
              <h2 className="mt-4 font-display text-2xl tracking-tight">
                O que dizemos sobre este tema.
              </h2>
            </div>
            <p className="lg:col-span-8 text-[15px] md:text-[16px] text-foreground/85 leading-relaxed">
              {p.respostaValidada}
            </p>
          </div>
        </section>
      )}

      {/* Sections */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24 space-y-20">
        {p.sections.map((s, idx) => (
          <article key={s.h2} className="grid lg:grid-cols-12 gap-10">
            <header className="lg:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">
                {String(idx + 1).padStart(2, "0")} / {String(p.sections.length).padStart(2, "0")}
              </div>
              <h2 className="font-display text-2xl md:text-3xl tracking-tight">{s.h2}</h2>
              {s.lead && (
                <p className="mt-4 text-muted-foreground leading-relaxed text-[15px]">
                  {s.lead}
                </p>
              )}
            </header>
            {s.h3 && s.h3.length > 0 && (
              <ul className="lg:col-span-8 grid gap-px bg-border sm:grid-cols-2 border border-border">
                {s.h3.map((h, i) => (
                  <Reveal
                    key={h.title}
                    as="li"
                    delay={i * 60}
                    y={24}
                    className="panel-interactive group bg-card p-6 hover:bg-secondary hover:text-secondary-foreground"
                    style={{ ["--panel-accent" as never]: PANEL_ACCENTS[i % PANEL_ACCENTS.length] }}
                  >
                    <h3 className="font-display text-[17px] text-card-foreground group-hover:text-secondary-foreground">{h.title}</h3>
                    <p className="mt-2 text-muted-foreground text-[14px] leading-relaxed group-hover:text-secondary-foreground/80">
                      {h.body}
                    </p>
                  </Reveal>
                ))}
              </ul>
            )}
          </article>
        ))}

        {p.children}

        {p.method && p.method.length > 0 && (
          <section className="border-t border-border pt-16">
            <div className="grid lg:grid-cols-12 gap-10">
              <header className="lg:col-span-4">
                <Eyebrow>Método DCON</Eyebrow>
                <h2 className="mt-4 font-display text-3xl tracking-tight">
                  Como conduzimos cada cliente.
                </h2>
                <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
                  Quatro etapas auditáveis que transformam contabilidade em decisão.
                </p>
              </header>
              <ol className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border">
                {p.method.map((m, i) => (
                  <Reveal
                    key={m.title}
                    as="li"
                    delay={i * 80}
                    y={24}
                    className="panel-interactive group bg-card p-6 hover:bg-secondary hover:text-secondary-foreground"
                    style={{ ["--panel-accent" as never]: PANEL_ACCENTS[i % PANEL_ACCENTS.length] }}
                  >
                    <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: PANEL_ACCENTS[i % PANEL_ACCENTS.length] }}>
                      Etapa {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2 font-display text-[17px]">{m.title}</h3>
                    <p className="mt-2 text-muted-foreground text-[14px] leading-relaxed group-hover:text-secondary-foreground/80">{m.body}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </section>
        )}

        {p.deliverables && p.deliverables.length > 0 && (
          <section className="border-t border-border pt-16">
            <div className="grid lg:grid-cols-12 gap-10">
              <header className="lg:col-span-4">
                <Eyebrow>Entregáveis</Eyebrow>
                <h2 className="mt-4 font-display text-3xl tracking-tight">
                  O que você recebe ao final.
                </h2>
                <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
                  Material técnico, auditável e arquivado. Tudo o que é recomendado fica
                  documentado e justificado.
                </p>
              </header>
              <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border">
                {p.deliverables.map((d, i) => (
                  <Reveal
                    key={d.title}
                    as="li"
                    delay={i * 60}
                    y={24}
                    className="panel-interactive group bg-card p-6 hover:bg-secondary hover:text-secondary-foreground"
                    style={{ ["--panel-accent" as never]: PANEL_ACCENTS[i % PANEL_ACCENTS.length] }}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-sm" style={{ color: PANEL_ACCENTS[i % PANEL_ACCENTS.length] }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-[17px]">{d.title}</h3>
                    </div>
                    <p className="mt-2 text-muted-foreground text-[14px] leading-relaxed pl-8 group-hover:text-secondary-foreground/80">
                      {d.body}
                    </p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        )}

        {p.technology && p.technology.length > 0 && (
          <section className="border-t border-border pt-16">
            <div className="grid lg:grid-cols-12 gap-10">
              <header className="lg:col-span-4">
                <Eyebrow>Tecnologia contábil</Eyebrow>
                <h2 className="mt-4 font-display text-3xl tracking-tight">
                  Stack técnico sob responsabilidade humana.
                </h2>
              </header>
              <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border">
                {p.technology.map((t) => (
                  <li
                    key={t.title}
                    className="panel-interactive group bg-card p-6 hover:bg-secondary hover:text-secondary-foreground"
                    style={{ ["--panel-accent" as never]: "var(--gold)" }}
                  >
                    <h3 className="font-display text-[17px]">{t.title}</h3>
                    <p className="mt-2 text-muted-foreground text-[14px] leading-relaxed group-hover:text-secondary-foreground/80">{t.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {p.risks && p.risks.length > 0 && (
          <section className="border-t border-border pt-16">
            <div className="grid lg:grid-cols-12 gap-10">
              <header className="lg:col-span-4">
                <Eyebrow>Riscos sob exposição</Eyebrow>
                <h2 className="mt-4 font-display text-3xl tracking-tight">
                  O que pode estar fora de controle agora.
                </h2>
              </header>
              <ul className="lg:col-span-8 space-y-px bg-border border border-border">
                {p.risks.map((r) => (
                  <li key={r.title} className="bg-card p-6 flex gap-5">
                    <span className="font-display text-gold text-xl leading-none mt-1">!</span>
                    <div>
                      <h3 className="font-display text-[16px]">{r.title}</h3>
                      <p className="mt-1 text-muted-foreground text-[14px] leading-relaxed">{r.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {p.documents && p.documents.length > 0 && (
          <section className="border-t border-border pt-16">
            <div className="grid lg:grid-cols-12 gap-10">
              <header className="lg:col-span-4">
                <Eyebrow>Documentos analisados</Eyebrow>
                <h2 className="mt-4 font-display text-3xl tracking-tight">
                  Base documental do diagnóstico.
                </h2>
                <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
                  Cruzamos a documentação fiscal, contábil, societária e trabalhista para
                  reconstruir o que está sendo declarado e o que está exposto.
                </p>
              </header>
              <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                {p.documents.map((d) => (
                  <li key={d} className="border-b border-dashed border-border pb-2 flex gap-3">
                    <span className="text-gold">·</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {p.faq && p.faq.length > 0 && (
          <section className="border-t border-border pt-16">
            <div className="grid lg:grid-cols-12 gap-10">
              <header className="lg:col-span-4">
                <Eyebrow>Perguntas frequentes</Eyebrow>
                <h2 className="mt-4 font-display text-3xl tracking-tight">FAQ técnica.</h2>
              </header>
              <div
                className="lg:col-span-8 divide-y divide-border border-y border-border"
                onClickCapture={(e) => {
                  const target = e.target as HTMLElement;
                  const anchor = target.closest("a");
                  if (!anchor) return;
                  const details = anchor.closest("details");
                  const question = details?.dataset.faqQuestion ?? null;
                  if (question) rememberLastFaqQuestion(question);
                  trackEvent({
                    event_name: "faq_cta_click",
                    faq_question: question,
                    cta_label: anchor.textContent?.trim().slice(0, 200) ?? null,
                    cta_target: anchor.getAttribute("href"),
                  });
                }}
              >
                {p.faq.map((f) => (
                  <details
                    key={f.q}
                    data-faq-question={f.q}
                    className="group py-5"
                    onToggle={(e) => {
                      const el = e.currentTarget as HTMLDetailsElement;
                      if (!el.open) return;
                      rememberLastFaqQuestion(f.q);
                      trackEvent({ event_name: "faq_open", faq_question: f.q });
                    }}
                  >
                    <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                      <span className="font-display text-[17px] text-foreground">{f.q}</span>
                      <span className="text-gold text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-3 text-muted-foreground text-[14px] leading-relaxed pr-10">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {resolvedRelated && resolvedRelated.length > 0 && (
          <section className="border-t border-border pt-16">
            <div className="grid lg:grid-cols-12 gap-10">
              <header className="lg:col-span-4">
                <Eyebrow>Conteúdos relacionados</Eyebrow>
                <h2 className="mt-4 font-display text-3xl tracking-tight">Continue a leitura.</h2>
                <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
                  Páginas e materiais técnicos diretamente conectados a este tema.
                </p>
              </header>
              <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border">
                {resolvedRelated.map((l) => (
                  <li key={l.to} className="bg-card">
                    <Link
                      to={l.to}
                      className="panel-interactive group block p-6 hover:bg-secondary hover:text-secondary-foreground"
                      style={{ ["--panel-accent" as never]: "var(--gold)" }}
                    >
                      {l.eyebrow && (
                        <div className="text-[10px] uppercase tracking-[0.22em] text-gold mb-2">{l.eyebrow}</div>
                      )}
                      <div className="font-display text-[17px] text-card-foreground flex items-baseline gap-2">
                        {l.label} <span className="text-gold">→</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

      </section>

      {/* Closing CTA */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold">
              {CTA_VARIANTS[p.ctaVariant ?? "diagnostic"].eyebrow}
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight leading-[1.02] max-w-3xl">
              {CTA_VARIANTS[p.ctaVariant ?? "diagnostic"].title}
            </h2>
            <p className="mt-6 max-w-xl text-secondary-foreground/75 text-[15px] leading-relaxed">
              {CTA_VARIANTS[p.ctaVariant ?? "diagnostic"].body}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <CtaLink
              to={CTA_VARIANTS[p.ctaVariant ?? "diagnostic"].primary.to}
              className="inline-flex items-center bg-gold px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] text-gold-foreground hover:opacity-90"
            >
              {CTA_VARIANTS[p.ctaVariant ?? "diagnostic"].primary.label} →
            </CtaLink>
            <CtaLink
              to={CTA_VARIANTS[p.ctaVariant ?? "diagnostic"].secondary.to}
              className="inline-flex items-center border border-secondary-foreground/30 px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] hover:border-gold hover:text-gold"
            >
              {CTA_VARIANTS[p.ctaVariant ?? "diagnostic"].secondary.label}
            </CtaLink>
          </div>
        </div>
      </section>
    </div>
  );
}