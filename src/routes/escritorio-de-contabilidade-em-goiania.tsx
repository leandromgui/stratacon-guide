import { createFileRoute, Link } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import fachada from "@/assets/escritorio/fachada.jpg.asset.json";
import salaReuniao from "@/assets/escritorio/sala-reuniao.jpg.asset.json";
import recepcao from "@/assets/escritorio/recepcao.jpg.asset.json";

const FOTOS = [
  { src: fachada.url, alt: "Fachada do escritório da DCON Serviços Contábeis com letreiro e estacionamento próprio em Goiânia" },
  { src: salaReuniao.url, alt: "Sala de reunião da DCON com mesa para seis lugares, televisor e iluminação em trilho" },
  { src: recepcao.url, alt: "Área de recepção e copa da DCON com painel ripado de madeira e televisor" },
];

const DEPARTMENTS = [
  { label: "Departamento contábil", to: "/solucoes/contabilidade-empresarial", body: "Escrituração, fechamento mensal, balanços e notas explicativas com revisão analítica." },
  { label: "Departamento fiscal", to: "/solucoes/departamento-fiscal", body: "Apuração de tributos, SPED, EFD e obrigações acessórias federais, estaduais e municipais." },
  { label: "Departamento pessoal", to: "/solucoes/departamento-pessoal", body: "Folha, eSocial, convenções coletivas, admissões, rescisões e passivo trabalhista." },
  { label: "Núcleo de compliance e defesa", to: "/solucoes/defesas-fiscais", body: "Impugnações, recursos administrativos, auditoria interna e resposta a intimações." },
  { label: "Núcleo tributário", to: "/solucoes/planejamento-tributario", body: "Teses, comparativo de regimes, simulações e pareceres com base legal rastreável." },
  { label: "Tecnologia e dados", to: "/solucoes/tecnologia-contabil", body: "ERP, integrações, importação de XML e conferência automatizada de arquivos fiscais." },
];

const FAQ = [
  {
    q: "Qual o tamanho da equipe do escritório?",
    a: "A DCON opera com uma equipe de 11 pessoas distribuídas em contábil, fiscal, pessoal, compliance e atendimento, sob supervisão direta do responsável técnico. Isso permite revisão cruzada: quem executa não é quem revisa.",
  },
  {
    q: "O escritório atende presencialmente em Goiânia?",
    a: "Sim. Temos endereço físico na R. 89-A, nº 51, Setor Sul, Goiânia — GO, com reuniões presenciais agendadas e atendimento remoto para clientes de todo o Brasil.",
  },
  {
    q: "Quais registros e responsabilidades técnicas o escritório possui?",
    a: "DCON Serviços Contábeis atua sob CRC-GO 1202/O-5. O responsável técnico é Leandro Matsuoka Guimarães, CRC-GO 16.395/O-9. Cada entrega tem responsável nominal identificado.",
  },
  {
    q: "Como funciona a estrutura de atendimento por empresa?",
    a: "Cada cliente tem um responsável de conta, um calendário fiscal próprio e um cronograma de fechamento. Reuniões periódicas revisam regime, indicadores e decisões societárias.",
  },
];

const JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "AccountingService"],
      "@id": `${SITE_URL}/escritorio-de-contabilidade-em-goiania#business`,
      name: "DCON Serviços Contábeis",
      description:
        "Escritório de contabilidade em Goiânia com equipe de 11 profissionais em contábil, fiscal, pessoal e compliance, sob CRC-GO 1202/O-5.",
      url: `${SITE_URL}/escritorio-de-contabilidade-em-goiania`,
      telephone: "+55-62-3223-7010",
      email: "contato@dcon.cnt.br",
      foundingDate: "2004-11",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 11 },
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. 89-A, nº 51 — Setor Sul",
        addressLocality: "Goiânia",
        addressRegion: "GO",
        postalCode: "74093-150",
        addressCountry: "BR",
      },
      geo: { "@type": "GeoCoordinates", latitude: -16.699, longitude: -49.267 },
      areaServed: [
        { "@type": "City", name: "Goiânia" },
        { "@type": "Country", name: "Brasil" },
      ],
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/escritorio-de-contabilidade-em-goiania#faq`,
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/escritorio-de-contabilidade-em-goiania")({
  head: () => ({
    ...buildSeoHead({
      title: "Escritório de Contabilidade em Goiânia - DCON | +700 Clientes",
      description:
        "Escritório de contabilidade em Goiânia com equipe especializada em compliance, tributação e auditoria fiscal. Conheça a DCON Contábil.",
      canonical: "/escritorio-de-contabilidade-em-goiania",
    }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(JSONLD) },
      { type: "application/ld+json", children: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "/" },
    { "@type": "ListItem", position: 2, name: "Escritório de contabilidade em Goiânia", item: "/escritorio-de-contabilidade-em-goiania" },
  ],
}) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Estrutura institucional"
      h1="Escritório de Contabilidade em Goiânia"
      lead="Estrutura departamentalizada, endereço físico no Setor Sul e responsabilidade técnica registrada — não um contador isolado atendendo por aplicativo."
      intro="A DCON Serviços Contábeis foi fundada em novembro de 2004 e atua sob CRC-GO 1202/O-5, com mais de 700 clientes atendidos e uma equipe de 11 profissionais divididos entre contábil, fiscal, departamento pessoal, compliance e tecnologia. Esta página descreve a estrutura da firma: quem faz o quê, como o trabalho é revisado e onde estamos."
      breadcrumbs={[
        { label: "Escritório de contabilidade em Goiânia", to: "/escritorio-de-contabilidade-em-goiania" },
      ]}
      ctaPrimary={{ label: "Solicitar diagnóstico técnico inicial", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a equipe técnica", to: "/contato" }}
      sections={[
        {
          h2: "Como o escritório é organizado",
          lead: "Onze pessoas em cinco frentes técnicas, com quem executa separado de quem revisa.",
          h3: [
            { title: "Equipe de 11 profissionais", body: "Contábil, fiscal, pessoal, compliance e atendimento, com formação específica por área e supervisão do responsável técnico." },
            { title: "Revisão cruzada obrigatória", body: "Nenhuma apuração, folha ou balanço é transmitido sem conferência por um segundo profissional." },
            { title: "Responsável de conta nomeado", body: "Cada empresa sabe com quem falar — sem fila de atendimento genérico." },
            { title: "Supervisão técnica direta", body: "Pareceres, teses e retificações passam pelo responsável técnico antes de sair." },
          ],
        },
        {
          h2: "Credibilidade e histórico",
          lead: "Números verificáveis, não adjetivos.",
          h3: [
            { title: "Fundada em novembro de 2004", body: "Mais de duas décadas de operação contínua em Goiânia, com histórico de clientes de longa permanência." },
            { title: "DCON — CRC-GO 1202/O-5", body: "Registro do escritório no Conselho Regional de Contabilidade de Goiás, ativo e verificável." },
            { title: "Responsável técnico CRC-GO 16.395/O-9", body: "Leandro Matsuoka Guimarães responde tecnicamente pelas entregas da firma." },
            { title: "Mais de 700 clientes atendidos", body: "Saúde, comércio, construção civil, serviços, tecnologia, provedores, holdings e produtor rural." },
          ],
        },
        {
          h2: "Infraestrutura e controles internos",
          lead: "A estrutura existe para que prazo, guarda de documentos e rastreabilidade não dependam de memória de ninguém.",
          h3: [
            { title: "Escritório próprio no Setor Sul", body: "Sala de reunião para atendimento presencial e guarda organizada de documentação física e digital." },
            { title: "Calendário fiscal controlado", body: "Obrigações por cliente e por competência, com alerta interno antes do vencimento." },
            { title: "Backup e sigilo", body: "Arquivos em ambiente controlado, acesso por perfil e política de sigilo profissional." },
            { title: "Trilha de auditoria", body: "Toda entrega fica arquivada com data, responsável e fundamento — pronta para fiscalização." },
          ],
        },
      ]}
      faq={FAQ}
      relatedLinks={[
        { label: "Contador em Goiânia — atuação consultiva", to: "/contador-em-goiania", eyebrow: "Profissional e método" },
        { label: "Quem somos", to: "/sobre", eyebrow: "Institucional" },
        { label: "Método DCON", to: "/metodo", eyebrow: "Como conduzimos" },
        { label: "Contato e endereço", to: "/contato", eyebrow: "Atendimento" },
      ]}
      ctaVariant="institutional"
    >
      <section className="border-t border-border pt-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <header className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Departamentos</div>
            <h2 className="mt-4 font-display text-3xl tracking-tight">
              Cada frente com escopo e responsável.
            </h2>
          </header>
          <ul className="lg:col-span-8 grid gap-px bg-border sm:grid-cols-2 border border-border">
            {DEPARTMENTS.map((d) => (
              <li key={d.to} className="bg-card">
                <Link
                  to={d.to}
                  className="group block p-6 hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <h3 className="font-display text-[17px]">{d.label}</h3>
                  <p className="mt-2 text-muted-foreground text-[14px] leading-relaxed group-hover:text-secondary-foreground/80">
                    {d.body}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border pt-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <header className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Estrutura</div>
            <h2 className="mt-4 font-display text-3xl tracking-tight">
              O escritório por dentro.
            </h2>
            <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
              Sede própria no Setor Sul, com sala de reunião para atendimento presencial agendado e
              estacionamento no local.
            </p>
          </header>
          <ul className="lg:col-span-8 grid gap-px bg-border sm:grid-cols-3 border border-border">
            {FOTOS.map((f) => (
              <li key={f.src} className="bg-card">
                <img
                  src={f.src}
                  alt={f.alt}
                  loading="lazy"
                  className="aspect-[3/4] h-full w-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border pt-16">

        <div className="grid lg:grid-cols-12 gap-10">
          <header className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Onde estamos</div>
            <h2 className="mt-4 font-display text-3xl tracking-tight">
              Endereço físico em Goiânia.
            </h2>
            <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
              R. 89-A, nº 51 — Setor Sul, Goiânia — GO, 74093-150
              <br />
              Telefone fixo: (62) 3223-7010 · WhatsApp: (62) 99289-0898
              <br />
              contato@dcon.cnt.br
            </p>
          </header>
          <div className="lg:col-span-8 aspect-[16/10] w-full overflow-hidden border border-border bg-card">
            <iframe
              title="Mapa do escritório DCON Serviços Contábeis — R. 89-A, nº 51, Setor Sul, Goiânia"
              src="https://www.google.com/maps?q=Dcon+Servi%C3%A7os+Cont%C3%A1beis,+R.+89-A,+51+-+Setor+Sul,+Goi%C3%A2nia+-+GO&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </PageScaffold>
  );
}
