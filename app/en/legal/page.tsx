import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata, SERVICE_MODEL_EN } from "../../site";

export const metadata: Metadata = pageMetadata({ title: "Working terms", description: "How Samotsvet delivers full-cycle immigration and visa projects, builds the team, and agrees timing and fees.", path: "/en/legal", locale: "en" });

export default function EnglishLegalPage() {
  return (
    <><SiteHeader locale="en" /><main><article className="legal-page section-shell">
      <p className="eyebrow">Terms of work</p><h1>Working terms</h1><p className="legal-updated">Version dated 4 September 2026</p>
      <section><h2>1. Service provider</h2><p>Project services under the Samotsvet brand are provided by individual entrepreneur Nikita Andreevich Samotsvetov, OGRNIP 323670000016524, INN 672200624836, registered in the Russian Federation. Current contact channels and registration details appear on the <Link href="/en/contacts/">Contact and company details</Link> page.</p></section>
      <section><h2>2. Full-cycle agency</h2><p>{SERVICE_MODEL_EN}</p></section>
      <section><h2>3. Project team</h2><p>The team is built around the destination, route and starting profile. Samotsvet brings in attorneys, regulated immigration professionals, translators, public-profile specialists and other contractors while maintaining one plan and centralised project management.</p></section>
      <section><h2>4. Partner network</h2><p>Samotsvet brings in specialist professionals and contractors for particular project tasks. They work within a single plan, while we remain responsible for co-ordination and the overall delivery.</p></section>
      <section><h2>5. Timing and fees</h2><p>Our work ranges from several weeks for an urgent filing with a developed profile to two years for a full-cycle complex programme. The stages, timetable, fee and payment schedule are recorded before work begins.</p></section>
      <section><h2>6. Prices on the site</h2><p>Published fees are indicative and provide a basis for discussing an individual project. A public offer arises only where expressly stated. Final terms are recorded in the personal proposal and agreement.</p></section>
      <section><h2>7. Outcome and currency of information</h2><p>The competent public authority makes the final decision: no one can guarantee approval. Samotsvet guarantees the quality of its work — a reasoned assessment based on documents and official criteria, an independent specialist review of the strategy, preparation of the agreed bundle and transparent communication.</p><p>Rules and their application may change, so we check the official requirements again before filing. The fee and scope are fixed before work begins and change only by written agreement.</p></section>
      <section><h2>8. Work guarantee and payment schedule</h2><p>The full-support fee is divided into three payments: <strong>40% at the start</strong>, <strong>30% after filing</strong> and <strong>30% after a positive decision</strong>.</p><p>If the authority refuses the agreed filing, Samotsvet refunds the second payment, equal to 30% of the fee. The final 30% is not invoiced after a refusal. The amount ultimately retained is the initial 40%, which covers strategy and preparation already completed.</p><p>We respond to an authority&apos;s request without an additional Samotsvet professional fee. Following a refusal, we prepare one repeat filing without charging for our work. Government fees, translations, licensed professionals and other external costs remain separate.</p><p>The guarantee applies where the client provides complete and accurate information and complies with the agreed strategy, timetable and other contractual obligations. The precise refusal event, refund process and period, repeat-filing scope and exclusions are recorded in the individual agreement before the first payment.</p></section>
      <section><h2>9. Ending the engagement early</h2><p>If the client ends the project, the unperformed portion is calculated after allowing for completed stages, agreed external expenses and any mandatory rule of applicable law. The agreement records stage acceptance and termination rules before payment.</p></section>
    </article></main><SiteFooter locale="en" /></>
  );
}
