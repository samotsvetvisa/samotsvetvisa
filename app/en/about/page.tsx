/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Nikita Samotsvetov, founder of Samotsvet, and our approach to evidence preparation for immigration and visa matters.",
  path: "/en/about",
  locale: "en",
});

export default function EnglishAboutPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main>
        <section className="inner-hero section-shell about-hero">
          <div><p className="eyebrow">About Samotsvet</p><h1>We look beyond a list of visa categories</h1></div>
          <p>Samotsvet is our founder&apos;s surname and the name of the practice. We consider the objective, career, business and family circumstances together, then turn the facts into a clear and verifiable body of evidence.</p>
        </section>

        <section className="section-shell founder-profile" id="nikita">
          <div className="founder-photo"><img src="/nikita-founder-white-v3.webp" alt="Nikita Samotsvetov, founder of Samotsvet" width="1149" height="1368" /></div>
          <div className="founder-copy">
            <p className="eyebrow">Founder</p>
            <h2>Nikita Samotsvetov</h2>
            <p className="founder-role">Founder of Samotsvet. Nikita personally leads the preparation of immigration and visa matters.</p>
            <p>Since 2021, we have assessed <strong>more than 10,000 professional profiles</strong> and successfully completed more than 800 client matters, including over 200 in the UK.</p>
            <p>Before founding Samotsvet, Nikita worked inside an immigration agency with specialists, founders and families. His work covers the initial fact review, evidence planning, source verification, consistency between documents and coordination of the preparation process.</p>
            <p>Nikita holds an <strong>LLM in International Law and Global Governance</strong> from the University of Leeds. His academic specialism in international law complements his practical experience with immigration and visa matters.</p>
            <p>Current areas of focus include Global Talent and Innovator Founder in the UK; O-1, EB-1A, EB-2 NIW and E-2 in the US; Spain&apos;s Digital Nomad Visa (DNV); and French Tech Visa and other Passeport Talent routes in France.</p>
            <Link className="text-link" href="/en/legal">How the agency works <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="section-shell values-grid facts-grid">
          <article><span>01</span><h2>10,000+ profiles reviewed</h2><p>Specialists, entrepreneurs, their families and businesses across the UK, US, Spain, France, Canada and Australia.</p></article>
          <article><span>02</span><h2>800+ successful matters</h2><p>Completed client projects across visa and immigration routes, including more than 200 in the UK.</p></article>
          <article><span>03</span><h2>Agencies brought us in</h2><p>We were asked to assist where a matter was difficult, the evidence conflicted or the preparation required a less conventional approach.</p></article>
          <article><span>04</span><h2>US-licensed attorney partner</h2><p>The legal stage of US matters is led by our partner, an attorney holding a current licence to practise in the United States.</p></article>
        </section>

        <section className="section-shell about-details">
          <article><p className="eyebrow">Why Samotsvet</p><h2>Complex matters require individual work</h2><p>The practice grew from experience inside an agency, where strong profiles could be lost in a template. We limit the number of concurrent projects and agree stages, timing and communication before work begins.</p></article>
          <article><p className="eyebrow">Our standard</p><h2>Facts and genuine achievements</h2><p>Every proposition should be supported by verifiable documents and a genuine result. Early-stage profiles receive a development plan; where a viable route is absent, we explain the reasons at the outset.</p></article>
        </section>

        <section className="section-shell closing-cta">
          <div><p className="eyebrow eyebrow-light">Working with us</p><h2>Establish what can already be evidenced and what needs to be strengthened</h2></div>
          <div><p>A short enquiry gives us enough information for a useful first conversation.</p><Link className="button button-gold" href="/en/assessment">Get a profile assessment</Link></div>
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
