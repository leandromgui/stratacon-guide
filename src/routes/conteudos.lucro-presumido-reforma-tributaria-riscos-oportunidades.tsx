import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/lucro-presumido-reforma-tributaria-riscos-oportunidades";
const H1 = "Lucro Presumido na Reforma Tributária: riscos e oportunidades";
const META_TITLE = "Lucro Presumido na Reforma Tributária: o que muda em 2027";
const META_DESCRIPTION =
  "Entenda como a CBS substitui o PIS/Cofins cumulativo no Lucro Presumido, por que prestadores de serviço sentem mais o impacto, e o que a LC 224/2025 já mudou.";
const PUBLISHED = "14/09/2026";

const faq = [
  {
    q: "O Lucro Presumido vai deixar de existir?",
    a: "Não. A reforma muda a tributação sobre o consumo (CBS/IBS), não extingue o regime de presunção para IRPJ/CSLL.",
  },
  {
    q: "Toda empresa do Lucro Presumido vai pagar mais imposto?",
    a: "Não necessariamente. Depende do perfil de custos e da proporção de despesas que geram crédito de CBS/IBS.",
  },
  {
    q: "A LC 224/2025 é a mesma coisa que a Reforma Tributária?",
    a: "Não. São normas diferentes: a LC 224/2025 mudou percentuais de presunção de IRPJ/CSLL, a Reforma Tributária do Consumo trata de IBS/CBS.",
  },
];

export const Route = createFileRoute("/conteudos/lucro-presumido-reforma-tributaria-riscos-oportunidades")({
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
            { "@type": "ListItem", position: 3, name: "Lucro Presumido na Reforma Tributária: riscos e oportunidades", item: "/conteudos/lucro-presumido-reforma-tributaria-riscos-oportunidades" },
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
      intro="Empresas do Lucro Presumido vivem hoje uma vantagem que desaparece em 2027: pagar PIS/Cofins cumulativo de 3,65% sobre a receita, sem se preocupar com apuração de créditos. Com a CBS entrando em vigor plena em 2027, estimada em torno de 9,2%, essa lógica muda por completo, e o impacto real depende do perfil de custos de cada empresa."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Lucro Presumido na Reforma Tributária: riscos e oportunidades", to: SLUG },
      ]}
      audience={[
        "Empresas enquadradas no Lucro Presumido",
        "Prestadores de serviços com alto custo em folha",
        "Sócios e gestores financeiros que decidem regime tributário",
        "Escritórios de contabilidade que assessoram empresas sob a nova reforma",
      ]}
      ctaPrimary={{ label: "Solicitar simulação de regime tributário considerando a Reforma", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver planejamento tributário", to: "/solucoes/planejamento-tributario" }}
      respostaValidada="A CBS substitui o PIS/Cofins cumulativo no Lucro Presumido a partir de 2027. Empresas com alto custo em folha e poucos insumos vinculados à atividade tendem a sentir aumento real de carga, enquanto empresas com estrutura de compras relevante podem compensar parte do aumento nominal com créditos. A LC 224/2025, por sua vez, alterou percentuais de presunção de IRPJ/CSLL e é norma distinta da Reforma Tributária do Consumo."
      faq={faq}
      sections={[
        {
          h2: "O que muda na tributação sobre o consumo",
          lead: "PIS/Cofins cumulativo dá lugar à CBS não cumulativa, e o efeito depende do perfil de custos.",
          h3: [
            {
              title: "PIS/Cofins cumulativo",
              body: "Hoje, o Lucro Presumido paga PIS/Cofins cumulativo de 3,65% sobre a receita, sem direito a crédito. A apuração é simples, mas o custo é fixo sobre a receita bruta.",
            },
            {
              title: "CBS em 2027",
              body: "A CBS, estimada em cerca de 9,2%, é não cumulativa e permite crédito amplo sobre insumos vinculados à atividade econômica. Prestadores de serviço, cujo maior custo costuma ser folha de pagamento (que não gera crédito), tendem a sentir aumento real de carga.",
            },
            {
              title: "Perfil de custos define o impacto",
              body: "Empresas com estrutura de compras relevante, como insumos e materiais, podem compensar parte do aumento nominal com os novos créditos. Quem vive de mão de obra tende a ter menos créditos para abater.",
            },
          ],
        },
        {
          h2: "A mudança que já aconteceu: LC 224/2025",
          lead: "A LC 224/2025 já alterou a presunção de IRPJ/CSLL e se soma, sem se confundir, com a Reforma Tributária.",
          h3: [
            {
              title: "Aumento de 10% nos percentuais de presunção",
              body: "A Lei Complementar nº 224/2025 aumentou em 10% os percentuais de presunção de IRPJ e CSLL aplicados sobre a parcela da receita bruta anual que exceder R$ 5 milhões.",
            },
            {
              title: "Duas alterações distintas",
              body: "Esse efeito se soma à mudança da CBS, mas não se confunde com ela. São duas normas diferentes: a LC 224/2025 altera presunção de lucro para IRPJ/CSLL, enquanto a Reforma Tributária do Consumo trata de IBS/CBS.",
            },
          ],
        },
        {
          h2: "Por que o resultado varia tanto entre empresas",
          lead: "Com a CBS neutralizando a diferença do PIS/Cofins cumulativo, a escolha de regime volta a depender da margem real.",
          h3: [
            {
              title: "Antes da reforma",
              body: "A decisão entre Lucro Real e Lucro Presumido dependia muito do peso do PIS/Cofins cumulativo. Quem tinha poucos créditos preferia o Presumido.",
            },
            {
              title: "Depois da reforma",
              body: "Com a CBS neutralizando essa diferença entre os regimes, a escolha volta a depender principalmente da comparação entre a presunção legal de lucro e a margem real da empresa.",
            },
            {
              title: "Necessidade de simulação",
              body: "Não há resposta única. A mesma alíquota de CBS pode aumentar a carga de uma empresa e reduzir a de outra, dependendo da capacidade de gerar créditos.",
            },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Solução", label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario" },
        { eyebrow: "Solução", label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" },
        { eyebrow: "Leia também", label: "Reforma Tributária e Formação de Preço", to: "/conteudos/reforma-tributaria-formacao-preco-margem" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Dispositivos legais citados nesta análise sobre Lucro Presumido e Reforma Tributária.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar nº 214/2025 (Reforma Tributária do Consumo: instituição da CBS e das regras de crédito); Lei Complementar nº 224/2025 (alteração dos percentuais de presunção de IRPJ e CSLL para receita bruta anual que exceder R$ 5 milhões).
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fonte oficial: Receita Federal do Brasil / Comitê Gestor do IBS.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Revisao tecnica:{" "}
          <a href="/sobre/leandro/" className="underline decoration-gold/50 hover:text-foreground">
            Leandro Matsuoka Guimaraes
          </a>
          , socio-fundador e diretor tecnico da DCON. Contador com 22 anos de experiencia, bacharel em Direito e pos-graduado em Controladoria e Financas Corporativas. CRC-GO 16.395/O-9.
        </p>
        </div>
      </section>
    </PageScaffold>
  );
}
