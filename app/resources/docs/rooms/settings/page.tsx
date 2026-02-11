export default function RoomSettingsPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Room Settings & QR Codes</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Room Settings is where you configure booking rules, generate and manage QR codes for quick room reservations, control public booking availability, and set rental rates and policies that apply across your facility.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        The Room Settings page, accessed under <strong>Rooms &gt; Room Settings</strong> in the sidebar, centralizes the configuration that governs how rooms are booked, rented, and accessed. This includes global defaults for booking time slots, approval requirements, advance booking limits, and blackout dates. It is also where you manage QR code generation for rooms that support scan-to-book functionality. Settings configured here apply across all rooms unless a specific room has an override set in its individual configuration on the Manage Rooms page.
      </p>
      <p>
        Rental rate management is handled here as well. You can define hourly, half-day, or full-day pricing tiers, set deposit requirements, and establish cancellation policies. These settings feed into the rental workflow so that when a request is approved, the correct pricing is communicated to the renter automatically. QR code settings control the format, expiration, and behavior of the codes posted at room entrances.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Booking Rules</strong> -- Set global defaults for minimum and maximum booking duration, advance booking window (how far ahead someone can reserve), and buffer time between consecutive bookings for setup and teardown.</li>
        <li><strong>QR Code Management</strong> -- Generate, regenerate, download, and deactivate QR codes for individual rooms. Each QR code links to a booking form pre-filled with the room name. Codes can be printed and posted at room entrances for walk-up reservations.</li>
        <li><strong>Public Booking Configuration</strong> -- Control whether public-facing booking pages are active, set which information is required from external bookers (name, email, phone, purpose), and customize the confirmation message they see after submitting a request.</li>
        <li><strong>Rental Rate Management</strong> -- Define pricing tiers (hourly, half-day, full-day) that can be assigned to individual rooms. Set deposit amounts, payment deadlines, and whether payment is required before or after approval.</li>
        <li><strong>Cancellation Policies</strong> -- Specify cancellation windows (e.g., free cancellation up to 48 hours before the booking) and any fees that apply for late cancellations or no-shows.</li>
        <li><strong>Notification Preferences</strong> -- Configure who receives email or in-app notifications when a new rental request is submitted, when a booking is approved or declined, and when a cancellation occurs.</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Open Room Settings</h3>
      <p>
        Navigate to <strong>Rooms &gt; Room Settings</strong> in the sidebar. The page is organized into sections: Booking Rules, QR Codes, Public Booking, Rental Rates, and Notifications.
      </p>

      <h3>Step 2: Configure Booking Rules</h3>
      <p>
        Set your default booking parameters. Common configurations include a minimum booking duration of 30 minutes, a maximum of 8 hours, an advance booking window of 90 days, and a 15-minute buffer between bookings. Adjust these based on your facility's typical usage patterns.
      </p>

      <h3>Step 3: Generate QR Codes</h3>
      <p>
        In the QR Codes section, select any room that has QR Booking enabled and click <strong>Generate Code</strong>. Download the QR code image and print it for posting near the room entrance. Test the code by scanning it with a phone to confirm it opens the correct booking form.
      </p>

      <h3>Step 4: Set Rental Rates</h3>
      <p>
        If your church rents rooms to external groups, define pricing tiers in the Rental Rates section. Create tiers such as "Standard" ($25/hour) and "Premium" ($50/hour), then assign each tier to the appropriate rooms on the Manage Rooms page. Set deposit requirements and payment terms as needed.
      </p>

      <h3>Step 5: Configure Notifications</h3>
      <p>
        Choose which staff members receive notifications for new rental requests, approvals, and cancellations. At minimum, the person responsible for facility coordination should receive all rental notifications so requests are processed promptly.
      </p>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Add buffer time between bookings</strong> -- Even 15 minutes of buffer prevents back-to-back bookings from creating conflicts when one group runs late or the next needs setup time</li>
        <li><strong>Test QR codes after generating</strong> -- Scan every QR code with a phone before posting it to confirm it links to the correct room and the booking form loads properly</li>
        <li><strong>Keep rental rates simple</strong> -- Two or three pricing tiers are easier for renters to understand and for staff to manage than a complex matrix of rates and exceptions</li>
        <li><strong>Set a reasonable advance booking window</strong> -- Too short and groups cannot plan ahead; too long and you lose flexibility. 60-90 days works for most churches.</li>
        <li><strong>Review settings when policies change</strong> -- After board decisions about facility usage, rental pricing, or booking procedures, update Room Settings immediately so the system reflects current policy</li>
      </ul>

      <h2>Common Questions</h2>

      <p><strong>Q: Can I set different booking rules for different rooms?</strong></p>
      <p>A: Room Settings defines global defaults. Individual rooms can override specific settings (such as maximum duration or rental rate) from their edit screen on the Manage Rooms page. The global defaults apply to any room that does not have a per-room override.</p>

      <p><strong>Q: What happens if a QR code is lost or needs to be replaced?</strong></p>
      <p>A: You can regenerate a QR code for any room at any time from the QR Codes section. The old code is deactivated and a new one is created. Print and post the replacement, and remove the old printout.</p>

      <p><strong>Q: Can I disable public booking without removing the rooms?</strong></p>
      <p>A: Yes. You can turn off the Public Booking toggle globally in Room Settings, which hides all rooms from the public directory while keeping them available for internal scheduling. You can also disable Public Booking on a per-room basis from the Manage Rooms table.</p>

      <p><strong>Q: How do renters know about pricing before they submit a request?</strong></p>
      <p>A: When rental rates are configured, the public booking form displays the applicable rate for the selected room and time duration. Renters see the estimated cost before submitting their request, so there are no surprises after approval.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/rooms">Rooms Overview</a> -- Introduction to the Rooms module</li>
        <li><a href="/resources/docs/rooms/manage">Managing Rooms</a> -- Adding rooms and setting per-room overrides</li>
        <li><a href="/resources/docs/rooms/rentals">Room Rentals & Bookings</a> -- The rental request and approval workflow</li>
        <li><a href="/resources/docs/events/scheduler">Event Scheduler</a> -- Calendar integration with room bookings</li>
      </ul>
    </div>
  );
}
