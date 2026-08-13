import type { Metadata } from "next";
import Link from "next/link";
import { HeroVisual } from "../components/HeroVisual";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { ClientResults } from "../components/ClientResults";
import { FOUNDER_NAME, LEGAL_NAME, SERVICE_PRICES, SITE_URL, pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "Full-cycle immigration and relocation agency",
  description: "Strategy, profile development, evidence preparation, partners and filing support for specialists, founders and families.",
  path: "/en",
  locale: "en",
});

const countries = [
  { code: "UK", name: "United Kingdom", title: "Professional achievements or business", routes: ["Global Talent", "Innovator Founder"], text: "Global Talent is built on evidenced professional achievements: references, projects, publications and results. For Innovator Founder, the business project and endorsing body approval are central.", href: "/en/countries/uk", size: "seven" },
  { code: "ES", name: "Spain", title: "Remote work from Spain", routes: ["Digital Nomad Visa (DNV)"], text: "The working arrangement matters: an employee of an overseas company and a self-employed professional evidence their eligibility in different ways.", href: "/en/countries/spain", size: "five" },
  { code: "US", name: "United States", title: "Career, business or investment", routes: ["EB-1A", "EB-2 NIW", "O-1", "E-2"], text: "The four routes serve different purposes, from work and professional standing to permanent residence and relocation through business.", href: "/en/countries/usa", size: "eight" },
  { code: "FR", name: "France", title: "An innovative project or your own business", routes: ["French Tech Visa", "Passeport Talent"], text: "An innovative route depends on the project and its validation within the French ecosystem. The entrepreneurial route centres on the business plan, funding and the applicant's experience.", href: "/en/countries/france", size: "four" },
];

const articles = [
  { tag: "United Kingdom · Global Talent", title: "How a strong professional record becomes a convincing application", text: "Why achievements need a clear evidential structure and a precise account of the applicant's role.", href: "/en/blog/strong-profile-vs-strong-case" },
  { tag: "United States · Route comparison", title: "EB-1A, EB-2 NIW or O-1: how to compare the routes", text: "A comparison by intended status, timing, evidence and the structure of future work.", href: "/en/blog/usa-route-comparison" },
  { tag: "Spain · Remote work", title: "What to check before applying for Spain's international remote work visa", text: "Working arrangements, contracts, income, social security and family documents — before translation and apostille.", href: "/en/blog/spain-digital-nomad-precheck" },
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
            <p className="hero-lede">We lead the entire project: route selection, profile development, evidence preparation, partner co-ordination and filing support.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/en/assessment">Get a profile assessment</Link>
              <Link className="button button-secondary" href="#directions">Choose a destination</Link>
            </div>
            <p className="hero-note">10,000+ profiles reviewed · 800+ successful matters</p>
          </div>
          <HeroVisual locale="en" />
        </section>

        <section className="principle-band">
          <div className="section-shell principle-grid">
            <p className="eyebrow eyebrow-light">Depth of preparation</p>
            <h2>A complex route requires time, a strong team and a clear sequence</h2>
            <p>We establish the starting point, build a development plan, create new professional results, assemble the evidence and manage the project through to filing.</p>
          </div>
        </section>

        <section className="section-shell section-block" id="directions">
          <div className="section-heading">
            <div><p className="eyebrow">Destinations</p><h2>Four countries and several fundamentally different routes</h2></div>
            <p>Every matter begins with an evidence-based view of the available routes, the gaps and the work required to strengthen the record.</p>
          </div>
          <div className="country-grid">
            {countries.map((country) => (
              <article className={`country-card country-card--${country.size}`} key={country.code}>
                <div className="country-card-top"><span className="country-code">{country.code}</span><span className="country-name">{country.name}</span></div>
                <h3>{country.title}</h3>
                <div className="route-list">{country.routes.map((route) => <span key={route}>{route}</span>)}</div>
                <p>{country.text}</p>
                <Link href={country.href}>View route <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-block process-section" id="process">
          <div className="section-heading compact-heading"><div><p className="eyebrow">Process</p><h2>Several distinct pieces of work sit between an idea and a filing</h2></div></div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Starting profile analysis</h3><p>We establish the objective, nationality, career, business, family position, timing, previous applications and constraints.</p></div></li>
            <li><span>02</span><div><h3>Route comparison</h3><p>We compare requirements, intended status, timing, cost, filing structure and risk.</p></div></li>
            <li><span>03</span><div><h3>Criteria and gap map</h3><p>Each criterion is tested against the available evidence to identify missing facts and weak support.</p></div></li>
            <li><span>04</span><div><h3>Profile development</h3><p>If the matter is not ready, we plan genuine projects, roles, publications, speaking, metrics, references and independent recognition. This stage may take months.</p></div></li>
            <li><span>05</span><div><h3>Evidence preparation</h3><p>We verify sources, collect documents, reconcile figures, roles and dates, prepare referees and resolve contradictions.</p></div></li>
            <li><span>06</span><div><h3>Application rationale</h3><p>We build the argument from the evidence and show how the facts and documents satisfy the requirements of the selected route.</p></div></li>
            <li><span>07</span><div><h3>Final review and filing</h3><p>We check the complete application, prepare the forms and manage the filing process through to the decision.</p></div></li>
          </ol>
        </section>

        <ClientResults locale="en" />

        <section className="regulatory-band" id="scope">
          <div className="section-shell regulatory-grid">
            <div><p className="eyebrow eyebrow-light">Full-cycle agency</p><h2>One team leads the journey from strategy to filing</h2></div>
            <div className="scope-list">
              <article><span>Samotsvet expertise</span><p>Strategy, profile development, evidence preparation, application architecture and project management.</p></article>
              <article><span>Partners and contractors</span><p>Attorneys, translators, public-profile specialists and business advisers join the team as the matter requires.</p></article>
              <article><span>One project lead</span><p>You have one plan, one timetable and a Samotsvet-led team throughout the project.</p></article>
            </div>
          </div>
        </section>

        <section className="editorial-section">
          <div className="section-shell section-block">
            <div className="section-heading"><div><p className="eyebrow">Insights</p><h2>Analysis of rule changes and how they are applied</h2></div><Link className="text-link" href="/en/blog">All articles <span aria-hidden="true">↗</span></Link></div>
            <div className="article-grid">
              {articles.map((article) => <article className="article-card" key={article.href}><p className="article-tag">{article.tag}</p><h3>{article.title}</h3><p>{article.text}</p><Link href={article.href}>Read <span aria-hidden="true">→</span></Link></article>)}
            </div>
          </div>
        </section>

        <section className="section-shell pricing-strip" id="pricing">
          <div><p className="eyebrow">Fees and timing</p><h2>The scope determines the budget and timetable</h2></div>
          <div><p>An urgent filing with a developed profile may take several weeks. A full-cycle complex programme, particularly in the United States, can take up to two years while we strengthen the profile, create new results, assemble the evidence and co-ordinate every contributor. Following the initial review, we set out the stages, indicative timing and fee.</p><Link className="text-link" href="/en/legal">How the agency works <span aria-hidden="true">↗</span></Link></div>
          <div className="price-grid" aria-label="Indicative fees">
            {SERVICE_PRICES.map((item) => <div className="price-item" key={item.code}><span>{item.countryEn}</span><strong>{item.priceEn}</strong><small>Timing: {item.timelineEn}</small></div>)}
          </div>
        </section>

        <section className="section-shell closing-cta">
          <div><p className="eyebrow eyebrow-light">First step</p><h2>A profile assessment will define the route, scope of preparation and next steps</h2></div>
          <div><p>Answer a small number of questions. We will review the starting position, identify the stronger parts of the record and propose a preparation plan.</p><Link className="button button-gold" href="/en/assessment">Get a profile assessment</Link></div>
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
