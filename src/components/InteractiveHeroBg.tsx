import { useEffect, useRef, useCallback } from "react";

interface Props {
  imageUrl: string;
}

export function InteractiveHeroBg({ imageUrl }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

  const animate = useCallback(() => {
    current.current.x = lerp(current.current.x, target.current.x, 0.08);
    current.current.y = lerp(current.current.y, target.current.y, 0.08);

    if (imgRef.current) {
      const mx = (current.current.x - 0.5) * -40; // parallax invertido
      const my = (current.current.y - 0.5) * -40;
      imgRef.current.style.transform = `translate(${mx}px, ${my}px) scale(1.08)`;
    }

    if (spotRef.current) {
      const sx = current.current.x * 100;
      const sy = current.current.y * 100;
      spotRef.current.style.background = `radial-gradient(600px circle at ${sx}% ${sy}%, rgba(229, 5, 54, 0.18), transparent 70%)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      target.current.x = (e.clientX - rect.left) / rect.width;
      target.current.y = (e.clientY - rect.top) / rect.height;
    };

    const el = wrapRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMove);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (el) el.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden">
      {/* Imagem de fundo com parallax */}
      <div
        ref={imgRef}
        className="absolute -inset-8 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      {/* Overlay escuro para legibilidade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.75) 60%, rgba(13,13,13,0.95) 100%)",
        }}
      />
      {/* Spotlight interativo que segue o mouse */}
      <div ref={spotRef} className="absolute inset-0 pointer-events-none" />
    </div>
  );
}
