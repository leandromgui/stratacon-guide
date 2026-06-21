import { Link } from "@tanstack/react-router";
import { getCrossLinks } from "../lib/crossLinks";

export interface RelatedLink {
  label: string;
  to: string;
  eyebrow?: string;
}

export interface RelatedPagesProps {
  /** Lista explícita de links relacionados. */
  links?: RelatedLink[];
  /** Slug da página-pilar para auto-resolver via src/lib/crossLinks.ts. */
  pillarKey?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
}

/**
 * Bloco de "Conteúdos relacionados" reutilizável fora do PageScaffold
 * (por exemplo em landings, hubs editoriais ou na home). Usa o mesmo
 * visual do scaffold para manter consistência institucional.
 */
export function RelatedPages({
  links,
  pillarKey,
  title = "Continue a leitura.",
  eyebrow = "Conteúdos relacionados",
  description = "Páginas e materiais técnicos diretamente conectados a este tema.",
}: RelatedPagesProps) {
  const resolved = links ?? (pillarKey ? getCrossLinks(pillarKey) : []);
  if (!resolved || resolved.length === 0) return null;
  return (
    <section className="border-t border-border pt-16">
      <div className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold">{eyebrow}</div>
          <h2 className="mt-4 font-display text-3xl tracking-tight">{title}</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            {description}
          </p>
        </header>
        <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border">
          {resolved.map((l) => (
            <li key={l.to} className="bg-card">
              <Link to={l.to} className="block p-6 hover:bg-muted/40 transition-colors">
                {l.eyebrow && (
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gold mb-2">
                    {l.eyebrow}
                  </div>
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
  );
}