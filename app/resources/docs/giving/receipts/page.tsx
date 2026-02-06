export default function TaxReceiptsPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Tax Receipts</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Generate IRS-compliant tax receipts instantly for individual donations or send year-end giving statements to your entire congregation with one click.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Proper documentation honors both the giver and the gift. When someone contributes to your church, they deserve timely, accurate, and IRS-compliant receipts that help them claim charitable deductions. Relius makes receipting effortless—from instant email confirmations for online gifts to comprehensive year-end statements that detail every donation. No more scrambling in January to compile records or hand-addressing hundreds of envelopes.
      </p>
      <p>
        The IRS has specific requirements for charitable contribution receipts, and Relius handles the details automatically. Every receipt includes your church's legal name and EIN, the donation amount and date, a statement of goods/services provided (or lack thereof), and proper language for non-deductible portions. Templates are customizable with your church logo and branding while maintaining legal compliance.
      </p>
      <p>
        Whether you're sending an immediate thank-you receipt for a $25 online gift or generating 500 year-end statements in February, the process is simple and reliable. Donors get the documentation they need for tax time, you maintain an audit trail for financial oversight, and everyone experiences the peace of mind that comes from doing things right.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Tax Receipt</strong>: IRS-compliant documentation of a charitable donation showing date, amount, and donor/church details</li>
        <li><strong>Year-End Statement</strong>: Comprehensive report of all donations from a donor in a calendar year</li>
        <li><strong>Quid Pro Quo Donation</strong>: A gift where the donor received something of value in return (like a dinner); requires special disclosure</li>
        <li><strong>EIN (Employer Identification Number)</strong>: Your church's federal tax ID, required on all receipts</li>
        <li><strong>Contemporaneous Receipt</strong>: Documentation provided at the time of the gift or shortly after (IRS prefers same tax year)</li>
        <li><strong>Acknowledgment Threshold</strong>: Donations of $250+ require written acknowledgment; $75+ quid pro quo requires disclosure</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Configure Receipt Settings</h3>
      <p>
        Navigate to <strong>Settings → Giving → Receipts</strong> and confirm your church's legal name, EIN, and mailing address are correct—these appear on every receipt. Upload your church logo and choose whether to include personalized messages or standard language.
      </p>

      <h3>Step 2: Set Automatic Receipts</h3>
      <p>
        Enable automatic email receipts for online donations so donors receive confirmation within seconds of giving. You can also configure automatic receipts for manually entered donations above a certain threshold (like $100+).
      </p>

      <h3>Step 3: Generate Receipts as Needed</h3>
      <p>
        For individual donations, open any donation record and click <strong>Send Receipt</strong> to email or print. For year-end statements, go to <strong>Giving → Year-End Statements</strong>, select the tax year, and click <strong>Generate for All Donors</strong>. Relius creates personalized PDFs and can email them in bulk or prepare them for printing.
      </p>

      <h2>Features</h2>

      <h3>Generating Individual Receipts</h3>
      <p>
        Every donation in Relius can generate an instant receipt. When viewing a donation record, click <strong>Send Receipt</strong> to:
      </p>
      <ul>
        <li><strong>Email immediately</strong> – Send to the donor's email address on file with one click</li>
        <li><strong>Download PDF</strong> – Save or print for hand delivery or mailing</li>
        <li><strong>Preview first</strong> – Review the receipt before sending to ensure accuracy</li>
      </ul>
      <p>
        Each receipt includes all required IRS elements:
      </p>
      <ul>
        <li>Church legal name and EIN</li>
        <li>Donor name and mailing address</li>
        <li>Donation date and amount</li>
        <li>Payment method (cash, check #, credit card)</li>
        <li>Fund designation</li>
        <li>Required disclosure: "No goods or services were provided in exchange for this contribution" (or details if applicable)</li>
        <li>Tax-deductibility statement</li>
      </ul>
      <p>
        <em>Example: Mrs. Rodriguez makes a $500 online donation to your Building Fund on December 28th. Within 30 seconds, she receives an email receipt with a PDF attachment showing all details. She files this with her tax documents, and you've fulfilled your legal obligation.</em>
      </p>

      <h3>Year-End Giving Statements</h3>
      <p>
        In late January or early February, most donors need comprehensive statements showing all their donations for tax filing. Relius makes this a one-click process:
      </p>
      <ol>
        <li>Navigate to <strong>Giving → Year-End Statements</strong></li>
        <li>Select the tax year (typically the previous calendar year)</li>
        <li>Choose delivery method: email, download PDFs, or export mailing labels</li>
        <li>Click <strong>Generate Statements</strong></li>
      </ol>
      <p>
        Relius creates a personalized PDF for each donor showing:
      </p>
      <ul>
        <li>Summary: total giving for the year</li>
        <li>Itemized list: every donation with date, amount, and fund</li>
        <li>Payment method breakdown: cash, check, online totals</li>
        <li>Fund allocation: how much went to General, Missions, Building, etc.</li>
        <li>IRS compliance language</li>
      </ul>
      <p>
        Email statements to hundreds of donors simultaneously, or download PDFs for printing and mailing to those without email. Track who has received statements and resend to anyone who requests a duplicate.
      </p>

      <h3>Customizing Receipt Templates</h3>
      <p>
        Make receipts reflect your church's personality while staying IRS-compliant:
      </p>
      <ul>
        <li><strong>Logo and colors</strong> – Upload your church logo and set brand colors for headers</li>
        <li><strong>Thank-you message</strong> – Add a personal note: "Thank you for your faithful generosity! Your gift makes ministry possible."</li>
        <li><strong>Signature line</strong> – Include pastor or treasurer signature (digital or scanned)</li>
        <li><strong>Ministry impact note</strong> – Brief mention of what donations accomplished: "This year, your giving supported 12 mission trips, fed 500 families, and launched 3 new small groups."</li>
        <li><strong>Contact information</strong> – Phone and email for questions about receipts or giving records</li>
      </ul>
      <p>
        Relius maintains required legal language automatically, so you can't accidentally remove compliance elements. Customize the wrapper, not the substance.
      </p>

      <h3>IRS Compliance Tips</h3>
      <p>
        Stay on the right side of tax law with these guidelines:
      </p>
      <ul>
        <li><strong>$250+ threshold</strong> – The IRS requires written acknowledgment for any single donation of $250 or more. Relius flags these automatically.</li>
        <li><strong>Contemporaneous requirement</strong> – Receipts should be provided by the earlier of: when the donor files their tax return, or the due date of the return. Aim for within 30 days of the gift.</li>
        <li><strong>Quid pro quo disclosure</strong> – If a donor gave $100 but received a $30 dinner in return, the receipt must state: "You received goods/services valued at $30. Your deductible contribution is $70." Relius helps calculate this.</li>
        <li><strong>Non-cash donations</strong> – For goods/services donated (like a car or equipment), your church should acknowledge receipt but NOT assign a dollar value. The donor is responsible for determining fair market value and must file IRS Form 8283 for items over $5,000.</li>
        <li><strong>Anonymous gifts</strong> – Can't be receipted since there's no identified donor for IRS purposes</li>
        <li><strong>Credit card/online gift timing</strong> – The donation date is when the charge is processed, not when funds hit your bank account</li>
      </ul>
      <p>
        <strong>Disclaimer:</strong> Relius provides tools for compliant receipting, but consult a tax professional or CPA for specific guidance on complex situations. IRS Publication 1771 offers detailed rules for charitable contributions.
      </p>

      <details>
        <summary>Advanced Features</summary>
        
        <h4>Quarterly Giving Statements</h4>
        <p>
          Some churches send quarterly statements (not required, but helpful for donor awareness). Generate statements for Q1, Q2, Q3, and Q4 to show donors their year-to-date giving and encourage consistency. Include gentle reminders about year-end giving opportunities or campaign progress.
        </p>

        <h4>Bulk Receipt Regeneration</h4>
        <p>
          If you need to resend receipts for a specific period (maybe a donor lost theirs, or you corrected an error), filter donations by date range or donor and bulk-regenerate receipts. Perfect for handling requests without manual recreation.
        </p>

        <h4>Multi-Year Statements</h4>
        <p>
          When a donor requests their complete giving history (maybe for estate planning or internal tracking), generate multi-year statements showing 3, 5, or 10 years of donations. Useful for major donors reviewing their lifetime partnership with your church.
        </p>

        <h4>Custom Receipt Fields</h4>
        <p>
          Add optional custom fields to receipts for special designations. If your church tracks memorials or honorariums, include "In memory of [Name]" or "In honor of [Person]" directly on the receipt. Helps donors remember the context of their gift.
        </p>

        <h4>Receipt Audit Trail</h4>
        <p>
          Every time a receipt is generated or sent, Relius logs it: who requested it, when it was sent, to which email address. This audit trail protects your church if questions arise about whether receipts were provided. Essential for compliance and donor disputes.
        </p>

        <h4>Split Gift Receipting</h4>
        <p>
          When a single donation is split across multiple funds (like $150 to General and $50 to Missions), the receipt itemizes each designation clearly. Donors see exactly where their money went, and fund accounting remains accurate.
        </p>

        <h4>Family vs. Individual Receipts</h4>
        <p>
          For married couples or families, choose whether to send one combined receipt or separate receipts for each spouse. Tax situations vary—some file jointly and want one statement, others file separately and need individual documentation. Let donors specify their preference in their profile.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Send receipts promptly</strong> – Automatic email receipts for online gifts; manual gifts should be receipted within 2 weeks</li>
        <li><strong>Year-end statements by January 31</strong> – Most donors file taxes in February-March; beat the rush with early delivery</li>
        <li><strong>Double-check EIN accuracy</strong> – An incorrect tax ID invalidates receipts; verify once per year</li>
        <li><strong>Include thank-you language</strong> – Receipts are legal documents, but they're also stewardship opportunities; express gratitude</li>
        <li><strong>Offer multiple delivery methods</strong> – Email for tech-savvy donors, printed/mailed for those who prefer paper</li>
        <li><strong>Archive digital copies</strong> – Keep PDFs of all year-end statements for at least 7 years in case of audits or requests</li>
        <li><strong>Train staff on IRS rules</strong> – Anyone handling receipts should understand quid pro quo, thresholds, and non-cash donation policies</li>
        <li><strong>Proofread before bulk sending</strong> – Generate a test batch for a few donors first; catching errors before 500 emails go out saves massive headaches</li>
        <li><strong>Respond quickly to donor questions</strong> – If someone disputes their statement, investigate immediately and correct errors transparently</li>
      </ul>

      <h2>Common Questions</h2>
      
      <p><strong>Q: What if a donor says their year-end statement is wrong?</strong></p>
      <p>A: Review their giving history in Relius immediately. If you find an error (missed entry, wrong amount), correct it, regenerate the receipt, and send a corrected statement with an apology. If the record is accurate, walk them through each donation to reconcile discrepancies. Keep detailed notes of the conversation.</p>

      <p><strong>Q: Do we need to send receipts for every donation, even $5 cash gifts?</strong></p>
      <p>A: The IRS doesn't require written acknowledgment for gifts under $250, but it's good practice to receipt everything possible. Set automatic receipts for online gifts of any amount. For small cash donations (under $20), a year-end statement suffices.</p>

      <p><strong>Q: What about donations given anonymously?</strong></p>
      <p>A: Anonymous donations cannot be receipted for tax purposes because there's no identified donor. Record these gifts in your system under "Anonymous" for accounting, but no tax documentation can be provided. Donors choosing anonymity forfeit the tax deduction.</p>

      <p><strong>Q: How do we handle stock or cryptocurrency donations on receipts?</strong></p>
      <p>A: Receipt the fair market value on the date of transfer (when the stock entered your account, not when sold). Include details like "10 shares of XYZ stock, valued at $1,500 on transfer date [date]." Donors should consult their tax advisor; churches acknowledge receipt but don't provide tax advice on non-cash gifts.</p>

      <p><strong>Q: Can we include ministry highlights or stories in year-end statements?</strong></p>
      <p>A: Absolutely! A brief paragraph or sidebar showing ministry impact ("Because of your generosity, we fed 500 families this year...") makes receipts more meaningful. Just ensure IRS-required elements remain prominent and clear.</p>

      <p><strong>Q: What if someone requests a receipt for a donation from 3 years ago?</strong></p>
      <p>A: As long as the donation is in your system, you can regenerate a receipt anytime. Maintain giving records for at least 7 years to support such requests. If the donation isn't in your system, you can only receipt what you can verify.</p>

      <p><strong>Q: Should receipts show check numbers?</strong></p>
      <p>A: Not required by the IRS, but including check numbers helps donors reconcile their bank statements with donations. It's a helpful detail that adds credibility and clarity, especially for donors who give multiple checks throughout the year.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/giving/tracking">Donation Tracking</a> – Recording donations that will be receipted</li>
        <li><a href="/resources/docs/giving/donors">Donor Management</a> – Managing donor contact info for receipt delivery</li>
        <li><a href="/resources/docs/giving/online-setup">Online Giving Setup</a> – Automatic receipting for online donations</li>
        <li><a href="/resources/docs/giving/campaigns">Campaigns</a> – Receipting campaign-specific gifts</li>
        <li><a href="/resources/docs/communications/email">Email Campaigns</a> – Sending bulk receipt emails</li>
        <li><a href="/resources/docs/administration/church-settings">Church Settings</a> – Configuring EIN and legal name</li>
      </ul>
    </div>
  );
}
