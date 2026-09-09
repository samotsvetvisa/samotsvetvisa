import type { Metadata } from "next";
import { AssessmentForm } from "../../components/AssessmentForm";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({
  title: "Free consultation with Nikita Samotsvetov",
  description: "Briefly tell us about your work and relocation plans. We will discuss your circumstances and the next step during a free initial consultation.",
  path: "/en/assessment",
  locale: "en",
});

export default function EnglishAssessmentPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main>
        <section className="inner-hero section-shell assessment-hero">
          <div><p className="eyebrow">Initial consultation</p><h1>Free consultation with Nikita Samotsvetov</h1></div>
          <p>Briefly tell us about your work and your plans to relocate. During the initial consultation, we will discuss your circumstances and the next step. The meeting lasts up to 20 minutes; you do not need to prepare a full set of documents in advance.</p>
        </section>
        <section className="section-shell assessment-layout">
          <aside><span>What is included</span><ol><li>Up to 20 minutes with Nikita Samotsvetov.</li><li>A discussion of your objective, circumstances and constraints.</li><li>A preliminary view of suitable options.</li><li>A clear next step after the conversation.</li></ol><p>The initial consultation is free. A detailed profile audit and a written strategy are separate services, agreed before paid work begins.</p></aside>
          <AssessmentForm locale="en" />
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
