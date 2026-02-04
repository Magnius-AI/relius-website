import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Relius",
  description: "Learn how Relius collects, uses, and protects your data. Our privacy policy explains our commitment to safeguarding your church's information.",
  alternates: {
    canonical: "https://relius.ai/privacy/",
  },
  openGraph: {
    title: "Privacy Policy | Relius",
    description: "How Relius collects, uses, and protects your church's data.",
    url: "https://relius.ai/privacy/",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Relius",
    description: "How Relius collects, uses, and protects your church's data.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500">Last updated: January 12, 2026</p>
        </div>

        {/* Table of Contents */}
        <nav className="mb-12 p-6 bg-white rounded-xl border border-slate-200">
          <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">Contents</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#introduction" className="text-primary-600 hover:text-primary-700">1. Introduction</a></li>
            <li><a href="#information-we-collect" className="text-primary-600 hover:text-primary-700">2. Information We Collect</a></li>
            <li><a href="#how-we-use" className="text-primary-600 hover:text-primary-700">3. How We Use Your Information</a></li>
            <li><a href="#data-sharing" className="text-primary-600 hover:text-primary-700">4. Data Sharing and Third Parties</a></li>
            <li><a href="#data-security" className="text-primary-600 hover:text-primary-700">5. Data Security</a></li>
            <li><a href="#data-retention" className="text-primary-600 hover:text-primary-700">6. Data Retention</a></li>
            <li><a href="#your-rights" className="text-primary-600 hover:text-primary-700">7. Your Rights</a></li>
            <li><a href="#ccpa" className="text-primary-600 hover:text-primary-700">8. California Privacy Rights (CCPA)</a></li>
            <li><a href="#children" className="text-primary-600 hover:text-primary-700">9. Children&apos;s Privacy</a></li>
            <li><a href="#cookies" className="text-primary-600 hover:text-primary-700">10. Cookies and Tracking</a></li>
            <li><a href="#third-party-integrations" className="text-primary-600 hover:text-primary-700">11. Third-Party Integrations</a></li>
            <li><a href="#changes" className="text-primary-600 hover:text-primary-700">12. Changes to This Policy</a></li>
            <li><a href="#contact" className="text-primary-600 hover:text-primary-700">13. Contact Us</a></li>
          </ul>
        </nav>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Relius (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our church management platform and related services (the &quot;Service&quot;).
            </p>
            <p className="text-slate-600 leading-relaxed">
              By using Relius, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access or use the Service.
            </p>
          </section>

          <section id="information-we-collect" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Account Information</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              When you create an account, we collect:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Name and email address</li>
              <li>Church or organization name</li>
              <li>Phone number (optional)</li>
              <li>Billing information and payment details</li>
              <li>Password (stored securely using industry-standard encryption)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Church Member Data</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              As a church management platform, we store data that your church uploads or enters about your members, including:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Names, contact information, and family relationships</li>
              <li>Attendance records and check-in history</li>
              <li>Giving and donation records</li>
              <li>Group memberships and volunteer assignments</li>
              <li>Notes, prayer requests, and pastoral care records</li>
              <li>Any other information your church chooses to store</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              <strong>Important:</strong> Your church owns this data. We process it on your behalf as a data processor. You are responsible for ensuring you have appropriate consent from your members to store and use their information.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Usage Information</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              We automatically collect certain information when you use the Service:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Device information (browser type, operating system)</li>
              <li>IP address and general location</li>
              <li>Pages visited and features used</li>
              <li>Time spent on the platform</li>
              <li>Error logs and performance data</li>
            </ul>
          </section>

          <section id="how-we-use" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Provide, maintain, and improve the Service</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative messages, updates, and security alerts</li>
              <li>Respond to your comments, questions, and support requests</li>
              <li>Monitor and analyze usage patterns to improve user experience</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section id="data-sharing" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Sharing and Third Parties</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Service Providers</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              We work with trusted third-party service providers who assist us in operating the Service:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li><strong>Stripe:</strong> Processes all payments securely. See <a href="https://stripe.com/privacy" className="text-primary-600 hover:text-primary-700" target="_blank" rel="noopener noreferrer">Stripe&apos;s Privacy Policy</a></li>
              <li><strong>Google:</strong> Provides optional Google Drive integration for document linking (see <a href="#third-party-integrations" className="text-primary-600 hover:text-primary-700">Third-Party Integrations</a> section)</li>
              <li><strong>Cloud Infrastructure:</strong> Hosts and stores your data securely</li>
              <li><strong>Analytics Providers:</strong> Help us understand how the Service is used</li>
              <li><strong>Email Services:</strong> Deliver transactional and administrative emails</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Legal Requirements</h3>
            <p className="text-slate-600 leading-relaxed">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Business Transfers</h3>
            <p className="text-slate-600 leading-relaxed">
              If Relius is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will provide notice before your information becomes subject to a different privacy policy.
            </p>
          </section>

          <section id="data-security" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>All data is encrypted in transit using TLS/SSL</li>
              <li>Data at rest is encrypted using AES-256 encryption</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication requirements</li>
              <li>Regular backups with secure storage</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              While we strive to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section id="data-retention" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We retain your information for as long as your account is active or as needed to provide the Service. After account termination:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>You may request a full export of your data before deletion</li>
              <li>Account data is deleted within 30 days of termination</li>
              <li>Backup copies may be retained for up to 90 days</li>
              <li>Some information may be retained longer for legal or legitimate business purposes</li>
            </ul>
          </section>

          <section id="your-rights" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Export:</strong> Request your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain processing of your information</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section id="ccpa" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. California Privacy Rights (CCPA)</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Right to know what personal information is collected, used, shared, or sold</li>
              <li>Right to delete personal information held by businesses</li>
              <li>Right to opt-out of the sale of personal information (we do not sell your data)</li>
              <li>Right to non-discrimination for exercising your CCPA rights</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              To make a CCPA request, please contact us at the information provided below.
            </p>
          </section>

          <section id="children" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information without parental consent, please contact us immediately.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Churches may store information about minors in their congregation as part of their membership records. Churches are responsible for obtaining appropriate parental consent for such data collection.
            </p>
          </section>

          <section id="cookies" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Cookies and Tracking</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Keep you logged in to your account</li>
              <li>Remember your preferences and settings</li>
              <li>Understand how you use the Service</li>
              <li>Improve and optimize the Service</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of the Service.
            </p>
          </section>

          <section id="third-party-integrations" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Third-Party Integrations</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Relius offers optional integrations with third-party services to enhance functionality. When you choose to connect these services, additional data may be accessed or stored.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Google Drive Integration</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our Repository feature allows you to connect your Google Drive account to browse and link documents to your church&apos;s shared repository. When you enable this integration:
            </p>

            <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">Data We Access</h4>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li><strong>Google Account Information:</strong> Your Google email address and basic profile information (name) to identify your connected account</li>
              <li><strong>Google Drive Files (Read-Only):</strong> We access your Google Drive to display file names, types, sizes, thumbnails, and folder structure so you can browse and select documents to link</li>
            </ul>

            <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">How We Use This Data</h4>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Display your connected Google account email for verification purposes</li>
              <li>Allow you to browse your Google Drive files within Relius</li>
              <li>Store links and metadata (file name, type, size) of documents you choose to add to your church repository</li>
              <li>Your actual files remain stored in Google Drive—we do not download or copy file contents</li>
            </ul>

            <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">Data Storage and Security</h4>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>OAuth access tokens are encrypted at rest using AES-256 encryption</li>
              <li>Tokens are stored per-user and can only be used by the authenticated user</li>
              <li>We request only read-only access—we cannot modify or delete your Google Drive files</li>
            </ul>

            <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">Revoking Access</h4>
            <p className="text-slate-600 leading-relaxed mb-4">
              You can disconnect your Google account at any time through the Repository settings in Relius. When you disconnect:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Your OAuth tokens are immediately invalidated and removed from our systems</li>
              <li>Linked document references remain in your repository (as they are now part of your church&apos;s data), but we can no longer access the files in your Google Drive</li>
              <li>You can also revoke access directly through your <a href="https://myaccount.google.com/permissions" className="text-primary-600 hover:text-primary-700" target="_blank" rel="noopener noreferrer">Google Account permissions settings</a></li>
            </ul>

            <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">Google&apos;s Privacy Policy</h4>
            <p className="text-slate-600 leading-relaxed">
              Your use of Google Drive is also subject to <a href="https://policies.google.com/privacy" className="text-primary-600 hover:text-primary-700" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>. We encourage you to review their policies for information about how Google handles your data.
            </p>
          </section>

          <section id="changes" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Changes to This Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. For significant changes, we will provide additional notice via email or through the Service. Your continued use of the Service after any changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section id="contact" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <p className="text-slate-600 mb-2"><strong>Email:</strong> privacy@relius.ai</p>
              <p className="text-slate-600 mb-2"><strong>Website:</strong> <a href="/contact/" className="text-primary-600 hover:text-primary-700">relius.ai/contact</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
