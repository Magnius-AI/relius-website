import Link from 'next/link';
import { ArrowRight, Clock, Users, BookOpen, MessageSquare, MonitorPlay, FileText } from 'lucide-react';

export const metadata = {
    title: 'Training your team | Relius Resources',
    description: 'Complete training templates and session outlines to help your church staff adopt Relius.',
};

export default function TrainingTeamPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        Template
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>3 hours total</span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Training your team on Relius
                </h1>

                <p className="text-xl text-slate-600">
                    Software is only as good as the people using it. Use these session outlines to build confidence and buy-in with your staff.
                </p>
            </header>

            {/*
        VISUAL ASSET SUGGESTION:
        - Type: Photo
        - Description: A diverse group of people sitting around a table with laptops/tablets, smiling and learning together.
        - Style: Collaborative, warm, modern office/church office setting.
        - Alt text: Church team training session
      */}
            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-12 bg-slate-100 flex items-center justify-center text-slate-400">
                [Photo: Team Training Session]
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-slate-600 mb-8">
                    Don't just email a login link and hope for the best. We recommend running these five short sessions over a week to get everyone up to speed.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Training Sessions
                </h2>

                <div className="space-y-6">
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-slate-900">Session 1: The Basics</h3>
                            <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded">30 min</span>
                        </div>
                        <p className="text-slate-600 mb-4"><strong>Goal:</strong> Everyone can log in, navigate, and find a person.</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                            <li>How to log in and set up 2FA</li>
                            <li>Global search bar basics (cmd+k)</li>
                            <li>Updating your own profile</li>
                            <li>Mobile app installation</li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-slate-900">Session 2: People & Care</h3>
                            <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded">45 min</span>
                        </div>
                        <p className="text-slate-600 mb-4"><strong>Goal:</strong> Staff can enter pastoral notes and manage groups.</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                            <li>Anatomy of a Person Profile</li>
                            <li>Adding a pastoral note (and privacy settings)</li>
                            <li>Creating a small group</li>
                            <li>Emailing a group of people</li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-slate-900">Session 3: Events & Check-ins</h3>
                            <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded">30 min</span>
                        </div>
                        <p className="text-slate-600 mb-4"><strong>Goal:</strong> Volunteers can run Sunday morning check-in.</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                            <li>Creating a calendar event</li>
                            <li>Setting up a check-in kiosk (iPad/Computer)</li>
                            <li>Checking in a family</li>
                            <li>Printing labels</li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-slate-900">Session 4: Giving & Reports</h3>
                            <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded">30 min</span>
                        </div>
                        <p className="text-slate-600 mb-4"><strong>Goal:</strong> Finance team can process batches and run reports.</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                            <li>Entering a manual batch (cash/checks)</li>
                            <li>Viewing online transaction logs</li>
                            <li>Generating a weekly giving report</li>
                            <li>Sending year-end statements</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-xl p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-purple-900 flex items-center gap-2">
                                <MonitorPlay className="w-5 h-5" />
                                Session 5: AI Superpowers
                            </h3>
                            <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2.5 py-0.5 rounded">45 min</span>
                        </div>
                        <p className="text-purple-800 mb-4"><strong>Goal:</strong> Pastors can use AI to save time on admin and content.</p>
                        <ul className="list-disc pl-5 space-y-2 text-purple-800">
                            <li>Using Sermon Planner to brainstorm outlines</li>
                            <li>Generating social media posts from sermon notes</li>
                            <li>Analyzing prayer request trends</li>
                            <li>Using AI to find volunteer matches</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Change Management: Talking Points
                </h2>
                <p>
                    Change is hard. Here is how to answer the "Why are we switching?" question.
                </p>

                <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
                    <h4 className="font-bold text-slate-900 mb-2">"Why do we need a new system?"</h4>
                    <p className="text-slate-700 italic mb-4">
                        "Our old system was a digital filing cabinet—good for storing data, but it didn't help us actually minister to people. Relius helps us see who is falling through the cracks and frees us up from admin work so we can spend more time with people."
                    </p>

                    <h4 className="font-bold text-slate-900 mb-2">"Is my data safe?"</h4>
                    <p className="text-slate-700 italic mb-0">
                        "Yes. Relius uses bank-level encryption and we have strict permission controls so only the right people see sensitive pastoral notes."
                    </p>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    Resources for your team
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    <a href="#" className="block p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-300 transition-colors group">
                        <FileText className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                        <h4 className="font-bold text-slate-900 mb-1">Staff FAQ Document</h4>
                        <p className="text-sm text-slate-500">Download a printable PDF of common questions.</p>
                    </a>
                    <a href="#" className="block p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-300 transition-colors group">
                        <FileText className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                        <h4 className="font-bold text-slate-900 mb-1">Quick Reference Cards</h4>
                        <p className="text-sm text-slate-500">Cheat sheets for check-in volunteers and group leaders.</p>
                    </a>
                </div>

            </div>

            <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Want a Relius expert to train your team?
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    We offer live remote training sessions for church staffs.
                </p>
                <Link
                    href="/contact/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                    Book a training session
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </article>
    );
}
