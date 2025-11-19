import { Heart, Users, Calendar, HandHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CareSupportIllustration,
  VolunteerCoordinationIllustration,
  GrowthPlanningIllustration,
  MinistryMomentsIllustration,
} from "@/components/illustrations";

export function WhyRelius() {
  const features = [
    {
      icon: Heart,
      title: "Serve Your People",
      description: "Know your members better so you can care for them better. Track pastoral care, prayer requests, and life events in one place.",
      Illustration: CareSupportIllustration,
      color: "text-rose-500",
      bg: "bg-rose-50",
      border: "group-hover:border-rose-200",
      shadow: "group-hover:shadow-rose-100",
    },
    {
      icon: Users,
      title: "Equip Your Teams",
      description: "Coordinate volunteers, organize groups, and communicate effortlessly. Everyone knows their role and feels connected.",
      Illustration: VolunteerCoordinationIllustration,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "group-hover:border-blue-200",
      shadow: "group-hover:shadow-blue-100",
    },
    {
      icon: Calendar,
      title: "Plan Your Ministry",
      description: "From weekly services to annual events, manage everything seamlessly. Set it up once, and Relius remembers.",
      Illustration: GrowthPlanningIllustration,
      color: "text-amber-500",
      bg: "bg-amber-50",
      border: "group-hover:border-amber-200",
      shadow: "group-hover:shadow-amber-100",
    },
    {
      icon: HandHeart,
      title: "Grow Your Impact",
      description: "Track giving with transparency, understand engagement trends, and make informed decisions that strengthen your ministry.",
      Illustration: MinistryMomentsIllustration,
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
            Whether you're serving 50 members or 5,000, Relius helps you care for people, coordinate teams, and plan with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const Illustration = feature.Illustration;
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
                  <div className="mt-auto px-6 pb-6 pt-0 flex justify-center">
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-50/50 p-4 group-hover:bg-white/80 transition-colors duration-300">
                      <Illustration
                        className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110"
                        title={`${feature.title} illustration`}
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
