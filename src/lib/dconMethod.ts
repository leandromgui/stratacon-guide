import type { H3Item } from "../components/PageScaffold";

/**
 * Método DCON canônico em 4 fases. Importado por todas as páginas de
 * solução/segmento para padronizar o bloco "Como conduzimos cada cliente"
 * e reforçar o link para a página-pilar /metodo.
 */
export const dconMethod: H3Item[] = [
  {
    title: "Diagnóstico técnico",
    body: "Cruzamento de documentos fiscais, contábeis, societários e trabalhistas para identificar riscos, créditos e exposições. Diagnóstico técnico inicial em até 7 dias úteis após o recebimento completo dos documentos e a definição do escopo.",
  },
  {
    title: "Planejamento fundamentado",
    body: "Plano de ação tributário, patrimonial e operacional com simulações, tese auditável, base legal e cronograma de implantação.",
  },
  {
    title: "Execução documentada",
    body: "Implantação com parecer técnico, retificações, parametrização de sistemas, protocolos administrativos e treinamento da equipe.",
  },
  {
    title: "Governança contínua",
    body: "Acompanhamento mensal com indicadores, revisão de teses, auditoria interna e responsabilidade técnica permanente sob CRC ativo.",
  },
];