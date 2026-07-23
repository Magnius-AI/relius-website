import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { AIShowcase } from "@/components/sections/ai-showcase";
import { CoreWorkflows } from "@/components/sections/core-workflows";
import { MigrationCallout } from "@/components/sections/migration-callout";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Free church management software for people, giving, and events | Relius",
  description:
    "Keep people, giving, events, and follow-up in the same place. Free plans are available, alongside AI tools for sermon prep, messages, and care.",
  alternates: {
    canonical: "https://relius.ai/",
  },
  openGraph: {
    type: "website",
    url: "https://relius.ai",
    siteName: "Relius",
    title: "Free church management software for people, giving, and events | Relius",
    description:
      "Keep people, giving, events, and follow-up in the same place. Free plans are available, alongside AI tools for sermon prep, messages, and care.",
    images: [
      {
        url: "/og-relius-2026.png",
        width: 1200,
        height: 630,
        alt: "Relius AI Church Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free church management software for people, giving, and events | Relius",
    description:
      "Keep people, giving, events, and follow-up in the same place. Free plans are available, alongside AI tools for sermon prep, messages, and care.",
    images: ["/og-relius-2026.png"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AIShowcase />
      <CoreWorkflows />
      <MigrationCallout />
      <FinalCta />
    </>
  );
}
