export default function GroupTypesPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Group Types & Categories</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Organize your groups using built-in types and custom categories that match your church's unique structure and ministry language.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Not all groups are created equal. A Tuesday morning Bible study operates differently than a worship team, which functions differently than the building committee. Group types and categories help you organize the diverse gatherings in your church so staff, leaders, and members can quickly understand what each group is about and how it fits into your overall ministry ecosystem.
      </p>
      <p>
        Relius comes with sensible default group types—Small Group, Sunday School Class, Committee, Ministry Team—but every church has its own vocabulary and structure. You might call them Life Groups, Connect Groups, or Community Groups. You might have specialized categories like Recovery Ministries, Mission Teams, or Leadership Development. The platform adapts to your language, not the other way around.
      </p>
      <p>
        Types and categories aren't just organizational niceties; they power filtering in the Group Finder, enable targeted communication, and create meaningful reports. When you categorize thoughtfully, you can answer questions like "How many people are in women's groups?" or "Which small groups are still accepting new members?" with a few clicks.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Group Type</strong>: The primary classification of what the group is (Small Group, Class, Committee, Team)</li>
        <li><strong>Category</strong>: Additional organizational layers like topic, demographic, or ministry area (e.g., "Men's Ministry" or "Young Adults")</li>
        <li><strong>Custom Type</strong>: Church-specific group types you create to match your terminology and structure</li>
        <li><strong>Type Hierarchy</strong>: The relationship between types and subtypes for complex organizational structures</li>
        <li><strong>Type-Specific Settings</strong>: Default configurations that apply to all groups of a certain type</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Review Built-In Types</h3>
      <p>
        Navigate to <strong>Groups → Settings → Group Types</strong> to see Relius's default types: Small Group, Sunday School Class, Committee, Ministry Team. These cover most churches' needs out of the box. Decide if you want to use them as-is or customize the names.
      </p>

      <h3>Step 2: Rename Types to Match Your Language</h3>
      <p>
        If your church doesn't use "small groups," rename the type. Click <strong>Edit</strong> next to "Small Group" and change it to "Life Group," "Connect Group," "Home Fellowship," or whatever term your congregation uses. The functionality stays the same; only the label changes.
      </p>

      <h3>Step 3: Create Custom Types (If Needed)</h3>
      <p>
        Click <strong>Add Group Type</strong> to create types unique to your church. Common examples: Recovery Group, Mission Team, Leadership Cohort, or Prayer Group. Specify default settings like typical meeting frequency and whether groups of this type should appear in the public Group Finder.
      </p>

      <h3>Step 4: Set Up Categories</h3>
      <p>
        Go to <strong>Groups → Settings → Categories</strong> and create organizational categories. Think about how you want to slice your groups: by demographic (Men, Women, Co-ed, Youth, Seniors), by topic (Bible Study, Prayer, Service, Social), by location (North Campus, South Campus, Downtown), or by ministry area (Discipleship, Outreach, Care).
      </p>

      <h3>Step 5: Apply Types and Categories to Groups</h3>
      <p>
        When creating or editing groups, assign the appropriate type and any relevant categories. A group can have one type but multiple categories (e.g., Type: Small Group, Categories: Men's Ministry + Downtown Campus + Bible Study).
      </p>

      <h2>Features</h2>

      <h3>Built-In Group Types</h3>
      <p>
        Relius provides four foundational types that cover the majority of church groups:
      </p>
      <ul>
        <li><strong>Small Group</strong>: Intimate gatherings focused on relationship, study, and spiritual growth (typically 8-15 people)</li>
        <li><strong>Sunday School Class</strong>: Regularly scheduled teaching sessions, often age-graded or topic-based (can be larger than small groups)</li>
        <li><strong>Committee</strong>: Administrative or decision-making groups like elder boards, finance committees, or event planning teams</li>
        <li><strong>Ministry Team</strong>: Service-oriented groups like worship teams, hospitality teams, tech teams, or children's ministry volunteers</li>
      </ul>
      <p>
        Each type has sensible defaults but can be customized. For example, "Committee" groups default to hidden visibility since most are internal, while "Small Group" defaults to public visibility.
      </p>

      <h3>Creating Custom Group Types</h3>
      <p>
        If the built-in types don't fit, create your own. When creating a custom type, you'll configure:
      </p>
      <ul>
        <li><strong>Type Name</strong>: What you'll call it (e.g., "Recovery Group" or "Leadership Cohort")</li>
        <li><strong>Description</strong>: Internal notes about what this type represents</li>
        <li><strong>Default Visibility</strong>: Should groups of this type be public, private, or hidden by default?</li>
        <li><strong>Typical Capacity</strong>: Default maximum size for this type of group</li>
        <li><strong>Meeting Frequency</strong>: Default meeting pattern (weekly, biweekly, monthly, or custom)</li>
        <li><strong>Icon/Color</strong>: Visual identifier for quick recognition in lists and calendars</li>
      </ul>
      <p>
        Custom types behave exactly like built-in types—they work with attendance tracking, the Group Finder, reports, and all other features.
      </p>

      <h3>Organizing with Categories</h3>
      <p>
        Categories provide flexible, multi-dimensional organization. Unlike types (where a group can have only one), a group can belong to multiple categories. This enables sophisticated filtering and reporting.
      </p>
      <p>
        <strong>Common category schemes:</strong>
      </p>
      <ul>
        <li><strong>Demographic</strong>: Men, Women, Co-ed, Married Couples, Singles, College Students, Young Adults (20s-30s), Middle Adults (40s-50s), Seniors (60+), Youth, Kids</li>
        <li><strong>Topical</strong>: Bible Study, Prayer, Service, Social, Evangelism, Discipleship, Worship, Missions</li>
        <li><strong>Geographic</strong>: Downtown, Westside, Eastside, North County, South County, Online</li>
        <li><strong>Ministry Area</strong>: Youth Ministry, Women's Ministry, Men's Ministry, Family Ministry, Recovery Ministry, Outreach</li>
        <li><strong>Format</strong>: Discussion-Based, Lecture-Style, Service Project, Social Gathering, Study + Service</li>
      </ul>
      <p>
        Categories power the Group Finder's filter system. When someone searches for "Women's groups on the Westside that focus on Bible study," they're filtering by three categories simultaneously.
      </p>

      <h3>Type-Specific Settings & Permissions</h3>
      <p>
        Configure default behaviors for each type to streamline group creation and management:
      </p>
      <ul>
        <li><strong>Attendance Tracking</strong>: Require attendance for small groups, make it optional for committees</li>
        <li><strong>Public Visibility</strong>: Small groups default to public, committees default to hidden</li>
        <li><strong>Leader Permissions</strong>: Define what leaders of this type can do (send messages, edit group details, manage roster, etc.)</li>
        <li><strong>Custom Fields</strong>: Add type-specific fields (e.g., "Curriculum" for classes, "Ministry Focus" for teams)</li>
      </ul>

      <details>
        <summary>Advanced Options</summary>

        <h4>Type Hierarchies & Subtypes</h4>
        <p>
          Create parent-child relationships between types for complex organizational structures. For example, "Ministry Team" could have subtypes: Worship Team, Hospitality Team, Tech Team, Kids Ministry Team. This enables reporting at both the category level (all ministry teams) and the specific level (just worship teams).
        </p>

        <h4>Conditional Categories</h4>
        <p>
          Show or hide categories based on group type. For instance, the "Grade Level" category only appears when creating a "Youth Group" type, while "Leadership Level" only appears for "Leadership Cohort" types. Reduces clutter and prevents inappropriate categorization.
        </p>

        <h4>Auto-Tagging Rules</h4>
        <p>
          Automatically apply categories based on other group properties. Example: If a group's meeting location is "North Campus," auto-add the "North Campus" geographic category. Saves time and ensures consistency.
        </p>

        <h4>Category-Based Permissions</h4>
        <p>
          Grant staff members access to manage only groups in specific categories. Your youth pastor can see and manage all "Youth Ministry" groups but not "Women's Ministry" groups. Maintains appropriate boundaries in multi-staff environments.
        </p>

        <h4>Type Templates</h4>
        <p>
          Create pre-configured templates for each group type with standard descriptions, settings, and resources. When someone creates a new "Sunday School Class," they start with a template that includes your church's typical class format, resources, and policies.
        </p>

        <h4>Reporting by Type & Category</h4>
        <p>
          Generate reports sliced by type and category: "Show me attendance trends for all Men's Ministry small groups" or "How many people serve on ministry teams at the North Campus?" Multi-dimensional categorization enables sophisticated analytics.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Keep types simple</strong> – Most churches thrive with 4-7 group types; too many creates confusion</li>
        <li><strong>Use categories for nuance</strong> – Types are broad (what it is), categories are specific (who it's for, what it focuses on)</li>
        <li><strong>Match your congregation's language</strong> – If no one says "Sunday School," don't use that label; use "Bible Classes" or "Growth Groups"</li>
        <li><strong>Apply categories consistently</strong> – Train staff and leaders to use the same taxonomy so filtering and reporting work properly</li>
        <li><strong>Review annually</strong> – As your ministry evolves, update types and categories to match current reality</li>
        <li><strong>Don't over-categorize</strong> – A group with 8 categories is probably over-labeled; stick to 2-4 meaningful categories per group</li>
        <li><strong>Use icons and colors</strong> – Visual identifiers help people quickly recognize group types in calendars and lists</li>
        <li><strong>Document your system</strong> – Create a one-page reference guide for staff explaining your types and categories so everyone uses them correctly</li>
      </ul>

      <h2>Common Questions</h2>
      
      <p><strong>Q: Can we change a group's type after it's created?</strong></p>
      <p>A: Yes! Edit the group and change its type. However, if the new type has different default settings, you may need to adjust those manually. Historical data (attendance, etc.) is preserved.</p>

      <p><strong>Q: What's the difference between a type and a category?</strong></p>
      <p>A: Type defines what the group is (its fundamental nature), while categories add layers of organization. A group can have only one type but multiple categories. Think of type as "noun" and categories as "adjectives."</p>

      <p><strong>Q: Do we have to use categories?</strong></p>
      <p>A: No, categories are optional. If you have a simple groups structure (just a handful of groups), you might not need them. But as you grow, categories become invaluable for organization and filtering.</p>

      <p><strong>Q: Can we hide certain types from the Group Finder?</strong></p>
      <p>A: Yes! In the type settings, mark whether groups of this type should be publicly visible by default. You can also override this setting on individual groups. Most churches hide "Committee" types but show "Small Group" types.</p>

      <p><strong>Q: How do multi-site churches handle types and categories?</strong></p>
      <p>A: Create a "Campus" category set (North Campus, South Campus, Downtown Campus, Online) and apply it to all groups. You can then filter reports and the Group Finder by campus while maintaining consistent types across all locations.</p>

      <p><strong>Q: Can members see group types and categories?</strong></p>
      <p>A: Members see types and categories in the Group Finder when browsing and filtering groups. They don't need to understand your full organizational system, but clear, meaningful labels help them find the right group.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/groups">Groups Overview</a> – Understand the full groups platform</li>
        <li><a href="/resources/docs/groups/creating">Creating Groups</a> – Set up new groups with types and categories</li>
        <li><a href="/resources/docs/groups/finder">Small Group Finder</a> – How types and categories enable filtering</li>
        <li><a href="/resources/docs/groups/leaders">Group Leaders</a> – Type-specific leader permissions</li>
        <li><a href="/resources/docs/people/directory">Member Directory</a> – Categorizing people and groups</li>
      </ul>
    </div>
  );
}
