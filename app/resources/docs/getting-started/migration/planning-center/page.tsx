import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Migrating from Planning Center | Relius Documentation",
  description: "Complete guide to transitioning from Planning Center to Relius with confidence.",
};

export default function PlanningCenterMigrationPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Migrating from Planning Center</h1>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
        <strong>Quick Summary:</strong> Moving from Planning Center to Relius preserves your people data, giving history, and groups while consolidating tools and unlocking powerful AI features.
      </blockquote>

      <h2>Overview</h2>
      <p>
        Planning Center is a powerful suite of tools, and you've likely invested significant time setting it up. The decision to migrate isn't about Planning Center being bad—it's about finding a platform that better fits your church's current needs, budget, or vision.
      </p>
      <p>
        Maybe you're tired of paying separately for People, Giving, Groups, Services, and Check-Ins. Perhaps you want AI-powered features Planning Center doesn't offer. Or you're looking for a more modern, consolidated experience. Whatever your reason, we're here to make the transition smooth.
      </p>
      <p>
        This guide walks you through migrating from Planning Center's ecosystem to Relius. We'll cover what data exports Planning Center provides, how it maps to Relius, and what to expect during the process. You'll keep your critical data—people, families, giving records, and groups—while gaining new capabilities.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li>
          <strong>Planning Center People</strong>: Your member database; maps directly to Relius People.
        </li>
        <li>
          <strong>Planning Center Giving</strong>: Donation tracking and online giving; transfers to Relius Giving.
        </li>
        <li>
          <strong>Planning Center Groups</strong>: Small groups and classes; becomes Relius Groups.
        </li>
        <li>
          <strong>Planning Center Services</strong>: Worship planning and scheduling; Relius Services covers this.
        </li>
        <li>
          <strong>CSV Exports</strong>: Planning Center allows data export in CSV format, which Relius can import.
        </li>
      </ul>

      <h2>What Migrates from Planning Center</h2>

      <h3>✅ People & Families</h3>
      <p>
        Your entire People database transfers beautifully:
      </p>
      <ul>
        <li>Names, email addresses, phone numbers, birthdays</li>
        <li>Physical addresses and mailing addresses</li>
        <li>Household/family relationships</li>
        <li>Profile photos (if you export them manually)</li>
        <li>Custom fields (we'll map these to Relius custom fields)</li>
        <li>Tags and lists (transfer as Relius tags)</li>
        <li>Notes and interactions</li>
      </ul>

      <h3>✅ Giving History</h3>
      <p>
        Donation records transfer with full detail:
      </p>
      <ul>
        <li>Individual donation transactions with dates and amounts</li>
        <li>Fund designations (General, Building, Missions, etc.)</li>
        <li>Payment methods (card, check, cash)</li>
        <li>Donor totals and giving trends</li>
        <li>Recurring gift schedules (you'll need to recreate these in Relius, but we'll provide donor lists)</li>
      </ul>

      <h3>✅ Groups</h3>
      <p>
        Your small groups structure comes over:
      </p>
      <ul>
        <li>Group names, descriptions, and categories</li>
        <li>Group leaders and member lists</li>
        <li>Group tags and settings</li>
        <li>Meeting schedules (day/time info transfers as text)</li>
      </ul>

      <h3>⚠️ Requires Adjustment</h3>
      <ul>
        <li>
          <strong>Workflows</strong>: Planning Center's automation workflows don't export. We'll help you rebuild critical ones in Relius (often simpler and more powerful).
        </li>
        <li>
          <strong>Forms</strong>: Registration forms need to be recreated. We provide templates to speed this up.
        </li>
        <li>
          <strong>Service Plans</strong>: Planning Center Services liturgies don't migrate. You'll start fresh in Relius Services, which many find cleaner.
        </li>
        <li>
          <strong>Check-Ins</strong>: Past check-in records generally don't transfer, but you can export them as PDFs for archives.
        </li>
      </ul>

      <h2>Step-by-Step Migration Process</h2>

      <h3>Phase 1: Preparation (Week 1)</h3>

      <h4>Step 1: Audit Your Planning Center Data</h4>
      <p>
        Before exporting, clean up your data:
      </p>
      <ul>
        <li>Merge duplicate people records</li>
        <li>Archive inactive members (people who left 5+ years ago)</li>
        <li>Update outdated contact information</li>
        <li>Document custom fields and what they mean</li>
        <li>List any workflows you want to replicate in Relius</li>
      </ul>

      <h4>Step 2: Export Data from Planning Center</h4>
      <p>
        Planning Center allows comprehensive data exports:
      </p>
      <p>
        <strong>People Export:</strong>
      </p>
      <ol>
        <li>Go to Planning Center People</li>
        <li>Click <strong>More</strong> → <strong>Export</strong></li>
        <li>Select <strong>All People</strong> (or filter to active members)</li>
        <li>Choose <strong>CSV format</strong></li>
        <li>Include all fields: names, contact info, households, custom fields, tags</li>
        <li>Download the file</li>
      </ol>
      <p>
        <strong>Giving Export:</strong>
      </p>
      <ol>
        <li>Go to Planning Center Giving</li>
        <li>Navigate to <strong>Donations</strong> → <strong>Export</strong></li>
        <li>Select date range (we recommend exporting last 5-7 years for tax purposes)</li>
        <li>Include donor info, amounts, funds, dates, payment methods</li>
        <li>Download CSV</li>
      </ol>
      <p>
        <strong>Groups Export:</strong>
      </p>
      <ol>
        <li>In Planning Center Groups, go to <strong>Reports</strong></li>
        <li>Export <strong>Group List</strong> with members</li>
        <li>Download CSV</li>
      </ol>

      <h4>Step 3: Share Exports with Relius</h4>
      <p>
        Email your CSV files to your assigned Migration Specialist, or upload them via the secure link we provide. We'll review the data structure and prepare for import.
      </p>

      <h3>Phase 2: Mapping & Testing (Week 2-3)</h3>

      <h4>Step 4: Field Mapping Session</h4>
      <p>
        We'll schedule a call to map Planning Center fields to Relius:
      </p>
      <ul>
        <li><strong>Household → Family</strong>: Planning Center's household becomes Relius family units</li>
        <li><strong>Lists/Tags → Tags</strong>: Your lists transfer as Relius tags (grouping tool)</li>
        <li><strong>Custom Fields</strong>: We'll recreate your custom fields in Relius with matching data types</li>
        <li><strong>Funds</strong>: Giving funds map one-to-one</li>
      </ul>

      <h4>Step 5: Test Migration</h4>
      <p>
        We perform a test import to a sandbox Relius account:
      </p>
      <ul>
        <li>Review 20-30 sample people records for accuracy</li>
        <li>Check family relationships (parents, children, spouses)</li>
        <li>Verify giving totals match Planning Center reports</li>
        <li>Confirm groups have correct members</li>
        <li>Identify any data issues to fix before final migration</li>
      </ul>

      <h3>Phase 3: Training & Parallel Running (Week 4)</h3>

      <h4>Step 6: Train Your Team</h4>
      <p>
        We provide live training sessions for your staff:
      </p>
      <ul>
        <li><strong>Admin training</strong>: People management, giving, groups (60 minutes)</li>
        <li><strong>Communications training</strong>: Emails, SMS, announcements (30 minutes)</li>
        <li><strong>Volunteer training</strong>: Check-in, event registration (30 minutes)</li>
      </ul>
      <p>
        Sessions are recorded so you can revisit them anytime.
      </p>

      <h4>Step 7: Parallel Running Period</h4>
      <p>
        For 1-2 weeks, use both systems:
      </p>
      <ul>
        <li>Enter new people in Relius (not Planning Center)</li>
        <li>Record giving in both systems temporarily</li>
        <li>Test email sends, event registrations, and check-ins in Relius</li>
        <li>Keep Planning Center as your "source of truth" until cutover</li>
      </ul>

      <h3>Phase 4: Final Migration & Launch (Week 5-6)</h3>

      <h4>Step 8: Final Data Migration</h4>
      <p>
        We perform a final export from Planning Center to capture any new records added since the test migration:
      </p>
      <ul>
        <li>Export people added/updated in the last 2-3 weeks</li>
        <li>Export recent donations</li>
        <li>Import into Relius, merging with existing data</li>
      </ul>

      <h4>Step 9: Verification & Go-Live</h4>
      <p>
        Before switching over:
      </p>
      <ul>
        <li>Run side-by-side reports (total giving in PC vs Relius should match)</li>
        <li>Verify critical people records transferred correctly</li>
        <li>Test online giving page with real transactions</li>
        <li>Announce to staff: "We go live on [date]!"</li>
      </ul>

      <h4>Step 10: Communicate with Congregation</h4>
      <p>
        Send an announcement about changes members will notice:
      </p>
      <ul>
        <li>New online giving URL (update bookmarks!)</li>
        <li>New member portal login (password reset emails will go out)</li>
        <li>New check-in process (if using Relius Check-Ins)</li>
        <li>Who to contact with questions</li>
      </ul>

      <h2>Features You'll Gain</h2>
      <p>
        Beyond migrated data, you'll unlock new capabilities:
      </p>
      <ul>
        <li>
          <strong>AI Sermon Planner</strong>: Generate sermon outlines, suggest scriptures, and plan series with AI assistance
        </li>
        <li>
          <strong>AI Donor Insights</strong>: Predict giving trends, identify at-risk donors, and automate thank-you notes
        </li>
        <li>
          <strong>Consolidated Platform</strong>: No more switching between People, Giving, Groups, Services—it's all in one place
        </li>
        <li>
          <strong>Public Website</strong>: Built-in church website that updates automatically from your data
        </li>
        <li>
          <strong>Pipeline Management</strong>: Track new visitors, membership classes, and baptism prep in visual pipelines
        </li>
      </ul>

      <details className="my-6">
        <summary className="cursor-pointer font-semibold text-gray-900">
          Cost Comparison: Planning Center vs Relius
        </summary>
        <div className="mt-2 ml-4 text-gray-700">
          <p><strong>Planning Center</strong> (for a church using People, Giving, Groups, Services):</p>
          <ul>
            <li>People: $29/month + $10/month per additional user</li>
            <li>Giving: $49/month + 2.9% + $0.30 per transaction</li>
            <li>Groups: $19/month</li>
            <li>Services: $19/month</li>
            <li><strong>Total</strong>: ~$116/month + transaction fees</li>
          </ul>
          <p><strong>Relius</strong> (all-in-one):</p>
          <ul>
            <li>Unlimited users, all features: $99/month</li>
            <li>Giving: Same transaction fees (2.9% + $0.30)</li>
            <li><strong>Total</strong>: $99/month + transaction fees</li>
          </ul>
          <p>Plus: AI features, website hosting, and no per-module pricing.</p>
        </div>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li>
          <strong>Don't cancel Planning Center until you're confident</strong>: Keep your subscription active during parallel running. Cancel only after 30 days of smooth Relius operation.
        </li>
        <li>
          <strong>Export historical reports as PDFs</strong>: Before leaving Planning Center, save important reports (year-end summaries, attendance trends) as PDFs for your records.
        </li>
        <li>
          <strong>Test online giving thoroughly</strong>: Make several test donations (different amounts, funds, payment methods) before directing members to the new page.
        </li>
        <li>
          <strong>Update recurring givers personally</strong>: Recurring gifts don't transfer automatically. Email recurring donors with instructions to set up their gifts in Relius. Many will appreciate the personal touch.
        </li>
        <li>
          <strong>Involve champions early</strong>: Identify staff or volunteers who love new tech and make them Relius advocates. They'll help others adapt.
        </li>
      </ul>

      <h2>Common Questions</h2>

      <p className="font-semibold mb-1">Q: Will our Planning Center recurring gifts automatically transfer to Relius?</p>
      <p className="ml-4 mb-4">
        A: No. Payment processors (Stripe for Relius, likely different for Planning Center) don't share recurring schedules. You'll need to contact recurring donors and ask them to set up their gifts again in Relius. We provide email templates to make this easy.
      </p>

      <p className="font-semibold mb-1">Q: Can we migrate Planning Center Services plans?</p>
      <p className="ml-4 mb-4">
        A: Historical service plans don't migrate, but you can export them as PDFs. Many churches see this as an opportunity to start fresh with Relius Services, which offers AI-powered sermon planning and song suggestions.
      </p>

      <p className="font-semibold mb-1">Q: What happens to our Planning Center Check-Ins data?</p>
      <p className="ml-4 mb-4">
        A: Check-in history doesn't transfer, but you can export reports before leaving Planning Center. Relius Check-Ins will start fresh, which is fine—most churches only need recent attendance data.
      </p>

      <p className="font-semibold mb-1">Q: How long does a typical Planning Center to Relius migration take?</p>
      <p className="ml-4 mb-4">
        A: 4-6 weeks from kickoff to go-live is typical. Smaller churches (under 500 people) can move faster; larger or more complex setups may take 8 weeks.
      </p>

      <p className="font-semibold mb-1">Q: Will our giving page URL change?</p>
      <p className="ml-4 mb-4">
        A: Yes. Your new giving page will be on Relius (e.g., yourchurch.relius.church/give). Update links on your website, social media, and communications. Consider using a URL redirect from your old page.
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
          <Link href="/resources/docs/giving/online-giving-setup" className="text-blue-600 hover:underline">
            Online Giving Setup
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
