export default function ImportDataPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Import Data</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Import donation records, member data, and historical giving into Relius from CSV files or other church management systems. Access this feature under <strong>Giving &gt; Import Data</strong> in the sidebar.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        The Import Data tool lets you bring existing records into Relius without manually re-entering every donation or member profile. It accepts CSV files and provides a column-mapping interface so you can match your source data to Relius fields regardless of how your previous system formatted exports. This is particularly useful during initial migration from another church management platform, but it also supports ongoing imports for churches that receive giving data from external processors.
      </p>
      <p>
        The import process validates data before committing it, flagging issues like missing required fields, duplicate records, or malformed dates so you can correct problems before they enter your system. Once an import completes, the records appear throughout Relius just like manually entered data -- donations show in donor profiles, giving totals update in analytics, and member records populate the people directory.
      </p>

      <h2>Getting Started</h2>

      <h3>Step 1: Prepare Your CSV File</h3>
      <p>
        Export data from your current system in CSV format. Most church management platforms (ChurchTrac, Planning Center, Tithely, Breeze, etc.) offer a CSV export option. Make sure your file includes column headers in the first row. Common columns include donor name, email, donation date, amount, fund, and payment method.
      </p>

      <h3>Step 2: Open the Import Tool</h3>
      <p>
        Navigate to <strong>Giving &gt; Import Data</strong> in the sidebar. Click <strong>Upload CSV</strong> and select your prepared file. Relius will read the file and display a preview of the first several rows so you can confirm it loaded correctly.
      </p>

      <h3>Step 3: Map Your Columns</h3>
      <p>
        The mapping screen shows each column from your CSV alongside a dropdown of Relius fields. Match each source column to its corresponding destination -- for example, map "Donation Date" to the Relius Date field and "Gift Amount" to the Amount field. Columns that do not have a Relius equivalent can be skipped.
      </p>

      <h3>Step 4: Validate and Import</h3>
      <p>
        Click <strong>Validate</strong> to run a check on the mapped data. Relius will flag rows with errors (missing amounts, unrecognized dates, potential duplicates). Fix any issues in your CSV or dismiss warnings for known edge cases, then click <strong>Import</strong> to commit the records.
      </p>

      <h3>Step 5: Review Results</h3>
      <p>
        After the import completes, a summary screen shows how many records were created, how many were skipped, and any errors that occurred. Spot-check a few donor profiles and giving reports to confirm the data landed correctly.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>CSV Upload</strong> -- Drag-and-drop or file-picker upload for standard comma-separated files with header rows</li>
        <li><strong>Column Mapping</strong> -- Flexible field mapping that does not require your CSV to match a specific template; map any column to any Relius field</li>
        <li><strong>Validation Engine</strong> -- Pre-import checks for required fields, date formats, numeric amounts, and duplicate detection</li>
        <li><strong>Duplicate Handling</strong> -- Choose to skip duplicates, overwrite existing records, or flag them for manual review</li>
        <li><strong>Multi-Record Types</strong> -- Import donation records, member/people data, or both in a single session depending on what your CSV contains</li>
        <li><strong>Import History</strong> -- A log of past imports with timestamps, record counts, and the ability to review or undo a recent import</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Clean your data before importing</strong> -- Remove blank rows, fix obvious typos, and standardize date formats (YYYY-MM-DD works best) in your CSV before uploading to minimize validation errors</li>
        <li><strong>Start with a small test batch</strong> -- Import 10-20 records first to verify your column mapping is correct before running the full file</li>
        <li><strong>Back up your current data</strong> -- If you already have records in Relius, export a backup before running a large import so you can recover if something goes wrong</li>
        <li><strong>Map funds carefully</strong> -- Make sure fund names in your CSV match the funds configured in Relius, or create the necessary funds before importing</li>
        <li><strong>Use the duplicate detection</strong> -- Enable duplicate checking rather than skipping it, especially for donation records where accidental double-entry inflates giving totals</li>
      </ul>

      <h2>Common Questions</h2>

      <p><strong>Q: What file formats are supported?</strong></p>
      <p>A: The import tool accepts CSV (comma-separated values) files. If your source system exports in Excel (.xlsx) format, save or convert the file to CSV first using your spreadsheet application.</p>

      <p><strong>Q: Is there a row limit for imports?</strong></p>
      <p>A: There is no hard row limit, but very large files (tens of thousands of rows) may take longer to validate and process. For large historical imports, consider splitting the file into yearly or quarterly batches for easier review.</p>

      <p><strong>Q: Can I undo an import if something went wrong?</strong></p>
      <p>A: Yes. The Import History log lets you review recent imports and undo them, which removes the records that were created during that import session. This is available for a limited time after the import completes.</p>

      <p><strong>Q: How does the importer handle donors that already exist in Relius?</strong></p>
      <p>A: The validation step flags potential matches based on name and email. You can choose to link imported donations to the existing donor profile, create a new profile, or skip the record. This prevents duplicate donor entries while still allowing new data to attach to known people.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/giving">Giving Overview</a> -- Main giving module documentation</li>
        <li><a href="/resources/docs/giving/tracking">Donation Tracking</a> -- Manually recording donations after import</li>
        <li><a href="/resources/docs/giving/campaigns">Campaigns</a> -- Associating imported donations with campaigns</li>
      </ul>
    </div>
  );
}
