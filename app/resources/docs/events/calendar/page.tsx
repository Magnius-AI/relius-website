import Link from 'next/link';
import { Calendar, Plus, Repeat, Users, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Event Calendar | Relius Documentation',
    description: 'Manage all your church events in one place - create events, handle RSVPs, and track attendance.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/events/calendar/',
    },
    openGraph: {
        title: 'Event Calendar | Relius Documentation',
        description: 'Manage all your church events in one place - create events, handle RSVPs, and track attendance.',
        url: 'https://relius.ai/resources/docs/events/calendar/',
    },
    keywords: ['church event calendar', 'event management', 'church events', 'event RSVP'],
};

export default function EventCalendarPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        Events & Calendar
                    </span>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Event Calendar
                </h1>

                <p className="text-xl text-slate-600">
                    Manage all your church events in one place—from Sunday services to special gatherings, with built-in RSVP and attendance tracking.
                </p>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-purple-600" />
                    Overview
                </h2>
                <p>
                    The Event Calendar is your command center for everything happening at your church. Whether it's weekly services, small group meetings, special holiday services, community outreach events, or volunteer training sessions, the calendar gives you a bird's-eye view of your ministry activity—and the tools to manage it all seamlessly.
                </p>
                <p>
                    Gone are the days of juggling spreadsheets, email chains, and paper sign-up sheets. With Relius Event Calendar, you can create events in seconds, automatically send reminders, collect RSVPs with capacity limits, and track who actually showed up—all from a single, unified system. Your staff sees what they need to see, your volunteers get automatic reminders, and your members can RSVP from their phones.
                </p>
                <p>
                    The calendar integrates deeply with the rest of Relius: attendance data flows into member profiles, volunteers get scheduled from your teams database, and room reservations prevent double-bookings automatically.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Key Concepts</h2>
                <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Events</h3>
                        <p className="text-slate-700 mb-0">
                            An event is any scheduled activity—Sunday worship, midweek Bible study, youth group, community dinner, baptism class, or leadership retreat. Each event has a date, time, location, and optional features like RSVP, check-in, and volunteer scheduling.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Recurring Patterns</h3>
                        <p className="text-slate-700 mb-0">
                            Most church events repeat—weekly services, monthly prayer meetings, annual conferences. Recurring events let you set it once and forget it, with intelligent handling of holidays and exceptions.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Event Categories</h3>
                        <p className="text-slate-700 mb-0">
                            Organize events by type (Worship, Groups, Outreach, Classes) or audience (Adults, Youth, Kids, All Church). Categories help with filtering, calendar views, and permissions.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Getting Started</h2>

                <div className="space-y-8">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Plus className="w-5 h-5 text-purple-600" />
                            Step 1: Creating an Event
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Navigate to <strong>Events → Calendar</strong> and click <strong>"New Event"</strong>. Fill in the essential details:
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4 space-y-3">
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Event Name</p>
                                <p className="text-sm text-slate-600 mb-0">Clear and specific—"Sunday Worship" or "Christmas Eve Service"</p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Date & Time</p>
                                <p className="text-sm text-slate-600 mb-0">Start and end times; time zone is automatically set from your church settings</p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Location</p>
                                <p className="text-sm text-slate-600 mb-0">Select from your configured rooms or enter an off-site address</p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Category</p>
                                <p className="text-sm text-slate-600 mb-0">Helps organize and filter events (Worship, Groups, Classes, Special Events)</p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Description</p>
                                <p className="text-sm text-slate-600 mb-0">What attendees need to know—what to expect, what to bring, parking info</p>
                            </div>
                        </div>
                        <p className="text-slate-700 mt-4">
                            Click <strong>Create Event</strong>, and it appears immediately on your calendar.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-purple-600" />
                            Step 2: Setting Up RSVP
                        </h3>
                        <p className="text-slate-700 mb-4">
                            For events that need headcount (dinners, retreats, classes), enable RSVP in the event settings:
                        </p>
                        <ol className="space-y-3 text-slate-700 list-decimal ml-6">
                            <li>Open your event and click <strong>Edit → RSVP Settings</strong></li>
                            <li>Toggle <strong>"Enable RSVP"</strong> on</li>
                            <li>Set RSVP deadline (optional—e.g., "48 hours before event")</li>
                            <li>Choose who can RSVP: members only, anyone with the link, or invite-only</li>
                            <li>Customize the RSVP form with custom questions ("Dietary restrictions?", "T-shirt size?")</li>
                        </ol>
                        <p className="text-slate-700 mt-4">
                            Members can now RSVP from the church app, website, or email invitations. You'll see real-time RSVP counts on your event dashboard.
                        </p>
                        <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 flex gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-medium text-green-900">Pro Tip</p>
                                <p className="text-green-800 text-sm mb-0">
                                    Send automatic reminder emails to those who RSVP'd "yes" the day before the event—reduces no-shows significantly.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Repeat className="w-5 h-5 text-purple-600" />
                            Step 3: Creating Recurring Events
                        </h3>
                        <p className="text-slate-700 mb-4">
                            For events that repeat regularly, set up a recurrence pattern instead of creating each instance manually:
                        </p>
                        <ol className="space-y-3 text-slate-700 list-decimal ml-6">
                            <li>When creating an event, click <strong>"Repeats"</strong></li>
                            <li>Choose a pattern:
                                <ul className="ml-6 mt-2 space-y-1">
                                    <li>• <strong>Daily:</strong> Every day or every X days</li>
                                    <li>• <strong>Weekly:</strong> Every week on specific days (e.g., "Every Sunday and Wednesday")</li>
                                    <li>• <strong>Monthly:</strong> Specific date (e.g., "1st of each month") or relative (e.g., "2nd Sunday")</li>
                                    <li>• <strong>Yearly:</strong> Annual events like Easter or Thanksgiving</li>
                                </ul>
                            </li>
                            <li>Set when the pattern ends: specific date, after X occurrences, or never</li>
                            <li>Add exceptions for holidays or special circumstances</li>
                        </ol>
                        <p className="text-slate-700 mt-4">
                            Relius creates all instances automatically. Edit one occurrence to change just that instance, or edit the series to update all future events.
                        </p>
                    </section>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Advanced Features</h2>

                <details className="bg-slate-50 rounded-lg p-6 mb-4">
                    <summary className="font-bold text-slate-900 cursor-pointer">
                        Capacity Limits & Waitlists
                    </summary>
                    <div className="mt-4 text-slate-700">
                        <p className="mb-3">
                            For events with limited space (retreats, classes, small gatherings), set a maximum capacity:
                        </p>
                        <ol className="space-y-2 list-decimal ml-6 mb-3">
                            <li>In event settings, enable <strong>"Capacity Limit"</strong></li>
                            <li>Enter the maximum number of attendees</li>
                            <li>Choose what happens when full:
                                <ul className="ml-6 mt-2 space-y-1">
                                    <li>• <strong>Close registration:</strong> No more RSVPs accepted</li>
                                    <li>• <strong>Waitlist:</strong> Additional RSVPs go to a waiting list</li>
                                </ul>
                            </li>
                        </ol>
                        <p className="mb-0">
                            When someone cancels, Relius can automatically promote the first person on the waitlist and send them a notification.
                        </p>
                    </div>
                </details>

                <details className="bg-slate-50 rounded-lg p-6 mb-4">
                    <summary className="font-bold text-slate-900 cursor-pointer">
                        Custom Registration Forms
                    </summary>
                    <div className="mt-4 text-slate-700">
                        <p className="mb-3">
                            Beyond basic RSVP, collect specific information for each event:
                        </p>
                        <p className="mb-2"><strong>Common form fields:</strong></p>
                        <ul className="space-y-2 ml-4 mb-3">
                            <li>• <strong>Dietary restrictions</strong> (text or multiple choice)</li>
                            <li>• <strong>T-shirt size</strong> (for events with swag)</li>
                            <li>• <strong>Emergency contact</strong> (for youth events or retreats)</li>
                            <li>• <strong>Transportation needs</strong> (checkbox: "I need a ride")</li>
                            <li>• <strong>Guest count</strong> (number: "How many are attending with you?")</li>
                            <li>• <strong>Skill level</strong> (dropdown: for classes or workshops)</li>
                        </ul>
                        <p className="mb-3">
                            All responses are collected with the RSVP and can be exported to a spreadsheet for planning.
                        </p>
                        <p className="mb-0">
                            Create templates for common form types (retreat form, class form, dinner form) to reuse across multiple events.
                        </p>
                    </div>
                </details>

                <details className="bg-slate-50 rounded-lg p-6 mb-4">
                    <summary className="font-bold text-slate-900 cursor-pointer">
                        Calendar Views & Filtering
                    </summary>
                    <div className="mt-4 text-slate-700">
                        <p className="mb-3">
                            Relius offers multiple ways to view your calendar:
                        </p>
                        <ul className="space-y-2 ml-4 mb-3">
                            <li>• <strong>Month View:</strong> See all events at a glance</li>
                            <li>• <strong>Week View:</strong> Detailed schedule for the current week</li>
                            <li>• <strong>Day View:</strong> Hour-by-hour breakdown for busy days</li>
                            <li>• <strong>List View:</strong> Chronological list with search and filters</li>
                            <li>• <strong>Agenda View:</strong> Printable summary for staff meetings</li>
                        </ul>
                        <p className="mb-3"><strong>Filter events by:</strong></p>
                        <ul className="space-y-2 ml-4 mb-3">
                            <li>• Category (Worship, Groups, Kids, etc.)</li>
                            <li>• Campus (for multi-site churches)</li>
                            <li>• Room/Location</li>
                            <li>• Date range</li>
                            <li>• Event organizer or team</li>
                        </ul>
                        <p className="mb-0">
                            Save common filter combinations as presets—for example, "Youth Events This Month" or "All Campus Sunday Services."
                        </p>
                    </div>
                </details>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Best Practices</h2>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">✓</span>
                            <span><strong>Use categories consistently:</strong> Standardize category names across your team so reports and filters work reliably</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">✓</span>
                            <span><strong>Plan ahead:</strong> Create events at least 2-4 weeks in advance to give people time to plan and RSVP</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">✓</span>
                            <span><strong>Set RSVP deadlines:</strong> Give yourself 48-72 hours before the event to finalize planning based on headcount</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">✓</span>
                            <span><strong>Send reminders:</strong> Automated reminder emails 1 week out and 1 day before reduce no-shows dramatically</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">✓</span>
                            <span><strong>Track actual attendance:</strong> Use check-in to record who showed up—helps improve future planning and identify engagement patterns</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold mt-1">✓</span>
                            <span><strong>Review and archive:</strong> Archive old events periodically to keep your calendar clean and fast</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Common Questions</h2>
                <div className="space-y-4">
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Can I sync the calendar with Google Calendar or Outlook?</p>
                        <p className="text-slate-700 mb-0">
                            A: Yes! Each calendar has a unique iCal feed URL you can subscribe to from any calendar app. Changes sync automatically within a few hours.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: How do I handle events that happen at different times on different campuses?</p>
                        <p className="text-slate-700 mb-0">
                            A: Create separate event instances for each campus and link them as a "multi-campus event." Each gets its own time, location, and RSVP list, but they're grouped together in reporting.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: What if someone RSVPs but doesn't show up?</p>
                        <p className="text-slate-700 mb-0">
                            A: Use the check-in feature on event day to mark who actually attended. Over time, Relius learns RSVP reliability patterns and can help you plan for typical no-show rates.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Can I make events public on our website?</p>
                        <p className="text-slate-700 mb-0">
                            A: Absolutely! Each event has a visibility setting—Public (shows on your website), Members Only (requires login), or Private (staff only). Public events appear on your church's public calendar and can accept RSVPs from visitors.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Topics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/resources/docs/events/check-in/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Check-In System</h3>
                        <p className="text-sm text-slate-600 mb-0">Track attendance with QR codes and kiosk mode</p>
                    </Link>
                    <Link href="/resources/docs/events/rentals/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Room Rentals</h3>
                        <p className="text-sm text-slate-600 mb-0">Manage facility reservations and external bookings</p>
                    </Link>
                </div>
            </div>
        </article>
    );
}
