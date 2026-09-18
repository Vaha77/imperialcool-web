import React from "react";
import clsx from "@/lib/clsx";

export function Eyebrow({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={clsx("flex items-center gap-3", className)}>
      <span
        className={clsx(
          "h-px w-8",
          light ? "bg-navy-700" : "bg-ice-400/70",
        )}
      />
      <span
        className={clsx(
          "text-[11px] font-semibold uppercase tracking-wider3",
          light ? "text-navy-700" : "text-ice-400/90",
        )}
      >
        {children}
      </span>
    </div>
  );
}
