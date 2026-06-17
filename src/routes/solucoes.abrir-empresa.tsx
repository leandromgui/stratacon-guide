import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/abrir-empresa")({
  head: () => ({
    meta: [
      { title: "Abrir Empresa | DCON Serviços Contábeis" },
      { name: "description", content: "Abrir empresa com enquadramento e estrutura corretos desde o início. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:title", content: "Abrir Empresa | DCON Serviços Contábeis" },
      { property: "og:description", content: "Abrir empresa com enquadramento e estrutura corretos desde o início. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:url", content: "/solucoes/abrir-empresa" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/abrir-empresa" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Abrir empresa com enquadramento e estrutura corretos desde o início"
      
      intent="abrir empresa Goiânia, como abrir CNPJ"
      observation="Alto volume de busca local."
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
