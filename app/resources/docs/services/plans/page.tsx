export default function ServicePlansPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Service Plans</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Create detailed service run sheets with songs, order of service, volunteer assignments, timing, and notes—share them with your teams for seamless execution.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        A great worship service doesn't happen by accident—it flows from careful planning. Service plans (also called run sheets or order of service) are your blueprint for every element of a service, from the moment doors open to the final benediction. They tell everyone what's happening, when it's happening, who's responsible, and how long it should take. When done well, service plans turn potential chaos into coordinated worship that honors God and serves people.
      </p>
      <p>
        Relius service plans go beyond simple bullet lists. They're interactive documents that connect songs from your library, assign volunteers from your teams, track timing to keep services on schedule, attach notes and files (like sermon outlines or video cue sheets), and communicate changes in real-time. Whether you're planning a standard Sunday morning, a Christmas Eve candlelight service, or a baptism celebration, service plans ensure everyone knows their part and the service flows smoothly.
      </p>
      <p>
        The real power of service plans comes from templates and reusability. Create a template for your typical Sunday format, and you'll never start from scratch again. Duplicate last week's plan and update the songs and sermon. Clone your Easter service template from last year and adjust the details. Planning becomes faster and more consistent, freeing your team to focus on creativity and spiritual preparation rather than logistics.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Service Plan</strong>: A complete run sheet for a specific service date and time</li>
        <li><strong>Service Template</strong>: A reusable format that can be applied to multiple services (like "Sunday Morning Format")</li>
        <li><strong>Service Item</strong>: An individual element in the service (song, prayer, sermon, offering, announcement, etc.)</li>
        <li><strong>Order of Service</strong>: The sequence of service items from start to finish</li>
        <li><strong>Volunteer Assignment</strong>: Linking team members to specific service items they're responsible for</li>
        <li><strong>Service Duration</strong>: Estimated or actual length of each item and the total service time</li>
        <li><strong>Run Sheet</strong>: Another term for service plan, often used in production contexts</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Create a New Service Plan</h3>
      <p>
        Navigate to <strong>Services → Service Plans</strong> and click <strong>Create Service Plan</strong>. Choose the date and time for the service (like "Sunday, March 15, 2026, 10:00 AM") and give it a name or theme (like "Sermon Series: Grace Week 3" or "Easter Sunday Celebration").
      </p>

      <h3>Step 2: Choose a Starting Point</h3>
      <p>
        You can start from scratch, use a service template you've created previously, or duplicate a recent service plan and modify it. Most churches save time by starting with a template—your typical Sunday format is probably 80% the same every week.
      </p>

      <h3>Step 3: Add Service Items</h3>
      <p>
        Build your order of service by adding items one at a time. Common items include: Opening Song, Welcome/Announcements, Worship Set, Prayer, Offering, Sermon, Response Song, Benediction. For each item, set the duration (estimate how long it will take), add any notes, and attach files if needed.
      </p>

      <h3>Step 4: Assign Songs and Volunteers</h3>
      <p>
        For song items, select songs from your library (which automatically pulls lyrics, arrangements, and keys). For items that need volunteers, assign team members from your teams—like assigning your worship team to the opening song set or your tech team to manage slides throughout the service.
      </p>

      <h3>Step 5: Review and Share</h3>
      <p>
        Check the total service duration to ensure you're on track (most Sunday services target 60-75 minutes). Preview the complete plan, then share it with your teams. Relius sends notifications to everyone assigned, and they can view the plan on their phones or computers. Make updates anytime, and changes sync in real-time.
      </p>

      <h2>Features</h2>

      <h3>Creating Service Items</h3>
      <p>
        Service items are the building blocks of your plan. Each item has:
      </p>
      <ul>
        <li><strong>Item Type</strong>: Song, Spoken Element, Video, Prayer, Offering, Special Element, Transition</li>
        <li><strong>Title</strong>: Name of the item (like "Opening Prayer" or "Welcome & Announcements")</li>
        <li><strong>Duration</strong>: Estimated time in minutes (adjust as needed)</li>
        <li><strong>Leader/Assignee</strong>: Who's responsible (pastor, worship leader, tech operator, etc.)</li>
        <li><strong>Notes</strong>: Internal details, cues, special instructions</li>
        <li><strong>Attachments</strong>: PDFs, chord charts, videos, presentation files</li>
      </ul>
      <p>
        <em>Example: Add a sermon item titled "Message: The Prodigal's Father," duration 30 minutes, leader Pastor James, with attached sermon outline PDF and two illustration video clips.</em>
      </p>

      <h3>Adding Songs from Your Library</h3>
      <p>
        When you add a song item, search your song library and select the song. Relius automatically populates the title, artist, duration (if you've tracked it), and links to lyrics and chord charts. You can specify which arrangement to use (like "Original Key - G" vs. "Acoustic Version - D") and add notes like "Skip verse 3" or "Band only, no congregation."
      </p>
      <p>
        Songs added to service plans are automatically logged for CCLI reporting—no separate tracking needed.
      </p>

      <h3>Service Templates</h3>
      <p>
        Templates are your efficiency superpower. Create a template for your regular Sunday format, and apply it to new service dates with one click. Templates include:
      </p>
      <ul>
        <li>Complete order of service items</li>
        <li>Default durations for each item</li>
        <li>Standard volunteer assignments (like "Tech team manages sound for entire service")</li>
        <li>Placeholder items (like "Sermon" or "Worship Set") that you customize for each week</li>
      </ul>
      <p>
        <em>Example: Your "Sunday Morning Template" includes: Prelude (5 min, pianist), Welcome (2 min, greeter team), Opening Songs (15 min, worship team), Announcements (3 min, pastor), Offering (5 min, usher team), Sermon (30 min, pastoral staff), Response Song (5 min, worship team), Benediction (2 min, pastor). Apply this template every week, then swap songs and update sermon details.</em>
      </p>

      <h3>Timing and Schedule Management</h3>
      <p>
        Each service item has a duration, and Relius calculates the total service time automatically. Use the timeline view to see how your service flows minute-by-minute. If your service is running long, identify which items can be shortened or removed. If it's too short, add a song or extend worship.
      </p>
      <p>
        During the service, you can enable live timing mode where someone (like a tech director) marks when each item actually starts and ends. This captures real-world timing data that helps you plan more accurately in the future.
      </p>

      <h3>Assigning Volunteers to Service Items</h3>
      <p>
        Connect service plans with your volunteer schedules by assigning team members to specific items. For a worship set, assign your worship leader, vocalists, and musicians. For announcements, assign the pastoral staff. For tech support, assign sound engineer and presentation operator for the entire service.
      </p>
      <p>
        When you assign volunteers, they receive notifications about their responsibilities and can view the full service plan. If someone swaps shifts or declines the assignment, the service plan updates automatically.
      </p>

      <h3>Sharing and Collaboration</h3>
      <p>
        Once your service plan is ready, share it with:
      </p>
      <ul>
        <li><strong>Worship team</strong>: See which songs they're playing, in what order, and in what keys</li>
        <li><strong>Tech team</strong>: Know when to cue videos, manage lighting changes, start live stream</li>
        <li><strong>Pastoral staff</strong>: Review timing, sermon placement, and flow</li>
        <li><strong>Volunteer coordinators</strong>: Confirm all positions are covered</li>
        <li><strong>Congregation (optional)</strong>: Publish a public-facing order of service on your website</li>
      </ul>
      <p>
        Control access levels—some people see the full plan with notes and assignments, others see only a simplified view.
      </p>

      <details>
        <summary>Advanced Options</summary>
        
        <h4>Multi-Service Planning</h4>
        <p>
          If you have multiple services (like 9:00 AM and 11:00 AM on Sundays), create separate service plans for each time slot. You can duplicate the first service's plan to the second service with one click, then adjust volunteer assignments. This is especially helpful when services have different styles (traditional vs. contemporary) or different volunteer teams.
        </p>

        <h4>Special Event Service Plans</h4>
        <p>
          Create detailed plans for special events like Christmas Eve, Easter, baptisms, weddings, funerals, VBS, youth events, and community outreach. These often have unique elements (candle lighting, communion, baptism logistics) that don't fit standard Sunday templates. Save them as templates for next year.
        </p>

        <h4>Rehearsal Integration</h4>
        <p>
          Link rehearsal events to service plans so the worship team knows what to practice. When you add songs to Sunday's service plan, automatically create a Thursday rehearsal event with the same song list. Teams can mark songs as "ready" or "needs work" during rehearsal.
        </p>

        <h4>Sermon Integration</h4>
        <p>
          Connect sermon items to your sermon library or AI Sermon Planner. Attach sermon outlines, scripture references, illustration notes, and discussion questions directly to the service plan. When the service is over, archive the complete plan (including sermon) for historical records.
        </p>

        <h4>Video and Media Cues</h4>
        <p>
          For items involving video or media playback, attach the video file or YouTube link and add cue notes like "Start video at 2:30 mark" or "Fade audio during final scene." Tech teams can see these cues in their view of the service plan.
        </p>

        <h4>Contingency Planning</h4>
        <p>
          Add backup plans for critical items. If the scheduled worship leader calls in sick, note alternate leaders. If a video won't play, document a fallback plan. Contingencies reduce stress when things go wrong.
        </p>

        <h4>Service Plan Archives and History</h4>
        <p>
          All completed service plans are archived automatically. Search historical plans to find that perfect song arrangement from last Easter or see how you structured a baptism service. Use archives to build new templates or track how your service style has evolved.
        </p>

        <h4>Multi-Site Service Plans</h4>
        <p>
          Churches with multiple campuses can create a master service plan, then customize it per campus. Maybe all sites use the same sermon (video or live), but each has its own worship team and song selections. Clone the master plan, adjust for local context, and manage everything from one system.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Plan 2-4 weeks ahead</strong> – Gives teams time to prepare, learn new songs, and rehearse</li>
        <li><strong>Use templates religiously</strong> – Don't recreate your standard service format every week; template it</li>
        <li><strong>Be realistic about timing</strong> – Worship sets almost always run longer than planned; build buffer time</li>
        <li><strong>Communicate changes immediately</strong> – If you swap a song or change the sermon topic, update the plan and notify teams</li>
        <li><strong>Include notes for volunteers</strong> – Don't assume everyone knows what to do; clarify expectations</li>
        <li><strong>Review the week before</strong> – Hold a mid-week planning meeting to walk through the service plan with key leaders</li>
        <li><strong>Test all media in advance</strong> – Videos, presentations, and live streams should be tested before Sunday morning</li>
        <li><strong>Save special event plans as templates</strong> – Next year's Easter service will look a lot like this year's</li>
        <li><strong>Honor the 60-75 minute rule</strong> – Most congregations disengage after 75 minutes; plan accordingly</li>
        <li><strong>Debrief after the service</strong> – What worked? What didn't? Update your template based on real experience</li>
      </ul>

      <h2>Common Questions</h2>
      
      <p><strong>Q: How far in advance should we plan services?</strong></p>
      <p>A: Most churches plan 2-4 weeks ahead for regular services. Special events (Easter, Christmas) should be planned 6-8 weeks out to allow for extra rehearsals, special equipment, and volunteer recruitment.</p>

      <p><strong>Q: What if we have multiple service styles (traditional and contemporary)?</strong></p>
      <p>A: Create separate templates for each style. Your traditional service template might include hymns, choir, and liturgy, while your contemporary template features a band, modern songs, and a more casual flow. Apply the appropriate template based on which service you're planning.</p>

      <p><strong>Q: Can we change the service plan during the service if something goes wrong?</strong></p>
      <p>A: Yes! The tech team or service coordinator can make real-time adjustments (like skipping an item or extending worship). These changes are logged but don't affect the original plan, so you can review what was planned vs. what actually happened.</p>

      <p><strong>Q: How do we handle spontaneous moments (like extended prayer or altar calls)?</strong></p>
      <p>A: Build flexibility into your plan. Include "Flexible Response Time" items with no set duration, or add buffer time between major elements. Skilled service leaders know when to follow the plan and when to follow the Spirit's leading.</p>

      <p><strong>Q: Should volunteers see the entire service plan or just their parts?</strong></p>
      <p>A: Most volunteers appreciate seeing the full plan to understand context and flow. However, you can limit views if needed—for example, greeters might only need to know arrival time and their assignments, not detailed sermon notes.</p>

      <p><strong>Q: Can we integrate service plans with our website or app?</strong></p>
      <p>A: Yes! Publish a simplified version of your service plan to your church website or app so attendees can follow along or see what to expect. This is especially helpful for visitors or people with hearing challenges who want to read along.</p>

      <h2>Real-World Scenarios</h2>

      <h3>Scenario: Planning a Baptism Sunday</h3>
      <p>
        River Church has 5 baptisms scheduled for Sunday. They duplicate their standard Sunday template, then add a "Baptism Celebration" item after the sermon (20 minutes: 3 min per person + setup). They assign the baptism team (pastor + 2 assistants), attach baptism logistics notes (towels, clothes, order of candidates), and notify the worship team to prepare a baptism-themed song. The service plan grows from 60 to 80 minutes, so they shorten the opening worship set by 10 minutes to stay on schedule.
      </p>

      <h3>Scenario: Last-Minute Sermon Swap</h3>
      <p>
        On Friday evening, Pastor Mike falls ill and can't preach Sunday. Associate Pastor Sarah steps in with a different sermon topic. The service coordinator updates the service plan: changes the sermon title, uploads Sarah's outline, and adjusts the closing song to match the new theme. All volunteers receive a notification about the change, and Sunday morning runs smoothly despite the switch.
      </p>

      <h3>Scenario: Christmas Eve Candlelight Service</h3>
      <p>
        First Church plans an 11:00 PM Christmas Eve service with 90 minutes of carols, scripture readings, communion, and candlelight. They create a detailed service plan with 15 items, assign volunteers (8 readers, worship team, communion servers, candle distribution team), attach all scripture passages and song arrangements, and share it 3 weeks early. Everyone rehearses using the same plan. On Christmas Eve, the service flows beautifully because everyone knew exactly what to expect.
      </p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/services/songs">Song Library</a> – Add songs to service plans from your library</li>
        <li><a href="/resources/docs/services/teams">Teams</a> – Assign team members to service items</li>
        <li><a href="/resources/docs/services/scheduling">Volunteer Scheduling</a> – Ensure volunteers are scheduled before assigning them to plans</li>
        <li><a href="/resources/docs/events/calendar">Event Calendar</a> – Link service plans to calendar events</li>
        <li><a href="/resources/docs/communications/overview">Communications</a> – Notify teams about service plan updates</li>
        <li><a href="/resources/docs/ai/sermon-planner">AI Sermon Planner</a> – Generate sermon outlines to attach to service plans</li>
      </ul>
    </div>
  );
}
