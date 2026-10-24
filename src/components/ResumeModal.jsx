import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Sparkles, Mail, Phone, MapPin, ExternalLink, Award, BookOpen, Briefcase, Code } from 'lucide-react';
import { personalInfo, education, projects, skillCategories, awards } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-4xl bg-[#0d0e1b] rounded-2xl border border-white/20 shadow-2xl z-10 my-6 max-h-[92vh] flex flex-col overflow-hidden"
        >
          {/* Top Modal Controls bar */}
          <div className="p-4 px-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs font-mono text-slate-300">
                MANSI_ZINJAD_RESUME.pdf (Official Transcript Data)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 text-xs font-semibold border border-cyan-500/40 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Sheet */}
          <div className="overflow-y-auto p-6 sm:p-10 text-slate-200 font-inter print:p-0 print:bg-white print:text-black">
            
            {/* Header */}
            <div className="border-b border-white/10 pb-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="font-sora text-3xl font-extrabold text-white tracking-tight">
                    {personalInfo.name}
                  </h1>
                  <p className="text-cyan-400 font-mono text-xs mt-1">
                    B.Sc. Data Science and Big Data Analytics • MIT WPU Pune
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-300 space-y-1 sm:text-right">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-purple-400" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Education */}
            <div className="mb-6">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2 border-b border-white/10 pb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>EDUCATION</span>
              </h2>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-sm text-white">{edu.institution}</h3>
                      <p className="text-xs text-purple-300">{edu.degree}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{edu.highlight}</p>
                    </div>
                    <div className="text-xs font-mono text-slate-400 sm:text-right">
                      <div>{edu.period}</div>
                      <div className="text-cyan-300 font-semibold">{edu.gradeType}: {edu.grade}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Projects */}
            <div className="mb-6">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2 border-b border-white/10 pb-1">
                <Briefcase className="w-3.5 h-3.5" />
                <span>KEY PROJECTS</span>
              </h2>
              <div className="space-y-5">
                {projects.map((proj, i) => (
                  <div key={i}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-bold text-sm text-white">
                        {proj.title}
                      </h3>
                      <span className="text-xs font-mono text-purple-300">
                        {proj.subtitle}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-300 pl-4 list-disc">
                      {proj.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                    <div className="mt-2 text-[11px] font-mono text-slate-400">
                      <strong className="text-slate-300">Tech Stack:</strong> {proj.techStack.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Skills */}
            <div className="mb-6">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2 border-b border-white/10 pb-1">
                <Code className="w-3.5 h-3.5" />
                <span>SKILLS & PROFICIENCIES</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {skillCategories.map((cat, idx) => (
                  <div key={idx}>
                    <span className="font-semibold text-slate-200">{cat.category}: </span>
                    <span className="text-slate-400 font-mono">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Awards & Achievements */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2 border-b border-white/10 pb-1">
                <Award className="w-3.5 h-3.5" />
                <span>AWARDS & ACHIEVEMENTS</span>
              </h2>
              <ul className="space-y-2 text-xs text-slate-300 pl-4 list-disc">
                {awards.map((aw, i) => (
                  <li key={i}>
                    <strong className="text-white">{aw.title}: </strong>
                    <span>{aw.description}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Modal Bottom Actions */}
          <div className="p-4 px-6 border-t border-white/10 flex items-center justify-between bg-white/[0.02]">
            <span className="text-xs font-mono text-slate-400">
              Mansi Zinjad • Pune, India • +91 8329789906
            </span>
            <button
              onClick={handlePrint}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-xs shadow-md hover:scale-105 transition-transform"
            >
              Print / Save PDF
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
