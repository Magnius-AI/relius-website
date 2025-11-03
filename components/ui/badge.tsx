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
          "bg-primary-100 text-primary-700 border border-primary-200": variant === "default",
          "bg-slate-100 text-slate-700 border border-slate-200": variant === "secondary",
          "bg-green-100 text-green-700 border border-green-200": variant === "success",
          "bg-yellow-100 text-yellow-700 border border-yellow-200": variant === "warning",
          "bg-red-100 text-red-700 border border-red-200": variant === "error",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
