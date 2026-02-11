import Link from 'next/link';
import { ArrowRight, Rocket, Settings, BookOpen, Users, Database } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Getting Started with Relius | Documentation',
    description: 'Everything you need to launch your church on Relius: quick start, setup guides, user roles, and migration from other church management systems.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/getting-started/',
    },
    openGraph: {
        title: 'Getting Started with Relius | Documentation',
        description: 'Complete guides to get your church up and running on Relius quickly and confidently.',
        url: 'https://relius.ai/resources/docs/getting-started/',
    },
    keywords: ['Relius getting started', 'church management setup', 'ChMS onboarding'],
};

export default function GettingStartedPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <Link href="/resources/docs" className="hover:text-blue-600">Documentation</Link>
                    <span>→</span>
                    <span className="text-slate-900 font-medium">Getting Started</span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900">
                        Getting Started
                    </h1>
                </div>

                <p className="text-xl text-slate-600">
                    Welcome to Relius! This section will help you launch your church on the platform quickly and confidently. Whether you're brand new or migrating from another system, we've got you covered.
                </p>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Start Here
                </h2>

                <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
                    <Link 
                        href="/resources/docs/getting-started/quick-start" 
                        className="group bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 hover:border-blue-400 rounded-xl p-6 transition-all hover:shadow-lg"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Rocket className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">
                                    Quick Start Guide
                                </h3>
                                <p className="text-slate-600 mb-3">
                                    Get Relius running in 15 minutes. Perfect for first-time users who want to dive in quickly.
                                </p>
                                <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                                    Start here
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link 
                        href="/resources/docs/getting-started/setup" 
                        className="group bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 hover:border-blue-400 rounded-xl p-6 transition-all hover:shadow-lg"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Settings className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">
                                    Setting Up Your Church
                                </h3>
                                <p className="text-slate-600 mb-3">
                                    Complete configuration guide: branding, payment setup, user permissions, and more.
                                </p>
                                <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                                    Configure settings
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-12">
                    All Getting Started Topics
                </h2>

                <div className="space-y-4 not-prose">
                    <Link 
                        href="/resources/docs/getting-started/dashboard" 
                        className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5" />
                                    Understanding the Dashboard
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    Learn how to navigate Relius, customize your dashboard widgets, and find what you need quickly.
                                </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                    </Link>

                    <Link 
                        href="/resources/docs/getting-started/roles"
                        className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 flex items-center gap-2">
                                    <Users className="w-5 h-5" />
                                    User Roles & Permissions
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    Understand role-based access control, assign permissions, and protect sensitive church data.
                                </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                    </Link>

                    <div className="bg-white border border-slate-200 rounded-lg p-5">
                        <div className="flex items-start gap-4">
                            <Database className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900 mb-3">
                                    Migration Guides
                                </h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    Switching from another church management system? We've created step-by-step migration guides for popular platforms:
                                </p>
                                <div className="space-y-2">
                                    <Link
                                        href="/resources/docs/getting-started/migration/planning-center"
                                        className="block text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline"
                                    >
                                        → From Planning Center
                                    </Link>
                                    <Link
                                        href="/resources/docs/getting-started/migration/churchtrac"
                                        className="block text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline"
                                    >
                                        → From ChurchTrac
                                    </Link>
                                    <Link
                                        href="/resources/docs/getting-started/migration"
                                        className="block text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline"
                                    >
                                        → From Any System (Migration Overview)
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    What to Expect
                </h2>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                    <h3 className="font-bold text-slate-900 mb-2">Setup Timeline</h3>
                    <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                            <span className="font-bold text-blue-600">15 min:</span>
                            <span>Quick Start—create account, add church info, invite team</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold text-blue-600">30 min:</span>
                            <span>Full Setup—branding, payment processor, roles, and permissions</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold text-blue-600">1-2 hours:</span>
                            <span>Data Import—add members, groups, and historical giving records</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-bold text-blue-600">1 week:</span>
                            <span>Soft Launch—use with staff and key volunteers to test workflows</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Common First Steps
                </h2>

                <p className="text-slate-600 mb-4">
                    After completing the setup guides, most churches follow this path:
                </p>

                <ol className="space-y-3 text-slate-600 list-decimal list-inside">
                    <li>
                        <strong>Add your member directory</strong> – Import existing members or start adding them manually
                    </li>
                    <li>
                        <strong>Create your first event</strong> – Set up Sunday service as a recurring event with check-in
                    </li>
                    <li>
                        <strong>Set up online giving</strong> – Connect Stripe and create your giving funds
                    </li>
                    <li>
                        <strong>Organize groups</strong> – Add small groups, serving teams, and classes
                    </li>
                    <li>
                        <strong>Try AI features</strong> – Explore the Sermon Planner and Content Studio
                    </li>
                    <li>
                        <strong>Train your team</strong> – Walk key leaders through their specific workflows
                    </li>
                </ol>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Need Help?
                </h2>

                <p className="text-slate-600 mb-6">
                    Getting started can feel overwhelming, but you're not alone. Here are resources to help you succeed:
                </p>

                <div className="grid md:grid-cols-2 gap-4 not-prose">
                    <div className="bg-white border border-slate-200 rounded-lg p-5">
                        <h3 className="font-bold text-slate-900 mb-2">📺 Video Tutorials</h3>
                        <p className="text-slate-600 text-sm mb-3">
                            Watch step-by-step walkthroughs of every feature, from basic setup to advanced AI tools.
                        </p>
                        <Link href="/resources/videos" className="text-blue-600 hover:underline text-sm font-medium">
                            Browse videos →
                        </Link>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-lg p-5">
                        <h3 className="font-bold text-slate-900 mb-2">💬 Live Support</h3>
                        <p className="text-slate-600 text-sm mb-3">
                            Chat with our support team during business hours or schedule a personalized onboarding call.
                        </p>
                        <Link href="/contact" className="text-blue-600 hover:underline text-sm font-medium">
                            Contact support →
                        </Link>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-lg p-5">
                        <h3 className="font-bold text-slate-900 mb-2">📚 Knowledge Base</h3>
                        <p className="text-slate-600 text-sm mb-3">
                            Search our complete documentation for answers to specific questions and use cases.
                        </p>
                        <Link href="/resources/docs" className="text-blue-600 hover:underline text-sm font-medium">
                            Browse docs →
                        </Link>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-lg p-5">
                        <h3 className="font-bold text-slate-900 mb-2">🎓 Training Webinars</h3>
                        <p className="text-slate-600 text-sm mb-3">
                            Join free group training sessions where we walk through common setup scenarios live.
                        </p>
                        <Link href="/training" className="text-blue-600 hover:underline text-sm font-medium">
                            View schedule →
                        </Link>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Next Steps
                </h2>

                <p className="text-slate-600 mb-6">
                    Once you've completed the getting started guides, explore these feature-specific sections:
                </p>

                <div className="grid md:grid-cols-3 gap-4 not-prose">
                    <Link href="/resources/docs/people" className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">People</h3>
                        <p className="text-slate-600 text-sm">Member directory, families, visitors, and pipelines</p>
                    </Link>

                    <Link href="/resources/docs/groups" className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Groups</h3>
                        <p className="text-slate-600 text-sm">Small groups, serving teams, and leadership</p>
                    </Link>

                    <Link href="/resources/docs/events" className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Events & Calendar</h3>
                        <p className="text-slate-600 text-sm">Event creation, registration, and check-in systems</p>
                    </Link>

                    <Link href="/resources/docs/giving" className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Giving & Donations</h3>
                        <p className="text-slate-600 text-sm">Online giving, campaigns, and donor management</p>
                    </Link>

                    <Link href="/resources/docs/communications" className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Communications</h3>
                        <p className="text-slate-600 text-sm">Email, SMS, announcements, and messaging</p>
                    </Link>

                    <Link href="/resources/docs/ai" className="block bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">AI Features</h3>
                        <p className="text-slate-600 text-sm">Sermon planner, content studio, and insights</p>
                    </Link>
                </div>
            </div>

            <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Ready to get started?
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    Jump into the Quick Start Guide and have your church up and running in 15 minutes.
                </p>
                <Link
                    href="/resources/docs/getting-started/quick-start"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                    Start Quick Setup
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </article>
    );
}
