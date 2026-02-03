import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { coreFeatures, aiFeatures } from "@/data/features";

export const metadata: Metadata = {
  title: "Church Management Software Features | Automation Tools",
  description:
    "Explore Relius church management features: volunteer scheduling, pastoral care tracking, church automation tools, content creation, and workflow automation. See how churches save 10+ hours weekly.",
  alternates: {
    canonical: "https://relius.com/features/",
  },
  openGraph: {
    title: "Church Management Software Features | Relius",
    description:
      "Church automation tools for volunteer scheduling, pastoral care, and ministry workflow automation.",
    url: "https://relius.com/features/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Management Software Features | Relius",
    description:
      "Church automation tools for volunteer scheduling, pastoral care, and ministry workflow automation.",
  },
};

export default function FeaturesPage() {
  return (
    <div className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center mb-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-3">Ministry operating system</p>
            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-slate-900 text-balance">Church management features that save you time</h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              Relius brings people, services, giving, and communication into one warm, ministry-focused home. Plan with confidence, care with clarity, and never lose track of what matters.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Unified calendar + volunteer schedules",
                "Pastoral care and prayer follow-up",
                "Insights that feel pastoral",
                "AI helpers that sound like you",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent-500" />
                  <p className="text-sm font-semibold text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="gradient" asChild>
                <Link href="/contact/">Walk through the platform</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/use-cases/">See use cases</Link>
              </Button>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-6 relative overflow-hidden">
            <div className="absolute inset-x-10 top-8 h-32 bg-primary-50/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            <Image
              src="/images/illustrations/worship-celebration.webp"
              alt="Coordinated worship services"
              width={600}
              height={400}
              className="relative z-10 w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="mb-24">
          <div className="flex items-center gap-5 mb-12">
            <div className="hidden md:block w-32">
              <Image
                src="/images/illustrations/ministry-essentials-v2.webp"
                alt="Ministry essentials illustration"
                width={128}
                height={96}
                className="h-24 w-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-2">Core workflows</p>
              <h2 className="text-3xl font-bold text-slate-900">Ministry essentials</h2>
            </div>
          </div>

          <div className="space-y-12">
            {coreFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} id={feature.id} className="scroll-mt-24">
                  <Card className="border-2">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                          <p className="text-slate-500">{feature.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {feature.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-10">
          <div className="flex flex-col gap-6 mb-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <div className="hidden md:block w-32">
                <Image
                  src="/images/illustrations/ai-features-v2.webp"
                  alt="AI features illustration"
                  width={128}
                  height={96}
                  className="h-24 w-full object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-2">Optional helpers</p>
                <div className="flex items-center gap-3">
                  <h2 id="ai" className="text-3xl font-bold text-slate-900">Work smarter with AI</h2>
                  <Badge variant="default" className="text-xs whitespace-nowrap self-center">Optional Add-on</Badge>
                </div>
              </div>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl">
              AI features that save you hours every week, so you can spend more time on what matters. They amplify ministry-they never replace it.
            </p>
          </div>

          <div className="space-y-12">
            {aiFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} id={feature.id} className="scroll-mt-24">
                  <Card className="border-2 border-primary/30 bg-gradient-to-br from-white to-accent-50/30">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                          <p className="text-slate-500">{feature.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {feature.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center bg-white border border-slate-200 rounded-2xl p-12 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-slate-900">See how it all works together</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s talk about your church&apos;s unique needs. We&apos;ll show you how Relius can help you spend less time on logistics and more time on ministry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact/">Schedule a Conversation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/pricing/">See Pricing</Link>
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-6">No pressure, just answers.</p>
        </div>
      </div>
    </div>
  );
}
