import type { Metadata } from "next";
import Link from "next/link";
import { HeroVisual } from "../components/HeroVisual";
import { HashLink } from "../components/HashLink";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { ClientResults } from "../components/ClientResults";
import { FOUNDER_NAME, LEGAL_NAME, SERVICE_MODEL_EN, SERVICE_PRICES, SITE_URL, pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "Full-cycle immigration and relocation agency",
  description: "Strategy, profile development, evidence preparation, partners and filing support for specialists, founders and families.",
  path: "/en",
  locale: "en",
});

const countries = [
  { code: "UK", name: "United Kingdom", title: "Professional achievements or a start-up", routes: [{ label: "Global Talent", href: "/en/countries/uk/#route-global-talent" }, { label: "Innovator Founder", href: "/en/countries/uk/#route-innovator-founder" }], text: "Global Talent is built on evidenced professional achievements: references, projects, publications and results. For Innovator Founder, the business project and endorsing body approval are central.", href: "/en/countries/uk/", size: "seven" },
  { code: "ES", name: "Spain", title: "Remote work from Spain", routes: [{ label: "Digital Nomad Visa (DNV)", href: "/en/countries/spain/#route-digital-nomad-visa" }], text: "Different contract, experience and income evidence requirements apply to employees of overseas companies and to sole traders or contractors.", href: "/en/countries/spain/", size: "five" },
  { code: "US", name: "United States", title: "Career, business or investment", routes: [{ label: "EB-1A", href: "/en/countries/usa/#route-eb-1a" }, { label: "EB-2 NIW", href: "/en/countries/usa/#route-eb-2-niw" }, { label: "O-1", href: "/en/countries/usa/#route-o-1" }, { label: "E-2", href: "/en/countries/usa/#route-e-2" }], text: "The four routes serve different purposes, from work and professional standing to permanent residence and relocation through business.", href: "/en/countries/usa/", size: "eight" },
  { code: "FR", name: "France", title: "An innovative project or your own business", routes: [{ label: "French Tech Visa", href: "/en/countries/france/#route-french-tech-visa" }, { label: "Talent – porteur de projet", href: "/en/countries/france/#route-talent-business" }], text: "An innovative route depends on the project and its validation within the French ecosystem. The entrepreneurial route centres on the business plan, funding and the applicant's experience.", href: "/en/countries/france/", size: "four" },
];

const articles = [
  { tag: "United Kingdom · 2026 changes", title: "HC 1691: why the filing date determines which rules apply", text: "A timetable from the design pathway to the B2 requirement for settlement.", href: "/en/blog/uk-hc-1691-dates/" },
  { tag: "Spain · Digital Nomad Visa", title: "The 2026 income threshold and family calculation", text: "The corrected 200%, 75% and 25% calculation following the increase in Spain's SMI.", href: "/en/blog/spain-dnv-income-2026/" },
  { tag: "United States · EB-2 NIW", title: "EB-2 NIW requires its own evidential rationale", text: "Why the proposed work, national importance and readiness to deliver it must be established separately.", href: "/en/blog/eb2-niw-not-simple-alternative/" },
];

export default function EnglishHome() {
  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#professional-service`,
    name: "Samotsvet",
    legalName: LEGAL_NAME,
    url: `${SITE_URL}/en`,
    logo: `${SITE_URL}/samotsvet-logo.svg`,
    founder: { "@type": "Person", name: FOUNDER_NAME, url: `${SITE_URL}/en/about#nikita` },
    areaServed: ["United Kingdom", "Spain", "United States", "France"],
    serviceType: "Full-cycle immigration and visa case preparation",
    priceRange: "Scope and final price are agreed in writing before paid work begins",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }} />
      <SiteHeader locale="en" />
      <main>
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">A full-cycle immigration and relocation agency</p>
            <h1>The visa process starts a year before the application</h1>
            <p className="hero-lede">We lead the entire project: route selection, evidence preparation and filing co-ordination. If the profile is not ready, we plan its development in advance.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/en/assessment/">Get a profile assessment</Link>
              <HashLink className="button button-secondary" href="#directions">Choose a destination</HashLink>
            </div>
            <p className="hero-response">We reply within 24 hours</p>
            <p className="hero-note">10,000+ profiles reviewed · 800+ completed matters</p>
          </div>
          <HeroVisual locale="en" />
        </section>

        <section className="principle-band">
          <div className="section-shell principle-grid">
            <p className="eyebrow eyebrow-light">Depth of preparation</p>
            <h2>A complex route requires time, a strong team and a clear sequence</h2>
            <p>Complex cases are built in stages: first we select the route and map the criteria, then close gaps, prepare evidence and assemble the final filing. Where the profile needs development, preparation may begin 6–12 months before filing; filing and decision times then depend on the country and route.</p>
          </div>
        </section>

        <section className="section-shell section-block" id="directions">
          <div className="section-heading">
            <div><p className="eyebrow">Destinations</p><h2>Four countries and nine routes</h2></div>
            <p>Each country has its own immigration programmes and assessment criteria. We review the client&apos;s circumstances, compare the available options and assess the prospects of each suitable route.</p>
          </div>
          <div className="country-grid">
            {countries.map((country) => (
              <article className={`country-card country-card--${country.size}`} key={country.code}>
                <div className="country-card-top"><span className="country-code">{country.code}</span><span className="country-name">{country.name}</span></div>
                <h3>{country.title}</h3>
                <div className="route-list">{country.routes.map((route) => <Link key={route.href} href={route.href}>{route.label}</Link>)}</div>
                <p>{country.text}</p>
                <Link href={country.href}>View route <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-block process-section" id="process">
          <div className="section-heading compact-heading"><div><p className="eyebrow">Process</p><h2>Several distinct pieces of work sit between an idea and a filing</h2></div></div>
          <p className="process-fact">Seven stages connect the starting position, the evidence and the filing in one verifiable bundle.</p>
          <ol className="process-list">
            <li><span>01</span><div><h3>Starting profile analysis</h3><p>We examine three things: every nationality, facts supported by documents and the date by which an outcome is needed.</p></div></li>
            <li><span>02</span><div><h3>Route comparison</h3><p>We compare the outcome, the time to reach it and the principal restrictions. Global Talent may lead to ILR after 3 or 5 years, while O-1 remains a temporary work category.</p></div></li>
            <li><span>03</span><div><h3>Criteria and gap map</h3><p>For each criterion, we record what is proved, which support is weak and which fact is still missing.</p></div></li>
            <li><span>04</span><div><h3>Profile development</h3><p>We plan genuine projects, public work and independent recognition. Each step has a measurable outcome; the full stage usually takes 6–12 months.</p></div></li>
            <li><span>05</span><div><h3>Evidence preparation</h3><p>We check that dates, figures and roles agree across references, employment records and publications. Discrepancies are resolved before the final bundle is assembled.</p></div></li>
            <li><span>06</span><div><h3>Application rationale</h3><p>We connect each requirement to a specific fact and document. Weak points that cannot be solved by adding volume are addressed separately.</p></div></li>
            <li><span>07</span><div><h3>Final review, forms and filing</h3><p>We check the bundle, agree forms with specialist partners and manage the filing process through to the decision.</p></div></li>
          </ol>
        </section>

        <ClientResults locale="en" />

        <section className="section-shell development-product">
          <div><p className="eyebrow">Profile development</p><h2>A 6–12 month preparation plan</h2></div>
          <div><p>The audit identifies which evidence is missing. We then plan projects, publications and speaking; metrics, references and review points are recorded separately.</p><Link className="text-link" href="/en/profile-development/">How the programme works <span aria-hidden="true">↗</span></Link></div>
        </section>

        <section className="regulatory-band" id="scope">
          <div className="section-shell regulatory-grid">
            <div><p className="eyebrow eyebrow-light">Full-cycle agency</p><h2>One team leads the journey from strategy to filing</h2></div>
            <div className="scope-list"><article><span>One working model</span><p>{SERVICE_MODEL_EN}</p></article></div>
          </div>
        </section>

        <section className="editorial-section">
          <div className="section-shell section-block">
            <div className="section-heading"><div><p className="eyebrow">Insights</p><h2>Analysis of rule changes and how they are applied</h2></div><Link className="text-link" href="/en/blog/">All articles <span aria-hidden="true">↗</span></Link></div>
            <div className="article-grid">
              {articles.map((article) => <article className="article-card" key={article.href}><p className="article-tag">{article.tag}</p><h3>{article.title}</h3><p>{article.text}</p><Link href={article.href}>Read <span aria-hidden="true">→</span></Link></article>)}
            </div>
          </div>
        </section>

        <section className="section-shell pricing-strip" id="pricing">
          <div><p className="eyebrow">Fees and timing</p><h2>The scope determines the budget and timetable</h2></div>
          <div><p>An urgent filing with a developed profile may take several weeks. A full-cycle complex programme, particularly in the United States, can take up to two years while we create results, assemble evidence and co-ordinate contributors. Following the initial review, we set out the stages, indicative timing and fee.</p><Link className="text-link" href="/en/legal/">How the agency works <span aria-hidden="true">↗</span></Link></div>
          <div className="price-grid" aria-label="Indicative fees">
            {SERVICE_PRICES.map((item) => <div className="price-item" key={item.code}><span>{item.countryEn}</span><strong>{item.priceEn}</strong><small>Timing: {item.timelineEn}</small>{"noteEn" in item ? <small>{item.noteEn}</small> : null}</div>)}
          </div>
        </section>

        <section className="section-shell closing-cta">
          <div><p className="eyebrow eyebrow-light">First step</p><h2>A profile assessment will define the route, scope of preparation and next steps</h2></div>
          <div><p>Complete the short form. Within 24 hours, we will say which route is worth testing, what is already evidenced and what is still missing.</p><Link className="button button-gold" href="/en/assessment/">Get a profile assessment</Link></div>
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
