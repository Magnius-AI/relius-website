import { Heart, Users, Calendar, HandHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { DecorativeOrb } from "@/components/ui/decorative-orb";
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
    },
    {
      icon: Users,
      title: "Equip Your Teams",
      description: "Coordinate volunteers, organize groups, and communicate effortlessly. Everyone knows their role and feels connected.",
      Illustration: VolunteerCoordinationIllustration,
    },
    {
      icon: Calendar,
      title: "Plan Your Ministry",
      description: "From weekly services to annual events, manage everything seamlessly. Set it up once, and Relius remembers.",
      Illustration: GrowthPlanningIllustration,
    },
    {
      icon: HandHeart,
      title: "Grow Your Impact",
      description: "Track giving with transparency, understand engagement trends, and make informed decisions that strengthen your ministry.",
      Illustration: MinistryMomentsIllustration,
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Simplified background - minimal decoration */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10" />

      {/* Single subtle decorative accent */}
      <DecorativeOrb variant="accent" position="bottom-right" size="sm" animate />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-balance mb-4 text-slate-900 text-3xl md:text-4xl font-bold">Everything you need to focus on ministry</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you're serving 50 members or 5,000, Relius helps you care for people, coordinate teams, and plan with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            const Illustration = feature.Illustration;
            return (
              <Card key={feature.title} className="border border-slate-200 hover:border-primary hover:shadow-md transition-all duration-200">
                <CardContent className="p-5">
                  <div className="mb-3 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary-50">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <Illustration className="mb-4 h-40 w-full" title={`${feature.title} illustration`} />
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
