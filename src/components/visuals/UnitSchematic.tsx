"use client";

import { motion, useReducedMotion } from "framer-motion";
import clsx from "@/lib/clsx";

/**
 * Abstract, technical line-art rendering of an industrial refrigeration
 * condensing unit — chassis, compressor, coil piping, fins, nameplate and
 * mounting bolts. Intentionally schematic rather than photographic: a
 * blueprint-grade illustration reads as precise and premium, and avoids
 * depending on stock photography that isn't available yet.
 *
 * Swap this component for real product photography once IMPERIAL COOL
 * supplies it — see the "photography" note in each section file.
 */
export function UnitSchematic({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: prefersReducedMotion ? 0.01 : 2.2,
          delay: prefersReducedMotion ? 0 : 0.15 * i,
          ease: [0.16, 1, 0.3, 1],
        },
        opacity: { duration: 0.4, delay: 0.15 * i },
      },
    }),
  };

  return (
    <svg
      viewBox="0 0 900 700"
      fill="none"
      className={clsx("h-full w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7ACCEA" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#7ACCEA" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="chassisStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D7DEE6" />
          <stop offset="100%" stopColor="#7ACCEA" />
        </linearGradient>
      </defs>

      <ellipse cx="450" cy="560" rx="280" ry="46" fill="url(#glow)" />

      {/* Chassis */}
      <motion.rect
        x="180"
        y="170"
        width="540"
        height="360"
        rx="14"
        stroke="url(#chassisStroke)"
        strokeWidth="1.4"
        custom={0}
        variants={draw}
        initial="hidden"
        animate="visible"
      />

      {/* Mounting bolts */}
      {[
        [200, 190],
        [700, 190],
        [200, 510],
        [700, 510],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="5"
          stroke="#AEB9C6"
          strokeWidth="1.2"
          custom={1 + i * 0.2}
          variants={draw}
          initial="hidden"
          animate="visible"
        />
      ))}

      {/* Compressor body */}
      <motion.rect
        x="240"
        y="330"
        width="150"
        height="150"
        rx="75"
        stroke="#D7DEE6"
        strokeWidth="1.3"
        custom={1.4}
        variants={draw}
        initial="hidden"
        animate="visible"
      />
      <motion.circle
        cx="315"
        cy="405"
        r="46"
        stroke="#7ACCEA"
        strokeWidth="1"
        custom={1.7}
        variants={draw}
        initial="hidden"
        animate="visible"
      />

      {/* Condenser fins */}
      {Array.from({ length: 9 }).map((_, i) => (
        <motion.line
          key={i}
          x1={470}
          y1={210 + i * 24}
          x2={690}
          y2={210 + i * 24}
          stroke="#8B97A6"
          strokeWidth="1"
          custom={1.2 + i * 0.06}
          variants={draw}
          initial="hidden"
          animate="visible"
        />
      ))}

      {/* Copper piping — condenser coil */}
      <motion.path
        d="M 240 300 C 300 260, 340 260, 360 300 C 380 340, 420 340, 440 300 C 460 260, 500 260, 520 300 C 540 340, 580 340, 600 300"
        stroke="#7ACCEA"
        strokeWidth="1.6"
        strokeLinecap="round"
        custom={2.2}
        variants={draw}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M 260 500 L 260 560 L 640 560 L 640 500"
        stroke="#AEB9C6"
        strokeWidth="1.2"
        strokeLinecap="round"
        custom={2.6}
        variants={draw}
        initial="hidden"
        animate="visible"
      />

      {/* Nameplate */}
      <motion.rect
        x="410"
        y="400"
        width="150"
        height="46"
        rx="4"
        stroke="#D7DEE6"
        strokeWidth="1"
        custom={2.9}
        variants={draw}
        initial="hidden"
        animate="visible"
      />
      <motion.text
        x="485"
        y="428"
        textAnchor="middle"
        fontSize="11"
        letterSpacing="2"
        fill="#DFF6FD"
        fontFamily="-apple-system, Segoe UI, Roboto, Arial, sans-serif"
        fontWeight={700}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 2.6, duration: 0.6 }}
      >
        IMPERIAL COOL
      </motion.text>

      {/* base line */}
      <motion.line
        x1="140"
        y1="560"
        x2="760"
        y2="560"
        stroke="#8B97A6"
        strokeWidth="1"
        custom={3.1}
        variants={draw}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
}
