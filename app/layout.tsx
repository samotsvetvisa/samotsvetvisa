import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AttributionLinker } from "./components/AttributionLinker";
import { LanguageAttribute } from "./components/LanguageAttribute";
import { CONTACT_EMAIL, LEGAL_NAME, OG_IMAGE, SITE_NAME, SITE_URL, TELEGRAM_URL } from "./site";

const geist = Geist({ variable: "--font-geist", subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Samotsvet — иммиграция и релокация полного цикла", template: "%s | Samotsvet" },
  description: "Агентство иммиграции и релокации полного цикла для специалистов, предпринимателей и семей: Великобритания, Испания, США и Франция.",
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
    title: "Samotsvet — иммиграция и релокация полного цикла",
    description: "Стратегия, усиление профиля, доказательства, партнеры и сопровождение подачи.",
    url: "/",
    type: "website",
    locale: "ru_RU",
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Samotsvet — иммиграция и релокация" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samotsvet — иммиграция и релокация полного цикла",
    description: "Стратегия, усиление профиля, доказательства, партнеры и сопровождение подачи.",
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
    description: "Агентство полного цикла: стратегия, усиление профиля, доказательства, партнеры и сопровождение подачи.",
  };

  return (
    <html lang="ru">
      <body className={geist.variable}>
        <Script src="/form-config.js" strategy="beforeInteractive" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <AttributionLinker />
        <LanguageAttribute />
        {children}
      </body>
    </html>
  );
}
