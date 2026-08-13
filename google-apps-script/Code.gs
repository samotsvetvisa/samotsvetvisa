const SHEET_NAME = "Заявки";

function doGet() {
  return jsonResponse({ ok: true, service: "Samotsvet enquiries" });
}

function doPost(event) {
  try {
    if (!event || !event.postData || !event.postData.contents || event.postData.length > 50000) {
      throw new Error("Invalid request");
    }

    const data = JSON.parse(event.postData.contents);
    if (clean(data.website, 200)) return jsonResponse({ ok: true });
    validate(data);

    const startedAt = Number(data.startedAt || 0);
    if (startedAt && Date.now() - startedAt < 1200) return jsonResponse({ ok: true });

    const now = new Date();
    const id = createId(now);
    const row = [
      id,
      now,
      clean(data.name, 200),
      clean(data.contact, 300),
      clean(data.country, 120),
      clean(data.route, 200),
      clean(data.objective, 3000),
      clean(data.timing, 120),
      clean(data.citizenship, 300),
      clean(data.residence, 300),
      clean(data.family, 200),
      clean(data.employment, 200),
      clean(data.profile, 5000),
      clean(data.profileLink, 500),
      clean(data.evidence, 5000),
      clean(data.stage, 300),
      clean(data.history, 3000),
      [clean(data.referral, 200), clean(data.source, 100)].filter(Boolean).join(" / "),
      clean(data.utmSource, 300),
      clean(data.utmMedium, 300),
      clean(data.utmCampaign, 300),
      clean(data.landingPage, 1000),
      clean(data.referrer, 1000),
      `Да · ${clean(data.consentAt, 100)} · версия ${clean(data.privacyVersion, 30)}`,
      "Новая",
      "",
      "",
      ""
    ];

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
      if (!sheet) throw new Error("Sheet not found");
      const nextRow = sheet.getLastRow() + 1;
      sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
      sheet.getRange(nextRow, 2).setNumberFormat("dd.mm.yyyy hh:mm");
    } finally {
      lock.releaseLock();
    }

    sendNotification(id, data);
    return jsonResponse({ ok: true, id: id });
  } catch (error) {
    console.error("Samotsvet form submission failed");
    return jsonResponse({ ok: false, error: "Unable to save enquiry" });
  }
}

function validate(data) {
  const required = ["name", "contact", "country", "objective", "citizenship", "residence", "family", "employment", "profile"];
  required.forEach(function (field) {
    if (!clean(data[field], 10)) throw new Error("Missing required field");
  });
  if (data.consent !== true) throw new Error("Consent required");
}

function clean(value, limit) {
  const text = String(value == null ? "" : value).trim().slice(0, limit);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function createId(date) {
  const stamp = Utilities.formatDate(date, "Europe/Moscow", "yyyyMMdd-HHmmss");
  const suffix = Utilities.getUuid().slice(0, 4).toUpperCase();
  return `SV-${stamp}-${suffix}`;
}

function sendNotification(id, data) {
  try {
    const recipient = Session.getEffectiveUser().getEmail();
    if (!recipient) return;
    const lines = [
      `Новая заявка ${id}`,
      `Имя: ${clean(data.name, 200)}`,
      `Контакт: ${clean(data.contact, 300)}`,
      `Страна: ${clean(data.country, 120)}`,
      `Маршрут: ${clean(data.route, 200) || "—"}`,
      `Цель: ${clean(data.objective, 1500)}`,
      "",
      "Заявка сохранена в таблице Samotsvet — заявки."
    ];
    MailApp.sendEmail({
      to: recipient,
      subject: `Новая заявка ${id}: ${clean(data.country, 120)}`,
      body: lines.join("\n")
    });
  } catch (error) {
    console.error("Samotsvet email notification failed");
  }
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
