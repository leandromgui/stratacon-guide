import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Fale com a DCON | Contabilidade em Goiânia" },
      { name: "description", content: "Solicite uma análise da sua empresa com a DCON. Contabilidade consultiva em Goiânia e atendimento online em todo o Brasil. WhatsApp, e-mail e telefone." },
      { property: "og:title", content: "Fale com a DCON | Contabilidade em Goiânia" },
      { property: "og:description", content: "Solicite uma análise da sua empresa com a DCON. Contabilidade consultiva em Goiânia e atendimento online em todo o Brasil. WhatsApp, e-mail e telefone." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Contato", "item": "/contato"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Contato"
      h1="Fale com a DCON"
      intro="Atendimento consultivo presencial em Goiânia e online em todo o Brasil."
      intent="contato DCON contabilidade, contador Goiânia"
      observation="Schema LocalBusiness; integrar Google Business Profile."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}

      sections={[
      { h2: "Solicite uma análise da sua empresa", h3: [{"title":"Diagnóstico fiscal","body":"Revisão técnica de apurações, SPEDs e classificação."},{"title":"Diagnóstico contábil","body":"Análise de escrituração e fechamentos."},{"title":"Diagnóstico tributário","body":"Comparativo de regime e oportunidades."}] },
      { h2: "Atendimento em Goiânia e online", h3: [{"title":"Goiânia","body":"Encontros presenciais em horário comercial."},{"title":"Online","body":"Atendimento remoto em todo o Brasil."},{"title":"Reuniões","body":"Por videoconferência, agendadas com responsável técnico."}] },
      { h2: "Canais", h3: [{"title":"WhatsApp","body":"(62) 99289-0898 — atendimento direto para clientes e novos contatos."},{"title":"E-mail","body":"contato@dcon.cnt.br"},{"title":"Telefone","body":"(62) 99289-0898"}] },
      ]}
    >
      <section className="border-t border-border pt-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <header className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Endereço</div>
            <h2 className="font-display text-2xl md:text-3xl tracking-tight">Presença física em Goiânia</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-[15px]">
              R. 89-A, nº 51 — St. Sul, Goiânia — GO, 74093-150
            </p>
          </header>
          <div className="lg:col-span-8 space-y-4">
            <div className="aspect-[16/10] w-full overflow-hidden border border-border bg-card">
              <iframe
                title="DCON Serviços Contábeis — R. 89-A, nº 51, Setor Sul, Goiânia"
                src="https://www.google.com/maps?q=Dcon+Servi%C3%A7os+Cont%C3%A1beis,+R.+89-A,+51+-+Setor+Sul,+Goi%C3%A2nia+-+GO&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.google.com/maps/place/Dcon+Servi%C3%A7os+Cont%C3%A1beis/data=!4m2!3m1!1s0x0:0xd8fc177d850a4b61?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-card px-6 py-4 text-[14px] hover:border-gold hover:text-gold transition-colors"
            >
              <span>Abrir no Google Maps</span>
              <span className="text-gold">→</span>
            </a>
          </div>
        </div>
      </section>
    </PageScaffold>
  );
}
