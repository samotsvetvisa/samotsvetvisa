import type { Metadata } from "next";
import { ComparePage } from "../components/ComparePage";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({ title: "Сравнение иммиграционных программ", description: "Отдельные карточки Global Talent, Innovator Founder, EB-1A, EB-2 NIW, O-1, E-2, Digital Nomad и французских Talent-маршрутов.", path: "/compare" });
export default function Page() { return <ComparePage />; }
