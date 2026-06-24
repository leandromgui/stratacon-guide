import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { getDoc } from "../lib/dcon-content";
import { faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { MethodBadge } from "../components/MethodBadge";
import { dconMethod } from "../lib/dconMethod";

const faqs: FAQItem[] = [
  { q: "Holding serve para qualquer família?", a: "Não. Holding sem patrimônio relevante é custo sem benefício. A análise prévia confirma se o patrimônio, a estrutura familiar e o objetivo justificam a constituição. Em parte dos casos a recomendação é não constituir." },
  { q: "Holding blinda o patrimônio?", a: "Não. Holding bem estruturada organiza, segrega e protege contra riscos operacionais legítimos. Não protege contra fraude, sonegação, dívida trabalhista, alimentos ou má-fé reconhecida judicialmente." },
  { q: "Tem incidência de ITBI na integralização?", a: "Depende do município, do tipo de atividade da holding e da natureza dos bens. Avaliamos antes de qualquer transferência, porque a decisão pode mudar o custo de constituição." },
  { q: "E o ITCMD na sucessão?", a: "Holding bem estruturada permite planejamento de doação em vida com reserva de usufruto, distribuindo o ITCMD ao longo do tempo e evitando inventário litigioso." },
  { q: "Vocês fazem só a constituição ou também a operação?", a: "Ambos. Estruturamos a constituição e operamos a contabilidade da holding com olhar consultivo — distribuição, locações, ganho de capital, IRPF dos sócios e governança familiar." },
  { q: "Atendem famílias fora de Goiânia?", a: "Sim. Atendimento remoto em todo o Brasil, com reuniões técnicas por vídeo e documentação trocada por canais auditáveis." },
];

export const Route = createFileRoute("/solucoes/holding-patrimonial")({
  head: () => ({
    meta: [
      { title: "Holding Patrimonial e Familiar | DCON Consultoria" },
      { name: "description", content: "Estruturação técnica de holding patrimonial e familiar: proteção, sucessão e eficiência tributária com fundamento jurídico-contábil." },
      { property: "og:title", content: "Holding Patrimonial e Familiar | DCON" },
      { property: "og:description", content: "Estruturação, governança e operação contábil da holding patrimonial e familiar." },
      { property: "og:url", content: "/solucoes/holding-patrimonial" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/holding-patrimonial" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"/"},{"@type":"ListItem","position":2,"name":"Soluções","item":"/solucoes"},{"@type":"ListItem","position":3,"name":"Holding Patrimonial","item":"/solucoes/holding-patrimonial"}]}) },
      { type: "application/ld+json", children: serviceJsonLd({ name: "Holding Patrimonial e Familiar", description: "Estudo prévio, constituição técnica e operação contábil de holding patrimonial e familiar.", url: "/solucoes/holding-patrimonial" }) },
      { type: "application/ld+json", children: faqJsonLd(faqs) },
    ],
  }),
  component: Page,
});

const docDcon = getDoc(10);

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções · Patrimônio e sucessão"
      h1={docDcon.h1}
      intro={docDcon.fraseComercial}
      breadcrumbs={[{ label: "Soluções", to: "/solucoes" }, { label: "Holding Patrimonial", to: "/solucoes/holding-patrimonial" }]}
      audience={docDcon.audience}
      ctaPrimary={docDcon.ctas[0]}
      ctaSecondary={docDcon.ctas[1]}
      ctaTertiary={docDcon.ctas[2]}
      respostaValidada={docDcon.respostaValidada}
      pillarKey="holding-patrimonial"
      method={dconMethod}
      ctaVariant="opportunity"
      sections={[
        { h2: "Escopo do projeto", lead: "Avaliação técnica antes de qualquer decisão — patrimônio, família, objetivos e impacto tributário modelados em conjunto.", h3: [
          { title: "Estudo prévio de viabilidade", body: "Análise patrimonial, societária e familiar antes de qualquer transferência. Em parte dos casos a recomendação é não constituir." },
          { title: "Tipos de holding", body: "Patrimonial, familiar, mista ou operacional — definidos conforme objetivo (proteção, sucessão, governança ou eficiência)." },
          { title: "Estrutura societária", body: "Tipo societário, capital, cláusulas restritivas, acordo de sócios e governança familiar." },
          { title: "ITBI, ITCMD e ganho de capital", body: "Análise tributária da integralização, doação em vida e eventual venda futura." },
          { title: "Distribuição e usufruto", body: "Doação com reserva de usufruto, cláusulas de incomunicabilidade, impenhorabilidade e inalienabilidade." },
          { title: "Operação contínua", body: "Contabilidade da holding com olhar consultivo: locação, distribuição, IRPF dos sócios e prestação de contas familiar." },
        ]},
        { h2: "Quando faz sentido constituir", lead: "Critérios objetivos que justificam o custo de estrutura e operação.", h3: [
          { title: "Patrimônio relevante", body: "Imóveis, participações societárias e ativos que justifiquem o custo de constituição e manutenção." },
          { title: "Sucessão em vista", body: "Famílias que querem antecipar a transição em vida e reduzir litígio futuro." },
          { title: "Múltiplas operações", body: "Sócio com várias empresas que precisa organizar participações e governança." },
          { title: "Profissionalização familiar", body: "Famílias empresárias que precisam separar pessoa física, empresa e patrimônio comum." },
        ]},
        { h2: "Quando NÃO faz sentido", lead: "Holding não é milagre tributário — é instrumento. Em parte dos casos a recomendação técnica é não constituir.", h3: [
          { title: "Patrimônio pequeno", body: "Custo de manutenção, contabilidade e governança maior do que o benefício esperado." },
          { title: "Ganho de capital latente alto", body: "Imóveis com forte valorização podem disparar tributação relevante na integralização ou venda futura." },
          { title: "Ausência de finalidade real", body: "Tentativa de blindagem artificial, sem operação ou propósito documentado, é desconsiderada." },
          { title: "Conflito familiar não resolvido", body: "Sem acordo prévio entre sócios, a holding amplifica disputas em vez de organizá-las." },
        ]},
        { h2: "Aluguéis, IBS/CBS e CIB", lead: "PF com muitos imóveis precisa revisar quantidade de imóveis locados, receita anual e enquadramento como contribuinte de IBS/CBS.", h3: [
          { title: "Limite PF na Reforma", body: "Mais de 3 imóveis locados e receita anual acima de R$ 240 mil entram no radar de IBS/CBS — locação residencial tem redutor de 70%." },
          { title: "Holding x PF", body: "Comparativo entre tributação na PF (IRPF + IBS/CBS) e na holding (IRPJ/CSLL + IBS/CBS) com cálculo dos redutores e do CIB." },
        ]},
        { h2: "IRPFM e custos da estrutura", h3: [
          { title: "IRPFM", body: "Holding pode integrar planejamento de altas rendas, desde que tenha propósito real e análise de impacto." },
          { title: "Custos diretos", body: "Abertura, ITBI, ITCMD, ganho de capital, honorários, contabilidade, contratos e manutenção projetados antes da decisão." },
        ]},
      ]}
      deliverables={[
        { title: "Parecer de viabilidade", body: "Documento técnico com recomendação fundamentada de constituir, postergar ou não constituir." },
        { title: "Modelagem tributária", body: "Comparativo do cenário atual versus cenário com holding — ITBI, ITCMD, IRPF, IRPJ e ganho de capital." },
        { title: "Contrato social e governança", body: "Minuta do contrato social, acordo de sócios e cláusulas restritivas alinhadas ao objetivo familiar." },
        { title: "Plano de integralização", body: "Roteiro técnico da transferência dos bens, com avaliação fiscal e contábil de cada etapa." },
        { title: "Operação contábil contínua", body: "Escrituração, apuração, ECD/ECF e relatórios gerenciais da holding com revisão técnica mensal." },
        { title: "Reunião familiar de governança", body: "Encontro estruturado para alinhar regras, papéis e decisões entre os membros da família." },
      ]}
      risks={[
        { title: "Constituir sem patrimônio que justifique", body: "Holding com pouco patrimônio é custo de manutenção sem benefício relevante — DRE consome o que deveria proteger." },
        { title: "Integralização sem análise de ITBI", body: "Em municípios e atividades específicas o ITBI incide sobre a integralização e pode tornar o custo proibitivo." },
        { title: "Acreditar em blindagem absoluta", body: "Holding não protege contra fraude, dívida trabalhista, alimentos ou desconsideração da personalidade jurídica reconhecida judicialmente." },
        { title: "Operação contábil precária", body: "Holding com escrituração descuidada perde o benefício tributário e vira passivo silencioso em fiscalização." },
        { title: "Conflito familiar não previsto", body: "Sem acordo de sócios e governança escrita, a holding pode amplificar disputas em vez de organizá-las." },
        { title: "ITCMD mal planejado", body: "Doação em vida sem cálculo de ITCMD progressivo pode custar mais que o próprio inventário." },
      ]}
      faq={faqs}
    >
      <MethodBadge note="Holding estruturada pelo protocolo DCON" />
    </PageScaffold>
  );
}