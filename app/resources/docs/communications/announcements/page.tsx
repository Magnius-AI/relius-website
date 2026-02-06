export default function AnnouncementsPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>Announcements</h1>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
        <strong>Quick Summary</strong>: Broadcast important updates across multiple channels—mobile app, email, and screens—all from one place.
      </blockquote>

      <h2>Overview</h2>
      <p>
        Some messages need to reach everyone, everywhere. A new sermon series launching Sunday. A facility closure 
        for renovations. An emergency response to a community crisis. A celebration of a major ministry milestone. 
        These are announcements—official church communications that deserve maximum visibility.
      </p>
      <p>
        Relius announcements broadcast across multiple channels simultaneously: your church mobile app, email 
        inboxes, and on-screen displays during services. Create the message once, and Relius delivers it everywhere 
        your people look. No copying and pasting between platforms, no wondering if you reached everyone.
      </p>
      <p>
        With scheduling, expiration dates, and audience targeting, you control exactly who sees what and when. 
        Announcements keep your congregation informed, aligned, and engaged with what's happening in the life of 
        your church.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Announcement</strong>: A single message broadcast to multiple channels at once</li>
        <li><strong>Channels</strong>: Where announcements appear (app, email, screens, website)</li>
        <li><strong>Priority</strong>: Normal (general updates) or Urgent (time-sensitive alerts)</li>
        <li><strong>Expiration</strong>: When an announcement automatically stops displaying</li>
        <li><strong>Target Audience</strong>: Who sees the announcement (everyone, specific groups, custom filters)</li>
        <li><strong>Pinned</strong>: Featured announcements that stay at the top of the app feed</li>
        <li><strong>Category</strong>: Classification (event, ministry, campus-wide, pastoral)</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Create Your First Announcement</h3>
      <p>
        Go to <strong>Communications → Announcements → New Announcement</strong>. You'll see a simple form:
      </p>
      <ul>
        <li><strong>Title</strong>: Clear, action-oriented headline (e.g., "New Sermon Series Starts This Sunday")</li>
        <li><strong>Message</strong>: 1-3 paragraphs with details (what, when, why, how to participate)</li>
        <li><strong>Priority</strong>: Normal or Urgent (urgent adds visual emphasis and notifications)</li>
        <li><strong>Category</strong>: Helps organize and filter (Events, Ministry, Campus-Wide, Pastoral)</li>
      </ul>

      <h3>Step 2: Choose Your Channels</h3>
      <p>
        Select where this announcement should appear:
      </p>
      <ul>
        <li><strong>Mobile App</strong>: Appears in the announcements feed; urgent sends push notification</li>
        <li><strong>Email</strong>: Sends immediately as a standalone email</li>
        <li><strong>Screens</strong>: Displays on lobby screens, service slides, or digital signage</li>
        <li><strong>Website</strong>: Shows in your public website announcement banner (optional)</li>
      </ul>
      <p>
        You can choose one, some, or all channels. Most churches use app + screens for general updates, adding 
        email for urgent or time-sensitive announcements.
      </p>

      <h3>Step 3: Target Your Audience</h3>
      <p>
        Who should see this announcement?
      </p>
      <ul>
        <li><strong>Everyone</strong>: All church members (default)</li>
        <li><strong>Specific Groups</strong>: Youth group, small group leaders, volunteers, etc.</li>
        <li><strong>Campus/Location</strong>: Multi-site churches can target specific campuses</li>
        <li><strong>Custom Filter</strong>: Age range, families with kids, first-time guests, etc.</li>
      </ul>
      <p>
        Targeting ensures relevant messages reach the right people. Parents need to know about VBS registration; 
        non-parents don't need that cluttering their feed.
      </p>

      <h3>Step 4: Schedule and Publish</h3>
      <p>
        Choose when this announcement goes live:
      </p>
      <ul>
        <li><strong>Publish Now</strong>: Immediate broadcast across all selected channels</li>
        <li><strong>Schedule</strong>: Set a future publish date/time (e.g., go live Sunday at 8 AM)</li>
        <li><strong>Expiration</strong>: Automatically remove after a certain date (e.g., event announcements expire after the event)</li>
      </ul>
      <p>
        Review your announcement, preview how it looks in each channel, then hit <strong>Publish</strong>.
      </p>

      <h2>Features</h2>

      <h3>Multi-Channel Broadcasting</h3>
      <p>
        The power of announcements is unified delivery:
      </p>
      <ul>
        <li><strong>Mobile App</strong>: Appears at the top of the announcements tab; urgent triggers push notification</li>
        <li><strong>Email</strong>: Sends formatted email to selected audience with full announcement content</li>
        <li><strong>Screens</strong>: Auto-formats for lobby displays and service slides (image + title + key points)</li>
        <li><strong>Website</strong>: Optional banner on homepage or dedicated announcements page</li>
      </ul>
      <p>
        Each channel adapts the content format automatically—full text for email, condensed for screens, 
        notification-style for app push. You write once; Relius handles the rest.
      </p>

      <h3>Priority Levels</h3>
      <p>
        Two priority levels control visibility and notifications:
      </p>
      <ul>
        <li><strong>Normal</strong>: Appears in feeds and on screens; no push notification</li>
        <li><strong>Urgent</strong>: Bold visual styling + push notification to app users (use sparingly)</li>
      </ul>
      <p>
        Reserve urgent for actual urgency: weather cancellations, security alerts, emergency prayer requests, or 
        major leadership announcements. Overuse "urgent" and people start ignoring notifications.
      </p>

      <h3>Scheduling and Expiration</h3>
      <p>
        Control the lifecycle of your announcements:
      </p>
      <ul>
        <li><strong>Publish Date</strong>: When the announcement goes live (schedule weeks in advance)</li>
        <li><strong>Expiration Date</strong>: When it automatically disappears from all channels</li>
        <li><strong>Auto-Archive</strong>: Expired announcements move to an archive for historical reference</li>
      </ul>
      <p>
        Examples:
      </p>
      <ul>
        <li>Easter service announcement: Publish 4 weeks before Easter, expire day after</li>
        <li>Facility closure: Publish Friday, expire Monday (renovation weekend)</li>
        <li>New staff introduction: Publish Sunday, keep live for 2 weeks</li>
      </ul>
      <p>
        Expiration keeps your announcement feed clean and relevant—no one needs to see "VBS Registration Open" 
        three weeks after VBS ended.
      </p>

      <h3>Pinned Announcements</h3>
      <p>
        Pin high-priority announcements to the top of the mobile app feed:
      </p>
      <ul>
        <li>New member class registration</li>
        <li>Capital campaign updates</li>
        <li>Annual vision statement</li>
        <li>Emergency contact information</li>
      </ul>
      <p>
        Pinned announcements stay at the top even as new announcements publish below. Limit to 1-2 pinned items 
        at a time—too many defeats the purpose.
      </p>

      <h3>Categories and Tags</h3>
      <p>
        Organize announcements by category:
      </p>
      <ul>
        <li><strong>Events</strong>: Upcoming services, special programs, church gatherings</li>
        <li><strong>Ministry</strong>: Volunteer opportunities, ministry updates, program launches</li>
        <li><strong>Campus-Wide</strong>: Facility news, policy changes, staff updates</li>
        <li><strong>Pastoral</strong>: Leadership messages, vision casting, prayer requests</li>
        <li><strong>Emergency</strong>: Weather cancellations, security alerts, urgent needs</li>
      </ul>
      <p>
        App users can filter by category to see only what interests them. Tags add additional metadata (e.g., 
        "youth", "worship", "giving") for more granular filtering.
      </p>

      <h3>Rich Media Support</h3>
      <p>
        Enhance announcements with visuals:
      </p>
      <ul>
        <li><strong>Images</strong>: Featured image appears in app feed and email header</li>
        <li><strong>Videos</strong>: Embed announcement videos (pastor greeting, event promo)</li>
        <li><strong>Links</strong>: Add buttons for registration, giving, or more info</li>
        <li><strong>Attachments</strong>: Include PDFs, flyers, or documents</li>
      </ul>
      <p>
        Visual announcements get 3-4x more engagement than text-only. Use eye-catching graphics for events, 
        headshots for staff announcements, or photos from last year's event to drive excitement.
      </p>

      <details className="border rounded-lg p-4 mb-4">
        <summary className="font-semibold cursor-pointer">Advanced: Recurring Announcements</summary>
        <div className="mt-4 space-y-3">
          <p>
            Set up announcements that publish automatically on a schedule:
          </p>
          <ul>
            <li><strong>Weekly Service Reminder</strong>: Every Saturday, "Service tomorrow at 10 AM! See you there."</li>
            <li><strong>Monthly Giving Reminder</strong>: First Sunday of each month, "Thank you for your faithful giving!"</li>
            <li><strong>Seasonal Series Launch</strong>: Every quarter, "New sermon series starts this Sunday!"</li>
          </ul>
          <p>
            To create recurring announcements:
          </p>
          <ol>
            <li>Create your announcement template</li>
            <li>Under <strong>Publishing</strong>, select <strong>Recurring</strong></li>
            <li>Choose frequency (daily, weekly, monthly) and pattern (e.g., "Every Saturday 6 PM")</li>
            <li>Set optional end date or let it run indefinitely</li>
          </ol>
          <p>
            Each occurrence can be edited individually if needed. For example, skip the weekly reminder on holiday 
            weekends or customize the message for special services.
          </p>
        </div>
      </details>

      <details className="border rounded-lg p-4 mb-4">
        <summary className="font-semibold cursor-pointer">Advanced: Approval Workflows</summary>
        <div className="mt-4 space-y-3">
          <p>
            Require leadership approval before announcements go live:
          </p>
          <ul>
            <li>Staff can draft announcements but must submit for approval</li>
            <li>Designated approvers (pastors, communications team) review and approve/reject</li>
            <li>Approved announcements auto-publish at scheduled time</li>
            <li>Rejected announcements return to drafter with feedback</li>
          </ul>
          <p>
            Set up approval workflows under <strong>Settings → Communications → Announcement Approvals</strong>:
          </p>
          <ol>
            <li>Define who needs approval (e.g., all non-admin users)</li>
            <li>Assign approvers by category (ministry announcements → ministry pastor, campus-wide → exec pastor)</li>
            <li>Set auto-approval thresholds (e.g., normal priority = one approver, urgent = two)</li>
          </ol>
          <p>
            This prevents well-intentioned but off-brand or poorly timed announcements from going out without oversight.
          </p>
        </div>
      </details>

      <details className="border rounded-lg p-4 mb-4">
        <summary className="font-semibold cursor-pointer">Advanced: Engagement Analytics</summary>
        <div className="mt-4 space-y-3">
          <p>
            Track how people engage with your announcements:
          </p>
          <ul>
            <li><strong>Views</strong>: How many people saw the announcement (app opens, email opens)</li>
            <li><strong>Clicks</strong>: How many clicked embedded links or buttons</li>
            <li><strong>Shares</strong>: How often it was shared outside the app</li>
            <li><strong>Push Open Rate</strong>: For urgent announcements, % who opened the push notification</li>
          </ul>
          <p>
            View analytics under each announcement's detail page. Compare performance across categories to learn 
            what resonates with your congregation. Discover:
          </p>
          <ul>
            <li>Which announcement types drive the most engagement</li>
            <li>Optimal publish times (Sunday morning vs. Wednesday evening)</li>
            <li>Whether images increase views</li>
            <li>If certain groups ignore certain categories</li>
          </ul>
          <p>
            Use insights to refine your communication strategy over time.
          </p>
        </div>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Less is more</strong>: Aim for 1-3 active announcements at a time. Too many = information overload.</li>
        <li><strong>Clear headlines</strong>: Frontload the key info—"Easter Service Times" beats "Special Services This Weekend"</li>
        <li><strong>One call-to-action</strong>: Each announcement should drive one primary action (RSVP, sign up, attend)</li>
        <li><strong>Use expiration dates</strong>: Keep your announcement feed current and relevant</li>
        <li><strong>Reserve urgent for true urgency</strong>: Weather cancellations, emergencies only—not every event</li>
        <li><strong>Target wisely</strong>: Youth events to youth, parenting content to parents—don't spam everyone with everything</li>
        <li><strong>Include visuals</strong>: Image announcements get far more engagement than text-only</li>
        <li><strong>Consistent voice</strong>: Write in your church's tone—warm, welcoming, clear</li>
        <li><strong>Mobile-first writing</strong>: Short sentences, scannable paragraphs, bullet points over walls of text</li>
        <li><strong>Link strategically</strong>: "Register here" button beats "Visit gracechurch.org/events to find the registration form"</li>
      </ul>

      <h2>Real-World Scenarios</h2>

      <h3>Scenario 1: New Sermon Series Launch</h3>
      <p>
        Grace Church is starting a 6-week series on prayer. They create an announcement titled "New Series: The Power 
        of Prayer Starts This Sunday." Message includes series overview, key dates, and invitation to join a prayer 
        challenge. Published to app + screens, scheduled for Saturday 6 PM, expires 7 days later. Featured image: 
        series graphic designed by creative team. Result: 68% of active app users view it; 240 people join the prayer 
        challenge via the embedded link.
      </p>

      <h3>Scenario 2: Emergency Weather Cancellation</h3>
      <p>
        Blizzard hits Saturday night. At 5:30 AM Sunday, pastor creates urgent announcement: "All Services Canceled 
        Today—Stay Safe!" Channels: app (push notification) + email + website banner. Target: everyone. By 6 AM, 
        1,200 members receive push notification, 900 check email, 400 visit website. Zero confused families drive 
        through dangerous conditions.
      </p>

      <h3>Scenario 3: Volunteer Recruitment</h3>
      <p>
        VBS needs 50 volunteers. Children's ministry publishes announcement: "VBS Needs You! Volunteer June 10-14." 
        Target: families with kids ages 5-12 + anyone tagged "enjoys working with children." Channels: app + email. 
        Includes volunteer role descriptions and sign-up link. Published Monday, expires when all slots filled (6 days 
        later). Result: 54 volunteers sign up; announcement auto-expires early.
      </p>

      <h3>Scenario 4: Capital Campaign Update</h3>
      <p>
        Church is raising $2M for new worship center. Monthly pinned announcement shares progress: "We're 60% to Our 
        Goal! $1.2M Raised." Updates monthly with new percentage and testimonial video. Pinned to stay top-of-mind. 
        Channels: app + screens (email reserved for major milestones). Category: Campus-Wide. Expires when campaign 
        concludes in 18 months.
      </p>

      <h2>Common Questions</h2>

      <p><strong>Q: How many announcements should we have active at once?</strong></p>
      <p>
        A: Aim for 3-5 active announcements maximum. More than that and people start skipping over them. Use 
        expiration dates aggressively to keep the feed fresh and relevant.
      </p>

      <p><strong>Q: Can I schedule announcement emails to send at different times than app publish?</strong></p>
      <p>
        A: Yes! Under <strong>Channels</strong>, you can set different publish times per channel. For example, 
        publish to app Saturday evening but delay email until Sunday morning. This avoids inbox clutter while 
        maximizing visibility.
      </p>

      <p><strong>Q: What happens if someone doesn't have the mobile app?</strong></p>
      <p>
        A: They won't see app-only announcements. Best practice: use app + email for important updates to reach 
        everyone. Encourage app adoption by highlighting its benefits (announcements, giving, event registration 
        all in one place).
      </p>

      <p><strong>Q: Can group leaders create announcements for their groups only?</strong></p>
      <p>
        A: Yes! Group leaders can create announcements targeted to their specific group (visible only to group 
        members). Church-wide announcements require elevated permissions. Configure under <strong>Settings → 
        Roles & Permissions</strong>.
      </p>

      <p><strong>Q: How do I stop an announcement that's already published?</strong></p>
      <p>
        A: Navigate to <strong>Announcements → Active</strong>, find the announcement, and click <strong>Unpublish</strong>. 
        It immediately disappears from all channels. Useful if information changes or an event cancels.
      </p>

      <p><strong>Q: Can I duplicate a previous announcement instead of starting from scratch?</strong></p>
      <p>
        A: Absolutely. Find any past announcement, click <strong>Duplicate</strong>, edit the content and dates, 
        and republish. Perfect for recurring events like annual church picnics or monthly prayer nights.
      </p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/communications">Communications Overview</a> - All communication channels</li>
        <li><a href="/resources/docs/communications/email">Email Campaigns</a> - Detailed email features</li>
        <li><a href="/resources/docs/communications/sms">SMS Messaging</a> - Text message alerts</li>
        <li><a href="/resources/docs/events-calendar">Events & Calendar</a> - Event-specific announcements</li>
        <li><a href="/resources/docs/groups">Groups</a> - Group announcements</li>
        <li><a href="/resources/docs/public-website">Public Website</a> - Website announcement banners</li>
      </ul>
    </div>
  );
}
