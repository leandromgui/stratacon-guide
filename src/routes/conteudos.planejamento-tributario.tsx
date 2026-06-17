import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/conteudos/planejamento-tributario")({
  head: () => ({
    meta: [
      { title: "Conteúdos sobre Planejamento Tributário | DCON" },
      { name: "description", content: "Artigos da DCON sobre planejamento tributário: regimes, comparativos, fator R e economia fiscal com segurança jurídica." },
      { property: "og:title", content: "Conteúdos sobre Planejamento Tributário | DCON" },
      { property: "og:description", content: "Artigos da DCON sobre planejamento tributário: regimes, comparativos, fator R e economia fiscal com segurança jurídica." },
      { property: "og:url", content: "/conteudos/planejamento-tributario" },
    ],
    links: [{ rel: "canonical", href: "/conteudos/planejamento-tributario" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Cluster de conteúdo"
      h1="Conteúdos sobre planejamento tributário empresarial"
      intro="Conteúdos técnicos sobre planejamento tributário para empresários que precisam decidir com base."
      intent="planejamento tributário guia, como reduzir impostos"
      observation="Cluster: página-pilar + artigos satélites linkando para a LP/Solução correspondente."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver todos os conteúdos", to: "/conteudos" }}
      sections={[
      { h2: "Página-pilar do cluster", h3: [{"title":"Guia completo: Planejamento Tributário","body":"Artigo-mãe do cluster, com visão geral e links para os artigos satélites."}] },
      { h2: "Artigos do cluster", h3: [{"title":"[Artigo 1]","body":"Tópico aprofundado sobre o tema central."},{"title":"[Artigo 2]","body":"Caso prático ou situação recorrente do empresário."},{"title":"[Artigo 3]","body":"Erros comuns e como evitar."},{"title":"[Artigo 4]","body":"Atualização legislativa ou tendência relevante."}] },
      { h2: "Página de destino recomendada", h3: [{"title":"Solução relacionada: Planejamento Tributário","body":"Cada artigo direciona o leitor para /solucoes/planejamento-tributario."},{"title":"CTA padrão do cluster","body":"Solicitar diagnóstico fiscal e contábil."}] },
      ]}
    />
  );
}
