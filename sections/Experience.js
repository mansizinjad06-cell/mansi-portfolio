"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldAlert, Database, Layers, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const RESPONSIBILITIES = [
  {
    title: "Data Analysis & Inspection",
    desc: "Performing detailed analytical audits on incoming records to identify trends, inconsistencies, and key data attributes.",
  },
  {
    title: "Data Correction Protocols",
    desc: "Rectifying corrupted or erroneous entries, normalizing structural anomalies, and maintaining high database integrity.",
  },
  {
    title: "Dataset Preparation",
    desc: "Structuring, labeling, and transforming raw information into pre-processed datasets tailored for further pipeline execution.",
  },
  {
    title: "Data Processing Pipelines",
    desc: "Collaborating with operational workflows to ensure reliable throughput and accurate dataset transitions.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="03"
          label="EXPERIENCE"
          title="Professional Experience"
          subtitle="Real-world industry practice in data processing, analytics, and quality assurance."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Glowing Timeline Track */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-500 via-sky-400 to-indigo-600 shadow-[0_0_12px_rgba(6,182,212,0.6)]" />

          {/* Timeline Item 1: Pacific Infotech Pvt. Ltd. */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-12 sm:pl-20"
          >
            {/* Timeline Node Icon */}
            <div className="absolute left-1.5 sm:left-5.5 top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_#00f2fe]">
              <div className="w-2 h-2 rounded-full bg-cyan-300 animate-ping" />
            </div>

            {/* Experience Card */}
            <GlassCard
              glowColor="cyan"
              className="p-6 sm:p-8 rounded-3xl relative overflow-hidden"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-5 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-[11px] font-mono text-cyan-300 font-semibold">
                      CURRENT ROLE
                    </span>
                    <span className="text-xs font-mono text-slate-400">Full-Time Practice</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white">
                    Data Analyst
                  </h3>

                  <div className="text-base font-medium text-cyan-300 flex items-center gap-1.5 mt-0.5">
                    <span>Pacific Infotech Pvt. Ltd.</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>December 2025 – Present</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Pune City, Maharashtra</span>
                  </div>
                </div>
              </div>

              {/* Core Description Quote */}
              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                &ldquo;Working in Data Processing, where I handle data analysis, data correction, and prepare datasets for further processing.&rdquo;
              </div>

              {/* Responsibilities Breakdown */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Responsibilities & Operational Scope
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {RESPONSIBILITIES.map((item, idx) => (
                    <div
                      key={item.title}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="text-xs font-semibold text-white">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal pl-6">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applied Skills Tags */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-slate-500 mr-2">Applied Skills:</span>
                {["Data Analysis", "Data Correction", "Dataset Preparation", "Data Processing", "Quality Assurance"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-cyan-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
