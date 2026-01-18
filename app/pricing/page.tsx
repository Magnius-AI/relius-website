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

export default function PricingPage() {
  const tiers = [
    {
      name: "Basic",
      description: "Core church management with unlimited members",
      price: {
        monthly: "$39.99",
        annual: "$383.88",
      },
      popular: false,
      limits: "Unlimited members, events, and groups",
      features: [
        "Member Management & Directory",
        "Group Management",
        "Event Calendar",
        "Donation Tracking",
        "Check-In System & QR Codes",
        "Basic Reporting",
        "Data Migration Wizard",
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
      name: "Pro",
      description: "Everything in Basic + Pastoral Care, Services & Communications",
      price: {
        monthly: "$79.99",
        annual: "$767.88",
      },
      popular: true,
      limits: "Unlimited members, events, and groups",
      features: [
        "Everything in Basic",
        "Pastoral Care System",
        "Prayer Request Management",
        "Services Planning (Teams, Songs, Templates)",
        "Volunteer Scheduling",
        "Communications Hub",
        "New Member Follow-ups",
        "Advanced Reporting",
        "Custom Branding",
        "Priority support (email & phone)",
      ],
      notIncluded: [
        "AI Content Studio",
        "AI Sermon Planner",
        "AI Pastoral Insights",
      ],
    },
    {
      name: "Max",
      description: "All features including AI - our most powerful plan",
      price: {
        monthly: "$199.99",
        annual: "$1,919.88",
      },
      popular: false,
      bestValue: true,
      limits: "Unlimited members, events, and groups",
      features: [
        "Everything in Pro",
        "AI Content Studio - Turn sermons into content",
        "AI Sermon Planner - Outline & draft assistance",
        "AI Pastoral Insights - At-risk detection",
        "Sentiment Analysis for care requests",
        "Translation Console - 50+ languages",
        "AI-Powered Donor Analytics",
        "API Access",
        "Dedicated Success Partner",
      ],
      notIncluded: [],
    },
  ];

  const faqs = [
    {
      question: "How do I know which plan is right for our church?",
      answer: "Start with your church's needs. Basic is perfect for churches wanting solid core features. Pro adds the full Pastoral Care system for tracking prayer requests, follow-ups, and member milestones. Max is ideal if you want AI to help with sermon prep, content creation, and pastoral insights. Not sure? Let's talk-we'll help you find the right fit.",
    },
    {
      question: "Can we start with Basic and upgrade later?",
      answer: "Absolutely! Many churches start with Basic, add Pro for Pastoral Care features, and upgrade to Max when they're ready for AI. You can upgrade anytime and get immediate access to new features. Your data comes with you-nothing gets lost.",
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
      answer: "Yes! Annual billing saves about 20% compared to monthly. We also offer 6 months free for church planters and special considerations for churches in unique situations. Just ask.",
    },
    {
      question: "What kind of support can we expect?",
      answer: "All plans include help when you need it. Basic gets email support with responses within 1-2 business days. Pro adds phone support and faster response times. Max gets a dedicated success partner who knows your church and proactively helps you succeed.",
    },
    {
      question: "Can we cancel anytime?",
      answer: "Yes, no long-term contracts. If Relius isn't the right fit, you can cancel anytime. We'll help you export your data so you're never locked in. We'd rather earn your business month by month.",
    },
  ];

  const comparisonFeatures = [
    {
      category: "Capacity",
      items: [
        { name: "Members", basic: "Unlimited", pro: "Unlimited", max: "Unlimited" },
        { name: "Events", basic: "Unlimited", pro: "Unlimited", max: "Unlimited" },
        { name: "Groups", basic: "Unlimited", pro: "Unlimited", max: "Unlimited" },
      ],
    },
    {
      category: "Core Features",
      items: [
        { name: "Member Management", basic: true, pro: true, max: true },
        { name: "Group Management", basic: true, pro: true, max: true },
        { name: "Event Calendar", basic: true, pro: true, max: true },
        { name: "Donation Tracking", basic: true, pro: true, max: true },
        { name: "Check-In System", basic: true, pro: true, max: true },
        { name: "QR Code Generation", basic: true, pro: true, max: true },
        { name: "Basic Reporting", basic: true, pro: true, max: true },
        { name: "Data Migration Wizard", basic: true, pro: true, max: true },
      ],
    },
    {
      category: "Pastoral Care & Services",
      items: [
        { name: "Pastoral Care System", basic: false, pro: true, max: true },
        { name: "Prayer Request Management", basic: false, pro: true, max: true },
        { name: "Services Planning (Teams, Songs)", basic: false, pro: true, max: true },
        { name: "Volunteer Scheduling", basic: false, pro: true, max: true },
        { name: "New Member Follow-ups", basic: false, pro: true, max: true },
        { name: "Care Notes & History", basic: false, pro: true, max: true },
      ],
    },
    {
      category: "Communications",
      items: [
        { name: "Communications Hub", basic: false, pro: true, max: true },
        { name: "Email Campaigns", basic: false, pro: true, max: true },
        { name: "SMS Notifications", basic: false, pro: true, max: true },
      ],
    },
    {
      category: "AI Features",
      items: [
        { name: "AI Content Studio", basic: false, pro: false, max: true },
        { name: "AI Sermon Planner", basic: false, pro: false, max: true },
        { name: "AI Pastoral Insights", basic: false, pro: false, max: true },
        { name: "Sentiment Analysis", basic: false, pro: false, max: true },
        { name: "Translation Console (50+ languages)", basic: false, pro: false, max: true },
        { name: "AI-Powered Donor Analytics", basic: false, pro: false, max: true },
      ],
    },
    {
      category: "Advanced Features",
      items: [
        { name: "Custom Branding", basic: false, pro: true, max: true },
        { name: "Advanced Reporting", basic: false, pro: true, max: true },
        { name: "API Access", basic: false, pro: false, max: true },
      ],
    },
    {
      category: "Support & Services",
      items: [
        { name: "Email Support", basic: true, pro: true, max: true },
        { name: "Phone Support", basic: false, pro: true, max: true },
        { name: "Priority Support", basic: false, pro: true, max: true },
        { name: "Dedicated Success Partner", basic: false, pro: false, max: true },
      ],
    },
  ];

  return (
    <div className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-slate-900">Pricing that grows with your church</h1>
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
        <div className="mb-12 max-w-5xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">Which plan is right for your church?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="text-center">
              <div className="font-semibold text-slate-900 mb-2">Basic</div>
              <p className="text-slate-600">Perfect for churches who need people, giving, events, groups, and check-ins</p>
              <p className="text-slate-500 text-xs mt-2 italic">Example: New Life Chapel starting their digital journey</p>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900 mb-2">Pro</div>
              <p className="text-slate-600">Best for churches wanting pastoral care, services planning, and communications</p>
              <p className="text-slate-500 text-xs mt-2 italic">Example: Grace Fellowship with active worship and care teams</p>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900 mb-2">Max</div>
              <p className="text-slate-600">Ideal for churches wanting AI to save 10+ hours weekly on content & insights</p>
              <p className="text-slate-500 text-xs mt-2 italic">Example: City Church leveraging AI for sermon prep</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="annual" className="mb-10">
          <TabsList className="mx-auto flex w-fit mb-8">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="annual">
              Annual
              <Badge variant="success" className="ml-2">Save 20%</Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="monthly">
            <div className="grid md:grid-cols-3 gap-5">
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
                  {tier.bestValue && (
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
                      <a href={CHECKOUT_URLS.DEFAULT}>
                        Get Started
                      </a>
                    </Button>
                    {tier.limits && (
                      <p className="text-xs text-slate-500 text-center mb-4">{tier.limits}</p>
                    )}
                    <ul className="space-y-3">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                      {tier.notIncluded.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 opacity-50">
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="annual">
            <div className="grid md:grid-cols-3 gap-5">
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
                  {tier.bestValue && (
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
                      <a href={CHECKOUT_URLS.DEFAULT}>
                        Get Started
                      </a>
                    </Button>
                    {tier.limits && (
                      <p className="text-xs text-slate-500 text-center mb-4">{tier.limits}</p>
                    )}
                    <ul className="space-y-3">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                      {tier.notIncluded.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 opacity-50">
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Custom Solutions Banner */}
        <div className="mb-10 max-w-4xl mx-auto bg-slate-100 border border-slate-200 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Need a custom solution for your church network?</h3>
          <p className="text-slate-600 mb-4">
            Contact us for custom pricing with multi-site management, SSO, white-labeling, and dedicated support.
          </p>
          <Button variant="secondary" asChild>
            <Link href="/contact/">Talk to Our Team</Link>
          </Button>
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
          <h2 className="text-center mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <caption className="sr-only">Comparison of features across Basic, Pro, and Max pricing tiers</caption>
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th scope="col" className="text-left py-4 px-6 font-semibold">Feature</th>
                  <th scope="col" className="text-center py-4 px-6 font-semibold">Basic</th>
                  <th scope="col" className="text-center py-4 px-6 font-semibold">Pro</th>
                  <th scope="col" className="text-center py-4 px-6 font-semibold">Max</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category) => (
                  <React.Fragment key={category.category}>
                    <tr className="bg-gray-50">
                      <td colSpan={4} className="py-3 px-6 font-semibold text-primary">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-3 px-6">{item.name}</td>
                        <td className="py-3 px-6 text-center">
                          {typeof item.basic === "string" ? (
                            <span className="text-sm font-medium text-slate-700">{item.basic}</span>
                          ) : item.basic ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" aria-label="Included" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" aria-label="Not included" />
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {typeof item.pro === "string" ? (
                            <span className="text-sm font-medium text-slate-700">{item.pro}</span>
                          ) : item.pro ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" aria-label="Included" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" aria-label="Not included" />
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {typeof item.max === "string" ? (
                            <span className="text-sm font-medium text-slate-700">{item.max}</span>
                          ) : item.max ? (
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
          <h2 className="text-center mb-8">Frequently Asked Questions</h2>
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
