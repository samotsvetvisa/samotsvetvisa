import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { countriesEn } from "../../../content/countries-en";
import { pageMetadata, SERVICE_PRICES } from "../../../site";

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

  return (
    <>
      <SiteHeader locale="en" />
      <main>
        <section className="country-hero section-shell">
          <div className="country-hero-code">{item.code}</div>
          <div><p className="eyebrow">{item.eyebrow}</p><h1>{item.title}</h1><p>{item.intro}</p>{price ? <p className="country-price"><span>Indicative fee: <strong>{price.priceEn}</strong></span><span>Timing: <strong>{price.timelineEn}</strong></span></p> : null}<Link className="button button-primary" href={`/en/assessment?country=${item.slug}`}>Get a profile assessment</Link></div>
        </section>

        <section className="section-shell country-routes">
          <div className="inner-section-title"><p className="eyebrow">Routes</p><h2>Options we consider</h2></div>
          <div className="route-detail-grid">
            {item.routes.map((route, index) => <article key={route.name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{route.name}</h3><p>{route.summary}</p><h4>What the preparation depends on</h4><ul>{route.fit.map((point) => <li key={point}>{point}</li>)}</ul></article>)}
          </div>
        </section>

        <section className="risk-band" id="risks">
          <div className="section-shell risk-grid"><div><p className="eyebrow eyebrow-light">Risks</p><h2>What can weaken an otherwise promising application</h2></div><ol>{item.risks.map((risk, index) => <li key={risk.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{risk.title}</h3><p>{risk.detail}</p></div></li>)}</ol></div>
        </section>

        <section className="section-shell country-regulatory">
          <p className="eyebrow">Project team</p>
          <div><h2>How we deliver the work end to end</h2><p>{item.regulatory}</p><Link className="text-link" href="/en/legal">How the agency works <span aria-hidden="true">↗</span></Link></div>
        </section>

        <section className="section-shell sources-block">
          <div><p className="eyebrow">Primary sources</p><h2>Check the current rules on official websites</h2></div>
          <div>{item.official.map((source) => <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>{source.label} <span>↗</span></a>)}<p>Content checked against the official sources on 12 August 2026. Requirements may change.</p></div>
        </section>

        <section className="section-shell closing-cta country-cta">
          <div><p className="eyebrow eyebrow-light">Next step</p><h2>Review the route, profile and evidence as one project</h2></div>
          <div><p>We will establish the goal, review the starting position and set out an evidence preparation plan.</p><Link className="button button-gold" href={`/en/assessment?country=${item.slug}`}>Get a profile assessment</Link></div>
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
