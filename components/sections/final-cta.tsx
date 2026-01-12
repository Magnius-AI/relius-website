import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DecorativeOrb } from "@/components/ui/decorative-orb";
import { DEFAULT_SIGNUP_URL, AUTH_URLS } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-white py-20 px-6 lg:px-8">
      <div className="absolute inset-0 bg-pattern-dots opacity-10" aria-hidden="true" />
      <DecorativeOrb variant="accent" position="top-right" size="sm" animate />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="rounded-2xl border border-slate-200 bg-white px-8 py-12 text-center shadow-xl sm:px-16 sm:py-16">
          <h2 className="text-balance mb-4 text-slate-900 text-3xl sm:text-4xl font-bold">
            Ready to focus more on ministry?
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join churches that are spending less time managing software and more time caring for people. See how Relius can serve your ministry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="accent" size="lg" asChild className="group shadow-lg">
              <a href={DEFAULT_SIGNUP_URL}>
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <Link href="/contact/">Schedule a Conversation</Link>
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-6">
            Already have an account?{" "}
            <a href={AUTH_URLS.LOGIN} className="text-primary font-semibold hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
