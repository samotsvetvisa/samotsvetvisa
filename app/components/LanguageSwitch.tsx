"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { withTrailingSlash } from "../site";

export function LanguageSwitch() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const isNotFound = pathname.includes("_not-found");
  const ruHref = isNotFound ? "/" : isEnglish ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const enHref = isNotFound ? "/en" : isEnglish ? pathname : pathname === "/" ? "/en" : `/en${pathname}`;

  return (
    <div className="language-switch" aria-label={isEnglish ? "Select language" : "Выбор языка"}>
      <Link href={withTrailingSlash(ruHref)} className={!isEnglish ? "is-active" : undefined} lang="ru" hrefLang="ru">RU</Link>
      <span aria-hidden="true">/</span>
      <Link href={withTrailingSlash(enHref)} className={isEnglish ? "is-active" : undefined} lang="en" hrefLang="en">EN</Link>
    </div>
  );
}
