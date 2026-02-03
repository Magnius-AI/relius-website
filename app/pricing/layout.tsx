import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Church Management Software Pricing | Plans from $39.99/month",
  description:
    "Simple, transparent pricing for Relius church management software. Unlimited members on all plans. Basic $39.99/mo, Pro $79.99/mo, Max $199.99/mo. 14-day free trial, no credit card required.",
  alternates: {
    canonical: "https://relius.com/pricing/",
  },
  openGraph: {
    title: "Church Management Software Pricing | Relius",
    description:
      "Affordable church management features. Unlimited members, transparent pricing. Start your free trial today.",
    url: "https://relius.com/pricing/",
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
        text: "Start with your church's needs. Basic is perfect for churches wanting solid core features. Pro adds the full Pastoral Care system for tracking prayer requests, follow-ups, and member milestones. Max is ideal if you want help with sermon prep, content creation, and pastoral insights.",
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
        text: "Absolutely! Many churches start with Basic, add Pro for Pastoral Care features, and upgrade to Max when they're ready for more. You can upgrade anytime and get immediate access to new features. Your data comes with you.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer discounts for church management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Annual billing saves about 20% compared to monthly. We also offer 6 months free for church planters and special considerations for churches in unique situations.",
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
