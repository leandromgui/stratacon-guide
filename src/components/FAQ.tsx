import type { ReactNode } from "react";

export interface FAQItem {
  q: string;
  a: string;
}

export function FAQ({ items, title = "Perguntas frequentes" }: { items: FAQItem[]; title?: string }): ReactNode {
  return (
    <article className="border-l-2 border-primary/60 pl-6">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-5 divide-y divide-border rounded-md border border-border bg-card">
        {items.map((it) => (
          <details key={it.q} className="group p-4">
            <summary className="cursor-pointer list-none font-medium text-card-foreground flex justify-between items-center">
              <span>{it.q}</span>
              <span className="text-primary text-xs ml-3 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
          </details>
        ))}
      </div>
    </article>
  );
}

export function faqJsonLd(items: FAQItem[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  });
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType ?? opts.name,
    areaServed: { "@type": "Country", name: "Brasil" },
    provider: {
      "@type": "AccountingService",
      name: "DCON Serviços Contábeis",
      areaServed: "BR",
      address: { "@type": "PostalAddress", addressLocality: "Goiânia", addressRegion: "GO", addressCountry: "BR" },
    },
    url: opts.url,
  });
}