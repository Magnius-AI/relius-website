import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { DecorativeOrb } from "@/components/ui/decorative-orb";

export function SocialProof() {
  const stats = [
    "Serving churches from 50 to 5,000+ members",
    "Ministry-first, technology-second",
    "Designed with pastors and church staff",
  ];

  const testimonials = [
    {
      quote: "Before Relius, our volunteer coordinator spent 5 hours every week making schedules. Now it takes 30 minutes, and she spends that saved time actually connecting with volunteers.",
      author: "Sarah Martinez",
      role: "Operations Pastor",
      church: "New Hope Community Church",
      size: "850 members",
    },
    {
      quote: "I was skeptical about church software with AI, but it's not about replacing ministry-it helps me serve better. The pastoral care insights helped us reach out to three families going through hard times we might have missed.",
      author: "Rev. Michael Thompson",
      role: "Lead Pastor",
      church: "Grace Fellowship",
      size: "320 members",
    },
    {
      quote: "Our team ranges from tech-savvy millennials to volunteers who barely use email. Everyone adapted to Relius in days, not months. That's how you know it's designed well.",
      author: "David Chen",
      role: "Church Administrator",
      church: "City Church Downtown",
      size: "1,200 members",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Minimal decoration */}
      <div className="absolute inset-0 bg-pattern-grid opacity-5" />

      {/* Single subtle decorative accent */}
      <DecorativeOrb variant="primary" position="top-left" size="sm" animate />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-14">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {stats.map((stat, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm font-medium bg-white border-slate-200">
                {stat}
              </Badge>
            ))}
          </div>
          <h2 className="text-balance mb-4 text-slate-900 text-3xl md:text-4xl font-bold">Real churches, real stories</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            See how church leaders are using Relius to spend less time on logistics and more time on ministry
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                <p className="text-slate-700 mb-6 leading-relaxed text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-semibold text-slate-900 text-base">{testimonial.author}</p>
                  <p className="text-sm text-slate-600 mt-1">{testimonial.role}</p>
                  <p className="text-sm text-slate-600">{testimonial.church}</p>
                  <p className="text-xs text-slate-500 mt-2">{testimonial.size}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
