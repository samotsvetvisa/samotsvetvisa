import type { Metadata } from "next";
import { HomePage } from "./components/HomePage";

export const metadata: Metadata = {
  title: { absolute: "Samotsvet — агентство релокации Никиты Самоцветова" },
  description: "Агентство Никиты Самоцветова: аудит профиля, сравнение маршрутов, развитие доказательной базы и сопровождение релокации в Великобританию, США, Испанию и Францию.",
  alternates: { canonical: "/", languages: { ru: "/", en: "/en/", "x-default": "/" } },
  openGraph: {
    title: "Samotsvet — агентство релокации Никиты Самоцветова",
    description: "Сравним маршруты, оценим доказательную базу и возьмём подготовку проекта на себя.",
    url: "/",
    type: "website",
    locale: "ru_RU",
    siteName: "Samotsvet",
    images: [{ url: "/og-samotsvet.png", width: 1200, height: 630, alt: "Samotsvet — агентство релокации Никиты Самоцветова" }],
  },
};

export default function Home() {
  return <HomePage />;
}
