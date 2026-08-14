import type { Metadata } from "next";
import { AssessmentForm } from "../../components/AssessmentForm";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({
  title: "Profile assessment",
  description: "A short enquiry form for an analysis of your starting profile and a proposed preparation plan.",
  path: "/en/assessment",
  locale: "en",
});

export default function EnglishAssessmentPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main>
        <section className="inner-hero section-shell assessment-hero">
          <div><p className="eyebrow">Profile assessment</p><h1>A short form — about five minutes</h1></div>
          <p>We will review the enquiry and reply within 24 hours. The response covers a preliminary route comparison, the starting profile and a suitable working format.</p>
        </section>
        <section className="section-shell assessment-layout">
          <aside><span>What happens next</span><ol><li>We compare the objective with the available routes.</li><li>We review the starting profile and evidence.</li><li>We identify the gaps and a preliminary sequence of work.</li><li>We propose the next stage and working format.</li></ol></aside>
          <AssessmentForm locale="en" />
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
