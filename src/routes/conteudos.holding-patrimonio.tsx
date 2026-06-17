import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/conteudos/holding-patrimonio")({
  head: () => ({
    meta: [
      { title: "Conteúdos sobre Holding e Patrimônio | DCON" },
      { name: "description", content: "Conteúdos da DCON sobre holding patrimonial, familiar e sucessão: proteção, eficiência tributária e estruturação." },
      { property: "og:title", content: "Conteúdos sobre Holding e Patrimônio | DCON" },
      { property: "og:description", content: "Conteúdos da DCON sobre holding patrimonial, familiar e sucessão: proteção, eficiência tributária e estruturação." },
      { property: "og:url", content: "/conteudos/holding-patrimonio" },
    ],
    links: [{ rel: "canonical", href: "/conteudos/holding-patrimonio" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Cluster de conteúdo"
      h1="Conteúdos sobre holding familiar, patrimonial e sucessão"
      intro="Conteúdos técnicos sobre holding e patrimônio para empresários que precisam decidir com base."
      intent="holding familiar, holding patrimonial, sucessão"
      observation="Cluster: página-pilar + artigos satélites linkando para a LP/Solução correspondente."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver todos os conteúdos", to: "/conteudos" }}
      sections={[
      { h2: "Página-pilar do cluster", h3: [{"title":"Guia completo: Holding e Patrimônio","body":"Artigo-mãe do cluster, com visão geral e links para os artigos satélites."}] },
      { h2: "Artigos do cluster", h3: [{"title":"[Artigo 1]","body":"Tópico aprofundado sobre o tema central."},{"title":"[Artigo 2]","body":"Caso prático ou situação recorrente do empresário."},{"title":"[Artigo 3]","body":"Erros comuns e como evitar."},{"title":"[Artigo 4]","body":"Atualização legislativa ou tendência relevante."}] },
      { h2: "Página de destino recomendada", h3: [{"title":"Solução relacionada: Holding Patrimonial","body":"Cada artigo direciona o leitor para /solucoes/holding-patrimonial."},{"title":"CTA padrão do cluster","body":"Solicitar diagnóstico fiscal e contábil."}] },
      ]}
    />
  );
}
