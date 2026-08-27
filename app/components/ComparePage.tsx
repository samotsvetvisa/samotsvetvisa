import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SITE_URL, withTrailingSlash } from "../site";

type Locale = "ru" | "en";

const routes = {
  ru: [
    ["UK", "Global Talent", "Работа и развитие карьеры без спонсора-работодателя", "Не требуется", "Признание, личный вклад, независимые источники", "2–4 месяца после готовности доказательств", "Эндорсмент: 2–8 недель; виза обычно 3 недели извне UK / 8 недель изнутри", "/countries/uk/#route-global-talent"],
    ["UK", "Innovator Founder", "Запуск и развитие инновационного бизнеса", "Endorsing body", "Инновационность, жизнеспособность, масштабируемость", "От 2 месяцев плюс время на endorsement", "Эндорсмент отдельно; виза обычно 3 недели извне UK / 8 недель изнутри", "/countries/uk/#route-innovator-founder"],
    ["US", "EB-1A", "Иммиграционная категория для выдающихся способностей", "Работодатель не обязателен", "Устойчивое признание и продолжение работы в области", "От 1 месяца на подготовку", "I-140 Premium Processing: 15 рабочих дней; следующий этап отдельно", "/countries/usa/#route-eb-1a"],
    ["US", "EB-2 NIW", "Иммиграционная категория через национальный интерес", "Работодатель не обязателен", "Proposed endeavor, национальное значение и готовность", "От 1 месяца на подготовку", "I-140 Premium Processing: 45 рабочих дней; следующий этап отдельно", "/countries/usa/#route-eb-2-niw"],
    ["US", "O-1", "Временная работа по заявленной профессиональной деятельности", "Петиционер: работодатель или агент", "Достижения, область работы и будущие проекты", "От 1 месяца на подготовку", "USCIS Premium Processing: 15 рабочих дней; консульский этап отдельно", "/countries/usa/#route-o-1"],
    ["US", "E-2", "Работа через существенные инвестиции в действующий бизнес", "Собственный или контролируемый бизнес", "Гражданство договорной страны, инвестиции и контроль", "Зависит от готовности бизнеса", "Зависит от консульства", "/countries/usa/#route-e-2"],
    ["ES", "Digital Nomad", "ВНЖ для международной удаленной работы", "Зарубежный работодатель или клиенты", "Договоры, стаж, доход, страхование и семья", "От 1 месяца на подготовку", "Нормативно: виза 10 рабочих дней / UGE 20 дней", "/countries/spain/#route-digital-nomad-visa"],
    ["FR", "Talent — innovative project", "Переезд для реализации признанного инновационного проекта", "Подтверждение проекта во французской экосистеме", "Проект, ресурсы и необходимая роль заявителя", "От 2 месяцев на подготовку", "Зависит от рассматривающего органа, консульства и префектуры", "/countries/france/#route-french-tech-visa"],
    ["FR", "Talent — entrepreneur", "Создание или развитие бизнеса во Франции", "Собственный проект", "Бизнес-план, финансирование и опыт", "От 2 месяцев на подготовку", "Зависит от консульства и префектуры", "/countries/france/#route-talent-business"],
  ],
  en: [
    ["UK", "Global Talent", "Work and career development without employer sponsorship", "Not required", "Recognition, personal contribution and independent sources", "2–4 months once evidence is ready", "Endorsement: 2–8 weeks; visa usually 3 weeks outside / 8 weeks inside the UK", "/en/countries/uk/#route-global-talent"],
    ["UK", "Innovator Founder", "Build and grow an innovative business", "Endorsing body", "Innovation, viability and scalability", "From 2 months plus endorsement", "Endorsement separately; visa usually 3 weeks outside / 8 weeks inside the UK", "/en/countries/uk/#route-innovator-founder"],
    ["US", "EB-1A", "An immigrant category for extraordinary ability", "Employer not required", "Sustained recognition and continued work", "From 1 month for preparation", "I-140 Premium Processing: 15 business days; later stage separate", "/en/countries/usa/#route-eb-1a"],
    ["US", "EB-2 NIW", "An immigrant category based on national interest", "Employer not required", "Proposed endeavour, national importance and readiness", "From 1 month for preparation", "I-140 Premium Processing: 45 business days; later stage separate", "/en/countries/usa/#route-eb-2-niw"],
    ["US", "O-1", "Temporary work in the stated professional field", "Petitioner: employer or agent", "Achievements, field of work and future projects", "From 1 month for preparation", "USCIS Premium Processing: 15 business days; consular stage separate", "/en/countries/usa/#route-o-1"],
    ["US", "E-2", "Work through a substantial investment in an operating business", "Owned or controlled business", "Treaty nationality, investment and control", "Depends on business readiness", "Depends on the consulate", "/en/countries/usa/#route-e-2"],
    ["ES", "Digital Nomad", "Residence for international remote work", "Overseas employer or clients", "Contracts, experience, income, insurance and family", "From 1 month for preparation", "Statutory periods: 10 business days for a visa / 20 days at UGE", "/en/countries/spain/#route-digital-nomad-visa"],
    ["FR", "Talent — innovative project", "Relocation to deliver a recognised innovative project", "Project recognition in the French ecosystem", "Project, resources and the applicant's essential role", "From 2 months for preparation", "Depends on the reviewing authority, consulate and prefecture", "/en/countries/france/#route-french-tech-visa"],
    ["FR", "Talent — entrepreneur", "Create or develop a business in France", "Own project", "Business plan, funding and experience", "From 2 months for preparation", "Depends on the consulate and prefecture", "/en/countries/france/#route-talent-business"],
  ],
} as const;

export function ComparePage({ locale = "ru" }: { locale?: Locale }) {
  const en = locale === "en";
  const base = en ? "/en" : "";
  const headings = en
    ? ["Country", "Route", "Purpose", "Sponsor or external party", "Core evidential task", "Preparation", "Government processing"]
    : ["Страна", "Маршрут", "Основная задача", "Спонсор или внешний участник", "Ключевая доказательственная задача", "Подготовка", "Рассмотрение ведомством"];
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: en ? "Home" : "Главная", item: `${SITE_URL}${base || "/"}` }, { "@type": "ListItem", position: 2, name: en ? "Route comparison" : "Сравнение маршрутов", item: `${SITE_URL}${base}/compare/` }] };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <SiteHeader locale={locale} />
    <main>
      <section className="inner-hero section-shell compare-hero"><div><p className="eyebrow">{en ? "Route comparison" : "Сравнение маршрутов"}</p><h1>{en ? "Nine routes answer different immigration questions" : "Девять маршрутов решают разные иммиграционные задачи"}</h1></div><p>{en ? "Start with the status and practical outcome required. The evidence comes next: the same career fact can have a different function in each programme." : "Сначала определите нужный статус и практический результат. Затем переходите к доказательствам: один и тот же факт карьеры может выполнять разную функцию в каждой программе."}</p></section>
      <section className="section-shell compare-page-section">
        <div className="comparison-table-wrap"><table className="comparison-table comparison-table-full"><thead><tr>{headings.map(h => <th key={h}>{h}</th>)}</tr></thead><tbody>{routes[locale].map(([country, route, purpose, sponsor, evidence, timing, processing, href]) => <tr key={`${country}-${route}`}><td>{country}</td><td><Link href={href}>{route} <span aria-hidden="true">↗</span></Link></td><td>{purpose}</td><td>{sponsor}</td><td>{evidence}</td><td>{timing}</td><td>{processing}</td></tr>)}</tbody></table></div>
        <p className="compare-disclaimer">{en ? "This table is a starting point, not an eligibility decision. Citizenship, present status, family circumstances, filing location and documentary detail may change the route. For Russian nationals, US immigrant-visa issuance is currently paused; see the US page for the scope and exceptions." : "Таблица задает направление анализа, но не заменяет оценку соответствия. Гражданство, текущий статус, семья, место подачи и содержание документов могут изменить вывод. Для граждан России сейчас приостановлена выдача иммиграционных виз США; объем ограничения и исключения разобраны на странице США."}</p>
      </section>
      <section className="section-shell closing-cta"><div><p className="eyebrow eyebrow-light">{en ? "Your circumstances" : "Ваша ситуация"}</p><h2>{en ? "Compare the routes against your actual profile" : "Сравним маршруты на Ваших фактах"}</h2></div><div><p>{en ? "The preliminary assessment identifies plausible options, present readiness and the questions requiring documentary review." : "Предварительная оценка покажет возможные направления, текущую готовность и вопросы, которые требуют проверки документов."}</p><Link className="button button-gold" href={withTrailingSlash(`${base}/assessment`)}>{en ? "Start assessment" : "Начать оценку"}</Link></div></section>
    </main>
    <SiteFooter locale={locale} />
  </>;
}
