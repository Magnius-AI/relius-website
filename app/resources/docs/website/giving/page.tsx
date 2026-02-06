import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Giving Page | Relius Documentation",
  description: "Set up and customize your church's online giving page for secure, seamless donations.",
};

export default function OnlineGivingPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Online Giving Page</h1>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
        <strong>Quick Summary:</strong> Create a beautiful, secure giving page where members can donate online with cards, bank transfers, or recurring gifts.
      </blockquote>

      <h2>Overview</h2>
      <p>
        Online giving has become essential for churches. Whether members are traveling, watching online, or simply prefer digital payments, a seamless giving experience removes barriers to generosity. With Relius, your online giving page is already built—you just need to configure it.
      </p>
      <p>
        Your giving page is mobile-optimized, secure (PCI-compliant), and integrates directly with your church's donation tracking. When someone gives online, it's recorded automatically in Relius, assigned to the right fund, and counted toward their annual giving total. No manual data entry, no spreadsheets, no mistakes.
      </p>
      <p>
        You can customize the page's appearance to match your church branding, create giving campaigns (like building funds or mission trips), and even embed your giving page on other websites. Let's get your giving page set up so generosity can flow freely.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li>
          <strong>Payment Gateway</strong>: The service that processes credit card and ACH payments (Relius uses Stripe).
        </li>
        <li>
          <strong>Funds & Designations</strong>: Different categories for donations (General Fund, Building Fund, Missions, etc.).
        </li>
        <li>
          <strong>Recurring Giving</strong>: Automatic donations on a schedule (weekly, monthly, yearly).
        </li>
        <li>
          <strong>ACH (Bank Transfer)</strong>: Direct bank account transfers, which have lower fees than credit cards.
        </li>
        <li>
          <strong>Embed Code</strong>: HTML snippet that lets you add your giving page to an external website.
        </li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Connect Stripe</h3>
      <p>
        Relius uses Stripe to process payments. Stripe is the industry standard—secure, reliable, and trusted by millions of businesses. To connect:
      </p>
      <ol>
        <li>Go to <strong>Giving</strong> → <strong>Settings</strong> → <strong>Payment Gateway</strong></li>
        <li>Click <strong>Connect Stripe Account</strong></li>
        <li>You'll be redirected to Stripe. If you don't have an account, you can create one (it's free)</li>
        <li>Complete Stripe's verification (requires basic church info and bank account details for payouts)</li>
        <li>Once verified, you'll be redirected back to Relius</li>
      </ol>
      <p>
        Stripe deposits donations directly to your church's bank account. Standard processing time is 2 business days. Stripe's fees are transparent: 2.9% + $0.30 per credit card transaction, or 0.8% (capped at $5) for ACH transfers.
      </p>

      <h3>Step 2: Set Up Giving Funds</h3>
      <p>
        Funds let donors designate where their gift goes. Most churches have at least:
      </p>
      <ul>
        <li><strong>General Fund</strong>: Unrestricted giving for operating expenses</li>
        <li><strong>Building Fund</strong>: Capital improvements or debt reduction</li>
        <li><strong>Missions</strong>: Global outreach and missionary support</li>
      </ul>
      <p>
        To add funds, go to <strong>Giving</strong> → <strong>Funds</strong> and click <strong>Add Fund</strong>. Give it a name, description, and optionally set a goal amount and deadline (useful for campaigns).
      </p>
      <p>
        Donors will see a dropdown on the giving page where they can choose which fund receives their donation. You can also set a default fund (typically General Fund).
      </p>

      <h3>Step 3: Customize Your Giving Page</h3>
      <p>
        Navigate to <strong>Website</strong> → <strong>Giving Page</strong> to customize:
      </p>
      <ul>
        <li>
          <strong>Page Headline</strong>: A welcoming message (e.g., "Support Our Mission" or "Give Generously")
        </li>
        <li>
          <strong>Giving Statement</strong>: 2-3 paragraphs explaining why giving matters and how funds are used. Be specific and ministry-focused.
        </li>
        <li>
          <strong>Suggested Amounts</strong>: Pre-set buttons for common donation amounts ($25, $50, $100, $250, or custom). This makes it easier for donors to choose.
        </li>
        <li>
          <strong>Allow Recurring Gifts</strong>: Toggle this on to let donors set up weekly, monthly, or annual gifts.
        </li>
        <li>
          <strong>Cover Processing Fees</strong>: Optionally, let donors add a small amount to cover Stripe's fees so 100% of their gift goes to the church.
        </li>
        <li>
          <strong>Thank You Message</strong>: What donors see immediately after giving. Include next steps, like "Check your email for a receipt."
        </li>
      </ul>

      <h3>Step 4: Test Your Giving Page</h3>
      <p>
        Before going live, test the giving experience:
      </p>
      <ol>
        <li>Toggle <strong>Test Mode</strong> in Giving Settings</li>
        <li>Visit your giving page and make a test donation</li>
        <li>Use Stripe's test card number: <code>4242 4242 4242 4242</code> with any future expiration date and any 3-digit CVV</li>
        <li>Verify that the donation appears in <strong>Giving</strong> → <strong>Donations</strong> with a "Test" label</li>
        <li>Check that you receive a test email receipt</li>
      </ol>
      <p>
        When testing looks good, toggle back to Live Mode and you're ready to accept real donations.
      </p>

      <h2>Features</h2>

      <h3>Recurring Giving</h3>
      <p>
        Recurring gifts provide steady, predictable income for your church. When donors enable recurring giving, they choose:
      </p>
      <ul>
        <li><strong>Frequency</strong>: Weekly, bi-weekly, monthly, or annually</li>
        <li><strong>Start Date</strong>: When the first charge processes</li>
        <li><strong>End Date</strong>: Optional; many donors choose "until I cancel"</li>
      </ul>
      <p>
        Donors can manage their recurring gifts from their donor portal (if enabled). They can update the amount, change payment methods, or cancel at any time. You'll see active subscriptions in <strong>Giving</strong> → <strong>Recurring Gifts</strong>.
      </p>

      <details className="my-6">
        <summary className="cursor-pointer font-semibold text-gray-900">
          Managing Failed Recurring Payments
        </summary>
        <div className="mt-2 ml-4 text-gray-700">
          <p>Sometimes recurring payments fail due to expired cards or insufficient funds. When this happens:</p>
          <ul>
            <li>Stripe automatically retries the payment a few times over two weeks</li>
            <li>Donors receive email notifications about the failed payment</li>
            <li>You'll see failed payments flagged in your Giving dashboard</li>
            <li>Consider reaching out personally to help donors update their payment info</li>
          </ul>
        </div>
      </details>

      <h3>Giving Campaigns</h3>
      <p>
        Campaigns are time-bound giving initiatives with specific goals. Examples:
      </p>
      <ul>
        <li>Building fund drive ("$500,000 by December 31st")</li>
        <li>Mission trip fundraising ("Send 20 students to Honduras")</li>
        <li>Year-end giving push ("Match last year's total")</li>
      </ul>
      <p>
        To create a campaign:
      </p>
      <ol>
        <li>Go to <strong>Giving</strong> → <strong>Campaigns</strong></li>
        <li>Click <strong>New Campaign</strong></li>
        <li>Set a name, goal amount, start/end dates, and link it to a fund</li>
        <li>Optionally add a campaign image and description</li>
      </ol>
      <p>
        Your giving page will display a progress bar showing how much has been raised. This visual indicator creates momentum and encourages participation.
      </p>

      <h3>Embedding the Giving Page</h3>
      <p>
        You can embed your Relius giving page on any website using an iframe. This is useful if:
      </p>
      <ul>
        <li>You have a separate church website but want Relius to handle giving</li>
        <li>You're promoting a campaign on a dedicated landing page</li>
        <li>You want to add giving to a blog post or newsletter</li>
      </ul>
      <p>
        To get the embed code:
      </p>
      <ol>
        <li>Go to <strong>Website</strong> → <strong>Giving Page</strong></li>
        <li>Click <strong>Get Embed Code</strong></li>
        <li>Copy the provided HTML snippet</li>
        <li>Paste it into your external website's HTML editor</li>
      </ol>
      <p>
        The embed is responsive and works on any device. Donations made through embeds still appear in your Relius dashboard.
      </p>

      <h3>Donor Receipts & Tax Statements</h3>
      <p>
        Every online donation triggers an automatic email receipt. Donors receive:
      </p>
      <ul>
        <li>Transaction ID and date</li>
        <li>Amount and fund designation</li>
        <li>Payment method (last 4 digits of card or "Bank Transfer")</li>
        <li>Your church's tax-exempt status and EIN (if configured)</li>
      </ul>
      <p>
        At year-end, use the <strong>Tax Receipts</strong> feature to generate annual statements for all donors. These can be emailed automatically or printed and mailed.
      </p>

      <h2>Best Practices</h2>
      <ul>
        <li>
          <strong>Promote ACH giving</strong>: Bank transfers have much lower fees (0.8% vs 2.9%). Educate members on the savings.
        </li>
        <li>
          <strong>Encourage recurring gifts</strong>: Monthly givers provide stable income. Consider a sermon series or campaign promoting regular giving.
        </li>
        <li>
          <strong>Keep fund options simple</strong>: 3-5 funds is ideal. Too many options create decision paralysis.
        </li>
        <li>
          <strong>Write compelling campaign descriptions</strong>: Tell stories. "Help us send 20 students to Honduras to build a school" beats "Mission trip fund."
        </li>
        <li>
          <strong>Update giving statements seasonally</strong>: Reflect current campaigns or needs (back-to-school, Christmas, Easter).
        </li>
        <li>
          <strong>Thank donors personally</strong>: Online giving is convenient, but don't let it become impersonal. Send handwritten notes for significant gifts.
        </li>
      </ul>

      <h2>Common Questions</h2>

      <p className="font-semibold mb-1">Q: What payment methods can donors use?</p>
      <p className="ml-4 mb-4">
        A: Donors can give via credit card (Visa, Mastercard, Amex, Discover), debit card, or ACH bank transfer. Digital wallets (Apple Pay, Google Pay) are also supported.
      </p>

      <p className="font-semibold mb-1">Q: Can donors give anonymously?</p>
      <p className="ml-4 mb-4">
        A: Yes! There's a checkbox on the giving form to mark the gift as anonymous. The church still sees the transaction (for accounting), but it's flagged as anonymous in reports and won't appear in public recognition.
      </p>

      <p className="font-semibold mb-1">Q: How long does it take for funds to reach our bank account?</p>
      <p className="ml-4 mb-4">
        A: Stripe deposits funds within 2 business days for credit cards and 5-7 business days for ACH transfers. You can check pending payouts in your Stripe dashboard.
      </p>

      <p className="font-semibold mb-1">Q: What if someone disputes a charge (chargeback)?</p>
      <p className="ml-4 mb-4">
        A: Chargebacks are rare but happen. Stripe notifies you, and you have a chance to respond with documentation (email receipts, transaction records). Relius provides tools to pull this information quickly.
      </p>

      <p className="font-semibold mb-1">Q: Can we accept cryptocurrency or stock donations?</p>
      <p className="ml-4 mb-4">
        A: Not directly through Relius yet, but it's on the roadmap. For now, you'd handle crypto or stock gifts separately and manually record them in Relius.
      </p>

      <h2>Related Topics</h2>
      <ul>
        <li>
          <Link href="/resources/docs/website" className="text-blue-600 hover:underline">
            Public Website Overview
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/giving/donation-tracking" className="text-blue-600 hover:underline">
            Donation Tracking
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/giving/campaigns" className="text-blue-600 hover:underline">
            Giving Campaigns
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/giving/tax-receipts" className="text-blue-600 hover:underline">
            Tax Receipts & Year-End Statements
          </Link>
        </li>
        <li>
          <Link href="/resources/docs/administration/integrations" className="text-blue-600 hover:underline">
            Integrations (Stripe)
          </Link>
        </li>
      </ul>
    </div>
  );
}
