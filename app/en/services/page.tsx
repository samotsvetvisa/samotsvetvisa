import type { Metadata } from "next";
import { ServicesPage } from "../../components/ServicesPage";
import { pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({ title: "Services and working formats", description: "Options assessment, route comparison, evidence review, profile development and full support.", path: "/en/services", locale: "en" });
export default function Page() { return <ServicesPage locale="en" />; }
