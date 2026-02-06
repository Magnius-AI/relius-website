import { Metadata } from 'next';
import Link from 'next/link';
import { HandHeart, Users, Bell, Lock, MessageCircle, ChevronRight, CheckCircle, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prayer Requests - Pastoral Care - Relius Documentation',
  description: 'Manage prayer requests from your congregation with privacy controls and prayer team coordination in Relius.',
  alternates: {
    canonical: 'https://relius.ai/resources/docs/pastoral-care/prayer',
  },
  openGraph: {
    title: 'Prayer Requests | Relius Documentation',
    description: 'Manage prayer requests from your congregation with privacy controls and prayer team coordination.',
    url: 'https://relius.ai/resources/docs/pastoral-care/prayer',
  },
  keywords: ['prayer requests', 'church management', 'prayer chain', 'prayer team', 'pastoral care'],
};

export default function PrayerRequestsPage() {
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
        <span className="text-slate-900 font-medium">Prayer Requests</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
            <HandHeart className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">
              Pastoral Care
            </p>
            <h1 className="text-4xl font-bold text-slate-900">Prayer Requests</h1>
          </div>
        </div>
      </div>

      {/* Quick Summary */}
      <blockquote className="border-l-4 border-rose-500 bg-rose-50 p-6 rounded-r-lg not-prose">
        <p className="text-lg text-slate-700">
          <strong>Quick Summary:</strong> Receive, organize, and share prayer requests with your 
          congregation and prayer team. Members control their own privacy preferences—public, 
          prayer team only, or pastoral staff only.
        </p>
      </blockquote>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
        <div className="prose prose-slate max-w-none">
          <p>
            Prayer is central to the life of your church. When members face illness, job loss, 
            family challenges, or times of gratitude, they want to know their church family is 
            praying with them. But managing prayer requests—especially respecting different 
            privacy preferences—can be complex.
          </p>
          <p>
            Relius Prayer Requests provides a simple way for members to submit requests through 
            your website, app, or in person. Each request can be routed appropriately based on 
            the submitter's privacy preference: shared publicly with the congregation, sent to 
            a dedicated prayer team, or kept confidential with pastoral staff only.
          </p>
          <p>
            Prayer team members receive notifications when new requests come in, can mark 
            requests as "prayed for," and can add updates as situations evolve.
          </p>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Key Concepts</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Lock className="h-4 w-4 text-rose-600" />
              Privacy Levels
            </h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li><strong>Public:</strong> Shared in bulletins, announcements, public prayer lists</li>
              <li><strong>Prayer Team:</strong> Visible to designated prayer team members only</li>
              <li><strong>Pastoral Only:</strong> Visible to pastoral staff only</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Users className="h-4 w-4 text-rose-600" />
              Prayer Teams
            </h3>
            <p className="text-sm text-slate-600">
              Create one or more prayer teams (e.g., "Intercessory Prayer Team," "Elder Prayer 
              Chain"). Requests routed to "Prayer Team" go to all members of your designated teams.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-rose-600" />
              Request Status
            </h3>
            <p className="text-sm text-slate-600">
              Track requests as <strong>Active</strong>, <strong>Answered</strong>, or 
              <strong>Closed</strong>. Celebrate answered prayers and archive old requests 
              while keeping a complete history.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-rose-600" />
              Updates
            </h3>
            <p className="text-sm text-slate-600">
              Add updates to requests as situations evolve. "Surgery went well!" or "Still 
              waiting on test results" keeps prayer partners informed.
            </p>
          </div>
        </div>
      </section>

      {/* Receiving Requests */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Receiving Prayer Requests</h2>
        <div className="prose prose-slate max-w-none">
          <p>Members can submit prayer requests through multiple channels:</p>
          
          <h3>Public Website Form</h3>
          <p>
            Enable the prayer request form on your public website. Visitors and members can 
            submit requests anytime. They'll select their privacy preference and optionally 
            include contact information.
          </p>

          <h3>Member App</h3>
          <p>
            Logged-in members can submit requests through the Relius app. Their name is 
            automatically associated (unless they choose anonymous), and they can track 
            updates on their own requests.
          </p>

          <h3>Manual Entry</h3>
          <p>
            Pastoral staff can enter requests on behalf of members—useful for requests 
            received by phone, in person, or via email.
          </p>

          <h3>During Services</h3>
          <p>
            Some churches collect prayer cards during services. Staff can quickly enter 
            these through the Pastoral Care → Prayer Requests → Add Request interface.
          </p>
        </div>
      </section>

      {/* Managing Requests */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Managing Requests</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Prayer Dashboard</h3>
            <p className="text-slate-600 mb-4">
              The Prayer Requests dashboard shows all active requests organized by date. 
              Filter by privacy level, category, or date range. Prayer team members see 
              only requests they have access to.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Marking as Prayed</h3>
            <p className="text-slate-600 mb-4">
              Prayer team members can click "I prayed for this" to log their intercession. 
              This creates a record of prayer coverage and encourages consistent prayer 
              across the team.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Adding Updates</h3>
            <p className="text-slate-600 mb-4">
              When you receive news about a prayer request, add an update. The original 
              submitter (if they provided contact info) can be automatically notified of 
              updates to their request.
            </p>
          </div>

          <details className="rounded-lg border border-slate-200 bg-white">
            <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50">
              Advanced: Prayer Request Categories
            </summary>
            <div className="px-5 pb-5 pt-2 text-slate-600 space-y-3">
              <p>
                Organize requests by category to help prayer partners focus:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Health:</strong> Illness, surgery, recovery</li>
                <li><strong>Family:</strong> Relationships, children, marriage</li>
                <li><strong>Work/Finances:</strong> Jobs, financial needs</li>
                <li><strong>Spiritual Growth:</strong> Faith journeys, decisions</li>
                <li><strong>Grief:</strong> Loss of loved ones</li>
                <li><strong>Praise:</strong> Thanksgiving and answered prayers</li>
              </ul>
              <p>
                Customize categories in Settings → Pastoral Care → Prayer Categories.
              </p>
            </div>
          </details>

          <details className="rounded-lg border border-slate-200 bg-white">
            <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50">
              Advanced: Automatic Expiration
            </summary>
            <div className="px-5 pb-5 pt-2 text-slate-600 space-y-3">
              <p>
                Set requests to automatically move to "Closed" status after a period 
                (e.g., 30 days). Before closing, the submitter receives a notification 
                asking if they want to extend the request or mark it answered.
              </p>
              <p>
                This keeps your active prayer list fresh and prompts follow-up with 
                those who submitted requests.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* Sharing Requests */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Sharing Prayer Requests</h2>
        <div className="prose prose-slate max-w-none">
          <h3>Weekly Prayer List</h3>
          <p>
            Generate a formatted prayer list for bulletins, emails, or slides. Go to 
            Prayer Requests → Generate List and select your date range. Only public 
            requests are included automatically.
          </p>

          <h3>Prayer Chain Notifications</h3>
          <p>
            Enable instant notifications for your prayer team. When a new "Prayer Team" 
            or "Pastoral Only" request comes in, team members receive an email or push 
            notification (based on their preferences).
          </p>

          <h3>Public Prayer Wall</h3>
          <p>
            Display a live prayer wall on your website or lobby screens showing public 
            requests. Members can add their own prayers directly from the wall.
          </p>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Best Practices</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Honor privacy choices</h3>
            <p className="text-sm text-slate-600">
              If someone marks a request as "Prayer Team Only," never share it publicly—even 
              if you think more prayer would help. Trust is essential.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Follow up on requests</h3>
            <p className="text-sm text-slate-600">
              Check in with submitters periodically. "How are things going with your 
              mother's health?" shows that prayer isn't just words—it's care.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Celebrate answered prayers</h3>
            <p className="text-sm text-slate-600">
              When requests are marked "Answered," share the good news (with permission). 
              This builds faith and encourages others to share their needs.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Train your prayer team</h3>
            <p className="text-sm text-slate-600">
              Ensure team members understand confidentiality. What's shared in the prayer 
              team stays in the prayer team.
            </p>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Common Questions</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-900">Q: Can people submit anonymous requests?</p>
            <p className="text-slate-600 mt-2">
              Yes. On the public form, submitters can choose to remain anonymous. Their 
              request will show "Anonymous" as the requester. If they want follow-up, 
              they can optionally provide an email.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-900">Q: How do I remove someone from the prayer team?</p>
            <p className="text-slate-600 mt-2">
              Go to Groups → Prayer Team and remove them from the group. They'll immediately 
              lose access to "Prayer Team" level requests.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-900">Q: Can I import prayer requests from another system?</p>
            <p className="text-slate-600 mt-2">
              Yes, you can import requests via CSV. Go to Pastoral Care → Prayer Requests → 
              Import. Map your columns to our fields and set the default privacy level.
            </p>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="border-t border-slate-200 pt-8 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Related Topics</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/resources/docs/pastoral-care/notes"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-rose-300 hover:text-rose-600 transition-all"
          >
            Care Notes →
          </Link>
          <Link
            href="/resources/docs/pastoral-care/at-risk"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-rose-300 hover:text-rose-600 transition-all"
          >
            At-Risk Detection →
          </Link>
          <Link
            href="/resources/docs/groups/creating"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-rose-300 hover:text-rose-600 transition-all"
          >
            Creating Groups →
          </Link>
          <Link
            href="/resources/docs/communications/email"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-rose-300 hover:text-rose-600 transition-all"
          >
            Email Campaigns →
          </Link>
        </div>
      </section>
    </div>
  );
}
