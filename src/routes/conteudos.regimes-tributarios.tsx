import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/conteudos/regimes-tributarios")({
  head: () => ({
    meta: [
      { title: "Regimes Tributários | Central de Conteúdo DCON" },
      { name: "description", content: "Simples Nacional, Lucro Presumido e Lucro Real explicados. Artigos técnicos da DCON Serviços Contábeis." },
      { property: "og:title", content: "Regimes Tributários | Central de Conteúdo DCON" },
      { property: "og:description", content: "Simples Nacional, Lucro Presumido e Lucro Real explicados. Artigos técnicos da DCON Serviços Contábeis." },
      { property: "og:url", content: "/conteudos/regimes-tributarios" },
    ],
    links: [{ rel: "canonical", href: "/conteudos/regimes-tributarios" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Cluster de conteúdo"
      h1="Simples Nacional, Lucro Presumido e Lucro Real explicados"
      
      intent="regime tributário melhor, comparativo regimes"
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
