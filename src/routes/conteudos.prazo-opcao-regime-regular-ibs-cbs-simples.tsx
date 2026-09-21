import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/prazo-opcao-regime-regular-ibs-cbs-simples";
const H1 =
  "Prazo e Regras para Optar pelo Regime Regular de IBS e CBS no Simples Nacional";
const META_TITLE = "Prazo para optar pelo regime regular de IBS e CBS no Simples";
const META_DESCRIPTION =
  "Empresas do Simples que não optarem pelo regime regular de IBS/CBS até 30 de setembro de 2026 ficam automaticamente no Simples Puro. Entenda as regras.";
const PUBLISHED = "14/09/2026";

const faq = [
  {
    q: "Preciso fazer algo se quiser manter tudo dentro do DAS?",
    a: "Não. Manter o Simples Puro é o padrão. Só é preciso agir se quiser migrar para o híbrido.",
  },
  {
    q: "Posso cancelar a opção depois de feita?",
    a: "Sim, até o último dia útil de novembro de 2026.",
  },
  {
    q: "Perdi o prazo de setembro, ainda dá tempo?",
    a: "Sim, há uma segunda janela entre 1 e 31 de março de 2027, com efeitos a partir de julho de 2027.",
  },
];

export const Route = createFileRoute("/conteudos/prazo-opcao-regime-regular-ibs-cbs-simples")({
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
            { "@type": "ListItem", position: 3, name: "Prazo e Regras para Optar pelo Regime Regular de IBS e CBS", item: "/conteudos/prazo-opcao-regime-regular-ibs-cbs-simples" },
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
      intro="Empresas do Simples Nacional que não optarem ativamente pelo regime regular de IBS/CBS até 30 de setembro de 2026 ficarão automaticamente no modelo Simples Puro, recolhendo os novos tributos dentro da guia única do DAS. Se sua empresa vende para outras empresas (B2B) e seus clientes precisam tomar crédito de IBS/CBS, não optar pelo regime híbrido pode significar perder contratos ou clientes para concorrentes que geram crédito integral."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Prazo e Regras para Optar pelo Regime Regular de IBS e CBS", to: SLUG },
      ]}
      audience={[
        "Empresas optantes do Simples Nacional",
        "Sócios e diretores financeiros",
        "Empresas B2B que vendem para outras empresas",
        "Escritórios de contabilidade que assessoram optantes do Simples",
      ]}
      ctaPrimary={{ label: "Solicitar simulação comparativa antes do prazo de 30/09", to: "/diagnostico" }}
      ctaSecondary={{ label: "Simples Puro ou Híbrido: como decidir", to: "/conteudos/simples-puro-ou-hibrido-2027-como-decidir" }}
      respostaValidada="Empresas do Simples Nacional que não manifestarem opção ativa pelo regime híbrido de IBS/CBS até 30 de setembro de 2026 serão mantidas automaticamente no Simples Puro, com recolhimento dos novos tributos dentro do DAS. Quem deseja gerar crédito integral para clientes empresariais deve optar pela apuração separada, respeitando as janelas previstas na Resolução CGSN nº 186/2026."
      faq={faq}
      sections={[
        {
          h2: "Opção ativa vs. omissão",
          lead: "O comportamento padrão não exige ação. A mudança para o regime híbrido exige manifestação expressa.",
          h3: [
            {
              title: "Comportamento padrão (Simples Puro)",
              body: "Se você não fizer nada, IBS e CBS continuam dentro do DAS, na guia única, junto com os demais tributos do Simples. Simplicidade operacional máxima, mas sem geração de crédito para seus clientes empresariais.",
            },
            {
              title: "Opção ativa (Simples Híbrido)",
              body: "Você permanece no Simples Nacional para IRPJ, CSLL, CPP e demais tributos, mas passa a apurar e recolher IBS e CBS separadamente, com destaque em nota fiscal e direito à não cumulatividade. Seus clientes empresariais podem tomar crédito integral.",
            },
            {
              title: "Base legal",
              body: "Art. 41 da Lei Complementar nº 214/2025 e Resolução CGSN nº 186/2026.",
            },
          ],
        },
        {
          h2: "Documentação e conformidade exigidas para o regime híbrido",
          lead: "Optar pelo regime híbrido não é apenas acessar o portal. Exige adequação operacional da empresa.",
          h3: [
            {
              title: "Parametrização do ERP",
              body: "O sistema precisa emitir nota fiscal com destaque separado de IBS/CBS e gerar as obrigações acessórias do regime regular.",
            },
            {
              title: "Capacitação da equipe fiscal",
              body: "A equipe contábil deve saber apurar créditos e escriturar os livros específicos exigidos para o regime regular.",
            },
            {
              title: "Revisão de contratos de venda",
              body: "Os contratos de venda e prestação de serviços devem prever o destaque de IBS/CBS e a forma de repasse, evitando desentendimento com clientes.",
            },
            {
              title: "Atenção ao fluxo de caixa",
              body: (
                <>
                  Recolher fora do DAS pode exigir desembolso antes do recebimento do cliente enquanto o split payment não opera (adiado para{" "}
                  <a
                    href="/conteudos/split-payment-adiado-2028-o-que-muda/"
                    className="underline decoration-gold/50 hover:text-foreground"
                  >
                    2028
                  </a>
                  ).
                </>
              ),
            },
          ],
        },
        {
          h2: "Prazos",
          lead: "O cronograma tem janela principal, janela contingencial e prazo para cancelamento.",
          h3: [
            {
              title: "1ª Janela (Principal)",
              body: "De 1 a 30 de setembro de 2026, com efeitos para o primeiro semestre de 2027.",
            },
            {
              title: "2ª Janela (Contingencial)",
              body: "De 1 a 31 de março de 2027, para quem perdeu o prazo anterior, com efeitos para o segundo semestre de 2027.",
            },
            {
              title: "Cancelamento",
              body: "A opção pode ser cancelada até o último dia útil de novembro de 2026.",
            },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Conteúdo", label: "Simples Puro ou Híbrido em 2027", to: "/conteudos/simples-puro-ou-hibrido-2027-como-decidir" },
        { eyebrow: "Solução", label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" },
        { eyebrow: "Leia também", label: "Split Payment adiado para 2028", to: "/conteudos/split-payment-adiado-2028-o-que-muda" },
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
            Lei Complementar nº 214/2025, art. 41 (opção pelo regime regular de recolhimento de IBS e CBS para optantes do Simples Nacional). Resolução CGSN nº 186/2026 (cronograma e procedimentos de opção pelo Simples Híbrido).
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
