"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

type Locale = "ru" | "en";
type FormStatus = "idle" | "sending" | "error";
type Stage = "audit" | "result" | "detail" | "done";

type AuditAnswers = {
  objective: string;
  track: string;
  years: string;
  role: string;
  impact: string;
  recognition: string;
  evidence: string[];
  timing: string;
};

type RouteResult = { name: string; status: "ready" | "develop" | "review"; reason: string };
type AssessmentResult = {
  heading: string;
  readiness: string;
  strengths: string[];
  gaps: string[];
  routes: RouteResult[];
  next: string;
  foundationScore: number;
  evidenceScore: number;
  readinessScore: number;
};

const endpoint = "https://crm.samotsvetvisa.com/api/v1/LeadCapture/eaae72575ba4af3570883591e8916d30";
const countryNames: Record<string, string> = { uk: "United Kingdom", spain: "Spain", usa: "United States", france: "France" };

const dictionary = {
  ru: {
    objective: { freedom: "Работать без привязки к одному работодателю", permanent: "Искать путь к постоянному статусу", startup: "Запустить или перенести стартап", remote: "Переехать, сохранив удалённую работу", compare: "Сравнить разные сценарии" },
    track: { technical: "Технический или продуктовый специалист", business: "Руководитель или бизнес-специалист", founder: "Основатель или предприниматель", research: "Исследователь или учёный", creative: "Креативный специалист" },
    years: { junior: "0–2 года", established: "3–5 лет", senior: "6–10 лет", expert: "Более 10 лет" },
    role: { individual: "Самостоятельный специалист", lead: "Веду проекты или команду", executive: "Руководитель направления / C-level", founder: "Основатель бизнеса" },
    impact: { unclear: "Результат пока не измерялся", team: "Есть результат на уровне команды", company: "Есть влияние на продукт, выручку, пользователей или компанию", industry: "Есть влияние на отрасль, рынок или исследовательскую область" },
    recognition: { none: "Пока нет внешнего признания", internal: "Есть только внутренние подтверждения компании", some: "Есть отдельные независимые подтверждения", strong: "Есть несколько сильных независимых подтверждений" },
    timing: { urgent: "До 3 месяцев", medium: "3–6 месяцев", planned: "6–12 месяцев", long: "Более года" },
    evidence: { metrics: "Метрики и результаты проектов", publications: "Публикации или авторские материалы", speaking: "Выступления и конференции", awards: "Премии или конкурсы", judging: "Судейство или экспертный отбор", media: "Независимые упоминания в медиа", recommendations: "Сильные рекомендатели", opensource: "Open source, патенты или исследования" },
    country: { Compare: "Нужно сравнить страны", "United Kingdom": "Великобритания", "United States": "США", Spain: "Испания", France: "Франция" },
  },
  en: {
    objective: { freedom: "Work without one employer sponsor", permanent: "Explore a path to permanent status", startup: "Build or relocate a start-up", remote: "Relocate while keeping remote work", compare: "Compare different scenarios" },
    track: { technical: "Technical or product specialist", business: "Senior leader or business professional", founder: "Founder or entrepreneur", research: "Researcher or scientist", creative: "Creative professional" },
    years: { junior: "0–2 years", established: "3–5 years", senior: "6–10 years", expert: "More than 10 years" },
    role: { individual: "Individual contributor", lead: "Project or team lead", executive: "Head of function / C-level", founder: "Business founder" },
    impact: { unclear: "Outcomes have not yet been measured", team: "Outcomes at team level", company: "Impact on a product, revenue, users or company", industry: "Impact on an industry, market or research field" },
    recognition: { none: "No external recognition yet", internal: "Company evidence only", some: "Some independent evidence", strong: "Several strong independent signals" },
    timing: { urgent: "Within 3 months", medium: "3–6 months", planned: "6–12 months", long: "More than a year" },
    evidence: { metrics: "Project metrics and outcomes", publications: "Publications or authored material", speaking: "Speaking and conferences", awards: "Awards or competitions", judging: "Judging or expert selection", media: "Independent media coverage", recommendations: "Strong referees", opensource: "Open source, patents or research" },
    country: { Compare: "Compare countries", "United Kingdom": "United Kingdom", "United States": "United States", Spain: "Spain", France: "France" },
  },
} as const;

const routeName = {
  gt: "UK · Global Talent",
  innovator: "UK · Innovator Founder",
  eb1a: "US · EB-1A",
  niw: "US · EB-2 NIW",
  o1: "US · O-1",
  e2: "US · E-2",
  spain: "Spain · Digital Nomad",
  franceProject: "France · Talent — innovative project",
  franceBusiness: "France · Talent — business creation",
} as const;

export function AssessmentForm({ initialCountry = "", locale = "ru" }: { initialCountry?: string; locale?: Locale }) {
  const en = locale === "en";
  const words = dictionary[locale];
  const [stage, setStage] = useState<Stage>("audit");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [preferredCountry, setPreferredCountry] = useState(initialCountry || "Compare");
  const [answers, setAnswers] = useState<AuditAnswers | null>(null);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [startedAt] = useState(() => Date.now());
  const [assessmentId] = useState(() => `SV-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`.toUpperCase());

  useEffect(() => {
    if (initialCountry) return;
    const query = new URL(window.location.href).searchParams.get("country") || "";
    const frame = window.requestAnimationFrame(() => setPreferredCountry(countryNames[query] || "Compare"));
    return () => window.cancelAnimationFrame(frame);
  }, [initialCountry]);

  function value(data: FormData, name: string) { return String(data.get(name) || "").trim(); }
  function values(data: FormData, name: string) { return data.getAll(name).map(item => String(item)); }
  function emit(event: string) { window.dispatchEvent(new CustomEvent("samotsvet:assessment", { detail: { event, assessmentId, locale } })); }

  function evaluate(input: AuditAnswers): AssessmentResult {
    const years = { junior: 0, established: 1, senior: 2, expert: 3 }[input.years as "junior" | "established" | "senior" | "expert"] ?? 0;
    const role = { individual: 0, lead: 1, executive: 2, founder: 2 }[input.role as "individual" | "lead" | "executive" | "founder"] ?? 0;
    const impact = { unclear: 0, team: 1, company: 2, industry: 3 }[input.impact as "unclear" | "team" | "company" | "industry"] ?? 0;
    const recognition = { none: 0, internal: 1, some: 2, strong: 3 }[input.recognition as "none" | "internal" | "some" | "strong"] ?? 0;
    const evidenceBreadth = Math.min(3, Math.floor((input.evidence.length + 1) / 2));
    const foundationScore = years + role + impact;
    const evidenceScore = recognition + evidenceBreadth;
    const readinessScore = Math.min(6, Math.round((foundationScore + evidenceScore) / 2));
    const strongFoundation = foundationScore >= 5;
    const independent = recognition >= 2;
    const statusForTalent: RouteResult["status"] = strongFoundation && independent ? "ready" : foundationScore >= 3 ? "develop" : "review";
    const statusText = (ready: string, develop: string, review: string) => statusForTalent === "ready" ? ready : statusForTalent === "develop" ? develop : review;
    const route = (name: string, status: RouteResult["status"], reason: string): RouteResult => ({ name, status, reason });
    const talentReason = statusText(
      en ? "The combination of impact and independent evidence is worth testing against the formal criteria." : "Сочетание результата и независимых подтверждений стоит проверить по формальным критериям.",
      en ? "The career foundation may be usable, but the independent evidence should be developed and documented." : "Карьерная основа может быть рабочей, но независимые подтверждения нужно развить и зафиксировать.",
      en ? "More detail is needed on personal contribution, scale and evidence before drawing a conclusion." : "Нужно глубже проверить личный вклад, масштаб и подтверждения до вывода о маршруте.",
    );

    let routes: RouteResult[];
    if (input.objective === "startup" || input.track === "founder") {
      routes = [
        route(routeName.innovator, input.track === "founder" && impact >= 1 ? "review" : "develop", en ? "Requires an innovative, viable and scalable UK business concept." : "Нужна инновационная, жизнеспособная и масштабируемая бизнес-концепция для Великобритании."),
        route(routeName.franceBusiness, "review", en ? "Business plan, resources and the founder's active role require a separate check." : "Отдельно проверяются бизнес-план, ресурсы и активная роль основателя."),
        route(routeName.e2, "review", en ? "Requires treaty nationality, committed capital and an operating US business." : "Нужно проверить договорное гражданство, вложенные средства и реальный бизнес в США."),
        route(routeName.o1, statusForTalent, talentReason),
      ];
    } else if (input.objective === "remote") {
      routes = [
        route(routeName.spain, "review", en ? "Employment structure, contracts, income and social-security position must be checked." : "Нужно проверить формат работы, договоры, доход и социальное страхование."),
        route(routeName.gt, statusForTalent, talentReason),
        route(routeName.o1, statusForTalent, talentReason),
      ];
    } else if (input.objective === "permanent") {
      routes = [
        route(routeName.niw, impact >= 2 ? "review" : "develop", en ? "The proposed US endeavour and its broader importance need a separate assessment." : "Нужно отдельно оценить будущий проект в США и его более широкое значение."),
        route(routeName.eb1a, statusForTalent, talentReason),
        route(routeName.gt, statusForTalent, talentReason),
      ];
    } else if (input.objective === "freedom") {
      routes = [route(routeName.gt, statusForTalent, talentReason), route(routeName.o1, statusForTalent, talentReason), route(routeName.niw, impact >= 2 ? "review" : "develop", en ? "May be relevant where a future US endeavour has broader value." : "Может быть релевантен, если будущая деятельность в США имеет более широкое значение.")];
    } else if (input.track === "research") {
      routes = [route(routeName.niw, impact >= 2 ? "review" : "develop", en ? "Research direction and its broader value require documentary review." : "Нужно документально проверить направление исследований и его более широкое значение."), route(routeName.eb1a, statusForTalent, talentReason), route(routeName.gt, statusForTalent, talentReason), route(routeName.franceProject, "review", en ? "May fit a recognised innovative project with a French host." : "Может подойти для признанного инновационного проекта с принимающей стороной во Франции.")];
    } else {
      routes = [route(routeName.gt, statusForTalent, talentReason), route(routeName.o1, statusForTalent, talentReason), route(routeName.niw, impact >= 2 ? "review" : "develop", en ? "The future US endeavour must be defined and tested." : "Нужно сформулировать и проверить будущий проект в США."), route(routeName.spain, "review", en ? "Relevant if remote work, income and contract conditions are met." : "Релевантен при подходящем формате удалённой работы, доходе и договорах.")];
    }

    const strengths: string[] = [];
    const gaps: string[] = [];
    if (years >= 2) strengths.push(en ? "Established professional trajectory" : "Устойчивая профессиональная траектория"); else gaps.push(en ? "Clarify progression and increasing responsibility" : "Уточнить рост ответственности и профессиональную динамику");
    if (impact >= 2) strengths.push(en ? "Measurable impact beyond ordinary duties" : "Измеримый результат за пределами обычных обязанностей"); else gaps.push(en ? "Measure the strongest projects and personal contribution" : "Измерить сильнейшие проекты и личный вклад");
    if (independent) strengths.push(en ? "Independent evidence already exists" : "Уже есть независимые подтверждения"); else gaps.push(en ? "Build genuine independent evidence around existing work" : "Развить независимые подтверждения вокруг реальной работы");
    if (input.evidence.includes("publications")) strengths.push(en ? "Authored material is available" : "Есть авторские материалы");
    else gaps.push(en ? "Publications are optional: first test other evidence already available" : "Публикации не обязательны: сначала проверить другие доступные доказательства");

    const heading = strongFoundation ? (en ? "There is a foundation to build a strong case" : "Есть основа, из которой можно собрать сильный кейс") : foundationScore >= 3 ? (en ? "The profile may be developed towards a viable route" : "Профиль можно развивать в сторону рабочего маршрута") : (en ? "Start by strengthening and documenting the professional foundation" : "Сначала стоит укрепить и зафиксировать профессиональную основу");
    const readiness = independent ? (en ? "The result does not depend on a country selection: it compares the same facts across several programmes." : "Результат не зависит от выбора страны: одни и те же факты сопоставлены с несколькими программами.") : (en ? "No publications is not a rejection. Talent routes may remain in scope if genuine impact can be measured and independently evidenced." : "Отсутствие публикаций — не отказ. Талант-маршруты могут остаться в работе, если реальный результат можно измерить и подтвердить независимо.");
    const next = en ? "A document review is needed before selecting one route or committing to a development plan." : "До выбора одного маршрута или плана развития нужна проверка документов и конкретных фактов.";
    return {
      heading,
      readiness,
      strengths,
      gaps,
      routes,
      next,
      foundationScore: Math.min(3, Math.round((foundationScore / 8) * 3)),
      evidenceScore: Math.min(3, Math.round((evidenceScore / 6) * 3)),
      readinessScore: Math.min(3, Math.round((readinessScore / 6) * 3)),
    };
  }

  function tracking() {
    const pageUrl = new URL(window.location.href);
    let referrer = "";
    if (document.referrer) try { const url = new URL(document.referrer); referrer = `${url.origin}${url.pathname}`; } catch { referrer = ""; }
    return { cFormSource: en ? "profile-audit-en" : "profile-audit-ru", cUtmSource: pageUrl.searchParams.get("utm_source") || "", cUtmMedium: pageUrl.searchParams.get("utm_medium") || "", cUtmCampaign: pageUrl.searchParams.get("utm_campaign") || "", cLandingPage: pageUrl.pathname, cReferrer: referrer, cConsentAt: new Date().toISOString().replace("T", " ").replace(/\.\d{3}Z$/, ""), cPrivacyVersion: "2026-08-27", cStartedAt: String(startedAt) };
  }

  async function send(payload: Record<string, unknown>) {
    const normalized = Object.fromEntries(Object.entries(payload).map(([key, item]) => [key, item === "" ? null : item]));
    const response = await fetch(endpoint, { method: "POST", cache: "no-store", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(normalized) });
    if (!response.ok) throw new Error(en ? `Unable to send the form (${response.status}). Please try again.` : `Не удалось отправить данные (${response.status}). Попробуйте ещё раз.`);
  }

  function submitAudit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const input: AuditAnswers = { objective: value(data, "objective"), track: value(data, "track"), years: value(data, "years"), role: value(data, "role"), impact: value(data, "impact"), recognition: value(data, "recognition"), evidence: values(data, "evidence"), timing: value(data, "timing") };
    const nextResult = evaluate(input);
    setAnswers(input); setResult(nextResult); setStage("result"); setMessage(""); emit("audit_result");
  }

  async function submitDetail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!answers || !result || status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (value(data, "website")) { setStage("done"); return; }
    const routes = result.routes.map(item => `${item.name} — ${statusLabel(item.status, locale)}`).join("\n");
    const profile = [words.track[answers.track as keyof typeof words.track], words.years[answers.years as keyof typeof words.years], words.role[answers.role as keyof typeof words.role], words.impact[answers.impact as keyof typeof words.impact], value(data, "profile")].filter(Boolean).join("\n");
    const evidence = [words.recognition[answers.recognition as keyof typeof words.recognition], ...answers.evidence.map(item => words.evidence[item as keyof typeof words.evidence]), value(data, "evidence")].filter(Boolean).join("\n");
    const resultText = [result.heading, result.readiness, `Strengths: ${result.strengths.join("; ")}`, `Gaps: ${result.gaps.join("; ")}`].join("\n");
    setStatus("sending"); setMessage(""); emit("detail_submit");
    try {
      await send({
        firstName: value(data, "name"), cContact: value(data, "contact"), cCountry: words.country[preferredCountry as keyof typeof words.country] || preferredCountry,
        cRoute: result.routes.map(item => item.name).join("; "), cObjective: [words.objective[answers.objective as keyof typeof words.objective], value(data, "objective")].filter(Boolean).join("\n"),
        cTiming: words.timing[answers.timing as keyof typeof words.timing], cCitizenship: value(data, "citizenship"), cResidence: value(data, "residence"), cFamily: value(data, "family"),
        cEmployment: words.track[answers.track as keyof typeof words.track], cProfile: profile, cProfileLink: value(data, "profileLink"), cEvidence: evidence,
        cStage: en ? "Profile audit completed" : "Пройден аудит профиля", cHistory: value(data, "history"), cReferral: value(data, "referral"), cConsent: data.get("consent") === "on",
        cAssessmentId: assessmentId, cAssessmentStage: "Detailed", cAssessmentResult: resultText, cRouteCandidates: routes,
        cFitScore: result.foundationScore, cEvidenceScore: result.evidenceScore, cUrgencyScore: { urgent: 3, medium: 2, planned: 1, long: 0 }[answers.timing as "urgent" | "medium" | "planned" | "long"], cReadinessScore: result.readinessScore, cNextStep: result.next,
        ...tracking(),
      });
      form.reset(); setStage("done"); setStatus("idle"); emit("detail_success");
    } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : (en ? "Unable to send the form." : "Не удалось отправить анкету.")); emit("detail_error"); }
  }

  if (stage === "done") return <div className="assessment-complete" role="status"><p className="eyebrow">{en ? "Sent" : "Отправлено"}</p><h2>{en ? "The team has received your profile audit" : "Команда получила Ваш аудит профиля"}</h2><p>{en ? "We will review the facts, evidence and route options and reply within one business day." : "Мы проверим факты, доказательства и варианты программ и ответим в течение одного рабочего дня."}</p><Link className="button button-secondary" href={en ? "/en/" : "/"}>{en ? "Return home" : "Вернуться на главную"}</Link></div>;

  if (stage === "result" && result) return <div className="assessment-result" role="status">
    <p className="eyebrow">{en ? "Profile audit result" : "Результат аудита профиля"}</p><h2>{result.heading}</h2><p>{result.readiness}</p>
    <div className="assessment-result-columns"><ResultList title={en ? "Current strengths" : "Что уже работает"} items={result.strengths} /><ResultList title={en ? "Development priorities" : "Что стоит развить"} items={result.gaps} /></div>
    <div className="assessment-route-results"><span>{en ? "Programmes to test" : "Программы для проверки"}</span><div>{result.routes.map(item => <article key={item.name}><strong>{item.name}</strong><em className={`route-status route-status-${item.status}`}>{statusLabel(item.status, locale)}</em><p>{item.reason}</p></article>)}</div></div>
    <p>{result.next}</p><p className="assessment-save-note">{en ? "Nothing has been sent. Leave contact details only if you would like the team to review the result." : "Ничего не отправлено. Оставьте контакты только если хотите, чтобы команда проверила результат."}</p>
    <div className="assessment-result-actions"><button className="button button-primary" type="button" onClick={() => { setStage("detail"); emit("detail_open"); }}>{en ? "Request a team review" : "Получить разбор команды"}</button><button className="button button-secondary" type="button" onClick={() => { setStage("audit"); emit("audit_restart"); }}>{en ? "Change answers" : "Изменить ответы"}</button><Link className="text-link" href={en ? "/en/compare/" : "/compare/"}>{en ? "Compare all programmes" : "Сравнить все программы"}</Link></div>
    <small>{en ? "This is a screening tool, not legal advice or an approval probability." : "Это первичный скрининг, а не юридическое заключение и не процент вероятности одобрения."}</small>
  </div>;

  if (stage === "detail" && answers && result) return <form className="assessment-form assessment-detail-form" onSubmit={submitDetail}>
    <div className="assessment-progress"><span>{en ? "Optional team review" : "Необязательный разбор команды"}</span><strong>{en ? "Add context and contact details" : "Добавьте контекст и контакты"}</strong></div>
    <fieldset className="form-section"><legend><span>01</span>{en ? "Contact" : "Контакт"}</legend><div className="form-row"><label>{en ? "Your name" : "Как к Вам обращаться?"}<input name="name" autoComplete="name" required /></label><label>{en ? "Email or Telegram" : "Электронная почта или Telegram"}<input name="contact" required /></label></div></fieldset>
    <fieldset className="form-section"><legend><span>02</span>{en ? "Location and objective" : "Страна и цель"}</legend><div className="form-row"><label>{en ? "Preferred destination" : "Предпочтительное направление"}<select name="country" value={preferredCountry} onChange={event => setPreferredCountry(event.target.value)}><option value="Compare">{words.country.Compare}</option><option value="United Kingdom">{words.country["United Kingdom"]}</option><option value="United States">{words.country["United States"]}</option><option value="Spain">{words.country.Spain}</option><option value="France">{words.country.France}</option></select></label><label>{en ? "Citizenship" : "Гражданство"}<input name="citizenship" required /></label></div><div className="form-row"><label>{en ? "Country of residence and status" : "Страна проживания и текущий статус"}<input name="residence" required /></label><label>{en ? "Moving alone or with family" : "Переезд одному или с семьёй"}<select name="family" defaultValue=""><option value="">{en ? "Select" : "Выберите"}</option><option value="Alone">{en ? "Alone" : "Один"}</option><option value="Partner">{en ? "With a partner" : "С партнёром"}</option><option value="Family">{en ? "With children" : "С детьми"}</option></select></label></div><label>{en ? "What outcome would make the move successful?" : "Какой результат переезда для Вас главный?"}<textarea name="objective" rows={3} /></label></fieldset>
    <fieldset className="form-section"><legend><span>03</span>{en ? "Experience and evidence" : "Опыт и доказательства"}</legend><label>{en ? "Strongest projects and measurable outcomes" : "Сильнейшие проекты и измеримые результаты"}<textarea name="profile" rows={5} required placeholder={en ? "Your role, decisions and what changed as a result" : "Ваша роль, принятые решения и что изменилось в результате"} /></label><div className="form-row"><label>{en ? "LinkedIn, CV or portfolio" : "LinkedIn, CV или портфолио"}<input name="profileLink" type="url" placeholder="https://" /></label><label>{en ? "Previous applications or refusals" : "Предыдущие подачи или отказы"}<input name="history" /></label></div><label>{en ? "Evidence or links not covered by the audit" : "Доказательства или ссылки, которых не было в аудите"}<textarea name="evidence" rows={3} /></label><label>{en ? "How did you hear about Samotsvet?" : "Откуда Вы узнали о Samotsvet?"}<select name="referral" defaultValue=""><option value="">{en ? "Select" : "Выберите"}</option><option value="Telegram">Telegram</option><option value="Search">{en ? "Search" : "Поиск"}</option><option value="Referral">{en ? "Recommendation" : "Рекомендация"}</option><option value="Social">{en ? "Social media" : "Социальные сети"}</option><option value="Other">{en ? "Other" : "Другое"}</option></select></label></fieldset>
    <p className="form-privacy-note">{en ? "Do not enter passport numbers, medical information or bank details." : "Не указывайте паспортные данные, медицинские сведения и банковские реквизиты."}</p>
    <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label><label className="consent-field"><input type="checkbox" name="consent" required /><span>{en ? <>I agree to personal data processing under the <Link href="/en/consent/">Data Processing Consent</Link>.</> : <>Я даю согласие на обработку персональных данных на условиях документа <Link href="/consent/">«Согласие на обработку персональных данных»</Link>.</>}</span></label>
    <button className="button button-primary form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? (en ? "Sending..." : "Отправляем...") : (en ? "Send for team review" : "Отправить на разбор команды")}</button>{message && <p className={`form-message ${status}`} role="status">{message}</p>}
  </form>;

  return <form className="assessment-form assessment-audit-form" onSubmit={submitAudit}>
    <div className="assessment-progress"><span>{en ? "Local profile audit" : "Локальный аудит профиля"}</span><strong>{en ? "The country does not determine the result" : "Страна не определяет результат"}</strong></div>
    <ChoiceQuestion number="01" name="objective" title={en ? "What outcome matters most?" : "Какой результат для Вас главный?"} options={words.objective} />
    <ChoiceQuestion number="02" name="track" title={en ? "Which profile is closest to yours?" : "Какой профиль ближе всего к Вашему?"} options={words.track} />
    <ChoiceQuestion number="03" name="years" title={en ? "How long have you worked in the field?" : "Сколько лет Вы работаете в этой сфере?"} options={words.years} />
    <ChoiceQuestion number="04" name="role" title={en ? "What is your current level of responsibility?" : "Каков Ваш текущий уровень ответственности?"} options={words.role} />
    <ChoiceQuestion number="05" name="impact" title={en ? "What scale of impact can you show?" : "Какой масштаб результата Вы можете показать?"} options={words.impact} />
    <ChoiceQuestion number="06" name="recognition" title={en ? "Who can verify the work independently?" : "Кто может подтвердить работу независимо?"} options={words.recognition} />
    <fieldset className="form-section assessment-question-section"><legend><span>07</span>{en ? "Which evidence already exists?" : "Какие доказательства уже есть?"}</legend><p>{en ? "Select all that apply. Publications are not mandatory." : "Можно выбрать несколько. Публикации не обязательны."}</p><div className="assessment-choice-grid assessment-evidence-grid">{Object.entries(words.evidence).map(([key, label]) => <label className="assessment-choice" key={key}><input type="checkbox" name="evidence" value={key} /><span>{label}</span></label>)}</div></fieldset>
    <ChoiceQuestion number="08" name="timing" title={en ? "When would you like to move or file?" : "Когда Вы хотите переехать или подать документы?"} options={words.timing} />
    <p className="form-privacy-note">{en ? "The result is calculated in your browser. No answers or personal data are sent at this stage." : "Результат рассчитывается в Вашем браузере. На этом этапе ответы и персональные данные никуда не отправляются."}</p>
    <button className="button button-primary form-submit" type="submit">{en ? "See my profile audit" : "Получить аудит профиля"}</button>
  </form>;
}

function ChoiceQuestion({ number, name, title, options }: { number: string; name: string; title: string; options: Record<string, string> }) {
  return <fieldset className="form-section assessment-question-section"><legend><span>{number}</span>{title}</legend><div className="assessment-choice-grid">{Object.entries(options).map(([key, label]) => <label className="assessment-choice" key={key}><input type="radio" name={name} value={key} required /><span>{label}</span></label>)}</div></fieldset>;
}

function ResultList({ title, items }: { title: string; items: string[] }) {
  return <section><span>{title}</span><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></section>;
}

function statusLabel(status: RouteResult["status"], locale: Locale) {
  if (locale === "en") return status === "ready" ? "Foundation exists now" : status === "develop" ? "Promising after development" : "Requires deeper review";
  return status === "ready" ? "Есть основа сейчас" : status === "develop" ? "Перспективно после развития кейса" : "Нужно проверить глубже";
}
