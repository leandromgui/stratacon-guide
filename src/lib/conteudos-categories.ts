// Catálogo de categorias da Central de Conteúdo DCON.
// Cada categoria vira uma rota /conteudos/{slug} com listagem paginada e SEO próprio.

export type CategoryArticle = {
  h2: string;
  excerpt: string;
  to: string;
  kind: "Análise" | "Guia" | "Estudo" | "Briefing";
  date: string;
};

export type CategoryDef = {
  slug: string;
  name: string;
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  subtopics: { h3: string; body: string }[];
  articles: CategoryArticle[];
};

export const categories: CategoryDef[] = [
  {
    slug: "tributario",
    name: "Tributário",
    h1: "Tributário: regimes, reforma e decisões que afetam o caixa",
    intro:
      "Análises técnicas sobre regimes tributários, reforma (CBS/IBS), planejamento lícito e recuperação de créditos, com foco em decisões que impactam diretamente o resultado da empresa.",
    metaTitle: "Tributário | Insights DCON",
    metaDescription:
      "Análises técnicas sobre regimes tributários, reforma (CBS/IBS), planejamento lícito e recuperação de créditos para empresas brasileiras.",
    subtopics: [
      { h3: "Escolha de regime tributário", body: "Comparativo entre Simples Nacional, Lucro Presumido e Lucro Real com base em margem, folha e operação interestadual." },
      { h3: "Reforma tributária (CBS/IBS)", body: "Cenários de transição entre 2026 e 2033 por regime e setor, com cronograma de adaptação." },
      { h3: "Planejamento tributário lícito", body: "Critérios técnicos para reduzir carga com segurança jurídica, sem confundir elisão com evasão." },
      { h3: "Recuperação de créditos", body: "Levantamento de tributos pagos a maior nos últimos 5 anos e caminhos administrativos ou judiciais de restituição." },
    ],
    articles: [
      { h2: "Simples × Presumido × Real: comparativo prático", excerpt: "Como decidir o regime com base em margem, folha e operação interestadual.", to: "/conteudos/regimes-tributarios", kind: "Guia", date: "Mai 2026" },
      { h2: "Reforma tributária: o que muda no caixa entre 2026 e 2033", excerpt: "Cenários de transição CBS/IBS por regime e setor, com cronograma de adaptação.", to: "/solucoes/reforma-tributaria", kind: "Análise", date: "Jun 2026" },
      { h2: "Recuperação de créditos tributários nos últimos 5 anos", excerpt: "Levantamento técnico de tributos pagos a maior e caminhos de restituição.", to: "/solucoes/recuperacao-creditos-tributarios", kind: "Estudo", date: "Abr 2026" },
      { h2: "Planejamento tributário: elisão x evasão", excerpt: "Onde está a fronteira jurídica entre economia legítima e risco de autuação.", to: "/conteudos/planejamento-tributario", kind: "Análise", date: "Abr 2026" },
      { h2: "ICMS-ST e DIFAL para operações interestaduais", excerpt: "Como operar entre estados sem acumular passivo silencioso.", to: "/conteudos/comercio-icms", kind: "Guia", date: "Abr 2026" },
      { h2: "Lucro Real: quando deixa de ser opção e vira obrigação", excerpt: "Critérios objetivos de enquadramento e cuidados na apuração.", to: "/segmentos/lucro-real", kind: "Análise", date: "Mar 2026" },
      { h2: "Lucro Presumido: margens presumidas por atividade", excerpt: "O que muda no IRPJ, CSLL, PIS e Cofins conforme a atividade.", to: "/segmentos/lucro-presumido", kind: "Guia", date: "Fev 2026" },
      { h2: "Simples Nacional: anexos, sublimites e desenquadramento", excerpt: "Pontos críticos do regime e quando ele deixa de compensar.", to: "/segmentos/simples-nacional", kind: "Guia", date: "Jan 2026" },
      { h2: "Departamento fiscal: rotina e indicadores", excerpt: "O que o fiscal entrega além das obrigações acessórias.", to: "/solucoes/departamento-fiscal", kind: "Briefing", date: "Jan 2026" },
      { h2: "IRPF do sócio: pró-labore e distribuição de lucros", excerpt: "Decisões fiscais do sócio que afetam a empresa e vice-versa.", to: "/solucoes/pessoa-fisica-irpf", kind: "Análise", date: "Dez 2025" },
      { h2: "Tecnologia contábil sob responsabilidade humana", excerpt: "Integração com ERPs e SPED, com revisão técnica antes da entrega.", to: "/solucoes/tecnologia-contabil", kind: "Análise", date: "Abr 2026" },
      { h2: "Regimes para prestadores de serviços", excerpt: "Particularidades de ISS, retenções e fator R no Simples.", to: "/segmentos/prestadores-servicos", kind: "Guia", date: "Dez 2025" },
    ],
  },
  {
    slug: "defesa-fiscal",
    name: "Defesa fiscal",
    h1: "Defesa fiscal e regularização: conduzir autuações sem destruir o caixa",
    intro:
      "Como impugnar autuações, negociar parcelamentos e usar transação tributária de forma técnica, preservando a operação e a saúde financeira.",
    metaTitle: "Defesa fiscal e regularização | Insights DCON",
    metaDescription:
      "Conduza autuações, parcelamentos e transação tributária com base técnica, preservando caixa e operação da empresa.",
    subtopics: [
      { h3: "Impugnação administrativa", body: "Etapas do contencioso administrativo, prazos e estratégia de defesa antes da inscrição em dívida ativa." },
      { h3: "Contencioso judicial", body: "Quando ir ao Judiciário, garantias possíveis e impacto no fluxo de caixa." },
      { h3: "Parcelamentos e transação tributária", body: "Modalidades vigentes, requisitos e armadilhas comuns em adesões." },
      { h3: "Compliance pós-regularização", body: "Como evitar reincidência depois de sair do passivo fiscal." },
    ],
    articles: [
      { h2: "Como conduzir tecnicamente uma autuação", excerpt: "Etapas de impugnação administrativa e quando levar ao contencioso judicial.", to: "/solucoes/defesas-fiscais", kind: "Análise", date: "Mai 2026" },
      { h2: "Sair de uma pendência fiscal sem destruir o caixa", excerpt: "Parcelamentos, transação tributária e plano de compliance.", to: "/conteudos/regularizacao-fiscal", kind: "Guia", date: "Mar 2026" },
      { h2: "Pendências fiscais por segmento", excerpt: "Roteiro setorial para sair do passivo fiscal de forma estruturada.", to: "/segmentos/pendencias-fiscais", kind: "Análise", date: "Mar 2026" },
      { h2: "Regularização fiscal — solução DCON", excerpt: "Diagnóstico, negociação e plano de compliance acompanhado.", to: "/solucoes/regularizacao-fiscal", kind: "Briefing", date: "Fev 2026" },
      { h2: "Defesas fiscais — escopo de atuação", excerpt: "Como a DCON atua em impugnações administrativas e judiciais.", to: "/solucoes/defesas-fiscais", kind: "Briefing", date: "Fev 2026" },
      { h2: "Recuperação de créditos como alavanca de regularização", excerpt: "Usar créditos identificados para reduzir passivo em aberto.", to: "/solucoes/recuperacao-creditos-tributarios", kind: "Análise", date: "Jan 2026" },
      { h2: "Departamento fiscal estruturado", excerpt: "Reduzir risco de autuação na origem com rotina técnica.", to: "/solucoes/departamento-fiscal", kind: "Guia", date: "Dez 2025" },
      { h2: "Diagnóstico fiscal e contábil", excerpt: "Mapeamento completo do passivo e dos riscos antes de qualquer adesão.", to: "/diagnostico", kind: "Guia", date: "Dez 2025" },
    ],
  },
  {
    slug: "patrimonio",
    name: "Patrimônio",
    h1: "Patrimônio e sucessão: holdings, ITCMD e governança familiar",
    intro:
      "Estruturas societárias e patrimoniais com base técnica — quando holding faz sentido, custos reais e roteiro de constituição, sem promessa de economia milagrosa.",
    metaTitle: "Patrimônio e sucessão | Insights DCON",
    metaDescription:
      "Holdings, ITCMD e sucessão em vida com critério técnico: quando vale, custos reais e roteiro de constituição.",
    subtopics: [
      { h3: "Holding familiar", body: "Tipos (patrimonial, pura, mista), custos de constituição, ITBI e ITCMD aplicáveis." },
      { h3: "Holding patrimonial", body: "Quando faz sentido, quando é mito, e como integrar à estratégia tributária." },
      { h3: "Sucessão em vida", body: "Doação, usufruto e cláusulas que reduzem litígio e custo de transmissão." },
      { h3: "Governança familiar", body: "Acordo de sócios, regras de entrada e saída e prevenção de conflitos." },
    ],
    articles: [
      { h2: "Holding familiar: o que é, tipos, custos e passo a passo", excerpt: "Definição, modalidades, ITBI, ITCMD e roteiro de constituição.", to: "/conteudos/holding-familiar", kind: "Guia", date: "Jun 2026" },
      { h2: "Holding patrimonial: quando vale e quando é mito", excerpt: "Estrutura societária, ITCMD e governança familiar com base técnica.", to: "/solucoes/holding-patrimonial", kind: "Análise", date: "Mai 2026" },
      { h2: "Holding patrimonial — aprofundamento", excerpt: "Análise técnica completa de estrutura, custos e governança.", to: "/conteudos/holding-patrimonio", kind: "Estudo", date: "Mai 2026" },
      { h2: "Sucessão em vida: doação, usufruto e cláusulas", excerpt: "Decisões que reduzem litígio e custo de transmissão.", to: "/conteudos/holding-familiar", kind: "Briefing", date: "Abr 2026" },
      { h2: "Empresas familiares: governança e sucessão", excerpt: "Particularidades contábeis e societárias do contexto familiar.", to: "/segmentos/empresas-familiares", kind: "Análise", date: "Mar 2026" },
      { h2: "Holdings — visão de segmento", excerpt: "Como tratamos contabilidade e tributação de holdings na operação.", to: "/segmentos/holdings", kind: "Guia", date: "Mar 2026" },
      { h2: "IRPF do sócio e patrimônio pessoal", excerpt: "Declaração de bens, integralização de capital e cuidados na holding.", to: "/solucoes/pessoa-fisica-irpf", kind: "Análise", date: "Fev 2026" },
      { h2: "Societário e legalização", excerpt: "Constituição, alteração contratual e atos societários da holding.", to: "/solucoes/societario-legalizacao", kind: "Briefing", date: "Jan 2026" },
    ],
  },
  {
    slug: "trabalhista",
    name: "Trabalhista",
    h1: "Trabalhista e DP/eSocial: desenho correto de vínculos e folha",
    intro:
      "PJ x CLT, pró-labore, obrigações acessórias e eSocial conduzidos com base em jurisprudência atual e responsabilidade técnica.",
    metaTitle: "Trabalhista e DP/eSocial | Insights DCON",
    metaDescription:
      "PJ x CLT, pró-labore e eSocial com base técnica e jurisprudência atual, para estruturar a folha com segurança.",
    subtopics: [
      { h3: "PJ x CLT", body: "Critérios objetivos de vínculo, jurisprudência recente e desenho seguro de contratação." },
      { h3: "Pró-labore e distribuição de lucros", body: "Impacto previdenciário, IRPF do sócio e definição técnica do valor." },
      { h3: "eSocial e obrigações acessórias", body: "Eventos, prazos e integração com folha, ponto e benefícios." },
      { h3: "Departamento Pessoal estruturado", body: "Rotina técnica que reduz passivo trabalhista e previdenciário." },
    ],
    articles: [
      { h2: "PJ x CLT: risco de vínculo e estruturação correta", excerpt: "Critérios objetivos, jurisprudência recente e desenho seguro.", to: "/conteudos/dp-esocial", kind: "Guia", date: "Mar 2026" },
      { h2: "Pró-labore: como definir tecnicamente", excerpt: "Impacto previdenciário, IRPF do sócio e distribuição de lucros.", to: "/conteudos/dp-esocial", kind: "Análise", date: "Fev 2026" },
      { h2: "DP e eSocial — visão completa", excerpt: "Rotina, eventos e cuidados na operação do departamento pessoal.", to: "/conteudos/dp-esocial", kind: "Estudo", date: "Fev 2026" },
      { h2: "Departamento Pessoal — solução DCON", excerpt: "Operação de folha sob responsabilidade técnica.", to: "/solucoes/departamento-pessoal", kind: "Briefing", date: "Jan 2026" },
      { h2: "Defesas fiscais com reflexo trabalhista", excerpt: "Autuações que envolvem contribuição previdenciária e FGTS.", to: "/solucoes/defesas-fiscais", kind: "Análise", date: "Jan 2026" },
      { h2: "Médicos e clínicas: PJ médica e folha", excerpt: "Estruturação da PJ médica e impactos no DP.", to: "/conteudos/saude-clinicas", kind: "Análise", date: "Dez 2025" },
    ],
  },
  {
    slug: "setores",
    name: "Setores",
    h1: "Setores e segmentos: particularidades contábeis e fiscais por atividade",
    intro:
      "Cada setor tem regras próprias — saúde, comércio, tecnologia, provedores, construção, condomínios. Conteúdo técnico focado em particularidades reais da operação.",
    metaTitle: "Setores e segmentos | Insights DCON",
    metaDescription:
      "Particularidades contábeis e fiscais por setor: saúde, comércio, tecnologia, ISPs, construção, condomínios e mais.",
    subtopics: [
      { h3: "Saúde e clínicas", body: "PJ médica, equiparação hospitalar e cuidados no enquadramento." },
      { h3: "Comércio e e-commerce", body: "ICMS-ST, DIFAL e operação multiestadual sem passivo silencioso." },
      { h3: "Tecnologia e ISPs", body: "Tributação de startups, provedores de internet e particularidades contábeis." },
      { h3: "Construção, condomínios e terceiro setor", body: "Regimes próprios, obrigações específicas e governança." },
    ],
    articles: [
      { h2: "PJ médica e equiparação hospitalar", excerpt: "Quem tem direito, riscos do enquadramento errado e roteiro técnico.", to: "/conteudos/saude-clinicas", kind: "Estudo", date: "Mai 2026" },
      { h2: "ICMS-ST e DIFAL no e-commerce", excerpt: "Operação multiestadual sem acumular passivo silencioso.", to: "/conteudos/comercio-icms", kind: "Guia", date: "Abr 2026" },
      { h2: "Provedores de internet: tributação e regulatório", excerpt: "Fust, Funttel, ISS e particularidades contábeis do setor ISP.", to: "/segmentos/provedores-internet", kind: "Análise", date: "Mar 2026" },
      { h2: "Tecnologia e startups", excerpt: "Stock options, investidores e regimes possíveis.", to: "/segmentos/tecnologia-startups", kind: "Análise", date: "Mar 2026" },
      { h2: "E-commerce", excerpt: "Tributação, logística fiscal e particularidades da operação digital.", to: "/segmentos/e-commerce", kind: "Guia", date: "Fev 2026" },
      { h2: "Comércio em geral", excerpt: "Particularidades do varejo, ICMS e operação multicanal.", to: "/segmentos/comercio", kind: "Briefing", date: "Fev 2026" },
      { h2: "Construção civil e SPE", excerpt: "Patrimônio de afetação, RET e particularidades do setor.", to: "/segmentos/construcao-civil-spe", kind: "Análise", date: "Jan 2026" },
      { h2: "Condomínios", excerpt: "Contabilidade, obrigações e prestação de contas.", to: "/segmentos/condominios", kind: "Briefing", date: "Jan 2026" },
      { h2: "Terceiro setor", excerpt: "Imunidade, isenção e prestação de contas de OSCs.", to: "/segmentos/terceiro-setor", kind: "Análise", date: "Dez 2025" },
      { h2: "Imobiliárias", excerpt: "Comissão, RET e tributação de empresas do ramo imobiliário.", to: "/segmentos/imobiliarias", kind: "Guia", date: "Dez 2025" },
      { h2: "Odontologia", excerpt: "PJ odontológica, enquadramento e ISS.", to: "/segmentos/odontologia", kind: "Análise", date: "Nov 2025" },
      { h2: "Produtor rural", excerpt: "Livro caixa, ITR e migração para PJ rural.", to: "/segmentos/produtor-rural", kind: "Guia", date: "Nov 2025" },
      { h2: "Franquias e redes", excerpt: "Royalties, taxas e padronização contábil entre unidades.", to: "/segmentos/franquias-redes", kind: "Análise", date: "Out 2025" },
    ],
  },
  {
    slug: "governanca",
    name: "Governança",
    h1: "Governança e gestão: indicadores e tecnologia para a mesa do sócio",
    intro:
      "Valuation, KPIs, BPO financeiro e tecnologia contábil — informação econômica confiável para decidir, captar e crescer.",
    metaTitle: "Governança e gestão | Insights DCON",
    metaDescription:
      "Valuation, KPIs, BPO financeiro e tecnologia contábil para informação confiável na mesa do sócio.",
    subtopics: [
      { h3: "Valuation e KPIs", body: "Indicadores que mostram saúde econômica antes de captação ou M&A." },
      { h3: "BPO financeiro", body: "Rotina financeira terceirizada com governança e relatórios padronizados." },
      { h3: "Tecnologia contábil", body: "Integração com ERPs e SPED, com revisão técnica antes da entrega." },
      { h3: "Método e diagnóstico", body: "Como a DCON conduz: diagnóstico, plano e execução acompanhada." },
    ],
    articles: [
      { h2: "Valuation e KPIs para a mesa do sócio", excerpt: "Indicadores que mostram saúde econômica antes de captação ou M&A.", to: "/solucoes/valuation-kpis", kind: "Briefing", date: "Mai 2026" },
      { h2: "Tecnologia contábil sob responsabilidade humana", excerpt: "Integração com ERPs e SPED, com revisão técnica antes da entrega.", to: "/solucoes/tecnologia-contabil", kind: "Análise", date: "Abr 2026" },
      { h2: "BPO financeiro", excerpt: "Rotina financeira terceirizada com governança.", to: "/solucoes/bpo-financeiro", kind: "Briefing", date: "Mar 2026" },
      { h2: "Contabilidade empresarial", excerpt: "Demonstrações confiáveis como base para decisão.", to: "/solucoes/contabilidade-empresarial", kind: "Guia", date: "Mar 2026" },
      { h2: "Método DCON", excerpt: "Diagnóstico, plano e execução acompanhada pela equipe técnica.", to: "/metodo", kind: "Briefing", date: "Fev 2026" },
      { h2: "Diagnóstico fiscal e contábil", excerpt: "Mapa de riscos e oportunidades antes de qualquer plano.", to: "/diagnostico", kind: "Guia", date: "Fev 2026" },
      { h2: "Abertura de empresa estruturada", excerpt: "Decisões societárias e fiscais corretas desde o dia 1.", to: "/solucoes/abrir-empresa", kind: "Guia", date: "Jan 2026" },
      { h2: "Trocar de contabilidade sem traumas", excerpt: "Transição organizada, sem perda de histórico ou obrigações.", to: "/solucoes/trocar-contabilidade", kind: "Briefing", date: "Jan 2026" },
    ],
  },
];

export function getCategory(slug: string): CategoryDef | undefined {
  return categories.find((c) => c.slug === slug);
}