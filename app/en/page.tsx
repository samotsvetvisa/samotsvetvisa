import type { Metadata } from "next";
import { HomePage } from "../components/HomePage";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "Samotsvet — Nikita Samotsvetov's relocation agency",
  description: "Nikita Samotsvetov's agency for profile audits, route comparison, evidence development and relocation support across the United Kingdom, United States, Spain and France.",
  path: "/en",
  locale: "en",
});

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
