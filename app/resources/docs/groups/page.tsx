export default function GroupsOverviewPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Groups</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Organize and manage all types of church groups—small groups, classes, committees, and teams—with tools for attendance, communication, and member engagement.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        The Groups Directory lets you manage all types of church groups — small groups, classes, committees, and ministry teams. When you open the Groups page, you'll see summary stats at the top (Total Groups, Active Members, Avg. Attendance, Growth Rate) followed by a card grid of all your groups.
      </p>
      <p>
        Each group card displays the group name, a colored type tag (e.g., "Small Group" in blue, "Class" in orange, "Volunteer Team" in pink), the leader's name, meeting schedule, location, member count, attendance percentage, and month-over-month growth. Use the "View Details" and "Manage" buttons on each card to dig deeper.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Group</strong>: Any organized gathering of people—small groups, classes, committees, teams, or custom categories</li>
        <li><strong>Group Type</strong>: The category of group (e.g., Small Group, Sunday School Class, Committee, Ministry Team)</li>
        <li><strong>Group Leader</strong>: The primary person responsible for the group, with optional co-leaders and assistant leaders</li>
        <li><strong>Group Member</strong>: Someone who regularly participates in the group, tracked for attendance and communication</li>
        <li><strong>Group Finder</strong>: A public-facing directory where people can browse and join open groups</li>
        <li><strong>Group Attendance</strong>: Tracking who shows up to group meetings, used for engagement and follow-up</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Create Your First Group</h3>
      <p>
        Start by creating a group with basic information: name, type (small group, class, etc.), meeting schedule, and location. Assign a leader and add initial members from your directory. You can always refine details later.
      </p>

      <h3>Step 2: Assign Leaders</h3>
      <p>
        Designate group leaders and give them appropriate permissions. Leaders can take attendance, communicate with members, and manage their group's basic information without needing full administrative access.
      </p>

      <h3>Step 3: Track Attendance</h3>
      <p>
        Start recording attendance at group meetings. This creates engagement data that helps you identify active participants, follow up with absent members, and spot trends in group health over time.
      </p>

      <h2>Features</h2>

      <h3>Creating Groups</h3>
      <p>
        Set up new groups quickly with customizable fields for meeting times, locations, descriptions, and capacity limits. Control visibility settings to make groups private (invite-only) or public (open for anyone to join). Configure group-specific settings like childcare availability or whether the group is currently accepting new members.
      </p>
      <p>
        <a href="/resources/docs/groups/creating">Learn about Creating Groups →</a>
      </p>

      <h3>Group Types & Categories</h3>
      <p>
        Organize your groups using built-in types (Small Group, Class, Committee, Ministry Team) or create custom types that match your church's structure. Use categories to further organize groups by topic, demographic, or location—like "Women's Ministries" or "Youth Small Groups."
      </p>
      <p>
        <a href="/resources/docs/groups/types">Learn about Group Types & Categories →</a>
      </p>

      <h3>Group Leaders</h3>
      <p>
        Empower your leaders with the right tools and permissions. Assign primary leaders and co-leaders, each with their own access levels. Leaders can manage their roster, take attendance, send messages to members, and access group reports—all without needing administrator privileges.
      </p>
      <p>
        <a href="/resources/docs/groups/leaders">Learn about Group Leaders →</a>
      </p>

      <h3>Group Attendance</h3>
      <p>
        Track who shows up to group meetings with a simple attendance interface. Record notes about attendance patterns, generate engagement reports, and identify members who might need follow-up. View trends over time to measure group health and member commitment.
      </p>
      <p>
        <a href="/resources/docs/groups/attendance">Learn about Group Attendance →</a>
      </p>

      <h3>Small Group Finder</h3>
      <p>
        Make it easy for people to find their place in community. The Small Group Finder is a searchable, filterable directory of open groups that can be embedded on your website or accessed through a standalone page. People can filter by location, day of week, topic, or demographic to find groups that fit their life and interests.
      </p>
      <p>
        <a href="/resources/docs/groups/finder">Learn about Small Group Finder →</a>
      </p>

      <details>
        <summary>Advanced Features</summary>
        
        <h4>Group Life Cycles</h4>
        <p>
          Track groups through seasons: Active, On Break, Ended, or Archived. Keep historical data for groups that have concluded while focusing current attention on active groups. Perfect for semester-based classes or seasonal Bible studies.
        </p>

        <h4>Group Messaging</h4>
        <p>
          Send targeted emails or SMS messages to specific groups. Leaders can communicate with their members, and staff can broadcast updates to all leaders or all members of a certain group type. Schedule messages or send immediately.
        </p>

        <h4>Childcare Coordination</h4>
        <p>
          Track which groups offer childcare and coordinate childcare volunteers across multiple groups meeting at the same time. Parents can see childcare availability when browsing the Group Finder.
        </p>

        <h4>Group Reports & Analytics</h4>
        <p>
          Generate insights about your groups ministry: overall participation rates, groups that need attention, member engagement trends, and leader effectiveness. Export reports for elder meetings or annual reviews.
        </p>

        <h4>Multi-Campus Group Management</h4>
        <p>
          Manage groups across multiple campuses or locations with campus-specific views and reports. Groups can be tied to a specific campus or span multiple locations for ministry-wide initiatives.
        </p>

        <h4>Group Resources Library</h4>
        <p>
          Upload and share study guides, discussion questions, videos, or other resources with specific groups or all groups of a certain type. Leaders can access materials right from their group dashboard.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Start small and scale</strong> – Launch groups with just the basics (name, leader, members) and add detail as your ministry grows</li>
        <li><strong>Empower leaders with access</strong> – Give group leaders permission to manage their own groups; they don't need to wait for staff approval for routine tasks</li>
        <li><strong>Track attendance consistently</strong> – Make it a habit to record attendance within 24 hours of meetings; consistent data enables meaningful follow-up</li>
        <li><strong>Keep group sizes manageable</strong> – Most small groups thrive between 8-15 people; create new groups rather than letting one grow too large</li>
        <li><strong>Use the Group Finder proactively</strong> – Keep it updated with fresh groups and promote it during guest services, newcomer events, and in weekly communications</li>
        <li><strong>Follow up on absences</strong> – When members miss multiple meetings, leaders should reach out personally; Relius makes it easy to spot patterns</li>
        <li><strong>Refresh groups seasonally</strong> – Consider starting new groups in fall and winter when people are more likely to commit to ongoing gatherings</li>
        <li><strong>Celebrate milestones</strong> – Recognize groups that have been together for years and leaders who faithfully serve; use reports to identify these wins</li>
      </ul>

      <h2>Common Questions</h2>
      
      <p><strong>Q: What's the difference between a group and a team?</strong></p>
      <p>A: Groups typically focus on fellowship, discipleship, or study (like Bible studies or Sunday school classes), while teams focus on serving and ministry (like worship teams or hospitality teams). Both use the same tools in Relius, but the "team" designation helps with organization and reporting.</p>

      <p><strong>Q: Can someone be in multiple groups at once?</strong></p>
      <p>A: Absolutely! People often participate in several groups—a Sunday morning class, a midweek small group, and a ministry team. Relius tracks all their group involvement in one place.</p>

      <p><strong>Q: How do we handle groups that meet sporadically?</strong></p>
      <p>A: You don't have to record attendance for every meeting. For groups that gather irregularly (like committees or planning teams), track attendance only when it's meaningful for your purposes. The system is flexible.</p>

      <p><strong>Q: Can prospective members view our groups before joining the church?</strong></p>
      <p>A: Yes! The Small Group Finder can be public-facing, allowing guests and newcomers to explore groups. You control which groups appear publicly and can mark certain groups as "members only" for more sensitive gatherings.</p>

      <p><strong>Q: What if we don't call them "small groups" at our church?</strong></p>
      <p>A: No problem! You can customize group type names to match your terminology—Life Groups, Connect Groups, Community Groups, Home Fellowships, or whatever language your church uses.</p>

      <p><strong>Q: How do we prevent groups from becoming cliques?</strong></p>
      <p>A: Use Relius to monitor which groups are closed vs. open to new members, and track how long members have been in the same group. Encourage leaders to periodically refresh their groups or welcome new members. The Group Finder helps new people find entry points.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/groups/creating">Creating Groups</a> – Set up new groups step by step</li>
        <li><a href="/resources/docs/groups/types">Group Types & Categories</a> – Organize your groups structure</li>
        <li><a href="/resources/docs/groups/leaders">Group Leaders</a> – Empower leaders with tools and permissions</li>
        <li><a href="/resources/docs/groups/attendance">Group Attendance</a> – Track engagement and follow up</li>
        <li><a href="/resources/docs/groups/finder">Small Group Finder</a> – Help people discover groups</li>
        <li><a href="/resources/docs/communications/email">Email Campaigns</a> – Communicate with groups</li>
        <li><a href="/resources/docs/people/directory">Member Directory</a> – Add people to groups</li>
        <li><a href="/resources/docs/events/scheduler">Events Scheduler</a> – Schedule group meetings</li>
      </ul>
    </div>
  );
}
