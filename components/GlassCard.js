"use client";

import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  glowColor = "cyan",
  onClick,
  ...props
}) {
  const glowStyles = {
    cyan: "hover:border-cyan-500/40 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.25)]",
    indigo: "hover:border-indigo-500/40 hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.25)]",
    purple: "hover:border-purple-500/40 hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.25)]",
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.25 } } : {}}
      onClick={onClick}
      className={`relative rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 ${
        hoverEffect ? glowStyles[glowColor] || glowStyles.cyan : ""
      } ${className}`}
      {...props}
    >
      {/* Subtle top inner highlight edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none rounded-t-2xl" />
      {children}
    </motion.div>
  );
}
