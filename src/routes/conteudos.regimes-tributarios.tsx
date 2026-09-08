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
      { h2: "Simples Nacional: NFS-e Nacional e calendário de 2026/2027", lead: "Datas e efeitos conforme a Resolução CGSN nº 191/2026.", h3: [
        { title: "NFS-e Nacional prorrogada para 01/11/2026", body: "A Resolução CGSN nº 191/2026 prorrogou a obrigatoriedade da NFS-e Nacional para ME e EPP do Simples Nacional para 01/11/2026." },
        { title: "CBS/IBS para optantes do Simples", body: "As regras de CBS/IBS para optantes do Simples passam a produzir efeitos a partir de 01/01/2027." },
        { title: "Opção pelo Simples para 2027", body: "A opção pelo Simples Nacional para 2027 deve ser feita entre 01/09/2026 e 30/09/2026." },
      ] },
      { h2: "Exclusão do Simples Nacional — prazo de 20 dias úteis", lead: "Receber Termo de Exclusão do Simples exige ação rápida: pode haver pagamento, parcelamento, contestação, regularização, transação ou defesa.", h3: [
        { title: "Prazo de impugnação", body: "O prazo para impugnar é de 20 dias úteis, contado da ciência do termo (Receita Federal)." },
        { title: "Análise técnica antes de decidir", body: "Cada caminho — pagamento, parcelamento, contestação, regularização, transação ou defesa — depende da origem do débito e da situação cadastral da empresa." },
      ] },
      { h2: "Atenção: LC 224/2025 e o acréscimo na presunção", lead: "A LC 224/2025 impacta empresas no Lucro Presumido com receita acima de R$ 5 milhões ao ano ou R$ 1,25 milhão por trimestre.", h3: [
        { title: "Acréscimo de 10% sobre a presunção", body: "Acréscimo de 10% sobre os percentuais de presunção, aplicado sobre a parcela excedente." },
        { title: "Exemplos de percentuais", body: "Comércio/indústria: 8% vira 8,8% no excedente. Serviços em geral: 32% vira 35,2% no excedente." },
        { title: "Vigência", body: "Aplicação desde 01/01/2026 (IRPJ) e 01/04/2026 (demais tributos). Base legal: LC 224/2025." },
      ] },
      { h2: "Página de destino recomendada", h3: [{"title":"Solução relacionada: Simples Nacional","body":"Cada artigo direciona o leitor para /segmentos/simples-nacional."},{"title":"CTA padrão do cluster","body":"Solicitar diagnóstico fiscal e contábil."}] },
      ]}
    />
  );
}
