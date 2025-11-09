"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "How It Works", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Stories", href: "/stories" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
            <div className="p-2 rounded-xl bg-primary-50 transition-all group-hover:bg-primary-100">
              <Image
                src="/Relius Emblem.png"
                alt="Relius Emblem"
                width={40}
                height={40}
                className="transition-transform group-hover:scale-105"
              />
            </div>
            <span className="text-xl font-bold text-slate-900">Relius</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-7">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm font-semibold leading-6 hover:text-primary focus-visible:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 transition-all duration-200 relative group rounded-sm",
                  isActive ? "text-primary" : "text-slate-700"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-gradient-primary transition-all duration-200",
                  isActive ? "w-full" : "w-0 group-hover:w-full group-focus-visible:w-full"
                )}></span>
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="gradient" size="md" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div id="mobile-menu" role="navigation" className="lg:hidden bg-gradient-to-b from-white to-primary-50/10">
          <div className="space-y-1 px-6 pb-4 pt-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-primary-50 hover:text-primary focus-visible:bg-primary-50 focus-visible:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary transition-all",
                    isActive ? "bg-primary-50 text-primary" : "text-slate-700"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-3">
              <Button variant="gradient" size="md" className="w-full" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
