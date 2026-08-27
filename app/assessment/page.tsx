import type { Metadata } from "next";
import { AssessmentForm } from "../components/AssessmentForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "Предварительная оценка профиля и маршрутов",
  description: "Короткая оценка возможных иммиграционных маршрутов, готовности профиля и следующего шага подготовки.",
  path: "/assessment",
});

export default function AssessmentPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="inner-hero section-shell assessment-hero">
          <div>
            <p className="eyebrow">Предварительная оценка</p>
            <h1>Сначала короткий скрининг — 2–3 минуты</h1>
          </div>
          <p>
            На экране сразу появятся направления, которые стоит проверить, и текущая готовность профиля. Затем можно дополнить данные для содержательного ответа команды в течение одного рабочего дня.
          </p>
        </section>
        <section className="section-shell assessment-layout">
          <aside>
            <span>Что Вы получите</span>
            <ol>
              <li>Направления, которые имеет смысл проверить.</li>
              <li>Оценку готовности без псевдоточного процента.</li>
              <li>Понимание, что уже можно доказать.</li>
              <li>План для профиля без публикаций на старте.</li>
            </ol>
          </aside>
          <AssessmentForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
