import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BarChart, Users, Network, Megaphone, Clock, Calendar } from 'lucide-react';

export const metadata = {
    title: 'Running a Church of 200 vs 2,000 | Relius',
    description: 'We pulled insights from churches in both lanes to show what truly shifts in systems, staffing, and soul care.',
};

export default function ChurchScalePage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        Perspective
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>Dec 5, 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>9 min read</span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Running a church of 200 vs 2,000: what actually changes
                </h1>

                <p className="text-xl text-slate-600">
                    We pulled insights from churches in both lanes to show what truly shifts in systems, staffing, and soul care.
                </p>
            </header>

            {/*
        VISUAL ASSET SUGGESTION:
        - Type: Infographic/Illustration
        - Description: A visual comparison showing "Small Church" (one circle, everyone knows everyone) vs "Large Church" (interconnected circles/networks).
        - Style: Clean, data-viz style.
        - Alt text: Church scale comparison
      */}
            <div className="relative h-80 w-full rounded-xl overflow-hidden mb-12 bg-slate-100">
                <Image
                    src="/images/blog/church-200-vs-2000.png"
                    alt="Church scale comparison illustration"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-slate-600 mb-8">
                    Growth is exciting, but it breaks things. The systems that worked perfectly at 200 members will cause a meltdown at 800, and are impossible at 2,000.
                </p>

                <p>
                    It's not just about "more." It's about "different." Here is what shifts.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    The Delegation Shift (Who Knows Who?)
                </h2>

                <div className="grid md:grid-cols-2 gap-8 my-6">
                    <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <h4 className="font-bold text-slate-900 mb-2">At 200 Members</h4>
                        <p className="text-slate-600 text-sm">
                            The Lead Pastor knows everyone's name, their kids' names, and their dog's name. Pastoral care is direct. "I'll call Pastor John."
                        </p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <h4 className="font-bold text-slate-900 mb-2">At 2,000 Members</h4>
                        <p className="text-slate-600 text-sm">
                            The Lead Pastor knows the staff and key leaders. Pastoral care must be decentralized into Small Groups and Care Teams.
                        </p>
                    </div>
                </div>

                <p>
                    <strong>How Relius Helps:</strong> We built a "Care Network" feature. You can assign a "Shepherd" to every family. The Lead Pastor can look at a dashboard and see that the Smith family was contacted by their Shepherd this week, without having to make the call themselves.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Data-Driven Decisions Become Essential
                </h2>

                <p>
                    At 200, you know attendance is down because the pews look empty.
                </p>

                <p>
                    At 2,000, you can lose 100 people and not notice visually. You need data to tell you the truth.
                </p>

                <ul className="space-y-3 my-6">
                    <li className="flex items-start gap-3">
                        <BarChart className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span><strong>Giving Trends:</strong> Are we growing in donors, or just dollars? (Big difference).</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <BarChart className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span><strong>Volunteer Ratios:</strong> Do we have enough kids' workers for the new service?</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <BarChart className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span><strong>Engagement Score:</strong> Who is drifting away? Relius flags this automatically.</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Communication Becomes Multi-Channel
                </h2>

                <p>
                    You can't just make an announcement from the stage anymore. You have people watching online, people in overflow, people traveling.
                </p>

                <p>
                    You need a <strong>Content Engine</strong>.
                </p>

                <p>
                    This is why we built the <strong>Relius Content Studio</strong>. It takes your Sunday sermon and turns it into:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>A newsletter for the whole church</li>
                    <li>3 Instagram posts for the youth</li>
                    <li>A discussion guide for small groups</li>
                    <li>A recap email for those who missed it</li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Scalability Without Losing Soul
                </h2>

                <p>
                    The danger of scaling is becoming a corporation. The goal is to become a larger family.
                </p>

                <p>
                    Systems like Relius don't replace the personal touch—they protect it. By organizing the chaos, you create space for the Holy Spirit to move and for people to connect.
                </p>
            </div>

            <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Built for every stage of growth
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    Whether you are planting or multi-site, Relius scales with you.
                </p>
                <Link
                    href="/pricing/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                    See pricing plans
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </article>
    );
}
