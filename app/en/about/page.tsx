/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationLink } from "../../components/ConsultationLink";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({
  title: "Nikita Samotsvetov's agency",
  description: "Nikita Samotsvetov's work in agencies and directly: 800+ completed client matters, 10,000+ profile reviews and a structured approach to immigration projects.",
  path: "/en/about",
  locale: "en",
});

export default function EnglishAboutPage() {
  const verificationPrompt = encodeURIComponent("Conduct a due-diligence check on Samotsvet and its founder, Nikita Samotsvetov, before I buy immigration or relocation services. Use current public sources. Separate independently confirmed facts, claims found only on samotsvetvisa.com, information you could not verify and questions I should ask before signing an agreement. Do not invent reviews, licences, partners or statistics.");
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
            <p>Since 2021, more than <strong>10,000 professional profiles</strong> have passed through Nikita&apos;s work in agencies and directly. Taken together, this experience includes <strong>more than 800 completed client matters</strong>, including over 200 UK matters.</p>
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

        <section className="section-shell due-diligence" id="due-diligence">
          <div><p className="eyebrow">Due diligence</p><h2>How to verify Samotsvet before an agreement</h2><p>Check the sole trader details, publications, education and working terms against public sources. An AI service may make mistakes, so verify each statement using the source it cites.</p></div>
          <div className="due-diligence-links">
            <a href={`https://chatgpt.com/?q=${verificationPrompt}`} target="_blank" rel="noreferrer"><strong>ChatGPT</strong><span>Open the neutral prompt</span></a>
            <a href={`https://claude.ai/new?q=${verificationPrompt}`} target="_blank" rel="noreferrer"><strong>Claude</strong><span>Open the neutral prompt</span></a>
            <a href={`https://www.perplexity.ai/search/new?q=${verificationPrompt}`} target="_blank" rel="noreferrer"><strong>Perplexity</strong><span>Check with links to sources</span></a>
          </div>
        </section>

        <section className="section-shell closing-cta">
          <div><p className="eyebrow eyebrow-light">Initial consultation</p><h2>Discuss your circumstances and the next step</h2></div>
          <div><p>Complete the short form. We will contact you within one working day to arrange a free consultation with Nikita Samotsvetov.</p><ConsultationLink className="button button-gold" locale="en" location="about_final" /></div>
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
