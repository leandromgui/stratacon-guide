import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/departamento-fiscal")({
  head: () => ({
    meta: [
      { title: "Departamento Fiscal | DCON Serviços Contábeis" },
      { name: "description", content: "Departamento fiscal técnico e auditável. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:title", content: "Departamento Fiscal | DCON Serviços Contábeis" },
      { property: "og:description", content: "Departamento fiscal técnico e auditável. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:url", content: "/solucoes/departamento-fiscal" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/departamento-fiscal" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Departamento fiscal técnico e auditável"
      
      intent="departamento fiscal terceirizado, apuração de impostos"
      observation="Forte gancho para Recuperação de Créditos e Regularização."
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
