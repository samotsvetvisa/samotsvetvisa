# Samotsvet Immigration & Relocation

Статическая версия сайта `samotsvetvisa.com` для бесплатного размещения на GitHub Pages.

## Как устроено

- Next.js собирает полностью статический сайт в папку `out`.
- GitHub Actions публикует `out` на GitHub Pages после каждого изменения ветки `main`.
- Анкета отправляется в Google Apps Script и сохраняется в закрытой Google Таблице.
- Папка `google-apps-script` содержит код и разовую инструкцию подключения формы.

## Локальная проверка

```bash
npm ci
npm run build
npx serve out
```

## Важно

Адрес веб-приложения Google Apps Script хранится в `public/form-config.js`. В репозитории не должно быть паролей, ключей или персональных данных клиентов.
