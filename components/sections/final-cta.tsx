"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CircleCheck, Heart, Users } from "lucide-react";
import { DecorativeOrb } from "@/components/ui/decorative-orb";
import { analytics } from "@/lib/analytics";
import { DEFAULT_SIGNUP_URL, AUTH_URLS } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-white py-20 px-6 lg:px-8">
      <div className="absolute inset-0 bg-pattern-dots opacity-10" aria-hidden="true" />
      <DecorativeOrb variant="accent" position="top-right" size="sm" animate />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="rounded-2xl border border-slate-200 bg-white px-8 py-12 text-center shadow-xl sm:px-16 sm:py-16">
          <h2 className="text-balance mb-4 text-slate-900 text-3xl sm:text-4xl font-bold">
            Start managing your church in Relius.
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Start with the Free plan. Keep people, giving, events, and follow-up in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="accent" size="lg" asChild className="group shadow-lg">
              <a
                href={DEFAULT_SIGNUP_URL}
                onClick={() => analytics.trackCTAClick("get_started_free_final", DEFAULT_SIGNUP_URL)}
              >
                Start free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <Link
                href="/contact/"
                onClick={() => analytics.trackCTAClick("schedule_conversation_final", "/contact/")}
              >
                Talk to us
              </Link>
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-6">
            Already have an account?{" "}
            <a href={AUTH_URLS.LOGIN} className="text-primary font-semibold hover:underline">
              Login
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <CircleCheck className="w-4 h-4 text-emerald-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Heart className="w-4 h-4 text-emerald-500" />
              <span>Free plan</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Users className="w-4 h-4 text-blue-500" />
              <span>No member limit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
