import clsx from "@/lib/clsx";

export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute inset-0 bg-grid-line [background-size:56px_56px] mask-fade-b",
        className,
      )}
    />
  );
}
