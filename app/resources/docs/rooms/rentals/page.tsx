export default function RoomRentalsPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Room Rentals & Bookings</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: The Room Rentals section includes a My Rentals view for tracking personal bookings, an Approvals workflow for processing pending rental requests, and calendar integration so all reservations are visible alongside your church's events.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Room Rentals handles the full lifecycle of a room reservation -- from the initial request through approval to the confirmed booking. The <strong>My Rentals</strong> page gives individual users a personal view of their current, upcoming, and past room bookings. The <strong>Approvals</strong> page is the staff-facing queue where administrators review, approve, or decline incoming rental requests. Once approved, bookings automatically appear on the church's event calendar to prevent double-bookings and keep facility usage visible to all staff.
      </p>
      <p>
        This workflow applies to rooms that have been marked as Rentable in the Manage Rooms table. Internal room scheduling for ministry events does not require the approval workflow and is handled directly through the event calendar. The rental system is designed for external groups, community organizations, or members who want to reserve a space for a private event, with optional payment tracking for rooms that charge rental fees.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>My Rentals View</strong> -- A personal dashboard showing all room bookings associated with the logged-in user. Displays booking status (pending, approved, declined), room name, date, time, and any notes. Users can cancel their own upcoming bookings from this page.</li>
        <li><strong>Approvals Queue</strong> -- A staff-only page listing all pending rental requests. Each request shows who is asking, which room, the requested date and time, and the purpose. Administrators can approve, decline, or request more information directly from the queue.</li>
        <li><strong>Calendar Integration</strong> -- Approved room rentals are placed on the church's shared event calendar. This prevents scheduling conflicts with services, ministry events, or other rentals. Staff can see all room usage in one place.</li>
        <li><strong>Booking Status Tracking</strong> -- Every rental moves through clear statuses: Pending (submitted, awaiting review), Approved (confirmed), Declined (rejected with optional reason), and Cancelled (withdrawn by the requester).</li>
        <li><strong>Rental History</strong> -- Both renters and administrators can view past bookings for record-keeping, including completed rentals and any associated payment information.</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Submit a Rental Request</h3>
      <p>
        Browse available rooms through the public booking directory or by scanning a room's QR code. Select the room, choose a date and time, add a description of the event, and submit the request. The booking will appear in My Rentals with a "Pending" status.
      </p>

      <h3>Step 2: Review Pending Requests (Admins)</h3>
      <p>
        Navigate to <strong>Rooms &gt; Approvals</strong> to see all pending rental requests. Review the details for each request -- the requester's name, the room, the time slot, and the purpose. Confirm there are no conflicts on the calendar before making a decision.
      </p>

      <h3>Step 3: Approve or Decline</h3>
      <p>
        Click <strong>Approve</strong> to confirm the rental or <strong>Decline</strong> to reject it. When declining, you can include a reason (e.g., "Room is under renovation that week" or "Please contact us to discuss an alternative date"). The requester is notified of the decision.
      </p>

      <h3>Step 4: Track on the Calendar</h3>
      <p>
        Approved rentals are automatically added to the event calendar under the appropriate room. All staff with calendar access can see the reservation, which prevents other events from being scheduled in that room during the same time.
      </p>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Respond to rental requests within 24-48 hours</strong> -- Prompt responses help external groups finalize their plans and build a positive relationship with your church</li>
        <li><strong>Include a reason when declining</strong> -- A brief explanation helps requesters understand the decision and, where possible, find an alternative time or room</li>
        <li><strong>Check the calendar before approving</strong> -- Even though the system checks for conflicts, verify manually that the rental does not interfere with setup or teardown time for adjacent events</li>
        <li><strong>Encourage renters to cancel early</strong> -- When plans change, early cancellation frees the room for others and keeps your calendar accurate</li>
        <li><strong>Review rental history periodically</strong> -- Use past booking data to identify your most-requested rooms and times, which can inform pricing, availability windows, and facility planning</li>
      </ul>

      <h2>Common Questions</h2>

      <p><strong>Q: Who can submit a rental request?</strong></p>
      <p>A: Anyone who can access the public booking directory or scan a room's QR code can submit a request for rooms marked as Rentable with Public Booking enabled. Internal staff can also submit requests through the Rooms section of the app.</p>

      <p><strong>Q: Can I edit a rental request after submitting it?</strong></p>
      <p>A: While a request is still in Pending status, you can cancel it and submit a new one with updated details. Once a request has been approved, contact the church administrator to make changes.</p>

      <p><strong>Q: How are rental fees handled?</strong></p>
      <p>A: Rental pricing is configured in Room Settings. When a rental is approved for a room with a set rate, the fee information is included in the approval notification. Payment tracking and collection depend on your church's configured payment workflow.</p>

      <p><strong>Q: What happens if two people request the same room for the same time?</strong></p>
      <p>A: Both requests enter the Approvals queue. The administrator can approve whichever request should take priority and decline the other with an explanation. The system flags the overlap so the admin is aware of the conflict.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/rooms">Rooms Overview</a> -- Introduction to the Rooms module</li>
        <li><a href="/resources/docs/rooms/manage">Managing Rooms</a> -- Adding and configuring rooms for rental</li>
        <li><a href="/resources/docs/rooms/settings">Room Settings & QR Codes</a> -- Setting rental rates and booking rules</li>
        <li><a href="/resources/docs/events/scheduler">Event Scheduler</a> -- Viewing room bookings on the calendar</li>
      </ul>
    </div>
  );
}
