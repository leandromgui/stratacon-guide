import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";
import { TechnicalReview } from "../components/TechnicalReview";

const SLUG = "/conteudos/reforma-tributaria-formacao-preco-margem";
const H1 = "Reforma Tributária e Formação de Preço: por que seu mark-up precisa ser refeito";
const META_TITLE = "Reforma Tributária e Formação de Preço: preserve sua margem";
const META_DESCRIPTION =
  "Entenda por que somar IBS/CBS ao preço antigo não basta, como calcular a alíquota efetiva e os riscos reais para sua margem na Reforma Tributária.";
const PUBLISHED = "14/09/2026";

const faq = [
  {
    q: "Somar o novo imposto ao preço atual já resolve?",
    a: "Não. O mark-up antigo foi dimensionado para outro regime tributário, com margem de contingência e capital de giro calculados para custos diferentes. É preciso refazer o cálculo, não só somar.",
  },
  {
    q: "O crédito de IBS/CBS é automático?",
    a: "Não. Depende de nota fiscal correta, CST correto e fornecedor em conformidade. Qualquer erro na cadeia pode cortar o crédito.",
  },
  {
    q: "Contratos antigos precisam de atenção?",
    a: "Sim, contratos sem cláusula de repasse tributário vão rodar em 2027 com alíquota cheia, sem mecanismo para reequilibrar o preço.",
  },
];

export const Route = createFileRoute("/conteudos/reforma-tributaria-formacao-preco-margem")({
  head: () => ({
    ...buildSeoHead({
      title: META_TITLE,
      description: META_DESCRIPTION,
      canonical: SLUG,
      ogType: "article",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "/" },
            { "@type": "ListItem", position: 2, name: "Insights", item: "/conteudos" },
            { "@type": "ListItem", position: 3, name: "Reforma Tributária e Formação de Preço", item: "/conteudos/reforma-tributaria-formacao-preco-margem" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: H1,
          description: META_DESCRIPTION,
          author: { "@id": `${SITE_URL}/sobre/leandro#leandro` },
          publisher: { "@type": "Organization", name: "DCON Serviços Contábeis", url: SITE_URL },
          datePublished: "2026-09-14",
          dateModified: "2026-09-14",
          url: `${SITE_URL}${SLUG}`,
          mainEntityOfPage: `${SITE_URL}${SLUG}`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(LEANDRO_PERSON_JSONLD),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow={`Reforma tributária · ${PUBLISHED}`}
      h1={H1}
      intro="A Reforma Tributária não é só uma troca de siglas (ICMS, ISS, PIS e Cofins por IBS e CBS), é uma mudança na própria lógica de como o preço se relaciona com o imposto. Empresas que simplesmente somarem o novo tributo ao preço antigo correm o risco de uma margem completamente diferente da esperada, porque o mark-up construído para o regime cumulativo antigo não serve para a lógica de crédito não cumulativo do IBS/CBS."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Reforma Tributária e Formação de Preço", to: SLUG },
      ]}
      audience={[
        "Empresas B2B e B2C com formação de preço por mark-up",
        "Sócios e diretores financeiros em revisão de precificação",
        "Equipes fiscais adequando sistemas à CBS e ao IBS",
        "Empresas com contratos vigentes sem cláusula de repasse tributário",
      ]}
      ctaPrimary={{ label: "Solicitar diagnóstico de formação de preço para a Reforma Tributária", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver solução de reforma tributária", to: "/solucoes/reforma-tributaria" }}
      respostaValidada="Somar o novo tributo ao preço antigo não basta: o mark-up antigo foi dimensionado para outro regime, com contingência e capital de giro calculados para custos diferentes. Com IBS e CBS, a lógica passa a ser de cálculo por fora e crédito não cumulativo — e o crédito depende de documentação rigorosa, do CST correto e da conformidade do fornecedor. É preciso refazer o cálculo, não apenas somar."
      faq={faq}
      sections={[
        {
          h2: "O que muda na lógica do preço",
          lead: "No sistema atual, tributos como ICMS e PIS/Cofins têm mecanismos de incidência e crédito diferentes entre si, muitas vezes embutidos de forma pouco transparente no preço. Com IBS e CBS, a lógica passa a ser de cálculo por fora e crédito não cumulativo, o crédito nasce da extinção do débito na etapa anterior da cadeia, não apenas do destaque na nota fiscal.",
        },
        {
          h2: "Alíquotas de teste em 2026-2028",
          lead: "A LC nº 214/2025 estabelece alíquotas de teste para o período de transição: CBS de 0,9% e IBS de 0,1% em 2026 (conforme art. 28), e para os fatos geradores entre 1 de janeiro de 2027 e 31 de dezembro de 2028, o IBS será cobrado a 0,1% no total, 0,05% estadual mais 0,05% municipal (art. 344 da LC nº 214/2025). Mesmo pequenos, esses percentuais já precisam estar corretamente parametrizados nos sistemas, porque erros de classificação se multiplicam ao longo da cadeia.",
        },
        {
          h2: "O risco real: crédito que não se confirma",
          lead: "O crédito de IBS/CBS não é automático, depende de documentação rigorosa. Nota fiscal com preenchimento incorreto, CST errado ou fornecedor fora de conformidade cortam o direito ao crédito. Quando isso acontece, o valor não vira só um atraso: vira custo permanente, absorvido pela margem sem aparecer em nenhuma linha de imposto.",
        },
        {
          h2: "Contratos antigos são um ponto cego",
          lead: "Contratos assinados em 2024 ou 2025, sem cláusula de repasse tributário, vão rodar em 2027 com a alíquota cheia da reforma, e sem mecanismo contratual para reequilibrar o preço.",
        },
        {
          h2: "O que revisar antes de 2027",
          h3: [
            { title: "Parametrização dos sistemas", body: "Ajuste dos sistemas de emissão fiscal para os novos campos de destaque de IBS/CBS." },
            { title: "Estrutura de mark-up", body: "Reconstruída do zero, não preço antigo mais novo tributo." },
            { title: "Contratos vigentes", body: "Revisão dos contratos sem cláusula de repasse tributário." },
            { title: "Conformidade de fornecedores", body: "Processo de conformidade fiscal de fornecedores, para não perder crédito na cadeia." },
            { title: "Fluxo de caixa", body: "Avaliação do impacto no fluxo de caixa considerando o novo regime de créditos." },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Solução", label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" },
        { eyebrow: "Solução", label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario" },
        { eyebrow: "Leia também", label: "Split Payment adiado para 2028", to: "/conteudos/split-payment-adiado-2028-o-que-muda" },
        { eyebrow: "Próximo passo", label: "Solicitar diagnóstico", to: "/diagnostico" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Os dispositivos citados nesta análise estão na Lei Complementar nº 214/2025.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar nº 214/2025, art. 28 (alíquotas de teste 2026) e art. 344 (IBS 2027-2028).
          </p>
          <TechnicalReview />
        </div>
      </section>
    </PageScaffold>
  );
}
