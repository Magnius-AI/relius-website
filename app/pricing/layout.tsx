import { Metadata } from "next";
import Script from "next/script";
import { BreadcrumbSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "Free Church Management Software | Relius Pricing",
  description:
    "Free church management software with online giving, AI-powered donation tools, and unlimited members. Free forever. Ministry Pro $60/mo, Ministry AI $150/mo for advanced features.",
  alternates: {
    canonical: "https://relius.ai/pricing/",
  },
  openGraph: {
    title: "Free Church Management Software | Relius Pricing",
    description:
      "Free church management with online giving and AI donation tools. Unlimited members, no credit card required. Upgrade for pastoral care and AI features.",
    url: "https://relius.ai/pricing/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Church Management Software | Relius Pricing",
    description:
      "Free church management with online giving and AI donation tools. Unlimited members, no credit card required. Upgrade for pastoral care and AI features.",
  },
};

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Relius church management software really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Relius offers a free forever plan that includes full church management, online giving, AI-powered donation tools, and unlimited members. Revenue comes from competitive processing fees on donations (2% + $0.19 per transaction for credit/debit). Paid upgrades are available for pastoral care (Ministry Pro, $60/mo) and advanced AI features (Ministry AI, $150/mo).",
      },
    },
    {
      "@type": "Question",
      name: "How do Relius processing fees compare to competitors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Relius charges 2% + $0.19 per transaction for credit/debit donations, which is lower than most competitors. For example, Tithe.ly charges 2.9% + $0.30 on their free giving plan. Bank transfers/ACH are just $0.19 flat.",
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
        text: "Absolutely! Many churches start with the Free plan and upgrade to Ministry Pro for pastoral care and volunteer scheduling, or Ministry AI for AI-powered sermon planning and content creation. You can upgrade anytime and get immediate access to new features.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer discounts for church management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Annual billing saves 15% compared to monthly on Ministry Pro and Ministry AI. We also offer 6 months free for church planters and special considerations for churches in unique situations.",
      },
    },
    {
      "@type": "Question",
      name: "Can we cancel Relius anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, no long-term contracts. The Free plan is free forever with no cancellation needed. For paid plans, you can cancel anytime and we'll help you export your data so you're never locked in.",
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
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://relius.ai/" },
        { name: "Pricing", url: "https://relius.ai/pricing/" },
      ]} />
      <Script
        id="pricing-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
      />
      {children}
    </>
  );
}
