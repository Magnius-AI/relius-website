export default function VolunteerSchedulingPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Volunteer Scheduling</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Schedule volunteers weeks or months in advance based on availability and preferences, prevent burnout with smart workload tracking, and handle conflicts and swaps effortlessly.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Volunteer scheduling is one of those essential tasks that can either energize your ministry or drain it completely. Done poorly, it's an endless cycle of last-minute texts, guilt-tripping volunteers, and scrambling to fill gaps. Done well, it's a system that respects people's time, prevents burnout, and keeps your church running smoothly week after week. Relius transforms scheduling from a burden into a streamlined process that honors both ministry needs and volunteer boundaries.
      </p>
      <p>
        The heart of Relius scheduling is respect—respect for volunteers' availability, preferences, commitments, and limits. When someone says "I can serve twice a month but not the last Sunday," the system remembers and honors that. When a volunteer has served three weeks in a row, Relius flags potential burnout and suggests giving them a break. When conflicts arise (like being scheduled for two roles at the same time), the system catches it before it becomes a Sunday morning disaster.
      </p>
      <p>
        Whether you're building next month's worship team rotation, filling greeters for the next quarter, or juggling last-minute changes when someone gets sick, volunteer scheduling in Relius gives you the tools to do it efficiently and compassionately. Automated reminders keep everyone informed, swap requests empower volunteers to manage their own commitments, and detailed reports show you exactly where you need more help—or where you're asking too much of too few.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Schedule</strong>: A roster of volunteer assignments covering a specific time period (like "March 2026" or "Q2 Schedule")</li>
        <li><strong>Shift/Slot</strong>: A specific volunteer assignment at a specific time (like "Greeter, Sunday March 15, 9:00 AM service")</li>
        <li><strong>Availability</strong>: When a volunteer is able to serve (set by the volunteer in their profile)</li>
        <li><strong>Blackout Dates</strong>: Times when a volunteer has requested not to be scheduled (vacations, family commitments)</li>
        <li><strong>Service Frequency</strong>: How often a volunteer wants to serve (like "2 times per month maximum")</li>
        <li><strong>Conflict</strong>: When a volunteer is scheduled for overlapping or incompatible assignments</li>
        <li><strong>Swap Request</strong>: When a volunteer can't make their shift and asks someone else to cover</li>
        <li><strong>Workload Tracking</strong>: Monitoring how often each volunteer serves to prevent burnout</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Define Your Scheduling Period</h3>
      <p>
        Navigate to <strong>Services → Scheduling</strong> and create a new schedule. Choose the time period you want to cover (like "April 2026" or "Easter through Pentecost"). Most churches schedule 4-6 weeks at a time—long enough to give volunteers notice, short enough to stay flexible.
      </p>

      <h3>Step 2: Select Teams and Positions</h3>
      <p>
        Choose which teams and positions need volunteers during this period. If you're scheduling worship teams, select positions like Worship Leader, Vocalists, Musicians. If you're scheduling hospitality, select Greeters, Ushers, Coffee Team. You don't have to schedule every team at once—focus on priority areas first.
      </p>

      <h3>Step 3: Review Volunteer Availability</h3>
      <p>
        Before assigning anyone, check who's available. Relius shows you each volunteer's availability preferences, blackout dates, and service frequency limits. Someone on vacation for two weeks won't appear as available. Someone who's already maxed out their monthly frequency will be flagged.
      </p>

      <h3>Step 4: Fill the Schedule</h3>
      <p>
        You can auto-assign volunteers (Relius distributes them evenly based on availability and preferences) or manually drag-and-drop volunteers into specific slots. Mix both approaches—auto-fill routine positions, manually place key roles like worship leaders. The system prevents double-booking and warns about potential conflicts.
      </p>

      <h3>Step 5: Publish and Notify</h3>
      <p>
        Review the complete schedule, checking for gaps, conflicts, or overloaded volunteers. Once satisfied, publish the schedule. All assigned volunteers receive notifications with their specific assignments, service dates/times, and a link to view the full schedule. They can accept, decline, or request swaps directly in the system.
      </p>

      <h2>Features</h2>

      <h3>Creating Schedules</h3>
      <p>
        Start every schedule by defining the scope: which services (Sunday morning, Wednesday night, special events), which dates, and which teams need coverage. You can create rolling schedules that repeat monthly or one-time schedules for specific events.
      </p>
      <p>
        <em>Example: Create a schedule called "May 2026 Worship & Tech" covering all Sundays in May (5 services) for Worship Team and Tech Team positions. Relius shows you need 35 total volunteer slots (7 positions × 5 services) and indicates you have 22 qualified volunteers available.</em>
      </p>

      <h3>Volunteer Availability and Preferences</h3>
      <p>
        Volunteers set their own availability preferences in their profile:
      </p>
      <ul>
        <li><strong>Service times</strong>: Which services they can attend (9:00 AM, 11:00 AM, Wednesday night, etc.)</li>
        <li><strong>Frequency</strong>: How often they want to serve ("1-2 times per month," "every other week," "monthly")</li>
        <li><strong>Blackout dates</strong>: Specific dates they're unavailable (vacation, family events, work travel)</li>
        <li><strong>Preferred positions</strong>: Which roles they prefer (someone might play both keys and guitar but prefer keys)</li>
        <li><strong>Team preferences</strong>: Whether they prefer serving with certain people or teams</li>
      </ul>
      <p>
        The scheduler respects these preferences automatically. If you try to assign someone who's unavailable, Relius warns you and suggests alternatives.
      </p>

      <h3>Handling Schedule Conflicts</h3>
      <p>
        Conflicts happen when a volunteer is scheduled for overlapping commitments. Common conflicts:
      </p>
      <ul>
        <li>Scheduled as both a greeter and a kids ministry teacher at the same service</li>
        <li>Scheduled for worship team during their requested vacation week</li>
        <li>Scheduled 4 times in one month when their limit is 2 times</li>
        <li>Assigned to two different teams at the same date/time</li>
      </ul>
      <p>
        Relius flags all conflicts with color-coded warnings. Resolve them by moving assignments, swapping volunteers, or adjusting the schedule. The system won't let you publish a schedule with unresolved conflicts unless you override (not recommended!).
      </p>

      <h3>Swap Requests and Changes</h3>
      <p>
        Life happens—people get sick, family emergencies arise, work schedules change. Instead of volunteers texting the coordinator at 10:00 PM Saturday night, Relius provides a self-service swap system:
      </p>
      <ol>
        <li>Volunteer realizes they can't make their assigned shift</li>
        <li>They log into their volunteer portal and request a swap</li>
        <li>Relius notifies other qualified volunteers who are available that day</li>
        <li>Someone accepts the swap (or coordinator manually assigns a replacement)</li>
        <li>Both volunteers and the coordinator get confirmation; the schedule updates automatically</li>
      </ol>
      <p>
        This empowers volunteers to manage their own commitments while reducing coordinator workload. No more group texts or phone tag.
      </p>

      <h3>Automated Reminders</h3>
      <p>
        Set up automated reminders at key intervals:
      </p>
      <ul>
        <li><strong>Schedule published</strong>: "Your assignments for April are now available"</li>
        <li><strong>3 days before service</strong>: "Reminder: You're serving as greeter this Sunday at 9:00 AM"</li>
        <li><strong>1 day before service</strong>: "Tomorrow reminder: Worship team rehearsal at 8:00 AM, service at 9:00 AM"</li>
        <li><strong>Morning of service</strong>: "Today: You're scheduled for tech team at 10:30 AM"</li>
      </ul>
      <p>
        Reminders go via email, SMS, or push notification based on each volunteer's preferences. Reduce no-shows by 80% simply by reminding people what they committed to.
      </p>

      <h3>Workload Tracking and Burnout Prevention</h3>
      <p>
        One of the biggest reasons volunteers quit is overcommitment. Relius tracks workload across all teams and services:
      </p>
      <ul>
        <li>How many times each volunteer has served this month</li>
        <li>How many consecutive weeks without a break</li>
        <li>Total hours committed (some people serve on multiple teams)</li>
        <li>Decline rates (are they saying no more often lately?)</li>
      </ul>
      <p>
        When someone is approaching their service frequency limit, Relius flags them and suggests giving them a break. When someone has served 4+ weeks in a row, the system recommends scheduling them off. This proactive approach prevents burnout before it happens.
      </p>
      <p>
        <em>Example: Sarah has served on the hospitality team every Sunday for 6 weeks straight. When you start building the next schedule, Relius highlights her in yellow with a note: "Sarah has served 6 consecutive weeks. Consider giving her a break." You adjust the schedule to skip her for the next two weeks, and she later thanks you for being thoughtful about her workload.</em>
      </p>

      <h3>Volunteer Reports and Analytics</h3>
      <p>
        Generate reports to understand your volunteer ecosystem:
      </p>
      <ul>
        <li><strong>Service frequency report</strong>: Who's serving often, who's rarely serving</li>
        <li><strong>Gap analysis</strong>: Which positions have insufficient coverage</li>
        <li><strong>Reliability report</strong>: Who shows up consistently vs. frequent no-shows</li>
        <li><strong>Recruitment needs</strong>: Specific teams and positions that need more volunteers</li>
        <li><strong>Engagement trends</strong>: Are volunteers accepting assignments or declining more often?</li>
        <li><strong>Burnout risk</strong>: Volunteers showing signs of overcommitment</li>
      </ul>
      <p>
        Use these reports to make data-driven decisions about recruiting, team structure, and volunteer care.
      </p>

      <details>
        <summary>Advanced Options</summary>
        
        <h4>AI-Powered Smart Scheduling</h4>
        <p>
          Enable AI-assisted scheduling for complex teams. The AI considers availability, preferences, service frequency, past patterns, team chemistry, skill levels, and fairness to generate optimal schedules. It learns from your adjustments and improves over time. Use AI for initial drafts, then manually tweak as needed.
        </p>

        <h4>Recurring Schedule Templates</h4>
        <p>
          For stable teams, create recurring templates like "Greeter Rotation Group A serves 1st and 3rd Sundays, Group B serves 2nd and 4th Sundays." Apply the template each month, and Relius auto-fills based on the pattern. Adjust for holidays, blackout dates, and exceptions.
        </p>

        <h4>Multi-Service Coordination</h4>
        <p>
          If you have multiple services per weekend, coordinate schedules to maximize volunteer efficiency. Some volunteers can serve both services; others only one. Set preferences and let Relius suggest who can do double-duty when needed (without overloading them).
        </p>

        <h4>Team Preferences and Chemistry</h4>
        <p>
          Track which volunteers work well together and prefer serving together. When scheduling the worship team, keep guitar/bass pairs together if they've built chemistry. Avoid pairing volunteers who've had conflicts. Relius can factor team chemistry into auto-scheduling.
        </p>

        <h4>Emergency Contact Lists</h4>
        <p>
          Generate on-call lists for each service showing backup volunteers who can be called last-minute. Print or save to your phone for emergencies when someone no-shows.
        </p>

        <h4>Volunteer Check-In and Attendance</h4>
        <p>
          On the day of service, coordinators can mark volunteers as checked-in, no-show, or late. This attendance tracking feeds reliability reports and helps identify volunteers who may need follow-up or removal from the schedule.
        </p>

        <h4>Schedule Forecasting</h4>
        <p>
          Project volunteer needs months ahead based on current team size and growth trends. If you're planning to launch a third service in 6 months, Relius shows you'll need 12 additional volunteers and suggests starting recruitment now.
        </p>

        <h4>Custom Scheduling Rules</h4>
        <p>
          Create custom rules like "Never schedule husband and wife for nursery on the same day" or "Rotate worship leaders alphabetically" or "Always pair a veteran volunteer with a trainee." Relius enforces your rules automatically.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Schedule 4-6 weeks ahead</strong> – Gives volunteers sufficient notice while staying flexible</li>
        <li><strong>Honor availability rigorously</strong> – If someone says they're unavailable, never override without explicit permission</li>
        <li><strong>Distribute workload evenly</strong> – Avoid over-relying on a few super-volunteers; spread opportunities</li>
        <li><strong>Give regular breaks</strong> – No one should serve more than 2-3 times per month without intentional agreement</li>
        <li><strong>Publish schedules consistently</strong> – Same day each month builds routine (like "schedules always publish the first Monday")</li>
        <li><strong>Send reminders at multiple intervals</strong> – 3 days, 1 day, and morning-of reminders drastically reduce no-shows</li>
        <li><strong>Empower volunteers to swap</strong> – Don't be the bottleneck; let them manage changes themselves</li>
        <li><strong>Track and act on trends</strong> – If someone declines frequently, have a conversation; don't just keep assigning them</li>
        <li><strong>Maintain backup lists</strong> – Know who to call in emergencies for critical positions</li>
        <li><strong>Celebrate consistency</strong> – Publicly thank volunteers who show up reliably; recognition matters</li>
      </ul>

      <h2>Common Questions</h2>
      
      <p><strong>Q: How far in advance should we schedule volunteers?</strong></p>
      <p>A: 4-6 weeks is the sweet spot for most churches. Farther ahead leads to more changes and swaps; shorter notice frustrates volunteers who need to plan. For special events (like Christmas or Easter), schedule 8-12 weeks ahead.</p>

      <p><strong>Q: What if a volunteer declines their assignment?</strong></p>
      <p>A: When someone declines, Relius notifies the coordinator and suggests available alternatives. The coordinator can reassign the slot or leave it open if time permits finding a replacement. If someone declines frequently, it's a signal for a conversation about fit or commitment level.</p>

      <p><strong>Q: Can volunteers request specific dates they want to serve?</strong></p>
      <p>A: Yes! In their availability settings, volunteers can mark preferred dates (like "I want to serve Mother's Day") in addition to blackout dates. The scheduler highlights these preferences so coordinators can honor them when possible.</p>

      <p><strong>Q: How do we handle volunteers who don't show up?</strong></p>
      <p>A: Mark them as no-shows in the system. After 2-3 no-shows (especially without notice), the system flags them for coordinator follow-up. Have a conversation to understand what's happening—life circumstances may have changed, or they may need to step back from volunteering.</p>

      <p><strong>Q: What if we don't have enough volunteers to fill all slots?</strong></p>
      <p>A: Leave slots unfilled rather than overloading current volunteers. Use gap reports to identify specific recruiting needs, then target recruitment for those roles. Consider combining positions (like having one tech person handle both sound and slides) or rotating positions less frequently.</p>

      <p><strong>Q: Can we set different service frequency limits for different teams?</strong></p>
      <p>A: Yes! Worship team might allow serving 3x per month (since they're musicians who love it), while nursery volunteers might be capped at 1-2x per month (since it's more physically demanding). Set limits per team or per position.</p>

      <h2>Real-World Scenarios</h2>

      <h3>Scenario: Volunteer Burnout Averted</h3>
      <p>
        Grace Church has relied heavily on three key tech volunteers who've been serving nearly every Sunday. The workload report shows David has served 11 of the last 12 weeks, Mark 10 of 12, and Lisa 9 of 12. Pastor Sarah realizes they're heading for burnout and recruits two new tech volunteers. She rebuilds the schedule to give David, Mark, and Lisa each two weeks off per month, rotating the new volunteers in. Within a month, the original three volunteers report feeling refreshed and more enthusiastic about serving.
      </p>

      <h3>Scenario: Holiday Coverage Solved</h3>
      <p>
        Fourth of July weekend is notoriously difficult to schedule—half the church is on vacation. First Baptist publishes the July schedule in early May, highlighting that July 4 weekend needs extra coverage. Several volunteers who aren't traveling that weekend volunteer to serve. By planning early and communicating needs, they avoid the usual last-minute scramble.
      </p>

      <h3>Scenario: Swap System Saves Sunday</h3>
      <p>
        On Friday evening, worship leader Jake gets sick and can't lead Sunday's service. He logs into the volunteer portal and requests a swap. The system notifies the three other qualified worship leaders; Sarah accepts the swap within 20 minutes. Jake thanks Sarah via the system, the coordinator gets automatic confirmation, and Sunday morning proceeds without a hitch. Total time to resolve: 20 minutes, zero phone calls.
      </p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/services/teams">Teams</a> – Build teams before scheduling volunteers</li>
        <li><a href="/resources/docs/services/plans">Service Plans</a> – Link volunteer schedules to specific services</li>
        <li><a href="/resources/docs/people/member-directory">Member Directory</a> – Source volunteers from your congregation</li>
        <li><a href="/resources/docs/communications/overview">Communications</a> – Send schedule notifications and reminders</li>
        <li><a href="/resources/docs/ai/volunteer-scheduler">AI Volunteer Scheduler</a> – Use AI to optimize schedules and prevent burnout</li>
        <li><a href="/resources/docs/events/calendar">Event Calendar</a> – View volunteer commitments alongside church events</li>
      </ul>
    </div>
  );
}
