import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05050a]"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated glowing backdrop circles */}
        <div className="absolute w-72 h-72 rounded-full bg-purple-600/20 blur-[90px] animate-pulse pointer-events-none" />
        <div className="absolute w-56 h-56 rounded-full bg-cyan-500/20 blur-[70px] animate-pulse-slow pointer-events-none" />

        {/* Monogram emblem */}
        <div className="relative w-28 h-28 rounded-2xl p-[2px] bg-gradient-to-tr from-purple-500 via-violet-400 to-cyan-400 shadow-[0_0_40px_rgba(139,92,246,0.35)] mb-8">
          <div className="w-full h-full bg-[#090915] rounded-2xl flex items-center justify-center relative overflow-hidden">
            {/* Subtle inner grid scan line */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
              animate={{ y: [-100, 100] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <span className="font-sora font-extrabold text-4xl bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-300 bg-clip-text text-transparent tracking-tighter">
              MZ
            </span>
          </div>
        </div>

        {/* Name and subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-sora text-2xl font-bold tracking-wide text-white">
            MANSI ZINJAD
          </h2>
          <p className="text-xs tracking-[0.25em] text-cyan-400 uppercase mt-1 font-mono">
            Data Science & AI Systems
          </p>
        </motion.div>

        {/* Progress Bar & Percentage */}
        <div className="w-56 mt-8">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
            <span>INITIALIZING</span>
            <span className="text-cyan-400 font-semibold">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-[1px]">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-violet-400 to-cyan-400 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
