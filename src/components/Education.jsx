import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, TrendingUp, CheckCircle, Sparkles, BookOpen } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  const semesters = [
    { sem: 'Sem 1', cgpa: 7.95, percent: 79.5 },
    { sem: 'Sem 2', cgpa: 7.98, percent: 79.8 },
    { sem: 'Sem 3', cgpa: 8.27, percent: 82.7 },
    { sem: 'Sem 4', cgpa: 8.39, percent: 83.9, active: true },
  ];

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Verified academic track record from MIT WPU, Sarhad Junior College, and Vidya Niketan.
          </p>
        </div>

        {/* Dynamic Semester Growth Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 p-6 sm:p-8 rounded-2xl glass-card border border-purple-500/30 shadow-[0_0_30px_rgba(139,92,246,0.15)] relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300 mb-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>CONTINUOUS SEMESTER ADVANCEMENT</span>
              </div>
              <h3 className="font-sora text-xl sm:text-2xl font-bold text-white">
                MIT-WPU CGPA Progression: <span className="text-cyan-400">7.95 → 8.39</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
                Demonstrated unbroken academic growth across 4 consecutive semesters in Data Science & Big Data Analytics curriculum.
              </p>
            </div>

            {/* Visual Bar Tracker */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4 w-full lg:w-96">
              {semesters.map((s, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="text-[11px] font-mono text-slate-400 mb-1">{s.sem}</div>
                  <div className="w-full h-24 bg-white/5 rounded-xl p-1 flex flex-col justify-end relative overflow-hidden border border-white/10">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${s.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.2 }}
                      className={`w-full rounded-lg ${
                        s.active
                          ? 'bg-gradient-to-t from-purple-600 to-cyan-400 shadow-[0_0_15px_#06b6d4]'
                          : 'bg-gradient-to-t from-purple-800/60 to-purple-500/60'
                      }`}
                    />
                  </div>
                  <div className={`mt-2 font-sora font-bold text-xs ${s.active ? 'text-cyan-300' : 'text-slate-300'}`}>
                    {s.cgpa}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline Items */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-[#0a0a16] border-2 border-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.6)] group-hover:border-cyan-400 transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              </div>

              {/* Education Content Card with Luxury Glassmorphism & Hover Lift */}
              <div className="glass-card rounded-3xl p-7 sm:p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(6,182,212,0.2)] hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                      {item.institution}
                    </span>
                    <h3 className="font-sora text-lg sm:text-xl font-bold text-white mt-0.5">
                      {item.degree}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-sora font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.gradeType}: {item.grade}</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                  <span>{item.highlight}</span>
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Coursework & Focus Badges */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                  {item.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-slate-300"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
