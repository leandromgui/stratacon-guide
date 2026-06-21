import { useRouterState } from "@tanstack/react-router";

const defaultMessage = "Olá, visitei o site da DCON e gostaria de entender melhor como vocês podem me ajudar.";

const messagesByPath: Record<string, string> = {
  // ─── Home ───
  "/": "Olá, visitei o site da DCON e gostaria de entender melhor como vocês podem me ajudar.",

  // ─── Diagnóstico ───
  "/diagnostico": "Olá, quero entender como funciona o diagnóstico fiscal gratuito da DCON e agendar uma análise da minha empresa.",

  // ─── Trocar Contabilidade ───
  "/solucoes/trocar-contabilidade": "Olá, quero entender como funciona a troca de contabilidade com auditoria e segurança na transição.",

  // ─── Soluções ───
  "/solucoes/defesas-fiscais": "Olá, quero entender como a DCON estrutura defesas fiscais e impugnações com respaldo técnico.",
  "/solucoes/planejamento-tributario": "Olá, quero entender como o planejamento tributário da DCON pode reduzir a carga fiscal da minha empresa de forma segura.",
  "/solucoes/recuperacao-creditos-tributarios": "Olá, quero entender como funciona a recuperação de créditos tributários e se minha empresa tem valores a receber.",
  "/solucoes/regularizacao-fiscal": "Olá, quero entender como regularizar minha situação fiscal e obter certidões negativas com tranquilidade.",
  "/solucoes/contabilidade-empresarial": "Olá, quero entender como a contabilidade empresarial da DCON pode organizar as finanças da minha companhia.",
  "/solucoes/departamento-fiscal": "Olá, quero entender como a DCON cuida do departamento fiscal, SPED e obrigações acessórias da minha empresa.",
  "/solucoes/departamento-pessoal": "Olá, quero entender como a DCON cuida do departamento pessoal, folha de pagamento e obrigações trabalhistas.",
  "/solucoes/bpo-financeiro": "Olá, quero entender como o BPO financeiro da DCON pode organizar o fluxo de caixa e a gestão financeira da minha empresa.",
  "/solucoes/reforma-tributaria": "Olá, quero entender como me preparar para a Reforma Tributária e proteger a saúde fiscal da minha empresa em 2026/2027.",
  "/solucoes/holding-patrimonial": "Olá, quero entender como estruturar uma holding patrimonial e planejar a sucessão familiar com segurança jurídica.",
  "/solucoes/pessoa-fisica-irpf": "Olá, quero entender como a DCON pode me ajudar na declaração de IRPF para alta renda e evitar problemas com a Receita.",
  "/solucoes/valuation-kpis": "Olá, quero entender como o valuation e os indicadores da DCON podem mensurar o valor real da minha empresa.",
  "/solucoes/societario-legalizacao": "Olá, quero entender como a DCON cuida da parte societária e legalização da minha empresa.",
  "/solucoes/tecnologia-contabil": "Olá, quero entender como a DCON usa tecnologia contábil e ERP para dar mais eficiência e transparência aos clientes.",
  "/solucoes/abrir-empresa": "Olá, quero entender como abrir uma empresa com apoio técnico da DCON desde o início.",
  "/solucoes/registro-marca-inpi": "Olá, quero entender como registrar minha marca no INPI com acompanhamento técnico da DCON.",

  // ─── Setores ───
  "/segmentos/medicos-clinicas": "Olá, quero entender como a DCON atende médicos e clínicas com contabilidade especializada e planejamento tributário.",
  "/segmentos/e-commerce": "Olá, quero entender como a DCON atende e-commerce com contabilidade especializada para vendas online.",
  "/segmentos/holdings": "Olá, quero entender como a DCON atende holdings com contabilidade consolidada e planejamento patrimonial.",
  "/segmentos/construcao-civil-spe": "Olá, quero entender como a DCON atende construtoras e SPEs com contabilidade especializada do setor.",
  "/segmentos/produtor-rural": "Olá, quero entender como a DCON atende produtor rural com contabilidade e planejamento tributário do agronegócio.",
  "/segmentos/provedores-internet": "Olá, quero entender como a DCON atende provedores de internet com contabilidade especializada do setor de telecom.",

  // ─── Outras ───
  "/contato": "Olá, vim pelo site e gostaria de entender melhor como a DCON pode me ajudar.",
  "/sobre": "Olá, visitei o site e quero entender melhor a experiência e o diferencial da DCON.",
  "/metodo": "Olá, quero entender melhor como o Método DCON funciona na prática para empresas como a minha.",
};

export function WhatsAppButton() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const message = encodeURIComponent(
    messagesByPath[pathname] ?? defaultMessage
  );
  const href = `https://wa.me/5562992890898?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg hover:scale-105 transition-transform"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}
