# IMPERIAL COOL — Corporate Brand Landing Page

A premium, minimal, international corporate landing page for **IMPERIAL COOL**
(imperialcool.com) — a refrigeration equipment brand supplied in cooperation
with manufacturing partners in China. Built with Next.js (App Router),
TypeScript, Tailwind CSS and Framer Motion.

This is a brand/trust site, not a store: no prices, no cart, no catalog. Its
job is to make a visitor understand in a few seconds that IMPERIAL COOL is a
serious refrigeration brand with direct manufacturing cooperation in China.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
```

Requires Node 18.18+ (tested on Node 22).

## Project structure

```
src/
  app/
    layout.tsx        Root layout — fonts, metadata, LocaleProvider, Navbar/Footer
    page.tsx           Section order for the single-page site
    globals.css        Tailwind layers, base styles, reduced-motion handling
  components/
    layout/            Navbar, Footer
    sections/          Hero, ChinaCooperation, OurBrand, ProductCategories,
                        WhyImperialCool, GlobalReach, ContactCTA
    motion/            Reveal / StaggerGroup / StaggerItem animation primitives
    ui/                Container, Button/ButtonLink, Eyebrow — reusable atoms
    visuals/           UnitSchematic, FlowIcons, ProductIcons, GridBackdrop
  i18n/
    types.ts           Dictionary type (the contract every locale must satisfy)
    dictionaries.ts     uz / ru / en / zh copy — uz is the default locale
    LocaleProvider.tsx  Client-side locale context (persists to localStorage,
                        falls back to the browser's language on first visit)
  lib/
    contact.ts          Placeholder contact details (see below)
    fonts.ts             Font stack notes
```

## Localization

Four locales — **uz** (default), **ru**, **en**, **zh** — are fully translated
in `src/i18n/dictionaries.ts` against the `Dictionary` type in
`src/i18n/types.ts`. Switching language is instant (no page reload, no
route change): the navbar and footer both expose the `UZ | RU | EN | 中文`
switcher, and the choice is remembered in `localStorage` for the next visit.

To add a fifth locale: add it to `Locale` in `types.ts`, add its entry to
`dictionaries.ts` (TypeScript will flag anything missing), and add it to
the `locales` array in `dictionaries.ts`.

## Contact details — action needed before launch

No phone number, email address or physical address has been invented
anywhere on this site, per the brief. Real values go in
**`src/lib/contact.ts`**:

```ts
export const CONTACT = {
  email: "",     // e.g. "info@imperialcool.com"
  phone: "",     // e.g. "+998 90 123 45 67"
  whatsapp: "",  // full wa.me link, e.g. "https://wa.me/998901234567"
};
```

Until these are filled in, the "Contact Us" / "WhatsApp" buttons on the
final section render as inert (visually identical, no dead link), and the
"contact details coming soon" note stays visible beside them. Filling in
`email`/`whatsapp` automatically turns the corresponding button into a live
`mailto:` / WhatsApp link — no other code changes needed.

## Photography

No real product photography was available, so the hero, brand and product
sections use an original abstract technical line-art illustration
(`src/components/visuals/UnitSchematic.tsx`, `ProductIcons.tsx`,
`FlowIcons.tsx`) instead of stock or fabricated photos of equipment,
factories or people — deliberately, to avoid presenting anything as real
that isn't. When real photography of the equipment, manufacturing
cooperation or nameplate/branding details is available, swap it in:

- Hero background/visual → `src/components/sections/Hero.tsx`
- "Our Brand" nameplate/material close-ups → `src/components/sections/OurBrand.tsx`
- Product category cards → `src/components/sections/ProductCategories.tsx`
- China cooperation section → `src/components/sections/ChinaCooperation.tsx`

Each of these files has a short comment marking where an `<img>` /
`next/image` would replace the current illustration.

## Fonts

Google Fonts could not be fetched at build time in this environment, so the
site currently ships with a premium system-native font stack (San
Francisco / Segoe UI / Roboto, with PingFang SC / Microsoft YaHei / Noto
Sans SC fallbacks for Chinese) — see `src/lib/fonts.ts`. This actually has
two real advantages worth keeping in mind before switching it: zero
render-blocking third-party font requests, and no Google Fonts API call at
request time (the self-hosting approach EU privacy guidance recommends
anyway). To use a licensed brand typeface instead, drop the woff2 files in
`public/fonts/`, declare them with `@font-face` in `src/app/globals.css`,
and point `font-sans` / `font-display` in `tailwind.config.ts` at the new
family — no component changes needed.

## Design system

Colors, type scale and easing curves live in `tailwind.config.ts`
(`ink` / `navy` / `steel` / `ice` / `silver` / `paper`). Section spacing,
copy and layout follow the "less content, more impact" brief: one message
per section, generous whitespace, no filler.

## Accessibility & performance

- `prefers-reduced-motion` is respected globally (`globals.css`) and by
  every Framer Motion animation (`useReducedMotion()` in `Reveal.tsx` and
  each animated section).
- Semantic heading hierarchy (`h1` in the hero, `h2` per section).
- `next.config.mjs` currently sets `images.unoptimized: true` since there
  are no real images yet — remove that once real photography is added so
  Next.js can optimize it.
- SEO metadata (title, description, Open Graph, Twitter card, robots) is
  set in `src/app/layout.tsx`; `public/favicon.svg` is a placeholder mark
  — replace with the real IMPERIAL COOL logo mark when available.

## No unsupported claims

Per the brief, nothing on the site claims a specific ranking ("#1",
"largest", "world leader"), invented certifications, production volumes,
named partner factories, or years in business. Copy stays to what's
actually true: direct cooperation with manufacturing partners in China,
products supplied under the IMPERIAL COOL brand, and a technical/
professional selection approach.
