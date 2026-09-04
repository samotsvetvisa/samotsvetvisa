import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AttributionLinker } from "./components/AttributionLinker";
import { LanguageAttribute } from "./components/LanguageAttribute";
import { TelegramButton } from "./components/TelegramButton";
import { CONTACT_EMAIL, FOUNDER_NAME, LEGAL_NAME, OG_IMAGE, SITE_NAME, SITE_URL, TELEGRAM_URL } from "./site";

const geist = Geist({ variable: "--font-geist", subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Samotsvet — агентство релокации Никиты Самоцветова", template: "%s | Samotsvet" },
  description: "Агентство Никиты Самоцветова для специалистов, предпринимателей и семей: аудит профиля, сравнение маршрутов, развитие доказательств и сопровождение релокации.",
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Samotsvet — агентство релокации Никиты Самоцветова",
    description: "Персональная оценка стратегии и единая команда для развития профиля, доказательств и сопровождения подачи.",
    url: "/",
    type: "website",
    locale: "ru_RU",
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Samotsvet — иммиграция и релокация" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samotsvet — агентство релокации Никиты Самоцветова",
    description: "Персональная оценка стратегии и единая команда для развития профиля, доказательств и сопровождения подачи.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organisation`,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/samotsvet-logo.svg`,
    email: CONTACT_EMAIL,
    sameAs: [TELEGRAM_URL],
    founder: { "@id": `${SITE_URL}/about/#nikita` },
    description: "Агентство полного цикла: стратегия, усиление профиля, доказательства, партнеры и сопровождение подачи.",
  };
  const founder = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/about/#nikita`,
    name: FOUNDER_NAME,
    url: `${SITE_URL}/about/#nikita`,
    image: `${SITE_URL}/nikita-founder-white-v3.webp`,
    jobTitle: "Основатель и руководитель практики Samotsvet",
    worksFor: { "@id": `${SITE_URL}/#organisation` },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Leeds" },
    knowsAbout: ["Immigration strategy", "Relocation", "Professional profile development", "Immigration evidence"],
  };

  return (
    <html lang="ru">
      <body className={geist.variable}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founder) }} />
        <AttributionLinker />
        <LanguageAttribute />
        {children}
        <TelegramButton />
      </body>
    </html>
  );
}
