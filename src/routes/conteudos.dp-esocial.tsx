import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/conteudos/dp-esocial")({
  head: () => ({
    meta: [
      { title: "Conteúdos sobre DP e eSocial | DCON Contábil" },
      { name: "description", content: "Conteúdos da DCON sobre departamento pessoal e eSocial: folha, admissões, rescisões e obrigações acessórias com segurança." },
      { property: "og:title", content: "Conteúdos sobre DP e eSocial | DCON Contábil" },
      { property: "og:description", content: "Conteúdos da DCON sobre departamento pessoal e eSocial: folha, admissões, rescisões e obrigações acessórias com segurança." },
      { property: "og:url", content: "/conteudos/dp-esocial" },
    ],
    links: [{ rel: "canonical", href: "/conteudos/dp-esocial" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Conteúdos", "item": "/conteudos"}, {"@type": "ListItem", "position": 3, "name": "DP e eSocial", "item": "/conteudos/dp-esocial"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Cluster de conteúdo"
      h1="Conteúdos sobre departamento pessoal, folha e eSocial"
      intro="Conteúdos técnicos sobre dp e esocial para empresários que precisam decidir com base."
      intent="eSocial empresa, folha de pagamento"
      observation="Cluster: página-pilar + artigos satélites linkando para a LP/Solução correspondente."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver todos os conteúdos", to: "/conteudos" }}
      sections={[
      { h2: "Página-pilar do cluster", h3: [{"title":"Guia completo: DP e eSocial","body":"Artigo-mãe do cluster, com visão geral e links para os artigos satélites."}] },
      { h2: "Artigos do cluster", h3: [{"title":"[Artigo 1]","body":"Tópico aprofundado sobre o tema central."},{"title":"[Artigo 2]","body":"Caso prático ou situação recorrente do empresário."},{"title":"[Artigo 3]","body":"Erros comuns e como evitar."},{"title":"[Artigo 4]","body":"Atualização legislativa ou tendência relevante."}] },
      { h2: "Página de destino recomendada", h3: [{"title":"Solução relacionada: Departamento Pessoal","body":"Cada artigo direciona o leitor para /solucoes/departamento-pessoal."},{"title":"CTA padrão do cluster","body":"Solicitar diagnóstico fiscal e contábil."}] },
      ]}
    />
  );
}
