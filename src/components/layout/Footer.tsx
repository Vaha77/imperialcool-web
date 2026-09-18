"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { localeLabels, locales } from "@/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import clsx from "@/lib/clsx";
import { CONTACT } from "@/lib/contact";

export function Footer() {
  const { locale, dict, setLocale } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-silver-400/10 bg-navy-950 py-14">
      <Container className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <div className="font-display text-base font-bold uppercase tracking-wider2 text-paper">
            Imperial<span className="text-ice-400">Cool</span>
          </div>
          <div className="mt-2 text-[12px] text-silver-500">
            {dict.footer.tagline}
          </div>
          <div className="mt-1 text-[12px] text-silver-500">
            {dict.contact.domainLabel}
          </div>
          <div className="mt-1 text-[12px] text-silver-500">
            <a href={CONTACT.phoneHref} className="hover:text-paper">{CONTACT.phone}</a>
            {" · "}
            <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-paper">Telegram</a>
            {" · "}
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-paper">WhatsApp</a>
            {" · "}
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-paper">Instagram</a>
          </div>
        </div>

        <div className="flex items-center gap-1 rounded-full border border-silver-400/20 p-1">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => setLocale(l)}
              aria-pressed={locale === l}
              aria-label={dict.footer.langLabel}
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

        <div className="text-[11px] text-silver-500">
          © {year} IMPERIAL COOL. {dict.footer.rights}
        </div>
      </Container>
    </footer>
  );
}
