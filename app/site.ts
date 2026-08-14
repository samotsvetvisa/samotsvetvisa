import type { Metadata } from "next";

export const SITE_URL = "https://samotsvetvisa.com";
export const SITE_NAME = "Samotsvet";
export const LEGAL_NAME = "Индивидуальный предприниматель Самоцветов Никита Андреевич";
export const FOUNDER_NAME = "Никита Самоцветов";
export const OG_IMAGE = "/og-samotsvet.png";
export const CONTACT_EMAIL = "karfagen38@gmail.com";
export const TELEGRAM_HANDLE = "@samotsvetvisa";
export const TELEGRAM_URL = "https://t.me/samotsvetvisa";

export const SERVICE_MODEL_RU = "Samotsvet ведет проект целиком: анализирует профиль, выбирает стратегию, составляет план усиления, собирает доказательства и проверяет их на противоречия, готовит формы, координирует партнеров и сопровождает подачу до решения. За единый план, сроки и качество подготовки отвечает наша команда.";
export const SERVICE_MODEL_EN = "Samotsvet manages the project as a whole: profile analysis, strategy, a development plan, evidence collection and consistency checks, forms, specialist partners and filing support through to the decision. Our team remains responsible for the single plan, timetable and quality of preparation.";

export const SERVICE_PRICES = [
  { code: "UK", countryRu: "Великобритания", countryEn: "United Kingdom", price: "от €5 000", priceEn: "from €5,000", timelineRu: "от 2 месяцев", timelineEn: "from 2 months" },
  { code: "US", countryRu: "США", countryEn: "United States", price: "от €8 000", priceEn: "from €8,000", timelineRu: "от 1 месяца", timelineEn: "from 1 month", noteRu: "Рассмотрение ведомством зависит от маршрута — подробные сроки указаны на странице США.", noteEn: "Government processing depends on the route — see the US page for route-specific timing." },
  { code: "ES", countryRu: "Испания", countryEn: "Spain", price: "от €1 600", priceEn: "from €1,600", timelineRu: "от 1 месяца", timelineEn: "from 1 month", noteRu: "Стоимость ниже, чем по другим направлениям: маршрут короче и не требует доказательств профессионального признания. Результат — вид на жительство для удаленной работы.", noteEn: "The fee is lower because the route is shorter and does not require evidence of professional recognition. The outcome is residence for international remote work." },
  { code: "FR", countryRu: "Франция", countryEn: "France", price: "от €6 000", priceEn: "from €6,000", timelineRu: "от 2 месяцев", timelineEn: "from 2 months" },
] as const;

export function withTrailingSlash(path: string) {
  if (!path.startsWith("/") || path === "/") return path;
  const match = path.match(/^([^?#]*)(.*)$/);
  if (!match) return path;
  const [, pathname, suffix] = match;
  return `${pathname.endsWith("/") ? pathname : `${pathname}/`}${suffix}`;
}

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
  const canonicalPath = withTrailingSlash(path);
  const ruPath = withTrailingSlash(isEnglish ? path.replace(/^\/en/, "") || "/" : path);
  const enPath = withTrailingSlash(isEnglish ? path : path === "/" ? "/en" : `/en${path}`);
  const openGraph = type === "article"
    ? {
        title: socialTitle,
        description,
        url: canonicalPath,
        type: "article" as const,
        locale: isEnglish ? "en_GB" : "ru_RU",
        siteName: SITE_NAME,
        images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: socialTitle }],
      }
    : {
        title: socialTitle,
        description,
        url: canonicalPath,
        type: "website" as const,
        locale: isEnglish ? "en_GB" : "ru_RU",
        siteName: SITE_NAME,
        images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: socialTitle }],
      };

  return {
    title,
    description,
    alternates: hasAlternate
      ? { canonical: canonicalPath, languages: { ru: ruPath, en: enPath, "x-default": ruPath } }
      : { canonical: canonicalPath, languages: { [locale]: canonicalPath, "x-default": canonicalPath } },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
