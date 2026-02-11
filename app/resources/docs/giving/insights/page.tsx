export default function GivingInsightsPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Giving Insights</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Giving Insights is an AI-powered analytics dashboard that surfaces donor segmentation, giving amount trends, and donor engagement trends so you can identify patterns and monitor donor health at a glance.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        The Giving Insights dashboard lives under <strong>Giving &gt; Insights</strong> in the sidebar and presents three core views: Donor Segmentation, Giving Amount Trends (with a Daily/Monthly toggle), and Donor Engagement Trends. Each view is generated from your existing donation data and updated automatically as new gifts are recorded. The AI layer analyzes patterns across time periods, donor cohorts, and fund allocations to highlight changes that might otherwise go unnoticed in raw spreadsheets.
      </p>
      <p>
        The dashboard is read-only and does not modify any giving records. It is designed for church leadership, finance teams, and pastors who need a quick understanding of where giving stands, which donor segments are growing or shrinking, and whether engagement is trending in a healthy direction. All data respects the same permission model as the rest of the Giving module -- users without giving access cannot view the Insights page.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Donor Segmentation</strong> -- Groups donors into categories such as new, consistent, lapsed, and major donors based on giving frequency and amount thresholds. Each segment is displayed with its donor count and total contribution so you can see the composition of your giving base.</li>
        <li><strong>Giving Amount Trends</strong> -- A line or bar chart showing total giving over time. Toggle between <em>Daily</em> view (useful for tracking week-over-week patterns or campaign surges) and <em>Monthly</em> view (useful for spotting seasonal trends and long-term trajectory).</li>
        <li><strong>Donor Engagement Trends</strong> -- Tracks how many donors are actively giving in each period compared to previous periods. A rising engagement line means more people are participating; a declining line signals potential retention issues that need pastoral attention.</li>
        <li><strong>AI-Generated Highlights</strong> -- Short summary cards at the top of the dashboard call out notable changes, such as "12 consistent donors have not given in the past 30 days" or "Monthly giving is up 8% compared to the same month last year."</li>
        <li><strong>Date Range Filtering</strong> -- Narrow all charts and segments to a specific date range to focus on a campaign period, fiscal quarter, or year-to-date window.</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Open the Insights Dashboard</h3>
      <p>
        Navigate to <strong>Giving &gt; Insights</strong> in the sidebar. The dashboard loads with a default date range of the current calendar year. If you have fewer than 30 days of giving data, some trend charts may show limited information until more history accumulates.
      </p>

      <h3>Step 2: Review Donor Segmentation</h3>
      <p>
        The segmentation panel groups your donors into categories. Click on any segment to see the list of donors it contains. Use this to identify, for example, how many new donors you gained this quarter or how many previously consistent donors have lapsed.
      </p>

      <h3>Step 3: Explore Giving Trends</h3>
      <p>
        Switch between Daily and Monthly views using the toggle at the top of the Giving Amount Trends chart. Daily view is helpful during active campaigns or around major Sundays. Monthly view is better for board-level reporting and seasonal analysis.
      </p>

      <h3>Step 4: Monitor Engagement</h3>
      <p>
        Check the Donor Engagement Trends chart to see whether the number of active donors is growing, flat, or declining. Compare this to total giving amounts -- if giving is up but engagement is down, a smaller group is carrying more weight, which may be unsustainable.
      </p>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Check Insights weekly</strong> -- A brief weekly review helps you catch emerging trends early rather than discovering issues at month-end finance meetings</li>
        <li><strong>Pair segmentation with outreach</strong> -- When you see donors moving into the lapsed segment, coordinate with your pastoral team for a personal check-in rather than waiting for them to disappear entirely</li>
        <li><strong>Use the Monthly toggle for board reporting</strong> -- Daily fluctuations can look alarming out of context; monthly views smooth out noise and give leadership a clearer picture</li>
        <li><strong>Compare the same time period year-over-year</strong> -- Seasonal dips (summer, post-holidays) are normal; compare to the same month last year to separate real trends from expected cycles</li>
        <li><strong>Act on AI highlights promptly</strong> -- The AI-generated summary cards are designed to surface actionable items; treat them as a to-do list rather than passive information</li>
      </ul>

      <h2>Common Questions</h2>

      <p><strong>Q: How often does the Insights dashboard refresh?</strong></p>
      <p>A: The dashboard updates automatically as new donations are recorded. When you open the page, it pulls the latest data. There is no manual refresh step required.</p>

      <p><strong>Q: What defines a "lapsed" donor in the segmentation view?</strong></p>
      <p>A: A lapsed donor is someone who gave at least once in the prior period (typically the previous quarter or year) but has not given in the current period. The exact threshold may vary based on your data range selection.</p>

      <p><strong>Q: Can I export the charts or data from Insights?</strong></p>
      <p>A: The Insights dashboard is currently a view-only analytics tool. For exportable reports and CSV downloads, use the broader Giving Analytics and reporting features available under the Giving section.</p>

      <p><strong>Q: Do I need a minimum amount of data for Insights to work?</strong></p>
      <p>A: The segmentation and engagement views require at least a few weeks of giving data to produce meaningful groupings. Trend charts become more useful with 3 or more months of history. If you recently migrated, importing historical data will immediately enrich the dashboard.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/giving">Giving Overview</a> -- Main giving module documentation</li>
        <li><a href="/resources/docs/giving/tracking">Donation Tracking</a> -- Recording the data that feeds Insights</li>
        <li><a href="/resources/docs/giving/campaigns">Campaigns</a> -- Track campaign performance alongside Insights trends</li>
      </ul>
    </div>
  );
}
