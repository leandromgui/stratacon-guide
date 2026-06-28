import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { getDoc } from "../lib/dcon-content";
import { faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { MethodBadge } from "../components/MethodBadge";
import { dconMethod } from "../lib/dconMethod";
import { buildSeoHead } from "@/lib/seo";

const faqs: FAQItem[] = [
  { q: "Planejamento tributário garante economia?", a: "Não prometemos número antes do estudo. Modelamos cenários conservadores e realistas com fundamento legal. Quando há margem segura para reduzir carga, mostramos quanto, como e em qual prazo." },
  { q: "Quanto tempo leva um estudo completo?", a: "Entre duas e seis semanas, dependendo do volume de notas, complexidade societária e número de operações interestaduais a analisar." },
  { q: "Preciso trocar de contador para fazer o estudo?", a: "Não. O planejamento pode ser conduzido como projeto pontual em paralelo à contabilidade atual, ou integrado à rotina mensal da DCON." },
  { q: "Vocês trabalham com tese tributária agressiva?", a: "Não. Trabalhamos apenas com fundamento legal consolidado. Manobras sem base jurídica viram autuação retroativa com multa de 75% a 150% e juros Selic." },
  { q: "O estudo serve para Simples Nacional?", a: "Sim. Empresas no Simples frequentemente estão no anexo errado, perdem fator R ou se aproximam de sublimite sem perceber. O estudo identifica e propõe ajustes." },
  { q: "Quem assina tecnicamente o parecer?", a: "Responsável técnico com CRC ativo. Toda recomendação relevante passa por revisão cruzada antes da entrega." },
];

export const Route = createFileRoute("/solucoes/planejamento-tributario")({
  head: () => ({
    ...buildSeoHead({
      title: "Planejamento Tributário | DCON Consultoria Contábil",
      description: "Estudo comparativo de regimes e estruturas societárias com fundamento legal. Parecer técnico auditável, sem promessa milagrosa.",
      canonical: "/solucoes/planejamento-tributario",
    }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"/"},{"@type":"ListItem","position":2,"name":"Soluções","item":"/solucoes"},{"@type":"ListItem","position":3,"name":"Planejamento Tributário","item":"/solucoes/planejamento-tributario"}]}) },
      { type: "application/ld+json", children: serviceJsonLd({ name: "Planejamento Tributário", description: "Estudo técnico comparativo de regimes e estruturas societárias para reduzir carga tributária com segurança jurídica.", url: "/solucoes/planejamento-tributario" }) },
      { type: "application/ld+json", children: faqJsonLd(faqs) },
    ],
  }),
  component: Page,
});

const docDcon = getDoc(3);

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções · Linha tributária"
      h1={docDcon.h1}
      intro={docDcon.fraseComercial}
      breadcrumbs={[{ label: "Soluções", to: "/solucoes" }, { label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario" }]}
      audience={docDcon.audience}
      ctaPrimary={docDcon.ctas[0]}
      ctaSecondary={docDcon.ctas[1]}
      ctaTertiary={docDcon.ctas[2]}
      respostaValidada={docDcon.respostaValidada}
      ctaVariant="opportunity"
      method={dconMethod}
      pillarKey="planejamento-tributario"
      sections={[
        { h2: "Escopo do estudo", lead: "O que entra na análise — operação real, estrutura societária e cenários comparados sob fundamento legal.", h3: [
          { title: "Diagnóstico tributário", body: "Mapeamento de faturamento, margem, custos, regime atual e exposição fiscal corrente." },
          { title: "Comparativo de regimes", body: "Simples, Lucro Presumido e Lucro Real modelados em cenários conservadores e realistas." },
          { title: "Análise societária", body: "Estrutura de sócios, múltiplos CNPJs, holdings e segregação de atividades como ferramenta legal." },
          { title: "Operações interestaduais", body: "ICMS-ST, DIFAL e impacto de operações multiestaduais na escolha do regime." },
          { title: "Folha e pró-labore", body: "Fator R, encargos, pró-labore e distribuição de lucros revisados sob ótica tributária." },
          { title: "Reforma tributária 2026–2033", body: "Modelagem do impacto CBS/IBS sobre o regime escolhido durante a transição." },
        ]},
        { h2: "Quando faz sentido contratar", lead: "Sinalizadores claros de que o regime atual pode estar custando caro.", h3: [
          { title: "Mudança de faturamento", body: "Empresa cresceu, encolheu ou está perto do limite do regime atual." },
          { title: "Nova operação", body: "Expansão geográfica, abertura de filial ou entrada em novo mercado." },
          { title: "Carga tributária alta", body: "Sensação de pagar imposto demais sem entender qual é a origem técnica." },
          { title: "Reestruturação societária", body: "Entrada ou saída de sócio, M&A, captação ou separação de atividades." },
        ]},
        { h2: "Pessoa física ou CNPJ", lead: "Profissionais liberais podem estar pagando IRPF de até 27,5% quando uma estrutura PJ bem planejada poderia reduzir a carga.", h3: [
          { title: "Comparativo PF x PJ", body: "Atividade, Fator R, ISS, pró-labore, clientes PF/PJ e risco de pejotização modelados antes de qualquer migração." },
          { title: "Lucro Presumido com base correta", body: "Serviços e construção civil precisam revisar percentual de presunção — empreitada total com fornecimento de materiais tem tratamento diferente de mão de obra." },
          { title: "Lucro Real e margem efetiva", body: "Margem baixa, estoque relevante, insumos, perdas produtivas e créditos de PIS/Cofins podem justificar Lucro Real." },
        ]},
        { h2: "IRPFM e altas rendas", lead: "Empresários, sócios, investidores e PF acima de R$ 600 mil/ano devem revisar distribuição de lucros, holding, aluguéis e estrutura patrimonial diante do IRPFM.", h3: [
          { title: "Distribuição de lucros", body: "Coerência entre escrituração, balanço, regime tributário e estrutura familiar." },
          { title: "Holding patrimonial", body: "Avaliada como instrumento — não como blindagem automática nem promessa de economia." },
        ]},
        { h2: "Manobras fiscais a evitar", lead: "Planejamento legítimo exige propósito negocial, documentação, operação real, memória de cálculo e coerência entre contrato, nota, contabilidade e obrigações acessórias.", h3: [
          { title: "Estruturas artificiais", body: "Empresa criada só para vender na PJ, parentes em estruturas sem operação real, grupo econômico simulado." },
          { title: "Créditos sem base", body: "Compensações agressivas e consultorias de crédito sem memória de cálculo viram autuação retroativa." },
          { title: "Folha cruzada", body: "Folha em empresa do Simples para outra empresa — risco de desconsideração e cobrança previdenciária." },
        ]},
      ]}
      deliverables={[
        { title: "Parecer técnico fundamentado", body: "Documento com base legal, comparativo numérico, recomendação e justificativa de cada decisão." },
        { title: "Comparativo financeiro", body: "Planilha auditável com projeção mensal e anual em cada regime e estrutura simulada." },
        { title: "Mapa de exposição fiscal", body: "Identificação dos pontos de risco do cenário atual e do cenário recomendado." },
        { title: "Plano de implantação", body: "Cronograma com etapas, responsáveis e janelas legais de transição de regime." },
        { title: "Reunião de devolutiva", body: "Apresentação consultiva da recomendação ao sócio, com perguntas e cenários alternativos." },
        { title: "Acompanhamento legislativo", body: "Notas técnicas durante a transição da reforma tributária e mudanças legais relevantes." },
      ]}
      risks={[
        { title: "Permanecer no regime errado", body: "Empresas crescem e ultrapassam o ponto ótimo do Simples sem perceber, pagando muito mais imposto do que seria devido no Presumido ou Real." },
        { title: "Tese sem fundamento legal", body: "Planejamento agressivo vendido por escritórios sem responsabilidade técnica vira autuação retroativa com multa de 75% a 150% e juros Selic." },
        { title: "Pró-labore subdimensionado", body: "Distribuição desproporcional sem fundamento contábil expõe o sócio à desconsideração e cobrança de INSS retroativo." },
        { title: "Segregação sem substância", body: "Múltiplos CNPJs sem operação real são desconsiderados pela Receita e geram autuação por simulação." },
        { title: "Falta de adaptação à reforma", body: "Empresas que não modelarem o impacto CBS/IBS podem entrar 2027 com margem corroída em segmentos sensíveis." },
      ]}
      faq={faqs}
    >
      <MethodBadge note="Planejamento conduzido pelo protocolo DCON" />
    </PageScaffold>
  );
}