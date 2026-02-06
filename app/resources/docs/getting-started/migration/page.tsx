import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Migration Overview | Relius Documentation",
  description: "Switch to Relius from your current ChMS with confidence. We'll help every step of the way.",
};

export default function MigrationOverviewPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Migration to Relius</h1>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
        <strong>Quick Summary:</strong> Switching church management systems doesn't have to be scary—we've designed Relius migration to be smooth, supported, and stress-free.
      </blockquote>

      <h2>Overview</h2>
      <p>
        Changing your church management system is a big decision. You're not just moving data—you're trusting a new platform with the heart of your ministry. We understand the weight of this decision, and we've built our migration process to honor it.
      </p>
      <p>
        Whether you're coming from Planning Center, ChurchTrac, FellowshipOne, or another system, we'll walk beside you through every step. Our migration team has helped hundreds of churches transition, and we've learned what works (and what causes headaches). You're not alone in this.
      </p>
      <p>
        This guide gives you the big picture—what migrates, what doesn't, and what the timeline looks like. From there, you can dive into platform-specific guides for detailed steps. Let's make this transition as painless as possible.
      </p>

      <h2>Why Switch to Relius?</h2>
      <p>
        Before we talk logistics, let's talk "why." You might be considering Relius because:
      </p>
      <ul>
        <li>
          <strong>Your current system is expensive</strong>: Relius offers all-in-one pricing without per-module fees or surprise charges.
        </li>
        <li>
          <strong>AI features excite you</strong>: Automated sermon planning, smart donor insights, and burnout prevention for volunteers—Relius brings AI to ministry in practical ways.
        </li>
        <li>
          <strong>You want modern, intuitive software</strong>: If your current system feels clunky or outdated, Relius is built with modern UX and mobile-first design.
        </li>
        <li>
          <strong>Consolidation matters</strong>: Manage people, giving, events, communications, and website in one platform instead of juggling multiple tools.
        </li>
        <li>
          <strong>Support actually supports</strong>: You need a partner, not a ticket queue. Relius offers responsive, ministry-aware support.
        </li>
      </ul>
      <p>
        Whatever your reason, we're honored you're considering the move. Let's make it happen smoothly.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li>
          <strong>Data Migration</strong>: Transferring your existing information (people, families, groups, giving records) into Relius.
        </li>
        <li>
          <strong>Field Mapping</strong>: Matching data fields from your old system to Relius fields (e.g., "household" becomes "family").
        </li>
        <li>
          <strong>Parallel Running</strong>: Using both systems simultaneously during a transition period to ensure nothing is lost.
        </li>
        <li>
          <strong>Cutover Date</strong>: The official date you stop using your old system and go fully live with Relius.
        </li>
        <li>
          <strong>Migration Specialist</strong>: A Relius team member assigned to guide your church through the entire process.
        </li>
      </ul>

      <h2>What Transfers to Relius</h2>
      <p>
        Most critical data migrates successfully. Here's what typically comes over:
      </p>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-6">
        <h3 className="mt-0 text-green-900">✅ Data That Migrates Well</h3>
        <ul className="mb-0">
          <li><strong>People records</strong>: Names, contact info, birthdays, addresses, custom fields</li>
          <li><strong>Family relationships</strong>: Household structures and relationships</li>
          <li><strong>Groups</strong>: Small groups, classes, teams with member lists</li>
          <li><strong>Giving history</strong>: Donation records, fund designations, donor totals</li>
          <li><strong>Tags & categories</strong>: Custom labels and segments</li>
          <li><strong>Notes & interactions</strong>: Care notes, visit logs, communication history</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
        <h3 className="mt-0 text-yellow-900">⚠️ Data That Requires Adjustment</h3>
        <ul className="mb-0">
          <li><strong>Custom workflows</strong>: Must be recreated in Relius (we'll help map them)</li>
          <li><strong>Forms</strong>: Registration and survey forms need to be rebuilt</li>
          <li><strong>Reporting templates</strong>: Custom reports require redesign in Relius</li>
          <li><strong>Email templates</strong>: Need to be recreated, though text can be copy-pasted</li>
        </ul>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-6">
        <h3 className="mt-0 text-red-900">❌ Data That Doesn't Migrate</h3>
        <ul className="mb-0">
          <li><strong>Old service plans</strong>: Archival liturgies or past service orders (keep PDFs for records)</li>
          <li><strong>Attachments in notes</strong>: File attachments usually don't transfer (download important ones first)</li>
          <li><strong>Historical reports</strong>: Pre-migration reports should be exported as PDFs for your records</li>
          <li><strong>User login history</strong>: Audit logs and login records don't transfer</li>
        </ul>
      </div>

      <h2>Migration Process Timeline</h2>
      <p>
        Here's what a typical migration looks like from start to finish:
      </p>

      <h3>Week 1: Planning & Kickoff</h3>
      <ul>
        <li>Meet with your Migration Specialist</li>
        <li>Review your current data structure</li>
        <li>Identify customizations and special requirements</li>
        <li>Set a target cutover date (usually 4-6 weeks out)</li>
      </ul>

      <h3>Week 2-3: Data Preparation</h3>
      <ul>
        <li>Export data from your current system</li>
        <li>Clean up duplicate records or outdated information</li>
        <li>Map custom fields to Relius equivalents</li>
        <li>Run a test migration to spot issues</li>
      </ul>

      <h3>Week 4: Training & Parallel Running</h3>
      <ul>
        <li>Train staff and key volunteers on Relius</li>
        <li>Start entering new data in Relius while maintaining old system</li>
        <li>Test workflows, communications, and giving processes</li>
        <li>Address any hiccups or questions</li>
      </ul>

      <h3>Week 5-6: Final Migration & Launch</h3>
      <ul>
        <li>Perform final data migration (includes records added since test migration)</li>
        <li>Verify all critical data transferred correctly</li>
        <li>Announce cutover date to staff and congregation</li>
        <li>Go live! 🎉</li>
      </ul>

      <h3>Week 7+: Ongoing Support</h3>
      <ul>
        <li>Your Migration Specialist remains available for 30 days post-launch</li>
        <li>Address any "wait, how do I..." questions</li>
        <li>Fine-tune settings and workflows</li>
        <li>Transition to standard Relius support</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Contact Our Migration Team</h3>
      <p>
        Reach out to <a href="mailto:migrations@relius.church" className="text-blue-600 hover:underline">migrations@relius.church</a> or use the chat in your Relius account. Let us know:
      </p>
      <ul>
        <li>What system you're migrating from</li>
        <li>Approximate number of people records</li>
        <li>Any special requirements or concerns</li>
        <li>Your ideal timeline</li>
      </ul>

      <h3>Step 2: Schedule a Migration Planning Call</h3>
      <p>
        We'll set up a 45-minute video call to walk through your data, answer questions, and create a customized migration plan. Come prepared with admin access to your current system so we can take a look together.
      </p>

      <h3>Step 3: Choose Your Platform-Specific Guide</h3>
      <p>
        Once you're ready to proceed, dive into the detailed guide for your current platform:
      </p>
      <div className="grid gap-3 my-6">
        <Link 
          href="/resources/docs/getting-started/migration/planning-center"
          className="block border border-blue-200 rounded-lg p-4 hover:bg-blue-50 no-underline"
        >
          <h4 className="mt-0 mb-1 text-blue-900">Migrating from Planning Center</h4>
          <p className="mb-0 text-sm text-gray-700">
            Step-by-step guide for transitioning from Planning Center People, Giving, and Groups.
          </p>
        </Link>
        <Link 
          href="/resources/docs/getting-started/migration/churchtrac"
          className="block border border-blue-200 rounded-lg p-4 hover:bg-blue-50 no-underline"
        >
          <h4 className="mt-0 mb-1 text-blue-900">Migrating from ChurchTrac</h4>
          <p className="mb-0 text-sm text-gray-700">
            Detailed instructions for moving from ChurchTrac's all-in-one system to Relius.
          </p>
        </Link>
      </div>

      <h2>Best Practices</h2>
      <ul>
        <li>
          <strong>Clean data before migrating</strong>: Now is the perfect time to merge duplicates, remove inactive records, and update outdated info.
        </li>
        <li>
          <strong>Don't rush</strong>: 4-6 weeks is a healthy timeline. Faster is possible, but only if your data is very clean and simple.
        </li>
        <li>
          <strong>Involve your team early</strong>: Get buy-in from staff and volunteers who will use Relius daily. Their input matters.
        </li>
        <li>
          <strong>Export everything from your old system</strong>: Even if it doesn't migrate, you'll want archives of reports, old emails, and historical data.
        </li>
        <li>
          <strong>Test giving first</strong>: Donations are critical. Make test gifts to ensure everything flows correctly before going live.
        </li>
        <li>
          <strong>Communicate with your congregation</strong>: Let members know about changes, especially if login portals or giving pages are affected.
        </li>
      </ul>

      <h2>Common Questions</h2>

      <p className="font-semibold mb-1">Q: How much does migration cost?</p>
      <p className="ml-4 mb-4">
        A: Basic migration support is included with your Relius subscription. Complex migrations (very large churches, heavy customization) may incur a one-time service fee. We'll discuss this upfront during planning.
      </p>

      <p className="font-semibold mb-1">Q: What if we need to keep our old system for a while?</p>
      <p className="ml-4 mb-4">
        A: That's fine! Many churches run parallel for 1-2 months. Just be aware you'll pay for both systems during that time. We recommend setting a firm cutover date to avoid prolonged double-entry.
      </p>

      <p className="font-semibold mb-1">Q: Can we migrate in phases (e.g., people first, then giving)?</p>
      <p className="ml-4 mb-4">
        A: Absolutely. Phased migrations reduce risk and learning curve overwhelm. Common approach: People & Groups → Giving → Communications → Events.
      </p>

      <p className="font-semibold mb-1">Q: What if something goes wrong during migration?</p>
      <p className="ml-4 mb-4">
        A: We test thoroughly and keep backups. If issues arise, we can roll back and try again. Your old system remains intact until you're 100% confident in the new data.
      </p>

      <p className="font-semibold mb-1">Q: Will our congregation notice the change?</p>
      <p className="ml-4 mb-4">
        A: Member-facing changes (giving page URL, member portal login) will be different. Communicate these changes ahead of time with clear instructions. Most members adapt quickly, especially if the new experience is better.
      </p>

      <h2>Related Topics</h2>
      <ul>
        <li>
          <Link href="/resources/docs/getting-started/migration/planning-center" className="text-blue-600 hover:underline">
            Migrating from Planning Center
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/getting-started/migration/churchtrac" className="text-blue-600 hover:underline">
            Migrating from ChurchTrac
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/getting-started/quick-start" className="text-blue-600 hover:underline">
            Quick Start Guide
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/getting-started/setup" className="text-blue-600 hover:underline">
            Setting Up Your Church
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/people/bulk-import" className="text-blue-600 hover:underline">
            Bulk Import/Export
          </Link>
        </li>
      </ul>
    </div>
  );
}
