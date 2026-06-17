import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/conteudos/dp-esocial")({
  head: () => ({
    meta: [
      { title: "DP e eSocial | Central de Conteúdo DCON" },
      { name: "description", content: "Conteúdos sobre departamento pessoal, folha e eSocial. Artigos técnicos da DCON Serviços Contábeis." },
      { property: "og:title", content: "DP e eSocial | Central de Conteúdo DCON" },
      { property: "og:description", content: "Conteúdos sobre departamento pessoal, folha e eSocial. Artigos técnicos da DCON Serviços Contábeis." },
      { property: "og:url", content: "/conteudos/dp-esocial" },
    ],
    links: [{ rel: "canonical", href: "/conteudos/dp-esocial" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Cluster de conteúdo"
      h1="Conteúdos sobre departamento pessoal, folha e eSocial"
      
      intent="eSocial empresa, folha de pagamento"
      observation="Cluster: página-pilar + artigos satélites linkando para a LP/Solução correspondente."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver todos os conteúdos", to: "/conteudos" }}
      sections={[
      { h2: "Página-pilar do cluster", h3: ["[título do pilar]"] },
      { h2: "Artigos do cluster", h3: ["[artigo 1]","[artigo 2]","[artigo 3]","[artigo 4]"] },
      { h2: "Páginas relacionadas no site", h3: ["[solução]","[segmento]","[LP]"] },
      ]}
    />
  );
}
