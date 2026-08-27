import type { Metadata } from "next";
import { AssessmentForm } from "../../components/AssessmentForm";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({
  title: "Profile audit and immigration programme screening",
  description: "A local audit of career foundation, impact and evidence across several programmes, without a spurious approval percentage.",
  path: "/en/assessment",
  locale: "en",
});

export default function EnglishAssessmentPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main>
        <section className="inner-hero section-shell assessment-hero">
          <div><p className="eyebrow">Profile audit</p><h1>Test the experience before choosing a country</h1></div>
          <p>Answer questions about trajectory, personal contribution and independent evidence. The result compares several programmes and explains what already works and what can be developed.</p>
        </section>
        <section className="section-shell assessment-layout">
          <aside><span>What you receive</span><ol><li>Several programmes rather than the route attached to one country.</li><li>Strengths and gaps without a spurious percentage.</li><li>A view of what can already be evidenced.</li><li>Development options even where no publications exist yet.</li></ol></aside>
          <AssessmentForm locale="en" />
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
