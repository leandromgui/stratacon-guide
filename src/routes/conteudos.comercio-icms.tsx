import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/conteudos/comercio-icms")({
  head: () => ({
    meta: [
      { title: "Conteúdos sobre Comércio, ICMS e E-commerce | DCON" },
      { name: "description", content: "Conteúdos da DCON sobre comércio, ICMS, substituição tributária, DIFAL e contabilidade para e-commerce e marketplaces." },
      { property: "og:title", content: "Conteúdos sobre Comércio, ICMS e E-commerce | DCON" },
      { property: "og:description", content: "Conteúdos da DCON sobre comércio, ICMS, substituição tributária, DIFAL e contabilidade para e-commerce e marketplaces." },
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
      intro="Conteúdos técnicos sobre comércio e icms para empresários que precisam decidir com base."
      intent="ICMS comércio, DIFAL e-commerce, ST"
      observation="Cluster: página-pilar + artigos satélites linkando para a LP/Solução correspondente."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver todos os conteúdos", to: "/conteudos" }}
      sections={[
      { h2: "Página-pilar do cluster", h3: [{"title":"Guia completo: Comércio e ICMS","body":"Artigo-mãe do cluster, com visão geral e links para os artigos satélites."}] },
      { h2: "Artigos do cluster", h3: [{"title":"[Artigo 1]","body":"Tópico aprofundado sobre o tema central."},{"title":"[Artigo 2]","body":"Caso prático ou situação recorrente do empresário."},{"title":"[Artigo 3]","body":"Erros comuns e como evitar."},{"title":"[Artigo 4]","body":"Atualização legislativa ou tendência relevante."}] },
      { h2: "Página de destino recomendada", h3: [{"title":"Solução relacionada: E-commerce","body":"Cada artigo direciona o leitor para /segmentos/e-commerce."},{"title":"CTA padrão do cluster","body":"Solicitar diagnóstico fiscal e contábil."}] },
      ]}
    />
  );
}
