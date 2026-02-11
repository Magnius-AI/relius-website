import Link from 'next/link';
import { Users, Search, UserPlus, Upload, AlertCircle, LayoutGrid, Eye, Pencil } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'People Directory | Relius Documentation',
    description: 'Search, filter, and manage everyone in your church from the People Directory — a card-based grid of profiles with role filtering and engagement tracking.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/people/directory/',
    },
    openGraph: {
        title: 'People Directory | Relius Documentation',
        description: 'Search, filter, and manage everyone in your church from the People Directory — a card-based grid of profiles with role filtering and engagement tracking.',
        url: 'https://relius.ai/resources/docs/people/directory/',
    },
    keywords: ['church people directory', 'people management', 'church database', 'member profiles', 'church directory'],
};

export default function PeopleDirectoryPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        People Management
                    </span>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    People Directory
                </h1>

                <p className="text-xl text-slate-600">
                    View, search, and manage everyone in your church from a single card-based directory.
                </p>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-blue-600" />
                    Overview
                </h2>
                <p>
                    The People Directory is the central place to find and manage everyone in your church. It lives under <strong>People &rarr; Directory</strong> in the sidebar and displays all people as a 3-column card grid. Each card shows a colored circle avatar with initials, the person's name, a role badge, their email, phone number, and a 3-dot menu for quick actions.
                </p>
                <p>
                    From this page you can search, filter by role, add new people, and click into any person's profile to see their engagement history, group memberships, attendance records, and notes.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Key Concepts</h2>
                <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Person Cards</h3>
                        <p className="text-slate-700 mb-0">
                            People are displayed in a responsive 3-column card grid. Each card shows an avatar circle with the person's initials, their full name, a role badge (e.g. Member, Volunteer, Admin), email address, phone number, and a 3-dot overflow menu.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Roles</h3>
                        <p className="text-slate-700 mb-0">
                            Every person has a role: <strong>Member</strong>, <strong>Volunteer</strong>, or <strong>Admin</strong>. Roles appear as color-coded badges on cards and in profiles. The "All Roles" dropdown on the directory page filters the grid by role.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Family Units</h3>
                        <p className="text-slate-700 mb-0">
                            People can be linked into families. The directory includes a "Families Only" toggle to show one card per household and a "With Children" toggle to filter for families that include children.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Directory Layout</h2>

                <div className="space-y-8">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <LayoutGrid className="w-5 h-5 text-blue-600" />
                            Card Grid
                        </h3>
                        <p className="text-slate-700 mb-4">
                            The directory uses a 3-column card grid (responsive down to 1 column on mobile). Each person card contains:
                        </p>
                        <ul className="space-y-2 text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>Colored circle avatar</strong> with the person's initials</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>Name</strong> displayed prominently</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>Role badge</strong> (Member, Volunteer, or Admin) with color coding</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>Email</strong> and <strong>Phone</strong> shown inline with icons</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>3-dot menu</strong> in the top-right corner for quick actions</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Search className="w-5 h-5 text-blue-600" />
                            Filters and Search
                        </h3>
                        <p className="text-slate-700 mb-4">
                            The filter bar sits above the card grid and includes the following controls:
                        </p>
                        <ul className="space-y-2 text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>Search bar:</strong> Type a name, email, or phone number to filter results instantly</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>All Roles dropdown:</strong> Filter by Member, Volunteer, or Admin</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>New Members toggle:</strong> Show only recently added people</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>Families Only toggle:</strong> Collapse the view to one card per household</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>With Children toggle:</strong> Filter for families that include children</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>Mailing Labels button:</strong> Generate printable mailing labels from the current filtered set</span>
                            </li>
                        </ul>
                    </section>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Getting Started</h2>

                <div className="space-y-8">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <UserPlus className="w-5 h-5 text-blue-600" />
                            Adding a New Person
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Click the green <strong>"+ Add Person"</strong> button in the top-right corner of the directory. Fill in the form fields:
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                            <p className="text-slate-700 mb-2"><strong>Required fields:</strong></p>
                            <ul className="space-y-1 text-slate-700 ml-4">
                                <li>&bull; First Name (required)</li>
                            </ul>
                            <p className="text-slate-700 mt-4 mb-2"><strong>Basic fields:</strong></p>
                            <ul className="space-y-1 text-slate-700 ml-4">
                                <li>&bull; Last Name</li>
                                <li>&bull; Email</li>
                                <li>&bull; Phone</li>
                                <li>&bull; Role (Member, Volunteer, or Admin)</li>
                            </ul>
                            <p className="text-slate-700 mt-4 mb-2"><strong>Advanced fields</strong> (expand "Show Advanced Fields"):</p>
                            <ul className="space-y-1 text-slate-700 ml-4">
                                <li>&bull; Middle Name, Nickname, Suffix</li>
                                <li>&bull; Gender, Marital Status</li>
                                <li>&bull; Birthdate, Anniversary</li>
                                <li>&bull; Family ID, Family Role</li>
                                <li>&bull; Address fields (Street, City, State, Zip)</li>
                            </ul>
                        </div>
                        <p className="text-slate-700 mt-4">
                            Click <strong>Save Changes</strong> to add the person. They will appear immediately in the card grid.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Eye className="w-5 h-5 text-blue-600" />
                            Viewing a Person's Profile
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Click any person's card to open their profile. The profile header shows:
                        </p>
                        <ul className="space-y-2 text-slate-700 mb-4">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span>Name and Role badge</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span>Email and Phone</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span>Joined date</span>
                            </li>
                        </ul>
                        <p className="text-slate-700 mb-4">
                            Below the header are four action buttons: <strong>Message</strong>, <strong>Add to Group</strong>, <strong>Edit</strong>, and <strong>+ Add Note</strong>.
                        </p>
                        <p className="text-slate-700 mb-2">
                            The profile has <strong>4 tabs</strong>:
                        </p>
                        <ul className="space-y-2 text-slate-700">
                            <li><strong>Overview:</strong> Engagement metrics (last 90 days), personal info, family, groups, and recent notes</li>
                            <li><strong>Groups:</strong> All groups this person belongs to</li>
                            <li><strong>Attendance:</strong> Check-in history and attendance patterns</li>
                            <li><strong>Notes:</strong> Pastoral and administrative notes attached to this person</li>
                        </ul>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <LayoutGrid className="w-5 h-5 text-blue-600" />
                            Overview Tab: Engagement Metrics
                        </h3>
                        <p className="text-slate-700 mb-4">
                            The Overview tab includes an <strong>Engagement (Last 90 Days)</strong> section with these metrics:
                        </p>
                        <ul className="space-y-2 text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>Check-ins:</strong> Total number of check-ins in the last 90 days</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>Events Attended:</strong> Count of distinct events attended</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>Attendance Rate:</strong> Percentage of attended vs. possible events</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>Engagement Level:</strong> A summary indicator of overall activity</span>
                            </li>
                        </ul>
                        <p className="text-slate-700 mt-4">
                            Below the engagement metrics, the Overview tab also shows sections for Personal Info, Family, Groups, and Recent Notes.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Pencil className="w-5 h-5 text-blue-600" />
                            Editing a Person
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Click the <strong>Edit</strong> button on a person's profile to open the edit modal. The modal includes:
                        </p>
                        <ul className="space-y-2 text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span>A note at the top: "All changes are logged to the audit trail for compliance"</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>Basic fields:</strong> First Name (required), Last Name, Email, Phone, Role dropdown</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">&bull;</span>
                                <span><strong>Show Advanced Fields</strong> expandable section: Middle Name, Nickname, Suffix, Gender, Marital Status, Birthdate, Anniversary, Family ID, Family Role, and address fields</span>
                            </li>
                        </ul>
                        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
                            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-medium text-amber-900">Changes do not auto-save</p>
                                <p className="text-amber-800 text-sm mb-0">
                                    You must click <strong>Save Changes</strong> to apply your edits. Click <strong>Cancel</strong> to discard. All saved changes are recorded in the audit trail.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Upload className="w-5 h-5 text-blue-600" />
                            Importing People
                        </h3>
                        <p className="text-slate-700 mb-4">
                            To bulk-import people from a spreadsheet or another system, go to <strong>Giving &rarr; Import Data</strong> in the sidebar (not People &rarr; Directory).
                        </p>
                        <ol className="space-y-3 text-slate-700 list-decimal ml-6">
                            <li>Navigate to <strong>Giving &rarr; Import Data</strong></li>
                            <li>Download the CSV template to see the expected column format</li>
                            <li>Prepare your data in Excel or Google Sheets, matching the column headers</li>
                            <li>Upload your CSV file</li>
                            <li>Review the preview to confirm data mapped correctly</li>
                            <li>Click <strong>Import</strong> to add all people at once</li>
                        </ol>
                        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
                            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-medium text-amber-900">Tip</p>
                                <p className="text-amber-800 text-sm mb-0">
                                    Start with a small test batch (10-20 people) to verify your formatting before importing your entire database.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Advanced Features</h2>

                <details className="bg-slate-50 rounded-lg p-6 mb-4">
                    <summary className="font-bold text-slate-900 cursor-pointer">
                        Mailing Labels
                    </summary>
                    <div className="mt-4 text-slate-700">
                        <p className="mb-3">
                            Use the <strong>Mailing Labels</strong> button in the directory filter bar to generate printable labels from the currently displayed set of people. Apply search or role filters first to narrow down the list, then click Mailing Labels to generate output.
                        </p>
                    </div>
                </details>

                <details className="bg-slate-50 rounded-lg p-6 mb-4">
                    <summary className="font-bold text-slate-900 cursor-pointer">
                        Family Filtering
                    </summary>
                    <div className="mt-4 text-slate-700">
                        <p className="mb-3">
                            The directory provides two family-related toggle buttons:
                        </p>
                        <ul className="space-y-2 ml-4">
                            <li>&bull; <strong>Families Only:</strong> Collapses the grid to show one card per household instead of one card per person</li>
                            <li>&bull; <strong>With Children:</strong> Filters the view to only show families that include children</li>
                        </ul>
                        <p className="mt-3 mb-0">
                            These toggles can be combined with the search bar and role dropdown for more specific filtering.
                        </p>
                    </div>
                </details>

                <details className="bg-slate-50 rounded-lg p-6 mb-4">
                    <summary className="font-bold text-slate-900 cursor-pointer">
                        Profile Action Buttons
                    </summary>
                    <div className="mt-4 text-slate-700">
                        <p className="mb-3">
                            When viewing a person's profile, four action buttons appear below the header:
                        </p>
                        <ul className="space-y-2 ml-4">
                            <li>&bull; <strong>Message:</strong> Send a direct message to this person</li>
                            <li>&bull; <strong>Add to Group:</strong> Assign this person to one or more groups</li>
                            <li>&bull; <strong>Edit:</strong> Open the edit modal to update their information</li>
                            <li>&bull; <strong>+ Add Note:</strong> Attach a pastoral or administrative note to their profile</li>
                        </ul>
                    </div>
                </details>

                <details className="bg-slate-50 rounded-lg p-6 mb-4">
                    <summary className="font-bold text-slate-900 cursor-pointer">
                        Audit Trail
                    </summary>
                    <div className="mt-4 text-slate-700">
                        <p className="mb-0">
                            Every edit made through the edit modal is logged to the audit trail for compliance. The edit modal displays a notice confirming this. This means you can review who changed what and when, providing accountability for sensitive data changes.
                        </p>
                    </div>
                </details>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Best Practices</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Keep profiles current:</strong> Update contact information and roles as they change rather than letting records go stale</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Use roles consistently:</strong> Assign Member, Volunteer, or Admin roles so that role-based filtering is useful</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Link families:</strong> Set Family ID and Family Role in advanced fields so that the Families Only and With Children filters work correctly</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Review engagement metrics:</strong> Check the Overview tab's 90-day engagement section periodically to identify people who may be disengaging</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-1">&#10003;</span>
                            <span><strong>Use notes for context:</strong> Add notes from the profile to record pastoral visits, prayer requests, or follow-up items so other staff have context</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Common Questions</h2>
                <div className="space-y-4">
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Where is the import tool for bringing in people from another system?</p>
                        <p className="text-slate-700 mb-0">
                            A: The import tool is located under <strong>Giving &rarr; Import Data</strong> in the sidebar, not under People &rarr; Directory.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Do edits save automatically?</p>
                        <p className="text-slate-700 mb-0">
                            A: No. When you click Edit on a profile, a modal opens. You must click <strong>Save Changes</strong> to apply your edits or <strong>Cancel</strong> to discard them. All saved changes are logged to the audit trail.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: What roles are available?</p>
                        <p className="text-slate-700 mb-0">
                            A: The role dropdown includes Member, Volunteer, and Admin. Roles appear as color-coded badges on directory cards and profile headers.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: How do I see a person's engagement history?</p>
                        <p className="text-slate-700 mb-0">
                            A: Open their profile and look at the Overview tab. The Engagement (Last 90 Days) section shows check-ins, events attended, attendance rate, and engagement level.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: How do I generate mailing labels?</p>
                        <p className="text-slate-700 mb-0">
                            A: Apply any filters you need (search, role, families only, etc.) then click the <strong>Mailing Labels</strong> button in the filter bar.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Topics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/resources/docs/people/family/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Family Management</h3>
                        <p className="text-sm text-slate-600 mb-0">Organize people into household units</p>
                    </Link>
                    <Link href="/resources/docs/groups" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Groups</h3>
                        <p className="text-sm text-slate-600 mb-0">Manage group memberships and leaders</p>
                    </Link>
                    <Link href="/resources/docs/pastoral-care/notes/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Pastoral Notes</h3>
                        <p className="text-sm text-slate-600 mb-0">Add and manage notes on people profiles</p>
                    </Link>
                    <Link href="/resources/docs/giving/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Giving & Import</h3>
                        <p className="text-sm text-slate-600 mb-0">Import data and manage giving records</p>
                    </Link>
                </div>
            </div>
        </article>
    );
}
