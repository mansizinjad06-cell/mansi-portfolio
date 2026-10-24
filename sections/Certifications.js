"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle, Sparkles, Building2, Terminal } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const CERTIFICATIONS = [
  {
    id: "deloitte-analytics",
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte",
    type: "Industry Job Simulation",
    focus: "Enterprise Data Analytics & Business Intelligence",
    description:
      "Completed practical tasks simulating real-world client analytics engagements, including business problem decomposition, data interpretation, and insight communication.",
    skills: ["Data Analytics", "Business Intelligence", "Problem Structuring", "Client Reporting"],
    icon: Building2,
    badge: "Verified Simulation",
    accent: "cyan",
  },
  {
    id: "yuva-ai",
    title: "YUVA AI for ALL",
    issuer: "YUVA / National AI Initiative",
    type: "AI & Data Literacy Program",
    focus: "Artificial Intelligence Foundations & Ethical AI",
    description:
      "Comprehensive learning track on artificial intelligence fundamentals, computer vision concepts, algorithmic logic, and data ethics across modern applications.",
    skills: ["AI Foundations", "Computer Vision Concepts", "Data Literacy", "Applied AI"],
    icon: Sparkles,
    badge: "Certified Program",
    accent: "purple",
  },
  {
    id: "tata-genai",
    title: "Tata — GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata Group",
    type: "Advanced Job Simulation",
    focus: "Generative AI & Data Analytics Workflow Integration",
    description:
      "Simulated hands-on enterprise analytics workflows leveraging generative AI tools to accelerate data exploration, pattern synthesis, and automated business insights.",
    skills: ["GenAI in Analytics", "Data Synthesis", "Automated Insights", "Exploratory Analytics"],
    icon: Terminal,
    badge: "Verified Simulation",
    accent: "indigo",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="05"
          label="CERTIFICATIONS & LEARNING"
          title="Certifications & Industry Simulations"
          subtitle="Practical job simulations and specialized programs validating real-world data and AI skills."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard
                  glowColor={cert.accent}
                  className="p-6 sm:p-8 h-full flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Credential Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 text-cyan-400 flex items-center justify-center group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-300">
                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{cert.badge}</span>
                      </div>
                    </div>

                    {/* Organization / Issuer */}
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      {cert.issuer}
                    </span>

                    {/* Certification Title */}
                    <h3 className="text-xl font-display font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-xs font-mono text-cyan-400/90 mb-4">
                      {cert.focus}
                    </p>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills tags footer */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                      Competencies Covered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
