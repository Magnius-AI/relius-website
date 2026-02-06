"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Link from "next/link";
import { CheckCircle2, X, Sparkles } from "lucide-react";
import { CHECKOUT_URLS, AUTH_URLS } from "@/lib/constants";
import { PricingCalculator } from "@/components/PricingCalculator";

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      description: "Essential church management for growing congregations",
      price: {
        monthly: "$49",
        annual: "$499",
      },
      popular: false,
      limits: "Unlimited members, events, and groups",
      features: [
        "Member Management & Directory",
        "Group Management",
        "Event Calendar",
        "Donation Tracking & Donor Analytics",
        "Check-In System & QR Codes",
        "Basic Reporting",
        "Data Migration Wizard",
        "Public Church Website",
        "Email support",
      ],
      notIncluded: [
        "Pastoral Care System",
        "Services & Volunteer Scheduling",
        "Communications Hub",
        "AI Features",
      ],
    },
    {
      name: "Growth",
      description: "Complete pastoral care, services, and communications",
      price: {
        monthly: "$99",
        annual: "$1,009",
      },
      popular: false,
      limits: "Unlimited members, events, and groups",
      features: [
        "Everything in Starter",
        "Pastoral Care System",
        "Prayer Request Management",
        "At-Risk Member Detection",
        "Services Planning (Teams, Songs, Templates)",
        "Volunteer Scheduling",
        "Communications Hub (Unlimited Emails)",
        "New Member Follow-ups",
        "Advanced Reporting",
        "Custom Branding",
        "Room Rentals",
        "Priority support (email & phone)",
      ],
      notIncluded: [
        "AI Sermon Planner",
        "AI Content Studio",
        "AI Pastoral Insights",
        "Translation Console",
      ],
    },
    {
      name: "AI Pro",
      description: "Full AI suite - Save 10+ hours per week with intelligent automation",
      price: {
        monthly: "$149",
        annual: "$1,519",
      },
      popular: true,
      bestValue: true,
      limits: "Unlimited members, events, and groups",
      features: [
        "Everything in Growth",
        "AI Sermon Planner - Save 3-5 hrs/week",
        "AI Content Studio - Sermon → Email/Social auto-generation",
        "AI Pastoral Insights - Sentiment analysis & at-risk detection",
        "AI Volunteer Scheduler - Smart matching & burnout detection",
        "AI Donations Manager - Churn prediction & segmentation",
        "Translation Console - 50+ languages, real-time translation",
        "Semantic Bible Search - Meaning-based scripture search",
        "Advanced Pastoral Analytics",
        "API Access",
        "Phone Support",
        "Pipelines - Track people through any process",
        "Custom Public Site Support",
      ],
      notIncluded: [],
    },
    {
      name: "Enterprise",
      description: "White-labeling, unlimited sites, SSO, and dedicated support",
      price: {
        monthly: "Contact Us",
        annual: "Contact Us",
      },
      popular: false,
      limits: "Unlimited everything - members, events, groups, sites",
      features: [
        "Everything in AI Pro",
        "Unlimited Pipelines",
        "Unlimited Sites/Campuses",
        "Advanced Multi-Site Management",
        "Single Sign-On (SSO)",
        "White-Labeling - Remove Relius branding",
        "Custom Website Creation - Fully synced with platform",
        "Full API Access - Higher rate limits",
        "Custom Integrations",
        "Dedicated Account Manager",
        "Onboarding Assistance",
        "Custom Training Sessions",
        "99.9% Uptime SLA",
        "Priority Feature Requests",
      ],
      notIncluded: [],
    },
  ];

  const faqs = [
    {
      question: "How do I know which plan is right for our church?",
      answer: "Start with your church's needs. Starter is perfect for churches wanting solid core features. Growth adds the full Pastoral Care system for tracking prayer requests, follow-ups, and member milestones. AI Pro is ideal if you want AI to help with sermon prep, content creation, and pastoral insights (saves 10+ hours/week). Enterprise is for large organizations or denominations needing white-labeling, unlimited sites, and SSO. Not sure? Let's talk—we'll help you find the right fit.",
    },
    {
      question: "Can we start with Starter and upgrade later?",
      answer: "Absolutely! Many churches start with Starter, add Growth for Pastoral Care features, and upgrade to AI Pro when they're ready for AI automation. You can upgrade anytime and get immediate access to new features. Your data comes with you—nothing gets lost.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial so you can experience Relius risk-free. We'll walk you through setup so you can see how it fits your church.",
    },
    {
      question: "Are there member limits on any plan?",
      answer: "No! All plans include unlimited members, events, and groups. We don't believe in penalizing churches for growth. Your ministry comes first.",
    },
    {
      question: "Do you offer discounts or special pricing?",
      answer: "Yes! Annual billing saves 15% compared to monthly. We also offer 6 months free for church planters and special considerations for churches in unique situations. Just ask.",
    },
    {
      question: "What kind of support can we expect?",
      answer: "All plans include help when you need it. Starter gets email support with responses within 1-2 business days. Growth adds phone support and faster response times. AI Pro gets quarterly strategy calls. Enterprise gets a dedicated account manager who knows your church and proactively helps you succeed.",
    },
    {
      question: "Can we cancel anytime?",
      answer: "Yes, no long-term contracts. If Relius isn't the right fit, you can cancel anytime. We'll help you export your data so you're never locked in. We'd rather earn your business month by month.",
    },
    {
      question: "What AI features are included in AI Pro?",
      answer: "AI Pro includes: AI Sermon Planner (outline & draft assistance), AI Content Studio (turn sermons into social posts and emails), AI Pastoral Insights (sentiment analysis and at-risk member detection), AI Volunteer Scheduler (smart matching and burnout detection), AI Donations Manager (churn prediction and segmentation), and Translation Console (50+ languages). Most pastors save 10+ hours per week with these features.",
    },
  ];

  const comparisonFeatures = [
    {
      category: "Capacity",
      items: [
        { name: "Members", starter: "Unlimited", growth: "Unlimited", aiPro: "Unlimited", enterprise: "Unlimited" },
        { name: "Events", starter: "Unlimited", growth: "Unlimited", aiPro: "Unlimited", enterprise: "Unlimited" },
        { name: "Groups", starter: "Unlimited", growth: "Unlimited", aiPro: "Unlimited", enterprise: "Unlimited" },
        { name: "Sites/Campuses", starter: "1", growth: "1", aiPro: "Up to 3", enterprise: "Unlimited" },
      ],
    },
    {
      category: "Core Features",
      items: [
        { name: "Member Management", starter: true, growth: true, aiPro: true, enterprise: true },
        { name: "Group Management", starter: true, growth: true, aiPro: true, enterprise: true },
        { name: "Event Calendar", starter: true, growth: true, aiPro: true, enterprise: true },
        { name: "Donation Tracking", starter: true, growth: true, aiPro: true, enterprise: true },
        { name: "Donor Analytics", starter: true, growth: true, aiPro: true, enterprise: true },
        { name: "Check-In System", starter: true, growth: true, aiPro: true, enterprise: true },
        { name: "QR Code Generation", starter: true, growth: true, aiPro: true, enterprise: true },
        { name: "Basic Reporting", starter: true, growth: true, aiPro: true, enterprise: true },
        { name: "Data Migration Wizard", starter: true, growth: true, aiPro: true, enterprise: true },
        { name: "Public Church Website", starter: true, growth: true, aiPro: true, enterprise: true },
      ],
    },
    {
      category: "Pastoral Care & Services",
      items: [
        { name: "Pastoral Care System", starter: false, growth: true, aiPro: true, enterprise: true },
        { name: "Prayer Request Management", starter: false, growth: true, aiPro: true, enterprise: true },
        { name: "At-Risk Member Detection", starter: false, growth: true, aiPro: true, enterprise: true },
        { name: "Follow-Up Tracking", starter: false, growth: true, aiPro: true, enterprise: true },
        { name: "Milestone Tracking", starter: false, growth: true, aiPro: true, enterprise: true },
        { name: "Services Planning (Teams, Songs)", starter: false, growth: true, aiPro: true, enterprise: true },
        { name: "Volunteer Scheduling", starter: false, growth: true, aiPro: true, enterprise: true },
        { name: "New Member Follow-ups", starter: false, growth: true, aiPro: true, enterprise: true },
        { name: "Room Rentals", starter: false, growth: true, aiPro: true, enterprise: true },
      ],
    },
    {
      category: "Communications",
      items: [
        { name: "Email Communications", starter: "Limited (500/mo)", growth: "Unlimited", aiPro: "Unlimited", enterprise: "Unlimited" },
        { name: "Communications Hub", starter: false, growth: true, aiPro: true, enterprise: true },
        { name: "Automated Communications", starter: false, growth: true, aiPro: true, enterprise: true },
      ],
    },
    {
      category: "AI Features",
      items: [
        { name: "AI Sermon Planner", starter: false, growth: false, aiPro: true, enterprise: true },
        { name: "AI Content Studio", starter: false, growth: false, aiPro: true, enterprise: true },
        { name: "AI Pastoral Insights", starter: false, growth: false, aiPro: true, enterprise: true },
        { name: "AI Volunteer Scheduler", starter: false, growth: false, aiPro: true, enterprise: true },
        { name: "AI Donations Manager", starter: false, growth: false, aiPro: true, enterprise: true },
        { name: "Translation Console (50+ languages)", starter: false, growth: false, aiPro: true, enterprise: true },
        { name: "Semantic Bible Search", starter: false, growth: false, aiPro: true, enterprise: true },
        { name: "Sentiment Analysis", starter: false, growth: false, aiPro: true, enterprise: true },
        { name: "Advanced Pastoral Analytics", starter: false, growth: false, aiPro: true, enterprise: true },
      ],
    },
    {
      category: "Advanced Features",
      items: [
        { name: "Custom Branding", starter: false, growth: true, aiPro: true, enterprise: true },
          { name: "Pipelines", starter: false, growth: false, aiPro: true, enterprise: true },
        { name: "Advanced Reporting", starter: false, growth: true, aiPro: true, enterprise: true },
        { name: "API Access", starter: false, growth: false, aiPro: "Basic", enterprise: "Full" },
        { name: "Single Sign-On (SSO)", starter: false, growth: false, aiPro: false, enterprise: true },
        { name: "White-Labeling", starter: false, growth: false, aiPro: false, enterprise: true },
        { name: "Advanced Security", starter: false, growth: false, aiPro: false, enterprise: true },
      ],
    },
    {
      category: "Support & Services",
      items: [
        { name: "Email Support", starter: true, growth: true, aiPro: true, enterprise: true },
        { name: "Phone Support", starter: false, growth: true, aiPro: true, enterprise: true },
        { name: "Priority Support", starter: false, growth: true, aiPro: true, enterprise: true },
        { name: "Quarterly Strategy Calls", starter: false, growth: false, aiPro: true, enterprise: true },
        { name: "Dedicated Account Manager", starter: false, growth: false, aiPro: false, enterprise: true },
        { name: "Onboarding Assistance", starter: false, growth: false, aiPro: false, enterprise: true },
        { name: "Custom Training Sessions", starter: false, growth: false, aiPro: false, enterprise: true },
        { name: "99.9% Uptime SLA", starter: false, growth: false, aiPro: false, enterprise: true },
      ],
    },
  ];

  return (
    <div className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-slate-900">Church management software pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Start with what you need. Add more when you're ready. No member limits, no surprises.
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
              <div className="font-semibold text-slate-900 mb-2">Starter</div>
              <p className="text-slate-600">Perfect for churches who need people, giving, events, groups, and check-ins</p>
              <p className="text-slate-500 text-xs mt-2 italic">Example: New Life Chapel starting their digital journey</p>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900 mb-2">Growth</div>
              <p className="text-slate-600">Best for churches wanting pastoral care, services planning, and communications</p>
              <p className="text-slate-500 text-xs mt-2 italic">Example: Grace Fellowship with active worship and care teams</p>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900 mb-2">AI Pro</div>
              <p className="text-slate-600">Ideal for churches wanting AI to save 10+ hours weekly on content & insights</p>
              <p className="text-slate-500 text-xs mt-2 italic">Example: City Church leveraging AI for sermon prep</p>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900 mb-2">Enterprise</div>
              <p className="text-slate-600">For large organizations and denominations needing unlimited sites and SSO</p>
              <p className="text-slate-500 text-xs mt-2 italic">Example: Multi-campus networks and denominations</p>
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
              {tiers.map((tier) => (
                <Card
                  key={tier.name}
                  className={`relative border-2 ${
                    tier.popular ? "border-primary shadow-xl scale-105" : tier.bestValue ? "border-purple-400 shadow-lg" : "border-gray-200"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge variant="default" className="bg-primary text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  {tier.bestValue && !tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-purple-600 text-white">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Best Value
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="text-base">{tier.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{tier.price.monthly}</span>
                      <span className="text-slate-500">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant={tier.popular ? "primary" : "secondary"}
                      className="w-full mb-6"
                      asChild
                    >
                      <a href={tier.name === "Enterprise" ? "/contact/" : CHECKOUT_URLS.DEFAULT}>
                        {tier.name === "Enterprise" ? "Contact Us" : "Get Started"}
                      </a>
                    </Button>
                    {tier.limits && (
                      <p className="text-xs text-slate-500 text-center mb-4">{tier.limits}</p>
                    )}
                    <ul className="space-y-3">
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
              ))}
            </div>
          </TabsContent>

          <TabsContent value="annual">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {tiers.map((tier) => (
                <Card
                  key={tier.name}
                  className={`relative border-2 ${
                    tier.popular ? "border-primary shadow-xl scale-105" : tier.bestValue ? "border-purple-400 shadow-lg" : "border-gray-200"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge variant="default" className="bg-primary text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  {tier.bestValue && !tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-purple-600 text-white">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Best Value
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="text-base">{tier.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{tier.price.annual}</span>
                      <span className="text-slate-500">/year</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant={tier.popular ? "primary" : "secondary"}
                      className="w-full mb-6"
                      asChild
                    >
                      <a href={tier.name === "Enterprise" ? "/contact/" : CHECKOUT_URLS.DEFAULT}>
                        {tier.name === "Enterprise" ? "Contact Us" : "Get Started"}
                      </a>
                    </Button>
                    {tier.limits && (
                      <p className="text-xs text-slate-500 text-center mb-4">{tier.limits}</p>
                    )}
                    <ul className="space-y-3">
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
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Interactive Pricing Calculator */}
        <div className="my-16">
          <PricingCalculator />
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
              <caption className="sr-only">Comparison of features across Starter, Growth, AI Pro, and Enterprise pricing tiers</caption>
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th scope="col" className="text-left py-4 px-6 font-semibold">Feature</th>
                  <th scope="col" className="text-center py-4 px-6 font-semibold">Starter</th>
                  <th scope="col" className="text-center py-4 px-6 font-semibold">Growth</th>
                  <th scope="col" className="text-center py-4 px-6 font-semibold">AI Pro</th>
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
                        <td className="py-3 px-6 text-center">
                          {typeof item.starter === "string" ? (
                            <span className="text-sm font-medium text-slate-700">{item.starter}</span>
                          ) : item.starter ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" aria-label="Included" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" aria-label="Not included" />
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {typeof item.growth === "string" ? (
                            <span className="text-sm font-medium text-slate-700">{item.growth}</span>
                          ) : item.growth ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" aria-label="Included" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" aria-label="Not included" />
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {typeof item.aiPro === "string" ? (
                            <span className="text-sm font-medium text-slate-700">{item.aiPro}</span>
                          ) : item.aiPro ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" aria-label="Included" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" aria-label="Not included" />
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {typeof item.enterprise === "string" ? (
                            <span className="text-sm font-medium text-slate-700">{item.enterprise}</span>
                          ) : item.enterprise ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" aria-label="Included" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" aria-label="Not included" />
                          )}
                        </td>
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
