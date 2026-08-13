import Link from "next/link";
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
          <Link className="button button-secondary" href="/assessment/">Получить аудит профиля</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
