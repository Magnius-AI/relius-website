export default function SecuritySettingsPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Security Settings</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Protect your church's sensitive data with password policies, session management, comprehensive audit logs, and secure API key controls.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Security Settings is your control center for protecting the sensitive information your church stewards: member contact details, donor giving history, pastoral care notes, and confidential communications. This section lets you establish password requirements, configure automatic session timeouts, review detailed audit logs of who accessed what data and when, and manage API keys for custom integrations.
      </p>
      <p>
        Church data breaches can devastate trust and violate both ethical and legal obligations. Relius takes security seriously with enterprise-grade encryption, secure authentication, and comprehensive logging—but the configuration matters. Security Settings puts you in control: you decide how complex passwords must be, how long sessions can remain active, which actions require additional verification, and who can access sensitive areas.
      </p>
      <p>
        Think of security as both prevention and accountability. Strong password policies and session management prevent unauthorized access. Audit logs provide accountability by recording every action, creating a transparent trail that helps you investigate incidents, demonstrate compliance, and build confidence that data is handled responsibly. For most churches, configuring these settings once during initial setup, then reviewing quarterly, provides robust protection without creating friction for daily work.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Password Policy</strong>: Rules governing password complexity, length, and expiration to prevent weak credentials</li>
        <li><strong>Session</strong>: An active login period that begins when a user logs in and ends when they logout or the session expires</li>
        <li><strong>Session Timeout</strong>: Automatic logout after a period of inactivity to protect unattended computers</li>
        <li><strong>Audit Log</strong>: A chronological record of all significant actions performed in the system, including who, what, and when</li>
        <li><strong>API Key</strong>: A secure credential used by external applications to access Relius data programmatically</li>
        <li><strong>Two-Factor Authentication (2FA)</strong>: An additional security layer requiring both password and a time-based code</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Access Security Settings</h3>
      <p>
        From your dashboard, navigate to <strong>Administration → Security</strong>. You'll see tabs for Password Policy, Session Management, Audit Logs, and API Keys. Start with Password Policy to establish baseline security requirements.
      </p>

      <h3>Step 2: Configure Password Requirements</h3>
      <p>
        Set minimum password length (recommended: at least 12 characters), require a mix of uppercase, lowercase, numbers, and special characters, and decide whether passwords should expire periodically. Enable password history to prevent users from reusing recent passwords. Click <strong>Save Policy</strong> to apply these rules to all future password changes.
      </p>

      <h3>Step 3: Set Session Timeout</h3>
      <p>
        In the Session Management tab, configure how long inactive sessions remain valid. Most churches use 30-60 minutes for general staff and 15-30 minutes for users with access to financial data. This ensures that unattended computers automatically log out, preventing unauthorized access if someone walks away from their desk.
      </p>

      <h3>Step 4: Review Audit Logs</h3>
      <p>
        Visit the Audit Logs tab to see recent activity across your Relius account. Filter by user, action type, date range, or specific records to investigate specific events. Familiarize yourself with the log format so you can quickly answer questions like "Who deleted that member profile?" or "When did we send that email campaign?"
      </p>

      <h2>Features</h2>

      <h3>Password Policies</h3>
      <p>
        Password policies enforce minimum security standards for all user accounts. When you set a policy, it applies immediately to new passwords (when users sign up, reset passwords, or voluntarily change them) but doesn't force existing users to change passwords unless you enable password expiration.
      </p>
      <p>
        Recommended settings for most churches:
      </p>
      <ul>
        <li><strong>Minimum length:</strong> 12 characters (balances security and memorability)</li>
        <li><strong>Complexity:</strong> Require at least one uppercase, one lowercase, one number, and one special character</li>
        <li><strong>Password expiration:</strong> Optional; 90 days for high-security environments, disabled for most churches</li>
        <li><strong>Password history:</strong> Prevent reuse of last 5 passwords</li>
        <li><strong>Common password blocking:</strong> Reject passwords from known breach databases (e.g., "Password123!")</li>
      </ul>
      <p>
        <em>Example: First Baptist Church sets a 14-character minimum with complexity requirements but disables expiration. They reason that forcing quarterly password changes leads to weaker passwords (people just increment numbers), while longer, complex passwords that don't expire provide better security when combined with 2FA for admins.</em>
      </p>

      <h3>Session Management</h3>
      <p>
        Sessions represent active logins. When someone logs into Relius, a session begins and remains valid until they logout, the session times out due to inactivity, or you manually terminate it. Session management settings control how long sessions stay active and what triggers automatic logout.
      </p>
      <p>
        Key session settings:
      </p>
      <ul>
        <li><strong>Idle timeout:</strong> Log out after X minutes of inactivity (default: 30 minutes)</li>
        <li><strong>Absolute timeout:</strong> Force logout after X hours regardless of activity (default: 8 hours)</li>
        <li><strong>Remember me:</strong> Allow users to stay logged in for 30 days on trusted devices</li>
        <li><strong>Concurrent sessions:</strong> Limit users to one active session (logging in elsewhere logs out previous session)</li>
      </ul>
      <p>
        Balance security with usability: shorter timeouts are more secure but frustrate staff who get logged out frequently. Consider role-based timeout policies—admins get 15-minute idle timeout, while general staff get 60 minutes.
      </p>
      <p>
        <em>Scenario: Your finance team works with giving data in secure offices with locked doors. You set a 60-minute idle timeout for their accounts, trusting physical security. But for admins who might access Relius from coffee shops, you enforce 15-minute timeouts and disable "remember me" to protect credentials on shared or mobile devices.</em>
      </p>

      <h3>Audit Logs</h3>
      <p>
        Audit logs record every significant action in Relius, creating a comprehensive history for accountability, troubleshooting, and compliance. Each log entry includes the user who performed the action, exactly what they did, which record(s) were affected, when it happened, and the user's IP address.
      </p>
      <p>
        Common audit log uses:
      </p>
      <ul>
        <li><strong>Investigating changes:</strong> "Who updated this member's address?" Check the member's audit log to see the user and timestamp</li>
        <li><strong>Security monitoring:</strong> Review login attempts, failed authentication, and unusual activity patterns</li>
        <li><strong>Compliance reporting:</strong> Demonstrate who accessed sensitive donor data for regulatory audits</li>
        <li><strong>Troubleshooting:</strong> Trace the sequence of actions leading to a problem ("Who deleted the Easter event?")</li>
        <li><strong>Training:</strong> Review what new staff are doing to ensure proper system usage</li>
      </ul>
      <p>
        Logs are retained for 1 year by default (configurable up to 7 years for compliance needs). Export logs as CSV for long-term archival or analysis in external tools.
      </p>
      <p>
        <em>Example: A donor calls claiming they never received a tax receipt. Check audit logs to see that their email bounced in January, then someone updated their email address in March but forgot to regenerate the receipt. Logs prove you attempted delivery and show exactly when the address changed, helping you provide great customer service.</em>
      </p>

      <h3>API Key Management</h3>
      <p>
        API keys allow external applications and custom integrations to access Relius data programmatically. For example, if you build a custom iOS app that displays upcoming events, that app needs an API key to authenticate requests to Relius's servers.
      </p>
      <p>
        API key best practices:
      </p>
      <ul>
        <li><strong>Create keys for specific purposes:</strong> "Mobile App API," "Website Integration," "Data Sync Script"</li>
        <li><strong>Assign minimal permissions:</strong> Each key should only have access to the data it needs (e.g., "Events: Read Only")</li>
        <li><strong>Rotate keys regularly:</strong> Regenerate keys every 6-12 months or immediately if compromised</li>
        <li><strong>Monitor usage:</strong> Track API calls per key to detect unusual activity or abuse</li>
        <li><strong>Revoke unused keys:</strong> Delete keys when integrations are retired to reduce attack surface</li>
      </ul>
      <p>
        When you create an API key, Relius displays the secret key once—copy it immediately and store securely (like in a password manager or environment variables). If you lose the key, you'll need to regenerate it, which breaks the integration until you update the application with the new key.
      </p>

      <details>
        <summary>Advanced Options</summary>
        
        <h4>IP Whitelisting</h4>
        <p>
          Restrict access to Relius from specific IP addresses or ranges. Useful if your staff always works from the church office or specific remote locations. Enable IP whitelisting and add approved addresses; login attempts from other IPs will be blocked even with correct credentials. Caution: can lock out mobile/remote workers if not carefully planned.
        </p>

        <h4>Failed Login Lockout</h4>
        <p>
          Protect against brute-force password attacks by locking accounts after a certain number of failed login attempts. Set the threshold (e.g., 5 failed attempts) and lockout duration (e.g., 30 minutes). Admin users can manually unlock accounts from the User Management dashboard if legitimate users get locked out.
        </p>

        <h4>Sensitive Data Access Alerts</h4>
        <p>
          Configure real-time notifications when users access particularly sensitive information. For example, send an email to the senior pastor whenever someone views a specific donor's giving history or opens pastoral care notes for a high-profile member. Helps detect unauthorized snooping.
        </p>

        <h4>Audit Log Retention Policies</h4>
        <p>
          Extend log retention beyond the default 1 year for regulatory compliance or legal requirements. Some churches in highly regulated environments keep logs for 7 years to match financial record retention policies. Configure automatic archival to cold storage after 1 year to manage database size.
        </p>

        <h4>Role-Based Session Policies</h4>
        <p>
          Set different session timeout durations based on user role. Admins get shorter timeouts (15 minutes), financial staff get moderate timeouts (30 minutes), and general staff get longer timeouts (60 minutes). Balances security risk with usability for different access levels.
        </p>

        <h4>Custom Audit Log Exports</h4>
        <p>
          Create scheduled reports that automatically export audit logs matching specific criteria. For example, export all "Giving: View Donor History" actions weekly and email the report to your financial oversight committee. Enables ongoing monitoring without manual log reviews.
        </p>

        <h4>API Rate Limiting</h4>
        <p>
          Protect your Relius account from abuse by limiting API requests per key. Set hourly or daily limits based on expected usage patterns. If an API key exceeds the limit (potentially indicating a runaway script or malicious activity), requests are temporarily blocked and admins receive an alert.
        </p>

        <h4>Security Event Notifications</h4>
        <p>
          Enable email or SMS notifications for critical security events like admin password changes, new user creation, API key generation, or login from a new device. Provides real-time awareness of potentially suspicious activity so you can respond quickly.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Require longer passwords over complex rules</strong> – A 14-character passphrase beats an 8-character password with special characters</li>
        <li><strong>Enable 2FA for all admins and financial staff</strong> – Passwords alone aren't enough for sensitive access</li>
        <li><strong>Review audit logs monthly</strong> – Look for unusual patterns, unexpected access, or policy violations</li>
        <li><strong>Set role-appropriate session timeouts</strong> – Balance security and usability based on access level</li>
        <li><strong>Rotate API keys annually</strong> – Treat them like passwords that need periodic changes</li>
        <li><strong>Document your security policies</strong> – Write down your password requirements, timeout settings, and rationale so future admins understand the decisions</li>
        <li><strong>Test lockout procedures</strong> – Verify that failed login lockout works and admins know how to unlock accounts</li>
        <li><strong>Assign API keys minimal permissions</strong> – Never give an integration "full access" when it only needs read access to events</li>
        <li><strong>Monitor high-privilege accounts closely</strong> – Set up alerts for actions by admins and financial staff</li>
      </ul>

      <h2>Common Questions</h2>

      <p><strong>Q: Should we force password changes every 90 days?</strong></p>
      <p>A: Modern security guidance says no—frequent forced changes lead to weaker passwords (users just increment numbers or reuse passwords with minor modifications). Instead, use longer minimum lengths (12-14 characters), enable 2FA for sensitive roles, and only force changes when you suspect compromise.</p>

      <p><strong>Q: Can we see who viewed a specific donor's giving history?</strong></p>
      <p>A: Yes! Open the donor's profile, click the audit log icon, and filter for "View Donor History" actions. You'll see every user who accessed the page, when they did it, and from what IP address.</p>

      <p><strong>Q: What happens when someone's session times out?</strong></p>
      <p>A: They're automatically logged out and redirected to the login page. Any unsaved work is lost, so encourage staff to save frequently. Consider implementing auto-save for long-form content like sermon notes or email drafts.</p>

      <p><strong>Q: How do we handle API keys when a developer leaves?</strong></p>
      <p>A: Immediately revoke all API keys associated with that developer. Generate new keys, update your applications with the new credentials, and test integrations to ensure they still work. Treat API keys like passwords—change them when someone with access departs.</p>

      <p><strong>Q: Can we recover deleted audit logs?</strong></p>
      <p>A: No. Once logs reach the end of their retention period (1-7 years depending on configuration), they're permanently deleted. Export important logs to external archival systems if you need longer retention for legal or compliance reasons.</p>

      <p><strong>Q: What's the difference between audit logs and user activity logs?</strong></p>
      <p>A: They're the same thing, just different terminology. Both refer to the comprehensive record of actions performed in Relius. User activity logs focus on what a specific person did; audit logs provide a system-wide view of all activity.</p>

      <p><strong>Q: Should we enable IP whitelisting for better security?</strong></p>
      <p>A: Only if your staff consistently works from fixed locations (church office, specific homes). IP whitelisting dramatically improves security but breaks access for mobile workers, coffee shop WiFi, or travel. For most churches, 2FA provides better security without location restrictions.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/admin/users">User Management</a> – Managing accounts and permissions</li>
        <li><a href="/resources/docs/admin/settings">Church Settings</a> – Configuring church-wide preferences</li>
        <li><a href="/resources/docs/admin/data">Data Management</a> – Backup, export, and GDPR compliance</li>
        <li><a href="/resources/docs/admin/integrations">Integrations</a> – API key usage for external connections</li>
        <li><a href="/resources/docs/getting-started/roles-permissions">User Roles & Permissions</a> – Understanding access control</li>
        <li><a href="/resources/docs/admin">Administration Overview</a> – All administrative features</li>
      </ul>
    </div>
  );
}
