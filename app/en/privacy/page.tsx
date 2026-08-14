import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { CONTACT_EMAIL, pageMetadata, TELEGRAM_HANDLE, TELEGRAM_URL } from "../../site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description: "How Samotsvet collects, uses, stores and protects personal data, and how data subjects can exercise their rights.",
  path: "/en/privacy",
  locale: "en",
});

export default function EnglishPrivacyPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main>
        <article className="legal-page section-shell privacy-page">
          <p className="eyebrow">Data processing</p>
          <h1>Privacy policy</h1>
          <p className="legal-updated">Version dated 14 August 2026</p>
          <p className="legal-intro">This policy explains what personal data Samotsvet receives through the site, why it is needed, who may receive it and how a data subject can exercise their rights. We aim to collect only the information required to respond to an enquiry.</p>

          <section>
            <h2>1. Data controller</h2>
            <p><strong>Individual entrepreneur Nikita Andreevich Samotsvetov</strong> (Samotsvet), OGRNIP 323670000016524, INN 672200624836, registered in the Russian Federation.</p>
            <p>Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Telegram: <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">{TELEGRAM_HANDLE}</a>.</p>
            <p>The full address and contractual details are included in the service agreement.</p>
            <p>You may send a data request to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Full details appear on the <Link href="/en/contacts/">Contact and company details</Link> page.</p>
          </section>

          <section>
            <h2>2. Scope and applicable law</h2>
            <p>This policy applies to the Samotsvet website and enquiries submitted through its forms. Processing takes account of Russian Federal Law No. 152-FZ on Personal Data, the EU General Data Protection Regulation where it applies, and any other mandatory law of the relevant jurisdiction.</p>
          </section>

          <section>
            <h2>3. Data we collect</h2>
            <ul>
              <li><strong>Identity and contact data:</strong> name, email address, messenger username or another contact method.</li>
              <li><strong>Enquiry data:</strong> destination, route of interest, goal, timing, professional or business profile, and information voluntarily entered in the form.</li>
              <li><strong>Attribution data:</strong> landing page, referring page and UTM source, medium and campaign values, when included in the link.</li>
              <li><strong>Technical data:</strong> request details and security logs which the site infrastructure may process for delivery, abuse prevention and fault diagnosis.</li>
            </ul>
            <p>The initial form does not ask for passport details, health data, political or religious views, biometric data, bank details or other sensitive or excessive information. Please do not submit such information through the form.</p>
          </section>

          <section>
            <h2>4. Purposes and legal bases</h2>
            <div className="legal-table-wrap">
              <table className="legal-table">
                <thead><tr><th>Purpose</th><th>Data</th><th>Legal basis</th></tr></thead>
                <tbody>
                  <tr><td>Replying to an enquiry and conducting an initial review</td><td>Name, contact details and form content</td><td>Steps taken at the data subject&apos;s request before entering into a contract; consent where required</td></tr>
                  <tr><td>Preparing a proposal and negotiating terms</td><td>Contact details, goal, route, profile and timing</td><td>Pre-contractual steps and subsequent performance of a contract</td></tr>
                  <tr><td>Understanding enquiry sources and improving the site</td><td>UTM values, landing page and referring page</td><td>Legitimate interest in measuring Samotsvet&apos;s own channels with limited data</td></tr>
                  <tr><td>Security, spam prevention and protection of rights</td><td>Technical request data and logs</td><td>Legitimate interest and compliance with legal duties</td></tr>
                  <tr><td>Accounting and legal records after a contract is signed</td><td>Contract and payment data</td><td>Performance of a contract and compliance with law</td></tr>
                </tbody>
              </table>
            </div>
            <p>We do not use form data for bulk marketing messages without separate, unambiguous consent.</p>
          </section>

          <section>
            <h2>5. Source of data and required fields</h2>
            <p>Data normally comes directly from the person submitting the enquiry. Required fields are marked in the form. Without a name, contact method, destination, description and consent confirmation, the form cannot be submitted because Samotsvet would not have enough information to provide a meaningful response. Other fields are optional.</p>
          </section>

          <section>
            <h2>6. Retention</h2>
            <ul>
              <li>An enquiry which does not lead to contracted work is kept for no more than 24 months after the last substantive communication.</li>
              <li>If a contract is signed, data is kept throughout the work and afterwards for as long as needed for accounting, mandatory legal requirements and the establishment or defence of legal claims.</li>
              <li>Technical logs are kept for the limited period set by the infrastructure provider and required for security and diagnosis.</li>
            </ul>
            <p>After the applicable period, data is deleted or anonymised unless continued retention is required by law.</p>
          </section>

          <section>
            <h2>7. Recipients and processors</h2>
            <p>Access is limited to what is necessary for a specific purpose and may be given to:</p>
            <ul>
              <li>site hosting and infrastructure providers, including GitHub Pages, as well as Google Apps Script and Google Sheets, which receive and store enquiries;</li>
              <li>Samotsvet personnel and contractors who need the data to respond or carry out agreed work and are bound by confidentiality;</li>
              <li>an independent lawyer, regulated immigration adviser, translator or other professional where this is needed for the requested service, covered by the agreement or separately approved by the client;</li>
              <li>public authorities or other parties where disclosure is required by law or needed to protect lawful rights.</li>
            </ul>
            <p>Samotsvet does not sell personal data or disclose it to advertising networks.</p>
          </section>

          <section>
            <h2>8. International processing</h2>
            <p>Technical infrastructure and some independent professionals may be located outside the data subject&apos;s country. Such processing takes place only where a lawful basis and the required contractual, organisational or other safeguards are in place. If a transfer requires a separate notice or consent, it will be arranged before the transfer.</p>
          </section>

          <section>
            <h2>9. Cookies and analytics</h2>
            <p>The Samotsvet site does not set cookies, use local browser storage, advertising pixels or third-party analytics. A cookie consent banner is therefore not currently required. UTM values, the landing page and referring page are stored only with a submitted enquiry to identify its source. The hosting provider may process request data and logs required for page delivery, security and fault diagnosis.</p>
          </section>

          <section>
            <h2>10. Security</h2>
            <p>Measures include restricting access to the enquiries spreadsheet through a Google account, validation of submitted data, automated spam protection, encrypted connections and other reasonable organisational and technical safeguards. No method of internet transmission or storage can remove all risk.</p>
          </section>

          <section>
            <h2>11. Data subject rights</h2>
            <p>Depending on the applicable law, a data subject may:</p>
            <ul>
              <li>obtain confirmation of processing and a copy of their data;</li>
              <li>request correction of inaccurate or completion of incomplete data;</li>
              <li>request deletion or restriction where there is no longer a lawful basis for processing;</li>
              <li>withdraw consent without affecting processing carried out before withdrawal;</li>
              <li>object to processing based on legitimate interests;</li>
              <li>receive data in a portable format where that right applies;</li>
              <li>complain to the competent supervisory authority, including Roskomnadzor or the authority in the relevant EU Member State.</li>
            </ul>
            <p>We may ask for reasonable proof of identity before fulfilling a request so that data is not disclosed to another person.</p>
          </section>

          <section>
            <h2>12. Automated decisions</h2>
            <p>The form does not make an automated decision about a visa, status or whether Samotsvet can take on the work. It does not produce legal effects without human involvement.</p>
          </section>

          <section>
            <h2>13. Children&apos;s data</h2>
            <p>The site is not intended for independent use by anyone under 18. Information about a child in a family enquiry should be provided by a parent or legal guardian, and only to the extent needed at the relevant stage.</p>
          </section>

          <section>
            <h2>14. Requests and complaints</h2>
            <p>A request may be sent to the controller&apos;s address or through the electronic channels on the <Link href="/en/contacts/">contact page</Link>. Please include your name, the contact method used, the nature of the request and enough information to locate the relevant record. Samotsvet will respond within the period required by applicable law.</p>
          </section>

          <section>
            <h2>15. Changes to this policy</h2>
            <p>The current version is always published on this page. If the purposes of processing or categories of recipients materially change, the revision date will be updated and new consent will be requested where required by law.</p>
          </section>
        </article>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
