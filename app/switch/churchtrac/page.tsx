import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowLeft, Sparkles, Clock, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { MigrationSteps } from "@/components/ui/migration-steps";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { getMigrationPlatform, migrationSteps, commonMigrationFAQs } from "@/data/migrations";
import { MIGRATION_PAGE_META, getContactUrlForMigration } from "@/lib/migration-urls";

const platform = getMigrationPlatform("churchtrac")!;

export const metadata: Metadata = {
  title: MIGRATION_PAGE_META["churchtrac"].title,
  description: MIGRATION_PAGE_META["churchtrac"].description,
  keywords: MIGRATION_PAGE_META["churchtrac"].keywords,
};

export default function ChurchTracMigrationPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-pattern-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10 pointer-events-none" />

        <div className="container-width px-6 lg:px-8">
          <Link
            href="/switch/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-accent-600 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            All migration guides
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-medium mb-6">
              <Clock className="h-4 w-4" />
              Average migration time: 2-3 hours
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Switching from {platform.name} to Relius
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {platform.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                className="rounded-full"
                asChild
              >
                <Link href={getContactUrlForMigration("churchtrac")}>
                  Start Your Free Migration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                asChild
              >
                <Link href="#comparison">
                  See Feature Comparison
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Transfers Section */}
      <section className="py-16 px-6 lg:px-8 bg-slate-50">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                What transfers from {platform.name}
              </h2>
              <div className="space-y-4">
                {platform.dataTypes.map((dataType) => (
                  <div key={dataType} className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">{dataType}</p>
                      <p className="text-sm text-slate-600">
                        {dataType === "People" && "Member profiles, contact info, family relationships, attendance history"}
                        {dataType === "Donations" && "Complete contribution records, fund allocations, giving statements"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                What you gain with Relius
              </h2>
              <div className="space-y-4">
                {platform.whatYouGain.map((gain, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i < 3 ? (
                        <Sparkles className="h-3.5 w-3.5 text-accent-600" />
                      ) : (
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent-600" />
                      )}
                    </div>
                    <p className="text-slate-700">{gain}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section id="comparison" className="py-16 px-6 lg:px-8 bg-white scroll-mt-24">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {platform.name} vs Relius
            </h2>
            <p className="text-lg text-slate-600">
              See how Relius compares feature by feature
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ComparisonTable
              features={platform.features}
              competitorName={platform.name}
            />
          </div>
        </div>
      </section>

      {/* Export Instructions */}
      <section className="py-16 px-6 lg:px-8 bg-slate-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium mb-4">
                <FileDown className="h-4 w-4" />
                Step 1: Export Your Data
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                How to export from {platform.name}
              </h2>
              <p className="text-slate-600">
                Follow these steps to download your data, then upload it to Relius
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
              <ol className="space-y-4">
                {platform.exportInstructions.map((instruction, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent-100 text-accent-600 font-semibold text-sm flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-slate-700 pt-0.5">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Steps */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Then, import into Relius
            </h2>
            <p className="text-slate-600">
              Our guided wizard walks you through every step
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <MigrationSteps steps={migrationSteps} variant="vertical" />
          </div>
        </div>
      </section>

      {/* Common Concerns */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Concerned about switching?
              </h2>
              <p className="text-slate-600">
                We hear you. Here&apos;s what we want you to know:
              </p>
            </div>

            <div className="grid gap-4">
              {platform.commonConcerns.map((concern, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-lg p-4">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">{concern}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 lg:px-8 bg-slate-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Frequently asked questions
              </h2>
            </div>

            <Accordion>
              {[...platform.faqs, ...commonMigrationFAQs.slice(0, 3)].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-white py-20 px-6 lg:px-8">
        <div className="absolute inset-0 bg-pattern-dots opacity-10" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-white px-8 py-12 text-center shadow-xl sm:px-16 sm:py-16">
            <h2 className="text-balance mb-4 text-slate-900 text-3xl sm:text-4xl font-bold">
              Ready to switch from {platform.name}?
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Start your free trial and bring your church data with you. Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="accent"
                size="lg"
                className="group shadow-lg"
                asChild
              >
                <Link href={getContactUrlForMigration("churchtrac")}>
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
