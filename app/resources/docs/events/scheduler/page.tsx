import Link from 'next/link';
import { Calendar, Plus, Repeat, Users, Clock, Filter, BarChart3, Eye, QrCode, AlertCircle, CheckCircle, Sparkles, X } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Events Scheduler | Relius Documentation',
    description: 'Create and manage church events with calendar views, registration, volunteer coordination, and analytics.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/events/scheduler/',
    },
    openGraph: {
        title: 'Events Scheduler | Relius Documentation',
        description: 'Create and manage church events with calendar views, registration, volunteer coordination, and analytics.',
        url: 'https://relius.ai/resources/docs/events/scheduler/',
    },
    keywords: ['church event scheduler', 'church events calendar', 'event management', 'church event registration'],
};

export default function EventsSchedulerPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        Events & Calendar
                    </span>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Events Scheduler
                </h1>

                <p className="text-xl text-slate-600">
                    Create, schedule, and manage all your church events across calendar, list, and analytics views.
                </p>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-purple-600" />
                    Interface Overview
                </h2>
                <p>
                    The Events Scheduler has three main tabs: <strong>Calendar</strong>, <strong>List View</strong>, and <strong>Analytics</strong>. The Calendar tab includes three view toggles -- <strong>Month View</strong>, <strong>Week View</strong>, and <strong>Day View</strong> -- so you can see events at different levels of detail. A stats bar along the bottom shows counts like &quot;29 events in view | 8 with registration | 21 recurring.&quot;
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                    <span className="flex items-center gap-2">
                        <Plus className="w-6 h-6 text-purple-600" />
                        Creating an Event
                    </span>
                </h2>
                <p>
                    Click the blue <strong>&quot;+ Create Event&quot;</strong> button in the top-right corner. This opens a modal with the following fields:
                </p>

                <div className="bg-slate-50 rounded-lg p-6 space-y-4 my-6">
                    <div>
                        <p className="font-semibold text-slate-900 mb-1">Title *</p>
                        <p className="text-sm text-slate-600 mb-0">Required. The name displayed on the calendar and in all views.</p>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-900 mb-1">Event Type</p>
                        <p className="text-sm text-slate-600 mb-0">Dropdown with options: Sunday Service, Midweek Service, Bible Study, Youth Group, Children&apos;s Ministry, Wedding, and more.</p>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-900 mb-1">Description</p>
                        <p className="text-sm text-slate-600 mb-0">Textarea for event details visible to attendees.</p>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-900 mb-1">Ministry</p>
                        <p className="text-sm text-slate-600 mb-0">Dropdown to assign the event to a specific ministry.</p>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-900 mb-1">Room</p>
                        <p className="text-sm text-slate-600 mb-0">Dropdown for room assignment. Defaults to &quot;No room selected.&quot;</p>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-900 mb-1">Start / End</p>
                        <p className="text-sm text-slate-600 mb-0">Date and time pickers for both start and end. Default duration is 90 minutes.</p>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-900 mb-1">Virtual Meeting URL</p>
                        <p className="text-sm text-slate-600 mb-0">Optional link for hybrid or online-only events.</p>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-900 mb-1">Location Notes</p>
                        <p className="text-sm text-slate-600 mb-0">Additional location details such as parking instructions or building entrance.</p>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-900 mb-1">Registration</p>
                        <p className="text-sm text-slate-600 mb-0">Checkbox: <strong>&quot;Requires registration.&quot;</strong> Enable this for events that need a headcount.</p>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-900 mb-1">Cost</p>
                        <p className="text-sm text-slate-600 mb-0">Checkbox: <strong>&quot;This event is free.&quot;</strong> Uncheck to set a price.</p>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-900 mb-1">Repeat this event</p>
                        <p className="text-sm text-slate-600 mb-0">Toggle to configure a recurrence pattern (see Recurring Events below).</p>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-900 mb-1">Publish event (visible to members)</p>
                        <p className="text-sm text-slate-600 mb-0">Checkbox, checked by default. Uncheck to keep the event as a draft.</p>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-900 mb-1">Show on public church website</p>
                        <p className="text-sm text-slate-600 mb-0">Checkbox to make the event visible to non-members on your public site.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                    <span className="flex items-center gap-2">
                        <Eye className="w-6 h-6 text-purple-600" />
                        Calendar Views
                    </span>
                </h2>
                <p>
                    Under the <strong>Calendar</strong> tab, toggle between three views using the controls at the top of the calendar:
                </p>
                <div className="space-y-4 my-6">
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Month View</h3>
                        <p className="text-slate-700 mb-0">
                            Displays the full month grid. Events appear as colored blocks on their dates. Click any date cell to quick-create an event on that day.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Week View</h3>
                        <p className="text-slate-700 mb-0">
                            Shows a 7-day schedule with hourly time slots. Useful for spotting scheduling conflicts and seeing how events overlap.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Day View</h3>
                        <p className="text-slate-700 mb-0">
                            Hour-by-hour breakdown of a single day. Helpful for event-heavy days like Sundays or conference days.
                        </p>
                    </div>
                </div>
                <p>
                    Switch to the <strong>List View</strong> tab for a chronological, searchable list of all events. The <strong>Analytics</strong> tab shows attendance trends, registration rates, and event frequency data.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                    <span className="flex items-center gap-2">
                        <Filter className="w-6 h-6 text-purple-600" />
                        Filtering Events
                    </span>
                </h2>
                <p>
                    Click <strong>&quot;Show Filters&quot;</strong> to reveal the filter panel. Available filters:
                </p>
                <ul className="space-y-2 text-slate-700 ml-4 my-4">
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">-</span>
                        <span><strong>Search box:</strong> Find events by name or keyword</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">-</span>
                        <span><strong>Event Types:</strong> Checkboxes to filter by Sunday Service, Bible Study, Youth Group, etc.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">-</span>
                        <span><strong>Ministries:</strong> Filter by the ministry a given event belongs to</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">-</span>
                        <span><strong>Options:</strong> &quot;Recurring only&quot; and &quot;Show cancelled&quot; toggles</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                    <span className="flex items-center gap-2">
                        <Repeat className="w-6 h-6 text-purple-600" />
                        Recurring Events
                    </span>
                </h2>
                <p>
                    To create a recurring event, enable the <strong>&quot;Repeat this event&quot;</strong> toggle in the Create Event modal. Configure the pattern:
                </p>
                <ol className="space-y-3 text-slate-700 list-decimal ml-6 my-4">
                    <li>Choose a frequency: Daily, Weekly, Monthly, or Yearly</li>
                    <li>Set the interval (e.g., every 1 week, every 2 weeks)</li>
                    <li>For weekly, select which days of the week</li>
                    <li>Set an end condition: specific date, after a number of occurrences, or no end date</li>
                </ol>
                <p>
                    Recurring events display a <strong>&quot;Recurring&quot;</strong> badge in their detail popup. When editing, you can choose to update a single occurrence or the entire series.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Event Detail Popup</h2>
                <p>
                    Click any event on the calendar or in list view to open its detail popup. The popup contains:
                </p>

                <div className="space-y-8 my-6">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Event Information</h3>
                        <ul className="space-y-2 text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600 font-bold mt-1">-</span>
                                <span>Event name with a <strong>&quot;Recurring&quot;</strong> badge (if applicable)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600 font-bold mt-1">-</span>
                                <span>Description text</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600 font-bold mt-1">-</span>
                                <span><strong>Date & Time</strong> card showing the scheduled start and end</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600 font-bold mt-1">-</span>
                                <span><strong>Location</strong> card with room assignment and location notes</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600 font-bold mt-1">-</span>
                                <span><strong>Cost</strong> card indicating free or paid, plus a &quot;Public event&quot; label when applicable</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Actions</h3>
                        <ul className="space-y-2 text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600 font-bold mt-1">-</span>
                                <span><strong>Edit</strong> button to modify event details</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600 font-bold mt-1">-</span>
                                <span><strong>Generate QR Code</strong> button for sharing or check-in</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600 font-bold mt-1">-</span>
                                <span><strong>Cancel Event</strong> button with a reason field for documenting why</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-purple-600" />
                            Attendees & Volunteers
                        </h3>
                        <p className="text-slate-700 mb-3">
                            The detail popup has two people sections:
                        </p>
                        <ul className="space-y-2 text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600 font-bold mt-1">-</span>
                                <span><strong>Attendees:</strong> Search for and add members. Shows the list of people registered or checked in.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600 font-bold mt-1">-</span>
                                <span><strong>Volunteers:</strong> Search for and assign volunteers with specific roles for the event.</span>
                            </li>
                        </ul>
                    </section>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                    <span className="flex items-center gap-2">
                        <Users className="w-6 h-6 text-purple-600" />
                        Registration
                    </span>
                </h2>
                <p>
                    To require registration for an event, check <strong>&quot;Requires registration&quot;</strong> in the Create Event modal. When registration is enabled:
                </p>
                <ul className="space-y-2 text-slate-700 ml-4 my-4">
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">-</span>
                        <span>Members see a registration prompt when viewing the event</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">-</span>
                        <span>The stats bar tracks how many events in the current view have registration enabled</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">-</span>
                        <span>Registered attendees appear in the Attendees section of the event detail popup</span>
                    </li>
                </ul>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex gap-3 my-4">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="font-medium text-green-900">Tip</p>
                        <p className="text-green-800 text-sm mb-0">
                            Use the &quot;Show on public church website&quot; checkbox together with &quot;Requires registration&quot; to allow non-members to register for public events like community dinners or holiday services.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                    <span className="flex items-center gap-2">
                        <X className="w-6 h-6 text-purple-600" />
                        Cancelling an Event
                    </span>
                </h2>
                <p>
                    To cancel an event, open its detail popup and click <strong>&quot;Cancel Event.&quot;</strong> You will be prompted to enter a cancellation reason. This reason is stored with the event record. Cancelled events are hidden from the default calendar view but can be shown using the <strong>&quot;Show cancelled&quot;</strong> filter option.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                    <span className="flex items-center gap-2">
                        <QrCode className="w-6 h-6 text-purple-600" />
                        QR Codes
                    </span>
                </h2>
                <p>
                    Click <strong>&quot;Generate QR Code&quot;</strong> in the event detail popup to create a scannable QR code. Use this for:
                </p>
                <ul className="space-y-2 text-slate-700 ml-4 my-4">
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">-</span>
                        <span>Printing on flyers or bulletins for quick event access</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">-</span>
                        <span>On-site check-in at the event entrance</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">-</span>
                        <span>Sharing event details via social media or messaging</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                    <span className="flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-purple-600" />
                        AI Insights
                    </span>
                </h2>
                <p>
                    The <strong>&quot;AI Insights&quot;</strong> button in the scheduler provides data-driven suggestions based on your event history. This includes attendance pattern analysis, scheduling conflict detection, and recommendations for event timing and frequency.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                    <span className="flex items-center gap-2">
                        <BarChart3 className="w-6 h-6 text-purple-600" />
                        Analytics Tab
                    </span>
                </h2>
                <p>
                    The <strong>Analytics</strong> tab provides reporting on your events. Use it to review attendance trends over time, compare registration numbers to actual turnout, and identify your most and least attended event types. Data from the analytics tab can inform future scheduling and resource allocation decisions.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Best Practices</h2>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Assign rooms when creating events</strong> to prevent double-booking spaces</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Use the &quot;Publish event&quot; checkbox</strong> to draft events before making them visible to members</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Set event types consistently</strong> so the Analytics tab and filters produce accurate results</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Enable registration for capacity-limited events</strong> like retreats, dinners, and classes to get accurate headcounts</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Assign volunteers with roles</strong> in the event detail popup so team members know their responsibilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Use Week View to spot conflicts</strong> before finalizing schedules for busy weeks</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Document cancellation reasons</strong> to maintain a record of why events were called off</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Common Questions</h2>
                <div className="space-y-4">
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: How do I change a single occurrence of a recurring event without affecting the rest?</p>
                        <p className="text-slate-700 mb-0">
                            A: Click the specific occurrence on the calendar, then click <strong>Edit</strong>. You will be asked whether to edit just this occurrence or the entire series. Choose &quot;This event only&quot; to modify the single instance.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: What does the &quot;Publish event&quot; checkbox do?</p>
                        <p className="text-slate-700 mb-0">
                            A: When checked (the default), the event is visible to members. Uncheck it to keep the event as a draft that only staff can see. This is useful for events still being planned.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Can I make an event visible on our public website?</p>
                        <p className="text-slate-700 mb-0">
                            A: Yes. Check <strong>&quot;Show on public church website&quot;</strong> in the Create Event modal. The event will then appear on your church&apos;s public-facing calendar.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: How do I see cancelled events?</p>
                        <p className="text-slate-700 mb-0">
                            A: Click <strong>&quot;Show Filters&quot;</strong>, then check <strong>&quot;Show cancelled&quot;</strong> under the Options section. Cancelled events will appear in the calendar and list views.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: What is the default event duration?</p>
                        <p className="text-slate-700 mb-0">
                            A: New events default to 90 minutes. You can change the end time in the Create Event modal to set any duration.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Topics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/resources/docs/events/check-in/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Check-In System</h3>
                        <p className="text-sm text-slate-600 mb-0">Track attendance with QR codes and kiosk mode</p>
                    </Link>
                    <Link href="/resources/docs/events/registration/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Registration</h3>
                        <p className="text-sm text-slate-600 mb-0">Manage event registration, capacity, and waitlists</p>
                    </Link>
                </div>
            </div>
        </article>
    );
}
