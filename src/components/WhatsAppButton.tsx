import { useRouterState } from "@tanstack/react-router";

const defaultMessage = "Olá, gostaria de conversar com a equipe técnica da DCON.";

const messagesByPath: Record<string, string> = {
  "/": "Olá, visitei o site da DCON e gostaria de conversar com a equipe técnica.",
  "/diagnostico": "Olá, gostaria de solicitar um diagnóstico fiscal gratuito.",
  "/solucoes/trocar-contabilidade": "Olá, gostaria de falar sobre migração de contabilidade com auditoria.",
  "/solucoes/defesas-fiscais": "Olá, gostaria de conversar sobre defesas fiscais e impugnações.",
  "/solucoes/planejamento-tributario": "Olá, gostaria de falar sobre planejamento tributário para minha empresa.",
  "/solucoes/recuperacao-creditos-tributarios": "Olá, gostaria de conversar sobre recuperação de créditos tributários.",
  "/solucoes/regularizacao-fiscal": "Olá, gostaria de falar sobre regularização fiscal e certidões.",
  "/solucoes/contabilidade-empresarial": "Olá, gostaria de falar sobre contabilidade empresarial.",
  "/solucoes/departamento-fiscal": "Olá, gostaria de falar sobre departamento fiscal e SPED.",
  "/solucoes/departamento-pessoal": "Olá, gostaria de falar sobre departamento pessoal e folha de pagamento.",
  "/solucoes/bpo-financeiro": "Olá, gostaria de falar sobre BPO financeiro.",
  "/solucoes/reforma-tributaria": "Olá, gostaria de falar sobre a Reforma Tributária e preparação para 2026/2027.",
  "/solucoes/holding-patrimonial": "Olá, gostaria de falar sobre holding patrimonial e sucessão familiar.",
  "/solucoes/pessoa-fisica-irpf": "Olá, gostaria de falar sobre declaração de IRPF para alta renda.",
  "/solucoes/valuation-kpis": "Olá, gostaria de falar sobre valuation e indicadores da minha empresa.",
  "/solucoes/societario-legalizacao": "Olá, gostaria de falar sobre societário e legalização.",
  "/solucoes/tecnologia-contabil": "Olá, gostaria de falar sobre tecnologia contábil e ERP.",
  "/solucoes/abrir-empresa": "Olá, gostaria de abrir uma empresa com apoio técnico.",
  "/solucoes/registro-marca-inpi": "Olá, gostaria de falar sobre registro de marca no INPI.",
  "/segmentos/medicos-clinicas": "Olá, gostaria de falar sobre contabilidade para médicos e clínicas.",
  "/segmentos/e-commerce": "Olá, gostaria de falar sobre contabilidade para e-commerce.",
  "/segmentos/holdings": "Olá, gostaria de falar sobre contabilidade para holdings.",
  "/segmentos/construcao-civil-spe": "Olá, gostaria de falar sobre contabilidade para construção civil e SPEs.",
  "/segmentos/produtor-rural": "Olá, gostaria de falar sobre contabilidade para produtor rural.",
  "/segmentos/provedores-internet": "Olá, gostaria de falar sobre contabilidade para provedores de internet.",
  "/contato": "Olá, vim pelo site e gostaria de conversar com a equipe técnica.",
  "/sobre": "Olá, gostaria de saber mais sobre a DCON.",
  "/metodo": "Olá, gostaria de conhecer melhor o Método DCON.",
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
