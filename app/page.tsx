import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { AIShowcase } from "@/components/sections/ai-showcase";
import { CoreWorkflows } from "@/components/sections/core-workflows";
import { MigrationCallout } from "@/components/sections/migration-callout";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Free Church Management Software with AI | Relius",
  description:
    "100% free church management software with AI-powered giving, scheduling, and pastoral care. The modern Planning Center alternative. No credit card required.",
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
        url: "/og-relius-2026.png",
        width: 1200,
        height: 630,
        alt: "Relius AI Church Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Church Management Software with AI | Relius",
    description:
      "100% free church management with AI-powered giving, volunteer scheduling, and pastoral care. Save 10+ hours weekly. No credit card required.",
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
