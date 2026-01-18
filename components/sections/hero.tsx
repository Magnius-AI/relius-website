import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, RefreshCw } from "lucide-react";

import { DEFAULT_SIGNUP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern-grid opacity-[0.03]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-radial-primary opacity-30 blur-3xl -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 -z-10 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10 animate-pulse-glow [animation-delay:1s]" />

      <div className="container-width relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Halo Content Wrapper */}
          <div className="relative w-full">
            {/* CSS-based Golden Halo Border */}
            <div
              className="absolute -inset-4 sm:-inset-6 md:-inset-8 lg:-inset-10 rounded-3xl pointer-events-none z-0"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f4e4a6 25%, #d4af37 50%, #b8960c 75%, #d4af37 100%)',
                padding: '3px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            {/* Outer glow */}
            <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 lg:-inset-10 rounded-3xl bg-gradient-to-br from-amber-200/40 via-yellow-100/20 to-amber-200/40 blur-xl pointer-events-none -z-10 animate-pulse-glow" />

            {/* Content inside the halo */}
            <div className="relative z-10 py-8">
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-sm font-medium animate-fade-in-up hover:border-accent-200 hover:text-accent-600 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                </span>
                New: AI-Powered Ministry Insights
              </div>

              <Link
                href="/switch/"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium animate-fade-in-up [animation-delay:100ms] hover:bg-emerald-100 transition-colors"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Easy migration from Planning Center, ChurchTrac & Tithe.ly
              </Link>
            </div>

              <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 animate-fade-in-up [animation-delay:200ms]">
                AI church management software that gives your team{" "}
                <span className="text-gradient-accent relative inline-block">
                  time back
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>{" "}
                for ministry
              </h1>

              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms]">
                Save 10+ hours weekly on content, scheduling, and admin—so you can focus on people. From serving members to equipping teams, Relius helps you do what matters most.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 w-full sm:w-auto animate-fade-in-up [animation-delay:600ms]">
                <Button
                  variant="primary"
                  size="lg"
                  className="shadow-xl hover:shadow-2xl h-14 px-8 text-lg rounded-full"
                  asChild
                >
                  <a href={DEFAULT_SIGNUP_URL}>
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg rounded-full group border-2"
                  asChild
                >
                  <Link href="/switch/" className="flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-slate-400 group-hover:text-accent-500 transition-colors" />
                    See How Churches Switch
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500 animate-fade-in-up [animation-delay:800ms]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-500" />
                  <span>7-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
