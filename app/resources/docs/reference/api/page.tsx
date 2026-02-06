import { Metadata } from 'next';
import Link from 'next/link';
import { Code, ChevronRight, Key, Shield, Zap, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'API Documentation - Reference - Relius Documentation',
  description: 'Build custom integrations with the Relius REST API. Authentication, endpoints, rate limits, and code examples.',
  alternates: {
    canonical: 'https://relius.ai/resources/docs/reference/api',
  },
  openGraph: {
    title: 'API Documentation | Relius Documentation',
    description: 'Build custom integrations with the Relius REST API. Authentication, endpoints, and examples.',
    url: 'https://relius.ai/resources/docs/reference/api',
  },
  keywords: ['API', 'REST API', 'integration', 'developer', 'webhooks', 'church management'],
};

export default function APIDocumentationPage() {
  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-600 not-prose">
        <Link href="/resources/docs" className="hover:text-primary-600 transition-colors">
          Documentation
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/resources/docs/reference" className="hover:text-primary-600 transition-colors">
          Reference
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-slate-900 font-medium">API Documentation</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
            <Code className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Reference
            </p>
            <h1 className="text-4xl font-bold text-slate-900">API Documentation</h1>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
          <Zap className="h-4 w-4" />
          Available on AI Pro Plan
        </div>
      </div>

      {/* Quick Summary */}
      <blockquote className="border-l-4 border-emerald-500 bg-emerald-50 p-6 rounded-r-lg not-prose">
        <p className="text-lg text-slate-700">
          <strong>Quick Summary:</strong> The Relius REST API lets you build custom integrations, 
          sync data with other systems, and automate workflows. Available on the AI Pro plan.
        </p>
      </blockquote>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
        <div className="prose prose-slate max-w-none">
          <p>
            The Relius API follows RESTful conventions and returns JSON responses. Use it to:
          </p>
          <ul>
            <li>Sync member data with other systems (CRM, email marketing, etc.)</li>
            <li>Build custom check-in kiosks or apps</li>
            <li>Create automated workflows and reports</li>
            <li>Integrate with church-specific tools</li>
          </ul>
          <p>
            All API requests require authentication and are rate-limited to ensure fair usage 
            across all customers.
          </p>
        </div>
      </section>

      {/* Base URL */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Base URL</h2>
        <div className="rounded-lg bg-slate-900 p-4 font-mono text-sm text-green-400">
          https://api.relius.ai/v1
        </div>
        <p className="text-slate-600">
          All API endpoints are relative to this base URL. The current version is <code className="px-1 py-0.5 bg-slate-100 rounded text-sm">v1</code>.
        </p>
      </section>

      {/* Authentication */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Key className="h-6 w-6 text-amber-600" />
          Authentication
        </h2>
        <div className="prose prose-slate max-w-none">
          <p>
            All API requests must include an API key in the <code>Authorization</code> header:
          </p>
        </div>
        <div className="rounded-lg bg-slate-900 p-4 font-mono text-sm overflow-x-auto">
          <span className="text-slate-400">Authorization:</span>{' '}
          <span className="text-green-400">Bearer YOUR_API_KEY</span>
        </div>
        <div className="prose prose-slate max-w-none">
          <h3>Getting Your API Key</h3>
          <ol>
            <li>Go to <strong>Administration → Security → API Keys</strong></li>
            <li>Click <strong>Generate New Key</strong></li>
            <li>Give your key a descriptive name (e.g., "Website Integration")</li>
            <li>Copy the key immediately—you won't be able to see it again</li>
          </ol>
          <p>
            <strong>Important:</strong> Keep your API key secret. Don't commit it to version control 
            or expose it in client-side code. If a key is compromised, revoke it immediately.
          </p>
        </div>
      </section>

      {/* Core Endpoints */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Core Endpoints</h2>
        
        <div className="space-y-6">
          {/* People */}
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">People</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-mono rounded">GET</span>
                <div>
                  <code className="text-sm font-mono text-slate-700">/people</code>
                  <p className="text-sm text-slate-600 mt-1">List all people (paginated)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-mono rounded">GET</span>
                <div>
                  <code className="text-sm font-mono text-slate-700">/people/:id</code>
                  <p className="text-sm text-slate-600 mt-1">Get a specific person</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-mono rounded">POST</span>
                <div>
                  <code className="text-sm font-mono text-slate-700">/people</code>
                  <p className="text-sm text-slate-600 mt-1">Create a new person</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-mono rounded">PATCH</span>
                <div>
                  <code className="text-sm font-mono text-slate-700">/people/:id</code>
                  <p className="text-sm text-slate-600 mt-1">Update a person</p>
                </div>
              </div>
            </div>
          </div>

          {/* Groups */}
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Groups</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-mono rounded">GET</span>
                <div>
                  <code className="text-sm font-mono text-slate-700">/groups</code>
                  <p className="text-sm text-slate-600 mt-1">List all groups</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-mono rounded">GET</span>
                <div>
                  <code className="text-sm font-mono text-slate-700">/groups/:id/members</code>
                  <p className="text-sm text-slate-600 mt-1">Get members of a group</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-mono rounded">POST</span>
                <div>
                  <code className="text-sm font-mono text-slate-700">/groups/:id/members</code>
                  <p className="text-sm text-slate-600 mt-1">Add member to group</p>
                </div>
              </div>
            </div>
          </div>

          {/* Events */}
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Events</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-mono rounded">GET</span>
                <div>
                  <code className="text-sm font-mono text-slate-700">/events</code>
                  <p className="text-sm text-slate-600 mt-1">List events (with date filters)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-mono rounded">GET</span>
                <div>
                  <code className="text-sm font-mono text-slate-700">/events/:id/registrations</code>
                  <p className="text-sm text-slate-600 mt-1">Get event registrations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-mono rounded">POST</span>
                <div>
                  <code className="text-sm font-mono text-slate-700">/events/:id/checkin</code>
                  <p className="text-sm text-slate-600 mt-1">Check in a person</p>
                </div>
              </div>
            </div>
          </div>

          {/* Giving */}
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Giving</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-mono rounded">GET</span>
                <div>
                  <code className="text-sm font-mono text-slate-700">/donations</code>
                  <p className="text-sm text-slate-600 mt-1">List donations (with date/donor filters)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-mono rounded">GET</span>
                <div>
                  <code className="text-sm font-mono text-slate-700">/donations/summary</code>
                  <p className="text-sm text-slate-600 mt-1">Get giving summary/totals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Shield className="h-6 w-6 text-blue-600" />
          Rate Limits
        </h2>
        <div className="prose prose-slate max-w-none">
          <p>API requests are rate-limited to ensure fair usage:</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Limit Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Limit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 text-slate-600">Per minute</td>
                <td className="px-4 py-3 font-mono text-slate-900">60 requests</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-600">Per hour</td>
                <td className="px-4 py-3 font-mono text-slate-900">1,000 requests</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-600">Per day</td>
                <td className="px-4 py-3 font-mono text-slate-900">10,000 requests</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-slate-600">
          Rate limit headers are included in every response. If you exceed limits, you'll receive 
          a <code className="px-1 py-0.5 bg-slate-100 rounded text-sm">429 Too Many Requests</code> response.
        </p>
      </section>

      {/* Code Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Example Request</h2>
        <div className="rounded-lg bg-slate-900 p-4 font-mono text-sm overflow-x-auto">
          <div className="text-slate-400"># Get all people</div>
          <div className="text-green-400 mt-2">
            curl -X GET https://api.relius.ai/v1/people \
          </div>
          <div className="text-green-400 pl-4">
            -H "Authorization: Bearer YOUR_API_KEY" \
          </div>
          <div className="text-green-400 pl-4">
            -H "Content-Type: application/json"
          </div>
        </div>
        <div className="rounded-lg bg-slate-900 p-4 font-mono text-sm overflow-x-auto mt-4">
          <div className="text-slate-400"># Response</div>
          <pre className="text-amber-400 mt-2">{`{
  "data": [
    {
      "id": "abc123",
      "first_name": "John",
      "last_name": "Smith",
      "email": "john@example.com",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 25,
    "total": 150
  }
}`}</pre>
        </div>
      </section>

      {/* Webhooks */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Webhooks</h2>
        <div className="prose prose-slate max-w-none">
          <p>
            Webhooks let you receive real-time notifications when events occur in Relius. 
            Configure webhooks in <strong>Administration → Integrations → Webhooks</strong>.
          </p>
          <p>Available webhook events:</p>
          <ul>
            <li><code>person.created</code> — New person added</li>
            <li><code>person.updated</code> — Person profile updated</li>
            <li><code>donation.created</code> — New donation recorded</li>
            <li><code>event.checkin</code> — Person checked into event</li>
            <li><code>group.member_added</code> — Person added to group</li>
          </ul>
        </div>
      </section>

      {/* Full Documentation */}
      <section className="rounded-xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
        <div className="flex items-start gap-4">
          <BookOpen className="h-8 w-8 text-primary-600 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Full API Reference</h2>
            <p className="text-slate-600 mb-4">
              For complete endpoint documentation, request/response schemas, and interactive 
              examples, visit our API reference portal.
            </p>
            <a
              href="https://api.relius.ai/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
            >
              View Full API Docs →
            </a>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="border-t border-slate-200 pt-8 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Related Topics</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/resources/docs/admin/integrations"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            Integrations →
          </Link>
          <Link
            href="/resources/docs/admin/security"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            Security Settings →
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
