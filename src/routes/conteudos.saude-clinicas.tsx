import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";

const faqs: FAQItem[] = [
  {
    q: "Quando fazer a análise de equiparação hospitalar?",
    a: "Quando a clínica ou empresa da saúde está no Lucro Presumido, possui receitas de serviços potencialmente equiparáveis a hospitalares e tem estrutura, licença, documentação e segregação de receitas suficientes para sustentar a presunção reduzida. A análise não se aplica automaticamente a consultas simples.",
  },
  {
    q: "A equiparação hospitalar reduz imposto automaticamente?",
    a: "Não. Ela pode reduzir a presunção de IRPJ de 32% para 8% e de CSLL de 32% para 12% apenas sobre receitas qualificadas, quando a operação atende aos requisitos. A DCON atua como análise técnica de viabilidade, não como promessa de benefício.",
  },
  {
    q: "Quais documentos a DCON analisa?",
    a: "Contrato social, CNAE, alvarás e licença sanitária, notas fiscais, contratos com pacientes, clínicas ou operadoras, segregação de receitas, apuração de IRPJ/CSLL, ECD/ECF quando aplicável e evidências da estrutura efetivamente usada na prestação do serviço.",
  },
  {
    q: "Posso recuperar valores pagos nos últimos 5 anos?",
    a: "Pode haver recuperação se a empresa recolheu IRPJ/CSLL com presunção maior sobre receitas que, após análise documental, eram qualificáveis. A revisão exige memória de cálculo, base legal, retificações cabíveis e rastreabilidade dos valores.",
  },
  {
    q: "Simples Nacional pode usar equiparação hospitalar?",
    a: "A tese de presunção reduzida é tema de Lucro Presumido. No Simples, o foco costuma ser outro: Fator R, anexo correto, segregação de receitas e comparação entre Simples, Presumido e Real.",
  },
  {
    q: "Como a DCON atua na prática?",
    a: "A DCON levanta dados, separa receitas, confere documentos, simula cenários e entrega uma conclusão técnica: aplicar, não aplicar, aplicar parcialmente ou corrigir a estrutura antes de qualquer medida fiscal.",
  },
];

export const Route = createFileRoute("/conteudos/saude-clinicas")({
  head: () => ({
    meta: [
      { title: "Equiparação Hospitalar para Clínicas | Insights DCON" },
      { name: "description", content: "Quando analisar equiparação hospitalar, PJ médica, Fator R e regime tributário para clínicas, com respostas técnicas da DCON." },
      { property: "og:title", content: "Equiparação Hospitalar para Clínicas | DCON" },
      { property: "og:description", content: "Respostas sobre quando fazer equiparação hospitalar, quais documentos analisar e como a DCON atua tecnicamente." },
      { property: "og:url", content: "/conteudos/saude-clinicas" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/conteudos/saude-clinicas" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "/" },
            { "@type": "ListItem", position: 2, name: "Insights", item: "/conteudos" },
            { "@type": "ListItem", position: 3, name: "Saúde e clínicas", item: "/conteudos/saude-clinicas" },
          ],
        }),
      },
      { type: "application/ld+json", children: serviceJsonLd({ name: "Análise de Equiparação Hospitalar", description: "Análise técnica de viabilidade para clínicas e empresas da saúde no Lucro Presumido.", url: "/conteudos/saude-clinicas" }) },
      { type: "application/ld+json", children: faqJsonLd(faqs) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Insight · Saúde"
      h1="Equiparação hospitalar para clínicas: quando analisar e quando não aplicar"
      lead="A equiparação hospitalar não é benefício automático. É uma análise técnica sobre atividade, documentação, receita, estrutura e regime tributário."
      intro="Empresas da saúde precisam comparar PJ médica, Livro Caixa, Fator R, Simples, Lucro Presumido, Receita Saúde e equiparação hospitalar antes de decidir como tributar. A DCON atua como análise técnica: identifica viabilidade, riscos, documentos faltantes e caminho fiscal seguro."
      breadcrumbs={[{ label: "Insights", to: "/conteudos" }, { label: "Saúde e clínicas", to: "/conteudos/saude-clinicas" }]}
      audience={[
        "Clínicas no Lucro Presumido",
        "Médicos avaliando migração para CNPJ",
        "Empresas de saúde com receitas mistas",
        "Operações que querem revisar IRPJ/CSLL dos últimos 5 anos",
      ]}
      ctaPrimary={{ label: "Solicitar análise da clínica", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver contabilidade para médicos", to: "/segmentos/medicos-clinicas" }}
      ctaTertiary={{ label: "Falar com a DCON", to: "/contato" }}
      respostaValidada="Equiparação hospitalar não é promessa de redução automática. Empresas da saúde no Lucro Presumido podem ter presunção reduzida de IRPJ e CSLL sobre receitas qualificadas, mas isso depende de atividade, estrutura, documentação, licença, segregação de receitas e enquadramento fiscal. A DCON atua como forma de análise técnica para concluir se há viabilidade, risco ou necessidade de correção antes de aplicar qualquer medida."
      ctaVariant="opportunity"
      pillarKey="medicos-clinicas"
      sections={[
        {
          h2: "Quando a análise faz sentido",
          lead: "O ponto de partida é verificar se a operação está no regime certo e se a receita analisada é compatível com a tese.",
          h3: [
            { title: "Lucro Presumido", body: "A equiparação hospitalar é analisada sobre IRPJ e CSLL no Lucro Presumido. Se a empresa está no Simples, a análise principal costuma ser Fator R, anexos e comparação de regimes." },
            { title: "Receitas qualificadas", body: "A redução só pode ser discutida para receitas de serviços de saúde que se aproximam de atividade hospitalar. Consultas simples e receitas sem suporte documental devem ficar fora." },
            { title: "Estrutura e licença", body: "A clínica precisa demonstrar estrutura, alvarás, licença sanitária e capacidade operacional compatíveis com o serviço prestado." },
            { title: "Segregação de receitas", body: "Receitas qualificadas e não qualificadas devem ser separadas por nota, contrato, centro de custo e apuração. Aplicar tudo em bloco aumenta risco fiscal." },
          ],
        },
        {
          h2: "Como a DCON conduz a análise",
          lead: "A atuação é analítica: não vendemos atalho, entregamos conclusão técnica e documentação de suporte.",
          h3: [
            { title: "Levantamento documental", body: "Contrato social, CNAE, licenças, notas fiscais, contratos, apurações, ECD/ECF, DRE e histórico dos últimos 5 anos." },
            { title: "Classificação das receitas", body: "Separação entre receitas possivelmente equiparáveis, consultas simples, procedimentos acessórios e receitas sem documentação suficiente." },
            { title: "Memória de cálculo", body: "Simulação da presunção atual versus presunção reduzida apenas sobre a base elegível, com estimativa de economia ou recuperação possível." },
            { title: "Conclusão técnica", body: "Aplicar, não aplicar, aplicar parcialmente ou corrigir estrutura/documentação antes de qualquer alteração fiscal." },
          ],
        },
        {
          h2: "Riscos de aplicar sem análise",
          lead: "O maior erro é tratar equiparação hospitalar como tese genérica para toda clínica.",
          h3: [
            { title: "Glosa em fiscalização", body: "Sem prova de atividade, estrutura e segregação, o Fisco pode exigir diferença de IRPJ/CSLL, juros, multa e retificações." },
            { title: "Receita errada na base reduzida", body: "Consultas simples ou receitas administrativas incluídas indevidamente podem contaminar toda a apuração." },
            { title: "Recuperação sem lastro", body: "Pedido retroativo sem documentação, base legal e memória de cálculo aumenta risco de indeferimento ou questionamento." },
            { title: "Regime inadequado", body: "Às vezes a oportunidade real não é equiparação, mas Fator R, mudança de regime, segregação ou reorganização societária." },
          ],
        },
      ]}
      deliverables={[
        { title: "Parecer de viabilidade", body: "Conclusão clara sobre aplicar, não aplicar ou aplicar parcialmente a equiparação hospitalar." },
        { title: "Mapa de receitas", body: "Separação das receitas qualificadas e não qualificadas para evitar aplicação indevida." },
        { title: "Checklist documental", body: "Relação dos documentos que sustentam ou impedem a tese na operação real." },
        { title: "Cálculo de impacto", body: "Simulação de IRPJ/CSLL e eventual recuperação dos últimos 5 anos quando houver base." },
      ]}
      faq={faqs}
      relatedLinks={[
        { label: "Médicos e Clínicas", to: "/segmentos/medicos-clinicas", eyebrow: "Segmento" },
        { label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario", eyebrow: "Solução" },
        { label: "Recuperação de Créditos", to: "/solucoes/recuperacao-creditos-tributarios", eyebrow: "Solução" },
        { label: "Regimes Tributários", to: "/conteudos/regimes-tributarios", eyebrow: "Conteúdo" },
      ]}
    />
  );
}
