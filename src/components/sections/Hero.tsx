"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { GridBackdrop } from "@/components/visuals/GridBackdrop";
import { UnitSchematic } from "@/components/visuals/UnitSchematic";
import { LINKS } from "@/lib/links";

export function Hero() {
  const { dict } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : 80],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : 40],
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const headlineWords = dict.hero.headline.split(" ");

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[92svh] items-center overflow-hidden bg-ink pt-28 sm:min-h-[96svh]"
    >
      <GridBackdrop />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

      <Container className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="lg:col-span-7"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-ice-400/70" />
            <span className="text-[11px] font-semibold uppercase tracking-wider3 text-ice-400/90">
              {dict.hero.eyebrow}
            </span>
          </motion.div>

          <h1 className="font-display text-[2.4rem] font-extrabold uppercase leading-[1.08] tracking-tightest text-paper text-balance sm:text-6xl lg:text-[4.2rem]">
            {headlineWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1 pr-4 align-top">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: prefersReducedMotion ? 0.01 : 1,
                    delay: prefersReducedMotion ? 0 : 0.25 + i * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 max-w-xl text-balance text-[15px] leading-relaxed text-silver-400 sm:text-lg"
          >
            {dict.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-11"
          >
            <ButtonLink href={LINKS.products} target={LINKS.products.startsWith("http") ? "_blank" : undefined} rel={LINKS.products.startsWith("http") ? "noopener noreferrer" : undefined} className="[&>span:last-child]:hidden">
              {dict.hero.cta}
              <span aria-hidden className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: visualY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[9/7] w-full max-w-lg">
            <UnitSchematic />
          </div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-medium uppercase tracking-wider2 text-silver-500">
          {dict.hero.scroll}
        </span>
        <div className="relative h-10 w-px overflow-hidden bg-silver-400/20">
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-ice-400"
            animate={
              prefersReducedMotion
                ? {}
                : { y: ["-100%", "200%"] }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
