import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { getDoc } from "../lib/dcon-content";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    ...buildSeoHead({
      title: "Diagnóstico Técnico Inicial | DCON — CRC-GO 1202",
      description: "Diagnóstico fiscal, contábil, tributário e trabalhista da DCON: cruzamento documental, parecer técnico e plano de ação em até 7 dias úteis. Sem compromisso comercial.",
      canonical: "/diagnostico",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Diagnóstico", "item": "/diagnostico"}]}),
      },
    ],
  }),
  component: Page,
});

const docDcon = getDoc(2);

function Page() {
  return (
    <PageScaffold
      eyebrow="Diagnóstico"
      h1="Diagnóstico fiscal, contábil e empresarial para identificar riscos, corrigir falhas e tomar decisões com segurança."
      intro="Antes de recuperar créditos, mudar de regime, parcelar débitos, responder à Receita ou aplicar uma tese tributária, a DCON revisa dados, documentos e obrigações para identificar o caminho mais seguro."
      intent="diagnóstico fiscal empresa, auditoria contábil preventiva"
      observation="Principal entrada de leads — referenciada em todas as páginas."
      audience={docDcon.audience}
      ctaPrimary={{ label: "Solicitar diagnóstico técnico inicial", to: "/contato" }}
      ctaSecondary={{ label: "Falar com a equipe técnica", to: "/contato" }}
      ctaTertiary={docDcon.ctas[0]}
      respostaValidada={docDcon.respostaValidada}
      sections={[
      { h2: "O que o diagnóstico analisa", h3: [
        {"title":"Fiscal","body":"Regime, XML de entrada e saída, apuração de PIS, Cofins, ICMS, ISS, IRPJ, CSLL e INSS, SPED Fiscal, EFD-Contribuições, DCTF/DCTFWeb/MIT, PGDAS-D, DEFIS, PER/DCOMP, retenções, benefícios, débitos, parcelamentos, certidões e risco de malha."},
        {"title":"Contábil","body":"ECD, ECF, balanço, balancete, DRE, lucros distribuídos, pró-labore, conciliações, saldos contábeis, patrimônio e inconsistências entre contábil e fiscal."},
        {"title":"Trabalhista e previdenciário","body":"Folha, eSocial, EFD-Reinf, DCTFWeb, rubricas, INSS, FGTS, IRRF, FAP, RAT/GILRAT, terceiros, CCT, premiações, ajuda de custo, SST, PGR, PCMSO, LTCAT e PPP."},
        {"title":"Empresarial","body":"Margem, lucro, precificação, Curva ABC, fluxo de caixa, inadimplência, ticket médio, endividamento, indicadores, valuation e capacidade de pagamento."},
      ] },
      { h2: "Como funciona", h3: [
        {"title":"1. Coleta orientada","body":"A DCON solicita documentos e acessos necessários. A qualidade do diagnóstico depende da qualidade da documentação entregue."},
        {"title":"2. Cruzamento técnico","body":"As informações são cruzadas entre obrigações acessórias, notas, folha, contabilidade, pagamentos e sistemas."},
        {"title":"3. Identificação de riscos e oportunidades","body":"Classificamos riscos fiscais, inconsistências, oportunidades de economia, créditos potenciais, problemas de regularidade, falhas de folha e impactos da Reforma."},
        {"title":"4. Devolutiva técnica","body":"A empresa recebe uma visão clara dos pontos de atenção, prioridades e próximos passos — sem promessa automática."},
      ] },
      { h2: "O que o diagnóstico NÃO é", h3: [
        {"title":"Não é promessa de crédito","body":"Recuperação só após análise documental e memória de cálculo."},
        {"title":"Não é garantia de economia","body":"Sem viabilidade técnica não há recomendação."},
        {"title":"Não substitui defesa formal","body":"Defesa exige documentação e prazo próprios."},
        {"title":"Não é atalho fiscal","body":"Não vendemos manobra: vendemos método e responsabilidade."},
      ] },
      { h2: "O que o diagnóstico pode gerar", h3: [
        {"title":"Plano de regularização","body":"Caminho documentado para resolver pendências."},
        {"title":"Revisão de regime tributário","body":"Simples, Presumido ou Real com base na operação real."},
        {"title":"Recuperação de créditos","body":"Com memória de cálculo e PER/DCOMP quando aplicável."},
        {"title":"Defesa fiscal","body":"Impugnação ou recurso administrativo bem fundamentado."},
        {"title":"Adequação à Reforma","body":"Preparação para IBS/CBS desde 2026."},
        {"title":"Reorganização patrimonial","body":"Quando há propósito, documentação e governança."},
      ] },
      { h2: "Perguntas frequentes", h3: [
        {"title":"Quanto custa?","body":"Variável conforme porte, número de CNPJs, regimes envolvidos e volume documental. A conversa preliminar e a proposta não são cobradas."},
        {"title":"Quanto tempo demora?","body":"Em até 7 dias úteis após o envio da documentação."},
        {"title":"Sou obrigado a contratar depois?","body":"Não. O diagnóstico é entregável independente, sem compromisso comercial."},
      ] },
      ]}
    />
  );
}
