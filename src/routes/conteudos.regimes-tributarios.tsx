import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/conteudos/regimes-tributarios")({
  head: () => ({
    ...buildSeoHead({
      title: "Simples, Presumido e Lucro Real | Conteúdos DCON",
      description: "Como escolher entre Simples Nacional, Lucro Presumido e Lucro Real: guias e análises da DCON para decisões com segurança.",
      canonical: "/conteudos/regimes-tributarios",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Conteúdos", "item": "/conteudos"}, {"@type": "ListItem", "position": 3, "name": "Regimes Tributários", "item": "/conteudos/regimes-tributarios"}]}),
      },
    ],
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
      { h2: "Especificidades por regime", lead: "Cada regime tem página própria, com obrigações e prazos detalhados.", h3: [
        { title: "Simples Nacional", body: "Anexos, fator R, sublimites, NFS-e Nacional e exclusão do regime em /segmentos/simples-nacional." },
        { title: "Lucro Presumido", body: "Percentuais de presunção, PIS/Cofins cumulativo e a LC 224/2025 em /segmentos/lucro-presumido." },
        { title: "Lucro Real", body: "Comparação de margem efetiva e aproveitamento de créditos com apuração pelo resultado." },
      ] },
      { h2: "Página de destino recomendada", h3: [{"title":"Solução relacionada: Simples Nacional","body":"Cada artigo direciona o leitor para a página do regime correspondente."},{"title":"CTA padrão do cluster","body":"Solicitar diagnóstico fiscal e contábil."}] },
      ]}
    />
  );
}
