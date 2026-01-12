import Link from 'next/link';
import { ArrowRight, Map, MessageSquare, Construction, CheckCircle, Users } from 'lucide-react';

export const metadata = {
    title: 'Roadmap Transparency | Relius Resources',
    description: 'See what we are building, how we decide, and how you can help shape the future of Relius.',
};

export default function RoadmapPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        Product
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Map className="w-4 h-4" />
                        <span>Live Roadmap</span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Roadmap Transparency
                </h1>

                <p className="text-xl text-slate-600">
                    We don't believe in vaporware. Here is an honest look at what we are building, what is next, and what is on pause.
                </p>
            </header>

            {/*
        VISUAL ASSET SUGGESTION:
        - Type: Illustration
        - Description: A stylized roadmap or kanban board visualization showing "Now", "Next", and "Later".
        - Style: Clean, tech-focused but friendly.
        - Alt text: Product Roadmap Visualization
      */}
            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-12 bg-slate-100 flex items-center justify-center text-slate-400">
                [Illustration: Product Roadmap]
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-slate-600 mb-8">
                    Software for the church should be built <em>with</em> the church. We prioritize features based on what helps you minister more effectively, not just what looks cool on a marketing page.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-green-100 text-green-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Now (In Development)
                </h2>

                <p>
                    These features are actively being coded and will ship in the next 4-6 weeks.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <Construction className="w-6 h-6 text-blue-600 mb-3" />
                        <h4 className="font-bold text-slate-900 mb-2">Advanced Service Planning</h4>
                        <p className="text-sm text-slate-600">
                            Drag-and-drop order of service, song library integration, and file attachments for worship teams.
                        </p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <Construction className="w-6 h-6 text-blue-600 mb-3" />
                        <h4 className="font-bold text-slate-900 mb-2">Volunteer Scheduling App</h4>
                        <p className="text-sm text-slate-600">
                            A dedicated mobile view for volunteers to accept/decline requests and view their schedule.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Next (Up Deck)
                </h2>

                <p>
                    We are designing these now. Development starts soon.
                </p>

                <ul className="space-y-4 my-6">
                    <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-slate-900">Kids Check-in Kiosk V2</span>
                            <p className="text-sm text-slate-600">Faster label printing and support for multiple label sizes.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-slate-900">Custom Form Builder</span>
                            <p className="text-sm text-slate-600">Create registration forms for events with custom fields and payments.</p>
                        </div>
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-slate-100 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Recently Shipped
                </h2>

                <div className="bg-green-50 border border-green-100 rounded-xl p-6 my-6">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="text-slate-700"><strong>AI Sermon Planner:</strong> Released Oct 2025.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="text-slate-700"><strong>Stripe Integration:</strong> Released Sept 2025.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="text-slate-700"><strong>Group Messaging:</strong> Released Aug 2025.</span>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
                    How to give feedback
                </h2>
                <p>
                    We don't have a "suggestion box" that goes into a black hole. We have a community.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <div className="flex-1 bg-white border border-slate-200 rounded-xl p-6 text-center">
                        <MessageSquare className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                        <h4 className="font-bold text-slate-900">In-App Chat</h4>
                        <p className="text-sm text-slate-600">Click the bubble in your dashboard. Our product team reads these.</p>
                    </div>
                    <div className="flex-1 bg-white border border-slate-200 rounded-xl p-6 text-center">
                        <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                        <h4 className="font-bold text-slate-900">Early Access</h4>
                        <p className="text-sm text-slate-600">Want to try new features first? Email contact@relius.ai to join our testing cohort.</p>
                    </div>
                </div>

            </div>

            <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Join us on the journey
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    We are building the operating system for the future church. Come build it with us.
                </p>
                <Link
                    href="/pricing/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                    Start free trial
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </article>
    );
}
