import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/recuperacao-creditos-tributarios")({
  head: () => ({
    meta: [
      { title: "Recuperação de Créditos Tributários | DCON Goiânia" },
      { name: "description", content: "Recupere PIS, Cofins, INSS e ICMS pagos a maior. Análise técnica e administrativa da DCON em Goiânia, com base em jurisprudência atualizada." },
      { property: "og:title", content: "Recuperação de Créditos Tributários | DCON Goiânia" },
      { property: "og:description", content: "Recupere PIS, Cofins, INSS e ICMS pagos a maior. Análise técnica e administrativa da DCON em Goiânia, com base em jurisprudência atualizada." },
      { property: "og:url", content: "/solucoes/recuperacao-creditos-tributarios" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/recuperacao-creditos-tributarios" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Recuperação de créditos tributários com análise técnica e auditável"
      intro="Levantamento técnico de tributos pagos a maior nos últimos cinco anos, com fundamento legal e trilha auditável."
      intent="recuperação de créditos tributários, ressarcimento PIS COFINS"
      observation="Alta intenção comercial."
      ctaPrimary={{ label: "Solicitar proposta", to: "/contato" }}
      ctaSecondary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      sections={[
      { h2: "O que pode ser recuperado", h3: [{"title":"PIS e COFINS","body":"Exclusão do ICMS da base, insumos e créditos extemporâneos."},{"title":"INSS sobre folha","body":"Verbas indenizatórias sem natureza salarial."},{"title":"ICMS-ST","body":"ST recolhida a maior em operações de varejo."},{"title":"Crédito presumido","body":"Benefícios estaduais não aproveitados na apuração."}] },
      { h2: "Como funciona", h3: [{"title":"Análise de viabilidade","body":"Avaliação gratuita antes de qualquer trabalho."},{"title":"Levantamento técnico","body":"Reconstituição de bases e fundamentação legal."},{"title":"Compensação ou restituição","body":"Encaminhamento via PER/DCOMP ou via judicial com parceiro."}] },
      { h2: "Segurança jurídica", h3: [{"title":"Sem aventura","body":"Trabalhamos só com tese consolidada ou com fundamento sólido."},{"title":"Documentação auditável","body":"Todo o cálculo fica documentado e rastreável."},{"title":"Alinhamento com fiscalização","body":"Conduzimos para que a empresa suporte qualquer revisão."}] },
      { h2: "Para quem é indicado", h3: [{"title":"Lucro Presumido e Real","body":"Onde o potencial costuma ser mais relevante."},{"title":"Folha alta","body":"Empresas com volume significativo de encargos."},{"title":"Comércio com ST","body":"Varejistas em estados com substituição tributária."}] },
      { h2: "Perguntas frequentes", h3: [{"title":"Tenho risco com a Receita?","body":"Quando bem fundamentado, o risco é controlado."},{"title":"Vocês cobram percentual?","body":"Sim, por êxito. Empresa não paga se não recuperar."},{"title":"Demora quanto?","body":"Análise em semanas; compensação varia conforme via."}] },
      ]}
    />
  );
}
