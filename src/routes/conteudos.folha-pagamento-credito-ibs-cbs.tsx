import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";
import { TechnicalReview } from "../components/TechnicalReview";

const SLUG = "/conteudos/folha-pagamento-credito-ibs-cbs";
const H1 = "Folha de Pagamento Gera Crédito de IBS e CBS?";
const META_TITLE = "Folha de pagamento gera crédito de IBS e CBS?";
const META_DESCRIPTION =
  "Salários e encargos não geram crédito de IBS/CBS. Entenda por que, o que isso significa para prestadores de serviço, e o que NÃO deve ser confundido com folha.";
const PUBLISHED = "17/09/2026";

const faq = [
  {
    q: "Terceirizar funcionários gera crédito?",
    a: "Só se for uma prestação de serviço legítima, não uma tentativa de disfarçar vínculo empregatício.",
  },
  {
    q: "Pró-labore de sócio gera crédito?",
    a: "Não, mesma lógica da folha de pagamento.",
  },
  {
    q: "Existe alguma exceção para folha gerar crédito?",
    a: "Não há previsão nesse sentido na legislação atual.",
  },
];

export const Route = createFileRoute("/conteudos/folha-pagamento-credito-ibs-cbs")({
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
            { "@type": "ListItem", position: 3, name: H1, item: "/conteudos/folha-pagamento-credito-ibs-cbs" },
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
          datePublished: "2026-09-17",
          dateModified: "2026-09-17",
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
      intro="Resposta direta: não. Salários, encargos e benefícios pagos a empregados não geram crédito de IBS/CBS, e essa é uma das mudanças que mais pressiona prestadores de serviço na Reforma."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: H1, to: SLUG },
      ]}
      audience={[
        "Empresas prestadoras de serviço",
        "Empresas com folha concentrada",
        "Sócios e gestores que precisam simular o impacto da Reforma",
        "Contadores e consultores tributários",
      ]}
      ctaPrimary={{ label: "Solicitar simulação de impacto tributário considerando a folha de pagamento", to: "/diagnostico" }}
      ctaSecondary={{ label: "Prestadores de serviços na Reforma Tributária", to: "/conteudos/prestadores-servicos-reforma-tributaria-poucos-creditos" }}
      respostaValidada="Salários, encargos e benefícios pagos a empregados não geram crédito de IBS/CBS. A não cumulatividade nasce do pagamento efetivo de IBS/CBS na etapa anterior da cadeia (art. 27 da LC 214/2025), e não há tributo destacado sobre salário, porque a relação de emprego não é uma operação onerosa de bens ou serviços."
      faq={faq}
      sections={[
        {
          h2: "A regra",
          lead: "A Lei Complementar nº 214/2025 não inclui a folha de pagamento na base de creditamento.",
          h3: [
            {
              title: "Base de creditamento",
              body: "A Lei Complementar nº 214/2025 não inclui a folha de pagamento na base de creditamento. O crédito nasce do pagamento efetivo de IBS/CBS na etapa anterior da cadeia (art. 27), e não há tributo destacado sobre salário, porque a relação de emprego não é uma operação onerosa de bens ou serviços.",
            },
          ],
        },
        {
          h2: "Por que isso pesa mais para alguns setores",
          lead: "Empresas com folha concentrada sentem mais a ausência de crédito.",
          h3: [
            {
              title: "Serviços e consultoria",
              body: "Empresas com folha concentrada, como serviços e consultoria, têm menos despesas alternativas para compensar essa ausência de crédito.",
            },
          ],
        },
        {
          h2: "O que NÃO é folha, mas às vezes se confunde",
          lead: "Terceirização de mão de obra pode gerar crédito quando é uma prestação de serviço.",
          h3: [
            {
              title: "Terceirização legítima",
              body: "Terceirização de mão de obra, como limpeza e segurança, contratada como serviço de terceiro pode gerar crédito, porque é uma operação de serviço, não uma relação de emprego direta.",
            },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Leia também", label: "Prestadores de serviços na Reforma Tributária: poucos créditos e mais pressão", to: "/conteudos/prestadores-servicos-reforma-tributaria-poucos-creditos" },
        { eyebrow: "Leia também", label: "Quais despesas geram crédito de IBS e CBS", to: "/conteudos/despesas-que-geram-credito-ibs-cbs" },
        { eyebrow: "Solução", label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Os dispositivos citados nesta análise estão na Lei Complementar nº 214/2025, arts. 27 e 57.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar nº 214/2025, arts. 27 e 57.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fontes oficiais: Receita Federal do Brasil — Portal da Reforma Tributária ({" "}
            <a
              href="https://www.gov.br/receitafederal/pt-br/assuntos/reforma-tributaria"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/50 hover:text-foreground"
            >
              https://www.gov.br/receitafederal/pt-br/assuntos/reforma-tributaria
            </a>
            ); Lei Complementar nº 214/2025.
          </p>
          <TechnicalReview />
        </div>
      </section>
    </PageScaffold>
  );
}
