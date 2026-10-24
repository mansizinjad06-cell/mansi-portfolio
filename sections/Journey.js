"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles, ArrowUpRight, TrendingUp, CheckCircle, Database, LineChart, Code2, Layers, Cpu, Binary } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const EXPLORING_TOPICS = [
  {
    title: "Data Analytics",
    desc: "Unlocking patterns and correlations to inform strategic business intelligence.",
    icon: LineChart,
    glow: "cyan",
  },
  {
    title: "Data Science",
    desc: "Exploring predictive formulations, modeling concepts, and statistical rigor.",
    icon: Binary,
    glow: "indigo",
  },
  {
    title: "Business Intelligence",
    desc: "Designing analytical metrics and data storytelling frameworks.",
    icon: TrendingUp,
    glow: "purple",
  },
  {
    title: "Data Processing",
    desc: "Advancing pipeline automation, validation rules, and schema harmonization.",
    icon: Cpu,
    glow: "sky",
  },
  {
    title: "Python",
    desc: "Deepening algorithmic efficiency, data wrangling pipelines, and scripting.",
    icon: Code2,
    glow: "cyan",
  },
  {
    title: "SQL",
    desc: "Optimizing relational queries, multi-table joins, and aggregate window logic.",
    icon: Database,
    glow: "indigo",
  },
  {
    title: "Data Visualization",
    desc: "Crafting intuitive visual representations for complex multidimensional metrics.",
    icon: Layers,
    glow: "purple",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="07"
          label="CURRENT JOURNEY"
          title="Currently Exploring"
          subtitle="Continuous learning, emerging data horizons, and active areas of exploration."
        />

        {/* Prominent Open to Internships Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-cyan-950/30 to-slate-900/60 border border-emerald-500/40 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span className="text-xs font-mono font-bold tracking-wider text-emerald-300 uppercase">
                  CAREER STATUS // ACTIVELY SEEKING
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Open to Internships & Data-Focused Roles
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Ready to contribute hands-on data processing, analysis, and pipeline skills to forward-thinking analytics teams and organizations.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3.5 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all shrink-0"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Animated Exploring Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EXPLORING_TOPICS.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <GlassCard
                  glowColor={topic.glow}
                  className="p-5 h-full flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 text-cyan-400 flex items-center justify-center mb-3.5 group-hover:border-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h4 className="font-display font-bold text-white text-base mb-1.5 group-hover:text-cyan-300 transition-colors">
                      {topic.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {topic.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-cyan-400/80">
                    <span>STATUS</span>
                    <span>ACTIVE FOCUS</span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
