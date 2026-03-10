import Link from 'next/link';
import { Sparkles, Heart, Users, ShieldCheck, AlertTriangle, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pastoral Care AI | Relius Documentation',
    description: 'AI-powered insights for identifying at-risk members, suggesting follow-up actions, and helping pastoral teams prioritize care.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/ai/pastoral-care/',
    },
    openGraph: {
        title: 'Pastoral Care AI | Relius Documentation',
        description: 'AI-powered insights for identifying at-risk members, suggesting follow-up actions, and helping pastoral teams prioritize care.',
        url: 'https://relius.ai/resources/docs/ai/pastoral-care/',
    },
    keywords: ['pastoral care AI', 'church member care', 'at-risk members', 'church follow-up', 'pastoral insights'],
};

export default function PastoralCareAIPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        AI Features
                    </span>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Pastoral Care AI
                </h1>

                <p className="text-xl text-slate-600">
                    AI-powered insights for identifying at-risk members, suggesting follow-up actions, and helping pastoral teams prioritize care across the congregation.
                </p>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <blockquote className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded-r-lg">
                    <p className="mb-0 text-slate-700">
                        <strong>Quick Summary:</strong> Pastoral Care AI analyzes attendance patterns, group participation, giving changes, and interaction history to flag members who may be disengaging or going through difficult circumstances. It suggests specific follow-up actions for pastoral staff and helps teams prioritize who to reach out to first&mdash;without replacing the relational discernment that defines pastoral ministry.
                    </p>
                </blockquote>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-purple-600" />
                    Overview
                </h2>
                <p>
                    In a growing congregation, it becomes difficult to notice when individuals start pulling away. Someone who attended weekly for two years may quietly stop coming, and by the time anyone notices, months have passed. Pastoral Care AI monitors engagement signals across the platform&mdash;attendance check-ins, small group participation, giving patterns, event registrations, and communication interactions&mdash;and surfaces members whose behavior has changed in ways that may indicate they need care.
                </p>
                <p>
                    The system presents these insights on a prioritized dashboard where pastoral staff can review flagged members, see the specific signals that triggered the flag, and choose an appropriate response. Suggested actions might include a phone call, a home visit, a care team assignment, or a personal email. All follow-up is tracked so the team has a shared view of who has been contacted and what the outcome was.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-purple-600" />
                    Key Features
                </h2>
                <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">At-Risk Member Detection</h3>
                        <p className="text-slate-700 mb-0">
                            The AI identifies members whose engagement has declined based on configurable thresholds. It accounts for normal fluctuations (vacations, seasonal patterns) and focuses on sustained changes that suggest genuine disengagement or personal difficulty.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Prioritized Care Dashboard</h3>
                        <p className="text-slate-700 mb-0">
                            Flagged members are displayed in a prioritized list based on the severity and duration of engagement changes. Members with multiple declining signals (attendance drop, giving cessation, group absence) appear higher than those with a single indicator.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Suggested Follow-Up Actions</h3>
                        <p className="text-slate-700 mb-0">
                            For each flagged member, the AI suggests context-appropriate actions: a casual check-in call for someone who missed a few weeks, a pastoral visit for someone who has been absent for a month and stopped giving, or a care team assignment for someone with a known health issue.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Follow-Up Tracking</h3>
                        <p className="text-slate-700 mb-0">
                            Log every contact attempt, note the outcome, and track follow-up status. The care dashboard shows which flagged members have been contacted, which are awaiting response, and which need additional follow-up.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Privacy Controls</h3>
                        <p className="text-slate-700 mb-0">
                            All pastoral care data is access-controlled. Only authorized pastoral staff can view at-risk flags, care notes, and follow-up history. Members do not see their own risk scores. Data is encrypted and never shared outside your church account.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-purple-600" />
                    Getting Started
                </h2>

                <div className="space-y-8">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 1: Enable Pastoral Care AI
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Navigate to <strong>AI Tools &rarr; Pastoral Care AI</strong> and toggle the feature on. You will be asked to configure which data sources the AI should monitor: attendance, giving, group participation, event registration, and communication engagement.
                        </p>
                        <p className="text-slate-700 mb-0">
                            Select only the signals that are relevant and consistently tracked at your church. If you do not use check-in for attendance, for example, leave that signal disabled to avoid inaccurate flags.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 2: Set Sensitivity Thresholds
                        </h3>
                        <p className="text-slate-700 mb-0">
                            Configure how sensitive the detection should be. A lower threshold flags members sooner (after missing 2 weeks, for example), while a higher threshold waits longer before alerting (4+ weeks of absence). You can set different thresholds for different signals and adjust them as you learn what works for your congregation's rhythm.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 3: Assign Care Team Access
                        </h3>
                        <p className="text-slate-700 mb-0">
                            Grant dashboard access to pastoral staff and care team leaders. Each person with access can view flagged members, log follow-up actions, and add care notes. You can restrict access by campus, ministry area, or specific member groups to maintain appropriate boundaries.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 4: Review and Act on Flags
                        </h3>
                        <p className="text-slate-700 mb-0">
                            Check the care dashboard regularly&mdash;weekly is a good starting cadence. Review each flagged member, consider the AI's suggested action, and assign follow-up to the appropriate team member. Log the outcome of each contact so the team stays aligned.
                        </p>
                    </section>
                </div>

                <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="font-medium text-amber-900">Important Note on Privacy</p>
                        <p className="text-amber-800 text-sm mb-0">
                            Pastoral Care AI processes sensitive engagement data. Ensure your church's leadership has reviewed and approved the use of automated monitoring, and communicate transparently with your congregation about how data is used to support pastoral care. All data stays within your church account and is never used for external purposes.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                    Best Practices
                </h2>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">1.</span>
                            <span><strong>Use AI as a supplement, not a replacement:</strong> The dashboard surfaces people who might need care, but pastoral discernment is required to determine the right response. A flagged member might be on a planned sabbatical, not in crisis.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">2.</span>
                            <span><strong>Review flags weekly:</strong> Set a recurring time for your pastoral team to review the dashboard together. Discussing flagged members as a group leads to better-coordinated care than individual ad-hoc responses.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">3.</span>
                            <span><strong>Log every follow-up:</strong> Even a brief note after a phone call helps the team know what has already happened. This prevents duplicate outreach and provides context for the next person who follows up.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">4.</span>
                            <span><strong>Adjust thresholds over time:</strong> If you are getting too many flags for normal attendance variation, raise the sensitivity threshold. If members are falling through the cracks, lower it. The right settings depend on your church's size and culture.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">5.</span>
                            <span><strong>Restrict access appropriately:</strong> Not every staff member needs to see pastoral care flags. Limit access to those who are directly responsible for member care to protect sensitive information.</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Common Questions</h2>
                <div className="space-y-4">
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Do members know they have been flagged?</p>
                        <p className="text-slate-700 mb-0">
                            A: No. At-risk flags and care scores are internal tools visible only to authorized pastoral staff. Members see no indication of their status in the app, on their profile, or in any communication they receive.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: What data does the AI use to detect at-risk members?</p>
                        <p className="text-slate-700 mb-0">
                            A: It analyzes the data sources you enable during setup: attendance check-in records, small group participation, giving frequency and amount changes, event registration history, and email/SMS engagement metrics. It does not read the content of care notes or prayer requests.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Can I dismiss a flag if I know the member is fine?</p>
                        <p className="text-slate-700 mb-0">
                            A: Yes. You can dismiss any flag with an optional note explaining why (e.g., "On vacation until August" or "Moved to Saturday service"). Dismissed flags are archived and will not resurface unless a new, separate signal triggers a fresh alert.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: How does this differ from the existing Pastoral Care module?</p>
                        <p className="text-slate-700 mb-0">
                            A: The standard Pastoral Care module provides tools for manually tracking care visits, prayer requests, and notes. Pastoral Care AI adds an automated detection layer on top of that&mdash;it proactively surfaces members who may need attention rather than waiting for someone to notice or report a concern.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Topics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/resources/docs/ai/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="w-4 h-4 text-purple-600" />
                            <h3 className="font-bold text-slate-900">AI Features Overview</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-0">Learn how AI works across the Relius platform</p>
                    </Link>
                    <Link href="/resources/docs/pastoral-care/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Pastoral Care Module</h3>
                        <p className="text-sm text-slate-600 mb-0">Manual care tracking, prayer requests, and visit logging</p>
                    </Link>
                    <Link href="/resources/docs/ai/sermon-planner/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="w-4 h-4 text-purple-600" />
                            <h3 className="font-bold text-slate-900">AI Sermon Planner</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-0">AI-powered sermon preparation and series planning</p>
                    </Link>
                    <Link href="/resources/docs/giving/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Giving</h3>
                        <p className="text-sm text-slate-600 mb-0">Online giving setup and donor management</p>
                    </Link>
                </div>
            </div>
        </article>
    );
}
