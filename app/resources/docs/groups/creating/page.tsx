export default function CreatingGroupsPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Creating Groups</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Create and configure new groups in minutes with customizable settings for meeting times, locations, visibility, and member capacity.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Setting up a new group in Relius is straightforward but flexible. Whether you're launching your church's first small group ministry or adding the 47th Bible study to an established network, the group creation process walks you through essential details while allowing you to skip optional settings you can configure later.
      </p>
      <p>
        The key to successful group creation is thinking through your goals upfront: Is this an ongoing small group or a six-week class? Will it be open to anyone or invitation-only? Does it meet weekly or monthly? These decisions shape how you configure the group's settings and how members will interact with it.
      </p>
      <p>
        You'll start with the basics—name, type, and leader—then layer on details like meeting schedules, location information, capacity limits, and visibility settings. Every field can be edited later, so don't let perfectionism slow you down. Get the group created, start adding members, and refine as you go.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Group Name</strong>: A clear, descriptive title that helps people identify the group (e.g., "Tuesday Night Men's Study – Westside")</li>
        <li><strong>Group Type</strong>: The category this group belongs to (Small Group, Sunday School Class, Committee, etc.)</li>
        <li><strong>Visibility</strong>: Who can see and join this group—Public (anyone), Private (invite-only), or Hidden (internal use only)</li>
        <li><strong>Open Status</strong>: Whether the group is currently accepting new members or closed to protect community dynamics</li>
        <li><strong>Capacity</strong>: The maximum number of members, after which new registrations are prevented</li>
        <li><strong>Meeting Schedule</strong>: When and where the group meets, used for calendars and the Group Finder</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Navigate to Groups</h3>
      <p>
        From your Relius dashboard, go to <strong>Groups</strong> in the main navigation, then click <strong>Create Group</strong>. This opens the group creation form with several sections to complete.
      </p>

      <h3>Step 2: Enter Basic Information</h3>
      <p>
        Fill in the essentials: <strong>Group Name</strong> (be specific—"Men's Bible Study" is less helpful than "Tuesday Morning Men's Study – Downtown Campus"), <strong>Group Type</strong> (select from your predefined types), and <strong>Description</strong> (2-3 sentences about the group's purpose and what to expect).
      </p>

      <h3>Step 3: Assign a Leader</h3>
      <p>
        Select the primary leader from your member directory. This person will receive leader permissions and access to group management tools. You can add co-leaders and assistant leaders after the group is created.
      </p>

      <h3>Step 4: Configure Meeting Details</h3>
      <p>
        Specify <strong>Meeting Day(s)</strong>, <strong>Meeting Time</strong>, <strong>Frequency</strong> (weekly, biweekly, monthly), and <strong>Location</strong> (can be a church building, home address, or "rotating locations"). These details power the group calendar and help people know what they're committing to.
      </p>

      <h3>Step 5: Set Visibility & Capacity</h3>
      <p>
        Choose whether the group is <strong>Public</strong> (appears in Group Finder), <strong>Private</strong> (invite-only), or <strong>Hidden</strong> (internal administrative groups). Set a <strong>Maximum Capacity</strong> if you want to limit group size (highly recommended for small groups; optional for classes and teams).
      </p>

      <h3>Step 6: Add Initial Members</h3>
      <p>
        Search for members in your directory and add them to the group roster. You can add people immediately or do this later. Some churches create the group first, then let the leader add members themselves.
      </p>

      <h3>Step 7: Save and Launch</h3>
      <p>
        Click <strong>Create Group</strong> and you're live! The group now appears in your groups list, the leader can access it from their dashboard, and members will see it on their profile (if they've been added). If the group is public, it immediately becomes discoverable in the Small Group Finder.
      </p>

      <h2>Features</h2>

      <h3>Group Visibility Settings</h3>
      <p>
        Control who can see and join your group with three visibility levels:
      </p>
      <ul>
        <li><strong>Public</strong>: Appears in the Small Group Finder and church website; anyone can request to join or self-register (depending on your settings)</li>
        <li><strong>Private</strong>: Doesn't appear publicly, but invited members can see it; perfect for specialized groups, recovery ministries, or leadership cohorts</li>
        <li><strong>Hidden</strong>: Only staff and the leader can see it; used for internal committees, planning teams, or administrative purposes</li>
      </ul>
      <p>
        You can change visibility at any time. Many churches start groups as private while they're forming, then make them public once they're established and ready to accept new members.
      </p>

      <h3>Meeting Schedule Configuration</h3>
      <p>
        Relius supports flexible scheduling for all types of groups:
      </p>
      <ul>
        <li><strong>Regular Schedule</strong>: Weekly, biweekly, or monthly meetings on the same day(s) and time</li>
        <li><strong>Custom Schedule</strong>: Specify exact dates for short-term classes or special groups (e.g., "8-week study starting September 10")</li>
        <li><strong>Seasonal Groups</strong>: Set start and end dates for groups that run for defined periods</li>
        <li><strong>Ad Hoc</strong>: No fixed schedule for groups that meet sporadically (committees, planning teams)</li>
      </ul>
      <p>
        The schedule you configure shows up in group calendars, leader dashboards, and the Group Finder. It also powers automated reminders and attendance tracking.
      </p>

      <h3>Capacity Management</h3>
      <p>
        Set capacity limits to maintain healthy group dynamics. When a group reaches capacity, new registration attempts are blocked and the group shows as "Full" in the Group Finder (unless you enable a waitlist).
      </p>
      <p>
        Best practices for capacity:
      </p>
      <ul>
        <li>Small groups: 12-15 maximum (allows for some absences while maintaining intimacy)</li>
        <li>Sunday school classes: 20-30 maximum (classroom/space dependent)</li>
        <li>Ministry teams: Varies by role (worship team might be 8-12, hospitality team could be 30+)</li>
        <li>Committees: Typically 5-10 for effective decision-making</li>
      </ul>

      <h3>Childcare & Accessibility Options</h3>
      <p>
        Mark whether your group offers childcare or is wheelchair accessible. These flags appear in the Group Finder and help families and those with mobility needs find suitable groups. You can also add custom tags for other accessibility features.
      </p>

      <details>
        <summary>Advanced Options</summary>

        <h4>Custom Group Fields</h4>
        <p>
          Add church-specific fields to capture unique information about your groups. Examples: "Study Material" (book or curriculum being used), "Semester" (Fall 2024, Spring 2025), "Campus" (for multi-site churches), or "Age Group" (20s-30s, 40s-50s, All Ages).
        </p>

        <h4>Approval Workflows</h4>
        <p>
          Require leader or staff approval before new members can join. When someone requests to join a public group, the leader receives a notification and can approve or decline. Useful for groups with size limits or specific requirements.
        </p>

        <h4>Automated Waitlists</h4>
        <p>
          When a group reaches capacity, interested people can join a waitlist. If a spot opens up (someone leaves), the next person on the waitlist is automatically notified. Takes the administrative burden off leaders.
        </p>

        <h4>Group Tags & Labels</h4>
        <p>
          Add multiple tags to groups for advanced filtering: topics (Bible Study, Prayer, Service), demographics (Men, Women, Couples, Singles, Seniors), formats (Discussion, Lecture, Service Project), or interests (Sports, Arts, Outdoors).
        </p>

        <h4>Duplicate & Template Groups</h4>
        <p>
          Clone an existing group to quickly create similar groups. Perfect for starting multiple small groups with the same structure or launching a new semester of Sunday school classes. Copy settings but leave the member roster empty.
        </p>

        <h4>Group Launch Date & Duration</h4>
        <p>
          Set specific start and end dates for time-bound groups. The system can automatically mark the group as "Ended" after the final meeting date and prompt you to archive or renew it. Great for classes and short-term studies.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Use descriptive names</strong> – "Thursday Women's Study – North Campus" is better than "Women's Group #3"</li>
        <li><strong>Write compelling descriptions</strong> – Answer "What will we study?" and "What's the vibe?" Avoid generic language</li>
        <li><strong>Set capacity limits on small groups</strong> – 12-15 people preserves intimacy and depth; create new groups instead of growing one too large</li>
        <li><strong>Make meeting details specific</strong> – "Every Tuesday at 7:00 PM" plus an address beats "Weeknight evenings"</li>
        <li><strong>Start private, go public</strong> – Launch groups as private while forming, then open them up once they're established</li>
        <li><strong>Add co-leaders early</strong> – Shared leadership prevents burnout and provides continuity when the primary leader is absent</li>
        <li><strong>Use categories consistently</strong> – Establish a clear taxonomy (Men's/Women's, Geographic, Topical) and stick with it</li>
        <li><strong>Include childcare info</strong> – This is a major decision factor for young families; make it visible</li>
        <li><strong>Review group settings seasonally</strong> – Update descriptions, refresh leader assignments, and archive inactive groups</li>
      </ul>

      <h2>Common Questions</h2>
      
      <p><strong>Q: Can I create a group without assigning a leader immediately?</strong></p>
      <p>A: Yes, but it's not recommended. Groups without leaders tend to languish. If you're still recruiting a leader, assign yourself or a staff member as a placeholder, then transfer leadership when you find the right person.</p>

      <p><strong>Q: What happens if we exceed the capacity I set?</strong></p>
      <p>A: The system prevents new registrations once capacity is reached. However, leaders and admins can manually add members beyond capacity if there's a good reason (like adding a married couple where one spouse was already counted).</p>

      <p><strong>Q: Can groups meet at different locations each week?</strong></p>
      <p>A: Yes! Set the location as "Rotating" and add notes like "Host home rotates weekly—members receive address via email." You can also update the location field before each meeting.</p>

      <p><strong>Q: How do we handle groups that take summer breaks?</strong></p>
      <p>A: Set the group status to "On Break" during the summer. This keeps the group visible in your system but removes it from the public Group Finder. When fall arrives, change the status back to "Active" and let members know you're resuming.</p>

      <p><strong>Q: Can someone join a group without being in our member directory?</strong></p>
      <p>A: If someone isn't in your directory yet, they'll be prompted to create a basic profile when they request to join a group through the Group Finder. This simultaneously adds them to your database and the group.</p>

      <p><strong>Q: What's the difference between "Private" and "Hidden" groups?</strong></p>
      <p>A: Private groups don't appear publicly but members can see them and talk about them. Hidden groups are completely invisible except to leaders and staff—useful for elder meetings, staff planning groups, or sensitive care ministries.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/groups">Groups Overview</a> – Understand the full groups platform</li>
        <li><a href="/resources/docs/groups/types">Group Types & Categories</a> – Organize your groups structure</li>
        <li><a href="/resources/docs/groups/leaders">Group Leaders</a> – Assign and empower leaders</li>
        <li><a href="/resources/docs/groups/finder">Small Group Finder</a> – Make groups discoverable</li>
        <li><a href="/resources/docs/people/directory">Member Directory</a> – Add people to groups</li>
        <li><a href="/resources/docs/events/scheduler">Events Scheduler</a> – Schedule group meetings</li>
      </ul>
    </div>
  );
}
