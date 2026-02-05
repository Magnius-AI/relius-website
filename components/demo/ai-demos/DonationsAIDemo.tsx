"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CYCLE_DURATION = 7500;

const topStats = [
  {
    label: "This Month",
    value: "$4,280",
    color: "text-green-600",
    bg: "bg-green-50",
    arrow: "\u2191",
    arrowColor: "text-green-500",
  },
  {
    label: "Active Donors",
    value: "47",
    color: "text-accent-600",
    bg: "bg-accent-50",
  },
  {
    label: "At-Risk Donors",
    value: "3",
    color: "text-orange-600",
    bg: "bg-orange-50",
    arrow: "\u26a0",
    arrowColor: "text-orange-400",
  },
  {
    label: "Lapsed Donors",
    value: "5",
    color: "text-red-600",
    bg: "bg-red-50",
  },
];

const insights = [
  {
    emoji: "\ud83d\udcc8",
    title: "Donation Trend Analysis",
    confidence: "89%",
    detail: "Donations up 12% compared to last month",
    color: "bg-green-50 border-green-100",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    emoji: "\u26a0\ufe0f",
    title: "Lapsed Donor Alert",
    confidence: "94%",
    detail: "5 donors need attention. 3 at-risk, 2 lapsed",
    color: "bg-orange-50 border-orange-100",
    badgeColor: "bg-orange-100 text-orange-700",
    link: "Generate Messages \u2192",
  },
  {
    emoji: "\ud83d\udca1",
    title: "Donor Engagement Opportunity",
    confidence: "91%",
    detail: "8 new donors joined recently",
    color: "bg-blue-50 border-blue-100",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    emoji: "\ud83d\udd2e",
    title: "Giving Pattern Insight",
    confidence: "86%",
    detail: "Average donation: $91. 12 recurring gifts",
    color: "bg-purple-50 border-purple-100",
    badgeColor: "bg-purple-100 text-purple-700",
  },
];

const channels = [
  { name: "Online Giving", amount: "$3,200", pct: 75, badge: null },
  { name: "Text-to-Give", amount: "$580", pct: 14, badge: "New" },
  { name: "QR Code", amount: "$320", pct: 7, badge: "New" },
  { name: "Manual", amount: "$180", pct: 4, badge: null },
];

export function DonationsAIDemo() {
  const [phase, setPhase] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  const resetCycle = useCallback(() => {
    setPhase(0);
    setCycleKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 3500),
      setTimeout(() => setPhase(4), 5000),
      setTimeout(() => resetCycle(), CYCLE_DURATION),
    ];
    return () => timers.forEach(clearTimeout);
  }, [cycleKey, resetCycle]);

  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white w-full h-[420px] flex flex-col">
      <div className="px-4 pt-3.5 pb-1.5">
        <div className="text-xs font-semibold text-slate-900">AI Donations Manager</div>
      </div>

      {/* Top Stat Cards */}
      <div className="px-4 pb-3">
        <div className="grid grid-cols-4 gap-2">
          {topStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 6 }}
              transition={{ delay: i * 0.1 }}
              className={`${stat.bg} rounded-lg p-2.5 text-center`}
            >
              <div className={`text-sm font-bold ${stat.color} flex items-center justify-center gap-0.5`}>
                {stat.value}
                {stat.arrow && <span className={`text-[10px] ${stat.arrowColor}`}>{stat.arrow}</span>}
              </div>
              <div className="text-[9px] text-slate-500 leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Insights Grid */}
      <AnimatePresence>
        {phase >= 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-4 pb-3"
          >
            <div className="text-[11px] font-semibold text-slate-600 mb-1.5">AI Insights &amp; Recommendations</div>
            <div className="grid grid-cols-2 gap-2">
              {insights.map((ins, i) => (
                <motion.div
                  key={ins.title}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.3 }}
                  className={`${ins.color} border rounded-lg p-2.5`}
                >
                  <div className="text-[10px] font-semibold text-slate-800 flex items-center gap-1 mb-0.5">
                    <span>{ins.emoji}</span>
                    <span className="leading-tight">{ins.title}</span>
                  </div>
                  <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${ins.badgeColor} inline-block mb-1`}>
                    {ins.confidence}
                  </span>
                  <div className="text-[10px] text-slate-500 leading-relaxed">{ins.detail}</div>
                  {ins.link && (
                    <div className="text-[10px] text-accent-600 font-medium mt-1">{ins.link}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Donation Channels */}
      <AnimatePresence>
        {phase >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="px-4 pb-3.5 mt-auto"
          >
            <div className="text-[11px] font-semibold text-slate-600 mb-1.5">Donation Channels</div>
            <div className="grid grid-cols-4 gap-2">
              {channels.map((ch, i) => (
                <motion.div
                  key={ch.name}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-slate-50 rounded-lg p-2 text-center"
                >
                  <div className="text-[11px] font-bold text-slate-800">{ch.amount}</div>
                  <div className="text-[9px] text-slate-500 leading-tight flex items-center justify-center gap-0.5">
                    {ch.name}
                    {ch.badge && (
                      <span className="text-[7px] bg-accent-100 text-accent-600 rounded px-1">{ch.badge}</span>
                    )}
                  </div>
                  {/* Mini progress bar */}
                  <div className="h-1.5 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
                    <motion.div
                      className="h-full bg-accent-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${ch.pct}%` }}
                      transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
