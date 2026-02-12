import { Metadata } from "next";
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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Relius Pricing Plans" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Church Management Software | Relius Pricing",
    description:
      "Free church management with online giving and AI donation tools. Unlimited members, no credit card required. Upgrade for pastoral care and AI features.",
  },
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
      {children}
    </>
  );
}
