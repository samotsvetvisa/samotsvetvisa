import type { MetadataRoute } from "next";
import { articles } from "./content/articles";
import { articlesEn } from "./content/articles-en";
import { countries } from "./content/countries";
import { SITE_URL, withTrailingSlash } from "./site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/assessment", "/compare", "/services", "/global-talent-criteria", "/profile-development", "/blog", "/contacts", "/legal", "/privacy", "/consent"];
  const staticEntries = [
    ...staticPages.map((path) => ({ path, modified: "2026-08-27" })),
    ...staticPages.map((path) => ({ path: path === "" ? "/en" : `/en${path}`, modified: "2026-08-27" })),
  ];
  const countryEntries = [
    ...countries.map(({ slug }) => ({ path: `/countries/${slug}`, modified: "2026-08-19" })),
    ...countries.map(({ slug }) => ({ path: `/en/countries/${slug}`, modified: "2026-08-19" })),
  ];
  const articleEntries = [
    ...articles.map(({ slug, published }) => ({ path: `/blog/${slug}`, modified: published })),
    ...articlesEn.map(({ slug, published }) => ({ path: `/en/blog/${slug}`, modified: published })),
  ];

  return [...staticEntries, ...countryEntries, ...articleEntries].map(({ path, modified }) => ({
    url: `${SITE_URL}${withTrailingSlash(path || "/")}`,
    lastModified: new Date(modified),
    changeFrequency: path === "" || path === "/en" ? "weekly" : "monthly",
    priority: path === "" || path === "/en" ? 1 : /\/countries\//.test(path) ? 0.9 : 0.7,
  }));
}
