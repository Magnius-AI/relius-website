export default function SMSMessagingPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>SMS Messaging</h1>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
        <strong>Quick Summary</strong>: Send instant text messages to individuals or groups for time-sensitive updates and urgent communications.
      </blockquote>

      <h2>Overview</h2>
      <p>
        When something can't wait for email—a weather cancellation, last-minute schedule change, urgent prayer 
        request, or time-sensitive reminder—SMS messaging gets your message in front of people instantly. With 
        98% open rates (most within 3 minutes), text messaging is the most direct communication channel available.
      </p>
      <p>
        Relius makes church texting simple and compliant. Send to individuals with a few taps, broadcast to entire 
        groups, save templates for recurring messages, and manage opt-ins/opt-outs automatically. Whether you're 
        texting one person or one thousand, it takes the same amount of effort.
      </p>
      <p>
        Unlike email, texts are brief, personal, and expected to be read immediately. Use SMS strategically for 
        high-priority communication, and your congregation will come to trust and appreciate these messages rather 
        than tune them out.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>SMS</strong>: Short Message Service—standard text messages up to 160 characters</li>
        <li><strong>MMS</strong>: Multimedia Messaging Service—texts with images, longer messages (up to 1600 chars)</li>
        <li><strong>Opt-In</strong>: Explicit consent from a member to receive text messages</li>
        <li><strong>Opt-Out</strong>: When someone texts STOP to unsubscribe from messages</li>
        <li><strong>Broadcast</strong>: Sending the same message to multiple recipients at once</li>
        <li><strong>Two-Way Messaging</strong>: Recipients can reply, creating a conversation thread</li>
        <li><strong>Template</strong>: Pre-written message you can reuse (e.g., "Service canceled due to weather")</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Set Up Your SMS Provider</h3>
      <p>
        Relius uses Twilio for SMS delivery. Navigate to <strong>Settings → Communications → SMS</strong> and 
        connect your Twilio account. If you don't have one, Relius will guide you through creating one and 
        purchasing a phone number (usually $1/month + per-message costs).
      </p>
      <p>
        Your SMS sender will show as this phone number. Pick a local number or toll-free number—local feels more 
        personal, toll-free is better for high-volume sending.
      </p>

      <h3>Step 2: Collect Opt-Ins</h3>
      <p>
        <strong>Important</strong>: You cannot text people without their explicit consent. Under TCPA law, you 
        need clear, affirmative opt-in before sending promotional or informational texts.
      </p>
      <p>
        Ways to collect opt-ins:
      </p>
      <ul>
        <li><strong>Member Signup Forms</strong>: Include an "I agree to receive text messages" checkbox during registration</li>
        <li><strong>Connection Cards</strong>: Add a "Mobile Number (for text updates)" field with consent language</li>
        <li><strong>Text-to-Join</strong>: Display "Text JOIN to (555) 123-4567" on screens or bulletin—auto-adds them</li>
        <li><strong>Manual Entry</strong>: When entering phone numbers, check the "SMS consent" box in their profile</li>
      </ul>
      <p>
        Relius tracks consent status automatically. Only members marked as opted-in will appear in your SMS 
        recipient lists.
      </p>

      <h3>Step 3: Send Your First Message</h3>
      <p>
        Go to <strong>Communications → SMS → New Message</strong>. Choose your recipients (individual, group, or 
        custom filter), type your message, and hit send. That's it.
      </p>
      <p>
        For your first message, send to staff only as a test: "Testing our new church text system! Reply YES if 
        you received this." Confirm delivery and two-way replies work before going wider.
      </p>

      <h3>Step 4: Create Templates for Common Messages</h3>
      <p>
        Save time by creating templates:
      </p>
      <ul>
        <li>"Reminder: [Event] is tonight at [Time]. See you there!"</li>
        <li>"Service canceled due to weather. Join us online at [Link]"</li>
        <li>"Urgent prayer request for [Name]. Please lift them up today."</li>
        <li>"Hi [First Name], we missed you Sunday! Hope you're doing well."</li>
      </ul>
      <p>
        Use merge tags like <code>[First Name]</code>, <code>[Event]</code>, <code>[Time]</code> to personalize 
        without rewriting each time.
      </p>

      <h2>Features</h2>

      <h3>Individual Messaging</h3>
      <p>
        Text one person at a time for personal follow-up:
      </p>
      <ul>
        <li>Thank a first-time guest for visiting</li>
        <li>Check in with someone who's been absent</li>
        <li>Confirm a pastoral care appointment</li>
        <li>Answer a question about an event</li>
      </ul>
      <p>
        Messages appear as a conversation thread, just like texting a friend. Recipients can reply, and you'll see 
        their response in the Relius inbox under <strong>Communications → SMS → Conversations</strong>.
      </p>

      <h3>Bulk Messaging (Broadcasts)</h3>
      <p>
        Send the same message to many people at once:
      </p>
      <ul>
        <li><strong>Everyone</strong>: All opted-in members (use sparingly!)</li>
        <li><strong>Specific Group</strong>: Text your youth group, worship team, or small group leaders</li>
        <li><strong>Custom Filter</strong>: Target by age, attendance, location, or custom tags</li>
      </ul>
      <p>
        Broadcasts send as individual messages—recipients don't see each other's numbers (not a group chat). Each 
        person can reply privately, and you'll see all responses in your inbox.
      </p>

      <h3>SMS Templates</h3>
      <p>
        Pre-write messages for recurring scenarios:
      </p>
      <ul>
        <li><strong>Event Reminder</strong>: "[Event] starts in 1 hour! See you soon."</li>
        <li><strong>Weather Cancellation</strong>: "All services canceled today due to [Reason]. Stay safe!"</li>
        <li><strong>Volunteer Shift Reminder</strong>: "You're serving as [Role] this Sunday at [Time]. Thank you!"</li>
        <li><strong>Prayer Chain Alert</strong>: "New prayer request: [Details]. Praying with you."</li>
        <li><strong>Weekly Reminder</strong>: "Service tomorrow at 10 AM. Bring a friend!"</li>
      </ul>
      <p>
        Templates save keystrokes and ensure consistent messaging. Edit placeholders when sending, or use merge 
        tags for automatic personalization.
      </p>

      <h3>Opt-In and Opt-Out Management</h3>
      <p>
        Relius handles compliance automatically:
      </p>
      <ul>
        <li><strong>Auto-Opt-Out</strong>: When someone texts STOP, UNSUBSCRIBE, or QUIT, they're immediately removed from future messages</li>
        <li><strong>Confirmation Reply</strong>: They receive "You have been unsubscribed. Reply START to re-subscribe."</li>
        <li><strong>Opt-Out List</strong>: View everyone who has opted out under <strong>Settings → SMS → Opt-Outs</strong></li>
        <li><strong>Re-Opt-In</strong>: If someone texts START, they're automatically added back</li>
      </ul>
      <p>
        Every SMS includes a footer (required by law): "Reply STOP to unsubscribe." This is added automatically—
        you don't need to type it.
      </p>
      <p>
        <strong>Manual Opt-Out</strong>: You can also manually opt someone out from their member profile if they 
        request it in person or via email.
      </p>

      <h3>Scheduling</h3>
      <p>
        Compose a message now, send it later:
      </p>
      <ul>
        <li>Write Saturday evening, schedule for Sunday morning 8 AM</li>
        <li>Queue event reminders 24 hours and 1 hour before start time</li>
        <li>Send volunteer shifts on Friday for the upcoming weekend</li>
      </ul>
      <p>
        Scheduled messages appear under <strong>SMS → Scheduled</strong> where you can edit or cancel before send time.
      </p>

      <h3>Two-Way Conversations</h3>
      <p>
        Unlike email, SMS is conversational. When people reply:
      </p>
      <ul>
        <li>Responses appear in your <strong>SMS Inbox</strong></li>
        <li>Click to view the full conversation thread</li>
        <li>Reply directly from Relius—it sends from your church number</li>
        <li>Assign conversations to staff members for follow-up</li>
      </ul>
      <p>
        This is powerful for prayer requests, pastoral care, and volunteer coordination. Someone texts "Can't make 
        my shift Sunday," you reply "No problem! I'll find coverage. Thanks for letting me know."
      </p>

      <details className="border rounded-lg p-4 mb-4">
        <summary className="font-semibold cursor-pointer">Advanced: Automated Workflows</summary>
        <div className="mt-4 space-y-3">
          <p>
            Trigger SMS automatically based on events:
          </p>
          <ul>
            <li><strong>First-Time Guest</strong>: 1 hour after check-in, send "Thanks for visiting today! Hope to see you again."</li>
            <li><strong>Birthday</strong>: Send "Happy birthday, [Name]! 🎉 We're celebrating you today." at 9 AM on their birthday</li>
            <li><strong>Volunteer Reminder</strong>: Text scheduled volunteers 24 hours before their shift</li>
            <li><strong>Event RSVP Confirmation</strong>: When someone registers, send "You're registered for [Event]! See you there."</li>
            <li><strong>Absence Follow-Up</strong>: If someone misses 3 consecutive Sundays, text "We've missed you! Everything okay?"</li>
          </ul>
          <p>
            Set up workflows under <strong>Communications → Automation → SMS Workflows</strong>. Define triggers, 
            delays, and message content. Relius handles the rest.
          </p>
        </div>
      </details>

      <details className="border rounded-lg p-4 mb-4">
        <summary className="font-semibold cursor-pointer">Advanced: Keyword Auto-Responses</summary>
        <div className="mt-4 space-y-3">
          <p>
            Let people text keywords to get automatic information:
          </p>
          <ul>
            <li><strong>TIMES</strong> → "Service times: Saturday 5 PM, Sunday 8 & 10 AM"</li>
            <li><strong>DIRECTIONS</strong> → "123 Main St, Springfield. [Google Maps link]"</li>
            <li><strong>PRAYER</strong> → "Reply with your prayer request and our team will pray for you."</li>
            <li><strong>GIVE</strong> → "Give online: [link to giving page]"</li>
          </ul>
          <p>
            Set up keywords under <strong>SMS → Keywords</strong>. When someone texts a keyword, they get an instant 
            response—no staff intervention needed. Great for info displayed on screens or bulletins.
          </p>
        </div>
      </details>

      <details className="border rounded-lg p-4 mb-4">
        <summary className="font-semibold cursor-pointer">Advanced: MMS (Images & Long Messages)</summary>
        <div className="mt-4 space-y-3">
          <p>
            Need more than 160 characters or want to include an image? Use MMS:
          </p>
          <ul>
            <li>Send event flyers, service graphics, or photos</li>
            <li>Include QR codes for quick check-in or registration</li>
            <li>Send longer messages (up to 1600 characters) that auto-split</li>
          </ul>
          <p>
            MMS costs slightly more per message (~$0.02-$0.03 vs $0.01 for SMS) but delivers a richer experience. 
            To send MMS, simply attach an image or write beyond 160 characters—Relius handles the rest.
          </p>
          <p>
            <strong>Note</strong>: Not all carriers support MMS. If delivery fails, Relius falls back to SMS with 
            a link to view the image online.
          </p>
        </div>
      </details>

      <h2>Best Practices for Church Texting</h2>
      <ul>
        <li><strong>Keep it short</strong>: Aim for under 160 characters. If it's longer, consider email instead.</li>
        <li><strong>Respect the medium</strong>: SMS is for urgent, time-sensitive info—not lengthy newsletters</li>
        <li><strong>Frequency matters</strong>: Max 1-2 texts per week. More feels spammy and drives opt-outs.</li>
        <li><strong>Timing is everything</strong>: Avoid late nights (after 9 PM) or early mornings (before 8 AM)</li>
        <li><strong>Clear call-to-action</strong>: "RSVP here: [link]" or "Reply YES to confirm"</li>
        <li><strong>Be conversational</strong>: Write like you're texting a friend, not drafting a press release</li>
        <li><strong>Include your church name</strong>: "Grace Church: Service canceled today due to weather"</li>
        <li><strong>Links matter</strong>: Use link shorteners (Relius does this automatically) so URLs don't eat your character count</li>
        <li><strong>Test before broadcast</strong>: Send to staff first to catch typos or broken links</li>
        <li><strong>Monitor replies</strong>: Check your SMS inbox daily—people expect quick responses to texts</li>
      </ul>

      <h2>Real-World Scenarios</h2>

      <h3>Scenario 1: Weather Cancellation</h3>
      <p>
        Ice storm hits Saturday night. At 6 AM Sunday, Pastor Mike sends: "Hope Church: All services canceled today 
        due to icy roads. Join us online at hopechurch.org/live. Stay safe!" 847 members receive it within 3 minutes. 
        Zero confused families show up to locked doors.
      </p>

      <h3>Scenario 2: Event Reminder Sequence</h3>
      <p>
        Men's Retreat is Friday-Sunday. On Wednesday, text registrants: "Men's Retreat starts Friday 6 PM! Packing 
        list: [link]" On Friday at 3 PM: "Heading to the retreat? Gates open at 5:30. See you soon!" On Sunday after 
        checkout: "Thanks for an amazing weekend! Share photos in our Facebook group: [link]"
      </p>

      <h3>Scenario 3: Prayer Chain</h3>
      <p>
        A member's daughter is in the hospital. Pastor activates the prayer team via SMS: "Urgent: Sarah's daughter 
        Emma in ER with appendicitis. Surgery scheduled for 2 PM. Please pray." 24 prayer warriors receive it 
        instantly and start praying. Later: "Update: Surgery successful. Emma is recovering well. Thank you for your 
        prayers!" Response rate: 100%.
      </p>

      <h3>Scenario 4: Volunteer Coordination</h3>
      <p>
        Sunday morning greeter calls in sick. Children's director texts the backup list at 7:30 AM: "Hi [Name], can 
        you fill in as greeter this morning at 9:45? Reply YES if available." First person to respond gets a 
        confirmation text, others get "We're all set—thanks for being willing!" Shift filled in 4 minutes.
      </p>

      <h2>Common Questions</h2>

      <p><strong>Q: How much does SMS cost?</strong></p>
      <p>
        A: Pricing varies by provider and country. In the US, expect $0.01-$0.015 per SMS, $0.02-$0.03 per MMS. 
        A 1000-person broadcast costs $10-$15. Relius shows estimated cost before you send. You can set monthly 
        spending limits to control costs.
      </p>

      <p><strong>Q: Can recipients reply to broadcast messages?</strong></p>
      <p>
        A: Yes! Each person can reply privately. You'll see all responses in your SMS inbox. This is different from 
        a group chat—recipients only see the original message and their own reply, not others' responses.
      </p>

      <p><strong>Q: What if someone doesn't have a mobile number in their profile?</strong></p>
      <p>
        A: They won't receive the SMS. Relius shows you the deliverable count before sending. Use 
        <strong>People → Directory → Filter → Missing Mobile Number</strong> to identify gaps and collect numbers.
      </p>

      <p><strong>Q: How do I handle someone who opted out but wants back in?</strong></p>
      <p>
        A: They can text START to your church number to auto-resubscribe. Or you can manually re-enable SMS in their 
        member profile under <strong>Contact Preferences → SMS → Opted In</strong>.
      </p>

      <p><strong>Q: Can I schedule recurring messages, like weekly reminders?</strong></p>
      <p>
        A: Yes! Under <strong>SMS → Recurring Messages</strong>, create a template and set frequency (e.g., "Every 
        Saturday 8 PM: Reminder—service tomorrow at 10 AM"). Relius sends automatically until you pause or delete it.
      </p>

      <p><strong>Q: Is there a character limit for SMS?</strong></p>
      <p>
        A: Standard SMS is 160 characters. Beyond that, messages auto-split into multiple texts or convert to MMS 
        (costs slightly more). Relius shows a character counter as you type and warns if you exceed 160.
      </p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/communications">Communications Overview</a> - All communication channels</li>
        <li><a href="/resources/docs/communications/email">Email Campaigns</a> - For longer, less urgent messages</li>
        <li><a href="/resources/docs/communications/announcements">Announcements</a> - Multi-channel broadcasts</li>
        <li><a href="/resources/docs/people-management/member-directory">Member Directory</a> - Managing phone numbers</li>
        <li><a href="/resources/docs/groups">Groups</a> - Group-specific messaging</li>
      </ul>
    </div>
  );
}
