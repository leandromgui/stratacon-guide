import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/conteudos/comercio-icms")({
  head: () => ({
    meta: [
      { title: "Comércio e ICMS | Central de Conteúdo DCON" },
      { name: "description", content: "Conteúdos sobre comércio, ICMS, ST e e-commerce. Artigos técnicos da DCON Serviços Contábeis." },
      { property: "og:title", content: "Comércio e ICMS | Central de Conteúdo DCON" },
      { property: "og:description", content: "Conteúdos sobre comércio, ICMS, ST e e-commerce. Artigos técnicos da DCON Serviços Contábeis." },
      { property: "og:url", content: "/conteudos/comercio-icms" },
    ],
    links: [{ rel: "canonical", href: "/conteudos/comercio-icms" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Cluster de conteúdo"
      h1="Conteúdos sobre comércio, ICMS, ST e e-commerce"
      
      intent="ICMS comércio, DIFAL e-commerce, ST"
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
