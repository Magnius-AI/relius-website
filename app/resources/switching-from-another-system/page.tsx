import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, AlertTriangle, Database, Upload, Users, HelpCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Switching from another system | Relius Resources',
    description: 'A comprehensive guide to migrating your church data to Relius safely and effectively.',
    alternates: {
        canonical: 'https://relius.ai/resources/switching-from-another-system/',
    },
    openGraph: {
        title: 'Switching from Another System | Relius Resources',
        description: 'A comprehensive guide to migrating your church data to Relius safely and effectively.',
        url: 'https://relius.ai/resources/switching-from-another-system/',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Switching from Another System | Relius Resources',
        description: 'A comprehensive guide to migrating your church data to Relius safely and effectively.',
    },
    keywords: ['church software migration', 'switch church management', 'data migration guide'],
};

export default function SwitchingSystemPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        Guide
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>15 min read</span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Switching from another system
                </h1>

                <p className="text-xl text-slate-600">
                    Moving your church data doesn't have to be a nightmare. Follow this step-by-step workbook to ensure nothing gets left behind.
                </p>
            </header>

            {/*
        VISUAL ASSET SUGGESTION:
        - Type: Illustration
        - Description: A clean, calming illustration of data moving from a cluttered stack of papers/servers to a clean, organized cloud system.
        - Style: Modern, flat design, blue and slate colors.
        - Alt text: Illustration of seamless data migration
      */}
            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-12 bg-slate-100 flex items-center justify-center text-slate-400">
                [Illustration: Seamless Data Migration]
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-slate-600 mb-8">
                    You've decided to move to Relius. Great choice! But now comes the part most church leaders dread: the migration.
                    We've helped hundreds of churches make the switch, and we've learned that a successful migration is 80% preparation and 20% execution.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Pre-Migration Checklist
                </h2>

                <p>
                    Before you even log into Relius, you need to secure your data from your current provider. Do this <strong>before</strong> you cancel your subscription.
                </p>

                <div className="bg-white border border-slate-200 rounded-xl p-6 my-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">What to export:</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-medium text-slate-900">Member Directory</span>
                                <p className="text-sm text-slate-600">Full names, emails, phone numbers, addresses, and birthdates.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-medium text-slate-900">Giving History</span>
                                <p className="text-sm text-slate-600">At least 3-5 years of donation records for tax purposes.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-medium text-slate-900">Group Rosters</span>
                                <p className="text-sm text-slate-600">Who is in which small group, serving team, or class.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                                <span className="font-medium text-slate-900">Pastoral Notes</span>
                                <p className="text-sm text-slate-600">Export these carefully; they often don't come in standard CSVs.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Questions to Ask Your Previous Provider
                </h2>

                <p>
                    Don't assume you can get your data later. Send this email to their support team:
                </p>

                <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
                    <p className="font-mono text-sm text-slate-700 mb-0">
                        "We are transitioning to a new system. Can you please confirm:<br /><br />
                        1. Can I get a full SQL dump or CSV export of all my data?<br />
                        2. Will I lose access to my data immediately upon cancellation, or is there a grace period?<br />
                        3. How do I export recurring giving profiles so donors don't have to re-enter their info?"
                    </p>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Data Cleaning Best Practices
                </h2>

                <p>
                    Migration is the perfect time to spring clean. Don't import the mess.
                </p>

                <ul className="space-y-4 my-6">
                    <li className="flex items-start gap-3">
                        <Database className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span><strong>Archive inactive members:</strong> If they haven't attended or given in 2 years, mark them as 'Archived' in your CSV before importing.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Database className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span><strong>Standardize addresses:</strong> Ensure 'St.' vs 'Street' consistency to help our duplicate detector work best.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Database className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span><strong>Consolidate households:</strong> Make sure family units are grouped correctly in your spreadsheet.</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    The Import Process
                </h2>

                <p>
                    Relius makes this easy with our self-service importer.
                </p>

                <ol className="list-decimal pl-5 space-y-4 text-slate-700 marker:font-bold marker:text-slate-900">
                    <li>Go to <strong>Settings &gt; Data Import</strong> in your Relius dashboard.</li>
                    <li>Select <strong>"People"</strong> to start. Upload your cleaned CSV.</li>
                    <li>Map your columns. Relius will guess that "First Name" matches "First Name", but verify each field.</li>
                    <li>Run the <strong>"Test Import"</strong>. This processes the first 50 rows so you can check for errors without messing up your database.</li>
                    <li>If it looks good, click <strong>"Run Full Import"</strong>.</li>
                    <li>Repeat for Groups and Giving.</li>
                </ol>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 my-8 flex gap-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-1">Common Pitfall: The "Everything" Import</h4>
                        <p className="text-yellow-700 text-sm mb-0">
                            Don't try to import custom fields that you don't actually use. If you haven't looked at "Spiritual Gift Test Result 2014" in ten years, don't clutter your new system with it.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    Timeline Expectations
                </h2>

                <p>
                    Be realistic. A rushed migration leads to frustrated staff.
                </p>

                <div className="grid md:grid-cols-3 gap-4 my-8">
                    <div className="bg-white border border-slate-200 rounded-lg p-5 text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">Week 1</div>
                        <div className="font-semibold text-slate-900">Cleanup & Export</div>
                        <div className="text-sm text-slate-500 mt-2">Get data out of old system and clean it up.</div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-lg p-5 text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">Week 2</div>
                        <div className="font-semibold text-slate-900">Import & Verify</div>
                        <div className="text-sm text-slate-500 mt-2">Run imports and manually check 20 random profiles.</div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-lg p-5 text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">Week 3</div>
                        <div className="font-semibold text-slate-900">Staff Training</div>
                        <div className="text-sm text-slate-500 mt-2">Get your key leaders comfortable before launching.</div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Need help?
                </h2>
                <p>
                    Our migration team has seen it all. If you get stuck, don't guess.
                </p>
            </div>

            <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Ready to make the switch?
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    Start your free trial today and see how easy it is to bring your data home to Relius.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/pricing/"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        Start free trial
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/contact/"
                        className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        Talk to migration expert
                    </Link>
                </div>
            </div>
        </article>
    );
}
