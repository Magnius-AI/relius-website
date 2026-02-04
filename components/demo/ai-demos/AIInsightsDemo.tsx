"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CYCLE_DURATION = 7500;

const recommendations = [
  {
    emoji: "\ud83d\udcc8",
    title: "High Attendance Expected",
    detail: "3 events predicted higher than expected",
    confidence: "85%",
    color: "bg-green-50 border-green-100",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    emoji: "\ud83d\udc65",
    title: "Volunteer Shortage Alert",
    detail: "2 events need more volunteers",
    confidence: "95%",
    color: "bg-orange-50 border-orange-100",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    emoji: "\ud83d\udcc5",
    title: "Optimal Scheduling",
    detail: "Sun 10 AM & Wed 7 PM best attendance",
    confidence: "78%",
    color: "bg-blue-50 border-blue-100",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    emoji: "\ud83d\udca1",
    title: "Social Media Boost",
    detail: "2-week promos see 40% higher signups",
    confidence: "88%",
    color: "bg-yellow-50 border-yellow-100",
    badgeColor: "bg-yellow-100 text-yellow-700",
  },
];

const chartPoints = [40, 48, 44, 56, 62, 70];

export function AIInsightsDemo() {
  const [phase, setPhase] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  const resetCycle = useCallback(() => {
    setPhase(0);
    setCycleKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 3500),
      setTimeout(() => setPhase(4), 5000),
      setTimeout(() => resetCycle(), CYCLE_DURATION),
    ];
    return () => timers.forEach(clearTimeout);
  }, [cycleKey, resetCycle]);

  // Build SVG path for chart
  const chartWidth = 180;
  const chartHeight = 60;
  const maxVal = Math.max(...chartPoints);
  const minVal = Math.min(...chartPoints);
  const points = chartPoints.map((v, i) => ({
    x: (i / (chartPoints.length - 1)) * chartWidth,
    y: chartHeight - ((v - minVal) / (maxVal - minVal)) * (chartHeight - 10) - 5,
  }));
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaD = `${pathD} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`;

  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white w-full h-[420px] flex flex-col">
      <div className="px-4 pt-3.5 pb-1.5">
        <div className="text-xs font-semibold text-slate-900">AI Insights &amp; Predictions</div>
      </div>

      {/* 2x2 Recommendation Cards */}
      <div className="px-4 pb-3">
        <div className="grid grid-cols-2 gap-2">
          {recommendations.map((rec, i) => (
            <AnimatePresence key={rec.title}>
              {phase >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.25 }}
                  className={`${rec.color} border rounded-lg p-2.5`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <div className="text-[11px] font-semibold text-slate-800 flex items-center gap-1">
                      <span>{rec.emoji}</span>
                      <span className="leading-tight">{rec.title}</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-500 leading-relaxed mb-1.5">{rec.detail}</div>
                  <span className={`text-[9px] font-medium px-2 py-0.5 rounded-full ${rec.badgeColor}`}>
                    {rec.confidence} confidence
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>

      {/* Predictions Chart */}
      <AnimatePresence>
        {phase >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="px-4 pb-3"
          >
            <div className="text-[11px] font-semibold text-slate-600 mb-1.5">Attendance Predictions</div>
            <div className="bg-slate-50 rounded-lg p-3">
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-[60px]">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <motion.path
                  d={areaD}
                  fill="url(#chartGradient)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.path
                  d={pathD}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                {points.map((p, i) => (
                  <motion.circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r={3}
                    fill="white"
                    stroke="#3b82f6"
                    strokeWidth={1.5}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.2 }}
                  />
                ))}
              </svg>
              <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Actions */}
      <AnimatePresence>
        {phase >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="px-4 pb-3.5 mt-auto"
          >
            <div className="text-[11px] font-semibold text-slate-600 mb-1.5">Quick Actions</div>
            <motion.div
              className="bg-gradient-to-r from-accent-500 to-accent-600 text-white text-[11px] font-medium rounded-lg py-2 px-4 text-center relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <span className="relative">&#10024; Generate Event Description</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
