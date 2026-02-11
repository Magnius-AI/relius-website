import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pipelines | Relius Documentation',
    description: 'Use visual Kanban-style workflow boards to track people through processes like new member assimilation, baptism preparation, volunteer onboarding, and leadership development.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/people/pipelines/',
    },
    openGraph: {
        title: 'Pipelines | Relius Documentation',
        description: 'Use visual Kanban-style workflow boards to track people through processes like new member assimilation, baptism preparation, volunteer onboarding, and leadership development.',
        url: 'https://relius.ai/resources/docs/people/pipelines/',
    },
    keywords: ['church pipeline', 'kanban board', 'member assimilation', 'volunteer onboarding', 'church workflow'],
};

export default function PipelinesPage() {
    return (
        <div className="prose prose-slate max-w-4xl">
            <h1>Pipelines</h1>

            <blockquote>
                <p>
                    <strong>Quick Summary</strong>: Pipelines are visual Kanban-style boards that
                    let you track people as they move through multi-step processes. Each pipeline
                    consists of named stages displayed as columns, and people appear as cards within
                    those columns. Use pipelines for new member assimilation, baptism preparation,
                    volunteer onboarding, leadership development, or any process that involves
                    moving a person through a sequence of steps.
                </p>
            </blockquote>

            <h2>Overview</h2>
            <p>
                The Pipelines feature is located under People &rarr; Pipelines in the sidebar. It
                presents a board layout where each pipeline is a set of columns representing stages.
                People are added to a pipeline and placed in the first stage. As they complete each
                step, you drag their card to the next column or use the move action to advance them.
                This gives staff a clear, at-a-glance view of where everyone stands in any given
                process.
            </p>
            <p>
                You can create as many pipelines as you need. Each one is independent and has its
                own set of stages. A person can exist in multiple pipelines simultaneously -- for
                example, someone might be in both the &quot;New Member Assimilation&quot; pipeline
                and the &quot;Volunteer Onboarding&quot; pipeline at the same time. The board
                interface includes a &quot;+ New Pipeline&quot; button to create additional pipelines
                and an &quot;Add people&quot; action to place individuals into a pipeline.
            </p>

            <h2>Key Features</h2>
            <ul>
                <li>
                    <strong>Card-Based Board Layout</strong> -- each pipeline is displayed as a
                    horizontal board with columns for each stage. People appear as cards showing
                    their name and any relevant details. This layout is similar to Kanban tools
                    and provides an intuitive drag-and-drop interface.
                </li>
                <li>
                    <strong>Custom Stages</strong> -- when creating a pipeline, you define the
                    stages that make sense for your process. For example, a &quot;Baptism
                    Preparation&quot; pipeline might have stages like &quot;Interested&quot;,
                    &quot;Class Enrolled&quot;, &quot;Class Completed&quot;, &quot;Scheduled&quot;,
                    and &quot;Baptized&quot;.
                </li>
                <li>
                    <strong>+ New Pipeline Button</strong> -- click this to create a new pipeline
                    from scratch. You will name the pipeline and define its stages. Pipelines can be
                    renamed or reorganized after creation.
                </li>
                <li>
                    <strong>Add People</strong> -- use the &quot;Add people&quot; action on any
                    pipeline to search for and add individuals. Added people are placed in the first
                    stage by default.
                </li>
                <li>
                    <strong>Drag-and-Drop Movement</strong> -- move a person&apos;s card from one
                    stage to the next by dragging it between columns. This updates their position
                    in the pipeline immediately.
                </li>
                <li>
                    <strong>Multiple Pipeline Membership</strong> -- a single person can be tracked
                    in several pipelines at once without conflict. Each pipeline maintains its own
                    independent state for that person.
                </li>
                <li>
                    <strong>Pipeline History</strong> -- the system records when a person was added
                    to a pipeline and when they moved between stages, giving you a timeline of their
                    progress.
                </li>
            </ul>

            <h2>Getting Started</h2>
            <ol>
                <li>
                    <strong>Navigate to Pipelines</strong> -- go to People &rarr; Pipelines in the
                    sidebar. If no pipelines exist yet, you will see an empty state with a prompt to
                    create your first pipeline.
                </li>
                <li>
                    <strong>Create a pipeline</strong> -- click &quot;+ New Pipeline&quot; and enter
                    a name (e.g., &quot;New Visitor Follow-Up&quot;). Then define the stages for
                    your process. Start simple -- you can always add or rename stages later.
                </li>
                <li>
                    <strong>Add people to the pipeline</strong> -- click &quot;Add people&quot; and
                    search for the individuals you want to track. They will be placed in the first
                    stage of the pipeline.
                </li>
                <li>
                    <strong>Move people through stages</strong> -- as each person completes a step,
                    drag their card to the next column. The board updates in real time.
                </li>
                <li>
                    <strong>Review regularly</strong> -- check the pipeline board during team
                    meetings to identify people who are stuck in a stage, need follow-up, or are
                    ready to move forward.
                </li>
            </ol>

            <h2>Common Pipeline Examples</h2>
            <ul>
                <li>
                    <strong>New Member Assimilation</strong> -- stages: First Visit &rarr; Follow-Up
                    Made &rarr; Second Visit &rarr; Joined a Group &rarr; Integrated
                </li>
                <li>
                    <strong>Baptism Preparation</strong> -- stages: Interested &rarr; Class Enrolled
                    &rarr; Class Completed &rarr; Scheduled &rarr; Baptized
                </li>
                <li>
                    <strong>Volunteer Onboarding</strong> -- stages: Applied &rarr; Interview &rarr;
                    Background Check &rarr; Training &rarr; Active Volunteer
                </li>
                <li>
                    <strong>Leadership Development</strong> -- stages: Nominated &rarr; Mentoring
                    &rarr; Shadowing &rarr; Leading with Support &rarr; Independent Leader
                </li>
            </ul>

            <h2>Best Practices</h2>
            <ul>
                <li>
                    <strong>Keep stages to five or fewer</strong> -- boards with too many columns
                    become difficult to scan at a glance. If a process has more than five steps,
                    consider whether some steps can be combined or whether you need two separate
                    pipelines.
                </li>
                <li>
                    <strong>Name stages with clear action verbs or states</strong> -- use names
                    that make it obvious what has happened or what needs to happen next, such as
                    &quot;Follow-Up Made&quot; or &quot;Awaiting Interview&quot; rather than vague
                    labels like &quot;Stage 2&quot;.
                </li>
                <li>
                    <strong>Review pipelines weekly</strong> -- during staff or volunteer meetings,
                    pull up the pipeline board and walk through each column. Identify anyone who has
                    been in the same stage for an extended period and discuss next steps.
                </li>
                <li>
                    <strong>Archive completed people</strong> -- once someone reaches the final stage
                    and the process is complete, remove them from the pipeline to keep the board
                    focused on active cases. Their pipeline history is preserved on their profile.
                </li>
                <li>
                    <strong>Start with one pipeline</strong> -- if your team is new to pipelines,
                    begin with a single use case (such as new visitor follow-up) and expand to
                    additional pipelines once the team is comfortable with the workflow.
                </li>
            </ul>

            <h2>Common Questions</h2>

            <h3>Can I reorder the stages after creating a pipeline?</h3>
            <p>
                Yes. You can rename, reorder, add, or remove stages from an existing pipeline. People
                who are already in the pipeline will remain in their current stage. If you remove a
                stage that has people in it, you will be prompted to move them to another stage first.
            </p>

            <h3>Is there a limit to how many pipelines I can create?</h3>
            <p>
                There is no hard limit on the number of pipelines. Create as many as your church
                processes require. However, keeping the total manageable (typically under ten) helps
                ensure that each pipeline gets regular attention from your team.
            </p>

            <h3>Can I see which pipelines a person is in from their profile?</h3>
            <p>
                Yes. A person&apos;s profile shows their active pipeline memberships, including which
                stage they are in for each pipeline. This provides context when viewing or editing
                a person&apos;s record without needing to navigate to the pipeline board.
            </p>

            <h3>How do pipelines differ from groups?</h3>
            <p>
                Groups represent ongoing memberships (small groups, teams, classes) where people
                belong and participate over time. Pipelines represent processes with a beginning and
                an end -- a person enters the pipeline, moves through stages, and eventually
                completes or exits. Use groups for belonging and pipelines for progression.
            </p>

            <h2>Related Topics</h2>
            <ul>
                <li>
                    <Link href="/resources/docs/people/visitors">Visitor Tracking</Link> -- capture
                    and follow up with first-time guests
                </li>
                <li>
                    <Link href="/resources/docs/people/new-member-contacts">New Member Contacts</Link> -- task
                    system for follow-up with new people
                </li>
                <li>
                    <Link href="/resources/docs/people/directory">People Directory</Link> -- find
                    and manage people to add to pipelines
                </li>
                <li>
                    <Link href="/resources/docs/groups">Groups</Link> -- manage ongoing memberships
                    and teams
                </li>
            </ul>
        </div>
    );
}
