import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, Shield, Users, CheckCircle2, Clock, X, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Church Administration Tools | Workflow Automation Features",
  description:
    "AI-powered church administration tools that automate content creation, pastoral care insights, and sermon planning. Church workflow automation that saves 10+ hours weekly.",
  alternates: {
    canonical: "https://relius.ai/ai/",
  },
  openGraph: {
    title: "AI Church Administration & Automation Tools | Relius",
    description:
      "Church automation tools for content creation, pastoral care, and workflow automation. Save 10+ hours weekly.",
    url: "https://relius.ai/ai/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Church Administration & Automation Tools | Relius",
    description:
      "Church automation tools for content creation, pastoral care, and workflow automation. Save 10+ hours weekly.",
  },
  keywords: ["AI church tools", "church automation", "AI sermon planner", "church workflow automation", "AI pastoral insights"],
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
          <h1 className="mb-4">AI-Powered Church Administration Tools</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Save 10+ hours weekly with AI that drafts content, spots needs, and handles routine tasks—so you can focus on people and ministry.
          </p>
        </div>

        {/* Time Savings Section */}
        <div className="mb-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white border border-slate-200 rounded-xl">
            <Clock className="w-8 h-8 text-accent-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-slate-900 mb-1">5 min</div>
            <p className="text-sm text-slate-600">Turn one sermon into 6+ content pieces</p>
          </div>
          <div className="text-center p-6 bg-white border border-slate-200 rounded-xl">
            <Clock className="w-8 h-8 text-accent-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-slate-900 mb-1">10+ hrs</div>
            <p className="text-sm text-slate-600">Saved weekly on admin and content</p>
          </div>
          <div className="text-center p-6 bg-white border border-slate-200 rounded-xl">
            <Clock className="w-8 h-8 text-accent-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
            <p className="text-sm text-slate-600">Languages supported for live translation</p>
          </div>
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

        {/* What Competitors Don't Have */}
        <div className="mb-24 bg-slate-50 rounded-2xl p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge variant="secondary" className="mb-4">
                <Sparkles className="w-3 h-3 mr-1" />
                Unique to Relius
              </Badge>
              <h2 className="mb-4">AI Features Competitors Don't Have</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Most church software offers basic tools. Relius was built AI-first, with capabilities you won't find anywhere else.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Planning Center, ChurchTrac, Tithe.ly</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2 text-slate-500">
                    <X className="w-4 h-4 text-slate-300" />
                    No AI content generation
                  </li>
                  <li className="flex items-center gap-2 text-slate-500">
                    <X className="w-4 h-4 text-slate-300" />
                    No sermon-to-content pipeline
                  </li>
                  <li className="flex items-center gap-2 text-slate-500">
                    <X className="w-4 h-4 text-slate-300" />
                    No at-risk member detection
                  </li>
                  <li className="flex items-center gap-2 text-slate-500">
                    <X className="w-4 h-4 text-slate-300" />
                    No real-time translation
                  </li>
                  <li className="flex items-center gap-2 text-slate-500">
                    <X className="w-4 h-4 text-slate-300" />
                    No AI volunteer scheduling
                  </li>
                  <li className="flex items-center gap-2 text-slate-500">
                    <X className="w-4 h-4 text-slate-300" />
                    No predictive giving analytics
                  </li>
                </ul>
              </div>
              <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Relius</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-accent-600" />
                    <strong>Content Studio</strong> - One sermon → 6+ formats
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-accent-600" />
                    <strong>Sermon Planner</strong> - AI-assisted outlines
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-accent-600" />
                    <strong>Pastoral Care AI</strong> - At-risk alerts
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-accent-600" />
                    <strong>Translation Console</strong> - 50+ languages
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-accent-600" />
                    <strong>Smart Scheduling</strong> - Burnout detection
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-accent-600" />
                    <strong>Giving Insights</strong> - Donor retention AI
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-slate-500 mt-8">
              AI drafts, you decide. Every AI feature includes human review before anything goes out.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-700 text-white rounded-2xl p-12 text-center">
          <h2 className="text-white mb-6">Responsible AI for Ministry</h2>
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            We believe AI should augment human ministry, not replace it. Every AI feature is designed with ethical guidelines, privacy protections, and human oversight to ensure technology serves your mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild className="bg-white text-primary hover:bg-gray-50">
              <Link href="/contact/">See AI in Action</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 border-white text-white hover:bg-white/10">
              <Link href="/features/#ai">View All AI Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
