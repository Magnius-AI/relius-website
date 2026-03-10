import { Metadata } from 'next';
import Link from 'next/link';
import { Settings, ChevronRight, Shield, Bell, Users, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Church Settings - Administration - Relius Documentation',
  description: 'Configure your church general settings, billing, notifications, security, and new member contact preferences in Relius.',
  alternates: {
    canonical: 'https://relius.ai/resources/docs/admin/settings',
  },
  openGraph: {
    title: 'Church Settings | Relius Documentation',
    description: 'Configure your church general settings, billing, notifications, security, and new member outreach in Relius.',
    url: 'https://relius.ai/resources/docs/admin/settings',
  },
  keywords: ['church settings', 'admin settings', 'billing', 'security', 'notifications', 'church management'],
};

export default function ChurchSettingsPage() {
  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-600 not-prose">
        <Link href="/resources/docs" className="hover:text-primary-600 transition-colors">
          Documentation
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/resources/docs/admin" className="hover:text-primary-600 transition-colors">
          Administration
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-slate-900 font-medium">Church Settings</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
            <Settings className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Administration
            </p>
            <h1 className="text-4xl font-bold text-slate-900">Church Settings</h1>
          </div>
        </div>
      </div>

      {/* Quick Summary */}
      <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg not-prose">
        <p className="text-lg text-slate-700">
          <strong>Quick Summary:</strong> The Settings page contains five tabs &mdash; General,
          Billing, Notifications, Security, and New Member Contact &mdash; where you configure
          your church&apos;s core operational preferences.
        </p>
      </blockquote>

      {/* Accessing Settings */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Accessing Settings</h2>
        <div className="prose prose-slate max-w-none">
          <ol>
            <li>Click <strong>Settings</strong> in the sidebar.</li>
            <li>Select <strong>General Settings</strong>.</li>
          </ol>
          <p>
            This opens the Settings page with five tabs across the top: General, Billing,
            Notifications, Security, and New Member Contact.
          </p>
        </div>
      </section>

      {/* Sidebar Structure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Settings Sidebar Items</h2>
        <p className="text-slate-600">
          Under the Settings section in the sidebar, you will find the following navigation items:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-slate-900 mb-1">General Settings</h3>
            <p className="text-sm text-slate-600">
              Opens the main Settings page with the five tabs described below.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-slate-900 mb-1">Users & Roles</h3>
            <p className="text-sm text-slate-600">
              Manage staff accounts, roles, and permissions.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-slate-900 mb-1">Public Website</h3>
            <p className="text-sm text-slate-600">
              Configure your public-facing church website.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-slate-900 mb-1">Campus Management</h3>
            <p className="text-sm text-slate-500">
              Enterprise plan only. Manage multi-campus configurations.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-slate-900 mb-1">Data Migration</h3>
            <p className="text-sm text-slate-600">
              Import data from other church management platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Tab 1: General */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
            <MapPin className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">General Tab</h2>
        </div>
        <div className="prose prose-slate max-w-none">
          <p>
            The General tab contains your church&apos;s address, service schedules, check-in
            preferences, and welcome message.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white divide-y divide-slate-200">
          <div className="p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Primary Campus Address</h3>
            <p className="text-sm text-slate-600">
              Enter your church&apos;s main physical address. This address is used in communications,
              receipts, and the public website.
            </p>
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Check-In Auto Print</h3>
            <p className="text-sm text-slate-600">
              A toggle that controls whether name badges print automatically when someone checks in.
              Turn this on if you use a label printer at your welcome desk or children&apos;s ministry
              check-in station.
            </p>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-slate-500" />
              <h3 className="font-semibold text-slate-900">Sunday Services</h3>
            </div>
            <p className="text-sm text-slate-600">
              Set the start time and end time for your Sunday services. These times are used
              for check-in windows, attendance tracking, and volunteer scheduling defaults.
            </p>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-slate-500" />
              <h3 className="font-semibold text-slate-900">Midweek Services</h3>
            </div>
            <p className="text-sm text-slate-600">
              Set the start time and end time for your midweek services. Works the same way
              as the Sunday service times configuration.
            </p>
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Welcome Message</h3>
            <p className="text-sm text-slate-600">
              A text area where you write a custom welcome message. This message can appear
              on member-facing areas of the platform.
            </p>
          </div>
        </div>
      </section>

      {/* Tab 2: Billing */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
            <Settings className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Billing Tab</h2>
        </div>
        <div className="prose prose-slate max-w-none">
          <p>
            The Billing tab is where you manage your Relius subscription and payment methods.
            From here you can view your current plan, update your payment card, switch between
            monthly and annual billing, and access invoice history.
          </p>
          <p>
            For a detailed breakdown of plans, pricing, and invoices, see the
            dedicated <Link href="/resources/docs/admin/billing" className="text-primary-600 hover:underline">Billing & Subscription</Link> documentation.
          </p>
        </div>
      </section>

      {/* Tab 3: Notifications */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
            <Bell className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Notifications Tab</h2>
        </div>
        <div className="prose prose-slate max-w-none">
          <p>
            The Notifications tab lets you configure which notifications your church
            administrators and staff receive. Use this to control email alerts, in-app
            notifications, and other notification preferences so your team only sees
            what is relevant to them.
          </p>
        </div>
      </section>

      {/* Tab 4: Security */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600">
            <Shield className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Security Tab</h2>
        </div>
        <div className="prose prose-slate max-w-none">
          <p>
            The Security tab provides an overview of your account&apos;s security posture
            and a full audit trail of actions taken in the system.
          </p>
        </div>

        <h3 className="text-lg font-semibold text-slate-900">Security Overview Cards</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
            <p className="text-sm text-slate-500 mb-1">2FA Status</p>
            <p className="text-lg font-bold text-slate-900">Enabled / Disabled</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
            <p className="text-sm text-slate-500 mb-1">Active API Keys</p>
            <p className="text-lg font-bold text-slate-900">Count</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
            <p className="text-sm text-slate-500 mb-1">Recent Security Events</p>
            <p className="text-lg font-bold text-slate-900">Count</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
            <p className="text-sm text-slate-500 mb-1">Last Audit Export</p>
            <p className="text-lg font-bold text-slate-900">Date</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-slate-900">Audit Trail</h3>
        <div className="prose prose-slate max-w-none">
          <p>
            Below the overview cards is a full Audit Trail table that logs every significant
            action performed in your Relius account. Each row records the action, the user who
            performed it, and the timestamp.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 space-y-3">
          <h4 className="font-semibold text-slate-900">Filters</h4>
          <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
            <li><strong>Action Type</strong> &mdash; Filter by the kind of action (e.g., login, data export, record edit).</li>
            <li><strong>Date Range</strong> &mdash; Narrow the audit log to a specific time period.</li>
          </ul>
          <h4 className="font-semibold text-slate-900">Export</h4>
          <p className="text-sm text-slate-600">
            Click the <strong>Export</strong> button to download the filtered audit trail for
            your records or compliance requirements. The &quot;Last Audit Export&quot; card above
            updates to reflect the date of your most recent export.
          </p>
        </div>
      </section>

      {/* Tab 5: New Member Contact */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
            <Users className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">New Member Contact Tab</h2>
        </div>
        <div className="prose prose-slate max-w-none">
          <p>
            The New Member Contact tab is where you configure how your church reaches out
            to new members. Use these settings to define your outreach preferences so that
            when someone is added to the system, the appropriate follow-up actions are triggered
            automatically.
          </p>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Best Practices</h2>
        <div className="prose prose-slate max-w-none">
          <ul>
            <li>
              <strong>Keep your address current.</strong> Update the Primary Campus Address
              immediately if your church relocates. It affects receipts and public-facing info.
            </li>
            <li>
              <strong>Set accurate service times.</strong> Sunday and Midweek service times drive
              check-in windows and volunteer scheduling. Double-check these after seasonal schedule
              changes.
            </li>
            <li>
              <strong>Enable 2FA.</strong> Go to the Security tab and confirm that two-factor
              authentication is enabled for all admin accounts.
            </li>
            <li>
              <strong>Review the audit trail regularly.</strong> Check the Security tab periodically
              to spot unusual activity. Export the audit log at least quarterly for your records.
            </li>
            <li>
              <strong>Configure notifications early.</strong> Set up the Notifications tab during
              onboarding so your team is not overwhelmed by irrelevant alerts.
            </li>
          </ul>
        </div>
      </section>

      {/* Common Questions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Common Questions</h2>
        <div className="space-y-4">
          <details className="group rounded-lg border border-slate-200 bg-white">
            <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-50">
              <span className="font-medium text-slate-900">Where do I change my church name or logo?</span>
            </summary>
            <div className="px-4 pb-4 text-slate-600">
              <p>
                Church name and branding are managed through the Public Website settings, not
                the General Settings tab. Click <strong>Settings</strong> in the sidebar, then
                select <strong>Public Website</strong>.
              </p>
            </div>
          </details>
          <details className="group rounded-lg border border-slate-200 bg-white">
            <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-50">
              <span className="font-medium text-slate-900">How do I add another campus?</span>
            </summary>
            <div className="px-4 pb-4 text-slate-600">
              <p>
                Campus Management is available under <strong>Settings</strong> in the sidebar
                for churches on the Enterprise plan. Select <strong>Campus Management</strong> to
                add and configure additional locations.
              </p>
            </div>
          </details>
          <details className="group rounded-lg border border-slate-200 bg-white">
            <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-50">
              <span className="font-medium text-slate-900">Can I export the audit trail?</span>
            </summary>
            <div className="px-4 pb-4 text-slate-600">
              <p>
                Yes. Go to the Security tab, apply any desired filters (Action Type, Date Range),
                then click the <strong>Export</strong> button. The audit trail downloads for your
                records.
              </p>
            </div>
          </details>
          <details className="group rounded-lg border border-slate-200 bg-white">
            <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-50">
              <span className="font-medium text-slate-900">What does Check-In Auto Print do?</span>
            </summary>
            <div className="px-4 pb-4 text-slate-600">
              <p>
                When enabled, a name badge label prints automatically each time someone checks in.
                This requires a compatible label printer connected to your check-in station. When
                disabled, check-in still records attendance but no label is printed.
              </p>
            </div>
          </details>
          <details className="group rounded-lg border border-slate-200 bg-white">
            <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-50">
              <span className="font-medium text-slate-900">Who can access the Settings page?</span>
            </summary>
            <div className="px-4 pb-4 text-slate-600">
              <p>
                Only users with an Admin role can access Settings. Staff and other roles do
                not see the Settings item in the sidebar.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* Related Topics */}
      <section className="border-t border-slate-200 pt-8 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Related Topics</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/resources/docs/admin/billing"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            Billing & Subscription
          </Link>
          <Link
            href="/resources/docs/admin/users"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            User Management
          </Link>
          <Link
            href="/resources/docs/admin/security"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            Security Settings
          </Link>
          <Link
            href="/resources/docs/website/setup"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            Website Setup
          </Link>
          <Link
            href="/resources/docs/admin"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            Administration Overview
          </Link>
        </div>
      </section>
    </div>
  );
}
