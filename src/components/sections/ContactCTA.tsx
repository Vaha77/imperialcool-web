"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { GridBackdrop } from "@/components/visuals/GridBackdrop";
import { CONTACT } from "@/lib/contact";

export function ContactCTA() {
  const { dict } = useLocale();

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-32 sm:py-44">
      <GridBackdrop className="mask-fade-b opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px hairline" />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow className="justify-center">{dict.contact.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-8 max-w-3xl text-balance font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tightest text-paper sm:text-6xl">
            {dict.contact.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-md text-[15px] leading-relaxed text-silver-400">
            {dict.contact.body}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-11 flex flex-col items-center gap-5 sm:flex-row">
            <ButtonLink href={CONTACT.phoneHref}>
              {dict.contact.ctaPrimary}
            </ButtonLink>
            <ButtonLink
              variant="ghost"
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.contact.ctaSecondary}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-6 text-[11px] uppercase tracking-wider text-silver-500">
            <a href={CONTACT.phoneHref} className="hover:text-paper">
              {CONTACT.phone}
            </a>
            {" · "}
            <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
              Telegram
            </a>
            {" · "}
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
              Instagram
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-16 font-display text-sm font-semibold uppercase tracking-wider2 text-silver-500">
            {dict.contact.domainLabel}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
