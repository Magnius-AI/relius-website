import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAQSchema } from "@/components/seo/faq-schema";
import { BreadcrumbSchema } from "@/components/seo/structured-data";
import { DEFAULT_SIGNUP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Best Church CRM Software Compared (2026)",
  description:
    "Compare the best church CRM platforms for 2026 — Relius, Planning Center, Breeze, ChurchTrac, and Tithely on features, pricing, and ease of use.",
  keywords: [
    "best church CRM",
    "church CRM software",
    "church CRM comparison",
    "best church management software",
    "church database software",
  ],
  alternates: {
    canonical: "https://relius.ai/best-church-crm/",
  },
  openGraph: {
    title: "Best Church CRM Software Compared (2026) | Relius",
    description:
      "Side-by-side comparison of the top church CRM platforms. Find the right fit for your church.",
    url: "https://relius.ai/best-church-crm/",
    images: [{ url: "/og-relius-2026.png", width: 1200, height: 630, alt: "Best Church CRM Comparison 2026" }],
  },
};

const featureRows = [
  { key: "people", label: "People Management" },
  { key: "giving", label: "Online Giving" },
  { key: "groups", label: "Groups & Classes" },
  { key: "checkIn", label: "Check-In" },
  { key: "volunteers", label: "Volunteer Scheduling" },
  { key: "ai", label: "AI-Powered Tools" },
  { key: "unlimitedMembers", label: "Unlimited Members" },
  { key: "freeMigration", label: "Free Data Migration" },
  { key: "mobileApp", label: "Mobile Access" },
  { key: "reporting", label: "Reporting & Analytics" },
] as const;

type FeatureKey = (typeof featureRows)[number]["key"];
type FeatureValue = boolean | string;

type Platform = {
  name: string;
  price: string;
  highlight: boolean;
  features: Record<FeatureKey, FeatureValue>;
};

const platforms: Platform[] = [
  {
    name: "Relius",
    price: "Free core plan",
    highlight: true,
    features: {
      people: true,
      giving: true,
      groups: true,
      checkIn: true,
      volunteers: "Paid upgrade",
      ai: "Giving AI free",
      unlimitedMembers: true,
      freeMigration: true,
      mobileApp: "Web app",
      reporting: "Basic free",
    },
  },
  {
    name: "Planning Center",
    price: "$99-$300+/mo",
    highlight: false,
    features: {
      people: true,
      giving: true,
      groups: true,
      checkIn: true,
      volunteers: true,
      ai: false,
      unlimitedMembers: false,
      freeMigration: false,
      mobileApp: true,
      reporting: true,
    },
  },
  {
    name: "Breeze",
    price: "$72-$200+/mo",
    highlight: false,
    features: {
      people: true,
      giving: true,
      groups: true,
      checkIn: false,
      volunteers: false,
      ai: false,
      unlimitedMembers: true,
      freeMigration: false,
      mobileApp: true,
      reporting: true,
    },
  },
  {
    name: "ChurchTrac",
    price: "$0-$45/mo",
    highlight: false,
    features: {
      people: true,
      giving: true,
      groups: true,
      checkIn: true,
      volunteers: false,
      ai: false,
      unlimitedMembers: false,
      freeMigration: false,
      mobileApp: false,
      reporting: true,
    },
  },
  {
    name: "Tithely",
    price: "$49-$149/mo",
    highlight: false,
    features: {
      people: true,
      giving: true,
      groups: false,
      checkIn: true,
      volunteers: false,
      ai: false,
      unlimitedMembers: true,
      freeMigration: false,
      mobileApp: true,
      reporting: true,
    },
  },
];

const faqs = [
  {
    question: "What is a church CRM?",
    answer:
      "A church CRM is software that helps churches manage congregation relationships. It keeps member information, families, communication, attendance, giving, groups, and follow-up history organized in one place.",
  },
  {
    question: "What should I look for in church CRM software?",
    answer:
      "Look for people and family management, giving records, group management, check-in, reporting, mobile access, migration support, and pricing that fits your church. If you need operations beyond CRM, also evaluate volunteer scheduling, pastoral care, and communications tools.",
  },
  {
    question: "Is free church CRM software any good?",
    answer:
      "Yes, if the free plan includes real operating workflows rather than just a trial. Relius includes core CRM, giving, groups, events, check-in, unlimited members, and migration support in its Free plan, with paid upgrades for advanced ministry operations.",
  },
  {
    question: "How do I switch from my current church CRM?",
    answer:
      "Most church CRMs allow CSV exports. Relius can help migrate people, groups, giving history, and related records so your team can move without starting from scratch.",
  },
];

function FeatureValueCell({ value, highlight }: { value: FeatureValue; highlight: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <CheckCircle2 className={`mx-auto h-5 w-5 ${highlight ? "text-emerald-600" : "text-slate-500"}`} />
    ) : (
      <XCircle className="mx-auto h-5 w-5 text-slate-300" />
    );
  }

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border px-2.5 py-1 text-xs font-semibold ${
        highlight
          ? "border-accent-200 bg-accent-50 text-accent-700"
          : "border-slate-200 bg-slate-50 text-slate-600"
      }`}
    >
      {value}
    </span>
  );
}

export default function BestChurchCRMPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://relius.ai" },
          { name: "Best Church CRM", url: "https://relius.ai/best-church-crm/" },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-pattern-grid opacity-[0.03]" aria-hidden="true" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-accent-100 blur-3xl opacity-50" aria-hidden="true" />

        <div className="relative z-10 mx-auto w-[calc(100vw-3rem)] max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="min-w-0">
              <Badge variant="default" className="mb-6">
                2026 church CRM comparison
              </Badge>
              <h1 className="text-balance break-words !text-3xl font-bold tracking-tight text-slate-900 sm:!text-5xl lg:!text-6xl">
                Best church CRM software for connected ministry records
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Compare Relius, Planning Center, Breeze, ChurchTrac, and Tithely on the CRM workflows churches
                depend on: people, groups, giving, check-in, reporting, migration, and pricing.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
                  <a href={DEFAULT_SIGNUP_URL}>
                    Try Relius Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full rounded-full sm:w-auto">
                  <Link href="#comparison">Compare Features</Link>
                </Button>
              </div>
            </div>

            <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <Image
                src="/images/illustrations/team-puzzle.webp"
                alt="Church CRM comparison"
                width={600}
                height={430}
                className="h-auto w-full object-contain"
                priority
              />
              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Sparkles className="h-4 w-4 text-accent-600" />
                  Relius fit
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Best for churches that want a free core CRM now, with clear paid upgrade paths for deeper
                  operations later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid w-[calc(100vw-3rem)] max-w-6xl gap-6 md:grid-cols-3">
          {[
            ["Best free core CRM", "Relius includes unlimited members, groups, events, giving, and check-in on its Free plan."],
            ["Best all-in-one upgrade path", "Paid plans add pastoral care, service planning, communications, and full AI when needed."],
            ["Best migration fit", "Relius is built for churches moving from Planning Center, ChurchTrac, Breeze, Tithely, and CSV exports."],
          ].map(([title, description]) => (
            <Card key={title} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-slate-600">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="comparison" className="bg-slate-50 py-20">
        <div className="mx-auto w-[calc(100vw-3rem)] max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Feature comparison</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Compare the church CRM essentials
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Pricing and feature packaging change over time, but this gives churches a practical starting point for
              evaluating core CRM fit.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[860px] text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-white">
                  <th className="sticky left-0 z-10 bg-white px-5 py-5 text-left font-semibold text-slate-900">
                    Feature
                  </th>
                  {platforms.map((platform) => (
                    <th
                      key={platform.name}
                      className={`px-5 py-5 text-center font-semibold ${
                        platform.highlight ? "bg-accent-50/70 text-accent-700" : "text-slate-700"
                      }`}
                    >
                      <span className="block">{platform.name}</span>
                      <span className="mt-1 block text-xs font-medium text-slate-500">{platform.price}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row, index) => (
                  <tr key={row.key} className={index % 2 === 0 ? "bg-slate-50/60" : "bg-white"}>
                    <td className="sticky left-0 z-10 border-t border-slate-100 bg-inherit px-5 py-4 font-medium text-slate-800">
                      {row.label}
                    </td>
                    {platforms.map((platform) => (
                      <td
                        key={platform.name}
                        className={`border-t border-slate-100 px-5 py-4 text-center ${
                          platform.highlight ? "bg-accent-50/40" : ""
                        }`}
                      >
                        <FeatureValueCell value={platform.features[row.key]} highlight={platform.highlight} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid w-[calc(100vw-3rem)] max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">How to choose</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Choose the CRM that matches your next season
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A smaller church may need a clean database and giving records. A growing church may also need
              volunteer scheduling, pastoral care, communications, and more advanced reporting.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              "Start with real free core workflows, not a time-limited trial.",
              "Confirm whether pricing changes as your directory grows.",
              "Check migration support before committing to a platform.",
              "Separate core CRM needs from advanced ministry operations.",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                <p className="text-sm font-medium leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-[calc(100vw-3rem)] max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Questions</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Church CRM comparison FAQ
            </h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0 bg-pattern-dots opacity-10" aria-hidden="true" />
        <div className="relative mx-auto w-[calc(100vw-3rem)] max-w-4xl rounded-2xl border border-slate-200 bg-white px-8 py-12 text-center shadow-xl sm:px-14">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Try a free church CRM before adding another monthly bill
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Start with Relius Free for core records, giving, groups, events, and check-in. Upgrade later only if your
            ministry needs advanced operations.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
              <a href={DEFAULT_SIGNUP_URL}>
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full rounded-full sm:w-auto">
              <Link href="/pricing/">See Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
