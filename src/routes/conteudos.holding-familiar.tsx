import { createFileRoute, Link } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

const faq = [
  {
    q: "O que é uma holding familiar?",
    a: "É uma sociedade empresarial constituída para concentrar a titularidade de bens e participações societárias de uma família, organizando sucessão, governança e tributação de forma planejada.",
  },
  {
    q: "Qual a diferença entre holding familiar, patrimonial, pura e mista?",
    a: "Holding patrimonial detém imóveis e bens; holding pura detém apenas participações em outras empresas; mista combina as duas funções; familiar é o recorte de propósito — organizar o patrimônio de uma família — e pode assumir qualquer das formas anteriores.",
  },
  {
    q: "Quanto custa abrir e manter uma holding familiar?",
    a: "Os custos variam conforme o porte do patrimônio, o regime tributário escolhido (geralmente Lucro Presumido ou Real) e a complexidade societária. Envolvem honorários de constituição, ITBI quando há integralização de imóveis, custas de registro e a contabilidade recorrente.",
  },
  {
    q: "Holding familiar reduz imposto na herança?",
    a: "Pode reduzir, sim. A doação de quotas com reserva de usufruto e o planejamento da base de cálculo do ITCMD frequentemente resultam em carga sucessória menor que o inventário tradicional — mas o resultado depende do estado e do desenho jurídico.",
  },
  {
    q: "Vale a pena abrir holding com patrimônio pequeno?",
    a: "Depende da composição. Para patrimônios modestos compostos apenas por um imóvel residencial, o custo recorrente pode não compensar. A análise correta considera renda gerada, intenção sucessória e proteção patrimonial — não apenas o valor de mercado dos bens.",
  },
  {
    q: "Holding familiar protege contra dívidas e processos?",
    a: "Oferece uma camada adicional de proteção, mas não é blindagem absoluta. Atos de fraude contra credores ou confusão patrimonial podem ser desconsiderados judicialmente. A proteção real vem da constituição feita de boa-fé, antes do surgimento de passivos.",
  },
];

export const Route = createFileRoute("/conteudos/holding-familiar")({
  head: () => ({
    meta: [
      { title: "Holding Familiar: o que é, tipos, custos e passo a passo | DCON" },
      { name: "description", content: "Guia completo de holding familiar: definição, tipos (patrimonial, pura, mista), custos, passo a passo de constituição e impactos sucessórios. Conteúdo DCON." },
      { property: "og:title", content: "Holding Familiar: o que é, tipos, custos e passo a passo | DCON" },
      { property: "og:description", content: "Guia completo de holding familiar: definição, tipos, custos, passo a passo de constituição e impactos sucessórios." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/conteudos/holding-familiar" },
    ],
    links: [{ rel: "canonical", href: "/conteudos/holding-familiar" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Holding Familiar: o que é, tipos, custos e passo a passo",
          description:
            "Guia completo de holding familiar: definição, tipos (patrimonial, pura, mista), custos, passo a passo de constituição e impactos sucessórios.",
          author: { "@type": "Organization", name: "DCON Contabilidade" },
          publisher: { "@type": "Organization", name: "DCON Contabilidade" },
          mainEntityOfPage: "/conteudos/holding-familiar",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "/" },
            { "@type": "ListItem", position: 2, name: "Conteúdos", item: "/conteudos" },
            { "@type": "ListItem", position: 3, name: "Holding Familiar", item: "/conteudos/holding-familiar" },
          ],
        }),
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

function AlertBanner() {
  return (
    <div className="rounded-sm border border-gold/40 bg-gold/5 p-6">
      <div className="flex items-start gap-4">
        <div className="mt-0.5 text-gold text-lg leading-none">!</div>
        <div>
          <h3 className="font-display text-[16px]">Atenção: holding sem diagnóstico é aposta, não estratégia</h3>
          <p className="mt-2 text-muted-foreground text-[14px] leading-relaxed">
            A constituição de holding familiar exige análise do patrimônio existente, regime de casamento, dívidas e objetivos sucessórios. 
            Quem pula essa etapa comete os cinco erros mais caros: integralização sem análise de ITBI, doação sem reserva de usufruto, 
            ignorância do ITCMD estadual, constituição com passivo conhecido e contabilidade irregular. Cada um deles pode anular o benefício 
            e gerar passivo maior que o problema original.
          </p>
          <div className="mt-4">
            <Link
              to="/diagnostico"
              className="inline-flex items-center text-[12px] uppercase tracking-[0.16em] text-gold hover:opacity-80 font-medium"
            >
              Solicitar diagnóstico antes de constituir →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChecklistBlock() {
  const items = [
    "Levantamento completo de bens, dívidas e rendas da família",
    "Verificação do regime de casamento e regime de bens dos sócios",
    "Análise prévia do ITBI do município onde os imóveis estão localizados",
    "Cálculo do ITCMD estadual com base real, não estimativa",
    "Confirmação de inexistência de passivos conhecidos e processos",
    "Definição do regime tributário (Presumido × Real) com simulação",
    "Cláusulas de acordo de sócios: entrada, saída e sucessão de herdeiros",
    "Reserva de usufruto nas doações de quotas (proteção do controlador)",
    "Plano de manutenção contábil, fiscal e societária de longo prazo",
  ];
  return (
    <section className="grid lg:grid-cols-12 gap-10">
      <header className="lg:col-span-4">
        <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Boas práticas</div>
        <h2 className="font-display text-2xl md:text-3xl tracking-tight">Checklist: antes de abrir sua holding</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed text-[15px]">
          Nove verificações que separam uma holding que gera economia de uma que vira passivo. 
          Marque cada item com seu contador antes de assinar o contrato social.
        </p>
      </header>
      <ul className="lg:col-span-8 space-y-px bg-border border border-border">
        {items.map((item, i) => (
          <li key={i} className="bg-card p-5 flex items-start gap-4">
            <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-sm border border-gold/50 text-gold text-[10px] font-bold shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[14px] text-card-foreground leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function GoodPracticeCards() {
  const cards = [
    {
      title: "Nunca integralize imóveis sem laudo de avaliação",
      body: "O laudo justifica o valor de integralização e protege contra questionamentos fiscais futuros. Municípios exigem documentação robusta para reconhecer imunidade de ITBI.",
    },
    {
      title: "Mantenha contabilidade em dia desde o primeiro mês",
      body: "Holding sem contabilidade regular é alvo fácil de desconsideração de personalidade jurídica. ECD, ECF e atas são a prova de separação patrimonial.",
    },
    {
      title: "Reveja a estrutura a cada mudança familiar relevante",
      body: "Casamento, divórcio, nascimento ou falecimento de sócio alteram o desenho sucessório. A holding deve ser tão viva quanto a família que representa.",
    },
    {
      title: "Simule o regime tributário antes de escolher",
      body: "Lucro Presumido nem sempre vence. Em alguns casos, o Lucro Real com planejamento de custos e deduções entrega resultado superior ao longo de 5 anos.",
    },
  ];
  return (
    <section className="grid lg:grid-cols-12 gap-10">
      <header className="lg:col-span-4">
        <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Alertas técnicos</div>
        <h2 className="font-display text-2xl md:text-3xl tracking-tight">Boas práticas que protegem sua estrutura</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed text-[15px]">
          Quatro regras que distinguem holdings que duram gerações de estruturas que viram problema no primeiro inventário.
        </p>
      </header>
      <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border">
        {cards.map((c) => (
          <li key={c.title} className="bg-card p-6">
            <h3 className="font-display text-[17px] text-card-foreground">{c.title}</h3>
            <p className="mt-2 text-muted-foreground text-[14px] leading-relaxed">{c.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TrustMicrocopy() {
  return (
    <div className="rounded-sm border border-dashed border-border bg-muted/40 p-6 space-y-4">
      <div className="flex items-start gap-3">
        <span className="text-gold text-lg leading-none mt-0.5">✓</span>
        <p className="text-[14px] text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Diagnóstico sem compromisso.</strong> Receba uma análise preliminar do seu patrimônio, 
          com simulação tributária e parecer sobre viabilidade de holding, em até 7 dias úteis. Você só avança se o número fizer sentido.
        </p>
      </div>
      <div className="flex items-start gap-3">
        <span className="text-gold text-lg leading-none mt-0.5">✓</span>
        <p className="text-[14px] text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Responsabilidade técnica com CRC ativo.</strong> Todo desenho societário e tributário é 
          revisado por contador com registro ativo no Conselho Regional de Contabilidade. Não trabalhamos com modelos prontos: cada holding é modelada para o patrimônio real da família.
        </p>
      </div>
      <div className="flex items-start gap-3">
        <span className="text-gold text-lg leading-none mt-0.5">✓</span>
        <p className="text-[14px] text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Atendimento em Goiânia e online em todo o Brasil.</strong> Reuniões presenciais para clientes 
          locais e videoconferência estruturada para famílias em outros estados. A documentação e o acompanhamento fiscal são 100% digitais.
        </p>
      </div>
    </div>
  );
}

function Page() {
  return (
    <PageScaffold
      eyebrow="Conteúdo pilar · Sucessão e patrimônio"
      breadcrumbs={[
        { label: "Conteúdos", to: "/conteudos" },
        { label: "Holding Familiar", to: "/conteudos/holding-familiar" },
      ]}
      h1="Holding familiar: o que é, tipos, custos e passo a passo para constituir"
      lead="Como uma holding familiar organiza patrimônio, sucessão e tributação — e quando ela realmente compensa."
      intro="A holding familiar deixou de ser instrumento exclusivo de grandes fortunas. Empresários, médicos, profissionais liberais e famílias com patrimônio imobiliário recorrem a ela para profissionalizar a gestão, planejar a sucessão e reduzir a carga tributária sobre rendas e transmissões. Este guia explica o conceito, os tipos, os custos reais e o passo a passo — com o que costuma dar errado quando a constituição é feita sem diagnóstico."
      intent="holding familiar, como abrir holding familiar, holding familiar vale a pena, custos de holding familiar"
      ctaPrimary={{ label: "Solicitar diagnóstico de holding", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver solução: Holding Patrimonial", to: "/solucoes/holding-patrimonial" }}
      observation="Este conteúdo tem caráter orientativo e não substitui parecer técnico individualizado. Cada família, patrimônio e estado possui variáveis próprias que alteram o resultado. Recomendamos diagnóstico prévio antes de qualquer decisão societária ou sucessória."
      sections={[
        {
          h2: "O que é uma holding familiar",
          lead: "Uma holding familiar é uma pessoa jurídica criada para concentrar a titularidade do patrimônio de uma família — imóveis, participações societárias, aplicações — e estruturar regras claras de governança, distribuição de renda e sucessão.",
          h3: [
            { title: "Propósito, não tipo societário", body: "Holding familiar não é um tipo de sociedade — é um propósito. Na prática, costuma ser constituída como sociedade limitada (LTDA) ou, com menos frequência, como sociedade anônima fechada (S/A)." },
            { title: "Sócios e quotas", body: "Os pais costumam integralizar o patrimônio e, em seguida, doar quotas aos filhos com reserva de usufruto, mantendo o controle político e o direito aos frutos enquanto vivos." },
            { title: "Quando faz sentido", body: "Famílias com patrimônio imobiliário relevante, múltiplos herdeiros, participações em empresas operacionais ou conflito sucessório previsível são os perfis em que a holding entrega valor consistente." },
          ],
        },
        {
          h2: "Tipos de holding: patrimonial, pura, mista e familiar",
          lead: "A nomenclatura confunde porque mistura propósito (familiar) com função (patrimonial, pura, mista). Veja como separar.",
          h3: [
            { title: "Holding patrimonial", body: "Detém bens — tipicamente imóveis. A renda principal vem de aluguéis e ganho de capital em alienações. Tributação típica: Lucro Presumido, com receita de aluguel tributada em base reduzida." },
            { title: "Holding pura", body: "Detém apenas participações em outras empresas. Recebe dividendos (hoje isentos, com mudanças previstas na reforma tributária) e organiza o controle dos negócios da família." },
            { title: "Holding mista", body: "Combina bens e participações. É o formato mais comum em famílias empresárias com imóveis pessoais e empresas operacionais." },
            { title: "Holding familiar", body: "É o recorte de finalidade: qualquer das modalidades acima vira 'familiar' quando seu objetivo central é organizar o patrimônio e a sucessão de um núcleo familiar." },
          ],
        },
        {
          h2: "Custos reais: constituição e manutenção",
          lead: "Quem decide com base só no custo de abertura erra. O peso está na manutenção e nos tributos sobre integralização e transferência.",
          h3: [
            { title: "Custos de constituição", body: "Honorários jurídicos e contábeis, registro na Junta Comercial, CNPJ, alvará e inscrições estaduais/municipais quando aplicável. Em geral, ficam entre custos modestos para holdings simples e valores expressivos quando há reorganização societária complexa." },
            { title: "ITBI na integralização de imóveis", body: "A integralização de imóveis ao capital social pode ser imune ao ITBI, mas a imunidade não é automática: depende da atividade preponderante da holding e da interpretação do município. Errar aqui pode custar 2% a 3% do valor venal." },
            { title: "Tributação recorrente", body: "Holdings patrimoniais costumam operar em Lucro Presumido, com carga efetiva sobre aluguéis tipicamente menor do que a tributação na pessoa física via carnê-leão. A diferença justifica a estrutura na maioria dos casos com renda imobiliária relevante." },
            { title: "Contabilidade e obrigações acessórias", body: "ECD, ECF, DCTF, DIRF e declarações estaduais/municipais. Contabilidade obrigatória e contínua — não é estrutura para deixar 'parada na gaveta'." },
          ],
        },
        {
          h2: "Passo a passo para constituir uma holding familiar",
          lead: "A ordem importa. Pular o diagnóstico inicial é o erro mais caro.",
          h3: [
            { title: "1. Diagnóstico patrimonial e familiar", body: "Levantamento de bens, dívidas, rendas, composição familiar, regime de casamento dos sócios e objetivos sucessórios. Sem isso, qualquer desenho é chute." },
            { title: "2. Modelagem societária e tributária", body: "Definição do tipo societário, regime tributário, distribuição inicial de quotas, cláusulas de governança (acordo de sócios), regras de entrada e saída de herdeiros." },
            { title: "3. Constituição e registros", body: "Elaboração e registro do contrato social, obtenção de CNPJ, inscrições, abertura de conta bancária, contabilidade inicial." },
            { title: "4. Integralização do patrimônio", body: "Transferência dos bens — com atenção ao ITBI nos imóveis e ao laudo de avaliação quando exigido. Etapa que exige coordenação entre contador, advogado e cartório." },
            { title: "5. Planejamento sucessório", body: "Doação de quotas com reserva de usufruto, cláusulas de incomunicabilidade, impenhorabilidade e reversão. É aqui que a holding cumpre seu propósito sucessório." },
            { title: "6. Operação e governança", body: "Reuniões periódicas, distribuição planejada de lucros, revisão anual da estrutura. Holding sem rotina vira passivo." },
          ],
        },
        {
          h2: "Erros comuns que destroem o benefício",
          h3: [
            { title: "Integralizar imóveis sem analisar atividade preponderante", body: "Resultado típico: cobrança de ITBI retroativa pelo município." },
            { title: "Doar quotas sem reserva de usufruto", body: "Os pais perdem controle e direito aos frutos antes do tempo." },
            { title: "Ignorar o ITCMD do estado", body: "Alíquotas variam de 2% a 8%. Planejar a doação no momento e na base certa pode poupar valores significativos." },
            { title: "Constituir holding já com passivo conhecido", body: "Abre flanco para desconsideração por fraude contra credores." },
            { title: "Não manter contabilidade e atas em dia", body: "Confusão patrimonial é o argumento mais usado para furar a proteção da estrutura." },
          ],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { eyebrow: "Solução", label: "Holding Patrimonial", to: "/solucoes/holding-patrimonial" },
        { eyebrow: "Solução", label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario" },
        { eyebrow: "Conteúdo", label: "Regimes Tributários: Simples, Presumido e Real", to: "/conteudos/regimes-tributarios" },
        { eyebrow: "Próximo passo", label: "Solicitar diagnóstico", to: "/diagnostico" },
      ]}
    >
      <div className="space-y-20">
        <AlertBanner />
        <ChecklistBlock />
        <GoodPracticeCards />
        <TrustMicrocopy />
      </div>
    </PageScaffold>
  );
}