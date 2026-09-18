"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

export function WhyImperialCool() {
  const { dict } = useLocale();

  return (
    <section className="relative bg-ink py-28 sm:py-36">
      <Container>
        <Reveal className="max-w-lg">
          <Eyebrow>{dict.why.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tighter text-paper sm:text-4xl">
            {dict.why.headline}
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 border-t border-silver-400/15 sm:grid-cols-2 lg:grid-cols-4">
          {dict.why.items.map((item, i) => (
            <StaggerItem
              key={item.title}
              className="group border-b border-silver-400/15 py-10 pr-6 sm:border-r lg:last:border-r-0"
            >
              <div className="font-display text-sm font-semibold text-silver-500 transition-colors duration-500 group-hover:text-ice-400">
                0{i + 1}
              </div>
              <h3 className="mt-6 text-[15px] font-semibold uppercase leading-snug tracking-wide text-paper">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-silver-500">
                {item.desc}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
