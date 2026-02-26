import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/structured-data";
import { FAQSchema } from "@/components/seo/faq-schema";

export const metadata: Metadata = {
  title: "Church Management Software Comparison 2026 | Free Feature Matrix",
  description:
    "Compare Relius vs Planning Center vs ChurchTrac vs Tithe.ly vs Pushpay. See features, pricing, and AI capabilities side-by-side. Find the best church software for your ministry.",
  keywords: [
    "church management software comparison",
    "planning center vs relius",
    "churchtrac vs relius",
    "tithely vs relius",
    "pushpay vs relius",
    "best church software 2026",
    "free church management software",
    "church software comparison chart",
  ],
  alternates: {
    canonical: "https://relius.ai/compare/",
  },
  openGraph: {
    title: "Church Management Software Comparison 2026 | Free Feature Matrix",
    description:
      "Compare Relius vs Planning Center vs ChurchTrac vs Tithe.ly vs Pushpay. See features, pricing, and AI capabilities side-by-side.",
    url: "https://relius.ai/compare/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Church Management Software Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Management Software Comparison 2026 | Free Feature Matrix",
    description:
      "Compare Relius vs Planning Center vs ChurchTrac vs Tithe.ly vs Pushpay side-by-side.",
  },
};

type ComparisonFeature = {
  category: string;
  features: {
    name: string;
    relius: boolean | string;
    planningCenter: boolean | string;
    churchtrac: boolean | string;
    tithely: boolean | string;
    pushpay: boolean | string;
    isAI?: boolean;
  }[];
};

const comparisonData: ComparisonFeature[] = [
  {
    category: "Core Church Management",
    features: [
      {
        name: "Member Management",
        relius: true,
        planningCenter: true,
        churchtrac: true,
        tithely: true,
        pushpay: "Limited",
      },
      {
        name: "Donation Tracking",
        relius: true,
        planningCenter: true,
        churchtrac: true,
        tithely: true,
        pushpay: true,
      },
      {
        name: "Online Giving",
        relius: true,
        planningCenter: true,
        churchtrac: "Add-on",
        tithely: true,
        pushpay: true,
      },
      {
        name: "Event Calendar",
        relius: true,
        planningCenter: true,
        churchtrac: true,
        tithely: "Limited",
        pushpay: false,
      },
      {
        name: "Check-In System",
        relius: true,
        planningCenter: true,
        churchtrac: true,
        tithely: true,
        pushpay: false,
      },
      {
        name: "Volunteer Scheduling",
        relius: true,
        planningCenter: true,
        churchtrac: "Basic",
        tithely: false,
        pushpay: false,
      },
    ],
  },
  {
    category: "AI-Powered Features",
    features: [
      {
        name: "AI Content Studio",
        relius: true,
        planningCenter: false,
        churchtrac: false,
        tithely: false,
        pushpay: false,
        isAI: true,
      },
      {
        name: "AI Sermon Planner",
        relius: true,
        planningCenter: false,
        churchtrac: false,
        tithely: false,
        pushpay: false,
        isAI: true,
      },
      {
        name: "AI Pastoral Care Insights",
        relius: true,
        planningCenter: false,
        churchtrac: false,
        tithely: false,
        pushpay: false,
        isAI: true,
      },
      {
        name: "Real-time Translation (50+ languages)",
        relius: true,
        planningCenter: false,
        churchtrac: false,
        tithely: false,
        pushpay: false,
        isAI: true,
      },
      {
        name: "AI Volunteer Scheduler",
        relius: true,
        planningCenter: false,
        churchtrac: false,
        tithely: false,
        pushpay: false,
        isAI: true,
      },
      {
        name: "Predictive Giving Analytics",
        relius: true,
        planningCenter: false,
        churchtrac: false,
        tithely: false,
        pushpay: false,
        isAI: true,
      },
    ],
  },
  {
    category: "Platform & Pricing",
    features: [
      {
        name: "Free Plan Available",
        relius: true,
        planningCenter: "Trial only",
        churchtrac: "Limited",
        tithely: "Limited",
        pushpay: false,
      },
      {
        name: "All-in-One Platform",
        relius: true,
        planningCenter: false,
        churchtrac: "Basic",
        tithely: "Limited",
        pushpay: false,
      },
      {
        name: "Modern, Mobile-First UI",
        relius: true,
        planningCenter: true,
        churchtrac: false,
        tithely: true,
        pushpay: true,
      },
      {
        name: "Cloud-Native",
        relius: true,
        planningCenter: true,
        churchtrac: "Hybrid",
        tithely: true,
        pushpay: true,
      },
      {
        name: "Free Data Migration",
        relius: true,
        planningCenter: false,
        churchtrac: false,
        tithely: false,
        pushpay: false,
      },
    ],
  },
];

const comparisonFAQs = [
  {
    question: "Which church management software is best for small churches?",
    answer:
      "Relius is ideal for small churches because it offers a generous free plan with AI-powered features, no per-user pricing, and an all-in-one platform so you don't need multiple subscriptions. ChurchTrac also caters to smaller churches but lacks AI features and a modern interface.",
  },
  {
    question: "How does Relius compare to Planning Center?",
    answer:
      "Planning Center is a well-established platform but uses separate apps for different functions (People, Giving, Services, etc.) which means managing multiple subscriptions. Relius offers everything in one platform with AI-powered tools for content creation, pastoral care, and translation — all starting free.",
  },
  {
    question: "Is Relius really free?",
    answer:
      "Yes. Relius offers a free-forever plan that includes core church management features, AI tools, and online giving. There are no hidden fees or credit card requirements to get started.",
  },
  {
    question: "Can I switch from my current software to Relius?",
    answer:
      "Absolutely. Relius offers free guided migration from Planning Center, ChurchTrac, Tithe.ly, and Pushpay. Most churches complete their migration in 2-4 hours with our step-by-step wizard.",
  },
  {
    question: "What makes Relius different from other church software?",
    answer:
      "Relius is the only church management platform with built-in AI tools for sermon planning, content creation, pastoral care insights, real-time translation, and predictive analytics — all included in the free plan.",
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />;
  }
  if (value === false) {
    return <XCircle className="h-5 w-5 text-slate-300 mx-auto" />;
  }
  return (
    <span className="text-sm text-amber-600 font-medium">{value}</span>
  );
}

export default function ComparePage() {
  return (
    <main className="pt-24">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://relius.ai/" },
          {
            name: "Compare Church Software",
            url: "https://relius.ai/compare/",
          },
        ]}
      />
      <FAQSchema items={comparisonFAQs} id="comparison-faq-schema" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-pattern-grid opacity-[0.03] pointer-events-none" />
        <div className="container-width px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-50 border border-accent-200 text-accent-700 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Updated for 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Church Management Software Comparison
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              See how Relius compares to Planning Center, ChurchTrac, Tithe.ly,
              and Pushpay across features, AI capabilities, and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                className="rounded-full"
                asChild
              >
                <Link href="/contact?interest=demo">
                  Try Relius Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                asChild
              >
                <Link href="#comparison">Jump to Comparison</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section
        id="comparison"
        className="py-16 px-6 lg:px-8 bg-slate-50 scroll-mt-24"
      >
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Feature Comparison Matrix
            </h2>
            <p className="text-lg text-slate-600">
              A comprehensive look at what each platform offers
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] bg-white rounded-xl border border-slate-200 overflow-hidden">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900 w-[240px]">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-accent-700 bg-accent-50/50">
                    Relius
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-slate-600">
                    Planning Center
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-slate-600">
                    ChurchTrac
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-slate-600">
                    Tithe.ly
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-slate-600">
                    Pushpay
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((section) => (
                  <>
                    <tr
                      key={section.category}
                      className="bg-slate-50/50 border-t border-slate-200"
                    >
                      <td
                        colSpan={6}
                        className="py-3 px-6 text-sm font-bold text-slate-800 uppercase tracking-wider"
                      >
                        {section.category}
                      </td>
                    </tr>
                    {section.features.map((feature) => (
                      <tr
                        key={feature.name}
                        className="border-t border-slate-100 hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="py-3.5 px-6 text-sm text-slate-700">
                          <span className="flex items-center gap-2">
                            {feature.isAI && (
                              <Sparkles className="h-3.5 w-3.5 text-accent-500 flex-shrink-0" />
                            )}
                            {feature.name}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center bg-accent-50/20">
                          <CellValue value={feature.relius} />
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <CellValue value={feature.planningCenter} />
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <CellValue value={feature.churchtrac} />
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <CellValue value={feature.tithely} />
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <CellValue value={feature.pushpay} />
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Switch Pages Links */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to switch?
            </h2>
            <p className="text-lg text-slate-600">
              Choose your current platform for a detailed migration guide
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Planning Center",
                slug: "planning-center",
                description: "Import people and donations",
              },
              {
                name: "ChurchTrac",
                slug: "churchtrac",
                description: "Import people and donations",
              },
              {
                name: "Tithe.ly",
                slug: "tithely",
                description: "Import people, donations, tags, and more",
              },
              {
                name: "Pushpay",
                slug: "pushpay",
                description: "Import people and donations",
              },
            ].map((platform) => (
              <Link
                key={platform.slug}
                href={`/switch/${platform.slug}/`}
                className="group block rounded-xl border border-slate-200 bg-white p-6 hover:border-accent-300 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-accent-600 transition-colors">
                  Switch from {platform.name}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  {platform.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-accent-600 group-hover:gap-2 transition-all">
                  View migration guide
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 lg:px-8 bg-slate-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Frequently asked questions
              </h2>
            </div>
            <div className="space-y-4">
              {comparisonFAQs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white border border-slate-200 rounded-lg"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 text-left font-medium text-slate-900 hover:text-accent-600 transition-colors">
                    {faq.question}
                    <span className="ml-4 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-white py-20 px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-pattern-dots opacity-10"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-white px-8 py-12 text-center shadow-xl sm:px-16 sm:py-16">
            <h2 className="text-balance mb-4 text-slate-900 text-3xl sm:text-4xl font-bold">
              See why churches are choosing Relius
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Join churches already using AI-powered management tools. Free
              forever — no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="accent"
                size="lg"
                className="group shadow-lg"
                asChild
              >
                <Link href="/contact?interest=demo">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing/">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
