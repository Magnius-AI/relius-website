import Link from 'next/link';
import { ArrowRight, Users, Calendar, CreditCard, Settings, CheckCircle, Lightbulb } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Quick Start Guide | Relius Documentation',
    description: 'Get Relius running for your church in 15 minutes. Learn the basics and launch your first service.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/getting-started/quick-start/',
    },
    openGraph: {
        title: 'Quick Start Guide | Relius Documentation',
        description: 'Get Relius running for your church in 15 minutes. Learn the basics and launch your first service.',
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
                        <strong>Quick Summary:</strong> Get Relius running for your church in 15 minutes. Set up your church profile, invite your team, and add your first members to start managing your ministry effectively.
                    </p>
                </div>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Settings className="w-6 h-6 text-blue-600" />
                    Overview
                </h2>

                <p>
                    Relius is an all-in-one church management system designed to help you focus on ministry, not administration. Whether you're a small church plant or a multi-site congregation, Relius gives you the tools to manage members, coordinate volunteers, track giving, and engage your community—all from one intuitive platform.
                </p>

                <p>
                    This quick start guide will walk you through the essential steps to get up and running. By the end of this 15-minute process, you'll have created your church profile, invited key team members, and added your first members to the system. You'll be ready to explore advanced features like event planning, volunteer scheduling, and AI-powered content creation at your own pace.
                </p>

                <p>
                    <strong>Who is Relius for?</strong> Pastors, church administrators, volunteer coordinators, worship leaders, and ministry teams who want to spend less time on spreadsheets and more time on people. If you've ever struggled to answer "Who visited last month?" or "Which volunteers are overcommitted?" Relius is built for you.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Key Concepts
                </h2>

                <div className="space-y-4 not-prose">
                    <div className="bg-white border border-slate-200 rounded-lg p-5">
                        <h3 className="font-bold text-slate-900 mb-2">Church Profile</h3>
                        <p className="text-slate-600">
                            Your church's digital home base. This includes your name, logo, contact information, service times, and campuses. It's what appears on giving receipts, public event pages, and communications.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-lg p-5">
                        <h3 className="font-bold text-slate-900 mb-2">Members</h3>
                        <p className="text-slate-600">
                            The people in your church community—regular attenders, visitors, staff, and volunteers. Member profiles store contact info, family relationships, group memberships, giving history, and pastoral notes.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-lg p-5">
                        <h3 className="font-bold text-slate-900 mb-2">Groups</h3>
                        <p className="text-slate-600">
                            Any organized gathering: small groups, serving teams, classes, ministries, or committees. Groups have leaders, schedules, and communication tools to keep everyone connected.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-lg p-5">
                        <h3 className="font-bold text-slate-900 mb-2">Events</h3>
                        <p className="text-slate-600">
                            Scheduled gatherings like Sunday services, Bible studies, outreach events, or volunteer shifts. Events can have registration, check-in systems, and capacity limits.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-lg p-5">
                        <h3 className="font-bold text-slate-900 mb-2">Roles & Permissions</h3>
                        <p className="text-slate-600">
                            Control what each team member can see and do. Admins have full access, while group leaders might only manage their own groups. This protects sensitive financial and pastoral care information.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Getting Started
                </h2>

                <p className="text-slate-600 mb-6">
                    Follow these steps in order. Each builds on the previous one, so you'll have a fully functional system by the end.
                </p>

                <div className="space-y-6 not-prose">
                    <section className="bg-gradient-to-br from-blue-50 to-slate-50 border border-slate-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                1
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Sign Up & Create Your Church</h3>
                                <p className="text-slate-600 mb-3">
                                    Go to <a href="https://app.relius.ai/signup" className="text-blue-600 hover:underline font-medium">app.relius.ai/signup</a> and create your account. You'll be prompted to enter your church name, location, and primary contact information.
                                </p>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Use your church's official email address if possible</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Upload your logo (square format works best, 500×500px or larger)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Set your timezone correctly—it affects event scheduling and reports</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                2
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Configure Basic Settings</h3>
                                <p className="text-slate-600 mb-3">
                                    Navigate to <strong>Settings → Church Profile</strong> and complete your basic configuration.
                                </p>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Add your church's physical address and phone number</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Set default service times (you can add more later)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Choose your brand colors for emails and public pages</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-blue-50 to-slate-50 border border-slate-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                3
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Invite Your Team</h3>
                                <p className="text-slate-600 mb-3">
                                    Go to <strong>Settings → Team Members</strong> and invite your key staff and volunteers.
                                </p>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Start with 2-3 core team members (admin pastor, worship leader, etc.)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Assign appropriate roles: Admin, Finance, Group Leader, or Volunteer Coordinator</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>They'll receive an email invitation with login instructions</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                4
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Add Your First Members</h3>
                                <p className="text-slate-600 mb-3">
                                    Navigate to <strong>People → Members</strong> and start building your directory.
                                </p>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Add members manually one at a time (click "Add Member")</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Or import via CSV if you have an existing list (see bulk import guide)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Include name, email, phone, and family relationships at minimum</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-blue-50 to-slate-50 border border-slate-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                5
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Explore the Dashboard</h3>
                                <p className="text-slate-600 mb-3">
                                    Return to the main dashboard and take a tour. You'll see widgets for upcoming events, recent visitors, giving trends, and volunteer schedules.
                                </p>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Click through each main section: People, Groups, Events, Giving, Communications</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Customize your dashboard by dragging widgets to rearrange them</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Try the AI features—check out the Sermon Planner or Content Studio</span>
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
                            <h3 className="font-bold text-slate-900 mb-2">🎉 You're Ready to Go!</h3>
                            <p className="text-slate-700">
                                Congratulations! Your church is now set up in Relius. You can start adding events, creating groups, and managing volunteers. Take your time exploring—the interface is designed to be intuitive.
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-yellow-500" />
                    Best Practices
                </h2>

                <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold text-lg">→</span>
                        <span><strong>Start small.</strong> Don't try to import 10 years of data on day one. Add your active members first, then backfill historical records as needed.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold text-lg">→</span>
                        <span><strong>Invite key leaders first.</strong> Let your core team get comfortable with the platform before rolling it out to the whole church.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold text-lg">→</span>
                        <span><strong>Test with a soft launch.</strong> Try using Relius for internal staff meetings and small groups for 1-2 weeks before your big Sunday debut.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold text-lg">→</span>
                        <span><strong>Set clear permissions.</strong> Not everyone needs admin access. Use role-based permissions to protect sensitive financial and pastoral care data.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold text-lg">→</span>
                        <span><strong>Keep data clean.</strong> Establish a habit of updating member info regularly. Outdated contact info leads to missed connections.</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Common Questions
                </h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: Can I try Relius for free?</h3>
                        <p className="text-slate-600">
                            A: Yes! Relius offers a 14-day free trial with full access to all features. No credit card required to start.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: How do I import members from our old system?</h3>
                        <p className="text-slate-600">
                            A: Use the CSV bulk import tool under <strong>People → Import</strong>. We also offer migration guides for popular platforms like Planning Center and ChurchTrac. If you need hands-on help, our support team can assist with data migration.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: What if I make a mistake during setup?</h3>
                        <p className="text-slate-600">
                            A: Don't worry—everything is editable. You can update your church profile, reassign roles, and modify member information at any time. There's no "lock in" once you start.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: Do I need technical skills to use Relius?</h3>
                        <p className="text-slate-600">
                            A: Not at all. Relius is designed for pastors and church staff, not IT professionals. If you can use Gmail or Facebook, you can use Relius. We also provide video tutorials and live support.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: What happens after the 15-minute quick start?</h3>
                        <p className="text-slate-600">
                            A: You're ready to use the core features! From here, you can explore deeper topics like event registration, volunteer scheduling, online giving setup, and AI-powered sermon planning. Each has its own detailed guide in this documentation.
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
                            Dive deeper into church configuration, branding, payment setup, and advanced settings.
                        </p>
                    </Link>

                    <Link href="/resources/docs/getting-started/user-roles" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">User Roles & Permissions →</h3>
                        <p className="text-slate-600 text-sm">
                            Learn how to assign roles, protect sensitive data, and manage team access.
                        </p>
                    </Link>

                    <Link href="/resources/docs/people-management/member-directory" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Member Directory →</h3>
                        <p className="text-slate-600 text-sm">
                            Master member profiles, custom fields, family management, and bulk imports.
                        </p>
                    </Link>

                    <Link href="/resources/docs/getting-started/migration-guides" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Migration Guides →</h3>
                        <p className="text-slate-600 text-sm">
                            Switching from Planning Center, ChurchTrac, or Tithe.ly? We've got you covered.
                        </p>
                    </Link>
                </div>
            </div>

            <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Need help getting started?
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    Our support team is here to help you launch successfully. We can walk you through setup, answer questions, and provide personalized training.
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
