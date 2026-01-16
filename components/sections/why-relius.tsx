import Image from "next/image";
import { Heart, Users, Calendar, HandHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function WhyRelius() {
  const features = [
    {
      icon: Heart,
      title: "Serve Your People",
      description: "Catch people before they drift away with AI-powered care alerts. Track pastoral care, prayer requests, and life events—and get prompted when someone needs attention.",
      image: "/images/illustrations/care-support.webp",
      imageAlt: "Pastoral care tracking and member support in Relius church CRM software",
      color: "text-rose-500",
      bg: "bg-rose-50",
      border: "group-hover:border-rose-200",
      shadow: "group-hover:shadow-rose-100",
    },
    {
      icon: Users,
      title: "Equip Your Teams",
      description: "End the Sunday morning scramble. AI-assisted scheduling finds the right volunteers, detects burnout, and keeps everyone connected and confirmed.",
      image: "/images/illustrations/team-puzzle.webp",
      imageAlt: "AI-powered volunteer scheduling and team coordination in church management software",
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "group-hover:border-blue-200",
      shadow: "group-hover:shadow-blue-100",
    },
    {
      icon: Calendar,
      title: "Plan Your Ministry",
      description: "Turn one sermon into a week of content. AI transforms your message into emails, social posts, and study guides—all in your voice.",
      image: "/images/illustrations/growth-planning.webp",
      imageAlt: "Ministry planning and sermon content generation tools for churches",
      color: "text-amber-500",
      bg: "bg-amber-50",
      border: "group-hover:border-amber-200",
      shadow: "group-hover:shadow-amber-100",
    },
    {
      icon: HandHeart,
      title: "Grow Your Impact",
      description: "See who's drifting and who's thriving. Predictive analytics help you understand giving trends and engagement—so you can act before it's too late.",
      image: "/images/illustrations/ministry-moments.webp",
      imageAlt: "Church engagement analytics and giving trends dashboard in Relius ChMS",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      border: "group-hover:border-emerald-200",
      shadow: "group-hover:shadow-emerald-100",
    },
  ];

  return (
    <section id="benefits" className="py-24 px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-[0.4]" />

      <div className="container-width relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-balance mb-6 text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything you need to <span className="text-gradient-accent">focus on ministry</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you're serving 50 members or 5,000, our AI church management system (ChMS) helps you care for people, coordinate teams, and plan with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className={`group border border-slate-100 shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden relative ${feature.border}`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-transparent to-white/50 pointer-events-none`} />

                <CardContent className="p-0 h-full flex flex-col relative z-10">
                  <div className="p-8 flex-1">
                    <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.bg} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                      <Icon className={`w-7 h-7 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                  <div className="mt-auto pt-0 flex justify-center">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        width={400}
                        height={300}
                        className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
