import Link from 'next/link';
import { Calendar, CheckSquare, Home, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Events & Calendar | Relius Documentation',
    description: 'Manage church events, track attendance, handle registrations, and coordinate facilities with powerful event management tools.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/events/',
    },
    openGraph: {
        title: 'Events & Calendar | Relius Documentation',
        description: 'Manage church events, track attendance, handle registrations, and coordinate facilities with powerful event management tools.',
        url: 'https://relius.ai/resources/docs/events/',
    },
    keywords: ['church event management', 'church calendar', 'event registration', 'church check-in'],
};

export default function EventsOverviewPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        Documentation
                    </span>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Calendar className="w-10 h-10 text-purple-600" />
                    Events & Calendar
                </h1>

                <p className="text-xl text-slate-600">
                    From Sunday worship to community outreach, manage every event in your church with seamless planning, registration, and attendance tracking.
                </p>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
                <p>
                    The Events & Scheduling section helps you plan, manage, and track everything happening at your church — from recurring Sunday services to one-time special events, retreats, and community outreach. Create events, collect registrations, check in attendees, and view analytics.
                </p>
                <p>
                    Attendance data flows into member profiles, volunteers can be assigned from your service teams, and room reservations prevent double-bookings automatically.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Key Features</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <Link href="/resources/docs/events/scheduler" className="block bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                                <Calendar className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Events Scheduler</h3>
                        </div>
                        <p className="text-slate-600 mb-0">
                            Create, manage, and view all your church events in one place. Support for recurring events, multiple calendar views, RSVP collection, and capacity management.
                        </p>
                    </Link>

                    <Link href="/resources/docs/events/registration/" className="block bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                                <CheckSquare className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Registration & RSVP</h3>
                        </div>
                        <p className="text-slate-600 mb-0">
                            Collect RSVPs with custom forms, manage waitlists, set capacity limits, and accept payments for events that require registration fees.
                        </p>
                    </Link>

                    <Link href="/resources/docs/events/check-in/" className="block bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                                <Clock className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Check-Ins & Attendance</h3>
                        </div>
                        <p className="text-slate-600 mb-0">
                            QR code check-in, guest check-in, real-time attendance tracking, and daily check-in feeds for monitoring event participation.
                        </p>
                    </Link>

                    <Link href="/resources/docs/events/creating" className="block bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all group">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                                <Home className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Creating Events</h3>
                        </div>
                        <p className="text-slate-600 mb-0">
                            Step-by-step guide to creating events with the event form — including event types, rooms, registration, cost, recurrence, and visibility settings.
                        </p>
                    </Link>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Common Use Cases</h2>

                <div className="space-y-6">
                    <div className="bg-slate-50 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Sunday Morning Workflow</h3>
                        <p className="text-slate-700 mb-3">
                            Families arrive and check their kids into children's ministry using the self-service kiosk. Name tags print automatically with age-appropriate room assignments. Parents receive a pickup tag with matching security code. Staff see real-time attendance counts and can text parents if needed during service. After service, attendance data flows into each child's profile for tracking patterns.
                        </p>
                        <p className="text-sm text-slate-600 mb-0">
                            <strong>Tools used:</strong> Check-In System, Events Scheduler, Attendance Tracking
                        </p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Special Event Planning</h3>
                        <p className="text-slate-700 mb-3">
                            Your church is hosting a community Easter egg hunt. Create the event, enable public registration with a custom form asking for number of children and ages, set a capacity limit of 200 kids, promote it on your website and social media, and collect RSVPs. When you hit capacity, new registrations automatically go to a waitlist. Send reminder emails the day before, and use check-in on event day to track attendance.
                        </p>
                        <p className="text-sm text-slate-600 mb-0">
                            <strong>Tools used:</strong> Events Scheduler, Registration & RSVP, Email Communications, Check-In
                        </p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Facility Coordination</h3>
                        <p className="text-slate-700 mb-3">
                            Multiple ministries need space on Wednesday night: youth group in the gym, women's Bible study in the fellowship hall, and an outside organization renting the conference room. The calendar shows all bookings, prevents double-bookings, and allows each group to check in and track attendance independently. The rental organization pays online and receives a QR code for building access.
                        </p>
                        <p className="text-sm text-slate-600 mb-0">
                            <strong>Tools used:</strong> Room Rentals, Events Scheduler, Check-In System, Online Payments
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Getting Started</h2>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <ol className="space-y-3 text-slate-700 list-decimal ml-6">
                        <li>
                            <strong>Create your recurring events</strong> like Sunday worship, midweek services, and regular ministry meetings
                        </li>
                        <li>
                            <strong>Set up your rooms/locations</strong> in Settings so you can assign events to specific spaces
                        </li>
                        <li>
                            <strong>Configure check-in stations</strong> for any events that need attendance tracking (especially kids ministry)
                        </li>
                        <li>
                            <strong>Enable RSVP</strong> for events that need headcount (dinners, retreats, classes)
                        </li>
                        <li>
                            <strong>Train your volunteers</strong> on how to use kiosk check-in and run attendance reports
                        </li>
                    </ol>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Best Practices</h2>
                <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span><strong>Plan ahead:</strong> Create events 2-4 weeks in advance to give people time to plan and RSVP</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span><strong>Use categories consistently:</strong> Standardize how you categorize events (Worship, Kids, Youth, Adults, Outreach) for better filtering and reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span><strong>Set RSVP deadlines:</strong> Close registration 48-72 hours before events to finalize planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span><strong>Track actual attendance:</strong> Don't just collect RSVPs—use check-in to record who actually showed up</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span><strong>Send reminders:</strong> Automated reminder emails reduce no-shows dramatically</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold mt-1">✓</span>
                        <span><strong>Review and learn:</strong> Use attendance reports to identify trends and improve future event planning</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Integration with Other Features</h2>
                <p className="text-slate-600 mb-4">
                    Events & Calendar works seamlessly with other Relius features:
                </p>
                <ul className="space-y-2 text-slate-700 list-disc ml-6">
                    <li><strong>People:</strong> Attendance automatically updates member profiles and engagement scores</li>
                    <li><strong>Groups:</strong> Create events for specific groups and auto-invite all members</li>
                    <li><strong>Volunteers:</strong> Schedule team members directly from events and send shift reminders</li>
                    <li><strong>Giving:</strong> Collect payments for events with registration fees or donations</li>
                    <li><strong>Communications:</strong> Send targeted emails to event registrants or attendees</li>
                    <li><strong>Website:</strong> Display public events on your church website with online registration</li>
                </ul>

                <div className="mt-12 bg-gradient-to-br from-purple-50 to-slate-50 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Ready to streamline your events?
                    </h3>
                    <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                        Start with the Events Scheduler to understand the foundation, then explore specialized features as your needs grow.
                    </p>
                    <Link
                        href="/resources/docs/events/scheduler"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        Go to Events Scheduler
                        <Calendar className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
