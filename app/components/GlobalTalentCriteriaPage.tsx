import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SITE_URL, withTrailingSlash } from "../site";

type Locale = "ru" | "en";

const copy = {
  ru: {
    eyebrow: "Открытая методика",
    title: "Карта критериев UK Global Talent для digital technology",
    intro: "Карта помогает разложить опыт на проверяемые тезисы до подготовки комплекта. Она не подменяет правила endorsing body и не превращает количество документов в прогноз одобрения.",
    checked: "Сверено с GOV.UK 27 августа 2026 года",
    startTitle: "Сначала проверяем рамку маршрута",
    start: [
      ["Область", "Техническая или бизнес-роль в digital technology: например, разработка, инженерия, data science, коммерческая, инвестиционная или продуктовая работа в технологической компании."],
      ["Уровень", "Exceptional Talent — признанный лидер. Exceptional Promise — потенциальный лидер; GOV.UK указывает, что у таких заявителей обычно менее пяти лет опыта именно в technology, хотя общая карьера может быть длиннее."],
      ["Базовый тезис", "Нужно показать признание другими людьми как лидера или потенциального лидера в digital technology за последние пять лет."],
    ],
    mapTitle: "Помимо признания нужны минимум два дополнительных основания",
    mapIntro: "Ни один тип активности не работает автоматически. Важно показать личный вклад, уровень результата, независимый контекст и связь факта с заявленным основанием.",
    headers: ["Основание по GOV.UK", "Что ищем в фактах", "Что обычно ослабляет доказательство"],
    rows: [
      ["Инновация как основатель или senior executive product-led компании", "Новое решение, роль в его создании, подтвержденное внедрение и коммерческий или отраслевой результат", "Название стартапа, общие слова об инновации или чужой результат без личного вклада"],
      ["Инновация как сотрудник в новой технологической области или концепции", "Необычная техническая или продуктовая задача, собственные решения и проверяемый эффект", "Обычные обязанности, NDA без допустимых внешних подтверждений или только письмо работодателя"],
      ["Вклад в digital-сектор вне основной работы", "Менторство, совместные проекты, open source, профессиональное сообщество или иная деятельность с реальным результатом", "Формальное членство, разовая активность или участие без подтвержденного влияния"],
      ["Значимый технический, коммерческий или предпринимательский вклад в product-led компании", "Масштаб продукта или бизнеса, конкретная роль, метрики до и после, независимые источники", "Описание компании вместо достижений заявителя или цифры без источника и контекста"],
      ["Опубликованное исследование или экспертное подтверждение исследования", "Исследовательский вопрос, авторский вклад, качество площадки, цитирование, применение или оценка признанного эксперта", "Сам факт публикации без качества, вклада, результата и связи с digital technology"],
    ],
    docsTitle: "Архитектура комплекта",
    docs: [
      ["До 10 доказательных документов", "Как минимум два должны показывать признание лидером или потенциальным лидером. Еще как минимум четыре — подтверждать два выбранных дополнительных основания, по два документа на каждое."],
      ["Один документ — одно основание", "GOV.UK прямо указывает, что один и тот же документ нельзя использовать для нескольких критериев."],
      ["CV", "Печатное резюме объемом до трех страниц A4, включая релевантную историю публикаций."],
      ["Три рекомендации", "Разные примеры достижений и вклада; авторы — established experts, которые знают работу заявителя не менее 12 месяцев. Письма готовятся именно для Global Talent."],
      ["Связь с технологическим бизнесом", "Основатель или senior executive за последние пять лет дополнительно подтверждает эту связь, например данными о продажах, клиентах и отчетностью."],
    ],
    methodTitle: "Как мы применяем карту",
    method: [
      ["01", "Фиксируем тезис", "Что именно должен понять оценивающий орган и к какому основанию относится факт."],
      ["02", "Разделяем источники", "Внутренний документ подтверждает роль; независимый источник — контекст, масштаб или признание."],
      ["03", "Проверяем противоречия", "Даты, должности, показатели и версии одного события должны совпадать во всем комплекте."],
      ["04", "Строим план пробелов", "Если готовых подтверждений нет, определяем реальные профессиональные действия на 3–12 месяцев и способ заранее фиксировать результат."],
    ],
    sourceTitle: "Официальные источники",
    sourceNote: "Требования могут измениться. Перед подачей нужно заново проверить действующие страницы GOV.UK и инструкции endorsing body.",
    ctaTitle: "Разложим Ваш опыт по карте без псевдопроцента",
    ctaBody: "Аудит профиля покажет, какие основания стоит проверить, что уже можно подтвердить и где нужен план развития профиля.",
    cta: "Пройти аудит профиля",
  },
  en: {
    eyebrow: "Open methodology",
    title: "UK Global Talent criteria map for digital technology",
    intro: "This map helps turn experience into testable propositions before a bundle is prepared. It does not replace the endorsing body's rules or turn document counts into an approval forecast.",
    checked: "Checked against GOV.UK on 27 August 2026",
    startTitle: "Test the route framework first",
    start: [
      ["Field", "A technical or business role in digital technology, such as development, engineering, data science, or commercial, investment or product work in a technology company."],
      ["Level", "Exceptional Talent means an established leader. Exceptional Promise means a potential leader; GOV.UK says these applicants are likely to have less than five years of experience in technology, although their wider career may be longer."],
      ["Core proposition", "The applicant must show recognition by others as a leader or potential leader in digital technology during the last five years."],
    ],
    mapTitle: "Recognition plus at least two further grounds",
    mapIntro: "No activity succeeds automatically. The record should establish personal contribution, quality of the outcome, independent context and a clear link to the selected ground.",
    headers: ["GOV.UK ground", "Facts to look for", "What commonly weakens the evidence"],
    rows: [
      ["Innovation as a founder or senior executive of a product-led company", "A new solution, the applicant's creation role, verified implementation and commercial or sector outcome", "A start-up name, generic innovation language or another person's result without personal contribution"],
      ["Innovation as an employee in a new technology field or concept", "An unusual technical or product problem, the applicant's decisions and a verifiable effect", "Ordinary duties, an NDA without acceptable external support, or only an employer letter"],
      ["Contribution to the digital sector outside work", "Mentoring, collaborative projects, open source, a professional community or other activity with a genuine outcome", "Nominal membership, a one-off activity or participation without evidence of impact"],
      ["Significant technical, commercial or entrepreneurial contribution to a product-led company", "Product or business scale, the applicant's precise role, before-and-after metrics and independent sources", "A description of the company instead of the applicant's achievement, or figures without a source and context"],
      ["Published research or expert endorsement of research", "The research question, authorship contribution, quality of the venue, citations, application or assessment by an established expert", "The bare fact of publication without quality, contribution, outcome or a digital-technology link"],
    ],
    docsTitle: "Bundle architecture",
    docs: [
      ["Up to 10 evidence documents", "At least two should show recognition as a leader or potential leader. At least four more should support two selected further grounds, using two documents for each."],
      ["One document, one ground", "GOV.UK states that the same piece of evidence cannot be used for more than one criterion."],
      ["CV", "A typed CV of up to three A4 sides, including relevant publication history."],
      ["Three recommendation letters", "Different examples of achievements and contribution; authors must be established experts who have known the applicant's work for at least 12 months. Each letter is written for the Global Talent application."],
      ["Technology-business connection", "A founder or senior executive in the last five years also provides proof of that connection, such as sales, customer and accounting records."],
    ],
    methodTitle: "How we use the map",
    method: [
      ["01", "Define the proposition", "What the assessor should understand and which ground the fact is meant to support."],
      ["02", "Separate the sources", "An internal document establishes the role; an independent source establishes context, scale or recognition."],
      ["03", "Reconcile contradictions", "Dates, titles, metrics and accounts of the same event should agree across the record."],
      ["04", "Build a gap plan", "Where evidence is not ready, define genuine professional activity over 3–12 months and a method for recording its result from the outset."],
    ],
    sourceTitle: "Official sources",
    sourceNote: "Requirements can change. Re-check the current GOV.UK pages and endorsing-body guidance before filing.",
    ctaTitle: "Map your experience without a spurious percentage",
    ctaBody: "The profile audit identifies grounds worth testing, evidence already available and areas requiring a profile-development plan.",
    cta: "Start profile audit",
  },
} as const;

const sources = [
  ["GOV.UK: eligibility", "https://www.gov.uk/global-talent-digital-technology/eligibility"],
  ["GOV.UK: endorsement documents", "https://www.gov.uk/global-talent-digital-technology/documents-you-need-to-apply-endorsement"],
  ["GOV.UK: route overview", "https://www.gov.uk/global-talent-digital-technology"],
] as const;

export function GlobalTalentCriteriaPage({ locale = "ru" }: { locale?: Locale }) {
  const en = locale === "en";
  const text = copy[locale];
  const base = en ? "/en" : "";
  const path = `${base}/global-talent-criteria/`;
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: en ? "Home" : "Главная", item: `${SITE_URL}${base || "/"}` }, { "@type": "ListItem", position: 2, name: text.title, item: `${SITE_URL}${path}` }] };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <SiteHeader locale={locale} />
    <main>
      <section className="inner-hero section-shell criteria-hero"><div><p className="eyebrow">{text.eyebrow}</p><h1>{text.title}</h1></div><div><p>{text.intro}</p><strong className="criteria-reviewed">{text.checked}</strong></div></section>
      <section className="section-shell criteria-section"><h2>{text.startTitle}</h2><div className="criteria-start-grid">{text.start.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section className="criteria-band"><div className="section-shell criteria-section"><div className="section-heading"><div><p className="eyebrow eyebrow-light">{en ? "Evidence map" : "Карта доказательств"}</p><h2>{text.mapTitle}</h2></div><p>{text.mapIntro}</p></div><div className="legal-table-wrap"><table className="legal-table criteria-table"><thead><tr>{text.headers.map(header => <th key={header}>{header}</th>)}</tr></thead><tbody>{text.rows.map(row => <tr key={row[0]}>{row.map(cell => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div></div></section>
      <section className="section-shell criteria-section"><h2>{text.docsTitle}</h2><div className="criteria-docs">{text.docs.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>
      <section className="section-shell section-block compact-process criteria-process"><p className="eyebrow">{en ? "Working method" : "Методика работы"}</p><h2>{text.methodTitle}</h2><ol>{text.method.map(([number, title, body]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></section>
      <section className="section-shell sources-block criteria-sources"><div><p className="eyebrow">{en ? "Primary sources" : "Первоисточники"}</p><h2>{text.sourceTitle}</h2><p>{text.sourceNote}</p></div><div>{sources.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={href}>{label} <span>↗</span></a>)}</div></section>
      <section className="section-shell closing-cta"><div><p className="eyebrow eyebrow-light">{en ? "Your profile" : "Ваш профиль"}</p><h2>{text.ctaTitle}</h2></div><div><p>{text.ctaBody}</p><Link className="button button-gold" href={withTrailingSlash(`${base}/assessment`)}>{text.cta}</Link></div></section>
    </main>
    <SiteFooter locale={locale} />
  </>;
}
