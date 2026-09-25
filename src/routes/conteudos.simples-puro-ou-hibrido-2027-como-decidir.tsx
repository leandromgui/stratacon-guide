import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/simples-puro-ou-hibrido-2027-como-decidir";
const H1 = "Simples Nacional Puro ou Híbrido: Qual Escolher na Reforma Tributária?";
const META_TITLE = "Simples puro ou híbrido: como decidir em 2027";
const META_DESCRIPTION =
  "Compare Simples Nacional puro e híbrido: DAS, créditos de IBS/CBS, clientes B2B, folha, preços, riscos e critérios para escolher em 2027.";
const PUBLISHED = "21/09/2026";

const faq = [
  {
    q: "O Simples Nacional acaba em 2027?",
    a: "Não. A reforma altera apenas a forma de tratar IBS e CBS dentro do regime, não extingue o Simples Nacional.",
  },
  {
    q: "A empresa híbrida continua no Simples?",
    a: "Sim. Apenas IBS e CBS saem da apuração unificada; os demais tributos permanecem no DAS.",
  },
  {
    q: "Folha gera crédito no híbrido?",
    a: "Não. Salários e encargos não geram crédito ordinário de IBS e CBS em nenhum dos dois modelos.",
  },
  {
    q: "O híbrido sempre paga menos?",
    a: "Não necessariamente. Depende do volume de compras creditáveis e do perfil de clientes de cada empresa — exige simulação específica.",
  },
  {
    q: "Quando deve ser feita a opção?",
    a: "Nos meses de março e setembro, para vigência no semestre seguinte, conforme o cronograma oficial do CGSN.",
  },
];

const tableClasses = "w-full text-[14px] border-collapse border border-border";
const thClasses = "text-left p-3 border-b border-border bg-secondary font-display text-[15px]";
const tdClasses = "p-3 border-b border-border align-top";
const trClasses = "even:bg-card";

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
            { "@type": "ListItem", position: 1, name: "Início", item: "https://dcon.cnt.br/" },
            { "@type": "ListItem", position: 2, name: "Insights", item: "https://dcon.cnt.br/conteudos/" },
            { "@type": "ListItem", position: 3, name: "Simples Nacional Puro ou Híbrido", item: "https://dcon.cnt.br/conteudos/simples-puro-ou-hibrido-2027-como-decidir/" },
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
          datePublished: "2026-09-21",
          dateModified: "2026-09-21",
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
      intro="A Reforma Tributária não acaba com o Simples Nacional, mas cria uma decisão nova para micro e pequenas empresas. A partir de 2027, a empresa poderá permanecer no Simples Nacional puro, recolhendo IBS e CBS dentro do DAS, ou optar pelo Simples Nacional híbrido, permanecendo no Simples para os demais tributos, mas apurando IBS e CBS pelo regime regular. A escolha não deve ser feita olhando apenas para a alíquota do DAS — depende do perfil dos clientes, das compras que geram crédito, da folha de pagamento, da margem, do setor e do impacto do crédito tributário na competitividade."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Simples Nacional Puro ou Híbrido", to: SLUG },
      ]}
      audience={[
        "Empresas optantes do Simples Nacional",
        "Sócios e diretores financeiros",
        "Empresas B2B que vendem para outras empresas",
        "Empresas B2C que buscam simplicidade operacional",
      ]}
      ctaPrimary={{ label: "Solicitar simulação de Simples Nacional puro versus híbrido", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver regimes tributários", to: "/conteudos/regimes-tributarios" }}
      faq={faq}
      ctaVariant="simplesPuroHibrido"
      sections={[
        {
          h2: "O que é o Simples Nacional puro?",
          lead: "No Simples Nacional puro, a empresa permanece integralmente na sistemática unificada. IBS e CBS ficam incluídos no Simples Nacional, são calculados dentro da apuração unificada e recolhidos no DAS. A empresa não entra na sistemática plena de débitos e créditos do IBS/CBS, e o cliente contribuinte pode aproveitar crédito limitado ao valor correspondente a IBS/CBS efetivamente suportado na sistemática do Simples.",
          h3: [
            {
              title: "Principal vantagem",
              body: "Menor complexidade operacional, recolhimento unificado, menor necessidade de capital de giro tributário, potencial vantagem para empresas B2C e negócios com folha elevada e poucas compras creditáveis.",
            },
            {
              title: "Principal desvantagem",
              body: "Pode elevar o custo tributário embutido nas compras, reduzir o crédito transferido aos clientes e prejudicar a competitividade no mercado B2B.",
            },
          ],
        },
        {
          h2: "O que é o Simples Nacional híbrido?",
          lead: "No Simples Nacional híbrido, a empresa continua optante pelo Simples Nacional, mas escolhe apurar IBS e CBS no regime regular. IRPJ, CSLL e CPP continuam no Simples, mas IBS e CBS saem do recolhimento unificado, são apurados fora do DAS, e a empresa passa a debitar IBS/CBS nas vendas e pode apropriar créditos das aquisições tributadas, podendo transferir crédito mais amplo aos clientes. A empresa entra na apuração assistida e passa a conviver com split payment e controles do regime regular.",
          h3: [],
        },
        {
          h2: "Comparativo geral",
          lead: "Quadro comparativo entre as duas modalidades previstas para 2027.",
          h3: [
            {
              title: "Cenários lado a lado",
              body: (
                <table className={tableClasses}>
                  <thead>
                    <tr>
                      <th className={thClasses}>Critério</th>
                      <th className={thClasses}>Simples puro</th>
                      <th className={thClasses}>Simples híbrido</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={trClasses}>
                      <td className={tdClasses}>IBS/CBS</td>
                      <td className={tdClasses}>Dentro do Simples</td>
                      <td className={tdClasses}>Fora do DAS</td>
                    </tr>
                    <tr className={trClasses}>
                      <td className={tdClasses}>Recolhimento</td>
                      <td className={tdClasses}>DAS</td>
                      <td className={tdClasses}>DAS + apuração regular de IBS/CBS</td>
                    </tr>
                    <tr className={trClasses}>
                      <td className={tdClasses}>Crédito sobre compras</td>
                      <td className={tdClasses}>Sem apropriação ampla</td>
                      <td className={tdClasses}>Pode apropriar créditos</td>
                    </tr>
                    <tr className={trClasses}>
                      <td className={tdClasses}>Crédito para cliente PJ</td>
                      <td className={tdClasses}>Limitado ao valor legal do Simples</td>
                      <td className={tdClasses}>Crédito correspondente ao regime regular</td>
                    </tr>
                    <tr className={trClasses}>
                      <td className={tdClasses}>Complexidade</td>
                      <td className={tdClasses}>Menor</td>
                      <td className={tdClasses}>Maior</td>
                    </tr>
                    <tr className={trClasses}>
                      <td className={tdClasses}>Folha gera crédito</td>
                      <td className={tdClasses}>Não</td>
                      <td className={tdClasses}>Não</td>
                    </tr>
                    <tr className={trClasses}>
                      <td className={tdClasses}>Melhor aderência provável</td>
                      <td className={tdClasses}>B2C e pouca compra creditável</td>
                      <td className={tdClasses}>B2B e compras tributadas relevantes</td>
                    </tr>
                    <tr className={trClasses}>
                      <td className={tdClasses}>Necessidade de ERP</td>
                      <td className={tdClasses}>Menor</td>
                      <td className={tdClasses}>Significativamente maior</td>
                    </tr>
                  </tbody>
                </table>
              ),
            },
          ],
        },
        {
          h2: "Por que a escolha não é apenas uma comparação de alíquotas",
          lead: "A comparação precisa considerar três dimensões: 1) carga tributária da própria empresa (DAS, IBS, CBS, custos de conformidade), 2) crédito recebido nas compras (quanto a empresa recupera sobre insumos, energia, serviços, ativo imobilizado), e 3) crédito transferido aos clientes (quanto o cliente pode descontar ao comprar dessa empresa). Em muitos negócios B2B, o terceiro ponto pode ser tão importante quanto o primeiro.",
          h3: [
            {
              title: "Carga tributária própria",
              body: "Inclui DAS, IBS, CBS e os custos operacionais de conformidade exigidos por cada regime.",
            },
            {
              title: "Crédito recebido nas compras",
              body: "Quanto a empresa consegue recuperar sobre insumos, energia, serviços e ativo imobilizado, de acordo com o regime de cada fornecedor.",
            },
            {
              title: "Crédito transferido aos clientes",
              body: "Quanto o cliente contribuinte pode descontar ao comprar da empresa — fator decisivo em negociações B2B.",
            },
          ],
        },
        {
          h2: "Quem tende a se beneficiar do Simples Nacional puro?",
          lead: "Pode ser mais adequado quando a empresa vende principalmente para consumidor final, possui folha elevada, possui poucas compras tributadas, presta serviços intelectuais dependentes do trabalho dos sócios, compra de fornecedores também optantes pelo Simples, ou não tem grandes investimentos.",
          h3: [
            {
              title: "Exemplos de negócios",
              body: "Consultórios, salões de beleza, restaurantes voltados ao consumidor, pequenos varejistas, escritórios profissionais com folha elevada.",
            },
          ],
        },
        {
          h2: "Quem tende a avaliar o Simples Nacional híbrido?",
          lead: "Merece atenção quando a empresa vende majoritariamente para outras empresas, fornece para empresas do Lucro Real ou Presumido, atua no atacado ou indústria, tem compras tributadas relevantes, investe em máquinas e equipamentos, ou sofre pressão comercial por crédito.",
          h3: [
            {
              title: "Exemplos de negócios",
              body: "Indústria, atacadista, distribuidora, comércio B2B, empresa de tecnologia para clientes corporativos, transportadora.",
            },
          ],
        },
        {
          h2: "O perfil dos clientes pode decidir o regime",
          lead: "O tipo de cliente influencia diretamente a conveniência de cada modalidade.",
          h3: [
            {
              title: "Cliente pessoa física",
              body: "Não aproveita créditos de IBS e CBS. Para vendas B2C, o Simples puro pode manter vantagem competitiva.",
            },
            {
              title: "Cliente pessoa jurídica contribuinte",
              body: "Compara o custo líquido (preço pago menos crédito aproveitável). Mesmo com preço bruto maior, o híbrido pode ser mais competitivo para o cliente contribuinte, dependendo do crédito transferido.",
            },
          ],
        },
        {
          h2: "Folha de pagamento — o ponto mais sensível do híbrido",
          lead: "Salários e encargos não geram crédito ordinário de IBS/CBS. Empresas com folha elevada e poucas compras tributadas podem ter débito elevado nas vendas, poucos créditos, e aumento da carga efetiva no modelo híbrido.",
          h3: [
            {
              title: "Empresas que precisam de cuidado especial",
              body: "Consultorias, agências, escritórios, clínicas, escolas — onde a folha é o principal custo.",
            },
          ],
        },
        {
          h2: "Compras de fornecedores do Simples puro",
          lead: "Uma empresa híbrida que compra de fornecedor do Simples puro recebe crédito limitado ao valor legalmente transferido pelo regime simplificado, não à alíquota cheia. O híbrido não garante crédito integral sobre todas as aquisições — depende do regime de cada fornecedor.",
          h3: [],
        },
        {
          h2: "Prazo e efeitos da opção",
          lead: "A opção é feita nos meses de março e setembro e vale para o semestre civil seguinte. Para o primeiro semestre de 2027, a opção deve ser feita até 30 de setembro de 2026, conforme o Manual oficial da Receita/CGSN sobre a opção pelo regime regular do IBS e da CBS no Simples Nacional. A empresa não pode alterar o regime todo mês — a decisão deve projetar o semestre completo.",
          h3: [
            {
              title: "Janela principal",
              body: "Setembro de 2026, com efeitos para o primeiro semestre de 2027.",
            },
            {
              title: "Janela complementar",
              body: "Março de 2027, com efeitos para o segundo semestre de 2027.",
            },
          ],
        },
        {
          h2: "Matriz de decisão resumida",
          lead: "Síntese dos fatores que empurram a decisão para um lado ou para outro.",
          h3: [
            {
              title: "Favorece puro vs. favorece híbrido",
              body: (
                <table className={tableClasses}>
                  <thead>
                    <tr>
                      <th className={thClasses}>Critério</th>
                      <th className={thClasses}>Favorece puro</th>
                      <th className={thClasses}>Favorece híbrido</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={trClasses}>
                      <td className={tdClasses}>Clientes pessoas físicas</td>
                      <td className={tdClasses}>Alto</td>
                      <td className={tdClasses}>Baixo</td>
                    </tr>
                    <tr className={trClasses}>
                      <td className={tdClasses}>Clientes empresariais</td>
                      <td className={tdClasses}>Baixo</td>
                      <td className={tdClasses}>Alto</td>
                    </tr>
                    <tr className={trClasses}>
                      <td className={tdClasses}>Folha elevada</td>
                      <td className={tdClasses}>Alto</td>
                      <td className={tdClasses}>Baixo</td>
                    </tr>
                    <tr className={trClasses}>
                      <td className={tdClasses}>Compras tributadas elevadas</td>
                      <td className={tdClasses}>Baixo</td>
                      <td className={tdClasses}>Alto</td>
                    </tr>
                    <tr className={trClasses}>
                      <td className={tdClasses}>Operação B2C</td>
                      <td className={tdClasses}>Alto</td>
                      <td className={tdClasses}>Baixo</td>
                    </tr>
                    <tr className={trClasses}>
                      <td className={tdClasses}>Operação B2B</td>
                      <td className={tdClasses}>Baixo</td>
                      <td className={tdClasses}>Alto</td>
                    </tr>
                    <tr className={trClasses}>
                      <td className={tdClasses}>Necessidade de simplicidade</td>
                      <td className={tdClasses}>Alto</td>
                      <td className={tdClasses}>Baixo</td>
                    </tr>
                  </tbody>
                </table>
              ),
            },
          ],
        },
        {
          h2: "Conclusão",
          lead: "A escolha entre Simples Nacional puro e híbrido não é uma decisão só tributária — é uma decisão de preço, margem, mercado, contratos e fluxo de caixa. Simular sem considerar clientes, fornecedores e folha de pagamento pode levar a uma escolha equivocada.",
          h3: [],
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
            Os dispositivos citados nesta análise estão na Lei Complementar nº 214/2025, na Resolução CGSN nº 186/2026 e no Manual da Opção pelo Regime Regular do IBS e da CBS no Simples Nacional.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8 space-y-4">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar nº 214/2025, art. 41 (opção pelo regime regular de recolhimento de IBS e CBS para optantes do Simples Nacional). Resolução CGSN nº 186/2026 (cronograma e procedimentos de opção pelo Simples Híbrido). Manual da Opção pelo Regime Regular do IBS e da CBS no Simples Nacional (Receita Federal/CGSN).
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
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
          <p className="text-sm text-muted-foreground leading-relaxed">
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
