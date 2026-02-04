import { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { WhyRelius } from "@/components/sections/why-relius";
import { KpiStripe } from "@/components/sections/kpi-stripe";
import { ProductPillars } from "@/components/sections/product-pillars";
import { MigrationCallout } from "@/components/sections/migration-callout";
import { SocialProof } from "@/components/sections/social-proof";
import { FinalCta } from "@/components/sections/final-cta";
import { InteractiveDemo } from "@/components/demo";

export const metadata: Metadata = {
  title: "AI Church Administration Tools | Workflow Automation Features",
  description:
    "AI-powered church administration tools that automate content creation, pastoral care insights, and sermon planning. Church workflow automation that saves 10+ hours weekly.",
  alternates: {
    canonical: "https://relius.ai/ai/",
  },
  openGraph: {
    title: "AI Church Administration & Automation Tools | Relius",
    description:
      "Church automation tools for content creation, pastoral care, and workflow automation. Save 10+ hours weekly.",
    url: "https://relius.ai/ai/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Church Administration & Automation Tools | Relius",
    description:
      "Church automation tools for content creation, pastoral care, and workflow automation. Save 10+ hours weekly.",
  },
  keywords: ["AI church tools", "church automation", "AI sermon planner", "church workflow automation", "AI pastoral insights"],
};

export default function AiPage() {
  return (
    <>
      <Hero />
      <InteractiveDemo />
      <WhyRelius />
      <KpiStripe />
      <ProductPillars />
      <MigrationCallout />
      <SocialProof />
      <FinalCta />
    </>
  );
}
