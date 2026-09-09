import type { Metadata } from "next";
import { ServicesPage } from "../components/ServicesPage";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({ title: "Услуги и форматы работы", description: "Бесплатная первичная консультация, аудит профиля, развитие доказательств и полное сопровождение иммиграционного проекта.", path: "/services" });
export default function Page() { return <ServicesPage />; }
