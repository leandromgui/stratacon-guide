import { Link } from "@tanstack/react-router";

export interface MethodBadgeProps {
  /** Texto opcional para complementar o badge. */
  note?: string;
  className?: string;
}

/**
 * Pequeno selo institucional que indica que a entrega é conduzida pelo
 * Método DCON e linka para a página-pilar /metodo. Usar dentro de páginas
 * de solução, segmento ou conteúdo para reforçar a página-pilar do método.
 */
export function MethodBadge({ note, className }: MethodBadgeProps) {
  return (
    <Link
      to="/metodo"
      className={[
        "inline-flex items-center gap-3 border border-border bg-card px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-foreground/80 hover:border-gold hover:text-foreground transition-colors",
        className ?? "",
      ].join(" ")}
    >
      <span className="text-gold">●</span>
      <span className="font-medium">Método DCON</span>
      {note && (
        <span className="hidden sm:inline text-muted-foreground normal-case tracking-normal text-[12px]">
          {note}
        </span>
      )}
      <span className="text-gold">→</span>
    </Link>
  );
}