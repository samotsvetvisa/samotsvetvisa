type Locale = "ru" | "en";

const copy = {
  ru: {
    eyebrow: "Опыт и результаты",
    title: "Более 800 успешно завершенных кейсов",
    intro: "С 2021 года мы проанализировали более 10 000 профессиональных профилей и успешно завершили более 800 клиентских кейсов, включая более 200 по Великобритании. Этот опыт охватывает маршруты для специалистов, предпринимателей, их семей и компаний. Именные истории публикуем с согласия клиентов.",
    metrics: [
      ["10 000+", "профессиональных профилей разобрано"],
      ["800+", "кейсов завершено успешно"],
      ["200+", "успешных кейсов по Великобритании"],
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
    title: "More than 800 successfully completed matters",
    intro: "Since 2021, we have assessed more than 10,000 professional profiles and successfully completed more than 800 client matters, including over 200 in the UK. Our experience covers specialists, entrepreneurs, their families and businesses. Named stories appear with client permission.",
    metrics: [
      ["10,000+", "professional profiles reviewed"],
      ["800+", "matters completed successfully"],
      ["200+", "successful UK matters"],
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
        <div className="case-framework">
          <div><p className="eyebrow">{locale === "en" ? "Client stories" : "Кейсы клиентов"}</p><h3>{text.casesTitle}</h3></div>
          <div className="case-framework-grid">
            {text.cases.map(([title, description], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h4>{title}</h4><p>{description}</p></article>)}
          </div>
          <p className="case-publication-note">{text.note}</p>
        </div>
      </div>
    </section>
  );
}
