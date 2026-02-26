import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/structured-data";
import { FAQSchema } from "@/components/seo/faq-schema";

export const metadata: Metadata = {
  title: "Free Church Management Software Pricing | $0 Forever",
  description:
    "Relius is 100% free for church management, online giving, and AI donation tools. Upgrade to Ministry Pro ($60/mo) or Ministry AI ($150/mo) for pastoral care and advanced AI. No hidden fees.",
  keywords: [
    "free church management software",
    "church software pricing",
    "free church software",
    "church management cost",
    "planning center pricing alternative",
  ],
  alternates: { canonical: "https://relius.ai/pricing/" },
  openGraph: {
    title: "Free Church Management Software Pricing | Relius",
    description:
      "100% free forever church management with online giving. Ministry Pro $60/mo. Ministry AI $150/mo. See the full feature comparison.",
    url: "https://relius.ai/pricing/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Relius Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Church Management Software Pricing | Relius",
    description: "100% free forever. Ministry Pro $60/mo. Ministry AI $150/mo. Compare all features.",
  },
};

const pricingFAQs = [
  {
    question: "Is Relius really free?",
    answer:
      "Yes. Our Free plan includes full church management, online giving with AI-powered donation tools, unlimited members, events, and groups — forever. No credit card, no trial period.",
  },
  {
    question: "What does the Free plan include?",
    answer:
      "The Free plan includes member management, online giving with AI-powered donation tools, event management, group management, check-in with QR codes, and a church CRM — all with unlimited members.",
  },
  {
    question: "What's the difference between Ministry Pro and Ministry AI?",
    answer:
      "Ministry Pro ($60/mo) adds pastoral care tracking, service planning, unlimited communications, and advanced reporting. Ministry AI ($150/mo) includes everything in Pro plus AI sermon planner, content studio, real-time translation in 50+ languages, pastoral care insights, and predictive analytics.",
  },
  {
    question: "How does Relius make money if it's free?",
    answer:
      "We charge a small processing fee on donations (2% + $0.19 per transaction) on the Free plan. Paid plans have lower processing fees and additional features.",
  },
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel at any time. Your data is always yours regardless of which plan you're on.",
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "No. All plans are month-to-month with no long-term contracts. The Free plan is free forever with no trial period.",
  },
  {
    question: "How does Relius pricing compare to Planning Center?",
    answer:
      "Planning Center charges per app (People, Giving, Check-Ins, etc.) and prices scale with church size. Relius offers all features in one platform — free for core features, with flat-rate pricing for advanced plans.",
  },
  {
    question: "Do you offer discounts for small churches?",
    answer:
      "Our Free plan is designed for churches of all sizes. Most small and medium churches find the Free plan covers everything they need. There's no minimum size requirement.",
  },
];

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://relius.ai/" },
          { name: "Pricing", url: "https://relius.ai/pricing/" },
        ]}
      />
      <FAQSchema items={pricingFAQs} id="pricing-faq-schema" />
      {children}
    </>
  );
}
