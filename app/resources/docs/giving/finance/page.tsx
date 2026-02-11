export default function FinancialOverviewPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Financial Overview</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: The Financial Overview dashboard provides church leadership with income summaries, fund balances, period-over-period comparisons, and financial health metrics in a single high-level view.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        The Financial Overview page consolidates your church's giving data into a leadership-oriented dashboard. Rather than drilling into individual donations or donor profiles, this view answers top-level questions: How much income came in this month? How does this quarter compare to last quarter? Which funds are ahead of budget and which are behind? The data is pulled from the same donation records used throughout the Giving module, so the numbers are always consistent with your detailed reports.
      </p>
      <p>
        This page is intended for pastors, finance committee members, elders, and administrators who need a periodic snapshot without navigating multiple reports. It surfaces the key numbers that drive budget decisions, staffing conversations, and ministry planning. All figures respect Relius permission settings -- only users with financial access roles can view the Financial Overview.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Income Summary</strong> -- Displays total income for the current month, quarter, and year-to-date with comparison to the same periods in the prior year. Percentage change indicators show whether giving is trending up or down.</li>
        <li><strong>Fund Balances</strong> -- Lists each configured fund with its current balance, total contributions received, and any designated spending. Funds that are below expected thresholds are highlighted for attention.</li>
        <li><strong>Period Comparisons</strong> -- Side-by-side views of giving across two time periods (e.g., this month vs. last month, this quarter vs. same quarter last year) so leadership can evaluate performance in context rather than in isolation.</li>
        <li><strong>Financial Health Metrics</strong> -- Calculated indicators such as recurring giving percentage, donor retention rate, average gift size, and budget attainment percentage. These metrics summarize the stability and trajectory of your church's financial position.</li>
        <li><strong>Top-Line Charts</strong> -- Visual bar and line charts for income trends, fund distribution, and year-over-year comparison that can be referenced during board meetings or finance reviews.</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Access the Financial Overview</h3>
      <p>
        Navigate to <strong>Giving &gt; Financial Overview</strong> in the sidebar. The dashboard loads with the current year-to-date view by default. If your church recently started using Relius, the dashboard will populate as donation records are entered or imported.
      </p>

      <h3>Step 2: Review Income Summaries</h3>
      <p>
        The top section displays total income broken down by month, quarter, and year. Green or red indicators show whether each figure is above or below the same period last year. Use this to quickly assess whether giving is on track.
      </p>

      <h3>Step 3: Check Fund Balances</h3>
      <p>
        Scroll to the Fund Balances section to see how each designated fund is performing. This is especially useful for restricted funds (building, missions, benevolence) where leadership needs to confirm that spending aligns with available contributions.
      </p>

      <h3>Step 4: Use Period Comparisons for Context</h3>
      <p>
        Select two time periods to compare side-by-side. This helps answer questions like "Did the stewardship sermon series in October improve November giving compared to last year?" or "How does Q1 this year stack up against Q1 last year?"
      </p>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Review monthly at minimum</strong> -- Schedule a recurring time (such as the first Monday of each month) to check the Financial Overview so trends are caught early</li>
        <li><strong>Present period comparisons, not just raw totals</strong> -- Context makes numbers meaningful; a $50,000 month sounds different when compared to $48,000 last year (steady) vs. $65,000 last year (declining)</li>
        <li><strong>Monitor fund balances before approving spending</strong> -- Verify that restricted fund balances support planned expenditures before committing to purchases or projects</li>
        <li><strong>Combine with Giving Insights for deeper analysis</strong> -- The Financial Overview provides the "what"; the Giving Insights dashboard helps explain the "why" with segmentation and engagement data</li>
        <li><strong>Share the dashboard in leadership meetings</strong> -- Use the top-line charts during elder board or finance committee meetings to ground discussions in current data rather than anecdotal impressions</li>
      </ul>

      <h2>Common Questions</h2>

      <p><strong>Q: How is the Financial Overview different from Giving Analytics?</strong></p>
      <p>A: The Financial Overview is a high-level summary designed for leadership check-ins. Giving Analytics provides deeper drill-down capabilities including donor-level detail, cohort analysis, and custom report building. Think of the Financial Overview as the executive summary and Analytics as the full report.</p>

      <p><strong>Q: Can I adjust the fiscal year start date?</strong></p>
      <p>A: Yes. If your church operates on a fiscal year that does not start in January, you can configure the fiscal year start month in your admin settings. The Financial Overview will then calculate year-to-date figures based on your fiscal calendar.</p>

      <p><strong>Q: Are expenses tracked on this page?</strong></p>
      <p>A: The Financial Overview focuses on income (donations and giving). Expense tracking and full budget management are handled through separate accounting tools. The fund balances shown here reflect contributions received, not net balances after expenses.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/giving">Giving Overview</a> -- Main giving module documentation</li>
        <li><a href="/resources/docs/giving/tracking">Donation Tracking</a> -- Recording donations that populate the Financial Overview</li>
        <li><a href="/resources/docs/giving/campaigns">Campaigns</a> -- Campaign-specific financial tracking</li>
      </ul>
    </div>
  );
}
