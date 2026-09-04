/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "Агентство Никиты Самоцветова",
  description: "Никита Самоцветов и команда Samotsvet: 800+ завершённых кейсов, 10 000+ разобранных профилей и методология подготовки иммиграционных проектов.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="inner-hero section-shell about-hero">
          <div><p className="eyebrow">Агентство Никиты Самоцветова</p><h1>Экспертиза персональна. Исполнение — командное</h1></div>
          <p>Я отвечаю за оценку профиля, выбор стратегии и контроль качества. Команда Samotsvet собирает доказательства и документы, координирует профильных партнёров и ведёт согласованный процесс до решения.</p>
        </section>

        <section className="section-shell founder-profile" id="nikita">
          <div className="founder-photo">
            <img src="/nikita-founder-white-v3.webp" alt="Никита Самоцветов, основатель Samotsvet" width="1149" height="1368" />
          </div>
          <div className="founder-copy">
            <p className="eyebrow">Основатель</p>
            <h2>Никита Самоцветов</h2>
            <p className="founder-role">Основатель и руководитель практики. Я отвечаю за методологию, стратегию сложных проектов и контроль качества.</p>
            <p>С 2021 года через мою работу в агентствах и напрямую прошло <strong>более 10 000 профессиональных профилей</strong>. Командой завершено <strong>более 800 клиентских кейсов</strong>, в том числе свыше 200 по Великобритании.</p>
            <p>До запуска Samotsvet Никита работал в нескольких агентствах Европы и Великобритании: разбирал иммиграционные профили, запускал новые направления и был партнером в компаниях по релокации. Этот опыт стал основой методологии команды: мы сравниваем возможные маршруты, определяем нужные доказательства, проверяем источники и сверяем факты между документами.</p>
            <p>В 2023 году Никита окончил магистратуру University of Leeds по программе <strong>International Law and Global Governance (LLM)</strong>.</p>
            <p>В фокусе — Global Talent и Innovator Founder в Великобритании, O-1, EB-1A, EB-2 NIW и E-2 в США, Digital Nomad Visa (DNV) в Испании и carte de sejour Talent во Франции.</p>
            <Link className="text-link" href="/legal/">Как устроена работа агентства <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="section-shell values-grid facts-grid">
          <article><span>01</span><h2>800+ завершённых кейсов</h2><p>Сопровождали клиентские проекты полностью и подключались к отдельным этапам работы вместе с агентствами.</p></article>
          <article><span>02</span><h2>10 000+ разобранных профилей</h2><p>Разбирали профессиональные, предпринимательские и семейные ситуации и сопоставляли их с возможными направлениями переезда.</p></article>
          <article><span>03</span><h2>14 стран в сравнительном разборе</h2><p>Кроме четырёх основных направлений сайта оценивали Австралию, Болгарию, Португалию, Аргентину, Китай, Японию, Канаду, Швейцарию, Люксембург и Германию.</p></article>
          <article><span>04</span><h2>Адвокат с лицензией в США</h2><p>Юридический этап по американским кейсам ведет наш партнер — адвокат с действующей лицензией на практику в США.</p></article>
        </section>

        <section className="section-shell about-details">
          <article><p className="eyebrow">Почему Samotsvet</p><h2>Я скажу, если для подачи рано</h2><p>Оценка не подгоняется под заранее выбранную страну. Я сравниваю программы и отделяю то, что уже можно доказать, от того, что ещё нужно развить. Команда берёт в работу только согласованный реалистичный план.</p></article>
          <article><p className="eyebrow">Наш стандарт</p><h2>Факты и реальные достижения</h2><p>Каждый тезис должен опираться на проверяемые документы и реальный результат. Для профиля на ранней стадии мы составляем план усиления; при отсутствии рабочего маршрута сразу объясняем причины.</p></article>
        </section>
        <section className="section-shell closing-cta"><div><p className="eyebrow eyebrow-light">Работа с нами</p><h2>Определим, что уже можно подтвердить и какие задачи войдут в план подготовки</h2></div><div><p>Аудит профиля даёт достаточно данных для первого содержательного разговора.</p><Link className="button button-gold" href="/assessment/">Пройти аудит профиля</Link></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
