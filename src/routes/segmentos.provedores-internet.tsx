import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { FAQ, faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { LeadCaptureForm } from "../components/LeadCaptureForm";

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

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Provedores de internet: SCM, SVA, NFCom e ICMS"
      intro="Provedor de internet não deve tributar toda receita no automático. É preciso separar tecnicamente SCM, SVA, documentação, nota fiscal e obrigação acessória — com risco e segurança calculados."
      intent="contabilidade provedor internet, ICMS SVA, NFCom provedor"
      ctaPrimary={{ label: "Revisar SCM, SVA, NFCom e ICMS", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      pillarKey="provedores-internet"
      sections={[
        { h2: "SCM x SVA", h3: [
          { title: "Separação técnica", body: "SCM é serviço de comunicação multimídia. SVA precisa ter autonomia econômica, entrega real, contrato, documentação e cobrança coerente." },
        ]},
        { h2: "Súmula 334/STJ e não incidência", h3: [
          { title: "Linguagem de cautela", body: "Não vendemos como imunidade genérica. A segregação correta depende de documentação, fatura, contrato, nota e efetiva entrega do SVA." },
        ]},
        { h2: "NFCom", h3: [
          { title: "Validação técnica", body: "Validação da NFCom, códigos, descrição, segregação, contratos e escrituração compatível." },
        ]},
        { h2: "Recuperação e risco", h3: [
          { title: "Últimos 5 anos", body: "Revisão de ICMS pago indevidamente sobre SVA quando viável, com avaliação do risco de chamar qualquer receita de SVA e do risco de autuação." },
        ]},
      ]}
    >
      <FAQ items={faqs} />
      <LeadCaptureForm page="segmentos" />
    </PageScaffold>
  );
}