export default function GroupAttendancePage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Group Attendance</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Track who attends group meetings, identify engagement patterns, and use attendance data to shepherd members more effectively.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Attendance tracking might sound like busywork, but it's actually pastoral care in action. When you know that Sarah has missed three Bible studies in a row, you can reach out before life circumstances pull her away from community. When you see that David attends faithfully every week, you might recognize a potential leader worth developing. Attendance data tells the story of engagement, commitment, and connection.
      </p>
      <p>
        Relius makes attendance tracking simple enough that leaders will actually do it. The mobile-friendly interface lets group leaders check off who showed up in under a minute—during the meeting or right afterward. No paper forms to transcribe, no complex systems to navigate. Just a straightforward list of names with present/absent toggles and optional notes.
      </p>
      <p>
        But simple input creates powerful outputs. Over time, attendance data reveals patterns: which members are engaged, which groups are thriving, which seasons see higher participation, and where follow-up is needed. Staff can spot at-risk members, celebrate consistent participants, and measure the health of the overall groups ministry.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Attendance Record</strong>: Documentation of who was present or absent at a specific group meeting on a specific date</li>
        <li><strong>Attendance Rate</strong>: The percentage of scheduled meetings a member has attended over a given period</li>
        <li><strong>Engagement Trend</strong>: Patterns showing whether a member's participation is increasing, stable, or declining</li>
        <li><strong>At-Risk Member</strong>: Someone whose attendance pattern suggests they may be disconnecting from the group</li>
        <li><strong>Session Notes</strong>: Optional information recorded alongside attendance (topics discussed, prayer requests, concerns)</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Enable Attendance for Your Groups</h3>
      <p>
        Most group types have attendance tracking enabled by default (small groups, classes, ministry teams). If you need to enable or disable it for specific group types, go to <strong>Groups → Settings → Group Types</strong> and configure attendance settings.
      </p>

      <h3>Step 2: Take Your First Attendance</h3>
      <p>
        Leaders can take attendance from their dashboard by clicking <strong>My Groups → [Group Name] → Take Attendance</strong>. Select today's date (or a past date if entering retrospectively), mark each member as Present or Absent, and save. That's it.
      </p>

      <h3>Step 3: Review Attendance Patterns</h3>
      <p>
        After recording attendance for several weeks, click <strong>Reports → Attendance Trends</strong> to see who's engaged and who might need a follow-up call. Look for members with declining attendance or multiple consecutive absences.
      </p>

      <h3>Step 4: Use Data for Pastoral Care</h3>
      <p>
        When you spot someone missing multiple meetings, the leader (or staff) should reach out personally. A simple "Hey, we missed you the last couple weeks—everything okay?" text can make all the difference in keeping someone connected.
      </p>

      <h2>Features</h2>

      <h3>Taking Attendance</h3>
      <p>
        The attendance interface is designed for speed and simplicity:
      </p>
      <ul>
        <li>Select the meeting date (defaults to today)</li>
        <li>See a list of all current group members</li>
        <li>Tap or click each name to toggle between Present/Absent</li>
        <li>Optionally add guests who attended but aren't yet members</li>
        <li>Add session notes about what happened at the meeting</li>
        <li>Save in under 60 seconds</li>
      </ul>
      <p>
        Leaders can take attendance on their phone during the meeting, on a tablet passed around the room, or later from a computer. If they forget, staff can take it on their behalf or leaders can enter it retrospectively for up to 30 days.
      </p>

      <h3>Attendance Reports & Analytics</h3>
      <p>
        Transform raw attendance data into actionable insights:
      </p>
      <ul>
        <li><strong>Individual Member Reports</strong>: See a specific person's attendance across all their groups with percentage rates and trends</li>
        <li><strong>Group Health Reports</strong>: View attendance rates for a specific group over time—are meetings growing, stable, or shrinking?</li>
        <li><strong>At-Risk Alerts</strong>: Automatically flag members who've missed 3+ consecutive meetings or whose attendance has dropped significantly</li>
        <li><strong>Overall Ministry Trends</strong>: Compare attendance across all groups to see seasonal patterns or ministry-wide engagement levels</li>
        <li><strong>Leader Effectiveness</strong>: (Use carefully!) Track attendance patterns by leader to identify who might need support or encouragement</li>
      </ul>

      <h3>Guest Tracking</h3>
      <p>
        When someone new attends your group, leaders can add them as a "Guest" without creating a full member profile. Guests appear in attendance records and count toward meeting totals. After a few visits, leaders or staff can convert guests to full members and add them to the group roster permanently.
      </p>
      <p>
        This workflow helps you track group growth and identify prospective members without cluttering your database with one-time visitors.
      </p>

      <h3>Attendance Notes & Context</h3>
      <p>
        Beyond just present/absent, leaders can add context:
      </p>
      <ul>
        <li><strong>Session Notes</strong>: "We discussed Philippians 2 and prayed for Mark's surgery"</li>
        <li><strong>Member Notes</strong>: "Sarah absent—on vacation until next week" or "John left early for work emergency"</li>
        <li><strong>Prayer Requests</strong>: Log prayer needs shared during the meeting for follow-up</li>
        <li><strong>Announcements</strong>: Record what was communicated so absent members can be caught up</li>
      </ul>
      <p>
        These notes create a rich history of the group's life together and provide context when reviewing attendance patterns months later.
      </p>

      <h3>Engagement Scoring</h3>
      <p>
        Relius calculates engagement scores based on attendance patterns:
      </p>
      <ul>
        <li><strong>Highly Engaged</strong>: Attends 80%+ of meetings, consistent over time</li>
        <li><strong>Moderately Engaged</strong>: Attends 50-79% of meetings, somewhat irregular</li>
        <li><strong>Low Engagement</strong>: Attends less than 50%, often absent</li>
        <li><strong>At Risk</strong>: Previously engaged but attendance has dropped significantly or 3+ consecutive absences</li>
      </ul>
      <p>
        These scores help leaders and staff prioritize pastoral care and identify patterns that might otherwise go unnoticed.
      </p>

      <details>
        <summary>Advanced Features</summary>

        <h4>Bulk Attendance Entry</h4>
        <p>
          For large groups or classes, enable "quick entry" mode where all members default to Present and you only mark absences. Cuts data entry time in half for groups with high attendance rates.
        </p>

        <h4>QR Code Check-In</h4>
        <p>
          Generate a unique QR code for each group meeting. Members scan the code when they arrive to self-check-in. Perfect for larger groups, youth ministries, or tech-savvy congregations. Leaders review and confirm the list afterward.
        </p>

        <h4>Integration with Event Check-In</h4>
        <p>
          For groups that meet as part of regular church events (like Sunday school during service times), link group attendance to the main event check-in system. When someone checks in to the 10 AM service and designates their class, attendance is recorded automatically.
        </p>

        <h4>Attendance Trends Dashboard</h4>
        <p>
          A visual dashboard showing week-over-week trends, seasonal patterns, and comparative metrics. See at a glance which groups are growing, which are stable, and which might need attention or encouragement.
        </p>

        <h4>Automated Follow-Up Workflows</h4>
        <p>
          Set rules to trigger automated communications: "If member misses 2 consecutive meetings, send leader a reminder to follow up" or "If member attends 4 meetings in a row for the first time, send them a welcome message." Reduces administrative burden while ensuring no one falls through the cracks.
        </p>

        <h4>Multi-Week View</h4>
        <p>
          See several weeks of attendance at once in a grid view. Quickly spot patterns across members: who's consistently present, who attends sporadically, who's been absent recently. Great for leaders reviewing group health before a leadership meeting.
        </p>

        <h4>Export for External Analysis</h4>
        <p>
          Export attendance data to CSV or Excel for advanced analysis or elder reports. Combine with giving data (if authorized) or service participation to create holistic engagement profiles.
        </p>

        <h4>Attendance-Based Member Segmentation</h4>
        <p>
          Create communication segments based on attendance: "All members who attended fewer than 3 times in the last month" or "Highly engaged members for potential leadership development." Target messages appropriately.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Record attendance consistently</strong> – Make it a habit to take attendance within 24 hours of each meeting; inconsistent tracking yields unreliable data</li>
        <li><strong>Don't use attendance punitively</strong> – This is a pastoral tool, not a report card; the goal is care, not compliance</li>
        <li><strong>Follow up after 2-3 absences</strong> – Don't wait until someone's completely disengaged; early intervention matters</li>
        <li><strong>Track guests separately</strong> – Know who's new so you can follow up appropriately and welcome them well</li>
        <li><strong>Add context with notes</strong> – "Absent—on vacation" is more helpful than just "Absent" when reviewing patterns later</li>
        <li><strong>Review reports monthly</strong> – Regular review helps you spot trends before they become problems</li>
        <li><strong>Celebrate consistency</strong> – Recognize and affirm members who faithfully show up; attendance tracking isn't just about absences</li>
        <li><strong>Respect privacy</strong> – Attendance data should be visible to leaders and staff but not broadcast publicly</li>
        <li><strong>Make it easy for leaders</strong> – If the process is cumbersome, leaders won't do it; keep it simple and fast</li>
      </ul>

      <h2>Common Questions</h2>
      
      <p><strong>Q: Do we have to track attendance for every group?</strong></p>
      <p>A: No. Attendance tracking is most valuable for groups focused on discipleship and relationship (small groups, classes). It's less critical for committees, planning teams, or sporadic gatherings. Enable it where it serves a pastoral purpose.</p>

      <p><strong>Q: What if someone joins late or leaves early—do we mark them present?</strong></p>
      <p>A: Yes, if they participated meaningfully. Some churches use a threshold (if you're there for more than half the meeting, you're "present"). You can add a note about arriving late or leaving early for context.</p>

      <p><strong>Q: Can members see their own attendance records?</strong></p>
      <p>A: This is configurable. Some churches let members view their attendance in their profile as a way to stay accountable. Others keep it visible only to leaders and staff to avoid creating a performance mentality.</p>

      <p><strong>Q: How far back can we enter attendance?</strong></p>
      <p>A: Leaders can enter retrospective attendance for up to 30 days (configurable). Beyond that, staff with admin access can add historical data if needed. However, fresher data is always more accurate.</p>

      <p><strong>Q: What do we do about chronic absences that are unavoidable?</strong></p>
      <p>A: Some people have irregular work schedules, health issues, or caregiving responsibilities that prevent consistent attendance. Record the reality but add notes for context. The goal isn't perfect attendance but meaningful connection when they can be there.</p>

      <p><strong>Q: Should we track attendance for online/virtual groups?</strong></p>
      <p>A: Absolutely! Virtual attendance is still attendance. If your group meets via Zoom, the leader should still track who showed up. Engagement matters regardless of the medium.</p>

      <p><strong>Q: How do we handle groups that meet irregularly (like quarterly committees)?</strong></p>
      <p>A: You can track attendance for each meeting even if they're infrequent, or disable attendance tracking entirely for groups where it doesn't add value. It's a tool, not a requirement.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/groups">Groups Overview</a> – Understand the full groups platform</li>
        <li><a href="/resources/docs/groups/leaders">Group Leaders</a> – How leaders use attendance tools</li>
        <li><a href="/resources/docs/groups/creating">Creating Groups</a> – Set up attendance settings for new groups</li>
        <li><a href="/resources/docs/pastoral-care/at-risk">At-Risk Detection</a> – How attendance data identifies pastoral needs</li>
        <li><a href="/resources/docs/events/check-in">Check-In System</a> – Event-based attendance tracking</li>
        <li><a href="/resources/docs/people/directory">Member Directory</a> – View member engagement across all groups</li>
      </ul>
    </div>
  );
}
