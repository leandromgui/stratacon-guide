import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/departamento-pessoal")({
  head: () => ({
    meta: [
      { title: "Departamento Pessoal | DCON Serviços Contábeis" },
      { name: "description", content: "Departamento pessoal completo e em conformidade com eSocial. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:title", content: "Departamento Pessoal | DCON Serviços Contábeis" },
      { property: "og:description", content: "Departamento pessoal completo e em conformidade com eSocial. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:url", content: "/solucoes/departamento-pessoal" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/departamento-pessoal" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Departamento pessoal completo e em conformidade com eSocial"
      
      intent="departamento pessoal terceirizado, folha de pagamento"
      observation="Cluster forte de conteúdo eSocial."
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
