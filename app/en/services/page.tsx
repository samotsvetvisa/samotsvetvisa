import type { Metadata } from "next";
import { ServicesPage } from "../../components/ServicesPage";
import { pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({ title: "Services and working formats", description: "A free initial consultation, profile audit, evidence development and full support for an immigration project.", path: "/en/services", locale: "en" });
export default function Page() { return <ServicesPage locale="en" />; }
