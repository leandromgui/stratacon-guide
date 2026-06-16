import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/")({
  head: () => ({
    meta: [
      { title: "Segmentos Atendidos | DCON Contabilidade Especializada" },
      { name: "description", content: "Contabilidade especializada por segmento: saúde, e-commerce, construção civil, holdings, tecnologia e mais." },
      { property: "og:title", content: "Segmentos Atendidos | DCON Contabilidade Especializada" },
      { property: "og:description", content: "Contabilidade especializada por segmento: saúde, e-commerce, construção civil, holdings, tecnologia e mais." },
      { property: "og:url", content: "/segmentos" },
    ],
    links: [{ rel: "canonical", href: "/segmentos" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmentos"
      h1="Contabilidade especializada para diferentes tipos de empresa"
      
      intent="contabilidade por segmento, contador especializado"
      
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
      { h2: "Saúde, clínicas e médicos", h3: ["Médicos PJ","Clínicas","Odontologia"] },
      { h2: "Comércio, e-commerce e marketplaces", h3: ["Varejo","E-commerce","DIFAL e ICMS-ST"] },
      { h2: "Prestadores de serviços", h3: ["ISS","Serviços técnicos","Consultorias"] },
      { h2: "Construção civil, SPEs e incorporações", h3: ["RET","SPE por obra","Incorporadoras"] },
      { h2: "Holdings, imobiliárias e empresas familiares", h3: ["Holding patrimonial","Imobiliárias","Famílias empresárias"] },
      { h2: "Condomínios, terceiro setor e produtor rural", h3: ["Condomínios","OSC","Produtor rural"] },
      { h2: "Tecnologia, startups e negócios digitais", h3: ["SaaS","Startups","Negócios digitais"] },
      ]}
    />
  );
}
