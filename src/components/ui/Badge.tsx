import { HTMLAttributes } from "react";
import clsx from "clsx";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error" | "neutral";
}

export function Badge({
  children,
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]",
        {
          "bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900":
            variant === "default",
          "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100":
            variant === "success",
          "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100":
            variant === "warning",
          "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100":
            variant === "error",
          "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300":
            variant === "neutral",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
