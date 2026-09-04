"use client";

import { useEffect, useState, type KeyboardEvent } from "react";
import { BrandLockup } from "./BrandLockup";

type Locale = "ru" | "en";

const stages = {
  ru: [
    { title: "Маршрут", text: "Смотрим гражданство, карьеру, бизнес и сроки. Выбираем категории, которые соответствуют цели и исходным данным." },
    { title: "Усиление профиля", text: "Если доказательств пока не хватает – планируем реальные проекты, роли, публикации и независимое признание. Каждый шаг должен создавать результат, который выдержит проверку." },
    { title: "Доказательства", text: "Сверяем даты, цифры и роли в письмах, документах и публикациях, затем собираем материалы в согласованный комплект." },
    { title: "Подача", text: "Команда Samotsvet проводит финальную проверку, готовит формы и сопровождает подачу до решения." },
  ],
  en: [
    { title: "Route", text: "We review nationality, career, business and timing, then establish which categories are viable and which can be ruled out at once." },
    { title: "Profile development", text: "If the evidence is not yet sufficient, we plan genuine projects, roles, publications and independent recognition – work that can withstand scrutiny." },
    { title: "Evidence", text: "We assemble the material so dates, figures and roles remain consistent across letters, documents and publications." },
    { title: "Filing", text: "The Samotsvet team runs the final review, prepares the forms and manages the filing process through to the decision." },
  ],
} satisfies Record<Locale, { title: string; text: string }[]>;

const progressWidths = [54, 210, 382, 520];
export function HeroVisual({ locale = "ru" }: { locale?: Locale }) {
  const [active, setActive] = useState(0);
  const [manualSelection, setManualSelection] = useState(false);
  const [paused, setPaused] = useState(false);
  const isEnglish = locale === "en";

  useEffect(() => {
    if (manualSelection || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % stages[locale].length), 6000);
    return () => window.clearInterval(timer);
  }, [locale, manualSelection, paused]);

  function chooseStage(index: number) {
    setActive(index);
    setManualSelection(true);
  }

  function handleKeys(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    chooseStage((active + direction + stages[locale].length) % stages[locale].length);
  }

  return (
    <div
      className="hero-visual"
      role="region"
      aria-roledescription="carousel"
      aria-label={isEnglish ? "Samotsvet preparation route" : "Маршрут подготовки Samotsvet"}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={handleKeys}
    >
      <div className="hero-visual-identity">
        <BrandLockup className="hero-brand-lockup" />
        <p>{isEnglish ? "From an early profile to a fully assembled case" : "От сырого профиля до собранного кейса"}</p>
      </div>

      <div className="hero-route-map">
        <svg className="hero-route-channel" viewBox="0 0 520 170" aria-hidden="true" preserveAspectRatio="none">
          <defs>
            <clipPath id={`route-progress-${locale}`}>
              <rect className="hero-route-progress-clip" x="0" y="0" width={progressWidths[active]} height="170" />
            </clipPath>
          </defs>
          <path className="hero-route-channel-base" d="M48 130 C135 130 140 48 210 60 C300 78 310 135 375 92 C420 61 438 25 482 22 L482 34 C445 37 432 72 381 104 C307 151 291 91 205 74 C147 63 141 139 48 138 Z" />
          <path className="hero-route-channel-progress" clipPath={`url(#route-progress-${locale})`} d="M48 130 C135 130 140 48 210 60 C300 78 310 135 375 92 C420 61 438 25 482 22 L482 34 C445 37 432 72 381 104 C307 151 291 91 205 74 C147 63 141 139 48 138 Z" />
        </svg>

        <ol className="hero-route" aria-label={isEnglish ? "Preparation stages" : "Этапы подготовки"}>
          {stages[locale].map((stage, index) => (
            <li className={`hero-route-stage hero-route-stage-${index + 1}`} key={stage.title}>
              <button
                type="button"
                className={active === index ? "is-active" : ""}
                aria-label={`${String(index + 1).padStart(2, "0")}. ${stage.title}`}
                aria-current={active === index ? "step" : undefined}
                onClick={() => chooseStage(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
              </button>
              <button type="button" className="hero-route-label" onClick={() => chooseStage(index)}>{stage.title}</button>
            </li>
          ))}
        </ol>
      </div>

      <div className="visual-card" aria-live="polite">
        <span>{String(active + 1).padStart(2, "0")} / {String(stages[locale].length).padStart(2, "0")}</span>
        <h2>{stages[locale][active].title}</h2>
        <p>{stages[locale][active].text}</p>
      </div>

      <div className="visual-dots" aria-label={isEnglish ? "Select a preparation stage" : "Выбрать этап подготовки"}>
        {stages[locale].map((stage, index) => (
          <button
            type="button"
            key={stage.title}
            className={active === index ? "is-active" : ""}
            aria-label={stage.title}
            aria-current={active === index ? "true" : undefined}
            onClick={() => chooseStage(index)}
          />
        ))}
      </div>
    </div>
  );
}
