"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { withTrailingSlash } from "../site";

export function LanguageSwitch() {
  const pathname = usePathname();
  const [contextQuery, setContextQuery] = useState("");
  const isEnglish = pathname.startsWith("/en");
  const isNotFound = pathname.includes("_not-found");
  const ruHref = isNotFound ? "/" : isEnglish ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const enHref = isNotFound ? "/en" : isEnglish ? pathname : pathname === "/" ? "/en" : `/en${pathname}`;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const source = new URLSearchParams(window.location.search);
      const safe = new URLSearchParams();
      for (const key of ["country", "program"]) {
        const value = source.get(key);
        if (value) safe.set(key, value.slice(0, 100));
      }
      const query = safe.toString();
      setContextQuery(query ? `?${query}` : "");
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div className="language-switch" aria-label={isEnglish ? "Select language" : "Выбор языка"}>
      <Link href={`${withTrailingSlash(ruHref)}${contextQuery}`} className={!isEnglish ? "is-active" : undefined} lang="ru" hrefLang="ru">RU</Link>
      <span aria-hidden="true">/</span>
      <Link href={`${withTrailingSlash(enHref)}${contextQuery}`} className={isEnglish ? "is-active" : undefined} lang="en" hrefLang="en">EN</Link>
    </div>
  );
}
