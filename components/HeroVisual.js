"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Database, Activity, Cpu, Layers, GitBranch, ShieldCheck, Zap } from "lucide-react";

export default function HeroVisual() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 35;
      const y = (e.clientY - innerHeight / 2) / 35;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full max-w-[580px] aspect-square flex items-center justify-center select-none">
      {/* Background glow discs */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/10 to-purple-500/20 rounded-full blur-3xl opacity-60 animate-pulse-slow pointer-events-none" />

      {/* Outer Orbit Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-dashed border-cyan-500/20 pointer-events-none"
      />

      {/* Middle Orbit Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute inset-16 rounded-full border border-cyan-500/15 pointer-events-none"
      />

      {/* Main Interactive Matrix Panel */}
      <motion.div
        animate={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="relative z-10 w-[88%] h-[88%] rounded-3xl bg-slate-950/80 border border-cyan-500/30 backdrop-blur-2xl p-6 flex flex-col justify-between shadow-[0_0_50px_-10px_rgba(6,182,212,0.25)] overflow-hidden"
      >
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {/* Panel Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping inline-block" />
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300">
              DATA_PIPELINE.ENGINE // ACTIVE
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">v2.4_ONLINE</span>
        </div>

        {/* Center Node Topology Visualization */}
        <div className="relative z-10 my-auto py-2 flex items-center justify-center">
          <svg className="w-full h-44 overflow-visible" viewBox="0 0 400 180">
            {/* Connection Lines */}
            <line x1="60" y1="90" x2="150" y2="40" stroke="rgba(34, 211, 238, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="60" y1="90" x2="150" y2="140" stroke="rgba(34, 211, 238, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="150" y1="40" x2="250" y2="90" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2" />
            <line x1="150" y1="140" x2="250" y2="90" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2" />
            <line x1="250" y1="90" x2="340" y2="90" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="2.5" />

            {/* Pulsing Data Packets on Paths */}
            <circle cx="105" cy="65" r="3" fill="#22d3ee" className="animate-ping" />
            <circle cx="200" cy="115" r="3" fill="#818cf8" className="animate-ping" />
            <circle cx="295" cy="90" r="4" fill="#a855f7" />

            {/* Nodes */}
            {/* Node 1: Input / Raw Data */}
            <g transform="translate(60, 90)">
              <circle r="22" fill="#0b1329" stroke="#22d3ee" strokeWidth="2" />
              <circle r="8" fill="#22d3ee" />
            </g>

            {/* Node 2: Processing */}
            <g transform="translate(150, 40)">
              <circle r="20" fill="#0b1329" stroke="#38bdf8" strokeWidth="2" />
              <circle r="7" fill="#38bdf8" />
            </g>

            {/* Node 3: Cleaning */}
            <g transform="translate(150, 140)">
              <circle r="20" fill="#0b1329" stroke="#6366f1" strokeWidth="2" />
              <circle r="7" fill="#6366f1" />
            </g>

            {/* Node 4: Analysis Engine */}
            <g transform="translate(250, 90)">
              <circle r="24" fill="#0b1329" stroke="#818cf8" strokeWidth="2" />
              <circle r="9" fill="#818cf8" />
            </g>

            {/* Node 5: Insights Hub */}
            <g transform="translate(340, 90)">
              <circle r="26" fill="#0f172a" stroke="#c084fc" strokeWidth="2.5" />
              <circle r="11" fill="#c084fc" />
            </g>
          </svg>
        </div>

        {/* Bottom Metrics HUD */}
        <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-white/5">
          <div className="p-2 rounded-xl bg-slate-900/60 border border-white/5">
            <span className="text-[9px] font-mono text-slate-400 block uppercase">Data Cleanse</span>
            <span className="text-xs font-mono font-bold text-cyan-300">100% Validated</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-900/60 border border-white/5">
            <span className="text-[9px] font-mono text-slate-400 block uppercase">Accuracy</span>
            <span className="text-xs font-mono font-bold text-indigo-300">High Precision</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-900/60 border border-white/5">
            <span className="text-[9px] font-mono text-slate-400 block uppercase">Stream</span>
            <span className="text-xs font-mono font-bold text-emerald-300">Optimized</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1: Processing Status */}
      <motion.div
        animate={{
          x: mousePos.x * -1.2,
          y: mousePos.y * -1.2,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="absolute -top-4 -right-4 z-20 px-3.5 py-2.5 rounded-2xl bg-slate-900/90 border border-cyan-400/30 backdrop-blur-xl shadow-xl shadow-cyan-950/40 flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
          <Activity className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[10px] font-mono text-slate-400 block">Status</span>
          <span className="text-xs font-semibold text-white">Dataset Preparation</span>
        </div>
      </motion.div>

      {/* Floating Card 2: Analytics Framework */}
      <motion.div
        animate={{
          x: mousePos.x * 1.4,
          y: mousePos.y * 1.4,
        }}
        transition={{ type: "spring", stiffness: 110, damping: 18 }}
        className="absolute -bottom-4 -left-4 z-20 px-3.5 py-2.5 rounded-2xl bg-slate-900/90 border border-indigo-400/30 backdrop-blur-xl shadow-xl shadow-indigo-950/40 flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
          <Database className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[10px] font-mono text-slate-400 block">Analytics Core</span>
          <span className="text-xs font-semibold text-white">Python • Pandas • SQL</span>
        </div>
      </motion.div>
    </div>
  );
}
