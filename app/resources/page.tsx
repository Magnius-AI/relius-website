import { Metadata } from "next";
import Link from "next/link";
import { resourceCategories, commonQuestions } from "@/data/resources";
import { ResourcesSearch } from "@/components/sections/resources-search";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

const flattenedResources = resourceCategories.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    category: category.name,
  }))
);

export const metadata: Metadata = {
  title: "Resources for churches",
  description: "Guides, best practices, ministry insights, and product updates to help your church thrive with Relius.",
  alternates: {
    canonical: "https://relius.ai/resources/",
  },
  openGraph: {
    title: "Church Resources & Guides | Relius",
    description: "Guides, best practices, ministry insights, and product updates to help your church thrive.",
    url: "https://relius.ai/resources/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Resources & Guides | Relius",
    description: "Guides, best practices, ministry insights, and product updates to help your church thrive.",
  },
  keywords: ["church resources", "ministry guides", "church management tips", "church best practices"],
};

export default function ResourcesPage() {
  return (
    <div className="py-16 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl space-y-14">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-3">Resource hub</p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">Resources to help your ministry</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              Not just product docs-real ministry insights, best practices, and transparent updates from a team that loves the church.
            </p>
            <ul className="space-y-3 text-slate-700">
              {[
                "Guides for switching and onboarding your team",
                "Playbooks shaped with actual churches",
                "Open communication about what we're building next",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button variant="gradient" asChild>
                <Link href="/contact/">Talk with a ministry partner</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/resources/docs/">Visit the Help Center</Link>
              </Button>
            </div>
          </div>
          <Card className="border border-slate-200 shadow-lg">
            <CardContent className="p-6 space-y-6">
              <Image
                src="/images/illustrations/resource-planning.webp"
                alt="Resource planning illustration"
                width={500}
                height={400}
                className="w-full h-auto object-contain"
              />
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-primary-600">Featured resources</p>
                  <p className="text-lg font-semibold text-slate-900">Switching guide + team training kit</p>
                  <p className="text-sm text-slate-600">Use them together to make your rollout calm and pastoral.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                    <p className="text-xs uppercase text-slate-500">Average launch time</p>
                    <p className="text-lg font-bold text-slate-900">21 days</p>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                    <p className="text-xs uppercase text-slate-500">Team training sessions</p>
                    <p className="text-lg font-bold text-slate-900">3 templates</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <ResourcesSearch items={flattenedResources} />

        <section className="space-y-12">
          {resourceCategories.map((category) => (
            <div key={category.name} className="space-y-6">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">{category.name}</p>
                <p className="text-lg text-slate-600">{category.description}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {category.items.map((item) => (
                  <Card key={item.title} className="border border-slate-200 bg-white h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col gap-4 flex-1">
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary-600">{item.type}</span>
                      <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-600 flex-1">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={item.link} className="inline-flex items-center gap-1 text-primary-700 font-semibold">
                        View resource →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-3">Common questions</p>
            <Accordion>
              {commonQuestions.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary-50 to-white p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Help Center</p>
              <h3 className="text-3xl font-bold text-slate-900">Need technical docs?</h3>
              <p className="text-slate-600">Visit the Relius Help Center for API references, setup articles, and release notes-all written in plain language.</p>
            </div>
            <div className="mt-6">
              <Button variant="gradient" asChild>
                <Link href="/resources/docs/">Open Help Center</Link>
              </Button>
              <p className="text-sm text-slate-500 mt-3">Prefer email? support@relius.ai</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
