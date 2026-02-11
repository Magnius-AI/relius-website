import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Event Analytics | Relius Documentation',
    description: 'View event statistics, attendance trends, registration rates, and performance metrics across all events using the Analytics tab in the Events Scheduler.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/events/analytics/',
    },
    openGraph: {
        title: 'Event Analytics | Relius Documentation',
        description: 'View event statistics, attendance trends, registration rates, and performance metrics across all events using the Analytics tab in the Events Scheduler.',
        url: 'https://relius.ai/resources/docs/events/analytics/',
    },
    keywords: ['church event analytics', 'attendance trends', 'event statistics', 'registration rates', 'event performance metrics'],
};

export default function EventAnalyticsPage() {
    return (
        <div className="prose prose-slate max-w-4xl">
            <h1>Event Analytics</h1>

            <blockquote>
                <p>
                    <strong>Quick Summary</strong>: The Analytics tab in the Events Scheduler
                    provides data on event attendance, registration rates, and performance trends
                    over time. Use it to understand which events draw the most participation, how
                    registration numbers compare to actual turnout, and how event frequency and
                    attendance change across weeks, months, or seasons.
                </p>
            </blockquote>

            <h2>Overview</h2>
            <p>
                Event Analytics is the third tab within the Events Scheduler, alongside Calendar
                and List View. It aggregates data from all your events -- check-in counts,
                registration numbers, volunteer assignments, and event types -- into charts and
                summary metrics. The tab is read-only; it does not modify any event data. Its
                purpose is to give church leadership a factual picture of how events are performing
                so they can make informed decisions about scheduling, resource allocation, and
                programming.
            </p>
            <p>
                The analytics view works with whatever data already exists in your event records.
                As you create events, track attendance through check-in, and manage registrations,
                the Analytics tab automatically reflects that information. There is no separate
                setup step. If you have been using the Events Scheduler and check-in system, the
                data is already flowing into analytics.
            </p>

            <h2>Key Features</h2>
            <ul>
                <li>
                    <strong>Attendance Trends</strong> -- a line or bar chart showing attendance
                    counts over time. You can view trends by week, month, or quarter to identify
                    seasonal patterns, growth, or decline. The chart can be filtered by event type
                    to compare trends across different kinds of events.
                </li>
                <li>
                    <strong>Registration vs. Attendance</strong> -- for events that require
                    registration, the analytics tab compares how many people registered against how
                    many actually attended (checked in). This ratio helps you understand no-show
                    rates and plan capacity more accurately.
                </li>
                <li>
                    <strong>Event Type Breakdown</strong> -- a summary showing the number of events
                    and total attendance grouped by event type (Sunday Service, Bible Study, Youth
                    Group, etc.). This identifies which categories of events are most active in your
                    church.
                </li>
                <li>
                    <strong>Top Events</strong> -- a ranked list of events by attendance count. This
                    highlights your most-attended events over a selected time period and helps
                    identify which programming resonates with your congregation.
                </li>
                <li>
                    <strong>Event Frequency</strong> -- shows how many events were held per week or
                    per month. This metric is useful for understanding whether your calendar is
                    becoming overcrowded or whether there are gaps in programming.
                </li>
                <li>
                    <strong>Date Range Filtering</strong> -- all analytics can be filtered to a
                    specific date range. View data for the last 30 days, the last quarter, the
                    current year, or a custom range.
                </li>
            </ul>

            <h2>Getting Started</h2>
            <ol>
                <li>
                    <strong>Open the Events Scheduler</strong> -- navigate to Events in the sidebar.
                    The Scheduler page opens with the Calendar tab active by default.
                </li>
                <li>
                    <strong>Switch to the Analytics tab</strong> -- click the &quot;Analytics&quot;
                    tab at the top of the Scheduler. The analytics view loads with data from your
                    existing events.
                </li>
                <li>
                    <strong>Set your date range</strong> -- use the date range selector to focus on
                    the period you want to analyze. The default view typically shows the current
                    month.
                </li>
                <li>
                    <strong>Filter by event type</strong> -- if you want to focus on a specific
                    category (e.g., only Sunday Services or only Youth Group events), use the event
                    type filter to narrow the data.
                </li>
                <li>
                    <strong>Review the metrics</strong> -- examine the attendance trends,
                    registration-to-attendance ratios, and event type breakdowns to draw conclusions
                    about your programming.
                </li>
            </ol>

            <h2>Best Practices</h2>
            <ul>
                <li>
                    <strong>Use check-in consistently</strong> -- analytics are only as accurate as
                    the underlying data. Make sure your team uses the check-in system at every event
                    so attendance numbers reflect reality.
                </li>
                <li>
                    <strong>Enable registration for capacity events</strong> -- turning on
                    registration for events with limited space gives you both a headcount forecast
                    and a registration-to-attendance comparison.
                </li>
                <li>
                    <strong>Categorize events with correct types</strong> -- assign the appropriate
                    event type when creating events. This ensures the event type breakdown chart
                    produces meaningful groupings rather than lumping everything into a generic
                    category.
                </li>
                <li>
                    <strong>Review analytics monthly</strong> -- set a rhythm of checking the
                    Analytics tab at least once a month, ideally during a leadership or staff
                    meeting. Look for trends rather than reacting to single data points.
                </li>
                <li>
                    <strong>Compare year-over-year</strong> -- use the date range filter to compare
                    the same period across different years. This accounts for seasonal fluctuations
                    and gives a clearer picture of whether attendance is growing or declining.
                </li>
            </ul>

            <h2>Common Questions</h2>

            <h3>Do I need to set anything up before using analytics?</h3>
            <p>
                No. The Analytics tab works automatically with data from events you have already
                created and attendance recorded through the check-in system. If you have been using
                the Events Scheduler and recording attendance, the data is already available.
            </p>

            <h3>Why are some events showing zero attendance in analytics?</h3>
            <p>
                An event will show zero attendance if no one was checked in through the check-in
                system for that event. If attendance was tracked outside of Relius (for example, on
                paper or through a headcount), that data will not appear in analytics unless it is
                entered into the system.
            </p>

            <h3>Can I export the analytics data?</h3>
            <p>
                The analytics view is designed for on-screen review. For detailed reporting and
                export, use the reporting features available in the Admin section, which allow you
                to generate downloadable reports from your event and attendance data.
            </p>

            <h3>How far back does the analytics data go?</h3>
            <p>
                Analytics include all event and attendance data stored in your Relius account, going
                back to when your church first started using the system. There is no data retention
                limit. Use the date range filter to select any historical period.
            </p>

            <h2>Related Topics</h2>
            <ul>
                <li>
                    <Link href="/resources/docs/events/scheduler">Events Scheduler</Link> -- create
                    and manage events that feed into analytics
                </li>
                <li>
                    <Link href="/resources/docs/events/check-in">Event Check-In</Link> -- record
                    attendance data used by the analytics tab
                </li>
                <li>
                    <Link href="/resources/docs/people/profiles">Person Profiles</Link> -- view
                    individual engagement metrics derived from event attendance
                </li>
                <li>
                    <Link href="/resources/docs/groups">Groups</Link> -- track group-level
                    attendance alongside event analytics
                </li>
            </ul>
        </div>
    );
}
