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
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-white hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5":
              variant === "primary",
            "bg-white text-primary border-2 border-primary hover:bg-primary-50":
              variant === "secondary",
            "hover:bg-slate-100 text-slate-700": variant === "ghost",
            "border-2 border-slate-300 hover:border-primary hover:text-primary":
              variant === "outline",
            "bg-gradient-mesh text-white hover:shadow-glow-lg hover:-translate-y-0.5":
              variant === "gradient",
            "bg-accent text-white hover:bg-accent-600 hover:shadow-glow-accent hover:-translate-y-0.5":
              variant === "accent",
          },
          {
            "px-3 py-1.5 text-sm": size === "sm",
            "px-5 py-2.5 text-base": size === "md",
            "px-7 py-3.5 text-lg": size === "lg",
          },
          className
        )}
        ref={ref as any}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button };
