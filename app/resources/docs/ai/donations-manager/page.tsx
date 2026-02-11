import Link from 'next/link';
import { Sparkles, DollarSign, TrendingUp, BarChart3, Mail, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Donations AI | Relius Documentation',
    description: 'AI-powered giving insights, donor engagement analysis, campaign optimization suggestions, and automated thank-you messaging.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/ai/donations-manager/',
    },
    openGraph: {
        title: 'Donations AI | Relius Documentation',
        description: 'AI-powered giving insights, donor engagement analysis, campaign optimization suggestions, and automated thank-you messaging.',
        url: 'https://relius.ai/resources/docs/ai/donations-manager/',
    },
    keywords: ['church donations AI', 'donor engagement', 'giving insights', 'church fundraising', 'donor retention'],
};

export default function DonationsAIPage() {
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
                    Donations AI
                </h1>

                <p className="text-xl text-slate-600">
                    AI-powered giving insights, donor engagement analysis, campaign optimization suggestions, and automated thank-you messaging for church finances.
                </p>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <blockquote className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded-r-lg">
                    <p className="mb-0 text-slate-700">
                        <strong>Quick Summary:</strong> Donations AI analyzes your church's giving data to surface actionable insights: which donors may be at risk of stopping, which campaigns are performing well, when giving dips are seasonal vs. concerning, and how to personalize thank-you communications. It helps finance and stewardship teams make informed decisions without needing to manually comb through spreadsheets.
                    </p>
                </blockquote>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                    Overview
                </h2>
                <p>
                    Understanding giving patterns is critical for church financial health, but most churches lack the time or expertise to analyze donor data systematically. Donations AI processes your church's giving history to identify trends, segment donors by behavior, predict future giving patterns, and suggest actions that can improve donor retention and campaign effectiveness. It works with your existing giving data in Relius&mdash;no external integrations or data exports are required.
                </p>
                <p>
                    The tool produces two types of output: an insights dashboard with visualizations of giving trends, donor segments, and forecasts; and actionable recommendations such as thank-you message drafts, re-engagement suggestions for lapsed donors, and timing advice for campaigns. All financial data is encrypted and accessible only to authorized staff with giving management permissions.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                    Key Features
                </h2>
                <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Donor Engagement Scoring</h3>
                        <p className="text-slate-700 mb-0">
                            Each donor receives an engagement score based on giving frequency, consistency, amount trends, and response to campaigns. Scores help you quickly identify your most engaged supporters, occasional givers who could become regular donors, and previously active donors who have stopped giving.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Churn Prediction</h3>
                        <p className="text-slate-700 mb-0">
                            The AI identifies donors who are likely to stop giving based on declining frequency, reduced amounts, or disengagement from church activities. Early detection allows your stewardship team to reach out before a donor fully lapses, turning a potential loss into a retention opportunity.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Campaign Optimization</h3>
                        <p className="text-slate-700 mb-0">
                            When planning a giving campaign (building fund, missions trip, benevolence fund), the AI suggests optimal timing, messaging tone, target audience segments, and realistic fundraising goals based on historical campaign performance and current donor behavior.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Automated Thank-You Messages</h3>
                        <p className="text-slate-700 mb-0">
                            Generate personalized thank-you emails and notes for donors. The AI tailors each message based on the donor's giving history, the specific fund or campaign they contributed to, and their relationship with the church. Messages are drafted for staff review before sending.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Giving Trend Forecasts</h3>
                        <p className="text-slate-700 mb-0">
                            View projected giving for the coming weeks and months based on historical patterns. The AI accounts for seasonal fluctuations (holiday giving spikes, summer dips), campaign effects, and membership changes to produce realistic revenue forecasts for budgeting.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                    Getting Started
                </h2>

                <div className="space-y-8">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 1: Enable Donations AI
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Navigate to <strong>AI Tools &rarr; Donations AI</strong> and enable the feature. The system will begin analyzing your existing giving data. If you have at least 6 months of giving history in Relius, the AI can produce meaningful insights immediately. Churches with less history will see increasingly accurate insights as more data accumulates.
                        </p>
                        <p className="text-slate-700 mb-0">
                            Only users with financial management permissions can access Donations AI. Verify your team's access levels in <strong>Admin &rarr; Users &amp; Roles</strong>.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 2: Review the Insights Dashboard
                        </h3>
                        <p className="text-slate-700 mb-0">
                            The dashboard shows giving trends over time, donor segment breakdowns, churn risk indicators, and campaign performance comparisons. Spend time familiarizing yourself with the layout and filters. You can filter by date range, fund, campus, and donor segment to drill into specific areas.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 3: Configure Thank-You Automation
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Set up automated thank-you workflows. Choose when messages are triggered (after first gift, after recurring gift milestones, after campaign contributions) and review the AI-generated templates.
                        </p>
                        <p className="text-slate-700 mb-0">
                            Edit the templates to match your church's voice, then enable the workflow. Each message is personalized per donor when it is generated, and you can require staff approval before sending or allow automatic delivery.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 4: Act on Recommendations
                        </h3>
                        <p className="text-slate-700 mb-0">
                            The AI provides specific recommendations in the "Action Items" tab: donors to thank personally, lapsed givers to re-engage, campaigns that would benefit from a follow-up ask, and budget adjustments based on forecast data. Review these weekly and assign follow-up to the appropriate team member.
                        </p>
                    </section>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                    Best Practices
                </h2>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">1.</span>
                            <span><strong>Focus on retention, not just revenue:</strong> Use churn prediction to reach out to disengaging donors early. A personal phone call or note from a pastor often re-engages someone who felt disconnected.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">2.</span>
                            <span><strong>Personalize thank-you messages:</strong> Even with AI-generated drafts, add a personal sentence or two before sending. Donors who feel genuinely appreciated are significantly more likely to continue giving.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">3.</span>
                            <span><strong>Use forecasts for budgeting, not promises:</strong> AI predictions are estimates based on historical patterns. Use them to inform budget planning and cash flow management, but always maintain financial reserves for variance.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">4.</span>
                            <span><strong>Respect donor privacy:</strong> Giving data is sensitive. Limit who has access to Donations AI and avoid discussing individual giving amounts in public settings, even among staff.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">5.</span>
                            <span><strong>Review campaign suggestions before launching:</strong> The AI bases campaign advice on data patterns, but your pastoral team knows your congregation's current circumstances. Always validate AI suggestions against your team's relational knowledge.</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Common Questions</h2>
                <div className="space-y-4">
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Can donors see their engagement scores or churn risk status?</p>
                        <p className="text-slate-700 mb-0">
                            A: No. Engagement scores, churn predictions, and all AI-generated donor insights are internal tools visible only to authorized staff. Donors see their own giving history and receipts, but no AI-derived metrics.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: How much giving history does the AI need to be useful?</p>
                        <p className="text-slate-700 mb-0">
                            A: The AI can produce basic insights with as little as 3 months of data, but its predictions and trend analysis become significantly more accurate with 6-12 months of history. Seasonal pattern detection requires at least one full year of data.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Does Donations AI integrate with external payment processors?</p>
                        <p className="text-slate-700 mb-0">
                            A: Donations AI works with giving data already recorded in Relius. If you use Relius's built-in giving tools, data flows automatically. If you use an external processor, you can import giving records into Relius and the AI will analyze them the same way.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Can the AI send thank-you messages without staff approval?</p>
                        <p className="text-slate-700 mb-0">
                            A: You can configure either mode. For high-volume thank-you messages (automated receipts after every gift), automatic sending is practical. For milestone messages (first gift, annual giving summary, campaign completion), staff review before sending is recommended to ensure the personal touch is appropriate.
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
                    <Link href="/resources/docs/giving/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Giving</h3>
                        <p className="text-sm text-slate-600 mb-0">Online giving setup, tracking, and donor management</p>
                    </Link>
                    <Link href="/resources/docs/communications/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Communications</h3>
                        <p className="text-sm text-slate-600 mb-0">Send thank-you emails and donor updates</p>
                    </Link>
                    <Link href="/resources/docs/ai/pastoral-care/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="w-4 h-4 text-purple-600" />
                            <h3 className="font-bold text-slate-900">Pastoral Care AI</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-0">AI insights for member care and follow-up</p>
                    </Link>
                </div>
            </div>
        </article>
    );
}
