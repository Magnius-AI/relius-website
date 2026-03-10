export default function ManageRoomsPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Managing Rooms</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: The Manage Rooms page is where you add, edit, and configure every bookable space in your facility. Each room is defined with a building, floor, capacity, QR Booking status, Public Booking toggle, and Rentable/Not Rentable designation -- all visible in a table view with action icons for quick edits.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Manage Rooms is the central directory for your church's physical spaces, accessed under <strong>Rooms &gt; Manage Rooms</strong> in the sidebar. It displays all rooms in a table with columns for Room Name, Building/Floor, Capacity, QR Booking status (QR Active, No QR, or No Code), Public Booking (on/off), and Rentable status (Rentable or Not Rentable). Each row includes action icons for editing room details, toggling settings, or removing a room.
      </p>
      <p>
        This page is the starting point for facility setup. Before rooms can be booked, rented, or assigned to events, they must be created here with accurate details. The table format makes it straightforward to audit your room inventory at a glance -- you can quickly see which rooms have QR codes enabled, which are publicly bookable, and which are available for paid rentals without opening individual records.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Room Table View</strong> -- All rooms displayed in a sortable, scannable table with columns for name, location, capacity, and each booking configuration option</li>
        <li><strong>Building and Floor Assignment</strong> -- Organize rooms by physical location using building and floor fields. This structure supports multi-building campuses and makes filtering by location possible.</li>
        <li><strong>Capacity Setting</strong> -- Set the maximum number of people each room can hold. This number is displayed in the table and enforced during the booking process to prevent overbooking.</li>
        <li><strong>QR Booking Status</strong> -- Each room shows one of three QR statuses: <em>QR Active</em> (QR code generated and scanning enabled), <em>No QR</em> (QR booking turned off), or <em>No Code</em> (QR booking enabled but code not yet generated)</li>
        <li><strong>Public Booking Toggle</strong> -- Controls whether the room appears in any public-facing booking directory. When off, only staff can schedule the room internally.</li>
        <li><strong>Rentable Status</strong> -- Marks a room as available for paid rentals by external groups or members. Rooms marked Not Rentable can still be booked internally but will not appear in rental workflows.</li>
        <li><strong>Action Icons</strong> -- Each row has icons for editing room details, managing QR codes, and deleting the room. Actions are inline so you do not need to navigate away from the table.</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Open Manage Rooms</h3>
      <p>
        Navigate to <strong>Rooms &gt; Manage Rooms</strong> in the sidebar. If this is your first time, the table will be empty and ready for you to add rooms.
      </p>

      <h3>Step 2: Add a Room</h3>
      <p>
        Click the <strong>Add Room</strong> button. Enter the room name (use a name your congregation recognizes, such as "Fellowship Hall" or "Room 201"), assign it to a building and floor, and set the capacity. Save the room to add it to the table.
      </p>

      <h3>Step 3: Configure Booking Options</h3>
      <p>
        For each room, set the QR Booking, Public Booking, and Rentable toggles based on how the room should be used. A conference room used only by staff might have all three off. A large hall available to outside groups would have Public Booking and Rentable turned on, and optionally QR Booking enabled for walk-up reservations.
      </p>

      <h3>Step 4: Generate QR Codes (Optional)</h3>
      <p>
        For rooms with QR Booking enabled, use the action icon in the QR column to generate the QR code. Print and post the code near the room entrance so people can scan and book directly from their phone. The room's QR status will change from "No Code" to "QR Active" once the code is generated.
      </p>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Use recognizable room names</strong> -- Name rooms the way your congregation refers to them in conversation, not by internal codes or numbers that only staff know</li>
        <li><strong>Keep building and floor values consistent</strong> -- Use the same building and floor labels across all rooms (e.g., always "Main Building" rather than mixing "Main," "Main Bldg," and "Building 1") so filtering and sorting work correctly</li>
        <li><strong>Set accurate capacities</strong> -- Correct capacity numbers prevent overbooking and support safety compliance. Update them after renovations or furniture changes.</li>
        <li><strong>Enable QR Booking selectively</strong> -- QR codes work well for frequently used spaces like conference rooms or classrooms. Skip them for spaces that require staff coordination or special setup.</li>
        <li><strong>Audit the room list periodically</strong> -- Review the table quarterly to remove rooms that are no longer available, update capacities, and confirm that QR, Public Booking, and Rentable settings are still appropriate</li>
      </ul>

      <h2>Common Questions</h2>

      <p><strong>Q: What is the difference between the three QR Booking statuses?</strong></p>
      <p>A: "QR Active" means a QR code exists and scanning is enabled for that room. "No QR" means QR booking is turned off entirely. "No Code" means you have enabled QR booking for the room but have not yet generated the actual QR code -- click the QR action icon to create it.</p>

      <p><strong>Q: Can I change a room's settings after it has been booked?</strong></p>
      <p>A: Yes. Changing settings like Public Booking or Rentable status affects future bookings only. Existing confirmed reservations are not cancelled when you change a room's configuration.</p>

      <p><strong>Q: How do I handle rooms shared across ministries?</strong></p>
      <p>A: All rooms are available to all internal staff for scheduling through the calendar. The Public Booking and Rentable settings only control external visibility. For internal coordination, use the event calendar to check availability before booking.</p>

      <p><strong>Q: Is there a limit to how many rooms I can add?</strong></p>
      <p>A: There is no fixed limit on the number of rooms. Whether your church has 3 rooms or 50, the table view scales to show all of them with sorting and filtering to keep things manageable.</p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/rooms">Rooms Overview</a> -- Introduction to the Rooms module</li>
        <li><a href="/resources/docs/rooms/rentals">Room Rentals & Bookings</a> -- Managing rental requests and personal bookings</li>
        <li><a href="/resources/docs/rooms/settings">Room Settings & QR Codes</a> -- Configuring booking rules and QR code options</li>
        <li><a href="/resources/docs/events/scheduler">Event Scheduler</a> -- Scheduling events in rooms</li>
      </ul>
    </div>
  );
}
