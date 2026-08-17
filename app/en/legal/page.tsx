import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata, SERVICE_MODEL_EN } from "../../site";

export const metadata: Metadata = pageMetadata({ title: "Working terms", description: "How Samotsvet delivers full-cycle immigration and visa projects, builds the team, and agrees timing and fees.", path: "/en/legal", locale: "en" });

export default function EnglishLegalPage() {
  return (
    <><SiteHeader locale="en" /><main><article className="legal-page section-shell">
      <p className="eyebrow">Terms of work</p><h1>Working terms</h1><p className="legal-updated">Version dated 12 August 2026</p>
      <section><h2>1. Service provider</h2><p>Project services under the Samotsvet brand are provided by individual entrepreneur Nikita Andreevich Samotsvetov, OGRNIP 323670000016524, INN 672200624836, registered in the Russian Federation. The full address and contact channels appear on the <Link href="/en/contacts/">Contact and company details</Link> page.</p></section>
      <section><h2>2. Full-cycle agency</h2><p>{SERVICE_MODEL_EN}</p></section>
      <section><h2>3. Project team</h2><p>The team is built around the destination, route and starting profile. Samotsvet brings in attorneys, regulated immigration professionals, translators, public-profile specialists and other contractors while maintaining one plan and centralised project management.</p></section>
      <section><h2>4. Partner network</h2><p>Samotsvet brings in specialist professionals and contractors for particular project tasks. They work within a single plan, while we remain responsible for co-ordination and the overall delivery.</p></section>
      <section><h2>5. Timing and fees</h2><p>Our work ranges from several weeks for an urgent filing with a developed profile to two years for a full-cycle complex programme. The stages, timetable, fee and payment schedule are recorded before work begins.</p></section>
      <section><h2>6. Prices on the site</h2><p>Published fees are indicative and provide a basis for discussing an individual project. A public offer arises only where expressly stated. Final terms are recorded in the personal proposal and agreement.</p></section>
      <section><h2>7. Outcome and currency of information</h2><p>The competent public authority makes the final decision. Samotsvet is responsible for the quality of the strategy, preparation and project management. Rules and their application may change, so we check the official requirements again before filing.</p></section>
    </article></main><SiteFooter locale="en" /></>
  );
}
