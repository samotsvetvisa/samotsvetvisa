"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { TELEGRAM_DIRECT_URL, TELEGRAM_HANDLE } from "../site";
import { TelegramIcon } from "./TelegramButton";

type Locale = "ru" | "en";
type Status = "idle" | "sending" | "success" | "error";

const countryNames: Record<string, string> = {
  uk: "United Kingdom",
  spain: "Spain",
  usa: "United States",
  france: "France",
};

const assessmentEndpoint = "https://crm.samotsvetvisa.com/api/v1/LeadCapture/eaae72575ba4af3570883591e8916d30";

export function AssessmentForm({ initialCountry = "", locale = "ru" }: { initialCountry?: string; locale?: Locale }) {
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
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const pageUrl = new URL(window.location.href);
    const value = (name: string) => String(data.get(name) || "").trim();
    const referrer = (() => {
      if (!document.referrer) return "";
      try {
        const referrerUrl = new URL(document.referrer);
        return `${referrerUrl.origin}${referrerUrl.pathname}`;
      } catch {
        return "";
      }
    })();

    setStatus("sending");
    setMessage("");
    window.dispatchEvent(new CustomEvent("samotsvet:assessment", { detail: { event: "submit", locale } }));

    if (value("website")) {
      form.reset();
      setSelectedCountry("");
      setStatus("success");
      setMessage(isEnglish ? "Your details have been sent." : "Анкета отправлена.");
      return;
    }

    const payload = Object.fromEntries(Object.entries({
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
      cFormSource: isEnglish ? "chance-assessment-en" : "chance-assessment-ru",
      cUtmSource: pageUrl.searchParams.get("utm_source") || "",
      cUtmMedium: pageUrl.searchParams.get("utm_medium") || "",
      cUtmCampaign: pageUrl.searchParams.get("utm_campaign") || "",
      cLandingPage: pageUrl.pathname,
      cReferrer: referrer,
      cConsentAt: new Date().toISOString().replace("T", " ").replace(/\.\d{3}Z$/, ""),
      cPrivacyVersion: "2026-09-04",
      cStartedAt: String(startedAt),
    }).map(([key, item]) => [key, item === "" ? null : item]));

    try {
      const response = await fetch(assessmentEndpoint, {
        method: "POST",
        cache: "no-store",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(isEnglish ? `Unable to send the form (${response.status}). Please try again.` : `Не удалось отправить анкету (${response.status}). Попробуйте еще раз.`);
      }

      form.reset();
      setSelectedCountry("");
      setStatus("success");
      setMessage(isEnglish ? "Your details have been sent. We will assess the options and reply within one business day." : "Анкета отправлена. Мы оценим варианты и ответим в течение одного рабочего дня.");
      window.dispatchEvent(new CustomEvent("samotsvet:assessment", { detail: { event: "success", locale } }));
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : (isEnglish ? "Unable to send the form." : "Не удалось отправить анкету."));
      window.dispatchEvent(new CustomEvent("samotsvet:assessment", { detail: { event: "error", locale } }));
    }
  }

  return (
    <form className="assessment-form" onSubmit={submit}>
      <div className="assessment-progress">
        <span>{isEnglish ? "Chance assessment" : "Оценка шансов"}</span>
        <strong>{isEnglish ? "Tell us about your circumstances" : "Расскажите о своей ситуации"}</strong>
      </div>

      <fieldset className="form-section">
        <legend><span>01</span>{isEnglish ? "Contact details" : "Контактные данные"}</legend>
        <div className="form-row">
          <label><span className="field-label">{isEnglish ? "Your name" : "Как к Вам обращаться?"} <span className="required-mark">*</span></span><input name="name" autoComplete="name" required /></label>
          <label><span className="field-label">{isEnglish ? "Email or Telegram" : "Электронная почта или Telegram"} <span className="required-mark">*</span></span><input name="contact" required /></label>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend><span>02</span>{isEnglish ? "Relocation objective" : "Цель переезда"}</legend>
        <div className="form-row">
          <label><span className="field-label">{isEnglish ? "Preferred destination" : "Приоритетное направление"} <span className="required-mark">*</span></span><select name="country" required value={selectedCountry} onChange={(event) => setSelectedCountry(event.target.value)}><option value="" disabled>{isEnglish ? "Select a destination" : "Выберите направление"}</option><option value="Compare">{isEnglish ? "I would like to compare destinations" : "Хочу сравнить несколько стран"}</option><option value="United Kingdom">{isEnglish ? "United Kingdom" : "Великобритания"}</option><option value="United States">{isEnglish ? "United States" : "США"}</option><option value="Spain">{isEnglish ? "Spain" : "Испания"}</option><option value="France">{isEnglish ? "France" : "Франция"}</option></select></label>
          <label>{isEnglish ? "Programme, if already selected" : "Программа, если уже выбрана"}<input name="route" placeholder={isEnglish ? "For example, Global Talent or EB-1A" : "Например, Global Talent или EB-1A"} /></label>
        </div>
        <label><span className="field-label">{isEnglish ? "What would you like to achieve?" : "Какой результат Вы хотите получить?"} <span className="required-mark">*</span></span><textarea name="objective" rows={4} required placeholder={isEnglish ? "For example: compare long-term residence options for my family and understand what must be prepared before filing" : "Например: сравнить варианты ВНЖ для семьи и понять, что нужно подготовить до подачи"} /></label>
        <div className="form-row">
          <label>{isEnglish ? "Preferred timing" : "Желаемые сроки"}<select name="timing" defaultValue=""><option value="">{isEnglish ? "Not decided yet" : "Пока не определены"}</option><option value="0-3 months">{isEnglish ? "Within 3 months" : "До 3 месяцев"}</option><option value="3-6 months">{isEnglish ? "3-6 months" : "3-6 месяцев"}</option><option value="6-12 months">{isEnglish ? "6-12 months" : "6-12 месяцев"}</option><option value="12+ months">{isEnglish ? "More than a year" : "Более года"}</option></select></label>
          <label><span className="field-label">{isEnglish ? "Who is relocating?" : "Кто переезжает?"} <span className="required-mark">*</span></span><select name="family" required defaultValue=""><option value="" disabled>{isEnglish ? "Select" : "Выберите вариант"}</option><option value="Alone">{isEnglish ? "I am relocating alone" : "Я переезжаю один"}</option><option value="With partner">{isEnglish ? "With a partner" : "С партнером"}</option><option value="With family">{isEnglish ? "With children" : "С детьми"}</option></select></label>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend><span>03</span>{isEnglish ? "Starting position" : "Исходные данные"}</legend>
        <div className="form-row">
          <label><span className="field-label">{isEnglish ? "Citizenship" : "Гражданство"} <span className="required-mark">*</span></span><input name="citizenship" required placeholder={isEnglish ? "List all citizenships" : "Укажите все гражданства"} /></label>
          <label><span className="field-label">{isEnglish ? "Current country and status" : "Страна проживания и текущий статус"} <span className="required-mark">*</span></span><input name="residence" required placeholder={isEnglish ? "For example, Estonia, temporary residence" : "Например, Эстония, временный ВНЖ"} /></label>
        </div>
        <div className="form-row">
          <label><span className="field-label">{isEnglish ? "Working arrangement" : "Формат занятости"} <span className="required-mark">*</span></span><select name="employment" required defaultValue=""><option value="" disabled>{isEnglish ? "Select" : "Выберите вариант"}</option><option value="Employee">{isEnglish ? "Employee" : "Работаю по найму"}</option><option value="Freelance">{isEnglish ? "Self-employed or contractor" : "ИП, контрактор или фрилансер"}</option><option value="Business owner">{isEnglish ? "Business owner" : "Владею бизнесом"}</option><option value="Other">{isEnglish ? "Another arrangement" : "Другой формат"}</option></select></label>
          <label>{isEnglish ? "LinkedIn, CV or portfolio" : "LinkedIn, CV или портфолио"}<input name="profileLink" type="url" placeholder="https://" /></label>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend><span>04</span>{isEnglish ? "Experience and evidence" : "Опыт и доказательства"}</legend>
        <label><span className="field-label">{isEnglish ? "Professional or business profile" : "Профессиональный или предпринимательский профиль"} <span className="required-mark">*</span></span><textarea name="profile" rows={5} required placeholder={isEnglish ? "Role, sector, years of experience, responsibilities, business and strongest outcomes" : "Роль, отрасль, стаж, зона ответственности, бизнес и наиболее сильные результаты"} /></label>
        <label>{isEnglish ? "What evidence is already available?" : "Какие подтверждения уже есть?"}<textarea name="evidence" rows={4} placeholder={isEnglish ? "Projects, metrics, references, media coverage, speaking, judging, awards, contracts or other records. Publications are optional." : "Проекты, метрики, рекомендации, СМИ, выступления, судейство, награды, договоры и другие материалы. Публикации необязательны."} /></label>
      </fieldset>

      <fieldset className="form-section">
        <legend><span>05</span>{isEnglish ? "Current stage" : "Текущий этап"}</legend>
        <div className="form-row">
          <label>{isEnglish ? "Where are you in the process?" : "На каком этапе Вы находитесь?"}<select name="stage" defaultValue="Exploring routes"><option value="Exploring routes">{isEnglish ? "Comparing options" : "Сравниваю варианты"}</option><option value="Developing profile">{isEnglish ? "Developing my profile" : "Развиваю профиль"}</option><option value="Collecting evidence">{isEnglish ? "Collecting evidence" : "Собираю доказательства"}</option><option value="Ready to file">{isEnglish ? "Preparing to file" : "Готовлюсь к подаче"}</option><option value="Refusal or reapplication">{isEnglish ? "Refusal or repeat filing" : "Есть отказ или повторная подача"}</option></select></label>
          <label>{isEnglish ? "Previous applications or refusals" : "Предыдущие подачи или отказы"}<textarea name="history" rows={3} placeholder={isEnglish ? "Programme, date and outcome" : "Программа, дата и результат"} /></label>
        </div>
        <label>{isEnglish ? "How did you hear about Samotsvet?" : "Откуда Вы узнали о Samotsvet?"}<select name="referral" defaultValue=""><option value="">{isEnglish ? "Select" : "Выберите вариант"}</option><option value="Telegram">Telegram</option><option value="Search">{isEnglish ? "Search" : "Поиск"}</option><option value="Referral">{isEnglish ? "Recommendation" : "Рекомендация"}</option><option value="Social media">{isEnglish ? "Social media" : "Социальные сети"}</option><option value="Other">{isEnglish ? "Other" : "Другое"}</option></select></label>
      </fieldset>

      <p className="form-privacy-note">{isEnglish ? "Please do not include passport numbers, medical information, bank details or other sensitive data in this initial form." : "Не указывайте в первичной анкете паспортные данные, медицинские сведения, банковские реквизиты и другую чувствительную информацию."}</p>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <label className="consent-field"><input type="checkbox" name="consent" required /><span>{isEnglish ? <>I agree to personal data processing under the <Link href="/en/consent/">Data Processing Consent</Link>. <span className="required-mark" aria-label="required">*</span></> : <>Я даю согласие на обработку персональных данных на условиях документа <Link href="/consent/">«Согласие на обработку персональных данных»</Link>. <span className="required-mark" aria-label="обязательное поле">*</span></>}</span></label>
      <p className="form-privacy-note">{isEnglish ? <>Please read the <Link href="/en/privacy/">Privacy Policy</Link>.</> : <>Ознакомьтесь с <Link href="/privacy/">Политикой конфиденциальности</Link>.</>}</p>
      <button className="button button-primary form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? (isEnglish ? "Sending..." : "Отправляем...") : (isEnglish ? "Send for assessment" : "Отправить на оценку")}</button>
      {message ? <div className={`form-message ${status}`} role="status"><p>{message}</p>{status === "error" ? <a className="form-telegram-link" href={TELEGRAM_DIRECT_URL} target="_blank" rel="noreferrer"><TelegramIcon /><span><strong>{isEnglish ? "Message us on Telegram" : "Написать в Telegram"}</strong><small>{TELEGRAM_HANDLE}</small></span></a> : null}</div> : null}
    </form>
  );
}
