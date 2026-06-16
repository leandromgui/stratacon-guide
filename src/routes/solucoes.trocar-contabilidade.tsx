import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/trocar-contabilidade")({
  head: () => ({
    meta: [
      { title: "Trocar de Contabilidade | DCON Serviços Contábeis" },
      { name: "description", content: "Troque de contabilidade com segurança e sem perder prazos. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:title", content: "Trocar de Contabilidade | DCON Serviços Contábeis" },
      { property: "og:description", content: "Troque de contabilidade com segurança e sem perder prazos. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:url", content: "/solucoes/trocar-contabilidade" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/trocar-contabilidade" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Troque de contabilidade com segurança e sem perder prazos"
      
      intent="trocar de contador, como mudar de contabilidade"
      observation="Conversão pura."
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
