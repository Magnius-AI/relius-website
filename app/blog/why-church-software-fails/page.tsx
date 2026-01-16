import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, AlertTriangle, CheckCircle, Clock, Calendar, Search } from 'lucide-react';

export const metadata = {
    title: 'Why Most Church Software Fails | Relius',
    description: 'Many platforms promise clarity and end up creating more spreadsheets. Here is how to evaluate software through a pastoral lens.',
};

export default function WhySoftwareFailsPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        Perspective
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>Jan 5, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>6 min read</span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Why most church software fails (and how to pick better)
                </h1>

                <p className="text-xl text-slate-600">
                    Many platforms promise clarity and end up creating more spreadsheets. Here is how to evaluate software through a pastoral lens.
                </p>
            </header>

            {/*
        VISUAL ASSET SUGGESTION:
        - Type: Illustration
        - Description: A frustrated person looking at a complex dashboard vs a happy person looking at a simple one.
        - Style: Minimalist, relatable.
        - Alt text: Complexity vs Clarity
      */}
            <div className="relative h-80 w-full rounded-xl overflow-hidden mb-12 bg-slate-100">
                <Image
                    src="/images/blog/why-church-software-fails.webp"
                    alt="Complexity vs Clarity illustration"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-slate-600 mb-8">
                    We've all been there. The demo looked amazing. The sales rep promised it would solve everything. Six months later, you're paying $200/month for a glorified address book, and your finance team is back to using Excel.
                </p>

                <p>
                    Why does this happen so often in the church world? It's usually not because the software is "broken" technically. It's because it's broken <em>relationally</em>.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    The Spreadsheet Trap
                </h2>

                <p>
                    The biggest competitor to any church software isn't another company. It's Google Sheets.
                </p>

                <p>
                    Spreadsheets are flexible. You can add a column for "Favorite Pizza Topping" in 2 seconds. Most ChMS (Church Management Systems) are rigid. If the software makes it harder to track data than a spreadsheet does, your team will default to the spreadsheet.
                </p>

                <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                    <p className="text-slate-700 mb-0">
                        <strong>The Fix:</strong> Look for software that allows for custom fields and "smart lists" that feel as flexible as Excel but are connected to your central database.
                    </p>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Feature Bloat vs. Focused Functionality
                </h2>

                <p>
                    "Does it do X?" is the wrong question. "Does it do X <em>simply</em>?" is the right one.
                </p>

                <p>
                    Legacy platforms have spent 20 years adding every feature requested by every committee. The result is a cockpit with 500 buttons when you just need to drive to the grocery store.
                </p>

                <p>
                    When evaluating software, count the clicks. How many clicks to add a person? How many clicks to record a donation? If it's more than 3, your volunteers won't do it.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    The Training Cliff
                </h2>

                <p>
                    If you need a PhD to use the check-in system, it's going to fail. Sunday mornings are chaotic. Volunteers rotate.
                </p>

                <p>
                    The best software requires zero training for the end user. It should be as intuitive as ordering an Uber. If you have to hold a 4-hour training seminar just to get people to log in, the friction is too high.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Evaluating Through a Pastoral Lens
                </h2>

                <p>
                    Most software is bought by administrators but used by pastors. Administrators care about reporting. Pastors care about people.
                </p>

                <p>
                    When you demo a product, don't just look at the financial reports. Look at the <strong>Person Profile</strong>.
                </p>

                <ul className="space-y-2 my-6">
                    <li className="flex items-start gap-3">
                        <Search className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Does it tell a story of their journey?</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Search className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Can I easily see their family relationships?</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Search className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Is it easy to add a pastoral note on the fly?</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Why Relius is Different
                </h2>

                <p>
                    We built Relius because we were tired of "admin-first" software. We wanted "ministry-first" software.
                </p>

                <p>
                    That's why we use AI to help you write emails (because pastors are busy). That's why our check-in takes 10 seconds. That's why our pricing is simple.
                </p>

                <p>
                    We don't want to be another tool you tolerate. We want to be the partner that helps you thrive.
                </p>
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Experience the difference
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    See why churches are switching to a system that actually feels like ministry.
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
