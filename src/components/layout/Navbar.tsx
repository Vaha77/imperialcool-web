"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { localeLabels, locales } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/types";
import clsx from "@/lib/clsx";
import { Container } from "@/components/ui/Container";

const NAV_ANCHORS: { key: "about" | "cooperation" | "products" | "contact"; href: string }[] =
  [
    { key: "about", href: "#brand" },
    { key: "cooperation", href: "#cooperation" },
    { key: "products", href: "#products" },
    { key: "contact", href: "#contact" },
  ];

function LanguageSwitcher({
  locale,
  setLocale,
  compact = false,
}: {
  locale: Locale;
  setLocale: (l: Locale) => void;
  compact?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex items-center rounded-full border border-silver-400/25 bg-white/[0.03] p-1 backdrop-blur",
        compact ? "gap-0.5" : "gap-0.5",
      )}
      role="group"
      aria-label="Language"
    >
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={clsx(
            "rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide transition-all duration-300",
            locale === l
              ? "bg-paper text-ink"
              : "text-silver-400 hover:text-paper",
          )}
        >
          {localeLabels[l]}
        </button>
      ))}
    </div>
  );
}

const mobileLocaleLabels: Record<Locale, string> = {
  zh: "中文",
  uz: "UZ",
  ru: "RU",
  en: "EN",
};

const mobileLocales: Locale[] = ["zh", "uz", "ru", "en"];

function Flag({ locale }: { locale: Locale }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className="h-[14px] w-[21px] shrink-0 rounded-[2px]"
      aria-hidden="true"
    >
      {locale === "zh" && (
        <>
          <path fill="#DE2910" d="M0 0h60v40H0z" />
          <path fill="#FFDE00" d="m12 6 1.5 4.6h4.8l-3.9 2.8 1.5 4.6-3.9-2.8-3.9 2.8 1.5-4.6-3.9-2.8h4.8z" />
          <g fill="#FFDE00">
            <circle cx="22" cy="5" r="1.2" /><circle cx="26" cy="9" r="1.2" />
            <circle cx="26" cy="15" r="1.2" /><circle cx="22" cy="19" r="1.2" />
          </g>
        </>
      )}
      {locale === "uz" && (
        <>
          <path fill="#1EB5E5" d="M0 0h60v13H0z" />
          <path fill="#CE1126" d="M0 13h60v2H0zm0 11h60v2H0z" />
          <path fill="#FFF" d="M0 15h60v9H0z" />
          <path fill="#1EB53A" d="M0 26h60v14H0z" />
          <circle cx="9" cy="6" r="4" fill="#FFF" />
          <circle cx="11" cy="5" r="4" fill="#1EB5E5" />
          <g fill="#FFF">
            <circle cx="18" cy="3" r="0.8" /><circle cx="22" cy="3" r="0.8" /><circle cx="26" cy="3" r="0.8" />
            <circle cx="18" cy="6" r="0.8" /><circle cx="22" cy="6" r="0.8" /><circle cx="26" cy="6" r="0.8" />
            <circle cx="18" cy="9" r="0.8" /><circle cx="22" cy="9" r="0.8" /><circle cx="26" cy="9" r="0.8" />
            <circle cx="30" cy="6" r="0.8" /><circle cx="30" cy="9" r="0.8" /><circle cx="34" cy="9" r="0.8" />
          </g>
        </>
      )}
      {locale === "ru" && (
        <>
          <path fill="#FFF" d="M0 0h60v14H0z" />
          <path fill="#0039A6" d="M0 14h60v13H0z" />
          <path fill="#D52B1E" d="M0 27h60v13H0z" />
        </>
      )}
      {locale === "en" && (
        <>
          <path fill="#012169" d="M0 0h60v40H0z" />
          <path stroke="#FFF" strokeWidth="9" d="M0 0 60 40M60 0 0 40" />
          <path stroke="#C8102E" strokeWidth="4" d="M0 0 60 40M60 0 0 40" />
          <path stroke="#FFF" strokeWidth="13" d="M30 0v40M0 20h60" />
          <path stroke="#C8102E" strokeWidth="7" d="M30 0v40M0 20h60" />
        </>
      )}
    </svg>
  );
}

function MobileLanguageSwitcher({
  locale,
  setLocale,
}: {
  locale: Locale;
  setLocale: (l: Locale) => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative lg:hidden">
      <button
        type="button"
        aria-label="Language"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
        className="flex h-9 items-center gap-1.5 rounded-full border border-silver-400/25 bg-white/[0.03] px-2.5 text-[11px] font-semibold text-paper backdrop-blur"
      >
        <Flag locale={locale} />
        <span>{mobileLocaleLabels[locale]}</span>
        <svg viewBox="0 0 10 6" className="ml-0.5 h-1.5 w-2.5 text-silver-400" aria-hidden="true">
          <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      {open && (
        <div
          role="listbox"
          aria-label="Language"
          className="absolute right-0 top-full z-10 mt-2 min-w-[102px] rounded-xl border border-silver-400/20 bg-ink/95 p-1 shadow-xl backdrop-blur-xl"
        >
          {mobileLocales.map((item) => (
            <button
              key={item}
              type="button"
              role="option"
              aria-selected={locale === item}
              onClick={() => {
                setLocale(item);
                setOpen(false);
              }}
              className={clsx(
                "flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-[11px] font-semibold transition-colors",
                locale === item ? "bg-white/10 text-paper" : "text-silver-400 hover:bg-white/5 hover:text-paper",
              )}
            >
              <Flag locale={item} />
              <span>{mobileLocaleLabels[item]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const { locale, dict, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLabel = {
    about: dict.nav.about,
    cooperation: dict.nav.cooperation,
    products: dict.nav.products,
    contact: dict.nav.contact,
  };

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
        scrolled
          ? "border-b border-silver-400/10 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-[76px] items-center justify-between">
          <a
            href="#top"
            className="font-display text-[15px] font-bold uppercase tracking-wider2 text-paper"
          >
            Imperial<span className="text-ice-400">Cool</span>
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {NAV_ANCHORS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-[13px] font-medium uppercase tracking-wider text-silver-400 transition-colors duration-300 hover:text-paper"
              >
                {navLabel[item.key]}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <LanguageSwitcher locale={locale} setLocale={setLocale} />
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <MobileLanguageSwitcher locale={locale} setLocale={setLocale} />
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span
              className={clsx(
                "h-px w-6 bg-paper transition-all duration-300",
                mobileOpen && "translate-y-[6.5px] rotate-45",
              )}
            />
            <span
              className={clsx(
                "h-px w-6 bg-paper transition-all duration-300",
                mobileOpen && "-translate-y-[6.5px] -rotate-45",
              )}
            />
          </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-silver-400/10 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col gap-6 py-8">
              {NAV_ANCHORS.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium uppercase tracking-wide text-paper"
                >
                  {navLabel[item.key]}
                </a>
              ))}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
