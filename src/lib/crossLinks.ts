// Mapa canônico de cross-links por página-pilar.
// Fonte única de verdade — alterar aqui propaga para todas as páginas
// que usam <PageScaffold pillarKey="...">.
//
// Regras editoriais:
//  - 4 links por pilar: 1 método/diagnóstico + 2 soluções relacionadas + 1 setor ou insight.
//  - Nunca incluir o próprio pilar.
//  - Cada destino DEVE existir como rota em src/routes/.

export type RelatedLink = { label: string; to: string; eyebrow?: string };

export const crossLinks: Record<string, RelatedLink[]> = {
  // ============== SOLUÇÕES ==============

  "reforma-tributaria": [
    { label: "Método DCON", to: "/metodo", eyebrow: "Como conduzimos" },
    { label: "Recuperação de Créditos Tributários", to: "/solucoes/recuperacao-creditos-tributarios", eyebrow: "Solução" },
    { label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario", eyebrow: "Solução" },
    { label: "Regimes Tributários — análise", to: "/conteudos/regimes-tributarios", eyebrow: "Insight" },
  ],

  "planejamento-tributario": [
    { label: "Diagnóstico Fiscal e Contábil", to: "/diagnostico", eyebrow: "Primeiro passo" },
    { label: "Reforma Tributária (IBS/CBS)", to: "/solucoes/reforma-tributaria", eyebrow: "Solução" },
    { label: "Recuperação de Créditos", to: "/solucoes/recuperacao-creditos-tributarios", eyebrow: "Solução" },
    { label: "Como escolher o regime tributário", to: "/conteudos/planejamento-tributario", eyebrow: "Insight" },
  ],

  "recuperacao-creditos-tributarios": [
    { label: "Diagnóstico Fiscal e Contábil", to: "/diagnostico", eyebrow: "Primeiro passo" },
    { label: "Defesas Fiscais", to: "/solucoes/defesas-fiscais", eyebrow: "Solução" },
    { label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario", eyebrow: "Solução" },
    { label: "Comércio e ICMS", to: "/conteudos/comercio-icms", eyebrow: "Insight" },
  ],

  "defesas-fiscais": [
    { label: "Método DCON", to: "/metodo", eyebrow: "Como conduzimos" },
    { label: "Regularização Fiscal", to: "/solucoes/regularizacao-fiscal", eyebrow: "Solução" },
    { label: "Recuperação de Créditos", to: "/solucoes/recuperacao-creditos-tributarios", eyebrow: "Solução" },
    { label: "Pendências Fiscais — análise", to: "/segmentos/pendencias-fiscais", eyebrow: "Setor" },
  ],

  "regularizacao-fiscal": [
    { label: "Diagnóstico Fiscal e Contábil", to: "/diagnostico", eyebrow: "Primeiro passo" },
    { label: "Defesas Fiscais", to: "/solucoes/defesas-fiscais", eyebrow: "Solução" },
    { label: "Trocar de Contabilidade com segurança", to: "/solucoes/trocar-contabilidade", eyebrow: "Solução" },
    { label: "Regularização Fiscal — guia", to: "/conteudos/regularizacao-fiscal", eyebrow: "Insight" },
  ],

  "contabilidade-empresarial": [
    { label: "Método DCON", to: "/metodo", eyebrow: "Como conduzimos" },
    { label: "Departamento Fiscal", to: "/solucoes/departamento-fiscal", eyebrow: "Solução" },
    { label: "Departamento Pessoal", to: "/solucoes/departamento-pessoal", eyebrow: "Solução" },
    { label: "Trocar de Contabilidade", to: "/solucoes/trocar-contabilidade", eyebrow: "Solução" },
  ],

  "departamento-fiscal": [
    { label: "Contabilidade Empresarial", to: "/solucoes/contabilidade-empresarial", eyebrow: "Solução" },
    { label: "Reforma Tributária (IBS/CBS)", to: "/solucoes/reforma-tributaria", eyebrow: "Solução" },
    { label: "Tecnologia Contábil", to: "/solucoes/tecnologia-contabil", eyebrow: "Solução" },
    { label: "Regimes Tributários", to: "/conteudos/regimes-tributarios", eyebrow: "Insight" },
  ],

  "departamento-pessoal": [
    { label: "Contabilidade Empresarial", to: "/solucoes/contabilidade-empresarial", eyebrow: "Solução" },
    { label: "BPO Financeiro", to: "/solucoes/bpo-financeiro", eyebrow: "Solução" },
    { label: "DP e eSocial — guia", to: "/conteudos/dp-esocial", eyebrow: "Insight" },
    { label: "Construção Civil e SPEs", to: "/segmentos/construcao-civil-spe", eyebrow: "Setor" },
  ],

  "bpo-financeiro": [
    { label: "Contabilidade Empresarial", to: "/solucoes/contabilidade-empresarial", eyebrow: "Solução" },
    { label: "Tecnologia Contábil", to: "/solucoes/tecnologia-contabil", eyebrow: "Solução" },
    { label: "Valuation e KPIs", to: "/solucoes/valuation-kpis", eyebrow: "Solução" },
    { label: "Diagnóstico Empresarial", to: "/diagnostico", eyebrow: "Primeiro passo" },
  ],

  "tecnologia-contabil": [
    { label: "Método DCON", to: "/metodo", eyebrow: "Como conduzimos" },
    { label: "Reforma Tributária (IBS/CBS)", to: "/solucoes/reforma-tributaria", eyebrow: "Solução" },
    { label: "Departamento Fiscal", to: "/solucoes/departamento-fiscal", eyebrow: "Solução" },
    { label: "BPO Financeiro", to: "/solucoes/bpo-financeiro", eyebrow: "Solução" },
  ],

  "holding-patrimonial": [
    { label: "Pessoa Física e IRPF", to: "/solucoes/pessoa-fisica-irpf", eyebrow: "Solução" },
    { label: "Societário e Legalização", to: "/solucoes/societario-legalizacao", eyebrow: "Solução" },
    { label: "Holding e Patrimônio — guia", to: "/conteudos/holding-patrimonio", eyebrow: "Insight" },
    { label: "Empresas Familiares", to: "/segmentos/empresas-familiares", eyebrow: "Setor" },
  ],

  "pessoa-fisica-irpf": [
    { label: "Holding Patrimonial", to: "/solucoes/holding-patrimonial", eyebrow: "Solução" },
    { label: "Médicos e Clínicas", to: "/segmentos/medicos-clinicas", eyebrow: "Setor" },
    { label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario", eyebrow: "Solução" },
    { label: "Método DCON", to: "/metodo", eyebrow: "Como conduzimos" },
  ],

  "valuation-kpis": [
    { label: "BPO Financeiro", to: "/solucoes/bpo-financeiro", eyebrow: "Solução" },
    { label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario", eyebrow: "Solução" },
    { label: "Holding Patrimonial", to: "/solucoes/holding-patrimonial", eyebrow: "Solução" },
    { label: "Diagnóstico Empresarial", to: "/diagnostico", eyebrow: "Primeiro passo" },
  ],

  "societario-legalizacao": [
    { label: "Holding Patrimonial", to: "/solucoes/holding-patrimonial", eyebrow: "Solução" },
    { label: "Abrir Empresa", to: "/solucoes/abrir-empresa", eyebrow: "Solução" },
    { label: "Registro de Marca (INPI)", to: "/solucoes/registro-marca-inpi", eyebrow: "Solução" },
    { label: "Empresas Familiares", to: "/segmentos/empresas-familiares", eyebrow: "Setor" },
  ],

  "abrir-empresa": [
    { label: "Societário e Legalização", to: "/solucoes/societario-legalizacao", eyebrow: "Solução" },
    { label: "Registro de Marca (INPI)", to: "/solucoes/registro-marca-inpi", eyebrow: "Solução" },
    { label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario", eyebrow: "Solução" },
    { label: "Simples Nacional — análise", to: "/segmentos/simples-nacional", eyebrow: "Regime" },
  ],

  "trocar-contabilidade": [
    { label: "Diagnóstico Fiscal e Contábil", to: "/diagnostico", eyebrow: "Primeiro passo" },
    { label: "Contabilidade Empresarial", to: "/solucoes/contabilidade-empresarial", eyebrow: "Solução" },
    { label: "Regularização Fiscal", to: "/solucoes/regularizacao-fiscal", eyebrow: "Solução" },
    { label: "Método DCON", to: "/metodo", eyebrow: "Como conduzimos" },
  ],

  "registro-marca-inpi": [
    { label: "Abrir Empresa", to: "/solucoes/abrir-empresa", eyebrow: "Solução" },
    { label: "Societário e Legalização", to: "/solucoes/societario-legalizacao", eyebrow: "Solução" },
    { label: "Franquias e Redes", to: "/segmentos/franquias-redes", eyebrow: "Setor" },
    { label: "Falar com a DCON", to: "/contato", eyebrow: "Contato" },
  ],

  // ============== SETORES (pilares de setor mais estratégicos) ==============

  "construcao-civil-spe": [
    { label: "Departamento Pessoal (CCT/SST)", to: "/solucoes/departamento-pessoal", eyebrow: "Solução" },
    { label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario", eyebrow: "Solução" },
    { label: "Holding Patrimonial", to: "/solucoes/holding-patrimonial", eyebrow: "Solução" },
    { label: "Imobiliárias", to: "/segmentos/imobiliarias", eyebrow: "Setor" },
  ],

  "medicos-clinicas": [
    { label: "Pessoa Física e IRPF", to: "/solucoes/pessoa-fisica-irpf", eyebrow: "Solução" },
    { label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario", eyebrow: "Solução" },
    { label: "Saúde e Clínicas — análise", to: "/conteudos/saude-clinicas", eyebrow: "Insight" },
    { label: "Holding Patrimonial", to: "/solucoes/holding-patrimonial", eyebrow: "Solução" },
  ],

  "produtor-rural": [
    { label: "Holding Patrimonial", to: "/solucoes/holding-patrimonial", eyebrow: "Solução" },
    { label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario", eyebrow: "Solução" },
    { label: "Reforma Tributária (IBS/CBS)", to: "/solucoes/reforma-tributaria", eyebrow: "Solução" },
    { label: "Empresas Familiares", to: "/segmentos/empresas-familiares", eyebrow: "Setor" },
  ],

  "provedores-internet": [
    { label: "Tecnologia Contábil", to: "/solucoes/tecnologia-contabil", eyebrow: "Solução" },
    { label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario", eyebrow: "Solução" },
    { label: "Reforma Tributária (IBS/CBS)", to: "/solucoes/reforma-tributaria", eyebrow: "Solução" },
    { label: "Recuperação de Créditos", to: "/solucoes/recuperacao-creditos-tributarios", eyebrow: "Solução" },
  ],

  "e-commerce": [
    { label: "Comércio e ICMS — análise", to: "/conteudos/comercio-icms", eyebrow: "Insight" },
    { label: "Reforma Tributária (IBS/CBS)", to: "/solucoes/reforma-tributaria", eyebrow: "Solução" },
    { label: "Recuperação de Créditos", to: "/solucoes/recuperacao-creditos-tributarios", eyebrow: "Solução" },
    { label: "Tecnologia Contábil", to: "/solucoes/tecnologia-contabil", eyebrow: "Solução" },
  ],

  "holdings": [
    { label: "Holding Patrimonial — solução", to: "/solucoes/holding-patrimonial", eyebrow: "Solução" },
    { label: "Pessoa Física e IRPF", to: "/solucoes/pessoa-fisica-irpf", eyebrow: "Solução" },
    { label: "Empresas Familiares", to: "/segmentos/empresas-familiares", eyebrow: "Setor" },
    { label: "Holding e Patrimônio — guia", to: "/conteudos/holding-patrimonio", eyebrow: "Insight" },
  ],
};

export function getCrossLinks(key: string): RelatedLink[] | undefined {
  return crossLinks[key];
}