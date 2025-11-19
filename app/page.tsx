import { Hero } from "@/components/sections/hero";
import { WhyRelius } from "@/components/sections/why-relius";
import { KpiStripe } from "@/components/sections/kpi-stripe";
import { ProductPillars } from "@/components/sections/product-pillars";
import { SocialProof } from "@/components/sections/social-proof";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyRelius />
      <KpiStripe />
      <ProductPillars />
      <SocialProof />
      <FinalCta />
    </>
  );
}
