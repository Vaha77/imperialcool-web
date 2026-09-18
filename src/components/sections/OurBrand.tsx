"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

export function OurBrand() {
  const { dict } = useLocale();

  return (
    <section id="brand" className="relative overflow-hidden bg-ink py-28 sm:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px hairline" />
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow className="justify-center">{dict.brand.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tightest text-paper sm:text-6xl lg:text-7xl">
            {dict.brand.headline}
            <br />
            <span className="bg-gradient-to-r from-ice-300 via-ice-400 to-silver-400 bg-clip-text text-transparent">
              {dict.brand.headlineAccent}
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-balance text-[15px] leading-relaxed text-silver-400 sm:text-lg">
            {dict.brand.body}
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-16 w-full">
          <div className="mx-auto flex max-w-xl items-center justify-center">
            <div className="relative w-full rounded-2xl border border-silver-400/20 bg-gradient-to-b from-navy-800 to-navy-900 px-10 py-12 shadow-[0_0_80px_-20px_rgba(122,204,234,0.25)]">
              <div className="absolute left-5 top-5 h-2 w-2 rounded-full border border-silver-400/40" />
              <div className="absolute right-5 top-5 h-2 w-2 rounded-full border border-silver-400/40" />
              <div className="absolute bottom-5 left-5 h-2 w-2 rounded-full border border-silver-400/40" />
              <div className="absolute bottom-5 right-5 h-2 w-2 rounded-full border border-silver-400/40" />
              <div className="font-display text-2xl font-extrabold uppercase tracking-wider2 text-paper sm:text-3xl">
                Imperial<span className="text-ice-400">Cool</span>
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-wider3 text-silver-500">
                {dict.footer.tagline}
              </div>
            </div>
          </div>
        </Reveal>

        <StaggerGroup className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-silver-400/15 pt-10">
          {dict.brand.details.map((label) => (
            <StaggerItem key={label} className="text-center">
              <div className="text-[11px] font-semibold uppercase tracking-wider2 text-ice-400/80">
                {label}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
