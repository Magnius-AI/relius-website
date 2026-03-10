import Link from 'next/link';
import { Sparkles, Search, BookOpen, Lightbulb, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Semantic Bible Search | Relius Documentation',
    description: 'Search the Bible by concept, theme, or natural language questions rather than just keywords. Find relevant passages for sermons, studies, and counseling.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/ai/bible-search/',
    },
    openGraph: {
        title: 'Semantic Bible Search | Relius Documentation',
        description: 'Search the Bible by concept, theme, or natural language questions rather than just keywords. Find relevant passages for sermons, studies, and counseling.',
        url: 'https://relius.ai/resources/docs/ai/bible-search/',
    },
    keywords: ['semantic Bible search', 'Bible AI search', 'scripture search', 'Bible concept search', 'church AI'],
};

export default function BibleSearchPage() {
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
                    Semantic Bible Search
                </h1>

                <p className="text-xl text-slate-600">
                    Search the Bible by concept, theme, or natural language questions rather than just keywords. Find relevant passages for sermons, studies, and counseling.
                </p>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <blockquote className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded-r-lg">
                    <p className="mb-0 text-slate-700">
                        <strong>Quick Summary:</strong> Semantic Bible Search uses AI to understand the meaning behind your query, not just the words. Ask questions like "passages about feeling abandoned by God" or "what does the Bible say about managing anger" and get relevant results even when those exact phrases do not appear in the text. It supports multiple translations and provides context for each result to help you quickly evaluate relevance.
                    </p>
                </blockquote>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                    Overview
                </h2>
                <p>
                    Traditional Bible search tools rely on keyword matching: you type a word, and they return every verse containing that word. This works well when you know the exact term you are looking for, but it fails when you are searching by concept. A search for "loneliness" in many translations returns few or no results, yet the Bible addresses the experience of loneliness in dozens of passages using different language&mdash;from David's psalms of despair to Elijah's isolation to Jesus' agony in Gethsemane.
                </p>
                <p>
                    Semantic Bible Search bridges this gap by understanding what you mean, not just what you type. It uses AI that has been trained on biblical texts, commentaries, and theological resources to map your query to passages that address the same concept, theme, or question&mdash;even when the vocabulary is entirely different. Results are ranked by relevance and include surrounding context so you can evaluate each passage without opening multiple tabs.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <Search className="w-6 h-6 text-purple-600" />
                    Key Features
                </h2>
                <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Natural Language Queries</h3>
                        <p className="text-slate-700 mb-0">
                            Type questions or describe concepts in plain language. "How should I respond when someone wrongs me," "examples of God's faithfulness in hard times," or "verses about financial stewardship" all produce targeted results that a keyword search would miss.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Multiple Translation Support</h3>
                        <p className="text-slate-700 mb-0">
                            Search across multiple Bible translations simultaneously (ESV, NIV, NASB, KJV, NLT, and others). Results display your preferred translation by default with the option to view the same passage in alternative translations side by side.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Contextual Results</h3>
                        <p className="text-slate-700 mb-0">
                            Each search result shows the matching passage along with surrounding verses for context. A brief AI-generated note explains why the passage was included&mdash;what thematic connection the AI identified between your query and the text.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Thematic Grouping</h3>
                        <p className="text-slate-700 mb-0">
                            When a query returns many results, the AI groups them by sub-theme. A search for "leadership" might return groups for servant leadership, leadership responsibility, leadership failure, and God's leadership of Israel&mdash;making it easy to find the specific angle you need.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Save and Organize Results</h3>
                        <p className="text-slate-700 mb-0">
                            Save search results to collections for sermon preparation, Bible study planning, or counseling reference. Collections can be shared with other staff members and linked to sermon plans in the AI Sermon Planner.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                    Getting Started
                </h2>

                <div className="space-y-8">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 1: Open the Search
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Navigate to <strong>AI Tools &rarr; Bible Search</strong> or use the global search bar and select the "Bible" tab. The search interface accepts free-form text input of any length.
                        </p>
                        <p className="text-slate-700 mb-0">
                            You can also access Bible Search from within the Sermon Planner by clicking <strong>"Find Passages"</strong> on any outline point.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 2: Enter Your Query
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Type your question, concept, or theme. You can be as specific or broad as you like:
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4 space-y-3">
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Example queries:</p>
                                <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                    <li>&bull; "What does the Bible say about worry and anxiety?"</li>
                                    <li>&bull; "Passages where God comforts someone who is grieving"</li>
                                    <li>&bull; "Examples of reconciliation between people"</li>
                                    <li>&bull; "Verses about the purpose of suffering"</li>
                                    <li>&bull; "Scriptures for someone considering a major life change"</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 3: Review and Filter Results
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Results appear ranked by relevance. Use the filters to narrow by testament (Old/New), book, or thematic group. Click any result to expand the full passage with surrounding context.
                        </p>
                        <p className="text-slate-700 mb-0">
                            The AI explanation below each result tells you why it was included, which helps you quickly skip irrelevant matches and focus on the passages that fit your needs.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 4: Save or Use Results
                        </h3>
                        <p className="text-slate-700 mb-0">
                            Select passages to save to a collection, copy references to your clipboard, or insert them directly into a sermon outline if you accessed Bible Search from the Sermon Planner. Saved collections persist in your account and can be revisited or shared with team members.
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
                            <span><strong>Describe the situation, not just the topic:</strong> "Passages for someone whose spouse just died" produces more pastorally useful results than just "death." Context helps the AI understand what angle you need.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">2.</span>
                            <span><strong>Verify passages in their full context:</strong> Semantic search finds thematic matches, but always read the full chapter to ensure the passage genuinely applies to your intended use. A verse can sound relevant in isolation but mean something different in context.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">3.</span>
                            <span><strong>Use thematic groups to explore different angles:</strong> When the AI groups results by sub-theme, browse all groups before settling on your passages. You may discover an angle you had not considered that strengthens your sermon or study.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">4.</span>
                            <span><strong>Combine with traditional concordance searches:</strong> Semantic search is powerful for concepts, but keyword search is still useful for finding every occurrence of a specific term. Use both approaches for thorough study.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">5.</span>
                            <span><strong>Build collections for recurring needs:</strong> If you frequently counsel people through grief, financial stress, or relational conflict, build saved collections of go-to passages. These become a personal reference library you can pull from instantly.</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Common Questions</h2>
                <div className="space-y-4">
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: How is this different from a regular Bible search?</p>
                        <p className="text-slate-700 mb-0">
                            A: A regular search matches exact words&mdash;searching "joy" returns only verses containing the word "joy." Semantic search understands meaning, so searching "experiencing deep happiness despite hardship" returns passages about joy, contentment, perseverance, and hope even if none of those exact words match your query.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Which Bible translations are supported?</p>
                        <p className="text-slate-700 mb-0">
                            A: The search supports ESV, NIV, NASB, NLT, KJV, NKJV, CSB, and several other widely used translations. You can set a default translation in your preferences and switch between translations on any individual result.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Can I search in languages other than English?</p>
                        <p className="text-slate-700 mb-0">
                            A: Yes. You can enter queries in any supported language, and results will be returned from Bible translations available in that language. For example, a query in Spanish returns results from Spanish translations like the Reina-Valera. You can also query in one language and view results in another.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Does the AI interpret or add commentary to scripture?</p>
                        <p className="text-slate-700 mb-0">
                            A: The AI provides a brief explanation of why each passage was matched to your query&mdash;a thematic connection note, not theological commentary. The scripture text itself is always presented exactly as published in the selected translation, with no AI modification or paraphrasing.
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
                        <p className="text-sm text-slate-600 mb-0">Use Bible Search results directly in sermon outlines</p>
                    </Link>
                    <Link href="/resources/docs/pastoral-care/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Pastoral Care</h3>
                        <p className="text-sm text-slate-600 mb-0">Find passages for counseling and member support</p>
                    </Link>
                    <Link href="/resources/docs/communications/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Communications</h3>
                        <p className="text-sm text-slate-600 mb-0">Include scripture references in church communications</p>
                    </Link>
                </div>
            </div>
        </article>
    );
}
