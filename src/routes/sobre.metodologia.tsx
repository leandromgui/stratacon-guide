import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/sobre/metodologia")({
  head: () => ({
    meta: [
      { title: "Metodologia DCON | Como Conduzimos a Contabilidade da Sua Empresa" },
      { name: "description", content: "Conheça as etapas da metodologia DCON: diagnóstico, estruturação, rotina técnica e acompanhamento estratégico." },
      { property: "og:title", content: "Metodologia DCON | Como Conduzimos a Contabilidade da Sua Empresa" },
      { property: "og:description", content: "Conheça as etapas da metodologia DCON: diagnóstico, estruturação, rotina técnica e acompanhamento estratégico." },
      { property: "og:url", content: "/sobre/metodologia" },
    ],
    links: [{ rel: "canonical", href: "/sobre/metodologia" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Metodologia"
      h1="Como a DCON conduz a contabilidade da sua empresa"
      
      intent="metodologia contábil, contabilidade consultiva como funciona"
      observation="Reforça diferenciação versus 'contabilidade barata'."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Conhecer as soluções", to: "/solucoes" }}
      sections={[
      { h2: "Diagnóstico inicial", h3: ["[preencher]"] },
      { h2: "Estruturação", h3: ["[preencher]"] },
      { h2: "Rotina técnica", h3: ["[preencher]"] },
      { h2: "Acompanhamento estratégico", h3: ["[preencher]"] },
      { h2: "Ferramentas e segurança da informação", h3: ["[preencher]"] },
      ]}
    />
  );
}
