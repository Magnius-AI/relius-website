export default function GivingOverviewPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Giving & Donations</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Manage all aspects of giving—from tracking donations and setting up online giving to running campaigns and generating tax receipts.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Faithful stewardship starts with clear, organized giving management. Relius helps your church track every gift—whether it's a weekly tithe dropped in the offering plate, an online donation to your building fund, or a text-to-give contribution during a special campaign. With built-in tools for donor management, campaign tracking, and year-end statements, you can focus on ministry while the system handles the details.
      </p>
      <p>
        Our giving suite is designed for churches of all sizes. Small congregations can quickly record cash and check donations, while growing churches can enable online giving with Stripe integration, run multi-fund campaigns, and generate sophisticated donor analytics. Everything is designed to be simple on the surface with powerful features available when you need them.
      </p>
      <p>
        Whether you're launching a capital campaign for a new worship center, tracking mission trip donations, or simply recording Sunday tithes, Relius provides the tools you need to honor every gift and steward your church's resources with excellence.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Donation</strong>: A single financial gift from a donor, including amount, date, payment method, and fund designation</li>
        <li><strong>Fund</strong>: A category for donations (e.g., General Fund, Building Fund, Missions, Benevolence)</li>
        <li><strong>Campaign</strong>: A time-bound fundraising effort with specific goals and progress tracking</li>
        <li><strong>Recurring Giving</strong>: Automated donations that repeat on a schedule (weekly, monthly, etc.)</li>
        <li><strong>Pledge</strong>: A commitment to give a certain amount over time, tracked separately from actual donations</li>
        <li><strong>Tax Receipt</strong>: IRS-compliant documentation of charitable contributions for donors</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Set Up Your Funds</h3>
      <p>
        Before recording donations, create funds that represent how gifts are designated in your church. Most churches start with General Fund, Building Fund, and Missions, then add specific funds as needed (Youth Ministry, Benevolence, Holiday Offerings, etc.).
      </p>

      <h3>Step 2: Record or Enable Donations</h3>
      <p>
        Choose your giving methods: manually record cash and check donations, set up online giving through Stripe, or both. Many churches start with manual entry and add online giving as their congregation becomes more tech-savvy.
      </p>

      <h3>Step 3: Track and Report</h3>
      <p>
        View giving trends, generate donor statements, and run reports to understand your church's financial health. Set up campaigns when you need to raise funds for specific projects.
      </p>

      <h2>Features</h2>

      <h3>Donation Tracking</h3>
      <p>
        Record every gift that comes into your church—cash, check, online, or mobile giving. Split donations across multiple funds, add notes for special designations, and maintain a complete giving history for every donor.
      </p>
      <p>
        <a href="/resources/docs/giving/tracking">Learn about Donation Tracking →</a>
      </p>

      <h3>Online Giving Setup</h3>
      <p>
        Connect your Stripe account and launch a beautiful online giving page in minutes. Customize the look to match your church branding, enable Text-to-Give for mobile convenience, and let donors set up recurring gifts with just a few clicks.
      </p>
      <p>
        <a href="/resources/docs/giving/online-setup">Learn about Online Giving Setup →</a>
      </p>

      <h3>Campaigns</h3>
      <p>
        Run fundraising campaigns for building projects, mission trips, or special initiatives. Set financial goals, display progress thermometers on your website, and track campaign momentum with real-time reporting.
      </p>
      <p>
        <a href="/resources/docs/giving/campaigns">Learn about Campaigns →</a>
      </p>

      <h3>Donor Management</h3>
      <p>
        See complete giving histories for every donor, identify major givers and lapsed contributors, and segment your donors for targeted communication. Tag donors by giving patterns, interests, or involvement to build stronger relationships.
      </p>
      <p>
        <a href="/resources/docs/giving/donors">Learn about Donor Management →</a>
      </p>

      <h3>Tax Receipts</h3>
      <p>
        Generate IRS-compliant tax receipts instantly or send year-end giving statements to your entire congregation with one click. Customize receipt templates with your church logo and ensure every donor has the documentation they need for tax season.
      </p>
      <p>
        <a href="/resources/docs/giving/receipts">Learn about Tax Receipts →</a>
      </p>

      <details>
        <summary>Advanced Features</summary>
        
        <h4>Pledge Tracking</h4>
        <p>
          Record financial commitments separately from actual donations. Perfect for capital campaigns where members pledge to give over 1-3 years. Track fulfillment percentages and send gentle reminders.
        </p>

        <h4>Batch Entry</h4>
        <p>
          Enter dozens of cash and check donations at once after Sunday services. Use keyboard shortcuts to fly through offering counts, with automatic date and fund defaults to speed up data entry.
        </p>

        <h4>Custom Giving Forms</h4>
        <p>
          Create specialized giving forms for specific campaigns or events. Add custom fields to collect trip preferences for mission giving or memorial dedications for special gifts.
        </p>

        <h4>Kiosk Mode</h4>
        <p>
          Set up a tablet in your lobby where visitors can give on the spot. Lock the device to giving mode with a clean, simple interface that's perfect for first-time givers.
        </p>

        <h4>Multi-Campus Fund Allocation</h4>
        <p>
          Track giving separately by campus location while maintaining unified financial reporting. Perfect for churches with multiple sites that need both local and consolidated views.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Keep fund categories simple</strong> – Most churches thrive with 5-10 funds; too many creates donor confusion and accounting complexity</li>
        <li><strong>Record donations promptly</strong> – Enter gifts within 48 hours so reports stay current and donors see accurate giving histories</li>
        <li><strong>Enable recurring giving</strong> – Automated giving increases consistency and helps donors be faithful stewards without thinking about it</li>
        <li><strong>Thank donors meaningfully</strong> – Use Relius's communication tools to send personalized thank-you messages, not just tax receipts</li>
        <li><strong>Review giving trends monthly</strong> – Spot seasonal patterns and address concerns early when giving dips unexpectedly</li>
        <li><strong>Secure sensitive data</strong> – Limit who has access to full donor records; most volunteers need only limited permissions</li>
        <li><strong>Train multiple staff members</strong> – Don't let one person become a bottleneck; cross-train for continuity</li>
      </ul>

      <h2>Common Questions</h2>
      
      <p><strong>Q: Can donors give to multiple funds in one transaction?</strong></p>
      <p>A: Yes! Both online and manual entry support splitting a single donation across multiple funds. For example, $100 can be divided as $75 to General Fund and $25 to Missions.</p>

      <p><strong>Q: How do we handle anonymous donations?</strong></p>
      <p>A: Record anonymous gifts with a special "Anonymous Donor" profile. These gifts count in fund totals and campaign progress but don't generate tax receipts. Some churches create multiple anonymous profiles to track patterns without identifying individuals.</p>

      <p><strong>Q: What if someone gives cash without an envelope?</strong></p>
      <p>A: Record these as "undesignated" donations, typically to your General Fund. Encourage your congregation to use numbered envelopes or online giving so all gifts can be properly receipted.</p>

      <p><strong>Q: Can we track non-cash donations like equipment or vehicles?</strong></p>
      <p>A: Yes, record in-kind donations with notes about the item. However, IRS rules require donors to determine fair market value and obtain their own appraisal for high-value items. Your church should not assign values to in-kind gifts.</p>

      <p><strong>Q: How does recurring giving work if someone's card expires?</strong></p>
      <p>A: Stripe automatically attempts to update expired cards. If a payment fails, the donor receives an email notification to update their payment method. You can also see failed payments in your dashboard and follow up personally.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/giving/tracking">Donation Tracking</a> – Record all types of donations</li>
        <li><a href="/resources/docs/giving/online-setup">Online Giving Setup</a> – Enable digital giving</li>
        <li><a href="/resources/docs/giving/campaigns">Campaigns</a> – Run fundraising campaigns</li>
        <li><a href="/resources/docs/giving/donors">Donor Management</a> – Build donor relationships</li>
        <li><a href="/resources/docs/giving/receipts">Tax Receipts</a> – Generate year-end statements</li>
        <li><a href="/resources/docs/communications/email">Email Campaigns</a> – Thank donors and communicate impact</li>
        <li><a href="/resources/docs/ai/donations-manager">AI Donations Manager</a> – Predict trends and re-engage lapsed givers</li>
      </ul>
    </div>
  );
}
