import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { coreFeatures, aiFeatures } from "@/data/features";
import { BreadcrumbSchema } from "@/components/seo/structured-data";
import { FAQSchema } from "@/components/seo/faq-schema";

export const metadata: Metadata = {
  title: "Church Management Software Features",
  description:
    "Relius features: people management, online giving, kids check-in, groups, events, service planning, pastoral care, and practical AI workflows.",
  alternates: {
    canonical: "https://relius.ai/features/",
  },
  keywords: [
    "church management features",
    "volunteer scheduling software",
    "church giving tools",
    "pastoral care tracking",
    "church automation",
    "free church software features",
  ],
  openGraph: {
    title: "Free Church Management Features | Relius",
    description:
      "People, giving, events, groups, check-in, pastoral care, and AI workflows in one calm church operating system.",
    url: "https://relius.ai/features/",
    images: [{ url: "/og-relius-2026.png", width: 1200, height: 630, alt: "Relius Church Management Features" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Church Management Features | Relius",
    description:
      "People, giving, events, groups, check-in, pastoral care, and AI workflows in one calm church operating system.",
  },
};

const featureFAQs = [
  {
    question: "What features does Relius include?",
    answer:
      "Relius includes people management, groups, events, check-in, online giving, reporting, pastoral care workflows, service planning, communications, and AI-assisted tools depending on plan.",
  },
  {
    question: "Is Relius really free to start?",
    answer:
      "Yes. The Free plan includes core church management and online giving with unlimited members. Donations include standard processor fees plus the Relius platform fee.",
  },
  {
    question: "Which AI features are available?",
    answer:
      "Relius includes AI workflows for sermon preparation, content repurposing, pastoral care, giving insights, translation, and ministry recommendations on eligible plans.",
  },
];

const workflowHighlights = [
  "One profile for every person, family, donation, note, and next step",
  "Free core workflows with transparent giving economics",
  "Upgrade paths for pastoral care, services, communications, and AI",
];

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://relius.ai/" },
          { name: "Features", url: "https://relius.ai/features/" },
        ]}
      />
      <FAQSchema faqs={featureFAQs} id="features-faq-schema" />

      <main className="bg-white">
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-16 lg:px-8 lg:py-24">
          <div className="absolute inset-0 bg-pattern-grid opacity-[0.025]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-600">
                Ministry operating system
              </p>
              <h1 className="mb-6 text-balance text-4xl font-bold text-slate-950 md:text-5xl">
                One calm place to run the work behind ministry
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-600">
                Relius keeps people, giving, teams, events, care, and AI-assisted tasks connected so your staff can move from scattered administration to clear next steps.
              </p>

              <div className="mb-8 grid gap-3 sm:grid-cols-3">
                {workflowHighlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <CheckCircle2 className="mb-3 h-5 w-5 text-emerald-500" />
                    <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/pricing/">
                    Start free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact/">Talk through your workflows</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <Image
                  src="/images/features-hero.webp"
                  alt="Church building with a rose window"
                  width={600}
                  height={400}
                  className="mb-5 h-auto w-full rounded-xl object-contain"
                  priority
                />
                <div className="grid gap-3 sm:grid-cols-3">
                  {["People", "Giving", "Care"].map((label) => (
                    <div key={label} className="rounded-xl bg-white p-3 text-center shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
                      <p className="text-sm font-bold text-slate-900">Connected</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-600">Core workflows</p>
              <h2 className="text-3xl font-bold text-slate-900">Free essentials that do not feel stripped down</h2>
              <p className="mt-3 text-slate-600">
                Start with the daily work every church needs, then add advanced care, services, communications, and AI when your team is ready.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {coreFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.id} id={feature.id} className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-5 flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50">
                        <Icon className="h-6 w-6 text-primary-700" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {feature.highlights.slice(0, 4).map((highlight) => (
                        <li key={highlight} className="flex gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-accent-50 px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-700">AI that stays practical</p>
                <h2 className="text-3xl font-bold text-slate-900">Use AI where it saves staff time</h2>
                <p className="mt-3 text-slate-600">
                  Relius AI helps draft, summarize, translate, and surface patterns. It supports ministry judgement instead of replacing it.
                </p>
              </div>
              <Badge className="w-fit border-accent-200 bg-white text-accent-700">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                Available on Ministry AI
              </Badge>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {aiFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.id} id={feature.id} className="scroll-mt-24 rounded-2xl border border-accent-100 bg-white p-6 shadow-sm">
                    <div className="mb-5 flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-50">
                        <Icon className="h-6 w-6 text-accent-700" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {feature.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight} className="flex gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-600" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center md:p-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-600">See it together</p>
            <h2 className="mb-4 text-3xl font-bold text-slate-900">Map Relius to your ministry week</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
              Bring your current tools, volunteer rhythms, giving setup, and care process. We will show where Relius fits and where it should stay out of the way.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact/">Schedule a conversation</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/pricing/">Compare plans</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
