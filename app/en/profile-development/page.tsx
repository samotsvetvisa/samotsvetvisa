import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({
  title: "Profile development before filing",
  description: "An evidence review and a 6–12 month profile development plan for Global Talent, EB-1A, EB-2 NIW, O-1 and other complex routes.",
  path: "/en/profile-development",
  locale: "en",
});

const stages = [
  ["Evidence review", "We review achievements, documents and independent sources, then map strong evidence, weak support and missing facts against each requirement."],
  ["A 6–12 month plan", "We define the projects, publications, speaking, referees, metrics and other genuine results that can strengthen the selected route."],
  ["Review points", "The plan is divided into stages with dates. New results are reviewed regularly against the programme requirements."],
  ["Preparation for filing", "Once the evidence base is ready, we assemble the bundle, check it for contradictions and move the project into the filing stage."],
];

export default function EnglishProfileDevelopmentPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main>
        <section className="inner-hero section-shell">
          <div><p className="eyebrow">Profile development</p><h1>A strong case can be planned well in advance</h1></div>
          <p>A programme for specialists and founders who need to build evidence before filing. We turn a broad objective into a sequenced plan with measurable results.</p>
        </section>

        <section className="section-shell development-page">
          <div className="development-intro">
            <p className="eyebrow">Programme outcome</p>
            <h2>A clear preparation map</h2>
            <p>You receive a review of the current evidence base, a working route, a 6–12 month development plan and defined review points. The duration depends on the starting profile and programme.</p>
          </div>
          <ol className="development-stages">
            {stages.map(([title, text], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
          </ol>
        </section>

        <section className="section-shell about-details">
          <article><p className="eyebrow">Working document</p><h2>Evidence matrix</h2><p>For every requirement, we record the proposition, available sources, current level of support, gap and next verifiable result.</p></article>
          <article><p className="eyebrow">Plan management</p><h2>A calendar with responsibilities</h2><p>Each task has a date, owner, expected output and readiness test. The plan is updated at review points using the results actually achieved.</p></article>
        </section>

        <section className="section-shell closing-cta">
          <div><p className="eyebrow eyebrow-light">First step</p><h2>We begin with the profile and available evidence</h2></div>
          <div><p>After the assessment, we set out the scope, indicative timing and programme fee.</p><Link className="button button-gold" href="/en/assessment/">Assess my options</Link></div>
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
