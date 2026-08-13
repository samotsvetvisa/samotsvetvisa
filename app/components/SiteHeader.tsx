import Link from "next/link";
import { BrandLockup } from "./BrandLockup";
import { LanguageSwitch } from "./LanguageSwitch";
import { withTrailingSlash } from "../site";

export function SiteHeader({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const isEnglish = locale === "en";
  const base = isEnglish ? "/en" : "";

  return (
    <header className="site-header">
      <div className="section-shell header-inner">
        <Link className="brand-link" href={withTrailingSlash(base || "/")} aria-label={isEnglish ? "Samotsvet — home" : "Samotsvet — главная"}>
          <BrandLockup />
        </Link>
        <nav className="desktop-nav" aria-label={isEnglish ? "Primary navigation" : "Главная навигация"}>
          <Link href={withTrailingSlash(`${base}/#directions`)}>{isEnglish ? "Destinations" : "Направления"}</Link>
          <Link href={withTrailingSlash(`${base}/#process`)}>{isEnglish ? "How we work" : "Как работаем"}</Link>
          <Link href={withTrailingSlash(`${base}/#results`)}>{isEnglish ? "Results" : "Результаты"}</Link>
          <Link href={withTrailingSlash(`${base}/blog`)}>{isEnglish ? "Insights" : "Блог"}</Link>
          <Link href={withTrailingSlash(`${base}/about`)}>{isEnglish ? "About" : "О нас"}</Link>
        </nav>
        <LanguageSwitch />
        <Link className="header-cta" href={withTrailingSlash(`${base}/assessment`)}>{isEnglish ? "Profile assessment" : "Аудит профиля"}</Link>
      </div>
    </header>
  );
}
