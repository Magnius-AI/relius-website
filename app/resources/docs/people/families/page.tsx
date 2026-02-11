import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Family Management | Relius Documentation',
    description: 'Link people into family and household units, manage relationships like spouse, child, and parent, send family-level communications, and generate family giving statements.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/people/families/',
    },
    openGraph: {
        title: 'Family Management | Relius Documentation',
        description: 'Link people into family and household units, manage relationships like spouse, child, and parent, send family-level communications, and generate family giving statements.',
        url: 'https://relius.ai/resources/docs/people/families/',
    },
    keywords: ['church family management', 'household units', 'family relationships', 'family giving statement', 'church family directory'],
};

export default function FamilyManagementPage() {
    return (
        <div className="prose prose-slate max-w-4xl">
            <h1>Family Management</h1>

            <blockquote>
                <p>
                    <strong>Quick Summary</strong>: Family Management lets you link individual person
                    records into household units. Each family has a shared Family ID and members are
                    assigned roles such as Primary, Spouse, or Child. You can send communications at
                    the family level, view combined attendance, and generate consolidated giving
                    statements per household.
                </p>
            </blockquote>

            <h2>Overview</h2>
            <p>
                Relius organizes people into family units using a shared Family ID. When two or more
                person records share the same Family ID, they appear together as a household. Each
                person within the family is assigned a Family Role -- Primary, Spouse, Child, or
                Other -- which determines how they are listed in the family view and who receives
                family-level communications by default.
            </p>
            <p>
                Family records are visible from the People Directory (using the &quot;Families
                Only&quot; toggle), from individual person profiles under the Overview tab&apos;s
                Family section, and in giving reports where contributions from all family members
                can be combined into a single household statement. The address stored on the Primary
                member is treated as the family mailing address unless overridden on other members.
            </p>

            <h2>Key Features</h2>
            <ul>
                <li>
                    <strong>Shared Family ID</strong> -- every person in a household shares the same
                    Family ID. This ID is set in the Advanced Fields section of the person edit modal.
                </li>
                <li>
                    <strong>Family Roles</strong> -- each person is assigned a role within the family:
                    Primary (head of household), Spouse, Child, or Other. The Primary member&apos;s
                    contact information is used as the default for family-level mailings.
                </li>
                <li>
                    <strong>Family View in Directory</strong> -- toggle &quot;Families Only&quot; in the
                    People Directory to collapse individual cards into one card per household. The card
                    displays the family name and a count of members.
                </li>
                <li>
                    <strong>Combined Giving Statements</strong> -- when generating giving receipts or
                    year-end statements, you can choose to consolidate contributions from all members
                    of a family into a single document addressed to the household.
                </li>
                <li>
                    <strong>Family Communications</strong> -- send an email or SMS to an entire
                    household at once. By default, family messages are delivered to the Primary and
                    Spouse members. Child members are excluded unless explicitly included.
                </li>
                <li>
                    <strong>Children Filtering</strong> -- the &quot;With Children&quot; toggle in the
                    directory filters for families that include at least one member with the Child role.
                    This is useful for children&apos;s ministry planning.
                </li>
            </ul>

            <h2>Getting Started</h2>
            <ol>
                <li>
                    <strong>Open a person profile</strong> -- navigate to the People Directory and click
                    on any person who belongs to a household you want to create or update.
                </li>
                <li>
                    <strong>Edit the profile</strong> -- click the Edit button in the profile header.
                    Expand &quot;Show Advanced Fields&quot; to reveal the Family ID and Family Role
                    fields.
                </li>
                <li>
                    <strong>Set the Family ID</strong> -- enter a Family ID. If this is a new family,
                    Relius will create the household automatically. If you enter an existing Family ID,
                    this person will be added to that household.
                </li>
                <li>
                    <strong>Assign the Family Role</strong> -- select the appropriate role from the
                    dropdown: Primary, Spouse, Child, or Other. Each family should have exactly one
                    Primary member.
                </li>
                <li>
                    <strong>Repeat for other family members</strong> -- edit the remaining household
                    members and assign them the same Family ID with their respective roles.
                </li>
                <li>
                    <strong>Verify in the directory</strong> -- return to the People Directory and
                    enable the &quot;Families Only&quot; toggle. The new household should appear as a
                    single card.
                </li>
            </ol>

            <h2>Best Practices</h2>
            <ul>
                <li>
                    <strong>Designate one Primary per family</strong> -- the Primary role determines
                    whose address is used for mailings and whose name appears first on family
                    statements. Having exactly one Primary prevents ambiguity.
                </li>
                <li>
                    <strong>Keep addresses consistent</strong> -- if all family members live at the
                    same address, update the address on the Primary member. Other members will inherit
                    it for family communications unless they have their own address set.
                </li>
                <li>
                    <strong>Use the Child role for minors</strong> -- marking young members as Child
                    ensures they are excluded from family-level emails by default and appear correctly
                    when using the &quot;With Children&quot; filter.
                </li>
                <li>
                    <strong>Review family links during data imports</strong> -- when importing people
                    from a CSV or another system, verify that Family IDs are assigned correctly. A
                    mismatched ID will place a person in the wrong household.
                </li>
                <li>
                    <strong>Generate combined statements annually</strong> -- at year-end, use the
                    family giving statement option so households receive one consolidated document
                    rather than separate statements for each member.
                </li>
            </ul>

            <h2>Common Questions</h2>

            <h3>How do I move someone to a different family?</h3>
            <p>
                Open the person&apos;s profile, click Edit, expand Advanced Fields, and change their
                Family ID to the ID of the new household. Save changes. They will immediately appear
                under the new family and be removed from the old one.
            </p>

            <h3>Can a person belong to more than one family?</h3>
            <p>
                No. Each person record has a single Family ID field. If someone needs to appear in
                multiple households (for example, a college student connected to both a campus group
                and their parents&apos; household), you would choose the primary household and use
                groups or tags to represent the secondary connection.
            </p>

            <h3>What happens if no one in a family is set as Primary?</h3>
            <p>
                The system will still group the members together, but family-level communications
                and statements will not have a default recipient. It is recommended to always assign
                one Primary member per household.
            </p>

            <h3>How are family giving statements different from individual statements?</h3>
            <p>
                Individual statements list contributions from a single person. Family statements
                combine all contributions from every member who shares the same Family ID into one
                document. The statement is addressed to the Primary member (and Spouse if present)
                and includes a breakdown by contributor within the household.
            </p>

            <h2>Related Topics</h2>
            <ul>
                <li>
                    <Link href="/resources/docs/people/directory">People Directory</Link> -- search
                    and filter people, use the Families Only toggle
                </li>
                <li>
                    <Link href="/resources/docs/people/profiles">Person Profiles</Link> -- view and
                    edit individual profiles including Family ID and Family Role
                </li>
                <li>
                    <Link href="/resources/docs/giving/receipts">Giving Receipts</Link> -- generate
                    individual and family giving statements
                </li>
                <li>
                    <Link href="/resources/docs/communications/email">Email</Link> -- send
                    family-level communications
                </li>
            </ul>
        </div>
    );
}
