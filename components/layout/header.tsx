"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { DEFAULT_SIGNUP_URL } from "@/lib/constants";

const navigation = [
  { name: "Features", href: "/features" },
  { name: "AI", href: "/ai" },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm"
          : "bg-transparent"
        }`}
    >
      <nav
        className="container-width flex items-center justify-between py-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
            <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/relius_emblem_circle.png"
                alt="Relius Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-primary tracking-tight">
              Relius
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium leading-6 text-secondary hover:text-accent transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 items-center">
          <Link
            href="https://platform.relius.ai"
            className="text-sm font-semibold leading-6 text-primary hover:text-accent transition-colors"
          >
            Log in
          </Link>
          <Link
            href={DEFAULT_SIGNUP_URL}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-accent hover:shadow-accent/25 transition-all duration-300 flex items-center gap-2 group"
          >
            Get started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        <div
          className={`fixed inset-0 bg-primary/20 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/relius_emblem_circle.png"
                  alt="Relius Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-primary">Relius</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary hover:bg-gray-50 hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-4">
                <Link
                  href="https://platform.relius.ai"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary hover:bg-gray-50 hover:text-accent transition-colors"
                >
                  Log in
                </Link>
                <Link
                  href={DEFAULT_SIGNUP_URL}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-primary px-3 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent transition-colors"
                >
                  Get started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
