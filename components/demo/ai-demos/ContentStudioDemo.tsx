"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CYCLE_DURATION = 8500;
const SUMMARY_TEXT = "A sermon on forgiveness from Matthew 18:21-35, exploring God's immeasurable grace...";

const channels = ["Email", "Facebook", "Instagram", "Twitter"];

function useTypewriter(text: string, phase: number, phaseStart: number, duration: number, cycleKey: number) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (phase < phaseStart) { setDisplayed(""); return; }
    if (phase > phaseStart) { setDisplayed(text); return; }
    setDisplayed("");
    const charInterval = duration / text.length;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, charInterval);
    return () => clearInterval(interval);
  }, [phase, phaseStart, text, duration, cycleKey]);

  return displayed;
}

export function ContentStudioDemo() {
  const [phase, setPhase] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  const resetCycle = useCallback(() => {
    setPhase(0);
    setCycleKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 3500),
      setTimeout(() => setPhase(5), 6500),
      setTimeout(() => resetCycle(), CYCLE_DURATION),
    ];
    return () => timers.forEach(clearTimeout);
  }, [cycleKey, resetCycle]);

  const summaryText = useTypewriter(SUMMARY_TEXT, phase, 1, 1800, cycleKey);

  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white w-full h-[420px]">
      <div className="flex h-full">
        {/* Left Panel */}
        <div className="w-[40%] p-4 border-r border-slate-100 flex flex-col gap-3">
          <div className="text-xs font-semibold text-slate-900 mb-1">Content Studio</div>

          <div>
            <label className="text-[11px] text-slate-500 block mb-1">Sermon Summary</label>
            <div className="bg-slate-50 border border-slate-200 rounded-md px-2.5 py-2 text-xs text-slate-700 h-24 overflow-hidden leading-relaxed">
              {summaryText}
              {phase === 1 && <span className="inline-block w-[1px] h-4 bg-accent-500 ml-0.5 animate-pulse" />}
            </div>
          </div>

          <div>
            <label className="text-[11px] text-slate-500 block mb-1">Channel</label>
            <AnimatePresence>
              {phase >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-1.5 flex-wrap"
                >
                  {channels.map((ch) => (
                    <motion.span
                      key={ch}
                      className={`text-[11px] px-2.5 py-1 rounded-full border cursor-default transition-colors ${
                        ch === "Email"
                          ? "bg-accent-600 text-white border-accent-600"
                          : "bg-white text-slate-500 border-slate-200"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: channels.indexOf(ch) * 0.1 }}
                    >
                      {ch}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            className="mt-auto bg-accent-600 text-white text-xs font-medium rounded-md py-2 px-3"
            animate={
              phase === 3
                ? { scale: [1, 0.95, 1], boxShadow: ["0 0 0px rgba(37,99,235,0)", "0 0 12px rgba(37,99,235,0.5)", "0 0 0px rgba(37,99,235,0)"] }
                : {}
            }
            transition={{ duration: 0.4 }}
          >
            Generate Content
          </motion.button>
        </div>

        {/* Right Panel */}
        <div className="w-[60%] p-4 overflow-hidden">
          <div className="text-xs font-semibold text-slate-400 mb-3">Generated Content</div>

          <AnimatePresence>
            {phase >= 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-2.5"
              >
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 mb-1"
                >
                  <div className="w-6 h-6 bg-accent-100 rounded flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-slate-800">Email</span>
                  <div className="ml-auto flex gap-1">
                    <div className="w-5 h-5 bg-slate-100 rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Subject */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Subject</div>
                  <div className="text-xs font-semibold text-slate-900">Unburden Your Heart: The Freedom of Forgiveness</div>
                </motion.div>

                {/* Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-[11px] text-slate-500 italic"
                >
                  Discover the transformative power of forgiveness...
                </motion.div>

                {/* Body */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="border-t border-slate-100 pt-2.5 space-y-2"
                >
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Dear Beloved Community,
                  </p>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    What a blessing it was to gather together this past Sunday to explore the parable of the unforgiving servant.
                  </p>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Jesus reminds us that true freedom comes when we release the burden of unforgiveness from our hearts.
                  </p>
                </motion.div>

                {/* Reflect/Pray/Act */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="bg-accent-50 rounded-md p-2.5 space-y-1"
                >
                  <div className="text-[11px]"><span className="font-bold text-accent-700">Reflect</span> <span className="text-slate-600">— Who do I need to forgive?</span></div>
                  <div className="text-[11px]"><span className="font-bold text-accent-700">Pray</span> <span className="text-slate-600">— Lord, give me strength to release...</span></div>
                  <div className="text-[11px]"><span className="font-bold text-accent-700">Act</span> <span className="text-slate-600">— Reach out to someone this week.</span></div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
