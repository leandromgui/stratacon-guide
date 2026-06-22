import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { getDoc } from "../lib/dcon-content";
import { FAQ, faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { LeadCaptureForm } from "../components/LeadCaptureForm";
import { MethodBadge } from "../components/MethodBadge";
import { dconMethod } from "../lib/dconMethod";

const faqs: FAQItem[] = [
  { q: "Recebi uma cobrança da Receita — pago ou contesto?", a: "Antes de pagar ou parcelar, é preciso conferir se a cobrança está correta. Boa parte das autuações tem erro de base de cálculo, decadência, prescrição ou enquadramento que pode ser contestado." },
  { q: "Perdi o prazo da intimação. Acabou?", a: "Não necessariamente. Pode existir Notificação de Lançamento posterior passível de impugnação, manifestação de inconformidade, transação ou PRDI quando o débito vai para a PGFN." },
  { q: "Como encaminhar débitos para PGFN?", a: "A DCON primeiro identifica se a dívida ainda está na Receita ou já foi inscrita. Se não foi inscrita, pode ser necessário corrigir declaração, acompanhar consolidação, resolver suspensão ou avaliar se esperar a inscrição traz mais risco que benefício. Se já foi inscrita, analisamos transação, parcelamento, PRDI ou defesa." },
  { q: "O que é PRDI?", a: "Pedido de Revisão de Dívida Inscrita. Permite revisar dívida na PGFN quando há erro, pagamento, parcelamento, suspensão, decadência, prescrição ou retificação que mudou o débito." },
  { q: "Recebi termo de exclusão do Simples. O que fazer?", a: "Avaliar débitos, prazo de regularização, contestação, parcelamento e transação. Regularizar rápido pode evitar a exclusão e o aumento de carga tributária." },
  { q: "Caí na malha fina do IRPF. Como defender?", a: "Reunir documentos, recibos, comprovantes de despesas médicas e dependentes, e apresentar impugnação na Notificação de Lançamento. A defesa técnica costuma evitar autuação." },
];

export const Route = createFileRoute("/solucoes/defesas-fiscais")({
  head: () => ({
    meta: [
      { title: "Defesas Fiscais: Impugnação, PRDI e Transação | DCON" },
      { name: "description", content: "Antes de pagar ou parcelar uma cobrança fiscal, é preciso saber se ela está correta. Defesa técnica para empresas e pessoas físicas." },
      { property: "og:title", content: "Defesas Fiscais: Impugnação, PRDI e Transação | DCON" },
      { property: "og:description", content: "Impugnação, manifestação de inconformidade, defesa em malha fiscal, transação PGFN e PRDI." },
      { property: "og:url", content: "/solucoes/defesas-fiscais" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/defesas-fiscais" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"/"},{"@type":"ListItem","position":2,"name":"Soluções","item":"/solucoes"},{"@type":"ListItem","position":3,"name":"Defesas Fiscais","item":"/solucoes/defesas-fiscais"}]}) },
      { type: "application/ld+json", children: serviceJsonLd({ name: "Defesas Fiscais", description: "Impugnação, manifestação de inconformidade, defesa em malha fiscal, transação PGFN e PRDI para PJ e PF.", url: "/solucoes/defesas-fiscais" }) },
      { type: "application/ld+json", children: faqJsonLd(faqs) },
    ],
  }),
  component: Page,
});

const docDcon = getDoc(6);

function Page() {
  return (
    <PageScaffold
      eyebrow="Solução"
      h1={docDcon.h1}
      intro={docDcon.fraseComercial}
      intent="defesa fiscal, impugnação Receita Federal, PRDI PGFN"
      audience={docDcon.audience}
      ctaPrimary={docDcon.ctas[0]}
      ctaSecondary={docDcon.ctas[1]}
      ctaTertiary={docDcon.ctas[2]}
      respostaValidada={docDcon.respostaValidada}
      ctaVariant="risk"
      method={dconMethod}
      pillarKey="defesas-fiscais"
      sections={[
        { h2: "Pessoa jurídica", h3: [
          { title: "Autuação e malha fiscal", body: "Auto de infração, intimação, notificação de lançamento, malha, carta de autorregularização e exclusão do Simples." },
          { title: "Impugnação e inconformidade", body: "Resposta técnica fundamentada em PGDAS-D, EFD, DCTF, MIT, SPED e PER/DCOMP glosados." },
        ]},
        { h2: "PGFN, transação e PRDI", h3: [
          { title: "Encaminhamento para PGFN", body: "Débito que ainda não foi inscrito pode exigir análise da origem na Receita, correção de declaração, consolidação ou acompanhamento antes da inscrição. Esperar a PGFN pode trazer encargo, Cadin, protesto e restrição de certidão." },
          { title: "Transação tributária", body: "Depende de débito inscrito e análise de capacidade de pagamento." },
          { title: "PRDI", body: "Revisão de dívida inscrita quando há erro, pagamento, parcelamento, suspensão, decadência, prescrição ou retificação." },
        ]},
        { h2: "Pessoa física — malha fina", h3: [
          { title: "Intimação e prazos", body: "Apresentação de documentos, recibos, Livro Caixa, despesas médicas e dependentes na fase administrativa." },
          { title: "Notificação de Lançamento", body: "Segunda oportunidade por impugnação quando o prazo da intimação foi perdido." },
        ]},
        { h2: "Pensão alimentícia tributada", h3: [
          { title: "Restituição administrativa", body: "Quem declarou pensão como rendimento tributável pode retificar os últimos 5 anos e pedir restituição quando cabível." },
        ]},
        { h2: "Termo de Exclusão do Simples e Falso Simples", h3: [
          { title: "Termo de Exclusão", body: "Contestação no prazo, parcelamento e manutenção do regime para evitar aumento de carga." },
          { title: "Falso Simples", body: "Empresa informada como Simples no eSocial sem enquadramento correto pode gerar CPP e terceiros em DCTFWeb." },
        ]},
      ]}
    >
      <MethodBadge note="Defesa fiscal conduzida pelo protocolo DCON" />
      <FAQ items={faqs} />
      <LeadCaptureForm page="solucoes" />
    </PageScaffold>
  );
}