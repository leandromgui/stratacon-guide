import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/sobre/leandro")({
  head: () => ({
    meta: [
      { title: "Leandro Matsuoka Guimarães | Contador Estrategista em Goiânia" },
      { name: "description", content: "Leandro Matsuoka Guimarães, CRC-GO nº 16.395/O-9, sócio da DCON: contador em Goiânia especialista em planejamento tributário, recuperação de créditos, finanças corporativas e estruturação societária." },
      { property: "og:title", content: "Leandro Matsuoka Guimarães | Contador Estrategista em Goiânia" },
      { property: "og:description", content: "Leandro Matsuoka Guimarães, CRC-GO nº 16.395/O-9, sócio da DCON: contador em Goiânia especialista em planejamento tributário, recuperação de créditos, finanças corporativas e estruturação societária." },
      { property: "og:url", content: "/sobre/leandro" },
    ],
    links: [{ rel: "canonical", href: "/sobre/leandro" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Sobre", "item": "/sobre"}, {"@type": "ListItem", "position": 3, "name": "Leandro Matsuoka Guimarães", "item": "/sobre/leandro"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Responsável técnico"
      h1="Liderança técnica com fundamento, rastreabilidade e visão empresarial"
      intro="A liderança técnica da DCON é conduzida por Leandro Matsuoka Guimarães, contador registrado no CRC-GO sob nº 16.395/O-9, sócio da DCON Serviços Contábeis e profissional com atuação consolidada em contabilidade empresarial, consultoria tributária, controladoria, finanças corporativas e reorganização societária."
      intent="Leandro Matsuoka contador, contador Goiânia consultivo, CRC-GO 16395"
      observation="Schema Person + sameAs redes. Aumenta autoridade de artigos assinados."
      ctaPrimary={{ label: "Agendar conversa técnica", to: "/contato" }}
      ctaSecondary={{ label: "Ler artigos", to: "/conteudos" }}
      sections={[
        {
          h2: "Formação e atuação",
          h3: [
            { title: "Registro profissional", body: "Contador registrado no CRC-GO sob nº 16.395/O-9, sócio da DCON Serviços Contábeis, com atuação consolidada em contabilidade empresarial, consultoria tributária, controladoria, finanças corporativas e reorganização societária." },
            { title: "Graduação e especializações", body: "Formado em Ciências Contábeis, bacharel em Direito e pós-graduado em Finanças Corporativas. Formação multidisciplinar que permite uma leitura integrada da empresa: contábil, fiscal, jurídica, financeira, societária e patrimonial." },
            { title: "Trajetória empresarial", body: "Experiência prática com gestão de empresas, não apenas escrituração. Atuação técnica envolve planejamento tributário, recuperação de créditos, análise de regimes fiscais, regularização de empresas, defesas administrativas, SPED, Simples Nacional, Lucro Presumido, Lucro Real, estruturação de holdings, indicadores empresariais e suporte estratégico para decisões de crescimento, sucessão e reorganização." },
          ],
        },
        {
          h2: "Áreas de especialidade",
          h3: [
            { title: "Tributário", body: "Planejamento tributário, comparativo de regimes, recuperação de créditos, defesas administrativas e análise de exposição fiscal com base técnica." },
            { title: "Societário", body: "Reorganizações societárias, alterações contratuais, acordos de sócios, estruturação de holdings, sucessão empresarial e governança." },
            { title: "Holdings e patrimônio", body: "Estruturação patrimonial, proteção familiar, separação entre patrimônio pessoal e empresarial, tudo dentro da lei." },
          ],
        },
        {
          h2: "Visão sobre contabilidade consultiva",
          h3: [
            { title: "Decisão antes de declaração", body: "Contabilidade existe para subsidiar decisão, não só para cumprir obrigação acessória. Cada entrega deve ter método, documentação, fundamento, rastreabilidade e coerência." },
            { title: "Risco fiscal é risco do negócio", body: "Quem ignora o fiscal hoje paga em multa, juros e perda de oportunidade amanhã. A coerência entre a operação real da empresa, as notas fiscais, a escrituração e as decisões da administração é essencial." },
            { title: "Linguagem do empresário", body: "Tradução do tecniquês para a decisão de quem assina o cheque. O papel do responsável técnico é assegurar que cada entrega seja compreensível e acionável." },
          ],
        },
        {
          h2: "Publicações e conteúdo técnico",
          h3: [
            { title: "Artigos", body: "Conteúdo autoral sobre tributário, regimes, holding, regularização e indicadores empresariais." },
            { title: "Lives e entrevistas", body: "Participações em pautas técnicas voltadas ao empresário e à gestão fiscal." },
            { title: "Material de apoio", body: "Checklists e guias técnicos disponibilizados na Central de Conteúdo." },
          ],
        },
      ]}
    />
  );
}
