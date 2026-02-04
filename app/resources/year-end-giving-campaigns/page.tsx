import Link from 'next/link';
import { ArrowRight, Mail, BarChart, Heart, Calendar, DollarSign, FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Year-end giving campaigns | Relius Resources',
    description: 'Templates and strategies for finishing the financial year strong.',
    alternates: {
        canonical: 'https://relius.ai/resources/year-end-giving-campaigns/',
    },
    openGraph: {
        title: 'Year-End Giving Campaigns | Relius Resources',
        description: 'Templates and strategies for finishing the financial year strong.',
        url: 'https://relius.ai/resources/year-end-giving-campaigns/',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Year-End Giving Campaigns | Relius Resources',
        description: 'Templates and strategies for finishing the financial year strong.',
    },
    keywords: ['year-end giving', 'church giving campaigns', 'church fundraising'],
};

export default function YearEndGivingPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        Template
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <DollarSign className="w-4 h-4" />
                        <span>Stewardship</span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Year-end giving campaigns
                </h1>

                <p className="text-xl text-slate-600">
                    December is the most generous month of the year. Here is how to invite your church into generosity with clarity and grace.
                </p>
            </header>

            {/*
        VISUAL ASSET SUGGESTION:
        - Type: Photo
        - Description: A warm, cozy image of a person reading a letter or card, perhaps with Christmas lights in background.
        - Style: Atmospheric, personal, not "business-like".
        - Alt text: Reading a year-end letter
      */}
            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-12 bg-slate-100 flex items-center justify-center text-slate-400">
                [Photo: Year-End Letter]
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-slate-600 mb-8">
                    Talking about money is hard. But silence is worse. Your people want to know: "Did my giving matter this year?" and "What is the vision for next year?"
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    The Timeline
                </h2>

                <div className="space-y-4 my-6">
                    <div className="flex gap-4">
                        <div className="w-24 font-bold text-slate-900 text-right flex-shrink-0">Nov 15</div>
                        <div className="border-l-2 border-slate-200 pl-4 pb-4">
                            <h4 className="font-bold text-slate-900">The "Impact" Update</h4>
                            <p className="text-sm text-slate-600">Share stories of what happened this year. No ask yet. Just gratitude.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-24 font-bold text-slate-900 text-right flex-shrink-0">Dec 1</div>
                        <div className="border-l-2 border-slate-200 pl-4 pb-4">
                            <h4 className="font-bold text-slate-900">The Vision Launch</h4>
                            <p className="text-sm text-slate-600">"Here is where we are going in 2026." Introduce the year-end goal.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-24 font-bold text-slate-900 text-right flex-shrink-0">Dec 15</div>
                        <div className="border-l-2 border-slate-200 pl-4 pb-4">
                            <h4 className="font-bold text-slate-900">The Reminder</h4>
                            <p className="text-sm text-slate-600">Practical details on how to give before Dec 31 for tax purposes.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-24 font-bold text-slate-900 text-right flex-shrink-0">Jan 15</div>
                        <div className="border-l-2 border-slate-200 pl-4">
                            <h4 className="font-bold text-slate-900">The Giving Statement</h4>
                            <p className="text-sm text-slate-600">Send official tax statements generated by Relius.</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Email Templates
                </h2>

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm my-6">
                    <h3 className="font-bold text-slate-900 mb-2">Template: The "Soft Ask" (Dec 1)</h3>
                    <div className="bg-slate-50 p-4 rounded text-sm font-mono text-slate-700 whitespace-pre-wrap">
                        {`Subject: What we did together this year

Hi [First Name],

When we look back at 2025, we don't see numbers. We see faces.

We see the 15 teenagers who went to camp.
We see the 500 meals served to our neighbors.
We see [Specific Story].

None of this happens without the generosity of people like you. Thank you.

As we look to 2026, we are dreaming even bigger. We want to [Vision Goal]. Would you pray about being part of that?

Gratefully,
Pastor [Name]`}
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Setting Up the Campaign in Relius
                </h2>

                <p>
                    Don't just dump money into the "General Fund." Create a specific campaign so people can track progress.
                </p>

                <ol className="list-decimal pl-5 space-y-4 text-slate-700 marker:font-bold marker:text-slate-900">
                    <li>Go to <strong>Giving &gt; Campaigns</strong>.</li>
                    <li>Create new: "2025 Year-End Vision".</li>
                    <li>Set a goal amount (optional, but helpful for motivation).</li>
                    <li>Enable "Show progress bar on giving page" if you want public visibility.</li>
                </ol>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Digital vs. Physical Receipts
                </h2>

                <p>
                    Relius sends an immediate email receipt for every online gift. But for the annual statement, we recommend:
                </p>

                <ul className="space-y-3 my-6">
                    <li className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span><strong>Email Statements:</strong> Great for 80% of your people. Fast and saves postage.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span><strong>Paper Statements:</strong> Print and mail these for your older donors or major givers. It adds a touch of care. Relius generates print-ready PDFs for this exact reason.</span>
                    </li>
                </ul>

            </div>

            <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Simplify your giving management
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    Relius handles the receipts, reports, and statements so you can focus on the vision.
                </p>
                <Link
                    href="/pricing/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                    Start free trial
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </article>
    );
}
