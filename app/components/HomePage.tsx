/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FOUNDER_NAME, LEGAL_NAME, SERVICE_PRICES, SITE_URL, withTrailingSlash } from "../site";
import { ClientResults } from "./ClientResults";
import { ConsultationLink } from "./ConsultationLink";
import { HeroVisual } from "./HeroVisual";
import { PressMentions } from "./PressMentions";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type Locale = "ru" | "en";

const copy = {
  ru: {
    hero: {
      eyebrow: "Samotsvet - агентство Никиты Самоцветова",
      title: "Возьмем на себя подготовку Вашей иммиграции",
      body: "Помогаем специалистам и предпринимателям выбрать маршрут для себя и семьи. Никита Самоцветов лично определяет стратегию и проверяет готовность кейса. Мы организуем подготовку документов, работу профильных партнеров и сопровождение подачи.",
      routes: "Великобритания · США · Испания · Франция",
      founder: "Никита Самоцветов",
      role: "Основатель Samotsvet",
      education: "LLM, University of Leeds",
      secondary: "Как мы работаем",
      note: "С Никитой Самоцветовым, до 20 минут. После короткой заявки свяжемся с Вами в течение рабочего дня, чтобы согласовать время.",
    },
    founderRole: {
      eyebrow: "Личная ответственность",
      title: "За стратегию и качество подготовки отвечает Никита Самоцветов",
      quote: "Я лично разбираю исходную ситуацию, выбираю маршрут и проверяю ключевые материалы перед подачей. Для каждого проекта мы фиксируем задачи, сроки и роли участников. Профильных партнеров подключаем там, где нужна экспертиза конкретной страны.",
      signature: "Никита Самоцветов, основатель Samotsvet",
      link: "Об основателе",
      items: [
        ["01", "Первая консультация", "Уточняю Вашу цель, исходные данные и ограничения. Объясняю следующий шаг."],
        ["02", "Выбор стратегии", "Определяю маршрут и объясняю альтернативы. План фиксируем в согласованном объеме работы."],
        ["03", "Проверка доказательств", "Проверяю ключевые утверждения, источники и противоречия между документами."],
        ["04", "Готовность к подаче", "Проверяю комплект по согласованному плану и определяю вопросы, которые еще нужно закрыть."],
      ],
    },
    audiences: {
      eyebrow: "Кому помогаем",
      title: "Начинаем с Вашей цели и исходных данных",
      intro: "У стран разные программы, критерии и требования к доказательствам. Мы сравниваем подходящие варианты и предлагаем маршрут с учетом цели, сроков и планов семьи.",
      items: [
        ["01", "Специалисты и руководители", "Разбираем личный вклад в продукты, команды и бизнес-результаты, затем соотносим факты с критериями программ."],
        ["02", "Основатели и предприниматели", "Сравниваем маршруты через достижения, стартап или инвестиции и подтверждаем роль основателя в результатах бизнеса."],
        ["03", "Исследователи и авторы", "Собираем академический и профессиональный опыт, независимое признание и планы дальнейшей работы."],
        ["04", "Удаленные специалисты и семьи", "Проверяем формат занятости, договоры, доход, семейный комплект и последствия выбранного статуса."],
      ],
    },
    directions: {
      eyebrow: "Направления",
      title: "Каждая программа оценивает заявителя по своим правилам",
      intro: "Смотрим на будущий статус, сроки, положение семьи и факты, которые можно подтвердить. Название страны само по себе не определяет подходящий маршрут.",
      more: "Подробнее о программе",
      compare: "Сравнить все программы",
      items: [
        ["UK", "Global Talent", "Карьера без привязки к одному работодателю", "Признание, личный вклад и независимые подтверждения", "/countries/uk/#route-global-talent"],
        ["UK", "Innovator Founder", "Запуск инновационного стартапа", "Новая идея, жизнеспособность и масштабирование", "/countries/uk/#route-innovator-founder"],
        ["US", "EB-1A", "Постоянный статус через выдающиеся способности", "Устойчивое признание и достижения высокого уровня", "/countries/usa/#route-eb-1a"],
        ["US", "EB-2 NIW", "Постоянный статус через проект в интересах США", "Будущий план и способность его реализовать", "/countries/usa/#route-eb-2-niw"],
        ["US", "O-1", "Временная работа по профессиональному профилю", "Достижения и американский заявитель", "/countries/usa/#route-o-1"],
        ["US", "E-2", "Управление инвестиционным бизнесом", "Инвестиции, работающий бизнес и контроль", "/countries/usa/#route-e-2"],
        ["ES", "Digital Nomad", "ВНЖ для удаленной работы", "Работа по найму, ИП или контракт, доход и страхование", "/countries/spain/#route-digital-nomad-visa"],
        ["FR", "Talent: инновационный проект", "Работа над признанным инновационным проектом", "Проект, принимающая компания и достаточные средства", "/countries/france/#route-french-tech-visa"],
        ["FR", "Talent: создание бизнеса", "Создание коммерческого проекта во Франции", "Бизнес-план, ресурсы и роль основателя", "/countries/france/#route-talent-business"],
      ],
    },
    process: {
      eyebrow: "Как работаем",
      title: "Четыре этапа от первой консультации до подачи",
      intro: "Каждый этап заканчивается конкретным рабочим результатом. Если доказательств пока недостаточно, мы планируем реальные профессиональные действия и доводим профиль до готовности.",
      items: [
        ["01", "Маршрут и объем работы", "Сравниваем программы, уточняем ограничения и письменно фиксируем задачи, сроки и роли участников."],
        ["02", "Карта доказательств", "Связываем ключевые утверждения с фактами, источниками и критериями выбранной программы."],
        ["03", "Подготовка профиля", "Закрываем пробелы реальными проектами, результатами и независимыми подтверждениями, если это нужно до подачи."],
        ["04", "Согласованный комплект", "Сверяем факты между документами, проводим финальную проверку и сопровождаем подачу в согласованном объеме."],
      ],
    },
    services: {
      eyebrow: "Форматы и стоимость",
      title: "Начинаем с бесплатной консультации",
      intro: "После разговора определяем, нужна ли отдельная проверка документов, развитие профиля или полное сопровождение. Состав и цена платной работы фиксируются заранее.",
      link: "Все услуги и границы работы",
      items: [
        ["01", "Бесплатная первичная консультация", "Обсудим ситуацию, предварительно определим подходящие варианты и следующий шаг.", "До 20 минут с Никитой Самоцветовым"],
        ["02", "Аудит профиля", "Проверяем документы и доказательства, сопоставляем их с критериями и готовим письменную стратегию.", "Объем и цена до начала работы"],
        ["03", "Развитие профиля", "Формируем план профессиональных действий и систему фиксации результатов на 3–12 месяцев.", "Когда доказательств пока недостаточно"],
        ["04", "Полное сопровождение", "Ведем стратегию, доказательства, рекомендации, формы, профильных партнеров и подачу.", "Великобритания от €5 000 · США от €8 000"],
      ],
    },
    pricing: [
      "Стоимость и сроки",
      "Бюджет зависит от маршрута и объема подготовки",
      "До начала платной работы письменно фиксируем состав, срок, стоимость и ответственность сторон.",
      "Цены указаны за работу Samotsvet. Государственные сборы, переводы и внешние специалисты рассчитываются отдельно, если они прямо не включены в предложение.",
    ],
    guarantee: {
      eyebrow: "Гарантия работы",
      title: "Одобрение не гарантирует никто. Мы гарантируем качество своей работы",
      body: "До старта Вы получаете обоснованную оценку кейса по документам и официальным критериям. Стратегию дополнительно проверяет независимый профильный специалист. Состав проекта, цена и график платежей фиксируются заранее.",
      request: "Запрос ведомства отрабатываем без дополнительной оплаты. При отказе готовим повторную подачу без оплаты нашей работы. Государственные сборы, переводы и другие внешние расходы оплачиваются отдельно.",
      stages: [["40%", "При старте", "Стратегия и подготовка"], ["30%", "После подачи", "Возвращаем при отказе"], ["30%", "После одобрения", "При отказе не начисляется"]],
      refusal: "Если ведомство отказывает, возвращаем второй платеж в размере 30% стоимости. Финальные 30% не выставляются. Оплаченной остается стартовая часть 40%, которая покрывает выполненную стратегию и подготовку.",
      condition: "Гарантия действует при предоставлении достоверных данных, соблюдении согласованной стратегии и выполнении обязанностей клиента. Точные условия и срок возврата фиксируются в договоре до первого платежа.",
      link: "Полные условия работы",
    },
    faq: {
      eyebrow: "Частые вопросы",
      title: "Что важно знать до начала работы",
      items: [
        ["Что входит в бесплатную консультацию?", "До 20 минут разговора с Никитой Самоцветовым: обсудим цель, исходную ситуацию и следующий шаг. Аудит документов и письменная стратегия относятся к отдельной согласованной работе."],
        ["Никита лично участвует в моем проекте?", "Никита определяет стратегию и проверяет ключевые материалы перед подачей. Подготовка документов и задачи профильных партнеров организуются по согласованному плану. Состав работы и ответственность фиксируем до старта."],
        ["Нужно ли сначала покупать аудит профиля?", "Формат зависит от задачи. Если ситуация ясна и Вы готовы к подготовке, можно сразу обсудить сопровождение. Если нужен отдельный подробный разбор, согласуем аудит профиля."],
        ["Можно ли обратиться без публикаций и выступлений?", "Да. Проверяем проекты, измеримые результаты, лидерство, рекомендации и независимые подтверждения. При достаточной основе составляем план, который приводит реальные достижения к готовому доказательственному кейсу."],
        ["Как работает гарантия при отказе?", "При отказе возвращаем второй платеж в размере 30%, а финальные 30% не выставляем. Стартовая часть 40% остается оплатой за выполненную стратегию и подготовку."],
      ],
    },
    articles: {
      eyebrow: "Изменения правил",
      title: "Объясняем, что изменилось и как это влияет на подачу",
      all: "Все материалы",
      read: "Читать разбор",
      items: [
        ["США · 27 августа 2026", "Суд отменил приостановку иммиграционных виз: что известно", "Решение окружного суда, практическое возобновление выдачи и вопросы перед консульским этапом EB-1A и NIW.", "/blog/us-immigrant-visa-issuance-pause-russia/"],
        ["Великобритания · 6 марта 2026", "HC 1691: почему правила зависят от даты подачи", "Календарь вступления в силу ключевых положений.", "/blog/uk-hc-1691-dates/"],
        ["Испания · 20 февраля 2026", "Порог дохода DNV в 2026 году и расчет для семьи", "Расчет 200%, 75% и 25% после повышения испанского SMI.", "/blog/spain-dnv-income-2026/"],
      ],
    },
    closing: ["Обсудим Вашу ситуацию", "Оставьте короткую заявку на бесплатную первичную консультацию с Никитой Самоцветовым. Свяжемся с Вами в течение рабочего дня, чтобы согласовать время."],
  },
  en: {
    hero: {
      eyebrow: "Samotsvet - founded and led by Nikita Samotsvetov",
      title: "We manage your immigration preparation",
      body: "We help professionals and entrepreneurs choose an immigration route for themselves and their families. Nikita Samotsvetov personally leads the strategy and reviews the case before submission. We coordinate document preparation, specialist partners and the application process.",
      routes: "United Kingdom · United States · Spain · France",
      founder: "Nikita Samotsvetov",
      role: "Founder of Samotsvet",
      education: "LLM, University of Leeds",
      secondary: "How we work",
      note: "A free initial consultation with Nikita Samotsvetov, lasting up to 20 minutes. Complete the short form and we will contact you within one working day to arrange a time.",
    },
    founderRole: {
      eyebrow: "Personal responsibility",
      title: "Strategy and preparation quality are led by Nikita Samotsvetov",
      quote: "I personally review your circumstances, choose the route and check the key materials before submission. For each project, we agree the tasks, timetable and responsibilities. We involve specialist partners where country-specific expertise is required.",
      signature: "Nikita Samotsvetov, founder of Samotsvet",
      link: "About the founder",
      items: [
        ["01", "Initial consultation", "I clarify your goals, circumstances and constraints, and explain the next step."],
        ["02", "Strategy", "I choose the route and explain the alternatives. We record the plan within the agreed scope of work."],
        ["03", "Evidence review", "I check key claims, sources and inconsistencies between documents."],
        ["04", "Readiness for submission", "I review the documents against the agreed plan and identify any outstanding questions."],
      ],
    },
    audiences: {
      eyebrow: "Who we help",
      title: "We start with your objective and circumstances",
      intro: "Each country has its own programmes, criteria and evidential requirements. We compare suitable options and recommend a route that reflects your objective, timing and family plans.",
      items: [
        ["01", "Specialists and senior leaders", "We examine personal contribution to products, teams and commercial outcomes, then test the facts against programme criteria."],
        ["02", "Founders and entrepreneurs", "We compare achievement, start-up and investment routes and establish the founder's role in business outcomes."],
        ["03", "Researchers and authors", "We bring together academic and professional experience, independent recognition and plans for future work."],
        ["04", "Remote professionals and families", "We review working arrangements, contracts, income, family documents and the effects of the selected status."],
      ],
    },
    directions: {
      eyebrow: "Destinations",
      title: "Each programme assesses an applicant under different rules",
      intro: "We consider the eventual status, timing, family position and the facts that can be evidenced. A preferred country does not by itself determine the right route.",
      more: "More about the programme",
      compare: "Compare all programmes",
      items: [
        ["UK", "Global Talent", "A career without one employer sponsor", "Recognition, contribution and independent evidence", "/countries/uk/#route-global-talent"],
        ["UK", "Innovator Founder", "Build an innovative start-up", "A new idea, viability and scalability", "/countries/uk/#route-innovator-founder"],
        ["US", "EB-1A", "Permanent residence through extraordinary ability", "Sustained recognition and high-level achievement", "/countries/usa/#route-eb-1a"],
        ["US", "EB-2 NIW", "Permanent residence through a US national-interest endeavour", "A future plan and the ability to advance it", "/countries/usa/#route-eb-2-niw"],
        ["US", "O-1", "Temporary work through a professional profile", "Achievements and a US petitioner", "/countries/usa/#route-o-1"],
        ["US", "E-2", "Run an investment business", "Investment, an operating business and control", "/countries/usa/#route-e-2"],
        ["ES", "Digital Nomad", "Residence for remote work", "Employment, self-employment or contracting, income and insurance", "/countries/spain/#route-digital-nomad-visa"],
        ["FR", "Talent: innovative project", "Work on a recognised innovative project", "The project, host company and sufficient resources", "/countries/france/#route-french-tech-visa"],
        ["FR", "Talent: business creation", "Establish a commercial project in France", "A credible plan, resources and the founder's role", "/countries/france/#route-talent-business"],
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "Four stages from the first consultation to filing",
      intro: "Each stage ends with a practical deliverable. Where the evidence is not yet sufficient, we plan genuine professional activity and develop the profile until it is ready.",
      items: [
        ["01", "Route and scope", "We compare programmes, clarify constraints and record the tasks, timetable and responsibilities in writing."],
        ["02", "Evidence map", "We connect the key propositions to facts, sources and the criteria of the selected programme."],
        ["03", "Profile development", "Where necessary, we close gaps through genuine projects, outcomes and independent evidence before filing."],
        ["04", "Reconciled bundle", "We check facts across documents, conduct the final review and manage the agreed filing scope."],
      ],
    },
    services: {
      eyebrow: "Ways to work with us",
      title: "We begin with a free consultation",
      intro: "After the conversation, we establish whether you need a document review, profile development or full support. Scope and fee are agreed before paid work begins.",
      link: "All services and scope boundaries",
      items: [
        ["01", "Free initial consultation", "We discuss your circumstances, identify suitable options on a preliminary basis and explain the next step.", "Up to 20 minutes with Nikita Samotsvetov"],
        ["02", "Profile audit", "We review documents and evidence against the criteria and prepare a written strategy.", "Scope and fee agreed in advance"],
        ["03", "Profile development", "We create a 3–12 month programme of professional activity and a system for recording results.", "Where the evidence is not yet sufficient"],
        ["04", "Full support", "We manage strategy, evidence, references, forms, specialist partners and filing.", "United Kingdom from €5,000 · United States from €8,000"],
      ],
    },
    pricing: [
      "Fees and timing",
      "The budget depends on the route and preparation required",
      "Scope, timing, fee and responsibilities are agreed in writing before paid work begins.",
      "Fees cover Samotsvet's work. Government fees, translations and external specialists are quoted separately unless expressly included.",
    ],
    guarantee: {
      eyebrow: "Our work guarantee",
      title: "No one can guarantee approval. We guarantee the quality of our work",
      body: "Before the project begins, you receive a reasoned assessment based on the documents and official criteria. An independent specialist also reviews the strategy. Scope, fee and payment schedule are fixed in advance.",
      request: "We respond to an authority's request without an additional professional fee. After a refusal, we prepare one repeat filing without charging for our work. Government fees, translations and other external costs remain separate.",
      stages: [["40%", "At the start", "Strategy and preparation"], ["30%", "After filing", "Refunded after a refusal"], ["30%", "After approval", "Not charged after a refusal"]],
      refusal: "If the authority refuses the application, we refund the second payment, equal to 30% of the fee. The final 30% is not invoiced. The initial 40% remains paid for strategy and preparation already completed.",
      condition: "The guarantee applies where the client provides accurate information, follows the agreed strategy and performs their contractual obligations. The exact terms and refund period are recorded in the agreement before the first payment.",
      link: "Full working terms",
    },
    faq: {
      eyebrow: "Common questions",
      title: "What to know before work begins",
      items: [
        ["What does the free consultation include?", "A conversation of up to 20 minutes with Nikita Samotsvetov about your goals, circumstances and the next step. A document audit and a written strategy are separate services, agreed in advance."],
        ["Will Nikita personally work on my project?", "Nikita leads the strategy and reviews key materials before submission. Document preparation and specialist partners' tasks follow an agreed plan. We define the scope and responsibilities before work begins."],
        ["Do I need to buy a profile audit first?", "The format depends on your needs. If your circumstances are clear and you are ready to proceed, we can discuss application support directly. If a separate detailed review is needed, we will agree a profile audit."],
        ["Can I approach you without publications or speaking experience?", "Yes. We examine projects, measurable results, leadership, references and independent evidence. Where the foundation is sufficient, we build a plan that turns genuine achievements into a filing-ready evidential case."],
        ["How does the guarantee work after a refusal?", "We refund the second payment, equal to 30% of the fee, and do not invoice the final 30%. The initial 40% remains paid for strategy and preparation already completed."],
      ],
    },
    articles: {
      eyebrow: "Rule changes",
      title: "What changed and how it affects a filing",
      all: "All articles",
      read: "Read the analysis",
      items: [
        ["United States · 27 August 2026", "Court vacates the immigrant-visa pause: what is known", "The district court ruling, practical resumption of issuance and questions before an EB-1A or NIW consular stage.", "/blog/us-immigrant-visa-issuance-pause-russia/"],
        ["United Kingdom · 6 March 2026", "HC 1691: why the filing date determines which rules apply", "A timetable for the key changes.", "/blog/uk-hc-1691-dates/"],
        ["Spain · 20 February 2026", "The 2026 DNV income threshold and family calculation", "The 200%, 75% and 25% calculation following the SMI increase.", "/blog/spain-dnv-income-2026/"],
      ],
    },
    closing: ["Let us discuss your circumstances", "Complete the short form to request a free initial consultation with Nikita Samotsvetov. We will contact you within one working day to arrange a time."],
  },
} as const;

export function HomePage({ locale = "ru" }: { locale?: Locale }) {
  const text = copy[locale];
  const isEnglish = locale === "en";
  const base = isEnglish ? "/en" : "";
  const aboutPath = withTrailingSlash(`${base}/about#nikita`);
  const comparePath = withTrailingSlash(`${base}/compare`);
  const servicesPath = withTrailingSlash(`${base}/services`);
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: text.faq.items.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  const serviceData = { "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${SITE_URL}/#professional-service`, name: "Samotsvet", legalName: LEGAL_NAME, url: `${SITE_URL}${base || "/"}`, logo: `${SITE_URL}/samotsvet-logo.svg`, founder: { "@id": `${SITE_URL}/about/#nikita`, "@type": "Person", name: FOUNDER_NAME }, areaServed: ["United Kingdom", "Spain", "United States", "France"] };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
    <SiteHeader locale={locale} />
    <main>
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">{text.hero.eyebrow}</p>
          <h1>{text.hero.title}</h1>
          <p className="hero-lede">{text.hero.body}</p>
          <p className="hero-routes">{text.hero.routes}</p>
          <Link className="hero-founder" href={aboutPath}>
            <img src="/nikita-founder-white-v3.webp" alt={isEnglish ? "Nikita Samotsvetov, founder of Samotsvet" : "Никита Самоцветов, основатель Samotsvet"} width="1149" height="1368" />
            <span><strong>{text.hero.founder}</strong><small>{text.hero.role}<br />{text.hero.education}</small></span>
          </Link>
          <div className="hero-actions">
            <ConsultationLink className="button button-primary" locale={locale} location="homepage_hero" />
            <a className="button button-secondary" href="#process">{text.hero.secondary}</a>
          </div>
          <p className="hero-response">{text.hero.note}</p>
        </div>
        <HeroVisual locale={locale} />
      </section>

      <section className="founder-guidance-band">
        <div className="section-shell founder-guidance">
          <div className="founder-guidance-quote">
            <p className="eyebrow eyebrow-light">{text.founderRole.eyebrow}</p>
            <h2>{text.founderRole.title}</h2>
            <blockquote>{text.founderRole.quote}</blockquote>
            <p className="founder-guidance-signature">{text.founderRole.signature}</p>
            <Link className="text-link text-link-light" href={aboutPath}>{text.founderRole.link} <span aria-hidden="true">↗</span></Link>
          </div>
          <ol>{text.founderRole.items.map(([number, title, body]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="section-shell section-block audience-section">
        <Heading eyebrow={text.audiences.eyebrow} title={text.audiences.title} intro={text.audiences.intro} />
        <div className="audience-grid">{text.audiences.items.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="comparison-preview" id="directions">
        <div className="section-shell section-block">
          <Heading eyebrow={text.directions.eyebrow} title={text.directions.title} intro={text.directions.intro} />
          <div className="comparison-preview-grid">{text.directions.items.map(([code, name, outcome, evidence, path]) => <article key={`${code}-${name}`}><span>{code}</span><h3>{name}</h3><strong>{outcome}</strong><p>{evidence}</p><Link href={`${base}${path}`}>{text.directions.more} <span aria-hidden="true">↗</span></Link></article>)}</div>
          <Link className="button button-secondary comparison-link" href={comparePath}>{text.directions.compare}</Link>
        </div>
      </section>

      <section className="section-shell section-block compact-process" id="process">
        <Heading eyebrow={text.process.eyebrow} title={text.process.title} intro={text.process.intro} />
        <ol>{text.process.items.map(([number, title, body]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
      </section>

      <section className="section-shell section-block services-section" id="services">
        <Heading eyebrow={text.services.eyebrow} title={text.services.title} intro={text.services.intro} />
        <div className="service-card-grid service-card-grid-four">{text.services.items.map(([number, title, body, meta]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p><strong>{meta}</strong></article>)}</div>
        <Link className="text-link" href={servicesPath}>{text.services.link} <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="section-shell pricing-strip" id="pricing">
        <div><p className="eyebrow">{text.pricing[0]}</p><h2>{text.pricing[1]}</h2></div>
        <div><p>{text.pricing[2]}</p><small className="pricing-note">{text.pricing[3]}</small></div>
        <div className="price-grid">{SERVICE_PRICES.map(item => <div className="price-item" key={item.code}><span>{isEnglish ? item.countryEn : item.countryRu}</span><strong>{isEnglish ? item.priceEn : item.price}</strong><small>{isEnglish ? "Preparation" : "Подготовка"}: {isEnglish ? item.timelineEn : item.timelineRu}</small>{isEnglish && "noteEn" in item ? <small>{item.noteEn}</small> : !isEnglish && "noteRu" in item ? <small>{item.noteRu}</small> : null}</div>)}</div>
      </section>

      <ClientResults locale={locale} />

      <section className="guarantee-section" id="guarantee"><div className="section-shell guarantee-layout"><div className="guarantee-heading"><p className="eyebrow eyebrow-light">{text.guarantee.eyebrow}</p><h2>{text.guarantee.title}</h2><p>{text.guarantee.body}</p><p>{text.guarantee.request}</p><Link className="button button-gold" href={withTrailingSlash(`${base}/legal`)}>{text.guarantee.link}</Link></div><div><div className="guarantee-stages">{text.guarantee.stages.map(([amount, moment, scope], index) => <article key={amount}><span>{String(index + 1).padStart(2, "0")}</span><strong>{amount}</strong><h3>{moment}</h3><p>{scope}</p></article>)}</div><div className="guarantee-refusal"><strong>{isEnglish ? "If the authority refuses" : "Если ведомство отказывает"}</strong><p>{text.guarantee.refusal}</p></div><small>{text.guarantee.condition}</small></div></div></section>

      <section className="section-shell section-block faq-section"><Heading eyebrow={text.faq.eyebrow} title={text.faq.title} /><div className="faq-list">{text.faq.items.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="editorial-section"><div className="section-shell section-block"><div className="section-heading"><div><p className="eyebrow">{text.articles.eyebrow}</p><h2>{text.articles.title}</h2></div><Link className="text-link" href={withTrailingSlash(`${base}/blog`)}>{text.articles.all} <span aria-hidden="true">↗</span></Link></div><div className="article-grid">{text.articles.items.map(([tag, title, body, path]) => <article className="article-card" key={path}><p className="article-tag">{tag}</p><h3>{title}</h3><p>{body}</p><Link href={`${base}${path}`}>{text.articles.read} <span aria-hidden="true">→</span></Link></article>)}</div></div></section>

      <PressMentions locale={locale} />

      <section className="section-shell closing-cta"><div><p className="eyebrow eyebrow-light">{isEnglish ? "Initial consultation" : "Первичная консультация"}</p><h2>{text.closing[0]}</h2></div><div><p>{text.closing[1]}</p><ConsultationLink className="button button-gold" locale={locale} location="homepage_final" /></div></section>
    </main>
    <SiteFooter locale={locale} />
  </>;
}

function Heading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className={`section-heading${intro ? "" : " compact-heading"}`}><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{intro ? <p>{intro}</p> : null}</div>;
}
