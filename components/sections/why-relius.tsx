import { Sparkles, Zap, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { DecorativeOrb } from "@/components/ui/decorative-orb";

export function WhyRelius() {
  const features = [
    {
      icon: Sparkles,
      title: "All-in-One Platform",
      description: "Replace multiple tools with one modern ChMS. Manage people, groups, events, giving, volunteers, and more.",
    },
    {
      icon: Zap,
      title: "AI-Powered Workflows",
      description: "Generate sermons, create content, provide pastoral care, and gain insights, all powered by AI that saves hours every week.",
    },
    {
      icon: Users,
      title: "Modern, Intuitive UI",
      description: "Beautiful, easy-to-use interface that your entire team will love. No clunky legacy software.",
    },
    {
      icon: TrendingUp,
      title: "Scales with You",
      description: "Built for churches from 50 to 5,000+ members. Grow without outgrowing your tools.",
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
          <h2 className="text-balance mb-3 text-slate-900">Why Choose Relius?</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            The complete church management platform designed for the modern church
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border border-slate-200 hover:border-primary hover:shadow-md transition-all duration-200">
                <CardContent className="p-5">
                  <div className="mb-3 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary-50">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
