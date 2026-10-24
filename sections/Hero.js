"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles, FileText, Send, Database } from "lucide-react";
import HeroVisual from "@/components/HeroVisual";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Gradients & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-600/15 via-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Status badge: Open to Internships */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono border border-emerald-500/30 bg-emerald-950/30 text-emerald-300 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium tracking-wide">Open to Internships & Opportunities</span>
          </motion.div>

          {/* Subheading Greeting with Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-3"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.3)] shrink-0">
              <Image
                src="/profile.jpg"
                alt="Mansi Zinjad"
                width={32}
                height={32}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
            <p className="text-base sm:text-lg font-mono text-cyan-400 tracking-wide">
              Hi, I&apos;m Mansi Zinjad.
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            Turning Data Into{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Meaningful Insights.
            </span>
          </motion.h1>

          {/* Supporting & Role Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-2 mb-8 max-w-2xl"
          >
            <p className="text-lg sm:text-xl font-medium text-slate-200">
              Data Analyst <span className="text-cyan-400">|</span> BSc Data Science & Big Data Analytics Student
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Data processing. Data analysis. Data correction. Insight-driven thinking.
            </p>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-600 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-slate-900/80 border border-slate-700 text-white font-semibold text-sm flex items-center justify-center gap-2.5 hover:bg-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 hover:scale-[1.02] active:scale-[0.98] transition-all backdrop-blur-md"
            >
              <span>Let&apos;s Connect</span>
              <Send className="w-4 h-4 text-cyan-400" />
            </a>
          </motion.div>

          {/* Highlight metrics pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex items-center gap-6 border-t border-slate-800/80 pt-6 text-xs text-slate-400 font-mono"
          >
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-cyan-400" />
              <span>Pacific Infotech Pvt. Ltd.</span>
            </div>
            <span className="text-slate-700">•</span>
            <div>
              <span>MIT-WPU Pune</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Futuristic Data Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 flex items-center justify-center lg:justify-end"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
