import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { WhatsAppButton } from "./WhatsAppButton";
import { CookieBanner } from "./CookieBanner";
import { useEffect, useState } from "react";

type Col = { title: string; items: { label: string; to: string; desc?: string }[] };
type MegaItem = {
  label: string;
  to: string;
  feature?: { eyebrow: string; title: string; body: string; cta: { label: string; to: string } };
  columns?: Col[];
};

const mega: MegaItem[] = [
  {
    label: "A DCON",
    to: "/sobre",
    feature: {
      eyebrow: "Consultoria contábil, fiscal, tributária e empresarial",
      title: "Não somos uma contabilidade online.",
      body: "Atuamos como o time técnico das empresas que precisam decidir com segurança jurídica, fiscal e patrimonial.",
      cta: { label: "Conhecer a firma", to: "/sobre" },
    },
    columns: [
      {
        title: "A firma",
        items: [
          { label: "Quem somos", to: "/sobre", desc: "História, propósito e posicionamento" },
          { label: "Liderança técnica", to: "/sobre/leandro", desc: "Leandro Matsuoka Guimarães" },
          { label: "Método DCON", to: "/metodo", desc: "Protocolo técnico em 4 fases auditáveis" },
        ],
      },
      {
        title: "Atendimento",
        items: [
          { label: "Goiânia e online", to: "/goiania", desc: "Presencial e remoto, todo o Brasil" },
          { label: "Contato institucional", to: "/contato", desc: "Fale com a equipe técnica" },
          { label: "Diagnóstico", to: "/diagnostico", desc: "Entrega em até 7 dias úteis" },
        ],
      },
    ],
  },
  {
    label: "Soluções",
    to: "/solucoes",
    feature: {
      eyebrow: "Linhas de serviço",
      title: "Quatro frentes técnicas, um único protocolo.",
      body: "Compliance & Operação · Estratégia Tributária · Patrimônio & Pessoa Física · Tecnologia & Institucional — conduzidas pelo Método DCON.",
      cta: { label: "Conhecer o Método DCON", to: "/metodo" },
    },
    columns: [
      {
        title: "Compliance & operação",
        items: [
          { label: "Contabilidade Empresarial", to: "/solucoes/contabilidade-empresarial", desc: "Rotina mensal sob responsabilidade técnica" },
          { label: "Departamento Fiscal", to: "/solucoes/departamento-fiscal", desc: "Apuração, SPED e obrigações acessórias" },
          { label: "Departamento Pessoal", to: "/solucoes/departamento-pessoal", desc: "Folha, eSocial, CCT e SST" },
          { label: "BPO Financeiro", to: "/solucoes/bpo-financeiro", desc: "Contas a pagar/receber e conciliação" },
        ],
      },
      {
        title: "Estratégia tributária",
        items: [
          { label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario", desc: "Tese, simulação e mudança de regime" },
          { label: "Reforma Tributária (IBS/CBS)", to: "/solucoes/reforma-tributaria", desc: "Preparação 2026/2027 e ERP" },
          { label: "Recuperação de Créditos", to: "/solucoes/recuperacao-creditos-tributarios", desc: "Revisão dos últimos 5 anos" },
          { label: "Defesas Fiscais", to: "/solucoes/defesas-fiscais", desc: "Impugnações e recursos administrativos" },
          { label: "Regularização Fiscal", to: "/solucoes/regularizacao-fiscal", desc: "Certidões, licitações e crédito" },
        ],
      },
      {
        title: "Patrimônio & pessoa física",
        items: [
          { label: "Holding Patrimonial", to: "/solucoes/holding-patrimonial", desc: "Proteção, sucessão e governança familiar" },
          { label: "Pessoa Física e IRPF", to: "/solucoes/pessoa-fisica-irpf", desc: "Liberais, sócios e alta renda" },
          { label: "Valuation e KPIs", to: "/solucoes/valuation-kpis", desc: "Precificação, indicadores e venda" },
          { label: "Societário e Legalização", to: "/solucoes/societario-legalizacao", desc: "Alterações, ata e governança" },
        ],
      },
      {
        title: "Tecnologia & institucional",
        items: [
          { label: "Tecnologia Contábil", to: "/solucoes/tecnologia-contabil", desc: "ERP, integrações e dados fiscais" },
          { label: "Abrir Empresa", to: "/solucoes/abrir-empresa", desc: "CNPJ, regime e licenças" },
          { label: "Trocar de Contabilidade", to: "/solucoes/trocar-contabilidade", desc: "Migração técnica com auditoria" },
          { label: "Registro de Marca (INPI)", to: "/solucoes/registro-marca-inpi", desc: "Pesquisa, depósito e acompanhamento" },
        ],
      },
    ],
  },
  {
    label: "Setores",
    to: "/segmentos",
    feature: {
      eyebrow: "Setores atendidos",
      title: "Conhecimento específico por vertical.",
      body: "Cada setor tem regime, obrigações e risco fiscal próprio. Aplicamos método dedicado para cada um.",
      cta: { label: "Ver todos os setores", to: "/segmentos" },
    },
    columns: [
      {
        title: "Saúde & profissionais liberais",
        items: [
          { label: "Médicos e Clínicas", to: "/segmentos/medicos-clinicas" },
          { label: "Odontologia", to: "/segmentos/odontologia" },
          { label: "Prestadores de Serviços", to: "/segmentos/prestadores-servicos" },
        ],
      },
      {
        title: "Comércio, indústria & tech",
        items: [
          { label: "E-commerce", to: "/segmentos/e-commerce" },
          { label: "Comércio Varejista", to: "/segmentos/comercio" },
          { label: "Tecnologia e Startups", to: "/segmentos/tecnologia-startups" },
          { label: "Provedores de Internet", to: "/segmentos/provedores-internet" },
          { label: "Franquias e Redes", to: "/segmentos/franquias-redes" },
        ],
      },
      {
        title: "Patrimônio, imobiliário & rural",
        items: [
          { label: "Construção Civil e SPEs", to: "/segmentos/construcao-civil-spe" },
          { label: "Imobiliárias", to: "/segmentos/imobiliarias" },
          { label: "Holdings", to: "/segmentos/holdings" },
          { label: "Empresas Familiares", to: "/segmentos/empresas-familiares" },
          { label: "Produtor Rural", to: "/segmentos/produtor-rural" },
          { label: "Terceiro Setor", to: "/segmentos/terceiro-setor" },
          { label: "Condomínios", to: "/segmentos/condominios" },
        ],
      },
    ],
  },
  {
    label: "Temas Estratégicos",
    to: "/temas-estrategicos",
    feature: {
      eyebrow: "Agenda do CFO e do sócio",
      title: "Os temas que mais movem o caixa em 2026.",
      body: "Reforma tributária, recuperação de créditos, sucessão patrimonial, defesas fiscais e governança.",
      cta: { label: "Ver agenda completa", to: "/temas-estrategicos" },
    },
    columns: [
      {
        title: "Tributário",
        items: [
          { label: "Reforma Tributária (CBS/IBS)", to: "/solucoes/reforma-tributaria" },
          { label: "Regimes Tributários", to: "/conteudos/regimes-tributarios" },
          { label: "Recuperação de Créditos", to: "/solucoes/recuperacao-creditos-tributarios" },
        ],
      },
      {
        title: "Patrimônio & sucessão",
        items: [
          { label: "Holding Patrimonial", to: "/conteudos/holding-patrimonio" },
          { label: "ITCMD e doação em vida", to: "/conteudos/holding-patrimonio" },
          { label: "Pessoa Física e IRPF", to: "/solucoes/pessoa-fisica-irpf" },
        ],
      },
      {
        title: "Compliance & defesa",
        items: [
          { label: "Regularização Fiscal", to: "/solucoes/regularizacao-fiscal" },
          { label: "Defesas Fiscais", to: "/solucoes/defesas-fiscais" },
          { label: "DP e eSocial", to: "/conteudos/dp-esocial" },
        ],
      },
    ],
  },
  {
    label: "Insights",
    to: "/conteudos",
    feature: {
      eyebrow: "Publicações DCON",
      title: "Conteúdo técnico para quem decide.",
      body: "Artigos analíticos e materiais de referência sobre tributação, governança e patrimônio.",
      cta: { label: "Central de insights", to: "/conteudos" },
    },
    columns: [
      {
        title: "Linhas editoriais",
        items: [
          { label: "Planejamento Tributário", to: "/conteudos/planejamento-tributario" },
          { label: "Regimes Tributários", to: "/conteudos/regimes-tributarios" },
          { label: "Regularização Fiscal", to: "/conteudos/regularizacao-fiscal" },
          { label: "Holding e Patrimônio", to: "/conteudos/holding-patrimonio" },
        ],
      },
      {
        title: "Setoriais",
        items: [
          { label: "Comércio e ICMS", to: "/conteudos/comercio-icms" },
          { label: "Saúde e Clínicas", to: "/conteudos/saude-clinicas" },
          { label: "DP e eSocial", to: "/conteudos/dp-esocial" },
        ],
      },
    ],
  },
  { label: "Contato", to: "/contato" },
];

function MegaPanel({ item }: { item: MegaItem }) {
  if (!item.columns) return null;
  const colCount = item.columns.length;
  const colsClass =
    colCount >= 4
      ? "grid-cols-4"
      : colCount === 3
        ? "grid-cols-3"
        : colCount === 2
          ? "grid-cols-2"
          : "grid-cols-1";
  const wideFeature = colCount >= 4;
  return (
    <div className={`invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-150 absolute left-1/2 top-full z-40 -translate-x-1/2 w-screen ${wideFeature ? "max-w-7xl" : "max-w-6xl"} pt-2`}>
      <div className="bg-background text-foreground border border-border shadow-2xl rounded-sm grid grid-cols-12 overflow-hidden">
        {item.feature && (
          <div className={`${wideFeature ? "col-span-3" : "col-span-4"} bg-secondary text-secondary-foreground p-8 flex flex-col justify-between`}>
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold mb-3">
                {item.feature.eyebrow}
              </div>
              <div className="font-display text-xl leading-snug">{item.feature.title}</div>
              <p className="mt-3 text-sm text-secondary-foreground/70 leading-relaxed">
                {item.feature.body}
              </p>
            </div>
            <Link
              to={item.feature.cta.to}
              className="mt-6 inline-flex w-fit items-center gap-2 border-b border-gold pb-1 text-xs uppercase tracking-[0.18em] text-gold hover:opacity-80"
            >
              {item.feature.cta.label} →
            </Link>
          </div>
        )}
        <div className={`${wideFeature ? "col-span-9" : "col-span-8"} grid ${colsClass} gap-6 p-8`}>
          {item.columns.map((c) => (
            <div key={c.title} className="min-w-0">
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground border-b border-border pb-2 mb-3">
                {c.title}
              </div>
              <ul className="space-y-2.5">
                {c.items.map((it) => (
                  <li key={it.to}>
                    <Link
                      to={it.to}
                      className="group/i block text-sm leading-tight hover:text-primary"
                    >
                      <span className="font-medium">{it.label}</span>
                      {it.desc && (
                        <span className="block text-[12px] text-muted-foreground mt-0.5">
                          {it.desc}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Utility bar */}
      <div className="hidden lg:block bg-secondary text-secondary-foreground/80 border-b border-secondary-foreground/10 text-[12px]">
        <div className="mx-auto max-w-7xl px-6 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="rule-gold text-secondary-foreground/70">
              DCON Serviços Contábeis · Goiânia — atendimento em todo o Brasil
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/contato" className="hover:text-gold">contato@dcon.cnt.br</Link>
            <span className="opacity-30">|</span>
            <Link to="/diagnostico" className="hover:text-gold">Área do Cliente</Link>
            <span className="opacity-30">|</span>
            <span className="text-secondary-foreground/60">PT-BR</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-baseline gap-2 font-display">
            <span className="text-2xl font-semibold tracking-tight text-secondary">DCON</span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Serviços Contábeis
            </span>
          </Link>
          <nav className="hidden lg:flex items-stretch h-full">
            {mega.map((item) => (
              <div key={item.label} className="group relative flex items-center">
                <Link
                  to={item.to}
                  className="px-4 py-2 text-[13px] uppercase tracking-[0.14em] font-medium text-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
                <MegaPanel item={item} />
              </div>
            ))}
            <Link
              to="/diagnostico"
              className="ml-4 my-3 inline-flex items-center rounded-none border border-secondary bg-secondary px-5 py-2 text-[12px] uppercase tracking-[0.16em] font-medium text-secondary-foreground hover:bg-primary hover:border-primary"
            >
              Solicitar diagnóstico
            </Link>
          </nav>
          <button
            className="lg:hidden text-sm uppercase tracking-[0.18em]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {open ? "Fechar" : "Menu"}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background px-6 py-5 space-y-2 max-h-[80vh] overflow-y-auto">
            {mega.map((item) => (
              <div key={item.label} className="border-b border-border/60">
                <div className="flex items-center justify-between py-3">
                  <Link to={item.to} className="text-sm uppercase tracking-[0.14em] font-medium">
                    {item.label}
                  </Link>
                  {item.columns && (
                    <button
                      className="text-xs text-muted-foreground"
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    >
                      {expanded === item.label ? "−" : "+"}
                    </button>
                  )}
                </div>
                {expanded === item.label && item.columns && (
                  <div className="pb-4 pl-3 space-y-4">
                    {item.columns.map((c) => (
                      <div key={c.title}>
                        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                          {c.title}
                        </div>
                        <ul className="space-y-1.5">
                          {c.items.map((it) => (
                            <li key={it.to}>
                              <Link to={it.to} className="text-sm">{it.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/diagnostico"
              className="mt-4 inline-flex w-full justify-center bg-secondary px-5 py-3 text-[12px] uppercase tracking-[0.16em] text-secondary-foreground"
            >
              Solicitar diagnóstico
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <WhatsAppButton />
      <CookieBanner />

      {/* Footer */}
      <footer className="mt-24 bg-secondary text-secondary-foreground">
        <div className="border-b border-secondary-foreground/10">
          <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="font-display text-2xl">DCON</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.24em] text-secondary-foreground/60">
                Serviços Contábeis
              </div>
              <p className="mt-5 text-sm text-secondary-foreground/70 leading-relaxed max-w-sm">
                Consultoria contábil, fiscal, tributária e empresarial. Atuamos como o
                time técnico de empresas que precisam decidir com segurança.
              </p>
              <div className="mt-6 space-y-1.5 text-sm text-secondary-foreground/75">
                <div className="text-gold text-[10px] uppercase tracking-[0.22em] mb-2">Goiânia — GO</div>
                <div>contato@dcon.cnt.br</div>
                <div>Atendimento presencial e online</div>
              </div>
              <Link
                to="/diagnostico"
                className="mt-7 inline-flex items-center gap-2 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.2em] text-gold"
              >
                Solicitar diagnóstico →
              </Link>
            </div>

            <div className="lg:col-span-2">
              <div className="text-[10px] uppercase tracking-[0.22em] text-secondary-foreground/50 mb-4">
                A firma
              </div>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><Link to="/sobre">Quem somos</Link></li>
                <li><Link to="/sobre/leandro">Liderança técnica</Link></li>
                <li><Link to="/metodo" className="text-gold">Método DCON →</Link></li>
                <li><Link to="/goiania">Goiânia</Link></li>
                <li><Link to="/contato">Contato</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="text-[10px] uppercase tracking-[0.22em] text-secondary-foreground/50 mb-4">
                Soluções
              </div>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><Link to="/solucoes/planejamento-tributario">Planejamento Tributário</Link></li>
                <li><Link to="/solucoes/reforma-tributaria">Reforma Tributária</Link></li>
                <li><Link to="/solucoes/defesas-fiscais">Defesas Fiscais</Link></li>
                <li><Link to="/solucoes/recuperacao-creditos-tributarios">Recuperação de Créditos</Link></li>
                <li><Link to="/solucoes/holding-patrimonial">Holding e Patrimônio</Link></li>
                <li><Link to="/solucoes/valuation-kpis">Valuation e KPIs</Link></li>
                <li><Link to="/solucoes" className="text-gold">Ver todas →</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="text-[10px] uppercase tracking-[0.22em] text-secondary-foreground/50 mb-4">
                Setores
              </div>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><Link to="/segmentos/medicos-clinicas">Médicos e Clínicas</Link></li>
                <li><Link to="/segmentos/e-commerce">E-commerce</Link></li>
                <li><Link to="/segmentos/construcao-civil-spe">Construção Civil</Link></li>
                <li><Link to="/segmentos/tecnologia-startups">Tecnologia</Link></li>
                <li><Link to="/segmentos/holdings">Holdings</Link></li>
                <li><Link to="/segmentos" className="text-gold">Ver todos →</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="text-[10px] uppercase tracking-[0.22em] text-secondary-foreground/50 mb-4">
                Insights
              </div>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><Link to="/temas-estrategicos">Temas estratégicos</Link></li>
                <li><Link to="/conteudos/planejamento-tributario">Planejamento</Link></li>
                <li><Link to="/conteudos/regimes-tributarios">Regimes</Link></li>
                <li><Link to="/conteudos/holding-patrimonio">Holding</Link></li>
                <li><Link to="/conteudos/dp-esocial">DP e eSocial</Link></li>
                <li><Link to="/conteudos" className="text-gold">Central →</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-[11px] text-secondary-foreground/55">
          <div>
            © {new Date().getFullYear()} DCON Serviços Contábeis · CRC ativo · Responsabilidade técnica registrada
          </div>
          <div className="flex gap-5">
            <Link to="/contato">Política de privacidade</Link>
            <Link to="/contato">Termos de uso</Link>
            <Link to="/contato">LGPD</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}