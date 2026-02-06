import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ChevronRight, Sparkles, Bug, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Release Notes - Reference - Relius Documentation',
  description: 'What\'s new in Relius. Feature releases, improvements, bug fixes, and upcoming changes.',
  alternates: {
    canonical: 'https://relius.ai/resources/docs/reference/releases',
  },
  openGraph: {
    title: 'Release Notes | Relius Documentation',
    description: 'What\'s new in Relius. Feature releases, improvements, and bug fixes.',
    url: 'https://relius.ai/resources/docs/reference/releases',
  },
  keywords: ['release notes', 'changelog', 'updates', 'new features', 'bug fixes'],
};

interface ReleaseItem {
  type: 'feature' | 'improvement' | 'fix' | 'security';
  description: string;
}

interface Release {
  version: string;
  date: string;
  summary: string;
  items: ReleaseItem[];
}

const releases: Release[] = [
  {
    version: '2.4.0',
    date: 'February 2026',
    summary: 'AI Content Studio enhancements and new pastoral care features.',
    items: [
      { type: 'feature', description: 'AI Content Studio now generates Instagram captions and Facebook posts from sermons' },
      { type: 'feature', description: 'At-Risk Detection dashboard with customizable thresholds' },
      { type: 'feature', description: 'Bulk prayer request import from CSV' },
      { type: 'improvement', description: 'Service plan printing with better formatting' },
      { type: 'improvement', description: 'Faster member search with instant results' },
      { type: 'fix', description: 'Fixed duplicate email sends for recurring event reminders' },
      { type: 'fix', description: 'Resolved calendar timezone issues for multi-location churches' },
    ],
  },
  {
    version: '2.3.0',
    date: 'January 2026',
    summary: 'Room rentals public portal and giving improvements.',
    items: [
      { type: 'feature', description: 'Public room browsing and rental request portal' },
      { type: 'feature', description: 'QR code access system for room rentals' },
      { type: 'feature', description: 'Donor segmentation with custom tags' },
      { type: 'improvement', description: 'Year-end giving statements now support multiple formats' },
      { type: 'improvement', description: 'Group attendance now shows trends over time' },
      { type: 'fix', description: 'Fixed Stripe Connect onboarding for new churches' },
      { type: 'security', description: 'Enhanced encryption for pastoral care notes' },
    ],
  },
  {
    version: '2.2.0',
    date: 'December 2025',
    summary: 'AI Sermon Planner and translation console.',
    items: [
      { type: 'feature', description: 'AI Sermon Planner with outline generation and scripture suggestions' },
      { type: 'feature', description: 'Translation Console supporting 50+ languages' },
      { type: 'feature', description: 'Live captioning for services (beta)' },
      { type: 'improvement', description: 'Mobile check-in app performance improvements' },
      { type: 'improvement', description: 'Dashboard now shows 30-day engagement trends' },
      { type: 'fix', description: 'Fixed SMS opt-out handling for Twilio' },
    ],
  },
  {
    version: '2.1.0',
    date: 'November 2025',
    summary: 'Volunteer scheduling AI and burnout detection.',
    items: [
      { type: 'feature', description: 'AI Volunteer Scheduler with smart matching' },
      { type: 'feature', description: 'Volunteer burnout detection and alerts' },
      { type: 'feature', description: 'Shift swap requests and approvals' },
      { type: 'improvement', description: 'Service plan templates now include volunteer positions' },
      { type: 'improvement', description: 'Email open/click tracking improvements' },
      { type: 'fix', description: 'Fixed recurring event duplication bug' },
      { type: 'security', description: 'Added two-factor authentication for all admin accounts' },
    ],
  },
  {
    version: '2.0.0',
    date: 'October 2025',
    summary: 'Major release with new AI features and redesigned dashboard.',
    items: [
      { type: 'feature', description: 'Completely redesigned dashboard with customizable widgets' },
      { type: 'feature', description: 'AI Donations Manager with churn prediction' },
      { type: 'feature', description: 'Semantic Bible Search for sermon prep' },
      { type: 'feature', description: 'Public website builder with custom domains' },
      { type: 'improvement', description: 'New navigation with command palette (Ctrl+K)' },
      { type: 'improvement', description: 'Reports export to PDF, Excel, and CSV' },
      { type: 'fix', description: 'Numerous bug fixes from beta feedback' },
    ],
  },
];

const typeConfig = {
  feature: { icon: Sparkles, label: 'New Feature', color: 'bg-green-100 text-green-700' },
  improvement: { icon: Zap, label: 'Improvement', color: 'bg-blue-100 text-blue-700' },
  fix: { icon: Bug, label: 'Bug Fix', color: 'bg-amber-100 text-amber-700' },
  security: { icon: Shield, label: 'Security', color: 'bg-purple-100 text-purple-700' },
};

export default function ReleaseNotesPage() {
  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-600 not-prose">
        <Link href="/resources/docs" className="hover:text-primary-600 transition-colors">
          Documentation
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/resources/docs/reference" className="hover:text-primary-600 transition-colors">
          Reference
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-slate-900 font-medium">Release Notes</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Reference
            </p>
            <h1 className="text-4xl font-bold text-slate-900">Release Notes</h1>
          </div>
        </div>
      </div>

      {/* Quick Summary */}
      <blockquote className="border-l-4 border-indigo-500 bg-indigo-50 p-6 rounded-r-lg not-prose">
        <p className="text-lg text-slate-700">
          <strong>Quick Summary:</strong> Stay up to date with the latest features, improvements, 
          and fixes in Relius. We release updates regularly to make your church management easier.
        </p>
      </blockquote>

      {/* Update Notice */}
      <div className="rounded-lg border border-green-200 bg-green-50 p-4 not-prose">
        <p className="text-green-800">
          <strong>Automatic Updates:</strong> Relius is a cloud-based service, so you always have 
          the latest version. No downloads or installations required.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 not-prose">
        {Object.entries(typeConfig).map(([key, config]) => {
          const Icon = config.icon;
          return (
            <div key={key} className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${config.color}`}>
                <Icon className="h-3 w-3" />
                {config.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Releases */}
      <div className="space-y-12">
        {releases.map((release, idx) => (
          <section key={release.version} className="relative">
            {/* Timeline line */}
            {idx < releases.length - 1 && (
              <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />
            )}
            
            {/* Version header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold">
                {release.version.split('.')[0]}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Version {release.version}
                </h2>
                <p className="text-slate-500">{release.date}</p>
              </div>
            </div>

            {/* Summary */}
            <p className="text-lg text-slate-600 mb-6 ml-12">{release.summary}</p>

            {/* Items */}
            <div className="space-y-3 ml-12">
              {release.items.map((item, itemIdx) => {
                const config = typeConfig[item.type];
                const Icon = config.icon;
                return (
                  <div key={itemIdx} className="flex items-start gap-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium flex-shrink-0 ${config.color}`}>
                      <Icon className="h-3 w-3" />
                      {config.label}
                    </span>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Older Releases */}
      <section className="rounded-xl border border-slate-200 bg-slate-50 p-6 space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Looking for Older Releases?</h2>
        <p className="text-slate-600">
          For release notes prior to version 2.0, or for detailed technical changelogs, 
          visit our GitHub repository.
        </p>
        <a
          href="https://github.com/Magnius-AI/relius/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          View All Releases on GitHub →
        </a>
      </section>

      {/* Feature Requests */}
      <section className="rounded-xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Have a Feature Request?</h2>
        <p className="text-slate-600 mb-6">
          We love hearing from churches about what would make Relius better. Share your ideas 
          and vote on features other churches have requested.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
        >
          Submit Feature Request
        </Link>
      </section>

      {/* Related Topics */}
      <section className="border-t border-slate-200 pt-8 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Related Topics</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/resources/docs/getting-started/quick-start"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            Quick Start Guide →
          </Link>
          <Link
            href="/resources/docs/reference/faq"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            FAQ →
          </Link>
          <Link
            href="/resources/docs/ai"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            AI Features →
          </Link>
        </div>
      </section>
    </div>
  );
}
