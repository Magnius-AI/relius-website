import Link from 'next/link';
import { Users, UserPlus, Heart, GitBranch, Search } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'People Management | Relius Documentation',
    description: 'Manage your church members, families, visitors, and pastoral care with powerful people management tools.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/people/',
    },
    openGraph: {
        title: 'People Management | Relius Documentation',
        description: 'Manage your church members, families, visitors, and pastoral care with powerful people management tools.',
        url: 'https://relius.ai/resources/docs/people/',
    },
    keywords: ['church people management', 'member directory', 'church CRM'],
};

export default function PeopleOverviewPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        Documentation
                    </span>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Users className="w-10 h-10 text-blue-600" />
                    People Management
                </h1>

                <p className="text-xl text-slate-600">
                    Your church is more than names on a list—it's a community of people with stories, needs, and relationships. Relius helps you know and care for everyone better.
                </p>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
                <p>
                    People Management in Relius brings together everything you need to build genuine relationships at scale. Whether you're a church of 50 or 5,000, you can track member information, manage families, follow up with visitors, and provide personalized pastoral care—all from one integrated system.
                </p>
                <p>
                    Unlike generic CRMs built for sales teams, Relius understands the unique needs of church ministry: family relationships matter, pastoral notes need privacy protection, membership status has spiritual significance, and care isn't transactional—it's relational. Our people management tools help you be more pastoral, not less.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Key Features</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <Link href="/resources/docs/people/directory/" className="block bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                                <Search className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Member Directory</h3>
                        </div>
                        <p className="text-slate-600 mb-0">
                            Your central database of everyone in your church community. Search, filter, and manage member profiles with custom fields, tags, and bulk import tools.
                        </p>
                    </Link>

                    <Link href="/resources/docs/people/family/" className="block bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Family Management</h3>
                        </div>
                        <p className="text-slate-600 mb-0">
                            Group members into household units, track family relationships, send communications to entire families, and manage family giving statements.
                        </p>
                    </Link>

                    <Link href="/resources/docs/people/visitor/" className="block bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                                <UserPlus className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Visitor Tracking</h3>
                        </div>
                        <p className="text-slate-600 mb-0">
                            Capture guest information, automate follow-up workflows, track conversion from visitor to member, and never let a first-timer fall through the cracks.
                        </p>
                    </Link>

                    <Link href="/resources/docs/people/pipelines/" className="block bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                                <GitBranch className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Pipelines</h3>
                        </div>
                        <p className="text-slate-600 mb-0">
                            Track people through multi-step processes like new member classes, baptism preparation, leadership development, or care journeys with visual pipeline stages.
                        </p>
                    </Link>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Common Use Cases</h2>

                <div className="space-y-6">
                    <div className="bg-slate-50 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">First-Time Visitor Follow-Up</h3>
                        <p className="text-slate-700 mb-3">
                            Guest fills out a connection card on Sunday morning. Within 24 hours, they receive a personalized welcome email, are assigned to a pastor for follow-up, and enter a 6-week visitor pipeline that automatically sends resources and invitations.
                        </p>
                        <p className="text-sm text-slate-600 mb-0">
                            <strong>Tools used:</strong> Visitor Tracking, Pipelines, Email Campaigns, Care Notes
                        </p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">New Member Integration</h3>
                        <p className="text-slate-700 mb-3">
                            Someone completes your membership class and joins the church. Update their member status, add them to a family (if applicable), enroll them in the newcomers small group, and track their journey from visitor to active member—all from their profile.
                        </p>
                        <p className="text-sm text-slate-600 mb-0">
                            <strong>Tools used:</strong> Member Directory, Family Management, Groups, Pipelines
                        </p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Pastoral Care Coordination</h3>
                        <p className="text-slate-700 mb-3">
                            A member faces a health crisis. Staff add private care notes to their profile, schedule hospital visits, assign a care team, and track follow-up over the coming weeks. All pastoral interactions are documented securely for continuity of care.
                        </p>
                        <p className="text-sm text-slate-600 mb-0">
                            <strong>Tools used:</strong> Care Notes, Pipelines, Prayer Requests, Visit Tracking
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Getting Started</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <ol className="space-y-3 text-slate-700 list-decimal ml-6">
                        <li>
                            <strong>Import your existing data</strong> using the CSV bulk import tool (or start fresh if you're a new church)
                        </li>
                        <li>
                            <strong>Set up custom fields</strong> for information specific to your church (baptism dates, spiritual gifts, etc.)
                        </li>
                        <li>
                            <strong>Configure permissions</strong> so staff can only access the information they need
                        </li>
                        <li>
                            <strong>Create your first pipeline</strong> for visitor follow-up or new member integration
                        </li>
                        <li>
                            <strong>Train your team</strong> on how to add notes, update profiles, and maintain data quality
                        </li>
                    </ol>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Best Practices</h2>
                <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-1">✓</span>
                        <span><strong>Keep it current:</strong> Outdated information is worse than no information—encourage staff to update profiles as they learn about changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-1">✓</span>
                        <span><strong>Protect privacy:</strong> Use role-based permissions to ensure sensitive pastoral notes stay confidential</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-1">✓</span>
                        <span><strong>Avoid silos:</strong> One person profile connects giving, attendance, groups, and care—use that integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-1">✓</span>
                        <span><strong>Regular cleanup:</strong> Archive inactive members quarterly to keep searches fast and relevant</span>
                    </li>
                </ul>

                <div className="mt-12 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Ready to dive in?
                    </h3>
                    <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                        Start with the Member Directory to understand the foundation, then explore specialized features as your needs grow.
                    </p>
                    <Link
                        href="/resources/docs/people/directory/"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        Go to Member Directory
                        <Search className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
