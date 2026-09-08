import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { getDoc } from "../lib/dcon-content";
import { faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { MethodBadge } from "../components/MethodBadge";
import { dconMethod } from "../lib/dconMethod";
import { buildSeoHead } from "@/lib/seo";

const faqs: FAQItem[] = [
  { q: "Quanto tempo leva para regularizar uma empresa?", a: "O diagnóstico fica pronto em poucos dias. O plano de regularização varia de semanas a poucos meses conforme o volume de débitos, esferas envolvidas e necessidade de retificação de obrigações acessórias." },
  { q: "Vocês negociam diretamente com a Receita e a PGFN?", a: "Sim. Conduzimos parcelamentos federais, transação tributária na PGFN, parcelamentos estaduais (Sefaz) e municipais (ISS/IPTU), com avaliação técnica de qual instrumento traz mais vantagem." },
  { q: "Como encaminhar débitos para PGFN?", a: "Primeiro identificamos se o débito está na Receita ou já inscrito em dívida ativa. Débitos não inscritos podem exigir correção de declarações, consolidação, acompanhamento ou providência na Receita; débitos inscritos podem permitir transação, parcelamento ou PRDI. A DCON atua como análise técnica antes de qualquer decisão." },
  { q: "Meu débito não aparece na PGFN. O que faço?", a: "Não significa que não exista dívida. Pode haver cobrança administrativa na Receita, declaração pendente, suspensão, retificação, consolidação não concluída ou inconsistência cadastral. O próximo passo é mapear origem, exigibilidade, prazo e impacto na certidão." },
  { q: "Tenho dívida muito antiga. Ainda compensa regularizar?", a: "Sim. Em muitos casos há decadência, prescrição ou erro de lançamento que reduz ou extingue o débito. A primeira etapa é justamente conferir o que é exigível antes de pagar." },
  { q: "Preciso parcelar tudo ou posso contestar?", a: "Depende. Parcelar interrompe defesas. Antes de aderir, avaliamos se cabe impugnação, manifestação de inconformidade ou PRDI para débitos inscritos." },
  { q: "Vocês ficam como contadora depois?", a: "Pode ser projeto pontual de regularização ou rotina contínua. Em ambos os casos, deixamos a empresa com calendário fiscal saneado para o problema não voltar." },
  { q: "Atendem empresas fora de Goiânia?", a: "Sim. Atendimento remoto em todo o Brasil. A documentação é trocada por canais auditáveis e as reuniões técnicas são agendadas por vídeo." },
];

export const Route = createFileRoute("/solucoes/regularizacao-fiscal")({
  head: () => ({
    ...buildSeoHead({
      title: "Regularização Fiscal de Empresas | DCON Consultoria",
      description: "Diagnóstico de pendências federais, estaduais e municipais. Plano técnico de regularização, parcelamentos e transação tributária com a DCON.",
      canonical: "/solucoes/regularizacao-fiscal",
    }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"/"},{"@type":"ListItem","position":2,"name":"Soluções","item":"/solucoes"},{"@type":"ListItem","position":3,"name":"Regularização Fiscal","item":"/solucoes/regularizacao-fiscal"}]}) },
      { type: "application/ld+json", children: serviceJsonLd({ name: "Regularização Fiscal", description: "Diagnóstico técnico de pendências fiscais nas três esferas, plano de regularização, parcelamentos e compliance.", url: "/solucoes/regularizacao-fiscal" }) },
      { type: "application/ld+json", children: faqJsonLd(faqs) },
    ],
  }),
  component: Page,
});

const docDcon = getDoc(7);

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções · Compliance e saída de crise"
      h1={docDcon.h1}
      intro={docDcon.fraseComercial}
      breadcrumbs={[{ label: "Soluções", to: "/solucoes" }, { label: "Regularização Fiscal", to: "/solucoes/regularizacao-fiscal" }]}
      audience={docDcon.audience}
      ctaPrimary={docDcon.ctas[0]}
      ctaSecondary={docDcon.ctas[1]}
      ctaTertiary={docDcon.ctas[2]}
      respostaValidada={docDcon.respostaValidada}
      ctaVariant="risk"
      method={dconMethod}
      pillarKey="regularizacao-fiscal"
      sections={[
        { h2: "Escopo do projeto", lead: "Mapeamento completo de débitos, defesas possíveis e plano priorizado por impacto operacional.", h3: [
          { title: "Mapa de débitos consolidado", body: "Levantamento federal (RFB/PGFN), estadual (Sefaz) e municipal (ISS/IPTU/Taxas) em relatório único." },
          { title: "Análise de CNDs e certidões", body: "Identificação clara do que impede certidão negativa e do impacto em licitações, financiamentos e contratos." },
          { title: "Encaminhamento Receita → PGFN", body: "Quando o débito não aparece na PGFN, analisamos se ele ainda está na Receita, se depende de consolidação, declaração, retificação, suspensão ou providência administrativa antes da inscrição." },
          { title: "Risco de bloqueio e protesto", body: "Avaliação de exposição a penhora online, protesto e bloqueio de contas." },
          { title: "Defesas administrativas cabíveis", body: "Impugnação, manifestação de inconformidade e PRDI antes de qualquer pagamento." },
          { title: "Parcelamentos e transação", body: "Federais (Refis, simplificado, transação), estaduais e municipais com avaliação técnica de cada via." },
          { title: "Revisão de regime", body: "Confirmação de que o regime atual continua adequado depois da regularização." },
        ]},
        { h2: "Compliance pós-regularização", lead: "Para o problema não voltar em seis meses. Calendário fiscal ativo e monitoramento contínuo.", h3: [
          { title: "Rotina fiscal saneada", body: "Apuração e obrigações acessórias revisadas e dentro do prazo." },
          { title: "Monitoramento de CNDs", body: "Acompanhamento contínuo das certidões e alerta precoce de pendências." },
          { title: "Calendário ativo", body: "Não dependemos do cliente lembrar de prazo — a equipe técnica conduz." },
          { title: "Reunião de revisão trimestral", body: "Status do plano, novos riscos e oportunidades de economia." },
        ]},
        { h2: "Licitações e habilitação", lead: "Empresas que disputam contrato público não podem descobrir pendências na hora da habilitação.", h3: [
          { title: "Documentação técnica", body: "Regularidade fiscal e trabalhista, balanço, DRE, índices contábeis, certidões e seguro de responsabilidade civil revisados." },
          { title: "Prazo e risco", body: "Prevenção contra inabilitação por documento vencido, índice insuficiente ou pendência cadastral." },
        ]},
        { h2: "Crédito empresarial", lead: "Preparação técnica para Pronampe, ProCred, BNDES, bancos, capital de giro e máquinas/equipamentos — sem promessa de aprovação.", h3: [
          { title: "Pacote documental", body: "Certidões, faturamento, PGDAS-D, DEFIS, DASN-SIMEI, ECF, balanço e DRE organizados para análise bancária." },
          { title: "Sócios e PF", body: "Documentação pessoal dos sócios alinhada ao pleito de crédito." },
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
        { h2: "Obrigações acessórias atrasadas", lead: "Regularizar DCTF, DCTFWeb, MIT, ECF, ECD, EFD-Contribuições, eSocial, EFD-Reinf, PGDAS-D e DEFIS antes que virem bloqueio de certidão.", h3: [
          { title: "Inventário de pendências", body: "Diagnóstico das obrigações em atraso, multas aplicáveis e prazo para regularização." },
          { title: "Risco de bloqueio", body: "Pendências acessórias bloqueiam CND e podem suspender o regime tributário." },
        ]},
      ]}
      deliverables={[
        { title: "Relatório de pendências consolidado", body: "Mapa federal, estadual e municipal com origem, valor atualizado e situação processual de cada débito." },
        { title: "Plano de regularização priorizado", body: "Ordem de ataque com base em risco operacional, prazo de defesa e custo de oportunidade." },
        { title: "Parecer sobre defesas cabíveis", body: "Avaliação técnica de impugnação, PRDI, transação e parcelamento — com recomendação fundamentada." },
        { title: "Negociação conduzida pela DCON", body: "Adesão a parcelamentos e transação tributária com acompanhamento técnico até a homologação." },
        { title: "Emissão de CNDs", body: "Retirada das certidões negativas ou positivas com efeito de negativa após a regularização." },
        { title: "Calendário fiscal e checklist", body: "Padrão DCON para manter conformidade contínua após a saída da pendência." },
      ]}
      risks={[
        { title: "Pagar dívida indevida", body: "Pagar ou parcelar sem conferir extingue o direito de defesa de débitos prescritos, decaídos ou com erro de lançamento." },
        { title: "Perder prazo de impugnação", body: "Cada cobrança tem janela curta de defesa. Perdido o prazo, o débito vira definitivo e segue para inscrição em dívida ativa." },
        { title: "Exclusão do Simples Nacional", body: "Termo de exclusão por débito ignorado pode jogar a empresa em regime mais oneroso retroativamente." },
        { title: "Bloqueio de conta e protesto", body: "PGFN executa, protesta e bloqueia ativos. Postergar a regularização aumenta o custo financeiro do problema." },
        { title: "Inscrição em CADIN", body: "Bloqueia financiamentos públicos, licitações, convênios e parcerias com órgãos públicos." },
      ]}
      faq={faqs}
    >
      <MethodBadge note="Regularização conduzida pelo protocolo DCON" />
    </PageScaffold>
  );
}