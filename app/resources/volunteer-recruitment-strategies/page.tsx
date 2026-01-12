import Link from 'next/link';
import { ArrowRight, Users, Heart, Search, MessageCircle, BarChart, Sparkles } from 'lucide-react';

export const metadata = {
    title: 'Volunteer recruitment strategies | Relius Resources',
    description: 'A playbook for finding, recruiting, and retaining volunteers using Relius.',
};

export default function VolunteerRecruitmentPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        Playbook
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Users className="w-4 h-4" />
                        <span>For Ministry Leaders</span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Volunteer recruitment strategies
                </h1>

                <p className="text-xl text-slate-600">
                    Stop begging from the pulpit. Here is a systematic approach to building healthy volunteer pipelines that last.
                </p>
            </header>

            {/*
        VISUAL ASSET SUGGESTION:
        - Type: Illustration
        - Description: A funnel concept showing people moving from "Attender" to "Interested" to "Trained" to "Active Volunteer".
        - Style: Modern, clean, showing growth and connection.
        - Alt text: Volunteer engagement funnel
      */}
            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-12 bg-slate-100 flex items-center justify-center text-slate-400">
                [Illustration: Volunteer Funnel]
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-slate-600 mb-8">
                    Recruitment isn't about filling holes; it's about helping people find their purpose. When you shift that mindset, everything changes.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Identify Potential (Don't Just Wait for Volunteers)
                </h2>

                <p>
                    Most people are waiting to be asked personally. Relius helps you find who to ask.
                </p>

                <div className="bg-white border border-slate-200 rounded-xl p-6 my-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Who to look for in Relius:</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <Search className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-medium text-slate-900">The "Regular but Unconnected"</span>
                                <p className="text-sm text-slate-600">Filter for: Attended 3+ times in last month AND Not in a Group AND Not Serving.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Search className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-medium text-slate-900">The "New Member"</span>
                                <p className="text-sm text-slate-600">Filter for: Joined in last 6 months. They are often eager to plug in.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Search className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-medium text-slate-900">The "Gifted Match"</span>
                                <p className="text-sm text-slate-600">Use AI Search: "Find people with musical background who aren't on worship team."</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Create Clear Position Templates
                </h2>

                <p>
                    Ambiguity kills volunteering. People are afraid to say yes if they don't know what they're signing up for.
                    In Relius, create <strong>Position Templates</strong> for every role.
                </p>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 my-6">
                    <h4 className="font-bold text-slate-900 mb-2">Example: Door Greeter</h4>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700 text-sm">
                        <li><strong>Time Commitment:</strong> 1 Sunday per month, 8:30am - 10:30am</li>
                        <li><strong>Responsibilities:</strong> Open doors, smile, hand out bulletins, help guests find kids check-in.</li>
                        <li><strong>Training:</strong> 15-minute walk-through on first day.</li>
                        <li><strong>Reports to:</strong> Connections Director.</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Automate the "Interested" Workflow
                </h2>

                <p>
                    When someone checks "I'm interested in serving" on a connection card, speed matters.
                    Set up a <strong>Workflow</strong> in Relius:
                </p>

                <ol className="list-decimal pl-5 space-y-4 text-slate-700 marker:font-bold marker:text-slate-900">
                    <li><strong>Trigger:</strong> Form submission "Volunteer Interest".</li>
                    <li><strong>Action 1:</strong> Send automated email: "Thanks for raising your hand! We're excited to help you find your spot."</li>
                    <li><strong>Action 2:</strong> Create task for Ministry Leader: "Call [Name] within 48 hours."</li>
                    <li><strong>Action 3:</strong> Add to "Pending Volunteers" group.</li>
                </ol>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Use AI to Match Volunteers
                </h2>

                <p>
                    Relius AI can analyze member profiles to suggest good fits.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-white border border-purple-100 rounded-xl p-6 my-6 flex gap-4 items-start">
                    <Sparkles className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-purple-900 mb-1">AI Recommendation Engine</h4>
                        <p className="text-purple-800 text-sm mb-0">
                            "Based on Sarah's past involvement in youth ministry and her recent note about wanting to mentor, she might be a great fit for the High School Small Group Leader role."
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    Retention: The "First 90 Days"
                </h2>

                <p>
                    The first three months are critical. Set automated reminders for yourself:
                </p>

                <ul className="space-y-3 my-6">
                    <li className="flex items-center gap-3">
                        <MessageCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700"><strong>Week 1:</strong> "How was your first time serving?" text message.</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <MessageCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700"><strong>Month 1:</strong> Coffee check-in. Is this role a good fit?</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <MessageCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700"><strong>Month 3:</strong> "You're doing great" handwritten note.</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Measuring Health
                </h2>
                <p>
                    Don't just count heads. Look at the <strong>Volunteer Health Dashboard</strong> in Relius to see:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li><strong>Participation Rate:</strong> What % of your adults are serving? (Healthy is &gt;40%)</li>
                    <li><strong>Burnout Risk:</strong> Who is serving more than 3 times a month?</li>
                    <li><strong>Pipeline:</strong> How many people are in the "Interested" but not "Active" stage?</li>
                </ul>

            </div>

            <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Build your dream team
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    Relius gives you the tools to find, train, and keep amazing volunteers.
                </p>
                <Link
                    href="/pricing/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                    Start managing volunteers
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </article>
    );
}
