import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { WhyRelius } from "@/components/sections/why-relius";
import { KpiStripe } from "@/components/sections/kpi-stripe";
import { ProductPillars } from "@/components/sections/product-pillars";
import { MigrationCallout } from "@/components/sections/migration-callout";
import { SocialProof } from "@/components/sections/social-proof";
import { FinalCta } from "@/components/sections/final-cta";
import { InteractiveDemo } from "@/components/demo";
import Link from "next/link";

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
              <section className="py-16 px-6 bg-slate-50">
                          <div className="max-w-5xl mx-auto">
                                        <h2 className="text-3xl font-bold text-center mb-2">Latest from the blog</h2>
                                                    <p className="text-center text-slate-600 mb-10">Practical guides to help your church thrive</p>
                                                                <div className="grid md:grid-cols-3 gap-6">
                                                                              <Link href="/blog/church-budget-guide/" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                                                                              <h3 className="font-semibold text-lg mb-2">How to Create a Church Budget That Reflects Your Mission</h3>
                                                                                                              <p className="text-sm text-slate-500">A step-by-step guide to building a budget aligned with your church&apos;s vision.</p>
                                                                                                                            </Link>
                                                                                                                                          <Link href="/blog/digital-giving-trends-2026/" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                                                                                                                                          <h3 className="font-semibold text-lg mb-2">Digital Giving Trends Every Church Needs to Know in 2026</h3>
                                                                                                                                                                          <p className="text-sm text-slate-500">Stay ahead of the curve with the latest in church giving technology.</p>
                                                                                                                                                                                        </Link>
                                                                                                                                                                                                      <Link href="/blog/church-volunteer-scheduling-playbook/" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                                                                                                                                                                                                      <h3 className="font-semibold text-lg mb-2">The Church Volunteer Scheduling Playbook</h3>
                                                                                                                                                                                                                                      <p className="text-sm text-slate-500">Recruit, schedule, and retain volunteers without the headaches.</p>
                                                                                                                                                                                                                                                    </Link>
                                                                                                                                                                                                                                                                  <Link href="/blog/church-tax-season-checklist/" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                                                                                                                                                                                                                                                                  <h3 className="font-semibold text-lg mb-2">Church Tax Season Checklist for 2026</h3>
                                                                                                                                                                                                                                                                                                  <p className="text-sm text-slate-500">Everything you need to prepare for tax season as a church.</p>
                                                                                                                                                                                                                                                                                                                </Link>
                                                                                                                                                                                                                                                                                                                              <Link href="/blog/church-leadership-transitions/" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                                                                                                                                                                                                                                                                                                                              <h3 className="font-semibold text-lg mb-2">Church Leadership Transitions Done Right</h3>
                                                                                                                                                                                                                                                                                                                                                              <p className="text-sm text-slate-500">Navigate pastoral and leadership changes with confidence.</p>
                                                                                                                                                                                                                                                                                                                                                                            </Link>
                                                                                                                                                                                                                                                                                                                                                                                          <Link href="/blog/ai-changing-church-administration/" className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                                                                                                                                                                                                                                                                                                                                                                                          <h3 className="font-semibold text-lg mb-2">How AI Is Changing Church Administration</h3>
                                                                                                                                                                                                                                                                                                                                                                                                                          <p className="text-sm text-slate-500">Discover how artificial intelligence is transforming ministry operations.</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                        </Link>
                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div className="text-center mt-8">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <Link href="/blog/" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              View all articles &rarr;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </Link>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </section>
      <FinalCta />
    </>
  );
}
