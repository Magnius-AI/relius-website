import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "error";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        {
          "bg-primary-50 text-primary-700 border border-primary/30": variant === "default",
          "bg-secondary-100 text-primary-700 border border-secondary-200": variant === "secondary",
          "bg-green-100 text-green-800 border border-green-200": variant === "success",
          "bg-yellow-100 text-yellow-800 border border-yellow-200": variant === "warning",
          "bg-red-100 text-red-800 border border-red-200": variant === "error",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
