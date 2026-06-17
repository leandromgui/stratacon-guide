import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/conteudos/regimes-tributarios")({
  head: () => ({
    meta: [
      { title: "Simples, Presumido e Lucro Real | Conteúdos DCON" },
      { name: "description", content: "Como escolher entre Simples Nacional, Lucro Presumido e Lucro Real: guias e análises da DCON para decisões com segurança." },
      { property: "og:title", content: "Simples, Presumido e Lucro Real | Conteúdos DCON" },
      { property: "og:description", content: "Como escolher entre Simples Nacional, Lucro Presumido e Lucro Real: guias e análises da DCON para decisões com segurança." },
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
      intro="Conteúdos técnicos sobre regimes tributários para empresários que precisam decidir com base."
      intent="regime tributário melhor, comparativo regimes"
      observation="Cluster: página-pilar + artigos satélites linkando para a LP/Solução correspondente."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver todos os conteúdos", to: "/conteudos" }}
      sections={[
      { h2: "Página-pilar do cluster", h3: [{"title":"Guia completo: Regimes Tributários","body":"Artigo-mãe do cluster, com visão geral e links para os artigos satélites."}] },
      { h2: "Artigos do cluster", h3: [{"title":"[Artigo 1]","body":"Tópico aprofundado sobre o tema central."},{"title":"[Artigo 2]","body":"Caso prático ou situação recorrente do empresário."},{"title":"[Artigo 3]","body":"Erros comuns e como evitar."},{"title":"[Artigo 4]","body":"Atualização legislativa ou tendência relevante."}] },
      { h2: "Página de destino recomendada", h3: [{"title":"Solução relacionada: Simples Nacional","body":"Cada artigo direciona o leitor para /segmentos/simples-nacional."},{"title":"CTA padrão do cluster","body":"Solicitar diagnóstico fiscal e contábil."}] },
      ]}
    />
  );
}
