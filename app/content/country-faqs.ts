export type CountryFaq = readonly [question: string, answer: string];

export const countryFaqs = {
  uk: [
    ["Можно ли рассматривать Global Talent без публикаций?", "Да. Публикации – только один возможный вид доказательств. Сначала оцениваем личный вклад, измеримые результаты, профессиональное признание и независимые подтверждения, а затем проверяем их по критериям выбранного направления."],
    ["Нужно ли заранее выбирать между Global Talent и Innovator Founder?", "Нет. Это разные программы с разной логикой: Global Talent опирается на профессиональные достижения, а Innovator Founder на инновационную, жизнеспособную и масштабируемую стартап-концепцию. При оценке шансов сравниваем обе, если профиль это позволяет."],
    ["Что делать, если профиль пока не готов к подаче?", "Мы фиксируем сильную основу и пробелы, затем составляем план развития на 3–12 месяцев. В него входят только реальные профессиональные действия и заранее определенные способы подтвердить их результат."],
  ],
  usa: [
    ["Как выбрать между O-1, EB-1A и EB-2 NIW?", "Сначала определяем нужный результат и допустимый формат работы, затем отдельно проверяем достижения, независимое признание и будущую деятельность в США. Одинаковый набор фактов оценивается по-разному в каждой программе."],
    ["Отсутствие публикаций исключает американский талант-маршрут?", "Нет. Публикации могут усиливать кейс, но не заменяют анализ всей доказательной базы. Мы также проверяем роль в значимых проектах, измеримый вклад, судейство, награды, рекомендателей и другие независимые подтверждения."],
    ["Кто ведет юридическую часть американского дела?", "Samotsvet отвечает за стратегию, доказательства и управление проектом. Юридический этап и вопросы, требующие права практиковать в США, ведет партнер с действующей американской адвокатской лицензией."],
  ],
  spain: [
    ["Чем различается подача сотрудника и ИП или контрактора?", "Сотрудник зарубежной компании подтверждает трудовые отношения, а ИП или контрактор – самостоятельную деятельность и договоры с заказчиками. Состав доказательств, требования к стажу отношений и социальному страхованию проверяются отдельно."],
    ["Можно ли включить семью в проект?", "Да, но состав документов и необходимый финансовый порог зависят от числа членов семьи. Мы рассчитываем комплект и проверяем подтверждения для каждого заявителя до подачи."],
    ["Подходит ли Digital Nomad Visa человеку с талант-профилем?", "Возможно, но это другой тип маршрута. Здесь основное значение имеет формат удаленной работы, договоры, доход и страхование, а не профессиональное признание. Мы сравниваем результат и ограничения с другими программами."],
  ],
  france: [
    ["Чем различаются маршруты через инновационный проект и создание бизнеса?", "В первом случае важны признанный инновационный проект и принимающая сторона во Франции. Во втором отдельно проверяются бизнес-план, ресурсы, экономическая реалистичность и активная роль основателя."],
    ["Нужно ли иметь готовую компанию во Франции до оценки шансов?", "Нет. Для первого разбора достаточно описать проект, свою роль, доступные ресурсы и предполагаемую модель. После этого определяем, какой маршрут стоит проверять и какие документы понадобятся."],
    ["Можно ли одновременно сравнить Францию с Великобританией или США?", "Да. В сравнении учитываем критерии, итоговый статус, сроки, зависимость от работодателя или бизнеса и положение семьи. Предпочтительная страна сама по себе не определяет рекомендацию."],
  ],
} satisfies Record<string, readonly CountryFaq[]>;

export const countryFaqsEn = {
  uk: [
    ["Can Global Talent remain an option without publications?", "Yes. Publications are only one possible form of evidence. We first assess personal contribution, measurable outcomes, professional recognition and independent evidence, then test them against the criteria for the relevant field."],
    ["Must I choose between Global Talent and Innovator Founder at the outset?", "No. They follow different logic: Global Talent is based on professional achievement, while Innovator Founder requires an innovative, viable and scalable start-up concept. We compare both where the profile makes that useful."],
    ["What if the profile is not ready to file?", "We record the existing foundation and gaps, then build a 3–12 month development plan. It uses genuine professional activity and defines in advance how each outcome can be independently evidenced."],
  ],
  usa: [
    ["How do I compare O-1, EB-1A and EB-2 NIW?", "We first define the required outcome and acceptable working arrangement, then assess achievement, independent recognition and the proposed US activity. The same facts carry different weight under each programme."],
    ["Does having no publications rule out a US talent route?", "No. Publications may strengthen a matter, but they do not replace a review of the complete record. We also examine significant projects, measurable contribution, judging, awards, referees and other independent evidence."],
    ["Who handles the US legal work?", "Samotsvet leads strategy, evidence and project management. The legal stage and matters requiring the right to practise in the United States are handled by a partner holding a current US attorney licence."],
  ],
  spain: [
    ["How does an employee application differ from an independent contractor application?", "An overseas employee proves the employment relationship, while a self-employed person or contractor proves independent activity and client contracts. Relationship history, social-security position and supporting evidence are reviewed separately."],
    ["Can family members be included?", "Yes, but the documents and financial threshold depend on the number of family members. We calculate the required bundle and review evidence for each applicant before filing."],
    ["Can a Digital Nomad route suit someone with a talent profile?", "Possibly, but it is a different type of route. Remote-working structure, contracts, income and insurance matter more than professional recognition. We compare its outcome and restrictions with the alternatives."],
  ],
  france: [
    ["How do the innovative-project and business-creation routes differ?", "The first depends on a recognised innovative project and a French host. The second requires separate analysis of the business plan, resources, commercial credibility and the founder's active role."],
    ["Do I need an operating French company before the options assessment?", "No. For the initial review, describe the project, your role, available resources and intended model. We then identify which route merits deeper testing and what documentation will be needed."],
    ["Can France be compared with the United Kingdom or United States?", "Yes. We compare the criteria, eventual status, timing, dependence on employment or business and the position of the family. A preferred country does not determine the recommendation by itself."],
  ],
} satisfies Record<string, readonly CountryFaq[]>;
