import type { Metadata } from "next";
import { HomePage } from "../components/HomePage";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "Immigration strategy and profile development",
  description: "Route comparison, profile development and evidence preparation for the United Kingdom, United States, Spain and France.",
  path: "/en",
  locale: "en",
});

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
