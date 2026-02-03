export type ParagraphBlock = { type: "paragraph"; text: string };
export type ListBlock = { type: "list"; style: "unordered" | "ordered"; heading?: string; items: string[] };
export type SubheadingBlock = { type: "subheading"; text: string };
export type CalloutBlock = { type: "callout"; variant: "tip" | "warning" | "info" | "quote"; title?: string; body: string };
export type StatBlock = { type: "stat"; value: string; label: string; source?: string };
export type CtaBlock = { type: "cta"; heading: string; body?: string; buttonText: string; buttonHref: string; variant?: "primary" | "secondary" };
export type LinkCardBlock = { type: "link-card"; title: string; description?: string; href: string };

export type ContentBlock = ParagraphBlock | ListBlock | SubheadingBlock | CalloutBlock | StatBlock | CtaBlock | LinkCardBlock;

export type BlogSection = {
  heading: string;
  blocks: ContentBlock[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  role: string;
  date: string;
  readTime: string;
  category: "Ministry Insight" | "Best Practice" | "Product" | "Perspective";
  topics: string[];
  churchSizeFocus: string[];
  contentType: "Guide" | "Opinion" | "Playbook" | "Interview";
  content: BlogSection[];
  takeaway: string[];
  quote?: string;
  image?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "prevent-volunteer-burnout",
    title: "5 ways to prevent volunteer burnout (from churches doing it well)",
    excerpt: "Burnout rarely announces itself. It shows up as a resigned text on Saturday night. Here are five rhythms that keep volunteers engaged for the long haul.",
    author: "Felix Tang",
    role: "Relius Cofounder",
    date: "2025-01-12",
    readTime: "7 min",
    category: "Ministry Insight",
    contentType: "Guide",
    topics: ["Volunteers", "Pastoral Care"],
    churchSizeFocus: ["Small", "Mid-size"],
    content: [
      {
        heading: "The Saturday night text",
        blocks: [
          { type: "paragraph", text: "It usually comes around 9 PM on Saturday. A short text from one of your most reliable volunteers: 'Hey, I can't make it tomorrow. Sorry for the late notice.' You scramble, find a fill-in, and the service goes fine." },
          { type: "paragraph", text: "A month later, another text. Then silence. By the time you call them, they've quietly stepped away from the church entirely." },
          { type: "paragraph", text: "Volunteer burnout rarely announces itself with a dramatic exit. It's a slow fade -- missed Sundays, shorter responses, less enthusiasm. By the time most churches notice, the person has already made their decision. The question is whether you can build rhythms that catch it earlier." },
        ],
      },
      {
        heading: "1. Rotate before people have to ask",
        blocks: [
          { type: "paragraph", text: "Most churches wait for volunteers to say they're tired. By that point, they're not tired -- they're done. The better approach is building rotation into the system so rest is expected, not requested." },
          { type: "paragraph", text: "A church of 150 in central Texas treats every volunteer role like a shift position. Greeters serve two Sundays, then get two off. Kids ministry volunteers rotate monthly. Nobody serves more than three weeks in a row without a scheduled break. The rotation is visible to everyone -- posted online and updated automatically through their scheduling software." },
          { type: "paragraph", text: "The result: people actually look forward to their serving weekends because they know a break is coming. There's no guilt in the rotation because it's the system, not a personal decision to step back." },
          { type: "callout", variant: "tip", title: "Make it visible", body: "Track service frequency in your ChMS. If someone is serving three or more times a month, flag them for a check-in before they flag themselves by disappearing." },
        ],
      },
      {
        heading: "2. Separate the role from the identity",
        blocks: [
          { type: "paragraph", text: "In many churches, long-time volunteers become synonymous with their role. Linda IS the children's ministry. Marcus IS the sound booth. When the role becomes the identity, stepping away feels like abandoning the church." },
          { type: "paragraph", text: "This creates a toxic dynamic where the most dedicated people are also the most trapped. They want a break, but they feel like the ministry would fall apart without them -- and honestly, sometimes it would, because nobody else has been trained." },
          { type: "paragraph", text: "Healthy volunteer cultures make a clear distinction: you are not your role. You are a person the church loves, and this role is one way you contribute right now. That framing makes transitions feel natural instead of threatening." },
          { type: "subheading", text: "Practical ways to separate role from identity" },
          { type: "list", style: "unordered", items: [
            "Train at least two people for every critical volunteer position",
            "Celebrate people when they transition roles, not just when they start",
            "Publicly normalize phrases like 'serving season' instead of 'permanent role'",
            "Ask volunteers annually: 'Is this still the right fit for you this year?'",
          ] },
          { type: "paragraph", text: "That annual conversation is important. It gives people a socially acceptable offramp and gives you a chance to hear what they actually think about their experience." },
        ],
      },
      {
        heading: "3. Make appreciation specific and surprising",
        blocks: [
          { type: "paragraph", text: "Generic thank-yous disappear into noise. 'Thanks for serving!' on a Sunday morning announcement slide does almost nothing. People remember specific, unexpected moments of recognition." },
          { type: "paragraph", text: "A mid-size church in Georgia keeps a running doc of volunteer stories -- the time a greeter noticed a first-time guest crying in the lobby and sat with her, the sound tech who stayed an extra hour to help a visiting worship leader. They pull from this doc during staff meetings, and the pastor mentions one story by name every month from the stage." },
          { type: "list", style: "unordered", heading: "Appreciation that sticks:", items: [
            "A handwritten note referencing a specific moment the volunteer showed up well",
            "A $10 coffee card with a one-sentence prayer written on the envelope",
            "Five minutes of stage time for a pastor to tell a volunteer's story (with permission)",
            "A text from a leader who isn't the volunteer's direct supervisor -- widening the circle of who notices",
          ] },
          { type: "paragraph", text: "The pattern: be specific, be surprising, and involve people outside the volunteer's usual circle. Recognition from unexpected sources carries more weight. A thank you from someone they didn't expect to notice lands differently than a routine shout-out from their team leader." },
        ],
      },
      {
        heading: "4. Build Sabbath into your volunteer culture",
        blocks: [
          { type: "paragraph", text: "Churches talk about Sabbath from the pulpit but rarely practice it in their volunteer systems. If your most committed volunteers serve every single weekend with no structured rest, you're preaching a theology you don't operationalize." },
          { type: "paragraph", text: "One church built what they call a 'Sabbath quarter.' Every volunteer gets one quarter per year (three months) where they serve at a reduced frequency or step back entirely. It's not a break they have to request -- it's built into the annual calendar." },
          { type: "paragraph", text: "When they launched this, leaders worried about coverage gaps. What actually happened: more people volunteered because the commitment felt sustainable. People who had been saying no for years finally said yes, because they could see the rest built into the system." },
          { type: "paragraph", text: "The principle is straightforward: if you believe rest is a spiritual discipline, build it into every role in your church -- not just the paid ones. Your greeter who has been serving every Sunday for three years deserves the same Sabbath rhythm you preach from the stage." },
          { type: "callout", variant: "quote", body: "We were afraid of having empty roles for a quarter. What we got was a longer bench because people stopped being afraid to say yes." },
        ],
      },
      {
        heading: "5. Exit interviews are not just for employees",
        blocks: [
          { type: "paragraph", text: "When a volunteer steps away, most churches let them go quietly. No conversation, no feedback, no documentation. That's a missed opportunity on two fronts: you lose the chance to learn what went wrong, and you lose the relational data that could help the next person who steps into the role." },
          { type: "paragraph", text: "Create a simple exit conversation -- not a formal process, just a coffee or a 10-minute phone call. Three questions are enough:" },
          { type: "list", style: "ordered", items: [
            "What was the best part of serving in this role?",
            "What made it hard?",
            "If you came back in six months, what would need to be different?",
          ] },
          { type: "paragraph", text: "Document what you hear. Over time, patterns emerge. If three greeters in a row say the Sunday morning setup process is chaotic, that's not a people problem -- it's a systems problem. And if someone says they'd come back with a lighter schedule, you have a concrete re-engagement path." },
          { type: "paragraph", text: "The third question is especially powerful. It turns what feels like a goodbye into a conversation about the future. Most volunteers who leave don't leave the church -- they leave the role. Keeping that door open, with documented specifics about what would bring them back, makes re-engagement possible months or even years later." },
        ],
      },
      {
        heading: "Where to start",
        blocks: [
          { type: "paragraph", text: "You don't have to implement all five at once. Pick the one that addresses your most urgent pain point. If you're constantly scrambling for fill-ins, start with rotation. If your best people are quietly leaving, start with the exit conversation." },
          { type: "paragraph", text: "Here's a quick diagnostic: think about the last three volunteers who stepped back. Was there a pattern? Did they serve for a long stretch without a break? Did they feel unappreciated? Were they in roles that didn't match their gifts? The answer tells you which of these five areas to tackle first." },
          { type: "paragraph", text: "The common thread: treat volunteer care with the same intentionality you bring to pastoral care. Your volunteers are not a resource to be managed. They're people to be shepherded. When the system reflects that, they stay longer -- and they serve with more joy." },
          { type: "cta", heading: "Track volunteer health with Relius", body: "Service frequency, rotation schedules, and check-in reminders -- all in one place.", buttonText: "Explore use cases", buttonHref: "/use-cases/" },
        ],
      },
    ],
    takeaway: [
      "Build rotation into the system so rest is expected, not requested.",
      "Separate the person from the role -- make transitions feel natural.",
      "Specific, surprising appreciation beats generic thank-yous every time.",
      "Practice the Sabbath theology you preach -- build rest into volunteer calendars.",
      "Exit conversations reveal systems problems, not just people problems.",
    ],
    quote: "When volunteers know there's an exit ramp, they stay longer because they trust you'll notice before they're exhausted.",
    image: "/images/blog/prevent-volunteer-burnout.webp",
  },
  {
    slug: "why-church-software-fails",
    title: "Why most church software fails (and how to pick better)",
    excerpt: "The graveyard of abandoned church software is full of platforms that looked great in the demo. Here are the real reasons adoption fails and what to look for instead.",
    author: "Felix Tang",
    role: "Relius Cofounder",
    date: "2025-01-05",
    readTime: "8 min",
    category: "Perspective",
    contentType: "Opinion",
    topics: ["Operations", "Leadership"],
    churchSizeFocus: ["Mid-size", "Growing", "Multi-site"],
    content: [
      {
        heading: "The demo looked perfect",
        blocks: [
          { type: "paragraph", text: "The sales call went great. The interface was clean. The rep walked through a slick check-in flow, showed a beautiful giving dashboard, and mentioned AI features coming next quarter. Your team left the demo excited." },
          { type: "paragraph", text: "Six months later, half the staff is still using spreadsheets. The admin pastor logs into the platform once a week to pull a report she could get from Google Sheets. The children's ministry lead never set up the check-in module because it didn't match how they actually run Sunday mornings." },
          { type: "paragraph", text: "This story plays out at churches constantly. The software isn't bad. It just doesn't fit -- and nobody figured that out until after the contract was signed. Here are the patterns we see behind failed church software adoptions, and what to look for instead." },
        ],
      },
      {
        heading: "1. The language doesn't match your ministry",
        blocks: [
          { type: "paragraph", text: "This is the most underestimated adoption killer. If your software calls people 'constituents' and your church calls them 'family,' there's friction every single time someone uses the system. If the care module uses corporate language like 'case management' instead of 'pastoral notes,' your pastors won't use it." },
          { type: "paragraph", text: "Language isn't cosmetic. It signals whether the software was built for churches or adapted from a nonprofit CRM. When vocabulary feels foreign, your team translates mentally every time they interact with the system. That cognitive load adds up, and eventually people default to the tools that speak their language -- usually email and spreadsheets. The software that matches your team's vocabulary is the software that gets used." },
          { type: "callout", variant: "tip", title: "The vocabulary test", body: "During your next demo, ignore the features for five minutes. Just read the labels, menu items, and field names. Do they sound like how your staff actually talks about ministry? If not, adoption will be an uphill battle." },
        ],
      },
      {
        heading: "2. It solves the wrong problem",
        blocks: [
          { type: "paragraph", text: "Most church software evaluations start with a feature checklist. Does it do check-in? Does it handle giving? Does it have a groups module? This approach rewards breadth over depth and leads to platforms that technically do everything but do nothing well for your specific context." },
          { type: "paragraph", text: "A better starting point: write down the five tasks your team spends the most time on each week. Not the tasks you wish you could do -- the ones you actually do. Then evaluate whether the software makes those specific tasks faster, easier, or more reliable. This is a simple exercise, but almost nobody does it before signing a contract." },
          { type: "list", style: "unordered", heading: "Common mismatch examples:", items: [
            "Buying a platform for its giving module when your real pain is volunteer scheduling",
            "Choosing a system with powerful reporting when nobody on staff reads reports",
            "Prioritizing a slick mobile app when your volunteers primarily use desktop",
            "Selecting based on AI features when your team hasn't mastered basic workflows yet",
          ] },
          { type: "paragraph", text: "The right software solves the problem you actually have, not the one that's most impressive in a demo." },
        ],
      },
      {
        heading: "3. Too many clicks for basic tasks",
        blocks: [
          { type: "paragraph", text: "Count the clicks. Seriously. During your trial, complete your most common task -- logging a pastoral note, scheduling a volunteer, sending a group message -- and count every click, page load, and form field. If it takes eight clicks to do something your team does twenty times a week, they'll stop doing it." },
          { type: "paragraph", text: "Software companies optimize for feature completeness, not workflow speed. That means every module works, but the path from 'I need to do this thing' to 'it's done' might wind through three screens and a settings page. Churches don't have time for that. Your admin is juggling Sunday prep, a funeral this week, and a facilities request. They need two clicks, not eight." },
          { type: "paragraph", text: "This is also why free trials matter more than demos. In a demo, a trained rep clicks through the software at full speed. They know exactly where everything is. Your team doesn't. The trial reveals what the demo hides: the actual learning curve for real people doing real tasks." },
          { type: "paragraph", text: "The best test: hand the software to the least technical person on your team and ask them to complete a task without help. If they struggle, your Sunday morning will struggle too." },
        ],
      },
      {
        heading: "4. The support relationship is transactional",
        blocks: [
          { type: "paragraph", text: "Software breaks. Features confuse people. Needs change. The question isn't whether you'll need support -- it's whether you'll get a real human who understands church context when you do." },
          { type: "paragraph", text: "During your trial, submit a support ticket about something that genuinely confuses you. Not a softball question -- a real one. Then pay attention. How fast did they respond? Did they solve the problem, or link you to a knowledge base article? Did the response feel like it came from someone who understands ministry, or someone reading a script?" },
          { type: "list", style: "unordered", heading: "Questions to ask before you sign:", items: [
            "Can I get the name of a real person who will be my point of contact?",
            "Do you offer support on Sunday mornings when churches need it most?",
            "What's your average response time for urgent issues?",
            "How do you handle feature requests from churches?",
          ] },
          { type: "callout", variant: "info", body: "The software relationship often lasts five to ten years. You want a partner who understands ministry rhythms and treats your questions with patience -- not a vendor who disappears after the sale." },
        ],
      },
      {
        heading: "5. Nobody owns the rollout",
        blocks: [
          { type: "paragraph", text: "A surprising number of church software failures aren't about the software at all. They're about implementation. The platform gets purchased, a few people attend a training webinar, and then... nothing. No rollout plan. No champion. No timeline for getting each team onboarded." },
          { type: "paragraph", text: "This is the most preventable failure on this list. The software might be excellent. The price might be right. But if nobody drives adoption, the platform sits unused while people drift back to spreadsheets and email chains." },
          { type: "paragraph", text: "Successful implementations share a pattern: one person owns the rollout. They set weekly goals. They onboard one team at a time instead of flipping everyone over at once. They check in with each ministry lead after the first two weeks to troubleshoot friction." },
          { type: "subheading", text: "A simple rollout framework" },
          { type: "list", style: "ordered", items: [
            "Week 1-2: Admin team and lead pastor get comfortable with core features",
            "Week 3-4: Onboard the team with the most urgent pain point (usually check-in or volunteers)",
            "Week 5-6: Add the second team, using lessons from the first rollout",
            "Week 7-8: Full staff orientation with real workflows, not abstract training",
            "Month 3: Review what's working and what's been abandoned -- adjust or simplify",
          ] },
          { type: "paragraph", text: "The churches that succeed with new software treat it like a ministry initiative, not an IT project." },
        ],
      },
      {
        heading: "Final note",
        blocks: [
          { type: "paragraph", text: "Church software doesn't fail because it lacks features. It fails because it doesn't fit the people using it, the problems they actually have, or the pace at which they can adopt something new. The best platform for your church is the one your whole team will actually use -- consistently, without frustration, without reverting to spreadsheets." },
          { type: "paragraph", text: "If you're currently evaluating platforms, resist the urge to compare feature lists side by side. Instead, run a two-week trial with your actual team doing actual tasks. The platform that feels natural after two weeks will serve you for years. The one that requires constant workarounds after two weeks will only get worse." },
          { type: "paragraph", text: "Before your next demo, write down your five most common weekly tasks and bring that list with you. Let it guide the conversation instead of the sales deck. That single shift changes everything about how you evaluate." },
          { type: "cta", heading: "Software that fits your ministry", body: "Relius was built around how churches actually work -- pastoral vocabulary, fast workflows, and real human support.", buttonText: "Start a conversation", buttonHref: "/contact/" },
        ],
      },
    ],
    takeaway: [
      "Language matters -- if the software doesn't speak ministry, your team won't use it.",
      "Evaluate against your actual weekly tasks, not a feature checklist.",
      "Count the clicks. If basic tasks take too long, adoption will fail.",
      "Test support before you buy -- submit a real ticket during your trial.",
      "Assign one person to own the rollout and onboard teams sequentially.",
    ],
    image: "/images/blog/why-church-software-fails.webp",
  },
  {
    slug: "first-time-guests-welcome",
    title: "Making first-time guests feel welcome: practical tips",
    excerpt: "The lobby experience matters, but the real test is what happens Monday through Saturday. Here is a step-by-step playbook for turning visitors into regulars.",
    author: "Felix Tang",
    role: "Relius Cofounder",
    date: "2024-12-18",
    readTime: "8 min",
    category: "Best Practice",
    contentType: "Guide",
    topics: ["Guests", "Systems"],
    churchSizeFocus: ["Small", "Mid-size", "Growing"],
    content: [
      {
        heading: "The 168-hour window",
        blocks: [
          { type: "paragraph", text: "A first-time guest walks through your doors on Sunday morning. They stay for the service, smile at a greeter, maybe fill out a connect card. They leave feeling cautiously positive." },
          { type: "paragraph", text: "What happens next matters more than anything that happened in the lobby. There are 168 hours between this Sunday and next Sunday. In those hours, that guest is deciding -- consciously or not -- whether your church is worth a second visit. Most churches spend enormous energy on the Sunday morning experience and almost none on the 168 hours that follow." },
          { type: "paragraph", text: "This playbook breaks the guest follow-up process into concrete steps. It works for churches of 100 and churches of 1,000. The systems scale differently, but the principles stay the same: be fast, be personal, be specific about next steps." },
        ],
      },
      {
        heading: "Step 1: Capture information without friction",
        blocks: [
          { type: "paragraph", text: "Before you can follow up, you need a name and a way to reach them. Most churches rely on connect cards -- paper or digital -- but the completion rate is usually dismal. People don't want to fill out forms during a service. They came to worship, not to do paperwork." },
          { type: "paragraph", text: "The most effective approach combines multiple low-friction touchpoints. Not everyone will engage with each one, but together they cast a wider net." },
          { type: "list", style: "unordered", heading: "Guest information capture methods:", items: [
            "Digital check-in kiosk with a dedicated 'First Time' button that captures name, phone, and email in under 60 seconds",
            "A QR code on the seat or bulletin that links to a simple two-field form (name and phone)",
            "A greeter with a tablet who offers to check them in personally",
            "A text-to-connect number displayed on screen: 'Text HELLO to...'",
          ] },
          { type: "paragraph", text: "The goal is not to collect a complete profile on day one. A first name and a phone number is enough. Everything else can come later, naturally, as the relationship develops. Asking for too much too soon makes people feel like a lead in a sales funnel, not a guest in a community." },
        ],
      },
      {
        heading: "Step 2: Make contact within 24 hours",
        blocks: [
          { type: "paragraph", text: "Speed is the single biggest factor in guest return rates. A church that follows up on Sunday afternoon outperforms a church that follows up on Wednesday every time. The guest's experience is still fresh. The emotional connection is still warm. Waiting lets that window close." },
          { type: "paragraph", text: "The ideal first contact is a text message from a real person -- not a marketing blast. Something like: 'Hey Sarah, this is Marcus from Grace Church. We're glad you visited today. If you have any questions about the church or want to grab coffee this week, just text back.' Short. Warm. No pressure." },
          { type: "callout", variant: "warning", title: "What not to do", body: "Do not send a mass email with a subject line like 'Thanks for visiting Grace Church!' It reads as automated because it is automated. Guests can tell the difference between a real message and a template. If your first contact feels like marketing, you've already lost ground." },
          { type: "paragraph", text: "Assign a specific person to each guest -- a 'champion' who owns that follow-up relationship for the next 30 days. Not the pastor. A volunteer or staff member with the relational capacity to care about one more person this week." },
        ],
      },
      {
        heading: "Step 3: Offer a specific next step, not a menu",
        blocks: [
          { type: "paragraph", text: "The most common mistake in guest follow-up is offering too many options. 'Check out our small groups, volunteer opportunities, next steps class, and midweek service!' sounds helpful. It's actually paralyzing. When everything is a next step, nothing is." },
          { type: "paragraph", text: "Instead, offer one specific invitation based on what you know about the guest. A young couple with kids? Invite them to the family cookout next Saturday. A college student who came alone? Invite them to the young adults hangout on Thursday. A couple who mentioned they just moved to town? Invite them to the newcomers dinner." },
          { type: "subheading", text: "Build a 'next invite' library" },
          { type: "paragraph", text: "Keep a running list of low-commitment entry points that happen regularly. These should be social, not churchy. Dinner, not doctrine. The goal is a second interaction in a relaxed setting where relationships can start to form." },
          { type: "list", style: "unordered", items: [
            "Monthly newcomers dinner (keep it small -- 10-15 people max)",
            "Weekend family event (park day, game night, or cookout)",
            "Coffee with a pastor (informal, 30 minutes, no agenda)",
            "Interest-based hangout (hiking group, book club, pickup basketball)",
          ] },
          { type: "paragraph", text: "Match the invitation to the person. A single invitation that fits is more powerful than five options that don't. Your follow-up champion should have access to this list and enough context about the guest to make a thoughtful recommendation." },
        ],
      },
      {
        heading: "Step 4: Track and review every Monday",
        blocks: [
          { type: "paragraph", text: "Guest follow-up fails when it depends on individual memory. People forget. Life gets busy. The guest who visited last Sunday slips through the cracks because nobody checked whether the follow-up actually happened." },
          { type: "paragraph", text: "Build a simple Monday morning rhythm. Pull your guest list from the weekend. For each person, answer two questions: Did someone reach out? What was the response? If the answer to the first question is no, escalate immediately. If someone has been assigned but hasn't made contact in 48 hours, reassign." },
          { type: "callout", variant: "tip", title: "The Monday dashboard", body: "Make guest follow-up the **first agenda item** in your Monday staff meeting. Put names on a screen. Celebrate contacts that were made. Assign ones that were missed. When the team sees this every week, nobody wants to be the person who dropped the ball." },
          { type: "paragraph", text: "This is where systems matter. A spreadsheet works for a church of 50. Beyond that, you need a tool that tracks guest status, assigns follow-up owners, and shows you at a glance who's been contacted and who hasn't." },
          { type: "paragraph", text: "Track outcomes over time, not just activity. Did someone make contact? That's activity. Did the guest come back a second time? That's an outcome. When you track outcomes, you learn which follow-up approaches actually drive return visits. Maybe the coffee invitation converts better than the text message. Maybe families with kids respond better when the children's pastor reaches out instead of a general volunteer. Data surfaces these patterns." },
        ],
      },
      {
        heading: "Step 5: The 30-day path to belonging",
        blocks: [
          { type: "paragraph", text: "The first visit is awareness. The second visit is interest. By the third visit, people are deciding whether they belong. Your job in the first 30 days is to help them feel like they do." },
          { type: "list", style: "ordered", heading: "A 30-day guest pathway:", items: [
            "Day 0: Guest visits. Information captured at check-in.",
            "Day 0-1: Personal text from assigned champion. Simple, warm, no pressure.",
            "Day 3-5: Specific invitation to one upcoming event that fits their profile.",
            "Day 7: Second Sunday. Greeter is briefed to look for them by name.",
            "Day 10-14: If they returned, champion invites them to coffee or a small group visit.",
            "Day 21-30: If engagement continues, introduce them to a ministry leader or group leader.",
          ] },
          { type: "paragraph", text: "Not every guest will follow this path. Some will come back next week on their own. Some won't return for months. The pathway isn't a rigid funnel -- it's a series of gentle nudges that communicate 'we noticed you, and we'd like to know you.'" },
        ],
      },
      {
        heading: "Wrap up",
        blocks: [
          { type: "paragraph", text: "The churches that retain guests aren't the ones with the best coffee or the slickest lobby. They're the ones that follow up fast, follow up personally, and make the next step obvious. Most of this isn't complicated. It's just consistent." },
          { type: "paragraph", text: "Here's the reality most churches avoid: the gap between intention and execution in guest follow-up is enormous. Nearly every church says they care about visitors. Far fewer have a documented process with assigned owners and weekly accountability. The playbook above isn't revolutionary. It's what deliberate hospitality looks like when you write it down and actually do it." },
          { type: "paragraph", text: "Pick one piece of this playbook that your church isn't doing yet and start there. If you're not following up within 24 hours, fix that first. Everything else builds on speed." },
          { type: "cta", heading: "Automate the follow-up, keep it personal", body: "Relius assigns champions, tracks guest status, and makes sure nobody falls through the cracks.", buttonText: "Explore use cases", buttonHref: "/use-cases/" },
        ],
      },
    ],
    takeaway: [
      "The 168 hours between Sundays matter more than the Sunday morning experience.",
      "A first name and phone number is enough to start -- don't over-collect on day one.",
      "Speed wins. Follow up within 24 hours with a personal text, not an automated email.",
      "Offer one specific next step that fits the person, not a menu of five options.",
      "Review guest follow-up every Monday. What gets tracked gets done.",
    ],
    image: "/images/blog/first-time-guests-welcome.webp",
  },
  {
    slug: "church-200-vs-2000",
    title: "Running a church of 200 vs 2,000: what actually changes",
    excerpt: "Growth changes everything and nothing. The mission stays the same, but the systems underneath have to evolve. Here is what shifts when a church scales -- and what should stay constant.",
    author: "Felix Tang",
    role: "Relius Cofounder",
    date: "2024-12-05",
    readTime: "9 min",
    category: "Perspective",
    contentType: "Playbook",
    topics: ["Leadership", "Scaling"],
    churchSizeFocus: ["Small", "Growing", "Multi-site"],
    content: [
      {
        heading: "Two churches, same mission, different Monday mornings",
        blocks: [
          { type: "paragraph", text: "Pastor Dan leads a church of 200 in a college town. He knows every family by name. When someone misses three Sundays, he notices. When a couple is struggling, he hears about it at the coffee shop before it reaches the prayer list. His Monday mornings start with a mental scan: who needs a call this week?" },
          { type: "paragraph", text: "Pastor Rachel leads a church of 1,800 across two campuses. She hasn't memorized every name in years. When someone drifts, she relies on her care team to notice. When a family is in crisis, she learns about it through a system -- pastoral notes, staff meetings, automated flags. Her Monday mornings start with a dashboard." },
          { type: "paragraph", text: "Neither pastor is doing it wrong. They're just solving the same problem -- caring for people -- at different scales. The mistake growing churches make is trying to run at 1,800 the way they ran at 200. It doesn't work. But the opposite mistake is just as dangerous: adopting corporate-style systems that lose the personal touch that made the church special in the first place." },
        ],
      },
      {
        heading: "Pastoral care: from instinct to system",
        blocks: [
          { type: "paragraph", text: "At 200 people, pastoral care runs on relationships. The lead pastor knows who's going through a divorce, who just lost a parent, who's been absent. The care is intuitive, personal, and deeply effective. But it doesn't scale." },
          { type: "paragraph", text: "At 2,000 people, the lead pastor can't hold all that context in their head. That's not a failure -- it's math. The solution is distributing care across a team while preserving the personal quality that makes it meaningful." },
          { type: "subheading", text: "What changes" },
          { type: "list", style: "unordered", items: [
            "A single pastor doing all care visits becomes a care team with defined areas of responsibility",
            "Mental notes about who needs a call become documented pastoral notes that transfer between team members",
            "Noticing when someone is absent becomes a system that flags attendance drops automatically",
            "Informal check-ins after service become scheduled care rhythms with accountability",
          ] },
          { type: "subheading", text: "What stays the same" },
          { type: "paragraph", text: "The care itself should still feel personal. A family in crisis should still get a visit from someone who knows their name and their story. The difference is how that person got the context -- from their own memory at 200, from shared notes at 2,000. The quality of the care shouldn't change. Only the delivery system does." },
          { type: "callout", variant: "tip", title: "The ratio rule", body: "Growing churches that maintain care quality typically keep a **1:50 ratio** -- one care provider for every 50 active adults. When that ratio stretches past 1:75, people start slipping through the cracks." },
        ],
      },
      {
        heading: "Communication: from one voice to many channels",
        blocks: [
          { type: "paragraph", text: "At 200 people, the lead pastor can announce something from stage and most of the church will hear it. A single email covers the whole congregation. Communication is straightforward because the audience is homogeneous enough to address as one group." },
          { type: "paragraph", text: "At 2,000 people, a single announcement reaches maybe 40% of the congregation on any given Sunday. The other 60% were at a different service time, a different campus, or watching online. And the congregation is no longer one group -- it's parents of toddlers, empty nesters, college students, Spanish-speaking families, and new believers, all with different communication needs." },
          { type: "list", style: "unordered", heading: "Communication shifts at scale:", items: [
            "One weekly email becomes segmented messaging by campus, age group, and ministry involvement",
            "Stage announcements become one channel among many, not the primary information source",
            "The lead pastor's voice becomes one of several -- campus pastors, ministry leaders, and group leaders all communicate within their sphere",
            "Frequency management becomes critical -- you can't send five messages a week to everyone without causing unsubscribes",
          ] },
          { type: "paragraph", text: "The trap is either over-communicating (flooding everyone with everything) or under-communicating (assuming the Sunday morning announcement is enough). The middle ground is segmentation: the right message to the right people at the right time. The effort of setting up segments pays for itself immediately in higher engagement and fewer unsubscribes." },
        ],
      },
      {
        heading: "Volunteers: from recruiting to pipeline building",
        blocks: [
          { type: "paragraph", text: "At 200 people, you know who might say yes. The pastor walks up to someone after service, asks them to help with kids ministry, and they start next Sunday. Volunteer recruiting is relational and direct." },
          { type: "paragraph", text: "At 2,000 people, you need 300-400 volunteers to run a Sunday. You can't personally recruit each one. You need a pipeline: awareness, interest, application, training, placement, and ongoing care. It's not less relational -- it's relational at scale, which requires structure." },
          { type: "subheading", text: "The volunteer infrastructure shift" },
          { type: "list", style: "unordered", items: [
            "Personal asks become organized recruitment campaigns with clear role descriptions",
            "'Jump in this Sunday' becomes a structured onboarding pathway with background checks and training",
            "One volunteer coordinator becomes team leaders who manage their own rosters",
            "Informal appreciation becomes systematic recognition -- because nobody can personally thank 400 people",
          ] },
          { type: "paragraph", text: "The churches that scale volunteer teams well do something counterintuitive: they invest more in leader development than in volunteer recruitment. When you develop strong team leaders, those leaders recruit and retain their own teams. The growth becomes organic instead of centrally managed." },
        ],
      },
      {
        heading: "Data: from optional to essential",
        blocks: [
          { type: "paragraph", text: "At 200 people, data is a nice-to-have. The pastor can sense trends. Attendance feels lighter in summer. Giving dips in January. The youth group seems smaller lately. Those instincts are usually accurate because the scale is manageable." },
          { type: "paragraph", text: "At 2,000 people, instincts aren't reliable anymore. You can't feel whether attendance dropped 8% last month because the building still looks full. You can't sense giving trends when hundreds of transactions flow through every week. Without data, you're making decisions blind." },
          { type: "callout", variant: "info", body: "Growing churches that use data well don't drown in dashboards. They track **three to five key metrics** consistently and review them weekly. Attendance trends, giving per capita, volunteer retention rate, new guest return rate, and group participation." },
          { type: "paragraph", text: "The shift isn't from no data to lots of data. It's from informal observation to structured review. A weekly 15-minute data check in staff meeting replaces the 'gut feeling' approach. When something changes, you catch it in weeks instead of months." },
          { type: "paragraph", text: "Data also enables honest conversations about resource allocation. At 200 people, the budget discussion is relatively simple because everyone can see where the needs are. At 2,000, competing ministries make valid arguments for funding, and without data to inform those decisions, the loudest voice wins. Attendance trends, engagement metrics, and growth rates provide an objective foundation for stewardship conversations." },
        ],
      },
      {
        heading: "The real question isn't about size",
        blocks: [
          { type: "paragraph", text: "Every growing church faces a version of the same tension: how do we add structure without losing soul? The answer is that structure and soul aren't opposites. Good structure serves the soul of the church. It frees pastors from administrative burden so they can focus on relationships. It prevents people from falling through the cracks. It makes care consistent instead of dependent on one person's memory." },
          { type: "paragraph", text: "The churches that scale well don't add every system at once. They add the right system at the right time. When attendance tracking breaks because the pastor can't remember everyone, that's the moment for a check-in system. When volunteer burnout spikes because nobody is tracking service frequency, that's the moment for rotation scheduling. Let the pain point drive the investment." },
          { type: "paragraph", text: "If your church is growing and things feel chaotic, that's normal. Chaos is the gap between your current systems and your current reality. Closing that gap doesn't require becoming corporate. It requires being honest about what's changed and building systems that match." },
          { type: "cta", heading: "Systems that scale with your church", body: "Relius grows with you -- from 50 to 5,000, the tools adapt to your stage.", buttonText: "Explore use cases", buttonHref: "/use-cases/" },
        ],
      },
    ],
    takeaway: [
      "Pastoral care shifts from instinct to system -- but the care itself should still feel personal.",
      "Communication at scale requires segmentation, not more volume.",
      "Invest in volunteer leaders, not just volunteer recruitment.",
      "Track three to five key metrics weekly. Replace gut feelings with data.",
      "Structure and soul aren't opposites. Good systems serve relational ministry.",
    ],
    image: "/images/blog/church-200-vs-2000.webp",
  },
  {
    slug: "ai-changing-church-administration",
    title: "How AI is changing church administration",
    excerpt: "AI will not replace your pastor. But it can give your admin team 10 hours a week back. Here are 6 practical ways churches are using AI right now without losing their voice.",
    author: "Felix Tang",
    role: "Relius Cofounder",
    date: "2024-11-20",
    readTime: "8 min",
    category: "Product",
    contentType: "Opinion",
    topics: ["AI", "Communication"],
    churchSizeFocus: ["All"],
    content: [
      {
        heading: "The admin burden is real",
        blocks: [
          { type: "paragraph", text: "A typical church office manager spends Monday morning answering emails, updating the bulletin, scheduling volunteers, drafting the midweek newsletter, and chasing down event details from ministry leaders who haven't responded yet. By Tuesday, they're catching up on giving reports and printing name tags for Wednesday night." },
          { type: "paragraph", text: "Most of that work is repetitive. Not meaningless -- repetitive. The bulletin format doesn't change. The newsletter template is the same every week. The volunteer reminder email says roughly the same thing it said last month. These are tasks where 80% of the work is predictable and 20% requires human judgment." },
          { type: "paragraph", text: "That's exactly where AI helps. Not by replacing the person, but by handling the predictable 80% so the person can focus on the 20% that requires their actual expertise -- their pastoral instinct, their knowledge of the congregation, their voice." },
        ],
      },
      {
        heading: "1. Content multiplication",
        blocks: [
          { type: "paragraph", text: "Your pastor preaches a 35-minute sermon every Sunday. That sermon contains enough material for a week of content: social media posts, a midweek email devotional, small group discussion questions, and a one-minute video script. Most churches never extract that value because nobody has time to do it." },
          { type: "paragraph", text: "AI changes the math. Feed the sermon transcript into an AI tool and it can draft social posts, pull out key quotes, suggest discussion questions, and create an email devotional -- all in minutes. Your communications person then reviews, edits for voice, and schedules. The AI did the heavy lifting. The human made it sound like your church." },
          { type: "callout", variant: "tip", title: "Start simple", body: "Begin with one output. Take this week's sermon transcript and ask AI to draft **five social media posts**. Review them, edit for your voice, and schedule them. If that saves your team an hour, expand from there." },
        ],
      },
      {
        heading: "2. Communication drafting",
        blocks: [
          { type: "paragraph", text: "Every church sends the same types of messages repeatedly: welcome emails to new guests, volunteer reminders, event announcements, giving receipts, and pastoral check-ins. These messages share a structure, but each one needs to feel personal and on-brand." },
          { type: "paragraph", text: "AI can draft these messages using your church's existing communication as a style guide. Feed it three examples of emails your church has sent, tell it the context of the new message, and it produces a draft that matches your tone. You edit the specifics and send." },
          { type: "paragraph", text: "The key principle: AI drafts, humans decide. Every piece of communication should be reviewed by a person who knows the congregation before it goes out. AI doesn't know that the Johnson family just went through a loss, or that the tone of last week's email rubbed some people wrong. That context comes from people, not algorithms." },
        ],
      },
      {
        heading: "3. Meeting preparation and summaries",
        blocks: [
          { type: "paragraph", text: "Staff meetings consume hours of prep time. Pulling attendance data, compiling ministry updates, reviewing last week's action items, and creating the agenda. Then after the meeting, someone has to write up notes and distribute them." },
          { type: "paragraph", text: "Most churches spend more time preparing for staff meetings than they spend in them. That ratio is backwards. The meeting itself is where decisions happen, relationships are strengthened, and alignment is built. The prep work is mechanical. Let AI handle the mechanical part." },
          { type: "paragraph", text: "AI can handle both ends. Before the meeting: aggregate data points, flag attendance trends, and surface items that need discussion. After the meeting: transcribe the conversation, extract action items, and assign follow-ups. The meeting itself stays human. The administrative work around it doesn't have to be." },
          { type: "list", style: "unordered", heading: "Meeting tasks AI handles well:", items: [
            "Compiling weekly attendance and giving summaries into a one-page brief",
            "Flagging members who haven't attended in 30+ days for the care team",
            "Transcribing meeting notes and extracting action items with owners and deadlines",
            "Drafting follow-up emails based on meeting decisions",
          ] },
        ],
      },
      {
        heading: "4. Pastoral care surfacing",
        blocks: [
          { type: "paragraph", text: "This is where AI gets genuinely interesting for churches. Pastoral care has always relied on human intuition -- the pastor notices someone looks different, a small group leader senses something is off, a greeter remembers a regular who hasn't been around." },
          { type: "paragraph", text: "AI can supplement that intuition with data. When someone's attendance drops from weekly to biweekly to monthly, that's a pattern. When a consistent giver stops giving, that often signals a deeper change. When a small group leader stops logging attendance, something might be happening in the group." },
          { type: "paragraph", text: "AI doesn't know what's wrong. It just flags the pattern. The pastor or care team then does what they do best: reach out, listen, and care. The AI catches what human attention might miss -- not because humans don't care, but because at scale, nobody can track hundreds of people in their head." },
          { type: "callout", variant: "warning", title: "The line to respect", body: "AI should **surface** care needs, not **deliver** care. An automated text saying 'We noticed you've been absent' feels surveilled, not cared for. Use the data to prompt a genuine human conversation." },
        ],
      },
      {
        heading: "5. Event and volunteer logistics",
        blocks: [
          { type: "paragraph", text: "Planning a church event involves dozens of small tasks: room setup specifications, volunteer scheduling, promotion timelines, supply lists, and day-of runsheets. Most of this is template-able -- the VBS supply list this year is 90% the same as last year." },
          { type: "paragraph", text: "AI can generate first drafts of event plans based on past events, suggest volunteer assignments based on availability and past service, and create promotion timelines with draft copy for each channel. Your events coordinator reviews and adjusts instead of starting from scratch every time." },
          { type: "paragraph", text: "For volunteer scheduling specifically, AI can factor in rotation history, availability preferences, and skill matching to suggest assignments that a coordinator would have taken an hour to work out manually. The coordinator still approves -- but the starting point is 80% done. Over time, the AI learns your church's patterns and its suggestions get more accurate." },
        ],
      },
      {
        heading: "6. Protecting your church's voice",
        blocks: [
          { type: "paragraph", text: "The biggest risk of AI in church communication is homogenization. If every church uses the same AI tools with the same prompts, every church starts sounding the same. Your congregation can tell when something doesn't sound like your pastor." },
          { type: "subheading", text: "Guardrails that protect authenticity" },
          { type: "list", style: "unordered", items: [
            "Never send AI output directly to your congregation without human review",
            "Build a 'voice guide' -- five to ten examples of your church's actual communication style -- and use it to train your AI outputs",
            "Limit AI to first drafts. The final version should always have a human's fingerprint on it.",
            "Use AI to save time, not to replace the people who give your church its personality",
          ] },
          { type: "paragraph", text: "The goal isn't to automate your church's voice. It's to free up the people who carry that voice so they have more time for the work that actually requires their humanity -- conversations, counseling, prayer, and presence." },
        ],
      },
      {
        heading: "Where to start this week",
        blocks: [
          { type: "paragraph", text: "Don't try to AI-enable everything at once. Pick one repetitive task that eats time every week. Content multiplication and communication drafting are the easiest starting points because they have clear inputs (sermon transcript, email template) and clear outputs (social posts, email draft)." },
          { type: "paragraph", text: "Try it for two weeks. Measure how much time it saves. If the answer is meaningful, expand to the next task. If the output quality isn't good enough, adjust your prompts or try a different tool. The churches getting value from AI aren't the ones using it for everything -- they're the ones using it consistently for the right things." },
          { type: "paragraph", text: "One more principle: involve your team in choosing what to automate. The office manager who writes the newsletter every week knows exactly which parts are creative and which are tedious. The volunteer coordinator knows which scheduling tasks are mind-numbing. Ask the people doing the work what they'd love to offload. They'll tell you exactly where AI can help -- and they'll adopt it because it was their idea." },
          { type: "cta", heading: "AI built for church context", body: "Relius AI tools understand ministry language, respect pastoral boundaries, and save your team hours every week.", buttonText: "Start a conversation", buttonHref: "/contact/" },
        ],
      },
    ],
    takeaway: [
      "AI handles the predictable 80% of admin work so your team can focus on the 20% that requires human judgment.",
      "Start with content multiplication -- one sermon can become a week of content with AI drafting.",
      "AI should surface care needs, not deliver care. Use data to prompt genuine human conversations.",
      "Protect your church's voice by treating AI as a first-draft tool, never as the final word.",
      "Pick one repetitive task this week and test AI on it. Expand from results, not theory.",
    ],
    image: "/images/blog/ai-changing-church-administration.webp",
  },
  {
    slug: "why-churches-switching-planning-center-2025",
    title: "Why churches are switching from Planning Center in 2026",
    excerpt: "Planning Center built the category. But the category has evolved. Here's what church leaders are telling us about why they're making the switch.",
    author: "Felix Tang",
    role: "Relius Cofounder",
    date: "2025-01-18",
    readTime: "8 min",
    category: "Perspective",
    contentType: "Opinion",
    topics: ["Operations", "Leadership", "Migration"],
    churchSizeFocus: ["Small", "Mid-size", "Growing"],
    content: [
      {
        heading: "The conversation that keeps coming up",
        blocks: [
          { type: "paragraph", text: "We've had some version of this conversation dozens of times over the past year. An executive pastor or church admin reaches out, usually starting with something like: 'We've been on Planning Center for years. It's fine. But we keep running into the same walls.'" },
          { type: "paragraph", text: "The walls are different for each church, but the themes are consistent. Data lives in too many places. Getting a complete picture of a member requires logging into multiple apps. Pastoral care is tracked in spreadsheets because the platform doesn't have the right tools. And the team spends more time managing the software than the software saves them." },
          { type: "paragraph", text: "These aren't angry ex-customers. They're pragmatic leaders who loved what Planning Center did for them five years ago and are now asking whether it's still the right fit for where they're headed. That's a fair question for any tool. And it's a question every church should ask periodically, regardless of which platform they're on." },
        ],
      },
      {
        heading: "Planning Center solved the organization problem",
        blocks: [
          { type: "paragraph", text: "Credit where it's due: Planning Center built the modern church software category. Before Planning Center, most churches were running on paper sign-up sheets, Excel spreadsheets, and a lot of institutional memory. Planning Center gave churches real tools for scheduling volunteers, planning services, managing groups, and processing check-ins." },
          { type: "paragraph", text: "That was transformational. Churches went from 'we don't know who's coming on Sunday' to 'we have a system.' For many churches, Planning Center was the first piece of software their team actually adopted and used consistently. That's a significant achievement." },
          { type: "paragraph", text: "But organization was the starting point, not the destination. The churches reaching out to us aren't looking for a better way to organize. They're looking for tools that help them do ministry -- catch people before they drift, multiply their communication efforts, surface pastoral needs they'd otherwise miss. Those are different problems, and they require different architecture. You can't bolt care intelligence onto an organizational tool and expect it to work the same as a platform designed around pastoral outcomes from the beginning." },
        ],
      },
      {
        heading: "The modular model creates hidden friction",
        blocks: [
          { type: "paragraph", text: "Planning Center's architecture is modular -- separate apps for People, Groups, Giving, Check-Ins, Services, Registrations, and Publishing. Each app does its job. But as churches use more apps, a friction pattern emerges: the apps don't always share data the way you'd expect." },
          { type: "paragraph", text: "An executive pastor preparing for a staff meeting might need to check attendance trends (Check-Ins), review giving patterns (Giving), see which groups are struggling (Groups), and check on new guest follow-up (People). That's four apps, four logins, four different interfaces. The context about a single member is scattered across all of them." },
          { type: "callout", variant: "quote", body: "I realized I was logging into five apps to prep for one staff meeting. That's when I knew something had to change." },
          { type: "paragraph", text: "A unified platform solves this by design. When people data, giving history, group attendance, volunteer schedules, and pastoral care notes all live in the same database, context travels with the person. You don't stitch information together from multiple sources -- you see the whole picture in one place." },
          { type: "paragraph", text: "This matters most for pastoral care. When a pastor is visiting a family, they need the full context: attendance history, giving patterns (not the amounts, but the trend), group involvement, previous care notes, and any flags from the care team. Assembling that from five separate apps before a hospital visit is not a good use of a pastor's time." },
        ],
      },
      {
        heading: "AI is changing what's possible",
        blocks: [
          { type: "paragraph", text: "The biggest shift in church technology isn't better interfaces or faster databases. It's AI. And the churches that are switching platforms right now are largely switching because they want AI capabilities that their current tool wasn't designed to provide." },
          { type: "paragraph", text: "This isn't about replacing humans with robots. It's about practical time savings. A sermon that took your communications team three hours to repurpose into social posts, email content, and discussion questions can now be drafted by AI in minutes. The team still reviews, edits, and approves -- but the starting point is 80% done instead of a blank page." },
          { type: "list", style: "unordered", heading: "AI capabilities churches are switching for:", items: [
            "**Content multiplication** -- turning one sermon into a week of social media, email, and small group content",
            "**Pastoral care surfacing** -- flagging attendance drops and giving changes that might indicate someone needs a check-in",
            "**Communication drafting** -- generating first drafts of newsletters, volunteer reminders, and follow-up messages in your church's voice",
            "**Teaching planning** -- mapping a sermon calendar with AI-suggested themes based on your church's rhythm and past series",
          ] },
          { type: "paragraph", text: "The distinction that matters: these features need to be native to the platform, not bolted on as an afterthought. When AI is built into the core architecture, it has access to your church's data -- attendance patterns, communication history, member profiles -- and can provide genuinely useful suggestions. A separate AI tool that doesn't know your church is just a generic writing assistant." },
          { type: "paragraph", text: "This is a timing question as much as a feature question. AI-native platforms are being built right now. Churches that switch early get to shape the tools through feedback. Churches that wait will eventually switch to the same tools, but without the advantage of having influenced how they were built for ministry context." },
        ],
      },
      {
        heading: "The cost conversation",
        blocks: [
          { type: "paragraph", text: "Planning Center's per-app pricing model can add up, especially for mid-size and growing churches that use most of the apps at scale. Each app has its own price tier based on your database size. A church using five apps at scale can easily reach $150-250 per month." },
          { type: "paragraph", text: "That's not unreasonable for the value provided. But when churches compare it to an all-inclusive model where every feature is included in a single tier, the math often favors simplicity. No calculating which apps you need. No surprises when you add a sixth module. No per-member pricing that penalizes growth." },
          { type: "paragraph", text: "More importantly, the hidden cost of the modular model is staff time. If your team spends 30 minutes per week switching between apps, pulling data from multiple sources, and reconciling information, that's 26 hours per year of administrative overhead that a unified platform eliminates." },
          { type: "paragraph", text: "Churches considering a switch should calculate their real cost of ownership -- not just the subscription price. Factor in the hours spent managing workarounds, the integrations you're paying for to connect apps that should share data natively, and the opportunity cost of your admin team spending time on software logistics instead of ministry." },
        ],
      },
      {
        heading: "Migration is the fear. Reality is easier.",
        blocks: [
          { type: "paragraph", text: "The number one reason churches stay on a platform they've outgrown is migration anxiety. 'We've been on Planning Center for eight years. All our data is there. Switching sounds like a nightmare.'" },
          { type: "paragraph", text: "Here's what actually happens: Planning Center exports data cleanly. People records, giving history, group membership, check-in data -- it all comes over. A guided migration process maps the data structure from one platform to another in a few hours, not weeks. The technical part of migration is the easy part." },
          { type: "paragraph", text: "Your team doesn't start from scratch either. If they've used any modern church platform, the new one feels familiar. Similar navigation patterns, similar terminology, similar workflows. Most teams are comfortable within a week, fluent within a month." },
          { type: "callout", variant: "tip", title: "The real risk", body: "The risk of staying on a platform you've outgrown is often higher than the risk of switching. Every week of workarounds, manual data stitching, and missing features compounds. Migration is a one-time cost. Platform friction is an ongoing one." },
          { type: "cta", heading: "See what a switch looks like", body: "Talk to our team about what migration would involve for your church -- no pressure, just honest answers.", buttonText: "Start a conversation", buttonHref: "/contact/" },
        ],
      },
    ],
    takeaway: [
      "Planning Center solved organization. Churches are now asking for ministry outcomes -- and that requires different tools.",
      "Modular apps create context-switching overhead. Unified platforms give you the full picture in one place.",
      "AI-native features save real time -- but only when they're built into the platform, not bolted on.",
      "Migration anxiety is usually worse than the actual migration. Planning Center exports cleanly.",
      "The hidden cost of staying is often higher than the visible cost of switching.",
    ],
    quote: "I was nervous about the switch. Then I realized I'd spent more time worrying about migration than the migration actually took.",
    image: "/images/blog/why-churches-switching-planning-center-2025.webp",
  },
  {
    slug: "planning-center-vs-relius-honest-comparison",
    title: "Planning Center vs Relius: an honest comparison",
    excerpt: "We're not going to pretend we're unbiased. But we will be fair. Here's a transparent look at what each platform does well.",
    author: "Felix Tang",
    role: "Relius Cofounder",
    date: "2025-01-10",
    readTime: "10 min",
    category: "Product",
    contentType: "Guide",
    topics: ["Operations", "Migration"],
    churchSizeFocus: ["Small", "Mid-size", "Growing", "Multi-site"],
    content: [
      {
        heading: "Where Planning Center shines",
        blocks: [
          { type: "paragraph", text: "Let's start with what Planning Center does well, because ignoring it would be dishonest. Planning Center built the modern church software category, and they've earned their reputation." },
          { type: "subheading", text: "Services Planning" },
          { type: "paragraph", text: "This is their crown jewel. It's mature, polished, and deeply adopted by worship teams across the country. The setlist builder is intuitive, volunteer scheduling is smooth, and band members actually use it. If your primary pain point is coordinating Sunday morning production, Planning Center Services handles it exceptionally well." },
          { type: "subheading", text: "Check-Ins" },
          { type: "paragraph", text: "Their children's ministry check-in system is battle-tested, reliable, and familiar to parents. Security labels print correctly, allergies are flagged, and the flow works even when you have a hundred families checking in at once. It's a known quantity, which matters when kids' safety is on the line." },
          { type: "subheading", text: "Ecosystem advantage" },
          { type: "paragraph", text: "Planning Center has been around since 2006. That means a massive community, thousands of tutorials on YouTube, and a near-guarantee that any new hire has used it before. There's comfort in familiarity, and Planning Center has that in abundance." },
          { type: "paragraph", text: "Their integrations library is also extensive. From ProPresenter to Subsplash to Mailchimp, odds are your other tools already connect. For churches that have built their tech stack around Planning Center, this ecosystem is genuinely valuable and shouldn't be underestimated when evaluating a switch." },
        ],
      },
      {
        heading: "Where Relius leads",
        blocks: [
          { type: "paragraph", text: "Now let's talk about where Relius offers something different --and in our view, something better for the direction ministry is heading." },
          { type: "subheading", text: "AI-native features" },
          { type: "paragraph", text: "This is the clearest differentiation. **Content Studio** takes one sermon and generates a week of social media posts, email snippets, and discussion questions. **Sermon Planner** helps you map a teaching calendar with AI-suggested themes based on your church's rhythm. **Pastoral Care AI** surfaces members who might be drifting before they disappear. **Translation tools** help you reach multilingual congregations without hiring translators." },
          { type: "callout", variant: "info", body: "None of these features exist in Planning Center because they weren't built for an AI-native world. AI isn't a bolt-on for Relius --it's foundational." },
          { type: "subheading", text: "Unified platform" },
          { type: "paragraph", text: "Everything lives in one system. Your people data, giving history, group attendance, volunteer schedules, and pastoral care notes exist in the same database. You don't log into five apps to prep for a staff meeting. Context travels with the person, not across disconnected tools." },
          { type: "subheading", text: "Pastoral care tools" },
          { type: "paragraph", text: "Relius was designed with soul care at the center, not bolted on afterward. Care requests route to the right pastor automatically. Prayer follow-ups have built-in reminders. At-risk detection flags people who've missed three Sundays or stopped giving --not to guilt them, but to prompt a genuine check-in before they're gone." },
          { type: "subheading", text: "Modern UX" },
          { type: "paragraph", text: "Relius was designed in 2024, not 2006. It feels like the software your team uses everywhere else in their lives. Mobile works properly. Search is fast. Onboarding is quick. Your volunteers won't need a training manual to check someone in." },
        ],
      },
      {
        heading: "Pricing comparison",
        blocks: [
          { type: "paragraph", text: "Let's talk money, because pricing structures matter more than most churches realize until they're locked into a platform." },
          { type: "subheading", text: "Planning Center pricing" },
          { type: "paragraph", text: "Planning Center uses a per-app, per-size pricing model. Each app (People, Giving, Check-Ins, Groups, Services, Registrations, Publishing) has its own price tier based on your database size. A small church might pay $20/month for one app, but a mid-size church using four or five apps at scale can easily reach $150-250/month. The modular approach sounds flexible until you realize you need most of the apps to run effectively." },
          { type: "subheading", text: "Relius pricing" },
          { type: "paragraph", text: "Relius uses a simple, all-inclusive tiered model. **Basic plan is $39.99/month**, **Pro plan is $79.99/month**, and **Max plan is $199.99/month**. Every tier includes unlimited members --no penalizing churches for growth. Every feature in your tier is included: AI tools, giving, check-ins, groups, pastoral care, communications. No app bundles to calculate, no surprises when you grow." },
          { type: "stat", value: "$79.99/mo", label: "Relius Pro for a church of 800 --vs. $180-220/mo on Planning Center for equivalent features", source: "Based on Planning Center published pricing, 2025" },
          { type: "paragraph", text: "We're not saying Planning Center is overpriced -- they offer real value. But if budget matters (and it always does in ministry), the math often favors Relius. Every dollar saved on software is a dollar available for ministry, missions, or staff." },
        ],
      },
      {
        heading: "Migration considerations",
        blocks: [
          { type: "paragraph", text: "The biggest fear we hear from churches considering a switch: 'We've been on Planning Center for years. All our data is there. Migration sounds terrifying.'" },
          { type: "paragraph", text: "Here's the honest truth: Planning Center exports data cleanly. People records, giving history, group membership, check-in data --it all comes over. Our migration wizard maps Planning Center's data structure to Relius in a guided process that takes under three hours for most churches." },
          { type: "paragraph", text: "Your team won't start from scratch either. If they've used any modern church platform, Relius feels familiar. Similar navigation patterns, similar terminology, similar workflows. Most teams are comfortable within a week, fluent within a month." },
          { type: "callout", variant: "tip", title: "Real human support", body: "We assign a **dedicated migration specialist** to every church making the switch. Not a chatbot. Not a knowledge base. A real person who's done this hundreds of times." },
          { type: "paragraph", text: "That said, migration has a cost beyond money: attention. Your team will spend time learning new workflows. There will be a week or two where things feel slower before they feel faster. If you're in the middle of a building campaign or a major staff transition, it might not be the right season. But if you're feeling the friction of your current system every week, that cost compounds too." },
          { type: "paragraph", text: "The best time to switch is during a natural transition point -- summer, between ministry seasons, or when you're already making staffing changes. Your team has more capacity to learn new systems when the operational demands are lower. Avoid switching in September or December when ministry activity is at its peak." },
          { type: "cta", heading: "Ready to see the difference?", body: "Talk to our team about what a switch would look like for your church.", buttonText: "Start a conversation", buttonHref: "/contact/" },
        ],
      },
      {
        heading: "The honest verdict",
        blocks: [
          { type: "paragraph", text: "So which platform is right for your church? Here's our genuine advice:" },
          { type: "subheading", text: "Choose Planning Center if:" },
          { type: "list", style: "unordered", items: [
            "Your worship team loves Services and switching would cause genuine pain",
            "Your volunteers are deeply trained on the current system and you're not experiencing friction",
            "You have a tech stack built around Planning Center integrations that would be costly to rebuild",
            "You're happy with organization and not yet asking questions about AI-powered ministry insights",
          ] },
          { type: "subheading", text: "Choose Relius if:" },
          { type: "list", style: "unordered", items: [
            "You're tired of app-switching and want unified data in one place",
            "You want AI tools that help your team multiply their impact without multiplying their hours",
            "Pastoral care is central to your mission and you need software that treats it that way",
            "You're ready for a modern interface that your whole team --including volunteers --can learn quickly",
          ] },
          { type: "paragraph", text: "If you're on the fence, try both. Seriously. Do a Planning Center audit to see if you're using all the apps you're paying for. Then do a Relius demo to see if the AI features and unified approach solve problems you didn't know you had. The best decision is an informed one." },
          { type: "paragraph", text: "One more thing worth considering: where is the platform headed? Planning Center has a strong foundation, but its architecture was designed before AI, before unified data became the expectation, and before pastoral care tools were table stakes. Relius was built for where ministry technology is going, not where it's been. That doesn't make it universally better -- it makes it a different bet on the future." },
          { type: "paragraph", text: "We're not trying to be the loudest voice in the room. We're trying to be the most useful. If that's Relius for you, we'd be honored to partner with your church. If it's Planning Center, we'll respect that -- and we'll still be here if things change." },
        ],
      },
    ],
    takeaway: [
      "Planning Center excels at Services planning and has a mature ecosystem with deep community support.",
      "Relius leads with AI-native features, unified data, and pastoral care tools built from the ground up.",
      "Pricing: Planning Center's per-app model adds up; Relius includes everything in simple tiers.",
      "Migration takes hours, not months-Planning Center exports cleanly and our team guides every step.",
      "The right choice depends on your pain points: organization vs. AI-powered ministry outcomes.",
    ],
    image: "/images/blog/planning-center-vs-relius-honest-comparison.webp",
  },
  {
    slug: "evaluate-church-management-software-checklist",
    title: "How to evaluate church management software (complete checklist)",
    excerpt: "Buying church software is a big decision. Here's a practical framework for making the right choice -- without the sales pressure.",
    author: "Felix Tang",
    role: "Relius Cofounder",
    date: "2025-01-02",
    readTime: "12 min",
    category: "Best Practice",
    contentType: "Playbook",
    topics: ["Operations", "Leadership", "Migration"],
    churchSizeFocus: ["All"],
    content: [
      {
        heading: "Step 1: Define your core workflows",
        blocks: [
          { type: "paragraph", text: "Before looking at any platform, write down the five things your team does every week. Not what you wish you did --what you actually do. This distinction matters because software purchases often fail when they're based on aspirational workflows rather than real ones." },
          { type: "paragraph", text: "Start by shadowing your team for a week. What screens are they staring at on Monday morning? What tasks cause sighs? Where do they switch between tools or resort to spreadsheets? Those friction points are your evaluation priorities." },
          { type: "list", style: "unordered", heading: "Common workflows we see:", items: [
            "Volunteer scheduling and reminders",
            "Guest follow-up within 48 hours of a visit",
            "Weekly giving reports for finance teams",
            "Small group sign-ups and leader communication",
            "Event registrations with payment processing",
            "Pastoral care notes that multiple staff need to access",
          ] },
          { type: "paragraph", text: "Now rank these workflows by two dimensions: **frequency** (how often?) and **frustration** (how painful?). A task that's both daily and frustrating should be your top evaluation criterion. A task that's monthly and manageable can wait." },
          { type: "callout", variant: "tip", title: "Pro tip", body: "Involve the actual users in this exercise, not just decision-makers. Your executive pastor might think giving reports matter most, but your admin assistant knows the real time sink is volunteer scheduling conflicts." },
        ],
      },
      {
        heading: "Step 2: Identify your deal-breakers",
        blocks: [
          { type: "paragraph", text: "Every church has non-negotiables --features or capabilities that, if missing, disqualify a platform entirely. Identifying these before you see demos prevents wasted time and emotional attachment to platforms that won't work." },
          { type: "list", style: "unordered", heading: "Common deal-breakers we encounter:", items: [
            "Text messaging capabilities (some platforms charge per-text, others include it)",
            "Spanish language support or multi-language capabilities for diverse congregations",
            "Specific check-in workflows for children's ministry with security label printing",
            "Integration with your existing giving processor if you're locked into a contract",
            "Offline functionality for churches with unreliable internet",
            "Multi-campus support with proper permissions and data separation",
          ] },
          { type: "paragraph", text: "Write your deal-breakers on a single index card. Bring it to every demo. When the sales rep shows a flashy AI feature, glance at your card and ask about your non-negotiables first." },
          { type: "callout", variant: "warning", title: "Watch out", body: "If you list fifteen deal-breakers, you don't have deal-breakers --you have a wishlist. Aim for **three to five** genuine non-negotiables." },
        ],
      },
      {
        heading: "Step 3: Evaluate adoption, not just features",
        blocks: [
          { type: "paragraph", text: "Here's a hard truth: the best-featured software that your team won't use is worthless. Worse than worthless, actually --it creates guilt, clutter, and a slow drift back to spreadsheets." },
          { type: "paragraph", text: "During demos, resist the urge to nod along at impressive feature lists. Instead, watch for adoption signals: How many clicks does it take to complete your top workflow? Count them. If it takes eight clicks to log a pastoral care note, your pastors won't log pastoral care notes." },
          { type: "paragraph", text: "Does the vocabulary match how your church talks? If the platform calls them 'constituents' and you call them 'members' or 'family,' there's friction every time someone uses it. Small translation burdens add up." },
          { type: "subheading", text: "Test it like your team will use it" },
          { type: "paragraph", text: "Test the mobile experience specifically. Hand your phone to the least tech-savvy volunteer on your team and ask them to check someone in. If they struggle, your Sunday morning will struggle too." },
          { type: "paragraph", text: "Ask the vendor for references --but be specific. Don't just ask for 'happy customers.' Ask for a church similar to yours in size, denomination, and context. A megachurch reference doesn't help a church of 150 evaluate a platform." },
          { type: "paragraph", text: "If possible, get a trial account and run a real workflow. Import some test data. Schedule a fake volunteer. Log a practice care note. Demos are choreographed; trials reveal reality." },
        ],
      },
      {
        heading: "Step 4: Understand the true cost",
        blocks: [
          { type: "paragraph", text: "Sticker price is never total cost. The software industry has gotten creative at hiding expenses, and church platforms are no exception. Here's how to calculate what you'll actually pay:" },
          { type: "subheading", text: "Visible costs" },
          { type: "list", style: "unordered", items: [
            "**Setup costs:** How long until you're productive? Some platforms offer white-glove migration; others hand you documentation and wish you luck. A 'free' setup that takes your admin 40 hours has a real cost.",
            "**Training hours:** How many staff members need to learn this? Multiply that by their hourly rate. A platform that saves 30 minutes per week but requires 20 hours of training takes months to pay off.",
            "**Migration complexity:** Will you need to hire someone to move your data? Some churches discover mid-migration that giving records don't transfer cleanly.",
          ] },
          { type: "subheading", text: "Hidden fees to ask about explicitly" },
          { type: "list", style: "unordered", items: [
            "Per-text messaging charges (these add up fast for churches that communicate via SMS)",
            "Per-user or per-admin limits",
            "Add-on modules for features that seem core (like reporting or integrations)",
            "Overage charges if you exceed database size tiers",
            "Price increases after the first year's 'promotional' rate",
          ] },
          { type: "callout", variant: "tip", title: "The real math", body: "Calculate your **total cost of ownership over three years**, including all these factors. A platform that costs $50/month more but saves 10 hours/month is actually cheaper." },
          { type: "cta", heading: "See transparent pricing", body: "Relius includes everything in simple tiers --no per-app fees, no hidden charges.", buttonText: "Start a conversation", buttonHref: "/contact/" },
        ],
      },
      {
        heading: "Step 5: Test the support relationship",
        blocks: [
          { type: "paragraph", text: "Software will break. Features will confuse your team. Needs will evolve. The question isn't whether you'll need support --it's whether support will actually help when you do." },
          { type: "paragraph", text: "During your trial, submit a real support ticket about something that genuinely confuses you. Note: How fast did they respond? Was the answer helpful and specific, or generic and scripted? Did they solve your problem, or just link to documentation?" },
          { type: "list", style: "unordered", heading: "Ask these questions directly:", items: [
            "Who will be my point of contact if something goes wrong? Can I get a name?",
            "What's your average response time?",
            "What are your support hours --do you cover Sunday mornings when churches need help most?",
          ] },
          { type: "paragraph", text: "Inquire about their product roadmap. A trustworthy vendor will tell you what's coming and admit what's not built yet. If they promise everything is 'on the roadmap' without specifics, that's a yellow flag." },
          { type: "paragraph", text: "Pay attention to how they handle feature requests. Do they have a public feedback board? Do they communicate when features ship? A vendor that listens to churches builds better software over time." },
          { type: "callout", variant: "info", body: "The software relationship is a long-term partnership, often lasting **five to ten years**. You want partners who care about your context and understand ministry rhythms --not just vendors who see your contract." },
        ],
      },
      {
        heading: "Red flags to watch for",
        blocks: [
          { type: "paragraph", text: "After guiding hundreds of churches through software evaluations, we've seen patterns that predict trouble. Watch for these warning signs:" },
          { type: "list", style: "unordered", items: [
            "**Pressure to skip the trial:** 'Our special pricing expires Friday' is a sales tactic. Good software sells itself with time, not urgency.",
            "**Vague pricing pages:** If you can't find clear pricing without talking to sales, expect surprises later.",
            "**References that feel staged:** If every reference tells the same story with the same enthusiasm, they've been coached.",
            "**Dismissing competitors:** A confident vendor acknowledges what others do well. If they only bash alternatives, they might be hiding weaknesses.",
            "**Demo magic that doesn't replicate:** Features that work flawlessly in demos sometimes struggle with real data.",
            "**Support that requires escalation:** If your trial support experience involves being transferred three times, that's what your Sunday morning crisis will feel like too.",
          ] },
        ],
      },
      {
        heading: "The complete evaluation checklist",
        blocks: [
          { type: "paragraph", text: "Use this checklist when comparing platforms. Print it. Score each vendor. Let the numbers guide your decision." },
          { type: "subheading", text: "Core functionality" },
          { type: "list", style: "unordered", items: [
            "Does it handle my top 3 weekly workflows with fewer steps than my current system?",
            "Does the platform support my specific ministry context (multi-site, multilingual, denomination-specific needs)?",
            "Are the features I need included, or are they paid add-ons?",
          ] },
          { type: "subheading", text: "Usability" },
          { type: "list", style: "unordered", items: [
            "Can my team's least technical person complete core tasks without help?",
            "Does the mobile app work well for volunteers and staff?",
            "Does the vocabulary match how our church talks about people and ministry?",
          ] },
          { type: "subheading", text: "Cost" },
          { type: "list", style: "unordered", items: [
            "Is pricing transparent and predictable without hidden fees?",
            "Have I calculated total cost of ownership including setup, training, and migration?",
            "Does the pricing model scale reasonably as we grow?",
          ] },
          { type: "subheading", text: "Support and partnership" },
          { type: "list", style: "unordered", items: [
            "Can I reach a real human within 24 hours if something breaks?",
            "Do they offer Sunday morning support?",
            "Is there a clear roadmap with evidence they ship updates regularly?",
          ] },
          { type: "subheading", text: "Data and security" },
          { type: "list", style: "unordered", items: [
            "Is my data portable if I ever need to leave?",
            "Do they have clear data privacy policies?",
            "Does the company share my values around privacy and ministry ethics?",
          ] },
          { type: "subheading", text: "Future-proofing" },
          { type: "list", style: "unordered", items: [
            "Does the platform have AI features that will actually save my team time?",
            "Is the company investing in innovation, or just maintaining existing features?",
            "Do they have a track record of adapting to ministry changes?",
          ] },
        ],
      },
    ],
    takeaway: [
      "Map your actual workflows before any demo-aspirational processes don't predict real adoption.",
      "Adoption matters more than features; software your team won't use is worse than no software.",
      "Calculate total cost of ownership: setup time, training hours, hidden fees, and migration complexity.",
      "Test support during your trial-how they respond now predicts how they'll respond in a crisis.",
      "Watch for red flags: pressure tactics, vague pricing, and competitors who only criticize.",
      "Use the checklist to stay objective when shiny features tempt you off track.",
    ],
    quote: "The best church software is the one your team actually uses. Everything else is just potential.",
    image: "/images/blog/evaluate-church-management-software-checklist.webp",
  },
  {
    slug: "digital-giving-trends-2026",
    title: "Digital giving trends every church needs to know in 2026",
    excerpt: "The offering plate isn't going away, but it's no longer the primary way people give. Here is what's actually changing in church giving and how to respond without losing the heart of generosity.",
    author: "Felix Tang",
    role: "Relius Cofounder",
    date: "2026-02-02",
    readTime: "6 min",
    category: "Best Practice",
    contentType: "Guide",
    topics: ["Giving", "Finance", "Technology"],
    churchSizeFocus: ["Small", "Mid-size", "Growing", "Multi-site"],
    content: [
      {
        heading: "The moment we should have seen coming",
        blocks: [
          { type: "paragraph", text: "A finance team leader at a mid-size church in Nashville told us a story. During their annual giving review, they pulled the numbers and realized that 70% of their total giving now came through their online platform. The offering plate -- the thing they spent five minutes passing every Sunday -- accounted for less than a third of their income." },
          { type: "paragraph", text: "That wasn't a sudden shift. It happened gradually over four years. But nobody had looked at the trend until now. When they did, the implications were immediate: their Sunday morning giving moment was no longer the primary financial engine of the church. Their website was." },
          { type: "paragraph", text: "This is the reality most churches are living in, whether they've examined it or not. The giving landscape has changed fundamentally, and the churches that respond intentionally will be more financially stable than the ones that don't." },
        ],
      },
      {
        heading: "Cash isn't dead, but it's no longer king",
        blocks: [
          { type: "paragraph", text: "The numbers tell a clear story. Before the pandemic, most church giving was still cash and check. By 2024, that had flipped. The majority of church donations now happen digitally -- through websites, apps, and text-to-give platforms." },
          { type: "paragraph", text: "This isn't just a generational thing. Yes, younger members have never written a check. But older congregants have also shifted. They pay bills online, order groceries on their phone, and transfer money to their grandkids through Venmo. Digital transactions aren't novel anymore. They're normal." },
          { type: "paragraph", text: "What this means practically: the offering plate isn't going away, and it shouldn't. Some people will always prefer to give physically. But building your giving strategy around the plate alone is like building your communication strategy around the printed bulletin. It's one channel among several, and it's no longer the primary one." },
          { type: "callout", variant: "info", body: "This doesn't mean eliminating the offering moment from your service. It means expanding what that moment looks like -- a QR code on screen, a text number from the pastor, a link in the chat for online viewers. Multiple paths, one act of worship." },
        ],
      },
      {
        heading: "Text-to-give changed the math",
        blocks: [
          { type: "paragraph", text: "Text-to-give adoption grew dramatically during the pandemic and hasn't slowed down. The reason is simple: people already have their phones in their hands during service. A text message is faster than opening a browser, navigating to a website, logging in, and entering payment details." },
          { type: "paragraph", text: "The first-time setup takes about 60 seconds -- the giver texts a keyword, clicks a link, and enters their payment method once. After that, giving is a single text message. No login. No password. No app to download." },
          { type: "subheading", text: "Making text-to-give work" },
          { type: "paragraph", text: "The churches that see real adoption from text-to-give share a common approach: they connect it to specific moments. Instead of a generic 'Text GIVE to 55555' on a rotation slide, they tie the giving moment to the sermon's application point." },
          { type: "paragraph", text: "A pastor talking about a community outreach initiative says: 'If you want to be part of this, text SERVE to our giving number right now.' That contextual connection between story and action dramatically increases response rates compared to a passive announcement." },
          { type: "list", style: "unordered", heading: "Text-to-give setup checklist:", items: [
            "Choose a keyword that's simple and memorable (GIVE, TITHE, or your church name)",
            "Test the complete flow yourself before announcing it publicly",
            "Display the number on screen during the sermon, not just during announcements",
            "Have a greeter or usher available to help anyone who gets stuck on the first attempt",
            "Send a personal thank-you text after the first gift -- not automated, genuinely personal",
          ] },
        ],
      },
      {
        heading: "Recurring giving is your stability engine",
        blocks: [
          { type: "paragraph", text: "Every church finance leader knows the anxiety of a low-attendance Sunday. Holiday weekends, summer vacations, bad weather -- any of these can cut weekly giving by 30-40%. For churches living month-to-month, one bad Sunday can mean a stressful conversation with the bookkeeper on Monday." },
          { type: "paragraph", text: "Recurring giving eliminates that anxiety. When a significant percentage of your giving comes through automated monthly transactions, your income becomes predictable. You can budget with confidence. You can plan capital projects. You can say yes to a new hire without wondering if the money will be there in August." },
          { type: "paragraph", text: "The threshold most finance leaders point to: when 40% or more of your total giving comes from recurring donors, the month-to-month volatility drops dramatically. Getting there isn't complicated, but it does require intentionality." },
          { type: "subheading", text: "How to grow recurring giving" },
          { type: "list", style: "ordered", items: [
            "Make recurring the default option on your giving page -- with a clear way to choose one-time for those who prefer it",
            "After someone gives for the first time, send a personal thank-you within 24 hours",
            "One week after the first gift, send a gentle invitation to set up recurring -- explain what it makes possible for the church",
            "Share impact stories monthly so recurring givers see where their money goes -- not just budget reports, but real ministry outcomes",
            "Celebrate recurring givers privately -- a quarterly note from the lead pastor acknowledging their consistency",
          ] },
          { type: "paragraph", text: "There's a discipleship dimension here too. People who set up recurring giving tend to be more engaged overall. They volunteer more, attend more consistently, and feel more ownership in the church's mission. Recurring giving isn't just a financial mechanism -- it's a commitment signal." },
        ],
      },
      {
        heading: "Mobile wallets remove the last barrier",
        blocks: [
          { type: "paragraph", text: "Apple Pay and Google Pay have become the default payment method for a growing segment of the population. For younger demographics especially, tapping their phone to pay is more natural than pulling out a credit card. No card number to enter. No password to remember. Just a fingerprint or face scan and the transaction is complete." },
          { type: "paragraph", text: "When churches add mobile wallet support to their giving page, they remove the last meaningful friction point. The entire giving experience -- from intent to completion -- takes under five seconds. Compare that to the 45-60 seconds of manual card entry, and the difference in completion rates is significant." },
          { type: "callout", variant: "tip", title: "Don't overlook the visitors", body: "First-time guests are more likely to give if the process is frictionless. They don't have an account with your church. They haven't bookmarked your giving page. But they do have Apple Pay on their phone. A mobile wallet option turns an impulse to give into an actual gift." },
          { type: "paragraph", text: "The technology side is straightforward. Most modern payment processors (Stripe, for example) support Apple Pay and Google Pay natively. It's a configuration setting, not a custom integration. If your giving page doesn't support mobile wallets yet, the technical barrier to adding them is lower than you might think." },
        ],
      },
      {
        heading: "Giving transparency builds trust",
        blocks: [
          { type: "paragraph", text: "One trend that doesn't get enough attention: givers increasingly expect transparency about where their money goes. This isn't suspicion -- it's the same expectation they have of every other organization they support. Nonprofits publish impact reports. GoFundMe campaigns show progress bars. People want to know their generosity is making a difference." },
          { type: "paragraph", text: "Churches that communicate giving impact well see higher retention among their donor base. This doesn't require detailed financial statements in every newsletter. It means telling stories: 'Last month's giving funded 200 meals through our food pantry.' 'Your generosity covered the full cost of summer camp for 15 kids who couldn't afford it.'" },
          { type: "list", style: "unordered", heading: "Simple giving transparency practices:", items: [
            "Share one specific impact story per month in your regular communication",
            "Give a brief quarterly update on giving trends from the stage -- not with anxiety, but with gratitude",
            "Send year-end giving statements with a personal note highlighting what the church accomplished together",
            "When launching a capital campaign or special project, set a clear goal and report progress publicly",
          ] },
          { type: "paragraph", text: "Transparency doesn't mean opening your books to everyone. It means consistently connecting giving to outcomes. People give more generously when they can see the fruit of their generosity." },
        ],
      },
      {
        heading: "Your next move",
        blocks: [
          { type: "paragraph", text: "You don't need to overhaul your entire giving infrastructure at once. Start with the change that addresses your biggest gap. If you don't have text-to-give, set that up this week. If you do, check whether mobile wallets are enabled on your giving page. If your recurring rate is below 30%, build a 3-email sequence to invite one-time givers into monthly giving." },
          { type: "paragraph", text: "The goal isn't to make giving complicated. It's to make generosity as easy as possible while keeping it personal and connected to your church's mission. Technology handles the transaction. Your team handles the relationship. When both work together, giving becomes less of a budget conversation and more of a worship experience." },
          { type: "cta", heading: "See how Relius simplifies giving", body: "Text-to-give, mobile wallets, recurring automation, and giving analytics -- all in one platform.", buttonText: "Explore use cases", buttonHref: "/use-cases/" },
        ],
      },
    ],
    takeaway: [
      "Digital giving is now the majority -- build your strategy around it, not around the offering plate alone.",
      "Text-to-give works best when tied to specific sermon moments, not passive announcement slides.",
      "Push toward 40%+ recurring giving for budget stability and reduced month-to-month anxiety.",
      "Mobile wallets remove the last friction barrier, especially for first-time guests.",
      "Giving transparency builds trust and increases donor retention over time.",
    ],
    quote: "The goal isn't to make giving complicated. It's to make generosity as easy as buying coffee.",
    image: "/images/blog/digital-giving-trends-2026.webp",
  },
  {
    slug: "grow-small-groups-2026",
    title: "How churches are growing small groups in 2026",
    excerpt: "Most churches want more small groups. The ones that actually get them focus on removing friction, developing leaders, and knowing when a group needs help before it folds.",
    author: "Felix Tang",
    role: "Relius Cofounder",
    date: "2026-02-05",
    readTime: "8 min",
    category: "Ministry Insight",
    contentType: "Playbook",
    topics: ["Small Groups", "Discipleship", "Community"],
    churchSizeFocus: ["Small", "Mid-size", "Growing"],
    content: [
      {
        heading: "The signup problem nobody talks about",
        blocks: [
          { type: "paragraph", text: "Every fall, the same pattern plays out at churches across the country. The pastor preaches a series on community. The groups team sets up a table in the lobby. Sign-up sheets go out. Announcements run for three weeks. And at the end of the push, maybe 15% of the congregation has joined a group." },
          { type: "paragraph", text: "Six months later, half of those groups have quietly dissolved. The pastor wonders why small groups don't stick, and the cycle starts again next fall." },
          { type: "paragraph", text: "The problem usually isn't motivation or messaging. It's friction, leader readiness, and a lack of early intervention when groups start to struggle. Here's what the churches that actually grow and sustain healthy groups are doing differently." },
        ],
      },
      {
        heading: "Remove every unnecessary step between interest and enrollment",
        blocks: [
          { type: "paragraph", text: "When someone expresses interest in joining a group, there's a window of motivation. It's open for about 48 hours. After that, life takes over. The groceries need buying. The kids have soccer. The moment passes." },
          { type: "paragraph", text: "Churches that grow groups successfully make joining as frictionless as possible. Not frictionless in a careless way -- frictionless in a 'we've thought about your experience' way. The ideal flow: someone sees the group options, picks one that fits, and gets a confirmation within minutes. Not days. Minutes." },
          { type: "list", style: "unordered", heading: "Where churches create unnecessary friction:", items: [
            "Requiring people to email a coordinator and wait for a response",
            "Only offering signup on paper forms at a lobby table",
            "Having a group catalog that requires staff to manually add members",
            "Making people attend an orientation before they can join any group",
            "Not showing real-time availability (people sign up for full groups and get frustrated)",
          ] },
          { type: "paragraph", text: "Some churches resist self-service signups because they want a personal touch. That's legitimate. But you can have both. Let people browse and express interest digitally, then have a leader follow up with a personal call or text within 24 hours. The system handles logistics. Your people handle relationships." },
          { type: "callout", variant: "tip", title: "The post-visit window", body: "The best time to invite someone into a group is within **48 hours of their first visit**. They're already thinking about connection. An automatic group recommendation based on their interests, location, and life stage turns that thought into action." },
        ],
      },
      {
        heading: "Train leaders, not just hosts",
        blocks: [
          { type: "paragraph", text: "A host opens their home. A leader shepherds souls. The distinction matters, and too many churches blur it. When you recruit someone to 'just facilitate the curriculum,' you get a discussion moderator. When you equip someone to care for the people in the room, you get a leader who can sustain a group through hard seasons." },
          { type: "paragraph", text: "The difference shows up in moments the curriculum doesn't prepare for. When someone shares that their marriage is falling apart. When a member stops showing up and nobody reaches out. When the group hits a conflict and doesn't know how to navigate it. Facilitators freeze in those moments. Equipped leaders lean in." },
          { type: "subheading", text: "What leader training actually looks like" },
          { type: "paragraph", text: "Keep it short and practical. A 6-week cohort works better than a 6-month program. Cover the essentials:" },
          { type: "list", style: "unordered", items: [
            "How to ask good follow-up questions (not just 'How is everyone doing?')",
            "What to do when someone shares something serious -- when to listen, when to refer to a pastor",
            "How to create space for quiet members without putting them on the spot",
            "How to follow up on prayer requests throughout the week, not just in the meeting",
            "How to have the multiplication conversation before the group gets too comfortable",
          ] },
          { type: "subheading", text: "Build a leadership pipeline" },
          { type: "list", style: "ordered", items: [
            "Identify potential leaders from your most consistent group attendees",
            "Invite them into a leadership cohort -- make it clear this is an investment, not an obligation",
            "Pair them as apprentice leaders in existing groups for one semester",
            "Launch them with a co-leader so they're never alone in their first season",
          ] },
          { type: "paragraph", text: "Track training progress in your ChMS. When someone completes the pathway, flag them as 'ready to launch.' Your groups pastor can see the pipeline at a glance instead of tracking it in their head." },
        ],
      },
      {
        heading: "Watch the data before the group watches itself die",
        blocks: [
          { type: "paragraph", text: "Groups rarely fail dramatically. They fade. Attendance drops from 10 to 8 to 6 to 4 over the course of a few weeks. The leader doesn't raise a flag because they're too close to the situation, or because they feel responsible, or because they assume people are just busy." },
          { type: "paragraph", text: "By the time someone tells the groups pastor, the group is already in triage mode. The window for a simple intervention -- a phone call, a conversation about format, a schedule adjustment -- has closed." },
          { type: "paragraph", text: "This is where data changes the game. Not complex analytics -- just basic attendance tracking with alerts. When a group's average attendance drops by 30% over three weeks, that's a signal. When a leader misses two meetings in a row, that's a signal. When a group hasn't logged a meeting in two weeks, that's a signal." },
          { type: "callout", variant: "info", body: "Most groups that receive a check-in call during the **first three weeks of decline** recover. Most groups that don't hear from leadership until month two don't. Early intervention is everything." },
          { type: "paragraph", text: "Data also helps you celebrate. When a group has been meeting consistently for six months, that's worth recognizing. When a new member joins and sticks, that's worth affirming to the leader. Recognition based on actual patterns feels more genuine than generic appreciation." },
        ],
      },
      {
        heading: "Plan for multiplication from day one",
        blocks: [
          { type: "paragraph", text: "The healthiest small group cultures treat multiplication as graduation, not amputation. After 12-18 months, an apprentice leader launches a new group and the cycle continues. The original group doesn't die -- it sends out a leader and welcomes new members." },
          { type: "paragraph", text: "But multiplication only works if you cast the vision from the beginning. If people join a group expecting it to last forever, any talk of splitting feels like a breakup. If they join knowing the goal is to grow and send, it feels like mission." },
          { type: "subheading", text: "Practical multiplication steps" },
          { type: "list", style: "ordered", items: [
            "Set the expectation at launch: 'This group's goal is to develop a new leader within 18 months'",
            "Identify the apprentice by month 3 -- look for the person who naturally follows up with people during the week",
            "Give the apprentice increasing responsibility: leading one discussion per month, then every other week",
            "When the apprentice is ready, launch the new group with 3-4 members from the original group as a core team",
            "Celebrate the launch publicly -- this is the healthiest sign of discipleship in your church",
          ] },
          { type: "callout", variant: "quote", body: "The goal of a small group isn't to exist forever. It's to create leaders who start new ones. When multiplication becomes the expected rhythm, growth becomes organic instead of programmatic." },
        ],
      },
      {
        heading: "Where to start",
        blocks: [
          { type: "paragraph", text: "If your small group ministry feels stuck, pick the one area that would unlock the most growth. If people want to join but the process is clunky, fix the signup flow. If groups keep folding and you don't know why until it's too late, implement basic attendance tracking with alerts. If you have plenty of interested attendees but not enough leaders, build the pipeline." },
          { type: "paragraph", text: "The churches that grow small groups well don't treat it as a seasonal initiative. They treat it as a year-round system with consistent rhythms: continuous signup, rolling leader development, monthly health checks, and quarterly celebrations of multiplication. When community building becomes infrastructure instead of a campaign, the results compound over time." },
          { type: "paragraph", text: "Small group growth isn't about one big launch campaign per year. It's about a system that continuously removes friction, develops leaders, monitors health, and celebrates multiplication. Get those four things right and the growth becomes self-sustaining." },
          { type: "cta", heading: "Build your group flow with Relius", body: "From signup to multiplication -- manage the entire small group lifecycle in one place.", buttonText: "Explore use cases", buttonHref: "/use-cases/" },
        ],
      },
    ],
    takeaway: [
      "The signup window is 48 hours. If your process takes longer than that, you're losing people.",
      "Train leaders in pastoral skills, not just curriculum facilitation.",
      "Track attendance trends weekly. Early intervention saves most struggling groups.",
      "Cast the vision for multiplication from day one -- frame it as graduation, not a breakup.",
      "Growth comes from a system, not a seasonal campaign.",
    ],
    quote: "The goal of a small group isn't to exist forever. It's to create leaders who start new ones.",
    image: "/images/blog/grow-small-groups-2026.webp",
  },
  {
    slug: "church-data-security-guide",
    title: "Church data security: protecting your people in a digital age",
    excerpt: "Your congregation shares names, addresses, giving history, and deeply personal prayer requests. Here is how to protect that trust with practical security measures any church can implement.",
    author: "Felix Tang",
    role: "Relius Cofounder",
    date: "2026-02-08",
    readTime: "7 min",
    category: "Best Practice",
    contentType: "Guide",
    topics: ["Security", "Technology", "Operations"],
    churchSizeFocus: ["Small", "Mid-size", "Growing", "Multi-site"],
    content: [
      {
        heading: "It starts with an email",
        blocks: [
          { type: "paragraph", text: "A church office manager in Ohio opened an email that looked like it came from their denomination's headquarters. It asked her to verify her login credentials for a software update. She clicked the link, entered her password, and went back to preparing the bulletin." },
          { type: "paragraph", text: "Two weeks later, the church discovered that their entire member database -- names, addresses, phone numbers, giving history, and pastoral care notes -- had been downloaded by an unknown party. The phishing email wasn't from the denomination. It was from an attacker who had researched the church's affiliations and crafted a convincing fake." },
          { type: "paragraph", text: "This isn't a hypothetical scenario. Variations of this story play out at churches every month. And most of them are preventable with basic security practices that any church can implement without an IT department." },
        ],
      },
      {
        heading: "Why churches are targets",
        blocks: [
          { type: "paragraph", text: "Churches store an unusual combination of data. Financial information (giving records, bank details for ACH donations), personal information (addresses, phone numbers, family relationships), and deeply sensitive pastoral data (marriage counseling notes, addiction recovery status, mental health concerns). Few other organizations hold this breadth of personal information with this little security infrastructure." },
          { type: "paragraph", text: "Attackers know this. They also know that most churches run on small teams, that volunteer turnover creates access management gaps, and that security training is rarely part of staff onboarding. Churches are soft targets with valuable data." },
          { type: "stat", value: "200+", label: "churches reported data breaches in 2024 -- and many more went unreported" },
          { type: "paragraph", text: "The most common attack isn't sophisticated hacking. It's phishing -- fake emails that trick someone into entering their credentials on a convincing-looking login page. The second most common: reused passwords. When a staff member uses the same password for the church database and a personal shopping site, a breach at the shopping site becomes a breach at the church." },
          { type: "paragraph", text: "There's also a category of risk that gets less attention: insider data mishandling. A well-meaning volunteer exports the member directory to their personal laptop to work on a mailing from home. A staff member emails giving data to a board member without encryption. A former intern still has access to the database six months after their internship ended. None of these people have malicious intent, but each scenario creates a vulnerability." },
          { type: "paragraph", text: "The good news: you don't need a full-time IT team to protect your congregation's data. You need good habits, the right tools, and a culture that treats data protection as a form of pastoral care." },
        ],
      },
      {
        heading: "Start with password hygiene",
        blocks: [
          { type: "paragraph", text: "Use unique, strong passwords for every system. This is the single most impactful security measure you can take. A password manager like 1Password or Bitwarden makes this practical even for volunteer teams --no one has to remember dozens of complex passwords." },
          { type: "paragraph", text: "Enable two-factor authentication (2FA) everywhere it's offered. 2FA means even if someone steals a password, they can't log in without a second verification step --usually a code from an app on your phone." },
          { type: "callout", variant: "tip", title: "Start here today", body: "Relius supports 2FA out of the box. Turn it on for every admin and staff account **today** --it takes less than five minutes and blocks 99% of credential-based attacks." },
          { type: "subheading", text: "Common password mistakes churches make" },
          { type: "list", style: "unordered", items: [
            "Sharing one login across the entire office (if one person is compromised, everyone is)",
            "Using the church name or address as a password (hackers try these first)",
            "Never changing passwords when staff or volunteers leave",
            "Storing passwords in a shared Google Doc or sticky notes on monitors",
          ] },
        ],
      },
      {
        heading: "Audit who has access",
        blocks: [
          { type: "paragraph", text: "When a volunteer steps down, do they still have database access? When an intern finishes their summer, is their account deactivated? Many churches never revoke permissions. Over time, dozens of former staff and volunteers retain access to sensitive data." },
          { type: "paragraph", text: "Run quarterly access reviews. Pull up your user list, check each name, and ask: does this person still need access? If not, deactivate their account. This takes 30 minutes per quarter and dramatically reduces your risk surface." },
          { type: "callout", variant: "warning", title: "The principle of least privilege", body: "Every person should have access to **only** the data they need for their role. Nursery volunteers see check-in screens. They don't see giving records. Youth leaders see their group roster. They don't see pastoral care notes for adults." },
          { type: "paragraph", text: "Relius role-based permissions make this practical. You can create custom roles with granular access controls -- no IT degree required. When someone's role changes, updating their permissions takes seconds." },
          { type: "subheading", text: "Build access changes into your HR process" },
          { type: "paragraph", text: "Make permission updates part of your staff and volunteer onboarding and offboarding checklists. When someone joins the team, they get the minimum access their role requires. When they leave, their access is revoked the same day -- not the following week, not 'when someone remembers.' This isn't about distrust. It's about discipline. A clear process prevents the slow accumulation of unnecessary access that creates risk over time." },
        ],
      },
      {
        heading: "Encrypt everything",
        blocks: [
          { type: "paragraph", text: "Encryption converts your data into unreadable code that can only be unlocked with the right key. There are two types you need to care about:" },
          { type: "list", style: "unordered", items: [
            "**Data at rest:** Information stored in databases. If someone steals a hard drive or gains unauthorized database access, encryption means they get gibberish, not member records.",
            "**Data in transit:** Information moving between your browser and the server. TLS encryption (the padlock in your browser) prevents anyone from intercepting data as it travels.",
          ] },
          { type: "paragraph", text: "If your church management software doesn't mention encryption in their security documentation, ask hard questions. This is table stakes for any platform handling personal information." },
          { type: "callout", variant: "info", body: "Relius uses **AES-256 encryption** for data at rest and **TLS 1.3** for all data transfers. These are the same standards used by banks and healthcare systems." },
          { type: "paragraph", text: "Beyond your church management platform, think about other places member data lives: email attachments, shared drives, printed directories, volunteer phones. Every copy of sensitive data is a potential leak point." },
          { type: "subheading", text: "The printed directory problem" },
          { type: "paragraph", text: "Many churches still produce printed member directories with names, addresses, and phone numbers. These documents are impossible to recall once distributed. If a directory ends up at a garage sale or in a recycling bin, every member's personal information is exposed. Consider keeping directories digital-only with access controls, or at minimum, ask members to opt in before including their information in any printed material." },
        ],
      },
      {
        heading: "Plan for incidents",
        blocks: [
          { type: "paragraph", text: "No security system is perfect. Having an incident response plan means the difference between a contained problem and a catastrophe. Your plan doesn't need to be complex --it needs to be written down and accessible." },
          { type: "subheading", text: "Your incident response checklist" },
          { type: "list", style: "ordered", items: [
            "**Identify:** Who noticed the issue? What systems are affected? When did it start?",
            "**Contain:** Immediately disable compromised accounts. Change passwords for affected systems.",
            "**Assess:** What data was potentially exposed? How many people are affected?",
            "**Notify:** Inform affected individuals honestly and promptly. Consult legal counsel if required by your state's breach notification laws.",
            "**Recover:** Restore from backups if needed. Patch the vulnerability that was exploited.",
            "**Review:** What failed? How do you prevent this from happening again?",
          ] },
          { type: "paragraph", text: "Store this plan somewhere accessible --not just on the computer that might be compromised. Print a copy. Save it to a cloud drive. Make sure at least three people know where it is." },
          { type: "paragraph", text: "Review the plan annually. Practice it if you can. A tabletop exercise -- walking through a hypothetical breach scenario with your staff -- takes an hour and reveals gaps you'd never find on paper. The worst time to figure out your response process is during an actual incident." },
          { type: "paragraph", text: "Data security isn't glamorous work. It doesn't fill seats on Sunday. But it protects the trust that does. Every family who shares their address, every giver who connects their bank account, every person who shares a prayer request -- they're trusting you with information that could harm them if mishandled. That trust is a pastoral responsibility, and it deserves the same care you bring to every other area of ministry." },
          { type: "cta", heading: "See how Relius protects your data", body: "Enterprise-grade security built for churches --without the enterprise price tag.", buttonText: "Start a conversation", buttonHref: "/contact/" },
        ],
      },
    ],
    takeaway: [
      "Churches are prime targets—take security seriously.",
      "Password managers + 2FA = baseline protection.",
      "Least-privilege access: people only see what they need.",
    ],
    quote: "Your congregation gave you their information in trust. Protect it like you'd protect the offering.",
    image: "/images/blog/church-data-security-guide.webp",
  },
  {
    slug: "streamline-church-communications",
    title: "How to streamline church communications (without annoying everyone)",
    excerpt: "Your congregation is tuning out because you're sending too much to too many people. Here is how to communicate less but land more.",
    author: "Felix Tang",
    role: "Relius Cofounder",
    date: "2026-02-12",
    readTime: "6 min",
    category: "Best Practice",
    contentType: "Guide",
    topics: ["Communication", "Systems"],
    churchSizeFocus: ["Small", "Mid-size", "Growing"],
    content: [
      {
        heading: "The unsubscribe that should worry you",
        blocks: [
          { type: "paragraph", text: "A children's ministry director at a growing church told us she unsubscribed from her own church's email list. Not because she didn't care -- because she was getting 11 emails a week from different ministries, and she couldn't find the ones that mattered to her." },
          { type: "paragraph", text: "If your own staff is overwhelmed by your communication volume, your congregation is drowning. The impulse when churches grow is to communicate more. More emails, more text blasts, more social posts, more app notifications. But more isn't better. More is noise." },
          { type: "paragraph", text: "The churches that communicate effectively in 2026 aren't the loudest ones. They're the most relevant ones. They send fewer messages to better-targeted audiences and get higher engagement on everything they send." },
        ],
      },
      {
        heading: "Consolidate your channels",
        blocks: [
          { type: "paragraph", text: "If your church uses email, texting, a Facebook group, a church app, AND printed bulletins -- you're fragmenting attention. Your congregation doesn't know where to look, so they stop looking at all of them." },
          { type: "paragraph", text: "The fix isn't adding another channel. It's picking two primary channels and committing to them. For most churches, that's email for detailed announcements and texting for time-sensitive updates. Everything else is supplementary." },
          { type: "paragraph", text: "Think about it from the perspective of a busy parent in your church. They have a full-time job, two kids in activities, and they're trying to stay connected to their faith community. They don't have the bandwidth to check five different apps and inboxes. They need one reliable place for the details and one reliable way to get urgent updates. Everything else is noise." },
          { type: "callout", variant: "tip", title: "The two-channel rule", body: "Pick **one channel for detailed information** (email or app) and **one channel for urgency** (text). Train your congregation to expect important things there. Everything else -- social media, bulletin, website -- is backup, not primary." },
          { type: "subheading", text: "How to pick your primary channels" },
          { type: "paragraph", text: "Survey your congregation. Not a lengthy questionnaire -- three questions: Where do you prefer to receive church updates? How often is too often? What information do you actually need from us? The answers might surprise you. Many churches assume everyone wants the app. In practice, most members over 40 prefer email, and most members under 30 prefer text. Meet people where they already are." },
          { type: "paragraph", text: "Relius centralizes communications so your team doesn't duplicate work. Send an email, text, or push notification from the same dashboard. Write the message once, choose your channels, and send. No copying and pasting between five different tools." },
        ],
      },
      {
        heading: "Segment your audience",
        blocks: [
          { type: "paragraph", text: "Youth parents don't need senior adult ministry updates. Singles don't need marriage retreat reminders. Men's ministry leaders don't need women's event logistics. Stop sending everything to everyone --relevance beats frequency every time." },
          { type: "paragraph", text: "When people receive irrelevant messages, they tune out. Open rates drop. Unsubscribes climb. Eventually, they miss the messages that actually matter to them because they've trained themselves to ignore your emails." },
          { type: "subheading", text: "Smart segments that work" },
          { type: "list", style: "unordered", items: [
            "**Parents of middle schoolers**  -- only receive middle school ministry updates",
            "**First-time guests (last 30 days)**  -- receive the welcome sequence, not the capital campaign ask",
            "**Volunteers by ministry**  -- kids team gets kids schedule changes, not worship team updates",
            "**Recurring givers**  -- receive impact stories and financial updates (not giving appeals)",
            "**Inactive members (60+ days absent)**  -- receive a personal check-in, not event spam",
          ] },
          { type: "paragraph", text: "Use Relius tags to create these smart lists. Once configured, they update automatically as people's data changes. A family with kids who age into the youth group automatically moves into the youth parent segment." },
        ],
      },
      {
        heading: "Create a communication calendar",
        blocks: [
          { type: "paragraph", text: "Most church communication chaos comes from poor planning. Last-minute announcements lead to duplicate emails, conflicting messages, and stressed staff sending things at 11 PM on Saturday night." },
          { type: "paragraph", text: "Plan your announcements a month ahead. Use a shared calendar that every ministry leader can see. When the youth pastor wants to send something, they check the calendar first. If three other messages are going out that day, they reschedule." },
          { type: "paragraph", text: "The calendar doesn't have to be complicated. A shared Google Sheet works for small churches. What matters is that every person who sends communication on behalf of the church can see what else is going out that week. Visibility prevents pile-ups." },
          { type: "list", style: "unordered", heading: "Communication calendar best practices:", items: [
            "Limit church-wide messages to **2-3 per week** maximum",
            "Schedule ministry-specific messages on different days to avoid inbox overload",
            "Designate one person as the 'traffic controller' who approves all church-wide sends",
            "Write messages early in the week and schedule them in advance",
            "Review the calendar every Monday morning as a staff team -- five minutes prevents a week of overlapping messages",
          ] },
          { type: "subheading", text: "The traffic controller role" },
          { type: "paragraph", text: "This one role changes everything. Assign one person -- usually a communications director or executive pastor -- to approve every church-wide send. Ministry leaders draft their message and submit it. The traffic controller checks the calendar, edits for consistency, and schedules it for the optimal time. This sounds like bottleneck-creating bureaucracy. In practice, it cuts total email volume by 30-40% because someone is finally asking 'does the whole church actually need to see this?'" },
          { type: "paragraph", text: "Relius lets you schedule messages days or weeks in advance. Write Tuesday's volunteer reminder on Friday when you have time. Set it and forget it. Your team gets their weekend back." },
        ],
      },
      {
        heading: "Measure what matters",
        blocks: [
          { type: "paragraph", text: "If 8% of people open your emails, something's wrong. But you won't know it's wrong unless you're tracking the data. Most churches send communications into the void and hope for the best." },
          { type: "paragraph", text: "Track three key metrics for every message: **open rate** (are people seeing it?), **click rate** (are they engaging?), and **unsubscribe rate** (are they opting out?). Industry averages for nonprofits are around 25-30% open rate. If you're below 15%, it's time to rethink your approach." },
          { type: "callout", variant: "info", body: "Relius analytics show you which messages land and which fall flat. Over time, you'll learn that your congregation opens emails sent on **Tuesday morning** but ignores **Friday afternoon** sends. Data replaces guessing." },
          { type: "subheading", text: "Quick wins to improve engagement" },
          { type: "list", style: "unordered", items: [
            "Use the recipient's first name in the subject line (personalization increases open rates by 20%)",
            "Keep subject lines under 50 characters -- short and specific beats long and vague",
            "Put the most important information in the first two sentences (many people only see the preview)",
            "Include one clear call-to-action per message, not five competing links",
            "Test your send times -- run the same message at two different times and compare the open rates",
          ] },
          { type: "paragraph", text: "Here's a common scenario: a church sends a newsletter every Friday afternoon. Open rates hover around 12%. They move the same newsletter to Tuesday at 10 AM. Open rates jump to 28%. Nothing about the content changed. The timing changed. Your congregation has rhythms -- learn them and your messages will land." },
        ],
      },
      {
        heading: "Build a feedback loop",
        blocks: [
          { type: "paragraph", text: "The best communication strategies aren't built by the communications team alone. They're shaped by the people receiving the messages. Once a year, ask your congregation three questions: What church communications are most useful to you? What do you wish you received less of? How do you prefer to hear from us?" },
          { type: "paragraph", text: "You'll discover that most people want fewer, better messages. They want to know about things that affect them directly. They want to hear the pastor's voice occasionally, not just administrative updates. And they want the ability to choose what they receive." },
          { type: "paragraph", text: "Communication preferences should be part of your member profile, not a one-size-fits-all setting. Some families want every email. Others only want texts about service cancellations and emergencies. Honoring those preferences isn't just good communication practice -- it's respecting the people you serve." },
          { type: "cta", heading: "Streamline comms with Relius", body: "One dashboard for email, text, and push. Segmentation built in. Analytics that actually help.", buttonText: "Explore use cases", buttonHref: "/use-cases/" },
        ],
      },
    ],
    takeaway: [
      "Less is more. Fewer channels, higher impact.",
      "Segmentation = relevance = engagement.",
      "Data tells you what's working. Use it.",
    ],
    quote: "The best communication strategy is the one your people actually read.",
    image: "/images/blog/streamline-church-communications.webp",
  },
  {
    slug: "modern-church-check-in",
    title: "The future of church check-in: security, speed, and simplicity",
    excerpt: "Check-in is the first operational touchpoint of your Sunday. It sets the tone for safety, speed, and first impressions. Here is what modern check-in looks like and why it matters more than most churches realize.",
    author: "Felix Tang",
    role: "Relius Cofounder",
    date: "2026-02-15",
    readTime: "7 min",
    category: "Product",
    contentType: "Guide",
    topics: ["Kids Ministry", "Security", "Guests"],
    churchSizeFocus: ["Small", "Mid-size", "Growing", "Multi-site"],
    content: [
      {
        heading: "The Sunday morning stress test",
        blocks: [
          { type: "paragraph", text: "It's 9:47 AM on Sunday. Service starts in 13 minutes. There's a line of families at the check-in table. A first-time guest is standing to the side, unsure where to go. A parent is trying to explain their child's peanut allergy to a volunteer who's searching for a pen. And somewhere in the back, a toddler is crying because the label printer jammed." },
          { type: "paragraph", text: "Check-in is the most operationally demanding five minutes of your week. It's also the first impression for every family that walks through your doors. When it's smooth, people feel welcomed and safe. When it's chaotic, they feel anxious -- and anxious parents don't engage well with the sermon." },
          { type: "paragraph", text: "Modern check-in systems solve most of these problems. But 'modern' doesn't just mean digital. It means thoughtful -- designed around how families actually experience your building on a Sunday morning. The best check-in systems are invisible when they work and immediately missed when they don't." },
        ],
      },
      {
        heading: "Child safety is non-negotiable",
        blocks: [
          { type: "paragraph", text: "A matching parent-child tag system isn't fancy -- it's essential. No one picks up a child without the matching security code. This is the baseline expectation for every family that walks through your doors, and it should be non-negotiable regardless of your church size." },
          { type: "paragraph", text: "Relius check-in generates unique codes per family per visit. Parents scan out with their matching tag. The system logs the exact timestamp of drop-off and pickup. Full chain of custody, every Sunday, automatically documented." },
          { type: "callout", variant: "warning", title: "Liability matters", body: "If a custody dispute arises or an unauthorized person attempts pickup, having a **documented digital trail** protects both the child and your church. Paper sign-in sheets are easy to lose, hard to search, and impossible to audit." },
          { type: "paragraph", text: "Some churches still rely on handwritten name tags and honor-system pickup. That worked in 1995. Today, families expect -- and deserve -- better. The good news: modern check-in systems make security seamless, not burdensome." },
          { type: "paragraph", text: "Consider your check-in system from the perspective of a visiting family. They're trusting their child to strangers. They don't know your volunteers. They don't know your building. A professional, clearly organized check-in process with security tags communicates that you take their child's safety as seriously as they do. A clipboard and a Sharpie communicates the opposite." },
        ],
      },
      {
        heading: "First-time guests need a different flow",
        blocks: [
          { type: "paragraph", text: "Regular families want speed. They know the drill, they've pre-registered their kids, and they want to tap a screen and go. First-time guests want help. They don't know where the nursery is, which room their 4-year-old goes to, or what information they need to provide." },
          { type: "paragraph", text: "Separate the flows. A dedicated 'First Time?' kiosk with a friendly greeter nearby makes guests feel seen instead of lost. The greeter walks them through registration while the express lane keeps moving for regulars." },
          { type: "subheading", text: "The first-time guest check-in experience" },
          { type: "list", style: "ordered", items: [
            "Guest taps 'First Time' on the kiosk (or a greeter initiates on their behalf)",
            "Quick registration: parent name, child name, age, allergies, and emergency contact",
            "System assigns the child to the age-appropriate room and prints matching security tags",
            "Relius notifies the connections team in real-time so someone can follow up during service",
            "After service, a welcome text goes out automatically with next-step information",
          ] },
          { type: "paragraph", text: "Relius automatically routes first-time families through this dedicated flow. Your connections team gets a real-time notification -- they know a new family just arrived before the sermon starts." },
          { type: "paragraph", text: "The transition from guest to regular should happen seamlessly in the system too. After a family's third visit, they're automatically shifted from the first-time flow to the express lane. No manual data entry, no re-registration. The system recognizes them, remembers their kids' rooms and allergies, and the check-in experience is as fast as it is for any regular family." },
        ],
      },
      {
        heading: "Self-service kiosks reduce lines",
        blocks: [
          { type: "paragraph", text: "Nobody wants to wait in line when the sermon's about to start. Long check-in lines create stress, make families late, and leave a bad first impression. The solution: let families check in before they even walk through the door." },
          { type: "paragraph", text: "Relius supports QR code check-in from any device. Families scan a code from the parking lot, kids are checked in on their phone, and name tag labels print automatically at the door. By the time they walk in, everything is ready." },
          { type: "callout", variant: "tip", title: "Pre-check-in", body: "Send a **Saturday evening text** with a QR code link. Families can pre-check-in from home. Sunday morning becomes a label pickup, not a registration line. Churches using pre-check-in report **60% shorter lines**." },
          { type: "paragraph", text: "For families who prefer to check in on-site, tablet kiosks placed at multiple entry points prevent bottlenecks. One kiosk per 50 families is a good rule of thumb. Place them where the flow is natural -- near entrances, not tucked in a hallway." },
          { type: "subheading", text: "The express lane principle" },
          { type: "paragraph", text: "Think about how grocery stores handle checkout: self-checkout for people with a few items, staffed lanes for full carts. Apply the same logic. Returning families who've pre-registered get a fast-track kiosk experience -- tap their phone, grab the label, and go. New families get a staffed station with a greeter who walks them through registration. Both groups move efficiently, but neither feels rushed. The key is making the express lane genuinely fast -- under 15 seconds from scan to label -- so regular families see the value of pre-registration." },
        ],
      },
      {
        heading: "Track who's in the building",
        blocks: [
          { type: "paragraph", text: "In an emergency -- fire, severe weather, security threat -- do you know who's in your building? How many children? Which rooms? How many adults? Modern check-in isn't just for kids -- it's a safety system for everyone." },
          { type: "paragraph", text: "Relius offers optional adult check-in for services and events. In a crisis, you can pull a real-time roster of everyone on campus. That information could be critical for first responders." },
          { type: "callout", variant: "info", body: "Beyond emergencies, adult check-in gives you **accurate attendance data** by service time, location, and frequency. No more manual headcounts or educated guesses in staff meetings." },
          { type: "paragraph", text: "The data from adult check-in also helps you understand your service dynamics. Which service time is growing? Which one has plateaued? Are you gaining first-time visitors but losing regulars? Without accurate headcounts, these questions get answered with anecdote. With check-in data, they get answered with facts." },
          { type: "paragraph", text: "Some churches worry adult check-in feels too formal or creates friction. The key is making it optional and effortless -- a QR code scan as they walk in, not a line to stand in. Most people are already scanning codes at coffee shops and airports. Church shouldn't feel more complicated." },
        ],
      },
      {
        heading: "Allergy and medical alerts",
        blocks: [
          { type: "paragraph", text: "A child's allergy information should be visible the moment they check in. Not buried in a manila folder somewhere. Not written in a binder that the substitute volunteer can't find. Visible, prominent, and impossible to miss." },
          { type: "paragraph", text: "Relius prints allergy alerts directly on name tags in bold, color-coded text. Peanut allergy? It's on the tag. Asthma inhaler in the backpack? It's on the tag. Classroom volunteers see the alert before the child even sits down." },
          { type: "list", style: "unordered", heading: "What Relius tracks for each child:", items: [
            "Food allergies and severity level",
            "Medical conditions (asthma, diabetes, seizure disorders)",
            "Medications and where they're stored",
            "Emergency contact information (beyond the parent who dropped off)",
            "Behavioral notes or special needs accommodations",
          ] },
          { type: "paragraph", text: "Volunteers also receive push notifications via the Relius app when a child with medical alerts is checked into their room. No chance of the information being overlooked." },
          { type: "paragraph", text: "Parents update this information once -- during initial registration -- and it persists across every visit. If something changes, they can update it through the app or at the kiosk. No paper forms to fill out each Sunday. No risk of last week's allergy note getting lost in a pile of old check-in sheets." },
          { type: "cta", heading: "Try Relius check-in", body: "Security codes, allergy alerts, guest flows, and pre-check-in --all in one system.", buttonText: "Explore use cases", buttonHref: "/use-cases/" },
        ],
      },
    ],
    takeaway: [
      "Matching codes = child safety foundation.",
      "Separate guest and regular flows.",
      "Know who's in your building, always.",
    ],
    quote: "Check-in is the first touchpoint of your Sunday. Make it feel like welcome, not bureaucracy.",
    image: "/images/blog/modern-church-check-in.webp",
  },
  {
    slug: "church-leadership-transitions",
    title: "Navigating church leadership transitions without losing momentum",
    excerpt: "Every church will face a leadership change. The ones that handle it well protect institutional knowledge, communicate honestly, and build systems that outlast individuals.",
    author: "Felix Tang",
    role: "Relius Cofounder",
    date: "2026-02-18",
    readTime: "8 min",
    category: "Ministry Insight",
    contentType: "Guide",
    topics: ["Leadership", "Operations", "Pastoral Care"],
    churchSizeFocus: ["Mid-size", "Growing", "Multi-site"],
    content: [
      {
        heading: "The Monday after the announcement",
        blocks: [
          { type: "paragraph", text: "The lead pastor announced his resignation on Sunday. By Monday afternoon, three board members had received calls from concerned families. By Wednesday, a small group leader emailed asking if the church was 'going in a different direction.' By Friday, the office manager was fielding questions she didn't have answers to." },
          { type: "paragraph", text: "Leadership transitions are one of the highest-stakes moments in a church's life. Not because the transition itself is inherently destructive, but because the information vacuum that surrounds it creates anxiety, rumors, and sometimes an exodus of people who would have stayed if someone had simply communicated clearly." },
          { type: "paragraph", text: "Every church will face this. Whether it's a planned retirement, a sudden resignation, a firing, or a move to a new city -- leadership change is inevitable. The churches that navigate it well aren't the ones that avoid it. They're the ones that prepare for it before it happens." },
          { type: "paragraph", text: "The churches that navigate transitions well share a common approach: they document before people leave, communicate before rumors start, build systems that outlast individuals, and treat departing leaders with genuine honor. Here's what that looks like practically." },
        ],
      },
      {
        heading: "Document institutional knowledge",
        blocks: [
          { type: "paragraph", text: "When a long-time pastor leaves, years of relational knowledge walks out the door. The names of every family going through a hard season. The history of why the Johnsons stopped attending three years ago. The quiet arrangement with a single mom who receives benevolence funds. Gone -- unless it's been documented." },
          { type: "paragraph", text: "This is the most overlooked risk in any church transition. Not finances, not attendance, not even staff morale -- it's the loss of relational context that took years to build. A new pastor walks into a hospital room without knowing the patient's story. A new executive pastor unknowingly reassigns a volunteer to a ministry they left because of a conflict. These aren't hypotheticals. They happen in nearly every undocumented transition." },
          { type: "paragraph", text: "Relius pastoral notes capture this context in a searchable, shareable system. The new leader can read the care history before making a home visit. They walk in informed, not blind. Continuity of care survives the transition." },
          { type: "callout", variant: "warning", title: "The knowledge risk", body: "In most churches, **60% of institutional knowledge lives in one person's head**. When that person leaves, the church doesn't just lose a leader -- it loses the relational context that made care personal." },
          { type: "subheading", text: "What to document before a transition" },
          { type: "list", style: "unordered", items: [
            "Active pastoral care cases and their current status",
            "Key volunteer relationships and how they were recruited",
            "Recurring conflicts or sensitivities within the congregation",
            "Vendor relationships, contracts, and renewal dates",
            "Unwritten traditions -- the things everyone knows but nobody wrote down",
            "Passwords, accounts, and system access credentials (stored securely)",
            "Budget context -- why certain line items exist and what commitments they represent",
          ] },
          { type: "paragraph", text: "Start this documentation before anyone announces they're leaving. The best time to capture institutional knowledge is when the person holding it has no reason to feel rushed. Make documentation a normal part of ministry, not an emergency exercise triggered by a resignation." },
        ],
      },
      {
        heading: "Communicate early and often",
        blocks: [
          { type: "paragraph", text: "Rumors fill information vacuums. The moment a leadership change is certain, start communicating -- even if you don't have all the answers yet. 'We're in a transition and here's what we know so far' is infinitely better than silence followed by a sudden announcement." },
          { type: "paragraph", text: "Don't over-promise timelines you can't keep. It's better to say 'we're forming a search committee and will update you monthly' than to promise a new hire by Easter and miss the deadline. People can handle uncertainty. What they can't handle is feeling like they're being kept in the dark." },
          { type: "paragraph", text: "The frequency of communication matters as much as the content. During the first month of a transition, weekly updates are appropriate even if there's little new information. 'No updates this week, but the search committee met on Thursday and we remain on track' is a valid and reassuring message. It tells people the process is active and they haven't been forgotten." },
          { type: "subheading", text: "Segment your communication" },
          { type: "paragraph", text: "Not everyone needs the same level of detail. Use Relius to send segmented updates:" },
          { type: "list", style: "unordered", items: [
            "**Board members and elders:** Full details on timeline, candidates, and financial implications",
            "**Staff team:** Operational changes, interim responsibilities, and how their roles are affected",
            "**Ministry leaders and volunteers:** What stays the same, what might change, and who to contact with concerns",
            "**Congregation:** Pastoral reassurance, vision continuity, and opportunities to pray and be involved",
          ] },
          { type: "callout", variant: "tip", title: "Consistency matters", body: "Appoint **one spokesperson** for all transition communication. Mixed messages from multiple leaders create confusion and erode trust." },
          { type: "paragraph", text: "Create a dedicated Q&A channel -- a town hall meeting, an email address for questions, or a brief after-service forum. People who feel heard are far less likely to spread rumors. And when leadership answers hard questions publicly, it builds the trust that carries the church through the uncertain middle." },
        ],
      },
      {
        heading: "Preserve processes, not just people",
        blocks: [
          { type: "paragraph", text: "If your guest follow-up system lives in one person's head, you're in trouble. If volunteer scheduling depends on the admin who's been doing it for 12 years, you're vulnerable. If only the outgoing pastor knows how the benevolence fund works, people will fall through the cracks." },
          { type: "paragraph", text: "Build processes that survive personnel changes. Document workflows. Create templates. Set up automations. The goal: anyone with reasonable training could step into a role and keep things running within the first week." },
          { type: "subheading", text: "Identify your single-point-of-failure roles" },
          { type: "paragraph", text: "Walk through your weekly operations and ask: who is the only person who knows how to do this? Sunday bulletin formatting. Payroll processing. Missionary support disbursement. Room reservation system. For each one, create a written procedure that lives somewhere accessible -- not in someone's personal notes app, not in a desk drawer, not in their email drafts folder." },
          { type: "paragraph", text: "Relius workflows run whether the staff member is there or not. Automated guest follow-up sequences don't skip a week because someone resigned. Volunteer reminders still go out. Care request routing still works. The systems carry the ministry while the people transition." },
          { type: "callout", variant: "info", body: "A good test: if your key administrator called in sick for two weeks, would your church's weekly operations continue? If the answer is no, your processes are too dependent on individuals." },
          { type: "paragraph", text: "Transitions expose every undocumented process in your church. The churches that navigate them smoothly are the ones that documented things before they had to. Treat this work as preventive ministry, not crisis management." },
        ],
      },
      {
        heading: "Support the outgoing leader well",
        blocks: [
          { type: "paragraph", text: "How you treat departing staff shapes your culture permanently. Every remaining team member watches. Every volunteer notices. If the outgoing leader is rushed out, marginalized during the transition, or spoken about poorly after they leave, trust erodes across the entire organization." },
          { type: "paragraph", text: "This is true whether the departure is voluntary and celebrated, or difficult and uncomfortable. Even when a leader is asked to leave, the remaining staff and congregation are watching how the church handles it. Grace under pressure is a ministry witness that outlasts any sermon." },
          { type: "paragraph", text: "Honor their service publicly. Celebrate specific contributions -- not generic praise, but real stories. Give them a meaningful send-off. Help them land well in their next chapter, whether that's another church, a different career, or retirement." },
          { type: "subheading", text: "Practical offboarding steps" },
          { type: "list", style: "ordered", items: [
            "Schedule a formal knowledge transfer meeting (use the documentation list from section one)",
            "Gradually transition key relationships to the incoming or interim leader",
            "Plan a public celebration that honors their tenure --give the congregation a chance to say goodbye",
            "Transfer system access gracefully. Relius permission changes take seconds --don't wait until after they've left to revoke access",
            "Keep communication open for 90 days after departure for any questions that arise",
          ] },
          { type: "cta", heading: "Keep care consistent through transitions", body: "Relius preserves institutional knowledge so leadership changes don't mean lost relationships.", buttonText: "Start a conversation", buttonHref: "/contact/" },
        ],
      },
    ],
    takeaway: [
      "Write it down or lose it when people leave.",
      "Communication beats speculation every time.",
      "Build systems that outlast individuals.",
    ],
    quote: "Healthy transitions honor the past while preparing for the future.",
    image: "/images/blog/church-leadership-transitions.webp",
  },
];

export type BlogFilterOptions = {
  topics: string[];
  sizes: string[];
  types: string[];
};

export const blogFilters: BlogFilterOptions = {
  topics: ["Volunteers", "Pastoral Care", "Operations", "Leadership", "Guests", "Systems", "Scaling", "AI", "Communication", "Migration", "Giving", "Finance", "Technology", "Small Groups", "Discipleship", "Community", "Security", "Kids Ministry"],
  sizes: ["Small", "Mid-size", "Growing", "Multi-site", "All"],
  types: ["Guide", "Opinion", "Playbook", "Interview"],
};

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
