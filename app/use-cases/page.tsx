import { Metadata } from "next";
import Link from "next/link";
import { useCases, useCaseFilters } from "@/data/use-cases";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UseCasesFilterGrid } from "@/components/sections/use-cases-filter-grid";
import { Lightbulb, ArrowRight, Sparkles } from "lucide-react";

const featuredUseCase = useCases[0]!;

export const metadata: Metadata = {
  title: "Use Cases - See What's Possible",
  description: "Explore how Relius helps churches of all sizes streamline operations, coordinate volunteers, and care for people better.",
  alternates: {
    canonical: "https://relius.ai/use-cases/",
  },
  openGraph: {
    title: "See What's Possible with Relius",
    description: "Explore real-world scenarios showing how Relius can serve your church.",
    url: "https://relius.ai/use-cases/",
  },
  twitter: {
    card: "summary_large_image",
    title: "See What's Possible with Relius",
    description: "Explore real-world scenarios showing how Relius can serve your church.",
  },
  keywords: ["church management use cases", "church software examples", "volunteer coordination", "pastoral care tracking"],
};

export default function UseCasesPage() {
  return (
    <div className="py-16 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl space-y-16">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-3">Use Cases</p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">See what's possible</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Explore how churches like yours could use Relius to spend less time on logistics and more time on ministry. These scenarios show the kinds of challenges we're built to solve.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="gradient" asChild>
                <Link href="/contact/">Schedule a Demo</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/features/">Explore Features</Link>
              </Button>
            </div>
          </div>
          <Card className="border border-slate-200 shadow-lg">
            <CardContent className="p-6 space-y-6">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 flex items-center justify-center">
                <Lightbulb className="w-24 h-24 text-primary-600" />
              </div>
              <div className="flex items-start gap-4">
                <Sparkles className="w-10 h-10 text-accent" />
                <div>
                  <p className="text-lg text-slate-700">
                    We're building Relius with input from church leaders who want software that feels pastoral, not corporate.
                  </p>
                  <p className="text-sm font-semibold text-primary-600 mt-3">Join our founding churches</p>
                  <p className="text-sm text-slate-500">Be part of shaping the future of church software</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-12 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary-600">Featured Use Case</span>
                <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">{featuredUseCase.churchSize}</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">{featuredUseCase.title}</h2>
              <p className="text-lg text-slate-600">{featuredUseCase.subtitle}</p>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-800 mb-2">The Challenge</p>
                  <p className="text-slate-600">{featuredUseCase.challenge}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-2">How Relius Helps</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    {featuredUseCase.capabilities.slice(0, 3).map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={`/use-cases/${featuredUseCase.slug}`}
                className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800"
              >
                See full use case <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6">
              <div className="grid gap-4">
                {featuredUseCase.keyFeatures.map((feature) => (
                  <div key={feature.label} className="rounded-2xl border border-slate-100 bg-white px-4 py-3">
                    <p className="text-xs uppercase text-slate-500">{feature.label}</p>
                    <p className="text-sm font-medium text-slate-900">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary-50 rounded-xl">
                <p className="text-sm text-primary-700">
                  <strong>Potential outcomes:</strong> {featuredUseCase.outcomes[0]}
                </p>
              </div>
            </div>
          </div>
        </section>

        <UseCasesFilterGrid useCases={useCases.slice(1)} filters={useCaseFilters} />

        <section className="text-center rounded-3xl border border-primary/20 bg-gradient-to-br from-primary-50 to-white p-12 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-700 mb-2">Ready to explore?</p>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">See how Relius could work for your church</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Every church is different. Schedule a conversation to see how Relius fits your specific needs and workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact/">Schedule a Demo</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/features/">Explore Features</Link>
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-6">No pressure, no sales pitch - just an honest conversation.</p>
        </section>
      </div>
    </div>
  );
}
