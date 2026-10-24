import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Database, Zap, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl glass-panel rounded-2xl border border-white/15 p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-cyan-300 border border-purple-500/30 mb-2">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.period}</span>
              </div>
              <h2 className="font-sora text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h2>
              <p className="text-sm text-purple-300 font-medium mt-1">
                {project.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="font-sora text-xl font-bold text-cyan-300">
                  {m.value}
                </div>
                <div className="text-xs font-medium text-slate-200 mt-0.5">
                  {m.label}
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  {m.note}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <div>
              <h4 className="font-sora font-semibold text-white text-base mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Executive Summary & Impact</span>
              </h4>
              <p>{project.description}</p>
            </div>

            <div>
              <h4 className="font-sora font-semibold text-white text-base mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Core Engineering Highlights</span>
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Breakdown */}
            <div>
              <h4 className="font-sora font-semibold text-white text-base mb-2.5 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Technologies & Tools Employed</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-500/10 border border-purple-500/30 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-400 font-mono">
              Role: <strong className="text-white">{project.role}</strong>
            </span>
            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-xs shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-white text-xs font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
