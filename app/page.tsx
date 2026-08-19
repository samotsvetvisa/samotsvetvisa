import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { HeroVisual } from "./components/HeroVisual";
import { HashLink } from "./components/HashLink";
import { ClientResults } from "./components/ClientResults";
import { FOUNDER_NAME, LEGAL_NAME, SERVICE_MODEL_RU, SERVICE_PRICES, SITE_URL } from "./site";

export const metadata: Metadata = {
  title: { absolute: "Samotsvet — иммиграция и релокация полного цикла" },
  description: "Стратегия, усиление профиля, доказательства, партнеры и сопровождение подачи для Великобритании, Испании, США и Франции.",
  alternates: { canonical: "/", languages: { ru: "/", en: "/en/", "x-default": "/" } },
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
    title: "Профессиональные достижения или стартап",
    routes: [{ label: "Global Talent", href: "/countries/uk/#route-global-talent" }, { label: "Innovator Founder", href: "/countries/uk/#route-innovator-founder" }],
    text: "Global Talent строится на подтвержденных профессиональных достижениях: рекомендациях, проектах, публикациях и результатах. Для Innovator Founder ключевую роль играет бизнес-проект и его одобрение endorsing body.",
    href: "/countries/uk/",
    size: "seven",
  },
  {
    code: "ES",
    name: "Испания",
    title: "Удаленная работа из Испании",
    routes: [{ label: "Digital Nomad Visa (DNV)", href: "/countries/spain/#route-digital-nomad-visa" }],
    text: "Для сотрудника зарубежной компании и ИП или контрактного специалиста действуют разные требования к договору, стажу и подтверждению дохода.",
    href: "/countries/spain/",
    size: "five",
  },
  {
    code: "US",
    name: "США",
    title: "Карьера, бизнес или инвестиции",
    routes: [{ label: "EB-1A", href: "/countries/usa/#route-eb-1a" }, { label: "EB-2 NIW", href: "/countries/usa/#route-eb-2-niw" }, { label: "O-1", href: "/countries/usa/#route-o-1" }, { label: "E-2", href: "/countries/usa/#route-e-2" }],
    text: "Четыре маршрута решают разные задачи: от работы и подтверждения профессионального уровня до грин-карты и переезда через бизнес.",
    href: "/countries/usa/",
    size: "eight",
  },
  {
    code: "FR",
    name: "Франция",
    title: "Инновационный проект или собственный бизнес",
    routes: [{ label: "French Tech Visa", href: "/countries/france/#route-french-tech-visa" }, { label: "Talent – porteur de projet", href: "/countries/france/#route-talent-business" }],
    text: "Для инновационного проекта важны сам проект и его подтверждение французской экосистемой. Предпринимательский маршрут строится вокруг бизнес-плана, финансирования и опыта заявителя.",
    href: "/countries/france/",
    size: "four",
  },
];

const articles = [
  {
    tag: "Великобритания · Изменения 2026",
    title: "HC 1691: почему правила зависят от даты подачи",
    text: "Календарь вступления в силу ключевых положений — от design pathway до B2 для постоянного проживания.",
    href: "/blog/uk-hc-1691-dates/",
  },
  {
    tag: "Испания · Digital Nomad Visa",
    title: "Порог дохода в 2026 году и расчет для семьи",
    text: "Исправленный расчет 200%, 75% и 25% после повышения испанского SMI.",
    href: "/blog/spain-dnv-income-2026/",
  },
  {
    tag: "США · EB-2 NIW",
    title: "EB-2 NIW требует собственной логики доказательств",
    text: "Почему будущую деятельность, национальное значение и готовность реализовать план нужно доказывать отдельно.",
    href: "/blog/eb2-niw-not-simple-alternative/",
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
              Мы ведем проект целиком: выбираем маршрут, готовим доказательства и координируем подачу.
              Если профиль еще не готов, заранее планируем его усиление. Великобритания, Испания, США, Франция.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/assessment/">Получить аудит профиля</Link>
              <HashLink className="button button-secondary" href="#directions">
                Выбрать страну
              </HashLink>
            </div>
            <p className="hero-response">Ответим в течение 24 часов</p>
            <p className="hero-note">10 000+ разобранных профилей · 800+ завершенных кейсов</p>
          </div>

          <HeroVisual />
        </section>

        <section className="principle-band">
          <div className="section-shell principle-grid">
            <p className="eyebrow eyebrow-light">Глубина подготовки</p>
            <h2>Сложный маршрут требует времени, команды и последовательности</h2>
            <p>
              Сложные кейсы собираются поэтапно: сначала выбираем маршрут и строим карту критериев, затем закрываем пробелы, готовим доказательства и собираем финальный комплект.
              Если профиль нужно усиливать, подготовка может начинаться за 6–12 месяцев до подачи; сроки самой подачи и рассмотрения зависят от страны и программы.
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
              В каждой стране действуют свои иммиграционные программы и критерии оценки. Мы разбираем ситуацию клиента,
              сравниваем доступные решения и оцениваем шансы по каждому подходящему маршруту.
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
                  {country.routes.map((route) => <Link key={route.href} href={route.href}>{route.label}</Link>)}
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
          <p className="process-fact">Семь шагов связывают исходные данные, доказательства и подачу в один проверяемый комплект.</p>
          <ol className="process-list">
            <li><span>01</span><div><h3>Анализ исходного профиля</h3><p>Смотрим три вещи: все гражданства, подтвержденные документами факты и дату, к которой нужен результат.</p></div></li>
            <li><span>02</span><div><h3>Сравнение маршрутов</h3><p>Сравниваем результат маршрута, срок до него и ключевые ограничения. Например, Global Talent может вести к ILR через 3 или 5 лет, а O-1 остается временной рабочей категорией.</p></div></li>
            <li><span>03</span><div><h3>Карта критериев и пробелов</h3><p>Для каждого критерия отмечаем, что уже доказано, какое подтверждение слабое и какого факта пока нет.</p></div></li>
            <li><span>04</span><div><h3>Усиление профиля</h3><p>Планируем реальные проекты, публичные материалы и независимое признание. Для каждого шага задаем измеримый результат; весь этап обычно занимает 6–12 месяцев.</p></div></li>
            <li><span>05</span><div><h3>Подготовка доказательств</h3><p>Сверяем, чтобы даты, цифры и роли совпадали в рекомендациях, трудовых документах и публикациях. Расхождения устраняем до сборки финального комплекта.</p></div></li>
            <li><span>06</span><div><h3>Обоснование заявки</h3><p>Связываем каждое требование с конкретным фактом и документом. Отдельно объясняем слабые места, которые нельзя закрыть объемом материалов.</p></div></li>
            <li><span>07</span><div><h3>Финальная проверка, формы и подача</h3><p>Проверяем комплект, согласуем формы с профильными партнерами и сопровождаем подачу до решения.</p></div></li>
          </ol>
        </section>

        <ClientResults />

        <section className="section-shell development-product">
          <div><p className="eyebrow">Усиление профиля</p><h2>План подготовки на 6–12 месяцев</h2></div>
          <div><p>На аудите определяем, каких доказательств не хватает. Затем ставим в план проекты, публикации и выступления; отдельно фиксируем показатели, рекомендации и контрольные точки.</p><Link className="text-link" href="/profile-development/">Как устроена программа <span aria-hidden="true">↗</span></Link></div>
        </section>

        <section className="regulatory-band" id="scope">
          <div className="section-shell regulatory-grid">
            <div>
              <p className="eyebrow eyebrow-light">Агентство полного цикла</p>
              <h2>Одна команда ведет весь путь от стратегии до подачи</h2>
            </div>
            <div className="scope-list">
              <article><span>Единая модель работы</span><p>{SERVICE_MODEL_RU}</p></article>
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
              <Link className="text-link" href="/blog/">Все материалы <span aria-hidden="true">↗</span></Link>
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
            <p>Срочная подача с готовым профилем может занять несколько недель. Полный цикл сложной программы, особенно в США, иногда занимает до двух лет: мы нарабатываем результаты, собираем подтверждения и координируем участников. После анализа фиксируем этапы, ориентиры по срокам и стоимость.</p>
            <Link className="text-link" href="/legal/">Как устроена работа агентства <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="price-grid" aria-label="Ориентировочная стоимость услуг">
            {SERVICE_PRICES.map((item) => (
              <div className="price-item" key={item.code}>
                <span>{item.countryRu}</span>
                <strong>{item.price}</strong>
                <small>Срок: {item.timelineRu}</small>
                {"noteRu" in item ? <small>{item.noteRu}</small> : null}
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
            <p>Ответьте на короткую анкету. В течение 24 часов мы скажем, какой маршрут стоит проверять, что уже подтверждено и чего пока не хватает.</p>
            <Link className="button button-gold" href="/assessment/">Получить аудит профиля</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
