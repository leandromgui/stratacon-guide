import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/")({
  head: () => ({
    meta: [
      { title: "Soluções Contábeis e Tributárias | DCON Goiânia" },
      { name: "description", content: "Planejamento tributário, reforma tributária CBS/IBS, recuperação de créditos, defesa fiscal, holding patrimonial e valuation. DCON Serviços Contábeis — Goiânia, GO." },
      { property: "og:title", content: "Soluções Contábeis e Tributárias | DCON Goiânia" },
      { property: "og:description", content: "Planejamento tributário, reforma tributária CBS/IBS, recuperação de créditos, defesa fiscal, holding patrimonial e valuation. DCON Serviços Contábeis — Goiânia, GO." },
      { property: "og:url", content: "https://www.dcon.cnt.br/solucoes" },
    ],
    links: [{ rel: "canonical", href: "https://www.dcon.cnt.br/solucoes" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Soluções", "item": "/solucoes"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Soluções contábeis para empresas que precisam de segurança, controle e estratégia"
      intro="Da rotina fiscal ao planejamento tributário e reestruturação societária — tudo conduzido por equipe técnica."
      intent="soluções contábeis empresa, contabilidade consultiva técnica"
      
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
      { h2: "Rotina contábil e fiscal", lead: "A base segura sobre a qual qualquer decisão tributária se sustenta.", h3: [{"title":"Contabilidade Empresarial","body":"Escrituração, balanços e relatórios gerenciais com revisão técnica mensal."},{"title":"Departamento Fiscal","body":"Apuração de tributos, SPEDs e obrigações acessórias dentro do prazo e auditáveis."},{"title":"Departamento Pessoal","body":"Folha, encargos, eSocial e admissões com conformidade trabalhista."},{"title":"BPO Financeiro","body":"Rotinas financeiras, conciliações e fluxo de caixa com governança."}] },
      { h2: "Decisão tributária e patrimonial", lead: "Onde a contabilidade deixa de ser custo e vira economia.", h3: [{"title":"Planejamento Tributário","body":"Estudo comparativo de regimes e cenários com fundamento legal."},{"title":"Recuperação de Créditos","body":"Levantamento técnico de créditos pagos a maior nos últimos 5 anos."},{"title":"Holding e Patrimônio","body":"Estruturação patrimonial, sucessão e proteção dentro da lei."},{"title":"Societário e Legalização","body":"Constituições, alterações, encerramentos e governança societária."}] },
      { h2: "Saída de crises e transições", lead: "Para empresas que precisam reorganizar a casa.", h3: [{"title":"Regularização Fiscal","body":"Diagnóstico de pendências, parcelamentos e plano de compliance."},{"title":"Trocar de Contabilidade","body":"Transição técnica sem perder prazos nem desorganizar a empresa."},{"title":"Abrir Empresa","body":"Enquadramento, CNAE e regime certos desde o primeiro dia."}] },
      { h2: "Liderança técnica por trás das soluções", lead: "Toda solução consultiva da DCON é conduzida sob a liderança técnica de Leandro Matsuoka Guimarães, contador CRC-GO 16.395/O-9, sócio da DCON, formado em Ciências Contábeis, bacharel em Direito e pós-graduado em Finanças Corporativas.", h3: [{"title":"Atuação integrada","body":"Planejamento tributário, recuperação de créditos, análise de regimes, regularização, defesas administrativas, SPED, holdings, indicadores e suporte a decisões de crescimento, sucessão e reorganização."},{"title":"Método e rastreabilidade","body":"Cada entrega tem documentação, fundamento e coerência entre operação real, notas fiscais, escrituração, obrigações acessórias e decisões da administração."},{"title":"Contabilidade consultiva","body":"O papel do responsável técnico é assegurar que cada solução subsidie decisão, não apenas cumpra obrigação acessória."}] },
      ]}
    />
  );
}
