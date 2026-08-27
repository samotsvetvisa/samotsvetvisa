type Locale = "ru" | "en";

const copy = {
  ru: {
    eyebrow: "Практика в цифрах",
    title: "Более 10 000 разобранных профилей",
    intro: "С 2021 года мы разбирали собственные проекты, работали с агентствами и сравнивали варианты переезда для разных профессиональных и семейных ситуаций.",
    metrics: [
      ["10 000+", "профессиональных профилей разобрано"],
      ["14", "стран входили в сравнительный разбор"],
      ["с 2021", "накапливается практический опыт"],
    ],
    casesTitle: "",
    cases: [],
    note: "",
  },
  en: {
    eyebrow: "Practice in figures",
    title: "More than 10,000 profiles reviewed",
    intro: "Since 2021, we have reviewed direct projects, worked with agencies and compared routes for different professional and family circumstances.",
    metrics: [
      ["10,000+", "professional profiles reviewed"],
      ["14", "countries included in route comparisons"],
      ["since 2021", "practical experience accumulated"],
    ],
    casesTitle: "",
    cases: [],
    note: "",
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
