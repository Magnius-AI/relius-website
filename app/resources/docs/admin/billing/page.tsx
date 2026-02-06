import { Metadata } from 'next';
import Link from 'next/link';
import { CreditCard, ChevronRight, Check, ArrowUpRight, ArrowDownRight, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Billing & Subscription - Administration - Relius Documentation',
  description: 'Manage your Relius subscription, view invoices, and understand billing for your church management software.',
  alternates: {
    canonical: 'https://relius.ai/resources/docs/admin/billing',
  },
  openGraph: {
    title: 'Billing & Subscription | Relius Documentation',
    description: 'Manage your Relius subscription, view invoices, and understand billing.',
    url: 'https://relius.ai/resources/docs/admin/billing',
  },
  keywords: ['billing', 'subscription', 'pricing', 'invoices', 'church management'],
};

export default function BillingPage() {
  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-600 not-prose">
        <Link href="/resources/docs" className="hover:text-primary-600 transition-colors">
          Documentation
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/resources/docs/admin" className="hover:text-primary-600 transition-colors">
          Administration
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-slate-900 font-medium">Billing & Subscription</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
            <CreditCard className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Administration
            </p>
            <h1 className="text-4xl font-bold text-slate-900">Billing & Subscription</h1>
          </div>
        </div>
      </div>

      {/* Quick Summary */}
      <blockquote className="border-l-4 border-emerald-500 bg-emerald-50 p-6 rounded-r-lg not-prose">
        <p className="text-lg text-slate-700">
          <strong>Quick Summary:</strong> Manage your Relius subscription, view invoices, 
          update payment methods, and change plans from one central location.
        </p>
      </blockquote>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
        <div className="prose prose-slate max-w-none">
          <p>
            Your Relius subscription gives your church access to powerful management tools. 
            The Billing section lets you manage everything related to your account — from 
            changing plans to downloading invoices for your records.
          </p>
          <p>
            All plans include unlimited people, groups, and events. The difference between 
            tiers is the features available, not usage limits. This means your cost stays 
            predictable as your church grows.
          </p>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Key Concepts</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Subscription</h3>
            <p className="text-sm text-slate-600">
              Your ongoing access to Relius. Billed monthly or annually, depending on your 
              preference. Annual billing saves you 2 months.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Billing Cycle</h3>
            <p className="text-sm text-slate-600">
              The period between charges. Starts on your signup date and renews automatically 
              each month or year.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Plan Tier</h3>
            <p className="text-sm text-slate-600">
              Starter, Growth, or AI Pro. Each tier unlocks additional features while 
              keeping unlimited usage for core features.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Invoice</h3>
            <p className="text-sm text-slate-600">
              A receipt for each payment. Downloaded as PDF for your church's financial 
              records.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Plan Comparison</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Starter */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">Starter</h3>
            <div className="mt-2">
              <span className="text-3xl font-bold text-slate-900">$49</span>
              <span className="text-slate-600">/month</span>
            </div>
            <p className="text-sm text-slate-600 mt-2">Perfect for small churches getting started</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-600" /> Unlimited members
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-600" /> Groups & events
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-600" /> Online giving
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-600" /> Check-in
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-600" /> Email support
              </li>
            </ul>
          </div>

          {/* Growth */}
          <div className="rounded-xl border-2 border-primary-500 bg-white p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="text-lg font-bold text-slate-900">Growth</h3>
            <div className="mt-2">
              <span className="text-3xl font-bold text-slate-900">$99</span>
              <span className="text-slate-600">/month</span>
            </div>
            <p className="text-sm text-slate-600 mt-2">For growing churches with more needs</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-600" /> Everything in Starter
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-600" /> Pastoral care tools
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-600" /> Advanced reports
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-600" /> Public website
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-600" /> Chat support
              </li>
            </ul>
          </div>

          {/* AI Pro */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">AI Pro</h3>
            <div className="mt-2">
              <span className="text-3xl font-bold text-slate-900">$149</span>
              <span className="text-slate-600">/month</span>
            </div>
            <p className="text-sm text-slate-600 mt-2">All features plus AI-powered tools</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-600" /> Everything in Growth
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-600" /> AI Content Studio
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-600" /> AI Sermon Planner
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-600" /> API access
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-600" /> Phone support
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Managing Your Subscription</h2>
        <div className="prose prose-slate max-w-none">
          <h3>Accessing Billing Settings</h3>
          <ol>
            <li>Click the <strong>Settings</strong> gear icon in the sidebar</li>
            <li>Select <strong>Billing</strong> from the menu</li>
            <li>View your current plan, next billing date, and payment method</li>
          </ol>

          <h3>Updating Payment Method</h3>
          <ol>
            <li>Go to <strong>Billing → Payment Method</strong></li>
            <li>Click <strong>Update Card</strong></li>
            <li>Enter your new card details</li>
            <li>Click <strong>Save</strong></li>
          </ol>
          <p>
            Your new card will be used for the next billing cycle. We accept Visa, Mastercard, 
            American Express, and Discover.
          </p>
        </div>
      </section>

      {/* Changing Plans */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Changing Plans</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                <ArrowUpRight className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Upgrading</h3>
            </div>
            <p className="text-slate-600 mb-4">
              When you upgrade, you get immediate access to new features. You'll be charged 
              the prorated difference for the remainder of your current billing cycle.
            </p>
            <p className="text-sm text-slate-500">
              Example: Upgrading from Starter to Growth mid-month would charge approximately 
              $25 (half the $50 difference).
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                <ArrowDownRight className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Downgrading</h3>
            </div>
            <p className="text-slate-600 mb-4">
              When you downgrade, you keep access to your current features until the end of 
              your billing cycle. The new plan takes effect at your next renewal.
            </p>
            <p className="text-sm text-slate-500">
              Note: Some features may become unavailable. Your data is never deleted — you 
              can upgrade again to regain access.
            </p>
          </div>
        </div>
      </section>

      {/* Invoices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <FileText className="h-6 w-6" />
          Invoices & Receipts
        </h2>
        <div className="prose prose-slate max-w-none">
          <p>
            Every payment generates an invoice that you can download for your church's 
            financial records.
          </p>
          <h3>Downloading Invoices</h3>
          <ol>
            <li>Go to <strong>Billing → Invoice History</strong></li>
            <li>Find the invoice you need</li>
            <li>Click the <strong>Download PDF</strong> button</li>
          </ol>
          <p>
            Invoices include your church's name, address, the billing period, and payment 
            details. They're formatted for easy filing and tax purposes.
          </p>
        </div>
      </section>

      {/* Annual Billing */}
      <section className="rounded-xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Save with Annual Billing</h2>
        <p className="text-slate-600 mb-6">
          Pay annually and get 2 months free — that's a 17% savings. Switch to annual 
          billing anytime from your Billing settings.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900">$490</div>
            <div className="text-sm text-slate-600">Starter (annual)</div>
            <div className="text-xs text-green-600">Save $98/year</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900">$990</div>
            <div className="text-sm text-slate-600">Growth (annual)</div>
            <div className="text-xs text-green-600">Save $198/year</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900">$1,490</div>
            <div className="text-sm text-slate-600">AI Pro (annual)</div>
            <div className="text-xs text-green-600">Save $298/year</div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Common Questions</h2>
        <div className="space-y-4">
          <details className="group rounded-lg border border-slate-200 bg-white">
            <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-50">
              <span className="font-medium text-slate-900">Can I cancel anytime?</span>
            </summary>
            <div className="px-4 pb-4 text-slate-600">
              <p>
                Yes, Relius is month-to-month with no contracts. Cancel anytime and your 
                access continues until the end of your current billing period. Your data 
                remains accessible for 30 days after cancellation to allow for export.
              </p>
            </div>
          </details>
          <details className="group rounded-lg border border-slate-200 bg-white">
            <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-50">
              <span className="font-medium text-slate-900">What happens if payment fails?</span>
            </summary>
            <div className="px-4 pb-4 text-slate-600">
              <p>
                We'll retry the payment a few times and send you an email notification. 
                Your access continues during this grace period. If we can't process 
                payment after several attempts, your account will be paused until 
                payment is resolved.
              </p>
            </div>
          </details>
          <details className="group rounded-lg border border-slate-200 bg-white">
            <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-50">
              <span className="font-medium text-slate-900">Do you offer refunds?</span>
            </summary>
            <div className="px-4 pb-4 text-slate-600">
              <p>
                We offer a 14-day money-back guarantee on your first payment. If you're 
                not satisfied within the first two weeks, contact us for a full refund. 
                After that, we don't offer partial refunds, but you can cancel to prevent 
                future charges.
              </p>
            </div>
          </details>
          <details className="group rounded-lg border border-slate-200 bg-white">
            <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-50">
              <span className="font-medium text-slate-900">Can I pay by check or ACH?</span>
            </summary>
            <div className="px-4 pb-4 text-slate-600">
              <p>
                Yes! Contact our billing team to set up invoice payments. We can send 
                invoices for check or ACH payment. This option is available for annual 
                billing only.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* Related Topics */}
      <section className="border-t border-slate-200 pt-8 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Related Topics</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/pricing"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            View Full Pricing →
          </Link>
          <Link
            href="/resources/docs/admin/settings"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            Church Settings →
          </Link>
          <Link
            href="/resources/docs/reference/faq"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            FAQ →
          </Link>
        </div>
      </section>
    </div>
  );
}
