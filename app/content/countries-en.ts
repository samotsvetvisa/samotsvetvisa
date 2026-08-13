import type { CountryPageData } from "./countries";

export const countriesEn: CountryPageData[] = [
  {
    slug: "uk",
    code: "UK",
    country: "United Kingdom",
    eyebrow: "Professional recognition and entrepreneurship",
    title: "The United Kingdom — through recognised expertise or an innovative business",
    intro: "Global Talent is built on evidenced professional achievements. Innovator Founder supports the launch of a new UK business and requires endorsing body approval.",
    routes: [
      {
        name: "Global Talent",
        summary: "A route for leaders and potential leaders in digital technology, science, research, arts and culture.",
        fit: ["Professional achievements are supported by independent sources", "Your role and measurable contribution are clear", "There is evidence of recognition by the professional community"],
      },
      {
        name: "Innovator Founder",
        summary: "A route for a founder establishing and developing an endorsed innovative business in the UK.",
        fit: ["The idea is materially different from existing solutions", "The business can operate sustainably and grow", "There is a credible development plan and a clear role for the founder"],
      },
    ],
    risks: [
      { title: "Confusing a strong career with proven recognition", detail: "Strong internal company results do not by themselves show wider professional recognition. Independent sources, a clear sense of scale and your personal role all matter." },
      { title: "Collecting documents without a single line of argument", detail: "If letters, figures and public materials present different versions of events, volume will not resolve the contradictions." },
      { title: "Calling an ordinary service business innovative", detail: "Innovator Founder requires a specific point of difference, a viable business and a credible route to growth. General technology language is insufficient." },
      { title: "Treating the endorsing body as a formality", detail: "Its criteria, checkpoints and evidence requirements shape the project from the outset." },
    ],
    regulatory: "Samotsvet manages the UK matter as one project: strategy, profile development, evidence, references, final bundle review and the filing process through to the decision.",
    official: [
      { label: "GOV.UK: Global Talent", href: "https://www.gov.uk/global-talent" },
      { label: "GOV.UK: Global Talent in digital technology", href: "https://www.gov.uk/global-talent-digital-technology" },
      { label: "GOV.UK: Innovator Founder", href: "https://www.gov.uk/innovator-founder-visa" },
    ],
  },
  {
    slug: "spain",
    code: "ES",
    country: "Spain",
    eyebrow: "International remote work",
    title: "Spain — for genuine and evidenced remote work",
    intro: "Spain's Digital Nomad Visa (DNV) is designed for employees of overseas companies and self-employed professionals working with clients outside Spain. The evidence required depends on the working arrangement.",
    routes: [
      {
        name: "Digital Nomad Visa (DNV) — international remote work visa",
        summary: "A Spanish visa or residence authorisation for international remote employees and independent professionals.",
        fit: ["Contracts permit remote work and match the work actually performed", "Income and its regularity can be evidenced", "Insurance and family documents have been considered in advance"],
      },
    ],
    risks: [
      { title: "Translating documents before checking the substance", detail: "An apostille and a translation fix a document in its current form. Weak clauses, incorrect periods and contradictions should be resolved first." },
      { title: "Failing to align the contract, duties and payments", detail: "The role, permission to work remotely, invoices and actual receipts should not contradict one another." },
      { title: "Assuming travel insurance will always be sufficient", detail: "Requirements depend on the filing route, the applicant's position and the cover provided. The policy must be checked against the actual circumstances." },
      { title: "Leaving social security until the end", detail: "Applicable agreements, proof of cover and employer obligations can affect both the document set and the preparation timetable." },
    ],
    regulatory: "Samotsvet leads the preparation end to end: contracts, duties, payments, insurance, family documents, translations and the filing process through to the decision.",
    official: [
      { label: "Ministerio de Inclusión: Teletrabajadores", href: "https://www.inclusion.gob.es/web/unidadgrandesempresas/teletrabajadores" },
      { label: "UGE: Autorizaciones y requisitos", href: "https://www.inclusion.gob.es/web/unidadgrandesempresas/autorizaciones-y-requisitos" },
    ],
  },
  {
    slug: "usa",
    code: "US",
    country: "United States",
    eyebrow: "Extraordinary ability, national interest and investment",
    title: "The United States — define the status first, then choose the category",
    intro: "EB-1A, EB-2 NIW, O-1 and E-2 serve different purposes: professional standing, temporary work, permanent residence or relocation through business investment.",
    routes: [
      { name: "EB-1A", summary: "An immigrant category for people of extraordinary ability.", fit: ["There is sustained recognition", "Achievements are supported by independent sources", "Continued work in the field is logical and can be evidenced"] },
      { name: "EB-2 NIW", summary: "An immigrant category for an advanced-degree professional or a person of exceptional ability whose proposed endeavour serves the US national interest.", fit: ["The proposed work has substantial merit and national importance", "Your experience, record and resources position you to advance the work", "Waiving the job offer and labour certification requirements would benefit the United States"] },
      { name: "O-1", summary: "A temporary category for people of extraordinary ability; the petition is filed by a US employer or agent.", fit: ["A US employer or agent can act as petitioner", "Your achievements relate to the field claimed", "Planned projects and work commitments can be documented"] },
      { name: "E-2", summary: "A non-immigrant visa based on a substantial investment in a real, operating business.", fit: ["Your nationality qualifies under an E-2 treaty", "Funds have been committed to the business", "You will develop and direct the enterprise"] },
    ],
    risks: [
      { title: "Treating satisfied criteria as automatic approval", detail: "The authorities assess evidence quality, the applicant's standing and the record as a whole. A simple count of apparently satisfied criteria is insufficient." },
      { title: "Failing to separate permanent and temporary goals", detail: "EB-1A and EB-2 NIW solve a different problem from O-1. Timing, future work, family circumstances and tolerance for uncertainty all affect the choice." },
      { title: "Ignoring the petitioner structure for O-1", detail: "The preparation must establish who can file the petition, how the projects are connected and how genuine US work will be evidenced." },
      { title: "Planning E-2 before checking nationality and funds", detail: "Treaty nationality, ownership, the source and movement of capital, and the fact that funds are genuinely at risk must be checked early." },
    ],
    regulatory: "Samotsvet manages US matters end to end: strategy, profile development, evidence, referees, the petition bundle and the filing process through to the decision.",
    official: [
      { label: "USCIS: EB-1", href: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-first-preference-eb-1" },
      { label: "USCIS: EB-2", href: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2" },
      { label: "USCIS: O-1", href: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/o-1-visa-individuals-with-extraordinary-ability-or-achievement" },
      { label: "US Department of State: E visas", href: "https://travel.state.gov/content/travel/en/us-visas/employment/treaty-trader-investor-visa-e.html" },
    ],
  },
  {
    slug: "france",
    code: "FR",
    country: "France",
    eyebrow: "French Tech Visa and Passeport Talent",
    title: "France — through a project that can be explained and evidenced",
    intro: "French Tech Visa and other Passeport Talent routes cover innovative projects and business creation in France. Preparation centres on the project, business plan, funding and the applicant's experience.",
    routes: [
      { name: "French Tech Visa — innovative economic project", summary: "A Passeport Talent route for developing in France a project recognised as innovative by a public body.", fit: ["The innovation is described in concrete terms", "Your role is necessary to the project", "Resources and delivery in France are evidenced"] },
      { name: "Passeport Talent — business creation", summary: "A route for establishing and running an economic activity in France, subject to the applicable conditions.", fit: ["The figures support a viable project", "Your role and management arrangements are clear", "Financial assumptions match the supporting documents"] },
    ],
    risks: [
      { title: "Using slogans instead of explaining the product", detail: "The review requires concrete information about what has been built, how it differs and how it works for the user." },
      { title: "Failing to show why the project belongs in France", detail: "The market, partners, team, infrastructure and expected economic contribution should explain why the project is being developed in France." },
      { title: "Separating the business plan from the founder's record", detail: "The founder's experience should support the proposed role, while the budget and hiring plan should support the stated growth." },
      { title: "Combining different Passeport talent grounds", detail: "An innovative project and business creation rely on different legal grounds and evidence. One generic document set will usually weaken both." },
    ],
    regulatory: "Samotsvet leads the French project from concept to filing: the project and founder's role, business plan, supporting evidence and the filing process through to the decision.",
    official: [
      { label: "France-Visas: International talents", href: "https://france-visas.gouv.fr/en/talents-internationaux-et-attractivite-economique" },
    ],
  },
];
