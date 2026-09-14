import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/simples-puro-ou-hibrido-2027-como-decidir";
const H1 =
  "Simples Puro ou Híbrido em 2027: Como Decidir o Recolhimento de IBS e CBS";
const META_TITLE = "Simples puro ou híbrido em 2027: como decidir";
const META_DESCRIPTION =
  "Entenda a diferença entre Simples puro e híbrido para IBS e CBS em 2027, os prazos de opção e o checklist para decidir com segurança.";
const PUBLISHED = "14/09/2026";

const faq = [
  {
    q: "O Simples Nacional acaba em 2027?",
    a: "Não. A empresa continua optante do Simples Nacional para todos os demais tributos (IRPJ, CSLL, PIS, Cofins, CPP, ICMS, ISS), independentemente da escolha entre puro e híbrido para IBS e CBS.",
  },
  {
    q: "Preciso fazer alguma coisa se quiser manter tudo dentro do DAS?",
    a: "Não. Manter o Simples Puro é o padrão. Você só precisa acessar o Portal do Simples Nacional e fazer a solicitação ativa se desejar o regime híbrido.",
  },
  {
    q: "Perdi o prazo de setembro de 2026, ainda dá tempo?",
    a: "Sim. Existe uma segunda janela de opção entre 1 e 31 de março de 2027, mas ela terá efeitos apenas a partir de julho de 2027. Não recomendamos contar com essa janela como plano principal, pois ela reduz o tempo de adaptação operacional.",
  },
];

export const Route = createFileRoute("/conteudos/simples-puro-ou-hibrido-2027-como-decidir")({
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
            { "@type": "ListItem", position: 3, name: "Simples Puro ou Híbrido em 2027", item: "/conteudos/simples-puro-ou-hibrido-2027-como-decidir" },
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
      intro="Empresas do Simples Nacional enfrentam, pela primeira vez, uma decisão que vai além de 'qual regime paga menos imposto?'. A partir de 2027, será preciso escolher como recolher o IBS e a CBS: se mantidos dentro da guia única do DAS (Simples 'puro') ou se apurados por fora, pelas regras do regime regular (Simples 'híbrido'). Essa escolha impacta não apenas a sua carga tributária e o fluxo de caixa, mas também os créditos que seus clientes empresariais conseguem aproveitar, um fator que pode definir negociações comerciais."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Simples Puro ou Híbrido em 2027", to: SLUG },
      ]}
      audience={[
        "Empresas optantes do Simples Nacional",
        "Sócios e diretores financeiros",
        "Empresas B2B que vendem para outras empresas",
        "Empresas B2C que buscam simplicidade operacional",
      ]}
      ctaPrimary={{ label: "Solicitar simulação comparativa (Puro vs. Híbrido)", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver regimes tributários", to: "/conteudos/regimes-tributarios" }}
      respostaValidada="A partir de 2027, empresas do Simples Nacional devem escolher se recolhem IBS e CBS dentro do DAS (Simples Puro) ou pelo regime regular (Simples Híbrido). A opção pelo híbrido exige manifestação ativa no Portal do Simples Nacional, com janelas em setembro de 2026 e março de 2027. A escolha envolve carga tributária, fluxo de caixa e crédito que seus clientes empresariais podem aproveitar."
      faq={faq}
      sections={[
        {
          h2: "O que muda: Simples Puro vs. Híbrido",
          lead: "A partir de 2027, o Simples Nacional se divide em duas modalidades de recolhimento de IBS e CBS.",
          h3: [
            {
              title: "Simples Puro (Padrão)",
              body: "O IBS e a CBS continuam sendo recolhidos dentro do DAS, na guia única, junto com os demais tributos do regime. Oferece simplicidade operacional máxima, mas sem geração de crédito não cumulativo para o tomador do serviço ou comprador da mercadoria.",
            },
            {
              title: "Simples Híbrido (Regime Regular de IBS/CBS)",
              body: "A empresa permanece optante do Simples Nacional para IRPJ, CSLL, CPP e demais tributos, mas passa a apurar e recolher IBS e CBS separadamente, com destaque em nota fiscal e direito a não cumulatividade (mesma lógica do Lucro Presumido/Real).",
            },
            {
              title: "Base legal",
              body: "Art. 41 da Lei Complementar nº 214/2025 e Resolução CGSN nº 186/2026.",
            },
          ],
        },
        {
          h2: "Por que essa decisão importa mais do que parece",
          lead: "A pergunta estratégica não é apenas 'em qual opção pago menos imposto?'.",
          h3: [
            {
              title: "A pergunta estratégica",
              body: "A pergunta estratégica não é apenas 'em qual opção pago menos imposto?', mas também: 'quanto de crédito minha empresa gera para o meu cliente?'.",
            },
            {
              title: "Negócios B2C",
              body: "Para negócios B2C (varejo, serviços ao consumidor final): a simplicidade e a previsibilidade do Simples Puro tendem a pesar mais, já que o consumidor final não aproveita créditos tributários.",
            },
            {
              title: "Negócios B2B",
              body: "Para negócios B2B (indústrias, distribuidoras, atacadistas, prestadores de serviços a empresas): o regime híbrido pode ser um diferencial competitivo decisivo. Só ele permite que seu cliente empresarial aproveite o crédito integral de IBS/CBS destacado na operação, o que pode influenciar a escolha do fornecedor e abrir espaço para melhores negociações de preço.",
            },
          ],
        },
        {
          h2: "Prazos: duas janelas de decisão em 2026/2027",
          lead: "O Comitê Gestor do Simples Nacional (CGSN) estabeleceu um cronograma específico para essa transição.",
          h3: [
            {
              title: "1ª Janela (Principal)",
              body: "De 1 a 30 de setembro de 2026, com efeitos para o primeiro semestre de 2027 (janeiro a junho).",
            },
            {
              title: "2ª Janela (Contingencial)",
              body: "De 1 a 31 de março de 2027, para quem perdeu o prazo anterior, com efeitos para o segundo semestre de 2027 (julho a dezembro).",
            },
            {
              title: "Cancelamento",
              body: "A opção (tanto pelo Simples quanto pelo regime híbrido) pode ser cancelada até o último dia útil de novembro de 2026.",
            },
            {
              title: "Atenção: manter o Simples Puro",
              body: "Empresas que desejam manter o IBS e a CBS dentro do DAS (Simples Puro) não precisam fazer nada. O comportamento padrão do sistema é a manutenção do modelo atual. A ação é obrigatória apenas para quem deseja migrar para o híbrido.",
            },
          ],
        },
        {
          h2: "Um ponto de atenção real: fluxo de caixa",
          lead: "A decisão entre puro e híbrido não pode ignorar o efeito no fluxo de caixa.",
          h3: [
            {
              title: "Impacto temporário no caixa",
              body: "Especialistas alertam que recolher IBS e CBS fora do DAS pode gerar impacto temporário no fluxo de caixa. Isso ocorre porque, enquanto o split payment (separação automática do imposto no momento da transação) não está plenamente operacional — seu início obrigatório foi adiado para 2028 —, a empresa pode precisar desembolsar o valor do imposto antes de receber do cliente, dependendo das condições de pagamento negociadas.",
            },
            {
              title: "Decisão exige simulação financeira real",
              body: "Isso não invalida o regime híbrido, mas reforça que a decisão exige simulação financeira real, e não apenas intuição ou análise de alíquota nominal.",
            },
          ],
        },
        {
          h2: "Checklist para a tomada de decisão",
          lead: "Antes de optar, responda com sua equipe contábil e comercial.",
          h3: [
            {
              title: "01 — Proporção B2B vs. B2C",
              body: "Qual é a proporção real de vendas B2B vs. B2C da minha empresa?",
            },
            {
              title: "02 — Crédito para o cliente",
              body: "Meus clientes empresariais valorizam ou exigem a tomada de crédito integral de IBS/CBS?",
            },
            {
              title: "03 — Estrutura administrativa",
              body: "Minha estrutura administrativa/contábil suporta uma apuração mais detalhada (obrigações acessórias do regime regular) fora do DAS?",
            },
            {
              title: "04 — Impacto no caixa",
              body: "O impacto no fluxo de caixa é administrável na minha operação atual?",
            },
            {
              title: "05 — Simulação com números reais",
              body: "Já simulei os dois cenários com meus números reais de faturamento e custos, e não apenas com base em tabelas genéricas?",
            },
            {
              title: "06 — Contratos de venda/prestação",
              body: "Meus contratos de venda/prestação de serviços já preveem revisão para refletir o destaque de IBS/CBS?",
            },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Conteúdo", label: "Regimes Tributários", to: "/conteudos/regimes-tributarios" },
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
            Autor: <a href="/sobre/leandro" className="underline decoration-gold/50 hover:text-foreground">Leandro Matsuoka Guimarães</a> · Publicado em {PUBLISHED}.
          </p>
        </div>
      </section>
    </PageScaffold>
  );
}
