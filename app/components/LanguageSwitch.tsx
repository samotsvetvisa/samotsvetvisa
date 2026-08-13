"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { withTrailingSlash } from "../site";

export function LanguageSwitch() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const ruHref = isEnglish ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const translatedArticles = new Set(["strong-profile-vs-strong-case", "usa-route-comparison", "spain-digital-nomad-precheck"]);
  const articleSlug = pathname.match(/^\/blog\/([^/]+)$/)?.[1];
  const enHref = isEnglish ? pathname : articleSlug && !translatedArticles.has(articleSlug) ? "/en/blog" : pathname === "/" ? "/en" : `/en${pathname}`;

  return (
    <div className="language-switch" aria-label={isEnglish ? "Select language" : "Выбор языка"}>
      <Link href={withTrailingSlash(ruHref)} className={!isEnglish ? "is-active" : undefined} lang="ru" hrefLang="ru">RU</Link>
      <span aria-hidden="true">/</span>
      <Link href={withTrailingSlash(enHref)} className={isEnglish ? "is-active" : undefined} lang="en" hrefLang="en">EN</Link>
    </div>
  );
}
