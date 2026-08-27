/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "The Samotsvet team, 800+ completed matters, 10,000+ profile reviews and its approach to immigration evidence preparation.",
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
          <p>We begin with the client&apos;s objective and circumstances, rather than a country or visa name. We review the professional or business profile, nationality, family circumstances and timing, compare the available programmes and propose realistic relocation options. If a suitable route requires stronger evidence, we set out a preparation plan in advance.</p>
        </section>

        <section className="section-shell founder-profile" id="nikita">
          <div className="founder-photo"><img src="/nikita-founder-white-v3.webp" alt="Nikita Samotsvetov, founder of Samotsvet" width="1149" height="1368" /></div>
          <div className="founder-copy">
            <p className="eyebrow">Founder</p>
            <h2>Nikita Samotsvetov</h2>
            <p className="founder-role">Founder and practice lead. Nikita is responsible for the methodology, strategy on complex projects and quality control.</p>
            <p>Since 2021, we have completed <strong>more than 800 client matters</strong> and reviewed <strong>more than 10,000 professional profiles</strong>. We led some projects in full and worked with agencies on route assessment or individual preparation stages in others.</p>
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
          <article><p className="eyebrow">Why Samotsvet</p><h2>Complex matters require individual work</h2><p>The practice grew from experience inside an agency, where strong profiles could be lost in a template. We limit the number of concurrent projects and agree stages, timing and communication before work begins.</p></article>
          <article><p className="eyebrow">Our standard</p><h2>Facts and genuine achievements</h2><p>Every proposition should be supported by verifiable documents and a genuine result. Early-stage profiles receive a development plan; where a viable route is absent, we explain the reasons at the outset.</p></article>
        </section>

        <section className="section-shell closing-cta">
          <div><p className="eyebrow eyebrow-light">Working with us</p><h2>Establish what can already be evidenced and what needs to be strengthened</h2></div>
          <div><p>The profile audit gives us enough information for a useful first conversation.</p><Link className="button button-gold" href="/en/assessment/">Start profile audit</Link></div>
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
