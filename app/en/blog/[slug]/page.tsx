/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { formatArticleDate } from "../../../content/article-date";
import { articlesEn } from "../../../content/articles-en";
import { pageMetadata, SITE_URL } from "../../../site";

export function generateStaticParams() { return articlesEn.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesEn.find((item) => item.slug === slug);
  return article ? pageMetadata({ title: article.title, description: article.description, path: `/en/blog/${article.slug}`, type: "article", locale: "en" }) : {};
}

export default async function EnglishArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesEn.find((item) => item.slug === slug);
  if (!article) notFound();
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, datePublished: article.published, dateModified: article.published, author: { "@type": "Person", name: article.author, url: `${SITE_URL}/en/about#nikita` }, publisher: { "@id": `${SITE_URL}/#organisation` }, mainEntityOfPage: `${SITE_URL}/en/blog/${article.slug}`, image: `${SITE_URL}/og-samotsvet.png` };

  return (
    <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /><SiteHeader locale="en" /><main>
      <article className="article-page section-shell">
        <header><p className="eyebrow">{article.tag}</p><h1>{article.title}</h1><div className="article-byline"><Link href="/en/about#nikita">{article.author}</Link><span aria-hidden="true"> · </span><span>{article.reading}</span><span aria-hidden="true"> · </span><time dateTime={article.published}>Published {formatArticleDate(article.published, "en")}</time></div><p className="article-lead">{article.lead}</p></header>
        <div className="article-body">
          {article.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}</section>)}
          <aside><p>Would an initial review help?</p><Link href={`/en/countries/${article.relatedCountry}`}>View route</Link><Link href="/en/assessment">Request a review</Link></aside>
          <section className="article-author" id="article-author" aria-label="About the author"><div className="article-author-photo"><img src="/nikita-founder-white-v3.webp" alt="Nikita Samotsvetov" width="180" height="220" /></div><div><p className="article-author-label">Author</p><h2><Link href="/en/about#nikita">Nikita Samotsvetov</Link></h2><p>Founder of Samotsvet. Nikita reviews the facts, plans evidence, checks sources and coordinates relocation projects.</p></div></section>
        </div>
      </article>
    </main><SiteFooter locale="en" /></>
  );
}
