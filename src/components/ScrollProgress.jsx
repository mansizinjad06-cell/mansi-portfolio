import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-white/5">
      <motion.div
        className="h-full bg-gradient-to-r from-purple-500 via-violet-400 to-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
