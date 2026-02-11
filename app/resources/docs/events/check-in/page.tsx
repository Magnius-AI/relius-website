export default function CheckInsAttendancePage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Check-Ins & Attendance</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Track event attendance in real time using QR code scanning, guest check-in, and a live activity feed. View stat cards for total check-ins, first-time guests, and active events at a glance.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        The Check-Ins & Attendance page is your real-time dashboard for who is at your church right now. When members arrive at an event, they scan a QR code or a volunteer checks them in manually. Each check-in appears instantly in the live feed, and the stat cards at the top of the page update automatically to reflect current numbers.
      </p>
      <p>
        This system replaces paper sign-in sheets and manual headcounts with accurate, timestamped attendance records. Every check-in is tied to a member profile and an event, so you build a complete attendance history over time without any extra data entry. First-time guests are flagged automatically so your welcome team can follow up the same week.
      </p>
      <p>
        The page is designed for use during live events. Open it on a tablet at the welcome desk, on a laptop in the church office, or on a phone while walking the campus. The interface stays current through automatic refresh, and the controls are sized for quick taps in a busy lobby.
      </p>

      <h2>Getting Started</h2>

      <h3>Step 1: Open Check-Ins & Attendance</h3>
      <p>
        Navigate to <strong>Check-Ins & Attendance</strong> from the main navigation. The page loads with three stat cards at the top and a live activity feed below.
      </p>

      <h3>Step 2: Review the Stat Cards</h3>
      <p>
        Three stat cards are displayed at the top of the page:
      </p>
      <ul>
        <li><strong>Total Check-Ins Today</strong> — The cumulative number of people checked in across all events for the current day</li>
        <li><strong>First-Time Guests</strong> — The number of people checking in who have not attended any previous event</li>
        <li><strong>Active Events Today</strong> — The count of events currently in progress or scheduled for today that have check-in enabled</li>
      </ul>

      <h3>Step 3: Check Someone In via QR Code</h3>
      <p>
        Click the <strong>&quot;Scan QR Code&quot;</strong> button to activate the QR scanner. When a member presents their QR code (from the church app, a printed bulletin, or an event-specific code), the scanner reads it and records the check-in. The member&apos;s name and event appear immediately in the live feed.
      </p>

      <h3>Step 4: Check In a Guest Manually</h3>
      <p>
        Click the <strong>&quot;Guest Check-In&quot;</strong> button to check in someone who does not have a QR code or is not yet in the system. Enter their name and select the event they are attending. If the person is not in your member directory, a basic profile is created so you can follow up later.
      </p>

      <h3>Step 5: Monitor the Live Feed</h3>
      <p>
        The <strong>Today&apos;s Check-Ins</strong> section displays a live feed of recent check-ins in reverse chronological order. Each entry shows the person&apos;s name, the event they checked into, and the timestamp. Use this feed to monitor attendance as people arrive.
      </p>

      <h3>Step 6: Refresh the Data</h3>
      <p>
        Click the <strong>&quot;Refresh Feed&quot;</strong> button to manually update the stat cards and live feed. The page also refreshes automatically at regular intervals, but the manual refresh button is useful when you need an immediate update.
      </p>

      <h2>Features</h2>

      <h3>QR Code-Based Check-In</h3>
      <p>
        The primary check-in method uses QR codes. There are two ways QR codes work in the system:
      </p>
      <ul>
        <li><strong>Member QR codes</strong> — Each member has a unique QR code in their profile (accessible through the church app). When scanned at an event, the system matches the code to the member and records their attendance at the current active event.</li>
        <li><strong>Event QR codes</strong> — Each event can have its own QR code (generated from the event detail popup using <strong>Generate QR Code</strong>). Post this code at the event entrance. Members scan it with their phone to self-check-in.</li>
      </ul>
      <p>
        QR scanning works with the device camera. Position the QR code within the scanner frame and the check-in registers within one to two seconds.
      </p>

      <h3>Guest Check-In</h3>
      <p>
        The <strong>Guest Check-In</strong> flow handles people who are not in your system:
      </p>
      <ul>
        <li>Click <strong>&quot;Guest Check-In&quot;</strong></li>
        <li>Enter the guest&apos;s name</li>
        <li>Select the event they are attending</li>
        <li>Optionally capture contact information (phone number or email) for follow-up</li>
        <li>The guest appears in the live feed and is flagged as a first-time visitor</li>
      </ul>
      <p>
        Guest records are saved to the member directory as a new profile. Your welcome team or pastoral staff can follow up during the week using the First-Time Guests stat card as a starting point.
      </p>

      <h3>Today&apos;s Check-Ins Live Feed</h3>
      <p>
        The live feed is the central section of the Check-Ins & Attendance page. It shows:
      </p>
      <ul>
        <li>Person&apos;s name</li>
        <li>Event name they checked into</li>
        <li>Check-in timestamp</li>
        <li>First-time guest indicator (when applicable)</li>
      </ul>
      <p>
        Entries appear in reverse chronological order so the most recent check-in is always at the top. The feed updates automatically and can be manually refreshed using the <strong>&quot;Refresh Feed&quot;</strong> button.
      </p>

      <h3>Recent Activity Section</h3>
      <p>
        Below the live feed, the <strong>Recent Activity</strong> section provides a broader view of check-in patterns. This includes summary data such as check-in volume by event, peak arrival times, and comparison to previous weeks. Use this section to understand attendance trends without running a separate report.
      </p>

      <h3>Stat Cards</h3>
      <p>
        The three stat cards at the top of the page provide at-a-glance metrics:
      </p>
      <ul>
        <li><strong>Total Check-Ins Today</strong> — Running total across all events. Useful for quick headcount during a service or event.</li>
        <li><strong>First-Time Guests</strong> — Count of new visitors. This number drives your follow-up workflow: any non-zero value means someone new walked in and should be contacted.</li>
        <li><strong>Active Events Today</strong> — Number of events currently happening or scheduled today with check-in enabled. Helps staff see the full scope of activity.</li>
      </ul>

      <details>
        <summary>Advanced Features</summary>

        <h4>Kiosk Mode</h4>
        <p>
          Set up a tablet at your entrance as a self-service check-in station. Kiosk mode presents a simplified interface where attendees can search for their name or scan their QR code without navigating the full Check-Ins & Attendance page. The device locks to the check-in screen to prevent other use.
        </p>

        <h4>Children&apos;s Ministry Check-In</h4>
        <p>
          For children&apos;s ministry events, check-in generates matching security tags for the child and parent or guardian. The child&apos;s tag includes their name, age-appropriate room assignment, and any allergy or medical notes. The parent&apos;s tag includes a matching security code required at pickup. This feature must be enabled per event in the event settings.
        </p>

        <h4>Volunteer Check-In</h4>
        <p>
          Volunteers assigned to an event through the Volunteers section of the event detail popup can check in separately from general attendees. Volunteer check-ins are tracked distinctly so you can see how many team members showed up versus how many were scheduled.
        </p>

        <h4>Attendance Reports</h4>
        <p>
          Check-in data feeds into attendance reports accessible from <strong>Reports</strong> in the main navigation. Generate reports by event, date range, ministry, or member. Export data to CSV for external analysis or elder board presentations.
        </p>

        <h4>Automated Follow-Up</h4>
        <p>
          Configure automated workflows triggered by check-in data. Examples: send a welcome email to first-time guests within 24 hours, notify the small groups pastor when someone checks in for the third consecutive week, or alert children&apos;s ministry leaders when a new child is registered.
        </p>

        <h4>Multi-Event Check-In</h4>
        <p>
          When multiple events overlap (such as the main service, children&apos;s ministry, and youth group running simultaneously), the check-in system lets you select which event to check someone into. The scanner prompts for event selection when more than one active event is detected.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Position a check-in station at every entrance</strong> — If people can bypass the check-in point, your attendance data will be incomplete</li>
        <li><strong>Train greeters on guest check-in</strong> — Volunteers should be comfortable checking in visitors who do not have a QR code</li>
        <li><strong>Follow up with first-time guests within 48 hours</strong> — The First-Time Guests stat card is only useful if someone acts on the data</li>
        <li><strong>Use event-specific QR codes for large events</strong> — Print them on programs or project them on screen so attendees can self-check-in from their phones</li>
        <li><strong>Keep the live feed visible to your welcome team</strong> — A tablet showing the feed helps greeters confirm check-ins and spot arrivals</li>
        <li><strong>Review the stat cards after each service</strong> — A quick glance tells you total attendance, new visitors, and how many events ran that day</li>
        <li><strong>Use kiosk mode for children&apos;s ministry</strong> — Parents expect a structured check-in process for kids; kiosk mode with security tags meets that expectation</li>
        <li><strong>Refresh the feed before making decisions</strong> — Click &quot;Refresh Feed&quot; to ensure you are looking at the latest data, especially during peak arrival times</li>
        <li><strong>Do not skip manual check-ins</strong> — If someone arrives without a QR code, use Guest Check-In rather than letting them go unrecorded</li>
      </ul>

      <h2>Common Questions</h2>

      <p><strong>Q: What do the three stat cards show?</strong></p>
      <p>A: <strong>Total Check-Ins Today</strong> (cumulative check-ins across all events), <strong>First-Time Guests</strong> (new visitors not previously in the system), and <strong>Active Events Today</strong> (events with check-in enabled that are happening today).</p>

      <p><strong>Q: How does QR code check-in work?</strong></p>
      <p>A: Click <strong>&quot;Scan QR Code&quot;</strong> to activate the scanner. Point the device camera at the member&apos;s QR code. The system reads the code, matches it to the member, and records the check-in. The entry appears in the live feed immediately.</p>

      <p><strong>Q: How do I check in someone who is not in the system?</strong></p>
      <p>A: Click <strong>&quot;Guest Check-In&quot;</strong>, enter their name, select the event, and optionally capture contact information. A new profile is created in the member directory and the check-in is recorded.</p>

      <p><strong>Q: Does the live feed update automatically?</strong></p>
      <p>A: Yes. The feed refreshes at regular intervals. You can also click <strong>&quot;Refresh Feed&quot;</strong> for an immediate manual update.</p>

      <p><strong>Q: Can multiple events run check-in simultaneously?</strong></p>
      <p>A: Yes. The Active Events Today stat card shows how many events are running. When scanning a QR code during overlapping events, the system prompts you to select which event the person is attending.</p>

      <p><strong>Q: How are first-time guests identified?</strong></p>
      <p>A: Anyone who has never been checked into a previous event is automatically flagged as a first-time guest. Their check-in entry in the live feed includes a first-time indicator, and they are counted in the First-Time Guests stat card.</p>

      <p><strong>Q: Where does check-in data go after the event?</strong></p>
      <p>A: Each check-in is recorded on the member&apos;s profile as part of their attendance history. The data is also available in attendance reports under <strong>Reports</strong> in the main navigation. You can filter by event, date range, ministry, or individual member.</p>

      <p><strong>Q: Can I use this on a phone?</strong></p>
      <p>A: Yes. The Check-Ins & Attendance page is designed for use on phones, tablets, and desktops. The QR scanner uses the device&apos;s built-in camera.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/events">Events & Calendar Overview</a> — Full events platform documentation</li>
        <li><a href="/resources/docs/events/creating">Creating Events</a> — Set up events with check-in enabled</li>
        <li><a href="/resources/docs/events/scheduler">Events Scheduler</a> — Calendar views, filtering, and event management</li>
        <li><a href="/resources/docs/groups/attendance">Group Attendance</a> — Track attendance within small groups</li>
        <li><a href="/resources/docs/pastoral-care/at-risk">At-Risk Detection</a> — Use attendance patterns to identify pastoral needs</li>
        <li><a href="/resources/docs/people/directory">Member Directory</a> — View attendance history on member profiles</li>
      </ul>
    </div>
  );
}
