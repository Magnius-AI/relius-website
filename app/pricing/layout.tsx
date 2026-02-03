import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for churches of all sizes. Plans start at $39.99/month with unlimited members. No per-member fees, no hidden costs.",
  alternates: {
    canonical: "https://relius.com/pricing/",
  },
  openGraph: {
    title: "Pricing | Relius",
    description:
      "Simple, transparent pricing for churches of all sizes. Plans start at $39.99/month with unlimited members.",
    url: "https://relius.com/pricing/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Relius",
    description:
      "Simple, transparent pricing for churches of all sizes. Plans start at $39.99/month with unlimited members.",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
