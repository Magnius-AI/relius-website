export default function DonationTrackingPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Donation Tracking</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Record every donation—cash, check, online, or mobile—with complete details including payment method, fund designation, and donor notes.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Every gift matters, and accurate tracking honors both the giver and God's provision. Relius makes it simple to record donations of any type, whether it's Mrs. Johnson's weekly tithe envelope, an online gift to your building fund, or a text-to-give contribution during a mission appeal. All donations are instantly linked to donor profiles, creating a complete giving history that powers year-end statements, thank-you letters, and donor insights.
      </p>
      <p>
        The donation tracking system is designed for real-world church workflows. Count Sunday offerings with batch entry that lets you fly through dozens of envelopes. Split a single check across multiple funds when a donor designates $200 for general and $50 for youth ministry. Add notes about memorial gifts or special intentions. Everything is recorded with the detail you need for accurate accounting and meaningful donor stewardship.
      </p>
      <p>
        Online donations flow in automatically when you enable Stripe integration, while manual entry handles everything else. The result is a unified giving record that tells the complete story of generosity in your church, making reports, receipts, and relationship-building effortless.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Payment Method</strong>: How the donation was given (cash, check, credit card, ACH, text-to-give)</li>
        <li><strong>Fund</strong>: The designation for the gift (General Fund, Building Fund, Missions, etc.)</li>
        <li><strong>Split Donation</strong>: A single gift divided across multiple funds based on donor instruction</li>
        <li><strong>Recurring Gift</strong>: An automated donation that repeats on a schedule (weekly, bi-weekly, monthly)</li>
        <li><strong>Batch Entry</strong>: Recording multiple donations at once, typically after counting Sunday offerings</li>
        <li><strong>Undesignated Gift</strong>: A donation without specific fund instructions, usually directed to General Fund</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Navigate to Giving</h3>
      <p>
        From your dashboard, click <strong>Giving</strong> in the main navigation, then select <strong>Record Donation</strong>. You can also use the quick-action button (+) in the top-right corner and choose "New Donation."
      </p>

      <h3>Step 2: Select the Donor</h3>
      <p>
        Start typing the donor's name to search your member directory. If the person is new or visiting, you can create a new donor profile on the spot—just enter their name and email or mailing address for tax receipts.
      </p>

      <h3>Step 3: Enter Donation Details</h3>
      <p>
        Fill in the amount, select the payment method (cash, check, online, etc.), choose the fund, and add the donation date. If recording a check, enter the check number for your records. Click <strong>Save Donation</strong> and you're done!
      </p>

      <h2>Features</h2>

      <h3>Recording Cash Donations</h3>
      <p>
        Cash is the simplest: select "Cash" as the payment method, enter the amount, and choose the fund. Most churches use numbered giving envelopes so cash can be properly attributed and receipted. If cash arrives without identification, record it under "Anonymous Donor" or as an undesignated gift.
      </p>

      <h3>Recording Check Donations</h3>
      <p>
        Select "Check" as the payment method and enter the check number in the designated field. This helps with bank reconciliation and provides an audit trail. If the check memo includes fund designations (e.g., "$100 for Building Fund"), honor that by selecting the appropriate fund.
      </p>

      <h3>Recording Online Donations</h3>
      <p>
        When you enable online giving through Stripe, donations appear automatically in Relius with all details populated—no manual entry needed! You can view each transaction, see the fee breakdown, and confirm the donation was properly linked to the donor's profile. If you need to record an online gift from another platform (like PayPal), select "Online" as the payment method and enter the transaction ID.
      </p>

      <h3>Payment Methods</h3>
      <p>
        Relius supports all common giving channels:
      </p>
      <ul>
        <li><strong>Cash</strong> – Physical currency, typically from offering plates or envelopes</li>
        <li><strong>Check</strong> – Paper checks with check number tracking</li>
        <li><strong>Credit/Debit Card</strong> – Online card payments through Stripe</li>
        <li><strong>ACH/Bank Transfer</strong> – Direct bank account transfers</li>
        <li><strong>Text-to-Give</strong> – Mobile donations via SMS</li>
        <li><strong>Stock/Securities</strong> – Non-cash donations (manual entry with notes)</li>
        <li><strong>In-Kind</strong> – Donated goods or services (recorded for tracking, not tax valuation)</li>
      </ul>

      <h3>Funds & Designations</h3>
      <p>
        Every donation must be assigned to at least one fund. When recording a gift, select from your church's configured funds. If a donor specifies multiple designations (like "$150 for general and $50 for missions"), use the split donation feature to divide the gift accurately.
      </p>
      <p>
        <em>Example: A family writes one $500 check but notes "$400 general, $100 youth ministry." Create one donation of $500, then split it: $400 to General Fund and $100 to Youth Ministry Fund. The donor receives one tax receipt for $500 with fund details listed.</em>
      </p>

      <h3>Recurring Giving Setup</h3>
      <p>
        When donors set up recurring gifts through your online giving page, Relius automatically creates a schedule and processes donations on the chosen frequency (weekly, bi-weekly, monthly, or custom). Each successful transaction creates a new donation record in the system.
      </p>
      <p>
        You can also manually set up recurring giving for donors who use automatic bill pay from their bank. Create a recurring gift schedule in their donor profile, and Relius will remind you to record the expected donation or auto-create it if you enable that feature.
      </p>

      <details>
        <summary>Advanced Features</summary>
        
        <h4>Batch Entry Mode</h4>
        <p>
          Perfect for after-service offering counts. Enable batch mode to set default values (today's date, "Cash" payment method, "General Fund") so you can rapidly enter dozens of donations with minimal clicks. Use keyboard shortcuts: <code>Enter</code> to save and continue, <code>Tab</code> to move between fields, and <code>Ctrl+D</code> to duplicate the previous entry with a new amount.
        </p>
        <p>
          <em>Workflow: Count your Sunday offering, separate by envelope number, then open batch mode. Type donor name → amount → Enter. Repeat for each envelope. Most churches process 50+ donations in under 10 minutes.</em>
        </p>

        <h4>Pledge Tracking</h4>
        <p>
          Track commitments separately from actual donations. When someone pledges $5,000 to your building campaign over two years, record the pledge in their donor profile. As they fulfill the pledge with actual gifts, Relius automatically tracks the percentage completed and shows remaining balance.
        </p>
        <p>
          Set up pledge reminders to gently notify donors about unfulfilled commitments, especially helpful for capital campaigns with multi-year pledges.
        </p>

        <h4>Multi-Fund Split with Percentages</h4>
        <p>
          Some donors give the same split every time (like "70% general, 30% missions"). Save this as a default split in their donor profile, and Relius will automatically divide future donations according to their preference. One-click entry honors their intent every time.
        </p>

        <h4>Memorial and Honor Gifts</h4>
        <p>
          Add notes to donations indicating memorial dedications ("In memory of John Smith") or honor gifts ("In honor of Pastor Jane's 20th anniversary"). These notes appear on tax receipts and can be used to generate acknowledgment letters to families being honored.
        </p>

        <h4>Donation Refunds and Corrections</h4>
        <p>
          If you need to reverse a donation (duplicate entry, returned check, donor request), use the refund feature to create an offsetting negative entry. This maintains an accurate audit trail while correcting the donor's giving history and tax records.
        </p>

        <h4>Anonymous Donations with Tracking</h4>
        <p>
          Create multiple anonymous donor profiles (Anonymous A, Anonymous B) to track patterns from repeat anonymous givers without violating their privacy. Useful when someone consistently drops large cash gifts in the offering but doesn't want personal acknowledgment.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Record donations within 48 hours</strong> – Fresh data ensures accurate reports and up-to-date donor records</li>
        <li><strong>Always enter check numbers</strong> – Simplifies bank reconciliation and provides clear audit trails</li>
        <li><strong>Use notes liberally</strong> – Capture context like "mission trip to Guatemala" or "memorial for Sue's father" for better stewardship</li>
        <li><strong>Honor donor designations</strong> – When someone specifies a fund, respect their intent even if it requires extra data entry</li>
        <li><strong>Double-check split donations</strong> – Verify totals match before saving; math errors create accounting headaches</li>
        <li><strong>Set up recurring gifts for consistent givers</strong> – Helps with budget forecasting and reduces manual entry</li>
        <li><strong>Create new donor profiles promptly</strong> – Don't let first-time givers slip through as "anonymous"; capture info for thank-you notes</li>
        <li><strong>Review undesignated gifts weekly</strong> – Follow up with donors to confirm fund preferences and reduce default allocations</li>
      </ul>

      <h2>Common Questions</h2>
      
      <p><strong>Q: What if someone gives cash without an envelope or identification?</strong></p>
      <p>A: Record it as an anonymous donation to the General Fund (or other default fund). These gifts count toward your church's income but can't be receipted to individuals. Consider encouraging envelope use or online giving to reduce anonymous cash.</p>

      <p><strong>Q: How do we handle a check that bounces?</strong></p>
      <p>A: Use the refund feature to reverse the original donation. This creates a negative entry that zeros out the gift in both your records and the donor's giving history. Contact the donor to request a replacement check or alternative payment.</p>

      <p><strong>Q: Can we split one donation across different campaigns?</strong></p>
      <p>A: Yes! Campaigns are linked to specific funds, so splitting a donation across multiple funds automatically allocates portions to any active campaigns for those funds.</p>

      <p><strong>Q: What's the difference between a pledge and a recurring gift?</strong></p>
      <p>A: A pledge is a commitment to give (not yet paid), while a recurring gift is an automated payment that actually processes. Pledges track intent; recurring gifts track actual donations.</p>

      <p><strong>Q: How do we record stock donations or other securities?</strong></p>
      <p>A: Create a donation with payment method "Stock/Securities" and enter the fair market value on the date of transfer. Add detailed notes about the stock ticker, number of shares, and transfer date. Consult your accountant for proper IRS documentation requirements.</p>

      <p><strong>Q: Can we import historical giving data from our old system?</strong></p>
      <p>A: Yes! Relius supports bulk import of donation history via CSV file. Map your old system's fields to Relius fields (date, donor, amount, fund, payment method) and import years of history to give donors a complete record.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/giving/online-setup">Online Giving Setup</a> – Enable automatic donation recording</li>
        <li><a href="/resources/docs/giving/campaigns">Campaigns</a> – Track donations toward specific goals</li>
        <li><a href="/resources/docs/giving/donors">Donor Management</a> – View complete giving histories</li>
        <li><a href="/resources/docs/giving/receipts">Tax Receipts</a> – Generate documentation for donors</li>
        <li><a href="/resources/docs/people/directory">Member Directory</a> – Create donor profiles</li>
        <li><a href="/resources/docs/administration/integrations">Integrations</a> – Connect Stripe and other platforms</li>
      </ul>
    </div>
  );
}
