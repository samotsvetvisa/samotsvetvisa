import { pressMentions } from "../content/press";

export function PressMentions({ locale = "ru" }: { locale?: "ru" | "en" }) {
  if (pressMentions.length === 0) return null;

  const english = locale === "en";

  return (
    <section className="section-shell section-block press-section" aria-labelledby="press-title">
      <div className="section-heading compact-heading">
        <div>
          <p className="eyebrow">{english ? "Independent coverage" : "Независимые публикации"}</p>
          <h2 id="press-title">{english ? "Samotsvet in the media" : "Про Samotsvet говорят"}</h2>
        </div>
      </div>
      <div className="press-grid">
        {pressMentions.map((mention) => (
          <a href={mention.href} target="_blank" rel="noreferrer" key={mention.href}>
            <span>{mention.outlet}</span>
            <h3>{mention.title}</h3>
            <time dateTime={mention.date}>{mention.date}</time>
          </a>
        ))}
      </div>
    </section>
  );
}
