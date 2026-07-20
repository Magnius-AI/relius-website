"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, RefreshCw, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analytics } from "@/lib/analytics";
import { DEFAULT_SIGNUP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
      <div className="absolute inset-0 bg-pattern-grid opacity-[0.025]" aria-hidden="true" />
      <div className="container-width relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-7 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              Free to get started
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-600">
              <Smartphone className="h-4 w-4 text-blue-600" aria-hidden="true" />
              Mobile apps coming soon
            </span>
          </div>

          <h1 className="text-balance text-5xl font-bold tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            Church management, giving, and AI—together in Relius
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Manage people, plan ministry, track giving, and use practical AI tools from one modern platform built for church teams.
          </p>

          <div className="mt-9 flex flex-col items-center">
            <Button variant="primary" size="lg" className="h-14 min-w-56 rounded-full px-8 text-lg shadow-lg" asChild>
              <a
                href={DEFAULT_SIGNUP_URL}
                onClick={() => analytics.trackCTAClick("get_started_free_hero", DEFAULT_SIGNUP_URL)}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <p className="mt-4 text-sm text-slate-500">Free forever · No credit card required · Unlimited members</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-slate-200 pt-7 text-sm text-slate-600">
            <span>Already using another system?</span>
            <Link
              href="/switch/"
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-slate-900 hover:text-blue-700 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => analytics.trackCTAClick("see_how_churches_switch_hero", "/switch/")}
            >
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              See how switching works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
