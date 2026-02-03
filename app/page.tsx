import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { WhyRelius } from "@/components/sections/why-relius";
import { KpiStripe } from "@/components/sections/kpi-stripe";
import { ProductPillars } from "@/components/sections/product-pillars";
import { MigrationCallout } from "@/components/sections/migration-callout";
import { SocialProof } from "@/components/sections/social-proof";
import { FinalCta } from "@/components/sections/final-cta";
import { InteractiveDemo } from "@/components/demo";

export const metadata: Metadata = {
  title: "AI Church Management Software | Relius - Save 10+ Hours Weekly",
  description:
    "AI-powered church management software with workflow automation, volunteer scheduling, and pastoral care tools. The modern Planning Center alternative that saves 10+ hours weekly. Start your free trial.",
  openGraph: {
    title: "AI Church Management Software | Relius",
    description:
      "Church automation tools that save 10+ hours weekly. AI-powered volunteer scheduling, pastoral care, and church administration software.",
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
      <FinalCta />
    </>
  );
}
