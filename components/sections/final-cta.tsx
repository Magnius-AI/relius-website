import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DecorativeOrb } from "@/components/ui/decorative-orb";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-mesh-primary py-16 px-6 lg:px-8">
      <div className="absolute inset-0 bg-pattern-dots opacity-30" aria-hidden="true" />
      <DecorativeOrb variant="accent" position="top-right" size="lg" animate />
      <DecorativeOrb variant="primary" position="bottom-left" size="md" animate />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="rounded-2xl border border-primary-200/50 bg-white/90 px-8 py-10 text-center shadow-lg backdrop-blur-sm sm:px-12 sm:py-12">
          <h2 className="text-balance mb-3 text-slate-900 text-3xl sm:text-4xl font-semibold">
            See Relius in Action
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Discover how Relius can help your church save time, increase engagement, and focus on what matters most: your people.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button variant="gradient" size="lg" asChild className="group">
              <Link href="/contact">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="border-2 border-primary/20 text-primary hover:bg-primary/5"
            >
              <Link href="/contact">Join the Beta</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
