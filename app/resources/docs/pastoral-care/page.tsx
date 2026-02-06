import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, FileText, HandHeart, AlertTriangle, Users, Calendar, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pastoral Care - Relius Documentation',
  description: 'Track care needs, prayer requests, and support your congregation with Relius pastoral care tools.',
  alternates: {
    canonical: 'https://relius.ai/resources/docs/pastoral-care',
  },
  openGraph: {
    title: 'Pastoral Care | Relius Documentation',
    description: 'Track care needs, prayer requests, and support your congregation with Relius pastoral care tools.',
    url: 'https://relius.ai/resources/docs/pastoral-care',
  },
};

const features = [
  {
    title: 'Care Notes',
    description: 'Document pastoral visits, counseling sessions, and follow-ups with confidential notes tied to member profiles.',
    href: '/resources/docs/pastoral-care/notes',
    icon: FileText,
  },
  {
    title: 'Prayer Requests',
    description: 'Receive, organize, and share prayer requests with your prayer team while respecting privacy preferences.',
    href: '/resources/docs/pastoral-care/prayer',
    icon: HandHeart,
  },
  {
    title: 'At-Risk Detection',
    description: 'AI-powered alerts identify members who may need extra care based on attendance, giving, and engagement patterns.',
    href: '/resources/docs/pastoral-care/at-risk',
    icon: AlertTriangle,
  },
];

const useCases = [
  {
    title: 'Hospital & Home Visits',
    description: 'Track visit requests, schedule pastoral visits, and log outcomes for continuity of care.',
    icon: Users,
  },
  {
    title: 'New Member Follow-up',
    description: 'Automated workflows ensure every new member receives personal outreach within their first weeks.',
    icon: Calendar,
  },
  {
    title: 'Pastoral Insights',
    description: 'AI-powered sentiment analysis helps you understand the emotional tone of communications.',
    icon: TrendingUp,
  },
];

export default function PastoralCarePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
            <Heart className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Documentation
            </p>
            <h1 className="text-4xl font-bold text-slate-900">Pastoral Care</h1>
          </div>
        </div>
        <p className="text-xl text-slate-600 max-w-3xl">
          Support your congregation through life's seasons with tools designed for compassionate, 
          confidential, and consistent pastoral care.
        </p>
      </div>

      {/* Quick Summary */}
      <blockquote className="border-l-4 border-rose-500 bg-rose-50 p-6 rounded-r-lg not-prose">
        <p className="text-lg text-slate-700">
          <strong>Quick Summary:</strong> Relius Pastoral Care helps you track care needs, manage prayer requests, 
          log counseling sessions, and proactively identify members who may need support—all while maintaining 
          strict confidentiality.
        </p>
      </blockquote>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
        <div className="prose prose-slate max-w-none">
          <p>
            Pastoral care is the heart of ministry. When someone loses a loved one, faces a health crisis, 
            or struggles with life's challenges, they need to know their church family is there for them. 
            But in a growing congregation, keeping track of who needs care—and ensuring nothing falls 
            through the cracks—becomes increasingly difficult.
          </p>
          <p>
            Relius Pastoral Care provides a secure, centralized system for managing all aspects of 
            congregational care. From documenting hospital visits to coordinating prayer chains, 
            everything is organized and accessible to authorized staff while maintaining the 
            confidentiality that pastoral care requires.
          </p>
          <p>
            With AI-powered insights, you can also identify members who may be at risk of disengagement 
            or struggling silently—giving you the opportunity to reach out proactively rather than 
            reactively.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Core Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.title}
                href={feature.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-rose-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600 group-hover:bg-rose-200 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-rose-600 transition-colors">
                      {feature.title} →
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{feature.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Additional Capabilities</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <div
                key={useCase.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="h-5 w-5 text-slate-600" />
                  <h3 className="font-semibold text-slate-900">{useCase.title}</h3>
                </div>
                <p className="text-sm text-slate-600">{useCase.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="rounded-xl border border-amber-200 bg-amber-50 p-6 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          🔒 Privacy & Confidentiality
        </h2>
        <div className="prose prose-slate max-w-none text-slate-700">
          <p>
            Pastoral care information is among the most sensitive data in your church. Relius provides 
            multiple layers of protection:
          </p>
          <ul>
            <li><strong>Role-based access:</strong> Only authorized pastoral staff can view care notes</li>
            <li><strong>Note privacy levels:</strong> Mark notes as private (pastor-only) or shared (care team)</li>
            <li><strong>Audit logging:</strong> Track who accessed sensitive information and when</li>
            <li><strong>Prayer request privacy:</strong> Members control whether requests are shared publicly, with prayer team only, or kept private</li>
          </ul>
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Getting Started</h2>
        <div className="prose prose-slate max-w-none">
          <ol>
            <li>
              <strong>Set up your care team:</strong> In Administration → User Management, assign the 
              "Pastoral Care" role to staff members who should have access to care notes.
            </li>
            <li>
              <strong>Configure privacy settings:</strong> Decide your default privacy levels for notes 
              and prayer requests in Settings → Pastoral Care.
            </li>
            <li>
              <strong>Enable AI insights (optional):</strong> If you have the AI Pro plan, enable 
              at-risk detection to receive proactive alerts.
            </li>
            <li>
              <strong>Train your team:</strong> Review the documentation with your pastoral staff to 
              ensure consistent note-taking and follow-up practices.
            </li>
          </ol>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Best Practices</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Document promptly</h3>
            <p className="text-sm text-slate-600">
              Log care notes within 24 hours of visits or conversations while details are fresh. 
              Brief notes are better than no notes.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Set follow-up reminders</h3>
            <p className="text-sm text-slate-600">
              When you create a care note, always set a follow-up date. Consistent follow-through 
              is what makes pastoral care meaningful.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Review at-risk alerts weekly</h3>
            <p className="text-sm text-slate-600">
              Schedule time each week to review AI-flagged members. Not every alert needs action, 
              but patterns over time reveal who needs attention.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Respect boundaries</h3>
            <p className="text-sm text-slate-600">
              If someone asks for a prayer request to remain private, honor that. Trust is the 
              foundation of effective pastoral care.
            </p>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="border-t border-slate-200 pt-8 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Related Topics</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/resources/docs/ai/pastoral-insights"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            AI Pastoral Insights →
          </Link>
          <Link
            href="/resources/docs/people/directory"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            Member Directory →
          </Link>
          <Link
            href="/resources/docs/communications/email"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            Email Campaigns →
          </Link>
          <Link
            href="/resources/docs/admin/security"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            Security Settings →
          </Link>
        </div>
      </section>
    </div>
  );
}
