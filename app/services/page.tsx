import type { Metadata } from "next";
import { ServicesPage } from "../components/ServicesPage";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({ title: "Услуги и форматы работы", description: "Аудит профиля, сравнение маршрутов, аудит доказательств, развитие профиля и полное сопровождение.", path: "/services" });
export default function Page() { return <ServicesPage />; }
