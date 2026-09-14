import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/reforma-tributaria-clinicas-medicas-o-que-muda";
const H1 = "Reforma Tributária para Clínicas Médicas: o que muda (e o que NÃO muda)";
const META_TITLE = "Reforma Tributária para clínicas médicas: o que muda de verdade";
const META_DESCRIPTION =
  "Entenda a redução de 60% na alíquota de IBS/CBS para saúde, por que a folha de pagamento limita os créditos, e por que a equiparação hospitalar continua separada da reforma.";
const PUBLISHED = "14/09/2026";

const faq = [
  {
    q: "A Reforma Tributária acaba com a equiparação hospitalar?",
    a: "Não. A equiparação hospitalar atua em IRPJ e CSLL, a Reforma Tributária do Consumo atua em IBS e CBS. São mecanismos separados.",
  },
  {
    q: "Clínicas vão pagar mais imposto com a reforma?",
    a: "Não necessariamente. A redução de 60% na alíquota de referência para saúde tende a manter a carga próxima da atual, mas o resultado real depende de simulação com os números da própria clínica.",
  },
  {
    q: "Minha clínica precisa mudar de regime tributário agora?",
    a: "Não imediatamente, mas é recomendável iniciar o planejamento e o mapeamento de créditos desde já.",
  },
];

export const Route = createFileRoute("/conteudos/reforma-tributaria-clinicas-medicas-o-que-muda")({
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
            { "@type": "ListItem", position: 3, name: "Reforma Tributária para Clínicas Médicas: o que muda (e o que NÃO muda)", item: "/conteudos/reforma-tributaria-clinicas-medicas-o-que-muda" },
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
      eyebrow={`Saúde · Reforma tributária · ${PUBLISHED}`}
      h1={H1}
      intro="A Reforma Tributária do Consumo gera dúvida real para clínicas médicas: ela muda a equiparação hospitalar? A resposta curta é não. São mecanismos diferentes, que atuam em impostos diferentes, e entender essa distinção evita decisões equivocadas de planejamento tributário."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Reforma Tributária para Clínicas Médicas: o que muda (e o que NÃO muda)", to: SLUG },
      ]}
      audience={[
        "Clínicas médicas enquadradas em Lucro Presumido ou Lucro Real",
        "Sócios e administradores de clínicas e consultórios",
        "Gestores financeiros do setor da saúde",
        "Escritórios de contabilidade com carteira de saúde",
      ]}
      ctaPrimary={{ label: "Solicitar diagnóstico tributário para clínicas médicas", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver segmento médico", to: "/segmentos/medicos-clinicas" }}
      respostaValidada="A Reforma Tributária do Consumo não altera a equiparação hospitalar, que continua atuando em IRPJ e CSLL no Lucro Presumido. Para serviços de saúde, a LC nº 214/2025 prevê redução de 60% na alíquota de referência de IBS/CBS, mas clínicas com alto custo em folha devem simular o impacto real, pois folha de pagamento não gera crédito."
      faq={faq}
      sections={[
        {
          h2: "Dois mecanismos que não se confundem",
          lead: "Reforma Tributária e equiparação hospitalar atuam em impostos distintos e não se misturam.",
          h3: [
            {
              title: "Reforma Tributária do Consumo",
              body: "A Reforma Tributária do Consumo mexe apenas em IBS e CBS, tributos sobre o consumo.",
            },
            {
              title: "Equiparação hospitalar",
              body: "A equiparação hospitalar reduz a base de cálculo de IRPJ e CSLL, impostos sobre a renda da empresa, no regime de Lucro Presumido. Como atuam em bases diferentes, a Reforma não interfere diretamente na equiparação hospitalar, ela continua existindo e sendo avaliada pelos mesmos critérios de sempre.",
            },
          ],
        },
        {
          h2: "A redução de 60% na alíquota para serviços de saúde",
          lead: "A carga sobre o consumo de serviços de saúde deve ficar próxima do patamar atual.",
          h3: [
            {
              title: "Redução setorial",
              body: "A LC nº 214/2025 prevê redução de 60% na alíquota de referência de IBS e CBS para serviços de saúde, em relação ao padrão aplicado aos demais setores da economia.",
            },
            {
              title: "Patamar estimado",
              body: "Isso significa que, se a alíquota padrão nacional ficar próxima de 28%, clínicas médicas devem pagar algo em torno de 11%, um patamar próximo da carga atual.",
            },
          ],
        },
        {
          h2: "Por que a redução de alíquota não garante folga na margem",
          lead: "Folha de pagamento é o principal custo da clínica e não gera crédito no novo sistema.",
          h3: [
            {
              title: "Custo concentrado em pessoal",
              body: "O principal custo de uma clínica costuma ser folha de pagamento, e folha não gera crédito de IBS/CBS no novo sistema.",
            },
            {
              title: "Simulação é indispensável",
              body: "Clínicas com custo concentrado em pessoal têm poucos créditos para abater, mesmo com a alíquota reduzida. Isso significa que a redução de 60% ajuda, mas não elimina a necessidade de simulação real com os números da operação.",
            },
          ],
        },
        {
          h2: "O que fazer em 2026",
          lead: "Roteiro prático para clínicas começarem a se preparar.",
          h3: [
            {
              title: "Revisar o enquadramento tributário",
              body: "Revisar o enquadramento tributário atual da clínica.",
            },
            {
              title: "Mapear geração de crédito",
              body: "Mapear onde a clínica efetivamente gera crédito de IBS/CBS (materiais, aluguel de equipamentos, energia) e onde não gera (folha de pagamento).",
            },
            {
              title: "Avaliar equiparação hospitalar",
              body: "Avaliar separadamente, com base nos critérios jurídicos próprios, se a clínica tem elegibilidade para equiparação hospitalar.",
            },
            {
              title: "Adaptar sistemas de emissão",
              body: "Adaptar sistemas de emissão de nota fiscal para os novos campos de IBS/CBS.",
            },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Segmento", label: "Médicos e Clínicas", to: "/segmentos/medicos-clinicas" },
        { eyebrow: "Solução", label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" },
        { eyebrow: "Leia também", label: "Quais Despesas Geram Crédito de IBS e CBS", to: "/conteudos/despesas-que-geram-credito-ibs-cbs" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Dispositivo legal que disciplina a redução de alíquota para serviços de saúde.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar nº 214/2025 (redução de alíquota de referência de IBS e CBS para serviços de saúde).
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fonte oficial: Receita Federal do Brasil / Comitê Gestor do IBS.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Autor: <a href="/sobre/leandro" className="underline decoration-gold/50 hover:text-foreground">Leandro Matsuoka Guimarães</a> · Publicado em {PUBLISHED}.
          </p>
        </div>
      </section>
    </PageScaffold>
  );
}
