/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConsultationLink } from "../../../components/ConsultationLink";
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
  const isEditorial = article.author === "Samotsvet editorial team";
  const consultationCountry = ({ uk: "uk", usa: "usa", spain: "spain", france: "france" } as const)[article.relatedCountry];
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, datePublished: article.published, dateModified: article.published, author: isEditorial ? { "@type": "Organization", name: "Samotsvet", url: SITE_URL } : { "@type": "Person", name: article.author, url: `${SITE_URL}/en/about#nikita` }, publisher: { "@id": `${SITE_URL}/#organisation` }, mainEntityOfPage: `${SITE_URL}/en/blog/${article.slug}`, image: `${SITE_URL}/og-samotsvet.png` };

  return (
    <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /><SiteHeader locale="en" /><main>
      <article className="article-page section-shell">
        <header><p className="eyebrow">{article.tag}</p><h1>{article.title}</h1><div className="article-byline">{isEditorial ? <span>{article.author}</span> : <Link href="/en/about/#nikita">{article.author}</Link>}<span aria-hidden="true"> · </span><span>{article.reading}</span><span aria-hidden="true"> · </span><time dateTime={article.published}>Published {formatArticleDate(article.published, "en")}</time></div><p className="article-lead">{article.lead}</p></header>
        <div className="article-body">
          {article.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}</section>)}
          {article.sources && article.sources.length > 0 && (
            <section className="article-sources" aria-labelledby="article-sources-title">
              <p className="eyebrow">Primary sources</p>
              <h2 id="article-sources-title">Official documents for “{article.title}”</h2>
              <p>Check the publication date, the legal status of the document and the version in force on the relevant filing date.</p>
              <div>{article.sources.map((source) => <a href={source.href} key={source.href} target="_blank" rel="noreferrer">{source.label}<span aria-hidden="true">↗</span></a>)}</div>
            </section>
          )}
          <aside><p>Let us discuss how this applies to your circumstances</p><Link href={`/en/countries/${article.relatedCountry}/`}>View route</Link><ConsultationLink locale="en" country={consultationCountry} program={article.slug} location="article_end">Free consultation</ConsultationLink></aside>
          {isEditorial ? <section className="article-author article-author-editorial" id="article-author" aria-label="About the editorial team"><div><p className="article-author-label">Editorial team</p><h2>Samotsvet</h2><p>This article was prepared by the Samotsvet editorial team from official sources. We separate rules in force from proposals and explain how a change affects the route and timetable.</p></div></section> : <section className="article-author" id="article-author" aria-label="About the author"><div className="article-author-photo"><img src="/nikita-founder-white-v3.webp" alt="Nikita Samotsvetov" width="180" height="220" /></div><div><p className="article-author-label">Author</p><h2><Link href="/en/about/#nikita">Nikita Samotsvetov</Link></h2><p>Nikita Samotsvetov is the founder of Samotsvet. He is responsible for strategy and quality control in case preparation.</p></div></section>}
        </div>
      </article>
    </main><SiteFooter locale="en" /></>
  );
}
