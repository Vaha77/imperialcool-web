"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import {
  IconBrandTag,
  IconCustomer,
  IconFactory,
  IconGauge,
} from "@/components/visuals/FlowIcons";

const icons = [IconFactory, IconGauge, IconBrandTag, IconCustomer];

export function ChinaCooperation() {
  const { dict } = useLocale();

  return (
    <section id="cooperation" className="relative bg-navy-900 py-28 sm:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{dict.china.eyebrow}</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold uppercase leading-tight tracking-tighter text-paper sm:text-4xl">
                {dict.china.headline}
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-silver-400">
                {dict.china.body}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <StaggerGroup
              stagger={0.15}
              className="relative grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4"
            >
              {/* connecting line */}
              <div className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px sm:block">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "left" }}
                  className="h-px w-full bg-gradient-to-r from-ice-400/60 via-silver-400/30 to-transparent"
                />
              </div>

              {dict.china.flow.map((step, i) => {
                const Icon = icons[i];
                return (
                  <StaggerItem key={step} className="relative">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-silver-400/30 bg-navy-800 text-ice-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider2 text-silver-500">
                      0{i + 1}
                    </div>
                    <div className="mt-2 text-[13px] font-semibold uppercase leading-snug tracking-wide text-paper">
                      {step}
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>

            <Reveal delay={0.3}>
              <p className="mt-14 max-w-lg border-t border-silver-400/15 pt-6 text-[13px] leading-relaxed text-silver-500">
                {dict.china.flowCaption}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
