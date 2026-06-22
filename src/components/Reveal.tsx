import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

/**
 * Revela o conteúdo conforme entra na viewport.
 * - `as`: tag wrapper (default div)
 * - `delay`: ms de atraso (para escalonar grids)
 * - `y`: deslocamento inicial em px
 * - `progress`: também expõe `--reveal-progress` (0→1) enquanto o bloco
 *    cruza a viewport, para usar em barras/preenchimentos.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  y = 24,
  progress = false,
  className = "",
  style,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  y?: number;
  progress?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);

    let raf = 0;
    function onScroll() {
      if (!progress || !el) return;
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const total = rect.height + vh;
        const p = Math.min(1, Math.max(0, (vh - rect.top) / total));
        el.style.setProperty("--reveal-progress", String(p));
      });
    }
    if (progress) {
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
    return () => {
      io.disconnect();
      if (progress) window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [progress]);

  const mergedStyle: CSSProperties = {
    transition: "opacity 700ms ease, transform 700ms cubic-bezier(.2,.7,.2,1)",
    transitionDelay: `${delay}ms`,
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : `translateY(${y}px)`,
    willChange: "opacity, transform",
    ...style,
  };

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      style={mergedStyle}
    >
      {children}
    </Tag>
  );
}

/**
 * Barra de preenchimento que cresce conforme o usuário rola pelo bloco pai.
 * O pai precisa ter `--reveal-progress` (use `<Reveal progress>`).
 */
export function ScrollFillBar({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-px w-full bg-border overflow-hidden ${className}`}>
      <div
        className="absolute inset-y-0 left-0 bg-gold"
        style={{ width: "calc(var(--reveal-progress, 0) * 100%)" }}
      />
    </div>
  );
}