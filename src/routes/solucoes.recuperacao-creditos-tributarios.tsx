import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { MethodBadge } from "../components/MethodBadge";
import { dconMethod } from "../lib/dconMethod";

const faqs: FAQItem[] = [
  { q: "Que tributos podem ser recuperados?", a: "PIS/COFINS (exclusão do ICMS da base, insumos, créditos extemporâneos), INSS sobre verbas indenizatórias, ICMS-ST recolhido a maior, crédito presumido não aproveitado e tributos pagos com erro de base ou alíquota nos últimos 5 anos." },
  { q: "Trabalham por êxito ou por hora?", a: "Para recuperação trabalhamos por êxito — a empresa não paga se não recuperar. Para contencioso de defesa fiscal o modelo é definido caso a caso, conforme escopo e instância." },
  { q: "Que risco a empresa corre ao recuperar crédito?", a: "Risco controlado quando a tese é consolidada e bem documentada. A DCON só conduz com base em jurisprudência firme e fundamentação auditável; cada cálculo fica rastreável para suportar fiscalização." },
  { q: "Em quanto tempo o crédito é aproveitado?", a: "Compensação via PER/DCOMP costuma ser aproveitada em semanas após a homologação técnica. Restituição em espécie ou via judicial varia conforme instância e demanda processual." },
  { q: "Vocês atuam só em recuperação ou também em contencioso?", a: "Ambos. Conduzimos recuperação administrativa de créditos e defesa fiscal (impugnação, recurso, manifestação de inconformidade, PRDI e transação) para PJ e PF." },
  { q: "Empresa do Simples também recupera?", a: "Em casos específicos sim, especialmente ICMS-ST e tributos pagos com erro. A análise de viabilidade é feita antes de qualquer cobrança." },
];

export const Route = createFileRoute("/solucoes/recuperacao-creditos-tributarios")({
  head: () => ({
    meta: [
      { title: "Recuperação de Créditos e Contencioso Tributário | DCON" },
      { name: "description", content: "Levantamento técnico de tributos pagos a maior nos últimos 5 anos e condução de contencioso administrativo. Tese consolidada, trabalho por êxito." },
      { property: "og:title", content: "Recuperação de Créditos e Contencioso Tributário | DCON" },
      { property: "og:description", content: "PIS/COFINS, INSS, ICMS-ST e mais. Levantamento técnico auditável e contencioso administrativo." },
      { property: "og:url", content: "/solucoes/recuperacao-creditos-tributarios" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/recuperacao-creditos-tributarios" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"/"},{"@type":"ListItem","position":2,"name":"Soluções","item":"/solucoes"},{"@type":"ListItem","position":3,"name":"Recuperação de Créditos","item":"/solucoes/recuperacao-creditos-tributarios"}]}) },
      { type: "application/ld+json", children: serviceJsonLd({ name: "Recuperação de Créditos e Contencioso Tributário", description: "Levantamento técnico de tributos pagos a maior nos últimos 5 anos e condução de defesa administrativa.", url: "/solucoes/recuperacao-creditos-tributarios" }) },
      { type: "application/ld+json", children: faqJsonLd(faqs) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções · Recuperação e contencioso"
      h1="Recuperação de créditos e contencioso administrativo tributário."
      intro="Levantamento técnico de tributos pagos a maior nos últimos cinco anos, com fundamento legal e trilha auditável. Condução de impugnação, manifestação de inconformidade, transação e PRDI."
      breadcrumbs={[{ label: "Soluções", to: "/solucoes" }, { label: "Recuperação de Créditos", to: "/solucoes/recuperacao-creditos-tributarios" }]}
      ctaPrimary={{ label: "Solicitar análise gratuita", to: "/contato" }}
      ctaSecondary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaVariant="opportunity"
      method={dconMethod}
      pillarKey="recuperacao-creditos-tributarios"
      sections={[
        { h2: "Escopo da recuperação", lead: "Teses consolidadas trabalhadas com fundamentação auditável para suportar qualquer revisão fiscal.", h3: [
          { title: "PIS e COFINS", body: "Exclusão do ICMS da base, créditos sobre insumos, frete entre estabelecimentos e créditos extemporâneos." },
          { title: "INSS sobre folha", body: "Verbas indenizatórias sem natureza salarial — aviso prévio indenizado, terço de férias e auxílios." },
          { title: "ICMS-ST", body: "ST recolhida a maior em operações de varejo, com base de cálculo presumida superior à efetiva." },
          { title: "Crédito presumido estadual", body: "Benefícios fiscais não aproveitados ou aproveitados parcialmente na apuração." },
          { title: "IRPJ/CSLL", body: "Revisão de adições, exclusões, prejuízo fiscal, base negativa e benefícios não aproveitados." },
          { title: "Erros de base e alíquota", body: "Tributos recolhidos com base ou alíquota incorreta nos últimos 5 anos." },
        ]},
        { h2: "Escopo do contencioso", lead: "Defesa administrativa em PJ e PF quando a cobrança fiscal precisa ser conferida antes de paga.", h3: [
          { title: "Impugnação e recurso", body: "Resposta técnica fundamentada em PGDAS-D, EFD, DCTF, MIT, SPED e PER/DCOMP glosados." },
          { title: "Manifestação de inconformidade", body: "Defesa contra glosa de PER/DCOMP e indeferimento administrativo." },
          { title: "Transação tributária", body: "Avaliação técnica para débitos inscritos em PGFN, com cálculo de descontos e capacidade de pagamento." },
          { title: "PRDI", body: "Revisão de dívida inscrita quando há erro, pagamento, parcelamento, decadência, prescrição ou retificação." },
          { title: "Defesa em malha fiscal PF", body: "Apresentação de documentos, recibos, despesas médicas, dependentes e Livro Caixa." },
          { title: "Termo de Exclusão do Simples", body: "Contestação no prazo para evitar exclusão e mudança retroativa de regime." },
        ]},
      ]}
      deliverables={[
        { title: "Estudo de viabilidade gratuito", body: "Análise prévia para confirmar se há crédito ou tese de defesa antes de qualquer contratação." },
        { title: "Memória de cálculo auditável", body: "Reconstituição completa das bases, alíquotas e fundamentação legal de cada valor pleiteado." },
        { title: "Parecer técnico jurídico-contábil", body: "Documento com fundamento legal, jurisprudência aplicável e justificativa de cada decisão técnica." },
        { title: "Petições e PER/DCOMP", body: "Protocolo administrativo conduzido pela DCON, da minuta ao acompanhamento até a homologação." },
        { title: "Acompanhamento processual", body: "Acompanhamento da tramitação no órgão competente, com respostas técnicas a intimações." },
        { title: "Plano de aproveitamento", body: "Para créditos: cronograma de compensação ou restituição com revisão das apurações futuras." },
      ]}
      risks={[
        { title: "Tese sem fundamento consolidado", body: "Recuperar com base em tese frágil gera glosa, multa qualificada e devolução com encargos." },
        { title: "Documentação insuficiente", body: "Sem memória de cálculo auditável, o crédito é indeferido na primeira revisão e o tempo investido é perdido." },
        { title: "Perder prazo de defesa", body: "Cada autuação tem janela curta de impugnação. Perdido o prazo, o débito vira definitivo." },
        { title: "Pagar antes de conferir", body: "Pagar ou parcelar sem análise técnica extingue defesas possíveis e dinheiro que poderia voltar ao caixa." },
        { title: "Aderir a transação inadequada", body: "Transação errada compromete o caixa por anos sem necessariamente extinguir o passivo." },
      ]}
      faq={faqs}
    >
      <MethodBadge note="Recuperação conduzida pelo protocolo DCON" />
    </PageScaffold>
  );
}