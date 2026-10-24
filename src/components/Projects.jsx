import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Database, Cpu, Layers, Play, CheckCircle2, Terminal, Search, ArrowUpRight, Sparkles, Zap, Activity } from 'lucide-react';
import { projects } from '../data/portfolioData';
import TiltCard from './TiltCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Interactive SQL Simulator state (Project 1)
  const [sqlRunning, setSqlRunning] = useState(false);
  const [sqlExecuted, setSqlExecuted] = useState(true);

  // Interactive Vector AI Simulator state (Project 2)
  const [vectorQuery, setVectorQuery] = useState('Quarterly ML performance and metrics');
  const [vectorCalculating, setVectorCalculating] = useState(false);
  const [similarityScore, setSimilarityScore] = useState(0.948);

  const categories = ['All', 'Data Engineering & Analytics', 'Full-Stack AI & Web'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const handleRunSQL = () => {
    setSqlRunning(true);
    setTimeout(() => {
      setSqlRunning(false);
      setSqlExecuted(true);
    }, 700);
  };

  const handleTestVector = (promptText) => {
    setVectorQuery(promptText);
    setVectorCalculating(true);
    setTimeout(() => {
      setVectorCalculating(false);
      setSimilarityScore((0.92 + Math.random() * 0.06).toFixed(3));
    }, 600);
  };

  return (
    <section id="projects" className="py-28 relative z-10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-purple-700/10 blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[450px] bg-cyan-600/10 blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-3.5 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MAIN HIGHLIGHTS • PRODUCTION SYSTEMS 2026</span>
            </div>
            <h2 className="font-sora text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Featured <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">Engineering</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-base leading-relaxed">
              Live interactive demonstrations of production SQL pipelines, vector embeddings, and full-stack software architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.6)] scale-105'
                    : 'glass-panel text-slate-300 hover:text-white border-white/10 hover:border-white/25'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Card 1: Job Market Intelligence & SQL Gap Analysis */}
          {(activeFilter === 'All' || activeFilter === 'Data Engineering & Analytics') && (
            <TiltCard glowColor="rgba(168, 85, 247, 0.45)" className="h-full">
              <div className="glass-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between h-full border border-white/15 relative overflow-hidden group">
                
                {/* Conic glowing border accent */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-600/20 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />

                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-semibold">
                      Data Engineering & SQL Analytics
                    </span>
                    <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                      2026 • Self Project
                    </span>
                  </div>

                  <h3 className="font-sora text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    Job Market Intelligence & Skill Gap Analysis
                  </h3>

                  <p className="text-xs font-mono text-slate-400 mt-1 mb-5">
                    Lead Database Architect • <span className="text-slate-300">MySQL, Python, Power BI, Streamlit</span>
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    Designed 5 normalized relational tables in MySQL managing 1,000+ job postings and interview funnels. Authored 20+ SQL queries utilizing recursive CTEs, window functions, and multi-table JOINs, slashing query execution latency by 35%.
                  </p>

                  {/* 10x Feature: Interactive Live SQL Query Simulator */}
                  <div className="rounded-2xl bg-[#070814] border border-white/10 p-4 mb-6 shadow-inner">
                    <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-purple-400" />
                        <span className="text-slate-300 font-semibold">mysql_optimizer_engine.sql</span>
                      </div>
                      <button
                        onClick={handleRunSQL}
                        disabled={sqlRunning}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-[11px] shadow hover:scale-105 transition-transform"
                      >
                        {sqlRunning ? (
                          <Activity className="w-3 h-3 animate-spin" />
                        ) : (
                          <Play className="w-3 h-3 fill-current" />
                        )}
                        <span>{sqlRunning ? 'Executing...' : 'Run Query'}</span>
                      </button>
                    </div>

                    {/* Simulated SQL Terminal Output */}
                    <div className="text-[11px] font-mono space-y-1.5">
                      <div className="text-purple-300">
                        <span className="text-cyan-400">WITH</span> TopDemandedSkills <span className="text-cyan-400">AS</span> (SELECT skill, COUNT(*) FROM job_listings GROUP BY 1)
                      </div>
                      <div className="text-slate-400 flex items-center justify-between pt-1">
                        <span>Execution Status:</span>
                        <span className="text-emerald-400 font-semibold">✓ 1,024 Records Scanned</span>
                      </div>
                      <div className="text-slate-400 flex items-center justify-between">
                        <span>Query Latency:</span>
                        <span className="text-cyan-300 font-bold">92ms (-35% optimized via CTE & Index)</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-3.5 px-3 bg-white/[0.02] border border-white/10 rounded-xl mb-6">
                    <div>
                      <div className="font-sora text-lg font-black text-cyan-300">+35%</div>
                      <div className="text-[10px] text-slate-300 font-medium">Query Speedup</div>
                    </div>
                    <div>
                      <div className="font-sora text-lg font-black text-purple-300">1,000+</div>
                      <div className="text-[10px] text-slate-300 font-medium">Job Records</div>
                    </div>
                    <div>
                      <div className="font-sora text-lg font-black text-pink-300">3</div>
                      <div className="text-[10px] text-slate-300 font-medium">BI Dashboards</div>
                    </div>
                    <div>
                      <div className="font-sora text-lg font-black text-indigo-300">500+</div>
                      <div className="text-[10px] text-slate-300 font-medium">Listings Mapped</div>
                    </div>
                  </div>

                </div>

                {/* Card Bottom: Tech Stack & CTAs */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {['MySQL', 'SQL (CTEs & Joins)', 'Python', 'Pandas', 'Power BI', 'Streamlit', 'Jupyter'].map((t, idx) => (
                      <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(projects[0])}
                      className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl glass-panel hover:bg-white/15 text-white transition-colors border border-white/15"
                    >
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Schema & Architecture</span>
                    </button>

                    <a
                      href="https://github.com/mansi-zinjad"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all hover:scale-105"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                </div>

              </div>
            </TiltCard>
          )}

          {/* Card 2: AI Memory Vault 2.0 */}
          {(activeFilter === 'All' || activeFilter === 'Full-Stack AI & Web') && (
            <TiltCard glowColor="rgba(6, 182, 212, 0.45)" className="h-full">
              <div className="glass-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between h-full border border-white/15 relative overflow-hidden group">
                
                {/* Conic glowing border accent */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-600/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none" />

                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-semibold">
                      Full-Stack AI & Vector Search
                    </span>
                    <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/30">
                      2026 • Group Project
                    </span>
                  </div>

                  <h3 className="font-sora text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    AI Memory Vault 2.0 – Personal Memory System
                  </h3>

                  <p className="text-xs font-mono text-slate-400 mt-1 mb-5">
                    Frontend Developer & Vector AI Specialist • <span className="text-slate-300">React.js, Node.js, Vector DB, PWA</span>
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    Developed AI Memory Vault 2.0 to store and retrieve 1,000+ user memories and conversations using Python and Vector DB. Implemented semantic search with embeddings and cosine similarity, improving context retrieval accuracy by 45% and response time by 30%.
                  </p>

                  {/* 10x Feature: Interactive Vector Similarity Retrieval Simulator */}
                  <div className="rounded-2xl bg-[#070814] border border-white/10 p-4 mb-6 shadow-inner">
                    <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-slate-300 font-semibold">vector_semantic_search.py</span>
                      </div>
                      <span className="text-[11px] font-mono text-purple-300">Vector Embeddings</span>
                    </div>

                    {/* Interactive Prompt Selector */}
                    <div className="space-y-2 mb-3">
                      <div className="text-[10px] font-mono text-slate-400">SELECT TEST QUERY FOR EMBEDDING RETRIEVAL:</div>
                      <div className="flex flex-wrap gap-1.5">
                        <button
                          onClick={() => handleTestVector('Quarterly sprint & ML pipeline review')}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 transition-colors"
                        >
                          Query 1: "Sprint ML Review"
                        </button>
                        <button
                          onClick={() => handleTestVector('API architecture with Vector DB indexing')}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 hover:bg-purple-500/20 text-slate-300 hover:text-purple-300 border border-white/10 transition-colors"
                        >
                          Query 2: "Vector DB API"
                        </button>
                      </div>
                    </div>

                    {/* Simulator Stats Display */}
                    <div className="text-[11px] font-mono space-y-1 bg-white/[0.02] p-2 rounded-lg border border-white/5">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Cosine Similarity Score:</span>
                        <span className="text-emerald-400 font-bold">{similarityScore} / 1.000</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Context Accuracy Boost:</span>
                        <span className="text-cyan-300 font-semibold">+45% (Recall: 95.2%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-3.5 px-3 bg-white/[0.02] border border-white/10 rounded-xl mb-6">
                    <div>
                      <div className="font-sora text-lg font-black text-cyan-300">+45%</div>
                      <div className="text-[10px] text-slate-300 font-medium">Context Accuracy</div>
                    </div>
                    <div>
                      <div className="font-sora text-lg font-black text-purple-300">-30%</div>
                      <div className="text-[10px] text-slate-300 font-medium">Response Time</div>
                    </div>
                    <div>
                      <div className="font-sora text-lg font-black text-pink-300">95%</div>
                      <div className="text-[10px] text-slate-300 font-medium">Recall on 200+</div>
                    </div>
                    <div>
                      <div className="font-sora text-lg font-black text-indigo-300">1,000+</div>
                      <div className="text-[10px] text-slate-300 font-medium">User Memories</div>
                    </div>
                  </div>

                </div>

                {/* Card Bottom: Tech Stack & CTAs */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {['React.js', 'Vector DB', 'Python', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Chart.js', 'PWA'].map((t, idx) => (
                      <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(projects[1])}
                      className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl glass-panel hover:bg-white/15 text-white transition-colors border border-white/15"
                    >
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Architecture & Flow</span>
                    </button>

                    <a
                      href="https://github.com/mansi-zinjad"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all hover:scale-105"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                </div>

              </div>
            </TiltCard>
          )}

        </div>

      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
