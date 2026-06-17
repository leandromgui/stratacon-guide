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
}

export function PageScaffold(p: PageScaffoldProps) {
  return (
    <div>
      <section className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          {p.eyebrow && (
            <div className="text-xs uppercase tracking-[0.18em] text-primary mb-5">
              {p.eyebrow}
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl">
            {p.h1}
          </h1>
          {p.intro && (
            <p className="mt-6 max-w-2xl text-base md:text-lg text-secondary-foreground/75">
              {p.intro}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={p.ctaPrimary.to}
              className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              {p.ctaPrimary.label}
            </Link>
            {p.ctaSecondary && (
              <Link
                to={p.ctaSecondary.to}
                className="inline-flex items-center rounded-md border border-border/40 px-5 py-3 text-sm font-medium hover:bg-secondary-foreground/5"
              >
                {p.ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24 space-y-14">
        {p.sections.map((s) => (
          <article key={s.h2} className="border-l-2 border-primary/60 pl-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {s.h2}
            </h2>
            {s.lead && (
              <p className="mt-3 max-w-3xl text-muted-foreground">{s.lead}</p>
            )}
            {s.h3 && s.h3.length > 0 && (
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {s.h3.map((h) => (
                  <li
                    key={h.title}
                    className="rounded-md border border-border bg-card p-4 text-sm"
                  >
                    <h3 className="font-medium text-card-foreground">{h.title}</h3>
                    <p className="mt-1.5 text-muted-foreground text-[13px] leading-relaxed">
                      {h.body}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}

        {p.children}

        {(p.intent || p.observation) && (
          <aside className="rounded-lg border border-dashed border-border bg-muted/40 p-6 text-xs text-muted-foreground space-y-2">
            {p.intent && (
              <div><span className="font-medium text-foreground">Intenção de busca:</span> {p.intent}</div>
            )}
            {p.observation && (
              <div><span className="font-medium text-foreground">Observação estratégica:</span> {p.observation}</div>
            )}
          </aside>
        )}
      </section>

      <section className="border-t border-border bg-accent">
        <div className="mx-auto max-w-5xl px-6 py-14 flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-primary">Próximo passo</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Solicite um diagnóstico fiscal e contábil da sua empresa
            </h2>
          </div>
          <Link
            to="/diagnostico"
            className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Solicitar diagnóstico
          </Link>
        </div>
      </section>
    </div>
  );
}