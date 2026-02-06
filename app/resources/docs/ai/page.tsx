import Link from 'next/link';
import { Sparkles, BookOpen, FileText, Heart, UserCheck, DollarSign, Languages, Search } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Features | Relius Documentation',
    description: 'Intelligent AI-powered tools for sermon planning, content creation, pastoral insights, volunteer scheduling, and more.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/ai/',
    },
    openGraph: {
        title: 'AI Features | Relius Documentation',
        description: 'Intelligent AI-powered tools for sermon planning, content creation, pastoral insights, volunteer scheduling, and more.',
        url: 'https://relius.ai/resources/docs/ai/',
    },
    keywords: ['church AI', 'AI sermon planner', 'church automation', 'AI pastoral tools'],
};

export default function AIFeaturesOverviewPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Documentation
                    </span>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Sparkles className="w-10 h-10 text-purple-600" />
                    AI Features
                </h1>

                <p className="text-xl text-slate-600">
                    Intelligent tools that amplify your ministry—not replace it. From sermon preparation to pastoral insights, AI helps you work smarter so you can focus on what matters most: people.
                </p>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
                <p>
                    Artificial intelligence isn't here to replace pastors, volunteers, or the Holy Spirit's leading in ministry. But it can be an incredibly powerful tool to reduce administrative burden, surface insights you might miss, and help you create content faster—freeing you to spend more time actually ministering to people.
                </p>
                <p>
                    Relius integrates AI thoughtfully throughout the platform: helping you prepare sermons, turn messages into multi-channel content, identify members who need care, schedule volunteers wisely, predict donor trends, translate content into multiple languages, and search scripture semantically. These aren't gimmicks—they're practical tools solving real ministry challenges.
                </p>
                <p>
                    Every AI feature follows the same philosophy: <strong>AI suggests, you decide.</strong> Whether it's a sermon outline, a thank-you note, or a volunteer schedule, the AI presents options for you to review, refine, and approve. You stay in control, maintain your unique voice, and exercise pastoral discernment—while saving hours each week.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">AI-Powered Features</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <Link href="/resources/docs/ai/sermon-planner/" className="block bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                                <BookOpen className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">AI Sermon Planner</h3>
                        </div>
                        <p className="text-slate-600 mb-0">
                            Generate sermon outlines, discover relevant scriptures, plan multi-week series, and get illustration suggestions—all guided by your theological tradition and teaching style.
                        </p>
                    </Link>

                    <Link href="/resources/docs/ai/content-studio/" className="block bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                                <FileText className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">AI Content Studio</h3>
                        </div>
                        <p className="text-slate-600 mb-0">
                            Turn one sermon into email summaries, social media posts, small group discussion guides, and newsletter content—automatically, while maintaining your voice.
                        </p>
                    </Link>

                    <Link href="/resources/docs/ai/pastoral-insights/" className="block bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                                <Heart className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">AI Pastoral Insights</h3>
                        </div>
                        <p className="text-slate-600 mb-0">
                            Detect members at risk of disengagement, analyze sentiment in care notes and prayer requests, and get personalized care recommendations based on patterns.
                        </p>
                    </Link>

                    <Link href="/resources/docs/ai/volunteer-scheduler/" className="block bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                                <UserCheck className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">AI Volunteer Scheduler</h3>
                        </div>
                        <p className="text-slate-600 mb-0">
                            Intelligently match volunteers to roles based on skills, availability, and preferences. Detect burnout risk and balance workload across your team automatically.
                        </p>
                    </Link>

                    <Link href="/resources/docs/ai/donations-manager/" className="block bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                                <DollarSign className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">AI Donations Manager</h3>
                        </div>
                        <p className="text-slate-600 mb-0">
                            Predict donor churn, segment givers for targeted campaigns, generate personalized thank-you messages, and identify re-engagement opportunities with AI insights.
                        </p>
                    </Link>

                    <Link href="/resources/docs/ai/translation/" className="block bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                                <Languages className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Translation Console</h3>
                        </div>
                        <p className="text-slate-600 mb-0">
                            Translate sermons, emails, and announcements into 100+ languages instantly. Enable live captioning during services for accessibility and multilingual congregations.
                        </p>
                    </Link>

                    <Link href="/resources/docs/ai/bible-search/" className="block bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                                <Search className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Semantic Bible Search</h3>
                        </div>
                        <p className="text-slate-600 mb-0">
                            Search scripture by concept, not just keywords. Find passages about "feeling abandoned by God" even if those exact words aren't in the text—powered by AI understanding.
                        </p>
                    </Link>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How AI Works in Relius</h2>

                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">1. You Provide Context</h3>
                        <p className="text-slate-700 mb-0">
                            Whether it's a sermon topic, a thank-you note request, or a volunteer scheduling need, you tell the AI what you're trying to accomplish. The more specific you are, the better the results.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">2. AI Generates Options</h3>
                        <p className="text-slate-700 mb-0">
                            The AI analyzes your request, draws from its training on biblical texts and ministry best practices, and generates suggestions—outlines, content, insights, or schedules.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">3. You Refine & Approve</h3>
                        <p className="text-slate-700 mb-0">
                            Review what the AI produced, make edits, request alternatives, or regenerate entirely. You're always in control. Once satisfied, use the content—knowing it reflects your voice and values.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Real Ministry Impact</h2>

                <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-5 border-l-4 border-purple-500">
                        <p className="text-slate-700 italic mb-2">
                            "AI Sermon Planner cut my prep time in half. I still craft the message, but I'm not staring at a blank page for hours anymore. More time for hospital visits."
                        </p>
                        <p className="text-sm text-slate-600 mb-0">— Pastor Mike, community church in Ohio</p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-5 border-l-4 border-blue-500">
                        <p className="text-slate-700 italic mb-2">
                            "The at-risk detection flagged a family I hadn't noticed was slipping away. We reached out, and they're back and thriving. That one feature paid for itself."
                        </p>
                        <p className="text-sm text-slate-600 mb-0">— Sarah, executive pastor</p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-5 border-l-4 border-green-500">
                        <p className="text-slate-700 italic mb-2">
                            "We translated our service into Spanish and Korean automatically. Now 40% more families can engage with our content. Game-changer for our immigrant community."
                        </p>
                        <p className="text-sm text-slate-600 mb-0">— David, multiethnic church in California</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Ethical AI in Ministry</h2>
                <p className="text-slate-600 mb-4">
                    We take the responsibility of using AI in church contexts seriously:
                </p>
                <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span><strong>Privacy first:</strong> Your data trains only your AI models—we never use your church's information to train public models</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span><strong>Theologically neutral:</strong> AI adapts to your tradition—Reformed, Wesleyan, Pentecostal, Catholic, etc.—without imposing a theological bias</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span><strong>Human oversight required:</strong> AI never makes final decisions about people, content, or ministry direction—you do</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span><strong>Transparency:</strong> We clearly label AI-generated content and explain how each feature works</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span><strong>Opt-in only:</strong> AI features are optional—use what helps, ignore what doesn't fit your ministry philosophy</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Getting Started with AI</h2>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <ol className="space-y-3 text-slate-700 list-decimal ml-6">
                        <li>
                            <strong>Start with one feature:</strong> Don't try to learn everything at once—pick the AI tool that addresses your biggest pain point (sermon prep, donor engagement, volunteer burnout)
                        </li>
                        <li>
                            <strong>Experiment with prompts:</strong> The better your input, the better the output—try different ways of asking for what you need
                        </li>
                        <li>
                            <strong>Review and refine:</strong> Never use AI output raw—always personalize it to fit your voice and context
                        </li>
                        <li>
                            <strong>Train your team:</strong> Show staff and volunteers how AI can help them work smarter, not harder
                        </li>
                        <li>
                            <strong>Give feedback:</strong> The AI improves as you use it—rate suggestions and the system learns your preferences
                        </li>
                    </ol>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Best Practices</h2>
                <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span><strong>Be specific:</strong> Detailed prompts produce better results—include audience, tone, length, and key points</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span><strong>Verify facts:</strong> AI can occasionally hallucinate statistics or quotes—always fact-check before publishing</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span><strong>Maintain your voice:</strong> Edit AI content to sound like you, not a robot or generic pastor</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span><strong>Use insights, don't over-rely:</strong> AI can surface patterns, but pastoral discernment trumps algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span><strong>Protect privacy:</strong> Don't feed sensitive pastoral information into public AI tools—use Relius's secure, private AI instead</span>
                    </li>
                </ul>

                <div className="mt-12 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Ready to amplify your ministry with AI?
                    </h3>
                    <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                        Start with AI Sermon Planner to see how intelligent assistance can transform your preparation workflow.
                    </p>
                    <Link
                        href="/resources/docs/ai/sermon-planner/"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        <Sparkles className="w-4 h-4" />
                        Explore AI Sermon Planner
                    </Link>
                </div>
            </div>
        </article>
    );
}
