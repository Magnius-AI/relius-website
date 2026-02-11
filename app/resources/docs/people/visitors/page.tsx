import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Visitor Tracking | Relius Documentation',
    description: 'Capture first-time guest information, automate follow-up workflows, track visitor-to-member conversion, and ensure no newcomer falls through the cracks.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/people/visitors/',
    },
    openGraph: {
        title: 'Visitor Tracking | Relius Documentation',
        description: 'Capture first-time guest information, automate follow-up workflows, track visitor-to-member conversion, and ensure no newcomer falls through the cracks.',
        url: 'https://relius.ai/resources/docs/people/visitors/',
    },
    keywords: ['church visitor tracking', 'first-time guest', 'visitor follow-up', 'guest management', 'visitor to member conversion'],
};

export default function VisitorTrackingPage() {
    return (
        <div className="prose prose-slate max-w-4xl">
            <h1>Visitor Tracking</h1>

            <blockquote>
                <p>
                    <strong>Quick Summary</strong>: Visitor Tracking helps you capture information
                    about first-time guests, trigger automated follow-up workflows, and monitor how
                    visitors progress toward becoming regular members. New visitors appear in the
                    People Directory with a &quot;New Members&quot; filter and can be added to
                    follow-up pipelines for structured outreach.
                </p>
            </blockquote>

            <h2>Overview</h2>
            <p>
                When someone visits your church for the first time, their information can be captured
                through event check-in, a visitor card form, or manual entry by staff. These new
                records are automatically flagged with a recent join date, which makes them visible
                through the &quot;New Members&quot; toggle in the People Directory. From there, staff
                can review each visitor, add notes from initial conversations, and assign them to a
                follow-up pipeline.
            </p>
            <p>
                The goal of visitor tracking is to ensure that no first-time guest is overlooked.
                By combining the directory&apos;s new member filtering with pipelines and the New
                Member Contacts task system, your team gets a clear view of who has visited, what
                follow-up has been done, and where each person stands in the assimilation process.
            </p>

            <h2>Key Features</h2>
            <ul>
                <li>
                    <strong>Automatic New Member Flagging</strong> -- when a person is added to the
                    database, their join date is recorded. The &quot;New Members&quot; toggle in the
                    People Directory filters for recently added people, giving you an instant list
                    of visitors and newcomers.
                </li>
                <li>
                    <strong>Check-In Capture</strong> -- first-time guests who check in at an event
                    are automatically added to the people database. Their check-in record links them
                    to the specific event they attended.
                </li>
                <li>
                    <strong>Visitor Notes</strong> -- staff can add notes to a visitor&apos;s profile
                    immediately after a service. These notes capture details from initial
                    conversations: how they heard about the church, what they are looking for, prayer
                    requests, and similar information.
                </li>
                <li>
                    <strong>Pipeline Assignment</strong> -- add visitors to a follow-up pipeline (such
                    as &quot;New Visitor Follow-Up&quot; or &quot;New Member Assimilation&quot;) to
                    track them through a structured series of outreach steps.
                </li>
                <li>
                    <strong>Conversion Tracking</strong> -- as visitors attend more events, join
                    groups, and move through pipelines, their engagement metrics on the profile
                    Overview tab reflect their growing involvement. You can monitor the progression
                    from first visit to active member.
                </li>
                <li>
                    <strong>Dashboard Visibility</strong> -- the New Member Contacts widget on the
                    dashboard surfaces follow-up tasks for recent visitors, so nothing falls through
                    the cracks between Sundays.
                </li>
            </ul>

            <h2>Getting Started</h2>
            <ol>
                <li>
                    <strong>Add a visitor</strong> -- when a first-time guest arrives, add them to
                    the database using the &quot;+ Add Person&quot; button in the People Directory or
                    through the event check-in process. Enter at least their first name and any
                    contact information they provide.
                </li>
                <li>
                    <strong>Capture initial details</strong> -- open the new visitor&apos;s profile
                    and click &quot;+ Add Note&quot; to record information from your conversation:
                    how they found the church, any specific needs or interests, and whether they have
                    children or family members who also visited.
                </li>
                <li>
                    <strong>Add to a follow-up pipeline</strong> -- navigate to People &rarr;
                    Pipelines and add the visitor to your visitor follow-up pipeline. This places them
                    on a visual board where you can track each step of outreach.
                </li>
                <li>
                    <strong>Create a contact task</strong> -- assign a follow-up task through the New
                    Member Contacts system so a specific staff member or volunteer is responsible for
                    making the first personal contact within your target timeframe.
                </li>
                <li>
                    <strong>Monitor and follow up</strong> -- check the &quot;New Members&quot; filter
                    in the directory and the dashboard contact tasks regularly to ensure every visitor
                    receives timely outreach.
                </li>
            </ol>

            <h2>Best Practices</h2>
            <ul>
                <li>
                    <strong>Follow up within 48 hours</strong> -- research on guest retention
                    consistently shows that the speed of first contact matters. Aim to reach out to
                    every first-time visitor within two days of their visit.
                </li>
                <li>
                    <strong>Capture information at check-in</strong> -- use the event check-in system
                    to collect visitor details at the door. This reduces the chance of losing contact
                    information if a paper visitor card is misplaced.
                </li>
                <li>
                    <strong>Assign a specific person to each follow-up</strong> -- generic &quot;someone
                    should call them&quot; tasks get forgotten. Use the contact task system to assign
                    a named individual who is responsible for making the outreach.
                </li>
                <li>
                    <strong>Review the new members list weekly</strong> -- make it a habit to check
                    the &quot;New Members&quot; filter in the People Directory at least once a week.
                    This catches any visitors who were added but not yet assigned to a pipeline or
                    follow-up task.
                </li>
                <li>
                    <strong>Track the full journey</strong> -- use pipelines to model the complete
                    path from first visit to membership. This gives your leadership team data on how
                    long assimilation takes and where people tend to disengage.
                </li>
            </ul>

            <h2>Common Questions</h2>

            <h3>How do I distinguish visitors from existing members in the directory?</h3>
            <p>
                Use the &quot;New Members&quot; toggle in the People Directory filter bar. This
                filters the directory to show only people who were recently added. You can also
                check the &quot;Joined&quot; date on any person&apos;s profile to see when they
                were first entered into the system.
            </p>

            <h3>Can visitors check themselves in?</h3>
            <p>
                Yes. If you have the check-in system set up for an event, first-time guests can
                check in at a kiosk or by scanning a QR code. The system will prompt them to enter
                basic information (name, email, phone) which creates their person record
                automatically.
            </p>

            <h3>What if a visitor does not provide contact information?</h3>
            <p>
                You can still create a record with just a first name. Add a note to the profile
                describing the interaction so that if they return, staff can recognize them and
                request contact details at that time. The profile will have limited usefulness for
                automated follow-up until contact information is added.
            </p>

            <h3>How do I track whether a visitor has returned for a second visit?</h3>
            <p>
                Check the Attendance tab on the visitor&apos;s profile. Each time they check in to
                an event, it is recorded there. The engagement metrics on the Overview tab will also
                update to reflect their growing attendance. You can also use pipelines to manually
                move someone to a &quot;Returned&quot; stage after their second visit.
            </p>

            <h2>Related Topics</h2>
            <ul>
                <li>
                    <Link href="/resources/docs/people/directory">People Directory</Link> -- use the
                    New Members toggle to find recently added visitors
                </li>
                <li>
                    <Link href="/resources/docs/people/pipelines">Pipelines</Link> -- track visitors
                    through structured follow-up workflows
                </li>
                <li>
                    <Link href="/resources/docs/people/new-member-contacts">New Member Contacts</Link> -- assign
                    and manage follow-up tasks for new visitors
                </li>
                <li>
                    <Link href="/resources/docs/events/check-in">Event Check-In</Link> -- capture
                    visitor information at the door
                </li>
            </ul>
        </div>
    );
}
