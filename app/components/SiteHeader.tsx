import Link from "next/link";
import { BrandLockup } from "./BrandLockup";
import { LanguageSwitch } from "./LanguageSwitch";

export function SiteHeader({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const isEnglish = locale === "en";
  const base = isEnglish ? "/en" : "";

  return (
    <header className="site-header">
      <div className="section-shell header-inner">
        <Link className="brand-link" href={base || "/"} aria-label={isEnglish ? "Samotsvet — home" : "Samotsvet — главная"}>
          <BrandLockup />
        </Link>
        <nav className="desktop-nav" aria-label={isEnglish ? "Primary navigation" : "Главная навигация"}>
          <Link href={`${base}/#directions`}>{isEnglish ? "Destinations" : "Направления"}</Link>
          <Link href={`${base}/#process`}>{isEnglish ? "How we work" : "Как работаем"}</Link>
          <Link href={`${base}/#results`}>{isEnglish ? "Results" : "Результаты"}</Link>
          <Link href={`${base}/blog`}>{isEnglish ? "Insights" : "Блог"}</Link>
          <Link href={`${base}/about`}>{isEnglish ? "About" : "О нас"}</Link>
        </nav>
        <LanguageSwitch />
        <Link className="header-cta" href={`${base}/assessment`}>
          <span className="cta-full">{isEnglish ? "Get a profile assessment" : "Получить аудит профиля"}</span>
          <span className="cta-short">{isEnglish ? "Profile assessment" : "Аудит профиля"}</span>
        </Link>
      </div>
    </header>
  );
}
