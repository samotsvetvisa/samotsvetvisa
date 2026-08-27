"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandLockup } from "./BrandLockup";
import { HashLink } from "./HashLink";
import { LanguageSwitch } from "./LanguageSwitch";
import { withTrailingSlash } from "../site";

const destinations = [
  { slug: "uk", code: "UK", ru: "Великобритания", en: "United Kingdom" },
  { slug: "spain", code: "ES", ru: "Испания", en: "Spain" },
  { slug: "usa", code: "US", ru: "США", en: "United States" },
  { slug: "france", code: "FR", ru: "Франция", en: "France" },
] as const;

export function SiteHeader({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const isEnglish = locale === "en";
  const base = isEnglish ? "/en" : "";
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [showStickyAudit, setShowStickyAudit] = useState(false);
  const [closingAreaVisible, setClosingAreaVisible] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : previousOverflow;
    return () => { document.body.style.overflow = previousOverflow; };
  }, [menuOpen]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".closing-cta, .site-footer"));
    if (!elements.length || !("IntersectionObserver" in window)) return;
    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
      setClosingAreaVisible(visible.size > 0);
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const isMobileLayout = window.matchMedia("(max-width: 980px)").matches;
      setShowStickyAudit(currentScrollY > window.innerHeight * 0.8);

      if (!isMobileLayout || menuOpen || currentScrollY < 90) {
        setHeaderHidden(false);
      } else {
        const movement = currentScrollY - lastScrollY.current;
        if (Math.abs(movement) > 8) setHeaderHidden(movement > 0);
      }
      lastScrollY.current = currentScrollY;
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const assessmentPath = withTrailingSlash(`${base}/assessment`);
  const isAssessmentPage = pathname === assessmentPath || pathname === assessmentPath.slice(0, -1);

  return (
    <>
      <header className={`site-header${headerHidden ? " site-header--hidden" : ""}${menuOpen ? " site-header--menu-open" : ""}`}>
        <div className="section-shell header-inner">
          <Link className="brand-link" href={withTrailingSlash(base || "/")} aria-label={isEnglish ? "Samotsvet — home" : "Samotsvet — главная"} onClick={closeMenu}>
            <BrandLockup />
          </Link>
          <nav className="desktop-nav" aria-label={isEnglish ? "Primary navigation" : "Главная навигация"}>
            <HashLink href={withTrailingSlash(`${base}/#directions`)}>{isEnglish ? "Destinations" : "Направления"}</HashLink>
            <HashLink href={withTrailingSlash(`${base}/#services`)}>{isEnglish ? "Services" : "Услуги"}</HashLink>
            <HashLink href={withTrailingSlash(`${base}/#process`)}>{isEnglish ? "How we work" : "Как работаем"}</HashLink>
            <HashLink href={withTrailingSlash(`${base}/#results`)}>{isEnglish ? "Experience" : "Опыт"}</HashLink>
            <Link href={withTrailingSlash(`${base}/blog`)}>{isEnglish ? "Insights" : "Блог"}</Link>
            <Link href={withTrailingSlash(`${base}/about`)}>{isEnglish ? "About" : "О нас"}</Link>
          </nav>
          <LanguageSwitch />
          <Link className="header-cta" href={assessmentPath}>{isEnglish ? "Profile audit" : "Аудит профиля"}</Link>
          <button
            className={`mobile-menu-toggle${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? (isEnglish ? "Close menu" : "Закрыть меню") : (isEnglish ? "Open menu" : "Открыть меню")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="section-shell mobile-menu-nav" aria-label={isEnglish ? "Mobile navigation" : "Мобильная навигация"}>
          <div className="mobile-menu-destinations">
            <p className="eyebrow">{isEnglish ? "Destinations" : "Направления"}</p>
            {destinations.map((destination) => (
              <Link key={destination.slug} href={withTrailingSlash(`${base}/countries/${destination.slug}`)} onClick={closeMenu}>
                <span>{destination.code}</span>
                <strong>{isEnglish ? destination.en : destination.ru}</strong>
              </Link>
            ))}
          </div>
          <div className="mobile-menu-secondary">
            <HashLink href={withTrailingSlash(`${base}/#process`)} afterNavigate={closeMenu}>{isEnglish ? "How we work" : "Как работаем"}</HashLink>
            <HashLink href={withTrailingSlash(`${base}/#services`)} afterNavigate={closeMenu}>{isEnglish ? "Services" : "Услуги"}</HashLink>
            <Link href={withTrailingSlash(`${base}/blog`)} onClick={closeMenu}>{isEnglish ? "Insights" : "Блог"}</Link>
            <Link href={withTrailingSlash(`${base}/about`)} onClick={closeMenu}>{isEnglish ? "About" : "О нас"}</Link>
            <Link href={withTrailingSlash(`${base}/contacts`)} onClick={closeMenu}>{isEnglish ? "Contact" : "Контакты"}</Link>
          </div>
          <Link className="button button-primary mobile-menu-audit" href={assessmentPath} onClick={closeMenu}>
            {isEnglish ? "Start profile audit" : "Пройти аудит профиля"}
          </Link>
        </nav>
      </div>

      {!isAssessmentPage ? (
        <Link
          className={`mobile-sticky-audit${showStickyAudit && !menuOpen && !closingAreaVisible ? " is-visible" : ""}`}
          href={assessmentPath}
          aria-hidden={!showStickyAudit || menuOpen || closingAreaVisible}
          tabIndex={showStickyAudit && !menuOpen && !closingAreaVisible ? 0 : -1}
        >
          {isEnglish ? "Start profile audit" : "Пройти аудит профиля"}
          <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </>
  );
}
