import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/goiania")({
  head: () => ({
    meta: [
      { title: "Contador em Goiânia | DCON Serviços Contábeis" },
      { name: "description", content: "Escritório de contabilidade consultiva em Goiânia. Atendimento técnico fiscal, tributário e societário para empresas." },
      { property: "og:title", content: "Contador em Goiânia | DCON Serviços Contábeis" },
      { property: "og:description", content: "Escritório de contabilidade consultiva em Goiânia. Atendimento técnico fiscal, tributário e societário para empresas." },
      { property: "og:url", content: "/goiania" },
    ],
    links: [{ rel: "canonical", href: "/goiania" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Goiânia"
      h1="Contador em Goiânia para empresas que precisam de visão técnica"
      
      intent="contador em Goiânia, escritório contábil Goiânia, contabilidade Goiânia"
      observation="Página de SEO local. Schema LocalBusiness + NAP consistente."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
      { h2: "Atuação em Goiânia e região metropolitana", h3: ["Bairros atendidos","Setores","Modalidade presencial e remota"] },
      { h2: "Setores fortes em Goiânia", h3: ["Saúde","Comércio","Construção civil"] },
      { h2: "Por que escolher uma contabilidade consultiva local", h3: ["[preencher]"] },
      ]}
    />
  );
}
