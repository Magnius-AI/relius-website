"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Link from "next/link";
import { CheckCircle2, X, Sparkles, ArrowRight, Calculator } from "lucide-react";
import { CHECKOUT_URLS, AUTH_URLS, DEFAULT_SIGNUP_URL } from "@/lib/constants";

function FeeCalculator() {
  const [amount, setAmount] = useState(100);
  const creditFee = amount * 0.02 + 0.19;
  const achFee = 0.19;
  const amexFee = amount * 0.029 + 0.25;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-bold text-slate-900">Processing Fee Calculator</h3>
      </div>
      <p className="text-slate-600 mb-6">See exactly what your church receives from each donation. No hidden fees.</p>
      <div className="mb-6">
        <label htmlFor="donation-amount" className="block text-sm font-medium text-slate-700 mb-2">
          Donation Amount
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg font-medium">$</span>
          <input
            id="donation-amount"
            type="number"
            min="1"
            max="100000"
            value={amount}
            onChange={(e) => setAmount(Math.max(1, Number(e.target.value)))}
            className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-slate-50 rounded-lg p-4">
          <div className="text-sm font-medium text-slate-500 mb-1">Credit/Debit</div>
          <div className="text-xs text-slate-400 mb-2">2% + $0.19</div>
          <div className="text-lg font-bold text-emerald-600">
            ${(amount - creditFee).toFixed(2)}
          </div>
          <div className="text-xs text-slate-400">-${creditFee.toFixed(2)} fee</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-4">
          <div className="text-sm font-medium text-slate-500 mb-1">Bank Transfer/ACH</div>
          <div className="text-xs text-slate-400 mb-2">$0.19 flat</div>
          <div className="text-lg font-bold text-emerald-600">
            ${(amount - achFee).toFixed(2)}
          </div>
          <div className="text-xs text-slate-400">-${achFee.toFixed(2)} fee</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-4">
          <div className="text-sm font-medium text-slate-500 mb-1">AMEX</div>
          <div className="text-xs text-slate-400 mb-2">2.9% + $0.25</div>
          <div className="text-lg font-bold text-emerald-600">
            ${(amount - amexFee).toFixed(2)}
          </div>
          <div className="text-xs text-slate-400">-${amexFee.toFixed(2)} fee</div>
        </div>
      </div>
      <p className="text-sm text-slate-500 mt-4 text-center">
        Compare: Tithe.ly charges 2.9% + $0.30 per transaction on their free giving plan
      </p>
    </div>
  );
}

export default function PricingPage() {
  const tiers = [
    {
      name: "Free",
      tagline: "Everything your church needs to get started - free forever",
      description: "Full church management + online giving with AI-powered donation tools",
      price: {
        monthly: "$0",
        annual: "$0",
      },
      popular: false,
      featured: true,
      limits: "Unlimited members, events, and groups",
      features: [
        "People Management & Directory",
        "Online Giving & Donations (full suite)",
        "AI-Powered Donations Manager",
        "Donor Analytics & Basic Reporting",
        "Groups Management",
        "Events & Calendar",
        "Check-In System with QR Codes",
        "Pipelines (member journey tracking)",
        "New Member Contact Tracking",
        "Public Church Website",
        "Data Migration (Planning Center, Tithe.ly, ChurchTrac)",
      ],
      notIncluded: [
        "Pastoral Care Module",
        "Service Planning & Volunteer Scheduling",
        "Communications Hub",
        "AI Sermon Planner & Content Studio",
      ],
      cta: "Get Started Free",
      ctaUrl: DEFAULT_SIGNUP_URL,
    },
    {
      name: "Ministry Pro",
      tagline: "Complete pastoral care and church operations",
      description: "Everything in Free, plus pastoral care, service planning, and advanced communications",
      price: {
        monthly: "$60",
        annual: "$612",
      },
      popular: false,
      limits: "Unlimited members, events, and groups",
      features: [
        "Everything in Free",
        "Pastoral Care Module",
        "Prayer Request Management",
        "Service Planning & Liturgy Builder",
        "Volunteer Scheduling",
        "Communications Hub (Unlimited Emails)",
        "Advanced Reporting & Analytics",
        "Custom Branding",
        "Room Rentals & Facility Management",
        "Follow-Up Tracking",
        "Milestone Tracking",
        "At-Risk Member Detection",
        "Priority Support",
      ],
      notIncluded: [
        "AI Sermon Planner",
        "AI Content Studio",
        "AI Pastoral Insights",
        "Translation Console",
      ],
      cta: "Start Ministry Pro",
      ctaUrl: CHECKOUT_URLS.DEFAULT,
    },
    {
      name: "Ministry AI",
      tagline: "AI-powered ministry - save 10+ hours per week",
      description: "Everything in Ministry Pro, plus full AI suite for sermon planning, content, and insights",
      price: {
        monthly: "$150",
        annual: "$1,530",
      },
      popular: true,
      limits: "Unlimited members, events, and groups",
      features: [
        "Everything in Ministry Pro",
        "AI Sermon Planner (outline generation, scripture suggestions, series planning)",
        "AI Content Studio (auto-generate social media, emails, newsletters from sermons)",
        "AI Pastoral Insights (sentiment analysis, congregation health scoring)",
        "AI Volunteer Scheduler (smart matching, availability optimization, burnout prevention)",
        "Translation Console (50+ languages, real-time)",
        "Semantic Bible Search (meaning-based, not just keyword)",
        "Sentiment Analysis across Communications",
        "API Access",
      ],
      notIncluded: [],
      cta: "Start Ministry AI",
      ctaUrl: CHECKOUT_URLS.DEFAULT,
    },
    {
      name: "Enterprise",
      tagline: "For large and multi-site churches",
      description: "Everything in Ministry AI, plus unlimited campuses, SSO, white-labeling, and dedicated support",
      price: {
        monthly: "Contact Sales",
        annual: "Contact Sales",
      },
      popular: false,
      limits: "Unlimited everything - members, events, groups, sites",
      features: [
        "Everything in Ministry AI",
        "Unlimited Campus/Site Management",
        "Single Sign-On (SSO)",
        "White-Labeling (fully branded experience)",
        "Full API Access with Higher Rate Limits",
        "Dedicated Account Manager",
        "Custom Onboarding & Training",
        "99.9% Uptime SLA",
        "Advanced Security (SOC 2 Ready)",
      ],
      notIncluded: [],
      cta: "Contact Sales",
      ctaUrl: "/contact/",
    },
  ];

  const faqs = [
    {
      question: "Is the Free plan really free forever?",
      answer: "Yes! The Free plan includes full church management, online giving, and AI-powered donation tools at no monthly cost, forever. We sustain this through small processing fees on donations (2% + $0.19 per transaction for credit/debit). There are no hidden charges, no trial periods, and no feature restrictions on the Free tier.",
    },
    {
      question: "How do processing fees work?",
      answer: "Processing fees only apply to donations made through the platform. Credit/Debit cards are charged 2% + $0.19 per transaction, AMEX is 2.9% + $0.25, and Bank Transfers/ACH are just $0.19 flat. These rates are lower than most competitors - for example, Tithe.ly charges 2.9% + $0.30 on their free giving plan.",
    },
    {
      question: "How do I know which plan is right for our church?",
      answer: "Start with Free - it includes everything most churches need to get started, including online giving with AI-powered donation tools. Upgrade to Ministry Pro when you need pastoral care, volunteer scheduling, and unlimited communications. Choose Ministry AI if you want AI to help with sermon prep, content creation, and pastoral insights (saves 10+ hours/week). Enterprise is for large organizations needing unlimited sites, SSO, and white-labeling.",
    },
    {
      question: "Can we start with Free and upgrade later?",
      answer: "Absolutely! Many churches start with Free and upgrade when they're ready for more advanced features. You can upgrade anytime and get immediate access to new features. Your data comes with you - nothing gets lost.",
    },
    {
      question: "Are there member limits on any plan?",
      answer: "No! All plans include unlimited members, events, and groups. We don't believe in penalizing churches for growth. Your ministry comes first.",
    },
    {
      question: "Do you offer discounts or special pricing?",
      answer: "Yes! Annual billing saves 15% compared to monthly on Ministry Pro and Ministry AI. We also offer 6 months free for church planters and special considerations for churches in unique situations. Just ask.",
    },
    {
      question: "What kind of support can we expect?",
      answer: "Free plan includes email support. Ministry Pro adds priority support with faster response times. Ministry AI includes phone support and quarterly strategy calls. Enterprise gets a dedicated account manager who knows your church.",
    },
    {
      question: "What AI features are included for free?",
      answer: "The Free plan includes our AI-Powered Donations Manager, which provides AI-generated thank-you messages, donor re-engagement suggestions, and donor insights. The full AI suite (Sermon Planner, Content Studio, Pastoral Insights, Volunteer Scheduler, Translation Console, and Semantic Bible Search) is available on the Ministry AI plan.",
    },
  ];

  const comparisonFeatures = [
    {
      category: "Capacity",
      items: [
        { name: "Members", free: "Unlimited", ministryPro: "Unlimited", ministryAI: "Unlimited", enterprise: "Unlimited" },
        { name: "Events", free: "Unlimited", ministryPro: "Unlimited", ministryAI: "Unlimited", enterprise: "Unlimited" },
        { name: "Groups", free: "Unlimited", ministryPro: "Unlimited", ministryAI: "Unlimited", enterprise: "Unlimited" },
        { name: "Sites/Campuses", free: "1", ministryPro: "1", ministryAI: "Up to 3", enterprise: "Unlimited" },
      ],
    },
    {
      category: "Core Features",
      items: [
        { name: "People Management & Directory", free: true, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Group Management", free: true, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Event Calendar", free: true, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Online Giving & Donations", free: true, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Donor Analytics & Reporting", free: true, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Check-In System & QR Codes", free: true, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Pipelines (Member Journey)", free: true, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "New Member Contact Tracking", free: true, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Data Migration Wizard", free: true, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Public Church Website", free: true, ministryPro: true, ministryAI: true, enterprise: true },
      ],
    },
    {
      category: "AI-Powered Giving",
      items: [
        { name: "AI Thank-You Messages", free: true, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Donor Re-Engagement", free: true, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Donor Insights", free: true, ministryPro: true, ministryAI: true, enterprise: true },
      ],
    },
    {
      category: "Pastoral Care & Services",
      items: [
        { name: "Pastoral Care Module", free: false, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Prayer Request Management", free: false, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "At-Risk Member Detection", free: false, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Follow-Up Tracking", free: false, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Milestone Tracking", free: false, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Service Planning & Liturgy Builder", free: false, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Volunteer Scheduling", free: false, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Room Rentals & Facility Management", free: false, ministryPro: true, ministryAI: true, enterprise: true },
      ],
    },
    {
      category: "Communications",
      items: [
        { name: "Email Communications", free: "Limited (500/mo)", ministryPro: "Unlimited", ministryAI: "Unlimited", enterprise: "Unlimited" },
        { name: "Communications Hub", free: false, ministryPro: true, ministryAI: true, enterprise: true },
      ],
    },
    {
      category: "AI Features",
      items: [
        { name: "AI Sermon Planner", free: false, ministryPro: false, ministryAI: true, enterprise: true },
        { name: "AI Content Studio", free: false, ministryPro: false, ministryAI: true, enterprise: true },
        { name: "AI Pastoral Insights", free: false, ministryPro: false, ministryAI: true, enterprise: true },
        { name: "AI Volunteer Scheduler", free: false, ministryPro: false, ministryAI: true, enterprise: true },
        { name: "Translation Console (50+ languages)", free: false, ministryPro: false, ministryAI: true, enterprise: true },
        { name: "Semantic Bible Search", free: false, ministryPro: false, ministryAI: true, enterprise: true },
        { name: "Sentiment Analysis", free: false, ministryPro: false, ministryAI: true, enterprise: true },
      ],
    },
    {
      category: "Advanced Features",
      items: [
        { name: "Custom Branding", free: false, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Advanced Reporting", free: false, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "API Access", free: false, ministryPro: false, ministryAI: true, enterprise: "Full" },
        { name: "Single Sign-On (SSO)", free: false, ministryPro: false, ministryAI: false, enterprise: true },
        { name: "White-Labeling", free: false, ministryPro: false, ministryAI: false, enterprise: true },
        { name: "Advanced Security (SOC 2)", free: false, ministryPro: false, ministryAI: false, enterprise: true },
      ],
    },
    {
      category: "Support",
      items: [
        { name: "Email Support", free: true, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Priority Support", free: false, ministryPro: true, ministryAI: true, enterprise: true },
        { name: "Phone Support", free: false, ministryPro: false, ministryAI: true, enterprise: true },
        { name: "Quarterly Strategy Calls", free: false, ministryPro: false, ministryAI: true, enterprise: true },
        { name: "Dedicated Account Manager", free: false, ministryPro: false, ministryAI: false, enterprise: true },
        { name: "Custom Onboarding & Training", free: false, ministryPro: false, ministryAI: false, enterprise: true },
        { name: "99.9% Uptime SLA", free: false, ministryPro: false, ministryAI: false, enterprise: true },
      ],
    },
  ];

  const renderCell = (value: boolean | string) => {
    if (typeof value === "string") {
      return <span className="text-sm font-medium text-slate-700">{value}</span>;
    }
    return value ? (
      <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" aria-label="Included" />
    ) : (
      <X className="w-5 h-5 text-gray-300 mx-auto" aria-label="Not included" />
    );
  };

  const renderTierCard = (tier: typeof tiers[0], billing: "monthly" | "annual") => {
    const isEnterprise = tier.name === "Enterprise";
    const isFree = tier.name === "Free";
    const price = billing === "monthly" ? tier.price.monthly : tier.price.annual;
    const priceSuffix = isEnterprise ? "" : isFree ? "/month" : billing === "monthly" ? "/month" : "/year";

    return (
      <Card
        key={tier.name}
        className={`relative border-2 flex flex-col ${
          tier.popular
            ? "border-primary shadow-xl scale-105"
            : tier.featured
            ? "border-emerald-400 shadow-lg"
            : "border-gray-200"
        }`}
      >
        {tier.popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <Badge variant="default" className="bg-primary text-white">
              <Sparkles className="w-3 h-3 mr-1" />
              Most Popular
            </Badge>
          </div>
        )}
        {tier.featured && !tier.popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <Badge className="bg-emerald-600 text-white">
              Free Forever
            </Badge>
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-2xl">{tier.name}</CardTitle>
          <CardDescription className="text-base">{tier.description}</CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold">{price}</span>
            {priceSuffix && <span className="text-slate-500">{priceSuffix}</span>}
          </div>
          {!isFree && !isEnterprise && billing === "annual" && (
            <p className="text-sm text-emerald-600 font-medium mt-1">Save 15% with annual billing</p>
          )}
        </CardHeader>
        <CardContent className="flex flex-col flex-1">
          <Button
            variant={tier.popular ? "primary" : tier.featured ? "accent" : "secondary"}
            className="w-full mb-6"
            asChild
          >
            <a href={tier.ctaUrl}>
              {tier.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          {tier.limits && (
            <p className="text-xs text-slate-500 text-center mb-4">{tier.limits}</p>
          )}
          <ul className="space-y-3 flex-1">
            {tier.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm">{feature}</span>
              </li>
            ))}
            {tier.notIncluded.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 opacity-50">
                <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-slate-900">Free church management software</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything your church needs to manage members, events, and giving - free forever. Upgrade when you're ready for more.
          </p>
        </div>

        {/* Migration Banner */}
        <div className="mb-8 max-w-4xl mx-auto bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
          <p className="text-emerald-800 font-medium">
            Switching from another platform?{" "}
            <Link href="/switch/" className="underline hover:text-emerald-900">
              Get free migration assistance
            </Link>
          </p>
        </div>

        {/* Decision helper */}
        <div className="mb-12 max-w-6xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">Which plan is right for your church?</h3>
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div className="text-center">
              <div className="font-semibold text-emerald-700 mb-2">Free</div>
              <p className="text-slate-600">Perfect for any church wanting people management, giving, events, groups, and check-ins</p>
              <p className="text-slate-500 text-xs mt-2 italic">Full platform - no time limits</p>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900 mb-2">Ministry Pro</div>
              <p className="text-slate-600">Best for churches wanting pastoral care, service planning, and unlimited communications</p>
              <p className="text-slate-500 text-xs mt-2 italic">$60/mo or $612/year</p>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900 mb-2">Ministry AI</div>
              <p className="text-slate-600">Ideal for churches wanting AI to save 10+ hours weekly on content & insights</p>
              <p className="text-slate-500 text-xs mt-2 italic">$150/mo or $1,530/year</p>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900 mb-2">Enterprise</div>
              <p className="text-slate-600">For large organizations and denominations needing unlimited sites and SSO</p>
              <p className="text-slate-500 text-xs mt-2 italic">Custom pricing</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="annual" className="mb-10">
          <TabsList className="mx-auto flex w-fit mb-8">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="annual">
              Annual
              <Badge variant="success" className="ml-2">Save 15%</Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="monthly">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {tiers.map((tier) => renderTierCard(tier, "monthly"))}
            </div>
          </TabsContent>

          <TabsContent value="annual">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {tiers.map((tier) => renderTierCard(tier, "annual"))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Processing Fee Transparency */}
        <div className="my-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Transparent Processing Fees</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              No monthly fee for giving. Just simple, competitive processing fees - lower than most competitors.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm">
              <div className="text-sm font-medium text-slate-500 mb-2">Credit / Debit</div>
              <div className="text-3xl font-bold text-slate-900">2% + $0.19</div>
              <div className="text-sm text-slate-500 mt-1">per transaction</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm">
              <div className="text-sm font-medium text-slate-500 mb-2">AMEX</div>
              <div className="text-3xl font-bold text-slate-900">2.9% + $0.25</div>
              <div className="text-sm text-slate-500 mt-1">per transaction</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm">
              <div className="text-sm font-medium text-slate-500 mb-2">Bank Transfer / ACH</div>
              <div className="text-3xl font-bold text-slate-900">$0.19</div>
              <div className="text-sm text-slate-500 mt-1">per transaction</div>
            </div>
          </div>

          <FeeCalculator />
        </div>

        <div className="text-center mb-10">
          <p className="text-slate-600">
            Already have an account?{" "}
            <a href={AUTH_URLS.LOGIN} className="text-primary font-semibold hover:underline">
              Login
            </a>
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-center text-3xl font-bold mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <caption className="sr-only">Comparison of features across Free, Ministry Pro, Ministry AI, and Enterprise pricing tiers</caption>
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th scope="col" className="text-left py-4 px-6 font-semibold">Feature</th>
                  <th scope="col" className="text-center py-4 px-6 font-semibold">Free</th>
                  <th scope="col" className="text-center py-4 px-6 font-semibold">Ministry Pro</th>
                  <th scope="col" className="text-center py-4 px-6 font-semibold">Ministry AI</th>
                  <th scope="col" className="text-center py-4 px-6 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category) => (
                  <React.Fragment key={category.category}>
                    <tr className="bg-gray-50">
                      <td colSpan={5} className="py-3 px-6 font-semibold text-primary">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-3 px-6">{item.name}</td>
                        <td className="py-3 px-6 text-center">{renderCell(item.free)}</td>
                        <td className="py-3 px-6 text-center">{renderCell(item.ministryPro)}</td>
                        <td className="py-3 px-6 text-center">{renderCell(item.ministryAI)}</td>
                        <td className="py-3 px-6 text-center">{renderCell(item.enterprise)}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-center text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="text-center bg-white border border-slate-200 rounded-2xl p-12 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-slate-900">Still have questions?</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's have a conversation about your church's needs. We'll help you find the right plan and answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact/">Talk to Us</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/features/">See How It Works</Link>
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-6">No pressure. We're here to help, not sell.</p>
        </div>
      </div>
    </div>
  );
}
