import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { OtherDestinations } from "../../components/OtherDestinations";
import { countries } from "../../content/countries";
import { countryFaqs } from "../../content/country-faqs";
import { pageMetadata, SERVICE_MODEL_RU, SERVICE_PRICES, withTrailingSlash } from "../../site";

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
  const riskGroups = item.riskGroups ?? [{ title: "", risks: item.risks ?? [] }];
  const faqs = countryFaqs[item.slug as keyof typeof countryFaqs] ?? [];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />
      <main>
        <section className="country-hero section-shell">
          <div className="country-hero-code">{item.code}</div>
          <div>
            <p className="eyebrow">{item.eyebrow}</p>
            <h1>{item.title}</h1>
            <p>{item.intro}</p>
            {item.slug === "uk" ? <p className="country-track-record"><strong>Британское направление входит в основной фокус практики с 2021 года.</strong></p> : null}
            {price ? <><p className="country-price"><span>Ориентировочная стоимость: <strong>{price.price}</strong></span><span>Срок работы: <strong>{price.timelineRu}</strong></span></p>{"noteRu" in price ? <p className="country-price-note">{price.noteRu}</p> : null}</> : null}
            <Link className="button button-primary" href={withTrailingSlash(`/assessment?country=${item.slug}`)}>Проверить этот маршрут</Link>
          </div>
          {item.slug === "uk" ? <Link className="text-link criteria-country-link" href="/global-talent-criteria/">Открыть карту критериев Global Talent <span aria-hidden="true">↗</span></Link> : null}
        </section>

        <section className="section-shell country-routes">
          <div className="inner-section-title"><p className="eyebrow">Маршруты</p><h2>{item.headings.routes}</h2></div>
          <div className="route-detail-grid">
            {item.routes.map((route, index) => (
              <article key={route.name} id={`route-${route.anchor}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{route.name}</h3>
                <p>{route.summary}</p>
                <h4>{route.fitTitle}</h4>
                <ul>{route.fit.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
          {item.processing ? <div className="country-facts"><h2>{item.processing.title}</h2><table><thead><tr>{item.processing.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{item.processing.rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table>{item.processing.note ? <p>{item.processing.note}</p> : null}</div> : null}
          {item.important ? <div className="country-facts"><h2>{item.important.title}</h2>{item.important.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div> : null}
        </section>

        <section className="risk-band" id="risks">
          <div className="section-shell risk-grid">
            <div><p className="eyebrow eyebrow-light">Риски</p><h2>{item.headings.risks}</h2></div>
            <div className="risk-groups">{riskGroups.map((group) => <section className="risk-group" key={group.title || "all-risks"}>{group.title ? <h3 className="risk-group-title">{group.title}</h3> : null}<ol>{group.risks.map((risk, index) => <li key={risk.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{risk.title}</h3><p>{risk.detail}</p></div></li>)}</ol></section>)}</div>
          </div>
        </section>

        <section className="section-shell country-regulatory">
          <p className="eyebrow">Команда проекта</p>
          <div>
            <h2>{item.headings.team}</h2>
            <p>{SERVICE_MODEL_RU}</p>
            <Link className="text-link" href="/legal/">Как устроена работа агентства <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="section-shell sources-block">
          <div><p className="eyebrow">Первоисточники</p><h2>{item.headings.sources}</h2><p>{item.headings.sourcesNote}</p><p className="source-reviewed"><time dateTime="2026-08-27">Сверено по официальным источникам 27 августа 2026 года</time></p></div>
          <div>
            {item.official.map((source) => <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>{source.label} <span>↗</span></a>)}
          </div>
        </section>

        <section className="section-shell section-block country-faq"><div className="inner-section-title"><p className="eyebrow">Вопросы по направлению</p><h2>Что обычно уточняют до выбора маршрута</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

        <OtherDestinations currentSlug={item.slug} />

        <section className="section-shell closing-cta country-cta">
          <div><p className="eyebrow eyebrow-light">Следующий шаг</p><h2>{item.headings.closing}</h2></div>
          <div><p>{item.headings.closingBody}</p><Link className="button button-gold" href={withTrailingSlash(`/assessment?country=${item.slug}`)}>Обсудить свою ситуацию</Link></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
