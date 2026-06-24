import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/tecnologia-startups")({
  head: () => ({
    meta: [
      { title: "Contabilidade para Startups e Tech em Goiânia | DCON" },
      { name: "description", content: "Contabilidade para empresas de tecnologia e startups em Goiânia: Lei do Bem, stock options, SaaS e regime ideal com a DCON." },
      { property: "og:title", content: "Contabilidade para Startups e Tech em Goiânia | DCON" },
      { property: "og:description", content: "Contabilidade para empresas de tecnologia e startups em Goiânia: Lei do Bem, stock options, SaaS e regime ideal com a DCON." },
      { property: "og:url", content: "/segmentos/tecnologia-startups" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/tecnologia-startups" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}, {"@type": "ListItem", "position": 3, "name": "Tecnologia e Startups", "item": "/segmentos/tecnologia-startups"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para empresas de tecnologia, SaaS e startups"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de tecnologia e startups."
      intent="contabilidade startup, contabilidade SaaS, Lei do Bem"
      observation="Cluster forte para captação."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        { h2: "SaaS, ISS e regime tributário", lead: "Em tecnologia, o tributo depende de contrato, licenciamento e local de prestação — a escolha de regime acompanha a fase da empresa.", h3: [
          { title: "SaaS e licenciamento", body: "Software como serviço, licença de uso e desenvolvimento sob encomenda têm tratamento fiscal distinto — contrato e nota precisam ser coerentes." },
          { title: "ISS por município", body: "Local da prestação, código de serviço e retenção revisados — sem isso há bitributação ou perda de crédito do tomador." },
          { title: "Simples, Presumido e Real", body: "Fase, faturamento, folha, margem e necessidade de crédito de PIS/Cofins simulados antes da escolha." },
        ]},
        { h2: "Captação, cap table e M&A", h3: [
          { title: "Mútuo conversível e SAFE", body: "Reconhecimento contábil correto e tratamento tributário do conversível na rodada — sem isso a captação vira receita." },
          { title: "Cap table e alterações societárias", body: "Cada rodada refletida em contrato social, livros societários e ECD para suportar auditoria de investidor." },
          { title: "Due diligence", body: "Contabilidade, fiscal, folha, contratos e obrigações acessórias organizados para a janela curta de DD." },
        ]},
        { h2: "Equity, vesting e stock options", h3: [
          { title: "Funcionários CLT com equity", body: "Tratamento trabalhista e tributário do plano de outorga — natureza salarial ou mercantil definida por contrato e governança." },
          { title: "Sócios e cofundadores", body: "Vesting reverso, cliff e cláusulas de saída escritos antes de o conflito surgir." },
          { title: "PJ na operação", body: "Risco de vínculo (Lei 11.196/05 e jurisprudência) avaliado antes de contratar dev/produto por CNPJ." },
        ]},
        { h2: "Incentivos e exportação de software", h3: [
          { title: "Lei do Bem", body: "Lucro Real, projetos de P&D elegíveis, documentação técnica e suporte contábil para sustentar o benefício em fiscalização." },
          { title: "Exportação de serviços", body: "PIS, Cofins, ISS, contrato internacional, invoice, câmbio e resultado no exterior revisados para evitar incidência indevida." },
        ]},
        { h2: "Reforma Tributária em tech", h3: [
          { title: "IBS/CBS em serviços digitais", body: "Documentos fiscais e ERP parametrizados para 2026/2027 — emissor, código de serviço e cadastro de cliente revisados." },
          { title: "B2B no Simples", body: "Setembro/2026 é mês de decisão — startups B2B simulam competitividade e crédito para clientes antes do regime regular." },
        ]},
      ]}
    />
    />
  );
}
