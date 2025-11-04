import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DecorativeOrb } from "@/components/ui/decorative-orb";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh-primary px-6 py-16 lg:px-8 lg:py-20">
      {/* Subtle decorative accents */}
      <DecorativeOrb variant="primary" position="top-right" size="lg" animate />
      <DecorativeOrb variant="accent" position="bottom-left" size="md" animate />

      {/* Single subtle background pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-50" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div role="status" className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-1.5 text-sm font-semibold text-primary border border-primary-200/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Now in Beta
        </div>

        <h1 className="text-balance mb-5">
          Run your church with <span className="gradient-text">clarity</span>. Simplify operations to focus on mission.
        </h1>

        <p className="text-xl text-slate-800 mb-7 leading-relaxed max-w-3xl mx-auto">
          Relius combines a complete Church Management System with built-in AI for sermons, events, giving, volunteers, and care so leaders can focus on people.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
          <Button variant="gradient" size="lg" asChild className="group shadow-glow-lg">
            <Link href="/contact">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="#features">Explore Features</Link>
          </Button>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -inset-3 bg-gradient-mesh rounded-3xl blur-2xl opacity-20" aria-hidden="true" />
          <div className="relative rounded-xl border border-primary-200 bg-white p-1.5 shadow-lg hover-lift">
            <div className="aspect-video bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-lg flex items-center justify-center relative overflow-hidden border border-slate-100">
              <div className="absolute inset-0 bg-pattern-grid opacity-30" aria-hidden="true" />
              <div className="text-slate-600 text-center relative z-10">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <p className="text-sm font-semibold gradient-text">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
