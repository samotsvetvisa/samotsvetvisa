import Link from "next/link";
import { CONTACT_EMAIL, TELEGRAM_HANDLE, TELEGRAM_URL } from "../site";
import { BrandLockup } from "./BrandLockup";

export function SiteFooter({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const isEnglish = locale === "en";
  const base = isEnglish ? "/en" : "";

  return (
    <footer className="site-footer" id="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <BrandLockup />
          <p>{isEnglish ? "Immigration and relocation strategy for specialists and founders, with family, career and business considered together." : "Стратегии иммиграции и релокации для специалистов и предпринимателей — с учетом семьи, карьеры и бизнеса."}</p>
        </div>
        <div>
          <h3>{isEnglish ? "Destinations" : "Направления"}</h3>
          <Link href={`${base}/countries/uk`}>{isEnglish ? "United Kingdom" : "Великобритания"}</Link>
          <Link href={`${base}/countries/spain`}>{isEnglish ? "Spain" : "Испания"}</Link>
          <Link href={`${base}/countries/usa`}>{isEnglish ? "United States" : "США"}</Link>
          <Link href={`${base}/countries/france`}>{isEnglish ? "France" : "Франция"}</Link>
        </div>
        <div>
          <h3>Samotsvet</h3>
          <Link href={`${base}/about`}>{isEnglish ? "About" : "О нас"}</Link>
          <Link href={`${base}/blog`}>{isEnglish ? "Insights" : "Блог"}</Link>
          <Link href={`${base}/assessment`}>{isEnglish ? "Profile assessment" : "Аудит профиля"}</Link>
          <Link href={`${base}/contacts`}>{isEnglish ? "Contact and company details" : "Контакты и реквизиты"}</Link>
          <Link href={`${base}/privacy`}>{isEnglish ? "Privacy policy" : "Политика обработки персональных данных"}</Link>
          <Link href={`${base}/consent`}>{isEnglish ? "Data processing consent" : "Согласие на обработку персональных данных"}</Link>
          <Link href={`${base}/legal`}>{isEnglish ? "Terms of service" : "Условия оказания услуг"}</Link>
        </div>
        <div className="footer-note footer-operator">
          <h3>{isEnglish ? "Services provided by" : "Услуги оказывает"}</h3>
          <p><strong>{isEnglish ? "Individual entrepreneur Nikita Andreevich Samotsvetov" : "ИП Самоцветов Никита Андреевич"}</strong><br />{isEnglish ? "OGRNIP" : "ОГРНИП"} 323670000016524<br />{isEnglish ? "INN" : "ИНН"} 672200624836</p>
          <Link href={`${base}/contacts`}>{isEnglish ? "Full details ↗" : "Полные реквизиты ↗"}</Link>
        </div>
        <div className="footer-disclaimer">
          <p>{isEnglish ? "Samotsvet is a full-cycle immigration and relocation agency. We build the strategy, strengthen the profile, prepare the evidence and manage the project through to filing, bringing licensed partners and specialist contractors into the team where required." : "Samotsvet — агентство иммиграции и релокации полного цикла. Мы выстраиваем стратегию, усиливаем профиль, готовим доказательства и ведем проект до подачи, подключая лицензированных партнеров и профильных подрядчиков по мере необходимости."}</p>
        </div>
        <div className="footer-contact">
          <div>
            <p className="eyebrow">{isEnglish ? "Still have questions?" : "Остались вопросы?"}</p>
            <h2>{isEnglish ? "Contact us" : "Напишите нам"}</h2>
          </div>
          <div className="footer-contact-links">
            <a className="contact-channel" href={TELEGRAM_URL} target="_blank" rel="noreferrer">Telegram: {TELEGRAM_HANDLE}</a>
            <a className="contact-channel" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <span>© 2026 Samotsvet</span>
        <span className="footer-divider" aria-hidden="true">{" · "}</span>
        <span>{isEnglish ? "Immigration & Relocation" : "Иммиграция и релокация"}</span>
      </div>
    </footer>
  );
}
