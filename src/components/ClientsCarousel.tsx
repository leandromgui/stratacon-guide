import { useState } from "react";
import c1 from "@/assets/clients/client-1.png.asset.json";
import c2 from "@/assets/clients/client-2.png.asset.json";
import c3 from "@/assets/clients/client-3.png.asset.json";
import c4 from "@/assets/clients/client-4.png.asset.json";
import c5 from "@/assets/clients/client-5.png.asset.json";
import c6 from "@/assets/clients/client-6.png.asset.json";
import c7 from "@/assets/clients/client-7.png.asset.json";
import c8 from "@/assets/clients/client-8.png.asset.json";
import c9 from "@/assets/clients/client-9.png.asset.json";
import c10 from "@/assets/clients/client-10.png.asset.json";
import c11 from "@/assets/clients/client-11.png.asset.json";
import c12 from "@/assets/clients/client-12.png.asset.json";
import c13 from "@/assets/clients/client-13.png.asset.json";
import c14 from "@/assets/clients/client-14.png.asset.json";
import c15 from "@/assets/clients/client-15.png.asset.json";
import c16 from "@/assets/clients/client-16.png.asset.json";
import c17 from "@/assets/clients/client-17.png.asset.json";
import c18 from "@/assets/clients/client-18.png.asset.json";
import c19 from "@/assets/clients/client-19.png.asset.json";
import c20 from "@/assets/clients/client-20.png.asset.json";
import c21 from "@/assets/clients/client-21.png.asset.json";
import c22 from "@/assets/clients/client-22.png.asset.json";
import c23 from "@/assets/clients/client-23.png.asset.json";
import c24 from "@/assets/clients/client-24.png.asset.json";
import c25 from "@/assets/clients/client-25.png.asset.json";
import c26 from "@/assets/clients/client-26.png.asset.json";
import c27 from "@/assets/clients/client-27.png.asset.json";
import c28 from "@/assets/clients/client-28.png.asset.json";

const logos = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28];

export function ClientsCarousel() {
  // Logos cujo arquivo falhou ao carregar são removidos do carrossel,
  // evitando cards brancos vazios sem quebrar o layout.
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const valid = logos.filter((l) => !failed[l.url]);
  const loop = [...valid, ...valid];

  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="text-center mb-10">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Quem confia na DCON</div>
          <h2 className="mt-3 font-display text-2xl md:text-4xl tracking-tight">
            Empresas que confiam na DCON
          </h2>
        </div>
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
          }}
        >
          <div className="flex gap-6 animate-clients-marquee" style={{ width: "max-content" }}>
            {loop.map((logo, i) => (
              <div
                key={i}
                aria-hidden={i >= valid.length ? true : undefined}
                className="shrink-0 flex items-center justify-center bg-white border border-border rounded-sm"
                style={{ width: 200, height: 110 }}
              >
                <img
                  src={logo.url}
                  alt={
                    i >= valid.length
                      ? ""
                      : `Logotipo de empresa cliente da DCON Serviços Contábeis (${(i % valid.length) + 1} de ${valid.length})`
                  }
                  loading="lazy"
                  onError={() => setFailed((prev) => ({ ...prev, [logo.url]: true }))}
                  className="max-h-[72px] max-w-[160px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
