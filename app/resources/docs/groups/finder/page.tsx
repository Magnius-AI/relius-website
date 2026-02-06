export default function GroupFinderPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Small Group Finder</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: A searchable, public-facing directory that helps people discover and join groups that fit their interests, location, and schedule.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        The hardest part of small groups ministry isn't creating great groups—it's helping people find the right one. Someone visits your church on Sunday and hears about small groups from the stage. They're interested, but they don't want to email a staff member or fill out a connection card. They want to browse options, filter by what matters to them (location, day of week, topic), and join one that fits. The Small Group Finder makes that possible.
      </p>
      <p>
        Think of it as the "groups catalog" for your church. Just like people browse products on Amazon or apartments on Zillow, they can browse your groups with powerful filtering and clear information about each option. They see when it meets, where it meets, who leads it, whether there's childcare, and whether it's currently accepting new members. If they're interested, they can request to join with a single click.
      </p>
      <p>
        The Finder lives on your church website (embedded via iframe or JavaScript widget) or as a standalone page hosted by Relius. It updates automatically as you add new groups, close full groups, or change meeting details. No more outdated PDFs or manual website updates—leaders and staff manage groups in Relius, and the Finder reflects changes instantly.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Group Finder</strong>: A public directory of groups available for people to browse and join</li>
        <li><strong>Visibility Settings</strong>: Controls which groups appear publicly (Public), by invitation only (Private), or are hidden entirely (Hidden)</li>
        <li><strong>Filter Options</strong>: Criteria people can use to narrow group listings (location, day, topic, demographic, etc.)</li>
        <li><strong>Self-Registration</strong>: Allowing people to join groups directly without leader approval</li>
        <li><strong>Join Request</strong>: When someone asks to join a group, triggering leader or staff approval</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Mark Groups as Public</h3>
      <p>
        Not all groups should appear in the Finder. Review your groups and set visibility to <strong>Public</strong> for groups that are open to new members. Keep <strong>Private</strong> for groups that are invite-only (like leadership cohorts) and <strong>Hidden</strong> for internal teams (like staff meetings or committees).
      </p>

      <h3>Step 2: Complete Group Information</h3>
      <p>
        Public groups should have compelling descriptions, accurate meeting details, and clear information about what to expect. Review each public group to ensure the description answers: What will we study/do? Who is this for? What's the vibe? Include meeting location details (address or "rotating homes").
      </p>

      <h3>Step 3: Configure Finder Settings</h3>
      <p>
        Go to <strong>Groups → Settings → Group Finder</strong> to customize how the Finder looks and behaves. Choose which filters to display (day of week, topic, demographic, location), set the default sort order, and decide whether people can self-register or must request to join.
      </p>

      <h3>Step 4: Embed on Your Website</h3>
      <p>
        Copy the embed code or JavaScript widget from <strong>Groups → Group Finder → Embed Code</strong> and add it to your church website. Common placement: a "Find a Group" or "Connect" page. The Finder can also be accessed via a standalone URL if you prefer.
      </p>

      <h3>Step 5: Promote the Finder</h3>
      <p>
        Put the Finder link in your weekly bulletin, mention it in new member classes, and reference it from the stage during connection moments. Make it the default answer to "How do I join a small group?"
      </p>

      <h2>Features</h2>

      <h3>Search & Filter Capabilities</h3>
      <p>
        The Finder supports multiple filtering options to help people narrow down their choices:
      </p>
      <ul>
        <li><strong>Day of Week</strong>: "Show me groups that meet on Tuesday or Thursday"</li>
        <li><strong>Time of Day</strong>: Morning, afternoon, evening, or specific time ranges</li>
        <li><strong>Location</strong>: Geographic area, campus, zip code radius, or "online only"</li>
        <li><strong>Topic/Focus</strong>: Bible study, prayer, service, social, parenting, marriage, etc.</li>
        <li><strong>Demographic</strong>: Men, women, co-ed, couples, singles, young adults, seniors, etc.</li>
        <li><strong>Childcare Available</strong>: Filter to only groups offering childcare</li>
        <li><strong>Open Status</strong>: Show only groups currently accepting new members (hide full groups)</li>
        <li><strong>Keyword Search</strong>: Free-text search across group names and descriptions</li>
      </ul>
      <p>
        People can combine filters: "Tuesday evening women's groups with childcare in the downtown area." The more filters you enable, the more precisely people can find their fit.
      </p>

      <h3>Group Listing Display</h3>
      <p>
        Each group in the Finder displays key information at a glance:
      </p>
      <ul>
        <li><strong>Group Name</strong>: Clear, descriptive title</li>
        <li><strong>Description</strong>: 2-3 sentence overview of what the group is about</li>
        <li><strong>Meeting Schedule</strong>: "Every Tuesday at 7:00 PM" or "1st and 3rd Thursdays at 6:30 PM"</li>
        <li><strong>Location</strong>: Neighborhood, address, or "Online via Zoom"</li>
        <li><strong>Leader</strong>: Name and photo (optional) of the group leader</li>
        <li><strong>Spots Available</strong>: "3 spots left" or "Full (waitlist available)" or "Unlimited"</li>
        <li><strong>Tags</strong>: Visual indicators like "Childcare," "New Group," "Wheelchair Accessible"</li>
        <li><strong>Join Button</strong>: One-click to request membership or self-register</li>
      </ul>

      <h3>Self-Registration vs. Approval Workflow</h3>
      <p>
        You control how people join groups:
      </p>
      <ul>
        <li>
          <strong>Self-Registration</strong>: When someone clicks "Join This Group," they're immediately added to the roster and the leader is notified. Best for churches with a high trust culture and established group structures.
        </li>
        <li>
          <strong>Request to Join</strong>: When someone clicks "Request to Join," the leader receives a notification with the person's profile and can approve or decline. Best for groups with size limits or specific requirements.
        </li>
        <li>
          <strong>Contact Leader</strong>: The button says "Contact Leader" and opens an email form. The person introduces themselves, and the leader decides next steps. Most manual but also most personal.
        </li>
      </ul>
      <p>
        You can set a default globally and override it per group. Some churches use self-registration for large classes but require approval for intimate small groups.
      </p>

      <h3>Mobile-Responsive Design</h3>
      <p>
        The Finder is optimized for mobile devices since many people browse groups on their phone during or right after a Sunday service. Filters collapse into a mobile-friendly menu, group cards stack vertically, and the join process works seamlessly on small screens.
      </p>

      <h3>Customization & Branding</h3>
      <p>
        Customize the Finder to match your church's visual identity:
      </p>
      <ul>
        <li><strong>Color Scheme</strong>: Match your church's brand colors</li>
        <li><strong>Logo</strong>: Display your church logo at the top</li>
        <li><strong>Font Choices</strong>: Use fonts consistent with your website</li>
        <li><strong>Custom Text</strong>: Change button labels, headers, and instructional text to match your voice</li>
        <li><strong>Featured Groups</strong>: Pin certain groups to the top (new groups, groups needing members, seasonal groups)</li>
      </ul>

      <details>
        <summary>Advanced Features</summary>

        <h4>Map View</h4>
        <p>
          Display groups on an interactive map showing where each group meets. People can click on map markers to see group details and filter by proximity to their home or workplace. Great for churches with geographically dispersed groups.
        </p>

        <h4>Group Recommendations</h4>
        <p>
          Based on a person's profile (age, marital status, location, interests), suggest groups that might be a good fit. "Based on your profile, you might like these groups..." Uses basic matching logic to personalize the browsing experience.
        </p>

        <h4>Waitlist Management</h4>
        <p>
          When a group reaches capacity, interested people can join a waitlist. If someone leaves the group, the next person on the waitlist is automatically notified of the opening. Prevents losing interested people when their first-choice group is full.
        </p>

        <h4>Multi-Language Support</h4>
        <p>
          Display the Finder in multiple languages for diverse congregations. Group names and descriptions can be translated, and the interface adapts to the viewer's language preference.
        </p>

        <h4>Guest Access (No Login Required)</h4>
        <p>
          Allow non-members and visitors to browse groups without creating an account. When they find a group they like and click "Join," they're prompted to create a basic profile. Lowers the barrier to entry for newcomers.
        </p>

        <h4>Analytics & Tracking</h4>
        <p>
          See which groups get the most views, which filters people use most, where people drop off, and which groups convert browsers to members. Use data to improve group descriptions and adjust your group offerings.
        </p>

        <h4>Seasonal/Event-Based Finder</h4>
        <p>
          Create temporary Finder instances for special events like a fall small groups launch or a Lent study series. Filter the catalog to show only groups starting soon, creating urgency and focus.
        </p>

        <h4>Integration with Event Registration</h4>
        <p>
          Link groups to events like a small groups kickoff night or preview gathering. People can browse groups and simultaneously register for a launch event where they'll meet the leader and other prospective members.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Write compelling group descriptions</strong> – Generic descriptions ("We study the Bible together") don't sell; specific ones do ("We're digging into the Psalms and asking honest questions over pizza")</li>
        <li><strong>Keep group info current</strong> – Outdated meeting times or full groups marked as open frustrate people; audit monthly</li>
        <li><strong>Use photos of leaders</strong> – People connect with faces; include leader photos to make groups feel welcoming</li>
        <li><strong>Feature new groups prominently</strong> – Use "New Group!" badges or pin them to the top so they fill up quickly</li>
        <li><strong>Promote seasonally</strong> – Push the Finder hard in fall and winter when people are more open to joining groups</li>
        <li><strong>Remove or hide inactive groups</strong> – Don't let dead groups clutter the Finder; archive them or mark them as "On Break"</li>
        <li><strong>Test the join process</strong> – Periodically walk through the user experience to ensure it's smooth and welcoming</li>
        <li><strong>Respond quickly to join requests</strong> – Leaders should approve/respond within 24-48 hours; momentum matters</li>
        <li><strong>Make it easy to access</strong> – The Finder should be prominent on your website, not buried three clicks deep</li>
      </ul>

      <h2>Common Questions</h2>
      
      <p><strong>Q: Can people browse groups without being a church member?</strong></p>
      <p>A: Yes! The Finder is public-facing by design. Visitors, guests, and newcomers can browse groups without logging in. When they want to join, they'll create a basic profile if they don't already have one.</p>

      <p><strong>Q: What if we don't want to show exact addresses publicly?</strong></p>
      <p>A: You can display general locations like "West Los Angeles" or "Downtown near 5th and Main" without showing full street addresses. Once someone joins the group, the leader shares the specific address privately.</p>

      <p><strong>Q: Can we limit the Finder to members only?</strong></p>
      <p>A: Yes, you can require login to view the Finder. However, this limits its evangelistic potential. Consider making some groups public (for seekers and newcomers) while keeping others private (for members only).</p>

      <p><strong>Q: How do we prevent people from joining too many groups?</strong></p>
      <p>A: You can set a limit on how many groups one person can join simultaneously. However, it's often better to let people self-regulate. Some people thrive in multiple groups (a Bible study + a service team + a social group).</p>

      <p><strong>Q: What if someone requests to join a group that's not a good fit?</strong></p>
      <p>A: If you use the approval workflow, leaders can decline and suggest alternative groups. For example, if a single college student requests to join a married couples' group, the leader can gently redirect them to a young adults group.</p>

      <p><strong>Q: Can groups be hidden from some people but visible to others?</strong></p>
      <p>A: Not directly in the standard Finder. However, you can create multiple Finder instances (one public, one members-only) or use categories to segment groups. For truly restricted groups, use the "Private" or "Hidden" visibility settings.</p>

      <p><strong>Q: How do we handle seasonal groups that start and end?</strong></p>
      <p>A: Mark groups with specific start and end dates. The Finder can display "Starting Sept 10" or "6-week study" so people know it's time-bound. When the group ends, it automatically disappears from the Finder (unless you mark it for renewal).</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/groups">Groups Overview</a> – Understand the full groups platform</li>
        <li><a href="/resources/docs/groups/creating">Creating Groups</a> – Set up groups that appear in the Finder</li>
        <li><a href="/resources/docs/groups/types">Group Types & Categories</a> – How categories enable filtering</li>
        <li><a href="/resources/docs/groups/leaders">Group Leaders</a> – How leaders respond to join requests</li>
        <li><a href="/resources/docs/website/pages">Public Website</a> – Embedding the Finder on your site</li>
        <li><a href="/resources/docs/people/visitor-tracking">Visitor Tracking</a> – Converting Finder users to members</li>
      </ul>
    </div>
  );
}
