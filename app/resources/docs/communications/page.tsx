export default function CommunicationsOverviewPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>Communications</h1>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
        <strong>Quick Summary</strong>: Keep your congregation connected with email campaigns, SMS messaging, and announcements across multiple channels.
      </blockquote>

      <h2>Overview</h2>
      <p>
        Effective communication is the heartbeat of a healthy church. Whether you're sending weekly newsletters, 
        last-minute service cancellations, prayer chain updates, or event reminders, Relius provides multiple 
        channels to reach your people where they are.
      </p>
      <p>
        The Communications suite gives you professional tools to craft beautiful emails, send timely text messages, 
        and broadcast announcements that appear in your church app, on digital screens, and in member inboxes—all 
        from one central hub.
      </p>
      <p>
        From planned campaigns to urgent updates, you'll have the flexibility to communicate thoughtfully and the 
        speed to respond when it matters most. Track engagement, manage preferences, and ensure your message reaches 
        the right people at the right time.
      </p>

      <h2>Communication Channels</h2>
      <div className="grid gap-6 md:grid-cols-3 not-prose mb-8">
        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">📧 Email Campaigns</h3>
          <p className="text-gray-600 mb-4">
            Design beautiful emails with templates, schedule sends, track opens and clicks, and run A/B tests to 
            improve engagement.
          </p>
          <a href="/resources/docs/communications/email" className="text-blue-600 hover:text-blue-700 font-medium">
            Learn about Email →
          </a>
        </div>

        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">💬 SMS Messaging</h3>
          <p className="text-gray-600 mb-4">
            Send instant text messages to individuals or groups. Perfect for time-sensitive updates like weather 
            cancellations or prayer requests.
          </p>
          <a href="/resources/docs/communications/sms" className="text-blue-600 hover:text-blue-700 font-medium">
            Learn about SMS →
          </a>
        </div>

        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">📢 Announcements</h3>
          <p className="text-gray-600 mb-4">
            Broadcast announcements across multiple channels—mobile app, email, and screens—all from one place. 
            Schedule and target specific groups.
          </p>
          <a href="/resources/docs/communications/announcements" className="text-blue-600 hover:text-blue-700 font-medium">
            Learn about Announcements →
          </a>
        </div>
      </div>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Multi-Channel Delivery</strong>: Reach people via email, SMS, app notifications, and digital screens</li>
        <li><strong>Audience Segmentation</strong>: Target specific groups, teams, age ranges, or custom filters</li>
        <li><strong>Template Library</strong>: Pre-built templates for newsletters, event invites, and announcements</li>
        <li><strong>Scheduling</strong>: Plan messages in advance or send immediately</li>
        <li><strong>Analytics</strong>: Track delivery, opens, clicks, and engagement</li>
        <li><strong>Compliance</strong>: Automatic opt-out management and consent tracking</li>
        <li><strong>Personalization</strong>: Use merge tags for names, groups, and custom fields</li>
        <li><strong>Message History</strong>: Access complete archive of all communications</li>
      </ul>

      <h2>Common Use Cases</h2>
      
      <h3>Weekly Newsletter</h3>
      <p>
        Send a Sunday morning email with sermon notes, upcoming events, volunteer needs, and community updates. 
        Schedule it Saturday evening to arrive in inboxes before people wake up.
      </p>

      <h3>Weather Cancellation</h3>
      <p>
        Ice storm rolling in Sunday morning? Send an SMS blast at 6 AM announcing service cancellation, plus a 
        simultaneous app notification and email. Reach everyone within minutes.
      </p>

      <h3>Event Reminder Sequence</h3>
      <p>
        For your annual church picnic, send a save-the-date email 3 weeks out, a registration reminder 1 week before, 
        and an SMS with parking details the morning of the event.
      </p>

      <h3>Prayer Chain</h3>
      <p>
        When a member requests urgent prayer, text your prayer team instantly with details, then follow up with 
        an email update when there's news to share.
      </p>

      <h3>Volunteer Recruitment</h3>
      <p>
        Email your youth group about VBS volunteer opportunities, include sign-up links, track who opens and clicks, 
        then send personalized follow-ups to those who showed interest.
      </p>

      <h2>Getting Started</h2>
      
      <h3>Step 1: Set Up Your Communication Preferences</h3>
      <p>
        Navigate to <strong>Settings → Communications</strong> and configure your sender email, SMS provider (Twilio), 
        and default reply-to addresses. Add your church logo and brand colors for email templates.
      </p>

      <h3>Step 2: Build Your Audience</h3>
      <p>
        Before sending, ensure member records have up-to-date email addresses and phone numbers. Check 
        <strong>People → Directory</strong> and look for missing contact info. Import or update as needed.
      </p>

      <h3>Step 3: Choose Your Channel</h3>
      <p>
        Pick the right tool for your message:
      </p>
      <ul>
        <li><strong>Email</strong>: Longer messages, newsletters, event details, rich formatting</li>
        <li><strong>SMS</strong>: Urgent updates, quick reminders, time-sensitive alerts (160 characters)</li>
        <li><strong>Announcements</strong>: Multi-channel broadcasts for important church-wide news</li>
      </ul>

      <h3>Step 4: Create Your First Message</h3>
      <p>
        Start with a simple welcome email to new members or a test SMS to staff. Use templates to get familiar 
        with the interface, then customize from there.
      </p>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Don't over-communicate</strong>: One weekly email + urgent SMS only. Respect people's inboxes.</li>
        <li><strong>Segment wisely</strong>: Parents don't need youth group texts; seniors may prefer email over SMS</li>
        <li><strong>Test before you send</strong>: Always send test messages to staff first, especially for large campaigns</li>
        <li><strong>Mobile-first</strong>: 70% of emails are read on phones—keep it short and scannable</li>
        <li><strong>Clear call-to-action</strong>: One primary action per message (RSVP, donate, sign up)</li>
        <li><strong>Timing matters</strong>: Avoid late-night messages; Sunday morning is high-engagement</li>
        <li><strong>Honor opt-outs immediately</strong>: When someone unsubscribes, respect it. It's the law.</li>
        <li><strong>Personalize when possible</strong>: "Hi Sarah" beats "Dear Member"</li>
      </ul>

      <h2>Compliance & Permissions</h2>
      <p>
        Relius automatically handles CAN-SPAM (email) and TCPA (SMS) compliance. Every email includes an unsubscribe 
        link, and SMS recipients can text STOP to opt out. You can view and manage consent preferences under 
        each member's profile.
      </p>
      <p>
        <strong>Important</strong>: Only send SMS to people who have explicitly opted in. Pre-checked boxes during 
        signup don't count—require active consent for text messaging.
      </p>

      <h2>Message History</h2>
      <p>
        Access your complete communication archive under <strong>Communications → History</strong>. Filter by channel, 
        date, sender, or audience. Review past messages, check delivery rates, and duplicate successful campaigns.
      </p>

      <h2>Common Questions</h2>
      
      <p><strong>Q: Can I schedule messages in advance?</strong></p>
      <p>
        A: Yes! All channels support scheduling. Compose your message, choose a send date/time, and Relius will 
        deliver it automatically. Perfect for planning ahead during vacation or busy seasons.
      </p>

      <p><strong>Q: How much does SMS cost?</strong></p>
      <p>
        A: SMS pricing varies by provider (typically $0.01-$0.02 per message). Relius uses Twilio for reliable 
        delivery. You can set monthly spending limits to control costs.
      </p>

      <p><strong>Q: Can I target specific age groups or teams?</strong></p>
      <p>
        A: Absolutely. Use audience filters to target by age, groups, teams, attendance history, giving status, or 
        any custom field you've created. Send relevant messages to the right people.
      </p>

      <p><strong>Q: What if someone doesn't want to receive texts but still wants email?</strong></p>
      <p>
        A: Communication preferences are managed per channel. Someone can opt out of SMS while staying subscribed 
        to email, or vice versa. Check their profile under <strong>People → [Member] → Preferences</strong>.
      </p>

      <p><strong>Q: Can volunteers send messages or only admins?</strong></p>
      <p>
        A: You control permissions by role. Group leaders can message their groups, team leaders their teams, but 
        church-wide broadcasts require specific permissions. Configure under <strong>Settings → Roles</strong>.
      </p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/communications/email">Email Campaigns</a> - Detailed email features and templates</li>
        <li><a href="/resources/docs/communications/sms">SMS Messaging</a> - Text message setup and best practices</li>
        <li><a href="/resources/docs/communications/announcements">Announcements</a> - Multi-channel broadcasts</li>
        <li><a href="/resources/docs/people/directory">People Directory</a> - Managing contact information</li>
        <li><a href="/resources/docs/groups">Groups</a> - Group-specific communications</li>
        <li><a href="/resources/docs/events/scheduler">Events</a> - Event-related messaging</li>
      </ul>
    </div>
  );
}
