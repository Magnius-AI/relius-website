import { Metadata } from 'next';
import Link from 'next/link';
import { BookMarked, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Glossary - Reference - Relius Documentation',
  description: 'Definitions of terms used throughout Relius church management software and church administration.',
  alternates: {
    canonical: 'https://relius.ai/resources/docs/reference/glossary',
  },
  openGraph: {
    title: 'Glossary | Relius Documentation',
    description: 'Definitions of terms used throughout Relius and church management.',
    url: 'https://relius.ai/resources/docs/reference/glossary',
  },
  keywords: ['glossary', 'definitions', 'church terms', 'ChMS', 'church management'],
};

interface Term {
  term: string;
  definition: string;
  relatedTerms?: string[];
}

const glossaryTerms: Term[] = [
  {
    term: 'Active Member',
    definition: 'A person who has attended or engaged with the church within a defined period (typically 90 days). Used for filtering reports and identifying engagement levels.',
    relatedTerms: ['Inactive Member', 'Attendance'],
  },
  {
    term: 'API Key',
    definition: 'A unique identifier used to authenticate requests to the Relius API. Generated in Administration → Security → API Keys.',
    relatedTerms: ['API', 'Webhook'],
  },
  {
    term: 'Attendance',
    definition: 'A record of a person\'s presence at an event, service, or group meeting. Can be tracked manually or via check-in.',
  },
  {
    term: 'Audit Log',
    definition: 'A chronological record of system activities, including who made changes, what was changed, and when. Used for security and compliance.',
  },
  {
    term: 'Batch Entry',
    definition: 'The process of entering multiple records at once, such as donations from offering envelopes or attendance from sign-in sheets.',
  },
  {
    term: 'Campaign',
    definition: 'A fundraising initiative with a specific goal and timeline, such as a building fund or mission trip. Tracks progress toward the goal.',
    relatedTerms: ['Fund', 'Pledge'],
  },
  {
    term: 'Care Note',
    definition: 'A confidential record of pastoral interactions with a member, such as hospital visits, counseling sessions, or phone calls.',
    relatedTerms: ['Pastoral Care', 'Prayer Request'],
  },
  {
    term: 'CCLI',
    definition: 'Christian Copyright Licensing International. A licensing organization that allows churches to legally use copyrighted worship songs. Relius integrates with CCLI for song reporting.',
  },
  {
    term: 'Check-In',
    definition: 'The process of recording attendance when someone arrives at an event or service. Can use QR codes, kiosks, or manual entry.',
    relatedTerms: ['Attendance', 'QR Code'],
  },
  {
    term: 'ChMS',
    definition: 'Church Management Software. A category of software designed to help churches manage members, groups, events, donations, and communications.',
  },
  {
    term: 'Custom Field',
    definition: 'A user-defined data field added to member profiles, groups, or events to track information specific to your church\'s needs.',
  },
  {
    term: 'Dashboard',
    definition: 'The main overview screen showing key metrics, recent activity, and quick links to common actions.',
  },
  {
    term: 'Designation',
    definition: 'See "Fund".',
  },
  {
    term: 'Family/Household',
    definition: 'A grouping of related people who share an address or family relationship. Used for mailings and family-oriented features.',
  },
  {
    term: 'Fund',
    definition: 'A category for tracking donations, such as "General Fund," "Building Fund," or "Missions." Also called a designation.',
    relatedTerms: ['Campaign', 'Donation'],
  },
  {
    term: 'Group',
    definition: 'A collection of people organized for a specific purpose, such as a small group, class, committee, or ministry team.',
    relatedTerms: ['Group Type', 'Group Leader'],
  },
  {
    term: 'Group Leader',
    definition: 'A person assigned to lead or facilitate a group. Leaders have additional permissions to manage group members and communicate with the group.',
  },
  {
    term: 'Group Type',
    definition: 'A classification for groups, such as "Small Group," "Class," "Committee," or "Team." Helps organize and filter groups.',
  },
  {
    term: 'Inactive Member',
    definition: 'A person who has not attended or engaged with the church within a defined period. May trigger at-risk detection or follow-up workflows.',
    relatedTerms: ['Active Member', 'At-Risk'],
  },
  {
    term: 'Integration',
    definition: 'A connection between Relius and an external service, such as Stripe for payments, Google Calendar for events, or Mailchimp for email.',
    relatedTerms: ['API', 'Webhook'],
  },
  {
    term: 'Kiosk Mode',
    definition: 'A simplified interface designed for self-service stations, such as check-in kiosks or giving stations in the church lobby.',
  },
  {
    term: 'Merge Tags',
    definition: 'Placeholders in emails or templates (like {{first_name}}) that are replaced with actual data when sent. Used for personalization.',
  },
  {
    term: 'Pastoral Care',
    definition: 'The ministry of caring for congregation members through visits, counseling, prayer, and follow-up. Tracked in Relius via care notes and prayer requests.',
    relatedTerms: ['Care Note', 'Prayer Request', 'At-Risk'],
  },
  {
    term: 'Pipeline',
    definition: 'A visual workflow for tracking people through stages of a process, such as new member assimilation or volunteer onboarding.',
  },
  {
    term: 'Pledge',
    definition: 'A commitment to give a specific amount over time, often associated with a campaign. Tracked separately from actual donations.',
    relatedTerms: ['Campaign', 'Recurring Giving'],
  },
  {
    term: 'Prayer Request',
    definition: 'A submitted request for prayer, which can be shared publicly, with a prayer team, or kept private with pastoral staff.',
    relatedTerms: ['Prayer Team', 'Care Note'],
  },
  {
    term: 'Prayer Team',
    definition: 'A group of people designated to receive and pray for prayer requests submitted to the church.',
  },
  {
    term: 'QR Code',
    definition: 'A scannable code used for quick check-in, event registration, or giving. Relius generates unique QR codes for various purposes.',
    relatedTerms: ['Check-In'],
  },
  {
    term: 'Recurring Giving',
    definition: 'Automated donations that occur on a regular schedule (weekly, monthly, etc.). Set up by donors and processed automatically.',
    relatedTerms: ['Donation', 'Stripe'],
  },
  {
    term: 'Role',
    definition: 'A set of permissions assigned to users, determining what they can view and do in Relius. Common roles include Admin, Staff, and Leader.',
  },
  {
    term: 'Service Plan',
    definition: 'A detailed outline for a worship service, including the order of elements, assigned volunteers, and song selections. Also called a run sheet.',
    relatedTerms: ['Service Template', 'Song Library'],
  },
  {
    term: 'Service Template',
    definition: 'A reusable service plan structure that can be copied to create new service plans quickly.',
  },
  {
    term: 'Song Library',
    definition: 'A database of songs used in worship, including lyrics, arrangements, keys, and CCLI numbers.',
    relatedTerms: ['CCLI', 'Service Plan'],
  },
  {
    term: 'Team',
    definition: 'A type of group focused on volunteer service, such as worship team, tech team, or hospitality team. Teams have positions and scheduling features.',
    relatedTerms: ['Group', 'Volunteer Scheduling'],
  },
  {
    term: 'Two-Factor Authentication (2FA)',
    definition: 'An extra security layer requiring a second form of verification (like a code from an authenticator app) in addition to a password.',
  },
  {
    term: 'Visitor',
    definition: 'A person who has attended the church but is not yet a regular member. Often tracked separately for follow-up purposes.',
    relatedTerms: ['New Member', 'Pipeline'],
  },
  {
    term: 'Volunteer Scheduling',
    definition: 'The process of assigning volunteers to service positions, managing availability, and sending reminders.',
    relatedTerms: ['Team', 'Service Plan'],
  },
  {
    term: 'Webhook',
    definition: 'An automated message sent from Relius to another system when a specific event occurs, such as a new donation or check-in.',
    relatedTerms: ['API', 'Integration'],
  },
  {
    term: 'Year-End Statement',
    definition: 'A summary of a donor\'s giving for the tax year, typically generated in January for the previous year. Used for tax deduction documentation.',
    relatedTerms: ['Tax Receipt', 'Donation'],
  },
];

// Group terms by first letter
const groupedTerms = glossaryTerms.reduce((acc, term) => {
  const letter = term.term[0].toUpperCase();
  if (!acc[letter]) acc[letter] = [];
  acc[letter].push(term);
  return acc;
}, {} as Record<string, Term[]>);

const alphabet = Object.keys(groupedTerms).sort();

export default function GlossaryPage() {
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
        <span className="text-slate-900 font-medium">Glossary</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
            <BookMarked className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Reference
            </p>
            <h1 className="text-4xl font-bold text-slate-900">Glossary</h1>
          </div>
        </div>
      </div>

      {/* Quick Summary */}
      <blockquote className="border-l-4 border-violet-500 bg-violet-50 p-6 rounded-r-lg not-prose">
        <p className="text-lg text-slate-700">
          <strong>Quick Summary:</strong> Definitions of terms used throughout Relius and 
          church management in general. Jump to a letter or scroll through the full list.
        </p>
      </blockquote>

      {/* Alphabet Navigation */}
      <div className="sticky top-0 z-10 bg-white border-b border-slate-200 py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {alphabet.map((letter) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="w-8 h-8 flex items-center justify-center rounded bg-slate-100 text-slate-700 text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors"
            >
              {letter}
            </a>
          ))}
        </div>
      </div>

      {/* Terms */}
      <div className="space-y-12">
        {alphabet.map((letter) => (
          <section key={letter} id={`letter-${letter}`} className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
              {letter}
            </h2>
            <div className="space-y-6">
              {groupedTerms[letter].map((item) => (
                <div key={item.term} id={item.term.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-24">
                  <h3 className="text-lg font-semibold text-slate-900">{item.term}</h3>
                  <p className="text-slate-600 mt-1">{item.definition}</p>
                  {item.relatedTerms && (
                    <p className="text-sm text-slate-500 mt-2">
                      <span className="font-medium">Related:</span>{' '}
                      {item.relatedTerms.map((related, i) => (
                        <span key={related}>
                          <a
                            href={`#${related.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-primary-600 hover:underline"
                          >
                            {related}
                          </a>
                          {i < item.relatedTerms!.length - 1 && ', '}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Missing Term */}
      <section className="rounded-xl border border-slate-200 bg-slate-50 p-6 space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Missing a Term?</h2>
        <p className="text-slate-600">
          If you've encountered a term in Relius that isn't defined here, let us know and we'll add it.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
        >
          Suggest a Term
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
        </div>
      </section>
    </div>
  );
}
