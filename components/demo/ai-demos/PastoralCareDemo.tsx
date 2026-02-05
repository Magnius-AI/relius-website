"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CYCLE_DURATION = 7500;

const stats = [
  { label: "Active Requests", value: "3", color: "text-orange-500", bg: "bg-orange-50" },
  { label: "Urgent Needs", value: "1", color: "text-red-500", bg: "bg-red-50" },
  { label: "Answered Prayers", value: "12", color: "text-green-500", bg: "bg-green-50" },
  { label: "Milestones", value: "2", color: "text-purple-500", bg: "bg-purple-50" },
];

const prayerRequests = [
  {
    badge: "Urgent",
    badgeColor: "bg-orange-100 text-orange-700",
    text: "Please pray for my mother's surgery...",
    tag: "Health",
    tagColor: "bg-red-50 text-red-600",
  },
  {
    badge: "New",
    badgeColor: "bg-blue-100 text-blue-700",
    text: "Praying for guidance in career transition...",
    tag: "Spiritual",
    tagColor: "bg-purple-50 text-purple-600",
  },
  {
    badge: "Praying",
    badgeColor: "bg-green-100 text-green-700",
    text: "Thanksgiving for new baby...",
    tag: "Thanksgiving",
    tagColor: "bg-amber-50 text-amber-600",
  },
];

export function PastoralCareDemo() {
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
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 5000),
      setTimeout(() => resetCycle(), CYCLE_DURATION),
    ];
    return () => timers.forEach(clearTimeout);
  }, [cycleKey, resetCycle]);

  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white w-full h-[420px] flex flex-col">
      {/* Header */}
      <div className="px-4 pt-3.5 pb-1.5">
        <div className="text-xs font-semibold text-slate-900">Pastoral Care Dashboard</div>
      </div>

      {/* Stat Cards Row */}
      <div className="px-4 pb-3">
        <div className="grid grid-cols-4 gap-2">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 6 }}
              transition={{ delay: i * 0.1 }}
              className={`${stat.bg} rounded-lg p-2.5 text-center`}
            >
              <div className={`text-base font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-[9px] text-slate-500 leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 min-h-0 px-4 pb-3.5 gap-3">
        {/* Prayer Requests List */}
        <div className="w-[65%] flex flex-col">
          <div className="text-[11px] font-semibold text-slate-600 mb-1.5">Prayer Requests</div>
          <div className="space-y-2 flex-1">
            <AnimatePresence>
              {phase >= 2 &&
                prayerRequests.map((req, i) => (
                  <motion.div
                    key={req.badge}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.4 }}
                    className="bg-slate-50 border border-slate-100 rounded-lg p-2.5"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${req.badgeColor}`}>
                        {req.badge}
                      </span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded ${req.tagColor} ml-auto`}>
                        {req.tag}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-600 leading-relaxed">{req.text}</div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>

        {/* AI Insights Sidebar */}
        <div className="w-[35%] flex flex-col">
          <div className="text-[11px] font-semibold text-slate-600 mb-1.5">AI Insights</div>
          <AnimatePresence>
            {phase >= 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-2 flex-1"
              >
                {/* Sentiment Analysis */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0 }}
                  className="bg-slate-50 rounded-lg p-2.5"
                >
                  <div className="text-[10px] font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                    <span>&#9889;</span> Sentiment Analysis
                  </div>
                  <div className="flex h-2 rounded-full overflow-hidden">
                    <div className="bg-red-400 w-[20%]" />
                    <div className="bg-yellow-400 w-[30%]" />
                    <div className="bg-green-400 w-[50%]" />
                  </div>
                </motion.div>

                {/* Suggested Follow-up */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-accent-50 border border-accent-100 rounded-lg p-2.5"
                >
                  <div className="text-[10px] text-accent-800 leading-relaxed">
                    <span className="font-semibold">Suggested:</span> Schedule pastoral visit for urgent health request
                  </div>
                </motion.div>

                {/* At-Risk Alert */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-orange-50 border border-orange-100 rounded-lg p-2.5"
                >
                  <div className="text-[10px] text-orange-800 leading-relaxed">
                    <span className="font-semibold">At-risk:</span> 1 member hasn&apos;t attended in 6 weeks
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
