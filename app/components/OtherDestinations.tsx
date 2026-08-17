import Link from "next/link";
import { countries } from "../content/countries";
import { countriesEn } from "../content/countries-en";
import { withTrailingSlash } from "../site";

export function OtherDestinations({ currentSlug, locale = "ru" }: { currentSlug: string; locale?: "ru" | "en" }) {
  const isEnglish = locale === "en";
  const items = isEnglish ? countriesEn : countries;
  const base = isEnglish ? "/en" : "";

  return (
    <section className="section-shell other-destinations">
      <div className="other-destinations-heading">
        <p className="eyebrow">{isEnglish ? "Other destinations" : "Другие направления"}</p>
        <h2>{isEnglish ? "Compare the other three countries" : "Сравните еще три страны"}</h2>
      </div>
      <div className="other-destinations-grid">
        {items.filter((item) => item.slug !== currentSlug).map((item) => (
          <Link key={item.slug} href={withTrailingSlash(`${base}/countries/${item.slug}`)}>
            <span>{item.code}</span>
            <h3>{item.country}</h3>
            <p>{item.routes.map((route) => route.name).join(" · ")}</p>
            <strong>{isEnglish ? "View destination" : "Открыть направление"} <span aria-hidden="true">↗</span></strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
