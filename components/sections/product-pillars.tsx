import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { pillars } from "@/data/pillars";

export function ProductPillars() {

  return (
    <section id="features" className="py-24 px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-grid opacity-[0.03]" />

      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-400"></span>
            </span>
            Church Management Platform
          </div>
          <h2 className="text-balance mb-6 text-slate-900 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            How Relius helps <span className="text-gradient">your church</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Six key areas working together, so you can spend less time on logistics and more time on what really matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Link key={pillar.title} href={pillar.href} className="group block h-full">
                <Card className="h-full border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden relative">
                  <div className={`absolute top-0 left-0 w-1 h-full ${pillar.bg.replace('bg-', 'bg-gradient-to-b from-')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <CardContent className="p-8">
                    <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl ${pillar.bg} ${pillar.hoverBg} group-hover:text-white transition-all duration-300`}>
                      <Icon className={`w-7 h-7 ${pillar.color} group-hover:text-white transition-colors duration-300`} />
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
