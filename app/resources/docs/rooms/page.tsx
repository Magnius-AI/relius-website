export default function RoomsOverviewPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Rooms</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Define your church's physical spaces, configure booking and rental options, manage room reservations, and enable QR code-based access -- all from the Rooms section in the sidebar.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        The Rooms section lets you create a complete inventory of your church's physical spaces and control how they are reserved. Each room is defined with a building, floor, and capacity, then configured for internal scheduling, public booking, QR code access, or paid rentals. Staff can see every room at a glance from the Manage Rooms table, and rental requests flow through an approval workflow before they are confirmed.
      </p>
      <p>
        Whether your church has a single fellowship hall or a multi-building campus with dozens of rooms, Relius gives you the tools to prevent double-bookings, track rental income, and streamline facility coordination across ministries and outside organizations. The four sub-pages under Rooms -- My Rentals, Approvals, Manage Rooms, and Room Settings -- each handle a specific part of this workflow.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Room</strong>: A bookable physical space defined by a name, building, floor, and maximum capacity</li>
        <li><strong>Building / Floor</strong>: The location hierarchy used to organize rooms (shown as columns in the Manage Rooms table)</li>
        <li><strong>Capacity</strong>: The maximum number of people a room can hold, displayed in the room list and enforced during booking</li>
        <li><strong>QR Booking</strong>: A per-room setting that enables QR code-based reservations. Rooms show one of three statuses in the Manage Rooms table: <em>QR Active</em>, <em>No QR</em>, or <em>No Code</em></li>
        <li><strong>Public Booking</strong>: A toggle that controls whether a room is visible and bookable by the public (outside your staff)</li>
        <li><strong>Rentable / Not Rentable</strong>: Indicates whether a room can be rented for a fee by external groups or members</li>
        <li><strong>Rental</strong>: A reservation request for a rentable room, which goes through the Approvals workflow before it is confirmed</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Add Your Rooms</h3>
      <p>
        Open <strong>Manage Rooms</strong> and create an entry for each bookable space. Enter the room name, assign it to a building and floor, and set the capacity. You can add rooms one at a time or work through your facility list in bulk.
      </p>

      <h3>Step 2: Configure Booking Options</h3>
      <p>
        For each room, decide whether to enable QR Booking, Public Booking, and the Rentable flag. Rooms used only for internal ministry scheduling may need none of these. Rooms available to outside groups should have Rentable and Public Booking turned on. QR Booking is useful for spaces where people should be able to scan a code on the door and reserve on the spot.
      </p>

      <h3>Step 3: Set Up Room Settings</h3>
      <p>
        Go to <strong>Room Settings</strong> to configure global defaults such as booking rules, approval requirements, and rental pricing. These settings apply across all rooms unless overridden at the individual room level.
      </p>

      <h3>Step 4: Process Reservations</h3>
      <p>
        When rental requests come in, they appear on the <strong>Approvals</strong> page. Review the details -- who is requesting, which room, the date and time -- and approve or decline. Approved rentals then show up in <strong>My Rentals</strong> for the requester to track.
      </p>

      <h2>Features</h2>

      <h3>Manage Rooms</h3>
      <p>
        The central room directory. The Manage Rooms page displays all rooms in a table with columns for Room Name, Building/Floor, Capacity, QR Booking status, Public Booking toggle, and Rentable status. Use this page to add, edit, or remove rooms and to quickly audit which rooms have QR codes, public visibility, or rental capability enabled.
      </p>
      <p>
        <a href="/resources/docs/rooms/manage">Learn about Manage Rooms</a>
      </p>

      <h3>My Rentals</h3>
      <p>
        A personal view of all room rental reservations associated with the current user or organization. Track upcoming bookings, view past rental history, and check the status of pending requests. This page is the renter's home base for managing their relationship with your facility.
      </p>
      <p>
        <a href="/resources/docs/rooms/rentals">Learn about My Rentals</a>
      </p>

      <h3>Room Settings</h3>
      <p>
        Global configuration for the Rooms module. Set default booking rules, approval workflows, rental pricing tiers, time slot restrictions, and notification preferences. Room Settings controls the behavior that applies across your entire facility unless overridden on a per-room basis.
      </p>
      <p>
        <a href="/resources/docs/rooms/settings">Learn about Room Settings</a>
      </p>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Name rooms clearly</strong> -- Use names your congregation already knows (e.g., "Fellowship Hall," "Room 201") rather than internal codes</li>
        <li><strong>Set accurate capacities</strong> -- Correct capacity numbers prevent overbooking and help with safety compliance</li>
        <li><strong>Enable QR Booking selectively</strong> -- QR codes work well for common spaces like conference rooms; skip them for spaces that need staff coordination</li>
        <li><strong>Review approvals promptly</strong> -- Respond to rental requests within 24-48 hours so requesters can finalize their plans</li>
        <li><strong>Audit your room list quarterly</strong> -- Remove rooms that are no longer available, update capacities after renovations, and confirm booking settings are still accurate</li>
        <li><strong>Keep Public Booking intentional</strong> -- Only expose rooms publicly that your church genuinely wants outside groups to book; internal-only rooms should have Public Booking off</li>
        <li><strong>Use building and floor consistently</strong> -- Consistent location data makes filtering and reporting reliable across a large campus</li>
      </ul>

      <h2>Common Questions</h2>

      <p><strong>Q: What is the difference between QR Booking and Public Booking?</strong></p>
      <p>A: QR Booking lets someone scan a physical QR code (typically posted on or near the room door) to start a reservation. Public Booking controls whether the room appears in a public-facing directory where anyone can browse and request it. A room can have one, both, or neither enabled.</p>

      <p><strong>Q: What do the QR Booking statuses mean?</strong></p>
      <p>A: <em>QR Active</em> means a QR code has been generated and scanning is enabled. <em>No QR</em> means QR booking is turned off for that room. <em>No Code</em> means QR booking is enabled but a code has not been generated yet.</p>

      <p><strong>Q: Can a room be bookable internally but not rentable?</strong></p>
      <p>A: Yes. The Rentable flag specifically controls whether external groups can rent the room for a fee. Staff can still schedule internal events in any room through the calendar regardless of the Rentable setting.</p>

      <p><strong>Q: Who can approve rental requests?</strong></p>
      <p>A: Users with the appropriate administrative permissions can access the Approvals page to review and approve or decline rental requests. Configure who has access in your admin settings.</p>

      <p><strong>Q: How do I prevent double-bookings?</strong></p>
      <p>A: Relius automatically checks for scheduling conflicts when a new reservation is submitted. If the room is already booked for the requested time, the system will flag the conflict before the reservation is confirmed.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/rooms/manage">Manage Rooms</a> -- Add, edit, and configure your room inventory</li>
        <li><a href="/resources/docs/rooms/rentals">My Rentals</a> -- View and track room rental reservations</li>
        <li><a href="/resources/docs/rooms/settings">Room Settings</a> -- Configure global booking and rental rules</li>
        <li><a href="/resources/docs/events/scheduler">Events Scheduler</a> — Schedule events in rooms</li>
        <li><a href="/resources/docs/giving/tracking">Giving & Tracking</a> -- Track rental income and payments</li>
        <li><a href="/resources/docs/admin/settings">Admin Settings</a> -- Manage user permissions for room approvals</li>
      </ul>
    </div>
  );
}
