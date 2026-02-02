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
  content: {
    heading: string;
    body: string[];
  }[];
  takeaway: string[];
  quote?: string;
  image?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "prevent-volunteer-burnout",
    title: "5 ways to prevent volunteer burnout (from churches doing it well)",
    excerpt: "We asked churches of different sizes how they keep volunteers energized. Here are the rhythms they practice every month.",
    author: "Marissa Cole",
    role: "Ministry Partner Coach",
    date: "2025-01-12",
    readTime: "7 min",
    category: "Ministry Insight",
    contentType: "Guide",
    topics: ["Volunteers", "Pastoral Care"],
    churchSizeFocus: ["Small", "Mid-size"],
    content: [
      {
        heading: "Start with honest rhythms",
        body: [
          "Grace River (150 people) treats every volunteer role like a rotating position. That means they can say 'rest this month' without guilt.",
          "Create a dashboard inside Relius that highlights people serving more than twice a month. Tag them for a check-in and a 'thank you' note.",
        ],
      },
      {
        heading: "Normalize release and relief",
        body: [
          "Healthy teams celebrate when someone pauses a role. One church literally built a 'Sabbath rotation' into Relius so everyone expects breaks.",
          "Capture a short exit interview in Relius. It becomes a searchable note for future leaders.",
        ],
      },
      {
        heading: "Make appreciation specific",
        body: [
          "Generic thank-yous fade. Use Relius to log stories tied to an event or person and call those out in your note.",
          "Pair the note with small acts: coffee gift cards, a recorded prayer, or five minutes on stage from a pastor.",
        ],
      },
    ],
    takeaway: [
      "Watch rotations like you watch giving trends.",
      "Celebrate rest, not just service hours.",
      "Thank people with stories, not stats.",
    ],
    quote: "When volunteers know there's an exit ramp, they stay longer because they trust you'll notice before they're exhausted.",
    image: "/images/blog/prevent-volunteer-burnout.webp",
  },
  {
    slug: "why-church-software-fails",
    title: "Why most church software fails (and how to pick better)",
    excerpt: "Many platforms promise clarity and end up creating more spreadsheets. Here's how to evaluate software through a pastoral lens.",
    author: "Aaron Wells",
    role: "Executive Pastor in Residence",
    date: "2025-01-05",
    readTime: "6 min",
    category: "Perspective",
    contentType: "Opinion",
    topics: ["Operations", "Leadership"],
    churchSizeFocus: ["Mid-size", "Growing", "Multi-site"],
    content: [
      {
        heading: "Start with ministry language",
        body: [
          'Ask, "Does this system describe people the way we do?" If not, your team will drag their feet. Relius was designed with pastoral vocabulary.',
          "Demo the pastoral care flow before the finance module. If it feels cold there, it will feel cold everywhere.",
        ],
      },
      {
        heading: "Measure burden, not features",
        body: [
          "Feature checklists reward complexity. Ministry rewards clarity. Map the top five things you actually do each week and see if the workflow is lighter.",
          "We track how many clicks it takes to do pastoral notes. If it creeps up, we change the UI.",
        ],
      },
      {
        heading: "Look for partners, not platforms",
        body: [
          "Who will you email when something breaks? Ask for names. Meet them. Reliable software comes with honest humans.",
          "Transparent roadmaps matter. A trustworthy vendor admits what isn't built yet.",
        ],
      },
    ],
    takeaway: [
      "Adoption beats feature lists.",
      "People vocab should lead priorities.",
      "Choose relationship over hype.",
    ],
    image: "/images/blog/why-church-software-fails.webp",
  },
  {
    slug: "first-time-guests-welcome",
    title: "Making first-time guests feel welcome: practical tips",
    excerpt: "A warm lobby is great. A thoughtful follow-up is better. Here's how churches are building guest pathways with Relius.",
    author: "Joel Reyes",
    role: "Friend of Relius / Connections Pastor",
    date: "2024-12-18",
    readTime: "8 min",
    category: "Best Practice",
    contentType: "Guide",
    topics: ["Guests", "Systems"],
    churchSizeFocus: ["Small", "Mid-size", "Growing"],
    content: [
      {
        heading: "Map the first seven days",
        body: [
          "Set a Relius automation that assigns a champion the second someone checks in as a guest.",
          "Send a same-day text from a real leader with a real invite, not a generic template.",
        ],
      },
      {
        heading: "Follow up with next steps, not flattery",
        body: [
          "Create a 'next invite' library inside Relius-family meal, serve tour, Alpha night-so you can send an option that fits the story you heard.",
          "Stop guessing about preferences. Tag guests with interests during check-in and let Relius route the right follow-up.",
        ],
      },
      {
        heading: "Close the loop in staff meeting",
        body: [
          "Pull the Relius guest dashboard every Monday. Celebrate, assign, and pray for the names on the screen.",
          "If someone hasn't been contacted within 48 hours, the system escalates it to a pastor.",
        ],
      },
    ],
    takeaway: [
      "Speed matters more than swag.",
      "Personal invitations beat general ones.",
      "Shared dashboards keep teams accountable.",
    ],
    image: "/images/blog/first-time-guests-welcome.webp",
  },
  {
    slug: "church-200-vs-2000",
    title: "Running a church of 200 vs 2,000: what actually changes",
    excerpt: "We pulled insights from churches in both lanes to show what truly shifts in systems, staffing, and soul care.",
    author: "Mika Thompson",
    role: "Lead Implementation Guide",
    date: "2024-12-05",
    readTime: "9 min",
    category: "Perspective",
    contentType: "Playbook",
    topics: ["Leadership", "Scaling"],
    churchSizeFocus: ["Small", "Growing", "Multi-site"],
    content: [
      {
        heading: "Care stays personal-or people leave",
        body: [
          "Churches that scale well keep a 'people to pastor' ratio they can name.",
          "Use Relius segments to make sure nobody is shepherding more than they should.",
        ],
      },
      {
        heading: "Communication complexity multiplies",
        body: [
          "What was once 'send an email' becomes 'segment by campus, language, and kids ages.' Relius handles that segmentation so your voice stays consistent.",
        ],
      },
      {
        heading: "Data helps you spot drift early",
        body: [
          "Growing churches log their instincts. If you sense engagement is down, check the Relius insights tab for signals before it becomes a problem.",
        ],
      },
    ],
    takeaway: [
      "Pastoral ratios matter more than attendance numbers.",
      "Segment communication as you grow.",
      "Log instincts so you can measure them later.",
    ],
    image: "/images/blog/church-200-vs-2000.webp",
  },
  {
    slug: "ai-changing-church-administration",
    title: "How AI is changing church administration",
    excerpt: "AI is not a pastor. But it can be a thoughtful assistant. Here's how we coach churches to use it without losing their voice.",
    author: "Caleb Morris",
    role: "Head of Product",
    date: "2024-11-20",
    readTime: "7 min",
    category: "Product",
    contentType: "Opinion",
    topics: ["AI", "Communication"],
    churchSizeFocus: ["All"],
    content: [
      {
        heading: "Treat AI like an intern",
        body: [
          "AI can draft, but humans decide. Churches using Relius AI well always layer pastoral review on top.",
          "Store your favorite prompts in Relius so your style stays consistent.",
        ],
      },
      {
        heading: "Protect the pastoral voice",
        body: [
          "Never send AI output straight to your people. Pair AI drafting with your theology, tone, and story.",
        ],
      },
      {
        heading: "Use it to multiply care, not automation",
        body: [
          "Let AI summarize meetings, prep notes, and surface pastoral needs faster, then have a human step in.",
        ],
      },
    ],
    takeaway: [
      "AI drafts, pastors decide.",
      "Your voice is part of your theology.",
      "Use AI to remove admin work, not to replace humans.",
    ],
    image: "/images/blog/ai-changing-church-administration.webp",
  },
  {
    slug: "why-churches-switching-planning-center-2025",
    title: "Why churches are switching from Planning Center in 2026",
    excerpt: "Planning Center built the category. But the category has evolved. Here's what church leaders are telling us about why they're making the switch.",
    author: "Aaron Wells",
    role: "Executive Pastor in Residence",
    date: "2025-01-18",
    readTime: "8 min",
    category: "Perspective",
    contentType: "Opinion",
    topics: ["Operations", "Leadership", "Migration"],
    churchSizeFocus: ["Small", "Mid-size", "Growing"],
    content: [
      {
        heading: "Planning Center got churches organized. Now they want more.",
        body: [
          "For years, Planning Center was the answer to 'How do we get organized?' And it worked. Teams could schedule volunteers. Services could be planned. Data lived somewhere findable.",
          "But organization was never the end goal. Ministry was. And as churches have matured in their digital fluency, they're asking new questions: 'Can we catch people before they drift?' 'Can we turn sermon prep into a week of content?' 'Can we actually see engagement trends, not just attendance?'",
          "Those are AI-shaped questions. And Planning Center wasn't built to answer them.",
        ],
      },
      {
        heading: "The modular model creates hidden friction",
        body: [
          "Planning Center's strength-separate apps for People, Groups, Giving, Check-Ins, Services-becomes a pain point at scale. Each app has its own logic. Data doesn't always flow between them the way you'd expect.",
          "One executive pastor told us: 'I realized I was logging into five apps to prep for one staff meeting. That's when I knew something had to change.'",
          "A unified platform means your people data, giving history, group attendance, and care notes live in one place. You don't stitch context together-you see it.",
        ],
      },
      {
        heading: "AI is changing what's possible",
        body: [
          "Relius was built from the ground up with AI at the core-not bolted on afterward. That means features like Content Studio (turn one sermon into a week of social posts), Pastoral Care AI (surface members who might be drifting), and Sermon Planner (map a teaching calendar with AI-suggested themes) aren't add-ons. They're native.",
          "The churches switching to Relius aren't anti-Planning Center. They're pro-future. They see where ministry technology is headed, and they want a platform that's already there.",
        ],
      },
      {
        heading: "Migration is easier than you think",
        body: [
          "This is the biggest fear we hear. 'We've been on Planning Center for eight years. All our data is there.'",
          "Here's the truth: Planning Center exports cleanly. People records, giving history-it all comes over. Our migration wizard maps your data in under three hours for most churches.",
          "And your team doesn't have to learn a new system from scratch. If they've used any modern church platform, Relius feels familiar. Most teams are comfortable within a week.",
        ],
      },
    ],
    takeaway: [
      "Planning Center solved organization. Relius solves outcomes.",
      "Modular apps create context-switching. Unified platforms create clarity.",
      "AI isn't a feature-it's a foundation.",
      "Migration takes hours, not months.",
    ],
    quote: "I was nervous about the switch. Then I realized I'd spent more time worrying about migration than the migration actually took.",
    image: "/images/blog/why-churches-switching-planning-center-2025.webp",
  },
  {
    slug: "planning-center-vs-relius-honest-comparison",
    title: "Planning Center vs Relius: an honest comparison",
    excerpt: "We're not going to pretend we're unbiased. But we will be fair. Here's a transparent look at what each platform does well.",
    author: "Caleb Morris",
    role: "Head of Product",
    date: "2025-01-10",
    readTime: "10 min",
    category: "Product",
    contentType: "Guide",
    topics: ["Operations", "Migration"],
    churchSizeFocus: ["Small", "Mid-size", "Growing", "Multi-site"],
    content: [
      {
        heading: "Where Planning Center shines",
        body: [
          "Let's start with what Planning Center does well, because ignoring it would be dishonest. Planning Center built the modern church software category, and they've earned their reputation.",
          "Services Planning is their crown jewel. It's mature, polished, and deeply adopted by worship teams across the country. The setlist builder is intuitive, volunteer scheduling is smooth, and band members actually use it. If your primary pain point is coordinating Sunday morning production, Planning Center Services handles it exceptionally well.",
          "Check-Ins is another strength. Their children's ministry check-in system is battle-tested, reliable, and familiar to parents. Security labels print correctly, allergies are flagged, and the flow works even when you have a hundred families checking in at once. It's a known quantity, which matters when kids' safety is on the line.",
          "Then there's the ecosystem advantage. Planning Center has been around since 2006. That means a massive community, thousands of tutorials on YouTube, and a near-guarantee that any new hire has used it before. There's comfort in familiarity, and Planning Center has that in abundance.",
          "Their integrations library is also extensive. From ProPresenter to Subsplash to Mailchimp, odds are your other tools already connect. For churches that have built their tech stack around Planning Center, this ecosystem is genuinely valuable.",
        ],
      },
      {
        heading: "Where Relius leads",
        body: [
          "Now let's talk about where Relius offers something different-and in our view, something better for the direction ministry is heading.",
          "AI-Native Features: This is the clearest differentiation. Content Studio takes one sermon and generates a week of social media posts, email snippets, and discussion questions. Sermon Planner helps you map a teaching calendar with AI-suggested themes based on your church's rhythm. Pastoral Care AI surfaces members who might be drifting before they disappear. Translation tools help you reach multilingual congregations without hiring translators. None of these exist in Planning Center because they weren't built for an AI-native world.",
          "Unified Platform: Everything lives in one system. Your people data, giving history, group attendance, volunteer schedules, and pastoral care notes exist in the same database. You don't log into five apps to prep for a staff meeting. You don't wonder if the Groups app synced correctly with the People app. Context travels with the person, not across disconnected tools.",
          "Pastoral Care Tools: Relius was designed with soul care at the center, not bolted on afterward. Care requests route to the right pastor automatically. Prayer follow-ups have built-in reminders. At-risk detection flags people who've missed three Sundays or stopped giving-not to guilt them, but to prompt a genuine check-in before they're gone. These aren't afterthoughts; they're first-class features because we believe software should serve the relational mission of the church.",
          "Modern UX: Relius was designed in 2024, not 2006. It feels like the software your team uses everywhere else in their lives. Mobile works properly. Search is fast. Onboarding is quick. Your volunteers won't need a training manual to check someone in.",
        ],
      },
      {
        heading: "Pricing comparison",
        body: [
          "Let's talk money, because pricing structures matter more than most churches realize until they're locked into a platform.",
          "Planning Center uses a per-app, per-size pricing model. Each app (People, Giving, Check-Ins, Groups, Services, Registrations, Publishing) has its own price tier based on your database size. A small church might pay $20/month for one app, but a mid-size church using four or five apps at scale can easily reach $150-250/month. The modular approach sounds flexible until you realize you need most of the apps to run effectively.",
          "Relius uses a simple, all-inclusive tiered model. Basic plan is $39.99/month, Pro plan is $79.99/month, and Max plan is $199.99/month. Every tier includes unlimited members-no penalizing churches for growth. Every feature in your tier is included-AI tools, giving, check-ins, groups, pastoral care, communications. No app bundles to calculate, no surprises when you grow.",
          "Here's a real example: A church of 800 people using Planning Center People, Giving, Check-Ins, Groups, and Services might pay around $180-220/month. That same church on Relius Pro pays $79.99/month with more features included. The savings add up, and the simplicity reduces administrative overhead.",
          "We're not saying Planning Center is overpriced-they offer real value. But if budget matters (and it always does in ministry), the math often favors Relius.",
        ],
      },
      {
        heading: "Migration considerations",
        body: [
          "The biggest fear we hear from churches considering a switch: 'We've been on Planning Center for years. All our data is there. Migration sounds terrifying.'",
          "Here's the honest truth: Planning Center exports data cleanly. People records, giving history, group membership, check-in data-it all comes over. Our migration wizard maps Planning Center's data structure to Relius in a guided process that takes under three hours for most churches.",
          "Your team won't start from scratch either. If they've used any modern church platform, Relius feels familiar. Similar navigation patterns, similar terminology, similar workflows. Most teams are comfortable within a week, fluent within a month.",
          "We also assign a dedicated migration specialist to every church making the switch. Not a chatbot. Not a knowledge base. A real person who's done this hundreds of times and knows exactly which fields map where.",
          "That said, migration has a cost beyond money: attention. Your team will spend time learning new workflows. There will be a week or two where things feel slower before they feel faster. If you're in the middle of a building campaign or a major staff transition, it might not be the right season. But if you're feeling the friction of your current system every week, that cost compounds too.",
        ],
      },
      {
        heading: "The honest verdict",
        body: [
          "So which platform is right for your church? Here's our genuine advice:",
          "Choose Planning Center if: Your worship team loves Services and switching would cause genuine pain. Your volunteers are deeply trained on the current system and you're not experiencing friction. You have a tech stack built around Planning Center integrations that would be costly to rebuild. You're happy with organization and not yet asking questions about AI-powered ministry insights.",
          "Choose Relius if: You're tired of app-switching and want unified data in one place. You want AI tools that help your team multiply their impact without multiplying their hours. Pastoral care is central to your mission and you need software that treats it that way. You're ready for a modern interface that your whole team-including volunteers-can learn quickly.",
          "If you're on the fence, try both. Seriously. Do a Planning Center audit to see if you're using all the apps you're paying for. Then do a Relius demo to see if the AI features and unified approach solve problems you didn't know you had. The best decision is an informed one.",
          "We're not trying to be the loudest voice in the room. We're trying to be the most useful. If that's Relius for you, we'd be honored to partner with your church. If it's Planning Center, we'll respect that-and we'll still be here if things change.",
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
    excerpt: "Buying church software is a big decision. Here's a practical framework for making the right choice-without the sales pressure.",
    author: "Mika Thompson",
    role: "Lead Implementation Guide",
    date: "2025-01-02",
    readTime: "12 min",
    category: "Best Practice",
    contentType: "Playbook",
    topics: ["Operations", "Leadership", "Migration"],
    churchSizeFocus: ["All"],
    content: [
      {
        heading: "Step 1: Define your core workflows",
        body: [
          "Before looking at any platform, write down the five things your team does every week. Not what you wish you did-what you actually do. This distinction matters because software purchases often fail when they're based on aspirational workflows rather than real ones.",
          "Start by shadowing your team for a week. What screens are they staring at on Monday morning? What tasks cause sighs? Where do they switch between tools or resort to spreadsheets? Those friction points are your evaluation priorities.",
          "Common examples we see: volunteer scheduling and reminders, guest follow-up within 48 hours of a visit, weekly giving reports for finance teams, small group sign-ups and leader communication, event registrations with payment processing, pastoral care notes that multiple staff need to access.",
          "Now rank these workflows by two dimensions: frequency (how often?) and frustration (how painful?). A task that's both daily and frustrating should be your top evaluation criterion. A task that's monthly and manageable can wait.",
          "Pro tip: Involve the actual users in this exercise, not just decision-makers. Your executive pastor might think giving reports matter most, but your admin assistant knows the real time sink is volunteer scheduling conflicts.",
        ],
      },
      {
        heading: "Step 2: Identify your deal-breakers",
        body: [
          "Every church has non-negotiables-features or capabilities that, if missing, disqualify a platform entirely. Identifying these before you see demos prevents wasted time and emotional attachment to platforms that won't work.",
          "Common deal-breakers we encounter: Text messaging capabilities (some platforms charge per-text, others include it). Spanish language support or multi-language capabilities for diverse congregations. Specific check-in workflows for children's ministry with security label printing. Integration with your existing giving processor if you're locked into a contract. Offline functionality for churches with unreliable internet. Multi-campus support with proper permissions and data separation.",
          "Write your deal-breakers on a single index card. Bring it to every demo. When the sales rep shows a flashy AI feature, glance at your card and ask about your non-negotiables first.",
          "Be honest about the difference between 'must have' and 'nice to have.' If you list fifteen deal-breakers, you don't have deal-breakers-you have a wishlist. Aim for three to five genuine non-negotiables.",
        ],
      },
      {
        heading: "Step 3: Evaluate adoption, not just features",
        body: [
          "Here's a hard truth: the best-featured software that your team won't use is worthless. Worse than worthless, actually-it creates guilt, clutter, and a slow drift back to spreadsheets.",
          "During demos, resist the urge to nod along at impressive feature lists. Instead, watch for adoption signals: How many clicks does it take to complete your top workflow? Count them. If it takes eight clicks to log a pastoral care note, your pastors won't log pastoral care notes.",
          "Does the vocabulary match how your church talks? If the platform calls them 'constituents' and you call them 'members' or 'family,' there's friction every time someone uses it. Small translation burdens add up.",
          "Test the mobile experience specifically. Hand your phone to the least tech-savvy volunteer on your team and ask them to check someone in. If they struggle, your Sunday morning will struggle too.",
          "Ask the vendor for references-but be specific. Don't just ask for 'happy customers.' Ask for a church similar to yours in size, denomination, and context. A megachurch reference doesn't help a church of 150 evaluate a platform.",
          "If possible, get a trial account and run a real workflow. Import some test data. Schedule a fake volunteer. Log a practice care note. Demos are choreographed; trials reveal reality.",
        ],
      },
      {
        heading: "Step 4: Understand the true cost",
        body: [
          "Sticker price is never total cost. The software industry has gotten creative at hiding expenses, and church platforms are no exception. Here's how to calculate what you'll actually pay:",
          "Setup costs: How long until you're productive? Some platforms offer white-glove migration; others hand you documentation and wish you luck. A 'free' setup that takes your admin 40 hours has a real cost.",
          "Training hours: How many staff members need to learn this? How long will it take each of them? Multiply that by their hourly rate. A platform that saves 30 minutes per week but requires 20 hours of training takes months to pay off.",
          "Migration complexity: Will you need to hire someone to move your data? Does the platform support importing from your current system, or will you lose history? Some churches discover mid-migration that giving records don't transfer cleanly.",
          "Hidden fees to ask about explicitly: Per-text messaging charges (these add up fast for churches that communicate via SMS). Per-user or per-admin limits. Add-on modules for features that seem core (like reporting or integrations). Overage charges if you exceed database size tiers. Price increases after the first year's 'promotional' rate.",
          "Calculate your total cost of ownership over three years, including all these factors. A platform that costs $50/month more but saves 10 hours/month is actually cheaper.",
        ],
      },
      {
        heading: "Step 5: Test the support relationship",
        body: [
          "Software will break. Features will confuse your team. Needs will evolve. The question isn't whether you'll need support-it's whether support will actually help when you do.",
          "During your trial, submit a real support ticket about something that genuinely confuses you. Note: How fast did they respond? Was the answer helpful and specific, or generic and scripted? Did they solve your problem, or just link to documentation?",
          "Ask these questions directly: Who will be my point of contact if something goes wrong? Can I get a name? What's your average response time? What are your support hours-do you cover Sunday mornings when churches need help most?",
          "Inquire about their product roadmap. A trustworthy vendor will tell you what's coming and admit what's not built yet. If they promise everything is 'on the roadmap' without specifics, that's a yellow flag.",
          "Pay attention to how they handle feature requests. Do they have a public feedback board? Do they communicate when features ship? A vendor that listens to churches builds better software over time.",
          "The software relationship is a long-term partnership, often lasting five to ten years. You want partners who care about your context, who understand ministry rhythms, and who treat your questions with patience-not just vendors who see your contract.",
        ],
      },
      {
        heading: "Red flags to watch for",
        body: [
          "After guiding hundreds of churches through software evaluations, we've seen patterns that predict trouble. Watch for these warning signs:",
          "Pressure to skip the trial: 'Our special pricing expires Friday' is a sales tactic. Good software sells itself with time, not urgency. If they won't let you test properly, ask why.",
          "Vague pricing pages: If you can't find clear pricing without talking to sales, expect surprises later. Complexity in pricing usually means complexity in billing.",
          "References that feel staged: If every reference tells the same story with the same enthusiasm, they've been coached. Ask for unscripted conversations with real users.",
          "Dismissing competitors: A confident vendor acknowledges what others do well. If they only bash alternatives, they might be hiding weaknesses.",
          "Demo magic that doesn't replicate: Features that work flawlessly in demos sometimes struggle with real data. Insist on testing with your actual workflows before committing.",
          "Support that requires escalation: If your trial support experience involves being transferred three times, that's what your Sunday morning crisis will feel like too.",
        ],
      },
      {
        heading: "The complete evaluation checklist",
        body: [
          "Use this checklist when comparing platforms. Print it. Score each vendor. Let the numbers guide your decision.",
          "Core Functionality: [ ] Does it handle my top 3 weekly workflows with fewer steps than my current system? [ ] Does the platform support my specific ministry context (multi-site, multilingual, denomination-specific needs)? [ ] Are the features I need included, or are they paid add-ons?",
          "Usability: [ ] Can my team's least technical person complete core tasks without help? [ ] Does the mobile app work well for volunteers and staff? [ ] Does the vocabulary match how our church talks about people and ministry?",
          "Cost: [ ] Is pricing transparent and predictable without hidden fees? [ ] Have I calculated total cost of ownership including setup, training, and migration? [ ] Does the pricing model scale reasonably as we grow?",
          "Support and Partnership: [ ] Can I reach a real human within 24 hours if something breaks? [ ] Do they offer Sunday morning support? [ ] Is there a clear roadmap with evidence they ship updates regularly?",
          "Data and Security: [ ] Is my data portable if I ever need to leave? [ ] Do they have clear data privacy policies? [ ] Does the company share my values around privacy and ministry ethics?",
          "Future-Proofing: [ ] Does the platform have AI features that will actually save my team time? [ ] Is the company investing in innovation, or just maintaining existing features? [ ] Do they have a track record of adapting to ministry changes?",
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
    excerpt: "Mobile wallets, text-to-give, and recurring donations are reshaping how churches receive tithes. Here's what the data says—and how to respond.",
    author: "Aaron Wells",
    role: "Executive Pastor in Residence",
    date: "2026-02-02",
    readTime: "6 min",
    category: "Best Practice",
    contentType: "Guide",
    topics: ["Giving", "Finance", "Technology"],
    churchSizeFocus: ["Small", "Mid-size", "Growing", "Multi-site"],
    content: [
      {
        heading: "The shift from cash to digital is accelerating",
        body: [
          "In 2019, roughly 60% of church giving was still cash or check. By 2024, that flipped—over 65% of donations now happen digitally. Younger generations have never written a check.",
          "Churches clinging to offering plates alone are leaving money on the table. The good news: the switch isn't complicated.",
        ],
      },
      {
        heading: "Text-to-give is no longer optional",
        body: [
          "Text-to-give saw 300% growth post-pandemic. Why? Because people already have their phones out during service. Relius lets you set up text giving in under 10 minutes.",
          "Pro tip: Display the text number during your sermon's application point. 'If you want to support this mission trip, text GIVE to...' makes giving contextual.",
        ],
      },
      {
        heading: "Recurring giving is your financial foundation",
        body: [
          "Churches with 40%+ recurring givers weather giving dips better. They have predictable income for budgeting and less month-to-month anxiety.",
          "Use Relius to identify one-time givers and invite them into recurring. A simple email automation can move 15-20% of occasional givers to monthly.",
        ],
      },
      {
        heading: "Mobile wallets are the next frontier",
        body: [
          "Apple Pay and Google Pay giving is growing 50% year-over-year. Reducing friction (no card entry, just a fingerprint) increases completion rates.",
          "Relius integrates with Stripe, which supports all major mobile wallets. Your giving page works like any modern checkout experience.",
        ],
      },
    ],
    takeaway: [
      "Meet givers where they are: on their phones.",
      "Recurring giving = stable ministry budgets.",
      "Reduce friction. Every extra click costs you donations.",
    ],
    quote: "The goal isn't to make giving complicated. It's to make generosity as easy as buying coffee.",
    image: "/images/blog/digital-giving-trends-2026.webp",
  },
  {
    slug: "grow-small-groups-2026",
    title: "How churches are growing small groups in 2026",
    excerpt: "Connection happens in circles, not rows. Here are the systems thriving churches use to launch, multiply, and sustain healthy groups.",
    author: "Marissa Cole",
    role: "Ministry Partner Coach",
    date: "2026-02-05",
    readTime: "8 min",
    category: "Ministry Insight",
    contentType: "Playbook",
    topics: ["Small Groups", "Discipleship", "Community"],
    churchSizeFocus: ["Small", "Mid-size", "Growing"],
    content: [
      {
        heading: "Make joining a group as easy as checking in",
        body: [
          "The biggest barrier to small group growth isn't interest—it's friction. When someone has to email, wait for a callback, and then get added to a list, momentum dies.",
          "Relius lets guests browse and join groups from their phone right after check-in. Real-time availability. Instant confirmation. No spreadsheet required.",
        ],
      },
      {
        heading: "Train leaders, not just hosts",
        body: [
          "A host opens their home. A leader shepherds souls. Equip your leaders with simple pastoral skills: how to ask good questions, how to follow up on prayer requests.",
          "Track leader training inside Relius. When someone completes the pathway, they're flagged as 'ready to launch.'",
        ],
      },
      {
        heading: "Use data to spot groups at risk",
        body: [
          "Healthy groups have consistent attendance. When a group drops from 10 to 4 over three weeks, something is happening. Don't wait for the leader to tell you.",
          "Relius dashboards surface these trends. A simple weekly glance lets you reach out before a group folds.",
        ],
      },
      {
        heading: "Multiply, don't just maintain",
        body: [
          "The healthiest groups plan their own ending. After 12-18 months, apprentice leaders launch new groups and the cycle continues.",
          "Set 'multiplication targets' in Relius. Celebrate when groups birth new groups—it's the healthiest sign of discipleship.",
        ],
      },
    ],
    takeaway: [
      "Reduce signup friction to near-zero.",
      "Invest in leader development, not just logistics.",
      "Track health metrics, not just attendance counts.",
    ],
    quote: "The goal of a small group isn't to exist forever. It's to create leaders who start new ones.",
    image: "/images/blog/grow-small-groups-2026.webp",
  },
  {
    slug: "church-data-security-guide",
    title: "Church data security: protecting your people in a digital age",
    excerpt: "Your congregation trusts you with sensitive information. Here's how to honor that trust with modern security practices.",
    author: "Joel Reyes",
    role: "Friend of Relius / IT Consultant",
    date: "2026-02-08",
    readTime: "7 min",
    category: "Best Practice",
    contentType: "Guide",
    topics: ["Security", "Technology", "Operations"],
    churchSizeFocus: ["Small", "Mid-size", "Growing", "Multi-site"],
    content: [
      {
        heading: "Why churches are targets",
        body: [
          "Churches store names, addresses, giving history, and sometimes sensitive pastoral notes. Hackers know this—and they know most churches have minimal IT staff.",
          "In 2024, over 200 churches reported data breaches. Many more went unreported. The risk is real, but manageable.",
        ],
      },
      {
        heading: "Start with password hygiene",
        body: [
          "Use unique, strong passwords for every system. A password manager (like 1Password or Bitwarden) makes this practical for volunteer teams.",
          "Enable two-factor authentication everywhere. Relius supports 2FA out of the box—turn it on today.",
        ],
      },
      {
        heading: "Audit who has access",
        body: [
          "When a volunteer leaves, do they still have database access? Many churches never revoke permissions. Run quarterly access reviews.",
          "Relius role-based permissions let you grant exactly the access needed. Nursery volunteers see check-in. They don't see giving records.",
        ],
      },
      {
        heading: "Encrypt everything",
        body: [
          "Data at rest and in transit should be encrypted. If your church management software doesn't mention encryption, ask hard questions.",
          "Relius uses AES-256 encryption and TLS 1.3 for all data transfers. Your member information is protected at every layer.",
        ],
      },
      {
        heading: "Plan for incidents",
        body: [
          "Have a simple incident response plan. Who do you call if there's a breach? What do you tell the congregation?",
          "Document the plan, store it somewhere accessible, and review it annually. Hope you never need it, but be ready.",
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
    excerpt: "Too many emails. Missed announcements. Communication overload. Here's how churches are cutting through the noise.",
    author: "Marissa Cole",
    role: "Ministry Partner Coach",
    date: "2026-02-12",
    readTime: "6 min",
    category: "Best Practice",
    contentType: "Guide",
    topics: ["Communication", "Systems"],
    churchSizeFocus: ["Small", "Mid-size", "Growing"],
    content: [
      {
        heading: "Consolidate your channels",
        body: [
          "If your church uses email, texting, a Facebook group, an app, AND printed bulletins—you're fragmenting attention. Pick two primary channels and commit.",
          "Relius centralizes communications. Send an email, text, or push notification from the same dashboard. No duplicate work.",
        ],
      },
      {
        heading: "Segment your audience",
        body: [
          "Youth parents don't need senior adult ministry updates. Stop sending everything to everyone. Relevance beats frequency.",
          "Use Relius tags to create smart lists. A 'Parents of Middle Schoolers' segment only gets middle school announcements.",
        ],
      },
      {
        heading: "Create a communication calendar",
        body: [
          "Plan announcements a month ahead. Avoid last-minute scrambles that lead to duplicate emails and stressed staff.",
          "Relius lets you schedule messages in advance. Write Tuesday's reminder on Friday. Set it. Forget it.",
        ],
      },
      {
        heading: "Measure what matters",
        body: [
          "If 8% of people open your emails, something's wrong. Track open rates, click rates, and unsubscribes to learn what resonates.",
          "Relius analytics show you which messages land. Adjust subject lines, timing, and content based on real data.",
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
    excerpt: "Check-in isn't just about name tags. It's about child safety, first impressions, and knowing who's in your building. Here's what modern looks like.",
    author: "Aaron Wells",
    role: "Executive Pastor in Residence",
    date: "2026-02-15",
    readTime: "7 min",
    category: "Product",
    contentType: "Guide",
    topics: ["Kids Ministry", "Security", "Guests"],
    churchSizeFocus: ["Small", "Mid-size", "Growing", "Multi-site"],
    content: [
      {
        heading: "Child safety is non-negotiable",
        body: [
          "A matching parent-child tag system isn't fancy—it's essential. No one picks up a child without the matching code.",
          "Relius check-in generates unique codes per family per visit. Parents scan out. The system logs the timestamp. Full chain of custody.",
        ],
      },
      {
        heading: "First-time guests need a different flow",
        body: [
          "Regulars want speed. Guests want help. Separate the flows. A dedicated 'First Time?' kiosk with a greeter nearby makes guests feel seen.",
          "Relius automatically routes first-time families to guest registration and notifies your connections team in real-time.",
        ],
      },
      {
        heading: "Self-service kiosks reduce lines",
        body: [
          "Nobody wants to wait in line when the sermon's about to start. Self-service kiosks (tablets or phones) let families check in before they even park.",
          "Relius supports QR code check-in from any device. Families scan, kids are checked in, and labels print at the door.",
        ],
      },
      {
        heading: "Track who's in the building",
        body: [
          "In an emergency, do you know who's in your building? Modern check-in isn't just for kids—it's for everyone.",
          "Relius offers optional adult check-in. In a crisis, you can pull a real-time roster of everyone on campus.",
        ],
      },
      {
        heading: "Allergy and medical alerts",
        body: [
          "A child's allergy information should be visible the moment they check in. Not buried in a folder somewhere.",
          "Relius prints allergy alerts directly on name tags and alerts classroom volunteers via the app.",
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
    excerpt: "Leadership changes are inevitable. They don't have to be chaotic. Here's how healthy churches manage pastoral transitions.",
    author: "Joel Reyes",
    role: "Friend of Relius / Connections Pastor",
    date: "2026-02-18",
    readTime: "8 min",
    category: "Ministry Insight",
    contentType: "Guide",
    topics: ["Leadership", "Operations", "Pastoral Care"],
    churchSizeFocus: ["Mid-size", "Growing", "Multi-site"],
    content: [
      {
        heading: "Document institutional knowledge",
        body: [
          "When a long-time pastor leaves, years of relational knowledge walks out the door. Names, stories, family situations—gone.",
          "Relius pastoral notes capture this context. The new leader can read the history before making a visit. Continuity of care survives the transition.",
        ],
      },
      {
        heading: "Communicate early and often",
        body: [
          "Rumors fill information vacuums. Get ahead of the narrative with clear, honest updates. Don't over-promise timelines you can't keep.",
          "Use Relius to send segmented updates. Board members get detailed plans. The congregation gets pastoral reassurance.",
        ],
      },
      {
        heading: "Preserve processes, not just people",
        body: [
          "If your follow-up system lives in one person's head, you're in trouble. Build processes that survive personnel changes.",
          "Relius workflows run whether the staff member is there or not. Automations don't take vacations or resign.",
        ],
      },
      {
        heading: "Support the outgoing leader well",
        body: [
          "How you treat departing staff shapes your culture. Honor their service publicly. Help them land well.",
          "Document the offboarding. Transfer access gracefully. Relius permission changes take seconds, not weeks.",
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
