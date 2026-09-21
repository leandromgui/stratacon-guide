import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/split-payment-adiado-2028-o-que-muda";
const H1 =
  "Split Payment é adiado para 2028: entenda o novo cronograma da Reforma Tributária e o que sua empresa deve fazer em 2027";
const META_TITLE = "Split Payment é adiado para 2028: o que muda para sua empresa";
const META_DESCRIPTION =
  "Entenda por que o split payment foi adiado para 2028, o que continua valendo em 2027 (CBS, IBS, RAD) e o checklist prático para se preparar.";
const PUBLISHED = "14/09/2026";

const faq = [
  {
    q: "O adiamento do split payment adia o início da cobrança da CBS?",
    a: "Não. A CBS começa a ser cobrada normalmente em janeiro de 2027. O que muda é apenas o mecanismo de separação do tributo no momento da transação.",
  },
  {
    q: "Minha empresa é obrigada a aceitar o RAD em 2027?",
    a: "Não. O RAD é opcional nesta fase inicial. Sua adoção depende de negociação comercial e previsão contratual entre as partes.",
  },
  {
    q: "Preciso atualizar meu sistema de emissão de notas fiscais para 2027?",
    a: "Sim. Independentemente da forma de recolhimento, os documentos fiscais eletrônicos precisam conter os novos campos de destaque de CBS e IBS a partir de janeiro de 2027.",
  },
];

export const Route = createFileRoute("/conteudos/split-payment-adiado-2028-o-que-muda")({
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
            { "@type": "ListItem", position: 3, name: "Split Payment adiado para 2028", item: "/conteudos/split-payment-adiado-2028-o-que-muda" },
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
      intro="Não, o split payment obrigatório não entra em vigor em janeiro de 2027. Sua implementação foi adiada para 2028, de forma gradual e focada inicialmente em operações entre empresas (B2B). Isso não significa, porém, uma pausa na Reforma Tributária: a cobrança da CBS e do IBS segue o cronograma original a partir de 1º de janeiro de 2027, e a adequação dos sistemas fiscais e documentos eletrônicos continua sendo prioridade inadiável."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Split Payment adiado para 2028", to: SLUG },
      ]}
      audience={[
        "Empresas B2B com operações sujeitas a IBS e CBS",
        "Empresas B2C atentas ao destaque de impostos em cupons e notas de varejo",
        "Sócios e diretores financeiros planejando 2027",
        "Equipes fiscais e financeiras em adequação de ERP",
      ]}
      ctaPrimary={{ label: "Agendar diagnóstico de prontidão tributária e sistêmica", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver solução de reforma tributária", to: "/solucoes/reforma-tributaria" }}
      respostaValidada="O split payment obrigatório foi adiado para 2028, com início gradual em operações B2B. Em 2027 permanecem a vigência da CBS, a alíquota de teste do IBS, a emissão de documentos fiscais com os novos campos obrigatórios e o recolhimento por DARF ou, opcionalmente, pelo Recolhimento pelo Adquirente (RAD), previsto no art. 36 da Lei Complementar nº 214/2025."
      faq={faq}
      sections={[
        {
          h2: "O que muda e o que NÃO muda a partir de janeiro de 2027",
          lead: "A vigência dos novos tributos segue firme; o que se altera é a forma de recolhimento.",
          h3: [
            {
              title: "O que não muda",
              body: "A vigência da CBS e o início da alíquota de teste do IBS. As empresas continuarão emitindo notas fiscais com os novos campos obrigatórios de IBS e CBS, independentemente da forma de recolhimento.",
            },
            {
              title: "O que muda",
              body: "A forma de recolhimento. Sem o split payment obrigatório em 2027, o recolhimento segue pelo modelo tradicional (DARF) ou, de forma opcional, pelo Recolhimento pelo Adquirente (RAD).",
            },
            {
              title: "Decisão do CGIBS e confirmação da Receita Federal",
              body: "O Comitê Gestor do IBS (CGIBS) alinhou, em reunião de 12 de agosto de 2026, que o sistema de split payment precisa de mais tempo para integração segura com as instituições financeiras, o que levou a Receita Federal a confirmar, em comunicado de 30 de agosto de 2026, que a obrigatoriedade entre empresas fica para 2028.",
            },
          ],
        },
        {
          h2: "O que é o RAD e por que ele será o protagonista de 2027",
          lead: "Com o adiamento do split payment, a Lei Complementar nº 214/2025 prevê, no art. 36, o Recolhimento pelo Adquirente (RAD) como alternativa já disponível em 2027.",
          h3: [
            {
              title: "Definição do RAD",
              body: "O RAD é uma modalidade de extinção do débito de IBS e CBS na qual a responsabilidade pelo recolhimento é transferida do vendedor para o comprador (adquirente).",
            },
            {
              title: "Quando se aplica",
              body: "Aplicável principalmente quando o pagamento ocorre por um meio que não permite a segregação automática do split payment (boleto, TED avulsa, cheque).",
            },
            {
              title: "Adoção opcional",
              body: "Sua adoção é opcional nesta fase inicial, e depende de acordo entre as partes.",
            },
          ],
        },
        {
          h2: "Quem é impactado (e quem deve ficar atento)",
          lead: "O impacto difere conforme o perfil das operações da empresa.",
          h3: [
            {
              title: "Empresas B2B",
              body: "São as mais impactadas. Compradores podem ter interesse em adotar o RAD para dar mais previsibilidade ao próprio fluxo de créditos, o que pode levar fornecedores a precisar estar sistemicamente aptos a operar com essa modalidade.",
            },
            {
              title: "Empresas B2C",
              body: "Devem acompanhar as regras específicas de destaque de impostos em cupons fiscais e notas de varejo, que seguem cronograma e tratativa diferenciados do RAD e do split payment.",
            },
          ],
        },
        {
          h2: "Cronograma revisado: 2027 vs. 2028",
          lead: "Duas fases distintas, com obrigações diferentes em cada uma.",
          h3: [
            {
              title: "2027",
              body: "Início da vigência da CBS e da alíquota de teste do IBS. Recolhimento via DARF ou RAD (opcional). Emissão de documentos fiscais com os novos campos obrigatórios.",
            },
            {
              title: "2028",
              body: "Previsão de início gradual e obrigatório do split payment para operações B2B, conforme maturidade da integração entre CGIBS, Receita Federal e instituições financeiras.",
            },
          ],
        },
        {
          h2: "Riscos de tratar o adiamento como folga no calendário",
          lead: "Adiar a preparação pode gerar consequências operacionais e comerciais concretas.",
          h3: [
            {
              title: "Incompatibilidade do ERP",
              body: "Incompatibilidade do ERP com os novos layouts de notas fiscais obrigatórios já em 2027.",
            },
            {
              title: "Atrito comercial",
              body: "Ruptura ou atrito comercial se clientes ou fornecedores optarem pelo RAD e sua empresa não estiver apta a operar com essa retenção.",
            },
            {
              title: "Revisões contratuais às pressas",
              body: "Necessidade de revisões contratuais feitas às pressas, sob pressão de prazo.",
            },
          ],
        },
        {
          h2: "Checklist prático: o que preparar agora vs. o que pode esperar",
          lead: "Prioridades para 2026 e itens que exigem apenas monitoramento.",
          h3: [
            {
              title: "Fazer agora (2026)",
              body: "Mapear o impacto do RAD nos principais contratos de compra e venda; iniciar o diálogo com o fornecedor de ERP sobre atualização dos layouts de NF-e/NFS-e para os novos campos da reforma; orientar as equipes fiscal e financeira sobre a nova lógica de destaque de IBS/CBS.",
            },
            {
              title: "Pode esperar (mas monitorar)",
              body: "Implementação técnica forçada do split payment (obrigatório só em 2028); mudanças mais amplas no fluxo de caixa operacional, que só se tornam relevantes em escala com a obrigatoriedade do split.",
            },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Solução", label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" },
        { eyebrow: "Solução", label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario" },
        { eyebrow: "Próximo passo", label: "Solicitar diagnóstico", to: "/diagnostico" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Os dispositivos citados nesta análise estão na Lei Complementar nº 214/2025.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar nº 214/2025, art. 36 (Recolhimento pelo Adquirente — RAD) e arts. 31 a 35 (split payment).
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fonte oficial: Comitê Gestor do IBS (CGIBS) —{" "}
            <a
              href="https://www.cgibs.gov.br/split-payment"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/50 hover:text-foreground"
            >
              https://www.cgibs.gov.br/split-payment
            </a>
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Revisao tecnica:{" "}
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
