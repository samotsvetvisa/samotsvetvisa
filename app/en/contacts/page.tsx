import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { CONTACT_EMAIL, TELEGRAM_HANDLE, TELEGRAM_URL, pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({ title: "Contact and company details", description: "Contact details, service provider information and registration details for Samotsvet.", path: "/en/contacts", locale: "en" });

export default function EnglishContactsPage() {
  return (
    <><SiteHeader locale="en" /><main>
      <section className="inner-hero section-shell"><div><p className="eyebrow">Contact</p><h1>Contact and company details</h1></div><p>This page identifies the service provider and data controller.</p></section>
      <section className="section-shell contacts-layout">
        <article className="contact-card contact-card-primary"><p className="eyebrow eyebrow-light">Still have questions?</p><h2>Contact us</h2><p>Send a short outline by Telegram or email. We will reply personally and propose a practical next step.</p><div className="contact-links"><a className="button contact-channel" href={TELEGRAM_URL} target="_blank" rel="noreferrer">Telegram: {TELEGRAM_HANDLE}</a><a className="button contact-channel" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div></article>
        <article className="contact-card"><p className="eyebrow">Initial enquiry</p><h2>Start with a short form</h2><p>Describe the matter and leave a convenient contact. We will review the enquiry and propose a practical next step.</p><Link className="button button-primary" href="/en/assessment">Open the form</Link></article>
        <article className="contact-card"><p className="eyebrow">Service provider and data controller</p><h2>Individual entrepreneur Nikita Andreevich Samotsvetov</h2><dl className="requisites-list"><div><dt>Jurisdiction</dt><dd>Russian Federation</dd></div><div><dt>OGRNIP</dt><dd>323670000016524</dd></div><div><dt>INN</dt><dd>672200624836</dd></div><div><dt>Email</dt><dd><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd></div><div><dt>Telegram</dt><dd><a href={TELEGRAM_URL} target="_blank" rel="noreferrer">{TELEGRAM_HANDLE}</a></dd></div></dl></article>
        <article className="contact-card"><p className="eyebrow">Data requests</p><h2>How to submit a request</h2><p>A request for access, correction, restriction or deletion may be sent by post or email.</p><a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>Submit an electronic request <span aria-hidden="true">↗</span></a></article>
        <article className="contact-card"><p className="eyebrow">Project and fees</p><h2>Every condition in one plan</h2><p>Before work begins, you receive the scope, project team, key stages, indicative timing, fee and payment schedule.</p><Link className="text-link" href="/en/legal">How the agency works <span aria-hidden="true">↗</span></Link></article>
      </section>
    </main><SiteFooter locale="en" /></>
  );
}
