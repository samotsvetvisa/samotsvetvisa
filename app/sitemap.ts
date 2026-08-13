import type { MetadataRoute } from "next";
import { articles } from "./content/articles";
import { articlesEn } from "./content/articles-en";
import { countries } from "./content/countries";
import { SITE_URL } from "./site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/assessment", "/blog", "/contacts", "/legal", "/privacy", "/consent"];
  const russianPages = [
    ...staticPages,
    ...countries.map(({ slug }) => `/countries/${slug}`),
    ...articles.map(({ slug }) => `/blog/${slug}`),
  ];
  const pages = [
    ...russianPages,
    ...staticPages.map((path) => path === "" ? "/en" : `/en${path}`),
    ...countries.map(({ slug }) => `/en/countries/${slug}`),
    ...articlesEn.map(({ slug }) => `/en/blog/${slug}`),
  ];

  return pages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date("2026-08-13"),
    changeFrequency: path === "" || path === "/en" ? "weekly" : "monthly",
    priority: path === "" || path === "/en" ? 1 : /\/countries\//.test(path) ? 0.9 : 0.7,
  }));
}
