type Locale = "ru" | "en";

const copy = {
  ru: {
    eyebrow: "Опыт и результаты",
    title: "Пять лет и три роли",
    intro: "С 2021 года Никита отсмотрел более 10 000 профессиональных профилей — на скрининге в иммиграционных агентствах и самостоятельно. Участвовал в подготовке более 800 успешно завершенных кейсов: часть вел целиком, часть — как партнер, которого агентства привлекали на сложные дела. Более 200 из них — британские.",
    metrics: [
      ["10 000+", "профилей отсмотрено"],
      ["800+", "кейсов с участием Никиты"],
      ["200+", "британских дел"],
    ],
    casesTitle: "Что будет показано в каждом кейсе",
    cases: [
      ["Исходная точка", "Профиль клиента, цель, ограничения и доказательства на старте."],
      ["Проделанная работа", "Какие пробелы нашли, что пришлось наработать и как был собран пакет."],
      ["Результат", "Маршрут, срок, решение и выводы, которые могут быть полезны другим клиентам."],
    ],
    note: "Раздел подготовлен для фотографий и историй клиентов. Первые именные кейсы будут добавлены после получения согласий.",
  },
  en: {
    eyebrow: "Experience and outcomes",
    title: "Five years across three roles",
    intro: "Since 2021, Nikita has screened more than 10,000 professional profiles, both inside immigration agencies and independently. He has contributed to more than 800 successfully completed matters: some led in full, others handled as the partner agencies brought in for difficult cases. More than 200 were UK matters.",
    metrics: [
      ["10,000+", "profiles screened"],
      ["800+", "matters involving Nikita"],
      ["200+", "UK matters"],
    ],
    casesTitle: "What each client story will show",
    cases: [
      ["Starting point", "The client profile, objective, constraints and evidence available at the outset."],
      ["Work completed", "The gaps identified, the profile development required and how the evidence was assembled."],
      ["Outcome", "The route, timing, decision and practical conclusions for other applicants."],
    ],
    note: "This section is ready for client photographs and individual stories. The first named cases will be added once permission has been obtained.",
  },
} satisfies Record<Locale, {
  eyebrow: string;
  title: string;
  intro: string;
  metrics: string[][];
  casesTitle: string;
  cases: string[][];
  note: string;
}>;

export function ClientResults({ locale = "ru" }: { locale?: Locale }) {
  const text = copy[locale];

  return (
    <section className="results-section" id="results">
      <div className="section-shell results-inner">
        <div className="results-heading">
          <div><p className="eyebrow eyebrow-light">{text.eyebrow}</p><h2>{text.title}</h2></div>
          <p>{text.intro}</p>
        </div>
        <div className="results-metrics">
          {text.metrics.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}
        </div>
      </div>
    </section>
  );
}
