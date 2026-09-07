import { SITE_URL } from "./seo";

/**
 * Schema.org Person canônico do responsável técnico da DCON.
 * Fonte única de verdade — referenciado por @id nas páginas /sobre,
 * /sobre/leandro e nas landing pages locais.
 */
export const LEANDRO_PERSON_JSONLD = {
  "@type": "Person",
  "@id": `${SITE_URL}/sobre/leandro#leandro`,
  name: "Leandro Matsuoka Guimarães",
  jobTitle: "Diretor Técnico",
  description:
    "Contador registrado no CRC-GO sob nº 16.395/O-9, sócio e diretor técnico da DCON Serviços Contábeis. Atuação em contabilidade empresarial, consultoria tributária, controladoria, finanças corporativas e reorganização societária.",
  identifier: "CRC-GO 16.395/O-9",
  url: `${SITE_URL}/sobre/leandro`,
  worksFor: { "@id": `${SITE_URL}/#organization` },
  knowsAbout: [
    "Planejamento tributário",
    "Recuperação de créditos tributários",
    "Reforma tributária (IBS/CBS)",
    "Holding patrimonial e sucessão",
    "Controladoria e finanças corporativas",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Registro profissional",
    name: "CRC-GO 16.395/O-9",
    recognizedBy: {
      "@type": "Organization",
      name: "Conselho Regional de Contabilidade de Goiás",
    },
  },
} as const;
