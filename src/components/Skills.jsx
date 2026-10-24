import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Wrench, BrainCircuit, Globe2, Boxes, Search, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Code2,
  Boxes,
  Database,
  Wrench,
  BrainCircuit,
  Globe2
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Collect all skills for filtering
  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({ ...skill, category: cat.category }))
  );

  const filteredSkills = allSkills.filter((s) => {
    const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.note.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Categorized technical stack and core competencies strictly derived from verified resume projects and coursework.
          </p>
        </div>

        {/* Search and Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`text-xs font-medium px-3.5 py-2 rounded-xl transition-all ${
                selectedCategory === 'All'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                  : 'glass-panel text-slate-300 hover:text-white border-white/10'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((c) => (
              <button
                key={c.category}
                onClick={() => setSelectedCategory(c.category)}
                className={`text-xs font-medium px-3.5 py-2 rounded-xl transition-all ${
                  selectedCategory === c.category
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                    : 'glass-panel text-slate-300 hover:text-white border-white/10'
                }`}
              >
                {c.category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search e.g. SQL, Python, React..."
              className="w-full pl-9 pr-3 py-2 rounded-xl glass-input text-xs placeholder:text-slate-500 focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Animated Interactive Pills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="group p-4 rounded-xl glass-card border border-white/10 hover:border-cyan-400/50 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-sora font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {skill.tag}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-cyan-400">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-3 leading-snug">
                  {skill.note}
                </p>

                {/* Animated proficiency bar */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden p-[0.5px]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No matching skills found for "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
}
