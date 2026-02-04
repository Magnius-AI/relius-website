import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, CheckCircle2, Clock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MigrationSteps } from "@/components/ui/migration-steps";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { migrationSteps, migrationPlatforms, commonMigrationFAQs, migrationTrustSignals } from "@/data/migrations";
import { MIGRATION_PAGE_META } from "@/lib/migration-urls";

export const metadata: Metadata = {
  title: MIGRATION_PAGE_META.hub.title,
  description: MIGRATION_PAGE_META.hub.description,
  keywords: MIGRATION_PAGE_META.hub.keywords,
  alternates: {
    canonical: "https://relius.ai/switch/",
  },
  openGraph: {
    title: "Switch to Relius | Free Church Data Migration",
    description: "Migrate from Planning Center, ChurchTrac, or Tithe.ly to Relius with free guided migration assistance.",
    url: "https://relius.ai/switch/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Switch to Relius | Free Church Data Migration",
    description: "Migrate from Planning Center, ChurchTrac, or Tithe.ly to Relius with free guided migration assistance.",
  },
};

const platforms = migrationPlatforms.map((p) => ({
  slug: p.slug,
  name: p.name,
  tagline: p.tagline,
  dataTypes: p.dataTypes,
}));

export default function SwitchPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-pattern-grid opacity-[0.03]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-radial-primary opacity-20 blur-3xl -z-10" />

        <div className="container-width px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-sm font-medium mb-8">
              <Shield className="h-4 w-4 text-accent-500" />
              Free Migration Assistance Available
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Bring your church history with you.{" "}
              <span className="text-gradient-accent">Switch in an afternoon.</span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Your member records, donation history, and years of data don&apos;t have to stay behind.
              Our guided migration wizard makes switching to Relius simple and safe.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-slate-500">
              {migrationTrustSignals.slice(0, 3).map((signal, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Where are you coming from?
            </h2>
            <p className="text-lg text-slate-600">
              Select your current platform for step-by-step migration instructions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {platforms.map((platform) => (
              <Link
                key={platform.slug}
                href={`/switch/${platform.slug}`}
                className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-accent-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-accent-600 transition-colors mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-slate-600 text-sm">{platform.tagline}</p>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">
                    What transfers:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {platform.dataTypes.map((type) => (
                      <span
                        key={type}
                        className="inline-flex items-center px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                  <Clock className="h-4 w-4" />
                  <span>Average: 2-4 hours</span>
                </div>

                <div className="flex items-center text-accent-600 font-medium group-hover:gap-3 gap-2 transition-all">
                  <span>See migration guide</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Using a different platform? We can help with that too.
            </p>
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/contact/?interest=migration">
                Contact us for custom migration help
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How migration works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our guided wizard walks you through every step. No technical expertise required.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <MigrationSteps steps={migrationSteps} />
          </div>
        </div>
      </section>

      {/* What Makes Our Migration Different */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Migration that actually works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We built our migration system to handle the messy reality of church data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Intelligent Field Mapping</h3>
              <p className="text-slate-600 text-sm">
                Our system auto-detects your column structure and suggests the right mappings. You review and adjust as needed.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Smart Duplicate Detection</h3>
              <p className="text-slate-600 text-sm">
                AI-powered matching finds potential duplicates and lets you decide: merge records, create new, or skip.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Nothing Gets Lost</h3>
              <p className="text-slate-600 text-sm">
                Columns that don&apos;t map directly are saved as searchable tags. Your data audit trail is preserved.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Safe Rollback</h3>
              <p className="text-slate-600 text-sm">
                Per-record savepoints mean a failed record doesn&apos;t affect others. Re-import problem records after fixing.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Detailed Reporting</h3>
              <p className="text-slate-600 text-sm">
                See exactly what was imported, what needs attention, and download error reports for any issues.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Free Assistance</h3>
              <p className="text-slate-600 text-sm">
                Stuck? Our team is available to help with your migration at no extra cost. We want you to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-4">
                <HelpCircle className="h-4 w-4" />
                Common Questions
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Migration FAQ
              </h2>
            </div>

            <Accordion>
              {commonMigrationFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-white py-20 px-6 lg:px-8">
        <div className="absolute inset-0 bg-pattern-dots opacity-10" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-white px-8 py-12 text-center shadow-xl sm:px-16 sm:py-16">
            <h2 className="text-balance mb-4 text-slate-900 text-3xl sm:text-4xl font-bold">
              Ready to make the switch?
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Start your free trial and import your data today. Our team is here to help every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="accent"
                size="lg"
                className="group shadow-lg"
                asChild
              >
                <Link href="/contact/?interest=migration">
                  Start Your Migration
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <Link href="/pricing/">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
