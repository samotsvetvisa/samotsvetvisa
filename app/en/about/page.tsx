/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({
  title: "Nikita Samotsvetov's agency",
  description: "Nikita Samotsvetov and the Samotsvet team: 800+ completed matters, 10,000+ profile reviews and a structured approach to immigration projects.",
  path: "/en/about",
  locale: "en",
});

export default function EnglishAboutPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main>
        <section className="inner-hero section-shell about-hero">
          <div><p className="eyebrow">Nikita Samotsvetov&apos;s agency</p><h1>Founder-led strategy. Team delivery</h1></div>
          <p>Nikita is responsible for methodology, strategy and quality control. The Samotsvet team develops evidence and documents, co-ordinates specialist partners and manages the agreed process through to the decision.</p>
        </section>

        <section className="section-shell founder-profile" id="nikita">
          <div className="founder-photo"><img src="/nikita-founder-white-v3.webp" alt="Nikita Samotsvetov, founder of Samotsvet" width="1149" height="1368" /></div>
          <div className="founder-copy">
            <p className="eyebrow">Founder</p>
            <h2>Nikita Samotsvetov</h2>
            <p className="founder-role">Founder and practice lead. Responsible for methodology, strategy on complex projects and quality control.</p>
            <p>Since 2021, more than <strong>10,000 professional profiles</strong> have passed through Nikita&apos;s work in agencies and directly. The team has completed <strong>more than 800 client matters</strong>, including over 200 UK matters.</p>
            <p>Before founding Samotsvet, Nikita worked for several immigration agencies in Europe and the United Kingdom. He reviewed immigration profiles, launched new service lines and served as a partner in relocation businesses. That experience shaped the team&apos;s methodology: comparing possible routes, identifying the evidence required, checking sources and reconciling information across documents.</p>
            <p>In 2023, Nikita completed the <strong>LLM in International Law and Global Governance</strong> at the University of Leeds.</p>
            <p>Current areas of focus include Global Talent and Innovator Founder in the UK; O-1, EB-1A, EB-2 NIW and E-2 in the US; Spain&apos;s Digital Nomad Visa (DNV); and the carte de sejour Talent in France.</p>
            <Link className="text-link" href="/en/legal/">How the agency works <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="section-shell values-grid facts-grid">
          <article><span>01</span><h2>800+ completed matters</h2><p>We managed client projects in full and worked with agencies on defined preparation stages.</p></article>
          <article><span>02</span><h2>10,000+ profiles reviewed</h2><p>We assessed professional, founder and family circumstances and matched them against potential relocation destinations.</p></article>
          <article><span>03</span><h2>14 countries in comparative reviews</h2><p>Alongside the four core destinations, we assessed Australia, Bulgaria, Portugal, Argentina, China, Japan, Canada, Switzerland, Luxembourg and Germany.</p></article>
          <article><span>04</span><h2>US-licensed attorney partner</h2><p>The legal stage of US matters is led by our partner, an attorney holding a current licence to practise in the United States.</p></article>
        </section>

        <section className="section-shell about-details">
          <article><p className="eyebrow">Why Samotsvet</p><h2>A realistic view before work begins</h2><p>We compare programmes and establish what can already be evidenced and what requires development. Work proceeds against an agreed plan with clear tasks, timing and limitations.</p></article>
          <article><p className="eyebrow">Our standard</p><h2>Facts and genuine achievements</h2><p>Every proposition should be supported by verifiable documents and a genuine result. We build a development plan for early-stage profiles and explain the reasons at the outset where no viable route is present.</p></article>
        </section>

        <section className="section-shell closing-cta">
          <div><p className="eyebrow eyebrow-light">Working with us</p><h2>Establish what can already be evidenced and what needs to be strengthened</h2></div>
          <div><p>The introductory form gives our team enough information for a useful first conversation.</p><Link className="button button-gold" href="/en/assessment/">Assess my options</Link></div>
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
