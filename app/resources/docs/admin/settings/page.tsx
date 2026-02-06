export default function ChurchSettingsPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Church Settings</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Configure your church's profile, branding, timezone, and feature preferences to customize how Relius works for your unique ministry context.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Church Settings is where you define the foundational information and preferences that shape your entire Relius experience. This includes your church's official name and contact details, visual branding like logos and colors, timezone and locale settings for accurate scheduling, and feature toggles that enable or disable specific capabilities based on your ministry needs.
      </p>
      <p>
        Think of this as your church's identity card within Relius. The information you configure here appears throughout the platform—on email footers, donation receipts, event registrations, your public website, and more. It's also where you make strategic decisions about which features to activate: Do you want to enable online giving? Should members be able to register for events publicly? Will you use the volunteer scheduling system?
      </p>
      <p>
        Most churches configure these settings once during initial setup, then return occasionally to update contact information, refresh branding, or enable new features as their ministry expands. The interface is organized into logical sections, making it easy to find and adjust specific settings without wading through unnecessary options.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Church Profile</strong>: Your official name, address, contact info, and legal entity details</li>
        <li><strong>Branding</strong>: Visual identity including logo, colors, fonts, and imagery that reflect your church's style</li>
        <li><strong>Timezone</strong>: The local time zone for your church, ensuring events and communications display correctly</li>
        <li><strong>Locale</strong>: Language and regional preferences for date formats, currency, and measurements</li>
        <li><strong>Feature Toggles</strong>: Switches that enable or disable specific Relius capabilities based on your ministry model</li>
        <li><strong>Public Visibility</strong>: Controls which information appears on your public-facing website versus internal tools</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Access Church Settings</h3>
      <p>
        From your dashboard, click <strong>Administration</strong> in the main navigation, then select <strong>Settings → Church Settings</strong>. Alternatively, click your profile icon in the top-right and choose "Church Settings" from the dropdown.
      </p>

      <h3>Step 2: Complete General Information</h3>
      <p>
        Start with the basics: official church name, physical address, phone number, email address, and website URL. This information must be accurate—it appears on tax receipts, legal documents, and communications with your congregation. If your church has a DBA (doing business as) name, enter both the legal name and common name.
      </p>

      <h3>Step 3: Upload Your Logo and Set Brand Colors</h3>
      <p>
        Navigate to the <strong>Branding</strong> tab. Upload your church logo in SVG or PNG format (recommended size: 200x200 pixels or larger for clarity). Set your primary brand color (typically your church's main color) and accent color. These colors will be applied to buttons, headers, and other UI elements throughout Relius and your public website.
      </p>

      <h3>Step 4: Configure Timezone and Locale</h3>
      <p>
        In the <strong>Regional Settings</strong> section, select your timezone from the dropdown list. This is critical for accurate event scheduling and communication timing. Also choose your preferred date format (MM/DD/YYYY vs DD/MM/YYYY), time format (12-hour vs 24-hour), and currency symbol if you're outside the United States.
      </p>

      <h2>Features</h2>

      <h3>General Settings</h3>
      <p>
        Your church profile includes both required and optional fields. Required fields include church name, address, primary contact email, and phone number. Optional fields include secondary phone numbers, fax (if applicable), founding year, denomination, and staff count. While optional fields aren't necessary for system operation, they provide valuable context and may be displayed on your public website's About page.
      </p>
      <p>
        <em>Example: Grace Community Church enters their official legal name "Grace Community Church, Inc." but sets their display name as "Grace Community" for brevity on emails and the website. They include both their main office phone and an after-hours emergency contact number.</em>
      </p>

      <h3>Branding Customization</h3>
      <p>
        Branding settings let you infuse your church's visual identity throughout Relius. Upload a logo that will appear on emails, receipts, and your public website header. Select a primary color (used for buttons, links, and accents) and secondary color (used for hover states and secondary actions). You can also upload a favicon (the small icon that appears in browser tabs) and a background image for your public website hero section.
      </p>
      <p>
        Color recommendations: Choose colors with sufficient contrast for accessibility. Your primary color should be bold and recognizable, while your secondary color should complement without overwhelming. Most churches use their existing brand colors from print materials and signage.
      </p>

      <h3>Timezone & Regional Settings</h3>
      <p>
        Timezone configuration ensures that events, email send times, and report dates align with your local time. If your church has multiple campuses in different timezones, select the timezone for your primary campus as the default. You can override timezone settings for individual events or campuses as needed.
      </p>
      <p>
        Locale settings control how dates, times, numbers, and currency display. US churches typically use MM/DD/YYYY dates, 12-hour time, and dollar signs. Canadian churches might use DD/MM/YYYY and 24-hour time. International churches can select their local currency symbol for financial reports.
      </p>

      <h3>Feature Toggles</h3>
      <p>
        Feature toggles give you granular control over which Relius capabilities are active for your church. This prevents overwhelming new users with features they don't need yet and allows you to roll out capabilities strategically as your team adopts the platform.
      </p>
      <p>
        Common feature toggles include:
      </p>
      <ul>
        <li><strong>Online Giving</strong> – Enable or disable the donation portal and Stripe integration</li>
        <li><strong>Public Event Registration</strong> – Allow website visitors to RSVP for events without logging in</li>
        <li><strong>Volunteer Scheduling</strong> – Activate the teams and scheduling module for service planning</li>
        <li><strong>Small Group Finder</strong> – Make groups searchable on your public website</li>
        <li><strong>Member Portal</strong> – Let congregation members log in to update their profile and access resources</li>
        <li><strong>Check-In System</strong> – Enable QR code check-in for events and services</li>
        <li><strong>AI Features</strong> – Activate AI-powered tools like sermon planning and content generation</li>
      </ul>
      <p>
        <em>Recommendation: Start with core features (People, Events, Communications) enabled, then gradually activate advanced features (Online Giving, Volunteer Scheduling, AI Tools) as your team grows comfortable with the basics.</em>
      </p>

      <h3>Contact Preferences</h3>
      <p>
        Configure default communication settings that apply church-wide. Set your default "from" email address for system-generated messages (like event confirmations or password resets). Choose whether replies to automated emails should go to a monitored inbox or a no-reply address. Set default SMS sender ID if you use text messaging.
      </p>
      <p>
        You can also configure email footers that appear on all outbound communications, including your church's address, phone number, social media links, and an "unsubscribe" link for compliance with email regulations.
      </p>

      <details>
        <summary>Advanced Options</summary>
        
        <h4>Multi-Campus Configuration</h4>
        <p>
          If your church has multiple campuses, enable multi-campus mode and configure each location with its own address, contact information, and branding. You can set campus-specific event calendars, staff assignments, and even separate online giving designations for campus-specific projects. Global settings apply across all campuses unless overridden at the campus level.
        </p>

        <h4>Custom Domain Setup</h4>
        <p>
          By default, your public Relius website uses a subdomain like <code>gracechurch.relius.org</code>. For a more professional appearance, configure a custom domain like <code>www.gracechurch.com</code>. In Church Settings, enter your desired domain, then follow the DNS configuration instructions to point your domain to Relius's servers. SSL certificates are automatically provisioned for secure HTTPS connections.
        </p>

        <h4>Service Time Defaults</h4>
        <p>
          Set your regular service times (Sunday 9:00 AM and 11:00 AM, for example) so that recurring events and volunteer schedules default to these times. This reduces repetitive data entry when creating weekly services and schedules.
        </p>

        <h4>Custom Fields for Church Profile</h4>
        <p>
          Need to track additional information not included in standard fields? Add custom fields to your church profile, such as "Senior Pastor Tenure," "Average Weekend Attendance," or "Vision Statement." These fields can be displayed on your public website and used in reports.
        </p>

        <h4>Default Privacy Settings</h4>
        <p>
          Configure what information is visible by default when creating new member profiles or events. For example, should member phone numbers be visible to other members? Should event addresses be public or hidden? Set church-wide defaults here, then override on individual records as needed.
        </p>

        <h4>Fiscal Year Configuration</h4>
        <p>
          If your church operates on a fiscal year that doesn't match the calendar year (e.g., July 1–June 30), configure that here. Financial reports and year-end giving statements will align with your fiscal year dates.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Keep contact information current</strong> – Update immediately when your church moves, changes phone numbers, or switches email providers</li>
        <li><strong>Use high-quality logo files</strong> – Upload vector SVG files or high-resolution PNGs for crisp display on all devices</li>
        <li><strong>Test your brand colors for accessibility</strong> – Ensure sufficient contrast between text and backgrounds for readability</li>
        <li><strong>Enable features gradually</strong> – Don't overwhelm your team by turning on everything at once; roll out new capabilities as you master existing ones</li>
        <li><strong>Review settings after major changes</strong> – When your church merges, relocates, or rebrands, audit all settings to ensure consistency</li>
        <li><strong>Document why features are disabled</strong> – Keep notes about why certain capabilities are turned off (e.g., "Waiting for budget approval before enabling online giving")</li>
        <li><strong>Coordinate branding with your communications team</strong> – Ensure colors, logos, and messaging align with your broader church brand strategy</li>
      </ul>

      <h2>Common Questions</h2>

      <p><strong>Q: Can we change our church name after setup?</strong></p>
      <p>A: Yes, you can update your church name anytime from Church Settings. This will immediately update all system-generated documents and communications. However, changing your name doesn't automatically update historical records like old tax receipts or emails already sent.</p>

      <p><strong>Q: What happens if we select the wrong timezone?</strong></p>
      <p>A: Incorrect timezone settings can cause events to appear at wrong times for your members and send scheduled communications at odd hours. Fix it immediately by selecting the correct timezone from Church Settings. Existing events will automatically adjust to display correctly in the new timezone.</p>

      <p><strong>Q: Can different staff members have access to different feature toggles?</strong></p>
      <p>A: Feature toggles are church-wide settings—when a feature is enabled, all users with appropriate role permissions can access it. You can't enable Online Giving for some staff and hide it from others. Use user role permissions to control access to enabled features.</p>

      <p><strong>Q: Should we enable all AI features immediately?</strong></p>
      <p>A: Start with one or two AI features that address your most pressing needs (e.g., AI Sermon Planner or AI Content Studio), learn how they work, then expand usage. AI tools are most effective when your team understands their capabilities and limitations.</p>

      <p><strong>Q: How do we add multiple logos for different campuses or ministries?</strong></p>
      <p>A: Enable multi-campus mode, then configure campus-specific branding for each location. Each campus can have its own logo, colors, and contact information while sharing a unified database of members and events.</p>

      <p><strong>Q: Can we schedule when a feature toggle activates?</strong></p>
      <p>A: Feature toggles take effect immediately when you enable them—there's no delayed activation. If you want to prep a feature for launch (like setting up online giving before announcing it), configure the feature fully while keeping the toggle disabled, then flip the switch when you're ready to go live.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/getting-started/setup">Setting Up Your Church</a> – Initial configuration guide</li>
        <li><a href="/resources/docs/admin/users">User Management</a> – Controlling access to settings</li>
        <li><a href="/resources/docs/admin/integrations">Integrations</a> – Connecting external services</li>
        <li><a href="/resources/docs/website/setup">Website Setup</a> – Configuring your public website</li>
        <li><a href="/resources/docs/website/branding">Branding & Colors</a> – Advanced visual customization</li>
        <li><a href="/resources/docs/admin">Administration Overview</a> – All admin features</li>
      </ul>
    </div>
  );
}
