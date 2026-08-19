type Locale = "ru" | "en";

const copy = {
  ru: {
    eyebrow: "Опыт и результаты",
    title: "Опыт команды с 2021 года",
    intro: "Совокупный опыт команды Samotsvet включает более 10 000 разобранных профессиональных профилей и более 800 успешно завершенных кейсов. Часть проектов мы вели целиком, к части подключались как партнер других агентств. Более 200 дел были связаны с Великобританией.",
    metrics: [
      ["10 000+", "профессиональных профилей разобрано"],
      ["800+", "завершенных кейсов в опыте команды"],
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
    title: "Team experience since 2021",
    intro: "The Samotsvet team's combined experience includes more than 10,000 professional profile reviews and over 800 successfully completed matters. We led some projects in full and joined others as a partner to immigration agencies. More than 200 were UK matters.",
    metrics: [
      ["10,000+", "professional profiles reviewed"],
      ["800+", "completed matters in the team's experience"],
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
