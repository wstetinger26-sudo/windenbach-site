// Предложения клуба — обновлять каждые 2 недели.
// Цены: отели — 7 ночей, 2 взрослых, 1 номер, с налогами. Без названия платформы и компании!
window.OFFERS_CHECKED = "20.11.2026";
window.OFFERS = [
  // Поездки и круизы клуба — главная программа, всегда первыми
  { type: "trip", img: "img/trip_dubai.jpg", country: "ОАЭ", place: "Дубай",
    name: "Большая встреча клуба в Дубае", badge: "Поездка клуба",
    dates: "27 мая – 1 июня 2027", note: "6 дней / 5 ночей",
    price: 3645, per: "за номер", pts: 1400, id: "dubai-2027" },
  { type: "cruise", img: "img/offer_cruise.jpg", country: "Карибы", place: "Флорида → Косумель → Багамы",
    name: "Круиз с бизнес-буткемпом на борту", badge: "Круиз клуба",
    dates: "18–23 июня 2027", note: "лайнер Norwegian Escape · напитки включены",
    price: 2188, per: "за каюту", pts: 800, id: "karibskij-kruiz-2027" },
  { type: "cruise", img: "img/offer_singapore.jpg", country: "Азия", place: "Сингапур → Пенанг → Пхукет",
    name: "Круиз-саммит по Юго-Восточной Азии", badge: "Круиз клуба",
    dates: "29 июля – 2 августа 2027", note: "5 дней / 4 ночи",
    price: 774, per: "с человека", pts: 500, id: "kruiz-aziya-2027" },
  { type: "hotel", img: "img/trip_maldives.jpg", country: "Мальдивы", place: "Атолл Северный Мале",
    name: "Patina Maldives, Fari Islands", stars: 5, rating: "9.3",
    dates: "10–17 февраля 2027", note: "7 ночей · 2 взрослых",
    old: 18694, price: 7740, pct: 59 },
  { type: "hotel", img: "img/offer_belek.jpg", country: "Турция", place: "Белек",
    name: "Selectum Luxury Resort Belek", stars: 5, rating: "9.5",
    dates: "5–12 июля 2027", note: "7 ночей · 2 взрослых",
    old: 9329, price: 3909, pct: 59 },
  { type: "hotel", img: "img/offer_bali.jpg", country: "Бали", place: "Нуса-Дуа",
    name: "Mulia Resort", stars: 5, rating: "8.9",
    dates: "12–19 мая 2027", note: "7 ночей · 2 взрослых",
    old: 3327, price: 1775, pct: 47 },
  { type: "hotel", img: "img/offer_phuket.jpg", country: "Таиланд", place: "Пхукет, пляж Камала",
    name: "Radisson Resort & Suites Phuket", stars: 5, rating: "8.6",
    dates: "10–17 февраля 2027", note: "7 ночей · 2 взрослых",
    old: 1593, price: 887, pct: 45 },
  { type: "hotel", img: "img/offer_positano.jpg", country: "Италия", place: "Позитано, Амальфитанское побережье",
    name: "Le Sirenuse", stars: 5, rating: "9.9",
    dates: "10–17 июня 2027", note: "7 ночей · 2 взрослых",
    old: 26702, price: 15894, pct: 41 },
  { type: "hotel", img: "img/trip_santorini.jpg", country: "Греция", place: "Санторини, Имеровигли",
    name: "West East Suites", stars: 5, rating: "9.8",
    dates: "10–17 июня 2027", note: "7 ночей · 2 взрослых",
    old: 5350, price: 3625, pct: 33 }
];

// Плакат «Главное предложение»: idx = номер предложения в списке (0 = первое).
// clip = контур переднего плана (виллы перед надписью); если новое фото — clip удалить или пересчитать.
window.POSTER = { idx: 3, title: "МАЛЬДИВЫ", pre: "Отдых мечты", bottom: 46.5, size: 15.5,
  clip: "polygon(0.0% 55.2%,0.7% 55.3%,1.5% 55.4%,2.2% 54.6%,2.9% 54.3%,3.6% 54.0%,4.4% 53.9%,5.1% 53.9%,5.8% 53.9%,6.5% 54.2%,7.3% 54.5%,8.0% 55.3%,8.7% 55.3%,9.5% 55.4%,10.2% 55.5%,10.9% 55.5%,11.6% 55.5%,12.4% 54.5%,13.1% 54.4%,13.8% 54.3%,14.5% 54.1%,15.3% 54.1%,16.0% 54.1%,16.7% 54.0%,17.5% 54.0%,18.2% 54.0%,18.9% 54.0%,19.6% 54.0%,20.4% 53.8%,21.1% 53.6%,21.8% 53.8%,22.5% 53.6%,23.3% 53.5%,24.0% 53.6%,24.7% 53.6%,25.5% 53.5%,26.2% 53.2%,26.9% 53.4%,27.6% 53.7%,28.4% 53.5%,29.1% 53.2%,29.8% 52.9%,30.5% 53.0%,31.3% 53.1%,32.0% 53.1%,32.7% 53.0%,33.5% 53.0%,34.2% 52.9%,34.9% 53.0%,35.6% 53.0%,36.4% 52.9%,37.1% 52.9%,37.8% 52.8%,38.5% 52.8%,39.3% 52.7%,40.0% 52.7%,40.7% 52.8%,41.5% 52.9%,42.2% 52.9%,42.9% 52.8%,43.6% 52.7%,44.4% 52.7%,45.1% 52.6%,45.8% 52.6%,46.5% 52.6%,47.3% 52.5%,48.0% 52.6%,48.7% 52.7%,49.5% 53.0%,50.2% 53.3%,50.9% 53.3%,51.6% 53.2%,52.4% 53.0%,53.1% 52.7%,53.8% 52.5%,54.5% 52.4%,55.3% 52.5%,56.0% 52.4%,56.7% 52.2%,57.5% 52.0%,58.2% 51.6%,58.9% 51.6%,59.6% 51.5%,60.4% 51.7%,61.1% 51.8%,61.8% 51.8%,62.5% 52.0%,63.3% 52.3%,64.0% 52.5%,64.7% 52.6%,65.5% 52.6%,66.2% 52.6%,66.9% 52.6%,67.6% 52.6%,68.4% 52.5%,69.1% 52.3%,69.8% 52.0%,70.5% 51.7%,71.3% 51.5%,72.0% 51.3%,72.7% 51.3%,73.5% 51.1%,74.2% 50.8%,74.9% 50.6%,75.6% 50.5%,76.4% 50.5%,77.1% 50.4%,77.8% 50.5%,78.5% 50.6%,79.3% 50.8%,80.0% 51.1%,80.7% 51.3%,81.5% 51.5%,82.2% 51.5%,82.9% 51.3%,83.6% 51.0%,84.4% 50.8%,85.1% 50.5%,85.8% 50.5%,86.5% 50.5%,87.3% 50.7%,88.0% 50.9%,88.7% 51.2%,89.5% 51.4%,90.2% 51.5%,90.9% 51.6%,91.6% 51.6%,92.4% 51.7%,93.1% 51.7%,93.8% 51.7%,94.5% 51.7%,95.3% 51.5%,96.0% 51.4%,96.7% 51.2%,97.5% 51.0%,98.2% 50.7%,98.9% 50.5%,99.6% 50.4%,99.9% 50.3%,100% 100%,0% 100%)" };

// Подробные описания поездок (окно «Подробнее»). Ключ = id предложения.
// Только факты со страницы поездки, своими словами. Без названия платформы и компании.
window.DETAILS = {
  "dubai-2027": {
    intro: "Шесть дней в Дубае вместе с участниками клуба со всего мира: город небоскрёбов, море, пляжный клуб, аквапарк и целый день на частном острове. Но главное в этой поездке — люди, с которыми её проживаешь.",
    facts: ["27 мая – 1 июня 2027", "6 дней / 5 ночей", "Ciel Dubai Marina, Vignette Collection by IHG ★★★★★", "3 645 € за номер, можно оплатить до 1 400 бонусных баллов", "Без возрастных ограничений"],
    incl: ["Проживание в 5-звёздочном отеле, 6 дней / 5 ночей", "Завтраки", "Приветственная вечеринка в пляжном клубе", "Одна активность на ваш выбор", "День в аквапарке Atlantis Aquaventure", "День на частном острове с командными играми", "Трансферы по программе"],
    excl: ["Перелёт", "Личные расходы", "Чаевые"],
    hotel: { name: "Ciel Dubai Marina", text: "Новый отель-небоскрёб в районе Дубай Марина, одно из самых высоких зданий этого квартала. Из номеров — панорамные виды на марину, море и город. Рядом набережная, рестораны и пляж Джумейра-Бич-Резиденс." },
    prog: [["День 1 · Прибытие", "Заселение в отель и вечером — приветственная вечеринка в пляжном клубе. Трансфер в одну сторону включён."], ["День 2 · Своё приключение", "Каждый выбирает одну из известных достопримечательностей ОАЭ."], ["День 3 · Atlantis Aquaventure", "Целый день в одном из самых больших аквапарков мира на острове Пальма."], ["День 4 · Дубай", "Свободный день и вечер у знаменитых поющих фонтанов у Бурдж-Халифы."], ["День 5 · Частный остров", "Отдых у моря и командные игры в олимпийском стиле."], ["День 6 · Отъезд", "Прощание и дорога домой."]],
    season: "Конец мая в Дубае — это уже настоящее лето: днём около 38–40 °C, море тёплое, около 30 °C. Большая часть программы проходит у воды, в аквапарке и в прохладе отеля.",
    map: "Ciel Dubai Marina",
    faq: [["Входит ли перелёт?", "Нет. Перелёт в Дубай и обратно каждый бронирует сам."], ["Кто может поехать?", "Только участники клуба. Если хотите понять, как это устроено, напишите мне «РАЗГОВОР»."], ["Можно ли вернуть деньги?", "По правилам клуба оплата за такие поездки не возвращается. Передать бронь другому участнику можно не позднее чем за 30 дней до заезда."], ["Можно ли поехать вдвоём в одном номере?", "Да, цена указана за номер. Второй участник присоединяется к бронированию по коду."]]
  },
  "karibskij-kruiz-2027": {
    intro: "Пять ночей на одном из самых популярных лайнеров Norwegian Cruise Line: Карибское море, Мексика, частный остров на Багамах и бизнес-буткемп на борту. Утром учимся, остальное время — море, солнце и люди, рядом с которыми хочется расти.",
    facts: ["18–23 июня 2027", "6 дней / 5 ночей", "Лайнер Norwegian Escape", "2 188 € за каюту, можно оплатить до 800 бонусных баллов", "Отправление и возвращение: Порт-Канаверал (Орландо, Флорида)"],
    incl: ["Круиз на Norwegian Escape, каюта выбранной категории", "Питание в бесплатных ресторанах на борту", "Безлимитный пакет напитков на весь круиз", "Билеты на бизнес-буткемп на борту", "Развлечения и шоу на корабле", "Стоянки на Косумеле (Мексика) и Грейт-Стиррап-Кей (Багамы)", "Безлимитный Wi-Fi на каюту (для первых 250 кают)", "Портовые сборы и налоги"],
    excl: ["Перелёт", "Личные расходы", "Чаевые"],
    hotel: { name: "Norwegian Escape", text: "Большой современный лайнер с бассейнами, аквапарком, театром, множеством ресторанов и баров. Занятия буткемпа проходят в театре корабля по утрам, остаток дня — свободен." },
    prog: [["День 1 · Порт-Канаверал", "Посадка на корабль на Космическом побережье Флориды. Нужно быть на борту минимум за час до отплытия. Первый вечер в море."], ["День 2 · День в море", "Начало буткемпа: утром занятия, потом бассейны и отдых."], ["День 3 · Косумель, Мексика", "Бирюзовая вода и коралловые рифы. Утром занятие, потом остров."], ["День 4 · День в море", "Учимся, общаемся, празднуем."], ["День 5 · Грейт-Стиррап-Кей, Багамы", "Частный остров круизной компании: белый песок и прозрачная вода."], ["День 6 · Возвращение", "Прибытие в Порт-Канаверал."]],
    season: "В июне на Карибах жарко, около 30–32 °C, вода очень тёплая. Возможны короткие тропические ливни, которые быстро заканчиваются.",
    map: "Port Canaveral",
    faq: [["Входит ли перелёт?", "Нет. До Орландо (Флорида) каждый летит сам."], ["Обязательно ли ходить на буткемп?", "Занятия проходят по утрам, остальное время свободно. Это часть программы, но сам круиз — тоже отдых."], ["Кто может поехать?", "Только участники клуба. Напишите мне «РАЗГОВОР», и я расскажу, как это устроено."], ["Можно ли вернуть деньги?", "По правилам клуба оплата не возвращается. Передать бронь другому участнику можно не позднее чем за 30 дней до отправления."]]
  },
  "kruiz-aziya-2027": {
    intro: "Четыре ночи на лайнере Royal Caribbean по Юго-Восточной Азии: Сингапур, Пенанг в Малайзии и Пхукет в Таиланде. Путешествие, в котором новые места соединяются с тренингами и сильным окружением.",
    facts: ["29 июля – 2 августа 2027", "5 дней / 4 ночи", "Лайнер Navigator of the Seas (Royal Caribbean)", "774 € с человека, можно оплатить до 500 бонусных баллов", "Отправление и возвращение: Сингапур"],
    incl: ["Круиз на Navigator of the Seas, каюта выбранной категории", "Завтраки, обеды и ужины в бесплатных ресторанах на борту", "Развлекательная программа на корабле", "Стоянки в Пенанге (Малайзия) и на Пхукете (Таиланд)", "Тренинги для участников на борту", "Интернет на один день", "Портовые сборы и налоги"],
    excl: ["Перелёт", "Личные расходы", "Чаевые"],
    hotel: { name: "Navigator of the Seas", text: "Лайнер Royal Caribbean с бассейнами, ресторанами, шоу и видовыми палубами. Плавучий дом на четыре ночи между самыми яркими местами региона." },
    prog: [["День 1 · Сингапур", "Посадка на корабль, отплытие в 16:00. Вечером — ужин и знакомство с лайнером."], ["День 2 · Пенанг, Малайзия", "Культура, улицы старого Джорджтауна, краски и кухня."], ["День 3 · Пхукет, Таиланд", "Тропические пляжи и бирюзовая вода."], ["День 4 · День в море", "Тренинги, общение и отдых на борту."], ["День 5 · Сингапур", "Возвращение в порт."]],
    season: "Конец июля в этом регионе — тепло круглый год, около 28–32 °C. На Пхукете это сезон дождей: чаще всего ливни короткие, между ними светит солнце.",
    map: "Marina Bay Cruise Centre Singapore",
    faq: [["Входит ли перелёт?", "Нет. До Сингапура каждый летит сам."], ["Почему цена указана с человека?", "Так считает клуб для этого круиза: 774 € за одного участника в каюте выбранной категории."], ["Кто может поехать?", "Только участники клуба. Напишите мне «РАЗГОВОР», и я всё расскажу."], ["Можно ли вернуть деньги?", "По правилам клуба оплата не возвращается. Передать бронь другому участнику можно не позднее чем за 30 дней до отправления."]]
  }
};

// Переводы предложений (DE / EN). Ключ = name предложения. При обновлении добавлять новые.
window.OFFERS_I18N = {
  de: {
    "Большая встреча клуба в Дубае": { country: "VAE", place: "Dubai", name: "Großes Clubtreffen in Dubai", badge: "Club-Reise", dates: "27. Mai – 1. Juni 2027", note: "6 Tage / 5 Nächte", per: "pro Zimmer" },
    "Круиз с бизнес-буткемпом на борту": { country: "Karibik", place: "Florida → Cozumel → Bahamas", name: "Kreuzfahrt mit Business-Bootcamp an Bord", badge: "Club-Kreuzfahrt", dates: "18.–23. Juni 2027", note: "Schiff Norwegian Escape · Getränke inklusive", per: "pro Kabine" },
    "Круиз-саммит по Юго-Восточной Азии": { country: "Asien", place: "Singapur → Penang → Phuket", name: "Gipfel-Kreuzfahrt durch Südostasien", badge: "Club-Kreuzfahrt", dates: "29. Juli – 2. August 2027", note: "5 Tage / 4 Nächte", per: "pro Person" },
    "Patina Maldives, Fari Islands": { country: "Malediven", place: "Nord-Malé-Atoll", dates: "10.–17. Februar 2027", note: "7 Nächte · 2 Erwachsene" },
    "Selectum Luxury Resort Belek": { country: "Türkei", place: "Belek", dates: "5.–12. Juli 2027", note: "7 Nächte · 2 Erwachsene" },
    "Mulia Resort": { country: "Bali", place: "Nusa Dua", dates: "12.–19. Mai 2027", note: "7 Nächte · 2 Erwachsene" },
    "Radisson Resort & Suites Phuket": { country: "Thailand", place: "Phuket, Kamala Beach", dates: "10.–17. Februar 2027", note: "7 Nächte · 2 Erwachsene" },
    "Le Sirenuse": { country: "Italien", place: "Positano, Amalfiküste", dates: "10.–17. Juni 2027", note: "7 Nächte · 2 Erwachsene" },
    "West East Suites": { country: "Griechenland", place: "Santorini, Imerovigli", dates: "10.–17. Juni 2027", note: "7 Nächte · 2 Erwachsene" }
  },
  en: {
    "Большая встреча клуба в Дубае": { country: "UAE", place: "Dubai", name: "Big club meetup in Dubai", badge: "Club trip", dates: "27 May – 1 June 2027", note: "6 days / 5 nights", per: "per room" },
    "Круиз с бизнес-буткемпом на борту": { country: "Caribbean", place: "Florida → Cozumel → Bahamas", name: "Cruise with a business bootcamp on board", badge: "Club cruise", dates: "18–23 June 2027", note: "Norwegian Escape · drinks included", per: "per cabin" },
    "Круиз-саммит по Юго-Восточной Азии": { country: "Asia", place: "Singapore → Penang → Phuket", name: "Summit cruise through Southeast Asia", badge: "Club cruise", dates: "29 July – 2 August 2027", note: "5 days / 4 nights", per: "per person" },
    "Patina Maldives, Fari Islands": { country: "Maldives", place: "North Malé Atoll", dates: "10–17 February 2027", note: "7 nights · 2 adults" },
    "Selectum Luxury Resort Belek": { country: "Turkey", place: "Belek", dates: "5–12 July 2027", note: "7 nights · 2 adults" },
    "Mulia Resort": { country: "Bali", place: "Nusa Dua", dates: "12–19 May 2027", note: "7 nights · 2 adults" },
    "Radisson Resort & Suites Phuket": { country: "Thailand", place: "Phuket, Kamala Beach", dates: "10–17 February 2027", note: "7 nights · 2 adults" },
    "Le Sirenuse": { country: "Italy", place: "Positano, Amalfi Coast", dates: "10–17 June 2027", note: "7 nights · 2 adults" },
    "West East Suites": { country: "Greece", place: "Santorini, Imerovigli", dates: "10–17 June 2027", note: "7 nights · 2 adults" }
  }
};
window.POSTER_I18N = { de: { title: "MALEDIVEN", pre: "Traumurlaub" }, en: { title: "MALDIVES", pre: "Dream getaway" } };

// Подробные описания на немецком и английском (ключ = id).
window.DETAILS_I18N = {
  de: {
    "dubai-2027": {
      intro: "Sechs Tage in Dubai mit Clubmitgliedern aus der ganzen Welt: Wolkenkratzer, Meer, Beach Club, Wasserpark und ein ganzer Tag auf einer Privatinsel. Das Wichtigste an dieser Reise sind aber die Menschen, mit denen man sie erlebt.",
      facts: ["27. Mai – 1. Juni 2027", "6 Tage / 5 Nächte", "Ciel Dubai Marina, Vignette Collection by IHG ★★★★★", "3 645 € pro Zimmer, bis zu 1 400 Bonuspunkte einsetzbar", "Keine Altersbeschränkung"],
      incl: ["5-Sterne-Hotel, 6 Tage / 5 Nächte", "Frühstück", "Willkommensparty im Beach Club", "Eine Aktivität nach Wahl", "Ein Tag im Wasserpark Atlantis Aquaventure", "Ein Tag auf einer Privatinsel mit Teamspielen", "Transfers laut Programm"],
      excl: ["Flug", "Persönliche Ausgaben", "Trinkgelder"],
      hotel: { name: "Ciel Dubai Marina", text: "Ein neues Hochhaus-Hotel in Dubai Marina, eines der höchsten Gebäude des Viertels. Von den Zimmern aus Panoramablick auf Marina, Meer und Stadt. In der Nähe: Promenade, Restaurants und der Strand von Jumeirah Beach Residence." },
      prog: [["Tag 1 · Ankunft", "Check-in im Hotel, abends Willkommensparty im Beach Club. Transfer in eine Richtung inklusive."], ["Tag 2 · Dein Abenteuer", "Jeder wählt eine der bekannten Sehenswürdigkeiten der VAE."], ["Tag 3 · Atlantis Aquaventure", "Ein ganzer Tag in einem der größten Wasserparks der Welt auf der Palmeninsel."], ["Tag 4 · Dubai", "Freier Tag und Abend an den berühmten Wasserspielen am Burj Khalifa."], ["Tag 5 · Privatinsel", "Erholung am Meer und Teamspiele im olympischen Stil."], ["Tag 6 · Abreise", "Abschied und Heimreise."]],
      season: "Ende Mai ist in Dubai schon richtiger Sommer: tagsüber etwa 38–40 °C, das Meer rund 30 °C. Ein großer Teil des Programms findet am Wasser, im Wasserpark und im kühlen Hotel statt.",
      faq: [["Ist der Flug inklusive?", "Nein. Den Flug nach Dubai und zurück bucht jeder selbst."], ["Wer kann mitfahren?", "Nur Clubmitglieder. Wenn du wissen willst, wie das funktioniert, schreib mir «GESPRÄCH»."], ["Bekommt man das Geld zurück?", "Nach den Clubregeln wird die Zahlung für solche Reisen nicht erstattet. Die Buchung kann bis spätestens 30 Tage vor Anreise an ein anderes Mitglied übertragen werden."], ["Können zwei Personen in einem Zimmer reisen?", "Ja, der Preis gilt pro Zimmer. Das zweite Mitglied schließt sich der Buchung über einen Code an."]]
    },
    "karibskij-kruiz-2027": {
      intro: "Fünf Nächte auf einem der beliebtesten Schiffe der Norwegian Cruise Line: Karibik, Mexiko, eine Privatinsel auf den Bahamas und ein Business-Bootcamp an Bord. Morgens lernen, den Rest des Tages Meer, Sonne und Menschen, mit denen man wachsen möchte.",
      facts: ["18.–23. Juni 2027", "6 Tage / 5 Nächte", "Schiff Norwegian Escape", "2 188 € pro Kabine, bis zu 800 Bonuspunkte einsetzbar", "Ab/bis Port Canaveral (Orlando, Florida)"],
      incl: ["Kreuzfahrt auf der Norwegian Escape, Kabine der gewählten Kategorie", "Essen in den inklusiven Restaurants an Bord", "Unbegrenztes Getränkepaket für die ganze Reise", "Tickets für das Business-Bootcamp an Bord", "Unterhaltung und Shows an Bord", "Stopps in Cozumel (Mexiko) und Great Stirrup Cay (Bahamas)", "Unbegrenztes WLAN pro Kabine (für die ersten 250 Kabinen)", "Hafengebühren und Steuern"],
      excl: ["Flug", "Persönliche Ausgaben", "Trinkgelder"],
      hotel: { name: "Norwegian Escape", text: "Ein großes, modernes Schiff mit Pools, Wasserpark, Theater und vielen Restaurants und Bars. Das Bootcamp findet morgens im Theater des Schiffs statt, der Rest des Tages ist frei." },
      prog: [["Tag 1 · Port Canaveral", "Einschiffung an der Space Coast Floridas. Spätestens eine Stunde vor Abfahrt an Bord sein. Erster Abend auf See."], ["Tag 2 · Seetag", "Start des Bootcamps: morgens Programm, danach Pools und Erholung."], ["Tag 3 · Cozumel, Mexiko", "Türkisfarbenes Wasser und Korallenriffe. Morgens Programm, danach die Insel."], ["Tag 4 · Seetag", "Lernen, austauschen, feiern."], ["Tag 5 · Great Stirrup Cay, Bahamas", "Die Privatinsel der Reederei: weißer Sand und klares Wasser."], ["Tag 6 · Rückkehr", "Ankunft in Port Canaveral."]],
      season: "Im Juni ist es in der Karibik heiß, etwa 30–32 °C, das Wasser ist sehr warm. Kurze tropische Schauer sind möglich, sie hören meist schnell wieder auf.",
      faq: [["Ist der Flug inklusive?", "Nein. Nach Orlando (Florida) fliegt jeder selbst."], ["Muss ich am Bootcamp teilnehmen?", "Das Programm läuft morgens, der Rest des Tages ist frei. Es gehört zur Reise, aber die Kreuzfahrt selbst ist auch Erholung."], ["Wer kann mitfahren?", "Nur Clubmitglieder. Schreib mir «GESPRÄCH», dann erzähle ich, wie das funktioniert."], ["Bekommt man das Geld zurück?", "Nach den Clubregeln wird die Zahlung nicht erstattet. Die Buchung kann bis spätestens 30 Tage vor Abfahrt an ein anderes Mitglied übertragen werden."]]
    },
    "kruiz-aziya-2027": {
      intro: "Vier Nächte auf einem Schiff von Royal Caribbean durch Südostasien: Singapur, Penang in Malaysia und Phuket in Thailand. Eine Reise, bei der neue Orte mit Trainings und einem starken Umfeld zusammenkommen.",
      facts: ["29. Juli – 2. August 2027", "5 Tage / 4 Nächte", "Schiff Navigator of the Seas (Royal Caribbean)", "774 € pro Person, bis zu 500 Bonuspunkte einsetzbar", "Ab/bis Singapur"],
      incl: ["Kreuzfahrt auf der Navigator of the Seas, Kabine der gewählten Kategorie", "Frühstück, Mittag- und Abendessen in den inklusiven Restaurants", "Unterhaltungsprogramm an Bord", "Stopps in Penang (Malaysia) und auf Phuket (Thailand)", "Trainings für Mitglieder an Bord", "Internet für einen Tag", "Hafengebühren und Steuern"],
      excl: ["Flug", "Persönliche Ausgaben", "Trinkgelder"],
      hotel: { name: "Navigator of the Seas", text: "Ein Schiff von Royal Caribbean mit Pools, Restaurants, Shows und Aussichtsdecks. Das schwimmende Zuhause für vier Nächte zwischen den schönsten Orten der Region." },
      prog: [["Tag 1 · Singapur", "Einschiffung, Abfahrt um 16:00 Uhr. Abends Essen und das Schiff kennenlernen."], ["Tag 2 · Penang, Malaysia", "Kultur, die Straßen des alten George Town, Farben und Küche."], ["Tag 3 · Phuket, Thailand", "Tropische Strände und türkisfarbenes Wasser."], ["Tag 4 · Seetag", "Trainings, Austausch und Erholung an Bord."], ["Tag 5 · Singapur", "Rückkehr in den Hafen."]],
      season: "Ende Juli ist es in der Region warm wie das ganze Jahr, etwa 28–32 °C. Auf Phuket ist Regenzeit: meist kurze Schauer, dazwischen scheint die Sonne.",
      faq: [["Ist der Flug inklusive?", "Nein. Nach Singapur fliegt jeder selbst."], ["Warum ist der Preis pro Person angegeben?", "So rechnet der Club bei dieser Kreuzfahrt: 774 € pro Mitglied in einer Kabine der gewählten Kategorie."], ["Wer kann mitfahren?", "Nur Clubmitglieder. Schreib mir «GESPRÄCH», dann erzähle ich alles."], ["Bekommt man das Geld zurück?", "Nach den Clubregeln wird die Zahlung nicht erstattet. Die Buchung kann bis spätestens 30 Tage vor Abfahrt an ein anderes Mitglied übertragen werden."]]
    }
  },
  en: {
    "dubai-2027": {
      intro: "Six days in Dubai with club members from all over the world: skyscrapers, the sea, a beach club, a water park and a whole day on a private island. But what matters most on this trip are the people you share it with.",
      facts: ["27 May – 1 June 2027", "6 days / 5 nights", "Ciel Dubai Marina, Vignette Collection by IHG ★★★★★", "€3,645 per room, up to 1,400 bonus points can be used", "No age restrictions"],
      incl: ["5-star hotel, 6 days / 5 nights", "Breakfast", "Welcome party at a beach club", "One activity of your choice", "A day at the Atlantis Aquaventure water park", "A day on a private island with team games", "Transfers as per the programme"],
      excl: ["Flights", "Personal expenses", "Tips"],
      hotel: { name: "Ciel Dubai Marina", text: "A new skyscraper hotel in Dubai Marina, one of the tallest buildings in the area. Panoramic views of the marina, the sea and the city from the rooms. Nearby: the promenade, restaurants and Jumeirah Beach Residence beach." },
      prog: [["Day 1 · Arrival", "Hotel check-in and a welcome party at a beach club in the evening. One-way transfer included."], ["Day 2 · Your adventure", "Everyone picks one of the UAE's famous sights."], ["Day 3 · Atlantis Aquaventure", "A full day at one of the world's largest water parks on the Palm."], ["Day 4 · Dubai", "Free day and evening at the famous fountains by the Burj Khalifa."], ["Day 5 · Private island", "Time by the sea and Olympic-style team games."], ["Day 6 · Departure", "Goodbyes and the trip home."]],
      season: "Late May in Dubai is already full summer: around 38–40 °C during the day, the sea around 30 °C. Much of the programme takes place by the water, at the water park and in the cool of the hotel.",
      faq: [["Are flights included?", "No. Everyone books their own flight to Dubai and back."], ["Who can join?", "Club members only. If you'd like to know how it works, write me «TALK»."], ["Can I get a refund?", "Under the club rules, payment for these trips is non-refundable. The booking can be transferred to another member up to 30 days before arrival."], ["Can two people share a room?", "Yes, the price is per room. The second member joins the booking with a code."]]
    },
    "karibskij-kruiz-2027": {
      intro: "Five nights on one of Norwegian Cruise Line's most popular ships: the Caribbean, Mexico, a private island in the Bahamas and a business bootcamp on board. Learning in the mornings, the rest of the day for the sea, the sun and people you want to grow with.",
      facts: ["18–23 June 2027", "6 days / 5 nights", "Ship: Norwegian Escape", "€2,188 per cabin, up to 800 bonus points can be used", "Round trip from Port Canaveral (Orlando, Florida)"],
      incl: ["Cruise on the Norwegian Escape, cabin in your chosen category", "Meals in the included restaurants on board", "Unlimited drinks package for the whole cruise", "Tickets to the business bootcamp on board", "Entertainment and shows on board", "Stops in Cozumel (Mexico) and Great Stirrup Cay (Bahamas)", "Unlimited Wi-Fi per cabin (for the first 250 cabins)", "Port fees and taxes"],
      excl: ["Flights", "Personal expenses", "Tips"],
      hotel: { name: "Norwegian Escape", text: "A large, modern ship with pools, a water park, a theatre and lots of restaurants and bars. The bootcamp sessions take place in the ship's theatre in the mornings; the rest of the day is free." },
      prog: [["Day 1 · Port Canaveral", "Boarding on Florida's Space Coast. Be on board at least an hour before departure. First evening at sea."], ["Day 2 · Sea day", "The bootcamp begins: sessions in the morning, then pools and relaxing."], ["Day 3 · Cozumel, Mexico", "Turquoise water and coral reefs. A morning session, then the island."], ["Day 4 · Sea day", "Learn, connect, celebrate."], ["Day 5 · Great Stirrup Cay, Bahamas", "The cruise line's private island: white sand and clear water."], ["Day 6 · Return", "Arrival in Port Canaveral."]],
      season: "June in the Caribbean is hot, around 30–32 °C, and the water is very warm. Short tropical showers are possible; they usually pass quickly.",
      faq: [["Are flights included?", "No. Everyone flies to Orlando (Florida) on their own."], ["Do I have to attend the bootcamp?", "Sessions run in the mornings and the rest of the day is free. It's part of the trip, but the cruise itself is a holiday too."], ["Who can join?", "Club members only. Write me «TALK» and I'll explain how it works."], ["Can I get a refund?", "Under the club rules, payment is non-refundable. The booking can be transferred to another member up to 30 days before departure."]]
    },
    "kruiz-aziya-2027": {
      intro: "Four nights on a Royal Caribbean ship through Southeast Asia: Singapore, Penang in Malaysia and Phuket in Thailand. A trip where new places come together with trainings and a strong circle of people.",
      facts: ["29 July – 2 August 2027", "5 days / 4 nights", "Ship: Navigator of the Seas (Royal Caribbean)", "€774 per person, up to 500 bonus points can be used", "Round trip from Singapore"],
      incl: ["Cruise on the Navigator of the Seas, cabin in your chosen category", "Breakfast, lunch and dinner in the included restaurants", "Entertainment on board", "Stops in Penang (Malaysia) and Phuket (Thailand)", "Trainings for members on board", "One-day internet pass", "Port fees and taxes"],
      excl: ["Flights", "Personal expenses", "Tips"],
      hotel: { name: "Navigator of the Seas", text: "A Royal Caribbean ship with pools, restaurants, shows and viewing decks. A floating home for four nights between some of the region's most beautiful places." },
      prog: [["Day 1 · Singapore", "Boarding, departure at 4 pm. Dinner in the evening and getting to know the ship."], ["Day 2 · Penang, Malaysia", "Culture, the streets of old George Town, colours and food."], ["Day 3 · Phuket, Thailand", "Tropical beaches and turquoise water."], ["Day 4 · Sea day", "Trainings, connecting and relaxing on board."], ["Day 5 · Singapore", "Back in port."]],
      season: "Late July in this region is warm as always, around 28–32 °C. It's the rainy season in Phuket: showers are usually short, with sunshine in between.",
      faq: [["Are flights included?", "No. Everyone flies to Singapore on their own."], ["Why is the price per person?", "That's how the club prices this cruise: €774 per member in a cabin of the chosen category."], ["Who can join?", "Club members only. Write me «TALK» and I'll tell you everything."], ["Can I get a refund?", "Under the club rules, payment is non-refundable. The booking can be transferred to another member up to 30 days before departure."]]
    }
  }
};
