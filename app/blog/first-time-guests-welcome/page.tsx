import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Calendar, Coffee, MessageCircle, UserPlus, Heart } from 'lucide-react';

export const metadata = {
    title: 'Making First-Time Guests Feel Welcome | Relius',
    description: 'A warm lobby is great. A thoughtful follow-up is better. Here is how churches are building guest pathways with Relius.',
};

export default function FirstTimeGuestsPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        Best Practice
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>Dec 18, 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>8 min read</span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Making first-time guests feel welcome: practical tips
                </h1>

                <p className="text-xl text-slate-600">
                    A warm lobby is great. A thoughtful follow-up is better. Here is how churches are building guest pathways with Relius.
                </p>
            </header>

            {/*
        VISUAL ASSET SUGGESTION:
        - Type: Photo
        - Description: A welcoming church lobby scene, someone handing a coffee or bulletin to a new person. Warm, inviting, blurry background.
        - Style: Authentic, high-quality photography.
        - Alt text: Welcoming a guest at church
      */}
            <div className="relative h-80 w-full rounded-xl overflow-hidden mb-12 bg-slate-100">
                <Image
                    src="/images/blog/first-time-guests-welcome.png"
                    alt="Welcoming a guest at church"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-slate-600 mb-8">
                    You have about seven minutes to make a first impression. From the moment a car pulls into the parking lot to the moment they sit down, a guest is deciding: "Do I belong here?"
                </p>

                <p>
                    But the "welcome" doesn't stop when the service starts. The most critical gap happens in the 24 hours <em>after</em> they leave.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    The 7-Minute Window
                </h2>

                <p>
                    Before we talk about software, let's talk about the physical experience.
                </p>

                <ul className="space-y-2 my-6">
                    <li className="flex items-start gap-3">
                        <UserPlus className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span><strong>Signage:</strong> Can I find the kids' area without asking? (Introverts will leave before they ask).</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <UserPlus className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span><strong>Coffee:</strong> Is it good? (It signals you care about details).</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <UserPlus className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span><strong>The "Handoff":</strong> Greeters shouldn't just point; they should walk people to the next station.</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Digital Check-in as a Welcome
                </h2>

                <p>
                    For families with kids, the check-in station is their first real interaction. If it's slow, clunky, or confusing, they start the service stressed.
                </p>

                <p>
                    Relius Check-in is designed to be a "relief." It's fast. It works. And it captures the data you need to follow up without feeling like an interrogation.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Automated but Personal Follow-up
                </h2>

                <p>
                    Here is the golden rule: <strong>Follow up within 24 hours.</strong>
                </p>

                <p>
                    If you wait until Thursday, they've already forgotten how they felt on Sunday.
                </p>

                <div className="bg-white border border-slate-200 rounded-xl p-6 my-6 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-4">The Ideal Relius Workflow</h3>
                    <ol className="list-decimal pl-5 space-y-4 text-slate-700">
                        <li><strong>Sunday 10:00 AM:</strong> Guest checks in kids or fills out a digital connection card.</li>
                        <li><strong>Sunday 12:30 PM:</strong> Relius automatically sends a "Thanks for coming" text message. (Short, casual, no ask).</li>
                        <li><strong>Monday 9:00 AM:</strong> Relius creates a task for the Connections Pastor: "Call [Guest Name]."</li>
                        <li><strong>Monday 10:00 AM:</strong> Pastor calls. If no answer, leaves a voicemail. Logs the attempt in Relius.</li>
                        <li><strong>Wednesday 10:00 AM:</strong> Automated email: "Here is what to expect next week."</li>
                    </ol>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Guest Pathway: Visit → Connect → Belong
                </h2>

                <p>
                    Don't just track "visits." Track the journey.
                </p>

                <p>
                    In Relius, you can set up a <strong>Pipeline</strong>.
                </p>

                <ul className="space-y-3 my-6">
                    <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-slate-700"><strong>Stage 1: First Time Guest</strong> (Needs a welcome)</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-slate-700"><strong>Stage 2: Second Visit</strong> (Needs a personal connection)</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-slate-700"><strong>Stage 3: Regular Attender</strong> (Needs an invite to a group)</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Measuring Retention
                </h2>

                <p>
                    How do you know if you're "friendly"? Look at the data.
                </p>

                <p>
                    Relius Insights shows you your <strong>Guest Retention Rate</strong>. If you have 100 guests a year but only 5 stay, you don't have a growth problem—you have a "closing the back door" problem.
                </p>

                <p>
                    By automating the admin work of follow-up, you free up your team to do the relationship work that actually keeps people.
                </p>
            </div>

            <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Stop losing guests in the cracks
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    Use Relius to build a follow-up system that makes every guest feel seen and known.
                </p>
                <Link
                    href="/pricing/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                    Start your free trial
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </article>
    );
}
