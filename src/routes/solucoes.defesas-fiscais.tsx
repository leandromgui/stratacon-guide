import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { getDoc } from "../lib/dcon-content";
import { FAQ, faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { LeadCaptureForm } from "../components/LeadCaptureForm";
import { MethodBadge } from "../components/MethodBadge";
import { dconMethod } from "../lib/dconMethod";
import { buildSeoHead } from "@/lib/seo";

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
    ...buildSeoHead({
      title: "Defesas Fiscais: Impugnação, PRDI e Transação | DCON",
      description: "Antes de pagar ou parcelar uma cobrança fiscal, é preciso saber se ela está correta. Defesa técnica para empresas e pessoas físicas.",
      canonical: "/solucoes/defesas-fiscais",
    }),
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
        { h2: "Malha fiscal PJ e PER/DCOMP", lead: "Cruzamentos ECF x DCTF, EFD-Contribuições x DCTF, PGDAS-D x notas, DCTFWeb, MIT e cartas de autorregularização tratados antes da autuação.", h3: [
          { title: "Autorregularização", body: "Resposta técnica documentada antes do prazo, com revisão de declarações e fundamentação fiscal." },
          { title: "PER/DCOMP não homologada", body: "Manifestação de inconformidade com revisão de origem do crédito, memória de cálculo e prazo." },
        ]},
        { h2: "Pessoa física — malha fina", h3: [
          { title: "Intimação e prazos", body: "Apresentação de documentos, recibos, Livro Caixa, despesas médicas e dependentes na fase administrativa." },
          { title: "Notificação de Lançamento", body: "Segunda oportunidade por impugnação quando o prazo da intimação foi perdido." },
        ]},
        { h2: "Pensão alimentícia tributada", h3: [
          { title: "Restituição administrativa", body: "Quem declarou pensão como rendimento tributável pode retificar os últimos 5 anos e pedir restituição quando cabível." },
        ]},
        { h2: "Exclusão do Simples Nacional — prazo de 20 dias úteis", lead: "Receber Termo de Exclusão do Simples exige ação rápida: pode haver pagamento, parcelamento, contestação, regularização, transação ou defesa.", h3: [
          { title: "Prazo de impugnação", body: "O prazo para impugnar é de 20 dias úteis, contado da ciência do termo (Receita Federal)." },
          { title: "Caminhos possíveis", body: "Avaliação técnica entre pagamento, parcelamento, contestação, regularização, transação ou defesa administrativa, conforme a origem e a situação do débito." },
        ]},
        { h2: "LC 236/2026: novas regras nacionais do processo administrativo fiscal", lead: "A Lei Complementar 236, de 4 de setembro de 2026, alterou o Código Tributário Nacional para criar regras gerais nacionais de processo administrativo fiscal, válidas para União, Estados e Municípios. Entrou em vigor na data da publicação. Base legal: LC 236/2026, alterando a Lei 5.172/1966 (CTN).", h3: [
          { title: "Teto de multa (art. 113-A)", body: "Até 75% em regra geral; até 100% em caso de fraude, sonegação ou conluio doloso; até 150% em caso de reincidência." },
          { title: "Reduções por antecipação de pagamento (art. 142, §5º)", body: "50% no pagamento integral no prazo de impugnação; 40% no parcelamento no prazo; 30% no pagamento após o prazo, mas antes da dívida ativa; 20% no parcelamento após o prazo, mas antes da dívida ativa — com percentuais maiores para quem participa de programa de conformidade." },
          { title: "Prazos processuais unificados (art. 208-D)", body: "Impugnação, recurso voluntário e recurso especial em 20 dias úteis; embargos de declaração em 5 dias úteis; suspensão dos prazos entre 20 de dezembro e 20 de janeiro." },
          { title: "Inscrição em dívida ativa (art. 201, §3º)", body: "Prazo de 90 dias úteis em regra, até 120 para contribuinte com bom histórico, reduzido a 60 para baixo recolhimento." },
          { title: "Duplo grau municipal", body: "Municípios com mais de 100 mil habitantes passam a ser obrigados a garantir duplo grau de jurisdição no contencioso administrativo." },
          { title: "Súmulas vinculantes (art. 208-G)", body: "Súmulas vinculantes do STF e do STJ passam a vincular também o processo administrativo." },
          { title: "Adaptação de Estados e Municípios", body: "Estados e Municípios têm 2 anos para adaptar sua legislação própria; se não adaptarem, a LC 236/2026 vale diretamente." },
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