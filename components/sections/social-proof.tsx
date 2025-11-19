import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

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
      initials: "SM",
      color: "bg-rose-100 text-rose-600",
    },
    {
      quote: "I was skeptical about church software with AI, but it's not about replacing ministry—it helps me serve better. The pastoral care insights helped us reach out to three families going through hard times we might have missed.",
      author: "Rev. Michael Thompson",
      role: "Lead Pastor",
      church: "Grace Fellowship",
      size: "320 members",
      initials: "MT",
      color: "bg-blue-100 text-blue-600",
    },
    {
      quote: "Our team ranges from tech-savvy millennials to volunteers who barely use email. Everyone adapted to Relius in days, not months. That's how you know it's designed well.",
      author: "David Chen",
      role: "Church Administrator",
      church: "City Church Downtown",
      size: "1,200 members",
      initials: "DC",
      color: "bg-emerald-100 text-emerald-600",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {stats.map((stat, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-1.5 text-sm font-medium bg-slate-50 text-slate-600 border-slate-200">
                {stat}
              </Badge>
            ))}
          </div>
          <h2 className="text-balance mb-6 text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Real churches, <span className="text-gradient-accent">real stories</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            See how church leaders are using Relius to spend less time on logistics and more time on ministry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-slate-100 bg-white shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-10 h-10 text-slate-200 mb-4" />

                <p className="text-slate-700 mb-8 leading-relaxed text-lg flex-1">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${testimonial.color}`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                    <p className="text-xs text-slate-600 mt-0.5">{testimonial.church} • {testimonial.size}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
