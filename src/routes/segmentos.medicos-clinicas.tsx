import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/medicos-clinicas")({
  head: () => ({
    meta: [
      { title: "Contabilidade para Médicos e Clínicas em Goiânia | DCON" },
      { name: "description", content: "Contabilidade para médicos e clínicas em Goiânia: enquadramento ideal, fator R, equiparação hospitalar e planejamento tributário com a DCON." },
      { property: "og:title", content: "Contabilidade para Médicos e Clínicas em Goiânia | DCON" },
      { property: "og:description", content: "Contabilidade para médicos e clínicas em Goiânia: enquadramento ideal, fator R, equiparação hospitalar e planejamento tributário com a DCON." },
      { property: "og:url", content: "/segmentos/medicos-clinicas" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/medicos-clinicas" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade especializada para médicos e clínicas"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de médicos e clínicas."
      intent="contabilidade para médicos Goiânia, contador para clínica médica"
      observation="Schema MedicalBusiness-friendly + FAQPage."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
      { h2: "Particularidades do segmento médico", h3: [{"title":"PJ médica","body":"Quando vale, quando não vale e como estruturar com segurança trabalhista."},{"title":"Equiparação hospitalar","body":"Lucro Presumido com presunção reduzida — para quem cumpre os requisitos."},{"title":"Sociedade médica","body":"Distribuição entre sócios, pró-labore e contratos de cooperação."}] },
      { h2: "Riscos comuns", h3: [{"title":"Pejotização mal feita","body":"Risco trabalhista alto quando o vínculo não está estruturado."},{"title":"Perder a equiparação","body":"Detalhes operacionais que descaracterizam o benefício."},{"title":"ISS mal apurado","body":"Município e código de serviço errados custam caro."}] },
      { h2: "Como a DCON atua", h3: [{"title":"Diagnóstico tributário do médico","body":"Revisão de regime, sociedade e plano de saúde como cliente PJ."},{"title":"Rotina técnica","body":"DP, fiscal e contábil integrados em uma única conta."},{"title":"Reuniões periódicas","body":"Revisão anual de regime e distribuição."}] },
      { h2: "Para quem é indicado", h3: [{"title":"Médico autônomo migrando para PJ","body":"Quem quer sair do carnê-leão com segurança."},{"title":"Clínicas em crescimento","body":"Operações que ultrapassam o Simples e precisam revisar regime."},{"title":"Sócios médicos","body":"Quando dois ou mais profissionais montam estrutura conjunta."}] },
      { h2: "Perguntas frequentes", h3: [{"title":"PJ médica vale mesmo a pena?","body":"Em muitos casos sim, mas precisa estar bem estruturada."},{"title":"Equiparação serve para mim?","body":"Avaliamos no diagnóstico — depende da operação."},{"title":"Atendem fora de Goiânia?","body":"Sim, online em todo o Brasil."}] },
      ]}
    />
  );
}
