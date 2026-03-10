import Link from 'next/link';
import { ArrowRight, Settings, CreditCard, Users, Shield, Bell, UserPlus, Building2, Lock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Setting Up Your Church | Relius Documentation',
    description: 'Guide to configuring your church in Relius: General Settings, Billing, Notifications, Security, User Management, and campus setup.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/getting-started/setup/',
    },
    openGraph: {
        title: 'Setting Up Your Church | Relius Documentation',
        description: 'Guide to configuring your church in Relius: General Settings, Billing, Notifications, Security, User Management, and campus setup.',
        url: 'https://relius.ai/resources/docs/getting-started/setup/',
    },
    keywords: ['church settings', 'Relius configuration', 'church setup', 'user management', 'billing', 'security'],
};

export default function ChurchSetupPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <Link href="/resources/docs" className="hover:text-blue-600">Documentation</Link>
                    <span>→</span>
                    <Link href="/resources/docs/getting-started" className="hover:text-blue-600">Getting Started</Link>
                    <span>→</span>
                    <span className="text-slate-900 font-medium">Setting Up Your Church</span>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-6">
                    Setting Up Your Church
                </h1>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
                    <p className="text-lg text-slate-700">
                        <strong>Quick Summary:</strong> Configure your church through the Settings sidebar (General Settings, Users & Roles, Public Website, Campus Management, Data Migration) and the Settings page tabs (General, Billing, Notifications, Security, New Member Contact).
                    </p>
                </div>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Settings className="w-6 h-6 text-blue-600" />
                    Settings Overview
                </h2>

                <p>
                    All church configuration happens in the <strong>Settings</strong> area of your Relius dashboard. The Settings sidebar contains five sections: General Settings, Users & Roles, Public Website, Campus Management (Enterprise), and Data Migration. This guide covers each area and helps you get fully configured.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Settings Page Tabs
                </h2>

                <p className="text-slate-600 mb-6">
                    When you open <strong>Settings → General Settings</strong>, you will see five tabs across the top: General, Billing, Notifications, Security, and New Member Contact. Each tab controls a different aspect of your church configuration.
                </p>

                <div className="space-y-8 not-prose">
                    {/* General Tab */}
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Settings className="w-5 h-5 text-blue-600" />
                            General Tab
                        </h3>

                        <div className="space-y-4 text-slate-600">
                            <p>
                                The General tab contains your core church information and service configuration.
                            </p>

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Primary Campus Address</h4>
                                <p>
                                    Enter your church's main physical address. This is used across the platform for location references.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Check-In Auto Print</h4>
                                <p>
                                    Enable or disable automatic printing of name tags when members check in. Useful for children's ministry and event registration.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Service Times</h4>
                                <p className="mb-2">
                                    Configure your regular service schedule:
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li><strong>Sunday Services</strong> -- Set your Sunday service times</li>
                                    <li><strong>Midweek Services</strong> -- Set any midweek service times</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Welcome Message</h4>
                                <p>
                                    Customize the welcome message displayed to users when they log in to the dashboard.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Billing Tab */}
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <CreditCard className="w-5 h-5 text-blue-600" />
                            Billing Tab
                        </h3>

                        <div className="space-y-4 text-slate-600">
                            <p>
                                The Billing tab is where you manage your subscription and payment information. This includes viewing your current plan, updating payment methods, and reviewing invoices.
                            </p>

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Payment Setup</h4>
                                <p>
                                    To accept online donations and manage your subscription, configure your payment details under this tab. Relius uses Stripe for secure, PCI-compliant payment processing.
                                </p>
                                <ol className="list-decimal list-inside space-y-2 ml-4 mt-2">
                                    <li>Go to <strong>Settings → General Settings → Billing</strong></li>
                                    <li>Connect or update your Stripe account</li>
                                    <li>Provide your church's tax ID (EIN) and bank account details</li>
                                    <li>Stripe will verify your account (usually 1-2 business days)</li>
                                </ol>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r">
                                <p className="text-sm text-blue-800">
                                    <strong>Tip:</strong> You can use all non-giving features without completing payment setup. Online giving will be disabled until you connect Stripe.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Notifications Tab */}
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Bell className="w-5 h-5 text-blue-600" />
                            Notifications Tab
                        </h3>

                        <div className="space-y-4 text-slate-600">
                            <p>
                                The Notifications tab lets you configure your notification preferences. Control which events trigger alerts and how you receive them (email, in-app, etc.).
                            </p>
                        </div>
                    </section>

                    {/* Security Tab */}
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Lock className="w-5 h-5 text-blue-600" />
                            Security Tab
                        </h3>

                        <div className="space-y-4 text-slate-600">
                            <p>
                                The Security tab provides an overview of your church's security posture and audit trail.
                            </p>

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Security Overview</h4>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li><strong>2FA Status</strong> -- View whether two-factor authentication is enabled</li>
                                    <li><strong>Active API Keys</strong> -- See how many API keys are currently active</li>
                                    <li><strong>Recent Security Events</strong> -- Review recent security-related activity</li>
                                    <li><strong>Last Audit Export</strong> -- Check when the audit trail was last exported</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Audit Trail</h4>
                                <p>
                                    The full Audit Trail section shows a log of all actions taken within your Relius account. You can filter by date range, user, or action type, and export the audit log for compliance or review.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                                <p className="text-sm text-yellow-800">
                                    <strong>Recommendation:</strong> Enable two-factor authentication for all admin and super_admin users. Regularly export and review your audit trail.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* New Member Contact Tab */}
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <UserPlus className="w-5 h-5 text-blue-600" />
                            New Member Contact Tab
                        </h3>

                        <div className="space-y-4 text-slate-600">
                            <p>
                                The New Member Contact tab lets you configure how your church handles outreach to new members. Set up automated workflows and contact preferences for people who are newly added to your directory.
                            </p>
                        </div>
                    </section>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 flex items-center gap-2">
                    <Users className="w-6 h-6 text-blue-600" />
                    User Management
                </h2>

                <p className="text-slate-600 mb-6">
                    Navigate to <strong>Settings → Users & Roles</strong> to open the User Management page. This page shows summary stats (Total Users, Active Users, Pending Invitations, Admins) and has tabs for Users and Invitations.
                </p>

                <div className="space-y-8 not-prose">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Inviting Users</h3>

                        <div className="space-y-4 text-slate-600">
                            <ol className="list-decimal list-inside space-y-2 ml-4">
                                <li>Click the <strong>"Invite User"</strong> button</li>
                                <li>Enter their name and email address</li>
                                <li>Assign a role</li>
                                <li>They will receive an email invitation to create their account</li>
                            </ol>
                        </div>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">User Roles</h3>

                        <div className="space-y-4 text-slate-600">
                            <p>
                                Relius uses two roles for access control:
                            </p>

                            <div className="space-y-2">
                                <div className="border-l-4 border-purple-400 pl-4">
                                    <strong className="text-slate-900">super_admin</strong>
                                    <p className="text-sm">Full access to all features, settings, and data. Can manage other users and transfer the super admin role. Only one user holds the super_admin role at a time.</p>
                                </div>
                                <div className="border-l-4 border-blue-400 pl-4">
                                    <strong className="text-slate-900">admin</strong>
                                    <p className="text-sm">Access to manage church data, people, events, and giving. Cannot modify critical account settings reserved for the super_admin.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Managing Users</h3>

                        <div className="space-y-4 text-slate-600">
                            <p>
                                Each user entry on the User Management page displays their Name, Email, Role, Status, and Verified state. Available actions for each user:
                            </p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li><strong>Deactivate</strong> -- Disable a user's access without deleting their account</li>
                                <li><strong>Change Role</strong> -- Switch a user between admin and super_admin</li>
                            </ul>
                            <p>
                                The <strong>"Transfer Super Admin"</strong> button allows the current super_admin to transfer ownership to another user.
                            </p>
                        </div>
                    </section>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-blue-600" />
                    Other Settings Sidebar Items
                </h2>

                <div className="space-y-8 not-prose">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Public Website</h3>
                        <div className="text-slate-600">
                            <p>
                                Configure your church's public-facing website settings, including branding elements and public pages.
                            </p>
                        </div>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Campus Management (Enterprise)</h3>
                        <div className="space-y-4 text-slate-600">
                            <p>
                                Available on Enterprise plans. If you have multiple locations, create a campus for each one and assign campus-specific settings and staff.
                            </p>
                        </div>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Data Migration</h3>
                        <div className="text-slate-600">
                            <p>
                                Import data from a previous church management system. Relius provides guided migration tools to bring in your member records, giving history, and other data.
                            </p>
                        </div>
                    </section>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Best Practices
                </h2>

                <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Enable two-factor authentication.</strong> Require 2FA for all admin and super_admin users. Check the Security tab to verify 2FA status.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Review the audit trail regularly.</strong> Use the Security tab to monitor activity and export logs for compliance.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Limit super_admin access.</strong> Only one person should hold the super_admin role. Use admin for other staff members.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Test your giving page.</strong> After connecting Stripe under Billing, make a small test donation to confirm receipts and fund tracking work.</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Common Questions
                </h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: Where do I set up payment processing?</h3>
                        <p className="text-slate-600">
                            A: Go to <strong>Settings → General Settings → Billing</strong> tab. From there you can connect your Stripe account for online giving and subscription management.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: What is the difference between admin and super_admin?</h3>
                        <p className="text-slate-600">
                            A: The super_admin has full control over all settings including the ability to manage users, transfer ownership, and access all security features. The admin role provides access to day-to-day church management features but cannot modify critical account-level settings.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: How do I transfer the super_admin role?</h3>
                        <p className="text-slate-600">
                            A: Go to <strong>Settings → Users & Roles</strong> and click the "Transfer Super Admin" button. Select the user you want to transfer ownership to.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: Can I skip payment setup during initial configuration?</h3>
                        <p className="text-slate-600">
                            A: Yes. All non-giving features work without Stripe connected. You can set up payment processing at any time from the Billing tab.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: How do I deactivate a user?</h3>
                        <p className="text-slate-600">
                            A: Go to <strong>Settings → Users & Roles</strong>, find the user in the list, and click the Deactivate action. Their access will be revoked but their account data is preserved.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Related Topics
                </h2>

                <div className="grid md:grid-cols-2 gap-4 not-prose">
                    <Link href="/resources/docs/getting-started/quick-start" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Quick Start Guide →</h3>
                        <p className="text-slate-600 text-sm">
                            New to Relius? Start here for a quick overview of the basics.
                        </p>
                    </Link>

                    <Link href="/resources/docs/getting-started/roles" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">User Roles & Permissions →</h3>
                        <p className="text-slate-600 text-sm">
                            Detailed breakdown of admin and super_admin roles and access control.
                        </p>
                    </Link>

                    <Link href="/resources/docs/giving/online-setup" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Online Giving Setup →</h3>
                        <p className="text-slate-600 text-sm">
                            Complete guide to Stripe integration, fund management, and donor receipts.
                        </p>
                    </Link>

                    <Link href="/resources/docs/getting-started/migration" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Data Migration →</h3>
                        <p className="text-slate-600 text-sm">
                            Switching from another ChMS? Step-by-step data migration instructions.
                        </p>
                    </Link>
                </div>
            </div>

            <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Need help with setup?
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    Our team can help you configure settings, import data, and get your staff up to speed.
                </p>
                <Link
                    href="/contact/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                    Contact Support
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </article>
    );
}
