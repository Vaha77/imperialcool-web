export type Locale = "uz" | "ru" | "en" | "zh";

export interface ProductItem {
  code: string;
  title: string;
  desc: string;
}

export interface WhyItem {
  title: string;
  desc: string;
}

export interface Dictionary {
  htmlLang: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    cooperation: string;
    products: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    cta: string;
    scroll: string;
  };
  comingSoon: {
    message: string;
    detail: string;
    back: string;
  };
  china: {
    eyebrow: string;
    headline: string;
    body: string;
    flow: [string, string, string, string];
    flowCaption: string;
  };
  brand: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    body: string;
    details: [string, string, string];
  };
  products: {
    eyebrow: string;
    headline: string;
    sub: string;
    details: string;
    fullCatalog: string;
    items: [ProductItem, ProductItem, ProductItem, ProductItem];
  };
  why: {
    eyebrow: string;
    headline: string;
    items: [WhyItem, WhyItem, WhyItem, WhyItem];
  };
  global: {
    eyebrow: string;
    headline: string;
    body: string;
    chain: [string, string, string];
  };
  contact: {
    eyebrow: string;
    headline: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    phoneLabel: string;
    wechatUnavailable: string;
    placeholderNote: string;
    domainLabel: string;
  };
  footer: {
    tagline: string;
    rights: string;
    langLabel: string;
  };
}
