"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Layers,
  Eye,
  Github,
  ExternalLink,
  Database,
  Calendar,
  Clock,
  User,
  Stethoscope,
  Sparkles,
  Search,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const PROJECTS = [
  {
    id: "hospital-resource",
    title: "Hospital Resource Optimization Dashboard",
    category: "Data Analytics & Dashboarding",
    tagline: "Resource allocation & appointment trend analysis for healthcare workflows",
    description:
      "A data analytics project focused on analyzing hospital appointment and resource scheduling records to streamline patient intake, reduce bottleneck wait times, and present actionable operational insights through an interactive dashboard.",
    technologies: ["Python", "Pandas", "Streamlit", "Data Analysis"],
    githubRepo: "hospital-resource-optimization",
    datasetSchema: [
      { name: "appointment_id", type: "VARCHAR / INT", desc: "Unique visit transaction identifier" },
      { name: "patient_id", type: "INT", desc: "Unique patient identifier" },
      { name: "doctor_id", type: "INT", desc: "Consulting specialist ID" },
      { name: "appointment_date", type: "DATE", desc: "Scheduled consultation date" },
      { name: "appointment_time", type: "TIME", desc: "Slot timestamp for load analysis" },
      { name: "reason_for_visit", type: "VARCHAR", desc: "Clinical category & specialty routing" },
      { name: "status", type: "VARCHAR", desc: "Completed, Cancelled, or Rescheduled" },
    ],
    highlights: [
      "Analyzed multidimensional appointment datasets using Pandas dataframes",
      "Interactive Streamlit dashboard interface for real-time exploratory slicing",
      "Identification of peak appointment scheduling hours and department utilization",
      "Dataset correction and standardization across historical records",
    ],
    visualType: "dashboard",
  },
  {
    id: "food-object-detection",
    title: "Food Poisoning / Food Environment Object Detection",
    category: "Computer Vision & Object Detection",
    tagline: "Automated contaminant detection using deep learning computer vision",
    description:
      "An object detection project involving the detection of food contaminants and kitchen environment hazards such as lizards, mice, and cockroaches using computer vision to enhance food safety protocols and sanitation auditing.",
    technologies: ["YOLO", "Roboflow", "Python"],
    githubRepo: "food-environment-detection",
    datasetMetrics: {
      volume: "Approx. 460 images",
      classes: ["Lizard", "Mouse", "Cockroach"],
      pipeline: "Roboflow Annotation & Augmentation -> YOLO Object Model Training",
    },
    highlights: [
      "Curated, labeled, and augmented a custom dataset of ~460 food environment images",
      "Trained YOLO object detection bounding box architecture for high precision detection",
      "Implemented dataset preprocessing and bounding box validation via Roboflow",
      "Python inference scripts for bounding box overlay and contaminant classification",
    ],
    visualType: "computervision",
  },
];

export default function Projects() {
  const [selectedSchemaProject, setSelectedSchemaProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="04"
          label="PROJECTS"
          title="Featured Analytics & AI Projects"
          subtitle="Applied data science, dashboard engineering, and computer vision systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <GlassCard
                glowColor={index === 0 ? "cyan" : "purple"}
                className="h-full flex flex-col justify-between overflow-hidden p-6 sm:p-8"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      0{index + 1} // CASE STUDY
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-400 mb-4">
                    {project.tagline}
                  </p>

                  {/* Interactive Visual Graphic Preview */}
                  <div className="my-6 rounded-2xl bg-slate-950 border border-slate-800 p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

                    {project.visualType === "dashboard" ? (
                      /* Hospital Dashboard Visual Mockup */
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-cyan-400" />
                            <span className="text-xs font-mono font-semibold text-slate-200">
                              Streamlit Telemetry // Hospital Resource KPI
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                            LIVE METRICS
                          </span>
                        </div>

                        {/* Mini metric tiles */}
                        <div className="grid grid-cols-3 gap-2">
                          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                            <span className="text-[9px] font-mono text-slate-400 block">Total Records</span>
                            <span className="text-xs font-mono font-bold text-cyan-300">Appointments</span>
                          </div>
                          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                            <span className="text-[9px] font-mono text-slate-400 block">Status Filter</span>
                            <span className="text-xs font-mono font-bold text-sky-300">Completed/Open</span>
                          </div>
                          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                            <span className="text-[9px] font-mono text-slate-400 block">Specialty</span>
                            <span className="text-xs font-mono font-bold text-indigo-300">Doctor Schema</span>
                          </div>
                        </div>

                        {/* Mini Bar Chart Mockup */}
                        <div className="pt-2">
                          <div className="flex items-end gap-2 h-16 w-full px-2 pt-2 bg-slate-900/40 rounded-lg border border-slate-800/60">
                            <div className="h-[40%] flex-1 bg-cyan-500/40 rounded-t hover:bg-cyan-400 transition-colors" title="Morning" />
                            <div className="h-[75%] flex-1 bg-cyan-500/70 rounded-t hover:bg-cyan-400 transition-colors" title="Mid-day Peak" />
                            <div className="h-[95%] flex-1 bg-cyan-400 rounded-t hover:bg-cyan-300 transition-colors" title="Afternoon Peak" />
                            <div className="h-[60%] flex-1 bg-indigo-500/60 rounded-t hover:bg-indigo-400 transition-colors" title="Evening" />
                            <div className="h-[30%] flex-1 bg-indigo-500/30 rounded-t hover:bg-indigo-400 transition-colors" title="Night" />
                          </div>
                          <div className="flex justify-between text-[9px] font-mono text-slate-500 px-1 mt-1">
                            <span>08:00</span>
                            <span>11:00</span>
                            <span>14:00 (Peak)</span>
                            <span>17:00</span>
                            <span>20:00</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Object Detection CV Visual Mockup */
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                          <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4 text-purple-400" />
                            <span className="text-xs font-mono font-semibold text-slate-200">
                              YOLO Inference Engine // 460 Dataset Samples
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-purple-300 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-800/40">
                            ROBOFLOW CURATED
                          </span>
                        </div>

                        {/* Simulated Detection Viewport */}
                        <div className="relative h-28 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-center overflow-hidden">
                          {/* Grid backdrop */}
                          <div className="absolute inset-0 bg-cyber-grid opacity-30" />

                          {/* Bounding Box 1 */}
                          <div className="absolute left-6 top-3 w-28 h-20 border-2 border-purple-400/80 rounded bg-purple-500/10 flex flex-col justify-between p-1">
                            <span className="text-[9px] font-mono font-bold bg-purple-500 text-slate-950 px-1 rounded self-start">
                              Cockroach: 0.94
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 self-end" />
                          </div>

                          {/* Bounding Box 2 */}
                          <div className="absolute right-8 bottom-3 w-24 h-16 border-2 border-cyan-400/80 rounded bg-cyan-500/10 flex flex-col justify-between p-1">
                            <span className="text-[9px] font-mono font-bold bg-cyan-400 text-slate-950 px-1 rounded self-start">
                              Lizard: 0.91
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 self-end" />
                          </div>

                          <span className="text-[10px] font-mono text-slate-500 z-10">
                            [ CV Detection Grid Simulation ]
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
                          <span>Classes: Lizard • Mouse • Cockroach</span>
                          <span className="text-purple-300 font-semibold">~460 Images</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((point) => (
                      <div key={point} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-cyan-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  {project.datasetSchema ? (
                    <button
                      onClick={() => setSelectedSchemaProject(project)}
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 underline underline-offset-4"
                    >
                      <Database className="w-3.5 h-3.5" />
                      <span>View Dataset Schema ({project.datasetSchema.length} fields)</span>
                    </button>
                  ) : (
                    <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-purple-400" />
                      <span>Dataset: ~460 Augmented Images</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://github.com/search?q=${project.githubRepo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-500/40 flex items-center gap-1.5 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repo</span>
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Dataset Schema Modal for Hospital Resource */}
        <AnimatePresence>
          {selectedSchemaProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-2xl w-full rounded-3xl bg-slate-900 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl relative"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div>
                    <h4 className="text-lg font-display font-bold text-white">
                      Hospital Resource Dataset Schema
                    </h4>
                    <p className="text-xs font-mono text-cyan-400">
                      Standardized Table Structure & Data Types
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedSchemaProject(null)}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                  >
                    Close [ESC]
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400">
                        <th className="pb-3 font-semibold">Field Name</th>
                        <th className="pb-3 font-semibold">Data Type</th>
                        <th className="pb-3 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {selectedSchemaProject.datasetSchema.map((row) => (
                        <tr key={row.name} className="hover:bg-slate-800/30">
                          <td className="py-2.5 font-bold text-cyan-300">{row.name}</td>
                          <td className="py-2.5 text-slate-400">{row.type}</td>
                          <td className="py-2.5 text-slate-300">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 text-right">
                  <button
                    onClick={() => setSelectedSchemaProject(null)}
                    className="px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
