import Link from 'next/link';
import { LayoutDashboard, DollarSign, UserPlus, CalendarDays, Users, Clock, ListChecks, Eye, BarChart3, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Understanding the Dashboard | Relius Documentation',
    description: 'Learn what each widget on the Relius dashboard shows, including stat cards, new member contacts, schedule requests, recent activity, and the calendar mini-view.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/getting-started/dashboard/',
    },
    openGraph: {
        title: 'Understanding the Dashboard | Relius Documentation',
        description: 'Learn what each widget on the Relius dashboard shows, including stat cards, new member contacts, schedule requests, recent activity, and the calendar mini-view.',
        url: 'https://relius.ai/resources/docs/getting-started/dashboard/',
    },
    keywords: ['Relius dashboard', 'church dashboard', 'dashboard widgets', 'church management overview'],
};

export default function DashboardPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        Getting Started
                    </span>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Understanding the Dashboard
                </h1>

                <p className="text-xl text-slate-600">
                    The dashboard is the first screen you see after logging in. It provides a fixed-layout overview of giving, membership, upcoming events, recent activity, and pending tasks.
                </p>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <LayoutDashboard className="w-6 h-6 text-emerald-600" />
                    Overview
                </h2>
                <p>
                    The Relius dashboard displays a fixed set of widgets that surface key metrics and action items for your church. The layout is not customizable or rearrangeable -- every user sees the same widget arrangement. This page describes each section of the dashboard and what the displayed data means.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2">
                    <Eye className="w-6 h-6 text-emerald-600" />
                    What You'll See
                </h2>

                <p className="text-slate-600 mb-6">
                    The dashboard is organized into stat cards across the top, followed by task widgets, an activity feed, and a calendar mini-view. A <strong>Week/Month</strong> toggle dropdown in the upper area controls the time range for the stat cards.
                </p>

                <div className="space-y-8 not-prose">
                    {/* Stat Cards */}
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-emerald-600" />
                            Stat Cards
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Four summary cards span the top of the dashboard. Each displays a single metric. Use the <strong>Week/Month</strong> toggle dropdown to switch the time range that applies to these cards.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-slate-50 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <DollarSign className="w-4 h-4 text-emerald-600" />
                                    <h4 className="font-semibold text-slate-900">Monthly Giving</h4>
                                </div>
                                <p className="text-sm text-slate-700 mb-0">
                                    Total dollar amount of donations received in the selected time range. Reflects all funds combined.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <UserPlus className="w-4 h-4 text-emerald-600" />
                                    <h4 className="font-semibold text-slate-900">New Visitors This Week</h4>
                                </div>
                                <p className="text-sm text-slate-700 mb-0">
                                    Count of people added to the directory as visitors during the selected time range.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <CalendarDays className="w-4 h-4 text-emerald-600" />
                                    <h4 className="font-semibold text-slate-900">Upcoming Events</h4>
                                </div>
                                <p className="text-sm text-slate-700 mb-0">
                                    Count of events scheduled within the next seven days, regardless of the toggle setting.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Users className="w-4 h-4 text-emerald-600" />
                                    <h4 className="font-semibold text-slate-900">Total Members</h4>
                                </div>
                                <p className="text-sm text-slate-700 mb-0">
                                    Current total of active member profiles in your directory. Does not include archived profiles.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* New Member Contacts */}
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <ListChecks className="w-5 h-5 text-emerald-600" />
                            New Member Contacts
                        </h3>
                        <div className="space-y-3 text-slate-700">
                            <p>
                                This widget lists tasks for contacting new members. When a new person is added to the directory, a contact task is generated and appears here. Each entry shows the person's name and when they were added.
                            </p>
                            <p>
                                Use this widget to ensure no new visitor or member goes ungreeted. Mark a task as complete once you have made contact. Completed tasks are removed from the list.
                            </p>
                        </div>
                    </section>

                    {/* Schedule Requests */}
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <CalendarDays className="w-5 h-5 text-emerald-600" />
                            Schedule Requests
                        </h3>
                        <div className="space-y-3 text-slate-700">
                            <p>
                                Displays pending volunteer schedule requests. When a volunteer submits an availability change or a scheduling conflict through the services module, it appears here for review.
                            </p>
                            <p>
                                Each request shows the volunteer's name, the service date, and the type of request. Approve or decline requests directly from the widget.
                            </p>
                        </div>
                    </section>

                    {/* Recent Activity */}
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-emerald-600" />
                            Recent Activity
                        </h3>
                        <div className="space-y-3 text-slate-700">
                            <p>
                                A chronological feed of recent actions across your account. Entries include member additions, donation recordings, event creation, and other changes made by your team.
                            </p>
                            <p>
                                Each entry shows the action taken, the user who performed it, and the timestamp. The feed displays the most recent items first and updates in real time.
                            </p>
                        </div>
                    </section>

                    {/* Calendar Mini-View */}
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <CalendarDays className="w-5 h-5 text-emerald-600" />
                            Calendar Mini-View
                        </h3>
                        <div className="space-y-3 text-slate-700">
                            <p>
                                A compact monthly calendar displays on the dashboard with color-coded dots on dates that have events. The dot colors indicate the event type:
                            </p>
                            <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                                <div className="flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span className="text-sm"><strong>Blue dots</strong> -- Federal holidays</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full bg-purple-500 flex-shrink-0"></span>
                                    <span className="text-sm"><strong>Purple dots</strong> -- Christian holidays</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0"></span>
                                    <span className="text-sm"><strong>Green dots</strong> -- Church events</span>
                                </div>
                            </div>
                            <p>
                                Click any date to navigate to the full calendar view for that day. The mini-view is read-only; events cannot be created or edited from it.
                            </p>
                        </div>
                    </section>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                    Quick Actions
                </h2>

                <p className="text-slate-600 mb-6">
                    From the dashboard, you can perform these common tasks without navigating away:
                </p>

                <div className="space-y-3 not-prose">
                    <div className="flex items-start gap-3 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Mark a new member contact task as complete after reaching out</span>
                    </div>
                    <div className="flex items-start gap-3 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Approve or decline a pending schedule request</span>
                    </div>
                    <div className="flex items-start gap-3 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Switch the stat card time range between Week and Month using the toggle dropdown</span>
                    </div>
                    <div className="flex items-start gap-3 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Click a calendar date to jump to the full calendar view for that day</span>
                    </div>
                    <div className="flex items-start gap-3 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Click a recent activity entry to navigate to the related record</span>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                    Features
                </h2>

                <div className="space-y-4 not-prose">
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Fixed Widget Layout</h3>
                        <p className="text-slate-700 mb-0">
                            The dashboard uses a fixed layout. Widgets cannot be dragged, rearranged, added, or removed. Every user with dashboard access sees the same arrangement.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Time Range Toggle</h3>
                        <p className="text-slate-700 mb-0">
                            The Week/Month dropdown changes the period reflected in the stat cards. The toggle does not affect the Recent Activity feed, the calendar mini-view, or the task widgets.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Real-Time Updates</h3>
                        <p className="text-slate-700 mb-0">
                            Stat cards and the Recent Activity feed update in real time as your team records donations, adds members, or creates events. You do not need to refresh the page.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Role-Based Visibility</h3>
                        <p className="text-slate-700 mb-0">
                            The Monthly Giving stat card and financial data in the Recent Activity feed are only visible to users with finance or admin permissions. Other users see the remaining widgets without financial details.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Best Practices</h2>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 not-prose">
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Check the dashboard daily.</strong> Review new member contact tasks and schedule requests at the start of each workday to keep response times short.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Use the Week/Month toggle intentionally.</strong> Switch to Week for a focused view of recent trends. Switch to Month for a broader picture when planning or reporting.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Act on contact tasks promptly.</strong> Reaching out to new visitors within 48 hours of their first visit increases the likelihood they return.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Monitor the Recent Activity feed for unexpected changes.</strong> If a donation is voided or a member is archived, it appears here. Use the feed as a lightweight audit trail.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Respond to schedule requests before the service date.</strong> Unresolved requests can leave gaps in your volunteer coverage.</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Topics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                    <Link href="/resources/docs/people/directory" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Member Directory</h3>
                        <p className="text-sm text-slate-600 mb-0">Search, filter, and manage everyone in your community</p>
                    </Link>
                    <Link href="/resources/docs/events/scheduler" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Events Scheduler</h3>
                        <p className="text-sm text-slate-600 mb-0">Full calendar view with event creation and RSVP management</p>
                    </Link>
                    <Link href="/resources/docs/giving" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Giving & Donations</h3>
                        <p className="text-sm text-slate-600 mb-0">Track donations, manage funds, and generate tax receipts</p>
                    </Link>
                    <Link href="/resources/docs/services/scheduling" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Volunteer Scheduling</h3>
                        <p className="text-sm text-slate-600 mb-0">Manage volunteer teams and service schedules</p>
                    </Link>
                </div>
            </div>
        </article>
    );
}
