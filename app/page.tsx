import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { WhyRelius } from "@/components/sections/why-relius";
import { KpiStripe } from "@/components/sections/kpi-stripe";
import { ProductPillars } from "@/components/sections/product-pillars";
import { MigrationCallout } from "@/components/sections/migration-callout";
import { SocialProof } from "@/components/sections/social-proof";
import { FinalCta } from "@/components/sections/final-cta";
import { HomepageFAQ } from "@/components/sections/homepage-faq";
import { InteractiveDemo } from "@/components/demo";

export const metadata: Metadata = {
  title: "Free Church Management Software with AI | Save 10+ Hours Weekly",
  description:
    "100% free church management software with AI-powered giving, volunteer scheduling, and pastoral care. The modern Planning Center & Tithe.ly alternative used by churches nationwide. No credit card, no hidden fees.",
  alternates: {
    canonical: "https://relius.ai/",
  },
  openGraph: {
    type: "website",
    url: "https://relius.ai",
    siteName: "Relius",
    title: "Free Church Management Software with AI | Relius",
    description:
      "100% free church management with AI-powered giving, volunteer scheduling, and pastoral care. Save 10+ hours weekly. No credit card required.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Relius AI Church Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Church Management Software with AI | Relius",
    description: "100% free church management with AI-powered giving, volunteer scheduling, and pastoral care. Save 10+ hours weekly.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <InteractiveDemo />
      <WhyRelius />
      <KpiStripe />
      <ProductPillars />
      <MigrationCallout />
      <SocialProof />
            <HomepageFAQ />
      <FinalCta />
    </>
  );
}
