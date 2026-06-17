import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/planejamento-tributario")({
  head: () => ({
    meta: [
      { title: "Planejamento Tributário | DCON Serviços Contábeis" },
      { name: "description", content: "Planejamento tributário com base técnica e segurança jurídica. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:title", content: "Planejamento Tributário | DCON Serviços Contábeis" },
      { property: "og:description", content: "Planejamento tributário com base técnica e segurança jurídica. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:url", content: "/solucoes/planejamento-tributario" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/planejamento-tributario" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Planejamento tributário com base técnica e segurança jurídica"
      
      intent="planejamento tributário empresa, reduzir impostos legalmente"
      observation="Alto ticket — cluster próprio no blog."
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
