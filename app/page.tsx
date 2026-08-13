import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { HeroVisual } from "./components/HeroVisual";
import { ClientResults } from "./components/ClientResults";
import { FOUNDER_NAME, LEGAL_NAME, SERVICE_PRICES, SITE_URL } from "./site";

export const metadata: Metadata = {
  title: { absolute: "Samotsvet — иммиграция и релокация полного цикла" },
  description: "Стратегия, усиление профиля, доказательства, партнеры и сопровождение подачи для Великобритании, Испании, США и Франции.",
  alternates: { canonical: "/", languages: { ru: "/", en: "/en" } },
  openGraph: {
    title: "Samotsvet — иммиграция и релокация полного цикла",
    description: "Стратегия, усиление профиля, доказательства, партнеры и сопровождение подачи.",
    url: "/",
    type: "website",
    locale: "ru_RU",
    siteName: "Samotsvet",
    images: [{ url: "/og-samotsvet.png", width: 1200, height: 630, alt: "Samotsvet — иммиграция и релокация" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samotsvet — иммиграция и релокация полного цикла",
    description: "Стратегия, усиление профиля, доказательства, партнеры и сопровождение подачи.",
    images: ["/og-samotsvet.png"],
  },
};

const countries = [
  {
    code: "UK",
    name: "Великобритания",
    title: "Профессиональные достижения или бизнес",
    routes: ["Global Talent", "Innovator Founder"],
    text: "Global Talent строится на подтвержденных профессиональных достижениях: рекомендациях, проектах, публикациях и результатах. Для Innovator Founder ключевую роль играет бизнес-проект и его одобрение endorsing body.",
    href: "/countries/uk",
    size: "seven",
  },
  {
    code: "ES",
    name: "Испания",
    title: "Удаленная работа из Испании",
    routes: ["Digital Nomad Visa (DNV)"],
    text: "Здесь важен формат работы: сотрудник зарубежной компании и самостоятельный специалист подтверждают право на ВНЖ по-разному.",
    href: "/countries/spain",
    size: "five",
  },
  {
    code: "US",
    name: "США",
    title: "Карьера, бизнес или инвестиции",
    routes: ["EB-1A", "EB-2 NIW", "O-1", "E-2"],
    text: "Четыре маршрута решают разные задачи: от работы и подтверждения профессионального уровня до грин-карты и переезда через бизнес.",
    href: "/countries/usa",
    size: "eight",
  },
  {
    code: "FR",
    name: "Франция",
    title: "Инновационный проект или собственный бизнес",
    routes: ["French Tech Visa", "Passeport Talent"],
    text: "Для инновационного проекта важны сам проект и его подтверждение французской экосистемой. Предпринимательский маршрут строится вокруг бизнес-плана, финансирования и опыта заявителя.",
    href: "/countries/france",
    size: "four",
  },
];

const articles = [
  {
    tag: "Великобритания · Изменения 2026",
    title: "HC 1691: почему правила зависят от даты подачи",
    text: "Календарь вступления в силу ключевых положений — от design pathway до B2 для постоянного проживания.",
    href: "/blog/uk-hc-1691-dates",
  },
  {
    tag: "Испания · Digital Nomad Visa",
    title: "Порог дохода в 2026 году и расчет для семьи",
    text: "Исправленный расчет 200%, 75% и 25% после повышения испанского SMI.",
    href: "/blog/spain-dnv-income-2026",
  },
  {
    tag: "США · EB-2 NIW",
    title: "EB-2 NIW требует собственной логики доказательств",
    text: "Почему будущую деятельность, национальное значение и готовность реализовать план нужно доказывать отдельно.",
    href: "/blog/eb2-niw-not-simple-alternative",
  },
];

export default function Home() {
  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#professional-service`,
    name: "Samotsvet",
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/samotsvet-logo.svg`,
    image: `${SITE_URL}/og-samotsvet.png`,
    founder: { "@type": "Person", name: FOUNDER_NAME, url: `${SITE_URL}/about#nikita` },
    areaServed: ["United Kingdom", "Spain", "United States", "France"],
    serviceType: "Полный цикл подготовки иммиграционных и визовых кейсов",
    priceRange: "Стоимость определяется после аудита профиля и согласования объема работ",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }} />
      <SiteHeader />
      <main>
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">Агентство иммиграции и релокации полного цикла</p>
            <h1>Виза начинается за год до подачи</h1>
            <p className="hero-lede">
              Мы ведем проект целиком: выбираем маршрут, планируем усиление профиля, готовим доказательства,
              координируем партнеров и сопровождаем подачу. Великобритания, Испания, США, Франция.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/assessment">Получить аудит профиля</Link>
              <Link className="button button-secondary" href="#directions">
                Выбрать страну
              </Link>
            </div>
            <p className="hero-note">Более 10 000 разобранных профилей · Более 800 успешных кейсов</p>
          </div>

          <HeroVisual />
        </section>

        <section className="principle-band">
          <div className="section-shell principle-grid">
            <p className="eyebrow eyebrow-light">Глубина подготовки</p>
            <h2>Сложный маршрут требует времени, команды и последовательности</h2>
            <p>
              Начинаем с исходной точки, строим план усиления, создаем новые профессиональные результаты,
              собираем подтверждения и ведем весь проект до подачи.
            </p>
          </div>
        </section>

        <section className="section-shell section-block" id="directions">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Направления</p>
              <h2>Четыре страны, девять маршрутов</h2>
            </div>
            <p>
              Один и тот же человек может подходить под Global Talent в Великобритании и EB-2 NIW в США.
              Это будут два разных кейса с разной доказательной базой. Ниже — что именно различается.
            </p>
          </div>

          <div className="country-grid">
            {countries.map((country) => (
              <article className={`country-card country-card--${country.size}`} key={country.code}>
                <div className="country-card-top">
                  <span className="country-code">{country.code}</span>
                  <span className="country-name">{country.name}</span>
                </div>
                <h3>{country.title}</h3>
                <div className="route-list">
                  {country.routes.map((route) => <span key={route}>{route}</span>)}
                </div>
                <p>{country.text}</p>
                <Link href={country.href}>Посмотреть маршрут <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-block process-section" id="process">
          <div className="section-heading compact-heading">
            <div>
              <p className="eyebrow">Процесс</p>
              <h2>Между идеей переезда и подачей — несколько отдельных задач</h2>
            </div>
          </div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Анализ исходного профиля</h3><p>Фиксируем цель, гражданство, карьеру, бизнес, состав семьи, сроки, предыдущие подачи и ограничения.</p></div></li>
            <li><span>02</span><div><h3>Сравнение маршрутов</h3><p>Сопоставляем требования каждого маршрута, будущий статус, сроки, стоимость, порядок подачи и риски.</p></div></li>
            <li><span>03</span><div><h3>Карта критериев и пробелов</h3><p>Разбираем каждый критерий: что уже доказано, где подтверждение слабое и какие факты пока отсутствуют.</p></div></li>
            <li><span>04</span><div><h3>Усиление профиля</h3><p>Если кейс еще не готов, планируем реальные проекты, роли, публикации, выступления, показатели, рекомендации и независимое признание. Этот этап может занимать месяцы.</p></div></li>
            <li><span>05</span><div><h3>Подготовка доказательств</h3><p>Проверяем источники, собираем документы, согласуем цифры, роли и даты, готовим рекомендателей и устраняем противоречия.</p></div></li>
            <li><span>06</span><div><h3>Обоснование заявки</h3><p>Выстраиваем аргументацию на основе доказательств и показываем, как факты и документы подтверждают требования выбранного маршрута.</p></div></li>
            <li><span>07</span><div><h3>Финальная проверка и подача</h3><p>Проверяем комплект целиком, готовим формы и сопровождаем подачу до решения.</p></div></li>
          </ol>
        </section>

        <ClientResults />

        <section className="regulatory-band" id="scope">
          <div className="section-shell regulatory-grid">
            <div>
              <p className="eyebrow eyebrow-light">Агентство полного цикла</p>
              <h2>Одна команда ведет весь путь от стратегии до подачи</h2>
            </div>
            <div className="scope-list">
              <article><span>Экспертиза Samotsvet</span><p>Стратегия, план усиления профиля, подготовка доказательств, логика заявки и управление проектом.</p></article>
              <article><span>Партнеры и подрядчики</span><p>Адвокаты, переводчики, специалисты по публичному профилю и бизнес-задачам подключаются по мере необходимости.</p></article>
              <article><span>Единое управление</span><p>У Вас один план, общий график и команда под руководством Samotsvet на всех этапах работы.</p></article>
            </div>
          </div>
        </section>

        <section className="editorial-section">
          <div className="section-shell section-block">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Блог</p>
                <h2>Анализируем изменения и практику применения правил</h2>
              </div>
              <Link className="text-link" href="/blog">Все материалы <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="article-grid">
              {articles.map((article) => (
                <article className="article-card" key={article.href}>
                  <p className="article-tag">{article.tag}</p>
                  <h3>{article.title}</h3>
                  <p>{article.text}</p>
                  <Link href={article.href}>Читать <span aria-hidden="true">→</span></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell pricing-strip" id="pricing">
          <div>
            <p className="eyebrow">Стоимость и сроки</p>
            <h2>Объем работы определяет бюджет и график</h2>
          </div>
          <div>
            <p>Срочная подача с готовым профилем может занять несколько недель. Полный цикл сложной программы, особенно в США, иногда занимает до двух лет: мы усиливаем профиль, создаем новые результаты, собираем подтверждения и координируем всех участников. После анализа фиксируем этапы, ориентиры по срокам и стоимость.</p>
            <Link className="text-link" href="/legal">Как устроена работа агентства <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="price-grid" aria-label="Ориентировочная стоимость услуг">
            {SERVICE_PRICES.map((item) => (
              <div className="price-item" key={item.code}>
                <span>{item.countryRu}</span>
                <strong>{item.price}</strong>
                <small>Срок: {item.timelineRu}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell closing-cta">
          <div>
            <p className="eyebrow eyebrow-light">Первый шаг</p>
            <h2>Аудит профиля определит маршрут, объем подготовки и следующие шаги</h2>
          </div>
          <div>
            <p>
              Ответьте на несколько вопросов. Мы проанализируем исходные данные, отметим сильные
              стороны и предложим план дальнейшей подготовки.
            </p>
            <Link className="button button-gold" href="/assessment">Получить аудит профиля</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
