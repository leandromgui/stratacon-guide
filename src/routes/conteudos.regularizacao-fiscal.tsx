import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/conteudos/regularizacao-fiscal")({
  head: () => ({
    meta: [
      { title: "Regularização Fiscal | Central de Conteúdo DCON" },
      { name: "description", content: "Conteúdos sobre regularização fiscal e parcelamentos. Artigos técnicos da DCON Serviços Contábeis." },
      { property: "og:title", content: "Regularização Fiscal | Central de Conteúdo DCON" },
      { property: "og:description", content: "Conteúdos sobre regularização fiscal e parcelamentos. Artigos técnicos da DCON Serviços Contábeis." },
      { property: "og:url", content: "/conteudos/regularizacao-fiscal" },
    ],
    links: [{ rel: "canonical", href: "/conteudos/regularizacao-fiscal" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Cluster de conteúdo"
      h1="Conteúdos sobre regularização fiscal e parcelamentos"
      intro="Conteúdos técnicos sobre regularização fiscal para empresários que precisam decidir com base."
      intent="regularizar empresa, parcelamento Receita Federal"
      observation="Cluster: página-pilar + artigos satélites linkando para a LP/Solução correspondente."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver todos os conteúdos", to: "/conteudos" }}
      sections={[
      { h2: "Página-pilar do cluster", h3: [{"title":"Guia completo: Regularização Fiscal","body":"Artigo-mãe do cluster, com visão geral e links para os artigos satélites."}] },
      { h2: "Artigos do cluster", h3: [{"title":"[Artigo 1]","body":"Tópico aprofundado sobre o tema central."},{"title":"[Artigo 2]","body":"Caso prático ou situação recorrente do empresário."},{"title":"[Artigo 3]","body":"Erros comuns e como evitar."},{"title":"[Artigo 4]","body":"Atualização legislativa ou tendência relevante."}] },
      { h2: "Página de destino recomendada", h3: [{"title":"Solução relacionada: Regularização Fiscal","body":"Cada artigo direciona o leitor para /solucoes/regularizacao-fiscal."},{"title":"CTA padrão do cluster","body":"Solicitar diagnóstico fiscal e contábil."}] },
      ]}
    />
  );
}
