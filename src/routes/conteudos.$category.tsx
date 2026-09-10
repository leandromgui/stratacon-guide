import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { CategoryHub } from "@/components/CategoryHub";
import { categories, getCategory, isArticleSlug } from "@/lib/conteudos-categories";

function parsePage(raw: unknown): number {
  const n = typeof raw === "string" ? parseInt(raw, 10) : typeof raw === "number" ? raw : NaN;
  return Number.isFinite(n) && n >= 1 ? Math.floor(n) : 1;
}

export const Route = createFileRoute("/conteudos/$category")({
  validateSearch: (search: Record<string, unknown>) => ({
    p: parsePage(search.p),
  }),
  beforeLoad: ({ params }) => {
    if (!getCategory(params.category)) throw notFound();
  },
  loader: ({ params, location }) => {
    const category = getCategory(params.category)!;
    const total = category.articles.length;
    const totalPages = Math.max(1, Math.ceil(total / 6));
    const current = Math.min(Math.max(1, parsePage((location.search as { p?: unknown }).p)), totalPages);

    const base = `/conteudos/${category.slug}`;
    return {
      category,
      current,
      totalPages,
      canonical: current === 1 ? base : `${base}?p=${current}`,
      prevUrl: current > 1 ? (current === 2 ? base : `${base}?p=${current - 1}`) : null,
      nextUrl: current < totalPages ? `${base}?p=${current + 1}` : null,
    };
  },
  head: ({ params, loaderData }) => {
    const c = loaderData?.category ?? getCategory(params.category);
    if (!c) return { meta: [{ title: "Categoria não encontrada | Insights DCON" }] };
    const base = `/conteudos/${c.slug}`;
    const pageUrl = loaderData?.canonical ?? base;
    const isPaginated = (loaderData?.current ?? 1) > 1;
    const robots = isPaginated ? "noindex, follow" : "index, follow";
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDescription },
        { name: "robots", content: robots },
        { name: "googlebot", content: robots },
        { property: "og:title", content: c.metaTitle },
        { property: "og:description", content: c.metaDescription },
        { property: "og:url", content: pageUrl },
        { property: "og:type", content: "website" },
      ],
      links: [
        { rel: "canonical", href: pageUrl },
        ...(loaderData?.prevUrl ? [{ rel: "prev", href: loaderData.prevUrl }] : []),
        ...(loaderData?.nextUrl ? [{ rel: "next", href: loaderData.nextUrl }] : []),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: "/" },
              { "@type": "ListItem", position: 2, name: "Insights", item: "/conteudos" },
              { "@type": "ListItem", position: 3, name: c.name, item: pageUrl },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: c.metaTitle,
            description: c.metaDescription,
            url: pageUrl,
            hasPart: c.articles.map((a) => ({
              "@type": "Article",
              headline: a.h2,
              url: a.to,
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-display text-3xl">Categoria não encontrada</h1>
      <p className="mt-4 text-muted-foreground">
        Veja as categorias disponíveis em <a href="/conteudos" className="underline">Insights</a>.
      </p>
      <ul className="mt-6 list-disc pl-6 text-sm">
        {categories.map((c) => (
          <li key={c.slug}>
            <a className="underline" href={`/conteudos/${c.slug}`}>{c.name}</a>
          </li>
        ))}
      </ul>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-display text-3xl">Algo deu errado ao carregar esta categoria</h1>
      <button onClick={reset} className="mt-6 border border-border px-4 py-2 text-[11px] uppercase tracking-[0.18em]">
        Tentar novamente
      </button>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const { p } = Route.useSearch();
  return <CategoryHub category={category} page={p} />;
}