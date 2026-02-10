import { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, ChevronRight, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ - Reference - Relius Documentation',
  description: 'Frequently asked questions about Relius church management software. Billing, data, features, migration, and more.',
  alternates: {
    canonical: 'https://relius.ai/resources/docs/reference/faq',
  },
  openGraph: {
    title: 'FAQ | Relius Documentation',
    description: 'Frequently asked questions about Relius. Billing, data, features, and more.',
    url: 'https://relius.ai/resources/docs/reference/faq',
  },
  keywords: ['FAQ', 'frequently asked questions', 'help', 'support', 'church management'],
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    items: [
      {
        question: 'How do I get started with Relius?',
        answer: 'Sign up for free at relius.ai. No credit card required. The Free plan includes full church management, online giving, and AI-powered donation tools with unlimited members. Our onboarding wizard will guide you through setting up your church, importing data, and inviting team members.',
      },
      {
        question: 'Is there a setup fee?',
        answer: 'No, there are no setup fees. You can start using Relius immediately after signing up. If you need help migrating from another system, our team offers free migration assistance.',
      },
      {
        question: 'Can I import data from my current system?',
        answer: 'Yes! Relius includes built-in import tools for Planning Center, ChurchTrac, Tithe.ly, and generic CSV files. Most migrations can be completed in under an hour. See our Migration Guides for step-by-step instructions.',
      },
      {
        question: 'How many people can I add to Relius?',
        answer: 'All plans include unlimited people, groups, and events. We don\'t charge per-person fees like some competitors. Whether you have 50 or 5,000 members, the price stays the same.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing & Billing',
    items: [
      {
        question: 'What are the pricing tiers?',
        answer: 'Relius offers a free forever plan with full church management and online giving. Ministry Pro ($60/mo) adds pastoral care, service planning, and unlimited communications. Ministry AI ($150/mo) includes the full AI suite for sermon planning, content creation, and pastoral insights. Enterprise is available for large organizations. All plans include unlimited members.',
      },
      {
        question: 'Can I change plans anytime?',
        answer: 'Yes, you can upgrade or downgrade at any time. When upgrading, you\'ll get immediate access to new features and pay the prorated difference. When downgrading, the change takes effect at your next billing cycle.',
      },
      {
        question: 'Do you offer discounts for small churches?',
        answer: 'The core platform is free forever! For paid plans, annual billing saves 15%. We also offer 6 months free for church planters and special considerations for churches in unique situations.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover) and ACH bank transfers. Invoicing is available for churches that prefer to pay by check.',
      },
      {
        question: 'Is there a contract or commitment?',
        answer: 'No contracts. Relius is month-to-month. You can cancel anytime and your data will remain accessible for 30 days to allow for export.',
      },
    ],
  },
  {
    id: 'data-security',
    title: 'Data & Security',
    items: [
      {
        question: 'How is my data secured?',
        answer: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We use Google Cloud Platform with SOC 2 Type II certified data centers. Regular backups are stored in multiple geographic regions.',
      },
      {
        question: 'Who can access my church\'s data?',
        answer: 'Only users you authorize can access your data. Relius staff cannot access your data without your explicit permission. We have strict internal policies and audit logs for any support access.',
      },
      {
        question: 'Do you sell or share data with third parties?',
        answer: 'Absolutely not. Your data belongs to your church. We never sell, share, or use your data for advertising or marketing purposes. See our Privacy Policy for full details.',
      },
      {
        question: 'Can I export my data?',
        answer: 'Yes, you can export all your data at any time in standard formats (CSV, JSON). We believe in data portability—your data is yours, not ours.',
      },
      {
        question: 'Are you GDPR compliant?',
        answer: 'Yes, Relius is fully GDPR compliant. We offer data processing agreements (DPAs) for European churches and tools to handle data subject requests.',
      },
      {
        question: 'How often is data backed up?',
        answer: 'Data is backed up continuously with point-in-time recovery available. Daily snapshots are retained for 30 days. In the unlikely event of data loss, we can restore to any point within that window.',
      },
    ],
  },
  {
    id: 'features',
    title: 'Features',
    items: [
      {
        question: 'What AI features are included?',
        answer: 'The AI Pro plan includes: Content Studio (sermon-to-social generation), AI Sermon Planner, Pastoral Care AI (sentiment analysis, at-risk detection), AI Volunteer Scheduler, AI Donations Manager (churn prediction), Translation Console (50+ languages), and Semantic Bible Search.',
      },
      {
        question: 'Can I use Relius for online giving?',
        answer: 'Yes! Relius includes integrated giving through Stripe with competitive processing rates (2.2% + $0.30 per transaction). You can accept one-time and recurring gifts, run campaigns, and generate tax-deductible receipts.',
      },
      {
        question: 'Does Relius have a mobile app?',
        answer: 'Yes, Relius has a mobile app for iOS and Android. Members can view the directory, RSVP to events, give, and access group resources. Staff can manage check-ins and view dashboards on the go.',
      },
      {
        question: 'Can I create a public website with Relius?',
        answer: 'Yes, Relius includes a website builder with customizable templates. You can publish event calendars, sermon archives, staff directories, and giving pages to your own domain.',
      },
      {
        question: 'Does Relius integrate with other tools?',
        answer: 'Yes! Relius integrates with Stripe (payments), Google Calendar, Mailchimp, CCLI (song licensing), and more. The AI Pro plan includes REST API access for custom integrations.',
      },
    ],
  },
  {
    id: 'migration',
    title: 'Migration',
    items: [
      {
        question: 'How long does migration take?',
        answer: 'Most migrations complete in under an hour using our automated import tools. More complex migrations with custom data may take longer. Our team is available to help at no extra cost.',
      },
      {
        question: 'What data can I migrate?',
        answer: 'You can migrate people/members, families, groups, donations, attendance history, notes, and more. The specific data depends on what your current system exports.',
      },
      {
        question: 'Will I lose any data during migration?',
        answer: 'Our import process is designed to preserve all your data. We recommend keeping your old system active during the transition period until you verify everything transferred correctly.',
      },
      {
        question: 'Can I run Relius alongside my current system?',
        answer: 'Yes, many churches run both systems in parallel during transition. This lets you verify data accuracy and train your team before fully switching.',
      },
    ],
  },
  {
    id: 'support',
    title: 'Support',
    items: [
      {
        question: 'How do I get help?',
        answer: 'All plans include email support with responses within 24 hours. Growth and AI Pro plans include chat support. AI Pro plans include phone support and a dedicated success manager.',
      },
      {
        question: 'Do you offer training?',
        answer: 'Yes! We offer free onboarding calls for new churches, recorded video tutorials, and this documentation. AI Pro customers get personalized training sessions.',
      },
      {
        question: 'What are your support hours?',
        answer: 'Email support is monitored Monday-Friday, 9am-6pm Eastern. Chat support is available during the same hours. Emergency technical issues are escalated 24/7.',
      },
      {
        question: 'Is there a community or forum?',
        answer: 'Yes, we have an active community of church administrators sharing tips and best practices. Access it from the Help menu in Relius or visit community.relius.ai.',
      },
    ],
  },
];

export default function FAQPage() {
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
        <span className="text-slate-900 font-medium">FAQ</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
            <HelpCircle className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Reference
            </p>
            <h1 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h1>
          </div>
        </div>
      </div>

      {/* Quick Summary */}
      <blockquote className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded-r-lg not-prose">
        <p className="text-lg text-slate-700">
          <strong>Quick Summary:</strong> Find answers to common questions about Relius. 
          Can't find what you're looking for? <Link href="/contact" className="text-primary-600 hover:underline">Contact our support team</Link>.
        </p>
      </blockquote>

      {/* Category Navigation */}
      <div className="flex flex-wrap gap-2 not-prose">
        {faqCategories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            {category.title}
          </a>
        ))}
      </div>

      {/* FAQ Categories */}
      <div className="space-y-12">
        {faqCategories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{category.title}</h2>
            <div className="space-y-4">
              {category.items.map((item, idx) => (
                <details
                  key={idx}
                  className="group rounded-lg border border-slate-200 bg-white overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-50 transition-colors">
                    <h3 className="font-medium text-slate-900 pr-4">{item.question}</h3>
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-4 pb-4 text-slate-600 border-t border-slate-100">
                    <p className="pt-4">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Still Have Questions */}
      <section className="rounded-xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Still Have Questions?</h2>
        <p className="text-slate-600 mb-6">
          Our team is here to help. Reach out and we'll get back to you within 24 hours.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
          >
            Contact Support
          </Link>
          <a
            href="https://community.relius.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Ask the Community
          </a>
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
            href="/pricing"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            Pricing →
          </Link>
          <Link
            href="/resources/docs/getting-started/migration"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            Migration Guides →
          </Link>
        </div>
      </section>
    </div>
  );
}
