import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SITE_URL, withTrailingSlash } from "../site";

type Locale = "ru" | "en";

type Route = {
  name: string;
  outcome: string;
  forWhom: string;
  evidence: string;
  preparation: string;
  processing: string;
  external: string;
  href: string;
};

type CountryGroup = {
  id: string;
  code: string;
  country: string;
  intro: string;
  routes: Route[];
};

const groups: Record<Locale, CountryGroup[]> = {
  ru: [
    {
      id: "uk",
      code: "UK",
      country: "Великобритания",
      intro: "Два маршрута без классического спонсорства работодателя: через профессиональные достижения или инновационный стартап.",
      routes: [
        {
          name: "Global Talent",
          outcome: "Работа, смена работодателя, самостоятельная занятость и собственный бизнес без привязки к одному спонсору.",
          forWhom: "Специалисты и основатели в digital technology, а также заявители в науке, искусстве и других поддерживаемых направлениях.",
          evidence: "Признание в профессиональной области, личный вклад, результаты и независимые источники. Публикации – лишь один из возможных видов доказательств.",
          preparation: "Обычно от 2–4 месяцев, если основа уже есть; при развитии профиля – дольше.",
          processing: "Предварительное одобрение профильной организации – обычно 2–8 недель; визовый этап – ориентировочно 3 недели из-за рубежа или 8 недель из Великобритании.",
          external: "Профильная организация, которая выдает предварительное одобрение (endorsement). Работодатель не требуется.",
          href: "/countries/uk/#route-global-talent",
        },
        {
          name: "Innovator Founder",
          outcome: "Запуск и развитие инновационного стартапа в Великобритании с возможностью вести бизнес самостоятельно.",
          forWhom: "Основатели с новой, жизнеспособной и масштабируемой бизнес-моделью, которую планируют реализовывать в Великобритании.",
          evidence: "Инновационность идеи, жизнеспособность модели, потенциал масштабирования и реальная роль основателя.",
          preparation: "От 2 месяцев плюс время на проработку проекта и получение предварительного одобрения.",
          processing: "Срок предварительного одобрения зависит от выбранной организации; визовый этап – обычно 3 недели из-за рубежа или 8 недель из Великобритании.",
          external: "Уполномоченная организация, которая оценивает стартап и выдает предварительное одобрение. Работодатель не требуется.",
          href: "/countries/uk/#route-innovator-founder",
        },
      ],
    },
    {
      id: "usa",
      code: "US",
      country: "США",
      intro: "Четыре программы с разным результатом: постоянный статус, временная работа или переезд через инвестиционный бизнес.",
      routes: [
        {
          name: "EB-1A – выдающиеся способности",
          outcome: "Иммиграционная категория, которая может привести к постоянному статусу без обязательного работодателя.",
          forWhom: "Специалисты и основатели с устойчивым признанием и достижениями высокого уровня в своей области.",
          evidence: "Формальные критерии плюс итоговая оценка всего кейса: масштаб признания, личный вклад и продолжение работы в области.",
          preparation: "От 1–2 месяцев при готовой доказательственной базе; при развитии профиля – дольше.",
          processing: "Иммиграционная служба США (USCIS): ускоренное рассмотрение петиции I-140 – 15 рабочих дней. Консульский этап или смена статуса внутри США идут отдельно.",
          external: "Работодатель не обязателен: заявитель может подать петицию самостоятельно.",
          href: "/countries/usa/#route-eb-1a",
        },
        {
          name: "EB-2 NIW – национальный интерес",
          outcome: "Иммиграционная категория с освобождением от работодателя и трудовой сертификации в интересах США.",
          forWhom: "Специалисты, исследователи и предприниматели с конкретным планом будущей деятельности в США и подтвержденной способностью его реализовать.",
          evidence: "Значение будущей деятельности для США, готовность заявителя продвигать ее и основания отказаться от обычного требования работодателя.",
          preparation: "От 1–2 месяцев после формирования будущего плана и доказательственной логики.",
          processing: "Иммиграционная служба США (USCIS): ускоренное рассмотрение петиции I-140 – 45 рабочих дней. Следующий иммиграционный этап рассматривается отдельно.",
          external: "Работодатель не обязателен: заявитель может подать петицию самостоятельно.",
          href: "/countries/usa/#route-eb-2-niw",
        },
        {
          name: "O-1 – выдающиеся специалисты",
          outcome: "Временная работа в США по заявленной профессиональной деятельности и конкретным будущим проектам.",
          forWhom: "Специалисты с достижениями и подтвержденной работой в США через работодателя или агента.",
          evidence: "Профессиональные достижения, признание, связь прошлых результатов с будущей работой и документы по проектам.",
          preparation: "Обычно от 1–2 месяцев после определения американского заявителя и будущих проектов.",
          processing: "Иммиграционная служба США (USCIS): ускоренное рассмотрение – 15 рабочих дней; консульский этап идет отдельно.",
          external: "Американский работодатель или агент подает петицию. Самостоятельная подача невозможна.",
          href: "/countries/usa/#route-o-1",
        },
        {
          name: "E-2 – инвестиционный бизнес",
          outcome: "Временный статус для развития и контроля действующего бизнеса в США.",
          forWhom: "Граждане стран, имеющих соответствующий договор с США, готовые вложить существенные средства в реальный бизнес.",
          evidence: "Гражданство договорной страны, законное происхождение средств, реальность инвестиций, работающая модель и контроль над компанией.",
          preparation: "Зависит от готовности бизнеса, сделки и документов по происхождению средств.",
          processing: "Срок зависит от конкретного консульства и места подачи.",
          external: "Собственный или контролируемый бизнес в США; отдельный работодатель не нужен.",
          href: "/countries/usa/#route-e-2",
        },
      ],
    },
    {
      id: "spain",
      code: "ES",
      country: "Испания",
      intro: "Маршрут для удаленной работы на зарубежную компанию или клиентов с разными требованиями к сотрудникам и ИП/контракторам.",
      routes: [
        {
          name: "Digital Nomad – ВНЖ для удаленной работы",
          outcome: "Право жить в Испании и работать удаленно на зарубежную компанию или иностранных клиентов.",
          forWhom: "Сотрудники иностранных компаний, ИП и контракторы, которые соответствуют требованиям к стажу, договору, доходу и формату работы.",
          evidence: "Трудовые или коммерческие договоры, стаж отношений, квалификация, доход, страхование и документы семьи.",
          preparation: "Обычно от 1 месяца при стабильной занятости и готовых справках.",
          processing: "Для визы через консульство нормативный срок – 10 рабочих дней. При подаче из Испании подразделение по работе с крупными компаниями и международными специалистами рассматривает заявление нормативно до 20 дней.",
          external: "Зарубежный работодатель или клиенты подтверждают отношения и разрешение на удаленную работу.",
          href: "/countries/spain/#route-digital-nomad-visa",
        },
      ],
    },
    {
      id: "france",
      code: "FR",
      country: "Франция",
      intro: "Программы Talent отличаются основанием: признанный инновационный проект или собственная предпринимательская деятельность.",
      routes: [
        {
          name: "Talent – инновационный проект",
          outcome: "Переезд во Францию для реализации инновационного проекта, признанного уполномоченной организацией.",
          forWhom: "Основатели и ключевые участники инновационных проектов, которым нужна французская экосистема для реализации плана.",
          evidence: "Инновационность проекта, его признание, ресурсы, финансирование и необходимая роль заявителя.",
          preparation: "Обычно от 2 месяцев плюс срок получения признания проекта.",
          processing: "Зависит от органа, который подтверждает проект, а затем от консульства и префектуры.",
          external: "Французская организация или государственный орган подтверждает инновационный характер проекта.",
          href: "/countries/france/#route-french-tech-visa",
        },
        {
          name: "Talent – предприниматель",
          outcome: "Создание или развитие собственного бизнеса во Франции.",
          forWhom: "Предприниматели с опытом, финансированием и реалистичным планом деятельности во Франции.",
          evidence: "Бизнес-план, профессиональный опыт, финансирование, экономическая жизнеспособность и роль заявителя.",
          preparation: "Обычно от 2 месяцев после формирования проекта и финансовой модели.",
          processing: "Зависит от консульства и префектуры; единого срока для всей процедуры нет.",
          external: "Собственный проект; отдельный работодатель обычно не требуется.",
          href: "/countries/france/#route-talent-business",
        },
      ],
    },
  ],
  en: [
    {
      id: "uk",
      code: "UK",
      country: "United Kingdom",
      intro: "Two routes without conventional employer sponsorship: one based on professional achievement and one on an innovative start-up.",
      routes: [
        {
          name: "Global Talent",
          outcome: "Work, change employers, be self-employed and run a business without being tied to one sponsor.",
          forWhom: "Specialists and founders in digital technology, as well as applicants in science, arts and other supported fields.",
          evidence: "Recognition in the field, personal contribution, outcomes and independent sources. Publications are only one possible form of evidence.",
          preparation: "Usually 2–4 months where the foundation exists; longer where the profile must be developed.",
          processing: "Endorsement by the relevant professional body usually takes 2–8 weeks; the visa stage is normally around 3 weeks from abroad or 8 weeks from inside the UK.",
          external: "A professional body issues the initial approval, known as endorsement. No employer is required.",
          href: "/en/countries/uk/#route-global-talent",
        },
        {
          name: "Innovator Founder",
          outcome: "Build and grow an innovative start-up in the United Kingdom.",
          forWhom: "Founders with a new, viable and scalable business model they intend to deliver in the UK.",
          evidence: "Innovation, viability, scalability and the founder's genuine role in the business.",
          preparation: "From 2 months, plus the time required to develop the project and obtain endorsement.",
          processing: "The endorsement period depends on the chosen body; the visa stage is normally around 3 weeks from abroad or 8 weeks from inside the UK.",
          external: "An authorised endorsing body assesses the start-up. No employer is required.",
          href: "/en/countries/uk/#route-innovator-founder",
        },
      ],
    },
    {
      id: "usa",
      code: "US",
      country: "United States",
      intro: "Four programmes with different outcomes: permanent residence, temporary work or relocation through an investment business.",
      routes: [
        {
          name: "EB-1A – extraordinary ability",
          outcome: "An immigrant category that may lead to permanent residence without a required employer.",
          forWhom: "Specialists and founders with sustained recognition and high-level achievement in their field.",
          evidence: "Threshold criteria and a final review of the whole record: the scale of recognition, personal contribution and continued work in the field.",
          preparation: "From 1–2 months with a mature evidence base; longer where the profile needs development.",
          processing: "US Citizenship and Immigration Services (USCIS): premium processing of the I-140 immigrant petition takes 15 business days. Consular processing or adjustment of status is separate.",
          external: "No employer is required; the applicant may file the petition independently.",
          href: "/en/countries/usa/#route-eb-1a",
        },
        {
          name: "EB-2 NIW – national interest waiver",
          outcome: "An immigrant category that waives the employer and labour-certification requirements in the US national interest.",
          forWhom: "Specialists, researchers and entrepreneurs with a defined proposed endeavour in the United States and evidence that they can advance it.",
          evidence: "The importance of the proposed work, the applicant's ability to advance it and the reasons for waiving the ordinary employer requirement.",
          preparation: "From 1–2 months once the proposed endeavour and evidential logic are defined.",
          processing: "US Citizenship and Immigration Services (USCIS): premium processing of the I-140 immigrant petition takes 45 business days. The later immigration stage is separate.",
          external: "No employer is required; the applicant may file the petition independently.",
          href: "/en/countries/usa/#route-eb-2-niw",
        },
        {
          name: "O-1 – extraordinary ability",
          outcome: "Temporary work in the United States in the stated field and on documented future projects.",
          forWhom: "Accomplished specialists with a US employer or agent and defined work in the United States.",
          evidence: "Professional achievement, recognition, continuity between past work and future activity, and documents for the proposed projects.",
          preparation: "Usually 1–2 months once the US petitioner and future projects are defined.",
          processing: "US Citizenship and Immigration Services (USCIS): premium processing takes 15 business days; the consular stage is separate.",
          external: "A US employer or agent files the petition. Self-petitioning is not available.",
          href: "/en/countries/usa/#route-o-1",
        },
        {
          name: "E-2 – investment business",
          outcome: "Temporary status to develop and control an operating business in the United States.",
          forWhom: "Nationals of treaty countries who are prepared to invest a substantial amount in a genuine business.",
          evidence: "Treaty nationality, lawful source of funds, a committed investment, a viable business and control by the applicant.",
          preparation: "Depends on the readiness of the business, transaction and source-of-funds evidence.",
          processing: "Timing depends on the particular consulate and filing location.",
          external: "An owned or controlled US business; no separate employer is required.",
          href: "/en/countries/usa/#route-e-2",
        },
      ],
    },
    {
      id: "spain",
      code: "ES",
      country: "Spain",
      intro: "A route for remote work for an overseas company or clients, with different evidence for employees and self-employed contractors.",
      routes: [
        {
          name: "Digital Nomad – remote-work residence",
          outcome: "Live in Spain while working remotely for an overseas company or foreign clients.",
          forWhom: "Employees of foreign companies and self-employed contractors who meet the experience, contract, income and working-arrangement requirements.",
          evidence: "Employment or commercial contracts, duration of the relationship, qualifications, income, insurance and family documents.",
          preparation: "Usually from 1 month where employment and supporting certificates are stable.",
          processing: "The statutory period for a consular visa is 10 business days. An in-country residence application is handled within a statutory 20-day period by Spain's Large Companies and Strategic Groups Unit (Unidad de Grandes Empresas).",
          external: "The overseas employer or clients confirm the relationship and permission for remote work.",
          href: "/en/countries/spain/#route-digital-nomad-visa",
        },
      ],
    },
    {
      id: "france",
      code: "FR",
      country: "France",
      intro: "Talent programmes differ by basis: a recognised innovative project or the applicant's own entrepreneurial activity.",
      routes: [
        {
          name: "Talent – innovative project",
          outcome: "Relocate to France to deliver an innovative project recognised by an authorised organisation.",
          forWhom: "Founders and essential project participants who need the French ecosystem to deliver an innovative plan.",
          evidence: "The project's innovative nature, recognition, resources, funding and the applicant's essential role.",
          preparation: "Usually from 2 months, plus the period required to obtain project recognition.",
          processing: "Depends on the authority recognising the project and then on the consulate and prefecture.",
          external: "A French organisation or public authority confirms the innovative nature of the project.",
          href: "/en/countries/france/#route-french-tech-visa",
        },
        {
          name: "Talent – entrepreneur",
          outcome: "Create or develop the applicant's own business in France.",
          forWhom: "Entrepreneurs with relevant experience, funding and a realistic plan for activity in France.",
          evidence: "A business plan, professional experience, funding, commercial viability and the applicant's role.",
          preparation: "Usually from 2 months once the project and financial model are defined.",
          processing: "Depends on the consulate and prefecture; there is no single public period for the full process.",
          external: "The applicant's own project; a separate employer is normally not required.",
          href: "/en/countries/france/#route-talent-business",
        },
      ],
    },
  ],
};

export function ComparePage({ locale = "ru" }: { locale?: Locale }) {
  const en = locale === "en";
  const base = en ? "/en" : "";
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: en ? "Home" : "Главная", item: `${SITE_URL}${base || "/"}` },
      { "@type": "ListItem", position: 2, name: en ? "Route comparison" : "Сравнение маршрутов", item: `${SITE_URL}${base}/compare/` },
    ],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <SiteHeader locale={locale} />
    <main>
      <section className="inner-hero section-shell compare-hero">
        <div><p className="eyebrow">{en ? "Programme comparison" : "Сравнение программ"}</p><h1>{en ? "Each programme has its own outcome and evidence" : "У каждой программы свой результат и своя логика доказательств"}</h1></div>
        <p>{en ? "Choose by the status and practical freedom required, not by an abbreviation. Each programme below is explained separately." : "Выбирайте не по аббревиатуре, а по нужному статусу и реальным возможностям. Ниже каждая программа разобрана отдельно."}</p>
      </section>

      <section className="section-shell compare-page-section">
        <nav className="compare-country-nav" aria-label={en ? "Countries" : "Страны"}>
          {groups[locale].map(group => <a href={`#compare-${group.id}`} key={group.id}><span>{group.code}</span><strong>{group.country}</strong><small>{group.routes.length} {en ? (group.routes.length === 1 ? "programme" : "programmes") : (group.routes.length === 1 ? "программа" : "программы")}</small></a>)}
        </nav>

        <aside className="compare-us-update">
          <span>{en ? "United States · update 27 August 2026" : "США · обновление на 27 августа 2026"}</span>
          <div>
            <h2>{en ? "A federal court vacated the January immigrant-visa pause" : "Федеральный суд отменил январскую приостановку иммиграционных виз"}</h2>
            <p>{en ? "The State Department paused immigrant-visa issuance to Russian nationals on 21 January. On 21 August, a federal district court in New York held the policy unlawful and vacated it. This was not a Supreme Court judgment. Practical implementation remained disputed on 26 August, so consular timing should still be checked for the individual case." : "Госдепартамент приостановил выдачу иммиграционных виз гражданам России 21 января. 21 августа федеральный окружной суд Нью-Йорка признал эту политику незаконной и отменил ее. Это не решение Верховного суда. На 26 августа исполнение решения еще оспаривалось, поэтому фактический статус консульского этапа нужно проверять по конкретному делу."}</p>
            <Link href={withTrailingSlash(`${base}/blog/us-immigrant-visa-issuance-pause-russia`)}>{en ? "Read the chronology" : "Разобрать хронологию"} <span aria-hidden="true">→</span></Link>
          </div>
        </aside>

        <div className="compare-country-groups">
          {groups[locale].map(group => (
            <section className="compare-country-group" id={`compare-${group.id}`} key={group.id}>
              <header><span>{group.code}</span><div><h2>{group.country}</h2><p>{group.intro}</p></div></header>
              <div className="programme-card-grid">
                {group.routes.map(route => (
                  <article className="programme-card" key={route.name}>
                    <div className="programme-card-top"><p>{group.code}</p><h3>{route.name}</h3><strong>{route.outcome}</strong></div>
                    <dl>
                      <div><dt>{en ? "Who it may suit" : "Кому может подойти"}</dt><dd>{route.forWhom}</dd></div>
                      <div><dt>{en ? "What must be shown" : "Что нужно доказать"}</dt><dd>{route.evidence}</dd></div>
                      <div><dt>{en ? "Preparation" : "Подготовка"}</dt><dd>{route.preparation}</dd></div>
                      <div><dt>{en ? "Government processing" : "Рассмотрение ведомством"}</dt><dd>{route.processing}</dd></div>
                      <div><dt>{en ? "External party" : "Кто участвует кроме заявителя"}</dt><dd>{route.external}</dd></div>
                    </dl>
                    <Link href={route.href}>{en ? "Open the programme" : "Открыть программу"} <span aria-hidden="true">↗</span></Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="compare-disclaimer">{en ? "This comparison is a starting point, not an eligibility decision. Nationality, present status, family circumstances, filing location and documentary detail may change the conclusion." : "Это отправная точка, а не решение о соответствии. Гражданство, текущий статус, семья, место подачи и содержание документов могут изменить вывод."}</p>
      </section>

      <section className="section-shell closing-cta"><div><p className="eyebrow eyebrow-light">{en ? "Your circumstances" : "Ваша ситуация"}</p><h2>{en ? "Compare several programmes against the same facts" : "Сравним несколько программ на одних и тех же фактах"}</h2></div><div><p>{en ? "Complete the introductory form. Our team will review the objective, starting position, experience and available evidence." : "Заполните вводную анкету. Команда изучит цель, исходные данные, опыт и доступные доказательства."}</p><Link className="button button-gold" href={withTrailingSlash(`${base}/assessment`)}>{en ? "Assess my options" : "Оценить шансы"}</Link></div></section>
    </main>
    <SiteFooter locale={locale} />
  </>;
}
