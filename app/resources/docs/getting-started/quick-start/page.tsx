import Link from 'next/link';
import { ArrowRight, Users, Settings, CheckCircle, Lightbulb } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Quick Start Guide | Relius Documentation',
    description: 'Get Relius running for your church in 15 minutes. Create your account, configure settings, and add your first people.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/getting-started/quick-start/',
    },
    openGraph: {
        title: 'Quick Start Guide | Relius Documentation',
        description: 'Get Relius running for your church in 15 minutes. Create your account, configure settings, and add your first people.',
        url: 'https://relius.ai/resources/docs/getting-started/quick-start/',
    },
    keywords: ['Relius quick start', 'church management setup', 'getting started with Relius'],
};

export default function QuickStartPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <Link href="/resources/docs" className="hover:text-blue-600">Documentation</Link>
                    <span>→</span>
                    <Link href="/resources/docs/getting-started" className="hover:text-blue-600">Getting Started</Link>
                    <span>→</span>
                    <span className="text-slate-900 font-medium">Quick Start</span>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-6">
                    Quick Start Guide
                </h1>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
                    <p className="text-lg text-slate-700">
                        <strong>Quick Summary:</strong> Get Relius running for your church in about 15 minutes. Create your account, configure your basic settings, invite users, and add your first people.
                    </p>
                </div>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Settings className="w-6 h-6 text-blue-600" />
                    Overview
                </h2>

                <p>
                    This guide walks you through the essential steps to set up Relius for your church. By the end, you will have your account created, your church settings configured, team members invited, and your first people added to the directory.
                </p>

                <p>
                    Follow these steps in order. Each builds on the previous one.
                </p>

                {/* Step 1: Sign Up */}
                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Getting Started
                </h2>

                <div className="space-y-6 not-prose">
                    <section className="bg-gradient-to-br from-blue-50 to-slate-50 border border-slate-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                1
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Create Your Account</h3>
                                <p className="text-slate-600 mb-3">
                                    Go to <a href="https://app.relius.ai" className="text-blue-600 hover:underline font-medium">app.relius.ai</a> and click the <strong>&quot;Register your church&quot;</strong> link on the login page. You will be prompted to enter your church name and create your admin account.
                                </p>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Use your church&apos;s official email address if possible</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Your account will be created with the <strong>super_admin</strong> role, giving you full access</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Step 2: Configure General Settings */}
                    <section className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                2
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Configure General Settings</h3>
                                <p className="text-slate-600 mb-3">
                                    Navigate to <strong>Settings → General Settings</strong> in the sidebar. The General tab contains your core church configuration.
                                </p>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Enter your <strong>Primary Campus Address</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Set your <strong>Sunday Services</strong> and <strong>Midweek Services</strong> times</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Add a <strong>Welcome Message</strong> for your congregation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Configure <strong>Check-In Auto Print</strong> if your church uses printed name tags</span>
                                    </li>
                                </ul>
                                <div className="mt-4 bg-slate-100 border border-slate-200 rounded-lg p-4">
                                    <p className="text-sm text-slate-600">
                                        <strong>Other Settings tabs:</strong> You can also configure <strong>Billing</strong>, <strong>Notifications</strong>, <strong>Security</strong>, and <strong>New Member Contact</strong> preferences from the tabs at the top of the Settings page. These can wait until later.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Step 3: Invite Your Team */}
                    <section className="bg-gradient-to-br from-blue-50 to-slate-50 border border-slate-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                3
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Invite Your Team</h3>
                                <p className="text-slate-600 mb-3">
                                    Go to <strong>Settings → Users &amp; Roles</strong> in the sidebar and click the <strong>&quot;Invite User&quot;</strong> button.
                                </p>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Start with 2-3 core team members (senior pastor, office admin, etc.)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Assign roles: <strong>admin</strong> for staff who need broad access, or <strong>super_admin</strong> for full system control</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>They will receive an email invitation with login instructions</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Step 4: Add People */}
                    <section className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                4
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Add Your First People</h3>
                                <p className="text-slate-600 mb-3">
                                    Navigate to <strong>People → Directory</strong> in the sidebar and start building your church directory.
                                </p>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Click <strong>&quot;+ Add Person&quot;</strong> to add someone manually</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Or use the CSV import if you have an existing list from another system</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Include name, email, and phone at minimum</span>
                                    </li>
                                </ul>
                                <div className="mt-4 bg-slate-100 border border-slate-200 rounded-lg p-4">
                                    <p className="text-sm text-slate-600">
                                        <strong>Migrating from another system?</strong> Check <strong>Settings → Data Migration</strong> or see our <Link href="/resources/docs/getting-started/migration" className="text-blue-600 hover:underline">migration guides</Link> for Planning Center, ChurchTrac, and Tithe.ly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Step 5: Explore the Dashboard */}
                    <section className="bg-gradient-to-br from-blue-50 to-slate-50 border border-slate-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                5
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Explore the Dashboard</h3>
                                <p className="text-slate-600 mb-3">
                                    Return to the main Dashboard to see an overview of your church at a glance.
                                </p>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>View stat cards for <strong>Monthly Giving</strong>, <strong>New Visitors This Week</strong>, <strong>Upcoming Events</strong>, and <strong>Total Members</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Toggle between <strong>Week</strong> and <strong>Month</strong> views for your activity data</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Check the <strong>New Member Contacts</strong> and <strong>Schedule Requests</strong> widgets for action items</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Browse the <strong>Recent Activity</strong> feed and <strong>Calendar</strong> mini-view</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg my-8">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">You are ready to go!</h3>
                            <p className="text-slate-700">
                                Your church is now set up in Relius. From here you can start creating events, organizing groups, and managing your congregation. Explore at your own pace.
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-yellow-500" />
                    Tips
                </h2>

                <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold text-lg">→</span>
                        <span><strong>Start small.</strong> Add your active members first. You can always backfill historical records later.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold text-lg">→</span>
                        <span><strong>Invite key leaders first.</strong> Let your core team get comfortable before rolling Relius out to the whole church.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold text-lg">→</span>
                        <span><strong>Set clear permissions.</strong> Not everyone needs super_admin access. Use the admin role for staff who need broad access without full system control.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold text-lg">→</span>
                        <span><strong>Keep data clean.</strong> Establish a habit of updating contact info regularly. Outdated info leads to missed connections.</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Common Questions
                </h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: Is Relius free to start?</h3>
                        <p className="text-slate-600">
                            A: Yes. Relius offers a free tier with core church management features and online giving. No credit card required to get started. Processing fees apply to donations.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: How do I import people from our old system?</h3>
                        <p className="text-slate-600">
                            A: Use the CSV import in <strong>People → Directory</strong>, or check <strong>Settings → Data Migration</strong> for guided imports from Planning Center, ChurchTrac, and Tithe.ly.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: What if I make a mistake during setup?</h3>
                        <p className="text-slate-600">
                            A: Everything is editable. You can update your settings, reassign roles, and modify person records at any time.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: What are the Settings sidebar sections?</h3>
                        <p className="text-slate-600">
                            A: The Settings sidebar includes: <strong>General Settings</strong>, <strong>Users &amp; Roles</strong>, <strong>Public Website</strong>, <strong>Campus Management</strong> (Enterprise), and <strong>Data Migration</strong>.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Related Topics
                </h2>

                <div className="grid md:grid-cols-2 gap-4 not-prose">
                    <Link href="/resources/docs/getting-started/setup" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Setting Up Your Church →</h3>
                        <p className="text-slate-600 text-sm">
                            Dive deeper into church configuration, payment setup, and advanced settings.
                        </p>
                    </Link>

                    <Link href="/resources/docs/admin/users" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">User Management →</h3>
                        <p className="text-slate-600 text-sm">
                            Learn how to manage users, assign roles, and control access permissions.
                        </p>
                    </Link>

                    <Link href="/resources/docs/people/directory" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">People Directory →</h3>
                        <p className="text-slate-600 text-sm">
                            Manage person profiles, custom fields, family relationships, and bulk imports.
                        </p>
                    </Link>

                    <Link href="/resources/docs/getting-started/migration" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Migration Guides →</h3>
                        <p className="text-slate-600 text-sm">
                            Switching from Planning Center, ChurchTrac, or Tithe.ly? Step-by-step migration help.
                        </p>
                    </Link>
                </div>
            </div>

            <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Need help getting started?
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    Our support team can walk you through setup, answer questions, and help with data migration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact/"
                        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        Contact Support
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/demo/"
                        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        Schedule a Demo
                    </Link>
                </div>
            </div>
        </article>
    );
}
