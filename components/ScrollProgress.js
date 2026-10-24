"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-slate-900/50 backdrop-blur-sm pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 origin-left shadow-[0_0_10px_rgba(6,182,212,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}
