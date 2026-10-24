"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Cpu, CheckCircle2, LineChart, Sparkles, ArrowRight, ArrowDown } from "lucide-react";

const PIPELINE_STEPS = [
  {
    id: "raw-data",
    step: "01",
    title: "Raw Data",
    icon: Database,
    color: "cyan",
    desc: "Ingesting heterogeneous datasets, CSVs, relational records, and unstructured inputs from disparate data sources.",
    tags: ["Data Extraction", "Schema Discovery", "Source Validation"],
  },
  {
    id: "processing",
    step: "02",
    title: "Data Processing",
    icon: Cpu,
    color: "sky",
    desc: "Parsing, formatting, restructuring, and type conversions to convert raw structures into computational readiness.",
    tags: ["Data Restructuring", "Type Casting", "Dataset Preparation"],
  },
  {
    id: "cleaning",
    step: "03",
    title: "Data Cleaning",
    icon: CheckCircle2,
    color: "indigo",
    desc: "Handling null/missing values, anomaly resolution, data correction, and duplicate elimination with high rigor.",
    tags: ["Data Correction", "Duplicate Filtering", "Quality Assurance"],
  },
  {
    id: "analysis",
    step: "04",
    title: "Data Analysis",
    icon: LineChart,
    color: "purple",
    desc: "Exploratory data analysis, grouping, aggregations, trend discovery, and statistical evaluations using Python & Pandas.",
    tags: ["Statistical Modeling", "Trend Analysis", "EDA"],
  },
  {
    id: "insights",
    step: "05",
    title: "Insights",
    icon: Sparkles,
    color: "emerald",
    desc: "Translating processed findings into actionable intelligence, dashboard visualizations, and strategic conclusions.",
    tags: ["Decision Support", "Visual Dashboards", "Actionable Metrics"],
  },
];

export default function DataPipeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full rounded-3xl bg-slate-950/70 border border-cyan-500/20 p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Background Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-white/5 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>INTERACTIVE WORKFLOW</span>
          </div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-white">
            End-to-End Data Pipeline Architecture
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            How I transform raw, messy datasets into structured, insight-driven decisions.
          </p>
        </div>

        <div className="text-xs font-mono text-cyan-400/80 bg-slate-900/80 px-3.5 py-1.5 rounded-lg border border-slate-800 self-start md:self-auto">
          STEP {PIPELINE_STEPS[activeStep].step} OF 05
        </div>
      </div>

      {/* Pipeline Navigation / Step Track */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        {PIPELINE_STEPS.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeStep === index;
          const isPast = activeStep > index;

          return (
            <button
              key={item.id}
              onClick={() => setActiveStep(index)}
              className={`relative text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                isActive
                  ? "bg-gradient-to-b from-cyan-950/50 to-slate-900/90 border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                  : isPast
                  ? "bg-slate-900/40 border-cyan-900/40 text-slate-300 hover:border-slate-700"
                  : "bg-slate-950/50 border-slate-800/60 text-slate-400 hover:border-slate-700"
              }`}
            >
              {/* Step indicator bar */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs font-mono font-bold ${
                    isActive ? "text-cyan-300" : isPast ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {item.step}
                </span>

                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
                      : "bg-slate-900 text-slate-500 border border-slate-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h4
                  className={`text-sm font-semibold transition-colors ${
                    isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                  }`}
                >
                  {item.title}
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                  <span>{isActive ? "Viewing Phase" : "Select stage"}</span>
                </div>
              </div>

              {/* Connected Arrow on Desktop */}
              {index < PIPELINE_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-600 pointer-events-none">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep Dive Detail Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950/80 border border-cyan-500/30 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 border border-cyan-400/30 text-xs font-mono text-cyan-300 font-semibold">
                PHASE {PIPELINE_STEPS[activeStep].step}
              </span>
              <h4 className="text-xl font-display font-bold text-white">
                {PIPELINE_STEPS[activeStep].title}
              </h4>
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-2">
              {PIPELINE_STEPS[activeStep].desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {PIPELINE_STEPS[activeStep].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800/80 border border-slate-700 text-slate-300"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick interactive navigation buttons */}
          <div className="flex items-center gap-2 self-end md:self-center shrink-0">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-all"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveStep((prev) => Math.min(PIPELINE_STEPS.length - 1, prev + 1))}
              disabled={activeStep === PIPELINE_STEPS.length - 1}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            >
              Next Phase →
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
