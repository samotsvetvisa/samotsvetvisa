import type { Metadata } from "next";
import { AssessmentForm } from "../../components/AssessmentForm";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({
  title: "Preliminary profile and route assessment",
  description: "A short assessment of potential immigration routes, present profile readiness and the next preparation step.",
  path: "/en/assessment",
  locale: "en",
});

export default function EnglishAssessmentPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main>
        <section className="inner-hero section-shell assessment-hero">
          <div><p className="eyebrow">Preliminary assessment</p><h1>Start with a 2–3 minute screening</h1></div>
          <p>You will immediately see which directions are worth checking and the present profile readiness. You can then add detail for a substantive team reply within one business day.</p>
        </section>
        <section className="section-shell assessment-layout">
          <aside><span>What you receive</span><ol><li>Directions worth examining.</li><li>A readiness assessment without a spurious percentage.</li><li>A view of what can already be evidenced.</li><li>A plan where no publications exist at the outset.</li></ol></aside>
          <AssessmentForm locale="en" />
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
