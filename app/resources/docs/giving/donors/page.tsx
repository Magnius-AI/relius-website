export default function DonorManagementPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Donor Management</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Build deeper relationships with complete donor profiles, giving histories, and smart segmentation that helps you identify, thank, and engage every giver.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Behind every donation is a person with a story, a heart for ministry, and a desire to make a difference. Donor management in Relius isn't about squeezing more money from people—it's about stewarding relationships, honoring generosity, and helping people experience the joy of faithful giving. When you know someone has given consistently for 15 years, when you notice a first-time gift from a visitor, or when you see a longtime supporter suddenly stop giving, you can respond with wisdom and care.
      </p>
      <p>
        Every member and visitor in Relius automatically has a donor profile that tracks their complete giving history across all channels—cash, check, online, mobile. You can see patterns emerge: seasonal spikes around Christmas, steady monthly tithers, one-time gifts to specific campaigns. This visibility empowers pastoral care, financial forecasting, and targeted communication. It answers questions like "Who are our most faithful givers?" and "Who might need a personal check-in?"
      </p>
      <p>
        Great donor management transforms transactional giving into relational partnership. Send personal thank-yous to first-time givers. Celebrate milestone anniversaries for longtime supporters. Gently reach out when someone's pattern changes. Segment donors by giving history to send relevant campaign appeals. When people feel known and appreciated, generosity flourishes.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Donor Profile</strong>: A person or family's complete record including contact info, giving history, and engagement notes</li>
        <li><strong>Giving History</strong>: A chronological list of all donations from a donor with dates, amounts, funds, and payment methods</li>
        <li><strong>Donor Segmentation</strong>: Grouping donors by behavior (major givers, first-timers, recurring, lapsed) for targeted communication</li>
        <li><strong>Major Donor</strong>: High-capacity giver who contributes significantly above average; typically top 10-20% provide 50%+ of giving</li>
        <li><strong>Lapsed Donor</strong>: Someone who previously gave regularly but hasn't donated in 60+ days (or your defined threshold)</li>
        <li><strong>First-Time Donor</strong>: Someone who has given their first recorded gift to your church</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Access Donor Profiles</h3>
      <p>
        From your dashboard, navigate to <strong>Giving → Donors</strong> to see a list of all people who have given to your church. Click any name to view their complete profile, including personal details, giving history, communication preferences, and custom notes.
      </p>

      <h3>Step 2: Review Giving History</h3>
      <p>
        Within any donor profile, scroll to the <strong>Giving History</strong> section. This shows every donation chronologically with dates, amounts, funds, payment methods, and any notes. Filter by date range, fund, or campaign to analyze specific patterns. Export to CSV for deeper analysis if needed.
      </p>

      <h3>Step 3: Create Donor Segments</h3>
      <p>
        Use Relius's segmentation tools to create smart lists: "Major Donors (gave $5,000+ last year)," "First-Time Givers (last 30 days)," "Monthly Recurring Donors," or "Lapsed (no gift in 90 days)." These segments become the basis for targeted thank-yous, campaigns, and pastoral outreach.
      </p>

      <h2>Features</h2>

      <h3>Donor Profiles and Giving History</h3>
      <p>
        Each donor profile is a comprehensive view of someone's generosity journey with your church:
      </p>
      <ul>
        <li><strong>Contact Information</strong> – Name, email, phone, mailing address for receipts and communication</li>
        <li><strong>Giving Summary</strong> – Total lifetime giving, year-to-date giving, largest gift, average gift size</li>
        <li><strong>Giving History</strong> – Complete chronological record of every donation with drill-down details</li>
        <li><strong>Recurring Gifts</strong> – Active automated donations with frequency, amount, and next scheduled date</li>
        <li><strong>Pledges</strong> – Commitments made to campaigns with fulfillment tracking</li>
        <li><strong>Communication Log</strong> – Record of thank-you notes, emails, phone calls, or meetings related to giving</li>
        <li><strong>Custom Tags</strong> – Labels like "major donor," "building campaign supporter," "missionary sponsor"</li>
        <li><strong>Notes</strong> – Private staff notes about preferences, interests, or special circumstances</li>
      </ul>
      <p>
        <em>Example: You open Sarah Thompson's profile and see she's given $18,450 over 8 years, primarily to General Fund but with occasional mission trip support. Her last gift was 6 weeks ago, and she has a recurring monthly gift of $150. The notes indicate she's passionate about youth ministry. This context informs how you engage her.</em>
      </p>

      <h3>Donor Segmentation and Tags</h3>
      <p>
        Segmentation turns raw data into actionable groups. Create segments based on:
      </p>
      <ul>
        <li><strong>Giving level</strong> – Major ($10k+ annual), Mid-level ($2.5k-$10k), Regular (&lt;$2.5k)</li>
        <li><strong>Giving frequency</strong> – Weekly, Monthly, Quarterly, Annual, One-time</li>
        <li><strong>Recency</strong> – Gave this month, Gave this quarter, Lapsed (90+ days), Never gave</li>
        <li><strong>Fund preference</strong> – Missions supporters, Building campaign donors, General only</li>
        <li><strong>Payment method</strong> – Online givers, Cash/check only, Text-to-give users</li>
        <li><strong>Campaign participation</strong> – Who gave to specific campaigns or projects</li>
      </ul>
      <p>
        Apply tags manually or automatically based on rules. A "VIP" tag might auto-apply when lifetime giving exceeds $50,000. A "First-time giver" tag triggers for anyone with exactly one donation in the system.
      </p>

      <h3>Identifying Major Donors, Lapsed Givers</h3>
      <p>
        <strong>Major Donors:</strong> These are your financial partners who make outsized impact. Relius automatically flags top givers based on thresholds you set (e.g., top 10% or anyone giving $5,000+ annually). Give these folks special attention:
      </p>
      <ul>
        <li>Personal thank-you calls or handwritten notes from pastoral leadership</li>
        <li>Invitations to private briefings on major initiatives</li>
        <li>Quarterly updates on ministry impact tied to their giving</li>
        <li>First access to campaign opportunities or special projects</li>
      </ul>
      <p>
        <strong>Lapsed Givers:</strong> When someone's giving pattern changes, it's often a signal—financial hardship, dissatisfaction, life transition, or simply forgetfulness. Relius flags anyone who hasn't given in your defined window (60, 90, or 120 days based on their historical frequency).
      </p>
      <p>
        Respond with care, not pressure: "Hey [Name], we noticed we haven't seen you around lately and wanted to check in. Is everything okay? Is there any way we can support you?" Sometimes a gentle nudge restores giving; sometimes you discover a pastoral need more important than the donation.
      </p>

      <details>
        <summary>Advanced Features</summary>
        
        <h4>Custom Donor Reports</h4>
        <p>
          Build sophisticated reports with drag-and-drop filters. Questions like "Who gave $1,000+ to Missions in the last 2 years but hasn't given to our current campaign?" or "Which recurring donors increased their monthly amount in the past quarter?" become one-click queries. Export results to Excel or CSV for board presentations.
        </p>

        <h4>Giving Trend Analysis</h4>
        <p>
          View visual charts showing donor behavior over time. See monthly giving totals, number of active donors per quarter, average gift size trends, and retention rates (what % of last year's donors gave again this year). Spot seasonal patterns, campaign impacts, or concerning declines before they become crises.
        </p>

        <h4>Donor Cohort Tracking</h4>
        <p>
          Group donors by when they started giving (2020 cohort, 2021 cohort, etc.) and track retention. What percentage of people who gave in their first year are still giving in year two? Year three? Cohort analysis reveals whether you're retaining donors or constantly replacing them.
        </p>

        <h4>Giving Capacity Indicators</h4>
        <p>
          For major donor cultivation, add estimated capacity indicators based on observable data—profession, neighborhood, family size, involvement level. This isn't about prying into finances; it's about understanding who might have capacity for larger gifts if invited thoughtfully. Never base entire strategy on assumptions, but let capacity inform asks.
        </p>

        <h4>Multi-Household Giving</h4>
        <p>
          Track giving at both individual and household levels. When a married couple gives, attribute the gift to both profiles while avoiding double-counting in reports. Perfect for situations where one spouse manages finances but both should be thanked and recognized.
        </p>

        <h4>Donor Communication History</h4>
        <p>
          Log every touchpoint—thank-you emails sent, phone calls made, in-person meetings held. When you're about to reach out to a major donor, check their communication log to see what was discussed last time. Continuity in conversations demonstrates you truly value the relationship, not just the check.
        </p>

        <h4>Automated Donor Journeys</h4>
        <p>
          Set up trigger-based communication flows. When someone makes their first donation, auto-send a welcome email and schedule a follow-up call for a staff member. When a recurring donor cancels, automatically notify your team to reach out personally. When someone crosses into "major donor" territory, trigger VIP onboarding workflows.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Thank personally and promptly</strong> – First-time donors should receive personal contact within 48 hours, not just a generic receipt</li>
        <li><strong>Celebrate milestones</strong> – Recognize 1-year, 5-year, 10-year giving anniversaries with personal notes or small gifts</li>
        <li><strong>Segment thoughtfully</strong> – Don't spam major donors with every appeal; tailor communication to their interests and capacity</li>
        <li><strong>Review lapsed donors monthly</strong> – Early outreach often restores giving before someone fully disengages</li>
        <li><strong>Respect privacy</strong> – Limit who can see full donor records; use role-based permissions to protect sensitive data</li>
        <li><strong>Record contact attempts</strong> – Note when you called, emailed, or met with donors so staff don't duplicate efforts</li>
        <li><strong>Look beyond the dollars</strong> – A widow's $20 monthly gift might be more sacrificial than a millionaire's $1,000 check; honor heart, not just amount</li>
        <li><strong>Engage non-financial contributors</strong> – Volunteers who don't give financially are still partners; track and honor all forms of generosity</li>
        <li><strong>Use AI insights wisely</strong> – If using Relius AI Donations Manager, review recommendations but never automate deeply personal outreach</li>
      </ul>

      <h2>Common Questions</h2>
      
      <p><strong>Q: What defines a "major donor" for our church?</strong></p>
      <p>A: It varies by church size. General rule: anyone in the top 10% of givers, or anyone giving 2-3× your average household gift. A church where average giving is $2,000/year might set major donor threshold at $5,000+. Review your data to find natural break points.</p>

      <p><strong>Q: How do we handle donor privacy? Should everyone see giving records?</strong></p>
      <p>A: Absolutely not. Restrict full donor access to senior leadership and finance staff only. Other team members (like event coordinators) might see names but not amounts. Use Relius's role-based permissions to ensure "need to know" access. Announce this privacy policy to build trust.</p>

      <p><strong>Q: Should we reach out when someone stops giving?</strong></p>
      <p>A: Yes, but with care and pastoral heart—not sales pressure. Frame it as concern: "We noticed we haven't connected lately and wanted to check if you're okay." Sometimes it reveals financial hardship where you can help. Sometimes it's a misunderstanding you can resolve. Never make it transactional.</p>

      <p><strong>Q: What if a donor asks to see their giving history?</strong></p>
      <p>A: Donors have every right to their own records. Generate a giving statement from their profile and send it promptly. Most online giving platforms also let donors log in to see their own history and manage recurring gifts—empower them with access.</p>

      <p><strong>Q: How do we avoid showing favoritism to major donors?</strong></p>
      <p>A: Biblical stewardship honors all givers equally, but relational investment naturally scales with engagement capacity. It's not favoritism to have deeper conversations with someone giving $50k vs. $50—it's wise stewardship. The key: never let gift size affect pastoral care, spiritual attention, or church governance.</p>

      <p><strong>Q: Can we track in-kind donations (goods/services) in donor profiles?</strong></p>
      <p>A: Yes! Record non-cash gifts in donor histories with notes describing what was given. However, your church should not assign dollar values for tax purposes—donors must determine fair market value themselves. Use in-kind tracking for stewardship appreciation, not tax documentation.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/giving/tracking">Donation Tracking</a> – Recording gifts that build giving histories</li>
        <li><a href="/resources/docs/giving/campaigns">Campaigns</a> – Identifying campaign prospects from donor segments</li>
        <li><a href="/resources/docs/giving/receipts">Tax Receipts</a> – Generating statements for donor records</li>
        <li><a href="/resources/docs/communications/email">Email Campaigns</a> – Messaging segmented donor groups</li>
        <li><a href="/resources/docs/ai/donations-manager">AI Donations Manager</a> – Predicting churn and identifying engagement opportunities</li>
        <li><a href="/resources/docs/people/member-directory">Member Directory</a> – Managing donor contact information</li>
      </ul>
    </div>
  );
}
