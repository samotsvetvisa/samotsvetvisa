type Locale = "ru" | "en";

const copy = {
  ru: {
    eyebrow: "Насмотренность",
    title: "Десять тысяч профилей учат видеть закономерности",
    intro: "С 2021 года через мою работу в агентствах и напрямую прошло более 10 000 профессиональных профилей. Командой доведено до результата более 800 клиентских кейсов, в том числе свыше 200 по Великобритании. Этот объем помогает быстрее узнавать повторяющиеся риски и отличать сильную основу от неподтвержденного впечатления.",
    metrics: [
      ["800+", "завершенных клиентских кейсов"],
      ["10 000+", "профессиональных профилей разобрано"],
      ["200+", "кейсов по Великобритании"],
      ["с 2021", "практика в иммиграционных проектах"],
    ],
    casesTitle: "",
    cases: [],
    note: "",
  },
  en: {
    eyebrow: "Pattern recognition",
    title: "Ten thousand profiles teach you to recognise patterns",
    intro: "Since 2021, more than 10,000 professional profiles have passed through my work in agencies and directly. The team has taken more than 800 client matters through to completion, including over 200 UK matters. That volume helps us identify recurring risks and distinguish a strong foundation from an unsupported impression sooner.",
    metrics: [
      ["800+", "completed client matters"],
      ["10,000+", "professional profiles reviewed"],
      ["200+", "United Kingdom matters"],
      ["since 2021", "work on immigration projects"],
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
