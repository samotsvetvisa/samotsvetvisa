import type { Metadata } from "next";
import { HomePage } from "./components/HomePage";

export const metadata: Metadata = {
  title: { absolute: "Samotsvet — стратегия, развитие профиля и иммиграционные маршруты" },
  description: "Сравнение маршрутов, развитие профиля и подготовка доказательств для Великобритании, США, Испании и Франции.",
  alternates: { canonical: "/", languages: { ru: "/", en: "/en/", "x-default": "/" } },
  openGraph: {
    title: "Samotsvet — иммиграционная стратегия и развитие профиля",
    description: "Сравним маршруты и покажем, что уже можно доказать, а что стоит подготовить до подачи.",
    url: "/",
    type: "website",
    locale: "ru_RU",
    siteName: "Samotsvet",
    images: [{ url: "/og-samotsvet.png", width: 1200, height: 630, alt: "Samotsvet — иммиграционная стратегия" }],
  },
};

export default function Home() {
  return <HomePage />;
}
