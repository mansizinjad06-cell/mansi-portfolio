"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  number = "01",
  label = "SECTION",
  title,
  subtitle,
  centered = false,
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : "text-left"}`}>
      {/* Number and Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 mb-3 backdrop-blur-sm ${
          centered ? "mx-auto" : ""
        }`}
      >
        <span className="text-cyan-400 font-semibold">{number}</span>
        <span className="text-slate-500">—</span>
        <span className="uppercase">{label}</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white"
      >
        {title}
      </motion.h2>

      {/* Subtitle if provided */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
