import Link from 'next/link';
import { ArrowRight, Settings, Palette, Globe, CreditCard, Users, Shield, Wrench } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Setting Up Your Church | Relius Documentation',
    description: 'Complete guide to configuring your church settings, branding, timezone, payment processing, and team permissions in Relius.',
    alternates: {
        canonical: 'https://relius.ai/resources/docs/getting-started/setup/',
    },
    openGraph: {
        title: 'Setting Up Your Church | Relius Documentation',
        description: 'Complete guide to configuring your church settings, branding, timezone, payment processing, and team permissions.',
        url: 'https://relius.ai/resources/docs/getting-started/setup/',
    },
    keywords: ['church settings', 'Relius configuration', 'church branding setup', 'payment setup'],
};

export default function ChurchSetupPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-12">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <Link href="/resources/docs" className="hover:text-blue-600">Documentation</Link>
                    <span>→</span>
                    <Link href="/resources/docs/getting-started" className="hover:text-blue-600">Getting Started</Link>
                    <span>→</span>
                    <span className="text-slate-900 font-medium">Setting Up Your Church</span>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-6">
                    Setting Up Your Church
                </h1>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
                    <p className="text-lg text-slate-700">
                        <strong>Quick Summary:</strong> Configure your church's core settings including profile information, branding, timezone, payment processing, and user permissions. A complete setup ensures smooth operations from day one.
                    </p>
                </div>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Settings className="w-6 h-6 text-blue-600" />
                    Overview
                </h2>

                <p>
                    Proper church configuration is the foundation of a smooth Relius experience. Taking 30-45 minutes to complete your setup now will save hours of troubleshooting later. This guide walks you through each critical setting, explains why it matters, and provides best-practice recommendations based on thousands of churches using Relius.
                </p>

                <p>
                    Think of this setup process as building your church's digital infrastructure. Just as you wouldn't skip wiring the sound system or setting up the nursery, don't skip these configuration steps. They affect everything from how your giving receipts look to which team members can access sensitive pastoral care notes.
                </p>

                <p>
                    We've organized the setup into logical sections that build on each other. Follow them in order, or jump to specific sections if you're coming back to adjust settings later.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Getting Started
                </h2>

                <p className="text-slate-600 mb-6">
                    Navigate to <strong>Settings → Church Profile</strong> from your Relius dashboard. You'll see a tabbed interface with sections for General, Branding, Integrations, and Team. Let's walk through each one.
                </p>

                <div className="space-y-8 not-prose">
                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-blue-600" />
                            Step 1: Church Information
                        </h3>
                        
                        <div className="space-y-4 text-slate-600">
                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Church Name & Address</h4>
                                <p className="mb-2">
                                    Enter your official church name as it should appear on all public-facing communications, tax receipts, and legal documents.
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Use the legal registered name (e.g., "Grace Community Church" not "GCC")</li>
                                    <li>Include full street address, city, state/province, and postal code</li>
                                    <li>Add phone number and primary email address</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Timezone & Locale</h4>
                                <p className="mb-2">
                                    <strong>Critical setting:</strong> Your timezone affects all event scheduling, reports, and automated communications.
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Select your local timezone (e.g., "America/New_York")</li>
                                    <li>Choose date format (MM/DD/YYYY vs DD/MM/YYYY)</li>
                                    <li>Set first day of week (Sunday vs Monday for calendar views)</li>
                                </ul>
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-3 rounded-r">
                                    <p className="text-sm text-yellow-800">
                                        <strong>Warning:</strong> Changing your timezone after scheduling events can cause confusion. Set it correctly from the start.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Campuses (Multi-site Churches)</h4>
                                <p className="mb-2">
                                    If you have multiple locations, create a campus for each one:
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Click "Add Campus" and enter location name and address</li>
                                    <li>Assign campus-specific staff and settings</li>
                                    <li>Events and groups can be filtered by campus</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Palette className="w-5 h-5 text-blue-600" />
                            Step 2: Branding & Visual Identity
                        </h3>
                        
                        <div className="space-y-4 text-slate-600">
                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Logo Upload</h4>
                                <p className="mb-2">
                                    Your logo appears on emails, giving receipts, event pages, and your public website.
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Upload a square logo (500×500px minimum, PNG or SVG preferred)</li>
                                    <li>Use transparent background for best results</li>
                                    <li>Keep file size under 2MB</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Brand Colors</h4>
                                <p className="mb-2">
                                    Set primary and secondary colors that match your church's visual identity:
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Primary color: Used for buttons, links, and headers in emails</li>
                                    <li>Secondary color: Accents and secondary buttons</li>
                                    <li>These colors apply to your public giving page and event registrations</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Email Footer</h4>
                                <p>
                                    Customize the footer that appears on all system-generated emails. Include your church's contact info, social media links, and unsubscribe preferences.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <CreditCard className="w-5 h-5 text-blue-600" />
                            Step 3: Payment Processing Setup
                        </h3>
                        
                        <div className="space-y-4 text-slate-600">
                            <p>
                                To accept online donations, you'll need to connect a payment processor. Relius uses Stripe for secure, PCI-compliant payment processing.
                            </p>

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Connecting Stripe</h4>
                                <ol className="list-decimal list-inside space-y-2 ml-4">
                                    <li>Go to <strong>Settings → Giving → Payment Processor</strong></li>
                                    <li>Click "Connect Stripe Account"</li>
                                    <li>You'll be redirected to Stripe to create an account (or log in if you have one)</li>
                                    <li>Provide your church's tax ID (EIN), bank account details, and authorized signer information</li>
                                    <li>Stripe will verify your account (usually 1-2 business days)</li>
                                </ol>
                            </div>

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Creating Funds</h4>
                                <p className="mb-2">
                                    Funds allow donors to designate where their gift goes. Set up your core funds:
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li><strong>General Fund</strong> – Default for undesignated gifts</li>
                                    <li><strong>Missions</strong> – For missionary support and outreach</li>
                                    <li><strong>Building Fund</strong> – Capital campaigns and facilities</li>
                                    <li><strong>Benevolence</strong> – Helping members in need</li>
                                </ul>
                                <p className="mt-2">
                                    You can add more funds later for special campaigns or projects.
                                </p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r">
                                <p className="text-sm text-blue-800">
                                    <strong>Tip:</strong> Stripe charges 2.9% + $0.30 per transaction. This fee is automatically deducted from each donation. You can choose to "cover fees" on your giving page, allowing donors to pay the processing cost.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-600" />
                            Step 4: Adding Your First Team Members
                        </h3>
                        
                        <div className="space-y-4 text-slate-600">
                            <p>
                                Navigate to <strong>Settings → Team Members</strong> to invite staff and key volunteers.
                            </p>

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Inviting Users</h4>
                                <ol className="list-decimal list-inside space-y-2 ml-4">
                                    <li>Click "Invite Team Member"</li>
                                    <li>Enter their name and email address</li>
                                    <li>Assign a role (see User Roles below)</li>
                                    <li>They'll receive an email invitation to create their account</li>
                                </ol>
                            </div>

                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Understanding User Roles</h4>
                                <div className="space-y-2">
                                    <div className="border-l-4 border-purple-400 pl-4">
                                        <strong className="text-slate-900">Admin</strong>
                                        <p className="text-sm">Full access to all features, settings, and financial data. Typically senior pastors and church administrators.</p>
                                    </div>
                                    <div className="border-l-4 border-blue-400 pl-4">
                                        <strong className="text-slate-900">Finance</strong>
                                        <p className="text-sm">Access to giving records, reports, and donor management. Cannot modify church settings or user permissions.</p>
                                    </div>
                                    <div className="border-l-4 border-green-400 pl-4">
                                        <strong className="text-slate-900">Group Leader</strong>
                                        <p className="text-sm">Manage assigned groups, view member directory, communicate with group members. No financial access.</p>
                                    </div>
                                    <div className="border-l-4 border-yellow-400 pl-4">
                                        <strong className="text-slate-900">Volunteer Coordinator</strong>
                                        <p className="text-sm">Create and manage volunteer schedules, teams, and service plans. No access to giving or sensitive pastoral care notes.</p>
                                    </div>
                                    <div className="border-l-4 border-slate-400 pl-4">
                                        <strong className="text-slate-900">Check-in Only</strong>
                                        <p className="text-sm">Limited to event check-in kiosk mode. Ideal for volunteers who help with Sunday morning check-in.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                                <p className="text-sm text-yellow-800">
                                    <strong>Security Best Practice:</strong> Only assign Admin role to those who absolutely need it. Use least-privilege access—give team members only the permissions they need for their specific ministry.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12 flex items-center gap-2">
                    <Wrench className="w-6 h-6 text-slate-600" />
                    Advanced Configuration
                </h2>

                <p className="text-slate-600 mb-6">
                    These settings are optional but can enhance your Relius experience. You can configure them now or come back later.
                </p>

                <details className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-4">
                    <summary className="font-bold text-slate-900 cursor-pointer">Custom Fields</summary>
                    <div className="mt-4 space-y-3 text-slate-600">
                        <p>
                            Add custom fields to member profiles to track church-specific data:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Baptism date and location</li>
                            <li>Membership class completion</li>
                            <li>Ministry interests or spiritual gifts</li>
                            <li>Dietary restrictions (for events)</li>
                        </ul>
                        <p>
                            Go to <strong>Settings → Custom Fields</strong> to create text fields, dropdowns, checkboxes, or date pickers.
                        </p>
                    </div>
                </details>

                <details className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-4">
                    <summary className="font-bold text-slate-900 cursor-pointer">Feature Toggles</summary>
                    <div className="mt-4 space-y-3 text-slate-600">
                        <p>
                            Enable or disable specific Relius features based on your church's needs:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li><strong>Public Event Registration:</strong> Allow non-members to register for events via your website</li>
                            <li><strong>Online Giving:</strong> Display the giving page on your public site</li>
                            <li><strong>Small Group Finder:</strong> Enable public directory of joinable groups</li>
                            <li><strong>AI Features:</strong> Turn on AI-powered sermon planning, content generation, and pastoral insights</li>
                        </ul>
                        <p>
                            Access these under <strong>Settings → Features</strong>.
                        </p>
                    </div>
                </details>

                <details className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-4">
                    <summary className="font-bold text-slate-900 cursor-pointer">Email & SMS Configuration</summary>
                    <div className="mt-4 space-y-3 text-slate-600">
                        <p>
                            Configure how your church sends communications:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li><strong>From Name:</strong> Set the sender name for system emails (e.g., "Grace Church" or "Pastor John")</li>
                            <li><strong>Reply-To Address:</strong> Where replies to automated emails go</li>
                            <li><strong>SMS Credits:</strong> Purchase SMS credits for text message campaigns (pricing: $0.02/message)</li>
                        </ul>
                    </div>
                </details>

                <details className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-4">
                    <summary className="font-bold text-slate-900 cursor-pointer">Integrations</summary>
                    <div className="mt-4 space-y-3 text-slate-600">
                        <p>
                            Connect Relius with other tools your church uses:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li><strong>Google Calendar:</strong> Sync events to your church's Google Calendar</li>
                            <li><strong>CCLI:</strong> Automatically report song usage for licensing</li>
                            <li><strong>Webhooks:</strong> Send data to external systems when events occur (advanced users)</li>
                        </ul>
                        <p>
                            Go to <strong>Settings → Integrations</strong> to connect these services.
                        </p>
                    </div>
                </details>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Best Practices
                </h2>

                <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Review permissions quarterly.</strong> As staff changes, update user roles to maintain security and compliance.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Test your giving page before launch.</strong> Make a test donation to ensure receipts, emails, and fund tracking work correctly.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Document your setup decisions.</strong> Keep notes on why you chose certain settings—helpful when onboarding new staff.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span><strong>Enable two-factor authentication.</strong> Require 2FA for admin users to protect sensitive church data.</span>
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Common Questions
                </h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: Can I change my church name after setup?</h3>
                        <p className="text-slate-600">
                            A: Yes, you can update your church name at any time. However, it will affect all future communications and receipts, so choose carefully. Historical data (past receipts, reports) will retain the old name.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: What if I don't have a Stripe account yet?</h3>
                        <p className="text-slate-600">
                            A: No problem. You can create one during the connection process. Stripe is free to set up—you only pay processing fees on actual transactions (2.9% + $0.30 per donation).
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: How many team members can I invite?</h3>
                        <p className="text-slate-600">
                            A: Unlimited! Relius pricing is based on active member count, not staff users. Invite as many team members, volunteers, and group leaders as you need.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: Can I customize the roles and permissions?</h3>
                        <p className="text-slate-600">
                            A: The standard roles (Admin, Finance, Group Leader, etc.) cover most churches' needs. For advanced custom permissions, contact our support team—we can configure enterprise-level access control.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-2">Q: What happens if I skip payment setup?</h3>
                        <p className="text-slate-600">
                            A: You can still use all other Relius features (people management, events, groups, etc.). Online giving will be disabled until you connect Stripe. You can set it up anytime later.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">
                    Related Topics
                </h2>

                <div className="grid md:grid-cols-2 gap-4 not-prose">
                    <Link href="/resources/docs/getting-started/quick-start" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Quick Start Guide →</h3>
                        <p className="text-slate-600 text-sm">
                            New to Relius? Start here for a 15-minute overview of the basics.
                        </p>
                    </Link>

                    <Link href="/resources/docs/getting-started/user-roles" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">User Roles & Permissions →</h3>
                        <p className="text-slate-600 text-sm">
                            Deep dive into role-based access control and security best practices.
                        </p>
                    </Link>

                    <Link href="/resources/docs/giving/online-giving-setup" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Online Giving Setup →</h3>
                        <p className="text-slate-600 text-sm">
                            Complete guide to Stripe integration, fund management, and donor receipts.
                        </p>
                    </Link>

                    <Link href="/resources/docs/getting-started/migration-guides" className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-600 hover:shadow-md transition-all group">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Migration Guides →</h3>
                        <p className="text-slate-600 text-sm">
                            Switching from another ChMS? Step-by-step data migration instructions.
                        </p>
                    </Link>
                </div>
            </div>

            <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Setup questions?
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                    Our team can help you configure settings, import data, and train your staff. We offer free onboarding calls for all new churches.
                </p>
                <Link
                    href="/contact/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                    Schedule Onboarding Call
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </article>
    );
}
