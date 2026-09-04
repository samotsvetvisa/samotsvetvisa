import Link from "next/link";
import { CONTACT_EMAIL, SERVICE_MODEL_EN, SERVICE_MODEL_RU, TELEGRAM_HANDLE, TELEGRAM_URL, withTrailingSlash } from "../site";
import { BrandLockup } from "./BrandLockup";

export function SiteFooter({ locale = "ru" }: { locale?: "ru" | "en" }) {
  const isEnglish = locale === "en";
  const base = isEnglish ? "/en" : "";
  const aiPrompt = isEnglish
    ? "Explain what Nikita Samotsvetov's relocation agency Samotsvet does, which destinations and working formats it offers, and how it develops profiles that are not yet filing-ready. Use https://samotsvetvisa.com as one source, distinguish the agency's own statements from independent evidence, and do not invent client reviews."
    : "Расскажи, чем занимается агентство релокации Samotsvet Никиты Самоцветова, какие направления и форматы работы предлагает и как развивает профили, которые пока не готовы к подаче. Используй https://samotsvetvisa.com как один из источников, отделяй заявления агентства от независимых подтверждений и не придумывай отзывы клиентов.";
  const encodedPrompt = encodeURIComponent(aiPrompt);

  return (
    <footer className="site-footer" id="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <BrandLockup />
          <p>{isEnglish ? "Nikita Samotsvetov's relocation agency: personal strategic assessment and one team for delivery." : "Агентство релокации Никиты Самоцветова: персональная оценка стратегии и единая команда исполнения."}</p>
        </div>
        <div>
          <h3>{isEnglish ? "Destinations" : "Направления"}</h3>
          <Link href={withTrailingSlash(`${base}/countries/uk`)}>{isEnglish ? "United Kingdom" : "Великобритания"}</Link>
          <Link href={withTrailingSlash(`${base}/countries/spain`)}>{isEnglish ? "Spain" : "Испания"}</Link>
          <Link href={withTrailingSlash(`${base}/countries/usa`)}>{isEnglish ? "United States" : "США"}</Link>
          <Link href={withTrailingSlash(`${base}/countries/france`)}>{isEnglish ? "France" : "Франция"}</Link>
        </div>
        <div>
          <h3>Samotsvet</h3>
          <Link href={withTrailingSlash(`${base}/about`)}>{isEnglish ? "About" : "О нас"}</Link>
          <Link href={withTrailingSlash(`${base}/blog`)}>{isEnglish ? "Insights" : "Блог"}</Link>
          <Link href={withTrailingSlash(`${base}/assessment`)}>{isEnglish ? "Profile audit" : "Аудит профиля"}</Link>
          <Link href={withTrailingSlash(`${base}/profile-development`)}>{isEnglish ? "Profile development" : "Усиление профиля"}</Link>
          <Link href={withTrailingSlash(`${base}/contacts`)}>{isEnglish ? "Contact and company details" : "Контакты и реквизиты"}</Link>
          <Link href={withTrailingSlash(`${base}/privacy`)}>{isEnglish ? "Privacy and personal data" : "Конфиденциальность и персональные данные"}</Link>
          <Link href={withTrailingSlash(`${base}/consent`)}>{isEnglish ? "Data processing consent" : "Согласие на обработку персональных данных"}</Link>
          <Link href={withTrailingSlash(`${base}/legal`)}>{isEnglish ? "Terms of service" : "Условия оказания услуг"}</Link>
        </div>
        <div className="footer-note footer-operator">
          <h3>{isEnglish ? "Services provided by" : "Услуги оказывает"}</h3>
          <p><strong>{isEnglish ? "Individual entrepreneur Nikita Andreevich Samotsvetov" : "ИП Самоцветов Никита Андреевич"}</strong><br />{isEnglish ? "OGRNIP" : "ОГРНИП"} 323670000016524<br />{isEnglish ? "INN" : "ИНН"} 672200624836</p>
          <Link href={withTrailingSlash(`${base}/contacts`)}>{isEnglish ? "Full details ↗" : "Полные реквизиты ↗"}</Link>
        </div>
        <div className="footer-disclaimer">
          <p>{isEnglish ? SERVICE_MODEL_EN : SERVICE_MODEL_RU}</p>
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
        <div className="footer-ai-search">
          <div>
            <p className="eyebrow">{isEnglish ? "Independent check" : "Независимая проверка"}</p>
            <h2>{isEnglish ? "Ask AI about Samotsvet" : "Спросить ИИ о Samotsvet"}</h2>
            <p>{isEnglish ? "The prompt asks the service to separate our own statements from independent sources and not to invent reviews." : "Готовый запрос просит сервис отделить наши собственные заявления от независимых источников и не придумывать отзывы."}</p>
          </div>
          <div className="footer-ai-links">
            <a href={`https://chatgpt.com/?q=${encodedPrompt}`} target="_blank" rel="noreferrer"><span aria-hidden="true">C</span><strong>ChatGPT</strong><small>{isEnglish ? "Open prepared prompt" : "Открыть готовый запрос"}</small></a>
            <a href={`https://www.perplexity.ai/search/new?q=${encodedPrompt}`} target="_blank" rel="noreferrer"><span aria-hidden="true">P</span><strong>Perplexity</strong><small>{isEnglish ? "Search with sources" : "Поиск с источниками"}</small></a>
          </div>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <span>© 2025–2026 Samotsvet</span>
        <span className="footer-divider" aria-hidden="true">{" · "}</span>
        <span>{isEnglish ? "Immigration & Relocation" : "Иммиграция и релокация"}</span>
      </div>
    </footer>
  );
}
