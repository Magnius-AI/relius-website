import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { DecorativeOrb } from "@/components/ui/decorative-orb";

export function SocialProof() {
  const stats = [
    "Built for churches 50-5,000+ members",
    "Trusted by growing congregations",
    "Modern technology meets ministry",
  ];

  const testimonials = [
    {
      quote: "Relius has transformed how we manage our church. The AI features save us countless hours every week.",
      author: "Pastor James Miller",
      church: "Grace Community Church",
      size: "450 members",
    },
    {
      quote: "The event scheduling and volunteer management features are game-changers. Everything just works together.",
      author: "Sarah Thompson",
      church: "New Life Fellowship",
      size: "850 members",
    },
    {
      quote: "Finally, a church management system that doesn't feel like it's from the 90s. Our whole team loves it.",
      author: "David Chen",
      church: "City Church",
      size: "1,200 members",
    },
  ];

  return (
    <section className="py-14 px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      {/* Single subtle background pattern */}
      <div className="absolute inset-0 bg-pattern-grid opacity-20" />

      {/* Subtle decorative accents */}
      <DecorativeOrb variant="primary" position="top-right" size="lg" animate />
      <DecorativeOrb variant="accent" position="bottom-left" size="md" animate />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-10">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {stats.map((stat, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1.5 text-sm">
                {stat}
              </Badge>
            ))}
          </div>
          <h2 className="text-balance mb-3 text-slate-900">Trusted by Church Leaders</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            See what pastors and church administrators are saying about Relius
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-slate-200 bg-white">
              <CardContent className="p-5">
                <Quote className="w-7 h-7 text-primary-200 mb-3" />
                <p className="text-slate-700 mb-5 italic text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-slate-100 pt-3">
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-600">{testimonial.church}</p>
                  <p className="text-xs text-slate-500 mt-1">{testimonial.size}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
