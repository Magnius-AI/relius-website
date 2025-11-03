import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Users,
  Calendar,
  DollarSign,
  UserCheck,
  ClipboardCheck,
  LayoutDashboard,
  FileText,
  Newspaper,
  Languages,
  Heart,
  TrendingUp,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore all the powerful features of Relius Church Management System including people management, events, giving, volunteers, AI tools, and more.",
};

export default function FeaturesPage() {
  const coreFeatures = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      title: "Dashboard & Insights",
      description: "Get a complete view of your church at a glance with KPIs, trends, AI insights, and quick actions.",
      highlights: [
        "Real-time attendance and giving metrics",
        "Engagement trends across all ministries",
        "Quick action shortcuts",
        "Customizable widgets",
      ],
    },
    {
      id: "people",
      icon: Users,
      title: "People Management",
      description: "Comprehensive member directory with rich profiles, custom fields, and relationship tracking.",
      highlights: [
        "Detailed profiles with photos and contact info",
        "Custom fields and tags for segmentation",
        "Family groupings and relationships",
        "Activity timelines and engagement history",
        "Bulk actions and data import/export",
        "Privacy controls and GDPR compliance",
      ],
    },
    {
      id: "groups",
      icon: Users,
      title: "Groups & Ministries",
      description: "Manage small groups, classes, and ministries with rosters, attendance, and engagement metrics.",
      highlights: [
        "Create and organize groups by type",
        "Track attendance and participation",
        "Communication tools for leaders",
        "Automated roster management",
        "Engagement analytics",
      ],
    },
    {
      id: "events",
      icon: Calendar,
      title: "Events System",
      description: "Powerful event management with registration, resources, volunteers, and intelligent scheduling.",
      highlights: [
        "50+ event fields for complete details",
        "Online registration with custom forms",
        "Recurring events with RRULE support",
        "Automated email/SMS/push reminders",
        "Conflict detection across rooms and resources",
        "Volunteer scheduling and check-in",
        "Attendee tracking and reports",
        "Calendar sync with Google/iCal",
      ],
    },
    {
      id: "giving",
      icon: DollarSign,
      title: "Giving & Donations",
      description: "Track donations, manage funds, analyze trends, and automate donor communications.",
      highlights: [
        "Record one-time and recurring gifts",
        "Multiple funds and campaigns",
        "Donor analytics and giving history",
        "Automated thank-you emails",
        "Year-end giving statements",
        "Stripe integration (coming soon)",
      ],
    },
    {
      id: "volunteers",
      icon: UserCheck,
      title: "Volunteers & Services",
      description: "Schedule volunteers, track availability, manage roles, and prevent burnout.",
      highlights: [
        "Role-based scheduling with skills matching",
        "Availability tracking",
        "Burnout detection algorithms",
        "Automated reminders and confirmations",
        "Easy substitutions and swap requests",
        "Service history and reports",
      ],
    },
    {
      id: "checkins",
      icon: ClipboardCheck,
      title: "Check-ins & Attendance",
      description: "Secure, fast check-in system for services, events, and children's ministry.",
      highlights: [
        "Kiosk, mobile, and QR code check-in",
        "Kids security with pickup tags",
        "Service comparison reports",
        "Real-time attendance dashboards",
        "Automated follow-up workflows",
      ],
    },
    {
      id: "calendar",
      icon: Calendar,
      title: "Unified Calendar",
      description: "See all events, services, and activities in one powerful calendar view.",
      highlights: [
        "Multiple view options (day, week, month)",
        "Filter by ministry, location, or type",
        "Color-coded categories",
        "Resource availability checking",
        "iCal and Google Calendar sync",
      ],
    },
  ];

  const aiFeatures = [
    {
      id: "sermon-generator",
      icon: FileText,
      title: "Sermon Generator",
      description: "Create sermon drafts tailored to your voice and style from scripture, topics, or themes.",
      highlights: [
        "Input scripture references, topics, or sermon series",
        "Choose preaching style and target audience",
        "Generate full drafts with outlines",
        "Include illustrations and discussion questions",
        "Version history and revisions",
        "Export to Word or PDF",
      ],
    },
    {
      id: "content-studio",
      icon: Newspaper,
      title: "Content Studio",
      description: "Repurpose sermons into emails, social posts, study guides, devotionals, and more.",
      highlights: [
        "Email newsletters from sermon notes",
        "Social media posts for all platforms",
        "Small group study guides",
        "Daily devotionals",
        "Youth ministry curriculum",
        "One-click publishing to communication channels",
      ],
    },
    {
      id: "translation",
      icon: Languages,
      title: "Translation Console",
      description: "Break language barriers with live captions and translations in 50+ languages.",
      highlights: [
        "Real-time service captions",
        "50+ language support",
        "QR code access for congregation",
        "Recorded service subtitles",
        "Downloadable transcripts",
      ],
    },
    {
      id: "pastoral-care",
      icon: Heart,
      title: "Pastoral Care AI",
      description: "Manage prayer requests with AI-powered sentiment analysis and follow-up reminders.",
      highlights: [
        "Prayer request inbox with categorization",
        "Sentiment and urgency detection",
        "At-risk member identification",
        "Automated follow-up reminders",
        "Privacy controls and confidentiality",
        "Care team assignment",
      ],
    },
    {
      id: "donations-manager",
      icon: TrendingUp,
      title: "AI Donations Manager",
      description: "Forecast giving trends, identify retention risks, and optimize donor engagement.",
      highlights: [
        "Giving forecasts and projections",
        "Donor segmentation by patterns",
        "Retention risk alerts",
        "Optimal timing for asks",
        "Re-engagement campaign suggestions",
        "Personalized thank-you templates",
      ],
    },
    {
      id: "insights",
      icon: BarChart3,
      title: "AI Insights Dashboard",
      description: "Get predictive analytics and actionable recommendations for attendance, volunteers, and resources.",
      highlights: [
        "Attendance predictions by service",
        "Engagement trend analysis",
        "Volunteer optimization suggestions",
        "Resource planning recommendations",
        "Seasonal pattern recognition",
        "Prioritized action items",
      ],
    },
  ];

  return (
    <div className="py-14 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="mb-4">Product Features</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Everything you need to run a modern church, from people management to AI-powered ministry tools
          </p>
        </div>

        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <h2>Core Church Management</h2>
          </div>

          <div className="space-y-12">
            {coreFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} id={feature.id} className="scroll-mt-24">
                  <Card className="border-2">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                          <p className="text-slate-500">{feature.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {feature.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-8">
            <h2 id="ai">AI-Powered Features</h2>
            <Badge variant="default">Pro Plan</Badge>
          </div>

          <div className="space-y-12">
            {aiFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} id={feature.id} className="scroll-mt-24">
                  <Card className="border-2 border-primary/30 bg-gradient-to-br from-white to-accent-50/30">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                          <p className="text-slate-500">{feature.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {feature.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h3 className="mb-4">Ready to transform your church management?</h3>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
            See how Relius can help your church save time and increase engagement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">Book a Demo</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
