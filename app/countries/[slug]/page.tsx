import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { countries } from "../../content/countries";
import { pageMetadata, SERVICE_PRICES } from "../../site";

export function generateStaticParams() {
  return countries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = countries.find((country) => country.slug === slug);
  return item ? pageMetadata({
    title: item.country,
    description: item.intro,
    path: `/countries/${item.slug}`,
  }) : {};
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = countries.find((country) => country.slug === slug);
  if (!item) notFound();
  const price = SERVICE_PRICES.find((entry) => entry.code === item.code);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="country-hero section-shell">
          <div className="country-hero-code">{item.code}</div>
          <div>
            <p className="eyebrow">{item.eyebrow}</p>
            <h1>{item.title}</h1>
            <p>{item.intro}</p>
            {item.slug === "uk" ? <p className="country-track-record"><strong>Более 200 британских кейсов с 2021 года.</strong></p> : null}
            {price ? <p className="country-price"><span>Ориентировочная стоимость: <strong>{price.price}</strong></span><span>Срок работы: <strong>{price.timelineRu}</strong></span></p> : null}
            <Link className="button button-primary" href={`/assessment?country=${item.slug}`}>Получить аудит профиля</Link>
          </div>
        </section>

        <section className="section-shell country-routes">
          <div className="inner-section-title"><p className="eyebrow">Маршруты</p><h2>Какие варианты рассматриваем</h2></div>
          <div className="route-detail-grid">
            {item.routes.map((route, index) => (
              <article key={route.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{route.name}</h3>
                <p>{route.summary}</p>
                <h4>На чем строится подготовка</h4>
                <ul>{route.fit.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="risk-band" id="risks">
          <div className="section-shell risk-grid">
            <div><p className="eyebrow eyebrow-light">Риски</p><h2>Что ослабляет даже перспективную заявку</h2></div>
            <ol>{item.risks.map((risk, index) => <li key={risk.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{risk.title}</h3><p>{risk.detail}</p></div></li>)}</ol>
          </div>
        </section>

        <section className="section-shell country-regulatory">
          <p className="eyebrow">Команда проекта</p>
          <div>
            <h2>Как мы ведем работу под ключ</h2>
            <p>{item.regulatory}</p>
            <Link className="text-link" href="/legal">Как устроена работа агентства <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="section-shell sources-block">
          <div><p className="eyebrow">Первоисточники</p><h2>Проверяйте правила на официальных сайтах</h2></div>
          <div>
            {item.official.map((source) => <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>{source.label} <span>↗</span></a>)}
            <p>Формулировки на странице сверены с официальными источниками 12 августа 2026 года. Требования могут меняться.</p>
          </div>
        </section>

        <section className="section-shell closing-cta country-cta">
          <div><p className="eyebrow eyebrow-light">Следующий шаг</p><h2>Разберем маршрут, профиль и доказательства как единую задачу</h2></div>
          <div><p>Зафиксируем цель, проанализируем исходные данные и составим план подготовки доказательств.</p><Link className="button button-gold" href={`/assessment?country=${item.slug}`}>Получить аудит профиля</Link></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
