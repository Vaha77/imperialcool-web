import React from "react";
import clsx from "@/lib/clsx";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("container max-w-8xl", className)}>{children}</div>
  );
}
