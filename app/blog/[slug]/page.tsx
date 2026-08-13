/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { formatArticleDate } from "../../content/article-date";
import { articles } from "../../content/articles";
import { articlesEn } from "../../content/articles-en";
import { pageMetadata, SITE_URL } from "../../site";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return article ? pageMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${article.slug}`,
    type: "article",
    hasAlternate: articlesEn.some((item) => item.slug === article.slug),
  }) : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    dateModified: article.verified ? "2026-08-12" : article.published,
    author: { "@type": "Person", name: article.author, url: `${SITE_URL}/about#nikita` },
    publisher: { "@id": `${SITE_URL}/#organisation` },
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
    image: `${SITE_URL}/og-samotsvet.png`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SiteHeader />
      <main>
        <article className="article-page section-shell">
          <header>
            <p className="eyebrow">{article.tag}</p>
            <h1>{article.title}</h1>
            <div className="article-byline"><Link href="/about/#nikita">{article.author}</Link><span aria-hidden="true">{" · "}</span><span>{article.reading}</span><span aria-hidden="true">{" · "}</span><time dateTime={article.published}>Опубликовано {formatArticleDate(article.published)}</time></div>
            <p className="article-lead">{article.lead}</p>
          </header>
          <div className="article-body">
            {article.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
              </section>
            ))}
            {article.sources && article.sources.length > 0 && (
              <section className="article-sources" aria-labelledby="article-sources-title">
                <p className="eyebrow">Первоисточники</p>
                <h2 id="article-sources-title">Проверить самостоятельно</h2>
                <div>
                  {article.sources.map((source) => <a href={source.href} key={source.href} target="_blank" rel="noreferrer">{source.label}<span aria-hidden="true">↗</span></a>)}
                </div>
                <p>Формулировки сверены {article.verified}. Требования меняются: перед подачей проверяйте действующую редакцию и обстоятельства конкретного дела.</p>
              </section>
            )}
            <aside>
              <p>Нужен аудит профиля?</p>
              <Link href={`/countries/${article.relatedCountry}/`}>Посмотреть маршрут</Link>
              <Link href="/assessment/">Получить аудит профиля</Link>
            </aside>
            <section className="article-author" id="article-author" aria-label="Об авторе">
              <div className="article-author-photo"><img src="/nikita-founder-white-v3.webp" alt="Никита Самоцветов" width="180" height="220" /></div>
              <div>
                <p className="article-author-label">Автор</p>
                <h2><Link href="/about/#nikita">Никита Самоцветов</Link></h2>
                <p>Основатель Samotsvet. Никита отвечает за методологию, проверку источников и ведение подготовки иммиграционных и визовых кейсов.</p>
              </div>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
