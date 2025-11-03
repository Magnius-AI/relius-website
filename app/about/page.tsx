import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Target, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Relius",
  description: "Learn about Relius, our mission to modernize church management, and the vision for the future of ministry technology.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Purpose-Built",
      description: "Designed specifically for churches, not adapted from generic business software.",
    },
    {
      icon: Heart,
      title: "Ministry-Focused",
      description: "Technology should serve ministry, not the other way around.",
    },
    {
      icon: Zap,
      title: "Modern & Fast",
      description: "Built with the latest technology for speed, reliability, and great user experience.",
    },
  ];

  const roadmap = [
    {
      phase: "MVP (Current)",
      items: [
        "Core church management features",
        "People, groups, events, and giving",
        "Check-ins and volunteers",
        "React-based modern UI",
      ],
    },
    {
      phase: "Next",
      items: [
        "REST API and authentication",
        "Role-based access control",
        "Basic reporting and analytics",
        "Mobile-responsive improvements",
      ],
    },
    {
      phase: "AI Launch",
      items: [
        "Sermon Generator",
        "Content Studio",
        "Pastoral Care AI",
        "AI Insights Dashboard",
        "Donations Manager AI",
        "Translation Console",
      ],
    },
    {
      phase: "Future",
      items: [
        "Multi-site church support",
        "White-label options",
        "Public API for developers",
        "Native mobile apps",
        "Advanced integrations",
      ],
    },
  ];

  return (
    <div className="py-14 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="mb-4">About Relius</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            We're building the church management system that church leaders deserve—modern, powerful, and designed for ministry.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-center mb-8">Our Mission</h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-12">
            <p className="text-lg text-slate-600 mb-6">
              For too long, churches have been stuck with clunky, outdated software that feels like it's from the 1990s. Church leaders spend hours on administrative tasks instead of focusing on people and ministry.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Relius exists to change that. We believe church management software should be as modern, intuitive, and powerful as the tools you use in your personal life.
            </p>
            <p className="text-lg text-slate-600">
              By combining a complete church management system with artificial intelligence, we're helping church leaders save time, increase engagement, and focus on what matters most—their people.
            </p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="border-2 text-center">
                  <CardContent className="pt-12 pb-8">
                    <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-slate-500">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-center mb-8">Product Roadmap</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {roadmap.map((phase, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-5">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-primary mb-1">{phase.phase}</h3>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-0.5">•</span>
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-10 bg-gray-50 rounded-2xl p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-6">The Problem with Legacy ChMS</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                Most church management systems were built 10-20 years ago and haven't kept up with modern technology. They're:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Difficult to learn and use</li>
                <li>Slow and unreliable</li>
                <li>Expensive with hidden fees</li>
                <li>Limited in features and flexibility</li>
                <li>Poor mobile experience</li>
                <li>No AI or modern automation</li>
              </ul>
              <p className="pt-4">
                Relius is different. We're building from the ground up with modern technology, AI capabilities, and a user experience that feels like the apps you use every day.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-primary to-primary-700 text-white rounded-2xl p-12">
          <h2 className="text-white mb-6">Join Us on the Journey</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            We're in beta and actively working with churches to build the best ChMS on the market. Book a demo to see where we're headed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild className="bg-white text-primary hover:bg-gray-50">
              <Link href="/contact">Book a Demo</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 border-white text-white hover:bg-white/10">
              <Link href="/features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
