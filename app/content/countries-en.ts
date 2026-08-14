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
        anchor: "global-talent",
        name: "Global Talent",
        summary: "A route for leaders and potential leaders in digital technology, science, research, arts and culture.",
        fit: ["Professional achievements are supported by independent sources", "Your role and measurable contribution are clear", "There is evidence of recognition by the professional community"],
      },
      {
        anchor: "innovator-founder",
        name: "Innovator Founder",
        summary: "A route for a founder establishing and developing an endorsed innovative business in the UK.",
        fit: ["The idea is materially different from existing solutions", "The business can operate sustainably and grow", "There is a credible development plan and a clear role for the founder"],
      },
    ],
    riskGroups: [
      {
        title: "Global Talent",
        risks: [
          { title: "Relying only on internal company results", detail: "Strong results inside an employer do not by themselves demonstrate professional recognition. Independent sources, a clear sense of scale and a direct link to your work are needed." },
          { title: "Leaving your contribution inside a team result", detail: "The name of a major project does not explain what the applicant did. The role, decisions and measurable contribution should be evidenced separately." },
          { title: "Using references built from general praise", detail: "Descriptions such as ‘leading specialist’ carry little weight without specific examples, dates, outcomes and an explanation of how the referee knows the applicant's work." },
          { title: "Allowing contradictions between sources", detail: "Different roles, periods, figures and versions of the same event undermine the record as a whole. We check the documents as one system before filing." },
        ],
      },
      {
        title: "Innovator Founder",
        risks: [
          { title: "Presenting an ordinary service business as innovative", detail: "Innovator Founder requires a specific point of difference, a viable business and a credible route to growth. General technology language is insufficient." },
          { title: "Reducing innovation to marketing language", detail: "The proposition needs a new solution, an explanation of how it works and a meaningful distinction from available alternatives. A polished deck cannot replace product logic." },
          { title: "Separating growth from the financial model", detail: "The scaling plan should align with the budget, team, market and founder's role. Inconsistent forecasts raise questions about viability." },
          { title: "Treating the endorsing body as a formality", detail: "Its criteria, checkpoints and evidence requirements shape the project from the outset." },
        ],
      },
    ],
    regulatory: "Samotsvet manages the UK matter as one project: strategy, profile development, evidence, references, final bundle review and the filing process through to the decision.",
    official: [
      { label: "GOV.UK: Global Talent", href: "https://www.gov.uk/global-talent" },
      { label: "GOV.UK: Global Talent in digital technology", href: "https://www.gov.uk/global-talent-digital-technology" },
      { label: "GOV.UK: Innovator Founder", href: "https://www.gov.uk/innovator-founder-visa" },
    ],
    processing: {
      title: "Timing once the bundle is ready",
      headers: ["Stage", "Indicative time", "What to allow for"],
      rows: [
        ["Global Talent endorsement", "2–8 weeks", "Two weeks for some fast-track research routes, five weeks for peer review, five to eight weeks for digital technology and up to eight weeks for arts and culture"],
        ["Global Talent visa decision", "3 weeks outside the UK / 8 weeks inside", "Priority services apply to the visa stage. A first application relying on endorsement must be filed within three months of the endorsement letter"],
        ["Innovator Founder visa decision", "3 weeks outside the UK / 8 weeks inside", "The period starts once the online application, identity check and documents are complete; time for endorsement is additional"],
        ["Overall Global Talent guide", "2–4 months", "An indicative period after the evidence and documents are ready to file"],
      ],
      note: "Government processing times exclude profile development, evidence preparation, biometric appointments and any request for further information.",
    },
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
        anchor: "digital-nomad-visa",
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
      { label: "BOE: Ley 14/2013", href: "https://www.boe.es/buscar/act.php?id=BOE-A-2013-10074" },
    ],
    processing: {
      title: "Timing and outcome depend on the filing route",
      headers: ["Route", "Time", "Outcome and detail"],
      rows: [
        ["Through a consulate", "Statutory period: 10 business days", "The practical period depends on the consulate and any checks. The result is a visa valid for up to one year"],
        ["Through UGE from Spain", "Statutory period: 20 days", "Further-document requests extend the practical period. The result is a three-year authorisation; positive administrative silence applies"],
        ["TIE after approval", "Within 30 days", "The application for the foreigner's identity card is filed after approval"],
      ],
      note: "An applicant may use UGE while legally present in Spain, including within a permitted tourist stay. The key condition is lawful status on the filing date.",
    },
  },
  {
    slug: "usa",
    code: "US",
    country: "United States",
    eyebrow: "Extraordinary ability, national interest and investment",
    title: "The United States — define the status first, then choose the category",
    intro: "EB-1A, EB-2 NIW, O-1 and E-2 serve different purposes: professional standing, temporary work, permanent residence or relocation through business investment.",
    routes: [
      { anchor: "eb-1a", name: "EB-1A", summary: "An immigrant category for people of extraordinary ability.", fit: ["There is sustained recognition", "Achievements are supported by independent sources", "Continued work in the field is logical and can be evidenced"] },
      { anchor: "eb-2-niw", name: "EB-2 NIW", summary: "An immigrant category for an advanced-degree professional or a person of exceptional ability whose proposed endeavour serves the US national interest.", fit: ["The proposed work has substantial merit and national importance", "Your experience, record and resources position you to advance the work", "Waiving the job offer and labour certification requirements would benefit the United States"] },
      { anchor: "o-1", name: "O-1", summary: "A temporary category for people of extraordinary ability; the petition is filed by a US employer or agent.", fit: ["A US employer or agent can act as petitioner", "Your achievements relate to the field claimed", "Planned projects and work commitments can be documented"] },
      { anchor: "e-2", name: "E-2", summary: "A non-immigrant visa based on a substantial investment in a real, operating business.", fit: ["Your nationality qualifies under an E-2 treaty", "Funds have been committed to the business", "You will develop and direct the enterprise"] },
    ],
    riskGroups: [
      {
        title: "EB-1A",
        risks: [
          { title: "Treating the number of criteria as the final assessment", detail: "After considering the threshold criteria, USCIS assesses the record as a whole and the sustained nature of the recognition. Clear reasoning and evidence quality matter more than volume." },
          { title: "Using only internal evidence for achievements", detail: "Employer records can establish facts but rarely show the wider level of recognition. Public and independent sources strengthen the central claims." },
          { title: "Losing the individual contribution inside company success", detail: "Business growth, investment or a well-known product must be linked to the applicant's own decisions and supported by documents." },
          { title: "Describing future work only as a job title", detail: "The filing should show an intention to continue work in the claimed field in the United States and connect that plan with the evidenced achievements." },
        ],
      },
      {
        title: "EB-2 NIW",
        risks: [
          { title: "Defining the proposed endeavour too broadly", detail: "An important sector does not explain the proposed activity. The tasks, delivery model, expected result and implementation horizon need to be concrete." },
          { title: "Substituting value to one company for national importance", detail: "A project may have substantial commercial value while still requiring a separate explanation of its scale and wider effects." },
          { title: "Disconnecting past achievements from the future plan", detail: "Experience and awards work more effectively when they explain why the applicant is well positioned to advance the proposed work in the United States." },
          { title: "Leaving resources and initial action unsupported", detail: "Partners, pilots, funding, a team and work already begun demonstrate readiness. Intentions alone provide limited support." },
        ],
      },
      {
        title: "O-1",
        risks: [
          { title: "Failing to identify a US petitioner", detail: "O-1 does not allow self-petitioning. An employer or agent, their authority and their connection to the proposed projects must be established early." },
          { title: "Separating achievements from the proposed field of work", detail: "Past recognition should relate to the field in which the applicant will work in the United States. A change of focus needs a reasoned explanation." },
          { title: "Leaving future projects without supporting documents", detail: "Letters, agreements, an itinerary and event descriptions should demonstrate genuine work, timing and the applicant's role." },
          { title: "Stopping at a formal list of criteria", detail: "Meeting individual criteria does not by itself establish sustained acclaim. USCIS assesses the level of achievement and the record as a whole." },
        ],
      },
      {
        title: "E-2",
        risks: [
          { title: "Starting before checking treaty nationality", detail: "E-2 is available to nationals of treaty countries. The principal applicant's nationality should be checked before the transaction is designed." },
          { title: "Failing to document the source and path of funds", detail: "The lawful source of capital and its movement from the owner into the US business should be traceable through documents." },
          { title: "Leaving the investment uncommitted", detail: "Funds should be invested or irrevocably committed and genuinely at commercial risk. A bank balance alone is insufficient." },
          { title: "Presenting a marginal business without a growth plan", detail: "The enterprise should be operating or ready to launch, and the model should demonstrate viability, the applicant's control and development beyond minimal self-support." },
        ],
      },
    ],
    regulatory: "Samotsvet manages US matters end to end: strategy, profile development, evidence, referees, the petition bundle and the filing process through to the decision.",
    processing: {
      title: "Route-specific processing times",
      headers: ["Route", "Premium processing", "Standard processing"],
      rows: [
        ["O-1", "15 calendar days", "2–4 months"],
        ["EB-1A (I-140)", "15 business days", "6–12 months"],
        ["EB-2 NIW (I-140)", "45 business days", "Longer than EB-1A"],
        ["E-2", "Depends on the consulate", "Depends on the consulate"],
      ],
      note: "The premium-processing fee for Form I-140 is $2,965 from 9 January 2026.",
    },
    important: {
      title: "Important for Russian citizens",
      paragraphs: [
        "There is no priority-date backlog in EB-1: the category remains current for all countries except India and China. Self-petitioning under EB-1A remains available.",
        "Consular processing takes place in third countries, adding several months. Applicants working in sensitive technology fields are more likely to undergo additional administrative processing.",
      ],
    },
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
    eyebrow: "Carte de sejour Talent",
    title: "France — through a project that can be explained and evidenced",
    intro: "The multi-year ‘talent’ residence permit (known as ‘passeport talent’ until June 2025) covers entrepreneurial and innovative projects in France. Decree no. 2025-539 consolidated six former grounds into two categories; founders and entrepreneurs use ‘talent – porteur de projet’.",
    routes: [
      { anchor: "french-tech-visa", name: "Talent – porteur de projet: innovative project", summary: "This category supports a project in France that has been recognised as innovative by an authorised public body. Selection through a recognised organisation under the French Tech Visa programme can simplify the process, but French Tech Visa is a programme label rather than a separate immigration status.", fit: ["The innovation is described in concrete terms", "Your role is necessary to the project", "Resources and delivery in France are evidenced"] },
      { anchor: "talent-business", name: "Talent – porteur de projet: business creation", summary: "The same category on a different ground: establishing and operating a business in France, subject to the investment, qualification and project-viability requirements.", fit: ["The figures support a viable project", "Your role and management arrangements are clear", "Financial assumptions match the supporting documents"] },
    ],
    risks: [
      { title: "Using slogans instead of explaining the product", detail: "The review requires concrete information about what has been built, how it differs and how it works for the user." },
      { title: "Failing to show why the project belongs in France", detail: "The market, partners, team, infrastructure and expected economic contribution should explain why the project is being developed in France." },
      { title: "Separating the business plan from the founder's record", detail: "The founder's experience should support the proposed role, while the budget and hiring plan should support the stated growth." },
      { title: "Combining different grounds within talent – porteur de projet", detail: "An innovative project and business creation rely on different grounds and evidence. One generic document set will usually weaken both." },
    ],
    regulatory: "Samotsvet leads the French project from concept to filing: the project and founder's role, business plan, supporting evidence and the filing process through to the decision.",
    official: [
      { label: "France-Visas: International talents", href: "https://france-visas.gouv.fr/en/talents-internationaux-et-attractivite-economique" },
    ],
    processing: {
      title: "Indicative timing",
      headers: ["Stage", "Indicative time", "What to allow for"],
      rows: [
        ["DREETS review", "10–20 business days", "An indicative period for a correct bundle where a DREETS opinion is required"],
        ["Consulate and prefecture", "Depends on the place of filing", "A working estimate is set once the ground, consulate and department are known"],
      ],
      note: "The full timetable includes project preparation, any required validation, the consular stage and formalities in France.",
    },
  },
];
