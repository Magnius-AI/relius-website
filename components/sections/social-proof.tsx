import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, Users, Sparkles, Clock, ArrowRight, Shield, Zap } from "lucide-react";

export function SocialProof() {
  const highlights = [
    { text: "Built for churches of all sizes", icon: Users },
    { text: "Migrations typically take 2-4 hours", icon: Clock },
    { text: "Ministry-first, technology-second", icon: Heart },
  ];

  const capabilities = [
    {
      icon: Users,
      title: "Volunteer Coordination",
      description: "Smart scheduling, burnout detection, and one-click confirmations that save hours every week.",
    },
    {
      icon: Heart,
      title: "Pastoral Care",
      description: "Track prayer requests, log visits, and ensure no one falls through the cracks.",
    },
    {
      icon: Zap,
      title: "AI-Powered Tools",
      description: "Generate sermon content, translate in real-time, and get insights that help you serve better.",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Badge key={index} variant="secondary" className="px-4 py-1.5 text-sm font-medium bg-slate-50 text-slate-600 border-slate-200 flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5" />
                  {highlight.text}
                </Badge>
              );
            })}
          </div>
          <h2 className="text-balance mb-6 text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Built for <span className="text-gradient-accent">real ministry</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Relius is designed to help church teams spend less time on logistics and more time on the people they serve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card key={index} className="border border-slate-100 bg-white shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{capability.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary-50 to-white shadow-lg">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-primary-600" />
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">Join Our Founding Churches</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Be part of shaping the future of church software
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  We're building Relius with input from church leaders who understand that ministry software should feel pastoral, not corporate. As a founding church, you'll help shape the features and experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="gradient" asChild>
                    <Link href="/contact/" className="flex items-center gap-2">
                      Schedule a Conversation <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="secondary" asChild>
                    <Link href="/features/">Explore Features</Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Your Data, Your Ministry</h4>
                      <p className="text-sm text-slate-600">Migrate your existing data easily. Nothing gets lost in translation.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Partnership, Not Just Software</h4>
                      <p className="text-sm text-slate-600">We're committed to growing with your church for the long haul.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Built With Churches</h4>
                      <p className="text-sm text-slate-600">Every feature shaped by real church leaders and their actual needs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
