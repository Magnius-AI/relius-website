export default function IntegrationsPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Integrations</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Connect Relius with Stripe for online giving, CCLI for worship licensing, Google Calendar for event sync, and custom webhooks to extend functionality and streamline workflows.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Integrations transform Relius from a standalone platform into the central hub of your church's digital ecosystem. Instead of manually entering online donations, Stripe integration flows them automatically into your database. Instead of tracking song usage in a spreadsheet, CCLI integration reports to your licensing account instantly. Instead of double-entering events in Relius and Google Calendar, calendar sync keeps both systems aligned with zero extra work.
      </p>
      <p>
        Think of integrations as bridges between Relius and the external tools your church already uses. Each integration eliminates manual data entry, reduces errors, and creates seamless experiences for both staff and congregation. When someone makes an online gift, it appears in Relius immediately. When you create a worship service plan, the song usage automatically reports to CCLI. When you schedule an event, it syncs to your church's Google Calendar visible to the entire team.
      </p>
      <p>
        Setting up integrations typically takes 5-15 minutes per service. Most churches start with Stripe (if they accept online giving) and CCLI (if they track worship licensing), then gradually add calendar sync, webhooks, and other connections as their needs evolve. The Administration → Integrations dashboard provides a centralized place to manage all external connections, test their functionality, and troubleshoot issues.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Integration</strong>: A connection between Relius and an external service that enables automatic data exchange</li>
        <li><strong>API Key</strong>: A credential that authorizes Relius to access your account on an external service</li>
        <li><strong>Webhook</strong>: An automated notification that Relius sends to an external URL when specific events occur</li>
        <li><strong>OAuth</strong>: A secure authorization method where you grant Relius limited access without sharing passwords</li>
        <li><strong>Sync</strong>: Bidirectional or unidirectional data flow that keeps Relius and an external service updated</li>
        <li><strong>Test Mode</strong>: A sandbox environment for safely testing integration functionality before going live</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Access Integrations</h3>
      <p>
        From your dashboard, navigate to <strong>Administration → Integrations</strong>. You'll see a list of available integrations with their current status (Not Connected, Connected, Error). Click any integration to view setup instructions and configuration options.
      </p>

      <h3>Step 2: Choose Your First Integration</h3>
      <p>
        Start with integrations that solve your most pressing needs. If you plan to accept online donations, set up Stripe first. If you project worship songs and need CCLI reporting, connect CCLI. If your staff manages schedules across multiple calendars, enable Google Calendar sync.
      </p>

      <h3>Step 3: Follow the Setup Wizard</h3>
      <p>
        Each integration includes a guided setup wizard. For Stripe, you'll create or connect your Stripe account and authorize Relius to process payments. For CCLI, you'll enter your CCLI license number and authorize reporting. For Google Calendar, you'll authenticate with Google and choose which calendar to sync. Most wizards complete in under 5 minutes.
      </p>

      <h3>Step 4: Test the Integration</h3>
      <p>
        After setup, always test! For Stripe, process a $1 test donation to verify it appears in Relius. For CCLI, add a song to a service plan and confirm it reports correctly. For Google Calendar, create a test event and check that it syncs. Testing catches configuration errors before they affect real ministry workflows.
      </p>

      <h2>Features</h2>

      <h3>Stripe Setup for Online Giving</h3>
      <p>
        Stripe integration enables your church to accept credit cards, debit cards, ACH bank transfers, and digital wallets (Apple Pay, Google Pay) for donations. Once connected, donors give through your Relius-powered giving page, and transactions automatically flow into your donation records with full details: donor, amount, payment method, fund designation, and fee breakdown.
      </p>
      <p>
        <strong>Setup steps:</strong>
      </p>
      <ol>
        <li>Navigate to <strong>Integrations → Stripe</strong> and click "Connect Stripe Account"</li>
        <li>If you have an existing Stripe account, log in and authorize Relius. If not, create a new account through the wizard</li>
        <li>Configure your giving page settings: donation amounts, default fund, custom fields, and branding</li>
        <li>Enable payment methods: credit/debit cards (always enabled), ACH (lower fees but slower), and digital wallets</li>
        <li>Set up recurring giving: allow donors to schedule weekly, monthly, or custom frequency donations</li>
        <li>Test mode: Process test donations using Stripe test card numbers to verify everything works</li>
        <li>Go live: Toggle "Enable Live Mode" to start accepting real donations</li>
      </ol>
      <p>
        Stripe takes a percentage-based fee (typically 2.9% + $0.30 per transaction for cards, 0.8% capped at $5 for ACH). You can choose to absorb these fees or allow donors to cover them with an optional checkbox at checkout.
      </p>
      <p>
        <em>Example: Calvary Chapel connects Stripe, customizes their giving page with their logo and brand colors, enables both credit cards and ACH, and tests with a $1 donation. Once verified, they announce online giving to the congregation via email and Sunday bulletin, seeing their first real donation within hours.</em>
      </p>

      <h3>CCLI Integration for Worship Reporting</h3>
      <p>
        If your church holds a CCLI (Christian Copyright Licensing International) license for projecting song lyrics, playing recorded music, or printing song sheets, CCLI integration automatically reports your song usage. Whenever you add a song to a worship service plan in Relius, it reports to your CCLI account—no manual logs, no forgotten songs, perfect compliance.
      </p>
      <p>
        <strong>Setup steps:</strong>
      </p>
      <ol>
        <li>Navigate to <strong>Integrations → CCLI</strong> and click "Connect CCLI"</li>
        <li>Enter your CCLI license number (found on your CCLI account or annual renewal invoice)</li>
        <li>Authorize Relius to report on your behalf using CCLI's secure authorization</li>
        <li>Optionally enable "Auto-report" (reports usage weekly) or "Manual approval" (review reports before submission)</li>
        <li>Map your song library: Relius attempts to match songs in your database with CCLI's database using titles and authors</li>
        <li>Review and confirm matches, manually link any unmatched songs</li>
      </ol>
      <p>
        Once integrated, every time you finalize a service plan with songs, Relius logs the usage for CCLI reporting. You can review pending reports before submission or let Relius handle it automatically. This eliminates the tedious task of manually logging every song for every service.
      </p>

      <h3>Google Calendar Sync</h3>
      <p>
        Google Calendar integration keeps your church's events synchronized with a Google Calendar that your staff can view across all devices. When you create an event in Relius, it appears on the calendar. When you update an event, the calendar entry updates. When you cancel an event, the calendar entry is removed. Two-way sync means changes in either system propagate to the other.
      </p>
      <p>
        <strong>Setup steps:</strong>
      </p>
      <ol>
        <li>Navigate to <strong>Integrations → Google Calendar</strong> and click "Connect Google Calendar"</li>
        <li>Sign in with a Google account that has access to your church's calendar (typically a shared church account or admin's account)</li>
        <li>Grant Relius permission to read and write calendar events</li>
        <li>Select which Relius event categories sync to the calendar (e.g., sync public events but not internal staff meetings)</li>
        <li>Choose sync direction: Relius → Google (one-way), Google → Relius (one-way), or bidirectional</li>
        <li>Test by creating an event in Relius and confirming it appears in Google Calendar within a minute</li>
      </ol>
      <p>
        <em>Use case: Your worship pastor creates a "Rehearsal - Easter Sunday" event in Relius for the worship team. It automatically appears on the church's Google Calendar that staff check daily. When the pastor updates the rehearsal time, the calendar updates instantly. No double entry, no miscommunication.</em>
      </p>

      <h3>Webhooks for Custom Integrations</h3>
      <p>
        Webhooks allow you to build custom integrations with tools and platforms not natively supported by Relius. A webhook is an automated HTTP request that Relius sends to a URL you specify when certain events occur—like when a new member is added, a donation is received, or an event is created. Your custom application receives the webhook, processes the data, and takes whatever action you programmed.
      </p>
      <p>
        <strong>Common webhook uses:</strong>
      </p>
      <ul>
        <li><strong>CRM integration:</strong> Send new member data to Salesforce, HubSpot, or a custom CRM</li>
        <li><strong>Accounting sync:</strong> Push donation data to QuickBooks or Xero for financial reconciliation</li>
        <li><strong>Notification systems:</strong> Trigger Slack messages, SMS alerts, or push notifications when specific events happen</li>
        <li><strong>Data warehouse:</strong> Stream Relius data to your church's analytics platform or data lake</li>
        <li><strong>Custom workflows:</strong> Chain actions across multiple systems (e.g., new donor → add to email list → send welcome email → create task in project management tool)</li>
      </ul>
      <p>
        <strong>Setup steps:</strong>
      </p>
      <ol>
        <li>Build a webhook receiver endpoint (a web URL that accepts POST requests with JSON payloads)</li>
        <li>Navigate to <strong>Integrations → Webhooks</strong> and click "Add Webhook"</li>
        <li>Enter your endpoint URL and select which events trigger the webhook (e.g., "Member Created," "Donation Received")</li>
        <li>Optionally configure authentication (API key, basic auth, or custom headers)</li>
        <li>Test by clicking "Send Test Payload" to verify your endpoint receives and processes the data</li>
        <li>Enable the webhook to start receiving real events</li>
      </ol>
      <p>
        <em>Example: A tech-savvy church builds a custom mobile app. They create webhooks for "Event Created" and "Event Updated" that send data to their app's backend API. When staff add events in Relius, they instantly appear in the mobile app without manual publishing.</em>
      </p>

      <details>
        <summary>Advanced Features</summary>
        
        <h4>Stripe Fee Handling Options</h4>
        <p>
          Configure how transaction fees are handled: absorb all fees (church pays), pass fees to donors (optional checkbox to "cover processing costs"), or hybrid (church pays ACH fees, donors cover card fees). You can even display the effective fee percentage to donors for transparency.
        </p>

        <h4>Multi-Campus Stripe Accounts</h4>
        <p>
          For multi-campus churches, connect separate Stripe accounts for each campus so donations flow to campus-specific bank accounts. Donors select their campus during checkout, and Relius routes the payment to the appropriate Stripe account automatically.
        </p>

        <h4>CCLI Song Library Auto-Sync</h4>
        <p>
          Enable automatic synchronization between your Relius song library and CCLI's database. When CCLI updates song metadata (corrected songwriter, alternate titles), Relius pulls the changes to keep your library accurate. Saves hours of manual updates.
        </p>

        <h4>Google Calendar Event Filtering</h4>
        <p>
          Create sophisticated rules for which events sync to Google Calendar based on event type, campus, visibility, or custom fields. For example, sync only public-facing events, or create separate calendars for staff events, member events, and facility rentals.
        </p>

        <h4>Webhook Retry Logic and Failure Alerts</h4>
        <p>
          If your webhook endpoint is unreachable or returns an error, Relius automatically retries with exponential backoff (immediate, 1 minute, 5 minutes, 30 minutes, 2 hours). After 5 failed attempts, it sends an alert to admins and disables the webhook. View failed deliveries and manually retry when your system is back online.
        </p>

        <h4>Webhook Payload Customization</h4>
        <p>
          Transform webhook payloads to match the format your external system expects. Use Relius's webhook template engine to map Relius fields to different JSON structures, filter sensitive data, or enrich payloads with computed values.
        </p>

        <h4>Integration Health Monitoring</h4>
        <p>
          The Integrations dashboard shows real-time health status for each connection: green (working normally), yellow (minor issues, like delayed sync), or red (failed, needs attention). Click any integration to see detailed logs, error messages, and suggested fixes.
        </p>

        <h4>OAuth Token Refresh Automation</h4>
        <p>
          Integrations using OAuth (like Google Calendar) automatically refresh access tokens before they expire, ensuring uninterrupted connectivity. If refresh fails (e.g., you revoked access in Google), Relius alerts you to reconnect the integration.
        </p>

        <h4>Integration Usage Analytics</h4>
        <p>
          Track how much you're using each integration: donations processed through Stripe, songs reported to CCLI, events synced to Google Calendar, webhooks delivered. Helps justify subscription costs and identify underutilized integrations.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Test all integrations in test mode before going live</strong> – Avoid embarrassing mistakes like sending test donations to real accounts</li>
        <li><strong>Use a dedicated church email for OAuth integrations</strong> – Don't tie Google Calendar or other services to personal accounts that might leave when staff transition</li>
        <li><strong>Document your integrations</strong> – Keep notes about which accounts are connected, who set them up, and any custom configuration details</li>
        <li><strong>Monitor integration health weekly</strong> – Check the Integrations dashboard for errors or warnings and resolve issues promptly</li>
        <li><strong>Review Stripe fees monthly</strong> – Track processing costs and consider enabling ACH to reduce fees for larger donations</li>
        <li><strong>Rotate API keys annually</strong> – Regenerate keys used for custom integrations to maintain security</li>
        <li><strong>Limit webhook events to what you actually need</strong> – Don't send "Member Updated" webhooks if your integration only cares about new members</li>
        <li><strong>Set up integration failure alerts</strong> – Ensure admins receive notifications when integrations break so you can fix them quickly</li>
      </ul>

      <h2>Common Questions</h2>

      <p><strong>Q: Can we use a different payment processor instead of Stripe?</strong></p>
      <p>A: Currently, Relius integrates natively with Stripe for online giving. If you use another processor, you can manually record donations or build a custom webhook integration to flow transactions into Relius automatically.</p>

      <p><strong>Q: What happens to donations if the Stripe integration breaks?</strong></p>
      <p>A: Donations still process successfully in Stripe (donors are charged), but they may not automatically flow into Relius until you fix the integration. Check your Stripe dashboard for transactions and manually import them if needed.</p>

      <p><strong>Q: Do we need a CCLI license to use the CCLI integration?</strong></p>
      <p>A: Yes. The integration reports song usage to an existing CCLI account—it doesn't provide a license. If you project lyrics or use recorded music, obtain a CCLI license first, then connect the integration for automated reporting.</p>

      <p><strong>Q: Can we sync Relius events to multiple Google Calendars?</strong></p>
      <p>A: Yes! Create multiple Google Calendar integrations, each connected to a different calendar. Use filtering rules to route events to the appropriate calendar (e.g., public events to "Church Events Calendar," staff meetings to "Staff Calendar").</p>

      <p><strong>Q: What data do webhooks send to external systems?</strong></p>
      <p>A: Webhooks send JSON payloads containing the relevant record data (e.g., member name, email, phone for "Member Created" events). You control which events trigger webhooks and can filter sensitive fields using payload customization.</p>

      <p><strong>Q: How do we disconnect an integration we're no longer using?</strong></p>
      <p>A: Navigate to the integration's settings page and click "Disconnect." This revokes Relius's access to the external service and stops all data flow. You can reconnect anytime by running the setup wizard again.</p>

      <p><strong>Q: Are there monthly fees for integrations?</strong></p>
      <p>A: Stripe charges per-transaction fees (percentage + flat rate), not a monthly fee. CCLI requires a separate annual license fee. Google Calendar is free. Webhook integrations are included in your Relius subscription with no additional cost (beyond your own hosting for webhook receiver endpoints).</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/giving/online-setup">Online Giving Setup</a> – Detailed Stripe configuration guide</li>
        <li><a href="/resources/docs/services/song-library">Song Library</a> – Managing worship songs for CCLI reporting</li>
        <li><a href="/resources/docs/events/calendar">Event Calendar</a> – Creating events that sync to external calendars</li>
        <li><a href="/resources/docs/admin/security">Security Settings</a> – API key management and security</li>
        <li><a href="/resources/docs/admin/data">Data Management</a> – Import/export for integration data</li>
        <li><a href="/resources/docs/admin">Administration Overview</a> – All administrative features</li>
      </ul>
    </div>
  );
}
