import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/regularizacao-fiscal")({
  head: () => ({
    meta: [
      { title: "Regularização Fiscal | DCON Serviços Contábeis" },
      { name: "description", content: "Regularização fiscal de empresas com pendências. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:title", content: "Regularização Fiscal | DCON Serviços Contábeis" },
      { property: "og:description", content: "Regularização fiscal de empresas com pendências. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:url", content: "/solucoes/regularizacao-fiscal" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/regularizacao-fiscal" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Regularização fiscal de empresas com pendências"
      
      intent="regularizar empresa pendências fiscais, parcelamento Receita"
      observation="Dor altíssima — landing dedicada."
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
