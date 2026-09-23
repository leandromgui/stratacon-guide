import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/divida-ativa-uniao-encaminhamento-pgfn";
const H1 = "Dívida Ativa da União: débitos vencidos há mais de 90 dias podem ser encaminhados à PGFN";
const META_TITLE = "Dívida Ativa da União: quando o débito vai para a PGFN";
const META_DESCRIPTION =
  "Entenda quando débitos vencidos há mais de 90 dias podem ser encaminhados à PGFN, os riscos da entrada de 10%/20% no reparcelamento e como funciona a Dívida Ativa da União.";
const PUBLISHED = "22/09/2026";

const faq: { q: string; a: string }[] = [];

export const Route = createFileRoute("/conteudos/divida-ativa-uniao-encaminhamento-pgfn")({
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
            { "@type": "ListItem", position: 3, name: H1, item: SLUG },
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
          datePublished: "2026-09-22",
          dateModified: "2026-09-22",
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
      eyebrow={`Defesa fiscal · ${PUBLISHED}`}
      h1={H1}
      lead="Quando a entrada de 10% ou 20% do reparcelamento compromete o caixa, o encaminhamento à PGFN pode ser analisado"
      intro="Empresas que tiveram parcelamentos rescindidos podem enfrentar uma dificuldade relevante ao tentar regularizar novamente seus débitos na Receita Federal: a entrada exigida para o reparcelamento. Atualmente, o reparcelamento perante a Receita Federal está condicionado ao pagamento de uma primeira prestação correspondente a 10% do total dos débitos consolidados, quando houver histórico de parcelamento anterior, ou 20% do total dos débitos consolidados, quando houver histórico de reparcelamento anterior. A regra está prevista no art. 17, parágrafo 1º, incisos I e II, da Instrução Normativa RFB nº 2.063/2022. A própria Receita esclarece que o histórico anterior independe da modalidade de parcelamento utilizada. Para empresas com dívidas elevadas, essa entrada pode consumir o capital de giro e impedir a regularização. Quando os débitos estão definitivamente constituídos, exigíveis e já ultrapassaram o prazo legal de encaminhamento, pode ser analisada a remessa da Receita Federal para a Procuradoria-Geral da Fazenda Nacional - PGFN. Na PGFN, a empresa poderá avaliar as modalidades disponíveis no Regularize, que podem apresentar entrada, prazo e condições diferentes das exigidas no reparcelamento da Receita Federal."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Dívida Ativa da União e PGFN", to: SLUG },
      ]}
      audience={[
        "Empresas com parcelamentos rescindidos na Receita Federal",
        "Empresas com débitos elevados e restrição de caixa",
        "Sócios e gestores em negociação com PGFN",
        "Empresas em regularização fiscal",
      ]}
      ctaPrimary={{ label: "Solicitar diagnóstico de regularização fiscal", to: "/diagnostico" }}
      ctaSecondary={{ label: "Entender a Regularização Fiscal", to: "/solucoes/regularizacao-fiscal" }}
      respostaValidada="Débitos definitivamente constituídos e exigíveis que já ultrapassaram o prazo legal de 90 dias podem ser analisados para encaminhamento à PGFN. A contagem do prazo depende da origem do débito: lançamento de ofício, declaração confessada, parcelamento rescindido, pedido de revisão ou pagamento em quotas."
      faq={faq}
      ctaVariant="risk"
      sections={[
        {
          h2: "Débitos vencidos há mais de 90 dias podem ser encaminhados à PGFN?",
          lead: "A legislação determina que os débitos tributários ou não tributários definitivamente constituídos e exigíveis sejam encaminhados à PGFN para controle de legalidade e inscrição em Dívida Ativa da União.",
          h3: [
            { title: "Prazo legal de 90 dias", body: "O art. 2º da Portaria MF nº 447/2018 estabelece que, dentro de 90 dias da data em que se tornarem exigíveis, os débitos devem ser encaminhados pela Receita Federal à PGFN para controle de legalidade e inscrição em Dívida Ativa da União." },
            { title: "Fundamento no Decreto-Lei nº 147/1967", body: "O art. 22 do Decreto-Lei nº 147/1967 determina o encaminhamento dos débitos à Procuradoria após o encerramento do processo ou expediente administrativo e o transcurso do prazo para pagamento." },
            { title: "Análise jurídica da data", body: "Débitos que já ultrapassaram o prazo legal de 90 dias podem ser objeto de análise e requerimento administrativo para encaminhamento à PGFN. Entretanto, não basta olhar apenas a data original de vencimento. É necessário determinar juridicamente quando começou a contagem dos 90 dias." },
          ],
        },
        {
          h2: "De quando começa a contagem dos 90 dias?",
          lead: "A Portaria MF nº 447/2018 diferencia a contagem conforme a origem e a situação do débito.",
          h3: [
            { title: "Débitos constituídos por lançamento de ofício", body: "Nos débitos tributários constituídos por lançamento de ofício, o prazo começa depois de esgotado o período de 30 dias para cobrança amigável, sem pagamento, extinção ou suspensão da exigibilidade." },
            { title: "Débitos confessados em declaração", body: "Nos débitos confessados pelo contribuinte, como valores informados em declarações fiscais, a contagem considera o término do prazo de 30 dias estabelecido na primeira intimação para recolhimento." },
            { title: "Débitos incluídos em parcelamento", body: "Quando o débito estava parcelado na Receita Federal, o prazo de encaminhamento começa depois da rescisão definitiva do parcelamento, conforme o art. 2º, parágrafo 2º, da Portaria MF nº 447/2018. Isso significa que um tributo pode ter vencido há vários anos, mas, se o parcelamento foi rescindido recentemente, a contagem dos 90 dias deve considerar a data da rescisão definitiva." },
            { title: "Débitos com pedido de revisão", body: "Quando existe pedido de revisão pendente, o prazo começa após 30 dias da ciência da decisão sobre o pedido, conforme o art. 2º, parágrafo 3º, da Portaria MF nº 447/2018." },
            { title: "Débitos sujeitos a pagamento em quotas", body: "Nos débitos sujeitos a quotas mensais, a contagem observa o vencimento da última quota e as regras específicas da Portaria." },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Solução", label: "Regularização Fiscal", to: "/solucoes/regularizacao-fiscal" },
        { eyebrow: "Solução", label: "Defesas Fiscais", to: "/solucoes/defesas-fiscais" },
        { eyebrow: "Leia também", label: "LC 236/2026: processo administrativo fiscal", to: "/conteudos/lc-236-2026-processo-administrativo-fiscal" },
        { eyebrow: "Primeiro passo", label: "Diagnóstico Fiscal e Contábil", to: "/diagnostico" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Os dispositivos citados nesta análise tratam do reparcelamento, do encaminhamento à PGFN e da contagem do prazo legal.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Instrução Normativa RFB nº 2.063/2022, art. 17, parágrafo 1º, incisos I e II; Portaria MF nº 447/2018, art. 2º e parágrafos; Decreto-Lei nº 147/1967, art. 22; Portaria PGFN nº 33/2018, com a redação dada pela Portaria PGFN nº 660/2018, art. 3º.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fontes oficiais: Receita Federal do Brasil —{" "}
            <a
              href="https://www.gov.br/receitafederal"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/50 hover:text-foreground"
            >
              https://www.gov.br/receitafederal
            </a>
            ; Procuradoria-Geral da Fazenda Nacional —{" "}
            <a
              href="https://www.gov.br/pgfn"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/50 hover:text-foreground"
            >
              https://www.gov.br/pgfn
            </a>
            .
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
