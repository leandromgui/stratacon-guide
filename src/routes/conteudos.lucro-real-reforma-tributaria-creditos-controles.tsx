import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/lucro-real-reforma-tributaria-creditos-controles";
const H1 = "Lucro Real na Reforma Tributária: créditos, controles e risco fiscal";
const META_TITLE = "Lucro Real na Reforma Tributária: o que muda em 2027";
const META_DESCRIPTION =
  "Empresas do Lucro Real já operam no regime não cumulativo de PIS/Cofins. Entenda por que a transição para a CBS tende a ser mais previsível, mas exige mais controle.";
const PUBLISHED = "14/09/2026";

const faq = [
  {
    q: "O Lucro Real fica automaticamente mais vantajoso com a reforma?",
    a: "Não necessariamente. Depende do perfil de crédito de cada empresa, a neutralização de PIS/Cofins faz a escolha de regime voltar a depender principalmente de IRPJ e CSLL.",
  },
  {
    q: "Empresas do Lucro Real precisam mudar processos internos?",
    a: "Sim. A apuração unificada de IBS/CBS e a dependência da regularidade dos fornecedores exigem controles mais rigorosos do que a rotina atual.",
  },
  {
    q: "O crédito de PIS/Cofins já acumulado se perde na transição?",
    a: "Não existe indicação de perda automática, mas a manutenção do direito depende de escrituração correta, o que reforça a importância de organizar a documentação desde já.",
  },
];

export const Route = createFileRoute("/conteudos/lucro-real-reforma-tributaria-creditos-controles")({
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
            { "@type": "ListItem", position: 3, name: "Lucro Real na Reforma Tributária: créditos, controles e risco fiscal", item: "/conteudos/lucro-real-reforma-tributaria-creditos-controles" },
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
      intro="Empresas do Lucro Real já operam hoje no regime não cumulativo de PIS/Cofins, com alíquota efetiva próxima de 10,2% e direito a crédito, o que torna a transição para a CBS proporcionalmente mais previsível que para o Lucro Presumido. Mas mais previsível não significa sem trabalho: a lógica de crédito muda, e o controle sobre fornecedores se torna decisivo."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Lucro Real na Reforma Tributária: créditos, controles e risco fiscal", to: SLUG },
      ]}
      audience={[
        "Empresas enquadradas no Lucro Real",
        "Sócios e gestores financeiros que decidem regime tributário",
        "Empresas com cadeia de fornecedores complexa",
        "Escritórios de contabilidade que assessoram empresas sob a nova reforma",
      ]}
      ctaPrimary={{ label: "Solicitar diagnóstico de conformidade fiscal para a transição", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver departamento fiscal", to: "/solucoes/departamento-fiscal" }}
      respostaValidada="A transição do Lucro Real para a CBS tende a ser mais previsível que a do Lucro Presumido porque o regime já opera com não cumulatividade de PIS/Cofins. Mas a apuração unificada de IBS/CBS exige documentação fiscal rigorosa, e o crédito do adquirente passa a depender da regularidade do fornecedor. A escolha entre Lucro Real e Lucro Presumido volta a depender principalmente de IRPJ/CSLL."
      faq={faq}
      sections={[
        {
          h2: "O que muda na apuração",
          lead: "PIS/Cofins por dentro, com alíquota efetiva próxima de 10,2%, é substituído pela CBS por fora, estimada em torno de 9%, com créditos mais amplos.",
          h3: [
            {
              title: "Substituição tributária",
              body: "PIS/Cofins por dentro, com alíquota efetiva de cerca de 10,2%, é substituído pela CBS por fora, estimada em torno de 9%, com créditos mais amplos. A empresa deixa de apurar PIS, Cofins, ICMS e ISS separadamente e passa a apurar IBS e CBS de forma unificada.",
            },
            {
              title: "Documentação fiscal mais rigorosa",
              body: "A unificação da apuração exige documentação fiscal mais rigorosa em cada etapa da cadeia. Notas fiscais, escriturações e controles de cadastro de fornecedores passam a ser ainda mais decisivos para o reconhecimento do crédito.",
            },
          ],
        },
        {
          h2: "O crédito passa a depender do fornecedor",
          lead: "No novo sistema, o direito ao crédito do adquirente depende diretamente da regularidade fiscal de quem emitiu a nota.",
          h3: [
            {
              title: "Regularidade do emitente",
              body: "No novo sistema, o direito ao crédito do adquirente depende diretamente da regularidade fiscal de quem emitiu a nota. Fornecedor que não destaca corretamente IBS/CBS, ou que está com cadastro irregular, pode gerar glosa de crédito na outra ponta da cadeia, mesmo quando a operação é legítima.",
            },
            {
              title: "Controle de cadeia",
              body: "Empresas do Lucro Real precisam revisar a qualidade fiscal dos fornecedores, exigir correta destinação dos impostos nas notas e manter cadastros atualizados para evitar perda de crédito.",
            },
          ],
        },
        {
          h2: "Por que a decisão de regime volta a depender de IRPJ/CSLL",
          lead: "Com a CBS neutralizando a diferença do PIS/Cofins entre os regimes, a escolha volta a depender da margem real versus a presunção legal de lucro.",
          h3: [
            {
              title: "Antes da reforma",
              body: "Antes da reforma, a diferença de tributação de PIS/Cofins entre Lucro Real e Lucro Presumido pesava na escolha do regime. Quem tinha créditos robustos tendia ao Lucro Real; quem não tinha, ao Presumido.",
            },
            {
              title: "Depois da reforma",
              body: "Com a CBS neutralizando essa diferença entre os dois regimes, a decisão volta a depender principalmente da comparação entre a margem real da empresa e a presunção legal de lucro.",
            },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Solução", label: "Departamento Fiscal", to: "/solucoes/departamento-fiscal" },
        { eyebrow: "Solução", label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" },
        { eyebrow: "Leia também", label: "Lucro Presumido na Reforma Tributária: riscos e oportunidades", to: "/conteudos/lucro-presumido-reforma-tributaria-riscos-oportunidades" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Dispositivo legal citado nesta análise sobre Lucro Real e Reforma Tributária.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar nº 214/2025 (Reforma Tributária do Consumo: instituição da CBS e das regras de crédito).
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fonte oficial: Receita Federal do Brasil / Comitê Gestor do IBS.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Revisão técnica:{" "}
          <a href="/sobre/leandro/" className="underline decoration-gold/50 hover:text-foreground">
            Leandro Matsuoka Guimarães
          </a>
          , sócio-fundador e diretor técnico da DCON. Contador com 22 anos de experiência, bacharel em Direito e pós-graduado em Controladoria e Finanças Corporativas. CRC-GO 16.395/O-9.
        </p>
        </div>
      </section>
    </PageScaffold>
  );
}
