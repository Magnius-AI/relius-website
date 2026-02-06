import Link from 'next/link';
import { Users, Search, UserPlus, Upload, Download, Settings, AlertCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Member Directory | Relius Documentation',
    description: 'Your church\'s central member database - search, manage, and organize member profiles with custom fields.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/people/directory/',
    },
    openGraph: {
        title: 'Member Directory | Relius Documentation',
        description: 'Your church\'s central member database - search, manage, and organize member profiles with custom fields.',
        url: 'https://relius.ai/resources/docs/people/directory/',
    },
    keywords: ['church member directory', 'member management', 'church database', 'member profiles'],
};

export default function MemberDirectoryPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        People Management
                    </span>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Member Directory
                </h1>

                <p className="text-xl text-slate-600">
                    Your church's central member database - search, filter, and manage everyone in your community.
                </p>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-blue-600" />
                    Overview
                </h2>
                <p>
                    The Member Directory is the heart of your church management system. It's where you store and access information about everyone in your community—from long-time members to first-time visitors. Unlike a paper directory that goes out of date the day it's printed, Relius keeps your directory current, searchable, and accessible to the right people on your team.
                </p>
                <p>
                    Whether you're a pastor trying to remember a member's spouse's name before Sunday service, a volunteer coordinator looking for people with specific skills, or an office administrator updating contact information, the Member Directory gives you instant access to the information you need. And with powerful search, custom fields, and bulk import tools, you can organize your directory exactly the way your church works.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Key Concepts</h2>
                <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Member Profiles</h3>
                        <p className="text-slate-700 mb-0">
                            Each person in your directory has a profile containing their contact information, family relationships, group memberships, giving history, attendance records, and care notes. Profiles can be as simple or detailed as you need.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Custom Fields</h3>
                        <p className="text-slate-700 mb-0">
                            Every church is unique. Custom fields let you track information specific to your ministry—spiritual gifts, dietary restrictions for events, preferred communication methods, baptism dates, or anything else that matters to you.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                        <h3 className="font-bold text-slate-900 mb-2">Family Units</h3>
                        <p className="text-slate-700 mb-0">
                            Members can be linked into family groups, making it easy to see household relationships, send communications to entire families, and manage family giving statements.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Getting Started</h2>

                <div className="space-y-8">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Search className="w-5 h-5 text-blue-600" />
                            Step 1: Viewing and Searching the Directory
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Navigate to <strong>People → Directory</strong> from the main menu. You'll see a list of all members with search and filter options at the top.
                        </p>
                        <ul className="space-y-2 text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <span><strong>Quick Search:</strong> Type a name, email, or phone number in the search bar for instant results</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <span><strong>Filters:</strong> Narrow results by group membership, age, campus, tags, or custom fields</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <span><strong>Saved Searches:</strong> Save frequently-used filter combinations for quick access</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <UserPlus className="w-5 h-5 text-blue-600" />
                            Step 2: Adding New Members
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Click the <strong>"Add Person"</strong> button in the top right. Fill in the basic information:
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                            <p className="text-slate-700 mb-2"><strong>Required fields:</strong></p>
                            <ul className="space-y-1 text-slate-700 ml-4">
                                <li>• First Name and Last Name</li>
                                <li>• Email or Phone (at least one contact method)</li>
                            </ul>
                            <p className="text-slate-700 mt-4 mb-2"><strong>Optional but recommended:</strong></p>
                            <ul className="space-y-1 text-slate-700 ml-4">
                                <li>• Birthday (enables birthday reminders and age-based sorting)</li>
                                <li>• Address (for mailings and mapping)</li>
                                <li>• Family relationships</li>
                                <li>• Campus (if you're multi-site)</li>
                                <li>• Member status (Member, Regular Attender, Visitor, etc.)</li>
                            </ul>
                        </div>
                        <p className="text-slate-700 mt-4">
                            Click <strong>Save</strong>, and the person is immediately searchable and available throughout Relius.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Settings className="w-5 h-5 text-blue-600" />
                            Step 3: Editing Profiles
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Click any member's name to open their profile. You'll see tabs for different types of information:
                        </p>
                        <ul className="space-y-2 text-slate-700">
                            <li><strong>Overview:</strong> Contact info, photo, and quick stats</li>
                            <li><strong>Family:</strong> Household members and relationships</li>
                            <li><strong>Groups:</strong> Group memberships and leadership roles</li>
                            <li><strong>Giving:</strong> Donation history and recurring gifts</li>
                            <li><strong>Attendance:</strong> Check-in history and patterns</li>
                            <li><strong>Care:</strong> Private pastoral notes and prayer requests</li>
                        </ul>
                        <p className="text-slate-700 mt-4">
                            Click the <strong>Edit</strong> button to update any information. Changes save automatically.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Upload className="w-5 h-5 text-blue-600" />
                            Step 4: Bulk Import
                        </h3>
                        <p className="text-slate-700 mb-4">
                            Migrating from another system or importing a spreadsheet? Use the bulk import tool:
                        </p>
                        <ol className="space-y-3 text-slate-700 list-decimal ml-6">
                            <li>Go to <strong>People → Directory → Import</strong></li>
                            <li>Download the CSV template to see the required format</li>
                            <li>Prepare your data in Excel or Google Sheets, matching the column headers exactly</li>
                            <li>Upload your CSV file</li>
                            <li>Review the preview to ensure data mapped correctly</li>
                            <li>Click <strong>Import</strong> to add all members at once</li>
                        </ol>
                        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
                            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-medium text-amber-900">Pro Tip</p>
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
                        Custom Fields
                    </summary>
                    <div className="mt-4 text-slate-700">
                        <p className="mb-3">
                            Create custom fields to track information unique to your church. Go to <strong>Settings → People → Custom Fields</strong>.
                        </p>
                        <p className="mb-3"><strong>Field types include:</strong></p>
                        <ul className="space-y-2 ml-4">
                            <li>• <strong>Text:</strong> Short answers (e.g., "Preferred Name")</li>
                            <li>• <strong>Number:</strong> Numeric values (e.g., "Years Attending")</li>
                            <li>• <strong>Date:</strong> Specific dates (e.g., "Baptism Date")</li>
                            <li>• <strong>Dropdown:</strong> Pick from a list (e.g., "T-Shirt Size")</li>
                            <li>• <strong>Checkbox:</strong> Yes/no values (e.g., "Email Newsletter Opt-In")</li>
                            <li>• <strong>Multi-select:</strong> Choose multiple options (e.g., "Spiritual Gifts")</li>
                        </ul>
                        <p className="mt-3 mb-0">
                            Custom fields appear on member profiles and can be used as filters in searches and reports.
                        </p>
                    </div>
                </details>

                <details className="bg-slate-50 rounded-lg p-6 mb-4">
                    <summary className="font-bold text-slate-900 cursor-pointer">
                        Merging Duplicate Profiles
                    </summary>
                    <div className="mt-4 text-slate-700">
                        <p className="mb-3">
                            Accidentally created a duplicate? Relius can merge profiles while preserving all historical data.
                        </p>
                        <ol className="space-y-2 list-decimal ml-6">
                            <li>Open the profile you want to <strong>keep</strong></li>
                            <li>Click <strong>Actions → Merge Duplicate</strong></li>
                            <li>Search for and select the duplicate profile</li>
                            <li>Review which fields to keep from each profile</li>
                            <li>Confirm the merge—the duplicate will be archived and all data will transfer</li>
                        </ol>
                        <p className="mt-3 mb-0">
                            Giving history, attendance records, group memberships, and care notes all transfer to the kept profile.
                        </p>
                    </div>
                </details>

                <details className="bg-slate-50 rounded-lg p-6 mb-4">
                    <summary className="font-bold text-slate-900 cursor-pointer">
                        Exporting Data
                    </summary>
                    <div className="mt-4 text-slate-700">
                        <p className="mb-3">
                            Export your directory to CSV for printing, creating mail merges, or backing up your data:
                        </p>
                        <ol className="space-y-2 list-decimal ml-6">
                            <li>Apply any filters to select the people you want to export</li>
                            <li>Click <strong>Export → CSV</strong></li>
                            <li>Choose which fields to include</li>
                            <li>Download the file</li>
                        </ol>
                        <p className="mt-3 mb-0">
                            Common uses: creating prayer lists, printing directories for small groups, or generating labels for mailings.
                        </p>
                    </div>
                </details>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Best Practices</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-1">✓</span>
                            <span><strong>Keep profiles current:</strong> Encourage staff to update information as they learn about changes in members' lives</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-1">✓</span>
                            <span><strong>Use tags wisely:</strong> Create tags for temporary groups or characteristics that don't fit into formal groups (e.g., "2024 Easter Invite", "Needs Ride")</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-1">✓</span>
                            <span><strong>Set permissions carefully:</strong> Not everyone needs access to all fields—use role-based permissions to protect sensitive information</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-1">✓</span>
                            <span><strong>Standardize data entry:</strong> Create guidelines for your team on how to format phone numbers, addresses, and names consistently</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-1">✓</span>
                            <span><strong>Regular cleanup:</strong> Schedule quarterly reviews to archive inactive members and merge duplicates</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Common Questions</h2>
                <div className="space-y-4">
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: Can members update their own information?</p>
                        <p className="text-slate-700 mb-0">
                            A: Yes! Members can log into their personal portal to update contact information, manage their family, and view their giving history. You control which fields they can edit.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: What's the difference between archiving and deleting a member?</p>
                        <p className="text-slate-700 mb-0">
                            A: Archiving keeps all historical data (giving, attendance) but removes the person from active searches and reports. Deleting permanently removes all records and should only be used if required by privacy laws (GDPR, etc.).
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-2">Q: How do I print a directory for our congregation?</p>
                        <p className="text-slate-700 mb-0">
                            A: Export to CSV, then use Excel or Word's mail merge feature to create a formatted printable directory. You can customize which fields appear.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Related Topics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/resources/docs/people/family/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Family Management</h3>
                        <p className="text-sm text-slate-600 mb-0">Organize members into household units</p>
                    </Link>
                    <Link href="/resources/docs/people/visitor/" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-1">Visitor Tracking</h3>
                        <p className="text-sm text-slate-600 mb-0">Capture and follow up with first-time guests</p>
                    </Link>
                </div>
            </div>
        </article>
    );
}
