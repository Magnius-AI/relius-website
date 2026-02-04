"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CYCLE_DURATION = 9000;
const TOPIC_TEXT = "The Power of Forgiveness";
const SCRIPTURE_TEXT = "Matthew 18:21-35";

function useTypewriter(text: string, startTime: number, phase: number, phaseStart: number, duration: number) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (phase < phaseStart) {
      setDisplayed("");
      return;
    }
    if (phase > phaseStart) {
      setDisplayed(text);
      return;
    }
    setDisplayed("");
    const charInterval = duration / text.length;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, charInterval);
    return () => clearInterval(interval);
  }, [phase, phaseStart, text, duration, startTime]);

  return displayed;
}

export function SermonPlannerDemo() {
  const [phase, setPhase] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  const resetCycle = useCallback(() => {
    setPhase(0);
    setCycleKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => setPhase(3), 1200),
      setTimeout(() => setPhase(4), 1700),
      setTimeout(() => setPhase(5), 2200),
      setTimeout(() => setPhase(6), 7000),
      setTimeout(() => resetCycle(), CYCLE_DURATION),
    ];
    return () => timers.forEach(clearTimeout);
  }, [cycleKey, resetCycle]);

  const topicText = useTypewriter(TOPIC_TEXT, cycleKey, phase, 1, 500);
  const scriptureText = useTypewriter(SCRIPTURE_TEXT, cycleKey, phase, 2, 330);

  const outlineItems = [
    { title: "The Immeasurable Debt We Owe", ref: "Matthew 18:23-24" },
    { title: "The Unmerited Mercy We Receive", ref: "Matthew 18:27" },
    { title: "Forgiving as We Are Forgiven", ref: "Matthew 18:33-35" },
  ];

  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white w-full h-[420px]">
      <div className="flex h-full">
        {/* Left Panel - Form */}
        <div className="w-[40%] p-4 border-r border-slate-100 flex flex-col gap-3">
          <div className="text-xs font-semibold text-slate-900 mb-1">Sermon Planner</div>

          <div>
            <label className="text-[11px] text-slate-500 block mb-1">Topic or Theme</label>
            <div className="bg-slate-50 border border-slate-200 rounded-md px-2.5 py-2 text-xs text-slate-700 h-8 flex items-center">
              {topicText}
              {phase === 1 && <span className="inline-block w-[1px] h-4 bg-accent-500 ml-0.5 animate-pulse" />}
            </div>
          </div>

          <div>
            <label className="text-[11px] text-slate-500 block mb-1">Scripture Reference</label>
            <div className="bg-slate-50 border border-slate-200 rounded-md px-2.5 py-2 text-xs text-slate-700 h-8 flex items-center">
              {scriptureText}
              {phase === 2 && <span className="inline-block w-[1px] h-4 bg-accent-500 ml-0.5 animate-pulse" />}
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-[11px] text-slate-500 block mb-1">Target Audience</label>
              <motion.div
                className="bg-slate-50 border border-slate-200 rounded-md px-2.5 py-2 text-xs text-slate-600 h-8 flex items-center"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: phase >= 3 ? 1 : 0.3 }}
              >
                General
              </motion.div>
            </div>
            <div className="flex-1">
              <label className="text-[11px] text-slate-500 block mb-1">Style</label>
              <motion.div
                className="bg-slate-50 border border-slate-200 rounded-md px-2.5 py-2 text-xs text-slate-600 h-8 flex items-center"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: phase >= 3 ? 1 : 0.3 }}
              >
                Expository
              </motion.div>
            </div>
          </div>

          <motion.button
            className="mt-auto bg-accent-600 text-white text-xs font-medium rounded-md py-2 px-3"
            animate={
              phase === 4
                ? { scale: [1, 0.95, 1], boxShadow: ["0 0 0px rgba(37,99,235,0)", "0 0 12px rgba(37,99,235,0.5)", "0 0 0px rgba(37,99,235,0)"] }
                : {}
            }
            transition={{ duration: 0.4 }}
          >
            Generate Outline
          </motion.button>
        </div>

        {/* Right Panel - Generated Outline */}
        <div className="w-[60%] p-4 overflow-hidden">
          <div className="text-xs font-semibold text-slate-400 mb-3">Generated Sermon Outline</div>

          <AnimatePresence>
            {phase >= 5 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0 }}
                  className="text-sm font-bold text-slate-900"
                >
                  Unburdened: The Liberating Power of Forgiveness
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-accent-50 border border-accent-200 rounded-md p-2.5 text-[11px] text-accent-800 leading-relaxed"
                >
                  This sermon explores the transformative power of forgiveness as revealed in the Parable of the Unforgiving Servant...
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs font-semibold text-slate-700"
                >
                  Main Points
                </motion.div>

                {outlineItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.4 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-xs font-bold text-accent-600 mt-0.5">{i + 1}.</span>
                    <div>
                      <div className="text-xs text-slate-800 font-medium">{item.title}</div>
                      <span className="text-[10px] bg-slate-100 text-slate-500 rounded-full px-2 py-0.5 inline-block mt-1">
                        {item.ref}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
