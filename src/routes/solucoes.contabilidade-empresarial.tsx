import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/contabilidade-empresarial")({
  head: () => ({
    meta: [
      { title: "Contabilidade Empresarial | DCON Serviços Contábeis" },
      { name: "description", content: "Contabilidade empresarial com visão técnica e estratégica. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:title", content: "Contabilidade Empresarial | DCON Serviços Contábeis" },
      { property: "og:description", content: "Contabilidade empresarial com visão técnica e estratégica. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:url", content: "/solucoes/contabilidade-empresarial" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/contabilidade-empresarial" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Contabilidade empresarial com visão técnica e estratégica"
      
      intent="contabilidade para empresas, escritório contábil empresarial Goiânia"
      observation="Página-mãe que distribui para Segmentos e Regimes."
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
