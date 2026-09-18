"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import {
  IconCompressor,
  IconCondenser,
  IconEvaporator,
  IconSystems,
} from "@/components/visuals/ProductIcons";
import { LINKS } from "@/lib/links";

const icons = [IconEvaporator, IconCondenser, IconCompressor, IconSystems];
const categoryLinks = [LINKS.airCoolers, LINKS.condensers, LINKS.compressors, LINKS.systems];

export function ProductCategories() {
  const { dict } = useLocale();

  return (
    <section id="products" className="relative bg-navy-900 py-28 sm:py-36">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <Eyebrow>{dict.products.eyebrow}</Eyebrow>
            <h2 className="mt-6 max-w-lg font-display text-3xl font-bold leading-tight tracking-tighter text-paper sm:text-4xl">
              {dict.products.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-xs text-[13px] leading-relaxed text-silver-500 sm:text-right">
              {dict.products.sub}
            </p>
          </Reveal>
        </div>

        <StaggerGroup
          stagger={0.1}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-silver-400/15 bg-silver-400/15 sm:grid-cols-2 lg:grid-cols-4"
        >
          {dict.products.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={item.code} className="group relative bg-navy-900 p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ice-400/[0.06] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-wider2 text-silver-500">
                    {item.code}
                  </span>
                  <Icon className="h-8 w-8 text-ice-400/80 transition-transform duration-500 ease-premium group-hover:-translate-y-1" />
                </div>
                <h3 className="relative mt-8 text-[15px] font-semibold uppercase leading-snug tracking-wide text-paper">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-[13px] leading-relaxed text-silver-500">
                  {item.desc}
                </p>
                <a href={categoryLinks[i]} target={categoryLinks[i].startsWith("http") ? "_blank" : undefined} rel={categoryLinks[i].startsWith("http") ? "noopener noreferrer" : undefined} className="relative mt-6 inline-block text-[13px] font-semibold text-ice-400 transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-ice-400">
                  {dict.products.details} →
                </a>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
        <div className="mt-8 text-right">
          <a href={LINKS.mainStore} target={LINKS.mainStore.startsWith("http") ? "_blank" : undefined} rel={LINKS.mainStore.startsWith("http") ? "noopener noreferrer" : undefined} className="text-[13px] font-semibold uppercase tracking-wider2 text-ice-400 transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-ice-400">
            {dict.products.fullCatalog} →
          </a>
        </div>
      </Container>
    </section>
  );
}
