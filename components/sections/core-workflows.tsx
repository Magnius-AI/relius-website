import Link from "next/link";
import { ArrowRight, CalendarDays, CircleDollarSign, Users } from "lucide-react";

const workflows = [
  {
    icon: Users,
    number: "01",
    title: "Know your people",
    description: "Keep profiles, households, groups, care notes, and messages together.",
  },
  {
    icon: CalendarDays,
    number: "02",
    title: "Run the week",
    description: "Plan events, schedule volunteers, take attendance, and manage check-ins.",
  },
  {
    icon: CircleDollarSign,
    number: "03",
    title: "Track giving and receipts",
    description: "Track donations, issue receipts, and keep giving history connected to member records.",
  },
];

export function CoreWorkflows() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8 lg:py-24" aria-labelledby="workflows-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">For the week ahead</p>
            <h2 id="workflows-title" className="text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Keep people, planning, and giving connected
            </h2>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Member records, events, services, and giving live in the same system, so staff can find the details they need.
            </p>
            <Link
              href="/features/"
              className="mt-7 inline-flex min-h-11 items-center gap-2 font-semibold text-blue-700 hover:text-blue-900 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              See all features
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <ol className="divide-y divide-slate-200 border-y border-slate-200">
            {workflows.map((workflow) => {
              const Icon = workflow.icon;
              return (
                <li key={workflow.title} className="grid gap-4 py-8 sm:grid-cols-[56px_minmax(0,1fr)_auto] sm:items-start sm:gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{workflow.title}</h3>
                    <p className="mt-2 text-slate-600">{workflow.description}</p>
                  </div>
                  <span className="hidden pt-1 text-sm font-semibold text-slate-400 sm:block" aria-hidden="true">
                    {workflow.number}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
