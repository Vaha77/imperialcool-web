import type { Dictionary, Locale } from "./types";

export const locales: Locale[] = ["uz", "ru", "en", "zh"];

export const localeLabels: Record<Locale, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
  zh: "中文",
};

export const defaultLocale: Locale = "zh";

const uz: Dictionary = {
  htmlLang: "uz",
  meta: {
    title: "IMPERIAL COOL — Professional sovutish uskunalari",
    description:
      "IMPERIAL COOL — Xitoyning ishlab chiqarish korxonalari bilan hamkorlikda professional sovutish uskunalarini o‘z brendi ostida taqdim etuvchi xalqaro sovutish brendi.",
  },
  nav: {
    about: "Biz haqimizda",
    cooperation: "Hamkorlik",
    products: "Mahsulotlar",
    contact: "Aloqa",
  },
  hero: {
    eyebrow: "IMPERIAL COOL",
    headline: "SOVUTISH SANOATIDA YANGI DARAJA",
    sub: "Xitoyning yirik ishlab chiqarish korxonalari bilan hamkorlikda professional sovutish uskunalarini IMPERIAL COOL brendi ostida taqdim etamiz.",
    cta: "BARCHA MAHSULOTLAR",
    scroll: "Pastga tushing",
  },
  comingSoon: {
    message: "IMPERIAL COOL mahsulotlar katalogi tayyorlanmoqda.",
    detail: "Mahsulotlar, texnik ma’lumotlar va to‘liq assortiment tez orada taqdim etiladi.",
    back: "BOSH SAHIFAGA QAYTISH",
  },
  china: {
    eyebrow: "XALQARO HAMKORLIK",
    headline: "XITOY BILAN TO‘G‘RIDAN-TO‘G‘RI HAMKORLIK",
    body: "IMPERIAL COOL Xitoydagi yirik ishlab chiqarish korxonalari bilan hamkorlik qiladi. Mahsulotlar texnik talablarimiz asosida tanlanadi va IMPERIAL COOL brendi ostida bozorga taqdim etiladi.",
    flow: [
      "Xitoyda ishlab chiqarish",
      "Texnik tanlov",
      "IMPERIAL COOL brendi",
      "Mijoz",
    ],
    flowCaption:
      "Har bir mahsulot IMPERIAL COOL portfeliga qo‘shilishidan oldin ushbu bosqichlardan o‘tadi.",
  },
  brand: {
    eyebrow: "BRENDIMIZ",
    headline: "BIZNING BREND.",
    headlineAccent: "BIZNING STANDART.",
    body: "IMPERIAL COOL portfeli uchun tanlangan mahsulotlar kompaniyaning o‘z brend identifikatsiyasi ostida taqdim etiladi. Nomlash lavhasidan tortib konstruksiya tafsilotlarigacha — har bir detal IMPERIAL COOL standartlariga muvofiq baholanadi.",
    details: ["Nomlash lavhasi", "Materiallar", "Konstruksiya"],
  },
  products: {
    eyebrow: "MAHSULOT YO‘NALISHLARI",
    headline: "Mahsulot toifalari",
    sub: "Professional sovutish tizimlari uchun tanlangan uskunalar toifalari.",
    details: "Batafsil ma’lumot",
    fullCatalog: "TO‘LIQ KATALOG",
    items: [
      {
        code: "01",
        title: "Havo sovutgichlari / Evaporatorlar",
        desc: "Sovuq zanjir uchun ishonchli havo aylanishi va harorat nazorati.",
      },
      {
        code: "02",
        title: "Kondensatorlar",
        desc: "Samarali issiqlik almashinuvi uchun muhandislik yechimi.",
      },
      {
        code: "03",
        title: "Kompressorlar",
        desc: "Professional sovutish tizimining markaziy elementi.",
      },
      {
        code: "04",
        title: "Sovutish tizimlari va komponentlar",
        desc: "Yaxlit sovutish infratuzilmasi uchun qo‘shimcha uskunalar.",
      },
    ],
  },
  why: {
    eyebrow: "NEGA IMPERIAL COOL",
    headline: "Nima uchun IMPERIAL COOL",
    items: [
      {
        title: "To‘g‘ridan-to‘g‘ri hamkorlik",
        desc: "Xitoydagi ishlab chiqarish korxonalari bilan bevosita ishlash.",
      },
      {
        title: "O‘z brendi",
        desc: "Mahsulotlar IMPERIAL COOL brendi ostida taqdim etiladi.",
      },
      {
        title: "Texnik yondashuv",
        desc: "Uskunalar professional sovutish talablariga mos tanlanadi.",
      },
      {
        title: "Uzoq muddatli yondashuv",
        desc: "Barqaror hamkorlik va brend rivojlanishiga e’tibor.",
      },
    ],
  },
  global: {
    eyebrow: "XALQARO YO‘NALISH",
    headline: "Xitoydan xalqaro bozorga",
    body: "IMPERIAL COOL Xitoydagi ishlab chiqarish hamkorligini xalqaro miqyosda joylashtirilgan brend sifatida taqdim etadi.",
    chain: ["XITOY", "IMPERIAL COOL", "XALQARO BOZOR"],
  },
  contact: {
    eyebrow: "ALOQA",
    headline: "SOVUTISH KELAJAGINI BIRGALIKDA QURAMIZ.",
    body: "Hamkorlik va mahsulotlar bo‘yicha savollaringiz bo‘lsa, jamoamiz bilan bog‘laning.",
    ctaPrimary: "Biz bilan bog‘lanish",
    ctaSecondary: "WhatsApp",
    phoneLabel: "Telefon",
    wechatUnavailable: "WeChat — tez orada",
    placeholderNote: "Aloqa ma’lumotlari tez orada shu yerga qo‘shiladi.",
    domainLabel: "imperialcool.com",
  },
  footer: {
    tagline: "Professional sovutish yechimlari",
    rights: "Barcha huquqlar himoyalangan.",
    langLabel: "Til",
  },
};

const ru: Dictionary = {
  htmlLang: "ru",
  meta: {
    title: "IMPERIAL COOL — Профессиональное холодильное оборудование",
    description:
      "IMPERIAL COOL — международный холодильный бренд, поставляющий профессиональное оборудование под собственным именем в сотрудничестве с производственными партнёрами в Китае.",
  },
  nav: {
    about: "О бренде",
    cooperation: "Сотрудничество",
    products: "Продукция",
    contact: "Контакты",
  },
  hero: {
    eyebrow: "IMPERIAL COOL",
    headline: "НОВЫЙ УРОВЕНЬ В ХОЛОДИЛЬНОЙ ИНДУСТРИИ",
    sub: "В сотрудничестве с крупными производственными партнёрами в Китае мы представляем профессиональное холодильное оборудование под брендом IMPERIAL COOL.",
    cta: "ВСЯ ПРОДУКЦИЯ",
    scroll: "Прокрутите вниз",
  },
  comingSoon: {
    message: "Каталог продукции IMPERIAL COOL готовится к запуску.",
    detail: "Продукция, техническая информация и полный ассортимент скоро будут доступны.",
    back: "НА ГЛАВНУЮ",
  },
  china: {
    eyebrow: "МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО",
    headline: "ПРЯМОЕ СОТРУДНИЧЕСТВО С ПРОИЗВОДИТЕЛЯМИ В КИТАЕ",
    body: "IMPERIAL COOL сотрудничает с производственными предприятиями в Китае. Продукция отбирается в соответствии с нашими техническими требованиями и поставляется на рынок под брендом IMPERIAL COOL.",
    flow: [
      "Производство в Китае",
      "Техническая проверка",
      "Бренд IMPERIAL COOL",
      "Клиент",
    ],
    flowCaption:
      "Каждый продукт проходит этот путь, прежде чем войти в портфель IMPERIAL COOL.",
  },
  brand: {
    eyebrow: "НАШ БРЕНД",
    headline: "НАШ БРЕНД.",
    headlineAccent: "НАШ СТАНДАРТ.",
    body: "Продукция, отобранная для портфеля IMPERIAL COOL, поставляется под собственной брендовой идентичностью компании. От шильдика до конструктивных деталей — каждый элемент проверяется на соответствие стандартам IMPERIAL COOL.",
    details: ["Шильдик", "Материалы", "Конструкция"],
  },
  products: {
    eyebrow: "ЛИНЕЙКА ПРОДУКЦИИ",
    headline: "Категории продукции",
    sub: "Продуманный набор категорий оборудования для профессионального холодоснабжения.",
    details: "Подробнее",
    fullCatalog: "ПОЛНЫЙ КАТАЛОГ",
    items: [
      {
        code: "01",
        title: "Воздухоохладители / Испарители",
        desc: "Надёжная циркуляция воздуха и контроль температуры для холодовой цепи.",
      },
      {
        code: "02",
        title: "Конденсаторы",
        desc: "Инженерное решение для эффективного теплообмена.",
      },
      {
        code: "03",
        title: "Компрессоры",
        desc: "Центральный элемент профессиональной холодильной системы.",
      },
      {
        code: "04",
        title: "Холодильные системы и компоненты",
        desc: "Дополнительное оборудование для полноценной холодильной инфраструктуры.",
      },
    ],
  },
  why: {
    eyebrow: "ПОЧЕМУ IMPERIAL COOL",
    headline: "Почему Imperial Cool",
    items: [
      {
        title: "Прямое сотрудничество",
        desc: "Непосредственная работа с производственными предприятиями в Китае.",
      },
      {
        title: "Собственный бренд",
        desc: "Продукция представлена под именем IMPERIAL COOL.",
      },
      {
        title: "Технический подход",
        desc: "Оборудование отбирается для профессиональных задач холодоснабжения.",
      },
      {
        title: "Долгосрочное видение",
        desc: "Ориентация на устойчивые деловые отношения и развитие бренда.",
      },
    ],
  },
  global: {
    eyebrow: "МЕЖДУНАРОДНОЕ ПОЗИЦИОНИРОВАНИЕ",
    headline: "От Китая к международному рынку",
    body: "IMPERIAL COOL представляет производственное сотрудничество в Китае как бренд с международным позиционированием.",
    chain: ["КИТАЙ", "IMPERIAL COOL", "МЕЖДУНАРОДНЫЙ РЫНОК"],
  },
  contact: {
    eyebrow: "КОНТАКТЫ",
    headline: "СОЗДАЁМ БУДУЩЕЕ ХОЛОДИЛЬНОЙ ИНДУСТРИИ ВМЕСТЕ.",
    body: "По вопросам сотрудничества и продукции свяжитесь с нашей командой.",
    ctaPrimary: "Связаться с нами",
    ctaSecondary: "WhatsApp",
    phoneLabel: "Телефон",
    wechatUnavailable: "WeChat — скоро",
    placeholderNote: "Контактные данные будут добавлены здесь в ближайшее время.",
    domainLabel: "imperialcool.com",
  },
  footer: {
    tagline: "Профессиональные холодильные решения",
    rights: "Все права защищены.",
    langLabel: "Язык",
  },
};

const en: Dictionary = {
  htmlLang: "en",
  meta: {
    title: "IMPERIAL COOL — Professional Refrigeration Equipment",
    description:
      "IMPERIAL COOL is an international refrigeration brand supplying professional cooling equipment under its own name, in cooperation with manufacturing partners in China.",
  },
  nav: {
    about: "About",
    cooperation: "Cooperation",
    products: "Products",
    contact: "Contact",
  },
  hero: {
    eyebrow: "IMPERIAL COOL",
    headline: "A NEW STANDARD IN REFRIGERATION",
    sub: "In cooperation with established manufacturing partners in China, we bring professional refrigeration equipment to the market under the IMPERIAL COOL brand.",
    cta: "ALL PRODUCTS",
    scroll: "Scroll to explore",
  },
  comingSoon: {
    message: "The IMPERIAL COOL product catalog is in preparation.",
    detail: "Products, technical information, and the full range will be available soon.",
    back: "BACK TO HOME",
  },
  china: {
    eyebrow: "INTERNATIONAL COOPERATION",
    headline: "DIRECT MANUFACTURING COOPERATION IN CHINA",
    body: "IMPERIAL COOL cooperates with established manufacturing enterprises in China. Products are selected according to our technical requirements and brought to market under the IMPERIAL COOL brand.",
    flow: [
      "Manufacturing in China",
      "Technical Selection",
      "IMPERIAL COOL Brand",
      "Customer",
    ],
    flowCaption:
      "Every product moves through this process before it enters the IMPERIAL COOL portfolio.",
  },
  brand: {
    eyebrow: "OUR BRAND",
    headline: "OUR BRAND.",
    headlineAccent: "OUR STANDARD.",
    body: "Products selected for the IMPERIAL COOL portfolio are supplied under our own brand identity. From the nameplate to the construction details, every element is reviewed against IMPERIAL COOL's standards.",
    details: ["Nameplate", "Materials", "Construction"],
  },
  products: {
    eyebrow: "PRODUCT RANGE",
    headline: "Product Categories",
    sub: "A focused range of equipment categories for professional refrigeration.",
    details: "More details",
    fullCatalog: "FULL CATALOG",
    items: [
      {
        code: "01",
        title: "Air Coolers / Evaporators",
        desc: "Reliable airflow and temperature control for the cold chain.",
      },
      {
        code: "02",
        title: "Condensers",
        desc: "Engineered for efficient heat exchange.",
      },
      {
        code: "03",
        title: "Compressors",
        desc: "The core of a professional refrigeration system.",
      },
      {
        code: "04",
        title: "Refrigeration Systems & Components",
        desc: "Supporting equipment for a complete cooling infrastructure.",
      },
    ],
  },
  why: {
    eyebrow: "WHY IMPERIAL COOL",
    headline: "Why Imperial Cool",
    items: [
      {
        title: "Direct Cooperation",
        desc: "Manufacturing relationships in China.",
      },
      {
        title: "Own Brand",
        desc: "Products presented under the IMPERIAL COOL name.",
      },
      {
        title: "Technical Approach",
        desc: "Equipment selected for professional refrigeration applications.",
      },
      {
        title: "Long-Term Vision",
        desc: "A focus on sustainable business relationships and brand development.",
      },
    ],
  },
  global: {
    eyebrow: "INTERNATIONAL POSITIONING",
    headline: "From China to the international market",
    body: "IMPERIAL COOL presents its manufacturing cooperation in China as an internationally positioned brand.",
    chain: ["CHINA", "IMPERIAL COOL", "INTERNATIONAL MARKET"],
  },
  contact: {
    eyebrow: "CONTACT",
    headline: "LET'S BUILD THE FUTURE OF COOLING.",
    body: "For cooperation and product enquiries, get in touch with our team.",
    ctaPrimary: "Contact Us",
    ctaSecondary: "WhatsApp",
    phoneLabel: "Phone",
    wechatUnavailable: "WeChat — coming soon",
    placeholderNote: "Contact details will be added here.",
    domainLabel: "imperialcool.com",
  },
  footer: {
    tagline: "Professional Refrigeration Solutions",
    rights: "All rights reserved.",
    langLabel: "Language",
  },
};

const zh: Dictionary = {
  htmlLang: "zh-CN",
  meta: {
    title: "IMPERIAL COOL — 专业制冷设备",
    description:
      "IMPERIAL COOL 是一个国际制冷品牌，与中国制造合作伙伴携手，以自有品牌供应专业制冷设备。",
  },
  nav: {
    about: "关于品牌",
    cooperation: "合作",
    products: "产品",
    contact: "联系我们",
  },
  hero: {
    eyebrow: "IMPERIAL COOL",
    headline: "制冷行业的新标准",
    sub: "我们与中国大型制造合作伙伴携手，以 IMPERIAL COOL 品牌为市场提供专业制冷设备。",
    cta: "所有产品",
    scroll: "向下滚动",
  },
  comingSoon: {
    message: "IMPERIAL COOL 产品目录正在筹备中。",
    detail: "产品、技术资料及完整产品系列即将发布。",
    back: "返回首页",
  },
  china: {
    eyebrow: "国际合作",
    headline: "与中国制造企业直接合作",
    body: "IMPERIAL COOL 与中国的制造企业开展合作。产品根据我们的技术要求进行筛选，并以 IMPERIAL COOL 品牌投放市场。",
    flow: ["中国制造", "技术筛选", "IMPERIAL COOL 品牌", "客户"],
    flowCaption: "每一款产品都需经过这一流程，才会进入 IMPERIAL COOL 产品组合。",
  },
  brand: {
    eyebrow: "我们的品牌",
    headline: "我们的品牌，",
    headlineAccent: "我们的标准。",
    body: "入选 IMPERIAL COOL 产品组合的产品，均以公司自有品牌标识供应。从铭牌标识到结构细节，每一处都依照 IMPERIAL COOL 的标准进行审核。",
    details: ["铭牌标识", "材质选择", "结构细节"],
  },
  products: {
    eyebrow: "产品系列",
    headline: "产品类别",
    sub: "为专业制冷应用精选的设备类别。",
    details: "了解详情",
    fullCatalog: "完整目录",
    items: [
      {
        code: "01",
        title: "风冷机组 / 蒸发器",
        desc: "为冷链提供可靠的气流循环与温度控制。",
      },
      {
        code: "02",
        title: "冷凝器",
        desc: "为高效热交换而设计的工程方案。",
      },
      {
        code: "03",
        title: "压缩机",
        desc: "专业制冷系统的核心部件。",
      },
      {
        code: "04",
        title: "制冷系统与组件",
        desc: "构建完整制冷基础设施的配套设备。",
      },
    ],
  },
  why: {
    eyebrow: "选择理由",
    headline: "为什么选择 IMPERIAL COOL",
    items: [
      {
        title: "直接合作",
        desc: "在中国建立的制造合作关系。",
      },
      {
        title: "自有品牌",
        desc: "产品以 IMPERIAL COOL 品牌呈现。",
      },
      {
        title: "技术导向",
        desc: "根据专业制冷应用需求筛选设备。",
      },
      {
        title: "长期愿景",
        desc: "专注于可持续的业务关系与品牌发展。",
      },
    ],
  },
  global: {
    eyebrow: "国际化定位",
    headline: "从中国走向国际市场",
    body: "IMPERIAL COOL 将其在中国的制造合作，以具有国际定位的品牌形象呈现给市场。",
    chain: ["中国", "IMPERIAL COOL", "国际市场"],
  },
  contact: {
    eyebrow: "联系我们",
    headline: "携手共创制冷行业的未来",
    body: "如有合作或产品相关咨询，欢迎与我们的团队联系。",
    ctaPrimary: "联系我们",
    ctaSecondary: "WhatsApp",
    phoneLabel: "电话",
    wechatUnavailable: "微信 — 即将开放",
    placeholderNote: "联系方式即将添加。",
    domainLabel: "imperialcool.com",
  },
  footer: {
    tagline: "专业制冷解决方案",
    rights: "版权所有，保留所有权利。",
    langLabel: "语言",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { uz, ru, en, zh };
