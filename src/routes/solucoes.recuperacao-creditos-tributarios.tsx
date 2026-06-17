import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/recuperacao-creditos-tributarios")({
  head: () => ({
    meta: [
      { title: "Recuperação de Créditos Tributários | DCON Serviços Contábeis" },
      { name: "description", content: "Recuperação de créditos tributários com análise técnica e auditável. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:title", content: "Recuperação de Créditos Tributários | DCON Serviços Contábeis" },
      { property: "og:description", content: "Recuperação de créditos tributários com análise técnica e auditável. Atendimento consultivo da DCON em Goiânia e online." },
      { property: "og:url", content: "/solucoes/recuperacao-creditos-tributarios" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/recuperacao-creditos-tributarios" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Recuperação de créditos tributários com análise técnica e auditável"
      
      intent="recuperação de créditos tributários, ressarcimento PIS COFINS"
      observation="Alta intenção comercial."
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
