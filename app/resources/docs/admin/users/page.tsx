export default function UserManagementPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>User Management</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Add staff, volunteers, and administrators to Relius with role-based permissions that control exactly what each user can access and modify.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        User Management is where you build your ministry team within Relius. Every staff member, volunteer leader, and administrator gets their own account with precisely defined permissions that match their responsibilities. The youth pastor can manage youth groups and events but can't access donor information. The financial secretary sees all giving data but can't edit member profiles. The worship leader schedules volunteers but can't send church-wide emails.
      </p>
      <p>
        Relius uses role-based access control (RBAC), which means you assign each user a role (Admin, Staff, Leader, Member) and then customize that role's permissions. This approach balances security with usability: you protect sensitive information from unauthorized access while empowering your team to do their work efficiently. No one needs access to everything, and User Management ensures they don't get it.
      </p>
      <p>
        Beyond basic access control, User Management also includes security features like two-factor authentication, user activity logs, session monitoring, and bulk user operations. Whether you're onboarding a new associate pastor, auditing who accessed donor records last quarter, or removing accounts for departed staff, this is your central hub for managing your team's digital presence.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>User Account</strong>: A unique login with email and password that grants access to Relius</li>
        <li><strong>Role</strong>: A predefined set of permissions (Admin, Staff, Leader, Member) that determines what a user can do</li>
        <li><strong>Permissions</strong>: Specific capabilities like "view donations," "edit events," or "send communications"</li>
        <li><strong>Two-Factor Authentication (2FA)</strong>: A security feature requiring a secondary verification code in addition to password</li>
        <li><strong>User Activity Log</strong>: A record of what actions a user performed and when</li>
        <li><strong>Session</strong>: An active login period, automatically expired after inactivity or manual logout</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Access User Management</h3>
      <p>
        From your dashboard, navigate to <strong>Administration → Users</strong>. You'll see a list of all current users, their roles, last login time, and account status (active, invited, or disabled).
      </p>

      <h3>Step 2: Invite a New User</h3>
      <p>
        Click <strong>Add User</strong> in the top-right corner. Enter the person's name and email address, then select their role. For new staff members, choose "Staff" and customize specific permissions on the next screen. For volunteer leaders who need limited access, choose "Leader." Click <strong>Send Invitation</strong> to email them a signup link.
      </p>

      <h3>Step 3: Customize Permissions</h3>
      <p>
        After selecting a role, review the default permissions and adjust as needed. For example, a staff role might default to full access to People, Groups, and Events but restricted access to Giving. If your new worship pastor shouldn't see financial data, uncheck "View Giving" and "View Donor History" before sending the invitation.
      </p>

      <h3>Step 4: Enable Two-Factor Authentication</h3>
      <p>
        For users with administrative access or access to sensitive data (like giving records), require two-factor authentication. Toggle the "Require 2FA" switch on their user profile. They'll be prompted to set up authenticator app verification the next time they log in.
      </p>

      <h2>Features</h2>

      <h3>User Roles Explained</h3>
      <p>
        Relius provides four standard roles, each with progressively broader permissions:
      </p>

      <h4>Member</h4>
      <p>
        Basic access for congregation members using the member portal. Members can view and update their own profile, see their giving history, register for events, join small groups, and access resources. They cannot view other members' information or access any administrative features. Most churches use the Member role sparingly, only enabling it when they activate the public member portal feature.
      </p>

      <h4>Leader</h4>
      <p>
        For volunteer leaders like small group hosts, team captains, or ministry coordinators who need limited administrative access. Leaders can manage their specific group or team, view contact information for members assigned to them, send communications to their group, and track attendance. They cannot access financial data, edit church settings, or manage other groups.
      </p>
      <p>
        <em>Example: A small group leader gets a Leader account with permissions to view members in their group, send group emails, update group meeting times, and track attendance. They can't see other small groups or access the church's full member directory.</em>
      </p>

      <h4>Staff</h4>
      <p>
        For paid staff and key volunteers who need broad access across multiple ministry areas. Staff can typically view and edit members, manage groups and events, send communications, schedule volunteers, and access reports. By default, Staff cannot view giving/donations, change church settings, or manage other users—but you can grant these permissions selectively.
      </p>
      <p>
        <em>Example: A children's ministry director gets a Staff account with full access to People, Groups, Events, Volunteers, and Communications. You disable access to Giving and Administration so they focus on their ministry area without exposure to sensitive financial or administrative functions.</em>
      </p>

      <h4>Admin</h4>
      <p>
        Full access to everything in Relius, including sensitive financial data, user management, church settings, and integrations. Admins can add/remove users, change anyone's permissions, modify billing settings, and access all donor information. Limit this role to 2-4 key leaders like the senior pastor, executive pastor, and office manager.
      </p>
      <p>
        <em>Security Note: Admins can potentially delete data, change payment settings, or remove other admins. Treat this role with caution and enable two-factor authentication for all admin accounts.</em>
      </p>

      <h3>Adding Staff and Admin Users</h3>
      <p>
        When you click "Add User," you'll enter their full name and email address. Relius sends an invitation email with a secure signup link. The user creates their password, completes their profile, and immediately gains access according to their assigned role and permissions.
      </p>
      <p>
        For bulk onboarding (like adding 10 new staff members after a church merger), use the "Bulk Invite" feature to upload a CSV file with names, emails, and roles. Relius processes the list and sends invitations to everyone at once.
      </p>

      <h3>Role Permissions Matrix</h3>
      <p>
        Permissions are organized by functional area. When creating or editing a user, you'll see permission categories like:
      </p>
      <ul>
        <li><strong>People</strong> – View, create, edit, delete member profiles and families</li>
        <li><strong>Groups</strong> – Manage small groups, view rosters, track attendance</li>
        <li><strong>Events</strong> – Create events, manage registrations, view check-in data</li>
        <li><strong>Giving</strong> – View donations, access donor history, generate receipts</li>
        <li><strong>Communications</strong> – Send emails and SMS, view message history</li>
        <li><strong>Volunteers</strong> – Schedule teams, view availability, send reminders</li>
        <li><strong>Reports</strong> – Access analytics, export data, view dashboards</li>
        <li><strong>Administration</strong> – Manage users, edit church settings, configure integrations</li>
      </ul>
      <p>
        Each category includes granular options like "view only," "create/edit," or "delete." You can also restrict permissions to specific groups, campuses, or event types for more precise access control.
      </p>

      <h3>Two-Factor Authentication Setup</h3>
      <p>
        Two-factor authentication (2FA) adds an extra layer of security by requiring users to enter a time-based code from an authenticator app (like Google Authenticator or Authy) in addition to their password. This protects accounts even if passwords are compromised.
      </p>
      <p>
        To enable 2FA for a user, open their profile and toggle "Require Two-Factor Authentication." When they next log in, they'll be guided through setting up an authenticator app. Once configured, they'll enter both password and 6-digit code for each login.
      </p>
      <p>
        <em>Best Practice: Require 2FA for all Admin users and any Staff with access to Giving data. Consider making it optional-but-encouraged for other staff to improve overall security posture.</em>
      </p>

      <h3>User Activity Logs</h3>
      <p>
        Every user action in Relius is logged: who logged in when, what records they viewed or edited, which reports they ran, and what communications they sent. Access activity logs from a user's profile page or from the global audit log in Security Settings.
      </p>
      <p>
        Activity logs are essential for accountability and troubleshooting. If a member profile was accidentally deleted, check the logs to see who performed the action and when. If you're investigating who accessed a sensitive donor record, logs provide a complete audit trail.
      </p>
      <p>
        <em>Example: Your senior pastor asks, "Who changed the service time for the Easter event?" Check the event's activity log to see that the worship pastor edited it Tuesday at 2:47 PM, complete with before/after values for all changed fields.</em>
      </p>

      <details>
        <summary>Advanced Features</summary>
        
        <h4>Custom Roles</h4>
        <p>
          Need a role that doesn't fit the standard Admin/Staff/Leader/Member structure? Create a custom role with precisely defined permissions. For example, create a "Financial Secretary" role with full Giving access, limited People access (view only), and no access to Events or Groups. Or create a "Social Media Manager" role with Communications send permissions but no access to member data.
        </p>

        <h4>Temporary Access Grants</h4>
        <p>
          Give someone elevated permissions for a limited time period. For example, grant a volunteer full access to event registration during your VBS week, then automatically revoke it afterward. Set an expiration date when granting permissions, and Relius will downgrade the user to their base role when the period ends.
        </p>

        <h4>Delegation and Substitute Users</h4>
        <p>
          Allow a staff member to temporarily delegate their permissions to someone else when they're on vacation. The children's pastor going on sabbatical can delegate their access to an interim coordinator for three months. Delegated access automatically expires, and all actions are logged under both the delegator and delegate's names for accountability.
        </p>

        <h4>Access Request Workflow</h4>
        <p>
          Enable self-service permission requests: a Leader can request temporary Staff access for an upcoming event, triggering an approval workflow to an Admin. This reduces bottlenecks while maintaining administrative oversight.
        </p>

        <h4>Single Sign-On (SSO) Integration</h4>
        <p>
          For larger churches with enterprise IT infrastructure, integrate Relius with your existing SSO provider (Google Workspace, Microsoft 365, Okta). Users log in with their existing credentials, and Relius automatically provisions accounts based on your SSO directory groups and attributes.
        </p>

        <h4>User Deactivation vs. Deletion</h4>
        <p>
          When staff leave, you can deactivate their account (preserving their activity history and record associations) or permanently delete it (removing all traces). Deactivation is recommended for audit trail integrity—their name remains associated with past actions, but they can't log in. Deletion is only used for data privacy compliance or test accounts.
        </p>

        <h4>Scheduled Permission Changes</h4>
        <p>
          Schedule permission changes to take effect at a specific date/time. For example, when promoting an intern to full-time staff next month, schedule their role upgrade to coincide with their start date. Useful for coordinating access changes with personnel transitions.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Use the principle of least privilege</strong> – Grant only the permissions necessary for each role</li>
        <li><strong>Enable 2FA for all admins and financial staff</strong> – Protect sensitive data with an extra security layer</li>
        <li><strong>Review user access quarterly</strong> – Remove departed staff, adjust permissions for role changes</li>
        <li><strong>Document custom permission decisions</strong> – Keep notes explaining why certain users have non-standard access</li>
        <li><strong>Test new user accounts before sending invitations</strong> – Create a test Staff account to verify permissions work as expected</li>
        <li><strong>Use user groups for easier management</strong> – Assign permissions to groups (like "Pastoral Staff") rather than individually when possible</li>
        <li><strong>Monitor activity logs after granting elevated access</strong> – Check what new admins do in their first week to ensure appropriate usage</li>
        <li><strong>Establish an offboarding checklist</strong> – When staff leave, immediately deactivate their account, review their activity logs, and document their final actions</li>
      </ul>

      <h2>Common Questions</h2>

      <p><strong>Q: Can someone have multiple roles?</strong></p>
      <p>A: No, each user has exactly one role at a time. However, you can customize a role's permissions to combine capabilities from multiple default roles. For example, create a custom role with Staff-level People access plus Admin-level Giving access for a financial secretary.</p>

      <p><strong>Q: What happens when we deactivate a user account?</strong></p>
      <p>A: The user loses all access immediately and cannot log in. Their historical records (events they created, emails they sent, notes they added) remain intact and attributed to their name. Reactivate the account anytime to restore access with the same permissions.</p>

      <p><strong>Q: Can users change their own permissions?</strong></p>
      <p>A: No. Only Admin users can modify permissions for other accounts. Regular users can edit their profile details (name, photo, contact preferences) but cannot elevate their own access level or change permissions.</p>

      <p><strong>Q: How many admin accounts should we have?</strong></p>
      <p>A: Aim for 2-4 admins: typically the senior pastor, executive pastor, and one or two key office staff. Too many admins create security risks; too few creates bottlenecks when admin actions are needed.</p>

      <p><strong>Q: What if someone loses their 2FA device?</strong></p>
      <p>A: An admin can reset their 2FA requirement from the user's profile page. The user will be prompted to set up 2FA again with a new device on their next login. Keep backup codes or recovery methods documented for admins in case they lose access.</p>

      <p><strong>Q: Can we see what a user is currently doing in real-time?</strong></p>
      <p>A: Activity logs record completed actions but don't show real-time activity. You can see active sessions (who's currently logged in) from the User Management dashboard, but not specifically what screens they're viewing at the moment.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/getting-started/roles-permissions">User Roles & Permissions</a> – Understanding access levels</li>
        <li><a href="/resources/docs/admin/security">Security Settings</a> – Password policies, audit logs, session management</li>
        <li><a href="/resources/docs/admin/settings">Church Settings</a> – Configuring church-wide preferences</li>
        <li><a href="/resources/docs/admin">Administration Overview</a> – All administrative features</li>
        <li><a href="/resources/docs/getting-started/setup">Setting Up Your Church</a> – Initial setup guide</li>
      </ul>
    </div>
  );
}
