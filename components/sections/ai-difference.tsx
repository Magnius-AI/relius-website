import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { aiFeaturesSummary } from "@/data/features";

export function AiDifference() {

  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-accent-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="bg-gradient-to-r from-accent-300 to-white bg-clip-text text-transparent">
              Powered by Advanced AI
            </span>
          </div>

          <h2 className="text-balance mb-6 text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            AI that helps, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-cyan-300">not hinders</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Save hours every week with thoughtful AI assistance. From drafting sermons to spotting care needs, Relius handles the heavy lifting so you can focus on people.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {aiFeaturesSummary.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="group bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <CardContent className="p-8 relative z-10">
                  <div className={`mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-white text-slate-950 hover:bg-accent-50 hover:text-accent-900 font-semibold h-12 px-8 rounded-full transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/20 group"
            asChild
          >
            <Link href="/ai" className="flex items-center gap-2">
              See How It Works
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
