import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Heart,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAQSchema } from "@/components/seo/faq-schema";
import { BreadcrumbSchema } from "@/components/seo/structured-data";
import { DEFAULT_SIGNUP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Church Management Software | Relius",
  description:
    "Relius is free church management software for core people, groups, giving, check-in, and church website workflows. No credit card required.",
  keywords: [
    "free church management software",
    "free church database",
    "church management system free",
    "free ChMS",
    "church software no cost",
  ],
  alternates: {
    canonical: "https://relius.ai/free-church-management-software/",
  },
  openGraph: {
    title: "Free Church Management Software | Relius",
    description:
      "Manage core church workflows for free with people, groups, giving, check-in, and website tools. Upgrade only when your ministry needs advanced operations.",
    url: "https://relius.ai/free-church-management-software/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Relius Free Church Management Software",
      },
    ],
  },
};

const includedFeatures = [
  {
    icon: Users,
    title: "People & Families",
    description:
      "Keep members, visitors, families, notes, attendance history, and custom fields organized in one place.",
  },
  {
    icon: Heart,
    title: "Online Giving",
    description:
      "Accept online gifts, view donor activity, send receipts, and keep giving data connected to your church records.",
  },
  {
    icon: BookOpen,
    title: "Groups & Events",
    description:
      "Organize small groups, classes, calendars, and ministry events without paying more as your church grows.",
  },
  {
    icon: Shield,
    title: "Secure Check-In",
    description:
      "Use QR codes, family matching, allergy notes, and real-time headcounts to keep check-in simple and safer.",
  },
  {
    icon: Sparkles,
    title: "AI Giving Tools",
    description:
      "Use donor insights and AI-assisted thank-you messages without needing the full paid AI suite.",
  },
  {
    icon: Clock,
    title: "Migration & Website",
    description:
      "Move your data into Relius and publish a simple church website without adding a monthly software bill.",
  },
];

const freePlanHighlights = [
  "Unlimited members, groups, and events",
  "No monthly subscription for the Free plan",
  "Core giving and donation management included",
  "Upgrade paths for service planning, pastoral care, communications, and full AI",
];

const faqs = [
  {
    question: "Is Relius really free?",
    answer:
      "Yes. The Relius Free plan has no monthly subscription and includes core church management workflows such as people, groups, events, online giving, check-in, and a public church website. Donation processing fees can still apply, and advanced ministry operations are available on paid plans.",
  },
  {
    question: "How does Relius compare to paid church software?",
    answer:
      "Many churches pay $50-$300 per month for the same core CRM, giving, group, event, and check-in workflows that Relius includes in its Free plan. Relius also offers paid upgrades for churches that need pastoral care, service planning, communications, volunteer scheduling, or the full AI suite.",
  },
  {
    question: "Can I migrate from my current church software?",
    answer:
      "Yes. Relius can help migrate data from popular platforms including ChurchTrac, Planning Center, Breeze, Tithely, and more. The goal is a clean transition for your people, groups, giving history, and core records.",
  },
  {
    question: "Is there a limit on the number of members?",
    answer:
      "No. The Free plan includes unlimited members, groups, and events, so your church can grow without moving into a higher tier just because your directory is larger.",
  },
  {
    question: "Is my church data secure?",
    answer:
      "Yes. Relius uses encrypted infrastructure, role-based permissions, and privacy-first controls to help protect your church data.",
  },
];

export default function FreeChurchManagementSoftwarePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://relius.ai" },
          {
            name: "Free Church Management Software",
            url: "https://relius.ai/free-church-management-software/",
          },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-pattern-grid opacity-[0.03]" aria-hidden="true" />
        <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-accent-100 blur-3xl opacity-50" aria-hidden="true" />

        <div className="relative z-10 mx-auto w-[calc(100vw-3rem)] max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="min-w-0">
              <Badge variant="success" className="mb-6">
                Free core ChMS - no credit card required
              </Badge>
              <h1 className="text-balance break-words !text-3xl font-bold tracking-tight text-slate-900 sm:!text-5xl lg:!text-6xl">
                Free church management software for the workflows you use every week
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Relius gives your church a free foundation for people, groups, giving, check-in, events, and your
                public church website. Add advanced ministry operations only when your team needs them.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
                  <a href={DEFAULT_SIGNUP_URL}>
                    Start Free Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full rounded-full sm:w-auto">
                  <Link href="/pricing/">Compare Plans</Link>
                </Button>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {freePlanHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm font-medium text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-w-0">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                <Image
                  src="/images/illustrations/ministry-essentials-v2.webp"
                  alt="Ministry essentials in Relius"
                  width={600}
                  height={430}
                  className="h-auto w-full object-contain"
                  priority
                />
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    ["$0", "monthly core plan"],
                    ["Unlimited", "members"],
                    ["Free", "migration help"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-xl bg-slate-50 p-4">
                      <div className="text-lg font-bold text-slate-900">{value}</div>
                      <div className="mt-1 text-xs font-medium text-slate-500">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-[calc(100vw-3rem)] max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Why free works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Put the software budget back into ministry
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Most churches should not need a monthly software bill just to maintain records, receive gifts, run
            groups, or check in families. Relius keeps those core workflows free and offers paid upgrades for
            churches that need deeper operations.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-[calc(100vw-3rem)] max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Included in Free</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A complete core church database, not a teaser plan
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Start with the essentials your admin team needs every week, then expand into advanced modules when
              your ministry is ready.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {includedFeatures.map((feature) => (
              <Card key={feature.title} className="rounded-2xl border-slate-200">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50">
                    <feature.icon className="h-6 w-6 text-accent-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid w-[calc(100vw-3rem)] max-w-6xl gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8">
            <h2 className="text-2xl font-bold text-slate-900">Free plan</h2>
            <p className="mt-3 text-slate-600">
              Best for churches that need a modern, no-monthly-cost home for core records and giving.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "People, families, groups, events, and check-in",
                "Online giving and donor records",
                "Basic reporting and donor insights",
                "Church website and migration support",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Paid upgrades</h2>
            <p className="mt-3 text-slate-600">
              Add these when your church needs more operational depth than a core CRM.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Pastoral care and prayer follow-up",
                "Service planning and volunteer scheduling",
                "Communications hub and advanced reporting",
                "Full AI suite for sermon, content, and translation workflows",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-medium text-slate-700">
                  <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-[calc(100vw-3rem)] max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Questions</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Free church management software FAQ
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
            Start with the free core, then grow when you are ready
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Create your church workspace, import your data, and see how Relius fits your ministry before you ever
            choose a paid plan.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
              <a href={DEFAULT_SIGNUP_URL}>
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full rounded-full sm:w-auto">
              <Link href="/features/">See Features</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
