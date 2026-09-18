"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
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
              <div className="pt-2">
                <LanguageSwitcher locale={locale} setLocale={setLocale} />
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
