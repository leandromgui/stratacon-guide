import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/holding-patrimonial")({
  head: () => ({
    meta: [
      { title: "Holding e Estrutura Patrimonial | DCON Serviços Contábeis" },
      { name: "description", content: "Holding patrimonial e familiar com estrutura técnica e tributária. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:title", content: "Holding e Estrutura Patrimonial | DCON Serviços Contábeis" },
      { property: "og:description", content: "Holding patrimonial e familiar com estrutura técnica e tributária. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:url", content: "/solucoes/holding-patrimonial" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/holding-patrimonial" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Holding patrimonial e familiar com estrutura técnica e tributária"
      
      intent="abrir holding familiar, holding patrimonial vantagens"
      observation="Ticket alto, intenção qualificada."
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
