import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "Усиление профиля перед подачей",
  description: "Аудит доказательной базы и план усиления профиля на 6–12 месяцев для Global Talent, EB-1A, EB-2 NIW, O-1 и других сложных маршрутов.",
  path: "/profile-development",
});

const stages = [
  ["Аудит доказательной базы", "Проверяем достижения, документы и независимые источники. Для каждого требования фиксируем сильные подтверждения, слабые места и отсутствующие факты."],
  ["План на 6–12 месяцев", "Определяем проекты, публикации, выступления, рекомендателей, показатели и другие результаты, которые реально усилят выбранный маршрут."],
  ["Контрольные точки", "Разбиваем план на этапы, назначаем сроки и регулярно сверяем новые результаты с требованиями программы."],
  ["Подготовка к подаче", "Когда доказательная база готова, собираем комплект, проверяем его на противоречия и переводим проект в этап подачи."],
];

export default function ProfileDevelopmentPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="inner-hero section-shell">
          <div><p className="eyebrow">Усиление профиля</p><h1>Сильный кейс можно спланировать заранее</h1></div>
          <p>Программа для специалистов и предпринимателей, которым нужно наработать доказательства до подачи. Мы превращаем общую цель в последовательный план с измеримыми результатами.</p>
        </section>

        <section className="section-shell development-page">
          <div className="development-intro">
            <p className="eyebrow">Результат программы</p>
            <h2>Карта подготовки на 6–12 месяцев</h2>
            <p>Вы получаете аудит текущей доказательной базы, выбранный рабочий маршрут, план усиления на 6–12 месяцев и контрольные точки. Продолжительность зависит от исходного профиля и программы.</p>
          </div>
          <ol className="development-stages">
            {stages.map(([title, text], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
          </ol>
        </section>

        <section className="section-shell about-details">
          <article><p className="eyebrow">Рабочий документ</p><h2>Матрица доказательств</h2><p>Для каждого требования фиксируем тезис, доступные источники, уровень подтверждения, пробел и следующий проверяемый результат.</p></article>
          <article><p className="eyebrow">Управление планом</p><h2>Календарь с ответственными</h2><p>Каждая задача получает срок, владельца, ожидаемый материал и критерий готовности. На контрольных точках план обновляется по фактическим результатам.</p></article>
        </section>

        <section className="section-shell closing-cta">
          <div><p className="eyebrow eyebrow-light">Первый шаг</p><h2>Начнем с аудита профиля и доступных доказательств</h2></div>
          <div><p>После анализа зафиксируем объем работы, ориентир по срокам и стоимость программы.</p><Link className="button button-gold" href="/assessment/">Получить план подготовки</Link></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
