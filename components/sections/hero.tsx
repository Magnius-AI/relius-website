import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DecorativeOrb } from "@/components/ui/decorative-orb";
import { ArrowRight } from "lucide-react";
import { CommunityConnectionIllustration } from "@/components/illustrations";
import { DEFAULT_SIGNUP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8 lg:py-32">
      {/* Single subtle decorative accent */}
      <DecorativeOrb variant="accent" position="top-right" size="md" animate />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-balance mb-8 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
          Spend less time managing,<br />more time <span className="gradient-text">ministering</span>
        </h1>

        <p className="text-xl text-slate-700 mb-10 leading-relaxed max-w-2xl mx-auto">
          Church management software that feels like a ministry partner, not a burden. From serving your people to equipping your teams, Relius helps you focus on what matters most.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="gradient" size="lg" asChild className="group shadow-lg">
            <a href={DEFAULT_SIGNUP_URL}>
              See Relius in Action
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="#features">How It Works</Link>
          </Button>
        </div>

        {/* Custom illustration preview */}
        <div className="relative mx-auto max-w-5xl">
          <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="aspect-[5/3] rounded-xl bg-slate-50 flex items-center justify-center relative overflow-hidden">
              <CommunityConnectionIllustration
                className="max-w-3xl"
                title="Welcoming community gathering at Relius"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl px-5 py-4 text-left shadow-md" aria-hidden="true">
                <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">This weekend</p>
                <p className="text-lg font-semibold text-slate-900">48 volunteers scheduled</p>
                <p className="text-sm text-slate-500">All teams confirmed by Friday</p>
              </div>
              <div className="absolute top-6 right-6 bg-primary-600 text-white rounded-full px-4 py-2 text-sm font-semibold shadow-sm" aria-hidden="true">
                Joyful check-ins: <span className="font-bold">312</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
