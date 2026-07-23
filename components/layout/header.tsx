"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { DEFAULT_SIGNUP_URL } from "@/lib/constants";
import { analytics } from "@/lib/analytics";

const navigation = [
  { name: "Features", href: "/features/" },
  { name: "AI", href: "/ai/" },
  { name: "Pricing", href: "/pricing/" },
  { name: "Switch", href: "/switch/" },
  { name: "Resources", href: "/resources/" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const wasMobileMenuOpenRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      if (wasMobileMenuOpenRef.current) {
        menuButtonRef.current?.focus();
      }
      wasMobileMenuOpenRef.current = false;
      return;
    }

    wasMobileMenuOpenRef.current = true;
    const menu = mobileMenuRef.current;
    const focusable = () =>
      Array.from(
        menu?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [],
      );

    focusable()[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const elements = focusable();
      if (elements.length === 0) return;

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-white border-b border-gray-200 shadow-sm"
            : "bg-transparent"
          }`}
      >
        <nav
          className="container-width flex items-center justify-between py-4"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="-m-1.5 p-1.5 flex items-center gap-2 group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
            >
              <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/relius_emblem_circle.png"
                  alt=""
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
              ref={menuButtonRef}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Open main menu"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-7">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative flex min-h-11 items-center text-sm font-medium leading-6 text-secondary transition-colors hover:text-accent group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-4"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 items-center">
            <Link
              href="https://app.relius.ai"
              className="flex min-h-11 items-center rounded-sm text-sm font-semibold leading-6 text-primary hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-4"
            >
              Log in
            </Link>
            <Link
              href={DEFAULT_SIGNUP_URL}
              onClick={() => analytics.trackCTAClick("get_started_free_header", DEFAULT_SIGNUP_URL)}
              className="flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-accent hover:shadow-accent/25 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
            >
              Start free
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile menu rendered outside <header> to avoid backdrop-filter containing block issues */}
      <div
        className={`lg:hidden fixed inset-0 z-50 ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className={`fixed inset-0 z-50 overflow-y-auto bg-white px-6 py-6 sm:inset-y-0 sm:right-0 sm:left-auto sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5 flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative w-8 h-8">
                <Image
                  src="/relius_emblem_circle.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-primary">Relius</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close main menu"
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
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary hover:bg-gray-50 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-4">
                <Link
                  href="https://app.relius.ai"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary hover:bg-gray-50 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href={DEFAULT_SIGNUP_URL}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-primary px-3 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                  onClick={() => {
                    analytics.trackCTAClick("get_started_free_header_mobile", DEFAULT_SIGNUP_URL);
                    setMobileMenuOpen(false);
                  }}
                >
                  Start free
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
