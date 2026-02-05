"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CYCLE_DURATION = 8000;
const ORIGINAL_TEXT = "Welcome to our Sunday worship service! We are so glad you're here today.";
const TRANSLATED_TEXT = "\u00a1Bienvenidos a nuestro servicio dominical! Nos alegra mucho que est\u00e9n aqu\u00ed hoy.";

const languages = [
  { name: "English", badge: "EN", color: "bg-blue-100 text-blue-700" },
  { name: "Espa\u00f1ol", badge: "ES", color: "bg-green-100 text-green-700" },
  { name: "Fran\u00e7ais", badge: "FR", color: "bg-purple-100 text-purple-700" },
  { name: "\u4e2d\u6587", badge: "ZH", color: "bg-orange-100 text-orange-700" },
];

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

function AnimatedCounter({ target, active }: { target: number; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) { setCount(0); return; }
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [active, target]);

  return <span>{count}</span>;
}

export function TranslationDemo() {
  const [phase, setPhase] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  const resetCycle = useCallback(() => {
    setPhase(0);
    setCycleKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 2500),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 3500),
      setTimeout(() => setPhase(5), 4000),
      setTimeout(() => setPhase(6), 5500),
      setTimeout(() => setPhase(7), 6000),
      setTimeout(() => resetCycle(), CYCLE_DURATION),
    ];
    return () => timers.forEach(clearTimeout);
  }, [cycleKey, resetCycle]);

  const originalText = useTypewriter(ORIGINAL_TEXT, phase, 1, 2200, cycleKey);

  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white w-full h-[420px]">
      <div className="flex h-full">
        {/* Main Area */}
        <div className="w-[70%] p-4 flex flex-col gap-3">
          <div className="text-xs font-semibold text-slate-900 mb-1">Translation Console</div>

          {/* Original Text */}
          <div>
            <label className="text-[11px] text-slate-500 block mb-1">Original Text</label>
            <div className="bg-slate-50 border border-slate-200 rounded-md px-2.5 py-2.5 text-xs text-slate-700 h-20 overflow-hidden leading-relaxed">
              {originalText}
              {phase === 1 && <span className="inline-block w-[1px] h-4 bg-accent-500 ml-0.5 animate-pulse" />}
            </div>
          </div>

          {/* Language + Translate */}
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <label className="text-[11px] text-slate-500 block mb-1">Target Language</label>
              <motion.div
                className="bg-slate-50 border border-slate-200 rounded-md px-2.5 py-2 text-xs text-slate-700 h-8 flex items-center gap-1.5"
                animate={{ opacity: phase >= 2 ? 1 : 0.4 }}
              >
                <span className="text-[10px] bg-green-100 text-green-700 rounded px-1.5 py-0.5">ES</span>
                Espa\u00f1ol (Spanish)
              </motion.div>
            </div>

            <motion.button
              className="bg-accent-600 text-white text-xs font-medium rounded-md py-2 px-3 flex items-center gap-1.5 h-8"
              animate={
                phase === 3
                  ? { scale: [1, 0.95, 1], boxShadow: ["0 0 0px rgba(37,99,235,0)", "0 0 12px rgba(37,99,235,0.5)", "0 0 0px rgba(37,99,235,0)"] }
                  : {}
              }
              transition={{ duration: 0.4 }}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
              Translate
            </motion.button>
          </div>

          {/* Success Banner */}
          <AnimatePresence>
            {phase >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: -4, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-green-50 border border-green-200 rounded-md px-3 py-1.5 text-[11px] text-green-700 flex items-center gap-1.5"
              >
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Translation successful
              </motion.div>
            )}
          </AnimatePresence>

          {/* Translated Text */}
          <div>
            <label className="text-[11px] text-slate-500 block mb-1">Translated Text</label>
            <AnimatePresence>
              {phase >= 5 && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-50 border border-green-200 rounded-md px-2.5 py-2.5 text-xs text-slate-700 leading-relaxed"
                >
                  {TRANSLATED_TEXT}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-[30%] p-4 border-l border-slate-100 flex flex-col gap-4">
          {/* Cache Statistics */}
          <div>
            <div className="text-[11px] font-semibold text-slate-700 mb-2">Cache Statistics</div>
            <div className="space-y-2">
              <div className="bg-slate-50 rounded-md p-2.5">
                <div className="text-[10px] text-slate-400">Total Entries</div>
                <div className="text-base font-bold text-slate-900">
                  <AnimatedCounter target={18} active={phase >= 6} />
                </div>
              </div>
              <div className="bg-slate-50 rounded-md p-2.5">
                <div className="text-[10px] text-slate-400">Active</div>
                <div className="text-base font-bold text-green-600">
                  <AnimatedCounter target={12} active={phase >= 6} />
                </div>
              </div>
            </div>
          </div>

          {/* Language List */}
          <div>
            <div className="text-[11px] font-semibold text-slate-700 mb-2">Languages</div>
            <div className="space-y-1.5">
              {languages.map((lang) => (
                <div key={lang.badge} className="flex items-center gap-1.5">
                  <span className={`text-[9px] font-bold rounded px-1.5 py-0.5 ${lang.color}`}>{lang.badge}</span>
                  <span className="text-[11px] text-slate-600">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
