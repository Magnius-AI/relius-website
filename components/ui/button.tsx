import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "gradient" | "accent";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-white shadow-md hover:bg-primary-600 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0":
              variant === "primary",
            "bg-white text-primary border-2 border-primary/25 shadow-sm hover:bg-secondary-50 hover:border-primary/40 active:bg-secondary-100":
              variant === "secondary",
            "hover:bg-primary-100 text-primary-700 hover:text-primary-800": variant === "ghost",
            "border-2 border-primary/20 text-primary hover:border-primary/50 hover:bg-secondary-50 active:bg-secondary-100":
              variant === "outline",
            "text-white shadow-md hover:shadow-glow-lg hover:-translate-y-0.5 active:translate-y-0":
              variant === "gradient",
            "bg-primary text-white shadow-md hover:bg-primary-600 hover:shadow-glow-accent hover:-translate-y-0.5 active:translate-y-0":
              variant === "accent",
          },
          {
            "px-3 py-1.5 text-sm": size === "sm",
            "px-5 py-2.5 text-base": size === "md",
            "px-7 py-3.5 text-lg": size === "lg",
          },
          className
        )}
        style={(variant === "gradient" || variant === "primary" || variant === "accent") ? { backgroundColor: "#1e3a5f" } : undefined}
        ref={ref as any}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button };
