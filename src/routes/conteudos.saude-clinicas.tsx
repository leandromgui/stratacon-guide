import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/conteudos/saude-clinicas")({
  head: () => ({
    meta: [
      { title: "Conteúdos para Médicos, Clínicas e Saúde | DCON" },
      { name: "description", content: "Conteúdos da DCON para profissionais de saúde: equiparação hospitalar, fator R, PJ médica e planejamento tributário." },
      { property: "og:title", content: "Conteúdos para Médicos, Clínicas e Saúde | DCON" },
      { property: "og:description", content: "Conteúdos da DCON para profissionais de saúde: equiparação hospitalar, fator R, PJ médica e planejamento tributário." },
      { property: "og:url", content: "/conteudos/saude-clinicas" },
    ],
    links: [{ rel: "canonical", href: "/conteudos/saude-clinicas" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Cluster de conteúdo"
      h1="Conteúdos sobre contabilidade para clínicas e médicos"
      intro="Conteúdos técnicos sobre saúde, clínicas e médicos para empresários que precisam decidir com base."
      intent="contabilidade médico, clínica médica, PJ médica"
      observation="Cluster: página-pilar + artigos satélites linkando para a LP/Solução correspondente."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver todos os conteúdos", to: "/conteudos" }}
      sections={[
      { h2: "Página-pilar do cluster", h3: [{"title":"Guia completo: Saúde, Clínicas e Médicos","body":"Artigo-mãe do cluster, com visão geral e links para os artigos satélites."}] },
      { h2: "Artigos do cluster", h3: [{"title":"[Artigo 1]","body":"Tópico aprofundado sobre o tema central."},{"title":"[Artigo 2]","body":"Caso prático ou situação recorrente do empresário."},{"title":"[Artigo 3]","body":"Erros comuns e como evitar."},{"title":"[Artigo 4]","body":"Atualização legislativa ou tendência relevante."}] },
      { h2: "Página de destino recomendada", h3: [{"title":"Solução relacionada: Médicos e Clínicas","body":"Cada artigo direciona o leitor para /segmentos/medicos-clinicas."},{"title":"CTA padrão do cluster","body":"Solicitar diagnóstico fiscal e contábil."}] },
      ]}
    />
  );
}
