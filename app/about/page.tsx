import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Heart, Users, Lightbulb, HandHeart } from "lucide-react";
import {
  CareSupportIllustration,
  GrowthPlanningIllustration,
} from "@/components/illustrations";

export const metadata: Metadata = {
  title: "About Relius",
  description: "Learn about Relius and our commitment to helping churches spend less time on logistics and more time on ministry.",
  alternates: {
    canonical: "https://relius.ai/about/",
  },
  openGraph: {
    title: "About Relius | Purpose-Built for Ministry",
    description: "Learn about Relius and our commitment to helping churches spend less time on logistics and more time on ministry.",
    url: "https://relius.ai/about/",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Relius | Purpose-Built for Ministry",
    description: "Learn about Relius and our commitment to helping churches spend less time on logistics and more time on ministry.",
  },
  keywords: ["about Relius", "church management company", "ministry software team", "church technology"],
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Ministry First",
      description: "We believe technology should serve ministry, not complicate it. Every feature exists to help you care for people better.",
    },
    {
      icon: Users,
      title: "Built with Churches",
      description: "We listen to pastors, administrators, and volunteers to understand real church needs-not what we think they need.",
    },
    {
      icon: Lightbulb,
      title: "Thoughtfully Simple",
      description: "Powerful doesn't have to mean complicated. We make complex tasks feel simple so anyone on your team can use Relius.",
    },
    {
      icon: HandHeart,
      title: "Partnership Over Sales",
      description: "We're not just selling software-we're partnering with churches for the long term. Your success is our success.",
    },
  ];

  return (
    <div className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="text-left">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-3">Purpose-built for ministry</p>
              <h1 className="mb-6 text-4xl md:text-5xl font-bold text-slate-900">We're here to serve churches</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Relius exists to help church leaders spend less time on logistics and more time on the ministry they're called to do.
              </p>
              <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                Every workflow, reminder, and insight is built with pastors, directors, and volunteers at the table.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
              <Image
                src="/Hero Relius Image.png"
                alt="Relius platform overview"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl"
              />
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-primary-100 bg-primary-50/50 px-4 py-3">
                  <p className="text-xs uppercase font-semibold text-primary-700 tracking-wide">Pastoral Care</p>
                  <p className="text-lg font-semibold text-slate-900">Track every prayer request</p>
                  <p className="text-sm text-slate-600">Log notes, set follow-up reminders, and ensure no one is forgotten</p>
                </div>
                <div className="rounded-2xl border border-slate-200 px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Built-in reminders</p>
                    <p className="text-lg font-semibold text-slate-900">Never miss a follow-up</p>
                  </div>
                  <span className="text-xs font-semibold text-accent-700 bg-accent-50 px-3 py-1 rounded-full">Care & Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 text-3xl font-bold text-slate-900">Why we built Relius</h2>
            <div className="bg-white rounded-2xl p-10 md:p-12 shadow-sm border border-slate-200 space-y-8">
              <div className="w-full max-w-md mx-auto">
                <CareSupportIllustration className="w-full" title="Pastoral care illustration" />
              </div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                We've seen too many church leaders frustrated by software that makes their jobs harder, not easier. Hours spent wrestling with complicated systems. Time that could be spent caring for people instead wasted on administrative tasks.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                We believe there's a better way. Church management software should feel like a helpful partner, not another burden. It should be simple enough for anyone to use, yet powerful enough to handle everything your church needs.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                That's why Relius exists-to give you back time so you can focus on what truly matters: serving your people, strengthening your community, and advancing your mission.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-center mb-12 text-3xl font-bold text-slate-900">Our commitments to you</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="border border-slate-200 shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900">{value.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 text-3xl font-bold text-slate-900">Where we're going</h2>
            <div className="bg-slate-50 rounded-2xl p-10 md:p-12 border border-slate-200 space-y-8">
              <div className="w-full max-w-md mx-auto">
                <GrowthPlanningIllustration className="w-full" title="Planning ahead illustration" />
              </div>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                We're just getting started. We're actively working with churches to refine and improve every aspect of the platform.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">We're listening</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Every feature we build is shaped by feedback from real church leaders. If something doesn't work the way you need it to, we want to know.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">We're growing thoughtfully</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Rather than cramming in every possible feature, we're focused on doing the essentials exceptionally well. As we grow, we'll continue prioritizing simplicity and usefulness over complexity.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">We're here for the long haul</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Building great software takes time, and building trust takes even longer. We're committed to being a reliable partner for your church for years to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-white border border-slate-200 rounded-2xl p-12 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Let's talk about your church</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're learning every day. Whether you're interested in trying Relius or just want to share what your church needs, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact/">Schedule a Conversation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/features/">See How It Works</Link>
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-6">No sales pitch-just an honest conversation about how we can help.</p>
        </div>
      </div>
    </div>
  );
}
