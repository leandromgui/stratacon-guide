import { Link } from "@tanstack/react-router";
import type { CategoryDef } from "@/lib/conteudos-categories";
import { categories } from "@/lib/conteudos-categories";

const PAGE_SIZE = 6;

type Props = {
  category: CategoryDef;
  page: number;
  basePath: string; // ex.: /conteudos/tributario
};

export function CategoryHub({ category, page, basePath }: Props) {
  const total = category.articles.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * PAGE_SIZE;
  const visible = category.articles.slice(start, start + PAGE_SIZE);

  const others = categories.filter((c) => c.slug !== category.slug);

  return (
    <div>
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-[0.22em] text-secondary-foreground/60">
              <Link to="/conteudos" className="hover:text-gold">Insights</Link>
              <span className="px-2 opacity-50">/</span>
              <span className="text-gold">{category.name}</span>
            </nav>
            <h1 className="mt-6 font-display text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
              {category.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-secondary-foreground/75 leading-relaxed">
              {category.intro}
            </p>
          </div>
          <aside className="lg:col-span-4 lg:border-l lg:border-secondary-foreground/15 lg:pl-10 flex flex-col justify-end">
            <div className="text-[10px] uppercase tracking-[0.24em] text-secondary-foreground/55 mb-2">Categoria</div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              {total} publicaç{total === 1 ? "ão" : "ões"} nesta categoria — revisadas pela equipe técnica da DCON.
            </p>
          </aside>
        </div>
      </section>

      {/* Subtópicos — H2 + H3 para SEO */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <header className="max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">O que cobrimos nesta categoria</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Os subtemas abaixo orientam a organização do conteúdo. Use-os como mapa de leitura.
          </p>
        </header>
        <div className="mt-10 grid gap-px bg-border border border-border md:grid-cols-2">
          {category.subtopics.map((s) => (
            <article key={s.h3} className="bg-card p-7">
              <h3 className="font-display text-lg tracking-tight">{s.h3}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Listagem paginada */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex items-end justify-between border-b border-border pb-4 mb-8">
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Publicações</h2>
          <div className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
            Página {current} de {totalPages}
          </div>
        </div>
        <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
          {visible.map((a) => (
            <Link key={a.h2 + a.to} to={a.to} className="group bg-card p-7 flex flex-col justify-between hover:bg-secondary hover:text-secondary-foreground transition-colors">
              <div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-gold">
                  <span>{a.kind}</span>
                  <span className="opacity-40">·</span>
                  <span className="text-muted-foreground group-hover:text-secondary-foreground/60">{category.name}</span>
                </div>
                <h3 className="mt-4 font-display text-lg leading-snug">{a.h2}</h3>
                <p className="mt-3 text-[14px] text-muted-foreground group-hover:text-secondary-foreground/75 leading-relaxed">{a.excerpt}</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground group-hover:text-secondary-foreground/65">
                <span>{a.date}</span>
                <span className="text-secondary group-hover:text-gold">Ler →</span>
              </div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <nav aria-label="Paginação" className="mt-10 flex items-center justify-between gap-4">
            {current > 1 ? (
              <Link
                to={basePath}
                search={{ p: current - 1 }}
                className="text-[11px] uppercase tracking-[0.18em] border border-border px-4 py-2 hover:border-secondary"
                rel="prev"
              >
                ← Anterior
              </Link>
            ) : <span />}
            <ul className="flex flex-wrap gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <li key={n}>
                  <Link
                    to={basePath}
                    search={{ p: n }}
                    aria-current={n === current ? "page" : undefined}
                    className={`text-[11px] uppercase tracking-[0.18em] px-3 py-2 border ${n === current ? "bg-secondary text-secondary-foreground border-secondary" : "border-border hover:border-secondary"}`}
                  >
                    {n}
                  </Link>
                </li>
              ))}
            </ul>
            {current < totalPages ? (
              <Link
                to={basePath}
                search={{ p: current + 1 }}
                className="text-[11px] uppercase tracking-[0.18em] border border-border px-4 py-2 hover:border-secondary"
                rel="next"
              >
                Próxima →
              </Link>
            ) : <span />}
          </nav>
        )}
      </section>

      {/* Outras categorias */}
      <section className="bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="font-display text-2xl tracking-tight">Outras categorias</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {others.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/conteudos/$category"
                  params={{ category: c.slug }}
                  className="block border border-border p-5 hover:border-secondary"
                >
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Categoria</div>
                  <div className="mt-2 font-display text-lg">{c.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-16 flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Aplicar à sua empresa</div>
            <h2 className="mt-3 font-display text-2xl md:text-3xl tracking-tight max-w-2xl">
              Transforme o conteúdo em decisão técnica.
            </h2>
          </div>
          <Link to="/diagnostico" className="inline-flex items-center bg-gold px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-gold-foreground">
            Solicitar diagnóstico →
          </Link>
        </div>
      </section>
    </div>
  );
}