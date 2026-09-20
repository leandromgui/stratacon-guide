import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";
import { TechnicalReview } from "../components/TechnicalReview";

const SLUG = "/conteudos/prestadores-servicos-reforma-tributaria-poucos-creditos";
const H1 = "Prestadores de Serviços na Reforma Tributária: poucos créditos e mais pressão";
const META_TITLE = "Prestadores de serviços na Reforma Tributária: o que muda";
const META_DESCRIPTION =
  "A folha de pagamento está fora da incidência da CBS. Entenda por que prestadores de serviço B2B sentem mais pressão de margem na Reforma Tributária.";
const PUBLISHED = "14/09/2026";

const faq = [
  {
    q: "A folha de pagamento vai gerar algum crédito de IBS/CBS?",
    a: "A regra geral é que a folha não gera crédito direto. Há discussões sobre mecanismos específicos para setores intensivos em mão de obra, mas a premissa de planejamento hoje deve ser folha sem crédito.",
  },
  {
    q: "Como repassar o imposto para o cliente sem perder o contrato?",
    a: "A transparência ajuda: apresentar a memória de cálculo permite que o cliente do Lucro Real entenda que pode tomar crédito do valor destacado, mudando o fluxo financeiro sem necessariamente mudar o custo real dele.",
  },
  {
    q: "Terceirizar é uma boa saída para reduzir a pressão da folha?",
    a: "Pode ser, mas só quando reflete uma mudança real e legal na estrutura de custos, não uma tentativa de gerar crédito artificial que pode ser questionada pela fiscalização.",
  },
];

export const Route = createFileRoute("/conteudos/prestadores-servicos-reforma-tributaria-poucos-creditos")({
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
            { "@type": "ListItem", position: 3, name: "Prestadores de Serviços na Reforma Tributária: poucos créditos e mais pressão", item: "/conteudos/prestadores-servicos-reforma-tributaria-poucos-creditos" },
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
      intro="Prestadores de serviços B2B estão numa posição particular na Reforma Tributária: seu maior custo, a folha de pagamento, está fora da incidência da CBS, ou seja, não gera crédito. Isso significa que a alíquota efetiva tende a ficar próxima da nominal, diferente de setores com mais insumos creditáveis."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Prestadores de Serviços na Reforma Tributária: poucos créditos e mais pressão", to: SLUG },
      ]}
      audience={[
        "Prestadores de serviços B2B",
        "Empresas de serviços enquadradas no Lucro Real, Presumido ou Simples Nacional",
        "Sócios e gestores financeiros que decidem precificação e regime tributário",
        "Escritórios de contabilidade que assessoram prestadores de serviços",
      ]}
      ctaPrimary={{ label: "Solicitar estudo de impacto tributário e de precificação", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver planejamento tributário", to: "/solucoes/planejamento-tributario" }}
      respostaValidada="Prestadores de serviços B2B sentem mais pressão na Reforma Tributária porque a folha de pagamento está fora da incidência da CBS e não gera crédito. Com poucos insumos creditáveis, a alíquota efetiva tende a ficar próxima da nominal. A decisão de repasse, terceirização ou mudança de estrutura de custos precisa ser simulada caso a caso, com base em dados reais e em estruturas legais suportáveis."
      faq={faq}
      sections={[
        {
          h2: "Por que a folha muda a equação",
          lead: "A folha de pagamento está fora da incidência da CBS, o que reduz drasticamente a base de crédito de prestadores de serviços.",
          h3: [
            {
              title: "Relação de emprego fora da CBS",
              body: "A relação de emprego está fora da incidência da CBS. A folha não gera crédito, e serviços costumam ter poucos insumos tributados para compensar essa ausência.",
            },
            {
              title: "Redução de alíquota não é automática",
              body: "Para profissões intelectuais regulamentadas, há previsão de redução de alíquota, mas o percentual exato varia conforme a atividade e precisa ser confirmado caso a caso, não deve ser tratado como regra geral automática.",
            },
          ],
        },
        {
          h2: "O dilema do repasse",
          lead: "Repassar ou absorver o aumento de carga exige simulação real com os números da operação.",
          h3: [
            {
              title: "Repassar integralmente pode ser inviável",
              body: "Repassar o aumento de carga integralmente para o cliente pode ser inviável comercialmente, especialmente em mercados competitivos.",
            },
            {
              title: "Absorver pode comprometer a margem",
              body: "Absorver integralmente pode comprometer a margem de forma severa, principalmente para prestadores com margem historicamente apertada.",
            },
            {
              title: "A resposta é simulação, não regra genérica",
              body: "A resposta depende de simulação real com os números da operação, não de uma regra genérica.",
            },
          ],
        },
        {
          h2: "Terceirização não é bala de prata",
          lead: "Transformar CLT em PJ pode parecer saída fácil, mas exige mudança real e legal na estrutura de custos.",
          h3: [
            {
              title: "Mudança precisa ser legal e documentada",
              body: "Transformar CLT em PJ pode parecer solução para gerar crédito, mas exige cuidado. A Reforma Tributária vem acompanhada de maior rigor fiscal, e mudanças de estrutura de custos precisam ser legais e documentadas.",
            },
            {
              title: "Evitar crédito artificial",
              body: "Não basta rearranjar contratos para gerar crédito. Uma tentativa de gerar crédito artificial pode ser questionada pela fiscalização e pela Receita Federal.",
            },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Solução", label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario" },
        { eyebrow: "Solução", label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" },
        { eyebrow: "Leia também", label: "Lucro Real na Reforma Tributária: créditos, controles e risco fiscal", to: "/conteudos/lucro-real-reforma-tributaria-creditos-controles" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Dispositivo legal citado nesta análise sobre prestadores de serviços e Reforma Tributária.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar nº 214/2025 (Reforma Tributária do Consumo: incidência, não cumulatividade e regras de crédito).
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fonte oficial: Receita Federal do Brasil / Comitê Gestor do IBS.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Autor: <a href="/sobre/leandro/" className="underline decoration-gold/50 hover:text-foreground">Leandro Matsuoka Guimarães</a> · Publicado em {PUBLISHED}.
          </p>
        </div>
      </section>
    </PageScaffold>
  );
}
