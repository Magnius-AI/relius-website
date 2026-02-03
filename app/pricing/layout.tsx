import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Church Management Software Pricing | Plans from $49/month",
  description:
    "Simple, transparent pricing for Relius church management software. Unlimited members on all plans. Starter $49/mo, Growth $99/mo, AI Pro $149/mo, Enterprise $249/mo. 7-day free trial, no credit card required.",
  alternates: {
    canonical: "https://relius.ai/pricing/",
  },
  openGraph: {
    title: "Church Management Software Pricing | Relius",
    description:
      "Affordable church management features. Unlimited members, transparent pricing. Start your free trial today.",
    url: "https://relius.ai/pricing/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Management Software Pricing | Relius",
    description:
      "Affordable church management features. Unlimited members, transparent pricing. Start your free trial today.",
  },
};

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I know which Relius plan is right for our church?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with your church's needs. Starter is perfect for churches wanting solid core features. Growth adds the full Pastoral Care system, services planning, and communications. AI Pro is ideal if you want AI to help with sermon prep, content creation, and pastoral insights. Enterprise is for large organizations needing unlimited sites, SSO, and white-labeling.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free trial for Relius church management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer a 14-day free trial so you can experience Relius risk-free. We'll walk you through setup so you can see how it fits your church.",
      },
    },
    {
      "@type": "Question",
      name: "Are there member limits on Relius pricing plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No! All plans include unlimited members, events, and groups. We don't believe in penalizing churches for growth. Your ministry comes first.",
      },
    },
    {
      "@type": "Question",
      name: "Can we upgrade our Relius plan later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Many churches start with Starter, add Growth for Pastoral Care and services features, and upgrade to AI Pro when they're ready for AI automation. You can upgrade anytime and get immediate access to new features. Your data comes with you.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer discounts for church management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Annual billing saves about 15% compared to monthly. We also offer 6 months free for church planters and special considerations for churches in unique situations.",
      },
    },
    {
      "@type": "Question",
      name: "Can we cancel Relius anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, no long-term contracts. If Relius isn't the right fit, you can cancel anytime. We'll help you export your data so you're never locked in.",
      },
    },
  ],
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="pricing-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
      />
      {children}
    </>
  );
}
