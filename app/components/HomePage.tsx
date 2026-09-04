import Image from "next/image";
import Link from "next/link";
import { FOUNDER_NAME, LEGAL_NAME, SERVICE_PRICES, SITE_URL, withTrailingSlash } from "../site";
import { ClientResults } from "./ClientResults";
import { PressMentions } from "./PressMentions";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type Locale = "ru" | "en";

const copy = {
  ru: {
    hero: [
      "Иммиграция и релокация под ключ",
      "Виза: Ваш первый шаг к ВНЖ",
      "Samotsvet работает как агентство полного цикла. Мы подбираем маршрут, готовим стратегию и документы, координируем подачу и подключаем нужные сервисы для переезда и обустройства в новой стране.",
      "Оценить шансы",
      "Сравнить программы",
      "Анкета занимает около 5 минут. Ответим в течение одного рабочего дня.",
      "10 000+ разобранных профилей с 2021 года · 800+ кейсов · 200+ по Великобритании",
    ],
    founder: ["Никита Самоцветов", "Основатель Samotsvet", "LLM International Law and Global Governance", "University of Leeds · 2023"],
    delegation: {
      eyebrow: "Релокация под ключ",
      title: "Одна команда ведет проект от стратегии до переезда",
      body: "Вы принимаете решения в ключевых точках и предоставляете исходные сведения. Мы берем на себя маршрут, доказательства, документы, контроль сроков и координацию участников проекта.",
      note: "После подачи можем подключить проверенных специалистов по налогам, банкам, страхованию, жилью и другим практическим задачам. Состав сервисов зависит от страны и фиксируется в предложении.",
      items: ["Выбор маршрута", "Подготовка и подача", "Сервисы после переезда"],
    },
    audiences: {
      eyebrow: "Кому помогаем",
      title: "Начинаем с Вашей цели и исходных данных",
      intro: "У стран разные программы, критерии и требования к доказательствам. Мы изучаем ситуацию человека, оцениваем шансы по нескольким вариантам и предлагаем маршрут, который соответствует его цели, срокам и планам семьи.",
      items: [
        ["01", "Специалисты и руководители", "Разбираем личный вклад в продукты, команды и бизнес-результаты, затем соотносим факты с критериями программ."],
        ["02", "Основатели и предприниматели", "Сравниваем маршруты через достижения, стартап или инвестиции и подтверждаем роль основателя в результатах бизнеса."],
        ["03", "Исследователи и авторы", "Собираем академический и профессиональный опыт, независимое признание и планы дальнейшей работы."],
        ["04", "Удаленные специалисты и семьи", "Проверяем формат занятости, договоры, доход, семейный комплект и последствия выбранного статуса."],
      ],
    },
    problem: {
      eyebrow: "Подготовка кейса",
      title: "Решение строится на фактах и их согласованности",
      body: "Сильный опыт нужно перевести на язык конкретной программы. Мы определяем личный вклад, сверяем даты и показатели, находим независимые подтверждения и собираем документы в последовательную систему.",
      items: [
        ["Личный вклад", "Показываем, какие решения принял заявитель и как они повлияли на результат."],
        ["Независимый контекст", "Подтверждаем масштаб проекта и профессиональное признание внешними источниками."],
        ["Согласованность", "Сверяем даты, роли, показатели и единицы измерения во всем комплекте."],
      ],
    },
    development: {
      eyebrow: "Профиль можно подготовить",
      title: "Отсутствие публикаций не закрывает путь к визе таланта",
      body: "Публикации составляют только один из возможных видов доказательств. Мы оцениваем проекты, измеримые результаты, лидерство, рекомендации и профессиональное признание. Если профиль пока не готов к подаче, составляем план развития на 3–12 месяцев.",
      note: "План опирается на реальные проекты и профессиональные действия. Для каждого шага заранее определяем результат, срок и способ подтверждения, чтобы привести профиль к готовому кейсу.",
      link: "Как устроено развитие профиля",
      items: [
        ["01", "Находим основу", "Разбираем проекты, решения, рост ответственности и результаты, которые уже есть в карьере или бизнесе."],
        ["02", "Определяем пробелы", "Проверяем, где нужны метрики, рекомендатели, независимая оценка, публичный след или новый результат."],
        ["03", "Создаем результаты", "Планируем выступления, авторские материалы, экспертные роли и проекты, связанные с профессиональной траекторией."],
        ["04", "Фиксируем доказательства", "Документируем итог, личный вклад, масштаб и независимый источник по мере выполнения плана."],
      ],
    },
    compare: {
      eyebrow: "Выбор программы",
      title: "Маршрут выбираем по цели и ситуации",
      intro: "Критерии оценки различаются даже у внешне похожих программ. Мы сравниваем будущий статус, сроки, требования, положение семьи и доступные доказательства, затем объясняем шансы и ограничения каждого варианта.",
      link: "Открыть сравнение программ",
      rows: [
        ["UK", "Global Talent", "Карьера без привязки к одному работодателю", "Признание, личный вклад и независимые подтверждения"],
        ["UK", "Innovator Founder", "Запуск инновационного стартапа", "Новая идея, жизнеспособность и масштабирование"],
        ["US", "EB-1A", "Постоянный статус через выдающиеся способности", "Устойчивое признание и достижения высокого уровня"],
        ["US", "EB-2 NIW", "Постоянный статус через проект в интересах США", "Будущий план и способность его реализовать"],
        ["US", "O-1", "Временная работа по профессиональному профилю", "Достижения и американский заявитель"],
        ["US", "E-2", "Управление инвестиционным бизнесом", "Инвестиции, работающий бизнес и контроль"],
        ["ES", "Digital Nomad", "ВНЖ для удаленной работы", "Работа по найму, ИП или контракт, доход и страхование"],
        ["FR", "Talent: инновационный проект", "Работа над признанным инновационным проектом", "Проект, принимающая компания и достаточные средства"],
        ["FR", "Talent: создание бизнеса", "Создание коммерческого проекта во Франции", "Бизнес-план, ресурсы и роль основателя"],
      ],
    },
    services: {
      eyebrow: "Форматы работы",
      title: "От оценки шансов до подачи и обустройства",
      intro: "Проект можно начать с отдельной задачи или передать нам весь цикл. Состав работы, стоимость, сроки и ответственность сторон фиксируем до платного этапа.",
      link: "Посмотреть все услуги",
      items: [
        ["01", "Оценка шансов", "Изучаем вводную анкету, сравниваем подходящие программы и предлагаем следующий шаг.", "Бесплатно · один рабочий день"],
        ["02", "Сравнение маршрутов", "Готовим матрицу вариантов со статусом, сроками, ограничениями и задачами по доказательствам.", "Отдельный стратегический результат"],
        ["03", "Проверка доказательств", "Сопоставляем факты с критериями, отмечаем сильные материалы и составляем план подготовки.", "Для выбранного маршрута"],
        ["04", "Развитие профиля", "Формируем план профессиональных действий на 3–12 месяцев и систему фиксации результатов.", "Когда профиль пока не готов"],
        ["05", "Полное сопровождение", "Ведем стратегию, доказательства, рекомендации, формы, партнеров и подачу.", "UK от €5 000 · US от €8 000"],
        ["06", "Релокационные сервисы", "Координируем задачи после решения: семья, продление, налоги, банки, страхование и жилье.", "Состав зависит от страны"],
      ],
    },
    process: {
      eyebrow: "Как работаем",
      title: "Четыре понятных результата по ходу проекта",
      items: [
        ["01", "Карта маршрутов", "Сравниваем статус, срок, ограничения и положение семьи."],
        ["02", "Матрица доказательств", "Связываем каждый центральный тезис с фактом, источником и критерием."],
        ["03", "План подготовки", "Фиксируем пробелы, задачи, ответственных и контрольные даты."],
        ["04", "Согласованный комплект", "Проверяем факты между документами и ведем подачу в согласованном объеме."],
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
    pricing: [
      "Стоимость и сроки",
      "Бюджет зависит от маршрута и объема подготовки",
      "После оценки шансов определяем подходящий формат: отдельная стратегия, развитие профиля или полное сопровождение. До начала платной работы письменно фиксируем состав, срок и стоимость.",
      "Цены указаны за работу Samotsvet. Государственные сборы, переводы, лицензированные партнеры и другие внешние расходы рассчитываются отдельно, если они прямо не включены в предложение.",
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
      title: "Что важно знать до начала проекта",
      items: [
        ["Можно ли обратиться без публикаций и выступлений?", "Да. Мы проверяем проекты, измеримые результаты, лидерство, рекомендации и независимые подтверждения. При достаточной основе составляем план, который приводит реальные достижения к готовому доказательственному кейсу."],
        ["Что покажет оценка шансов?", "Команда изучит вводную анкету, назовет подходящие программы, объяснит сильные стороны и ключевые пробелы. Точный вывод по документам возможен после их отдельной проверки."],
        ["Вы работаете с профилями, которые пока не готовы?", "Да. Составляем план на 3–12 месяцев, выбираем реальные профессиональные действия, фиксируем результат и собираем независимые подтверждения. Виза таланта может остаться реалистичной целью даже при слабом публичном профиле на старте."],
        ["Как работает гарантия при отказе?", "Стоимость полного сопровождения делится на 40%, 30% и 30%. При отказе возвращаем второй платеж в размере 30%, а финальные 30% не выставляем. Стартовая часть 40% остается оплатой за выполненную стратегию и подготовку."],
        ["Кто отвечает за вопросы права конкретной страны?", "Samotsvet ведет стратегию и подготовку проекта. Если задача требует лицензированного специалиста соответствующей юрисдикции, мы подключаем профильного партнера и заранее объясняем его роль."],
        ["Можно ли сравнить несколько стран?", "Да. Сопоставляем итоговый статус, срок, зависимость от работодателя или бизнеса, положение семьи и доступные доказательства."],
      ],
    },
    closing: [
      "Первый шаг",
      "Оцените шансы по нескольким программам",
      "Заполните вводную анкету. Команда изучит ситуацию вручную и предложит реалистичные варианты в течение одного рабочего дня.",
      "Оценить шансы",
    ],
  },
  en: {
    hero: [
      "End-to-end immigration and relocation",
      "A visa is your first step towards residence",
      "Samotsvet provides a complete service. We select the route, prepare the strategy and documents, co-ordinate filing, and bring in the services needed for moving and settling in a new country.",
      "Assess my options",
      "Compare programmes",
      "The form takes about five minutes. We reply within one business day.",
      "10,000+ profiles reviewed since 2021 · 800+ matters · 200+ UK matters",
    ],
    founder: ["Nikita Samotsvetov", "Founder of Samotsvet", "LLM International Law and Global Governance", "University of Leeds · 2023"],
    delegation: {
      eyebrow: "End-to-end relocation",
      title: "One team manages the project from strategy to relocation",
      body: "You make the key decisions and provide the source information. We manage the route, evidence, documents, deadlines and the people involved in the project.",
      note: "After filing, we can bring in trusted specialists for tax, banking, insurance, housing and other practical matters. The precise scope depends on the destination and is recorded in our proposal.",
      items: ["Route selection", "Preparation and filing", "Relocation services"],
    },
    audiences: {
      eyebrow: "Who we help",
      title: "We start with your objective and circumstances",
      intro: "Each country has its own programmes, criteria and evidential requirements. We review the person's circumstances, assess several realistic options and recommend a route suited to their objective, timing and family plans.",
      items: [
        ["01", "Specialists and senior leaders", "We examine personal contribution to products, teams and commercial outcomes, then test the facts against programme criteria."],
        ["02", "Founders and entrepreneurs", "We compare achievement, start-up and investment routes and establish the founder's role in business outcomes."],
        ["03", "Researchers and authors", "We bring together academic and professional experience, independent recognition and plans for future work."],
        ["04", "Remote professionals and families", "We review working arrangements, contracts, income, family documents and the effects of the selected status."],
      ],
    },
    problem: {
      eyebrow: "Case preparation",
      title: "A decision depends on the facts and their consistency",
      body: "Strong experience must be presented against the criteria of a particular programme. We define personal contribution, reconcile dates and figures, find independent support and organise the documents into a coherent case.",
      items: [
        ["Personal contribution", "We show which decisions the applicant made and how they affected the outcome."],
        ["Independent context", "We establish the scale of the work and professional recognition through external sources."],
        ["Consistency", "We reconcile dates, roles, metrics and units across the complete record."],
      ],
    },
    development: {
      eyebrow: "A profile can be developed",
      title: "A lack of publications need not rule out a talent visa",
      body: "Publications are one possible form of evidence. We also examine projects, measurable results, leadership, references and professional recognition. Where a profile is not ready to file, we build a 3–12 month development plan.",
      note: "The plan is based on genuine projects and professional activity. Each step has a defined outcome, timetable and method of verification, with the aim of producing a filing-ready case.",
      link: "How profile development works",
      items: [
        ["01", "Find the foundation", "Review projects, decisions, increasing responsibility and outcomes already present in the career or business."],
        ["02", "Define the gaps", "Identify where the case needs metrics, referees, independent assessment, a public record or a new result."],
        ["03", "Create results", "Plan speaking, authorship, expert roles and projects connected to the applicant's professional trajectory."],
        ["04", "Record the evidence", "Document the outcome, personal contribution, scale and independent source as the plan progresses."],
      ],
    },
    compare: {
      eyebrow: "Programme selection",
      title: "The right route follows from the objective and circumstances",
      intro: "Assessment criteria differ even between programmes that appear similar. We compare the eventual status, timing, requirements, family position and available evidence, then explain the prospects and limitations of each option.",
      link: "Compare all programmes",
      rows: [
        ["UK", "Global Talent", "A career without one employer sponsor", "Recognition, contribution and independent evidence"],
        ["UK", "Innovator Founder", "Build an innovative start-up", "A new idea, viability and scalability"],
        ["US", "EB-1A", "Permanent status through extraordinary ability", "Sustained recognition and high-level achievement"],
        ["US", "EB-2 NIW", "Permanent status through a US national-interest endeavour", "A future plan and the ability to advance it"],
        ["US", "O-1", "Temporary work through a professional profile", "Achievements and a US petitioner"],
        ["US", "E-2", "Run an investment business", "Investment, an operating business and control"],
        ["ES", "Digital Nomad", "Residence for remote work", "Employment, self-employment or contracting, income and insurance"],
        ["FR", "Talent: innovative project", "Work on a recognised innovative project", "The project, host company and sufficient resources"],
        ["FR", "Talent: business creation", "Establish a commercial project in France", "A credible plan, resources and the founder's role"],
      ],
    },
    services: {
      eyebrow: "Ways to work with us",
      title: "From assessing your options to filing and settling in",
      intro: "A project can begin with one defined task or continue through the complete process. Scope, fee, timing and responsibilities are agreed before paid work begins.",
      link: "View all services",
      items: [
        ["01", "Options assessment", "We review the introductory form, compare suitable programmes and recommend the next step.", "Free · one business day"],
        ["02", "Route comparison", "We prepare a matrix covering status, timing, restrictions and evidential tasks.", "A standalone strategic deliverable"],
        ["03", "Evidence review", "We test facts against the criteria, identify strong material and produce a preparation plan.", "For a selected route"],
        ["04", "Profile development", "We create a 3–12 month programme of professional activity and a system for recording results.", "Where the profile is not ready"],
        ["05", "Full support", "We manage strategy, evidence, references, forms, specialist partners and filing.", "UK from €5,000 · US from €8,000"],
        ["06", "Relocation services", "We co-ordinate post-decision tasks including family, extensions, tax, banking, insurance and housing.", "Scope depends on the country"],
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "Four clear deliverables during the project",
      items: [
        ["01", "Route map", "We compare status, timing, restrictions and the position of the family."],
        ["02", "Evidence matrix", "Each central proposition is connected to a fact, source and criterion."],
        ["03", "Preparation plan", "We record gaps, tasks, owners and review dates."],
        ["04", "Reconciled bundle", "We check facts across documents and manage the agreed filing scope."],
      ],
    },
    articles: {
      eyebrow: "Rule changes",
      title: "What changed and how it affects a filing",
      all: "All articles",
      read: "Read the analysis",
      items: [
        ["United States · 27 August 2026", "Court vacates the immigrant-visa pause: what is known", "The district court ruling, practical resumption of issuance and questions before an EB-1A or NIW consular stage.", "/en/blog/us-immigrant-visa-issuance-pause-russia/"],
        ["United Kingdom · 6 March 2026", "HC 1691: why the filing date determines which rules apply", "A timetable for the key changes.", "/en/blog/uk-hc-1691-dates/"],
        ["Spain · 20 February 2026", "The 2026 DNV income threshold and family calculation", "The 200%, 75% and 25% calculation following the SMI increase.", "/en/blog/spain-dnv-income-2026/"],
      ],
    },
    pricing: [
      "Fees and timing",
      "The budget depends on the route and preparation required",
      "Following the options assessment, we recommend the appropriate format: a standalone strategy, profile development or full support. Scope, timing and fee are agreed in writing before paid work begins.",
      "Fees cover Samotsvet's work. Government fees, translations, licensed partners and other external costs are quoted separately unless expressly included.",
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
      title: "What to know before a project begins",
      items: [
        ["Can I approach you without publications or speaking experience?", "Yes. We examine projects, measurable results, leadership, references and independent evidence. Where the foundation is sufficient, we build a plan that turns genuine achievements into a filing-ready evidential case."],
        ["What does the options assessment provide?", "Our team reviews the introductory form, identifies suitable programmes and explains the strengths and key gaps. A firm view on the documents requires a separate evidence review."],
        ["Do you work with profiles that are not ready to file?", "Yes. We create a 3–12 month plan around genuine professional activity, recorded results and independent evidence. A talent visa may remain a realistic objective even where the initial public profile is limited."],
        ["How does the guarantee work after a refusal?", "The full-support fee is divided into 40%, 30% and 30%. After a refusal, we refund the second 30% payment and do not invoice the final 30%. The initial 40% remains paid for strategy and preparation already completed."],
        ["Who handles questions of local law?", "Samotsvet leads strategy and project preparation. Where a task requires a licensed professional in the relevant jurisdiction, we involve a specialist partner and explain their role in advance."],
        ["Can you compare several countries?", "Yes. We compare the eventual status, timing, dependence on employment or business, family position and available evidence."],
      ],
    },
    closing: [
      "First step",
      "Assess your options across several programmes",
      "Complete the introductory form. Our team will review your circumstances personally and recommend realistic options within one business day.",
      "Assess my options",
    ],
  },
} as const;

export function HomePage({ locale = "ru" }: { locale?: Locale }) {
  const text = copy[locale];
  const isEnglish = locale === "en";
  const base = isEnglish ? "/en" : "";
  const assessmentPath = withTrailingSlash(`${base}/assessment`);
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
        <div className="hero-copy"><p className="eyebrow">{text.hero[0]}</p><h1>{text.hero[1]}</h1><p className="hero-lede">{text.hero[2]}</p><div className="hero-actions"><Link className="button button-primary" href={assessmentPath}>{text.hero[3]}</Link><Link className="button button-secondary" href={comparePath}>{text.hero[4]}</Link></div><p className="hero-response">{text.hero[5]}</p><p className="hero-note">{text.hero[6]}</p></div>
        <figure className="hero-founder">
          <div className="hero-founder-photo"><Image src="/nikita-founder-white-v3.webp" alt={text.founder[0]} width={1149} height={1368} priority sizes="(max-width: 980px) 520px, 44vw" /></div>
          <figcaption><strong>{text.founder[0]}</strong><span>{text.founder[1]}</span><small>{text.founder[2]}<br />{text.founder[3]}</small></figcaption>
        </figure>
      </section>

      <section className="delegation-band"><div className="section-shell delegation-layout"><div><p className="eyebrow eyebrow-light">{text.delegation.eyebrow}</p><h2>{text.delegation.title}</h2><p>{text.delegation.body}</p></div><div><div className="delegation-items">{text.delegation.items.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}</div><p>{text.delegation.note}</p></div></div></section>

      <section className="section-shell section-block audience-section"><Heading eyebrow={text.audiences.eyebrow} title={text.audiences.title} intro={text.audiences.intro} /><div className="audience-grid">{text.audiences.items.map(([n,t,b]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>)}</div></section>

      <section className="problem-band"><div className="section-shell problem-layout"><div><p className="eyebrow eyebrow-light">{text.problem.eyebrow}</p><h2>{text.problem.title}</h2><p>{text.problem.body}</p></div><div className="problem-list">{text.problem.items.map(([t,b]) => <article key={t}><h3>{t}</h3><p>{b}</p></article>)}</div></div></section>

      <section className="section-shell section-block development-evidence"><Heading eyebrow={text.development.eyebrow} title={text.development.title} intro={text.development.body} /><p className="development-note">{text.development.note}</p><div className="development-steps">{text.development.items.map(([n,t,b]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>)}</div><Link className="text-link" href={withTrailingSlash(`${base}/profile-development`)}>{text.development.link} <span aria-hidden="true">↗</span></Link></section>

      <section className="comparison-preview" id="directions"><div className="section-shell section-block"><Heading eyebrow={text.compare.eyebrow} title={text.compare.title} intro={text.compare.intro} /><div className="comparison-preview-grid">{text.compare.rows.map(([code,name,outcome,evidence]) => <article key={`${code}-${name}`}><span>{code}</span><h3>{name}</h3><strong>{outcome}</strong><p>{evidence}</p></article>)}</div><Link className="button button-secondary comparison-link" href={comparePath}>{text.compare.link}</Link></div></section>

      <section className="section-shell section-block services-section" id="services"><Heading eyebrow={text.services.eyebrow} title={text.services.title} intro={text.services.intro} /><div className="service-card-grid">{text.services.items.map(([n,t,b,m]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p><strong>{m}</strong></article>)}</div><Link className="text-link" href={servicesPath}>{text.services.link} <span aria-hidden="true">↗</span></Link></section>

      <ClientResults locale={locale} />

      <section className="section-shell section-block compact-process" id="process"><Heading eyebrow={text.process.eyebrow} title={text.process.title} /><ol>{text.process.items.map(([n,t,b]) => <li key={n}><span>{n}</span><div><h3>{t}</h3><p>{b}</p></div></li>)}</ol></section>

      <section className="editorial-section"><div className="section-shell section-block"><div className="section-heading"><div><p className="eyebrow">{text.articles.eyebrow}</p><h2>{text.articles.title}</h2></div><Link className="text-link" href={withTrailingSlash(`${base}/blog`)}>{text.articles.all} <span aria-hidden="true">↗</span></Link></div><div className="article-grid">{text.articles.items.map(([tag,title,body,href]) => <article className="article-card" key={href}><p className="article-tag">{tag}</p><h3>{title}</h3><p>{body}</p><Link href={href}>{text.articles.read} <span aria-hidden="true">→</span></Link></article>)}</div></div></section>

      <section className="section-shell pricing-strip" id="pricing"><div><p className="eyebrow">{text.pricing[0]}</p><h2>{text.pricing[1]}</h2></div><div><p>{text.pricing[2]}</p><small className="pricing-note">{text.pricing[3]}</small></div><div className="price-grid">{SERVICE_PRICES.map(item => <div className="price-item" key={item.code}><span>{isEnglish ? item.countryEn : item.countryRu}</span><strong>{isEnglish ? item.priceEn : item.price}</strong><small>{isEnglish ? "Preparation" : "Подготовка"}: {isEnglish ? item.timelineEn : item.timelineRu}</small>{isEnglish && "noteEn" in item ? <small>{item.noteEn}</small> : !isEnglish && "noteRu" in item ? <small>{item.noteRu}</small> : null}</div>)}</div></section>

      <section className="guarantee-section" id="guarantee"><div className="section-shell guarantee-layout"><div className="guarantee-heading"><p className="eyebrow eyebrow-light">{text.guarantee.eyebrow}</p><h2>{text.guarantee.title}</h2><p>{text.guarantee.body}</p><p>{text.guarantee.request}</p><Link className="button button-gold" href={withTrailingSlash(`${base}/legal`)}>{text.guarantee.link}</Link></div><div><div className="guarantee-stages">{text.guarantee.stages.map(([amount, moment, scope], index) => <article key={amount}><span>{String(index + 1).padStart(2, "0")}</span><strong>{amount}</strong><h3>{moment}</h3><p>{scope}</p></article>)}</div><div className="guarantee-refusal"><strong>{isEnglish ? "If the authority refuses" : "Если ведомство отказывает"}</strong><p>{text.guarantee.refusal}</p></div><small>{text.guarantee.condition}</small></div></div></section>

      <section className="section-shell section-block faq-section"><Heading eyebrow={text.faq.eyebrow} title={text.faq.title} /><div className="faq-list">{text.faq.items.map(([q,a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>

      <PressMentions locale={locale} />

      <section className="section-shell closing-cta"><div><p className="eyebrow eyebrow-light">{text.closing[0]}</p><h2>{text.closing[1]}</h2></div><div><p>{text.closing[2]}</p><Link className="button button-gold" href={assessmentPath}>{text.closing[3]}</Link></div></section>
    </main>
    <SiteFooter locale={locale} />
  </>;
}

function Heading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className={`section-heading${intro ? "" : " compact-heading"}`}><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{intro ? <p>{intro}</p> : null}</div>;
}
