import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, Shield, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Features",
  description: "Discover how Relius uses artificial intelligence to help churches save time, improve engagement, and focus on ministry.",
};

export default function AiPage() {
  const principles = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data belongs to your church. All AI processing respects privacy controls and GDPR compliance.",
    },
    {
      icon: Users,
      title: "Human Review",
      description: "AI assists, never replaces. All AI-generated content requires human review before sending or publishing.",
    },
    {
      icon: CheckCircle2,
      title: "Consent Based",
      description: "Members control their data. AI features respect individual privacy settings and consent preferences.",
    },
  ];

  return (
    <div className="py-14 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <Badge variant="default" className="mb-4">
            AI-Powered Ministry
          </Badge>
          <h1 className="mb-4">AI That Serves Your Mission</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Relius uses artificial intelligence to help church leaders save time on administrative tasks so they can focus on people and ministry.
          </p>
        </div>

        <div className="mb-24 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-center mb-6">How Relius AI Works</h2>
            <p className="text-lg text-slate-600 text-center mb-8">
              Our AI features analyze your church data to provide insights, generate content, and automate routine tasks. Every AI tool is designed with three core principles:
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <Card key={principle.title} className="border-2">
                    <CardHeader>
                      <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{principle.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-500 text-sm">{principle.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-center mb-8">AI Features Overview</h2>
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="default" className="mb-3">Sermon Generator</Badge>
                <h3 className="mb-4">Create Sermons in Your Voice</h3>
                <p className="text-slate-500 mb-4">
                  Input your scripture, topic, or sermon series theme. Choose your preaching style and target audience. Our AI generates a complete sermon draft with outline, main points, illustrations, and discussion questions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Learns your preaching style over time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Multiple revision options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Export to Word or PDF</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center aspect-video">
                <p className="text-gray-500 text-center">Sermon Generator Interface</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gray-100 rounded-xl p-8 flex items-center justify-center aspect-video">
                <p className="text-gray-500 text-center">Content Studio Interface</p>
              </div>
              <div className="order-1 md:order-2">
                <Badge variant="default" className="mb-3">Content Studio</Badge>
                <h3 className="mb-4">Repurpose Content Instantly</h3>
                <p className="text-slate-500 mb-4">
                  Take your sermon and automatically generate email newsletters, social media posts, small group study guides, daily devotionals, and youth curriculum. One-click publishing to all your channels.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>6+ content formats from one source</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Platform-optimized formatting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Schedule and publish directly</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="default" className="mb-3">Pastoral Care AI</Badge>
                <h3 className="mb-4">Care at Scale</h3>
                <p className="text-slate-500 mb-4">
                  Manage prayer requests with AI-powered sentiment analysis. Identify urgent needs and at-risk members. Automate follow-up reminders while maintaining personal touch.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Sentiment and urgency detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>At-risk member identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Full privacy and confidentiality controls</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center aspect-video">
                <p className="text-gray-500 text-center">Pastoral Care Dashboard</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gray-100 rounded-xl p-8 flex items-center justify-center aspect-video">
                <p className="text-gray-500 text-center">AI Insights Dashboard</p>
              </div>
              <div className="order-1 md:order-2">
                <Badge variant="default" className="mb-3">AI Insights</Badge>
                <h3 className="mb-4">Predictive Analytics</h3>
                <p className="text-slate-500 mb-4">
                  Get attendance predictions, engagement trends, and volunteer optimization suggestions. Understand seasonal patterns and receive prioritized action items.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Attendance forecasting by service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Resource planning recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Actionable insights, not just data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-700 text-white rounded-2xl p-12 text-center">
          <h2 className="text-white mb-6">Responsible AI for Ministry</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-3xl mx-auto">
            We believe AI should augment human ministry, not replace it. Every AI feature is designed with ethical guidelines, privacy protections, and human oversight to ensure technology serves your mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild className="bg-white text-primary hover:bg-gray-50">
              <Link href="/contact">See AI in Action</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 border-white text-white hover:bg-white/10">
              <Link href="/features#ai">View All AI Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
