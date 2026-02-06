export default function AdministrationOverviewPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Administration</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Configure your church's settings, manage users and permissions, integrate external services, and maintain data security—all from one centralized administration hub.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Administration in Relius gives church leaders complete control over their ministry's digital infrastructure. Whether you're setting up your church profile, adding staff members with appropriate permissions, connecting payment processors, or managing data compliance, the administration area provides powerful tools while keeping complexity manageable.
      </p>
      <p>
        Think of administration as your church's control center. From here, you define who has access to what, configure how features behave, connect external services like Stripe or CCLI, and ensure your data remains secure and compliant. Most churches complete initial setup in under an hour, then return periodically to add users, adjust settings, or enable new integrations as their ministry grows.
      </p>
      <p>
        The administration interface is designed for church administrators, executive pastors, and office managers who need technical control without requiring IT expertise. Each section includes smart defaults and clear explanations, so you can configure Relius to match your ministry's unique workflows and policies.
      </p>

      <h2>Key Administration Areas</h2>

      <h3>Church Settings</h3>
      <p>
        Configure your church's basic information, branding, timezone, and feature preferences. This is where you set your church name, physical address, contact details, logo, brand colors, and toggle features like online giving, event registration, or public website visibility. Everything that defines "who you are" lives here.
      </p>
      <p>
        <a href="/resources/docs/admin/settings" className="text-blue-600 hover:underline">Learn more about Church Settings →</a>
      </p>

      <h3>User Management</h3>
      <p>
        Add staff members, volunteers, and administrators to your Relius account with precise role-based permissions. Control who can view sensitive donor information, who can send communications, who can manage events, and who has full administrative access. Track user activity and enable two-factor authentication for enhanced security.
      </p>
      <p>
        <a href="/resources/docs/admin/users" className="text-blue-600 hover:underline">Learn more about User Management →</a>
      </p>

      <h3>Security Settings</h3>
      <p>
        Protect your ministry's data with password policies, session management, audit logs, and API key controls. Monitor who accessed what information, when they logged in, and what actions they performed. Set password complexity requirements and automatic logout timers to keep accounts secure.
      </p>
      <p>
        <a href="/resources/docs/admin/security" className="text-blue-600 hover:underline">Learn more about Security Settings →</a>
      </p>

      <h3>Integrations</h3>
      <p>
        Connect Relius with external services that power your ministry. Enable Stripe for online giving, sync with CCLI for worship licensing, integrate Google Calendar for event scheduling, or configure webhooks for custom workflows. Integrations extend Relius to work seamlessly with the tools you already use.
      </p>
      <p>
        <a href="/resources/docs/admin/integrations" className="text-blue-600 hover:underline">Learn more about Integrations →</a>
      </p>

      <h3>Data Management</h3>
      <p>
        Import data from your previous church management system, export reports for analysis, create automated backups, and manage data retention policies. Ensure GDPR and privacy compliance with tools for data access requests, deletion workflows, and consent tracking.
      </p>
      <p>
        <a href="/resources/docs/admin/data" className="text-blue-600 hover:underline">Learn more about Data Management →</a>
      </p>

      <h3>Billing & Subscription</h3>
      <p>
        Manage your Relius subscription plan, view invoice history, monitor usage limits, and upgrade or downgrade as your church's needs change. Transparent pricing with no surprises—see exactly what you're paying for and adjust your plan anytime.
      </p>
      <p>
        <a href="/resources/docs/admin/billing" className="text-blue-600 hover:underline">Learn more about Billing & Subscription →</a>
      </p>

      <h2>Getting Started with Administration</h2>

      <h3>Step 1: Complete Church Profile</h3>
      <p>
        Navigate to <strong>Settings → Church Settings</strong> and fill in your church's basic information. Enter your official name, physical address, phone number, email, and website. This information appears on receipts, email footers, and your public website, so accuracy matters.
      </p>

      <h3>Step 2: Add Your Team</h3>
      <p>
        Go to <strong>Administration → Users</strong> and invite your staff members. Start with key leaders: executive pastor, worship pastor, children's director, and administrative staff. Assign appropriate roles based on what each person needs to access. You can always adjust permissions later.
      </p>

      <h3>Step 3: Configure Essential Integrations</h3>
      <p>
        If you plan to enable online giving, set up Stripe integration first. Visit <strong>Administration → Integrations</strong>, select Stripe, and follow the connection wizard. If your church uses CCLI for worship licensing, connect that integration to automatically track song usage.
      </p>

      <h3>Step 4: Set Security Policies</h3>
      <p>
        Review <strong>Administration → Security</strong> and enable two-factor authentication for admin users. Set a reasonable password policy (minimum length, complexity requirements) and configure session timeout settings appropriate for your team's work environment.
      </p>

      <h2>Common Administration Workflows</h2>

      <h3>Adding a New Staff Member</h3>
      <p>
        When you hire a youth pastor who needs access to youth group members, events, and communications, create a new user account with the "Staff" role. Customize their permissions to include People (view/edit), Groups (youth groups only), Events (create/manage), and Communications (send to youth). This gives them exactly what they need without exposing sensitive giving or admin features.
      </p>

      <h3>Migrating from Another System</h3>
      <p>
        Export your member data, giving history, and group information from your old church management software. Use Relius's import tools (<strong>Administration → Data Management → Import</strong>) to bulk-upload CSV files. Map fields from your old system to Relius fields, preview the import, then execute. Most churches complete data migration in a single afternoon.
      </p>

      <h3>Quarterly Security Audit</h3>
      <p>
        Once per quarter, review your user list and remove accounts for staff who have left or volunteers who no longer serve. Check audit logs for unusual activity. Verify that two-factor authentication is enabled for all administrative accounts. Rotate API keys if you use custom integrations.
      </p>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Use the principle of least privilege</strong> – Grant users only the permissions they need for their role</li>
        <li><strong>Enable two-factor authentication for all admins</strong> – Protects sensitive donor and member data</li>
        <li><strong>Review user access quarterly</strong> – Remove inactive accounts and adjust permissions as roles change</li>
        <li><strong>Keep your church information current</strong> – Update address, phone, email when changes occur</li>
        <li><strong>Test integrations after setup</strong> – Process a test donation, sync a calendar event, verify webhooks fire correctly</li>
        <li><strong>Schedule regular backups</strong> – Even with cloud hosting, maintain your own export of critical data</li>
        <li><strong>Document your configuration</strong> – Keep notes about which integrations are enabled, who has admin access, and why certain settings were chosen</li>
        <li><strong>Monitor billing and usage</strong> – Stay aware of your plan limits and upgrade proactively to avoid service interruptions</li>
      </ul>

      <h2>Common Questions</h2>

      <p><strong>Q: Who should have administrator access?</strong></p>
      <p>A: Limit administrator access to 2-4 key leaders: senior pastor, executive pastor, and one or two office staff. Administrators can change anything, including removing other users and modifying payment settings, so treat this role carefully.</p>

      <p><strong>Q: Can we use Relius with multiple campuses?</strong></p>
      <p>A: Yes! Each campus can be configured as a separate location within one Relius account, sharing data while maintaining campus-specific settings for events, groups, and teams. Contact support for multi-campus setup guidance.</p>

      <p><strong>Q: What happens if we need to downgrade our plan?</strong></p>
      <p>A: You can downgrade anytime from the Billing section. If your current usage exceeds the new plan's limits (like number of members or admins), you'll receive a warning and guidance on reducing usage before the downgrade takes effect.</p>

      <p><strong>Q: How do we handle data privacy for European members?</strong></p>
      <p>A: Relius provides GDPR compliance tools in Data Management, including consent tracking, data access requests, and right-to-deletion workflows. Enable these features and document your church's privacy policies.</p>

      <p><strong>Q: Can we customize user roles beyond the default options?</strong></p>
      <p>A: Yes! While Relius provides standard roles (Admin, Staff, Leader, Member), you can create custom roles with precisely defined permissions for unique ministry positions like "Financial Secretary" or "Social Media Coordinator."</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/getting-started/setup">Setting Up Your Church</a> – Initial configuration walkthrough</li>
        <li><a href="/resources/docs/getting-started/roles-permissions">User Roles & Permissions</a> – Understanding access levels</li>
        <li><a href="/resources/docs/giving/online-setup">Online Giving Setup</a> – Stripe integration guide</li>
        <li><a href="/resources/docs/admin/settings">Church Settings</a> – Detailed settings documentation</li>
        <li><a href="/resources/docs/admin/users">User Management</a> – Managing your team</li>
        <li><a href="/resources/docs/admin/security">Security Settings</a> – Protecting your data</li>
      </ul>
    </div>
  );
}
