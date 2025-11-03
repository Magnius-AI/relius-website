"use client";

import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Link from "next/link";
import { CheckCircle2, X } from "lucide-react";

export default function PricingPage() {
  const tiers = [
    {
      name: "Basic",
      description: "Core church management for growing churches",
      price: {
        monthly: "$99",
        annual: "$950",
      },
      popular: false,
      features: [
        "People & Groups Management",
        "Events & Calendar",
        "Basic Check-ins",
        "Basic Giving Tracking",
        "Up to 500 members",
        "Email support",
      ],
      notIncluded: [
        "AI Features",
        "Advanced Analytics",
        "Priority Support",
      ],
    },
    {
      name: "Pro",
      description: "Everything in Basic plus AI-powered ministry tools",
      price: {
        monthly: "$299",
        annual: "$2,900",
      },
      popular: true,
      features: [
        "Everything in Basic",
        "Sermon Generator",
        "Content Studio",
        "Pastoral Care AI",
        "Translation Console",
        "AI Insights Dashboard",
        "Donations Manager AI",
        "Up to 2,500 members",
        "Priority email support",
        "Phone support",
      ],
      notIncluded: [
        "Custom integrations",
        "Dedicated account manager",
      ],
    },
    {
      name: "Enterprise",
      description: "Everything in Pro plus advanced features and support",
      price: {
        monthly: "Custom",
        annual: "Custom",
      },
      popular: false,
      features: [
        "Everything in Pro",
        "Advanced analytics & reporting",
        "Custom integrations",
        "White-label options",
        "Multi-site support",
        "Dedicated account manager",
        "Priority phone & chat support",
        "Unlimited members",
        "SLA guarantee",
        "Custom training",
      ],
      notIncluded: [],
    },
  ];

  const faqs = [
    {
      question: "How is pricing calculated?",
      answer: "Pricing is based on your church size (member count) and the features you need. Each tier has member limits, and we offer custom pricing for churches over 5,000 members.",
    },
    {
      question: "Can I switch plans later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the next billing cycle.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial of the Pro plan so you can experience all of our AI-powered features. No credit card required to start.",
    },
    {
      question: "What happens if I exceed my member limit?",
      answer: "We'll notify you as you approach your limit. You can easily upgrade to the next tier to accommodate your growing church. We'll never interrupt your service.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes! Annual billing saves you approximately 20% compared to monthly billing. It's a great way to reduce costs while getting full access to Relius.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) and ACH bank transfers for annual plans. Stripe integration coming soon for additional options.",
    },
  ];

  const comparisonFeatures = [
    {
      category: "Core Features",
      items: [
        { name: "People Management", basic: true, pro: true, enterprise: true },
        { name: "Groups & Ministries", basic: true, pro: true, enterprise: true },
        { name: "Events & Calendar", basic: true, pro: true, enterprise: true },
        { name: "Basic Giving", basic: true, pro: true, enterprise: true },
        { name: "Check-ins", basic: true, pro: true, enterprise: true },
        { name: "Volunteers & Services", basic: true, pro: true, enterprise: true },
      ],
    },
    {
      category: "AI Features",
      items: [
        { name: "Sermon Generator", basic: false, pro: true, enterprise: true },
        { name: "Content Studio", basic: false, pro: true, enterprise: true },
        { name: "Translation Console", basic: false, pro: true, enterprise: true },
        { name: "Pastoral Care AI", basic: false, pro: true, enterprise: true },
        { name: "Donations Manager AI", basic: false, pro: true, enterprise: true },
        { name: "AI Insights Dashboard", basic: false, pro: true, enterprise: true },
      ],
    },
    {
      category: "Support & Services",
      items: [
        { name: "Email Support", basic: true, pro: true, enterprise: true },
        { name: "Phone Support", basic: false, pro: true, enterprise: true },
        { name: "Priority Support", basic: false, pro: true, enterprise: true },
        { name: "Dedicated Account Manager", basic: false, pro: false, enterprise: true },
        { name: "Custom Training", basic: false, pro: false, enterprise: true },
        { name: "SLA Guarantee", basic: false, pro: false, enterprise: true },
      ],
    },
  ];

  return (
    <div className="py-14 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Start with the basics. Unlock AI when you're ready. Scale as you grow.
          </p>
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
                      <Link href="/contact">
                        {tier.price.monthly === "Custom" ? "Contact Sales" : "Get Started"}
                      </Link>
                    </Button>
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
                      <Link href="/contact">
                        {tier.price.annual === "Custom" ? "Contact Sales" : "Get Started"}
                      </Link>
                    </Button>
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

        <div className="mb-10">
          <h2 className="text-center mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold">Basic</th>
                  <th className="text-center py-4 px-6 font-semibold">Pro</th>
                  <th className="text-center py-4 px-6 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category) => (
                  <>
                    <tr key={category.category} className="bg-gray-50">
                      <td colSpan={4} className="py-3 px-6 font-semibold text-primary">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-3 px-6">{item.name}</td>
                        <td className="py-3 px-6 text-center">
                          {item.basic ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {item.pro ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {item.enterprise ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
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

        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h3 className="mb-4">Ready to get started?</h3>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
            Book a demo to see Relius in action and find the perfect plan for your church
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact">Book a Demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
