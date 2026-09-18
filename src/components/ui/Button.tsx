import React from "react";
import clsx from "@/lib/clsx";

type Variant = "primary" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[13px] font-semibold uppercase tracking-wider2 transition-all duration-500 ease-premium";

function styleFor(variant: Variant, disabled?: boolean) {
  if (disabled) {
    return "border border-silver-400/20 text-silver-500 cursor-not-allowed opacity-60";
  }
  return variant === "primary"
    ? "bg-paper text-ink hover:bg-ice-glow"
    : "border border-silver-400/40 text-paper hover:border-ice-400/70 hover:text-ice-300";
}

function Dot() {
  return (
    <span
      aria-hidden
      className="inline-block h-[6px] w-[6px] shrink-0 rounded-full bg-current opacity-70 transition-transform duration-500 ease-premium group-hover:translate-x-1"
    />
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({
  children,
  className,
  variant = "primary",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(base, styleFor(variant, disabled), className)}
      disabled={disabled}
      {...props}
    >
      <span>{children}</span>
      <Dot />
    </button>
  );
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a className={clsx(base, styleFor(variant), className)} {...props}>
      <span>{children}</span>
      <Dot />
    </a>
  );
}
