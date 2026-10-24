"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, CheckCircle, Database, FileSpreadsheet, Sparkles, Binary } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const CORE_PILLARS = [
  {
    title: "Data Processing",
    desc: "Transforming raw, unstructured records into organized, structured schemas ready for downstream analytics.",
    icon: Database,
  },
  {
    title: "Data Analysis",
    desc: "Extracting meaningful insights, identifying critical patterns, and evaluating data trends to support decision-making.",
    icon: Sparkles,
  },
  {
    title: "Data Correction",
    desc: "Auditing dataset anomalies, rectifying schema inconsistencies, and ensuring maximum precision and integrity.",
    icon: CheckCircle,
  },
  {
    title: "Dataset Preparation",
    desc: "Structuring clean, optimized training and analytical sets for machine learning models and business dashboards.",
    icon: Binary,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="01"
          label="ABOUT ME"
          title="Bridging Academic Rigor & Practical Data Analytics."
          subtitle="Specializing in dataset preparation, data correction, and deep-dive analytics."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl"
            >
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-4">
                Analytical Mindset with a Passion for Data Precision
              </h3>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
                I&apos;m a Data Science and Big Data Analytics student at{" "}
                <span className="text-cyan-300 font-medium">
                  MIT World Peace University (MIT-WPU)
                </span>{" "}
                and currently working as a Data Analyst at{" "}
                <span className="text-cyan-300 font-medium">Pacific Infotech Pvt. Ltd.</span>
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                My daily work centers on rigorous data processing, data analysis, data correction, and meticulous dataset preparation. I thrive on diving deep into messy, complex datasets and refining them into dependable, structured sources that power intelligent dashboards and predictive machine learning models.
              </p>
            </motion.div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <GlassCard className="p-5 h-full flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-display font-bold text-white text-base mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Futuristic Data Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-28 rounded-3xl bg-slate-950/80 border border-cyan-500/30 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl shadow-cyan-950/30 relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/20 to-transparent pointer-events-none" />
              <div className="absolute top-3 right-3 text-[10px] font-mono text-cyan-400/80 border border-cyan-500/30 px-2 py-0.5 rounded">
                PROFILE_ID // 2026
              </div>

              {/* Identity Header with Real Photo */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 p-[2px] shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] overflow-hidden relative">
                      <Image
                        src="/profile.jpg"
                        alt="Mansi Zinjad"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                        priority
                      />
                    </div>
                  </div>
                  {/* Status Indicator Beacon */}
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white tracking-wide">
                    MANSI ZINJAD
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">Data Analyst</p>
                  <span className="inline-block mt-1 text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    MIT-WPU • Pacific Infotech
                  </span>
                </div>
              </div>

              {/* Key Bio Info List */}
              <div className="space-y-3 pb-6 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Briefcase className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Pacific Infotech Pvt. Ltd.</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>MIT World Peace University</span>
                </div>
              </div>

              {/* Animated Competency Cards */}
              <div className="mt-6 space-y-3">
                <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                  Core Analytics Domains
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-xs font-semibold text-white">Data Analysis</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/50">
                    Active Practice
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    <span className="text-xs font-semibold text-white">Data Processing</span>
                  </div>
                  <span className="text-[10px] font-mono text-sky-300 bg-sky-950/40 px-2 py-0.5 rounded border border-sky-800/50">
                    Production Role
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span className="text-xs font-semibold text-white">Data Manipulation</span>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-800/50">
                    Core Skill
                  </span>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Current Status:</span>
                <span className="text-emerald-400 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  Open to Opportunities
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
