"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

type Status = "idle" | "sending" | "success" | "error";

const countryNames: Record<string, string> = {
  uk: "United Kingdom",
  spain: "Spain",
  usa: "United States",
  france: "France",
};

const assessmentEndpoint = "https://crm.samotsvetvisa.com/api/v1/LeadCapture/eaae72575ba4af3570883591e8916d30";

export function AssessmentForm({ initialCountry = "", locale = "ru" }: { initialCountry?: string; locale?: "ru" | "en" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);
  const [startedAt] = useState(() => Date.now());
  const isEnglish = locale === "en";

  useEffect(() => {
    if (initialCountry) return;
    const country = new URL(window.location.href).searchParams.get("country") || "";
    const frame = window.requestAnimationFrame(() => setSelectedCountry(countryNames[country] || ""));
    return () => window.cancelAnimationFrame(frame);
  }, [initialCountry]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const pageUrl = new URL(window.location.href);
    const value = (name: string) => String(data.get(name) || "").trim();

    setStatus("sending");
    setMessage("");

    if (value("website")) {
      form.reset();
      setStatus("success");
      setMessage(isEnglish ? "Your enquiry has been sent." : "Анкета отправлена.");
      return;
    }

    const payload = {
      firstName: value("name"),
      cContact: value("contact"),
      cCountry: value("country"),
      cRoute: value("route"),
      cObjective: value("objective"),
      cTiming: value("timing"),
      cCitizenship: value("citizenship"),
      cResidence: value("residence"),
      cFamily: value("family"),
      cEmployment: value("employment"),
      cProfile: value("profile"),
      cProfileLink: value("profileLink"),
      cEvidence: value("evidence"),
      cStage: value("stage"),
      cHistory: value("history"),
      cReferral: value("referral"),
      cConsent: data.get("consent") === "on",
      cFormSource: isEnglish ? "assessment-page-en" : "assessment-page",
      cUtmSource: pageUrl.searchParams.get("utm_source") || "",
      cUtmMedium: pageUrl.searchParams.get("utm_medium") || "",
      cUtmCampaign: pageUrl.searchParams.get("utm_campaign") || "",
      cLandingPage: `${pageUrl.pathname}${pageUrl.search}`,
      cReferrer: document.referrer,
      cConsentAt: new Date().toISOString().replace("T", " ").replace(/\.\d{3}Z$/, ""),
      cPrivacyVersion: "2026-08-14",
      cStartedAt: String(startedAt),
    };

    try {
      const response = await fetch(assessmentEndpoint, {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(isEnglish ? `Unable to send the form (${response.status}). Please try again.` : `Не удалось отправить анкету (${response.status}). Попробуйте еще раз.`);
      }

      form.reset();
      setSelectedCountry("");
      setStatus("success");
      setMessage(isEnglish ? "Your enquiry has been sent. We will review it and reply within 24 hours." : "Анкета отправлена. Мы изучим данные и ответим в течение 24 часов.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : (isEnglish ? "Unable to send the form." : "Не удалось отправить анкету."));
    }
  }

  return (
    <form className="assessment-form" onSubmit={submit}>
      <fieldset className="form-section"><legend><span>01</span>{isEnglish ? "Contact details" : "Контактные данные"}</legend><div className="form-row">
        <label><span className="field-label">{isEnglish ? "Your name" : "Как к Вам обращаться?"} <span className="required-mark">*</span></span><input name="name" autoComplete="name" required /></label>
        <label><span className="field-label">{isEnglish ? "Email or Telegram" : "Электронная почта или Telegram"} <span className="required-mark">*</span></span><input name="contact" autoComplete="email" required /></label>
      </div></fieldset>

      <fieldset className="form-section"><legend><span>02</span>{isEnglish ? "Your objective" : "Ваша цель"}</legend><div className="form-row">
        <label><span className="field-label">{isEnglish ? "Preferred destination" : "Приоритетное направление"} <span className="required-mark">*</span></span><select name="country" required value={selectedCountry} onChange={(event) => setSelectedCountry(event.target.value)}><option value="" disabled>{isEnglish ? "Select a destination" : "Выберите направление"}</option><option value="United Kingdom">{isEnglish ? "United Kingdom" : "Великобритания"}</option><option value="Spain">{isEnglish ? "Spain" : "Испания"}</option><option value="United States">{isEnglish ? "United States" : "США"}</option><option value="France">{isEnglish ? "France" : "Франция"}</option><option value="Compare">{isEnglish ? "I need to compare destinations" : "Пока не выбрал, нужно сравнить"}</option></select></label>
        <label>{isEnglish ? "Route, if already selected" : "Маршрут, если уже выбран"}<input name="route" placeholder={isEnglish ? "For example, Global Talent or EB-1A" : "Например, Global Talent или EB-1A"} /></label>
      </div><label><span className="field-label">{isEnglish ? "What would you like to resolve?" : "Что Вы хотите решить?"} <span className="required-mark">*</span></span><textarea name="objective" rows={4} required placeholder={isEnglish ? "For example: I want to understand whether my profile is ready for Global Talent or what I need to build first" : "Например: хочу понять, готов ли мой профиль к Global Talent или что нужно сначала наработать"} /></label><div className="form-row">
        <label>{isEnglish ? "Preferred timing" : "Желаемые сроки"}<select name="timing" defaultValue=""><option value="">{isEnglish ? "Not decided yet" : "Пока не определены"}</option><option value="0-3 months">{isEnglish ? "Within 3 months" : "До 3 месяцев"}</option><option value="3-6 months">{isEnglish ? "3–6 months" : "3–6 месяцев"}</option><option value="6-12 months">{isEnglish ? "6–12 months" : "6–12 месяцев"}</option><option value="12+ months">{isEnglish ? "More than a year" : "Более года"}</option></select></label>
        <label><span className="field-label">{isEnglish ? "Are you relocating alone or with family?" : "Вы едете один или с семьей?"} <span className="required-mark">*</span></span><select name="family" required defaultValue=""><option value="" disabled>{isEnglish ? "Select" : "Выберите вариант"}</option><option value="Alone">{isEnglish ? "Alone" : "Один"}</option><option value="With partner">{isEnglish ? "With a partner" : "С партнером"}</option><option value="With family">{isEnglish ? "With family" : "С семьей и детьми"}</option></select></label>
      </div></fieldset>

      <fieldset className="form-section"><legend><span>03</span>{isEnglish ? "Starting position" : "Исходные данные"}</legend><div className="form-row">
        <label><span className="field-label">{isEnglish ? "Citizenship" : "Гражданство"} <span className="required-mark">*</span></span><input name="citizenship" required placeholder={isEnglish ? "List all citizenships" : "Укажите все гражданства"} /></label>
        <label><span className="field-label">{isEnglish ? "Current country of residence" : "Где Вы живете сейчас?"} <span className="required-mark">*</span></span><input name="residence" required placeholder={isEnglish ? "Country and current status" : "Страна и текущий статус"} /></label>
      </div><div className="form-row"><label><span className="field-label">{isEnglish ? "Employment format" : "Формат занятости"} <span className="required-mark">*</span></span><select name="employment" required defaultValue=""><option value="" disabled>{isEnglish ? "Select" : "Выберите вариант"}</option><option value="Employee">{isEnglish ? "Employed by a company" : "Наем в компании"}</option><option value="Freelance">{isEnglish ? "Freelance or contracts" : "ИП, фриланс, контракты"}</option><option value="Business owner">{isEnglish ? "Business owner" : "Владею бизнесом"}</option><option value="Other">{isEnglish ? "Other" : "Другое"}</option></select></label><label>{isEnglish ? "LinkedIn or CV link" : "Ссылка на LinkedIn или CV"}<input name="profileLink" type="url" placeholder="https://" /></label></div><label><span className="field-label">{isEnglish ? "Professional or business profile" : "Профессиональный или предпринимательский профиль"} <span className="required-mark">*</span></span><textarea name="profile" rows={4} required placeholder={isEnglish ? "Role, sector, years of experience, business, responsibilities and strongest results" : "Роль, отрасль, стаж, бизнес, зона ответственности и наиболее сильные результаты"} /></label><label>{isEnglish ? "What evidence is already available?" : "Какие доказательства уже есть?"}<textarea name="evidence" rows={4} placeholder={isEnglish ? "Awards, publications, media, speaking, judging, revenue, investment, references, contracts or other evidence" : "Награды, публикации, СМИ, выступления, судейство, выручка, инвестиции, рекомендации, договоры и другие материалы"} /></label></fieldset>

      <fieldset className="form-section"><legend><span>04</span>{isEnglish ? "Current stage" : "Текущий этап"}</legend><div className="form-row">
        <label>{isEnglish ? "Where are you in the process?" : "На каком этапе Вы находитесь?"}<select name="stage" defaultValue=""><option value="">{isEnglish ? "Select" : "Выберите вариант"}</option><option value="Exploring routes">{isEnglish ? "Exploring routes" : "Сравниваю маршруты"}</option><option value="Developing profile">{isEnglish ? "Developing the profile" : "Нарабатываю профиль"}</option><option value="Collecting evidence">{isEnglish ? "Collecting evidence" : "Собираю доказательства"}</option><option value="Ready to file">{isEnglish ? "Preparing to file" : "Готовлюсь к подаче"}</option><option value="Refusal or reapplication">{isEnglish ? "Refusal or reapplication" : "Есть отказ или переподача"}</option></select></label>
        <label>{isEnglish ? "Previous applications or refusals" : "Предыдущие подачи или отказы"}<textarea name="history" rows={3} placeholder={isEnglish ? "Route, date and outcome" : "Маршрут, дата и результат"} /></label>
      </div><label>{isEnglish ? "How did you hear about Samotsvet?" : "Откуда Вы узнали о Samotsvet?"}<select name="referral" defaultValue=""><option value="">{isEnglish ? "Select" : "Выберите вариант"}</option><option value="Telegram">Telegram</option><option value="Search">{isEnglish ? "Search" : "Поиск"}</option><option value="Referral">{isEnglish ? "Recommendation" : "Рекомендация"}</option><option value="Social media">{isEnglish ? "Social media" : "Социальные сети"}</option><option value="Other">{isEnglish ? "Other" : "Другое"}</option></select></label></fieldset>

      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <label className="consent-field"><input type="checkbox" name="consent" required /><span>{isEnglish ? <>I agree to the processing of my personal data under the separate <Link href="/en/consent/">Data Processing Consent</Link>.</> : <>Я даю согласие на обработку персональных данных на условиях отдельного документа <Link href="/consent/">«Согласие на обработку персональных данных»</Link>.</>}</span></label>
      <p className="form-privacy-note">{isEnglish ? <>Please read the <Link href="/en/privacy/">Privacy Policy</Link> before submitting the form.</> : <>Перед отправкой формы ознакомьтесь с <Link href="/privacy/">Политикой конфиденциальности и обработки персональных данных</Link>.</>}</p>
      <button className="button button-primary form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? (isEnglish ? "Sending..." : "Отправляем...") : (isEnglish ? "Send" : "Отправить")}</button>
      {message && <p className={`form-message ${status}`} role="status">{message}</p>}
    </form>
  );
}
