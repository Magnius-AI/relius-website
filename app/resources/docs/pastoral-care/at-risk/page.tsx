import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, TrendingDown, Calendar, DollarSign, Users, ChevronRight, Brain, Bell, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'At-Risk Detection - Pastoral Care - Relius Documentation',
  description: 'AI-powered alerts identify members who may need pastoral care based on attendance, giving, and engagement patterns.',
  alternates: {
    canonical: 'https://relius.ai/resources/docs/pastoral-care/at-risk',
  },
  openGraph: {
    title: 'At-Risk Detection | Relius Documentation',
    description: 'AI-powered alerts identify members who may need pastoral care based on attendance and engagement patterns.',
    url: 'https://relius.ai/resources/docs/pastoral-care/at-risk',
  },
  keywords: ['at-risk detection', 'church management', 'member retention', 'pastoral care', 'AI', 'engagement tracking'],
};

export default function AtRiskDetectionPage() {
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
        <span className="text-slate-900 font-medium">At-Risk Detection</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">
              Pastoral Care
            </p>
            <h1 className="text-4xl font-bold text-slate-900">At-Risk Detection</h1>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
          <Brain className="h-4 w-4" />
          AI-Powered Feature • AI Pro Plan
        </div>
      </div>

      {/* Quick Summary */}
      <blockquote className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded-r-lg not-prose">
        <p className="text-lg text-slate-700">
          <strong>Quick Summary:</strong> At-Risk Detection uses AI to analyze attendance, giving, 
          and engagement patterns to identify members who may be struggling or disengaging—giving 
          you the opportunity to reach out proactively rather than reactively.
        </p>
      </blockquote>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
        <div className="prose prose-slate max-w-none">
          <p>
            People rarely announce when they're drifting from the church. A family going through 
            a crisis may quietly stop attending. A longtime member facing financial hardship may 
            reduce giving without saying why. A young adult questioning their faith may gradually 
            disengage from groups.
          </p>
          <p>
            By the time you notice someone's been gone for months, reconnecting becomes much harder. 
            At-Risk Detection changes this by analyzing patterns across your congregation and 
            alerting you to potential concerns early—when a pastoral conversation can make the 
            biggest difference.
          </p>
          <p>
            This isn't about surveillance or judgment. It's about caring well for the people God 
            has entrusted to your church. The AI surfaces patterns that would take hours to spot 
            manually, freeing you to focus on what matters: actual pastoral care.
          </p>
        </div>
      </section>

      {/* Risk Indicators */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Risk Indicators</h2>
        <p className="text-slate-600">
          The AI analyzes multiple signals to identify members who may need attention. No single 
          factor triggers an alert—the system looks for patterns and combinations.
        </p>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-amber-600" />
              Attendance Changes
            </h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>Sudden drop in service attendance</li>
              <li>Stopped attending groups they were regular in</li>
              <li>Missing patterns (every other week → once a month → absent)</li>
              <li>Withdrew from serving roles</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-amber-600" />
              Giving Changes
            </h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>Significant decrease from established pattern</li>
              <li>Stopped recurring giving</li>
              <li>Giving stopped entirely after years of consistency</li>
              <li className="italic text-slate-500">(Treated with extra sensitivity)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Users className="h-4 w-4 text-amber-600" />
              Engagement Changes
            </h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>Stopped RSVPing to events they used to attend</li>
              <li>No longer opening church emails</li>
              <li>Withdrew from volunteer commitments</li>
              <li>Left a small group</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-amber-600" />
              Life Events
            </h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>Recent loss of family member (from care notes)</li>
              <li>Job loss or major life change mentioned</li>
              <li>Recent divorce or separation</li>
              <li>New parent (may need support adjusting)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">How It Works</h2>
        <div className="prose prose-slate max-w-none">
          <h3>1. Continuous Analysis</h3>
          <p>
            The AI runs weekly, analyzing engagement patterns for all members. It establishes a 
            baseline for each person—what's "normal" for Sarah might be very different from 
            what's normal for John—and flags significant deviations.
          </p>

          <h3>2. Risk Scoring</h3>
          <p>
            Each flagged member receives a risk score from 0-100 based on the severity and 
            combination of indicators. A score of 40+ triggers a "Monitor" status; 60+ triggers 
            an "Alert" status; 80+ is "Urgent."
          </p>

          <h3>3. Alerts & Dashboard</h3>
          <p>
            Flagged members appear on the At-Risk Dashboard with their risk score, specific 
            indicators, and a recommended action. Pastoral staff receive weekly email summaries 
            or real-time notifications for urgent cases.
          </p>

          <h3>4. Action & Resolution</h3>
          <p>
            When you reach out to a flagged member, log the outcome. If the situation is resolved 
            (they were just traveling, or you've connected them with support), mark it resolved. 
            The AI learns from these outcomes to improve future predictions.
          </p>
        </div>
      </section>

      {/* Using the Dashboard */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Using the At-Risk Dashboard</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Dashboard Overview</h3>
            <p className="text-slate-600 mb-4">
              Navigate to <strong>Pastoral Care → At-Risk</strong> to see all flagged members. 
              The dashboard shows:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>Member name and photo</li>
              <li>Risk score and status (Monitor/Alert/Urgent)</li>
              <li>Primary indicators (why they were flagged)</li>
              <li>Days since last contact</li>
              <li>Quick actions: Dismiss, Assign, Add Note, Resolve</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Taking Action</h3>
            <p className="text-slate-600 mb-4">
              Click on any member to see their full profile, care history, and engagement timeline. 
              From there you can:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li><strong>Assign:</strong> Delegate follow-up to another staff member</li>
              <li><strong>Add Care Note:</strong> Log your outreach attempt or conversation</li>
              <li><strong>Resolve:</strong> Mark as resolved with a reason (reconnected, traveling, transferred, etc.)</li>
              <li><strong>Dismiss:</strong> Remove from dashboard if the flag isn't concerning</li>
            </ul>
          </div>

          <details className="rounded-lg border border-slate-200 bg-white">
            <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50">
              Advanced: Customizing Risk Thresholds
            </summary>
            <div className="px-5 pb-5 pt-2 text-slate-600 space-y-3">
              <p>
                Adjust sensitivity based on your church's culture in Settings → Pastoral Care → 
                At-Risk Detection:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Attendance sensitivity:</strong> How many missed weeks triggers a flag</li>
                <li><strong>Giving sensitivity:</strong> What percentage drop is significant</li>
                <li><strong>Engagement weighting:</strong> How much weight to give each factor</li>
                <li><strong>Exclude groups:</strong> Don't flag members of certain groups (e.g., snowbirds)</li>
              </ul>
              <p>
                Start with defaults and adjust based on what you're seeing. Too many false 
                positives? Raise thresholds. Missing people? Lower them.
              </p>
            </div>
          </details>

          <details className="rounded-lg border border-slate-200 bg-white">
            <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50">
              Advanced: Notification Settings
            </summary>
            <div className="px-5 pb-5 pt-2 text-slate-600 space-y-3">
              <p>
                Configure how and when you're notified:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Weekly digest:</strong> Summary email every Monday with new flags</li>
                <li><strong>Urgent alerts:</strong> Immediate notification for 80+ risk scores</li>
                <li><strong>Dashboard only:</strong> No notifications, check dashboard manually</li>
              </ul>
              <p>
                Each pastoral staff member can set their own preferences.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* Ethical Considerations */}
      <section className="rounded-xl border border-blue-200 bg-blue-50 p-6 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          🤔 Ethical Considerations
        </h2>
        <div className="prose prose-slate max-w-none text-slate-700">
          <p>
            At-Risk Detection is a powerful tool that requires wisdom and care:
          </p>
          <ul>
            <li>
              <strong>It's a starting point, not a verdict.</strong> A flag means "consider checking 
              in," not "this person is definitely struggling." Many flags have innocent explanations.
            </li>
            <li>
              <strong>Approach with genuine care, not suspicion.</strong> "We noticed we haven't 
              seen you lately and wanted to check in" is caring. "Our system flagged you" is creepy.
            </li>
            <li>
              <strong>Giving data is sensitive.</strong> Never mention giving changes in your 
              outreach. If someone's giving dropped, they may be facing financial hardship—the 
              last thing they need is feeling judged.
            </li>
            <li>
              <strong>Some people leave for good reasons.</strong> Not everyone who disengages 
              needs to be "won back." Sometimes people transfer, move, or choose a different 
              church. Respect their agency.
            </li>
          </ul>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Best Practices</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Review weekly</h3>
            <p className="text-sm text-slate-600">
              Schedule 30 minutes each week to review new flags with your pastoral team. 
              Assign follow-ups and discuss patterns you're seeing.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Log outcomes</h3>
            <p className="text-sm text-slate-600">
              Always log what you learn from outreach. This helps the AI improve and gives 
              you a record for future reference.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Look for patterns</h3>
            <p className="text-sm text-slate-600">
              If you're seeing the same indicators across multiple families, there may be a 
              systemic issue—a struggling small group, a program that's not connecting, etc.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Celebrate wins</h3>
            <p className="text-sm text-slate-600">
              When early outreach helps someone through a hard season, that's worth celebrating. 
              This is the tool working as intended.
            </p>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Common Questions</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-900">Q: Do members know they're being tracked?</p>
            <p className="text-slate-600 mt-2">
              Members agree to data usage in your privacy policy, but they don't see individual 
              risk scores or flags. The analysis happens behind the scenes to enable better care, 
              not to create a "surveillance" feeling.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-900">Q: Can I exclude certain people from analysis?</p>
            <p className="text-slate-600 mt-2">
              Yes. In a member's profile, you can mark them as "Exclude from at-risk analysis." 
              Use this for snowbirds, members who've communicated a planned absence, or those 
              with unusual circumstances.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-900">Q: How accurate is the AI?</p>
            <p className="text-slate-600 mt-2">
              The AI identifies patterns, not certainties. Expect some false positives (people 
              flagged who are fine) and occasional misses. It's a tool to augment pastoral 
              instincts, not replace them. Over time, as you log outcomes, accuracy improves.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-900">Q: What if I have a small church?</p>
            <p className="text-slate-600 mt-2">
              The AI needs sufficient data to establish baselines. For churches under 50 active 
              members, you may see fewer or less accurate flags. The tool is most valuable for 
              churches of 100+ where it's harder to notice individuals slipping away.
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
            href="/resources/docs/ai/pastoral-insights"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-rose-300 hover:text-rose-600 transition-all"
          >
            AI Pastoral Insights →
          </Link>
          <Link
            href="/resources/docs/ai/donations-manager"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-rose-300 hover:text-rose-600 transition-all"
          >
            AI Donations Manager →
          </Link>
          <Link
            href="/resources/docs/people/directory"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-rose-300 hover:text-rose-600 transition-all"
          >
            Member Directory →
          </Link>
        </div>
      </section>
    </div>
  );
}
