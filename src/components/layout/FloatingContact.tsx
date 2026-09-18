"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { CONTACT } from "@/lib/contact";
import { MessageCircle, Phone } from "lucide-react";

type BrandIconProps = { className?: string };

function TelegramIcon({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.8 3.2 2.9 10.5a1 1 0 0 0 .05 1.89l4.68 1.47 1.8 5.73a.9.9 0 0 0 1.53.36l2.76-2.72 4.76 3.5a1.1 1.1 0 0 0 1.73-.67l3.34-15.52a1.1 1.1 0 0 0-1.75-1.34ZM9.3 13.38l9.9-7.13-7.72 8.4-.37 3.05-1.81-4.32Z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20.4 11.6a8.4 8.4 0 0 1-12.3 7.5L3.5 20.5l1.4-4.4a8.4 8.4 0 1 1 15.5-4.5Z" />
      <path d="M8.7 8.2c-.4.5-.6 1-.6 1.5 0 2.2 3.8 6 6.1 6 .6 0 1.2-.2 1.7-.7l.5-1.1-2.4-1.2-.9 1c-1.1-.4-2.3-1.6-2.7-2.7l1-1-1.2-2.3-1.5.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function InstagramIcon({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WeChatIcon({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M10 3C5.6 3 2 5.8 2 9.3c0 2 1.1 3.8 2.9 5l-.7 2.5 2.8-1.4c.9.3 1.9.4 3 .4h.3a6.1 6.1 0 0 1-.4-2.1c0-3.5 3.2-6.3 7.3-6.6C15.9 4.6 13.2 3 10 3Zm-3 5.6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5.7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
      <path d="M17.1 8.6c-3.2 0-5.8 2.2-5.8 5s2.6 5 5.8 5c.8 0 1.5-.1 2.2-.4l2.3 1.1-.6-2c1.2-.9 2-2.2 2-3.7 0-2.8-2.6-5-5.9-5Zm-2.1 4.2a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Zm4.2 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Z" />
    </svg>
  );
}

export function FloatingContact() {
  const { dict } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const closeOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [open]);

  const linkClass = "group flex items-center gap-3 rounded-lg px-4 py-3 text-[13px] text-paper transition-colors hover:bg-ice-400/10 hover:shadow-[0_0_18px_rgba(103,216,255,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-ice-400";
  const iconClass = "h-5 w-5 shrink-0 text-ice-400/70 transition-colors group-hover:text-ice-300";

  return (
    <div ref={rootRef} className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      {open && (
        <div id="floating-contact-panel" className="w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-silver-400/20 bg-navy-950 p-2 shadow-2xl">
          <a className={linkClass} href={CONTACT.phoneHref}>
            <Phone className={iconClass} aria-hidden="true" />
            <span>
              <span className="block text-[11px] uppercase tracking-wider text-ice-400">{dict.contact.phoneLabel}</span>
              {CONTACT.phone}
            </span>
          </a>
          <a className={linkClass} href={CONTACT.telegram} target="_blank" rel="noopener noreferrer"><TelegramIcon className={iconClass} /><span>Telegram</span></a>
          <a className={linkClass} href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className={iconClass} /><span>WhatsApp</span></a>
          <a className={linkClass} href={CONTACT.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon className={iconClass} /><span>Instagram</span></a>
          <span className="flex items-center gap-3 px-4 py-3 text-[13px] text-silver-500" aria-disabled="true"><WeChatIcon className="h-5 w-5 shrink-0" /><span>{dict.contact.wechatUnavailable}</span></span>
        </div>
      )}
      <button
        type="button"
        aria-expanded={open}
        aria-controls="floating-contact-panel"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full border border-ice-400/40 bg-navy-950 px-6 py-3 font-display text-[12px] font-semibold uppercase tracking-wider2 text-paper shadow-xl transition-colors hover:border-ice-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ice-400"
      >
        <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4" aria-hidden="true" />{dict.contact.eyebrow}</span>
      </button>
    </div>
  );
}
