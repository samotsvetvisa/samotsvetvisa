import type { Metadata } from "next";
import { ComparePage } from "../../components/ComparePage";
import { pageMetadata } from "../../site";

export const metadata: Metadata = pageMetadata({ title: "Immigration route comparison", description: "Compare Global Talent, Innovator Founder, EB-1A, EB-2 NIW, O-1, E-2, Digital Nomad and French Talent routes.", path: "/en/compare", locale: "en" });
export default function Page() { return <ComparePage locale="en" />; }
