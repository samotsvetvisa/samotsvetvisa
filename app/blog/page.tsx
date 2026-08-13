import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { formatArticleDate } from "../content/article-date";
import { articles } from "../content/articles";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "Блог",
  description: "Аналитика иммиграционных правил, изменений и практики их применения от Samotsvet.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="inner-hero section-shell">
          <div><p className="eyebrow">Блог Samotsvet</p><h1>Аналитика иммиграционных правил и практики</h1></div>
          <p>Проверяем официальные источники, анализируем изменения и объясняем их влияние на подготовку и подачу.</p>
        </section>
        <section className="section-shell blog-list">
          {articles.map((article, index) => (
            <article key={article.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><p className="article-tag">{article.tag}</p><h2>{article.title}</h2><p>{article.description}</p></div>
              <div className="blog-meta"><span><time dateTime={article.published}>{formatArticleDate(article.published)}</time><br />{article.reading}</span><Link href={`/blog/${article.slug}`}>Читать ↗</Link></div>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
