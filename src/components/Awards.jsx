import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, TrendingUp, Flame, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { awards } from '../data/portfolioData';

const iconComponents = {
  TrendingUp,
  Award,
  Trophy,
  Flame,
};

export default function Awards() {
  return (
    <section id="awards" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & DISTINCTIONS</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Awards & <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Recognitions celebrating continuous academic rise, creative arts merit, and athletic championships.
          </p>
        </div>

        {/* Badge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => {
            const Icon = iconComponents[award.icon] || Award;
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 sm:p-7 rounded-2xl glass-card border border-white/10 hover:border-purple-500/40 transition-all duration-300 overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div
                  className={`absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[70px] bg-gradient-to-br ${award.gradient} opacity-50 pointer-events-none group-hover:opacity-80 transition-opacity`}
                />

                <div className="flex items-start gap-4">
                  {/* Icon Emblem */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600/30 to-cyan-400/30 border border-white/15 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    {/* Top Meta Badges */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold uppercase">
                        {award.type}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {award.date}
                      </span>
                    </div>

                    <h3 className="font-sora text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {award.title}
                    </h3>

                    <p className="text-xs font-mono text-purple-300 mt-0.5 mb-2.5">
                      {award.issuer}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {award.description}
                    </p>

                    {/* Metric Highlight Chip */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-cyan-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{award.metrics}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
