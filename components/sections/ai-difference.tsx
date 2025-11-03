import Link from "next/link";
import { FileText, Newspaper, Languages, Heart, TrendingUp, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DecorativeOrb } from "@/components/ui/decorative-orb";

export function AiDifference() {
  const aiFeatures = [
    {
      icon: FileText,
      title: "Sermon Generator",
      description: "Draft sermons in your voice from scripture, topic, or style inputs.",
    },
    {
      icon: Newspaper,
      title: "Content Studio",
      description: "Turn messages into emails, social posts, studies, and devotionals instantly.",
    },
    {
      icon: Languages,
      title: "Translation Console",
      description: "Live captions in 50+ languages with QR access for your congregation.",
    },
    {
      icon: Heart,
      title: "Pastoral Care AI",
      description: "Spot needs earlier with sentiment analysis and automated follow-ups.",
    },
    {
      icon: TrendingUp,
      title: "Donations Manager",
      description: "Forecast giving, identify retention risks, and optimize engagement.",
    },
    {
      icon: BarChart3,
      title: "AI Insights Dashboard",
      description: "Predict attendance, optimize volunteers, and get actionable recommendations.",
    },
  ];

  return (
    <section className="py-14 px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Single subtle background pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-40" />

      {/* Subtle decorative accents */}
      <DecorativeOrb variant="accent" position="top-right" size="lg" animate />
      <DecorativeOrb variant="primary" position="bottom-left" size="md" animate />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-10">
          <Badge variant="default" className="mb-3">
            AI-Powered
          </Badge>
          <h2 className="text-balance mb-3 text-slate-900">The AI Difference</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Draft sermons in your voice. Turn messages into studies and posts. Spot needs earlier. Forecast attendance and giving. Translate on the fly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {aiFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border border-slate-200 hover:border-primary hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-50">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/ai">See How It Works</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
