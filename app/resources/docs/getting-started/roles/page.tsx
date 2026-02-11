import Link from 'next/link';
import { Shield, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'User Roles & Permissions | Relius Documentation',
    description: 'Understand the admin and super_admin roles in Relius, how to manage users, invite team members, transfer super admin ownership, and follow security best practices.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/getting-started/roles/',
    },
    openGraph: {
        title: 'User Roles & Permissions | Relius Documentation',
        description: 'Understand the admin and super_admin roles in Relius, how to manage users, invite team members, transfer super admin ownership, and follow security best practices.',
        url: 'https://relius.ai/resources/docs/getting-started/roles/',
    },
    keywords: ['user roles', 'permissions', 'admin', 'super admin', 'user management', 'Relius'],
};

export default function UserRolesPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <Link href="/resources/docs" className="hover:text-blue-600">Documentation</Link>
                    <span>→</span>
                    <Link href="/resources/docs/getting-started" className="hover:text-blue-600">Getting Started</Link>
                    <span>→</span>
                    <span className="text-slate-900 font-medium">User Roles & Permissions</span>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-6">
                    User Roles & Permissions
                </h1>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
                    <p className="text-lg text-slate-700">
                        <strong>Quick Summary:</strong> Relius uses two roles — <code className="bg-blue-100 px-1.5 py-0.5 rounded text-sm">admin</code> and <code className="bg-blue-100 px-1.5 py-0.5 rounded text-sm">super_admin</code> — to control access. Manage users, send invitations, change roles, and deactivate accounts from <strong>Settings → Users & Roles</strong>.
                    </p>
                </div>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">

                {/* ── Overview ── */}
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-blue-600" />
                    Overview
                </h2>

                <p>
                    The <strong>User Management</strong> page is located under <strong>Settings → Users & Roles</strong> in the sidebar. It is the single place where you control who can access your Relius account and what they can do once logged in.
                </p>

                <p>
                    At the top of the page you will see four stats cards:
                </p>

                <ul>
                    <li><strong>Total Users</strong> — the total number of user accounts in your organization</li>
                    <li><strong>Active Users</strong> — accounts that are currently active and able to log in</li>
                    <li><strong>Pending Invitations</strong> — invitations that have been sent but not yet accepted</li>
                    <li><strong>Admins</strong> — the number of users who hold the admin or super_admin role</li>
                </ul>

                <p>
                    Below the stats cards are two tabs: <strong>Users</strong> and <strong>Invitations</strong>. The Users tab displays a table with columns for Name, Email, Role, Status, Verified, and Actions. The Invitations tab shows outstanding invitations that have not yet been accepted.
                </p>

                {/* ── Role Descriptions ── */}
                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-blue-600" />
                    Role Descriptions
                </h2>

                <p>
                    Relius currently has two roles. Each user is assigned exactly one role at a time.
                </p>

                <div className="space-y-6 not-prose my-8">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                admin
                            </span>
                        </div>
                        <p className="text-slate-600 mb-3">
                            The standard administrative role. Users with the <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">admin</code> role can access all day-to-day features of Relius, including people management, groups, events, giving, communications, and reports.
                        </p>
                        <p className="text-slate-600">
                            Admins can manage other users (invite, deactivate, change role) but cannot transfer super admin ownership. This role is appropriate for pastors, office administrators, and key staff members who need broad access to the platform.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                                super_admin
                            </span>
                        </div>
                        <p className="text-slate-600 mb-3">
                            The highest-level role in Relius. A <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">super_admin</code> has every capability of an admin plus the exclusive ability to transfer super admin ownership to another user via the <strong>Transfer Super Admin</strong> action.
                        </p>
                        <p className="text-slate-600">
                            There is typically one super_admin per organization — the person who created the Relius account or who received ownership via a transfer. This role is intended for the primary account holder (e.g., the senior pastor or the person ultimately responsible for the church's Relius account).
                        </p>
                    </section>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r my-6 not-prose">
                    <p className="text-sm text-yellow-800">
                        <strong>Note:</strong> Only the roles <code className="bg-yellow-100 px-1 py-0.5 rounded text-xs">admin</code> and <code className="bg-yellow-100 px-1 py-0.5 rounded text-xs">super_admin</code> are present in the current version of Relius. If you need more granular access control, contact support to discuss your requirements.
                    </p>
                </div>

                {/* ── Managing Users ── */}
                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Managing Users
                </h2>

                <p className="text-slate-600 mb-6">
                    Navigate to <strong>Settings → Users & Roles</strong> and select the <strong>Users</strong> tab to see the full user table. Each row shows the user's Name, Email, Role, Status, and whether their account is Verified. The Actions column provides two operations per user.
                </p>

                <div className="space-y-8 not-prose">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                            Step 1: Open User Management
                        </h3>
                        <p className="text-slate-600">
                            In the left sidebar, expand <strong>Settings</strong> and click <strong>Users & Roles</strong>. The page loads with the stats cards at the top and the Users tab selected by default.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                            Step 2: Change a User's Role
                        </h3>
                        <p className="text-slate-600 mb-3">
                            Locate the user in the table and click <strong>Change Role</strong> in their Actions column. Select the new role (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">admin</code> or <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">super_admin</code>) and confirm the change.
                        </p>
                        <p className="text-slate-600">
                            The role update takes effect immediately. The user does not need to log out and log back in.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                            Step 3: Deactivate a User
                        </h3>
                        <p className="text-slate-600 mb-3">
                            To revoke a user's access, click <strong>Deactivate</strong> in their Actions column. Deactivated users cannot log in, but their historical data (records they created or modified) is preserved.
                        </p>
                        <p className="text-slate-600">
                            Use deactivation when a staff member leaves or when you need to temporarily suspend access. If you need to restore access later, reactivate the account from the same Actions column.
                        </p>
                    </section>
                </div>

                {/* ── Inviting Users ── */}
                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Inviting Users
                </h2>

                <p className="text-slate-600 mb-6">
                    To add a new team member, use the <strong>Invite User</strong> button located at the top of the User Management page.
                </p>

                <div className="space-y-8 not-prose">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                            Step 1: Click Invite User
                        </h3>
                        <p className="text-slate-600">
                            Click the <strong>Invite User</strong> button. A form appears prompting you to enter the new user's details.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                            Step 2: Enter Name and Email
                        </h3>
                        <p className="text-slate-600">
                            Fill in the person's name and email address. The email address will be used for their login credentials and to deliver the invitation.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                            Step 3: Assign a Role
                        </h3>
                        <p className="text-slate-600 mb-3">
                            Select the role to assign to the new user: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">admin</code> or <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">super_admin</code>. In most cases, new team members should be assigned the <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">admin</code> role.
                        </p>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                            Step 4: Send the Invitation
                        </h3>
                        <p className="text-slate-600 mb-3">
                            Submit the form. The invited person receives an email with a link to create their account and set a password. Until they accept, the invitation appears in the <strong>Invitations</strong> tab and the <strong>Pending Invitations</strong> stat card increments.
                        </p>
                    </section>
                </div>

                {/* ── Transferring Super Admin ── */}
                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Transferring Super Admin
                </h2>

                <p className="text-slate-600 mb-4">
                    The <strong>Transfer Super Admin</strong> button is visible on the User Management page and is only available to the current super_admin.
                </p>

                <div className="space-y-4 not-prose">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <ol className="list-decimal list-inside space-y-3 text-slate-600">
                            <li>Click <strong>Transfer Super Admin</strong> at the top of the User Management page.</li>
                            <li>Select the user who will become the new super_admin. Only active, verified users are eligible.</li>
                            <li>Confirm the transfer. Your role is automatically changed to <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">admin</code> and the selected user becomes <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">super_admin</code>.</li>
                        </ol>
                    </section>

                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r">
                        <p className="text-sm text-red-800">
                            <strong>Warning:</strong> This action cannot be undone by you. Once you transfer super admin ownership, only the new super_admin can transfer it back. Make sure you are transferring to the correct person.
                        </p>
                    </div>
                </div>

                {/* ── Security Best Practices ── */}
                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-slate-600" />
                    Security Best Practices
                </h2>

                <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Limit the number of super_admin accounts.</strong> There should typically be only one super_admin. This reduces the risk of accidental or unauthorized ownership transfers.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Deactivate accounts promptly when staff leave.</strong> Do not wait. Go to Settings → Users & Roles and click Deactivate on the departing user's row immediately.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Review the Users tab regularly.</strong> Check for accounts that are inactive, unverified, or no longer needed. Remove or deactivate any that should not have access.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Use unique email addresses for each user.</strong> Do not share accounts. Every person who needs access should have their own invitation and login.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Keep the Pending Invitations count low.</strong> Follow up on invitations that have not been accepted. Expired or stale invitations can be a sign that the email was incorrect or the person no longer needs access.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Audit admin count.</strong> Use the Admins stat card to keep track of how many users hold elevated roles. If the number seems high, review whether each person still needs admin-level access.</span>
                    </li>
                </ul>

                {/* ── Common Questions ── */}
                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Common Questions
                </h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: What is the difference between admin and super_admin?</h3>
                        <p className="text-slate-600">
                            A: Both roles have full access to Relius features. The only difference is that <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">super_admin</code> can transfer super admin ownership to another user via the Transfer Super Admin action. An <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">admin</code> cannot perform this transfer.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: Can a user have more than one role?</h3>
                        <p className="text-slate-600">
                            A: No. Each user is assigned exactly one role at a time. You can change a user's role at any time using the Change Role action in the Users table.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: What happens when I deactivate a user?</h3>
                        <p className="text-slate-600">
                            A: The user can no longer log in. Their account remains in the system and their historical activity (records created, changes made) is preserved. You can reactivate the account later if needed.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: Can I resend an invitation?</h3>
                        <p className="text-slate-600">
                            A: Check the Invitations tab for pending invitations. If the original email was not received, you can resend or revoke the invitation and create a new one.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: What does the Verified column mean in the Users table?</h3>
                        <p className="text-slate-600">
                            A: The Verified column indicates whether the user has completed their account setup, including email verification. A user who accepted their invitation and verified their email address will show as verified.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: I transferred super admin to the wrong person. How do I get it back?</h3>
                        <p className="text-slate-600">
                            A: Only the current super_admin can initiate a transfer. Ask the person you transferred ownership to to use Transfer Super Admin to send it back to you. If that person is unavailable, contact Relius support for assistance.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: How many admin users can I have?</h3>
                        <p className="text-slate-600">
                            A: There is no hard limit on the number of admin users. However, for security purposes, keep the number of admin accounts to the people who genuinely need full access. Use the Admins stat card on the User Management page to monitor this.
                        </p>
                    </div>
                </div>

                {/* ── Related Topics ── */}
                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Related Topics
                </h2>

                <div className="grid md:grid-cols-2 gap-4 not-prose">
                    <Link href="/resources/docs/admin/settings" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Church Settings →</h3>
                        <p className="text-slate-600 text-sm">
                            Configure your church profile, branding, timezone, and feature preferences.
                        </p>
                    </Link>

                    <Link href="/resources/docs/admin/security" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Security Settings →</h3>
                        <p className="text-slate-600 text-sm">
                            Password policies, session management, audit logs, and API key controls.
                        </p>
                    </Link>

                    <Link href="/resources/docs/getting-started/setup" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Setting Up Your Church →</h3>
                        <p className="text-slate-600 text-sm">
                            Complete initial setup guide including payment processing and team configuration.
                        </p>
                    </Link>

                    <Link href="/resources/docs/admin/users" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">User Management →</h3>
                        <p className="text-slate-600 text-sm">
                            Detailed reference for user accounts, activity logs, and account lifecycle.
                        </p>
                    </Link>
                </div>
            </div>
        </article>
    );
}
