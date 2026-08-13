/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({
  title: "О нас",
  description: "Никита Самоцветов, основатель Samotsvet: более 10 000 отсмотренных профилей, участие в подготовке 800+ успешно завершенных кейсов и степень LLM University of Leeds.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="inner-hero section-shell about-hero">
          <div><p className="eyebrow">О Samotsvet</p><h1>Мы разбираем задачу глубже, чем список виз</h1></div>
          <p>Samotsvet — фамилия основателя и название практики. Мы сопоставляем цель, карьеру, бизнес и семейные обстоятельства, а затем собираем факты в ясную и проверяемую систему доказательств.</p>
        </section>

        <section className="section-shell founder-profile" id="nikita">
          <div className="founder-photo">
            <img src="/nikita-founder-white-v3.webp" alt="Никита Самоцветов, основатель Samotsvet" width="1149" height="1368" />
          </div>
          <div className="founder-copy">
            <p className="eyebrow">Основатель</p>
            <h2>Никита Самоцветов</h2>
            <p className="founder-role">Основатель Samotsvet. Лично отвечает за методологию и ведение иммиграционных и визовых кейсов.</p>
            <p>С 2021 года Никита отсмотрел <strong>более 10 000 профессиональных профилей</strong> — на скрининге в иммиграционных агентствах и самостоятельно. Он участвовал в подготовке более 800 успешно завершенных кейсов: часть вел целиком, часть — как партнер, которого агентства привлекали на сложные дела. Более 200 из них — британские.</p>
            <p>До запуска Samotsvet Никита работал в иммиграционном агентстве с кейсами специалистов, предпринимателей и семей. На практике он разбирает исходные данные, определяет, какие доказательства нужны, проверяет источники, сверяет факты между документами и ведет подготовку материалов.</p>
            <p>Никита окончил магистратуру University of Leeds по программе <strong>International Law and Global Governance (LLM)</strong>. Академическая специализация в международном праве дополняет практический опыт работы с иммиграционными и визовыми кейсами.</p>
            <p>Степень в международном праве дает методологическую базу. Права практиковать по иммиграционному праву конкретной страны она не дает — этим занимаются партнеры с соответствующими лицензиями.</p>
            <p>В фокусе — Global Talent и Innovator Founder в Великобритании, O-1, EB-1A, EB-2 NIW и E-2 в США, Digital Nomad Visa (DNV) в Испании и carte de sejour Talent во Франции.</p>
            <Link className="text-link" href="/legal/">Как устроена работа агентства <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="section-shell values-grid facts-grid">
          <article><span>01</span><h2>10 000+ отсмотренных профилей</h2><p>Скрининг и подробный разбор профилей специалистов, предпринимателей, их семей и компаний по Великобритании, США, Испании и Франции.</p></article>
          <article><span>02</span><h2>800+ кейсов с участием Никиты</h2><p>Часть проектов Никита вел целиком, к части подключался как партнер агентств. Более 200 дел — по Великобритании.</p></article>
          <article><span>03</span><h2>Нас привлекали агентства</h2><p>Подключались как партнеры, когда дело было сложным, доказательства противоречили друг другу или требовалась нестандартная подготовка.</p></article>
          <article><span>04</span><h2>Адвокат с лицензией в США</h2><p>Юридический этап по американским кейсам ведет наш партнер — адвокат с действующей лицензией на практику в США.</p></article>
        </section>

        <section className="section-shell about-details">
          <article><p className="eyebrow">Почему Samotsvet</p><h2>Сложные дела требуют индивидуальной работы</h2><p>Практика появилась из опыта внутри агентства, где сильный профиль мог потеряться в шаблоне. Мы ограничиваем число параллельных проектов и заранее фиксируем этапы, сроки и формат связи.</p></article>
          <article><p className="eyebrow">Наш стандарт</p><h2>Факты и реальные достижения</h2><p>Каждый тезис должен опираться на проверяемые документы и реальный результат. Для профиля на ранней стадии составляем план усиления; при отсутствии рабочего маршрута сразу объясняем причины.</p></article>
        </section>
        <section className="section-shell closing-cta"><div><p className="eyebrow eyebrow-light">Работа с нами</p><h2>Определим, что уже можно подтвердить и какие задачи войдут в план подготовки</h2></div><div><p>Короткая анкета дает достаточно данных для первого содержательного разговора.</p><Link className="button button-gold" href="/assessment/">Получить аудит профиля</Link></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
