import type { AnyRouteMatch } from "@tanstack/react-router";

export const SITE_URL = "https://dcon.cnt.br";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

export interface SeoHeadOptions {
  title: string;
  description: string;
  /** Path beginning with "/" or absolute URL. Used for canonical and og:url. */
  canonical: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  noindex?: boolean;
}

export interface SeoHeadResult {
  meta: Array<Record<string, string>>;
  links: Array<Record<string, string>>;
}

function toAbsolute(url: string): string {
  if (/^https?:\/\//i.test(url)) return url;
  return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
}

/**
 * Build a standardized set of <head> meta/links for a route.
 * Use inside `head()` in each route file:
 *
 *   head: () => buildSeoHead({
 *     title: "...",
 *     description: "...",
 *     canonical: "/path",
 *   }),
 */
export function buildSeoHead(opts: SeoHeadOptions): SeoHeadResult {
  const { title, description, ogType = "website", noindex = false } = opts;
  const canonical = toAbsolute(opts.canonical);
  const ogImage = toAbsolute(opts.ogImage ?? DEFAULT_OG_IMAGE);

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: canonical },
    { property: "og:type", content: ogType },
    { property: "og:image", content: ogImage },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];

  if (noindex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  }

  const links: Array<Record<string, string>> = [
    { rel: "canonical", href: canonical },
  ];

  return { meta, links };
}

// Re-export type for convenience in consumers that need to spread results.
export type { AnyRouteMatch };