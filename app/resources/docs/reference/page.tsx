import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Keyboard, Code, BookMarked, FileText, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reference - Relius Documentation',
  description: 'Quick reference guides, API documentation, glossary, release notes, and FAQ for Relius church management software.',
  alternates: {
    canonical: 'https://relius.ai/resources/docs/reference',
  },
  openGraph: {
    title: 'Reference | Relius Documentation',
    description: 'Quick reference guides, API documentation, glossary, release notes, and FAQ for Relius.',
    url: 'https://relius.ai/resources/docs/reference',
  },
};

const sections = [
  {
    title: 'Keyboard Shortcuts',
    description: 'Speed up your workflow with keyboard shortcuts for common actions throughout Relius.',
    href: '/resources/docs/reference/shortcuts',
    icon: Keyboard,
  },
  {
    title: 'API Documentation',
    description: 'Build custom integrations with the Relius REST API. Authentication, endpoints, and examples.',
    href: '/resources/docs/reference/api',
    icon: Code,
  },
  {
    title: 'Glossary',
    description: 'Definitions of terms used throughout Relius and church management in general.',
    href: '/resources/docs/reference/glossary',
    icon: BookMarked,
  },
  {
    title: 'Release Notes',
    description: 'What\'s new in Relius. Feature releases, improvements, and bug fixes.',
    href: '/resources/docs/reference/releases',
    icon: FileText,
  },
  {
    title: 'FAQ',
    description: 'Frequently asked questions about Relius features, billing, data, and more.',
    href: '/resources/docs/reference/faq',
    icon: HelpCircle,
  },
];

export default function ReferencePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Documentation
            </p>
            <h1 className="text-4xl font-bold text-slate-900">Reference</h1>
          </div>
        </div>
        <p className="text-xl text-slate-600 max-w-3xl">
          Quick reference materials, API documentation, and answers to common questions.
        </p>
      </div>

      {/* Quick Summary */}
      <blockquote className="border-l-4 border-slate-500 bg-slate-50 p-6 rounded-r-lg not-prose">
        <p className="text-lg text-slate-700">
          <strong>Quick Summary:</strong> This section contains reference materials for power users, 
          developers, and anyone who needs quick answers. Find keyboard shortcuts, API docs, 
          terminology definitions, and release notes.
        </p>
      </blockquote>

      {/* Reference Sections */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Reference Materials</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.title}
                href={section.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                      {section.title} →
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{section.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Popular Questions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/resources/docs/reference/faq#data-security"
            className="rounded-lg border border-slate-200 bg-white p-4 hover:border-primary-300 transition-all"
          >
            <p className="font-medium text-slate-900">How is my data secured?</p>
            <p className="text-sm text-slate-600">Encryption, backups, and compliance</p>
          </Link>
          <Link
            href="/resources/docs/reference/faq#pricing"
            className="rounded-lg border border-slate-200 bg-white p-4 hover:border-primary-300 transition-all"
          >
            <p className="font-medium text-slate-900">Can I change plans anytime?</p>
            <p className="text-sm text-slate-600">Upgrading, downgrading, and billing</p>
          </Link>
          <Link
            href="/resources/docs/reference/faq#migration"
            className="rounded-lg border border-slate-200 bg-white p-4 hover:border-primary-300 transition-all"
          >
            <p className="font-medium text-slate-900">How do I migrate from another system?</p>
            <p className="text-sm text-slate-600">Import tools and migration support</p>
          </Link>
          <Link
            href="/resources/docs/reference/api"
            className="rounded-lg border border-slate-200 bg-white p-4 hover:border-primary-300 transition-all"
          >
            <p className="font-medium text-slate-900">Do you have an API?</p>
            <p className="text-sm text-slate-600">REST API for custom integrations</p>
          </Link>
        </div>
      </section>

      {/* Need Help */}
      <section className="rounded-xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Can't Find What You're Looking For?</h2>
        <p className="text-slate-600 mb-6">
          Our support team is here to help. Reach out and we'll get back to you within 24 hours.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
          >
            Contact Support
          </Link>
          <Link
            href="/resources/docs"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Browse All Docs
          </Link>
        </div>
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
            href="/resources/docs/admin/integrations"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            Integrations →
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
