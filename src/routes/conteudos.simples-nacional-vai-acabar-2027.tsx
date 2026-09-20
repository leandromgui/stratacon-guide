import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/simples-nacional-vai-acabar-2027";
const H1 = "Simples Nacional vai acabar em 2027? O que realmente muda";
const META_TITLE = "Simples Nacional vai acabar em 2027? Entenda o mito";
const META_DESCRIPTION =
  "A desinformação sobre o fim do Simples Nacional está gerando pânico desnecessário. Entenda o que realmente muda em 2027 e o que continua igual.";
const PUBLISHED = "17/09/2026";

const faq = [
  {
    q: "O limite de faturamento do Simples muda em 2027?",
    a: "Não. A reforma tributária altera apenas a tributação sobre o consumo (IBS/CBS), não o sublimite de enquadramento das ME e EPP.",
  },
  {
    q: "Se eu optar pelo regime híbrido, perco os benefícios de IRPJ e CSLL do Simples?",
    a: "Não. O Simples Híbrido mantém todos os benefícios do regime unificado para tributos sobre a renda e folha, apenas o IBS e a CBS passam a ser apurados no regime regular.",
  },
  {
    q: "Onde encontro mais detalhes sobre como decidir entre Puro e Híbrido?",
    a: "Há um artigo específico sobre isso no site: Simples Puro ou Híbrido em 2027 — como decidir o recolhimento de IBS e CBS.",
  },
];

export const Route = createFileRoute("/conteudos/simples-nacional-vai-acabar-2027")({
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
            { "@type": "ListItem", position: 3, name: "Simples Nacional vai acabar em 2027?", item: "/conteudos/simples-nacional-vai-acabar-2027" },
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
      intro="A desinformação sobre o fim do Simples Nacional está gerando pânico desnecessário em muitos empresários. A resposta direta é: o Simples Nacional não vai acabar. O que muda é como o IBS e a CBS são recolhidos dentro dele."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Simples Nacional vai acabar em 2027?", to: SLUG },
      ]}
      audience={[
        "Empresas optantes do Simples Nacional",
        "Microempresas (ME) e empresas de pequeno porte (EPP)",
        "Sócios e gestores em dúvida sobre a reforma tributária",
        "Empresas preocupadas com o 'fim do Simples'",
      ]}
      ctaPrimary={{ label: "Solicitar diagnóstico de enquadramento tributário", to: "/diagnostico" }}
      ctaSecondary={{ label: "Simples Puro ou Híbrido: como decidir", to: "/conteudos/simples-puro-ou-hibrido-2027-como-decidir" }}
      respostaValidada="O Simples Nacional não vai acabar em 2027. O regime unificado para ME e EPP continua existindo, com o DAS como guia única para IRPJ, CSLL, CPP e demais tributos. O que muda é apenas como o IBS e a CBS são recolhidos: dentro do DAS (Simples Puro) ou apurados separadamente no regime regular (Simples Híbrido). A alíquota efetiva do Simples Puro foi desenhada para ficar próxima da carga atual."
      faq={faq}
      sections={[
        {
          h2: "O que NÃO muda",
          lead: "O Simples Nacional continua existindo como regime unificado para ME e EPP.",
          h3: [
            {
              title: "Regime unificado preservado",
              body: "O Simples Nacional continua existindo como regime unificado para ME e EPP.",
            },
            {
              title: "DAS mantido",
              body: "O DAS continua sendo a guia única para IRPJ, CSLL, CPP e demais tributos.",
            },
            {
              title: "Sublimite de faturamento",
              body: "O sublimite de faturamento não foi alterado por essa mudança.",
            },
          ],
        },
        {
          h2: "O que muda",
          lead: "A partir de 2027, existe uma nova escolha dentro do Simples.",
          h3: [
            {
              title: "Nova escolha dentro do Simples",
              body: "A partir de 2027, existe uma nova escolha dentro do Simples: manter IBS e CBS na guia única (Simples Puro) ou apurá-los separadamente, com crédito integral para o cliente (Simples Híbrido).",
            },
          ],
        },
        {
          h2: "Por que o pânico é desproporcional",
          lead: "A alíquota efetiva do Simples Puro foi desenhada para ficar próxima da carga atual.",
          h3: [
            {
              title: "Carga tributária",
              body: "A alíquota efetiva do Simples Puro foi desenhada para ficar próxima da carga atual.",
            },
            {
              title: "O risco real não é pagar mais imposto",
              body: "O risco real não é pagar mais imposto, é perder competitividade comercial no B2B por não gerar crédito, não a extinção do regime.",
            },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Leia também", label: "Simples Puro ou Híbrido em 2027: como decidir", to: "/conteudos/simples-puro-ou-hibrido-2027-como-decidir" },
        { eyebrow: "Leia também", label: "Prazo de opção pelo regime regular de IBS/CBS no Simples", to: "/conteudos/prazo-opcao-regime-regular-ibs-cbs-simples" },
        { eyebrow: "Solução", label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Os dispositivos citados nesta análise estão na Lei Complementar nº 214/2025 e na Resolução CGSN nº 186/2026.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar nº 214/2025, art. 41; Resolução CGSN nº 186/2026.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fontes oficiais: Receita Federal do Brasil — Portal do Simples Nacional ({" "}
            <a
              href="https://www8.receita.fazenda.gov.br/SimplesNacional/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/50 hover:text-foreground"
            >
              https://www8.receita.fazenda.gov.br/SimplesNacional/
            </a>
            ); Comitê Gestor do Simples Nacional (CGSN) — Resolução nº 186/2026.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Autor: <a href="/sobre/leandro/" className="underline decoration-gold/50 hover:text-foreground">Leandro Matsuoka Guimarães</a> · Publicado em {PUBLISHED}.
          </p>
        </div>
      </section>
    </PageScaffold>
  );
}
