import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { getDoc } from "../lib/dcon-content";
import { FAQ, faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { LeadCaptureForm } from "../components/LeadCaptureForm";
import { MethodBadge } from "../components/MethodBadge";
import { dconMethod } from "../lib/dconMethod";

const faqs: FAQItem[] = [
  { q: "Provedor de internet paga ICMS sobre tudo?", a: "Não. A Súmula 334/STJ trata a não incidência de ICMS sobre serviço de provedor de acesso à internet. Mas a segregação SCM x SVA exige contrato, documentação, fatura, entrega real do SVA e autonomia econômica — não basta nomear receita de SVA." },
  { q: "Qual a diferença entre SCM e SVA?", a: "SCM é Serviço de Comunicação Multimídia (telecomunicação, sujeito a ICMS). SVA é Serviço de Valor Adicionado e precisa ter autonomia econômica, entrega real, contrato, documentação e cobrança coerente." },
  { q: "Posso recuperar ICMS dos últimos 5 anos?", a: "Em muitos casos sim. Revisamos faturas, contratos, NFCom e segregação para identificar ICMS pago indevidamente sobre receitas de SVA — sempre com avaliação de risco de autuação." },
  { q: "O que muda com a NFCom?", a: "A NFCom exige validação de emissão, códigos, descrição, segregação de receitas, contratos e escrituração compatíveis. Erro de emissão pode comprometer a defesa de segregação SCM/SVA." },
];

export const Route = createFileRoute("/segmentos/provedores-internet")({
  head: () => ({
    meta: [
      { title: "Contabilidade para Provedores: SCM, SVA, NFCom e ICMS | DCON" },
      { name: "description", content: "Seu provedor pode estar pagando ICMS sobre receitas de SVA que não são telecomunicação. Revisão técnica de SCM, SVA, NFCom e ICMS pela DCON." },
      { property: "og:title", content: "Contabilidade para Provedores: SCM, SVA, NFCom e ICMS | DCON" },
      { property: "og:description", content: "Segregação de receitas SCM/SVA, NFCom, ICMS, ISS, recuperação dos últimos 5 anos e defesa Sefaz." },
      { property: "og:url", content: "/segmentos/provedores-internet" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/provedores-internet" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"/"},{"@type":"ListItem","position":2,"name":"Segmentos","item":"/segmentos"},{"@type":"ListItem","position":3,"name":"Provedores de Internet","item":"/segmentos/provedores-internet"}]}) },
      { type: "application/ld+json", children: serviceJsonLd({ name: "Contabilidade para Provedores de Internet", description: "Revisão de SCM/SVA, NFCom, ICMS, ISS e recuperação fiscal para ISPs.", url: "/segmentos/provedores-internet" }) },
      { type: "application/ld+json", children: faqJsonLd(faqs) },
    ],
  }),
  component: Page,
});

const docDcon = getDoc(14);

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1={docDcon.h1}
      intro={docDcon.fraseComercial}
      intent="contabilidade provedor internet, ICMS SVA, NFCom provedor"
      audience={docDcon.audience}
      ctaPrimary={docDcon.ctas[0]}
      ctaSecondary={docDcon.ctas[1]}
      ctaTertiary={docDcon.ctas[2]}
      respostaValidada={docDcon.respostaValidada}
      pillarKey="provedores-internet"
      method={dconMethod}
      ctaVariant="opportunity"
      sections={[
        { h2: "SCM x SVA", h3: [
          { title: "Separação técnica", body: "SCM é serviço de comunicação multimídia. SVA precisa ter autonomia econômica, entrega real, contrato, documentação e cobrança coerente." },
        ]},
        { h2: "Documentação que sustenta a segregação", h3: [
          { title: "Contrato e plano comercial", body: "Contrato, plano comercial, fatura, nota fiscal, entrega técnica, preço, suporte e coerência entre operação e tributação." },
          { title: "Receita segregada", body: "Receitas de SCM e SVA escrituradas e faturadas separadamente — sem mistura no mesmo item da nota." },
        ]},
        { h2: "Súmula 334/STJ e não incidência", h3: [
          { title: "Linguagem de cautela", body: "Não vendemos como imunidade genérica. A segregação correta depende de documentação, fatura, contrato, nota e efetiva entrega do SVA." },
        ]},
        { h2: "NFCom", h3: [
          { title: "Modelo documental", body: "Receitas de SCM, receitas de SVA, faturamento, sistema, integração e obrigações acessórias revisadas no padrão NFCom." },
          { title: "Risco de emissão errada", body: "Erro de emissão pode comprometer a defesa da segregação SCM/SVA em fiscalização." },
        ]},
        { h2: "Recuperação e risco", h3: [
          { title: "Últimos 5 anos", body: "Revisão de ICMS pago indevidamente sobre SVA quando viável, com avaliação do risco de chamar qualquer receita de SVA e do risco de autuação." },
          { title: "Risco de chamar tudo de SVA", body: "Separar receita apenas por economia fiscal, sem substância e documentação, cria risco maior que o benefício." },
        ]},
      ]}
    >
      <MethodBadge note="Provedores conduzidos pelo protocolo DCON" />
      <FAQ items={faqs} />
      <LeadCaptureForm page="segmentos" />
    </PageScaffold>
  );
}