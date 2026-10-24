"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Binary,
  LineChart,
  Cpu,
  FileSpreadsheet,
  Database,
  Code2,
  Boxes,
  Eye,
  GitBranch,
  Layers,
  Terminal,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import DataPipeline from "@/components/DataPipeline";

const CORE_SKILLS = [
  {
    id: "manipulation",
    title: "Data Manipulation",
    subtitle: "Transformation & Structuring",
    description:
      "Transforming complex, raw tabular data into structured formats, filtering outliers, reshaping dataframes, and performing multi-condition slicing.",
    icon: Binary,
    glow: "cyan",
    practices: ["Schema alignment", "DataFrame transformations", "Matrix reshaping", "Type consistency"],
  },
  {
    id: "analysis",
    title: "Data Analysis",
    subtitle: "Pattern Discovery & Metrics",
    description:
      "Executing descriptive and exploratory data analytics to uncover core patterns, evaluate appointment trends, and summarize vital business metrics.",
    icon: LineChart,
    glow: "indigo",
    practices: ["Exploratory Data Analysis (EDA)", "Statistical metrics", "Trend evaluation", "Insight extraction"],
  },
  {
    id: "processing",
    title: "Data Processing",
    subtitle: "Pipeline & Data Correction",
    description:
      "Standardizing incoming data streams, performing systematic data correction, validating records, and prepping datasets for ML and visualization engines.",
    icon: Cpu,
    glow: "purple",
    practices: ["Data validation & cleaning", "Data correction protocols", "Dataset preparation", "Quality assurance"],
  },
];

const TOOLKIT = [
  {
    name: "Python",
    category: "Programming & Analysis",
    desc: "Primary language for data wrangling, algorithmic processing, and computer vision scripting.",
    icon: Code2,
    badge: "Practiced",
  },
  {
    name: "SQL",
    category: "Database Querying",
    desc: "Relational database querying, joins, filters, groupings, and data extraction.",
    icon: Database,
    badge: "Practiced",
  },
  {
    name: "Excel",
    category: "Spreadsheet Analytics",
    desc: "Data organization, pivot tables, quick auditing, formulas, and tabular correction.",
    icon: FileSpreadsheet,
    badge: "Practiced",
  },
  {
    name: "Pandas",
    category: "Data Manipulation",
    desc: "DataFrames manipulation, indexing, cleaning, handling nulls, and aggregations.",
    icon: Layers,
    badge: "Practiced",
  },
  {
    name: "NumPy",
    category: "Numerical Computing",
    desc: "Multi-dimensional array operations, mathematical computations, and data transformations.",
    icon: Binary,
    badge: "Practiced",
  },
  {
    name: "Streamlit",
    category: "Interactive Dashboards",
    desc: "Rapid development of intuitive, interactive analytics web applications and KPI dashboards.",
    icon: Terminal,
    badge: "Practiced",
  },
  {
    name: "YOLO",
    category: "Computer Vision",
    desc: "Object detection framework applied for detecting contaminants and food environment objects.",
    icon: Eye,
    badge: "Practiced",
  },
  {
    name: "Roboflow",
    category: "Dataset & Annotation",
    desc: "Image dataset curation, augmentation, bounding box annotation, and preprocessing.",
    icon: Boxes,
    badge: "Practiced",
  },
  {
    name: "GitHub",
    category: "Version Control",
    desc: "Repository management, code versioning, commit histories, and project collaboration.",
    icon: GitBranch,
    badge: "Practiced",
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "Programming & Analysis", "Data Manipulation", "Computer Vision", "Spreadsheet Analytics"];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="02"
          label="SKILLS & EXPERTISE"
          title="Analytical Capabilities & Technical Toolkit"
          subtitle="A focused overview of core analytical strengths, practiced technologies, and hands-on tools."
        />

        {/* 3 Core Futuristic Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CORE_SKILLS.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard
                  glowColor={skill.glow}
                  className="p-6 md:p-8 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 border border-slate-800 px-2 py-1 rounded">
                        0{index + 1} // DOMAIN
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mb-4">
                      {skill.subtitle}
                    </p>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      Focus Areas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.practices.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Data Pipeline Flow Visualizer */}
        <div className="mb-16">
          <DataPipeline />
        </div>

        {/* Technical Toolkit Grid */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-white">
                Technical Toolkit
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Technologies and tools practiced across analytical projects and production tasks.
              </p>
            </div>

            <div className="text-xs font-mono text-cyan-400/90 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800 self-start sm:self-auto">
              9 TOOLS & FRAMEWORKS
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TOOLKIT.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <GlassCard className="p-5 h-full flex flex-col justify-between group">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 text-cyan-400 flex items-center justify-center shrink-0 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                            {tool.name}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40 text-cyan-400">
                            {tool.badge}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-500 block mb-1.5">
                          {tool.category}
                        </span>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {tool.desc}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
