import type { Metadata } from "next";
import { GlobalTalentCriteriaPage } from "../../components/GlobalTalentCriteriaPage";
import { pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({ title: "UK Global Talent criteria map", description: "An open digital-technology Global Talent criteria map covering grounds, evidence, bundle architecture and common weaknesses.", path: "/en/global-talent-criteria", locale: "en" });

export default function Page() { return <GlobalTalentCriteriaPage locale="en" />; }
