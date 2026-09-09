type Locale = "ru" | "en";

const copy = {
  ru: {
    eyebrow: "Опыт",
    title: "Практика в иммиграционных проектах с 2021 года",
    intro: "Метрики включают работу Никиты в агентствах и напрямую, полное сопровождение и участие в отдельных этапах проектов. Они описывают завершенные клиентские кейсы, а не число одобрений, полученных только под брендом Samotsvet.",
    metrics: [
      ["800+", "завершенных клиентских кейсов"],
      ["200+", "кейсов по Великобритании"],
      ["10 000+", "разобранных профессиональных профилей"],
    ],
    casesTitle: "",
    cases: [],
    note: "",
  },
  en: {
    eyebrow: "Experience",
    title: "Work on immigration projects since 2021",
    intro: "The figures include Nikita's work in agencies and directly, full support and participation in defined stages of a project. They describe completed client matters, rather than approvals obtained solely under the Samotsvet brand.",
    metrics: [
      ["800+", "completed client matters"],
      ["200+", "United Kingdom matters"],
      ["10,000+", "professional profiles reviewed"],
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
