import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/bpo-financeiro")({
  head: () => ({
    meta: [
      { title: "BPO Financeiro | DCON Serviços Contábeis" },
      { name: "description", content: "BPO financeiro com controle, governança e visão gerencial. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:title", content: "BPO Financeiro | DCON Serviços Contábeis" },
      { property: "og:description", content: "BPO financeiro com controle, governança e visão gerencial. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:url", content: "/solucoes/bpo-financeiro" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/bpo-financeiro" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="BPO financeiro com controle, governança e visão gerencial"
      
      intent="BPO financeiro empresa, terceirização financeira"
      observation="Cross-sell natural com Contabilidade Empresarial."
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
