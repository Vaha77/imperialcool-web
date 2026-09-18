"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { GridBackdrop } from "@/components/visuals/GridBackdrop";
import { LINKS } from "@/lib/links";

export default function ProductsPage() {
  const { dict } = useLocale();

  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-ink pt-28 sm:min-h-[96svh]">
      <GridBackdrop />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <Container className="relative z-10 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-wider3 text-ice-400/90">
          IMPERIAL COOL
        </p>
        <h1 className="mt-8 font-display text-[2.4rem] font-extrabold uppercase leading-[1.08] tracking-tightest text-paper sm:text-6xl lg:text-[4.2rem]">
          COMING <span className="text-ice-400">SOON</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-silver-400 sm:text-lg">
          {dict.comingSoon.message}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-silver-400 sm:text-lg">
          {dict.comingSoon.detail}
        </p>
        <div className="mt-11">
          <ButtonLink href="/" className="[&>span:last-child]:hidden">
            <span aria-hidden className="mr-2">←</span>
            {dict.comingSoon.back}
          </ButtonLink>
        </div>
        <div className="mt-6">
          {LINKS.mainStore === "/products" ? (
            <span aria-disabled="true" className="text-[13px] font-semibold uppercase tracking-wider2 text-silver-500">
              {dict.products.fullCatalog} →
            </span>
          ) : (
            <a href={LINKS.mainStore} target={LINKS.mainStore.startsWith("http") ? "_blank" : undefined} rel={LINKS.mainStore.startsWith("http") ? "noopener noreferrer" : undefined} className="text-[13px] font-semibold uppercase tracking-wider2 text-ice-400 hover:text-paper">
              {dict.products.fullCatalog} →
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
