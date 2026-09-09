import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { CONTACT_EMAIL, pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({
  title: "Consent to the processing of personal data",
  description: "The consent which applies to personal data submitted through the Samotsvet enquiry form.",
  path: "/en/consent",
  locale: "en",
});

export default function EnglishConsentPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main>
        <article className="legal-page section-shell privacy-page">
          <p className="eyebrow">Personal data</p>
          <h1>Consent to the processing of personal data</h1>
          <p className="legal-updated">Version dated 9 September 2026</p>
          <p className="legal-intro">By selecting the separate checkbox and submitting a request for a free initial consultation, you freely give this consent.</p>

          <section>
            <h2>1. Controller</h2>
            <p>The controller is <strong>individual entrepreneur Nikita Andreevich Samotsvetov</strong>, OGRNIP 323670000016524, INN 672200624836.</p>
            <p>Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. The full address and contractual details are included in the service agreement.</p>
          </section>

          <section>
            <h2>2. Data covered by this consent</h2>
            <p>This consent covers the information you enter in the form:</p>
            <ul>
              <li>your name and contact details;</li>
              <li>a short summary of your work and professional or business experience;</li>
              <li>the selected country or goal and intended relocation timing;</li>
              <li>the programme topic where the form is opened from a specific route page;</li>
              <li>enquiry source, permitted UTM values, entry and source pages, external referrer and button location;</li>
              <li>technical request data required for security and spam prevention.</li>
            </ul>
            <p>Do not submit passport details, medical information, criminal record documents, bank details or other sensitive or excessive information through the form.</p>
          </section>

          <section>
            <h2>3. Purposes</h2>
            <ul>
              <li>to respond and arrange a free initial consultation;</li>
              <li>to discuss possible programmes on a preliminary basis and propose the next stage;</li>
              <li>to prepare an individual proposal and take pre-contractual steps;</li>
              <li>to understand the enquiry source, secure the form and protect lawful rights.</li>
            </ul>
            <p>This consent does not cover marketing messages. Separate consent would be required for them.</p>
          </section>

          <section>
            <h2>4. Processing operations</h2>
            <p>Processing may be automated or manual and may include collection, recording, organisation, accumulation, storage, updating, retrieval, use, disclosure to appointed processors where necessary, restriction, deletion and destruction.</p>
          </section>

          <section>
            <h2>5. Recipients and location of the primary record</h2>
            <p>After submission, the browser sends the completed form once to the Samotsvet CRM at <code>crm.samotsvetvisa.com</code>. The primary record is created on a server in Russia. Authorised Samotsvet personnel and contractors may access the enquiry to the extent required to respond.</p>
            <p>A specialist reviews the request. A preliminary view given during or after the consultation is not legal advice, a guarantee of approval or an automated decision producing legal effects.</p>
            <p>Case material is sent to a foreign lawyer, regulated adviser, translator or other professional only after the applicable legal basis has been established and any required notice, consent and contractual steps have been completed.</p>
          </section>

          <section>
            <h2>6. Duration and withdrawal</h2>
            <p>The consent remains effective until withdrawn, but no longer than 24 months after the last substantive communication if the enquiry does not lead to contracted work. Where a contract is signed, some records may be kept for longer where required for performance, accounting or the protection of rights.</p>
            <p>You may withdraw consent by emailing <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Include your name, the contact method used in the form and the nature of the request. Withdrawal does not affect processing carried out lawfully before it was received.</p>
          </section>

          <section>
            <h2>7. Further information</h2>
            <p>More information about purposes, legal bases, recipients, retention and your rights appears in the <Link href="/en/privacy/">Privacy Policy</Link>.</p>
          </section>
        </article>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
