"use client";

import { useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpenText,
  BrainCircuit,
  HandHeart,
  Languages,
  MessageSquareText,
  Sparkles,
} from "lucide-react";
import { analytics } from "@/lib/analytics";
import { SermonPlannerDemo } from "@/components/demo/ai-demos/SermonPlannerDemo";
import { ContentStudioDemo } from "@/components/demo/ai-demos/ContentStudioDemo";
import { PastoralCareDemo } from "@/components/demo/ai-demos/PastoralCareDemo";
import { AIInsightsDemo } from "@/components/demo/ai-demos/AIInsightsDemo";
import { TranslationDemo } from "@/components/demo/ai-demos/TranslationDemo";
import { DonationsAIDemo } from "@/components/demo/ai-demos/DonationsAIDemo";

const tools = [
  {
    id: "sermon-planner",
    label: "Sermon Planner",
    eyebrow: "Prepare",
    description: "Start with a passage and a theme. Relius gives you an outline you can edit.",
    icon: BookOpenText,
    demo: SermonPlannerDemo,
  },
  {
    id: "content-studio",
    label: "Content Studio",
    eyebrow: "Communicate",
    description: "Turn one message into an email, social post, or small-group note, then edit it in your own voice.",
    icon: MessageSquareText,
    demo: ContentStudioDemo,
  },
  {
    id: "pastoral-care",
    label: "Pastoral Care",
    eyebrow: "Care",
    description: "Keep prayer needs and follow-up work in view without losing the person behind the note.",
    icon: HandHeart,
    demo: PastoralCareDemo,
  },
  {
    id: "ai-insights",
    label: "AI Insights",
    eyebrow: "Understand",
    description: "See attendance and engagement changes without digging through spreadsheets.",
    icon: BrainCircuit,
    demo: AIInsightsDemo,
  },
  {
    id: "translation",
    label: "Translation",
    eyebrow: "Include",
    description: "Translate church messages so more people can take part.",
    icon: Languages,
    demo: TranslationDemo,
  },
  {
    id: "donations-ai",
    label: "Giving Insights",
    eyebrow: "Steward",
    description: "See giving activity and follow-up needs without opening another spreadsheet.",
    icon: Sparkles,
    demo: DonationsAIDemo,
  },
] as const;

export function AIShowcase() {
  const [selectedId, setSelectedId] = useState<(typeof tools)[number]["id"]>("sermon-planner");
  const reduceMotion = useReducedMotion();
  const selected = tools.find((tool) => tool.id === selectedId) ?? tools[0];
  const SelectedDemo = selected.demo;

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % tools.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + tools.length) % tools.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tools.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    const nextTool = tools[nextIndex];
    setSelectedId(nextTool.id);
    document.getElementById(`tab-${nextTool.id}`)?.focus();
  }

  return (
    <section className="border-y border-slate-200 bg-slate-50 px-6 py-20 lg:px-8 lg:py-24" aria-labelledby="ai-showcase-title">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            AI for the work your team already does
          </div>
          <h2 id="ai-showcase-title" className="text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            AI for sermon prep, communication, care, and reporting
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Draft a sermon outline, adapt a church message, or review follow-up and attendance patterns. Edit each result before you use it.
          </p>
        </div>

        <div
          className="mb-6 flex snap-x gap-2 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-6"
          role="tablist"
          aria-label="Relius AI tools"
        >
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            const isSelected = selected.id === tool.id;
            return (
              <button
                key={tool.id}
                id={`tab-${tool.id}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls="ai-showcase-panel"
                tabIndex={isSelected ? 0 : -1}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                onClick={() => {
                  setSelectedId(tool.id);
                  analytics.trackDemoInteraction("select_ai_showcase", { tool: tool.id });
                }}
                className={`min-h-11 min-w-[148px] snap-start rounded-xl border px-3 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:min-w-0 ${
                  isSelected
                    ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-950"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon className={`h-4 w-4 shrink-0 ${isSelected ? "text-blue-300" : "text-blue-600"}`} aria-hidden="true" />
                  {tool.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
          <div className="grid lg:grid-cols-[280px_minmax(0,1fr)]">
            <div className="flex flex-col justify-center border-b border-slate-200 p-6 sm:p-8 lg:border-r lg:border-b-0">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">{selected.eyebrow}</p>
              <h3 className="text-2xl font-bold text-slate-900">{selected.label}</h3>
              <p className="mt-3 text-slate-600">{selected.description}</p>
              <Link
                href="/ai/"
                className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 font-semibold text-blue-700 hover:text-blue-900 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                See all AI tools
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="min-w-0 bg-slate-100 p-3 sm:p-6">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={selected.id}
                  id="ai-showcase-panel"
                  role="tabpanel"
                  aria-labelledby={`tab-${selected.id}`}
                  className="ai-demo-preview mx-auto w-full max-w-3xl overflow-hidden rounded-xl"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2 }}
                >
                  <SelectedDemo />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
