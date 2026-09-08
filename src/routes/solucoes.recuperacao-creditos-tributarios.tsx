import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { getDoc } from "../lib/dcon-content";
import { faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { MethodBadge } from "../components/MethodBadge";
import { dconMethod } from "../lib/dconMethod";
import { buildSeoHead } from "@/lib/seo";

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
    ...buildSeoHead({
      title: "Recuperação de Créditos e Contencioso Tributário | DCON",
      description: "Levantamento técnico de tributos pagos a maior nos últimos 5 anos e condução de contencioso administrativo. Tese consolidada, trabalho por êxito.",
      canonical: "/solucoes/recuperacao-creditos-tributarios",
    }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"/"},{"@type":"ListItem","position":2,"name":"Soluções","item":"/solucoes"},{"@type":"ListItem","position":3,"name":"Recuperação de Créditos","item":"/solucoes/recuperacao-creditos-tributarios"}]}) },
      { type: "application/ld+json", children: serviceJsonLd({ name: "Recuperação de Créditos e Contencioso Tributário", description: "Levantamento técnico de tributos pagos a maior nos últimos 5 anos e condução de defesa administrativa.", url: "/solucoes/recuperacao-creditos-tributarios" }) },
      { type: "application/ld+json", children: faqJsonLd(faqs) },
    ],
  }),
  component: Page,
});

const docDcon = getDoc(5);

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções · Recuperação e contencioso"
      h1={docDcon.h1}
      intro={docDcon.fraseComercial}
      breadcrumbs={[{ label: "Soluções", to: "/solucoes" }, { label: "Recuperação de Créditos", to: "/solucoes/recuperacao-creditos-tributarios" }]}
      audience={docDcon.audience}
      ctaPrimary={docDcon.ctas[0]}
      ctaSecondary={docDcon.ctas[1]}
      ctaTertiary={docDcon.ctas[2]}
      respostaValidada={docDcon.respostaValidada}
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
        { h2: "PIS/Cofins monofásico", lead: "Perfumaria, cosméticos, bebidas, pneumáticos, autopeças, medicamentos, higiene pessoal e demais produtos com tributação concentrada na cadeia.", h3: [
          { title: "Análise técnica", body: "NCM, CST, notas fiscais, PGDAS-D, EFD-Contribuições, regime tributário e segregação correta de receitas nos últimos 5 anos." },
          { title: "Simples Nacional", body: "Segregação correta no PGDAS-D e pedido de restituição quando aplicável." },
          { title: "Presumido e Real", body: "Pode envolver PER/DCOMP e revisão da EFD-Contribuições." },
        ]},
        { h2: "Equiparação hospitalar: quando se aplica", lead: "Empresas da saúde no Lucro Presumido podem aplicar presunção reduzida quando prestam serviços hospitalares ou de auxílio diagnóstico e terapia: IRPJ de 32% para 8% e CSLL de 32% para 12%, com base no art. 15, §1º, III, \"a\" da Lei 9.249/1995. Base legal: Lei 9.249/1995; IN RFB 1.234/2012; RDC Anvisa 50/2002; Súmula CARF 142.", h3: [
          { title: "Requisitos cumulativos", body: "Sociedade empresária (não sociedade simples, embora o CARF já tenha decidido que não exige registro formal na Junta Comercial), regime de Lucro Presumido (não se aplica ao Simples Nacional), atividades vinculadas às atribuições 1 a 4 da Resolução RDC 50/2002 da Anvisa e comprovação por alvará da vigilância sanitária." },
          { title: "Solução de Consulta SRRF03 nº 3008", body: "Baseada no art. 30 c/c art. 38, II da IN RFB 1.234/2012, reforçou esses critérios." },
          { title: "Não é direito automático", body: "Consulta médica isolada NÃO se equipara a serviço hospitalar (Súmula CARF 142). É tese que depende de qualificação técnica, documentação e coerência entre contrato, nota fiscal e prontuário, sujeita a questionamento em fiscalização — não é blindagem nem garantia de resultado." },
        ]},
        { h2: "Exportação", h3: [
          { title: "Produtos e serviços", body: "PIS, Cofins, ICMS, ISS, contrato internacional, invoice, câmbio, DU-E, resultado no exterior e segregação fiscal revisados." },
        ]},
        { h2: "Lucro Real — créditos e custos", h3: [
          { title: "Insumos e estoque", body: "Créditos de insumos, crédito de estoque de PIS/Cofins na migração ao não cumulativo, perdas produtivas, desossa, descartes e margem efetiva." },
          { title: "Atenção ICMS", body: "Crédito de ICMS sobre estoque não nasce automaticamente da migração de Presumido para Real — depende de legislação estadual e hipótese específica." },
        ]},
        { h2: "DIFAL e ISS na construção civil", h3: [
          { title: "DIFAL", body: "Venda/compra interestadual, consumidor final, Simples Nacional, GNRE, notificações, autorregularização e recolhimento indevido revisados." },
          { title: "ISS construção civil", body: "Contrato, mão de obra, materiais produzidos fora da obra pelo prestador, jurisprudência do STJ e LC 116 — dedução de materiais é técnica e documentada." },
        ]},
        { h2: "Redução linear e alíquota zero", h3: [
          { title: "CST 06 e 07", body: "Produtos com CST 06 ou 07 precisam ser revisados — alíquota zero pode não gerar efeito integral se o benefício estiver alcançado por redução linear." },
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