import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { OtherDestinations } from "../../../components/OtherDestinations";
import { countriesEn } from "../../../content/countries-en";
import { pageMetadata, SERVICE_MODEL_EN, SERVICE_PRICES, withTrailingSlash } from "../../../site";

export function generateStaticParams() { return countriesEn.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = countriesEn.find((country) => country.slug === slug);
  return item ? pageMetadata({ title: item.country, description: item.intro, path: `/en/countries/${item.slug}`, locale: "en" }) : {};
}

export default async function EnglishCountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = countriesEn.find((country) => country.slug === slug);
  if (!item) notFound();
  const price = SERVICE_PRICES.find((entry) => entry.code === item.code);
  const riskGroups = item.riskGroups ?? [{ title: "", risks: item.risks ?? [] }];

  return (
    <>
      <SiteHeader locale="en" />
      <main>
        <section className="country-hero section-shell">
          <div className="country-hero-code">{item.code}</div>
          <div><p className="eyebrow">{item.eyebrow}</p><h1>{item.title}</h1><p>{item.intro}</p>{item.slug === "uk" ? <p className="country-track-record"><strong>The United Kingdom has been a core practice focus since 2021.</strong></p> : null}{price ? <><p className="country-price"><span>Indicative fee: <strong>{price.priceEn}</strong></span><span>Timing: <strong>{price.timelineEn}</strong></span></p>{"noteEn" in price ? <p className="country-price-note">{price.noteEn}</p> : null}</> : null}<Link className="button button-primary" href={withTrailingSlash(`/en/assessment?country=${item.slug}`)}>Check this route</Link></div>
        </section>

        <section className="section-shell country-routes">
          <div className="inner-section-title"><p className="eyebrow">Routes</p><h2>{item.headings.routes}</h2></div>
          <div className="route-detail-grid">
            {item.routes.map((route, index) => <article key={route.name} id={`route-${route.anchor}`}><span>{String(index + 1).padStart(2, "0")}</span><h3>{route.name}</h3><p>{route.summary}</p><h4>{route.fitTitle}</h4><ul>{route.fit.map((point) => <li key={point}>{point}</li>)}</ul></article>)}
          </div>
          {item.slug === "uk" ? <Link className="text-link criteria-country-link" href="/en/global-talent-criteria/">Open the Global Talent criteria map <span aria-hidden="true">↗</span></Link> : null}
          {item.processing ? <div className="country-facts"><h2>{item.processing.title}</h2><table><thead><tr>{item.processing.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{item.processing.rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table>{item.processing.note ? <p>{item.processing.note}</p> : null}</div> : null}
          {item.important ? <div className="country-facts"><h2>{item.important.title}</h2>{item.important.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div> : null}
        </section>

        <section className="risk-band" id="risks">
          <div className="section-shell risk-grid"><div><p className="eyebrow eyebrow-light">Risks</p><h2>{item.headings.risks}</h2></div><div className="risk-groups">{riskGroups.map((group) => <section className="risk-group" key={group.title || "all-risks"}>{group.title ? <h3 className="risk-group-title">{group.title}</h3> : null}<ol>{group.risks.map((risk, index) => <li key={risk.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{risk.title}</h3><p>{risk.detail}</p></div></li>)}</ol></section>)}</div></div>
        </section>

        <section className="section-shell country-regulatory">
          <p className="eyebrow">Project team</p>
          <div><h2>{item.headings.team}</h2><p>{SERVICE_MODEL_EN}</p><Link className="text-link" href="/en/legal/">How the agency works <span aria-hidden="true">↗</span></Link></div>
        </section>

        <section className="section-shell sources-block">
          <div><p className="eyebrow">Primary sources</p><h2>{item.headings.sources}</h2><p>{item.headings.sourcesNote}</p><p className="source-reviewed"><time dateTime="2026-08-27">Reviewed against official sources on 27 August 2026</time></p></div>
          <div>{item.official.map((source) => <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>{source.label} <span>↗</span></a>)}</div>
        </section>

        <OtherDestinations currentSlug={item.slug} locale="en" />

        <section className="section-shell closing-cta country-cta">
          <div><p className="eyebrow eyebrow-light">Next step</p><h2>{item.headings.closing}</h2></div>
          <div><p>{item.headings.closingBody}</p><Link className="button button-gold" href={withTrailingSlash(`/en/assessment?country=${item.slug}`)}>Discuss your circumstances</Link></div>
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
