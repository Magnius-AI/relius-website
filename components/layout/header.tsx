"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Product", href: "/features" },
    { name: "AI Features", href: "/ai" },
    { name: "Pricing", href: "/pricing" },
    {
      name: "Resources",
      href: "#",
      submenu: [
        { name: "Documentation", href: "/docs" },
        { name: "Blog", href: "/blog" },
      ],
    },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-200/30 glass shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
            <div className="p-1 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 transition-all group-hover:shadow-glow">
              <Image
                src="/Relius Emblem.png"
                alt="Relius Emblem"
                width={36}
                height={36}
                className="transition-transform group-hover:scale-105"
              />
            </div>
            <span className="text-xl font-bold gradient-text">Relius</span>
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
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-slate-700 hover:text-primary focus-visible:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 transition-all duration-200 relative group rounded-sm"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full group-focus-visible:w-full transition-all duration-200"></span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="gradient" size="md" asChild>
            <Link href="/contact">Book a Demo</Link>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div id="mobile-menu" role="navigation" className="lg:hidden bg-gradient-to-b from-white to-primary-50/10">
          <div className="space-y-1 px-6 pb-4 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-primary-50 hover:text-primary focus-visible:bg-primary-50 focus-visible:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3">
              <Button variant="gradient" size="md" className="w-full" asChild>
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
