import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";

const menu = [
  { label: "Início", to: "/" },
  {
    label: "Sobre",
    to: "/sobre",
    children: [
      { label: "A DCON", to: "/sobre" },
      { label: "Leandro Matsuoka Guimarães", to: "/sobre/leandro" },
      { label: "Metodologia", to: "/sobre/metodologia" },
    ],
  },
  {
    label: "Soluções",
    to: "/solucoes",
    children: [
      { label: "Contabilidade Empresarial", to: "/solucoes/contabilidade-empresarial" },
      { label: "Departamento Fiscal", to: "/solucoes/departamento-fiscal" },
      { label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario" },
      { label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" },
      { label: "Recuperação de Créditos", to: "/solucoes/recuperacao-creditos-tributarios" },
      { label: "Defesas Fiscais", to: "/solucoes/defesas-fiscais" },
      { label: "Departamento Pessoal", to: "/solucoes/departamento-pessoal" },
      { label: "Societário e Legalização", to: "/solucoes/societario-legalizacao" },
      { label: "Regularização Fiscal", to: "/solucoes/regularizacao-fiscal" },
      { label: "Holding e Patrimônio", to: "/solucoes/holding-patrimonial" },
      { label: "BPO Financeiro", to: "/solucoes/bpo-financeiro" },
      { label: "Tecnologia Contábil", to: "/solucoes/tecnologia-contabil" },
      { label: "Pessoa Física e IRPF", to: "/solucoes/pessoa-fisica-irpf" },
      { label: "Valuation e KPIs", to: "/solucoes/valuation-kpis" },
      { label: "Registro de Marca INPI", to: "/solucoes/registro-marca-inpi" },
      { label: "Abrir Empresa", to: "/solucoes/abrir-empresa" },
      { label: "Trocar de Contabilidade", to: "/solucoes/trocar-contabilidade" },
    ],
  },
  {
    label: "Segmentos",
    to: "/segmentos",
    children: [
      { label: "Médicos e Clínicas", to: "/segmentos/medicos-clinicas" },
      { label: "E-commerce", to: "/segmentos/e-commerce" },
      { label: "Construção Civil e SPEs", to: "/segmentos/construcao-civil-spe" },
      { label: "Provedores de Internet", to: "/segmentos/provedores-internet" },
      { label: "Holdings", to: "/segmentos/holdings" },
      { label: "Tecnologia e Startups", to: "/segmentos/tecnologia-startups" },
      { label: "Ver todos", to: "/segmentos" },
    ],
  },
  {
    label: "Conteúdos",
    to: "/conteudos",
    children: [
      { label: "Planejamento Tributário", to: "/conteudos/planejamento-tributario" },
      { label: "Regularização Fiscal", to: "/conteudos/regularizacao-fiscal" },
      { label: "Regimes Tributários", to: "/conteudos/regimes-tributarios" },
      { label: "Holding e Patrimônio", to: "/conteudos/holding-patrimonio" },
      { label: "DP e eSocial", to: "/conteudos/dp-esocial" },
      { label: "Comércio e ICMS", to: "/conteudos/comercio-icms" },
      { label: "Saúde e Clínicas", to: "/conteudos/saude-clinicas" },
    ],
  },
  { label: "Contato", to: "/contato" },
] as const;

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="font-semibold tracking-tight text-lg">
            DCON<span className="text-primary"> .</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-sm">
            {menu.map((item) => (
              <div key={item.to} className="group relative py-5">
                <Link to={item.to} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
                {"children" in item && item.children && (
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute top-full left-0 min-w-[260px] bg-background text-foreground border border-border shadow-xl rounded-md py-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-4 py-2 text-sm hover:bg-accent"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/diagnostico"
              className="ml-2 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Diagnóstico
            </Link>
          </nav>
          <button
            className="lg:hidden text-sm"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            Menu
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-secondary px-6 py-4 space-y-3">
            {menu.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block text-sm"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/diagnostico"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              onClick={() => setOpen(false)}
            >
              Solicitar diagnóstico
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-24 border-t border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-6 text-sm">
          <div className="lg:col-span-2">
            <div className="text-lg font-semibold">DCON Serviços Contábeis</div>
            <p className="mt-3 text-secondary-foreground/70">
              Contabilidade estratégica para decisões seguras. Goiânia — atendimento
              online em todo o Brasil.
            </p>
            <ul className="mt-5 space-y-2 text-secondary-foreground/70">
              <li>Goiânia — GO</li>
              <li>contato@dcon.com.br</li>
              <li><Link to="/diagnostico" className="text-primary">Solicitar diagnóstico</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Soluções</div>
            <ul className="space-y-2 text-secondary-foreground/70">
              <li><Link to="/solucoes/planejamento-tributario">Planejamento Tributário</Link></li>
              <li><Link to="/solucoes/reforma-tributaria">Reforma Tributária</Link></li>
              <li><Link to="/solucoes/defesas-fiscais">Defesas Fiscais</Link></li>
              <li><Link to="/solucoes/recuperacao-creditos-tributarios">Recuperação de Créditos</Link></li>
              <li><Link to="/solucoes/tecnologia-contabil">Tecnologia Contábil</Link></li>
              <li><Link to="/solucoes/valuation-kpis">Valuation e KPIs</Link></li>
              <li><Link to="/solucoes" className="text-primary">Ver todas</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Segmentos</div>
            <ul className="space-y-2 text-secondary-foreground/70">
              <li><Link to="/segmentos/medicos-clinicas">Médicos e Clínicas</Link></li>
              <li><Link to="/segmentos/e-commerce">E-commerce</Link></li>
              <li><Link to="/segmentos/construcao-civil-spe">Construção Civil e SPEs</Link></li>
              <li><Link to="/segmentos/holdings">Holdings</Link></li>
              <li><Link to="/segmentos/tecnologia-startups">Tecnologia e Startups</Link></li>
              <li><Link to="/segmentos" className="text-primary">Ver todos</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Conteúdos</div>
            <ul className="space-y-2 text-secondary-foreground/70">
              <li><Link to="/conteudos/planejamento-tributario">Planejamento Tributário</Link></li>
              <li><Link to="/conteudos/regularizacao-fiscal">Regularização Fiscal</Link></li>
              <li><Link to="/conteudos/regimes-tributarios">Regimes Tributários</Link></li>
              <li><Link to="/conteudos/holding-patrimonio">Holding e Patrimônio</Link></li>
              <li><Link to="/conteudos/dp-esocial">DP e eSocial</Link></li>
              <li><Link to="/conteudos" className="text-primary">Central de Conteúdo</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Empresa</div>
            <ul className="space-y-2 text-secondary-foreground/70">
              <li><Link to="/sobre">Sobre a DCON</Link></li>
              <li><Link to="/sobre/leandro">Responsável técnico</Link></li>
              <li><Link to="/sobre/metodologia">Metodologia</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40 px-6 py-5 text-xs text-secondary-foreground/60 text-center">
          © {new Date().getFullYear()} DCON Serviços Contábeis. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}