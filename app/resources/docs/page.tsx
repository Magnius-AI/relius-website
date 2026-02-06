import { Metadata } from 'next';
import Link from 'next/link';
import { docsNavigation } from '@/data/docs-navigation';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documentation - Relius',
  description:
    'Complete documentation for Relius church management software. Learn how to use all features, from people management to AI-powered tools.',
  alternates: {
    canonical: 'https://relius.ai/resources/docs/',
  },
};

export default function DocsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Relius Documentation</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Everything you need to know about using Relius to manage your church ministry.
          From quick-start guides to advanced AI features, we've got you covered.
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 not-prose">
        <Link
          href="/resources/docs/getting-started/quick-start"
          className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
        >
          <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
            <ArrowRight className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
            Quick Start
          </h3>
          <p className="text-sm text-slate-600">
            Get up and running with Relius in minutes. Perfect for new users.
          </p>
        </Link>

        <Link
          href="/resources/docs/ai"
          className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
        >
          <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100 text-accent-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
            AI Features
          </h3>
          <p className="text-sm text-slate-600">
            Discover how AI can save you 10+ hours weekly on ministry tasks.
          </p>
        </Link>

        <Link
          href="/resources/docs/people"
          className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-primary-300"
        >
          <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
            People Management
          </h3>
          <p className="text-sm text-slate-600">
            Learn how to manage your member directory, families, and visitors.
          </p>
        </Link>
      </div>

      {/* All Sections */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900">Browse by Category</h2>
        <div className="grid gap-6 not-prose">
          {docsNavigation.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{section.title}</h3>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-slate-600 hover:text-primary-600 transition-colors"
                    >
                      {item.title} →
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Help Section */}
      <div className="rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8 not-prose">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Need more help?</h2>
        <p className="text-slate-600 mb-6">
          Can't find what you're looking for? Our support team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
          >
            Contact Support
          </Link>
          <a
            href="mailto:support@relius.ai"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
