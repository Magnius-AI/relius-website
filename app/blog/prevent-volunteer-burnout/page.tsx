import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Clock, Calendar, Users, Sparkles } from 'lucide-react';

export const metadata = {
    title: '5 Ways to Prevent Volunteer Burnout | Relius',
    description: 'We asked churches of different sizes how they keep volunteers energized. Here are the rhythms they practice every month.',
};

export default function PreventVolunteerBurnout() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            {/* Header */}
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        Ministry Insight
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>Jan 11, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>7 min read</span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    5 Ways to Prevent Volunteer Burnout (From Churches Doing It Well)
                </h1>

                <p className="text-xl text-slate-600">
                    We asked churches of different sizes how they keep volunteers energized.
                    Here are the rhythms they practice every month.
                </p>
            </header>

            {/*
        VISUAL ASSET SUGGESTION:
        - Type: Photo
        - Description: Diverse group of church volunteers smiling, perhaps at a serve day or greeting station
        - Style: Warm lighting, authentic candid moment, not posed stock photo feel
        - Recommended: Unsplash search "church volunteers serving" or "community helpers diverse"
        - Alt text: Church volunteers working together with joy
      */}
            <div className="relative h-80 w-full rounded-xl overflow-hidden mb-12 bg-slate-100">
                <Image
                    src="/images/blog/prevent-volunteer-burnout.png"
                    alt="Volunteers serving together with joy"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-slate-600 mb-8">
                    Your volunteers are the heartbeat of your church. They greet at the door,
                    run the sound booth, teach kids, and show up week after week. But when the
                    same faithful few carry most of the load, burnout isn't a question of if—it's when.
                </p>

                <p>
                    We talked to churches of all sizes—from plants of 50 to congregations of 2,000—to
                    learn what actually works. Not theory. Not ideals. Real practices from churches
                    that have figured out how to keep their volunteers energized for the long haul.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Stop Over-Scheduling the Willing
                </h2>

                <p>
                    Here's a pattern we see constantly: Sarah is reliable. Sarah always says yes.
                    So Sarah gets asked for everything—and eventually, Sarah disappears.
                </p>

                <p>
                    The churches doing this well have a simple rule: <strong>no one serves more than
                        two weekends in a row</strong>. Some go further—capping volunteers at two Sundays
                    per month, period.
                </p>

                <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                    <p className="text-slate-700 mb-0">
                        <strong>"We realized our best volunteers were burning out because we kept
                            going back to the same well."</strong> — Pastor of a 400-member church in Texas
                    </p>
                </div>

                <p>
                    The key is visibility. When you can see at a glance who's been serving frequently,
                    you can intentionally spread the load. Relius shows you volunteer frequency on
                    their profile—so you never accidentally over-ask the willing.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Match Gifts to Roles (Not Just Availability)
                </h2>

                <p>
                    A common mistake: filling slots based on who's available rather than who's gifted.
                    The introvert forced into greeting duty. The detail-oriented person stuck in
                    free-form kids' ministry.
                </p>

                <p>
                    Mismatched volunteers don't just perform poorly—they burn out faster because
                    serving feels like a drain instead of an outlet.
                </p>

                <ul className="space-y-2 my-6">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Ask about gifts and interests during onboarding, not just availability</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Create role descriptions that specify personality fit, not just tasks</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Make it easy to switch roles without guilt</span>
                    </li>
                </ul>

                <p>
                    Relius lets you tag volunteers with skills and preferences, then suggests
                    matches when you're filling positions. It's like having an assistant who
                    remembers everyone's gifts.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Build Recognition Into Your Rhythms
                </h2>

                <p>
                    Appreciation can't be an afterthought. The churches retaining volunteers well
                    have built recognition into their regular rhythms:
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-8">
                    <div className="bg-white border border-slate-200 rounded-lg p-5">
                        <h4 className="font-semibold text-slate-900 mb-2">Weekly</h4>
                        <p className="text-slate-600 text-sm mb-0">
                            Personal thank-you from a staff member (even a quick text counts)
                        </p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-lg p-5">
                        <h4 className="font-semibold text-slate-900 mb-2">Monthly</h4>
                        <p className="text-slate-600 text-sm mb-0">
                            Shout-out in service or newsletter highlighting specific contributions
                        </p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-lg p-5">
                        <h4 className="font-semibold text-slate-900 mb-2">Quarterly</h4>
                        <p className="text-slate-600 text-sm mb-0">
                            Volunteer gathering—not a meeting, a celebration (food helps)
                        </p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-lg p-5">
                        <h4 className="font-semibold text-slate-900 mb-2">Annually</h4>
                        <p className="text-slate-600 text-sm mb-0">
                            Service anniversary recognition (1 year, 5 years, etc.)
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Set Clear Expectations (Then Protect Them)
                </h2>

                <p>
                    Burnout often starts with unclear boundaries. "Can you help out?" becomes
                    "Can you run this?" becomes "You're basically staff now, right?"
                </p>

                <p>
                    Define what each role actually requires—time commitment, training, duration—and
                    then protect those boundaries fiercely. If you said the kids' check-in role is
                    one Sunday a month, don't guilt people into more.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    Create Easy Off-Ramps
                </h2>

                <p>
                    This one's counterintuitive: make it easy to step back, and people will
                    stay longer.
                </p>

                <p>
                    When volunteers feel trapped—like stepping down would let everyone down—they
                    don't gracefully transition. They disappear. Sometimes from the church entirely.
                </p>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 my-8">
                    <h4 className="font-semibold text-slate-900 mb-2">What healthy off-ramps look like:</h4>
                    <ul className="space-y-2 text-slate-700">
                        <li>• Regular check-ins: "How are you doing? Is this still life-giving?"</li>
                        <li>• Defined seasons: "This role is a 6-month commitment, then we'll talk"</li>
                        <li>• Graceful transitions: "Thanks for your service—we'd love to celebrate you"</li>
                        <li>• No guilt: Stepping back is normal, not failure</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    The Technology Piece
                </h2>

                <p>
                    None of this requires fancy software. A spreadsheet can track schedules.
                    A calendar reminder can prompt appreciation.
                </p>

                <p>
                    But when you're managing dozens of volunteers across multiple ministries,
                    the mental load of tracking all this manually becomes its own source of
                    burnout—for your staff.
                </p>

                <p>
                    That's where Relius helps. You can see volunteer history at a glance,
                    get alerts when someone's been over-scheduled, track skills and preferences,
                    and automate appreciation reminders. Not to replace the human touch—to make
                    sure it actually happens.
                </p>
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Ready to support your volunteers better?
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    Relius helps you track schedules, prevent over-scheduling, and automate
                    appreciation—so your team stays energized for the long haul.
                </p>
                <Link
                    href="/pricing/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                    Start your free trial
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Related reading</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/blog/why-church-software-fails/" className="group">
                        <div className="bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
                            <span className="text-sm text-slate-500">Perspective</span>
                            <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                Why most church software fails (and how to pick better)
                            </h4>
                        </div>
                    </Link>
                    <Link href="/resources/volunteer-recruitment-strategies/" className="group">
                        <div className="bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
                            <span className="text-sm text-slate-500">Playbook</span>
                            <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                Volunteer recruitment strategies
                            </h4>
                        </div>
                    </Link>
                </div>
            </div>
        </article>
    );
}
