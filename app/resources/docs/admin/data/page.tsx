export default function DataManagementPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Data Management</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Import data from previous systems, export reports for analysis, automate backups, clean up duplicate records, and ensure GDPR and privacy compliance—all from one comprehensive data management hub.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Data Management gives you complete control over the information your church stewards in Relius. Whether you're migrating years of member records from Planning Center, exporting giving data for your accountant, creating automated weekly backups, or responding to a member's GDPR data access request, this is your command center for all data operations.
      </p>
      <p>
        Your church's data is precious: member contact details, family relationships, giving histories, pastoral care notes, event attendance, volunteer schedules. Data Management ensures you can safely move this information into Relius, regularly back it up, clean it when needed, and handle privacy obligations responsibly. It also provides tools for compliance with regulations like GDPR (European data protection) and CCPA (California privacy law) so you can honor member rights regarding their personal information.
      </p>
      <p>
        Most churches interact with Data Management during three key moments: initial migration (importing historical data), ongoing operations (scheduled exports and backups), and incident response (recovering lost data, fulfilling privacy requests, cleaning up mistakes). The interface organizes these operations logically, with import/export tools, backup configuration, data cleanup utilities, and privacy compliance workflows all accessible from one centralized location.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Import</strong>: Bulk upload of records (members, donations, events) from CSV files or external systems</li>
        <li><strong>Export</strong>: Download Relius data in CSV, Excel, or PDF formats for analysis or archival</li>
        <li><strong>Backup</strong>: Complete snapshot of your Relius database, stored securely for disaster recovery</li>
        <li><strong>Data Cleanup</strong>: Tools for finding and fixing duplicate records, invalid data, or orphaned relationships</li>
        <li><strong>GDPR Compliance</strong>: European data protection regulations requiring consent tracking, data access, and right to deletion</li>
        <li><strong>Data Retention Policy</strong>: Rules governing how long different types of data are kept before automatic deletion</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Access Data Management</h3>
      <p>
        From your dashboard, navigate to <strong>Administration → Data Management</strong>. You'll see four main sections: Import/Export, Backups, Data Cleanup, and Privacy Compliance. Start with the section most relevant to your immediate needs.
      </p>

      <h3>Step 2: Configure Automated Backups</h3>
      <p>
        Before doing anything else, set up automated backups. Click <strong>Backups → Configure Schedule</strong>, enable daily backups, choose a time when system usage is low (like 2 AM), and set retention to 30 days. This ensures you always have recent snapshots to restore from if something goes wrong.
      </p>

      <h3>Step 3: Import Your Historical Data (If Migrating)</h3>
      <p>
        If you're moving to Relius from another church management system, export your data from the old platform as CSV files (members, giving, groups, events). Then use <strong>Import/Export → Import</strong> to upload each file. Map fields from your old system to Relius fields, preview the import to catch errors, and execute. Most migrations complete in under an hour.
      </p>

      <h3>Step 4: Review Privacy Compliance Settings</h3>
      <p>
        Visit <strong>Privacy Compliance</strong> to understand your obligations. If you have members in Europe or California, enable GDPR/CCPA features including consent tracking, data access request workflows, and right-to-deletion tools. Configure retention policies that automatically delete old data according to your church's policies.
      </p>

      <h2>Features</h2>

      <h3>Import/Export Data</h3>
      <p>
        Import and export tools let you bulk-move data into and out of Relius. Imports handle initial migration plus ongoing bulk updates (like importing a list of new members from an event registration). Exports generate reports, create backups, or prepare data for analysis in Excel or other tools.
      </p>

      <h4>Importing Data</h4>
      <p>
        Relius supports CSV imports for members, families, donations, groups, events, volunteers, and custom fields. The import wizard guides you through:
      </p>
      <ol>
        <li><strong>Upload file:</strong> Select your CSV file (ensure UTF-8 encoding for special characters)</li>
        <li><strong>Map fields:</strong> Match columns from your file to Relius fields (e.g., "First_Name" → "First Name," "Gift_Date" → "Donation Date")</li>
        <li><strong>Configure options:</strong> Choose whether to update existing records or only create new ones, how to handle duplicates, and validation strictness</li>
        <li><strong>Preview:</strong> See the first 10 rows and any validation errors before committing</li>
        <li><strong>Execute:</strong> Import all records, with real-time progress tracking</li>
        <li><strong>Review:</strong> Check import summary showing records created, updated, skipped, and errors</li>
      </ol>
      <p>
        <em>Example: Hope Fellowship exports 2,500 member records from ChurchTrac as CSV, including names, emails, phone numbers, addresses, and birthdays. They upload to Relius's import tool, map all fields in 3 minutes, preview to verify accuracy, then import. 2,480 members are created successfully, 20 are flagged for review due to invalid email addresses.</em>
      </p>

      <h4>Exporting Data</h4>
      <p>
        Export any Relius data to CSV, Excel, or PDF. Create custom export templates that include only the fields you need, filter records by criteria (e.g., "members added in the last 6 months"), and schedule recurring exports that automatically email reports to your team.
      </p>
      <p>
        Common export use cases:
      </p>
      <ul>
        <li><strong>Accounting reports:</strong> Export donations by fund for monthly reconciliation</li>
        <li><strong>Mail merges:</strong> Export member addresses and names for sending physical mailers</li>
        <li><strong>Analysis:</strong> Export event attendance data to analyze trends in Excel or Google Sheets</li>
        <li><strong>Compliance:</strong> Export specific member data to fulfill a GDPR data access request</li>
        <li><strong>Archival:</strong> Export all data annually for long-term record keeping</li>
      </ul>

      <h3>Backup and Restore</h3>
      <p>
        Backups are complete snapshots of your Relius database: every member, every donation, every group, every event, every setting. If something catastrophic happens—accidental mass deletion, corrupted data, security breach—you restore from the most recent backup to recover.
      </p>
      <p>
        <strong>Backup configuration:</strong>
      </p>
      <ul>
        <li><strong>Schedule:</strong> Daily, weekly, or manual on-demand backups</li>
        <li><strong>Retention:</strong> How many backups to keep (e.g., 30 daily backups = 1 month of history)</li>
        <li><strong>Storage:</strong> Backups stored securely in encrypted cloud storage, accessible only to admins</li>
        <li><strong>Notification:</strong> Email confirmation when backups complete successfully or fail</li>
      </ul>
      <p>
        <strong>Restore process:</strong>
      </p>
      <ol>
        <li>Navigate to <strong>Backups → Restore</strong></li>
        <li>Select the backup date you want to restore to (typically the most recent)</li>
        <li>Preview what will be restored and what current data will be overwritten</li>
        <li>Confirm restore—this replaces current data with backup data (irreversible without another backup)</li>
        <li>Wait for restore to complete (typically 5-30 minutes depending on database size)</li>
        <li>Verify restored data is correct</li>
      </ol>
      <p>
        <em>Caution: Restoring a backup overwrites all current data with the backup's data. Any information added or changed since the backup date is lost. Only restore when you're certain current data is corrupted or lost.</em>
      </p>

      <h3>Data Cleanup Tools</h3>
      <p>
        Over time, databases accumulate messiness: duplicate member profiles (John Smith and Johnathan Smith are the same person), orphaned records (group members whose group was deleted), invalid data (phone numbers with letters), and stale information (families who moved away years ago). Data cleanup tools help you find and fix these issues.
      </p>

      <h4>Duplicate Detection and Merging</h4>
      <p>
        Relius scans your database for potential duplicates based on name similarity, matching email addresses, or identical phone numbers. Review suggested duplicates, confirm they're the same person, and merge them into a single record. Merging preserves all associated data: both profiles' giving histories combine, group memberships consolidate, and notes merge chronologically.
      </p>
      <p>
        <em>Example: Duplicate detection flags "Sarah Johnson (sarah.j@email.com)" and "Sarah Johnson-Smith (sarah.j@email.com)" as likely duplicates. You confirm they're the same person who got married and changed names. Merge them, keeping the newer last name but preserving giving history and group memberships from both profiles.</em>
      </p>

      <h4>Data Validation and Correction</h4>
      <p>
        Run validation reports to find records with problems: missing required fields, invalid email formats, phone numbers that don't match formatting rules, addresses without zip codes, birthdates in the future. Bulk-fix issues or review records individually to correct errors.
      </p>

      <h4>Orphaned Record Cleanup</h4>
      <p>
        Identify orphaned records that lost their parent relationships: group members whose group was deleted, event attendees for cancelled events, family members whose family was dissolved. Choose to delete orphaned records, reassign them to new parents, or convert them to standalone records.
      </p>

      <h4>Bulk Updates</h4>
      <p>
        Apply changes to multiple records simultaneously. For example, update the address for all members of a family, assign 50 people to a new small group, or add a "VBS Volunteer" tag to everyone who served last summer. Bulk operations save hours compared to editing records one-by-one.
      </p>

      <h3>GDPR/Privacy Compliance</h3>
      <p>
        If your church serves people in Europe (GDPR), California (CCPA), or simply wants to honor privacy best practices, Relius provides compliance tools for tracking consent, fulfilling data access requests, honoring deletion requests, and managing data retention.
      </p>

      <h4>Consent Tracking</h4>
      <p>
        Track which members have consented to what types of data processing: email communications, SMS messages, public directory listings, photo/video recording, etc. Record when consent was given, for what purposes, and allow members to withdraw consent anytime. Relius automatically respects consent preferences when sending communications or displaying information.
      </p>

      <h4>Data Access Requests</h4>
      <p>
        When a member requests a copy of all personal data you hold about them (a GDPR right), use the data access tool to generate a comprehensive report: profile information, giving history, group memberships, event attendance, communications received, and pastoral care notes (if applicable to the request). Export as PDF and deliver to the requester within 30 days.
      </p>

      <h4>Right to Deletion (Right to be Forgotten)</h4>
      <p>
        When someone requests deletion of their personal data, use the deletion workflow to remove or anonymize their records. For giving records that must be retained for tax/legal purposes, Relius anonymizes the donor while preserving the financial transaction. For other data, complete deletion is possible.
      </p>
      <p>
        <em>Important: Deletion is permanent and irreversible. Verify the request is legitimate and you've exported any necessary records before proceeding.</em>
      </p>

      <h4>Data Retention Policies</h4>
      <p>
        Configure how long different types of data are kept before automatic deletion. For example: "Delete event attendance records after 3 years," "Anonymize pastoral care notes after 7 years," "Retain donation records permanently for tax compliance." Retention policies help you minimize data storage, reduce privacy risk, and comply with regulations requiring data minimization.
      </p>

      <details>
        <summary>Advanced Options</summary>
        
        <h4>Scheduled Exports and Automated Reports</h4>
        <p>
          Create export templates that run automatically on a schedule. For example, export weekly giving totals every Monday morning and email to your finance team. Or export new member data daily and send to your follow-up coordinator. Automation eliminates repetitive manual exports.
        </p>

        <h4>Import with Custom Matching Rules</h4>
        <p>
          When importing, configure custom logic for matching existing records. For example, match members by email address even if names are slightly different, or match donations by a unique transaction ID from your old system. Custom matching prevents duplicate creation during complex migrations.
        </p>

        <h4>Incremental Backups for Large Databases</h4>
        <p>
          For churches with massive databases (20,000+ members, 10+ years of giving), enable incremental backups that only capture changes since the last backup. This reduces backup time and storage costs while maintaining comprehensive recovery capability.
        </p>

        <h4>Point-in-Time Recovery</h4>
        <p>
          In addition to daily backups, Relius maintains a transaction log that enables point-in-time recovery: restore to any specific moment, not just backup dates. If you discover accidental deletions happened Tuesday at 3 PM, restore to Tuesday at 2:59 PM rather than Monday's backup.
        </p>

        <h4>Data Anonymization Workflows</h4>
        <p>
          Create automated anonymization rules for sensitive data that must be retained but should lose identifying details over time. For example, automatically anonymize pastoral care notes after 5 years by replacing names with "Anonymous Member" while preserving the note content for institutional learning.
        </p>

        <h4>Cross-System Data Sync</h4>
        <p>
          Set up ongoing data synchronization between Relius and external systems. For example, nightly exports to your accounting software, or bidirectional sync with your membership database. Ensures data consistency across platforms without manual intervention.
        </p>

        <h4>Audit Trails for Data Operations</h4>
        <p>
          All data operations (imports, exports, backups, restores, merges, deletions) are logged with who performed the action, when, and what records were affected. Review audit trails to investigate unexpected data changes or demonstrate compliance with data handling policies.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Enable daily automated backups immediately</strong> – Don't wait until you need one to wish you had one</li>
        <li><strong>Test restores quarterly</strong> – Verify backups actually work by performing test restores in a sandbox environment</li>
        <li><strong>Export critical data monthly</strong> – Keep offline copies of essential information (donors, members) for redundancy</li>
        <li><strong>Run duplicate detection after imports</strong> – Clean up duplicates immediately before they compound</li>
        <li><strong>Document your data retention policies</strong> – Write down why certain data is kept for specific timeframes</li>
        <li><strong>Review GDPR workflows before needed</strong> – Don't wait for your first data access request to learn the tools</li>
        <li><strong>Validate imports on small batches first</strong> – Import 10 records, verify accuracy, then import the full dataset</li>
        <li><strong>Archive old backups to external storage</strong> – Download backups older than 6 months for long-term archival</li>
        <li><strong>Communicate privacy policies to members</strong> – Let people know how their data is used and how to exercise their rights</li>
      </ul>

      <h2>Common Questions</h2>

      <p><strong>Q: How do we import data if our old system doesn't export to CSV?</strong></p>
      <p>A: Most systems can export to Excel (.xlsx), which you can convert to CSV using Excel or Google Sheets. If not, contact Relius support—we can often connect directly to export APIs from common church management platforms.</p>

      <p><strong>Q: What happens if we restore a backup from last week?</strong></p>
      <p>A: All data added or changed in the last week is lost, replaced by the backup's data. Donations entered this week disappear. New members added this week vanish. Only restore when current data is corrupted and losing recent changes is acceptable.</p>

      <p><strong>Q: Can we export data for specific date ranges?</strong></p>
      <p>A: Yes! When creating an export, apply filters like "Donations between Jan 1 and Dec 31" or "Members created in the last 90 days." Export only the records matching your criteria.</p>

      <p><strong>Q: Do we need to enable GDPR features if all our members are in the U.S.?</strong></p>
      <p>A: GDPR legally applies to EU residents, but many churches adopt similar privacy practices as a best practice for all members. California's CCPA also requires similar data rights. Even if not legally required, offering transparency and control builds trust.</p>

      <p><strong>Q: How do we handle giving records when someone requests deletion?</strong></p>
      <p>A: Financial records must often be retained for tax compliance (7 years in the U.S.). Relius anonymizes the donor (replaces name with "Anonymous Donor #12345") while preserving the transaction details for accounting and IRS purposes.</p>

      <p><strong>Q: Can we schedule exports to run automatically and email the results?</strong></p>
      <p>A: Yes! Create an export template, enable scheduling, choose frequency (daily, weekly, monthly), and enter email recipients. The export runs automatically and delivers results via email without manual intervention.</p>

      <p><strong>Q: What if we accidentally import duplicate records?</strong></p>
      <p>A: Use the duplicate detection tool to identify duplicates created during import, then merge them. To prevent this, configure import matching rules to update existing records rather than create new ones when matching criteria are met.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/getting-started/migration">Migration Guides</a> – Importing from Planning Center, ChurchTrac, etc.</li>
        <li><a href="/resources/docs/admin/security">Security Settings</a> – Audit logs and access control</li>
        <li><a href="/resources/docs/people/member-directory">Member Directory</a> – Managing member profiles</li>
        <li><a href="/resources/docs/giving/tracking">Donation Tracking</a> – Recording and managing donations</li>
        <li><a href="/resources/docs/admin/integrations">Integrations</a> – Syncing data with external systems</li>
        <li><a href="/resources/docs/admin">Administration Overview</a> – All administrative features</li>
      </ul>
    </div>
  );
}
