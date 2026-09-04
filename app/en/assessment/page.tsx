import type { Metadata } from "next";
import { AssessmentForm } from "../../components/AssessmentForm";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({
  title: "Immigration options assessment",
  description: "Tell us about your objectives, experience and starting position. Samotsvet will compare suitable programmes and recommend the next step.",
  path: "/en/assessment",
  locale: "en",
});

export default function EnglishAssessmentPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main>
        <section className="inner-hero section-shell assessment-hero">
          <div><p className="eyebrow">Options assessment</p><h1>Start with your circumstances</h1></div>
          <p>Complete the introductory form. We will review your objective, starting position, experience and available evidence, then compare realistic programmes.</p>
        </section>
        <section className="section-shell assessment-layout">
          <aside><span>What happens next</span><ol><li>Our team reviews the form personally.</li><li>We compare suitable countries and programmes.</li><li>We assess the case foundation and key gaps.</li><li>We recommend the next step within one business day.</li></ol></aside>
          <AssessmentForm locale="en" />
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
