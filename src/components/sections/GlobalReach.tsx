"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

export function GlobalReach() {
  const { dict } = useLocale();
  const prefersReducedMotion = useReducedMotion();
  const [china, brand, market] = dict.global.chain;

  return (
    <section className="relative overflow-hidden bg-navy-900 py-28 sm:py-36">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow className="justify-center">{dict.global.eyebrow}</Eyebrow>
          <h2 className="mx-auto mt-6 max-w-xl font-display text-3xl font-bold leading-tight tracking-tighter text-paper sm:text-4xl">
            {dict.global.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-silver-400">
            {dict.global.body}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-20 w-full max-w-3xl">
          <div className="relative flex items-center justify-between">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-silver-400/15" />

            <motion.div
              className="absolute inset-y-0 left-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-ice-400/0 via-ice-400/70 to-ice-400/0"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            />

            {!prefersReducedMotion && (
              <motion.div
                className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-ice-300 shadow-[0_0_16px_4px_rgba(122,204,234,0.6)]"
                initial={{ left: "0%", opacity: 0 }}
                animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  repeatDelay: 0.6,
                  ease: "easeInOut",
                }}
              />
            )}

            {[china, brand, market].map((label, i) => (
              <div
                key={label}
                className="relative z-10 flex flex-col items-center gap-4 bg-navy-900 px-3"
              >
                <div
                  className={
                    i === 1
                      ? "flex h-4 w-4 items-center justify-center rounded-full border-2 border-ice-300 bg-navy-900"
                      : "h-2.5 w-2.5 rounded-full border border-silver-400/60 bg-navy-800"
                  }
                />
                <span className="max-w-[7rem] text-[11px] font-semibold uppercase leading-snug tracking-wider text-silver-400 sm:max-w-none">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
