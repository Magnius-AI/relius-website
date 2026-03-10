import Link from 'next/link';
import { Sparkles, Languages, Globe, Settings, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Translation Console | Relius Documentation',
    description: 'Translate church communications, documents, and content into multiple languages to serve multilingual congregations.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/ai/translation/',
    },
    openGraph: {
        title: 'Translation Console | Relius Documentation',
        description: 'Translate church communications, documents, and content into multiple languages to serve multilingual congregations.',
        url: 'https://relius.ai/resources/docs/ai/translation/',
    },
    keywords: ['church translation', 'multilingual church', 'AI translation', 'church language tools'],
};

export default function TranslationConsolePage() {
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
                    Translation Console
                </h1>

                <p className="text-xl text-slate-600">
                    Translate church communications, documents, and content into multiple languages to serve multilingual congregations effectively.
                </p>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <blockquote className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded-r-lg">
                    <p className="mb-0 text-slate-700">
                        <strong>Quick Summary:</strong> The Translation Console converts emails, announcements, sermon notes, event descriptions, and other church content into 100+ languages using AI that understands religious terminology and context. It preserves meaning across languages rather than doing word-for-word substitution, and it lets bilingual staff review translations before they are sent.
                    </p>
                </blockquote>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <Globe className="w-6 h-6 text-purple-600" />
                    Overview
                </h2>
                <p>
                    Many churches serve congregations that speak multiple languages, yet producing content in each language manually is time-consuming and often requires dedicated bilingual staff. The Translation Console automates this process by translating any content produced within Relius&mdash;emails, SMS messages, announcements, bulletin text, event pages, and sermon notes&mdash;into your congregation's languages. The AI is trained on theological vocabulary and church-specific terminology, so phrases like "small group," "altar call," or "fellowship hall" translate with appropriate cultural and religious context rather than literal word substitutions.
                </p>
                <p>
                    Translations can be routed through an optional human review step before being sent or published. Bilingual team members receive review requests, make corrections if needed, and approve the final version. Over time, the system learns from these corrections and improves accuracy for your specific church context and dialect preferences.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <Languages className="w-6 h-6 text-purple-600" />
                    Key Features
                </h2>
                <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">100+ Supported Languages</h3>
                        <p className="text-slate-700 mb-0">
                            Translate into over 100 languages including Spanish, Korean, Mandarin, Portuguese, Arabic, Tagalog, French, Vietnamese, and many more. Each language model handles regional dialects&mdash;for example, Latin American Spanish vs. Castilian Spanish.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Church-Aware Translation</h3>
                        <p className="text-slate-700 mb-0">
                            The AI understands religious and church-specific vocabulary. Scripture references are matched to published translations in the target language (e.g., Reina-Valera for Spanish, Louis Segond for French) rather than being re-translated from English.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Human Review Workflow</h3>
                        <p className="text-slate-700 mb-0">
                            Assign bilingual reviewers to specific languages. When content is translated, reviewers receive a notification with a side-by-side comparison. They can approve, edit, or flag sections for further review before the translation is finalized.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Batch Translation</h3>
                        <p className="text-slate-700 mb-0">
                            Translate entire email campaigns, event series, or document libraries at once. Set your target languages and the console processes everything in the background, notifying you when translations are ready for review.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Member Language Preferences</h3>
                        <p className="text-slate-700 mb-0">
                            Each member's profile stores their preferred language. When you send a bulk email or announcement, the system automatically delivers the translated version to each recipient in their preferred language without manual segmentation.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <Settings className="w-6 h-6 text-purple-600" />
                    Getting Started
                </h2>

                <div className="space-y-8">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 1: Configure Your Languages
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Go to <strong>AI Tools &rarr; Translation Console &rarr; Settings</strong>. Select the languages your congregation needs. You can add or remove languages at any time.
                        </p>
                        <p className="text-slate-700 mb-0">
                            For each language, specify dialect preferences if applicable (e.g., Brazilian Portuguese vs. European Portuguese) and choose which published Bible translation to use for scripture references.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 2: Assign Reviewers (Optional)
                        </h3>
                        <p className="text-slate-700 mb-0">
                            If you have bilingual staff or volunteers, assign them as reviewers for specific languages. Reviewers receive translated content for approval before it is published. This step is optional&mdash;you can publish translations directly if reviewer availability is limited.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 3: Translate Content
                        </h3>
                        <p className="text-slate-700 mb-4">
                            From any content editor in Relius (email composer, announcement builder, event page editor), click the <strong>"Translate"</strong> button. Select target languages and the AI generates translations within seconds.
                        </p>
                        <p className="text-slate-700 mb-0">
                            You can also navigate to the Translation Console directly and paste or import content for standalone translation.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 4: Review and Send
                        </h3>
                        <p className="text-slate-700 mb-0">
                            Review translations in the side-by-side editor. If reviewers are assigned, they will be notified automatically. Once approved, translated content is ready to send or publish alongside the original language version.
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
                            <span><strong>Write clearly in the source language:</strong> Simple, direct sentences translate more accurately than complex or idiom-heavy writing. Avoid slang and culture-specific references that do not carry across languages.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">2.</span>
                            <span><strong>Use the review workflow for high-visibility content:</strong> Sunday announcements and fundraising emails should go through human review. Internal notes and casual updates can skip this step.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">3.</span>
                            <span><strong>Set member language preferences proactively:</strong> During onboarding or member registration, ask for preferred communication language. This ensures translated content reaches the right people automatically.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">4.</span>
                            <span><strong>Provide feedback on corrections:</strong> When reviewers edit translations, those corrections train the AI for future accuracy. Consistent feedback significantly improves quality over weeks.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">5.</span>
                            <span><strong>Test with native speakers:</strong> Before rolling out translations to your full congregation, ask a few native speakers to read through the output and flag anything that sounds unnatural or unclear.</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Common Questions</h2>
                <div className="space-y-4">
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: How accurate are the translations for theological content?</p>
                        <p className="text-slate-700 mb-0">
                            A: The AI is trained on religious texts and church-specific terminology, so it handles theological concepts significantly better than generic translation tools. That said, nuanced doctrinal language should still be reviewed by someone fluent in the target language, especially for sermon content or official church statements.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Can I translate content that was created outside of Relius?</p>
                        <p className="text-slate-700 mb-0">
                            A: Yes. The Translation Console has a freeform input area where you can paste text from any source. You can also upload documents (PDF, Word, plain text) for batch translation.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Does translation use a separate quota or credit system?</p>
                        <p className="text-slate-700 mb-0">
                            A: Translation usage is included in your AI features allocation. High-volume churches that translate large amounts of content weekly may benefit from an increased allocation, which can be adjusted in your plan settings.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Can members choose their language in the church app?</p>
                        <p className="text-slate-700 mb-0">
                            A: Yes. Members can set their preferred language in their profile or app settings. All communications, announcements, and notifications they receive will be delivered in that language automatically when a translation is available.
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
                    <Link href="/resources/docs/ai/content-studio/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="w-4 h-4 text-purple-600" />
                            <h3 className="font-bold text-slate-900">AI Content Studio</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-0">Generate content that can then be translated</p>
                    </Link>
                    <Link href="/resources/docs/communications/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Communications</h3>
                        <p className="text-sm text-slate-600 mb-0">Email, SMS, and announcement delivery tools</p>
                    </Link>
                    <Link href="/resources/docs/pastoral-care/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Pastoral Care</h3>
                        <p className="text-sm text-slate-600 mb-0">Communicate with members in their preferred language</p>
                    </Link>
                </div>
            </div>
        </article>
    );
}
