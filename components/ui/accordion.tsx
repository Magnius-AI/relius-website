"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItems: Set<string>;
  toggleItem: (value: string) => void;
  type?: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(
  undefined
);

interface AccordionProps {
  type?: "single" | "multiple";
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ type = "single", children, className }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set());

  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        if (type === "single") {
          newSet.clear();
        }
        newSet.add(value);
      }
      return newSet;
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  return (
    <div
      className={cn("border border-gray-200 rounded-lg overflow-hidden", className)}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value } as React.Attributes & { value: string });
        }
        return child;
      })}
    </div>
  );
}

interface AccordionTriggerProps {
  value?: string;
  children: React.ReactNode;
  className?: string;
}

export function AccordionTrigger({ value, children, className }: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be used within Accordion");

  const { openItems, toggleItem } = context;
  const isOpen = value ? openItems.has(value) : false;
  const contentId = value ? `accordion-content-${value}` : undefined;

  return (
    <button
      onClick={() => value && toggleItem(value)}
      aria-expanded={isOpen}
      aria-controls={contentId}
      className={cn(
        "flex w-full items-center justify-between bg-white px-6 py-4 text-left font-semibold hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-5 w-5 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
        aria-hidden="true"
      />
    </button>
  );
}

interface AccordionContentProps {
  value?: string;
  children: React.ReactNode;
  className?: string;
}

export function AccordionContent({ value, children, className }: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionContent must be used within Accordion");

  const { openItems } = context;
  const isOpen = value ? openItems.has(value) : false;
  const contentId = value ? `accordion-content-${value}` : undefined;

  if (!isOpen) return null;

  return (
    <div
      id={contentId}
      role="region"
      className={cn("px-6 py-4 bg-gray-50", className)}
    >
      {children}
    </div>
  );
}
