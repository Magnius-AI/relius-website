export default function EmailCampaignsPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>Email Campaigns</h1>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
        <strong>Quick Summary</strong>: Create beautiful, professional emails with templates, scheduling, personalization, and detailed analytics.
      </blockquote>

      <h2>Overview</h2>
      <p>
        Email remains one of the most effective ways to communicate with your congregation. Whether you're sending 
        weekly newsletters, event invitations, sermon follow-ups, or donor thank-you notes, Relius makes it easy 
        to create polished, engaging emails that reflect your church's heart.
      </p>
      <p>
        Our email campaign tool combines the simplicity of a drag-and-drop editor with powerful features like 
        audience segmentation, merge tags for personalization, scheduling, and detailed analytics. You'll know 
        exactly who opened your message, who clicked your links, and how to improve future campaigns.
      </p>
      <p>
        From your first welcome email to a member to a year-end giving campaign reaching thousands, Relius scales 
        with you—providing professional results without the complexity or cost of standalone marketing platforms.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Campaign</strong>: A single email message sent to a specific audience at a specific time</li>
        <li><strong>Template</strong>: A reusable email design with placeholders for content</li>
        <li><strong>Audience</strong>: The filtered group of recipients who will receive your email</li>
        <li><strong>Merge Tags</strong>: Dynamic placeholders like {"{{first_name}}"} that personalize each email</li>
        <li><strong>Open Rate</strong>: Percentage of recipients who opened your email</li>
        <li><strong>Click-through Rate (CTR)</strong>: Percentage who clicked a link in your email</li>
        <li><strong>Bounce</strong>: Failed delivery (hard bounce = bad email, soft bounce = temporary issue)</li>
        <li><strong>Unsubscribe</strong>: Recipient who opted out of future emails</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Navigate to Email Campaigns</h3>
      <p>
        Go to <strong>Communications → Email</strong> and click <strong>Create Campaign</strong>. You'll see a wizard 
        that walks you through audience selection, content creation, and scheduling.
      </p>

      <h3>Step 2: Choose Your Audience</h3>
      <p>
        Select who will receive this email:
      </p>
      <ul>
        <li><strong>Everyone</strong>: All members with email addresses</li>
        <li><strong>Specific Groups</strong>: Small groups, teams, or ministries</li>
        <li><strong>Custom Filter</strong>: Age range, attendance history, giving status, tags, etc.</li>
        <li><strong>Saved Segment</strong>: Reuse a previously saved audience filter</li>
      </ul>
      <p>
        Relius shows you the recipient count in real-time as you build your filter. Preview the list before sending 
        to ensure you've got the right people.
      </p>

      <h3>Step 3: Design Your Email</h3>
      <p>
        Choose from three options:
      </p>
      <ul>
        <li><strong>Start with a Template</strong>: Pick from pre-built designs (newsletter, event invite, announcement)</li>
        <li><strong>Start from Scratch</strong>: Blank canvas with drag-and-drop blocks</li>
        <li><strong>Plain Text</strong>: Simple, personal-looking emails without formatting</li>
      </ul>
      <p>
        Add text blocks, images, buttons, dividers, and social media links. Customize colors and fonts to match 
        your church branding. Insert merge tags to personalize greetings and content.
      </p>

      <h3>Step 4: Add Subject and Preview Text</h3>
      <p>
        Your subject line determines whether people open your email. Make it clear, compelling, and concise. 
        Example: "Sunday Service Updates & This Week's Events" or "You're Invited: Annual Church Picnic July 15th"
      </p>
      <p>
        Preview text appears next to the subject in inboxes—use it to extend your hook. Example: "Plus prayer 
        requests and volunteer opportunities you won't want to miss."
      </p>

      <h3>Step 5: Send or Schedule</h3>
      <p>
        Review your email, send a test to yourself or staff, then choose:
      </p>
      <ul>
        <li><strong>Send Now</strong>: Immediate delivery to all recipients</li>
        <li><strong>Schedule</strong>: Pick a date and time (e.g., Saturday 8 PM for Sunday morning delivery)</li>
      </ul>
      <p>
        You can edit or cancel scheduled campaigns anytime before the send time.
      </p>

      <h2>Features</h2>

      <h3>Email Templates</h3>
      <p>
        Save time with professionally designed templates:
      </p>
      <ul>
        <li><strong>Weekly Newsletter</strong>: Multi-section layout for announcements, events, sermon notes</li>
        <li><strong>Event Invitation</strong>: Eye-catching design with date, time, location, and RSVP button</li>
        <li><strong>Welcome Series</strong>: Onboard new members with a multi-email sequence</li>
        <li><strong>Donation Thank You</strong>: Warm, personalized receipt with impact story</li>
        <li><strong>Volunteer Recruitment</strong>: Highlight needs with sign-up links</li>
        <li><strong>Service Cancellation</strong>: Clear, urgent formatting for weather or emergency updates</li>
      </ul>
      <p>
        Customize any template and save it as your own for future use. Your brand colors and logo persist across all templates.
      </p>

      <h3>Personalization with Merge Tags</h3>
      <p>
        Make every email feel personal:
      </p>
      <ul>
        <li><code>{"{{first_name}}"}</code> → "Hi Sarah" instead of "Dear Member"</li>
        <li><code>{"{{family_name}}"}</code> → "The Johnson Family"</li>
        <li><code>{"{{primary_group}}"}</code> → "Your small group meets tonight at 7 PM"</li>
        <li><code>{"{{last_attendance}}"}</code> → "We missed you last Sunday!"</li>
        <li><code>{"{{volunteer_role}}"}</code> → "Thanks for serving as a greeter"</li>
      </ul>
      <p>
        Any custom field in your member profiles can be used as a merge tag. Relius automatically handles fallback 
        text if a field is empty (e.g., "Hi there" if first name is missing).
      </p>

      <h3>Scheduling & Automation</h3>
      <p>
        Plan your communication calendar in advance:
      </p>
      <ul>
        <li>Schedule weekly newsletters every Saturday at 8 PM</li>
        <li>Queue event reminders 7 days, 1 day, and 1 hour before start time</li>
        <li>Time Easter service invites to arrive on Ash Wednesday</li>
        <li>Send birthday emails at 8 AM on each member's birthday</li>
      </ul>
      <p>
        Set up automated workflows (under <strong>Communications → Automation</strong>) to trigger emails based on 
        events like first-time attendance, group enrollment, or donation milestones.
      </p>

      <h3>Analytics & Reporting</h3>
      <p>
        After sending, track performance in real-time:
      </p>
      <ul>
        <li><strong>Delivery Rate</strong>: How many emails successfully reached inboxes (aim for 98%+)</li>
        <li><strong>Open Rate</strong>: Industry average is 20-25%; churches often see 30-40%</li>
        <li><strong>Click-through Rate</strong>: Which links got clicked and by whom</li>
        <li><strong>Unsubscribes</strong>: Track opt-outs (1-2% is normal; higher signals a problem)</li>
        <li><strong>Bounces</strong>: Identify bad email addresses to clean up your database</li>
      </ul>
      <p>
        Click into any campaign to see individual member activity: who opened, who clicked, and who ignored. Use 
        this data to segment follow-up messages (e.g., resend to non-openers with a different subject line).
      </p>

      <details className="border rounded-lg p-4 mb-4">
        <summary className="font-semibold cursor-pointer">Advanced: A/B Testing</summary>
        <div className="mt-4 space-y-3">
          <p>
            Want to know which subject line performs better? Run an A/B test:
          </p>
          <ol>
            <li>Create your campaign and write two subject lines (e.g., "This Sunday: New Sermon Series" vs. "Don't Miss: Exciting Announcement This Sunday")</li>
            <li>Choose a test percentage (e.g., send variant A to 25%, variant B to 25%)</li>
            <li>Relius automatically sends the winning subject (higher open rate) to the remaining 50% after 2 hours</li>
          </ol>
          <p>
            You can also test email content, send times, or sender names. A/B testing helps you optimize over time 
            and learn what resonates with your specific congregation.
          </p>
          <p><strong>Pro Tip</strong>: Test one variable at a time. If you change both subject and content, you won't 
          know what caused the difference.</p>
        </div>
      </details>

      <details className="border rounded-lg p-4 mb-4">
        <summary className="font-semibold cursor-pointer">Advanced: Dynamic Content Blocks</summary>
        <div className="mt-4 space-y-3">
          <p>
            Show different content to different segments within the same email. For example:
          </p>
          <ul>
            <li>Display youth events only to families with teenagers</li>
            <li>Show giving summary to donors, volunteer opportunities to non-donors</li>
            <li>Include Spanish translation block for members with Spanish preference</li>
          </ul>
          <p>
            To use dynamic content:
          </p>
          <ol>
            <li>Add a <strong>Dynamic Block</strong> to your email</li>
            <li>Set conditions (e.g., "Show if age 13-18" or "Show if last donation &gt; 30 days ago")</li>
            <li>Design content for each variant or provide a default for unmatched recipients</li>
          </ol>
          <p>
            This creates a more personalized experience without managing multiple separate campaigns.
          </p>
        </div>
      </details>

      <details className="border rounded-lg p-4 mb-4">
        <summary className="font-semibold cursor-pointer">Advanced: Email Sequences</summary>
        <div className="mt-4 space-y-3">
          <p>
            Create multi-email drip campaigns that send automatically over time. Common sequences:
          </p>
          <ul>
            <li><strong>New Member Welcome</strong>: Day 1 (welcome), Day 3 (connect to a group), Day 7 (volunteer opportunities)</li>
            <li><strong>First-Time Guest Follow-up</strong>: Day 1 (thank you), Day 4 (invitation to next event), Day 10 (pastor introduction)</li>
            <li><strong>Giving Campaign</strong>: Week 1 (vision), Week 2 (impact stories), Week 3 (commitment Sunday)</li>
          </ul>
          <p>
            Set delays between emails, define exit conditions (e.g., unsubscribe or goal achieved), and track 
            sequence performance as a whole.
          </p>
        </div>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>One primary goal per email</strong>: Don't mix event RSVP, donation ask, and volunteer recruitment. Focus.</li>
        <li><strong>Write for mobile</strong>: 70% of emails are read on phones. Short paragraphs, big buttons, clear hierarchy.</li>
        <li><strong>Subject lines under 50 characters</strong>: Longer gets cut off on mobile. Be punchy.</li>
        <li><strong>Test on multiple devices</strong>: Send test emails to Gmail, Outlook, Apple Mail, and check mobile rendering</li>
        <li><strong>Avoid spam triggers</strong>: ALL CAPS, excessive exclamation marks!!!, and words like "free money" hurt deliverability</li>
        <li><strong>Include a clear call-to-action</strong>: Use buttons, not just text links. Make it obvious what you want people to do.</li>
        <li><strong>Clean your list regularly</strong>: Remove hard bounces and inactive addresses every quarter</li>
        <li><strong>Consistency breeds engagement</strong>: Send weekly at the same time so people expect and look for your email</li>
        <li><strong>Respect the unsubscribe</strong>: Make it easy to opt out. Forcing people to stay subscribed creates resentment.</li>
      </ul>

      <h2>Real-World Scenarios</h2>

      <h3>Scenario 1: Weekly Newsletter</h3>
      <p>
        Grace Community sends a Saturday evening email every week with sermon preview, upcoming events, volunteer 
        needs, and prayer requests. They use the newsletter template, personalize the greeting with first names, 
        and include a "Missed Last Week?" link to the sermon archive. Open rate: 42%. They schedule it at 8 PM 
        Saturday so it's in inboxes Sunday morning.
      </p>

      <h3>Scenario 2: Easter Service Promotion</h3>
      <p>
        Four weeks before Easter, Hope Church sends an initial save-the-date email. Two weeks out, they send a 
        detailed service schedule (Saturday 5 PM, Sunday 8 AM, 10 AM, 12 PM) with an "Invite a Friend" button 
        that lets members forward a special guest-friendly email. One day before, they send parking and childcare 
        logistics. Result: 400 guests, 15% conversion to members.
      </p>

      <h3>Scenario 3: Donor Thank You</h3>
      <p>
        When someone gives online, they automatically receive a personalized thank-you email within 5 minutes. 
        The email includes their donation amount, fund designation, a receipt for tax purposes, and a story about 
        the ministry impact. Donors who give $500+ receive a personal note from the pastor (triggered by a custom 
        workflow). This increased recurring giving by 18%.
      </p>

      <h2>Common Questions</h2>

      <p><strong>Q: Why are my emails going to spam?</strong></p>
      <p>
        A: Common causes include: (1) no authentication (SPF/DKIM records—contact support to set up), (2) spam 
        trigger words in subject/body, (3) high bounce/complaint rate from previous sends, (4) sending from a 
        personal Gmail instead of your church domain. Relius handles authentication automatically if you verify 
        your domain.
      </p>

      <p><strong>Q: Can I send from a personal email like "pastor@gmail.com"?</strong></p>
      <p>
        A: You can, but deliverability will suffer. Best practice: use your church domain ("pastor@gracechurch.org"). 
        Relius can help set up a custom domain with proper authentication for optimal inbox delivery.
      </p>

      <p><strong>Q: How often should I email my congregation?</strong></p>
      <p>
        A: Most churches find success with one weekly email (newsletter) plus occasional event-specific messages. 
        More than 2-3 emails per week risks unsubscribes. Quality and consistency matter more than frequency.
      </p>

      <p><strong>Q: Can I include attachments like PDFs?</strong></p>
      <p>
        A: Technically yes, but it's not recommended—attachments hurt deliverability and many people won't open them. 
        Instead, upload the PDF to your website or Google Drive and link to it from the email.
      </p>

      <p><strong>Q: What's a good open rate?</strong></p>
      <p>
        A: Church emails typically see 30-45% open rates (higher than most industries). If you're below 25%, 
        work on your subject lines, send timing, and list quality. Above 50% is exceptional.
      </p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/communications">Communications Overview</a> - All communication channels</li>
        <li><a href="/resources/docs/communications/sms">SMS Messaging</a> - Text message campaigns</li>
        <li><a href="/resources/docs/communications/announcements">Announcements</a> - Multi-channel broadcasts</li>
        <li><a href="/resources/docs/people-management/member-directory">Member Directory</a> - Managing email addresses</li>
        <li><a href="/resources/docs/ai-features/ai-content-studio">AI Content Studio</a> - Auto-generate email content from sermons</li>
      </ul>
    </div>
  );
}
