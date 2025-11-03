import * as React from "react";
import { cn } from "@/lib/utils";

export interface DecorativeOrbProps {
  variant?: "primary" | "accent" | "mixed";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

const DecorativeOrb: React.FC<DecorativeOrbProps> = ({
  variant = "primary",
  position = "top-right",
  size = "md",
  animate = false,
}) => {
  const positionClasses = {
    "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-48 h-48",
    lg: "w-72 h-72",
    xl: "w-96 h-96",
  };

  const variantClasses = {
    primary: "decorative-accent-primary",
    accent: "decorative-accent-cyan",
    mixed: "decorative-accent-primary",
  };

  return (
    <>
      <div
        className={cn(
          "decorative-accent absolute pointer-events-none z-0",
          positionClasses[position],
          sizeClasses[size],
          variantClasses[variant],
          animate && "animate-float"
        )}
      />
      {variant === "mixed" && (
        <div
          className={cn(
            "decorative-accent decorative-accent-cyan absolute pointer-events-none z-0",
            position === "top-right" && "top-20 right-20",
            position === "top-left" && "top-20 left-20",
            position === "bottom-right" && "bottom-20 right-20",
            position === "bottom-left" && "bottom-20 left-20",
            position === "center" && "top-1/3 left-1/3",
            sizeClasses[size === "xl" ? "lg" : size === "lg" ? "md" : "sm"],
            animate && "animate-float",
            "animation-delay-1000"
          )}
        />
      )}
    </>
  );
};

export { DecorativeOrb };
