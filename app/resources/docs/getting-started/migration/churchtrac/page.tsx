import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Migrating from ChurchTrac | Relius Documentation",
  description: "Step-by-step guide to migrating from ChurchTrac to Relius with all your data intact.",
};

export default function ChurchTracMigrationPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Migrating from ChurchTrac</h1>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
        <strong>Quick Summary:</strong> Transition from ChurchTrac to Relius while preserving your member data, giving records, and groups—plus gain modern features and AI capabilities.
      </blockquote>

      <h2>Overview</h2>
      <p>
        ChurchTrac has served many churches well as an affordable, all-in-one solution. If you're considering the move to Relius, it's likely because you're ready for a more modern interface, powerful AI features, or capabilities ChurchTrac doesn't offer—like integrated websites, advanced analytics, or AI-driven ministry insights.
      </p>
      <p>
        The good news: ChurchTrac's straightforward data structure makes migration relatively smooth. Your people records, families, groups, and giving history transfer cleanly. The challenge is that ChurchTrac's export tools are somewhat limited, so we'll work together to get everything over.
      </p>
      <p>
        This guide covers the entire migration journey from ChurchTrac to Relius—what exports you'll need, how data maps between systems, and what the transition timeline looks like. We'll preserve your critical information while opening doors to new ministry possibilities.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li>
          <strong>ChurchTrac Members</strong>: Your people database; transfers directly to Relius People.
        </li>
        <li>
          <strong>ChurchTrac Families</strong>: Household groupings; become Relius Families.
        </li>
        <li>
          <strong>ChurchTrac Contributions</strong>: Donation records; migrate to Relius Giving.
        </li>
        <li>
          <strong>ChurchTrac Groups</strong>: Classes and small groups; transfer to Relius Groups.
        </li>
        <li>
          <strong>ChurchTrac Attendance</strong>: Service attendance records (historical data for reference).
        </li>
      </ul>

      <h2>What Migrates from ChurchTrac</h2>

      <h3>✅ Members & Families</h3>
      <p>
        Your member database transfers completely:
      </p>
      <ul>
        <li>Names, emails, phone numbers, addresses</li>
        <li>Birthdates, anniversaries, and demographics</li>
        <li>Family relationships (heads of household, spouses, children)</li>
        <li>Member photos (requires manual export and re-upload)</li>
        <li>Member status (active, inactive, visitor)</li>
        <li>Custom fields (we'll recreate them in Relius)</li>
        <li>Notes and contact history</li>
      </ul>

      <h3>✅ Giving Records</h3>
      <p>
        Complete contribution history comes over:
      </p>
      <ul>
        <li>Individual donations with dates and amounts</li>
        <li>Fund categories (General, Building, Missions, etc.)</li>
        <li>Payment types (check, cash, card, online)</li>
        <li>Donor giving totals by year</li>
        <li>Batch information (if you track batches)</li>
      </ul>

      <h3>✅ Groups & Classes</h3>
      <p>
        Your groups structure transfers:
      </p>
      <ul>
        <li>Group names and descriptions</li>
        <li>Group leaders and member rosters</li>
        <li>Group categories/types</li>
        <li>Meeting schedules and locations (as text)</li>
      </ul>

      <h3>✅ Attendance Records</h3>
      <p>
        Historical attendance data can be imported for reporting:
      </p>
      <ul>
        <li>Service attendance by date</li>
        <li>Individual attendance history</li>
        <li>Small group attendance</li>
      </ul>

      <h3>⚠️ Requires Manual Recreation</h3>
      <ul>
        <li>
          <strong>Custom reports</strong>: ChurchTrac reports don't export. You'll build new ones in Relius (often easier with our reporting tools).
        </li>
        <li>
          <strong>Email templates</strong>: Copy text content and rebuild in Relius's email builder.
        </li>
        <li>
          <strong>Forms</strong>: Registration and survey forms need to be recreated. Relius's form builder is drag-and-drop simple.
        </li>
        <li>
          <strong>User accounts</strong>: Staff logins don't transfer. You'll create new Relius accounts and assign permissions.
        </li>
      </ul>

      <h2>Step-by-Step Migration Process</h2>

      <h3>Phase 1: Preparation (Week 1)</h3>

      <h4>Step 1: Clean Your ChurchTrac Data</h4>
      <p>
        Before exporting, tidy up your database:
      </p>
      <ul>
        <li>Merge duplicate member records</li>
        <li>Update or remove members who left years ago</li>
        <li>Correct any obvious data errors (wrong addresses, outdated phone numbers)</li>
        <li>Document your custom fields and what they mean</li>
        <li>Note any special processes or workflows you want in Relius</li>
      </ul>

      <h4>Step 2: Export Data from ChurchTrac</h4>
      <p>
        ChurchTrac provides several export options:
      </p>
      <p>
        <strong>Members Export:</strong>
      </p>
      <ol>
        <li>Go to <strong>Members</strong> → <strong>Reports</strong></li>
        <li>Select <strong>Member List Report</strong></li>
        <li>Include all fields: contact info, demographics, family relationships, custom fields</li>
        <li>Export to <strong>Excel/CSV</strong></li>
        <li>Save the file</li>
      </ol>
      <p>
        <strong>Contributions Export:</strong>
      </p>
      <ol>
        <li>Navigate to <strong>Contributions</strong> → <strong>Reports</strong></li>
        <li>Choose <strong>Contribution Detail Report</strong></li>
        <li>Set date range (we recommend 5-7 years for tax records)</li>
        <li>Include: donor name, date, amount, fund, payment type</li>
        <li>Export to CSV</li>
      </ol>
      <p>
        <strong>Groups Export:</strong>
      </p>
      <ol>
        <li>Go to <strong>Groups</strong> → <strong>Reports</strong></li>
        <li>Select <strong>Group Roster Report</strong></li>
        <li>Export all groups with member lists</li>
        <li>Save as CSV</li>
      </ol>
      <p>
        <strong>Attendance Export (optional):</strong>
      </p>
      <ol>
        <li>Under <strong>Attendance</strong>, run a historical report</li>
        <li>Export by date range (e.g., last 2 years)</li>
        <li>Save for import into Relius</li>
      </ol>

      <h4>Step 3: Submit Exports to Relius</h4>
      <p>
        Send your CSV files to your Migration Specialist via secure upload link or email. We'll analyze the structure and prepare for import.
      </p>

      <h3>Phase 2: Mapping & Testing (Week 2-3)</h3>

      <h4>Step 4: Data Mapping Session</h4>
      <p>
        We'll schedule a video call to map ChurchTrac fields to Relius:
      </p>
      <ul>
        <li><strong>Member ID → Person ID</strong>: Unique identifiers preserved for continuity</li>
        <li><strong>Family Head → Family Primary Contact</strong>: Family structure carries over</li>
        <li><strong>Member Status</strong>: Active, Inactive, Visitor maps directly</li>
        <li><strong>Custom Fields</strong>: We recreate your custom fields (membership class, spiritual gifts, etc.)</li>
        <li><strong>Contribution Funds</strong>: Your fund categories transfer one-to-one</li>
      </ul>

      <h4>Step 5: Test Import</h4>
      <p>
        We import your data into a test Relius environment:
      </p>
      <ul>
        <li>Review sample member records for accuracy</li>
        <li>Verify family relationships (parents linked to children)</li>
        <li>Check giving totals against ChurchTrac reports</li>
        <li>Confirm group membership lists are correct</li>
        <li>Identify any issues to address before final migration</li>
      </ul>
      <p>
        You'll have access to the test environment to explore and ask questions.
      </p>

      <h3>Phase 3: Training & Parallel Running (Week 4)</h3>

      <h4>Step 6: Team Training</h4>
      <p>
        We provide comprehensive training for your staff:
      </p>
      <ul>
        <li><strong>People Management</strong>: Adding members, updating info, tracking visitors (45 min)</li>
        <li><strong>Giving Tracking</strong>: Recording donations, running reports, managing funds (30 min)</li>
        <li><strong>Groups & Events</strong>: Creating groups, scheduling events, tracking attendance (30 min)</li>
        <li><strong>Communications</strong>: Email campaigns, SMS, announcements (30 min)</li>
      </ul>
      <p>
        Training is recorded and available for review anytime.
      </p>

      <h4>Step 7: Dual System Period</h4>
      <p>
        For 1-2 weeks, run both ChurchTrac and Relius:
      </p>
      <ul>
        <li>Add new members in Relius (not ChurchTrac)</li>
        <li>Record giving in both systems temporarily to ensure accuracy</li>
        <li>Test workflows: sending emails, creating events, tracking attendance</li>
        <li>Maintain ChurchTrac as your official system until cutover</li>
      </ul>
      <p>
        This parallel period builds confidence and lets you learn Relius without risk.
      </p>

      <h3>Phase 4: Final Migration & Go-Live (Week 5-6)</h3>

      <h4>Step 8: Final Data Sync</h4>
      <p>
        Capture any new data added to ChurchTrac during parallel running:
      </p>
      <ul>
        <li>Export members added/updated since test migration</li>
        <li>Export recent contributions</li>
        <li>Import into Relius, merging with existing records</li>
      </ul>

      <h4>Step 9: Verification Checklist</h4>
      <p>
        Before going live, verify:
      </p>
      <ul>
        <li>✅ Total giving in Relius matches ChurchTrac year-to-date reports</li>
        <li>✅ Active member count matches between systems</li>
        <li>✅ Key families have correct relationships (spouses, children)</li>
        <li>✅ Groups have accurate member rosters</li>
        <li>✅ Online giving page is live and tested with real transactions</li>
      </ul>

      <h4>Step 10: Communicate the Switch</h4>
      <p>
        Inform your congregation about changes:
      </p>
      <ul>
        <li>New online giving URL (update website, email signatures)</li>
        <li>New member portal login (they'll receive password reset emails)</li>
        <li>Updated contact for tech support questions</li>
        <li>Positive framing: "We're upgrading to better serve you!"</li>
      </ul>

      <h2>Features You'll Gain in Relius</h2>
      <p>
        Beyond migrated data, Relius offers capabilities ChurchTrac doesn't:
      </p>
      <ul>
        <li>
          <strong>AI Sermon Planning</strong>: Generate outlines, find relevant scriptures, plan series with AI
        </li>
        <li>
          <strong>AI Donor Insights</strong>: Predict giving trends, identify at-risk donors, automate thank-you messages
        </li>
        <li>
          <strong>Built-in Website</strong>: A modern church website that updates automatically from your data
        </li>
        <li>
          <strong>Advanced Pipelines</strong>: Track visitor journeys from first visit to membership
        </li>
        <li>
          <strong>Semantic Bible Search</strong>: Search by meaning, not just keywords ("passages about grace")
        </li>
        <li>
          <strong>Multilingual Support</strong>: Real-time translation for international congregations
        </li>
      </ul>

      <details className="my-6">
        <summary className="cursor-pointer font-semibold text-gray-900">
          Common ChurchTrac → Relius Scenarios
        </summary>
        <div className="mt-2 ml-4 text-gray-700">
          <p><strong>Scenario 1: Small Church (under 200 members)</strong></p>
          <p>Migration typically takes 3-4 weeks. Simple data structure, minimal custom fields, straightforward groups.</p>
          
          <p><strong>Scenario 2: Mid-Size Church (200-800 members)</strong></p>
          <p>Plan for 5-6 weeks. More complex giving (multiple funds, campaigns), robust groups program, custom workflows to rebuild.</p>
          
          <p><strong>Scenario 3: Multi-Site Church</strong></p>
          <p>6-8 weeks recommended. Each campus may have unique data, separate giving funds, distinct groups. Requires careful mapping.</p>
        </div>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li>
          <strong>Export before you clean</strong>: Keep a raw backup of ChurchTrac data before cleaning. You never know when you'll need the original.
        </li>
        <li>
          <strong>Test online giving early</strong>: Make several test donations in different scenarios (one-time, recurring, various funds) before announcing to members.
        </li>
        <li>
          <strong>Don't cancel ChurchTrac prematurely</strong>: Keep your subscription active until you've run Relius successfully for at least 30 days.
        </li>
        <li>
          <strong>Involve volunteers in training</strong>: Don't just train staff—include check-in volunteers, group leaders, and communications team.
        </li>
        <li>
          <strong>Export year-end statements from ChurchTrac</strong>: Before leaving, run and save giving statements for the current year. You'll want these for comparison.
        </li>
        <li>
          <strong>Update recurring donors personally</strong>: ChurchTrac's recurring gifts won't auto-transfer. Email these donors with simple setup instructions and a thank-you for their faithfulness.
        </li>
      </ul>

      <h2>Common Questions</h2>

      <p className="font-semibold mb-1">Q: Will ChurchTrac member photos transfer?</p>
      <p className="ml-4 mb-4">
        A: Photos don't export via CSV. However, ChurchTrac support can sometimes provide a bulk photo download. We can then match and upload them in Relius. Alternatively, you can re-upload key photos (staff, leaders) manually.
      </p>

      <p className="font-semibold mb-1">Q: What happens to our ChurchTrac custom forms?</p>
      <p className="ml-4 mb-4">
        A: Forms don't migrate. You'll recreate them in Relius using our drag-and-drop form builder. Many churches find this a good chance to simplify and improve their forms.
      </p>

      <p className="font-semibold mb-1">Q: Can we migrate attendance records?</p>
      <p className="ml-4 mb-4">
        A: Yes! Export attendance from ChurchTrac and we'll import it into Relius. This preserves historical trends for reporting. Going forward, you'll track attendance natively in Relius.
      </p>

      <p className="font-semibold mb-1">Q: How do we handle existing online givers during the transition?</p>
      <p className="ml-4 mb-4">
        A: Pause ChurchTrac online giving a week before cutover. Send all online givers an email with the new Relius giving page link and instructions. Most will set up their gifts without issue. Offer phone support for those who need help.
      </p>

      <p className="font-semibold mb-1">Q: Will our ChurchTrac check-in codes work in Relius?</p>
      <p className="ml-4 mb-4">
        A: No, Relius uses its own check-in system with QR codes. You'll generate new family codes in Relius. The upside: Relius check-in is faster and works on any device.
      </p>

      <p className="font-semibold mb-1">Q: Can Relius import our ChurchTrac text message history?</p>
      <p className="ml-4 mb-4">
        A: Text message logs don't transfer, but you can export them from ChurchTrac as a backup. Relius SMS starts fresh, which is fine—most churches only need recent messaging history.
      </p>

      <h2>Related Topics</h2>
      <ul>
        <li>
          <Link href="/resources/docs/getting-started/migration" className="text-blue-600 hover:underline">
            Migration Overview
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/getting-started/quick-start" className="text-blue-600 hover:underline">
            Quick Start Guide
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/people/bulk-import" className="text-blue-600 hover:underline">
            Bulk Import/Export
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/giving/donation-tracking" className="text-blue-600 hover:underline">
            Donation Tracking
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/ai/sermon-planner" className="text-blue-600 hover:underline">
            AI Sermon Planner
          </Link>
        </li>
      </ul>
    </div>
  );
}
