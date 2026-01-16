import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Brain, MessageSquare, Heart, Zap, Shield } from 'lucide-react';

export const metadata = {
    title: 'How AI is Changing Church Administration | Relius',
    description: 'AI is not a pastor. But it can be a thoughtful assistant. Here is how we coach churches to use it without losing their voice.',
};

export default function AiInMinistryPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        Product
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Sparkles className="w-4 h-4" />
                        <span>Nov 20, 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Brain className="w-4 h-4" />
                        <span>7 min read</span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    How AI is changing church administration
                </h1>

                <p className="text-xl text-slate-600">
                    AI is not a pastor. But it can be a thoughtful assistant. Here is how we coach churches to use it without losing their voice.
                </p>
            </header>

            {/*
        VISUAL ASSET SUGGESTION:
        - Type: Illustration
        - Description: A glowing, friendly "spark" or helper icon assisting a human hand with a task.
        - Style: Futuristic but warm, not cold/robotic.
        - Alt text: AI as a ministry assistant
      */}
            <div className="relative h-80 w-full rounded-xl overflow-hidden mb-12 bg-slate-100">
                <Image
                    src="/images/blog/ai-changing-church-administration.webp"
                    alt="AI as a ministry assistant illustration"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-slate-600 mb-8">
                    The church has always adopted technology. We moved from scrolls to books, from acoustic to amplified sound, from bulletins to apps. Artificial Intelligence is the next shift.
                </p>

                <p>
                    At Relius, we believe AI shouldn't replace ministry—it should unleash it.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Treat AI Like an Intern (Not a Leader)
                </h2>

                <p>
                    Would you let a summer intern write your theology statement without checking it? No.
                </p>

                <p>
                    The same applies to AI. It is excellent at <strong>drafting</strong>, but humans must do the <strong>deciding</strong>.
                </p>

                <div className="bg-slate-50 border-l-4 border-purple-500 p-6 my-6 rounded-r-lg">
                    <h4 className="font-bold text-slate-900 mb-2">How Relius does it:</h4>
                    <p className="text-slate-700 mb-0">
                        Our <strong>Content Studio</strong> will draft 5 social media posts from your sermon notes. But it won't post them. It puts them in a queue for you to review, edit, and approve. You stay in the driver's seat.
                    </p>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    AI for Prayer & Care
                </h2>

                <p>
                    This sounds scary, but it's actually one of the most powerful uses.
                </p>

                <p>
                    Imagine you receive 50 prayer requests on a Sunday.
                </p>

                <p>
                    <strong>Without AI:</strong> A staff member spends 3 hours reading, categorizing into a spreadsheet, and emailing pastors.
                </p>

                <p>
                    <strong>With Relius AI:</strong> The system reads the requests instantly. It tags them: "Health," "Grief," "Financial." It flags the "High Urgency" ones (like suicidal ideation) and texts a pastor immediately.
                </p>

                <p>
                    The AI doesn't pray. But it ensures the prayer request gets to the person who <em>will</em> pray, faster.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Sermon Planning Partner
                </h2>

                <p>
                    Writer's block is real. The <strong>Relius Sermon Planner</strong> (powered by Gemini 1.5 Pro) acts as a brainstorming partner.
                </p>

                <ul className="space-y-3 my-6">
                    <li className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                        <span>"Give me 3 illustrations about 'patience' involving gardening."</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                        <span>"Find Greek word studies for 'agape' in 1 Corinthians 13."</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                        <span>"Suggest discussion questions for a youth small group based on this outline."</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Protecting the Pastoral Voice
                </h2>

                <p>
                    Your people need to hear from <em>you</em>.
                </p>

                <p>
                    We train our models to learn your tone. You can upload past sermons or newsletters, and Relius will learn to write in your "voice"—whether that's formal, casual, or humorous.
                </p>

                <p>
                    But again: <strong>Never send AI output straight to your people.</strong> Always add the human touch.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    The Future is Hybrid
                </h2>

                <p>
                    The churches that thrive won't be the ones that reject AI, nor the ones that automate everything. They will be the ones that use AI to automate the <em>administration</em> so they can maximize the <em>ministry</em>.
                </p>
            </div>

            <div className="mt-16 bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 text-center border border-purple-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Try the AI tools yourself
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    See how Relius AI can save your team 10+ hours a week.
                </p>
                <Link
                    href="/pricing/"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                    Explore AI features
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </article>
    );
}
