import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import { CommunityConnectionIllustration } from "@/components/illustrations";
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-sm font-medium mb-8 animate-fade-in-up hover:border-accent-200 hover:text-accent-600 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
            </span>
            New: AI-Powered Ministry Insights
          </div>

          <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 animate-fade-in-up [animation-delay:200ms]">
            Spend less time managing,<br />
            more time <span className="text-gradient-accent relative inline-block">
              ministering
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms]">
            Church management software that feels like a ministry partner. From serving people to equipping teams, Relius helps you focus on what matters most.
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
              <Link href="#features" className="flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-slate-400 group-hover:text-accent-500 transition-colors" />
                How It Works
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500 mb-20 animate-fade-in-up [animation-delay:800ms]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mx-auto max-w-6xl animate-fade-in-up [animation-delay:1000ms]">
          <div className="relative rounded-2xl border border-slate-200/60 bg-white/50 backdrop-blur-sm p-2 shadow-2xl shadow-slate-200/50">
            <div className="absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-white to-transparent z-20" />
            <div className="aspect-[16/9] rounded-xl bg-slate-50 overflow-hidden border border-slate-100 relative group">
              <CommunityConnectionIllustration
                className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                title="Relius Dashboard Interface"
              />

              {/* Floating Cards */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-lg animate-float hidden md:block hover:scale-105 transition-transform duration-300 cursor-default">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 font-bold ring-2 ring-white">
                    JD
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">John Doe</p>
                    <p className="text-xs text-slate-500">Volunteer Team Lead</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md w-fit">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Checked in 9:45 AM
                </div>
              </div>

              <div className="absolute top-8 right-8 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-lg animate-float [animation-delay:2s] hidden md:block hover:scale-105 transition-transform duration-300 cursor-default">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Weekly Giving</p>
                <p className="text-2xl font-bold text-white mb-2">$12,450</p>
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    12%
                  </span>
                  <span className="text-slate-500">vs last week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Glow behind dashboard */}
          <div className="absolute -inset-4 bg-gradient-to-r from-accent-500/20 to-purple-500/20 blur-3xl -z-10 opacity-50 rounded-[3rem]" />
        </div>
      </div>
    </section>
  );
}
