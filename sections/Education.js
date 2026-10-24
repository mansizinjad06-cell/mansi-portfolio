"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, MapPin, CheckCircle2, Binary, Database, Layers } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const HIGHLIGHTS = [
  {
    title: "Data Science & Big Data Fundamentals",
    desc: "Rigorous theoretical and practical training in big data structures, statistical analysis, and algorithmic foundations.",
  },
  {
    title: "Applied Computer Vision & AI",
    desc: "Hands-on projects covering object detection, image preprocessing, and deep learning framework integration.",
  },
  {
    title: "Database Systems & Data Pipelines",
    desc: "Relational data structures, SQL querying, data cleaning pipelines, and analytical dashboarding.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="06"
          label="EDUCATION"
          title="Academic Foundation"
          subtitle="Specialized undergraduate education in Data Science and Big Data Analytics."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Glowing Timeline Track */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-indigo-500 via-sky-400 to-cyan-500 shadow-[0_0_12px_rgba(99,102,241,0.6)]" />

          {/* Education Timeline Node */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-12 sm:pl-20"
          >
            {/* Timeline Node Icon */}
            <div className="absolute left-1.5 sm:left-5.5 top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-400 flex items-center justify-center shadow-[0_0_15px_#818cf8]">
              <div className="w-2 h-2 rounded-full bg-indigo-300 animate-pulse" />
            </div>

            <GlassCard
              glowColor="indigo"
              className="p-6 sm:p-8 rounded-3xl relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-5 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-[11px] font-mono text-indigo-300 font-semibold">
                      DEGREE PROGRAM
                    </span>
                    <span className="text-xs font-mono text-slate-400">Undergraduate</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white">
                    BSc Data Science & Big Data Analytics
                  </h3>

                  <div className="text-base font-medium text-cyan-300 flex items-center gap-1.5 mt-0.5">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span>MIT World Peace University (MIT-WPU)</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Pune, Maharashtra, India</span>
                  </div>
                  <span className="text-slate-500">Active Student</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Pursuing an in-depth curriculum focusing on big data architecture, mathematical and statistical analysis, computational algorithms, and modern data processing methodologies.
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Academic Focus & Core Areas
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {HIGHLIGHTS.map((item) => (
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
                      <p className="text-[11px] text-slate-400 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subject Badges */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-slate-500 mr-2">Key Disciplines:</span>
                {[
                  "Data Science",
                  "Big Data Analytics",
                  "Python Programming",
                  "Database Management",
                  "Statistical Methods",
                  "Data Preprocessing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
