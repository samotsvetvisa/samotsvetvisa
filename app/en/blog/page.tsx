import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { formatArticleDate } from "../../content/article-date";
import { articlesEn } from "../../content/articles-en";
import { pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({ title: "Insights", description: "Analysis of immigration rules, policy changes and how they are applied.", path: "/en/blog", locale: "en" });

export default function EnglishBlogPage() {
  return (
    <><SiteHeader locale="en" /><main>
      <section className="inner-hero section-shell"><div><p className="eyebrow">Samotsvet insights</p><h1>Analysis of immigration rules and practice</h1></div><p>We check primary sources, analyse changes and explain how they affect preparation and filing.</p></section>
      <section className="section-shell blog-list">
        {articlesEn.map((article, index) => <article key={article.slug}><span>{String(index + 1).padStart(2, "0")}</span><div><p className="article-tag">{article.tag}</p><h2>{article.title}</h2><p>{article.description}</p></div><div className="blog-meta"><span><time dateTime={article.published}>{formatArticleDate(article.published, "en")}</time><br />{article.reading}</span><Link href={`/en/blog/${article.slug}`}>Read ↗</Link></div></article>)}
      </section>
    </main><SiteFooter locale="en" /></>
  );
}
