import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Settings, Users, Calendar, CreditCard, Shield } from 'lucide-react';

export const metadata = {
    title: 'Setting up your church in Relius | Relius Resources',
    description: 'A complete checklist to get your church up and running in Relius in one afternoon.',
};

export default function SetupChecklistPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        Checklist
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>20 min setup</span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Setting up your church in Relius
                </h1>

                <p className="text-xl text-slate-600">
                    Map your people, groups, services, and permissions in one afternoon workshop. Here is your roadmap.
                </p>
            </header>

            {/*
        VISUAL ASSET SUGGESTION:
        - Type: Illustration
        - Description: A roadmap or dashboard view showing progress bars filling up.
        - Style: Clean, encouraging, gamified feel.
        - Alt text: Setup progress dashboard
      */}
            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-12 bg-slate-100 flex items-center justify-center text-slate-400">
                [Illustration: Setup Roadmap]
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-slate-600 mb-8">
                    Welcome to Relius! We've designed the setup process to be intuitive, but having a checklist ensures you don't miss any critical configuration steps.
                </p>

                <div className="space-y-8">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Settings className="w-5 h-5 text-blue-600" />
                            1. Foundation (15 mins)
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                                <div>
                                    <span className="font-medium text-slate-900">Complete Church Profile</span>
                                    <p className="text-sm text-slate-600">Add your logo, address, and primary contact info. This appears on giving receipts and emails.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                                <div>
                                    <span className="font-medium text-slate-900">Configure Campus(es)</span>
                                    <p className="text-sm text-slate-600">Even if you're one location, set it up correctly now to allow for future growth.</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-600" />
                            2. People & Groups (30 mins)
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                                <div>
                                    <span className="font-medium text-slate-900">Import Members</span>
                                    <p className="text-sm text-slate-600">Use the CSV importer (see our <Link href="/resources/switching-from-another-system/" className="text-blue-600 hover:underline">migration guide</Link>).</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                                <div>
                                    <span className="font-medium text-slate-900">Create Group Types</span>
                                    <p className="text-sm text-slate-600">Define your structure: Small Groups, Serving Teams, Classes, Committees.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                                <div>
                                    <span className="font-medium text-slate-900">Set Up Volunteer Positions</span>
                                    <p className="text-sm text-slate-600">Create roles like "Greeter", "Kids Teacher", "Worship Team".</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <CreditCard className="w-5 h-5 text-blue-600" />
                            3. Giving & Finance (20 mins)
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                                <div>
                                    <span className="font-medium text-slate-900">Connect Stripe</span>
                                    <p className="text-sm text-slate-600">Enable online giving securely. This requires your bank account info.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                                <div>
                                    <span className="font-medium text-slate-900">Create Funds</span>
                                    <p className="text-sm text-slate-600">Set up "General Fund", "Missions", "Building Fund", etc.</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-blue-600" />
                            4. Events & Check-in (15 mins)
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                                <div>
                                    <span className="font-medium text-slate-900">Create First Service Event</span>
                                    <p className="text-sm text-slate-600">Set up your Sunday service as a recurring event.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                                <div>
                                    <span className="font-medium text-slate-900">Configure Check-in Stations</span>
                                    <p className="text-sm text-slate-600">Set which labels print for which age groups.</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-blue-600" />
                            5. Team Access (10 mins)
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                                <div>
                                    <span className="font-medium text-slate-900">Invite Staff</span>
                                    <p className="text-sm text-slate-600">Send invites to your team members.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <input type="checkbox" className="mt-1.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                                <div>
                                    <span className="font-medium text-slate-900">Set Permissions</span>
                                    <p className="text-sm text-slate-600">Assign roles (Admin, Finance, Group Leader) to ensure data privacy.</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-4">Next Steps</h2>
                    <p>
                        Once you've checked these boxes, you're ready to go live! We recommend doing a "soft launch" with just your staff and key volunteers for one week before rolling out to the whole church.
                    </p>
                </div>
            </div>

            <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Stuck on a step?
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    Our support team can walk you through any of these configurations.
                </p>
                <Link
                    href="/contact/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                    Contact Support
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </article>
    );
}
