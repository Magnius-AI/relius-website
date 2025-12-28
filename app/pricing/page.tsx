"use client";

import React from "react";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Link from "next/link";
import { CheckCircle2, X } from "lucide-react";
import { CHECKOUT_URLS, AUTH_URLS } from "@/lib/constants";

export default function PricingPage() {
  const tiers = [
    {
      name: "Basic",
      description: "Essential tools for small churches getting started",
      price: {
        monthly: "$29",
        annual: "$290",
      },
      popular: false,
      limits: "Up to 100 members, 50 events, 10 groups",
      features: [
        "Member Management & Directory",
        "Group Management",
        "Event Calendar",
        "Donation Tracking",
        "Check-In System & QR Codes",
        "Volunteer Scheduling",
        "Data Migration Wizard",
        "Email support",
      ],
      notIncluded: [
        "AI Content Studio",
        "AI Sermon Planner",
        "AI Pastoral Insights",
        "Translation Console",
      ],
    },
    {
      name: "Professional",
      description: "Everything in Basic + all AI features to save hours weekly",
      price: {
        monthly: "$99",
        annual: "$990",
      },
      popular: true,
      limits: "Up to 500 members, 200 events, 50 groups",
      features: [
        "Everything in Basic",
        "AI Content Studio - Turn sermons into content",
        "AI Sermon Planner - Outline & draft assistance",
        "AI Pastoral Insights - At-risk detection",
        "Sentiment Analysis for care requests",
        "Translation Console - 50+ languages",
        "Advanced Donor Analytics",
        "Custom Branding",
        "Advanced Reporting",
        "Prayer Request Management",
        "Priority support (email & phone)",
      ],
      notIncluded: [
        "API Access",
        "Multi-site Management",
      ],
    },
    {
      name: "Enterprise",
      description: "For large and multi-site churches",
      price: {
        monthly: "Contact Us",
        annual: "Contact Us",
      },
      popular: false,
      limits: "Unlimited members, events, and groups",
      features: [
        "Everything in Professional",
        "Multi-site Church Management",
        "API Access & Custom Integrations",
        "Single Sign-On (SSO)",
        "White-labeling Options",
        "Advanced Security Features",
        "Dedicated Success Partner",
        "Custom Training",
        "Priority Support with SLA",
      ],
      notIncluded: [],
    },
  ];

  const faqs = [
    {
      question: "How do I know which plan is right for our church?",
      answer: "Start with your church size and whether you need AI features. Basic works great for churches under 500 members who want solid core features. Pro is ideal if you want AI to save time on sermon prep, content creation, and pastoral care. Enterprise is for multi-site churches or those with custom integration needs. Not sure? Let's talk-we'll help you find the right fit.",
    },
    {
      question: "Can we start with Basic and upgrade later?",
      answer: "Absolutely! Many churches start with Basic and add Pro when they're ready to leverage AI. You can upgrade anytime and get immediate access to new features. Your data comes with you-nothing gets lost.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial so you can experience Relius risk-free. No credit card required to start. We'll walk you through setup so you can see how it fits your church.",
    },
    {
      question: "What if our church grows beyond the member limit?",
      answer: "Great problem to have! We'll let you know as you approach your limit. You can upgrade easily to accommodate growth. We'll never cut off your service-your ministry comes first.",
    },
    {
      question: "Do you offer discounts or special pricing?",
      answer: "Yes! Annual billing saves about 20% compared to monthly. We also offer 6 months free for church planters and special considerations for churches in unique situations. Just ask.",
    },
    {
      question: "What kind of support can we expect?",
      answer: "All plans include help when you need it. Basic gets email support with responses within 1-2 business days. Pro adds phone support and faster response times. Enterprise gets a dedicated success partner who knows your church and proactively helps you succeed.",
    },
    {
      question: "Can we cancel anytime?",
      answer: "Yes, no long-term contracts. If Relius isn't the right fit, you can cancel anytime. We'll help you export your data so you're never locked in. We'd rather earn your business month by month.",
    },
  ];

  const comparisonFeatures = [
    {
      category: "Capacity Limits",
      items: [
        { name: "Members", basic: "100", pro: "500", enterprise: "Unlimited" },
        { name: "Events", basic: "50", pro: "200", enterprise: "Unlimited" },
        { name: "Groups", basic: "10", pro: "50", enterprise: "Unlimited" },
      ],
    },
    {
      category: "Core Features",
      items: [
        { name: "Member Management", basic: true, pro: true, enterprise: true },
        { name: "Group Management", basic: true, pro: true, enterprise: true },
        { name: "Event Calendar", basic: true, pro: true, enterprise: true },
        { name: "Donation Tracking", basic: true, pro: true, enterprise: true },
        { name: "Check-In System", basic: true, pro: true, enterprise: true },
        { name: "QR Code Generation", basic: true, pro: true, enterprise: true },
        { name: "Volunteer Scheduling", basic: true, pro: true, enterprise: true },
        { name: "Data Migration Wizard", basic: true, pro: true, enterprise: true },
      ],
    },
    {
      category: "AI Features",
      items: [
        { name: "AI Content Studio", basic: false, pro: true, enterprise: true },
        { name: "AI Sermon Planner", basic: false, pro: true, enterprise: true },
        { name: "AI Pastoral Insights", basic: false, pro: true, enterprise: true },
        { name: "Sentiment Analysis", basic: false, pro: true, enterprise: true },
        { name: "Translation Console (50+ languages)", basic: false, pro: true, enterprise: true },
        { name: "Donor Analytics (AI)", basic: "Basic", pro: "Advanced", enterprise: "Advanced" },
      ],
    },
    {
      category: "Advanced Features",
      items: [
        { name: "Custom Branding", basic: false, pro: true, enterprise: true },
        { name: "Advanced Reporting", basic: false, pro: true, enterprise: true },
        { name: "Prayer Request Management", basic: false, pro: true, enterprise: true },
        { name: "API Access", basic: false, pro: false, enterprise: true },
        { name: "Custom Integrations", basic: false, pro: false, enterprise: true },
        { name: "Multi-Site Management", basic: false, pro: false, enterprise: true },
        { name: "Single Sign-On (SSO)", basic: false, pro: false, enterprise: true },
        { name: "White-Labeling", basic: false, pro: false, enterprise: true },
      ],
    },
    {
      category: "Support & Services",
      items: [
        { name: "Email Support", basic: true, pro: true, enterprise: true },
        { name: "Phone Support", basic: false, pro: true, enterprise: true },
        { name: "Priority Support", basic: false, pro: true, enterprise: true },
        { name: "Dedicated Success Partner", basic: false, pro: false, enterprise: true },
        { name: "Custom Training", basic: false, pro: false, enterprise: true },
        { name: "SLA Guarantee", basic: false, pro: false, enterprise: true },
      ],
    },
  ];

  return (
    <div className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-slate-900">Pricing that grows with your church</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Start with what you need. Add more when you're ready. No surprises, no hidden fees.
          </p>
        </div>

        {/* Migration Banner */}
        <div className="mb-8 max-w-4xl mx-auto bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
          <p className="text-emerald-800 font-medium">
            Switching from another platform?{" "}
            <Link href="/switch" className="underline hover:text-emerald-900">
              Get free migration assistance + 30-day extended trial
            </Link>
          </p>
        </div>

        {/* Decision helper */}
        <div className="mb-12 max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">Which plan is right for your church?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="text-center">
              <div className="font-semibold text-slate-900 mb-2">Basic</div>
              <p className="text-slate-600">Perfect for small churches under 100 members who need solid core features</p>
              <p className="text-slate-500 text-xs mt-2 italic">Example: New Life Chapel (75 members)</p>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900 mb-2">Professional</div>
              <p className="text-slate-600">Best for growing churches wanting AI to save 10+ hours weekly</p>
              <p className="text-slate-500 text-xs mt-2 italic">Example: Grace Fellowship (350 members)</p>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900 mb-2">Enterprise</div>
              <p className="text-slate-600">Built for large or multi-site churches needing custom solutions</p>
              <p className="text-slate-500 text-xs mt-2 italic">Example: City Church Network (2,500+ members)</p>
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
                    tier.popular ? "border-primary shadow-xl scale-105" : "border-gray-200"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge variant="default" className="bg-primary text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="text-base">{tier.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{tier.price.monthly}</span>
                      {tier.price.monthly !== "Custom" && (
                        <span className="text-slate-500">/month</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant={tier.popular ? "primary" : "secondary"}
                      className="w-full mb-6"
                      asChild
                    >
                      {tier.name === "Enterprise" ? (
                        <Link href="/contact">Contact Us</Link>
                      ) : (
                        <a href={CHECKOUT_URLS.DEFAULT}>
                          Get Started
                        </a>
                      )}
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
                    tier.popular ? "border-primary shadow-xl scale-105" : "border-gray-200"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge variant="default" className="bg-primary text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="text-base">{tier.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{tier.price.annual}</span>
                      {tier.price.annual !== "Custom" && (
                        <span className="text-slate-500">/year</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant={tier.popular ? "primary" : "secondary"}
                      className="w-full mb-6"
                      asChild
                    >
                      {tier.name === "Enterprise" ? (
                        <Link href="/contact">Contact Us</Link>
                      ) : (
                        <a href={CHECKOUT_URLS.DEFAULT}>
                          Get Started
                        </a>
                      )}
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
              <caption className="sr-only">Comparison of features across Basic, Pro, and Enterprise pricing tiers</caption>
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th scope="col" className="text-left py-4 px-6 font-semibold">Feature</th>
                  <th scope="col" className="text-center py-4 px-6 font-semibold">Basic</th>
                  <th scope="col" className="text-center py-4 px-6 font-semibold">Professional</th>
                  <th scope="col" className="text-center py-4 px-6 font-semibold">Enterprise</th>
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
              <Link href="/contact">Talk to Us</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/features">See How It Works</Link>
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-6">No pressure. We're here to help, not sell.</p>
        </div>
      </div>
    </div>
  );
}
