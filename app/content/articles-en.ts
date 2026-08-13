import type { Article } from "./articles";

export const articlesEn: Article[] = [
  {
    slug: "strong-profile-vs-strong-case",
    tag: "United Kingdom · Global Talent",
    title: "How to turn a strong professional record into a convincing application",
    description: "How to evidence a specialist's achievements in a Global Talent application.",
    reading: "7 min read",
    published: "2026-08-10",
    author: "Nikita Samotsvetov",
    lead: "A convincing application explains the professional's contribution, recognition and position in the sector through verifiable evidence.",
    relatedCountry: "uk",
    sections: [
      {
        title: "How a career becomes evidence for an application",
        paragraphs: [
          "A career develops over years and may be obvious to people who know the sector. The assessing body sees a limited set of documents, so every important connection needs to be made explicit.",
          "The evidence should prove a small number of important statements and make the applicant's role in each one clear.",
        ],
      },
      {
        title: "What each item of evidence must establish",
        paragraphs: ["For every material achievement, we check the event itself, the applicant's personal role and the significance of the result."],
        points: ["What happened and when", "What the applicant personally did", "Why the result matters and who can confirm it"],
      },
      {
        title: "Where applications tend to break down",
        paragraphs: [
          "Applications are often weakened by internal contradictions: a referee attributes unsupported work, figures differ between sources, or the evidence describes the company without establishing the individual's contribution.",
          "We identify and resolve those gaps before filing.",
        ],
      },
    ],
  },
  {
    slug: "usa-route-comparison",
    tag: "United States · Route comparison",
    title: "EB-1A, EB-2 NIW or O-1: how to compare the routes",
    description: "How to choose a US route by looking at the status required, available evidence and proposed work.",
    reading: "9 min read",
    published: "2026-08-11",
    author: "Nikita Samotsvetov",
    lead: "The categories may use some of the same evidence, but they have different purposes, filing structures and requirements for future activity.",
    relatedCountry: "usa",
    sections: [
      {
        title: "Start with the outcome",
        paragraphs: ["EB-1A and EB-2 NIW may lead to permanent residence. O-1 is a temporary work category. We begin with the required status and the work planned in the United States, then compare the criteria."],
      },
      {
        title: "Then check the filing structure",
        paragraphs: ["Each route has its own filing structure, future-work requirements and procedural constraints."],
        points: ["Who will file the petition", "How future work or the proposed endeavour is described", "Which independent evidence is available", "How the route fits the timing and family plans"],
      },
      {
        title: "Assess the complete record",
        paragraphs: ["Matching several listed criteria opens the analysis. The conclusion depends on the quality of the evidence, the strength of the record as a whole and the connection between past work and future activity."],
      },
    ],
  },
  {
    slug: "spain-digital-nomad-precheck",
    tag: "Spain · Remote work",
    title: "What to check before applying for Spain's international remote work visa",
    description: "An early review of the work arrangements, income and family documents required for Spain.",
    reading: "6 min read",
    published: "2026-08-12",
    author: "Nikita Samotsvetov",
    lead: "Many expensive mistakes occur before filing, when documents are translated and apostilled before anyone checks whether they describe the same working arrangement.",
    relatedCountry: "spain",
    sections: [
      {
        title: "The contract and actual work must align",
        paragraphs: ["The contract, role, invoices, payments and description of remote work must agree. Translating a contradictory bundle fixes the problem in place."],
      },
      {
        title: "Check four areas before spending money",
        paragraphs: ["An early review saves time and avoids having to remake documents."],
        points: ["The relationship with the foreign company or clients", "Income and its regularity", "Social security and health insurance", "Family composition and civil documents"],
      },
      {
        title: "Review the filing route separately",
        paragraphs: ["A consular visa and a residence authorisation filed from Spain have different procedural contexts. The applicant's location, the period of status sought and the evidence required should be considered in advance."],
      },
    ],
  },
].sort((left, right) => right.published.localeCompare(left.published));
