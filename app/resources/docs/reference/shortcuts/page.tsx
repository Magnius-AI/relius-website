import { Metadata } from 'next';
import Link from 'next/link';
import { Keyboard, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Keyboard Shortcuts - Reference - Relius Documentation',
  description: 'Speed up your workflow with keyboard shortcuts for common actions in Relius church management software.',
  alternates: {
    canonical: 'https://relius.ai/resources/docs/reference/shortcuts',
  },
  openGraph: {
    title: 'Keyboard Shortcuts | Relius Documentation',
    description: 'Speed up your workflow with keyboard shortcuts for common actions in Relius.',
    url: 'https://relius.ai/resources/docs/reference/shortcuts',
  },
  keywords: ['keyboard shortcuts', 'hotkeys', 'productivity', 'church management'],
};

interface ShortcutGroup {
  title: string;
  shortcuts: {
    keys: string[];
    action: string;
    mac?: string[];
  }[];
}

const shortcutGroups: ShortcutGroup[] = [
  {
    title: 'Global Navigation',
    shortcuts: [
      { keys: ['Ctrl', 'K'], mac: ['⌘', 'K'], action: 'Open command palette / Quick search' },
      { keys: ['Ctrl', '/'], mac: ['⌘', '/'], action: 'Open keyboard shortcuts help' },
      { keys: ['Ctrl', 'Shift', 'P'], mac: ['⌘', 'Shift', 'P'], action: 'Go to People' },
      { keys: ['Ctrl', 'Shift', 'G'], mac: ['⌘', 'Shift', 'G'], action: 'Go to Groups' },
      { keys: ['Ctrl', 'Shift', 'E'], mac: ['⌘', 'Shift', 'E'], action: 'Go to Events' },
      { keys: ['Ctrl', 'Shift', 'D'], mac: ['⌘', 'Shift', 'D'], action: 'Go to Dashboard' },
      { keys: ['Esc'], action: 'Close modal / Cancel action' },
    ],
  },
  {
    title: 'People & Directory',
    shortcuts: [
      { keys: ['N'], action: 'New person (when in People section)' },
      { keys: ['E'], action: 'Edit selected person' },
      { keys: ['/'], action: 'Focus search bar' },
      { keys: ['↑', '↓'], action: 'Navigate through list' },
      { keys: ['Enter'], action: 'Open selected person' },
      { keys: ['Ctrl', 'S'], mac: ['⌘', 'S'], action: 'Save changes' },
    ],
  },
  {
    title: 'Events & Calendar',
    shortcuts: [
      { keys: ['N'], action: 'New event (when in Events section)' },
      { keys: ['T'], action: 'Go to today' },
      { keys: ['←', '→'], action: 'Previous / Next period' },
      { keys: ['D'], action: 'Day view' },
      { keys: ['W'], action: 'Week view' },
      { keys: ['M'], action: 'Month view' },
    ],
  },
  {
    title: 'Service Planning',
    shortcuts: [
      { keys: ['N'], action: 'New service plan' },
      { keys: ['A'], action: 'Add item to plan' },
      { keys: ['Ctrl', '↑'], mac: ['⌘', '↑'], action: 'Move item up' },
      { keys: ['Ctrl', '↓'], mac: ['⌘', '↓'], action: 'Move item down' },
      { keys: ['Delete'], action: 'Remove selected item' },
      { keys: ['Ctrl', 'D'], mac: ['⌘', 'D'], action: 'Duplicate item' },
    ],
  },
  {
    title: 'Text Editing',
    shortcuts: [
      { keys: ['Ctrl', 'B'], mac: ['⌘', 'B'], action: 'Bold' },
      { keys: ['Ctrl', 'I'], mac: ['⌘', 'I'], action: 'Italic' },
      { keys: ['Ctrl', 'U'], mac: ['⌘', 'U'], action: 'Underline' },
      { keys: ['Ctrl', 'Z'], mac: ['⌘', 'Z'], action: 'Undo' },
      { keys: ['Ctrl', 'Shift', 'Z'], mac: ['⌘', 'Shift', 'Z'], action: 'Redo' },
      { keys: ['Ctrl', 'A'], mac: ['⌘', 'A'], action: 'Select all' },
    ],
  },
  {
    title: 'Tables & Lists',
    shortcuts: [
      { keys: ['Tab'], action: 'Next cell / field' },
      { keys: ['Shift', 'Tab'], action: 'Previous cell / field' },
      { keys: ['Ctrl', 'A'], mac: ['⌘', 'A'], action: 'Select all rows' },
      { keys: ['Shift', 'Click'], action: 'Select range' },
      { keys: ['Ctrl', 'Click'], mac: ['⌘', 'Click'], action: 'Toggle selection' },
    ],
  },
];

export default function KeyboardShortcutsPage() {
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
        <span className="text-slate-900 font-medium">Keyboard Shortcuts</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
            <Keyboard className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Reference
            </p>
            <h1 className="text-4xl font-bold text-slate-900">Keyboard Shortcuts</h1>
          </div>
        </div>
      </div>

      {/* Quick Summary */}
      <blockquote className="border-l-4 border-slate-500 bg-slate-50 p-6 rounded-r-lg not-prose">
        <p className="text-lg text-slate-700">
          <strong>Quick Summary:</strong> Speed up your workflow with keyboard shortcuts. 
          Press <kbd className="px-2 py-1 bg-white rounded border border-slate-300 text-sm font-mono">Ctrl</kbd> + 
          <kbd className="px-2 py-1 bg-white rounded border border-slate-300 text-sm font-mono">/</kbd> (or 
          <kbd className="px-2 py-1 bg-white rounded border border-slate-300 text-sm font-mono">⌘</kbd> + 
          <kbd className="px-2 py-1 bg-white rounded border border-slate-300 text-sm font-mono">/</kbd> on Mac) 
          anywhere in Relius to see available shortcuts.
        </p>
      </blockquote>

      {/* Platform Note */}
      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose">
        <p className="text-blue-800">
          <strong>Note:</strong> On Mac, use <kbd className="px-1 py-0.5 bg-white rounded border border-blue-300 text-xs font-mono">⌘</kbd> (Command) 
          instead of <kbd className="px-1 py-0.5 bg-white rounded border border-blue-300 text-xs font-mono">Ctrl</kbd>. 
          Mac shortcuts are shown where they differ.
        </p>
      </div>

      {/* Shortcut Groups */}
      <div className="space-y-8">
        {shortcutGroups.map((group) => (
          <section key={group.title} className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">{group.title}</h2>
            <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Shortcut</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 hidden sm:table-cell">Mac</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {group.shortcuts.map((shortcut, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          {shortcut.keys.map((key, i) => (
                            <span key={i} className="flex items-center">
                              {i > 0 && <span className="text-slate-400 mx-1">+</span>}
                              <kbd className="px-2 py-1 bg-slate-100 rounded border border-slate-300 text-sm font-mono text-slate-700">
                                {key}
                              </kbd>
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        {shortcut.mac ? (
                          <div className="flex items-center gap-1">
                            {shortcut.mac.map((key, i) => (
                              <span key={i} className="flex items-center">
                                {i > 0 && <span className="text-slate-400 mx-1">+</span>}
                                <kbd className="px-2 py-1 bg-slate-100 rounded border border-slate-300 text-sm font-mono text-slate-700">
                                  {key}
                                </kbd>
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-slate-400">Same</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{shortcut.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>

      {/* Command Palette */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Command Palette</h2>
        <div className="prose prose-slate max-w-none">
          <p>
            The command palette is the fastest way to navigate Relius. Press{' '}
            <kbd className="px-2 py-1 bg-slate-100 rounded border border-slate-300 text-sm font-mono">Ctrl</kbd> +{' '}
            <kbd className="px-2 py-1 bg-slate-100 rounded border border-slate-300 text-sm font-mono">K</kbd>{' '}
            (or <kbd className="px-2 py-1 bg-slate-100 rounded border border-slate-300 text-sm font-mono">⌘</kbd> +{' '}
            <kbd className="px-2 py-1 bg-slate-100 rounded border border-slate-300 text-sm font-mono">K</kbd> on Mac) 
            to open it from anywhere.
          </p>
          <p>From the command palette, you can:</p>
          <ul>
            <li>Search for people, groups, or events by name</li>
            <li>Navigate to any section of the app</li>
            <li>Run quick actions (create new person, start check-in, etc.)</li>
            <li>Access recent items</li>
          </ul>
          <p>
            Just start typing and the palette will filter results. Use arrow keys to navigate 
            and Enter to select.
          </p>
        </div>
      </section>

      {/* Tips */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Tips for Power Users</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Learn gradually</h3>
            <p className="text-sm text-slate-600">
              Start with the command palette (<kbd className="px-1 py-0.5 bg-slate-100 rounded border text-xs font-mono">Ctrl+K</kbd>). 
              Once that's muscle memory, add navigation shortcuts one at a time.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Context matters</h3>
            <p className="text-sm text-slate-600">
              Some shortcuts only work in specific contexts. <kbd className="px-1 py-0.5 bg-slate-100 rounded border text-xs font-mono">N</kbd> creates 
              a new item based on where you are (person, event, group, etc.).
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Use the help overlay</h3>
            <p className="text-sm text-slate-600">
              Forgot a shortcut? Press <kbd className="px-1 py-0.5 bg-slate-100 rounded border text-xs font-mono">Ctrl+/</kbd> to 
              see available shortcuts for your current context.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Works with screen readers</h3>
            <p className="text-sm text-slate-600">
              All keyboard shortcuts are designed to work with assistive technology. 
              The command palette announces results as you type.
            </p>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="border-t border-slate-200 pt-8 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Related Topics</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/resources/docs/getting-started/quick-start"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
          >
            Quick Start Guide →
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
