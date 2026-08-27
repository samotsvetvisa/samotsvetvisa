"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

type Locale = "ru" | "en";
type FormStatus = "idle" | "sending" | "error";
type Stage = "short" | "result" | "detail" | "done";

type ShortAnswers = {
  name: string;
  contact: string;
  country: string;
  profileType: string;
  level: string;
  evidenceLevel: string;
  timing: string;
  consent: boolean;
};

type AssessmentResult = {
  heading: string;
  readiness: string;
  routes: string[];
  next: string;
};

type AssessmentScores = {
  fit: number;
  evidence: number;
  urgency: number;
  readiness: number;
};

const countryNames: Record<string, string> = { uk: "United Kingdom", spain: "Spain", usa: "United States", france: "France" };
const endpoint = "https://crm.samotsvetvisa.com/api/v1/LeadCapture/eaae72575ba4af3570883591e8916d30";

const labels = {
  ru: {
    countries: { "United Kingdom": "Великобритания", Spain: "Испания", "United States": "США", France: "Франция", Compare: "Нужно сравнить" },
    profiles: { specialist: "Специалист или руководитель", founder: "Основатель или предприниматель", researcher: "Исследователь или автор", remote: "Удаленный специалист", family: "Семейная стратегия" },
    levels: { early: "Начало карьеры", middle: "Самостоятельный специалист", senior: "Senior / руководитель", founder: "Основатель бизнеса" },
    evidence: { none: "Пока нет публикаций и внешнего признания", internal: "Есть сильные результаты внутри компании", some: "Есть отдельные публикации, выступления или экспертные роли", strong: "Есть несколько независимых подтверждений" },
    timing: { urgent: "До 3 месяцев", medium: "3–6 месяцев", planned: "6–12 месяцев", long: "Более года" },
  },
  en: {
    countries: { "United Kingdom": "United Kingdom", Spain: "Spain", "United States": "United States", France: "France", Compare: "Comparison needed" },
    profiles: { specialist: "Specialist or senior leader", founder: "Founder or entrepreneur", researcher: "Researcher or author", remote: "Remote professional", family: "Family strategy" },
    levels: { early: "Early career", middle: "Independent professional", senior: "Senior / leadership", founder: "Business founder" },
    evidence: { none: "No publications or external recognition yet", internal: "Strong results inside a company", some: "Some publications, speaking or expert roles", strong: "Several independent forms of recognition" },
    timing: { urgent: "Within 3 months", medium: "3–6 months", planned: "6–12 months", long: "More than a year" },
  },
} as const;

export function AssessmentForm({ initialCountry = "", locale = "ru" }: { initialCountry?: string; locale?: Locale }) {
  const en = locale === "en";
  const [stage, setStage] = useState<Stage>("short");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);
  const [shortAnswers, setShortAnswers] = useState<ShortAnswers | null>(null);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [startedAt] = useState(() => Date.now());
  const [assessmentId] = useState(() => `SV-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`.toUpperCase());

  useEffect(() => {
    if (initialCountry) return;
    const country = new URL(window.location.href).searchParams.get("country") || "";
    const frame = window.requestAnimationFrame(() => setSelectedCountry(countryNames[country] || ""));
    return () => window.cancelAnimationFrame(frame);
  }, [initialCountry]);

  function value(data: FormData, name: string) { return String(data.get(name) || "").trim(); }

  function tracking(formSource: string) {
    const pageUrl = new URL(window.location.href);
    let referrer = "";
    if (document.referrer) {
      try { const url = new URL(document.referrer); referrer = `${url.origin}${url.pathname}`; } catch { referrer = ""; }
    }
    return {
      cFormSource: formSource,
      cUtmSource: pageUrl.searchParams.get("utm_source") || "",
      cUtmMedium: pageUrl.searchParams.get("utm_medium") || "",
      cUtmCampaign: pageUrl.searchParams.get("utm_campaign") || "",
      cLandingPage: pageUrl.pathname,
      cReferrer: referrer,
      cConsentAt: new Date().toISOString().replace("T", " ").replace(/\.\d{3}Z$/, ""),
      cPrivacyVersion: "2026-08-27",
      cStartedAt: String(startedAt),
    };
  }

  async function send(payload: Record<string, unknown>) {
    const normalized = Object.fromEntries(Object.entries(payload).map(([key, item]) => [key, item === "" ? null : item]));
    const response = await fetch(endpoint, { method: "POST", cache: "no-store", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(normalized) });
    if (!response.ok) throw new Error(en ? `Unable to send the form (${response.status}). Please try again.` : `Не удалось отправить данные (${response.status}). Попробуйте еще раз.`);
  }

  function evaluate(answers: ShortAnswers): AssessmentResult {
    const evidencePoints = { none: 0, internal: 1, some: 2, strong: 3 }[answers.evidenceLevel as "none" | "internal" | "some" | "strong"] ?? 0;
    const levelPoints = { early: 0, middle: 1, senior: 2, founder: 2 }[answers.level as "early" | "middle" | "senior" | "founder"] ?? 0;
    const routeMap: Record<string, string[]> = {
      "United Kingdom": ["UK Global Talent", "UK Innovator Founder"],
      Spain: ["Spain Digital Nomad"],
      "United States": ["US EB-1A / EB-2 NIW / O-1", "US E-2"],
      France: ["France Talent"],
      Compare: answers.profileType === "remote" ? ["Spain Digital Nomad", "France Talent"] : answers.profileType === "founder" ? ["UK Innovator Founder", "US entrepreneur routes", "France Talent"] : ["UK Global Talent", "US professional routes", "France Talent"],
    };
    const routes = routeMap[answers.country] || [en ? "A cross-country comparison" : "Сравнение нескольких стран"];
    if (evidencePoints >= 2 && levelPoints >= 1) return { heading: en ? "There is a foundation for documentary review" : "Есть основа для документальной проверки", readiness: en ? "The profile contains external or independent signals. The next task is to test their quality, personal contribution and fit with the selected criteria." : "В профиле есть внешние или независимые сигналы. Следующая задача — проверить их качество, личный вклад и соответствие критериям.", routes, next: en ? "Proceed to the detailed profile so the team can distinguish usable evidence from context." : "Дополните профиль, чтобы команда отделила рабочие доказательства от общего контекста." };
    if (levelPoints >= 1) return { heading: en ? "The route may remain open, but the profile needs preparation" : "Маршрут может быть доступен, но профиль нужно подготовить", readiness: en ? "No publications at the outset is not a final conclusion. Strong internal work can become a foundation for projects, independent assessment and a verifiable public record." : "Отсутствие публикаций на старте не является окончательным выводом. Сильные внутренние результаты могут стать основой для проектов, независимой оценки и проверяемого публичного следа.", routes, next: en ? "Add the strongest projects and outcomes. We will identify what can be evidenced now and what should be developed over 3–12 months." : "Добавьте самые сильные проекты и результаты. Мы определим, что уже можно подтвердить и что стоит наработать за 3–12 месяцев." };
    return { heading: en ? "Start with basic route fit" : "Сначала нужно проверить базовое соответствие", readiness: en ? "At an early stage, route choice depends on the precise role, trajectory and timing. It may be more useful to build the professional foundation before collecting immigration documents." : "На раннем этапе выбор зависит от конкретной роли, траектории и сроков. Иногда полезнее сначала укрепить профессиональную основу, а не собирать иммиграционные документы.", routes, next: en ? "Describe the experience in more detail so the team can distinguish a route to test now from a longer development plan." : "Опишите опыт подробнее, чтобы команда отличила маршрут для проверки сейчас от долгосрочного плана развития." };
  }

  function score(answers: ShortAnswers): AssessmentScores {
    const evidence = { none: 0, internal: 1, some: 2, strong: 3 }[answers.evidenceLevel as "none" | "internal" | "some" | "strong"] ?? 0;
    const level = { early: 0, middle: 1, senior: 2, founder: 2 }[answers.level as "early" | "middle" | "senior" | "founder"] ?? 0;
    const urgency = { urgent: 3, medium: 2, planned: 1, long: 0 }[answers.timing as "urgent" | "medium" | "planned" | "long"] ?? 0;
    const fitByCountry: Record<string, Record<string, number>> = {
      "United Kingdom": { specialist: 3, founder: 3, researcher: 3, remote: 1, family: 1 },
      "United States": { specialist: 3, founder: 3, researcher: 3, remote: 1, family: 1 },
      Spain: { specialist: 2, founder: 1, researcher: 1, remote: 3, family: 2 },
      France: { specialist: 2, founder: 3, researcher: 2, remote: 1, family: 2 },
      Compare: { specialist: 2, founder: 2, researcher: 2, remote: 2, family: 2 },
    };
    const fit = fitByCountry[answers.country]?.[answers.profileType] ?? 1;
    const combined = evidence + level;
    const readiness = combined >= 4 ? 3 : combined >= 3 ? 2 : combined >= 1 ? 1 : 0;
    return { fit, evidence, urgency, readiness };
  }

  function emit(event: string) { window.dispatchEvent(new CustomEvent("samotsvet:assessment", { detail: { event, assessmentId, locale } })); }

  function submitShort(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (value(data, "website")) { setStage("done"); return; }
    const answers: ShortAnswers = { name: value(data, "name"), contact: value(data, "contact"), country: value(data, "country"), profileType: value(data, "profileType"), level: value(data, "level"), evidenceLevel: value(data, "evidenceLevel"), timing: value(data, "timing"), consent: data.get("consent") === "on" };
    const assessment = evaluate(answers);
    setShortAnswers(answers); setResult(assessment); setStage("result"); setStatus("idle"); setMessage(""); emit("short_result");
  }

  async function sendAssessment(answers: ShortAnswers, detail?: FormData) {
    if (!result) return;
    const language = labels[locale];
    const scores = score(answers);
    const total = scores.fit + scores.evidence + scores.urgency + scores.readiness;
    const tier = total >= 9 ? "A" : total >= 6 ? "B" : "C";
    const detailValue = (name: string) => detail ? value(detail, name) : "";
    const profileBase = `${language.profiles[answers.profileType as keyof typeof language.profiles] || answers.profileType}; ${language.levels[answers.level as keyof typeof language.levels] || answers.level}`;
    const profileDetail = detailValue("profile");
    const evidenceBase = language.evidence[answers.evidenceLevel as keyof typeof language.evidence] || answers.evidenceLevel;
    const evidenceDetail = detailValue("evidence");
    const objectiveDetail = detailValue("objective");
    const processStage = detailValue("stage");
    const history = detailValue("history");
    const referral = detailValue("referral");
    const internalTriage = `Internal triage: Tier ${tier}; fit ${scores.fit}/3; evidence ${scores.evidence}/3; urgency ${scores.urgency}/3; readiness ${scores.readiness}/3. This is workflow priority, not visa probability.`;

    await send({
      firstName: answers.name,
      cContact: answers.contact,
      cCountry: language.countries[answers.country as keyof typeof language.countries] || answers.country,
      cRoute: detailValue("route") || result.routes.join("; "),
      cObjective: [assessmentId, result.heading, result.routes.join("; "), result.next, objectiveDetail].filter(Boolean).join(" · "),
      cTiming: language.timing[answers.timing as keyof typeof language.timing] || answers.timing,
      cCitizenship: detailValue("citizenship"),
      cResidence: detailValue("residence"),
      cFamily: detailValue("family"),
      cEmployment: detailValue("employment") || language.profiles[answers.profileType as keyof typeof language.profiles] || answers.profileType,
      cProfile: [profileBase, profileDetail].filter(Boolean).join("\n\n"),
      cProfileLink: detailValue("profileLink"),
      cEvidence: [evidenceBase, evidenceDetail].filter(Boolean).join("\n\n"),
      cStage: processStage || (en ? "Preliminary assessment completed" : "Пройдена предварительная оценка"),
      cHistory: [history, internalTriage].filter(Boolean).join("\n\n"),
      cReferral: [`Assessment ID: ${assessmentId}`, referral].filter(Boolean).join(" · "),
      cConsent: answers.consent,
      ...tracking(detail ? (en ? "assessment-detailed-en" : "assessment-detailed-ru") : (en ? "assessment-short-en" : "assessment-short-ru")),
    });
  }

  async function submitBasic() {
    if (!shortAnswers || status === "sending") return;
    setStatus("sending"); setMessage(""); emit("basic_submit");
    try {
      await sendAssessment(shortAnswers);
      setStage("done"); setStatus("idle"); emit("basic_success");
    } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : (en ? "Unable to send the form." : "Не удалось отправить данные.")); emit("basic_error"); }
  }

  async function submitDetail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!shortAnswers || status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (value(data, "website")) { setStage("done"); return; }
    setStatus("sending"); setMessage(""); emit("detail_submit");
    try {
      await sendAssessment(shortAnswers, data);
      form.reset(); setStage("done"); setStatus("idle"); emit("detail_success");
    } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : (en ? "Unable to send the form." : "Не удалось отправить анкету.")); emit("detail_error"); }
  }

  if (stage === "done") return <div className="assessment-complete" role="status"><p className="eyebrow">{en ? "Sent" : "Отправлено"}</p><h2>{en ? "The team has received your profile" : "Команда получила Ваш профиль"}</h2><p>{en ? "We will review the route, evidence and preparation gap and reply within one business day." : "Мы разберем маршрут, доказательства и пробелы подготовки и ответим в течение одного рабочего дня."}</p><Link className="button button-secondary" href={en ? "/en/" : "/"}>{en ? "Return home" : "Вернуться на главную"}</Link></div>;

  if (stage === "result" && result) return <div className="assessment-result" role="status"><p className="eyebrow">{en ? "Preliminary result" : "Предварительный результат"}</p><h2>{result.heading}</h2><p>{result.readiness}</p><div><span>{en ? "Routes worth checking" : "Какие направления стоит проверить"}</span><ul>{result.routes.map(route => <li key={route}>{route}</li>)}</ul></div><p>{result.next}</p><p className="assessment-save-note">{en ? "Nothing has been sent yet. Add detail for a more useful review, or send the short profile as it is." : "Данные еще не отправлены. Дополните профиль для более содержательного разбора или отправьте короткую анкету как есть."}</p><div className="assessment-result-actions"><button className="button button-primary" type="button" onClick={() => { setStage("detail"); setMessage(""); emit("detail_open"); }}>{en ? "Add detail and send" : "Дополнить и отправить"}</button><button className="button button-secondary" type="button" onClick={submitBasic} disabled={status === "sending"}>{status === "sending" ? (en ? "Sending..." : "Отправляем...") : (en ? "Send short profile" : "Отправить короткую анкету")}</button><Link className="text-link" href={en ? "/en/compare/" : "/compare/"}>{en ? "Compare routes" : "Сравнить маршруты"}</Link></div>{message && <p className={`form-message ${status}`} role="status">{message}</p>}<small>{en ? "This result is a triage tool, not a legal decision or approval probability." : "Это первичный скрининг, а не юридическое заключение и не процент вероятности одобрения."}</small></div>;

  if (stage === "detail" && shortAnswers) return <form className="assessment-form assessment-detail-form" onSubmit={submitDetail}><div className="assessment-progress"><span>{en ? "Stage 2 of 2" : "Этап 2 из 2"}</span><strong>{en ? "Detailed profile" : "Подробный профиль"}</strong></div>
    <fieldset className="form-section"><legend><span>01</span>{en ? "Objective and status" : "Цель и статус"}</legend><label><span className="field-label">{en ? "What would you like to resolve?" : "Что Вы хотите решить?"} <span className="required-mark">*</span></span><textarea name="objective" rows={4} required /></label><div className="form-row"><label>{en ? "Route, if selected" : "Маршрут, если уже выбран"}<input name="route" placeholder={en ? "For example, Global Talent" : "Например, Global Talent"} /></label><label><span className="field-label">{en ? "Citizenship" : "Гражданство"} <span className="required-mark">*</span></span><input name="citizenship" required /></label></div><div className="form-row"><label><span className="field-label">{en ? "Current country and status" : "Страна проживания и текущий статус"} <span className="required-mark">*</span></span><input name="residence" required /></label><label>{en ? "Relocating alone or with family" : "Переезд одному или с семьей"}<select name="family" defaultValue=""><option value="">{en ? "Select" : "Выберите"}</option><option value="Alone">{en ? "Alone" : "Один"}</option><option value="Partner">{en ? "With a partner" : "С партнером"}</option><option value="Family">{en ? "With children" : "С детьми"}</option></select></label></div></fieldset>
    <fieldset className="form-section"><legend><span>02</span>{en ? "Experience and evidence" : "Опыт и доказательства"}</legend><label><span className="field-label">{en ? "Professional or business profile" : "Профессиональный или предпринимательский профиль"} <span className="required-mark">*</span></span><textarea name="profile" rows={5} required placeholder={en ? "Role, sector, years, responsibilities and strongest outcomes" : "Роль, отрасль, стаж, зона ответственности и сильнейшие результаты"} /></label><div className="form-row"><label>{en ? "Working arrangement" : "Формат занятости"}<select name="employment" defaultValue=""><option value="">{en ? "Select" : "Выберите"}</option><option value="Employee">{en ? "Employee" : "Наем"}</option><option value="Contractor">{en ? "Contractor / freelance" : "ИП / контрактор"}</option><option value="Founder">{en ? "Founder" : "Основатель"}</option><option value="Researcher">{en ? "Researcher" : "Исследователь"}</option></select></label><label>{en ? "LinkedIn or CV link" : "Ссылка на LinkedIn или CV"}<input name="profileLink" type="url" placeholder="https://" /></label></div><label>{en ? "What evidence is already available?" : "Какие доказательства уже есть?"}<textarea name="evidence" rows={4} placeholder={en ? "Projects, metrics, publications, speaking, judging, references or other sources" : "Проекты, метрики, публикации, выступления, судейство, рекомендации и другие источники"} /></label></fieldset>
    <p className="form-privacy-note">{en ? "Do not enter passport numbers, medical information or bank details." : "Не указывайте паспортные данные, медицинские сведения и банковские реквизиты."}</p>
    <fieldset className="form-section"><legend><span>03</span>{en ? "Current stage" : "Текущий этап"}</legend><div className="form-row"><label>{en ? "Where are you in the process?" : "На каком этапе Вы находитесь?"}<select name="stage" defaultValue=""><option value="">{en ? "Select" : "Выберите"}</option><option value="Exploring">{en ? "Comparing routes" : "Сравниваю маршруты"}</option><option value="Developing">{en ? "Developing the profile" : "Нарабатываю профиль"}</option><option value="Evidence">{en ? "Collecting evidence" : "Собираю доказательства"}</option><option value="Filing">{en ? "Preparing to file" : "Готовлюсь к подаче"}</option><option value="Refusal">{en ? "Refusal or reapplication" : "Есть отказ или переподача"}</option></select></label><label>{en ? "Previous applications or refusals" : "Предыдущие подачи или отказы"}<textarea name="history" rows={3} /></label></div><label>{en ? "How did you hear about Samotsvet?" : "Откуда Вы узнали о Samotsvet?"}<select name="referral" defaultValue=""><option value="">{en ? "Select" : "Выберите"}</option><option value="Telegram">Telegram</option><option value="Search">{en ? "Search" : "Поиск"}</option><option value="Referral">{en ? "Recommendation" : "Рекомендация"}</option><option value="Social">{en ? "Social media" : "Социальные сети"}</option><option value="Other">{en ? "Other" : "Другое"}</option></select></label></fieldset>
    <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label><button className="button button-primary form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? (en ? "Sending..." : "Отправляем...") : (en ? "Send detailed profile" : "Отправить подробный профиль")}</button>{message && <p className={`form-message ${status}`} role="status">{message}</p>}
  </form>;

  return <form className="assessment-form assessment-short-form" onSubmit={submitShort}><div className="assessment-progress"><span>{en ? "Stage 1 of 2" : "Этап 1 из 2"}</span><strong>{en ? "Preliminary assessment" : "Предварительная оценка"}</strong></div>
    <fieldset className="form-section"><legend><span>01</span>{en ? "Contact" : "Контакт"}</legend><div className="form-row"><label><span className="field-label">{en ? "Your name" : "Как к Вам обращаться?"} <span className="required-mark">*</span></span><input name="name" autoComplete="name" required /></label><label><span className="field-label">{en ? "Email or Telegram" : "Электронная почта или Telegram"} <span className="required-mark">*</span></span><input name="contact" required /></label></div></fieldset>
    <fieldset className="form-section"><legend><span>02</span>{en ? "Objective" : "Цель"}</legend><div className="form-row"><label><span className="field-label">{en ? "Destination" : "Направление"} <span className="required-mark">*</span></span><select name="country" required value={selectedCountry} onChange={event => setSelectedCountry(event.target.value)}><option value="" disabled>{en ? "Select" : "Выберите"}</option><option value="Compare">{en ? "Compare several destinations" : "Нужно сравнить несколько стран"}</option><option value="United Kingdom">{en ? "United Kingdom" : "Великобритания"}</option><option value="United States">{en ? "United States" : "США"}</option><option value="Spain">{en ? "Spain" : "Испания"}</option><option value="France">{en ? "France" : "Франция"}</option></select></label><label><span className="field-label">{en ? "Profile type" : "Тип профиля"} <span className="required-mark">*</span></span><select name="profileType" required defaultValue=""><option value="" disabled>{en ? "Select" : "Выберите"}</option><option value="specialist">{en ? "Specialist or senior leader" : "Специалист или руководитель"}</option><option value="founder">{en ? "Founder or entrepreneur" : "Основатель или предприниматель"}</option><option value="researcher">{en ? "Researcher or author" : "Исследователь или автор"}</option><option value="remote">{en ? "Remote professional" : "Удаленный специалист"}</option><option value="family">{en ? "Family strategy" : "Семейная стратегия"}</option></select></label></div></fieldset>
    <fieldset className="form-section"><legend><span>03</span>{en ? "Starting point" : "Исходная точка"}</legend><div className="form-row"><label><span className="field-label">{en ? "Current level" : "Текущий уровень"} <span className="required-mark">*</span></span><select name="level" required defaultValue=""><option value="" disabled>{en ? "Select" : "Выберите"}</option><option value="early">{en ? "Early career" : "Начало карьеры"}</option><option value="middle">{en ? "Independent professional" : "Самостоятельный специалист"}</option><option value="senior">{en ? "Senior / leadership" : "Senior / руководитель"}</option><option value="founder">{en ? "Business founder" : "Основатель бизнеса"}</option></select></label><label><span className="field-label">{en ? "External evidence" : "Внешние доказательства"} <span className="required-mark">*</span></span><select name="evidenceLevel" required defaultValue=""><option value="" disabled>{en ? "Select" : "Выберите"}</option><option value="none">{en ? "No publications or external recognition yet" : "Пока нет публикаций и внешнего признания"}</option><option value="internal">{en ? "Strong results inside a company" : "Есть сильные результаты внутри компании"}</option><option value="some">{en ? "Some publications, speaking or expert roles" : "Есть отдельные публикации, выступления или экспертные роли"}</option><option value="strong">{en ? "Several independent forms of recognition" : "Есть несколько независимых подтверждений"}</option></select></label></div><label><span className="field-label">{en ? "When would you like to move or file?" : "Когда Вы хотите переехать или подать документы?"} <span className="required-mark">*</span></span><select name="timing" required defaultValue=""><option value="" disabled>{en ? "Select" : "Выберите"}</option><option value="urgent">{en ? "Within 3 months" : "До 3 месяцев"}</option><option value="medium">3–6 {en ? "months" : "месяцев"}</option><option value="planned">6–12 {en ? "months" : "месяцев"}</option><option value="long">{en ? "More than a year" : "Более года"}</option></select></label></fieldset>
    <p className="form-privacy-note">{en ? "The preliminary result is calculated in your browser. Nothing is sent until you choose to submit either the short or detailed profile. Do not enter sensitive information." : "Предварительный результат рассчитывается в Вашем браузере. Данные не отправляются, пока Вы не решите передать короткую или подробную анкету. Не указывайте чувствительные сведения."}</p>
    <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label><label className="consent-field"><input type="checkbox" name="consent" required /><span>{en ? <>I agree to personal data processing under the <Link href="/en/consent/">Data Processing Consent</Link>. <span className="required-mark">*</span></> : <>Я даю согласие на обработку персональных данных на условиях документа <Link href="/consent/">«Согласие на обработку персональных данных»</Link>. <span className="required-mark">*</span></>}</span></label><p className="form-privacy-note">{en ? <>Please read the <Link href="/en/privacy/">Privacy Policy</Link>.</> : <>Ознакомьтесь с <Link href="/privacy/">Политикой конфиденциальности</Link>.</>}</p><button className="button button-primary form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? (en ? "Assessing..." : "Проверяем...") : (en ? "See preliminary result" : "Получить предварительный результат")}</button>{message && <p className={`form-message ${status}`} role="status">{message}</p>}
  </form>;
}
