import Link from 'next/link';
import { ArrowRight, Layout, Monitor, Printer, Users, AlertCircle, CheckCircle } from 'lucide-react';

export const metadata = {
    title: 'Improving Sunday check-in flow | Relius Resources',
    description: 'Create a calm, secure, and fast check-in experience for families.',
};

export default function CheckInFlowPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        Guide
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Layout className="w-4 h-4" />
                        <span>Facility & Tech</span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Improving Sunday check-in flow
                </h1>

                <p className="text-xl text-slate-600">
                    The first 10 minutes of a family's experience can define their whole Sunday. Here is how to make it calm, not chaotic.
                </p>
            </header>

            {/*
        VISUAL ASSET SUGGESTION:
        - Type: Diagram
        - Description: A floor plan showing flow of traffic: Entry -> Greeter -> Kiosks -> Classrooms.
        - Style: Clean architectural sketch or simple vector map.
        - Alt text: Check-in area floor plan
      */}
            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-12 bg-slate-100 flex items-center justify-center text-slate-400">
                [Diagram: Check-in Flow Floor Plan]
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-slate-600 mb-8">
                    Check-in is more than printing stickers; it's a security promise to parents and a hospitality moment for kids.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    The Physical Layout
                </h2>

                <p>
                    Bottlenecks happen when lines cross. Design your space for one-way flow if possible.
                </p>

                <ul className="space-y-4 my-6">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-slate-900">The "Manned" Station First</span>
                            <p className="text-sm text-slate-600">Put your staffed station (for guests/problems) nearest the door. Don't let confused guests block the self-check-in express lane.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-slate-900">Kiosks Against the Wall</span>
                            <p className="text-sm text-slate-600">Keep the center of the hallway clear for movement.</p>
                        </div>
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Hardware Setup
                </h2>

                <p>
                    Relius works on any device, but we recommend iPads for speed and approachability.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <Monitor className="w-8 h-8 text-blue-600 mb-3" />
                        <h4 className="font-bold text-slate-900 mb-2">Self Check-in Kiosks</h4>
                        <p className="text-sm text-slate-600">
                            Use iPads on stands. Enable "Kiosk Mode" in Relius so parents can only search for their own family by phone number.
                        </p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl p-6">
                        <Printer className="w-8 h-8 text-blue-600 mb-3" />
                        <h4 className="font-bold text-slate-900 mb-2">Label Printers</h4>
                        <p className="text-sm text-slate-600">
                            We recommend Brother QL-800 series. They are fast, reliable, and don't require ink. Connect via USB to a "Print Station" computer or use AirPrint.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Handling Guests vs. Regulars
                </h2>

                <p>
                    <strong>Regulars</strong> want speed. They should be able to type the last 4 digits of their phone number, tap a name, and grab a sticker in under 15 seconds.
                </p>

                <p>
                    <strong>Guests</strong> need connection. Never force a guest to use a self-check-in kiosk.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
                    <h4 className="font-bold text-slate-900 mb-2">The Guest Workflow</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                        <li>Greeter walks family to the Manned Station.</li>
                        <li>Volunteer enters info into Relius (don't make mom type while holding a baby).</li>
                        <li>Volunteer explains the security code system on the sticker.</li>
                        <li>Volunteer walks the family to the classroom.</li>
                    </ol>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Troubleshooting Common Issues
                </h2>

                <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                        <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-slate-900">Printer Jam / Out of Paper</h4>
                            <p className="text-slate-600 text-sm">Always keep one spare roll of labels at <em>every</em> station. Train volunteers how to change it.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-slate-900">"It can't find my name"</h4>
                            <p className="text-slate-600 text-sm">Usually a phone number mismatch. Have a volunteer look them up by name on the admin device and update the number.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Ready to upgrade your check-in?
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    Relius Check-in is built for speed and security. Try it out this Sunday.
                </p>
                <Link
                    href="/pricing/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                    Get started for free
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </article>
    );
}
