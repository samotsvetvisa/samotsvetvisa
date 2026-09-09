"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL, TELEGRAM_DIRECT_URL, TELEGRAM_HANDLE } from "../site";
import { ATTRIBUTION_STORAGE_KEY, type StoredAttribution } from "./AttributionLinker";
import { TelegramIcon } from "./TelegramButton";

type Locale = "ru" | "en";
type Status = "idle" | "sending" | "success" | "error";
type FieldName = "name" | "contact" | "profile_summary" | "country" | "timeline" | "consent";
type FieldErrors = Partial<Record<FieldName, string>>;

const countryNames: Record<string, string> = {
  uk: "United Kingdom",
  us: "United States",
  usa: "United States",
  es: "Spain",
  spain: "Spain",
  fr: "France",
  france: "France",
  compare: "Compare",
};

const assessmentEndpoint = "https://crm.samotsvetvisa.com/api/v1/LeadCapture/eaae72575ba4af3570883591e8916d30";

function createRequestId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
}

function readAttribution(): StoredAttribution | null {
  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    return raw ? JSON.parse(raw) as StoredAttribution : null;
  } catch {
    return null;
  }
}

function validContact(value: string) {
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
  const telegramName = /^@[a-zA-Z0-9_]{5,32}$/u;
  const telegramLink = /^https?:\/\/(?:t\.me|telegram\.me)\/[a-zA-Z0-9_]{5,32}\/?$/u;
  return email.test(value) || telegramName.test(value) || telegramLink.test(value);
}

function localEvent(event: string, detail: Record<string, string>) {
  window.dispatchEvent(new CustomEvent("samotsvet:analytics", { detail: { event, ...detail } }));
  window.dispatchEvent(new CustomEvent("samotsvet:assessment", { detail: { event, ...detail } }));
}

export function AssessmentForm({ initialCountry = "", locale = "ru" }: { initialCountry?: string; locale?: Locale }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [selectedCountry, setSelectedCountry] = useState(countryNames[initialCountry] || initialCountry);
  const requestId = useRef("");
  const formStarted = useRef(false);
  const startedAt = useRef(0);
  const submitting = useRef(false);
  const isEnglish = locale === "en";

  useEffect(() => {
    if (initialCountry) return;
    const country = new URL(window.location.href).searchParams.get("country") || readAttribution()?.country || "";
    const frame = window.requestAnimationFrame(() => setSelectedCountry(countryNames[country] || ""));
    return () => window.cancelAnimationFrame(frame);
  }, [initialCountry]);

  function startForm() {
    if (formStarted.current) return;
    formStarted.current = true;
    startedAt.current = Date.now();
    localEvent("consultation_form_start", {
      page: window.location.pathname,
      country: selectedCountry,
      language: locale,
    });
  }

  function validate(data: FormData) {
    const value = (name: FieldName) => String(data.get(name) || "").trim();
    const next: FieldErrors = {};

    if (!value("name") || value("name").length > 80) {
      next.name = isEnglish ? "Enter your name." : "Укажите имя.";
    }
    if (!validContact(value("contact")) || value("contact").length > 200) {
      next.contact = isEnglish ? "Enter your email address or Telegram username." : "Укажите email или Telegram.";
    }
    if (value("profile_summary").length < 10 || value("profile_summary").length > 1500) {
      next.profile_summary = isEnglish ? "Briefly describe your work and experience." : "Коротко опишите Вашу работу и опыт.";
    }
    if (!value("country")) {
      next.country = isEnglish ? "Select a country or goal." : "Выберите страну или задачу.";
    }
    if (!value("timeline")) {
      next.timeline = isEnglish ? "Select a timeframe or choose ‘Not sure yet’." : "Укажите срок или выберите «Пока не определились».";
    }
    if (data.get("consent") !== "on") {
      next.consent = isEnglish
        ? "Please confirm your consent to the processing of personal data before sending your request."
        : "Для отправки заявки подтвердите согласие на обработку персональных данных.";
    }

    return next;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current || status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) || "").trim();
    const nextErrors = validate(data);
    setErrors(nextErrors);
    setMessage("");
    setStatus("idle");

    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0] as FieldName;
      window.requestAnimationFrame(() => form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus());
      return;
    }

    if (value("website")) {
      form.reset();
      setSelectedCountry("");
      setStatus("success");
      setMessage(isEnglish ? "Your request has been received." : "Заявка получена.");
      return;
    }

    if (!requestId.current) requestId.current = createRequestId();
    const pageUrl = new URL(window.location.href);
    const attribution = readAttribution();
    const program = (pageUrl.searchParams.get("program") || attribution?.program || "").slice(0, 160);
    const sourcePage = attribution?.sourcePage || attribution?.entryPage || "/";
    const source = attribution?.utm.utm_source || (() => {
      if (!attribution?.referrer) return "Direct / unknown";
      try { return new URL(attribution.referrer).hostname; } catch { return attribution.referrer; }
    })();

    const contextLines = [
      `Request ID: ${requestId.current}`,
      `Source page: ${sourcePage}`,
      `CTA location: ${attribution?.ctaLocation || "assessment-direct"}`,
      `Traffic source: ${source}`,
      attribution?.utm.utm_content ? `UTM content: ${attribution.utm.utm_content}` : "",
      attribution?.utm.utm_term ? `UTM term: ${attribution.utm.utm_term}` : "",
    ].filter(Boolean);

    const payload = Object.fromEntries(Object.entries({
      firstName: value("name"),
      cContact: value("contact"),
      cCountry: value("country"),
      cRoute: program,
      cObjective: [isEnglish ? "Free initial consultation" : "Бесплатная первичная консультация", ...contextLines].join("\n"),
      cTiming: value("timeline"),
      cProfile: value("profile_summary"),
      cEmployment: "Other",
      cStage: "Exploring routes",
      cConsent: true,
      cFormSource: isEnglish ? "free-consultation-en" : "free-consultation-ru",
      cUtmSource: attribution?.utm.utm_source || "",
      cUtmMedium: attribution?.utm.utm_medium || "",
      cUtmCampaign: attribution?.utm.utm_campaign || "",
      cLandingPage: attribution?.entryPage || pageUrl.pathname,
      cReferrer: attribution?.referrer || "",
      cConsentAt: new Date().toISOString().replace("T", " ").replace(/\.\d{3}Z$/, ""),
      cPrivacyVersion: "2026-09-09",
      cStartedAt: String(startedAt.current || Date.now()),
    }).map(([key, item]) => [key, item === "" ? null : item]));

    submitting.current = true;
    setStatus("sending");

    try {
      const response = await fetch(assessmentEndpoint, {
        method: "POST",
        cache: "no-store",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(String(response.status));

      form.reset();
      setSelectedCountry("");
      setErrors({});
      setStatus("success");
      setMessage(isEnglish
        ? "Your request has been received. Thank you. We will contact you within one working day to arrange your free consultation. You do not need to send any documents before the first conversation."
        : "Заявка получена. Спасибо! Свяжемся с Вами в течение одного рабочего дня, чтобы согласовать время бесплатной консультации. До первого разговора отправлять документы не нужно.");
      localEvent("consultation_request_success", {
        request_id: requestId.current,
        country: value("country"),
        program,
        source,
        language: locale,
      });
      requestId.current = "";
      formStarted.current = false;
      startedAt.current = 0;
      submitting.current = false;
    } catch {
      submitting.current = false;
      setStatus("error");
      setMessage(isEnglish
        ? "We could not send your request. Your details are still in the form. Please try again, or contact us via Telegram or email."
        : "Не удалось отправить заявку. Данные остались в форме. Попробуйте еще раз или напишите нам в Telegram или на почту.");
      localEvent("consultation_request_error", { category: "network_or_server", language: locale });
    }
  }

  const fieldError = (name: FieldName) => errors[name]
    ? <span className="field-error" id={`${name}-error`} role="alert">{errors[name]}</span>
    : null;

  function clearEditedField(event: FormEvent<HTMLFormElement>) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement)) return;
    const field = target.name as FieldName;
    if (field && errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
    if (status === "error" || status === "success") {
      setStatus("idle");
      setMessage("");
    }
  }

  return (
    <form className="assessment-form consultation-form" onSubmit={submit} onFocusCapture={startForm} onInputCapture={clearEditedField} noValidate>
      <div className="assessment-progress">
        <span>{isEnglish ? "Free initial consultation" : "Бесплатная первичная консультация"}</span>
        <strong>{isEnglish ? "Five short fields" : "Пять коротких полей"}</strong>
      </div>

      <div className="consultation-fields">
        <label>
          <span className="field-label">{isEnglish ? "What should we call you?" : "Как к Вам обращаться?"} <span className="required-mark">*</span></span>
          <input name="name" autoComplete="name" maxLength={80} required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} placeholder={isEnglish ? "Your name" : "Ваше имя"} />
          {fieldError("name")}
        </label>

        <label>
          <span className="field-label">{isEnglish ? "Email or Telegram" : "Email или Telegram"} <span className="required-mark">*</span></span>
          <input name="contact" maxLength={200} required aria-invalid={Boolean(errors.contact)} aria-describedby={errors.contact ? "contact-error" : undefined} placeholder={isEnglish ? "name@example.com or @username" : "name@example.com или @username"} />
          {fieldError("contact")}
        </label>

        <label>
          <span className="field-label">{isEnglish ? "Your work and experience" : "Ваша работа и опыт"} <span className="required-mark">*</span></span>
          <textarea name="profile_summary" rows={5} maxLength={1500} required aria-invalid={Boolean(errors.profile_summary)} aria-describedby={`profile-summary-hint${errors.profile_summary ? " profile_summary-error" : ""}`} placeholder={isEnglish ? "Your role, industry and one or two sentences about your most relevant experience" : "Роль, отрасль и 1–2 предложения о наиболее важном опыте"} />
          <span className="field-hint" id="profile-summary-hint">{isEnglish ? "A CV or document bundle is not required before the first conversation." : "Резюме и комплект документов до первого разговора не нужны."}</span>
          {fieldError("profile_summary")}
        </label>

        <div className="form-row">
          <label>
            <span className="field-label">{isEnglish ? "Country or goal" : "Страна или задача"} <span className="required-mark">*</span></span>
            <select name="country" value={selectedCountry} onChange={(event) => setSelectedCountry(event.target.value)} required aria-invalid={Boolean(errors.country)} aria-describedby={errors.country ? "country-error" : undefined}>
              <option value="" disabled>{isEnglish ? "Select an option" : "Выберите вариант"}</option>
              <option value="Compare">{isEnglish ? "I would like to compare my options" : "Хочу сравнить варианты"}</option>
              <option value="United Kingdom">{isEnglish ? "United Kingdom" : "Великобритания"}</option>
              <option value="United States">{isEnglish ? "United States" : "США"}</option>
              <option value="Spain">{isEnglish ? "Spain" : "Испания"}</option>
              <option value="France">{isEnglish ? "France" : "Франция"}</option>
            </select>
            {fieldError("country")}
          </label>

          <label>
            <span className="field-label">{isEnglish ? "When are you planning to relocate?" : "Когда планируете переезд?"} <span className="required-mark">*</span></span>
            <select name="timeline" defaultValue="" required aria-invalid={Boolean(errors.timeline)} aria-describedby={errors.timeline ? "timeline-error" : undefined}>
              <option value="" disabled>{isEnglish ? "Select a timeframe" : "Выберите срок"}</option>
              <option value="0-3 months">{isEnglish ? "Within 3 months" : "До 3 месяцев"}</option>
              <option value="3-6 months">{isEnglish ? "In 3–6 months" : "Через 3–6 месяцев"}</option>
              <option value="6-12 months">{isEnglish ? "In 6–12 months" : "Через 6–12 месяцев"}</option>
              <option value="12+ months">{isEnglish ? "In more than a year" : "Более чем через год"}</option>
              <option value="Not decided">{isEnglish ? "Not sure yet" : "Пока не определились"}</option>
            </select>
            {fieldError("timeline")}
          </label>
        </div>
      </div>

      <p className="form-privacy-note">{isEnglish ? "Please do not include passport numbers, medical information, bank details or other sensitive data in this initial form." : "Не указывайте в этой форме паспортные данные, медицинские сведения, банковские реквизиты и другую чувствительную информацию."}</p>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <label className={`consent-field${errors.consent ? " has-error" : ""}`}>
        <input type="checkbox" name="consent" required aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "consent-error" : undefined} />
        <span>{isEnglish ? <>I agree to personal data processing under the <Link href="/en/consent/">Data Processing Consent</Link>. <span className="required-mark" aria-label="required">*</span></> : <>Я даю согласие на обработку персональных данных на условиях документа <Link href="/consent/">«Согласие на обработку персональных данных»</Link>. <span className="required-mark" aria-label="обязательное поле">*</span></>}</span>
      </label>
      {fieldError("consent")}
      <p className="form-privacy-note">{isEnglish ? <>Please read the <Link href="/en/privacy/">Privacy Policy</Link>.</> : <>Ознакомьтесь с <Link href="/privacy/">Политикой конфиденциальности</Link>.</>}</p>
      <button className="button button-primary form-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? (isEnglish ? "Sending..." : "Отправляем...") : (isEnglish ? "Book a free consultation" : "Записаться на бесплатную консультацию")}
      </button>
      <p className="form-response-time">{isEnglish ? "We will contact you within one working day to arrange a time." : "Свяжемся с Вами в течение одного рабочего дня, чтобы согласовать время."}</p>

      {message ? (
        <div className={`form-message ${status}`} role={status === "error" ? "alert" : "status"} aria-live="polite">
          <p>{message}</p>
          {status === "error" ? <div className="form-fallback-links"><a className="form-telegram-link" href={TELEGRAM_DIRECT_URL} target="_blank" rel="noreferrer" data-contact-channel="telegram" data-cta-location="form-error"><TelegramIcon /><span><strong>{isEnglish ? "Message us on Telegram" : "Написать в Telegram"}</strong><small>{TELEGRAM_HANDLE}</small></span></a><a href={`mailto:${CONTACT_EMAIL}`} data-contact-channel="email" data-cta-location="form-error">{isEnglish ? "Send an email" : "Написать на почту"}</a></div> : null}
        </div>
      ) : null}
    </form>
  );
}
