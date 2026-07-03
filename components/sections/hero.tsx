"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, CheckCircle2, HeartHandshake, RefreshCw, ShieldCheck, Sparkles, Users } from "lucide-react";
import { analytics } from "@/lib/analytics";
import { DEFAULT_SIGNUP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="absolute inset-0 bg-pattern-grid opacity-[0.03]" />
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-accent-50/80 to-transparent" />

      <div className="container-width relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="max-w-3xl">
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 shadow-sm animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Free plan, no credit card required
              </div>

              <Link
                href="/switch/"
                className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-white px-4 py-1.5 text-sm font-semibold text-accent-700 shadow-sm transition-colors hover:bg-accent-50 animate-fade-in-up [animation-delay:100ms]"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Guided migration from Planning Center, ChurchTrac, and Tithe.ly
              </Link>
            </div>

            <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-slate-950 animate-fade-in-up [animation-delay:200ms] md:text-6xl lg:text-7xl">
              Church management that feels{" "}
              <span className="text-gradient-accent">
                built for ministry
              </span>
            </h1>

            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-slate-600 animate-fade-in-up [animation-delay:400ms]">
              Relius brings people, giving, groups, check-in, events, and AI-assisted workflows into one calm operating system. Start free, keep your data together, and upgrade only when your ministry needs more depth.
            </p>

            <div className="mb-10 flex w-full flex-col gap-4 animate-fade-in-up [animation-delay:600ms] sm:w-auto sm:flex-row sm:items-center">
              <Button
                variant="primary"
                size="lg"
                className="h-14 rounded-full px-8 text-lg shadow-xl hover:shadow-2xl"
                asChild
              >
                <a
                  href={DEFAULT_SIGNUP_URL}
                  onClick={() => analytics.trackCTAClick("get_started_free_hero", DEFAULT_SIGNUP_URL)}
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group h-14 rounded-full border-2 px-8 text-lg"
                asChild
              >
                <Link
                  href="/switch/"
                  className="flex items-center gap-2"
                  onClick={() => analytics.trackCTAClick("see_how_churches_switch_hero", "/switch/")}
                >
                  <RefreshCw className="h-5 w-5 text-slate-400 transition-colors group-hover:text-accent-500" />
                  See Migration Paths
                </Link>
              </Button>
            </div>

            <div className="grid gap-3 text-sm text-slate-600 animate-fade-in-up [animation-delay:800ms] sm:grid-cols-3">
              {[
                "Unlimited members",
                "Transparent giving fees",
                "AI where it saves time",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-up [animation-delay:500ms]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70">
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white text-slate-900">
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">Sunday readiness</p>
                    <p className="text-lg font-bold text-slate-950">Grace Community Dashboard</p>
                  </div>
                  <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Live
                  </div>
                </div>

                <div className="grid gap-4 p-5 sm:grid-cols-3">
                  {[
                    { label: "People", value: "1,248", icon: Users },
                    { label: "Giving", value: "$42.8k", icon: ShieldCheck },
                    { label: "Events", value: "18", icon: CalendarDays },
                  ].map((metric) => {
                    const Icon = metric.icon;
                    return (
                      <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <Icon className="mb-3 h-5 w-5 text-accent-600" />
                        <p className="text-2xl font-bold text-slate-950">{metric.value}</p>
                        <p className="text-xs font-medium text-slate-500">{metric.label}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="grid gap-4 border-t border-slate-200 bg-slate-50 p-5 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm font-bold text-slate-900">Care queue</p>
                      <HeartHandshake className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="space-y-3">
                      {[
                        ["New guest follow-up", "4 families"],
                        ["Prayer requests", "12 open"],
                        ["Volunteer rest alerts", "3 people"],
                      ].map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                          <span className="text-sm text-slate-700">{label}</span>
                          <span className="text-xs font-semibold text-slate-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-accent-200 bg-accent-50 p-4">
                    <div className="mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-accent-700" />
                      <p className="text-sm font-bold text-accent-900">AI ministry prompt</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-700">
                      Draft a volunteer appreciation message for everyone who served three Sundays this month, with a warm pastoral tone.
                    </p>
                    <div className="mt-4 h-2 w-3/4 rounded-full bg-accent-200" />
                    <div className="mt-2 h-2 w-1/2 rounded-full bg-accent-100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-800 shadow-sm">
              Giving includes standard processor fees plus a 1.3% Relius platform fee. Donors can cover fees when they give.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
