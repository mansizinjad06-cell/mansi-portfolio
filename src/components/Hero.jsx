import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ArrowRight, Sparkles, MapPin, Mail, Phone, Github, Linkedin, Database, Cpu, ShieldCheck, Terminal, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import MagneticButton from './MagneticButton';

export default function Hero({ onOpenResume }) {
  // Typing animation for roles
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Parallax scroll effect
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleResumeClick = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#06b6d4', '#ec4899', '#ffffff']
    });
    onOpenResume();
  };

  return (
    <section ref={heroRef} id="about" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      
      {/* Dynamic Background Spotlight Rays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-purple-600/15 via-cyan-500/10 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content with Parallax */}
          <motion.div style={{ y: contentY }} className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill with Radar Beacon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-xs text-purple-200 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:border-cyan-400 transition-colors"
            >
              <div className="relative flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="absolute w-4 h-4 rounded-full bg-emerald-400/40 animate-ping" />
              </div>
              <span className="font-mono uppercase tracking-wider text-[11px] text-cyan-300 font-semibold">
                MIT WPU • DATA SCIENCE & AI
              </span>
              <span className="text-white/20">|</span>
              <span className="text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                CGPA: 8.39
              </span>
            </motion.div>

            {/* Headline with Name & Shimmer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="font-sora text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="shimmer-text font-black">
                    {personalInfo.name}
                  </span>
                  <motion.span
                    className="absolute -bottom-1.5 left-0 right-0 h-[4px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full shadow-[0_0_15px_#06b6d4]"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Typing Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 flex items-center gap-2.5 min-h-[40px]"
            >
              <span className="font-sora text-xl sm:text-2xl font-medium text-slate-300">
                Building with
              </span>
              <span className="font-sora text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent min-h-[32px] border-r-2 border-cyan-400 pr-1.5 animate-pulse">
                {displayText}
              </span>
            </motion.div>

            {/* Bio Paragraph with High-Impact Wording */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 text-base sm:text-lg text-slate-300/90 max-w-xl leading-relaxed"
            >
              Data Science scholar at <strong className="text-white font-semibold">MIT-WPU Pune</strong> engineering 
              high-throughput MySQL architectures (<span className="text-cyan-300 font-mono font-semibold">+35% speedup</span>), 
              vector embeddings & semantic search (<span className="text-purple-300 font-mono font-semibold">95% relevant recall</span>), 
              and Apple-clean responsive web experiences.
            </motion.p>

            {/* Location & Verified Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono"
            >
              <div className="flex items-center gap-1.5 text-slate-300 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>Pune, India (18.5204° N, 73.8567° E)</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Resume Data</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <MagneticButton
                href="#projects"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-sora font-semibold text-sm shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </MagneticButton>

              <MagneticButton
                onClick={handleResumeClick}
                className="w-full sm:w-auto px-7 py-4 rounded-xl glass-card border border-purple-500/40 hover:border-cyan-400 text-white font-sora font-semibold text-sm shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] group"
              >
                <Download className="w-4 h-4 mr-2 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
                <span>Download Resume</span>
              </MagneticButton>

              <MagneticButton
                href="#contact"
                className="w-full sm:w-auto px-6 py-4 rounded-xl glass-panel text-slate-300 hover:text-white font-sora font-medium text-sm border border-white/10 hover:border-white/30"
              >
                <span>Contact Me</span>
              </MagneticButton>
            </motion.div>

            {/* Social Links Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-9 flex items-center gap-3 pt-6 border-t border-white/10 w-full"
            >
              <span className="text-xs text-slate-400 font-mono tracking-wider">CHANNELS:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white hover:border-cyan-400 shadow-sm transition-all hover:scale-105"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-cyan-400" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white hover:border-purple-400 shadow-sm transition-all hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-purple-400" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white hover:border-cyan-400 shadow-sm transition-all hover:scale-105"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4 text-cyan-300" />
              </a>
              <a
                href={`tel:${personalInfo.phoneRaw}`}
                className="p-2.5 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white hover:border-purple-400 shadow-sm transition-all hover:scale-105"
                aria-label="Call Direct"
              >
                <Phone className="w-4 h-4 text-purple-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Actual Portrait with 10x Cinematic Multi-Layer Gradient Aura */}
          <motion.div style={{ y: photoY }} className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Layer 1: Huge Ambient Deep Radial Nebula */}
              <motion.div
                style={{ opacity: glowOpacity }}
                className="absolute -inset-10 rounded-full bg-gradient-to-tr from-purple-700/50 via-cyan-500/30 to-pink-600/40 blur-[90px] animate-breath pointer-events-none"
              />

              {/* Layer 2: Rotating Conic Radiant Corona */}
              <div className="absolute -inset-6 rounded-[34px] overflow-hidden pointer-events-none">
                <div className="w-[140%] h-[140%] -top-[20%] -left-[20%] absolute animate-spin-conic opacity-70 blur-2xl bg-[conic-gradient(from_0deg,#8b5cf6,#06b6d4,#ec4899,#6366f1,#06b6d4,#8b5cf6)]" />
              </div>

              {/* Layer 3: Reverse Spinning Inner Color Sheen */}
              <div className="absolute -inset-3 rounded-[30px] overflow-hidden pointer-events-none opacity-80">
                <div className="w-[140%] h-[140%] -top-[20%] -left-[20%] absolute animate-spin-conic-reverse blur-md bg-[conic-gradient(from_180deg,transparent,#06b6d4,#a855f7,transparent)]" />
              </div>

              {/* Main Photo Card Container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10"
              >
                {/* Outer Glassmorphism Frame with Cyber HUD Corner Brackets */}
                <div className="relative p-2.5 rounded-[28px] glass-panel border border-white/20 shadow-[0_0_60px_rgba(139,92,246,0.45)] backdrop-blur-2xl">
                  
                  {/* Cyber HUD Corner Crosshairs */}
                  <div className="hud-corner hud-tl" />
                  <div className="hud-corner hud-tr" />
                  <div className="hud-corner hud-bl" />
                  <div className="hud-corner hud-br" />

                  <div className="relative w-72 sm:w-80 md:w-88 rounded-[22px] overflow-hidden bg-[#090915] aspect-[4/4.6]">
                    
                    {/* Actual Portrait Photo */}
                    <img
                      src={personalInfo.photo}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[0.98] hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Depth Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05050c] via-transparent to-transparent opacity-80" />

                    {/* Top Cyber HUD Bar inside Photo */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-cyan-300">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        <span>SYS_ID: MZ-2026</span>
                      </div>
                      <span className="text-purple-300 font-semibold">PUNE • MIT-WPU</span>
                    </div>

                    {/* Bottom Info Glass Panel with Audio/Data Pulse */}
                    <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl glass-panel border border-white/20 backdrop-blur-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="font-sora font-bold text-sm text-white">
                            {personalInfo.name}
                          </div>
                          <div className="text-[10px] text-cyan-300 font-mono">
                            Data Science & AI Systems
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 font-sora">
                            8.39 CGPA
                          </div>
                          <div className="text-[9px] text-emerald-400 font-mono">
                            Continuous Rise
                          </div>
                        </div>
                      </div>

                      {/* Simulated Audio/Data Frequency Waveform Bars */}
                      <div className="flex items-center gap-1 h-3 pt-1 border-t border-white/10">
                        {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50, 80, 65, 90, 75, 40].map((h, i) => (
                          <motion.span
                            key={i}
                            animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.3}%`] }}
                            transition={{ repeat: Infinity, duration: 1.2 + (i % 5) * 0.2, ease: "easeInOut" }}
                            className="flex-1 bg-gradient-to-t from-purple-500 to-cyan-400 rounded-full"
                          />
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Floating Micro-Badge 1: SQL Performance */}
                <motion.div
                  animate={{ y: [0, -9, 0] }}
                  transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.4 }}
                  className="absolute -top-5 -right-5 p-3.5 rounded-xl glass-card border border-cyan-400/50 shadow-[0_0_25px_rgba(6,182,212,0.4)] hidden sm:flex items-center gap-3 backdrop-blur-xl"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">+35% Query Speed</div>
                    <div className="text-[10px] text-slate-300 font-mono">MySQL CTEs & Indexes</div>
                  </div>
                </motion.div>

                {/* Floating Micro-Badge 2: Vector AI */}
                <motion.div
                  animate={{ y: [0, 9, 0] }}
                  transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 p-3.5 rounded-xl glass-card border border-purple-400/50 shadow-[0_0_25px_rgba(168,85,247,0.4)] hidden sm:flex items-center gap-3 backdrop-blur-xl"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Vector DB Engine</div>
                    <div className="text-[10px] text-slate-300 font-mono">95% Relevant Recall</div>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Highlight Stats Strip below Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-card border border-white/10 hover:border-cyan-400/40 transition-all group"
            >
              <div className="font-sora text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-300 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="font-semibold text-xs text-slate-200 mt-1.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                {stat.helper}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
