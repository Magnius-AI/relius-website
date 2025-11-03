import Link from "next/link";
import { Users, Calendar, DollarSign, UserCheck, ClipboardCheck, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { DecorativeOrb } from "@/components/ui/decorative-orb";

export function ProductPillars() {
  const pillars = [
    {
      icon: Users,
      title: "People & Groups",
      description: "One directory. Rich profiles. Clear timelines.",
      href: "/features#people",
    },
    {
      icon: Calendar,
      title: "Events & Calendar",
      description: "Plan once, avoid conflicts, keep everyone in the loop.",
      href: "/features#events",
    },
    {
      icon: DollarSign,
      title: "Giving & Donors",
      description: "Understand trends, thank faster, grow generosity.",
      href: "/features#giving",
    },
    {
      icon: UserCheck,
      title: "Volunteers & Services",
      description: "Right people, right roles, right times.",
      href: "/features#volunteers",
    },
    {
      icon: ClipboardCheck,
      title: "Check-ins & Attendance",
      description: "Secure, fast, and kid-friendly.",
      href: "/features#checkins",
    },
    {
      icon: Sparkles,
      title: "AI Studio",
      description: "Draft sermons, repurpose content, care at scale.",
      href: "/features#ai",
    },
  ];

  return (
    <section id="features" className="py-14 px-6 lg:px-8 bg-mesh-accent relative overflow-hidden">
      {/* Single subtle background pattern */}
      <div className="absolute inset-0 bg-pattern-grid opacity-30" />

      {/* Subtle decorative accents */}
      <DecorativeOrb variant="primary" position="top-left" size="lg" animate />
      <DecorativeOrb variant="accent" position="bottom-right" size="md" animate />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-balance mb-3 text-slate-900">Everything You Need to Run Your Church</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Six powerful modules working together seamlessly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Link key={pillar.title} href={pillar.href} className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 rounded-xl">
                <Card className="h-full border border-slate-200 hover:border-primary hover:shadow-md focus-within:border-primary focus-within:shadow-md transition-all duration-200 group cursor-pointer bg-white">
                  <CardHeader>
                    <div className="mb-3 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary-50 group-hover:bg-primary group-hover:text-white group-focus-within:bg-primary group-focus-within:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="flex items-center justify-between text-lg">
                      {pillar.title}
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 group-focus-within:text-primary group-focus-within:translate-x-1 transition-all" />
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-600">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
