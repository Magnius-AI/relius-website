import Link from 'next/link';
import { Sparkles, FileText, Paintbrush, Share2, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Content Studio | Relius Documentation',
    description: 'Generate social media posts, newsletters, sermon series graphics, and church communications using AI-powered content creation tools.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/ai/content-studio/',
    },
    openGraph: {
        title: 'AI Content Studio | Relius Documentation',
        description: 'Generate social media posts, newsletters, sermon series graphics, and church communications using AI-powered content creation tools.',
        url: 'https://relius.ai/resources/docs/ai/content-studio/',
    },
    keywords: ['AI content studio', 'church social media', 'newsletter generator', 'church communications AI'],
};

export default function ContentStudioPage() {
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
                    AI Content Studio
                </h1>

                <p className="text-xl text-slate-600">
                    Generate social media posts, newsletters, sermon series graphics, and church communications using AI-powered content creation tools.
                </p>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <blockquote className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded-r-lg">
                    <p className="mb-0 text-slate-700">
                        <strong>Quick Summary:</strong> The AI Content Studio takes your existing content&mdash;sermons, announcements, event details&mdash;and transforms it into ready-to-publish social media posts, email newsletters, bulletin inserts, and discussion guides. It adapts tone, length, and format for each channel so your team spends less time writing and more time connecting with people.
                    </p>
                </blockquote>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-purple-600" />
                    Overview
                </h2>
                <p>
                    Churches produce a significant amount of written content every week: sermon notes, event announcements, volunteer callouts, prayer updates, and follow-up emails. The AI Content Studio centralizes content creation by letting staff input a source&mdash;such as a sermon transcript, event brief, or a few bullet points&mdash;and then generating multiple outputs tailored for different platforms. It handles formatting differences between Instagram captions, email newsletters, Facebook posts, and printed bulletins automatically.
                </p>
                <p>
                    The tool learns your church's voice over time. After a few uses, it picks up on preferred tone (casual vs. formal), common phrases your leadership uses, and the style of calls-to-action your congregation responds to. Every piece of generated content is editable before publishing, and nothing goes out without staff approval.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <Paintbrush className="w-6 h-6 text-purple-600" />
                    Key Features
                </h2>
                <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Multi-Channel Output</h3>
                        <p className="text-slate-700 mb-0">
                            Input once, output everywhere. From a single sermon summary or event description, generate platform-specific content for email, Instagram, Facebook, X/Twitter, church app notifications, and print bulletins&mdash;each formatted correctly for character limits, hashtag conventions, and audience expectations.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Newsletter Builder</h3>
                        <p className="text-slate-700 mb-0">
                            Compile weekly or monthly newsletters from multiple content sources. The AI arranges sections logically, writes transitions between topics, and suggests subject lines optimized for open rates. Supports both HTML email and plain-text formats.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Sermon Repurposing</h3>
                        <p className="text-slate-700 mb-0">
                            Turn a full sermon into a week's worth of content: a blog post summary, a series of social media quotes, a small group discussion guide with questions, and a short devotional email. Each output preserves the sermon's core message while fitting the target format.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Graphic Text Suggestions</h3>
                        <p className="text-slate-700 mb-0">
                            Get text overlay suggestions for sermon series graphics, event banners, and social media images. The AI recommends concise, impactful phrases that work well visually and pairs them with relevant scripture references.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Tone and Voice Profiles</h3>
                        <p className="text-slate-700 mb-0">
                            Create saved voice profiles for different contexts&mdash;a warm pastoral tone for care updates, an energetic youth ministry voice for student content, a professional tone for donor communications. Switch between profiles when generating content.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <Share2 className="w-6 h-6 text-purple-600" />
                    Getting Started
                </h2>

                <div className="space-y-8">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 1: Access the Content Studio
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Navigate to <strong>AI Tools &rarr; Content Studio</strong> from your dashboard. You will see options to create new content from scratch, repurpose existing content, or build a newsletter from recent church activity.
                        </p>
                        <p className="text-slate-700 mb-0">
                            If this is your first time, the setup wizard will walk you through creating a voice profile based on sample content from your church.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 2: Choose Your Source Material
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Select what you want to turn into content. Options include:
                        </p>
                        <ul className="space-y-2 text-slate-700 list-disc ml-6 mb-0">
                            <li>A sermon transcript or outline from the Sermon Planner</li>
                            <li>An event from your church calendar</li>
                            <li>A freeform text input (paste notes, bullet points, or a rough draft)</li>
                            <li>A previous newsletter or email to refresh and update</li>
                        </ul>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 3: Select Output Channels
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Check which platforms and formats you need content for. The AI generates each version simultaneously, and you can review them side by side before publishing or exporting.
                        </p>
                        <p className="text-slate-700 mb-0">
                            Click <strong>"Generate"</strong> and the AI will produce drafts within seconds. Edit any output individually or request a full regeneration with different parameters.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 4: Review, Edit, and Publish
                        </h3>
                        <p className="text-slate-700 mb-0">
                            Review each generated piece. Make edits directly in the editor, adjust tone using the voice selector, or ask the AI to revise specific sections. Once approved, schedule or publish content directly to connected platforms, or copy it to your clipboard for manual posting.
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
                            <span><strong>Set up voice profiles early:</strong> Spend 10 minutes configuring your church's tone and style during initial setup. This pays off with every piece of content the AI generates afterward.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">2.</span>
                            <span><strong>Provide rich source material:</strong> The more detail you give the AI, the better the output. A full sermon transcript produces stronger repurposed content than a three-word topic.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">3.</span>
                            <span><strong>Edit before publishing:</strong> AI-generated content is a starting draft. Add personal touches, local references, and your church's specific details before it goes out.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">4.</span>
                            <span><strong>Batch your content creation:</strong> Use the studio once a week to generate all your content for the coming days rather than creating posts one at a time throughout the week.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">5.</span>
                            <span><strong>Track what resonates:</strong> Pay attention to which AI-generated posts get the most engagement, and feed that information back into your voice profiles and future prompts.</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Common Questions</h2>
                <div className="space-y-4">
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Can I connect the Content Studio to my social media accounts directly?</p>
                        <p className="text-slate-700 mb-0">
                            A: Yes. You can link Facebook, Instagram, and X/Twitter accounts in your church's integration settings. Once connected, you can schedule and publish posts directly from the Content Studio without switching tools.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Does it generate images or just text?</p>
                        <p className="text-slate-700 mb-0">
                            A: The Content Studio focuses on text content and graphic text suggestions (captions, overlay text, taglines). For image generation, you can pair it with your preferred design tool using the exported text suggestions as a starting point.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: How does the AI learn my church's voice?</p>
                        <p className="text-slate-700 mb-0">
                            A: During setup, you provide sample content such as past emails, social posts, or bulletins. The AI analyzes these for tone, vocabulary, and structure. Over time, it refines its understanding based on your edits to generated content&mdash;the more you use it and edit outputs, the closer it matches your preferred style.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Can multiple staff members use different voice profiles?</p>
                        <p className="text-slate-700 mb-0">
                            A: Yes. Each team member or ministry area can have its own voice profile. The youth pastor can use an informal, energetic tone while the senior pastor's communications use a warmer, more reflective voice. Profiles are shared across the team so anyone can generate content in any saved voice.
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
                    <Link href="/resources/docs/ai/sermon-planner/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="w-4 h-4 text-purple-600" />
                            <h3 className="font-bold text-slate-900">AI Sermon Planner</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-0">Generate sermon outlines that feed into the Content Studio</p>
                    </Link>
                    <Link href="/resources/docs/communications/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Communications</h3>
                        <p className="text-sm text-slate-600 mb-0">Email, SMS, and announcement tools for your church</p>
                    </Link>
                    <Link href="/resources/docs/ai/translation/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="w-4 h-4 text-purple-600" />
                            <h3 className="font-bold text-slate-900">Translation Console</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-0">Translate generated content into multiple languages</p>
                    </Link>
                </div>
            </div>
        </article>
    );
}
