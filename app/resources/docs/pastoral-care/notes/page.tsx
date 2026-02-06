import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Plus, Search, Calendar, Lock, Users, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Care Notes - Pastoral Care - Relius Documentation',
  description: 'Document pastoral visits, counseling sessions, and member care with confidential notes in Relius.',
  alternates: {
    canonical: 'https://relius.ai/resources/docs/pastoral-care/notes',
  },
  openGraph: {
    title: 'Care Notes | Relius Documentation',
    description: 'Document pastoral visits, counseling sessions, and member care with confidential notes in Relius.',
    url: 'https://relius.ai/resources/docs/pastoral-care/notes',
  },
  keywords: ['pastoral care', 'church management', 'care notes', 'counseling', 'member care', 'visit tracking'],
};

export default function CareNotesPage() {
  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-600 not-prose">
        <Link href="/resources/docs" className="hover:text-primary-600 transition-colors">
          Documentation
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/resources/docs/pastoral-care" className="hover:text-primary-600 transition-colors">
          Pastoral Care
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-slate-900 font-medium">Care Notes</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">
              Pastoral Care
            </p>
            <h1 className="text-4xl font-bold text-slate-900">Care Notes</h1>
          </div>
        </div>
      </div>

      {/* Quick Summary */}
      <blockquote className="border-l-4 border-rose-500 bg-rose-50 p-6 rounded-r-lg not-prose">
        <p className="text-lg text-slate-700">
          <strong>Quick Summary:</strong> Care Notes let you document pastoral visits, counseling sessions, 
          and member interactions with full privacy controls. Notes are tied to member profiles and 
          accessible only to authorized pastoral staff.
        </p>
      </blockquote>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
        <div className="prose prose-slate max-w-none">
          <p>
            Every conversation matters in pastoral care. When you visit someone in the hospital, 
            counsel a couple through a difficult season, or simply check in on a homebound member, 
            documenting those interactions ensures continuity of care—especially when multiple staff 
            members are involved.
          </p>
          <p>
            Care Notes in Relius provide a secure, organized way to record pastoral interactions. 
            Each note is linked to a member's profile, creating a timeline of care that helps you 
            remember context, track progress, and coordinate with other pastoral staff.
          </p>
          <p>
            Privacy is built into every layer. You control who can see each note, from pastor-only 
            entries to notes shared with your entire care team.
          </p>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Key Concepts</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <FileText className="h-4 w-4 text-rose-600" />
              Note Types
            </h3>
            <p className="text-sm text-slate-600">
              Categorize notes by type: Hospital Visit, Home Visit, Counseling Session, Phone Call, 
              General Check-in, Crisis Response, or custom types you define.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Lock className="h-4 w-4 text-rose-600" />
              Privacy Levels
            </h3>
            <p className="text-sm text-slate-600">
              <strong>Private:</strong> Only you and senior pastors can view. 
              <strong>Team:</strong> Visible to all pastoral care staff. 
              <strong>Extended:</strong> Visible to group leaders and ministry staff.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-rose-600" />
              Follow-ups
            </h3>
            <p className="text-sm text-slate-600">
              Set a follow-up date when creating a note. You'll receive a reminder to check back in, 
              ensuring no one falls through the cracks.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Users className="h-4 w-4 text-rose-600" />
              Care Timeline
            </h3>
            <p className="text-sm text-slate-600">
              Each member's profile shows a chronological timeline of all care interactions, 
              giving you instant context for every conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Creating a Care Note</h2>
        <div className="prose prose-slate max-w-none">
          <h3>Step 1: Navigate to the Member</h3>
          <p>
            Go to <strong>People → Directory</strong> and find the member you want to add a note for. 
            Click their name to open their profile.
          </p>

          <h3>Step 2: Open the Care Tab</h3>
          <p>
            On the member's profile, click the <strong>Care</strong> tab. You'll see their care 
            timeline with any existing notes.
          </p>

          <h3>Step 3: Add a New Note</h3>
          <p>
            Click the <strong>+ Add Note</strong> button. Fill in:
          </p>
          <ul>
            <li><strong>Date:</strong> When the interaction occurred (defaults to today)</li>
            <li><strong>Type:</strong> Select the type of interaction</li>
            <li><strong>Privacy:</strong> Choose who can see this note</li>
            <li><strong>Content:</strong> Write your note—be specific but appropriate</li>
            <li><strong>Follow-up:</strong> Optionally set a reminder date</li>
          </ul>

          <h3>Step 4: Save</h3>
          <p>
            Click <strong>Save Note</strong>. The note is immediately added to the member's care 
            timeline and your care dashboard.
          </p>
        </div>
      </section>

      {/* Quick Add */}
      <section className="rounded-xl border border-slate-200 bg-slate-50 p-6 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Plus className="h-5 w-5 text-rose-600" />
          Quick Add from Anywhere
        </h2>
        <div className="prose prose-slate max-w-none text-slate-700">
          <p>
            You don't have to navigate to a member's profile to add a note. From the Pastoral Care 
            dashboard, click <strong>Quick Add Note</strong>:
          </p>
          <ol>
            <li>Start typing the member's name—Relius will auto-suggest matches</li>
            <li>Select the member and fill in your note</li>
            <li>Save—the note is added to their profile</li>
          </ol>
          <p>
            This is especially useful when logging multiple visits or when you're entering notes 
            from your phone after hospital rounds.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Features</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Care Dashboard</h3>
            <p className="text-slate-600 mb-4">
              The Pastoral Care dashboard shows all recent notes, upcoming follow-ups, and members 
              flagged for attention. Filter by note type, staff member, or date range.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Search & Filter</h3>
            <p className="text-slate-600 mb-4">
              Search notes by keyword, member name, or note type. Need to find everyone you visited 
              in the hospital last month? Filter by type and date range.
            </p>
          </div>

          <details className="rounded-lg border border-slate-200 bg-white">
            <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50">
              Advanced: Bulk Note Entry
            </summary>
            <div className="px-5 pb-5 pt-2 text-slate-600 space-y-3">
              <p>
                After hospital rounds or a visitation day, use <strong>Bulk Entry</strong> to quickly 
                log multiple notes:
              </p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Go to Pastoral Care → Bulk Entry</li>
                <li>Set the default date and note type</li>
                <li>For each visit, type the member name, add a brief note, and press Enter</li>
                <li>Review all entries and click Save All</li>
              </ol>
              <p>
                This can cut your documentation time in half on busy visitation days.
              </p>
            </div>
          </details>

          <details className="rounded-lg border border-slate-200 bg-white">
            <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50">
              Advanced: Note Templates
            </summary>
            <div className="px-5 pb-5 pt-2 text-slate-600 space-y-3">
              <p>
                Create templates for common note types to ensure consistency and save time:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Hospital Visit:</strong> Includes fields for room number, diagnosis, family present, prayer offered</li>
                <li><strong>Grief Follow-up:</strong> Structured check-in for those who've lost loved ones</li>
                <li><strong>New Member Connection:</strong> First pastoral touch with new members</li>
              </ul>
              <p>
                Create templates in Settings → Pastoral Care → Note Templates.
              </p>
            </div>
          </details>

          <details className="rounded-lg border border-slate-200 bg-white">
            <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50">
              Advanced: Attachments & Files
            </summary>
            <div className="px-5 pb-5 pt-2 text-slate-600 space-y-3">
              <p>
                Attach relevant files to care notes when needed:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Consent forms for counseling</li>
                <li>Funeral service programs</li>
                <li>Hospital discharge instructions (for follow-up reference)</li>
                <li>Referral letters to/from counselors</li>
              </ul>
              <p>
                Attachments inherit the privacy level of the note they're attached to.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Best Practices</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Be specific but appropriate</h3>
            <p className="text-sm text-slate-600">
              Include enough detail to jog your memory: "Discussed anxiety about upcoming surgery, 
              prayed together." Avoid unnecessary personal details.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Document within 24 hours</h3>
            <p className="text-sm text-slate-600">
              The longer you wait, the more details you forget. Brief notes today are more valuable 
              than detailed notes you never write.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Always set follow-ups</h3>
            <p className="text-sm text-slate-600">
              Even if it's "check in next month," a follow-up date ensures you don't forget. 
              Consistent follow-through builds trust.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Use consistent categories</h3>
            <p className="text-sm text-slate-600">
              Agree as a team on how to categorize notes. This makes reporting and handoffs much easier.
            </p>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Common Questions</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-900">Q: Can members see their own care notes?</p>
            <p className="text-slate-600 mt-2">
              No. Care notes are internal pastoral documents and are never visible to the member 
              they're about. This ensures pastors can document freely and honestly.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-900">Q: What happens when a staff member leaves?</p>
            <p className="text-slate-600 mt-2">
              Notes remain in the system tied to the member's profile. The original author is 
              recorded for reference, but the notes remain accessible to current pastoral staff.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-900">Q: Can I export care notes for a specific member?</p>
            <p className="text-slate-600 mt-2">
              Yes, administrators can export a member's care timeline as a PDF. This is useful 
              when transitioning someone to a professional counselor or in rare legal situations.
            </p>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="border-t border-slate-200 pt-8 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Related Topics</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/resources/docs/pastoral-care/prayer"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-rose-300 hover:text-rose-600 transition-all"
          >
            Prayer Requests →
          </Link>
          <Link
            href="/resources/docs/pastoral-care/at-risk"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-rose-300 hover:text-rose-600 transition-all"
          >
            At-Risk Detection →
          </Link>
          <Link
            href="/resources/docs/people/directory"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-rose-300 hover:text-rose-600 transition-all"
          >
            Member Directory →
          </Link>
          <Link
            href="/resources/docs/admin/security"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-rose-300 hover:text-rose-600 transition-all"
          >
            Security Settings →
          </Link>
        </div>
      </section>
    </div>
  );
}
