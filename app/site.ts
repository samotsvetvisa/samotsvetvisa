import type { Metadata } from "next";

export const SITE_URL = "https://samotsvetvisa.com";
export const SITE_NAME = "Samotsvet";
export const LEGAL_NAME = "Индивидуальный предприниматель Самоцветов Никита Андреевич";
export const FOUNDER_NAME = "Никита Самоцветов";
export const OG_IMAGE = "/og-samotsvet.png";
export const CONTACT_EMAIL = "karfagen38@gmail.com";
export const TELEGRAM_HANDLE = "@samotsvetvisa";
export const TELEGRAM_URL = "https://t.me/samotsvetvisa";

export const SERVICE_PRICES = [
  { code: "UK", countryRu: "Великобритания", countryEn: "United Kingdom", price: "от €5 000", priceEn: "from €5,000", timelineRu: "от 2 месяцев", timelineEn: "from 2 months" },
  { code: "US", countryRu: "США", countryEn: "United States", price: "от $8 000", priceEn: "from $8,000", timelineRu: "от 1 месяца", timelineEn: "from 1 month" },
  { code: "ES", countryRu: "Испания", countryEn: "Spain", price: "от €1 600", priceEn: "from €1,600", timelineRu: "от 1 месяца", timelineEn: "from 1 month" },
  { code: "FR", countryRu: "Франция", countryEn: "France", price: "от €6 000", priceEn: "from €6,000", timelineRu: "от 2 месяцев", timelineEn: "from 2 months" },
] as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  locale?: "ru" | "en";
  hasAlternate?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  locale = "ru",
  hasAlternate = true,
}: PageMetadataOptions): Metadata {
  const socialTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const isEnglish = locale === "en";
  const ruPath = isEnglish ? path.replace(/^\/en/, "") || "/" : path;
  const enPath = isEnglish ? path : path === "/" ? "/en" : `/en${path}`;
  const openGraph = type === "article"
    ? {
        title: socialTitle,
        description,
        url: path,
        type: "article" as const,
        locale: isEnglish ? "en_GB" : "ru_RU",
        siteName: SITE_NAME,
        images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: socialTitle }],
      }
    : {
        title: socialTitle,
        description,
        url: path,
        type: "website" as const,
        locale: isEnglish ? "en_GB" : "ru_RU",
        siteName: SITE_NAME,
        images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: socialTitle }],
      };

  return {
    title,
    description,
    alternates: hasAlternate ? { canonical: path, languages: { ru: ruPath, en: enPath } } : { canonical: path },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
