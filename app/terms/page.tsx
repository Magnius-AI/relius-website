import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Relius",
  description: "Read the terms and conditions for using Relius church management platform. Understand your rights and responsibilities as a user.",
  alternates: {
    canonical: "https://relius.ai/terms/",
  },
  openGraph: {
    title: "Terms of Service | Relius",
    description: "Terms and conditions for using the Relius church management platform.",
    url: "https://relius.ai/terms/",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Relius",
    description: "Terms and conditions for using the Relius church management platform.",
  },
};

export default function TermsPage() {
  return (
    <div className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-500">Last updated: December 21, 2025</p>
        </div>

        {/* Table of Contents */}
        <nav className="mb-12 p-6 bg-white rounded-xl border border-slate-200">
          <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">Contents</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#acceptance" className="text-primary-600 hover:text-primary-700">1. Acceptance of Terms</a></li>
            <li><a href="#description" className="text-primary-600 hover:text-primary-700">2. Description of Service</a></li>
            <li><a href="#accounts" className="text-primary-600 hover:text-primary-700">3. Account Registration</a></li>
            <li><a href="#acceptable-use" className="text-primary-600 hover:text-primary-700">4. Acceptable Use</a></li>
            <li><a href="#data-ownership" className="text-primary-600 hover:text-primary-700">5. Data Ownership</a></li>
            <li><a href="#payment" className="text-primary-600 hover:text-primary-700">6. Payment Terms</a></li>
            <li><a href="#intellectual-property" className="text-primary-600 hover:text-primary-700">7. Intellectual Property</a></li>
            <li><a href="#availability" className="text-primary-600 hover:text-primary-700">8. Service Availability</a></li>
            <li><a href="#disclaimers" className="text-primary-600 hover:text-primary-700">9. Disclaimers</a></li>
            <li><a href="#limitation" className="text-primary-600 hover:text-primary-700">10. Limitation of Liability</a></li>
            <li><a href="#indemnification" className="text-primary-600 hover:text-primary-700">11. Indemnification</a></li>
            <li><a href="#termination" className="text-primary-600 hover:text-primary-700">12. Termination</a></li>
            <li><a href="#governing-law" className="text-primary-600 hover:text-primary-700">13. Governing Law</a></li>
            <li><a href="#changes" className="text-primary-600 hover:text-primary-700">14. Changes to Terms</a></li>
            <li><a href="#contact" className="text-primary-600 hover:text-primary-700">15. Contact Us</a></li>
          </ul>
        </nav>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <section id="acceptance" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Welcome to Relius. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Relius church management platform, website, and related services (collectively, the &quot;Service&quot;) provided by Relius (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              By accessing or using the Service, you agree to be bound by these Terms. If you are using the Service on behalf of a church, organization, or other entity, you represent that you have the authority to bind that entity to these Terms.
            </p>
            <p className="text-slate-600 leading-relaxed">
              If you do not agree to these Terms, you may not access or use the Service.
            </p>
          </section>

          <section id="description" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Relius is a cloud-based church management platform that helps churches manage their operations, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Member and visitor management</li>
              <li>Attendance tracking and check-in</li>
              <li>Online giving and donation processing</li>
              <li>Event and calendar management</li>
              <li>Group and ministry management</li>
              <li>Communication tools</li>
              <li>Volunteer coordination</li>
              <li>Reporting and analytics</li>
              <li>AI-powered features and automation</li>
            </ul>
          </section>

          <section id="accounts" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Account Registration</h2>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Account Creation</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              To use the Service, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Account Responsibility</h3>
            <p className="text-slate-600 leading-relaxed">
              You are responsible for all activities that occur under your account. We are not liable for any loss or damage arising from unauthorized use of your account.
            </p>
          </section>

          <section id="acceptable-use" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Acceptable Use</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree NOT to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others, including privacy and intellectual property rights</li>
              <li>Upload or transmit viruses, malware, or other harmful code</li>
              <li>Attempt to gain unauthorized access to the Service or other systems</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Use the Service to send spam or unsolicited communications</li>
              <li>Scrape, harvest, or collect data from the Service without authorization</li>
              <li>Use the Service for any illegal, fraudulent, or harmful purpose</li>
              <li>Resell, sublicense, or redistribute the Service without authorization</li>
              <li>Reverse engineer, decompile, or disassemble the Service</li>
            </ul>
          </section>

          <section id="data-ownership" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Ownership</h2>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Your Data</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>You retain full ownership of all data you upload, enter, or create using the Service</strong> (&quot;Your Data&quot;). This includes member information, giving records, attendance data, and any other content you provide.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">License to Provide Service</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              By using the Service, you grant us a limited license to use, process, and store Your Data solely to provide and improve the Service. We will not use Your Data for any other purpose without your consent.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Data Export</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              You may export Your Data at any time through the Service. Upon termination of your account, you may request a full export of Your Data before deletion.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Your Responsibilities</h3>
            <p className="text-slate-600 leading-relaxed">
              You are responsible for ensuring you have the right to collect, store, and use any personal data you enter into the Service. This includes obtaining appropriate consent from individuals whose data you store.
            </p>
          </section>

          <section id="payment" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Payment Terms</h2>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Subscription Plans</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Service is offered on a subscription basis with monthly or annual billing options. Current pricing and plan details are available on our website.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Payment Processing</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              All payments are processed securely through Stripe. By providing payment information, you authorize us to charge your payment method for the applicable subscription fees.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Billing Cycle</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Subscriptions automatically renew at the end of each billing period unless cancelled. You may cancel your subscription at any time, and you will continue to have access until the end of your current billing period.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Refunds</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              We offer refunds on a case-by-case basis. If you are unsatisfied with the Service, please contact us to discuss your situation.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Price Changes</h3>
            <p className="text-slate-600 leading-relaxed">
              We may change our prices with at least 30 days&apos; notice. Price changes will take effect at the start of your next billing period.
            </p>
          </section>

          <section id="intellectual-property" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Service, including its original content, features, and functionality, is owned by Relius and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The Relius name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Relius. You may not use such marks without our prior written permission.
            </p>
          </section>

          <section id="availability" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Service Availability</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We strive to maintain high availability of the Service. However, we do not guarantee that the Service will be uninterrupted, timely, secure, or error-free.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may temporarily suspend the Service for:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Scheduled maintenance (with advance notice when possible)</li>
              <li>Emergency repairs or security updates</li>
              <li>Circumstances beyond our reasonable control</li>
            </ul>
          </section>

          <section id="disclaimers" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Disclaimers</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We do not warrant that the Service will meet your requirements, be available at all times, or be free of errors or harmful components.
            </p>
          </section>

          <section id="limitation" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL RELIUS, ITS DIRECTORS, EMPLOYEES, PARTNERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
            </p>
            <p className="text-slate-600 leading-relaxed">
              OUR TOTAL LIABILITY FOR ANY CLAIMS UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section id="indemnification" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Indemnification</h2>
            <p className="text-slate-600 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Relius and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or related to your use of the Service, violation of these Terms, or infringement of any rights of another party.
            </p>
          </section>

          <section id="termination" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Termination</h2>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">By You</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              You may terminate your account at any time by cancelling your subscription through your account settings or by contacting us. You will retain access until the end of your current billing period.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">By Us</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may suspend or terminate your access to the Service immediately, without prior notice or liability, if you breach these Terms or engage in conduct that we determine is harmful to the Service or other users.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Effect of Termination</h3>
            <p className="text-slate-600 leading-relaxed">
              Upon termination, your right to use the Service will immediately cease. You may request an export of Your Data within 30 days of termination. After this period, Your Data will be deleted.
            </p>
          </section>

          <section id="governing-law" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Delaware, without regard to its conflict of law provisions.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Any disputes arising under or in connection with these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in any court of competent jurisdiction.
            </p>
          </section>

          <section id="changes" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. If we make material changes, we will provide at least 30 days&apos; notice via email or through the Service before the changes take effect.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Your continued use of the Service after any changes indicates your acceptance of the new Terms. If you do not agree to the changes, you must stop using the Service.
            </p>
          </section>

          <section id="contact" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <p className="text-slate-600 mb-2"><strong>Email:</strong> legal@relius.ai</p>
              <p className="text-slate-600 mb-2"><strong>Website:</strong> <a href="/contact/" className="text-primary-600 hover:text-primary-700">relius.ai/contact</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
