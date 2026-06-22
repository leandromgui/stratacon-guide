import { useEffect, useRef } from "react";

interface Props {
  imageUrl: string;
}

export function AnimatedHeroBg({ imageUrl }: Props) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      bg.style.transform = `scale(1.10) translate3d(${x}px, ${y}px, 0)`;
    };

    const handleLeave = () => {
      bg.style.transform = "";
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Imagem de fundo com zoom contínuo */}
      <div
        ref={bgRef}
        className="absolute -inset-[6%] bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${imageUrl})`,
          animation: "hero-zoom 18s ease-in-out infinite alternate",
        }}
      />

      {/* Glow vermelho animado */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          mixBlendMode: "screen",
          animation: "hero-glow 7s ease-in-out infinite alternate",
          background:
            "radial-gradient(circle at 70% 55%, rgba(230, 0, 55, 0.18), transparent 32%), radial-gradient(circle at 18% 22%, rgba(230, 0, 55, 0.10), transparent 24%), linear-gradient(115deg, transparent 8%, rgba(230, 0, 55, 0.08) 48%, transparent 82%)",
        }}
      />

      {/* Linhas de grade animadas */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.45,
          animation: "hero-lines 18s linear infinite",
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 18px),
            repeating-linear-gradient(0deg, rgba(230,0,55,0.018) 0px, rgba(230,0,55,0.018) 1px, transparent 1px, transparent 22px)
          `,
        }}
      />

      {/* Vinheta escura */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 42%, rgba(0,0,0,0.24) 100%), linear-gradient(90deg, rgba(0,0,0,0.35), rgba(0,0,0,0.10), rgba(0,0,0,0.24))",
        }}
      />
    </div>
  );
}
