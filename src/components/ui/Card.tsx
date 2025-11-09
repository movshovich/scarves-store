import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered";
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, variant = "default", padding = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "rounded-3xl transition-all duration-200",
          {
            // Variants
            "bg-white dark:bg-neutral-900": variant === "default",
            "border border-[color:var(--border)] bg-white shadow-sm dark:bg-neutral-900":
              variant === "bordered",
            "bg-white shadow-[var(--shadow)] dark:bg-neutral-900":
              variant === "elevated",
            // Padding
            "p-0": padding === "none",
            "p-4": padding === "sm",
            "p-6": padding === "md",
            "p-8": padding === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx("space-y-2", className)} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={clsx("text-xl font-semibold text-neutral-900 dark:text-neutral-100", className)}
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={clsx("text-sm text-neutral-600 dark:text-neutral-400", className)}
      {...props}
    >
      {children}
    </p>
  );
};

export const CardContent = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx("", className)} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx("flex items-center gap-4", className)} {...props}>
      {children}
    </div>
  );
};
