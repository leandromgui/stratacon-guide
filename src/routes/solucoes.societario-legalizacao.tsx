import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/societario-legalizacao")({
  head: () => ({
    meta: [
      { title: "Societário e Legalização | DCON Serviços Contábeis" },
      { name: "description", content: "Estrutura societária com segurança jurídica. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:title", content: "Societário e Legalização | DCON Serviços Contábeis" },
      { property: "og:description", content: "Estrutura societária com segurança jurídica. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:url", content: "/solucoes/societario-legalizacao" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/societario-legalizacao" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Estrutura societária com segurança jurídica"
      
      intent="alteração contratual, abertura de empresa, societário"
      observation="Ponte direta para Holding."
      ctaPrimary={{ label: "Solicitar proposta", to: "/contato" }}
      ctaSecondary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      sections={[
      { h2: "O que está incluso", h3: ["[preencher]"] },
      { h2: "Para quem é indicado", h3: ["[preencher]"] },
      { h2: "Como entregamos", h3: ["[preencher]"] },
      { h2: "Diferenciais técnicos", h3: ["[preencher]"] },
      { h2: "Perguntas frequentes", h3: ["[preencher]"] },
      ]}
    />
  );
}
