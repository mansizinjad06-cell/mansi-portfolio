import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundMesh() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#05050b]" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Primary Purple Glow Orb */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-purple-700/15 blur-[130px]"
      />

      {/* Secondary Cyan Glow Orb */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 80, -50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 -right-32 w-[550px] h-[550px] rounded-full bg-cyan-600/12 blur-[140px]"
      />

      {/* Tertiary Deep Violet Orb */}
      <motion.div
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -50, 60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-40 left-1/4 w-[650px] h-[650px] rounded-full bg-indigo-700/15 blur-[150px]"
      />

      {/* Center Subtle Highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/5 blur-[180px] rounded-full" />
    </div>
  );
}
