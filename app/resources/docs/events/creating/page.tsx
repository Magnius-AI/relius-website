export default function CreatingEventsPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Creating Events</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Create events using the &quot;+ Create Event&quot; button in the Events Scheduler. Fill in the title, type, schedule, and visibility settings, then publish to your calendar in one step.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Every church event starts with the Create Event modal. Whether you are scheduling a recurring Sunday service, a one-time community dinner, or a midweek youth group night, the process is the same: click the button, fill in the fields, and save. The modal collects all the information Relius needs to put the event on your calendar, manage registration, assign rooms, and control visibility.
      </p>
      <p>
        Events you create flow into the rest of Relius automatically. Attendance data lands on member profiles, room assignments prevent double-bookings, and published events appear on the member-facing calendar or your public website depending on the checkboxes you select. Understanding each field in the Create Event modal helps you set things up correctly the first time so you do not have to go back and edit later.
      </p>

      <h2>Getting Started</h2>

      <h3>Step 1: Open the Create Event Modal</h3>
      <p>
        Navigate to <strong>Events Scheduler</strong> from the main navigation. In the top-right corner, click the blue <strong>&quot;+ Create Event&quot;</strong> button. This opens the Create Event modal dialog.
      </p>

      <h3>Step 2: Enter the Title</h3>
      <p>
        The <strong>Title</strong> field is required. This is the name displayed on the calendar, in list view, and in all notifications. Use a clear, specific name such as &quot;Sunday Morning Worship&quot; or &quot;Wednesday Night Bible Study&quot; rather than vague labels like &quot;Meeting.&quot;
      </p>

      <h3>Step 3: Select the Event Type</h3>
      <p>
        Use the <strong>Event Type</strong> dropdown to categorize the event. Options include:
      </p>
      <ul>
        <li>Sunday Service</li>
        <li>Midweek Service</li>
        <li>Bible Study</li>
        <li>Youth Group</li>
        <li>Children&apos;s Ministry</li>
        <li>Wedding</li>
      </ul>
      <p>
        Selecting the correct type ensures filters, analytics, and reporting work accurately across the Events Scheduler.
      </p>

      <h3>Step 4: Add a Description</h3>
      <p>
        The <strong>Description</strong> textarea is optional but recommended. Include practical details attendees need: what to expect, what to bring, dress code, or parking instructions. This text is visible to anyone who can see the event.
      </p>

      <h3>Step 5: Assign Ministry and Room</h3>
      <p>
        Use the <strong>Ministry</strong> dropdown to associate the event with a specific ministry (e.g., Worship, Youth, Outreach). The <strong>Room</strong> dropdown lets you reserve a space. The default value is &quot;No room selected.&quot; Assigning a room prevents other events from booking the same space at the same time.
      </p>

      <h3>Step 6: Set the Schedule</h3>
      <p>
        Configure the <strong>Start</strong> and <strong>End</strong> fields. Each has a date picker and a time picker. When you set the start time, the end time automatically defaults to 90 minutes later. Adjust the end time if your event is shorter or longer.
      </p>

      <h3>Step 7: Add Virtual or Location Details</h3>
      <p>
        If the event has an online component, paste the link into the <strong>Virtual Meeting URL</strong> field. Use <strong>Location Notes</strong> for additional directions such as &quot;Enter through the south entrance&quot; or &quot;Park in Lot B.&quot;
      </p>

      <h3>Step 8: Configure Registration and Cost</h3>
      <p>
        Check <strong>&quot;Requires registration&quot;</strong> if you need a headcount or want to collect RSVPs. The <strong>&quot;This event is free&quot;</strong> checkbox is enabled by default. Uncheck it to set a price for paid events like retreats, dinners, or conferences.
      </p>

      <h3>Step 9: Set Recurrence (Optional)</h3>
      <p>
        Toggle <strong>&quot;Repeat this event&quot;</strong> to create a recurring series. When enabled, you can configure the frequency (daily, weekly, monthly, yearly), interval, specific days, and an end condition. See the Events Scheduler documentation for full recurrence details.
      </p>

      <h3>Step 10: Set Visibility and Publish</h3>
      <p>
        Two checkboxes control who sees the event:
      </p>
      <ul>
        <li><strong>&quot;Publish event (visible to members)&quot;</strong> is checked by default. Uncheck it to save the event as a draft that only staff can see.</li>
        <li><strong>&quot;Show on public church website&quot;</strong> makes the event visible to non-members on your public-facing site.</li>
      </ul>

      <h3>Step 11: Save the Event</h3>
      <p>
        Click <strong>&quot;Create Event&quot;</strong> at the bottom of the modal. The event appears immediately on your calendar. Click <strong>&quot;Cancel&quot;</strong> to discard the form without saving.
      </p>

      <h2>Features</h2>

      <h3>Create Event Modal Fields Reference</h3>
      <p>
        Complete reference for every field in the Create Event modal:
      </p>
      <ul>
        <li><strong>Title *</strong> (required text input) — Event name displayed on the calendar and in all views</li>
        <li><strong>Event Type</strong> (dropdown) — Sunday Service, Midweek Service, Bible Study, Youth Group, Children&apos;s Ministry, Wedding, and others</li>
        <li><strong>Description</strong> (textarea) — Details visible to attendees</li>
        <li><strong>Ministry</strong> (dropdown) — The ministry this event belongs to</li>
        <li><strong>Room</strong> (dropdown) — Room assignment; defaults to &quot;No room selected&quot;</li>
        <li><strong>Start</strong> — Date picker + time picker</li>
        <li><strong>End</strong> — Date picker + time picker; defaults to 90 minutes after the start</li>
        <li><strong>Virtual Meeting URL</strong> (text input) — Link for hybrid or online events</li>
        <li><strong>Location Notes</strong> (text input) — Parking info, entrance directions, or other location details</li>
        <li><strong>Registration</strong> — &quot;Requires registration&quot; checkbox</li>
        <li><strong>Cost</strong> — &quot;This event is free&quot; checkbox (checked by default)</li>
        <li><strong>Repeat this event</strong> — Toggle to enable recurrence settings</li>
        <li><strong>Publish event (visible to members)</strong> — Checkbox, checked by default</li>
        <li><strong>Show on public church website</strong> — Checkbox for public visibility</li>
      </ul>
      <p>
        The modal footer contains two buttons: <strong>Cancel</strong> (discards the form) and <strong>Create Event</strong> (saves and publishes).
      </p>

      <h3>Event Detail Popup Actions</h3>
      <p>
        After creating an event, click it on the calendar to open the event detail popup. The popup provides three primary actions:
      </p>
      <ul>
        <li><strong>Edit</strong> — Modify any field from the original creation form. For recurring events, you can edit a single occurrence or the entire series.</li>
        <li><strong>Generate QR Code</strong> — Create a scannable code for sharing the event or enabling check-in at the door.</li>
        <li><strong>Cancel Event</strong> — Cancel the event with a required reason field. Cancelled events are hidden from the default calendar view.</li>
      </ul>
      <p>
        The detail popup also shows two people sections:
      </p>
      <ul>
        <li><strong>Attendees</strong> — Search for and add members. Shows people who are registered or checked in.</li>
        <li><strong>Volunteers</strong> — Search for and assign volunteers with specific roles for the event.</li>
      </ul>

      <h3>Draft Events</h3>
      <p>
        Uncheck <strong>&quot;Publish event (visible to members)&quot;</strong> to save an event as a draft. Drafts are only visible to staff in the Events Scheduler. This is useful when event details are still being confirmed. When you are ready, edit the event and check the publish box to make it live.
      </p>

      <h3>Hybrid and Virtual Events</h3>
      <p>
        For events with both in-person and online attendance, fill in the <strong>Room</strong> field for the physical location and the <strong>Virtual Meeting URL</strong> field for the online link. Attendees see both options when viewing the event.
      </p>

      <details>
        <summary>Advanced Options</summary>

        <h4>Recurring Event Configuration</h4>
        <p>
          When you enable <strong>&quot;Repeat this event&quot;</strong>, additional fields appear for frequency (Daily, Weekly, Monthly, Yearly), interval (every 1 week, every 2 weeks), day selection (for weekly recurrence), and end condition (specific date, after a number of occurrences, or no end date). Recurring events display a &quot;Recurring&quot; badge in their detail popup.
        </p>

        <h4>Room Conflict Detection</h4>
        <p>
          When you select a room that is already booked during your chosen time slot, Relius displays a conflict warning. You can choose a different room, adjust the time, or proceed if you know the overlap is intentional (such as setup time before a service).
        </p>

        <h4>Event Templates</h4>
        <p>
          If you create similar events frequently, save time by duplicating an existing event. Open any event, click <strong>Edit</strong>, and use the duplicate option to pre-fill all fields with the original event&apos;s settings. Update the date and any details that differ.
        </p>

        <h4>Multi-Ministry Events</h4>
        <p>
          Some events involve multiple ministries (such as a Vacation Bible School that spans Children&apos;s Ministry, Youth, and Worship). Assign the primary ministry in the Ministry dropdown and coordinate with other ministry leaders through the Volunteers section in the event detail popup.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Use specific titles</strong> — &quot;Easter Sunday Worship - 9:00 AM&quot; is more useful than &quot;Service&quot; when scanning a busy calendar</li>
        <li><strong>Always assign a room</strong> — Room assignment prevents double-bookings and gives attendees clear location information</li>
        <li><strong>Set the correct event type</strong> — Consistent type selection keeps filters and analytics accurate across the scheduler</li>
        <li><strong>Write descriptions for public events</strong> — Non-members seeing events on your website need context about what to expect</li>
        <li><strong>Use drafts for tentative events</strong> — Uncheck the publish box until details are confirmed to avoid confusion among members</li>
        <li><strong>Enable registration for capacity-limited events</strong> — Retreats, dinners, and classes need headcounts; free-form attendance works for regular services</li>
        <li><strong>Include location notes</strong> — Parking instructions, entrance directions, and accessibility information reduce day-of confusion</li>
        <li><strong>Set recurrence instead of creating individual events</strong> — Weekly services and monthly meetings should use the repeat toggle, not manual creation each time</li>
        <li><strong>Review the public website checkbox</strong> — Only check &quot;Show on public church website&quot; for events you want non-members to see</li>
      </ul>

      <h2>Common Questions</h2>

      <p><strong>Q: What is the default event duration?</strong></p>
      <p>A: 90 minutes. When you set a start time, the end time automatically advances by 90 minutes. You can adjust the end time to any value.</p>

      <p><strong>Q: Can I create an event without publishing it?</strong></p>
      <p>A: Yes. Uncheck &quot;Publish event (visible to members)&quot; before clicking Create Event. The event saves as a draft visible only to staff.</p>

      <p><strong>Q: What happens if I select a room that is already booked?</strong></p>
      <p>A: Relius shows a conflict warning. You can choose a different room, change the time, or acknowledge the conflict and proceed.</p>

      <p><strong>Q: How do I edit an event after creating it?</strong></p>
      <p>A: Click the event on the calendar to open the detail popup, then click <strong>Edit</strong>. For recurring events, you will be asked whether to edit a single occurrence or the entire series.</p>

      <p><strong>Q: How do I cancel an event?</strong></p>
      <p>A: Open the event detail popup and click <strong>Cancel Event</strong>. Enter a cancellation reason when prompted. Cancelled events are hidden from the default view but can be displayed using the &quot;Show cancelled&quot; filter.</p>

      <p><strong>Q: Can I generate a QR code for my event?</strong></p>
      <p>A: Yes. Open the event detail popup and click <strong>Generate QR Code</strong>. The QR code can be printed on flyers, projected on screens, or shared digitally for event access and check-in.</p>

      <p><strong>Q: Is the Title field the only required field?</strong></p>
      <p>A: Yes. Title is the only field marked as required. All other fields are optional, though filling in the schedule, room, and event type is strongly recommended for a complete event listing.</p>

      <p><strong>Q: How do I add attendees or volunteers to an event?</strong></p>
      <p>A: Open the event detail popup after creating the event. Use the <strong>Attendees</strong> section to search for and add members. Use the <strong>Volunteers</strong> section to assign team members with specific roles.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/events">Events & Calendar Overview</a> — Full events platform documentation</li>
        <li><a href="/resources/docs/events/scheduler">Events Scheduler</a> — Calendar views, filtering, and analytics</li>
        <li><a href="/resources/docs/events/check-in">Check-Ins & Attendance</a> — Track attendance with QR codes and live feeds</li>
        <li><a href="/resources/docs/services/scheduling">Service Scheduling</a> — Schedule volunteers for services</li>
        <li><a href="/resources/docs/communications/announcements">Announcements</a> — Promote events to your congregation</li>
      </ul>
    </div>
  );
}
