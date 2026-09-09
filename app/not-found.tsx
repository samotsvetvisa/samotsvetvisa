import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationLink } from "./components/ConsultationLink";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found section-shell">
        <p className="eyebrow">404</p>
        <h1>Эта страница сменила маршрут</h1>
        <p>Вернитесь на главную или расскажите нам о своей задаче.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">На главную</Link>
          <ConsultationLink className="button button-secondary" location="not_found">Бесплатная консультация</ConsultationLink>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
export const metadata: Metadata = {
  title: "Страница не найдена",
  robots: { index: false, follow: true },
};
