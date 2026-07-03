"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle2, HelpCircle, Sparkles, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AUTH_URLS, CHECKOUT_URLS, DEFAULT_SIGNUP_URL } from "@/lib/constants";

type Billing = "monthly" | "annual";
type Tier = {
  name: string;
  label: string;
  description: string;
  bestFor: string;
  monthly: string;
  annual: string;
  cta: string;
  ctaUrl: string;
  tone: "free" | "standard" | "ai" | "enterprise";
  features: string[];
  limits: string;
};

const tiers: Tier[] = [
  {
    name: "Free",
    label: "Start here",
    description: "Core church management and online giving without a monthly subscription.",
    bestFor: "Churches replacing spreadsheets or consolidating people, events, groups, check-in, and giving.",
    monthly: "$0",
    annual: "$0",
    cta: "Get Started Free",
    ctaUrl: DEFAULT_SIGNUP_URL,
    tone: "free",
    limits: "Unlimited members, events, and groups",
    features: [
      "People directory and family profiles",
      "Online giving and donation tracking",
      "AI-powered donation tools",
      "Groups, events, check-in, and pipelines",
      "Public church website",
      "Migration from Planning Center, Tithe.ly, and ChurchTrac",
    ],
  },
  {
    name: "Ministry Pro",
    label: "Operations depth",
    description: "Advanced care and coordination for churches ready to run more of ministry in one place.",
    bestFor: "Teams that need pastoral care, volunteer scheduling, service planning, and unlimited communications.",
    monthly: "$60",
    annual: "$612",
    cta: "Start Ministry Pro",
    ctaUrl: CHECKOUT_URLS.PRO,
    tone: "standard",
    limits: "Unlimited members, events, and groups",
    features: [
      "Everything in Free",
      "Pastoral care and prayer request workflows",
      "Service planning and volunteer scheduling",
      "Unlimited email communications",
      "Room rentals and facility management",
      "Priority support",
    ],
  },
  {
    name: "Ministry AI",
    label: "Most complete",
    description: "The full Relius platform with practical AI for sermon, content, care, and planning workflows.",
    bestFor: "Staff teams that want to save time on content, translation, insights, and ministry preparation.",
    monthly: "$150",
    annual: "$1,530",
    cta: "Start Ministry AI",
    ctaUrl: CHECKOUT_URLS.AI,
    tone: "ai",
    limits: "Unlimited members, events, and groups",
    features: [
      "Everything in Ministry Pro",
      "AI Sermon Planner and Content Studio",
      "AI pastoral insights and sentiment analysis",
      "AI volunteer scheduling recommendations",
      "Translation Console and Semantic Bible Search",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    label: "Large churches",
    description: "Dedicated onboarding, security, and scale for multi-site churches and denominations.",
    bestFor: "Large organizations needing multi-site controls, SSO, white-labeling, and dedicated support.",
    monthly: "Contact Sales",
    annual: "Contact Sales",
    cta: "Contact Sales",
    ctaUrl: "/contact/",
    tone: "enterprise",
    limits: "Unlimited sites, members, events, and groups",
    features: [
      "Everything in Ministry AI",
      "Unlimited campuses and sites",
      "Single sign-on",
      "White-labeling",
      "Dedicated account manager",
      "Custom onboarding and security review",
    ],
  },
];

const comparisonRows = [
  { feature: "Members, groups, and events", free: "Unlimited", pro: "Unlimited", ai: "Unlimited", enterprise: "Unlimited" },
  { feature: "Online giving and donation tracking", free: true, pro: true, ai: true, enterprise: true },
  { feature: "AI donation manager", free: true, pro: true, ai: true, enterprise: true },
  { feature: "Pastoral care and prayer requests", free: false, pro: true, ai: true, enterprise: true },
  { feature: "Service planning and volunteer scheduling", free: false, pro: true, ai: true, enterprise: true },
  { feature: "Unlimited email communications", free: "Limited", pro: true, ai: true, enterprise: true },
  { feature: "AI Sermon Planner and Content Studio", free: false, pro: false, ai: true, enterprise: true },
  { feature: "Translation Console and Semantic Bible Search", free: false, pro: false, ai: true, enterprise: true },
  { feature: "API access", free: false, pro: false, ai: true, enterprise: "Full" },
  { feature: "SSO and white-labeling", free: false, pro: false, ai: false, enterprise: true },
];

const faqs = [
  {
    question: "Is the Free plan really free forever?",
    answer:
      "Yes. The Free plan has no monthly subscription and includes core church management, online giving, and AI-powered donation tools. Donation transactions include standard processor fees plus the Relius platform fee.",
  },
  {
    question: "How do processing fees work?",
    answer:
      "Online donations include standard Stripe processing, currently modeled here as 2.9% plus $0.30, plus a 1.3% Relius platform fee. Donors can choose to cover fees so the church receives the full intended gift.",
  },
  {
    question: "Which plan should we start with?",
    answer:
      "Start with Free if you need people, giving, events, groups, check-in, and a public website. Move to Ministry Pro for pastoral care, service planning, volunteer scheduling, and communications. Choose Ministry AI when AI-assisted content, translation, insights, and planning are worth the additional investment.",
  },
  {
    question: "Can we upgrade later?",
    answer:
      "Yes. You can start free and upgrade when your team is ready. Your church data stays in place as you add more capabilities.",
  },
  {
    question: "Are there member limits?",
    answer:
      "No. All plans include unlimited members, events, and groups. Enterprise adds additional multi-site and organizational controls.",
  },
];

function getTierPrice(tier: Tier, billing: Billing) {
  return billing === "annual" ? tier.annual : tier.monthly;
}

function getTierHref(tier: Tier, billing: Billing) {
  if (tier.tone === "enterprise" || tier.tone === "free") return tier.ctaUrl;
  const interval = billing === "annual" ? "yearly" : "monthly";
  return `${tier.ctaUrl}${tier.ctaUrl.includes("?") ? "&" : "?"}interval=${interval}`;
}

function cell(value: boolean | string) {
  if (typeof value === "string") {
    return <span className="text-sm font-semibold text-slate-700">{value}</span>;
  }
  return value ? (
    <CheckCircle2 className="mx-auto h-5 w-5 text-emerald-600" aria-label="Included" />
  ) : (
    <X className="mx-auto h-5 w-5 text-slate-300" aria-label="Not included" />
  );
}

function FeeCalculator() {
  const [amount, setAmount] = useState(100);
  const stripeFee = amount * 0.029 + 0.3;
  const platformFee = amount * 0.013;
  const totalFee = stripeFee + platformFee;
  const received = Math.max(0, amount - totalFee);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-6 flex items-start gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50">
          <Calculator className="h-6 w-6 text-accent-700" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Processing fee calculator</h3>
          <p className="text-sm text-slate-600">Model a gift and see the fee stack before you choose a plan.</p>
        </div>
      </div>

      <label htmlFor="donation-amount" className="mb-2 block text-sm font-semibold text-slate-700">
        Donation amount
      </label>
      <div className="relative mb-6">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-slate-400">$</span>
        <input
          id="donation-amount"
          type="number"
          min="1"
          max="100000"
          value={amount}
          onChange={(event) => setAmount(Math.max(1, Number(event.target.value) || 1))}
          className="w-full rounded-xl border border-slate-300 py-3 pl-9 pr-4 text-lg font-semibold focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-100"
        />
      </div>

      <div className="space-y-3">
        <FeeRow label="Stripe processing" detail="2.9% + $0.30 card processing" value={`-$${stripeFee.toFixed(2)}`} />
        <FeeRow label="Relius platform fee" detail="1.3% platform fee" value={`-$${platformFee.toFixed(2)}`} tone="emerald" />
        <div className="flex items-center justify-between rounded-2xl border-2 border-emerald-400 bg-emerald-50 p-4">
          <div>
            <p className="font-bold text-slate-900">Your church receives</p>
            <p className="text-xs text-slate-600">
              Total fees: ${totalFee.toFixed(2)} ({((totalFee / amount) * 100).toFixed(1)}%)
            </p>
          </div>
          <p className="text-2xl font-bold text-emerald-700">${received.toFixed(2)}</p>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-slate-500">
        Donors can choose to cover fees so your church receives 100% of the intended gift.
      </p>
    </div>
  );
}

function FeeRow({
  label,
  detail,
  value,
  tone = "slate",
}: {
  label: string;
  detail: string;
  value: string;
  tone?: "slate" | "emerald";
}) {
  return (
    <div className={tone === "emerald" ? "flex items-center justify-between rounded-2xl border border-emerald-200 bg-emerald-50 p-4" : "flex items-center justify-between rounded-2xl bg-slate-50 p-4"}>
      <div>
        <p className={tone === "emerald" ? "text-sm font-semibold text-emerald-900" : "text-sm font-semibold text-slate-800"}>{label}</p>
        <p className={tone === "emerald" ? "text-xs text-emerald-700" : "text-xs text-slate-500"}>{detail}</p>
      </div>
      <p className={tone === "emerald" ? "text-sm font-bold text-emerald-700" : "text-sm font-bold text-slate-600"}>{value}</p>
    </div>
  );
}

function TierCard({ tier, billing }: { tier: Tier; billing: Billing }) {
  const isFeatured = tier.tone === "ai";
  const isFree = tier.tone === "free";
  const price = getTierPrice(tier, billing);
  const suffix = tier.tone === "enterprise" ? "" : isFree ? "/month" : billing === "annual" ? "/year" : "/month";

  return (
    <article
      className={
        isFeatured
          ? "relative flex h-full flex-col rounded-3xl border-2 border-accent-500 bg-accent-50 p-6 text-slate-900 shadow-xl shadow-accent-100"
          : "relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
      }
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className={isFeatured ? "mb-2 text-sm font-semibold text-accent-700" : "mb-2 text-sm font-semibold text-primary-600"}>
            {tier.label}
          </p>
          <h3 className="text-2xl font-bold text-slate-900">{tier.name}</h3>
        </div>
        {isFeatured && (
          <Badge className="border-accent-200 bg-white text-accent-700">
            <Sparkles className="mr-1 h-3 w-3" />
            Complete
          </Badge>
        )}
        {isFree && <Badge variant="success">Free forever</Badge>}
      </div>

      <p className="mb-5 text-sm leading-6 text-slate-600">{tier.description}</p>

      <div className="mb-5">
        <span className="text-4xl font-bold text-slate-950">{price}</span>
        {suffix && <span className="text-slate-500">{suffix}</span>}
        {!isFree && tier.tone !== "enterprise" && billing === "annual" && (
          <p className="mt-1 text-sm font-semibold text-emerald-500">Save 15% with annual billing</p>
        )}
      </div>

      <div className={isFeatured ? "mb-6 rounded-2xl border border-accent-200 bg-white p-4" : "mb-6 rounded-2xl bg-slate-50 p-4"}>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Best for</p>
        <p className="mt-2 text-sm leading-6 text-slate-700">{tier.bestFor}</p>
      </div>

      <Button variant={isFeatured ? "gradient" : isFree ? "accent" : "primary"} className="mb-5 w-full" asChild>
        <a href={getTierHref(tier, billing)}>
          {tier.cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>

      <p className="mb-4 text-center text-xs text-slate-500">{tier.limits}</p>
      <ul className="mt-auto space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-2 text-sm text-slate-600">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function PricingPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-slate-50 to-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-600">Transparent pricing</p>
          <h1 className="mb-6 text-balance text-4xl font-bold text-slate-950 md:text-5xl">
            Start free. Add depth when your ministry needs it.
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
            Relius keeps the core platform accessible, then separates advanced operations and AI into clear paid tiers. No per-member pricing, no surprise module maze.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-5 text-center">
            <p className="font-semibold text-emerald-900">
              Switching platforms?{" "}
              <Link href="/switch/" className="underline underline-offset-4 hover:text-emerald-700">
                Get migration help from Planning Center, Tithe.ly, ChurchTrac, and more.
              </Link>
            </p>
          </div>

          <Tabs defaultValue="annual" className="mb-12">
            <div className="mb-8 flex justify-center">
              <TabsList>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annual">
                  Annual
                  <Badge variant="success" className="ml-2">Save 15%</Badge>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {tiers.map((tier) => (
                  <TierCard key={tier.name} tier={tier} billing="monthly" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="annual">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {tiers.map((tier) => (
                  <TierCard key={tier.name} tier={tier} billing="annual" />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-600">Giving economics</p>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">The monthly bill is not the whole cost</h2>
              <p className="mb-5 text-slate-600">
                Online giving always has processing costs. Relius keeps them explicit: standard Stripe processing plus a 1.3% Relius platform fee, with an option for donors to cover fees.
              </p>
              <div className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                  <p className="text-sm text-slate-700">No monthly subscription on the Free plan.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                  <p className="text-sm text-slate-700">No per-member pricing across any tier.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                  <p className="text-sm text-slate-700">Donors can cover transaction fees at checkout.</p>
                </div>
              </div>
            </div>
            <FeeCalculator />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-600">Plan comparison</p>
              <h2 className="text-3xl font-bold text-slate-900">What changes as you upgrade</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-600">
              The Free plan covers the foundation. Paid tiers add care depth, service coordination, communications, AI, and scale controls.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[760px] border-collapse">
              <caption className="sr-only">Comparison of Relius pricing plan features</caption>
              <thead>
                <tr className="border-b border-slate-200 bg-white">
                  <th scope="col" className="px-5 py-4 text-left text-sm font-bold text-slate-900">Feature</th>
                  <th scope="col" className="px-5 py-4 text-center text-sm font-bold text-slate-900">Free</th>
                  <th scope="col" className="px-5 py-4 text-center text-sm font-bold text-slate-900">Pro</th>
                  <th scope="col" className="px-5 py-4 text-center text-sm font-bold text-slate-900">AI</th>
                  <th scope="col" className="px-5 py-4 text-center text-sm font-bold text-slate-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-slate-100 last:border-0">
                    <th scope="row" className="px-5 py-4 text-left text-sm font-semibold text-slate-700">{row.feature}</th>
                    <td className="px-5 py-4 text-center">{cell(row.free)}</td>
                    <td className="px-5 py-4 text-center">{cell(row.pro)}</td>
                    <td className="px-5 py-4 text-center">{cell(row.ai)}</td>
                    <td className="px-5 py-4 text-center">{cell(row.enterprise)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
              <HelpCircle className="h-6 w-6 text-primary-700" />
            </div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-600">Questions</p>
            <h2 className="text-3xl font-bold text-slate-900">Pricing FAQ</h2>
            <p className="mt-3 text-slate-600">
              Short answers for the decisions churches usually need to make before choosing a plan.
            </p>
          </div>

          <Accordion type="single">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center md:p-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-600">Still deciding?</p>
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Talk through your church's setup</h2>
          <p className="mx-auto mb-8 max-w-2xl text-slate-600">
            We will help compare your current software cost, giving volume, and team needs against the right Relius tier.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact/">Talk to us</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href={AUTH_URLS.LOGIN}>Log in</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
