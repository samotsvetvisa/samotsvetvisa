import type { Metadata } from "next";
import { HomePage } from "./components/HomePage";

export const metadata: Metadata = {
  title: { absolute: "Samotsvet: иммиграция и релокация под ключ" },
  description: "Агентство полного цикла: оценка шансов, выбор программы, развитие профиля, подготовка документов, подача и сервисы для релокации.",
  alternates: { canonical: "/", languages: { ru: "/", en: "/en/", "x-default": "/" } },
  openGraph: {
    title: "Samotsvet: иммиграция и релокация под ключ",
    description: "Сравним программы, оценим доказательства и проведем проект от стратегии до переезда.",
    url: "/",
    type: "website",
    locale: "ru_RU",
    siteName: "Samotsvet",
    images: [{ url: "/og-samotsvet.png", width: 1200, height: 630, alt: "Samotsvet: иммиграция и релокация под ключ" }],
  },
};

export default function Home() {
  return <HomePage />;
}
