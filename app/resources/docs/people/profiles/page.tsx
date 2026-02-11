import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Person Profiles | Relius Documentation',
    description: 'View and manage individual person profiles including contact info, engagement metrics, group memberships, attendance history, and care notes.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/people/profiles/',
    },
    openGraph: {
        title: 'Person Profiles | Relius Documentation',
        description: 'View and manage individual person profiles including contact info, engagement metrics, group memberships, attendance history, and care notes.',
        url: 'https://relius.ai/resources/docs/people/profiles/',
    },
    keywords: ['church member profile', 'person profile', 'member details', 'engagement metrics', 'church CRM profile'],
};

export default function PersonProfilesPage() {
    return (
        <div className="prose prose-slate max-w-4xl">
            <h1>Person Profiles</h1>

            <blockquote>
                <p>
                    <strong>Quick Summary</strong>: A person profile is the central view for an individual in your
                    database. It displays their contact information, role, engagement metrics, group memberships,
                    attendance history, and care notes. Use the Edit button to update details through a modal form
                    where all changes are logged to an audit trail.
                </p>
            </blockquote>

            <h2>Overview</h2>
            <p>
                When you click a person's name anywhere in Relius (the directory, a group roster, an attendance
                list, or a search result), you open their person profile. This is the single place where all
                information about that individual comes together: who they are, how they are connected to your
                church, and how engaged they have been over time.
            </p>
            <p>
                The profile is organized into a header section with quick-access actions and four tabs that group
                related information. Staff with the appropriate permissions can view and edit profile data, add
                notes, and manage group assignments directly from this screen.
            </p>

            <h2>Profile Layout</h2>

            <h3>Profile Header</h3>
            <p>
                The top of every profile displays identifying information and action buttons at a glance.
            </p>
            <ul>
                <li><strong>Name</strong> -- the person's full display name</li>
                <li><strong>Role badge</strong> -- a label indicating their role: Member, Volunteer, or Admin</li>
                <li><strong>Email</strong> -- primary email address</li>
                <li><strong>Phone</strong> -- primary phone number</li>
                <li><strong>Joined date</strong> -- the date this person was added to the database</li>
            </ul>

            <h3>Header Action Buttons</h3>
            <p>
                Four action buttons appear in the profile header. Each performs an immediate action or opens a
                related form.
            </p>
            <ul>
                <li><strong>Message</strong> -- opens the messaging interface to send an email or SMS to this person</li>
                <li><strong>Add to Group</strong> -- opens a selector to assign this person to one or more groups</li>
                <li><strong>Edit</strong> -- opens the Edit Person modal (described below) to update profile fields</li>
                <li><strong>+ Add Note</strong> -- opens the note creation form to attach a new note to this profile</li>
            </ul>

            <h2>Tabs</h2>
            <p>
                Below the header, the profile is divided into four tabs. Click a tab name to switch between them.
            </p>

            <h3>Overview Tab</h3>
            <p>
                The Overview tab is the default view when you open a profile. It provides a high-level snapshot of
                the person's engagement and key personal details.
            </p>
            <p>
                <strong>Engagement (Last 90 Days)</strong> -- a dashboard section at the top of the Overview tab
                that summarizes recent activity. It contains four metrics:
            </p>
            <ul>
                <li><strong>Check-ins</strong> -- the number of times this person checked in during the last 90 days</li>
                <li><strong>Events Attended</strong> -- the count of distinct events they attended</li>
                <li><strong>Attendance Rate</strong> -- a percentage representing how often they attended relative to the events available to them</li>
                <li><strong>Engagement Level</strong> -- a calculated label of Low, Medium, or High based on the metrics above</li>
            </ul>
            <p>
                Below the engagement dashboard, the Overview tab displays three additional sections:
            </p>
            <ul>
                <li>
                    <strong>Personal Information</strong> -- demographic details such as Gender and other
                    identifying fields stored on the profile
                </li>
                <li>
                    <strong>Family</strong> -- shows the person's Role in Family (e.g., Primary, Spouse, Child)
                    and their Family ID, which links them to a household unit. Click the Family ID to navigate to
                    the family record.
                </li>
                <li>
                    <strong>Groups</strong> -- a list of the groups this person belongs to, with links to each
                    group's detail page
                </li>
                <li>
                    <strong>Recent Notes</strong> -- the most recent care notes attached to this profile, shown
                    in reverse chronological order
                </li>
            </ul>

            <h3>Groups Tab</h3>
            <p>
                The Groups tab shows all group memberships for this person. Each entry displays the group name,
                type, their role within the group (member, leader, etc.), and the date they joined. Use this tab
                to get a complete picture of how someone is connected across your church's groups and teams.
            </p>

            <h3>Attendance Tab</h3>
            <p>
                The Attendance tab lists check-in and attendance history for this person. Records include the
                event name, date, check-in time, and any relevant notes. This tab is useful for reviewing
                participation patterns over time and identifying periods of absence that may warrant follow-up.
            </p>

            <h3>Notes Tab</h3>
            <p>
                The Notes tab contains all notes associated with this person: care notes, prayer requests,
                pastoral notes, and general notes added by staff. Notes are displayed in reverse chronological
                order and include the author, date, and note type. Use the <strong>+ Add Note</strong> button
                in the header to create a new entry at any time.
            </p>

            <h2>Edit Person Modal</h2>
            <p>
                Clicking the <strong>Edit</strong> button in the profile header opens a modal dialog for updating
                profile fields. The modal includes a notice at the top:
            </p>
            <blockquote>
                <p>"All changes are logged to the audit trail for compliance."</p>
            </blockquote>
            <p>
                This means every edit you make is recorded with your user identity and a timestamp, so your
                church maintains a complete history of data changes.
            </p>

            <h3>Basic Fields</h3>
            <p>The following fields are visible by default when you open the Edit modal:</p>
            <ul>
                <li><strong>First Name</strong> (required) -- the person's given name. This is the only field that must be filled in.</li>
                <li><strong>Last Name</strong> -- family name</li>
                <li><strong>Email</strong> -- primary email address</li>
                <li><strong>Phone</strong> -- primary phone number</li>
                <li><strong>Role</strong> -- a dropdown to set the person's role (Member, Volunteer, Admin, etc.)</li>
            </ul>

            <h3>Advanced Fields</h3>
            <p>
                Click <strong>"Show Advanced Fields"</strong> to expand a collapsible section with additional
                fields. These fields are hidden by default to keep the form compact for quick edits.
            </p>
            <ul>
                <li><strong>Middle Name</strong></li>
                <li><strong>Nickname</strong></li>
                <li><strong>Suffix</strong></li>
                <li><strong>Gender</strong></li>
                <li><strong>Marital Status</strong></li>
                <li><strong>Birthdate</strong></li>
                <li><strong>Anniversary</strong></li>
                <li><strong>Family ID</strong> -- links this person to a family/household unit</li>
                <li><strong>Family Role</strong> -- defaults to "Primary"; indicates their position in the family (Primary, Spouse, Child, etc.)</li>
                <li>
                    <strong>Address</strong> -- a group of sub-fields:
                    <ul>
                        <li>Street</li>
                        <li>Line 2</li>
                        <li>City</li>
                        <li>State</li>
                        <li>Postal Code</li>
                        <li>Country</li>
                    </ul>
                </li>
            </ul>

            <h3>Saving Changes</h3>
            <p>
                The Edit Person modal does <strong>not</strong> auto-save. You must explicitly click{' '}
                <strong>Save Changes</strong> to commit your edits or <strong>Cancel</strong> to discard them
                and close the modal. If you close the modal without saving, no changes are applied.
            </p>

            <h2>Engagement Metrics Explained</h2>
            <p>
                The Engagement (Last 90 Days) dashboard on the Overview tab provides a quick read on how active
                a person has been recently. Here is how each metric works:
            </p>
            <ul>
                <li>
                    <strong>Check-ins</strong> -- counts every time the person was checked in through the check-in
                    system at a service or event. Multiple check-ins on the same day (e.g., morning service and
                    evening service) are counted separately.
                </li>
                <li>
                    <strong>Events Attended</strong> -- counts the distinct calendar events at which at least one
                    check-in was recorded for this person. If a person checked in twice at the same event, it
                    counts as one event attended.
                </li>
                <li>
                    <strong>Attendance Rate</strong> -- calculated as the number of events attended divided by the
                    total number of events the person was expected or eligible to attend, expressed as a
                    percentage.
                </li>
                <li>
                    <strong>Engagement Level</strong> -- a summary label derived from the attendance rate and
                    check-in frequency:
                    <ul>
                        <li><strong>High</strong> -- consistently attending most available events</li>
                        <li><strong>Medium</strong> -- attending regularly but missing some events</li>
                        <li><strong>Low</strong> -- attending infrequently or not at all recently</li>
                    </ul>
                </li>
            </ul>
            <p>
                These metrics are recalculated on a rolling 90-day window. They update automatically as new
                check-in data comes in.
            </p>

            <h2>Best Practices</h2>
            <ul>
                <li>
                    <strong>Review profiles before pastoral visits</strong> -- check the Overview tab to see
                    recent engagement, group involvement, and the latest notes before meeting with someone. This
                    helps you arrive informed and prepared.
                </li>
                <li>
                    <strong>Use notes consistently</strong> -- after phone calls, hospital visits, or counseling
                    sessions, add a note to the profile so other authorized staff have context for future
                    interactions.
                </li>
                <li>
                    <strong>Monitor engagement levels</strong> -- periodically review people with a Low engagement
                    level. A drop in engagement can be an early signal that someone needs outreach or pastoral
                    care.
                </li>
                <li>
                    <strong>Keep contact information current</strong> -- when you learn about a new phone number,
                    address change, or email update, edit the profile right away so communications reach the
                    right place.
                </li>
                <li>
                    <strong>Link people to families</strong> -- set the Family ID and Family Role fields so
                    household relationships are visible. This helps with family-based communication and reporting.
                </li>
                <li>
                    <strong>Use the audit trail</strong> -- if there is ever a question about when or why a
                    record was changed, the audit trail logged by the Edit modal provides a complete history.
                </li>
                <li>
                    <strong>Add to groups from the profile</strong> -- the "Add to Group" button in the header
                    is the fastest way to assign someone to a group without leaving their profile.
                </li>
            </ul>

            <h2>Related Topics</h2>
            <ul>
                <li>
                    <Link href="/resources/docs/people/directory">Member Directory</Link> -- search, filter, and
                    browse all people in your database
                </li>
                <li>
                    <Link href="/resources/docs/people/families">Family Management</Link> -- manage household
                    units and family relationships
                </li>
                <li>
                    <Link href="/resources/docs/groups">Groups</Link> -- create and manage groups, track group
                    attendance, and assign leaders
                </li>
            </ul>
        </div>
    );
}
