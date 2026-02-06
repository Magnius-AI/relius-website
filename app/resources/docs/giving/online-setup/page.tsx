export default function OnlineGivingSetupPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Online Giving Setup</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Enable online donations in minutes with Stripe integration, customize your giving page to match your church brand, and empower your congregation to give from anywhere.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        In today's digital world, people expect to give online as easily as they order coffee. Relius makes online giving simple for both your church and your donors. Connect your Stripe account with just a few clicks, customize a beautiful giving page that reflects your church's personality, and watch donations flow in automatically—all while you sleep, all without touching an envelope.
      </p>
      <p>
        Online giving isn't just convenient; it transforms giving patterns. Recurring donations increase consistency and help members be faithful stewards without thinking about it every week. Visitors who might not carry cash can give during their first visit. Missionaries can support your church from across the globe. And when disaster strikes or a special need arises, your congregation can respond instantly.
      </p>
      <p>
        Setup takes less than 15 minutes, and Relius handles all the technical complexity. Stripe processes payments securely (Relius never stores credit card numbers), donations appear instantly in your system linked to donor profiles, and you get real-time notifications when gifts arrive. Whether you're a small church receiving your first online gift or a growing congregation processing thousands monthly, the system scales effortlessly.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Stripe</strong>: The payment processor Relius uses to securely handle credit cards, debit cards, and ACH bank transfers</li>
        <li><strong>Processing Fee</strong>: A small percentage Stripe charges per transaction (typically 2.9% + $0.30 for cards)</li>
        <li><strong>Giving Page</strong>: Your customized online donation page where donors enter gift amounts and payment details</li>
        <li><strong>Text-to-Give</strong>: A feature that lets donors text a keyword to a phone number to initiate giving</li>
        <li><strong>Recurring Donation</strong>: An automated gift that repeats on a schedule set by the donor</li>
        <li><strong>Fee Coverage</strong>: An option for donors to add extra to their gift to cover processing fees</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Create or Connect Your Stripe Account</h3>
      <p>
        Navigate to <strong>Settings → Integrations → Stripe</strong>. Click <strong>Connect Stripe</strong> and you'll be guided through creating a Stripe account (if you don't have one) or connecting your existing account. You'll need basic information: your church's legal name, EIN, bank account details for deposits, and contact information.
      </p>
      <p>
        Stripe verifies your information—usually instantly, sometimes within 1-2 business days. Once verified, you're ready to accept donations!
      </p>

      <h3>Step 2: Customize Your Giving Page</h3>
      <p>
        Go to <strong>Giving → Online Giving → Customize Page</strong>. Upload your church logo, choose accent colors that match your branding, and write a compelling message about stewardship. Add suggested giving amounts (like $25, $50, $100) or let donors enter custom amounts. Select which funds are available for designation.
      </p>

      <h3>Step 3: Share Your Giving URL</h3>
      <p>
        Your unique giving page URL is <code>yourdomain.com/give</code> (or <code>yourchurch.relius.app/give</code> if using Relius hosting). Add this link to your website header, include it in email signatures, post it on social media, and announce it from the pulpit. Test it yourself by making a small donation to confirm everything works!
      </p>

      <h2>Features</h2>

      <h3>Stripe Integration Walkthrough</h3>
      <p>
        Stripe is the industry standard for online payments—used by millions of businesses worldwide. When you connect Stripe to Relius:
      </p>
      <ul>
        <li><strong>Security</strong> – Stripe handles all card data with PCI-compliant encryption; Relius never sees or stores card numbers</li>
        <li><strong>Automatic deposits</strong> – Funds transfer to your bank account on a rolling 2-day schedule (customizable)</li>
        <li><strong>Built-in fraud protection</strong> – Machine learning detects suspicious transactions before they process</li>
        <li><strong>Dashboard access</strong> – View detailed transaction reports, refunds, and fees directly in Stripe</li>
        <li><strong>Donor portal</strong> – Donors can log into Stripe to update payment methods or cancel recurring gifts</li>
      </ul>
      <p>
        Processing fees are deducted automatically before funds reach your bank. Standard rates: 2.9% + $0.30 per card transaction, 0.8% capped at $5 for ACH transfers. You can choose whether your church absorbs these fees or offers donors the option to cover them.
      </p>

      <h3>Giving Page Customization</h3>
      <p>
        Your giving page is the face of your online stewardship. Customize these elements:
      </p>
      <ul>
        <li><strong>Logo & branding</strong> – Upload your church logo and set primary/accent colors</li>
        <li><strong>Welcome message</strong> – Explain why giving matters: "Your generosity fuels our mission to serve the community and spread the Gospel."</li>
        <li><strong>Fund selection</strong> – Let donors choose between General, Building, Missions, or create custom categories</li>
        <li><strong>Suggested amounts</strong> – Guide giving with preset buttons: $25, $50, $100, $250, or custom</li>
        <li><strong>Frequency options</strong> – Enable one-time, weekly, bi-weekly, monthly, or yearly giving</li>
        <li><strong>Fee coverage</strong> – Add a checkbox: "I'd like to cover the processing fee so my full donation goes to the church"</li>
        <li><strong>Thank you message</strong> – What donors see after giving: "Thank you for your faithful generosity! You'll receive a receipt via email."</li>
      </ul>

      <h3>Text-to-Give Setup</h3>
      <p>
        Text-to-Give makes spontaneous giving effortless. During a mission appeal or special offering, say from the pulpit: "Text GIVE to 555-123-4567 to support this ministry right now."
      </p>
      <p>
        To enable Text-to-Give:
      </p>
      <ol>
        <li>Go to <strong>Giving → Text-to-Give</strong></li>
        <li>Purchase a dedicated phone number (around $5/month through Relius)</li>
        <li>Set your keyword (typically "GIVE" but can be custom like "MISSIONS" or "BUILD")</li>
        <li>Configure default fund and giving page settings</li>
      </ol>
      <p>
        When someone texts your keyword, they receive a link to a mobile-optimized giving form. First-time texters enter their payment details once, then future gifts require just "GIVE $50" and it processes instantly using their saved card.
      </p>

      <details>
        <summary>Advanced Features</summary>
        
        <h4>Custom Giving Forms</h4>
        <p>
          Create specialized forms for specific campaigns or events. A mission trip form can include custom fields like "Preferred trip date" or "Missionary support name." A building fund form might ask "Would you like your name on the donor wall?" Each form has its own URL and tracks separately in reports.
        </p>

        <h4>Kiosk Mode</h4>
        <p>
          Turn a tablet into a giving station for your lobby. Enable kiosk mode to lock the device into a simplified giving interface—perfect for first-time visitors or those who prefer to give digitally but forgot their phone. The screen resets after each transaction to protect privacy.
        </p>
        <p>
          <em>Setup tip: Mount an iPad near your welcome desk with a sign: "Give Here." Set it to always show the giving form and auto-reset after 30 seconds of inactivity.</em>
        </p>

        <h4>ACH (Bank Account) Giving</h4>
        <p>
          Lower fees mean more of each gift reaches your ministry. ACH transfers cost just 0.8% (capped at $5) compared to 2.9% for cards. Enable ACH to let donors link bank accounts directly. Processing takes 2-4 days instead of instant, but many consistent givers prefer this method for recurring donations.
        </p>

        <h4>QR Code Generation</h4>
        <p>
          Generate a QR code that links directly to your giving page. Print it on bulletins, display it on screens during service, or put it on offering envelopes. Anyone can scan with their phone camera and give immediately. Update QR codes to link to specific campaigns when needed.
        </p>

        <h4>Embeddable Giving Widget</h4>
        <p>
          Add a giving form directly to your church website without redirecting to a separate page. Copy the embed code from Relius and paste into your site—donors can give without ever leaving your homepage. Great for churches with custom websites who want seamless integration.
        </p>

        <h4>Multi-Currency Support</h4>
        <p>
          If your church has international supporters, enable multi-currency giving. Donors can choose their local currency, and Stripe handles conversion automatically. Funds still deposit in your church's currency, but giving is easier for missionaries and global members.
        </p>

        <h4>Scheduled Giving (Future-Dated)</h4>
        <p>
          Let donors schedule a one-time gift for a future date. Perfect for planned year-end giving, memorial dates, or fulfilling pledges on a specific timeline. The system holds the schedule and processes the donation automatically on the chosen date.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Test before announcing</strong> – Make a real donation yourself to confirm the entire flow works smoothly</li>
        <li><strong>Promote consistently</strong> – Mention online giving every 4-6 weeks from the pulpit; many won't remember after one announcement</li>
        <li><strong>Make it visible</strong> – Add "Give Online" buttons to your website header, email signatures, and social media profiles</li>
        <li><strong>Encourage recurring giving</strong> – Automated donations increase consistency and help budget forecasting; highlight this benefit</li>
        <li><strong>Keep fund options simple</strong> – Too many choices overwhelm donors; start with 3-5 funds, add more as needed</li>
        <li><strong>Offer fee coverage, but don't require it</strong> – Let donors choose whether to add 3% to cover processing costs</li>
        <li><strong>Send instant receipts</strong> – Configure automatic email receipts so donors get confirmation within seconds</li>
        <li><strong>Monitor failed transactions</strong> – Check weekly for declined cards or expired payment methods and reach out to donors</li>
        <li><strong>Update branding regularly</strong> – Keep your giving page fresh with seasonal messages or campaign highlights</li>
      </ul>

      <h2>Common Questions</h2>
      
      <p><strong>Q: How much do processing fees cost our church?</strong></p>
      <p>A: Stripe charges 2.9% + $0.30 per credit/debit card transaction, and 0.8% (capped at $5) for ACH bank transfers. On a $100 card donation, you receive $96.80. Most churches either absorb this cost or offer donors the option to cover fees.</p>

      <p><strong>Q: Can donors give anonymously online?</strong></p>
      <p>A: Yes! Include a checkbox "Make this donation anonymous" on your giving form. The donation still requires a name for payment processing, but you can configure Relius to record it under "Anonymous Donor" for internal reporting. Note: true anonymity prevents tax receipts.</p>

      <p><strong>Q: What happens if a donor's recurring donation fails?</strong></p>
      <p>A: Stripe automatically retries the payment once. If it fails again, both you and the donor receive email notifications. The donor can update their payment method through a secure link in the email, or you can reach out personally to help them update it.</p>

      <p><strong>Q: Can we accept cryptocurrency or digital wallet payments?</strong></p>
      <p>A: Currently, Relius supports credit cards, debit cards, and ACH transfers through Stripe. For cryptocurrency donations, consider using a service like Engiven or The Giving Block, then manually record those gifts in Relius.</p>

      <p><strong>Q: Is online giving secure? What about data breaches?</strong></p>
      <p>A: Extremely secure. Stripe is PCI Level 1 certified (the highest security standard) and processes billions in payments annually. Relius never stores card numbers—all payment data stays with Stripe, protected by bank-level encryption.</p>

      <p><strong>Q: How quickly do donations reach our bank account?</strong></p>
      <p>A: Card transactions typically deposit within 2 business days on a rolling basis. ACH transfers take 4-5 days. You can view pending deposits in your Stripe dashboard and configure payout schedules (daily, weekly, monthly).</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/giving/tracking">Donation Tracking</a> – How online gifts are automatically recorded</li>
        <li><a href="/resources/docs/giving/campaigns">Campaigns</a> – Create dedicated giving pages for specific fundraisers</li>
        <li><a href="/resources/docs/giving/donors">Donor Management</a> – View who's giving online and their patterns</li>
        <li><a href="/resources/docs/giving/receipts">Tax Receipts</a> – Automatic receipting for online donations</li>
        <li><a href="/resources/docs/website/online-giving-page">Public Website - Online Giving</a> – Embedding giving on your church site</li>
        <li><a href="/resources/docs/administration/integrations">Integrations</a> – Managing your Stripe connection</li>
      </ul>
    </div>
  );
}
