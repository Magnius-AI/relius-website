import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useCases, getUseCase } from "@/data/use-cases";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Lightbulb, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return useCases.map((useCase) => ({
    slug: useCase.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return { title: "Use Case Not Found" };

  return {
    title: `${useCase.title} - Use Case`,
    description: useCase.subtitle,
    openGraph: {
      title: useCase.title,
      description: useCase.subtitle,
    },
  };
}

export default async function UseCaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) notFound();

  const otherUseCases = useCases.filter((uc) => uc.slug !== slug).slice(0, 2);

  return (
    <div className="py-16 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-4xl space-y-12">
        <Link
          href="/use-cases/"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-primary-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>

        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary-600">Use Case</span>
            <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">{useCase.churchSize}</span>
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">{useCase.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">{useCase.title}</h1>
          <p className="text-xl text-slate-600 leading-relaxed">{useCase.subtitle}</p>
        </header>

        <Card className="border border-slate-200 shadow-sm">
          <CardContent className="p-8 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">The Challenge</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{useCase.challenge}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">How Relius Helps</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">{useCase.solution}</p>

              <div className="grid gap-3">
                {useCase.capabilities.map((capability) => (
                  <div key={capability} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Potential Outcomes</h3>
              <ul className="space-y-3">
                {useCase.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Implementation Steps</h3>
              <ol className="space-y-3">
                {useCase.implementation.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-slate-600">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Key Features for This Use Case</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {useCase.keyFeatures.map((feature) => (
              <div key={feature.label} className="bg-white rounded-xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-primary-700 mb-1">{feature.label}</p>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary-50 to-white shadow-sm">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to see this in action?</h3>
            <p className="text-lg text-slate-600 mb-6 max-w-xl mx-auto">
              Schedule a demo to see how Relius can help your church with {useCase.title.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/contact/">Schedule a Demo</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/features/">Explore All Features</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {otherUseCases.length > 0 && (
          <section className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Explore Other Use Cases</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherUseCases.map((uc) => (
                <Link key={uc.slug} href={`/use-cases/${uc.slug}`}>
                  <Card className="border border-slate-200 hover:border-primary-200 hover:shadow-md transition-all h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">{uc.churchSize}</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{uc.title}</h4>
                      <p className="text-slate-600 text-sm mb-4">{uc.subtitle}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
