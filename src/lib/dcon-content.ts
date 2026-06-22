import md from "../content/dcon-arquitetura.md?raw";

/**
 * Parser do documento mestre DCON_Arquitetura_Com_Respostas_Validadas_v2.md.
 * Lê uma única vez no build (módulo top-level) e expõe campos canônicos por
 * página (1..19), garantindo que H1, audiência e CTAs do site espelhem o doc.
 */

export interface DconCta {
  label: string;
  to: string;
}

export interface DconSection {
  /** Número da seção no doc (1..19) */
  n: number;
  /** H1 sugerido pelo doc */
  h1: string;
  /** Dor principal narrativa */
  dor: string;
  /** Cliente que atrai — usado como chips de público */
  audience: string[];
  /** Frase de autoridade do doc */
  fraseAutoridade: string;
  /** Frase comercial do doc — usada como lead/intro */
  fraseComercial: string;
  /** Resposta validada (PARTE II, quando existe) */
  respostaValidada?: string;
  /** CTAs do doc — sempre 3 (PARTE II quando disponível, senão PARTE I + fallback) */
  ctas: DconCta[];
}

/** Quebra o doc nos blocos PARTE I (uma página = um cabeçalho `# N. Título`) */
function sliceParte(source: string, startPattern: RegExp, endPattern: RegExp): string {
  const startIdx = source.search(startPattern);
  if (startIdx === -1) return "";
  const tail = source.slice(startIdx);
  const endIdx = tail.search(endPattern);
  return endIdx === -1 ? tail : tail.slice(0, endIdx);
}

function extractParteI(): Map<number, string> {
  const parteI = md.split("# PARTE II")[0];
  const out = new Map<number, string>();
  const regex = /^# (\d+)\.\s.+$/gm;
  const matches: { n: number; idx: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = regex.exec(parteI))) matches.push({ n: Number(m[1]), idx: m.index });
  matches.forEach((cur, i) => {
    if (cur.n < 1 || cur.n > 19) return;
    const end = matches[i + 1]?.idx ?? parteI.length;
    out.set(cur.n, parteI.slice(cur.idx, end));
  });
  return out;
}

function extractParteII(): Map<number, string> {
  const parteII = md.split("# PARTE II")[1] ?? "";
  const out = new Map<number, string>();
  const regex = /^# (\d+)\.\s.+$/gm;
  const matches: { n: number; idx: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = regex.exec(parteII))) matches.push({ n: Number(m[1]), idx: m.index });
  matches.forEach((cur, i) => {
    const end = matches[i + 1]?.idx ?? parteII.length;
    out.set(cur.n, parteII.slice(cur.idx, end));
  });
  return out;
}

const PARTE_I = extractParteI();
const PARTE_II = extractParteII();

function getField(block: string, header: string): string {
  const re = new RegExp(`^## ${header}\\s*\\n+([^#]+)`, "m");
  const match = block.match(re);
  return (match?.[1] ?? "").trim();
}

function getBullets(block: string, header: string): string[] {
  const body = getField(block, header);
  return body
    .split(/\n/)
    .map((l) => l.trim())
    .filter((l) => l.startsWith("- "))
    .map((l) => l.slice(2).trim());
}

/**
 * Converte uma frase-CTA do doc em link tipado.
 * Estratégia: 1º CTA → /diagnostico (alta intenção), 2º → /diagnostico,
 * 3º → /contato (humano). Mantém a frase do doc como label.
 */
function ctaFromPhrase(phrase: string, idx: number): DconCta {
  const clean = phrase.replace(/[.\s]+$/g, "").trim();
  if (idx === 2) return { label: clean, to: "/contato" };
  return { label: clean, to: "/diagnostico" };
}

const FALLBACK_CTA: DconCta = { label: "Falar com a equipe DCON", to: "/contato" };

function loadCtas(n: number): DconCta[] {
  const iiKey = n >= 18 ? n + 1 : n; // PARTE II tem item extra (18 = Crédito Empresarial)
  const fromII = PARTE_II.get(iiKey);
  const phrasesII = fromII
    ? fromII
        .split(/^## CTAs\s*$/m)[1]
        ?.split(/\n## |\n# /)[0]
        ?.split(/\n/)
        .map((l) => l.trim())
        .filter((l) => l.startsWith("- "))
        .map((l) => l.slice(2).trim()) ?? []
    : [];
  const fromI = PARTE_I.get(n) ?? "";
  const phrasesI = getBullets(fromI, "CTAs sugeridos");
  const merged = phrasesII.length >= 2 ? phrasesII : phrasesI;
  const ctas = merged.slice(0, 3).map((p, i) => ctaFromPhrase(p, i));
  while (ctas.length < 3) ctas.push(FALLBACK_CTA);
  return ctas;
}

function loadRespostaValidada(n: number): string | undefined {
  const iiKey = n >= 18 ? n + 1 : n;
  const block = PARTE_II.get(iiKey);
  if (!block) return undefined;
  const candidates = ["Resposta validada para uso no site", "Contexto validado"];
  for (const h of candidates) {
    const v = getField(block, h);
    if (v) {
      // Pega apenas o primeiro parágrafo (até linha em branco) — uso institucional.
      return v.split(/\n\s*\n/)[0].trim();
    }
  }
  return undefined;
}

export function getDoc(n: number): DconSection {
  const block = PARTE_I.get(n);
  if (!block) throw new Error(`Seção ${n} ausente em PARTE I do doc DCON`);
  return {
    n,
    h1: getField(block, "H1 sugerido") || "",
    dor: getField(block, "Dor principal") || "",
    audience: getBullets(block, "Cliente que atrai"),
    fraseAutoridade: getField(block, "Frase de autoridade"),
    fraseComercial: getField(block, "Frase comercial"),
    respostaValidada: loadRespostaValidada(n),
    ctas: loadCtas(n),
  };
}

/** Atalho semântico por slug para facilitar leitura nas rotas. */
export const DOC = {
  home: () => getDoc(1),
  diagnostico: () => getDoc(2),
  planejamentoTributario: () => getDoc(3),
  reformaTributaria: () => getDoc(4),
  recuperacaoCreditos: () => getDoc(5),
  defesasFiscais: () => getDoc(6),
  regularizacaoFiscal: () => getDoc(7),
  tecnologiaContabil: () => getDoc(8),
  pessoaFisicaIrpf: () => getDoc(9),
  holdingPatrimonial: () => getDoc(10),
  departamentoPessoal: () => getDoc(11),
  construcaoCivil: () => getDoc(12),
  produtorRural: () => getDoc(13),
  provedoresInternet: () => getDoc(14),
  saude: () => getDoc(15),
  valuationKpis: () => getDoc(16),
  registroMarcaInpi: () => getDoc(17),
  trocarContabilidade: () => getDoc(18),
  contadorConsultivo: () => getDoc(19),
};