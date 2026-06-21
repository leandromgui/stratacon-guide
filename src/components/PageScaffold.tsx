import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export interface H3Item {
  title: string;
  body: string;
}

export interface Section {
  h2: string;
  lead?: string;
  h3?: H3Item[];
}

export interface FaqItem { q: string; a: string }

export interface PageScaffoldProps {
  eyebrow?: string;
  h1: string;
  intro?: string;
  sections: Section[];
  ctaPrimary: { label: string; to: string };
  ctaSecondary?: { label: string; to: string };
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
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[11px] uppercase tracking-[0.24em] text-gold">{children}</div>
  );
}

export function PageScaffold(p: PageScaffoldProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-secondary-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-secondary-foreground) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            {p.breadcrumbs && (
              <nav className="text-[11px] uppercase tracking-[0.2em] text-secondary-foreground/55 mb-6 flex flex-wrap gap-2">
                <Link to="/" className="hover:text-gold">Início</Link>
                {p.breadcrumbs.map((b) => (
                  <span key={b.to} className="flex gap-2">
                    <span className="opacity-40">/</span>
                    <Link to={b.to} className="hover:text-gold">{b.label}</Link>
                  </span>
                ))}
              </nav>
            )}
            {p.eyebrow && <Eyebrow>{p.eyebrow}</Eyebrow>}
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] max-w-3xl">
              {p.h1}
            </h1>
            {p.intro && (
              <p className="mt-7 max-w-2xl text-base md:text-lg text-secondary-foreground/75 leading-relaxed">
                {p.intro}
              </p>
            )}
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to={p.ctaPrimary.to}
                className="inline-flex items-center bg-gold px-6 py-3 text-[12px] uppercase tracking-[0.16em] font-medium text-gold-foreground hover:opacity-90"
              >
                {p.ctaPrimary.label} →
              </Link>
              {p.ctaSecondary && (
                <Link
                  to={p.ctaSecondary.to}
                  className="inline-flex items-center border border-secondary-foreground/30 px-6 py-3 text-[12px] uppercase tracking-[0.16em] hover:border-gold hover:text-gold"
                >
                  {p.ctaSecondary.label}
                </Link>
              )}
            </div>
          </div>
          <aside className="lg:col-span-4 lg:border-l lg:border-secondary-foreground/15 lg:pl-10 flex flex-col justify-end">
            <div className="text-[10px] uppercase tracking-[0.24em] text-secondary-foreground/50 mb-3">
              Responsabilidade técnica
            </div>
            <p className="text-sm text-secondary-foreground/75 leading-relaxed">
              Entregas conduzidas sob supervisão direta do responsável técnico, com CRC
              ativo e revisão cruzada. Atendimento em Goiânia e online em todo o Brasil.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-display text-2xl">+12</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-secondary-foreground/55">anos</div>
              </div>
              <div>
                <div className="font-display text-2xl">7d</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-secondary-foreground/55">diagnóstico</div>
              </div>
              <div>
                <div className="font-display text-2xl">BR</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-secondary-foreground/55">atende</div>
              </div>
            </div>
          </aside>
        </div>
      </section>

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
                {s.h3.map((h) => (
                  <li key={h.title} className="bg-card p-6">
                    <h3 className="font-display text-[17px] text-card-foreground">{h.title}</h3>
                    <p className="mt-2 text-muted-foreground text-[14px] leading-relaxed">
                      {h.body}
                    </p>
                  </li>
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
                  <li key={m.title} className="bg-card p-6">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
                      Etapa {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2 font-display text-[17px]">{m.title}</h3>
                    <p className="mt-2 text-muted-foreground text-[14px] leading-relaxed">{m.body}</p>
                  </li>
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
                  <li key={d.title} className="bg-card p-6">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-gold text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-[17px]">{d.title}</h3>
                    </div>
                    <p className="mt-2 text-muted-foreground text-[14px] leading-relaxed pl-8">
                      {d.body}
                    </p>
                  </li>
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
                  <li key={t.title} className="bg-card p-6">
                    <h3 className="font-display text-[17px]">{t.title}</h3>
                    <p className="mt-2 text-muted-foreground text-[14px] leading-relaxed">{t.body}</p>
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
              <div className="lg:col-span-8 divide-y divide-border border-y border-border">
                {p.faq.map((f) => (
                  <details key={f.q} className="group py-5">
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

        {(p.intent || p.observation) && (
          <aside className="rounded-sm border border-dashed border-border bg-muted/40 p-6 text-xs text-muted-foreground space-y-2">
            {p.intent && (
              <div><span className="font-medium text-foreground">Intenção de busca:</span> {p.intent}</div>
            )}
            {p.observation && (
              <div><span className="font-medium text-foreground">Observação estratégica:</span> {p.observation}</div>
            )}
          </aside>
        )}
      </section>

      {/* Closing CTA */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <Eyebrow>Próximo passo</Eyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-4xl tracking-tight max-w-2xl">
              Solicite um diagnóstico técnico da sua empresa.
            </h2>
            <p className="mt-4 max-w-xl text-secondary-foreground/70 text-[15px] leading-relaxed">
              Entrega em até 7 dias úteis. Análise fiscal, contábil, tributária, trabalhista
              e societária, com plano de ação acionável.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/diagnostico"
              className="inline-flex items-center bg-gold px-6 py-3 text-[12px] uppercase tracking-[0.16em] font-medium text-gold-foreground hover:opacity-90"
            >
              Solicitar diagnóstico →
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center border border-secondary-foreground/30 px-6 py-3 text-[12px] uppercase tracking-[0.16em] hover:border-gold hover:text-gold"
            >
              Falar com a DCON
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}