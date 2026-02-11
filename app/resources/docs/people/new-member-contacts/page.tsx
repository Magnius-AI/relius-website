import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'New Member Contacts | Relius Documentation',
    description: 'A dedicated task system for following up with new members. Track contact tasks, mark them complete, and ensure every new person gets a personal welcome.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/people/new-member-contacts/',
    },
    openGraph: {
        title: 'New Member Contacts | Relius Documentation',
        description: 'A dedicated task system for following up with new members. Track contact tasks, mark them complete, and ensure every new person gets a personal welcome.',
        url: 'https://relius.ai/resources/docs/people/new-member-contacts/',
    },
    keywords: ['new member follow-up', 'church contact tasks', 'member welcome', 'follow-up system', 'new visitor contact'],
};

export default function NewMemberContactsPage() {
    return (
        <div className="prose prose-slate max-w-4xl">
            <h1>New Member Contacts</h1>

            <blockquote>
                <p>
                    <strong>Quick Summary</strong>: New Member Contacts is a task-based system for
                    making sure every new person who joins your database receives personal follow-up.
                    Contact tasks appear prominently on the dashboard, can be assigned to specific
                    staff or volunteers, and are marked complete once the outreach has been made.
                    This feature works alongside Visitor Tracking and Pipelines to form a complete
                    assimilation workflow.
                </p>
            </blockquote>

            <h2>Overview</h2>
            <p>
                When someone is added to your church database -- whether through event check-in,
                manual entry, or data import -- they may need personal outreach from your team. New
                Member Contacts provides a structured way to create, assign, and track these
                follow-up tasks. Each task is linked to a specific person and assigned to a staff
                member or volunteer who is responsible for making the contact.
            </p>
            <p>
                The New Member Contacts widget is displayed on the main dashboard, giving it high
                visibility. Staff see their assigned contact tasks as soon as they log in, along
                with the new member&apos;s name and how long ago they were added. Tasks can be
                marked as complete directly from the dashboard or from the full contact list view.
                This ensures that follow-up is systematic rather than ad hoc.
            </p>

            <h2>Key Features</h2>
            <ul>
                <li>
                    <strong>Dashboard Widget</strong> -- the New Member Contacts section appears
                    prominently on the main dashboard. It lists pending contact tasks so staff can
                    see at a glance who needs outreach and who is responsible.
                </li>
                <li>
                    <strong>Task Assignment</strong> -- each contact task is assigned to a specific
                    person on your team. This creates clear accountability -- there is always a named
                    individual responsible for reaching out to each new member.
                </li>
                <li>
                    <strong>Linked Person Records</strong> -- every contact task is tied to the new
                    member&apos;s person record. Clicking the person&apos;s name in a task opens
                    their profile, where the assignee can review notes, contact information, and
                    attendance history before reaching out.
                </li>
                <li>
                    <strong>Completion Tracking</strong> -- when a contact has been made, the
                    assignee marks the task as complete. Completed tasks are moved out of the active
                    list and into a historical log so you can review past follow-up activity.
                </li>
                <li>
                    <strong>Due Date Awareness</strong> -- tasks display how many days have passed
                    since the person was added to the database. Tasks that have been open for an
                    extended period are visually highlighted so they do not go unnoticed.
                </li>
                <li>
                    <strong>Notes on Contact</strong> -- when completing a task, the assignee can
                    add a note describing the contact: what was discussed, whether the person had
                    questions, and any follow-up items. This note is attached to the person&apos;s
                    profile.
                </li>
            </ul>

            <h2>Getting Started</h2>
            <ol>
                <li>
                    <strong>Access the contact list</strong> -- from the dashboard, locate the New
                    Member Contacts widget. It shows pending tasks assigned to you. To see all
                    tasks across the team, navigate to the full New Member Contacts view.
                </li>
                <li>
                    <strong>Create a contact task</strong> -- when a new person is added to the
                    database, create a contact task by clicking the &quot;+ New Contact Task&quot;
                    button. Select the new member, assign a team member, and optionally set a note
                    about the context (e.g., &quot;First-time visitor on Sunday morning&quot;).
                </li>
                <li>
                    <strong>Make the contact</strong> -- the assigned person reviews the new
                    member&apos;s profile for context, then reaches out by phone, email, text, or
                    in person.
                </li>
                <li>
                    <strong>Mark complete</strong> -- after the outreach is made, mark the task as
                    complete. Add a note summarizing what was discussed and any next steps.
                </li>
                <li>
                    <strong>Review regularly</strong> -- during weekly staff meetings, review the
                    New Member Contacts list. Identify any overdue tasks and reassign them if the
                    original assignee is unavailable.
                </li>
            </ol>

            <h2>Best Practices</h2>
            <ul>
                <li>
                    <strong>Create tasks the same day</strong> -- when a visitor is added to the
                    database, create the contact task immediately. Delaying task creation increases
                    the risk that the follow-up is forgotten entirely.
                </li>
                <li>
                    <strong>Assign to people who were present</strong> -- if possible, assign the
                    contact task to someone who interacted with the visitor during their visit. A
                    familiar voice or face makes the follow-up more personal.
                </li>
                <li>
                    <strong>Add notes before and after contact</strong> -- before reaching out,
                    review existing notes on the person&apos;s profile. After making contact, add
                    a completion note so other staff have context for future interactions.
                </li>
                <li>
                    <strong>Set a team standard for response time</strong> -- agree as a team on a
                    target (e.g., contact within 48 hours). Use the age indicator on tasks to spot
                    any that have exceeded this window.
                </li>
                <li>
                    <strong>Connect tasks to pipelines</strong> -- after completing the initial
                    contact task, add the person to a follow-up pipeline for continued tracking.
                    The contact task handles the first touch; the pipeline handles the ongoing
                    journey.
                </li>
            </ul>

            <h2>Common Questions</h2>

            <h3>Do contact tasks get created automatically when a new person is added?</h3>
            <p>
                Contact tasks are not created automatically by default. A staff member creates them
                manually so they can assign the appropriate person and add context. This ensures
                tasks are intentional and assigned to someone who can act on them.
            </p>

            <h3>Can I reassign a contact task to someone else?</h3>
            <p>
                Yes. Open the contact task and change the assignee. This is useful when the
                originally assigned person is unavailable or when a different team member has a
                better connection with the new member.
            </p>

            <h3>What happens after a task is marked complete?</h3>
            <p>
                Completed tasks are removed from the active dashboard widget and moved to a
                historical log. The completion note is attached to the person&apos;s profile under
                their Notes tab. The person remains in the database and can be added to pipelines
                or groups for continued engagement.
            </p>

            <h3>How does this differ from Pipelines?</h3>
            <p>
                New Member Contacts is a single-step task system focused on the first point of
                contact. It answers the question &quot;Has someone reached out to this new
                person?&quot; Pipelines are multi-step workflows for longer processes like
                assimilation or volunteer onboarding. The two features complement each other:
                use a contact task for the initial outreach, then add the person to a pipeline
                for ongoing tracking.
            </p>

            <h2>Related Topics</h2>
            <ul>
                <li>
                    <Link href="/resources/docs/people/visitors">Visitor Tracking</Link> -- capture
                    and manage first-time guest information
                </li>
                <li>
                    <Link href="/resources/docs/people/pipelines">Pipelines</Link> -- track people
                    through multi-step workflows after initial contact
                </li>
                <li>
                    <Link href="/resources/docs/people/profiles">Person Profiles</Link> -- view
                    notes, attendance, and engagement data before making contact
                </li>
                <li>
                    <Link href="/resources/docs/getting-started/dashboard">Dashboard</Link> -- the
                    main screen where contact tasks are displayed
                </li>
            </ul>
        </div>
    );
}
