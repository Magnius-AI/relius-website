import Link from 'next/link';
import { Sparkles, BookOpen, Lightbulb, Calendar, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Sermon Planner | Relius Documentation',
    description: 'AI-powered sermon preparation and series planning - generate outlines, find scriptures, and plan sermon series with intelligent assistance.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/ai/sermon-planner/',
    },
    openGraph: {
        title: 'AI Sermon Planner | Relius Documentation',
        description: 'AI-powered sermon preparation and series planning - generate outlines, find scriptures, and plan sermon series with intelligent assistance.',
        url: 'https://relius.ai/resources/docs/ai/sermon-planner/',
    },
    keywords: ['AI sermon planner', 'sermon preparation', 'sermon outline generator', 'church AI'],
};

export default function AISermonPlannerPage() {
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
                    AI Sermon Planner
                </h1>

                <p className="text-xl text-slate-600">
                    AI-powered sermon preparation and series planning—generate structured outlines, discover relevant scriptures, and develop cohesive teaching series with intelligent assistance.
                </p>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                    Overview
                </h2>
                <p>
                    The AI Sermon Planner is like having a seminary-trained research assistant who never sleeps. It doesn't write your sermon for you—your unique voice, pastoral insight, and Holy Spirit's leading are irreplaceable. But it can dramatically reduce the hours you spend staring at a blank page, digging through commentaries, or trying to structure your thoughts.
                </p>
                <p>
                    Whether you're developing a 12-week series on the Psalms, preparing a timely message on a current cultural topic, or searching for the perfect illustration to make a point land, the AI Sermon Planner helps you work faster and more creatively. It suggests sermon structures, finds related scriptures you might have missed, generates discussion questions for small groups, and even helps you adapt messages for different audiences.
                </p>
                <p>
                    The AI understands theological concepts, biblical context, and homiletical structure. It's trained on thousands of sermons, biblical commentaries, and theological resources—but it always presents options for <em>you</em> to choose, refine, and make your own.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Key Concepts</h2>
                <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Sermon Outlines</h3>
                        <p className="text-slate-700 mb-0">
                            Structured frameworks for your message—main points, sub-points, scripture references, and suggested flow. The AI generates outlines in various styles: topical, expositional, narrative, or thematic.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Scripture Suggestions</h3>
                        <p className="text-slate-700 mb-0">
                            The AI can find related passages, cross-references, and supporting verses based on your topic or primary text. It understands thematic connections and biblical theology, not just keyword matching.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Sermon Series Planning</h3>
                        <p className="text-slate-700 mb-0">
                            Multi-week teaching plans with cohesive themes, progressive learning, and balanced coverage. The AI helps you map out 4-12 week series with titles, key scriptures, and main ideas for each message.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Getting Started</h2>

                <div className="space-y-8">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            Step 1: Starting a New Sermon
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Navigate to <strong>AI Tools → Sermon Planner</strong> and click <strong>"New Sermon"</strong>. You'll see a simple prompt interface where you describe what you want to teach.
                        </p>
                        <p className="text-slate-700 mb-4">
                            The more specific you are, the better the AI's suggestions:
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4 space-y-3">
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">✓ Good prompts include:</p>
                                <ul className="text-sm text-slate-700 space-y-1 ml-4">
                                    <li>• The main scripture passage or topic</li>
                                    <li>• Your target audience (youth, adults, seekers, etc.)</li>
                                    <li>• Desired sermon length (20-minute, 30-minute, 45-minute)</li>
                                    <li>• The style or approach (expositional, topical, narrative)</li>
                                    <li>• Any specific application or life situations to address</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-slate-700 mt-4">
                            The AI will generate an initial outline within seconds. From there, you can refine, expand, or request alternatives.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Lightbulb className="w-5 h-5 text-purple-600" />
                            Step 2: Generating Outlines
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Once you've entered your initial prompt, the AI presents a structured outline with:
                        </p>
                        <ul className="space-y-2 text-slate-700 list-disc ml-6 mb-4">
                            <li><strong>Sermon Title:</strong> Catchy, clear, and connected to the message</li>
                            <li><strong>Main Points:</strong> 2-4 big ideas that structure the message</li>
                            <li><strong>Sub-Points:</strong> Supporting ideas under each main point</li>
                            <li><strong>Scripture References:</strong> Primary and supporting passages</li>
                            <li><strong>Transitions:</strong> Suggested ways to move between points</li>
                            <li><strong>Introduction Hook:</strong> Opening ideas to grab attention</li>
                            <li><strong>Conclusion/Call to Action:</strong> How to close strong</li>
                        </ul>
                        <p className="text-slate-700 mb-4">
                            You can interact with each section:
                        </p>
                        <ul className="space-y-2 text-slate-700 ml-4">
                            <li>• Click <strong>"Expand"</strong> to get more detail on any point</li>
                            <li>• Click <strong>"Regenerate"</strong> to get alternative phrasing</li>
                            <li>• Click <strong>"Add Point"</strong> to request additional content</li>
                            <li>• Manually edit any text to customize it</li>
                        </ul>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-purple-600" />
                            Step 3: Refining with AI
                        </h3>
                        <p className="text-slate-700 mb-4">
                            The real power comes from conversational refinement. Use the chat interface to ask for changes:
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4 space-y-3">
                            <p className="text-sm text-slate-700 mb-2"><strong>Example follow-up prompts:</strong></p>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li className="flex gap-2">
                                    <span className="text-purple-600 font-bold">→</span>
                                    <span>"Make point 2 more practical—add everyday examples"</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-purple-600 font-bold">→</span>
                                    <span>"Suggest 3 illustrations for the concept of grace"</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-purple-600 font-bold">→</span>
                                    <span>"Add a point addressing common doubts about prayer"</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-purple-600 font-bold">→</span>
                                    <span>"Rewrite the intro for a younger audience"</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-purple-600 font-bold">→</span>
                                    <span>"Find Old Testament passages that connect to this theme"</span>
                                </li>
                            </ul>
                        </div>
                        <p className="text-slate-700 mt-4">
                            Each refinement builds on the previous version, creating a personalized outline that fits your teaching style.
                        </p>
                    </section>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Prompt Examples</h2>
                <p className="text-slate-600 mb-6">
                    Here are real-world prompts that produce excellent results. Copy, adapt, and make them your own:
                </p>

                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Example 1: Expositional Sermon</h3>
                        <p className="text-sm text-slate-600 mb-3"><strong>Goal:</strong> Deep dive into a specific passage with application</p>
                        <div className="bg-white rounded-lg p-4 mb-3">
                            <p className="text-sm font-mono text-slate-800 mb-0">
                                "Generate a 30-minute sermon outline on forgiveness from Matthew 18:21-35 (the parable of the unforgiving servant). Target audience is young adults who struggle with letting go of past hurts. Include practical steps for forgiving someone who isn't sorry. Make it conversational and grace-filled, not guilt-inducing."
                            </p>
                        </div>
                        <p className="text-sm text-slate-700 mb-0">
                            <strong>What you'll get:</strong> A 3-point outline exploring the parable's context, the radical nature of God's forgiveness, and practical steps to release bitterness—with modern illustrations and a compassionate tone.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Example 2: Multi-Week Series</h3>
                        <p className="text-sm text-slate-600 mb-3"><strong>Goal:</strong> Plan a cohesive teaching series for a specific season</p>
                        <div className="bg-white rounded-lg p-4 mb-3">
                            <p className="text-sm font-mono text-slate-800 mb-0">
                                "Create a 4-week Advent sermon series titled 'Hope Has a Name' for a traditional congregation. Each week should focus on a different aspect of Christ's coming: prophecy, incarnation, purpose, and second coming. Include key scriptures, main themes, and suggested Christmas carols that connect to each message."
                            </p>
                        </div>
                        <p className="text-sm text-slate-700 mb-0">
                            <strong>What you'll get:</strong> A complete series plan with titles, 1-2 key scriptures per week, 3-4 main points per sermon, thematic progression across the month, and worship song suggestions that reinforce the teaching.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Example 3: Topical/Apologetic Sermon</h3>
                        <p className="text-sm text-slate-600 mb-3"><strong>Goal:</strong> Address a contemporary issue or question with biblical wisdom</p>
                        <div className="bg-white rounded-lg p-4 mb-3">
                            <p className="text-sm font-mono text-slate-800 mb-0">
                                "Generate a 35-minute sermon outline addressing anxiety and mental health from a Christian perspective. Use Philippians 4:6-7 as the anchor text but include other relevant passages. Audience is a mix of believers and seekers who may be on medication or in therapy. Avoid clichés like 'just pray more'—be pastorally sensitive and scientifically informed."
                            </p>
                        </div>
                        <p className="text-sm text-slate-700 mb-0">
                            <strong>What you'll get:</strong> A balanced outline that validates the reality of anxiety, explores biblical responses (prayer, community, renewing the mind), affirms professional help, and offers hope without oversimplifying—with statistics, stories, and gentle pastoral guidance.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Example 4: Illustration & Content Support</h3>
                        <p className="text-sm text-slate-600 mb-3"><strong>Goal:</strong> Enhance an existing sermon with stories and examples</p>
                        <div className="bg-white rounded-lg p-4 mb-3">
                            <p className="text-sm font-mono text-slate-800 mb-0">
                                "Suggest 5 powerful illustrations for a sermon on generosity and stewardship. Include at least one from church history, one from current events, one personal story prompt, and one from nature or everyday life. Target audience is middle-class Americans who tithe but struggle with radical generosity."
                            </p>
                        </div>
                        <p className="text-sm text-slate-700 mb-0">
                            <strong>What you'll get:</strong> Five diverse illustrations—perhaps the story of George Müller's faith-driven orphanages, a recent news story about community generosity, a nature metaphor about rivers vs. reservoirs, a prompt to share your own giving story, and a cultural observation about consumerism—each with a brief explanation of how it connects to your message.
                        </p>
                    </div>
                </div>

                <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="font-medium text-amber-900">Important Reminder</p>
                        <p className="text-amber-800 text-sm mb-0">
                            The AI generates suggestions, not finished sermons. Always review for theological accuracy, cultural sensitivity, and fit with your congregation's context. Use AI to accelerate your preparation, not replace your pastoral discernment.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Advanced Features</h2>

                <details className="bg-slate-50 rounded-lg p-6 mb-4">
                    <summary className="font-bold text-slate-900 cursor-pointer">
                        Series Arc Builder
                    </summary>
                    <div className="mt-4 text-slate-700">
                        <p className="mb-3">
                            For longer sermon series (6-12 weeks), the AI helps you maintain thematic coherence and avoid repetition:
                        </p>
                        <ol className="space-y-2 list-decimal ml-6 mb-3">
                            <li>Start a new series and describe the overall theme or book of the Bible</li>
                            <li>AI suggests how many weeks and what to cover each week</li>
                            <li>Review the proposed arc—does it build logically? Any gaps?</li>
                            <li>Dive into any week to generate a detailed outline</li>
                            <li>AI remembers what was covered in previous weeks to avoid overlap</li>
                        </ol>
                        <p className="mb-0">
                            Perfect for walking through a book of the Bible, character studies, or thematic series on topics like "Spiritual Disciplines" or "The Names of God."
                        </p>
                    </div>
                </details>

                <details className="bg-slate-50 rounded-lg p-6 mb-4">
                    <summary className="font-bold text-slate-900 cursor-pointer">
                        Audience Adaptation
                    </summary>
                    <div className="mt-4 text-slate-700">
                        <p className="mb-3">
                            The same biblical truth lands differently with youth vs. seniors, seekers vs. mature believers. The AI can adapt content:
                        </p>
                        <p className="mb-2"><strong>Example prompts:</strong></p>
                        <ul className="space-y-2 ml-4 mb-3">
                            <li>• "Rewrite this for high schoolers—use current slang and pop culture references"</li>
                            <li>• "Adapt this outline for a funeral sermon"</li>
                            <li>• "Make this more evangelistic—assume half the audience isn't Christian"</li>
                            <li>• "Simplify for elementary-age kids"</li>
                        </ul>
                        <p className="mb-0">
                            The core message stays the same; the language, illustrations, and application shift to fit the audience.
                        </p>
                    </div>
                </details>

                <details className="bg-slate-50 rounded-lg p-6 mb-4">
                    <summary className="font-bold text-slate-900 cursor-pointer">
                        Scripture Discovery & Cross-References
                    </summary>
                    <div className="mt-4 text-slate-700">
                        <p className="mb-3">
                            The AI has deep knowledge of biblical connections:
                        </p>
                        <p className="mb-2"><strong>Ask for:</strong></p>
                        <ul className="space-y-2 ml-4 mb-3">
                            <li>• "Show me where else Jesus talks about this theme"</li>
                            <li>• "Find Old Testament prophecies that connect to this passage"</li>
                            <li>• "What are the best parallel passages in other Gospels?"</li>
                            <li>• "Suggest Psalms that express this same emotion"</li>
                            <li>• "Find Proverbs that apply to this life situation"</li>
                        </ul>
                        <p className="mb-0">
                            Results include full citations and brief context for each suggestion so you can decide which to include.
                        </p>
                    </div>
                </details>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Best Practices</h2>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">✓</span>
                            <span><strong>Start early in the week:</strong> Give yourself time to refine and personalize AI suggestions rather than using them raw on Saturday night</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">✓</span>
                            <span><strong>Be specific in prompts:</strong> Vague input = vague output. Include audience, length, tone, and key points you want covered</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">✓</span>
                            <span><strong>Review for theology:</strong> AI is trained on diverse sources—always check suggestions against scripture and sound doctrine</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">✓</span>
                            <span><strong>Add your stories:</strong> AI can suggest illustration types, but your personal experiences are what make sermons memorable</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">✓</span>
                            <span><strong>Cite sources when quoting:</strong> If you use an AI-suggested quote or statistic, verify it independently and cite the original source</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">✓</span>
                            <span><strong>Save your best prompts:</strong> When a prompt produces great results, save it as a template for future use</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Common Questions</h2>
                <div className="space-y-4">
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Will my congregation notice I'm using AI?</p>
                        <p className="text-slate-700 mb-0">
                            A: Not if you personalize it. AI provides structure and ideas—you add your voice, local context, pastoral heart, and Holy Spirit's leading. Think of it like using a commentary or sermon illustration book: a tool, not a replacement for your preparation.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Is it ethical to use AI for sermon preparation?</p>
                        <p className="text-slate-700 mb-0">
                            A: Using tools to aid preparation has always been part of ministry—concordances, commentaries, sermon illustrations, study Bibles. AI is a new tool in that tradition. Be transparent if asked, and ensure the final message reflects your pastoral insight and theological conviction.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Can AI help with sermon illustrations?</p>
                        <p className="text-slate-700 mb-0">
                            A: Yes! Ask for illustration suggestions by type (historical, contemporary, personal story prompts, nature metaphors, cultural observations). The AI provides concepts and starting points—you refine them to fit your context.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: What denominations or theological traditions does the AI support?</p>
                        <p className="text-slate-700 mb-0">
                            A: The AI is trained broadly and can adapt to your tradition if you specify it in your prompt (e.g., "from a Reformed perspective," "in the Wesleyan tradition," "charismatic style"). Always review for alignment with your church's beliefs.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Topics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/resources/docs/ai/content-studio/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="w-4 h-4 text-purple-600" />
                            <h3 className="font-bold text-slate-900">AI Content Studio</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-0">Turn sermons into emails, social posts, and study guides</p>
                    </Link>
                    <Link href="/resources/docs/services/planning/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Service Planning</h3>
                        <p className="text-sm text-slate-600 mb-0">Build complete worship services around your sermons</p>
                    </Link>
                </div>
            </div>
        </article>
    );
}
