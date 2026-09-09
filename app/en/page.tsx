import type { Metadata } from "next";
import { HomePage } from "../components/HomePage";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "Samotsvet: end-to-end immigration and relocation",
  description: "A free initial consultation, programme selection, profile development, document preparation, filing and practical relocation support.",
  path: "/en",
  locale: "en",
});

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
