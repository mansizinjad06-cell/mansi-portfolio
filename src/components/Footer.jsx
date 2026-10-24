import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail, Phone, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#040409] py-14 overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#0a0a14] rounded-[10px] flex items-center justify-center font-sora font-extrabold text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
                  {personalInfo.initials}
                </div>
              </div>
              <span className="font-sora font-bold text-lg text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Data Science & Big Data Scholar at MIT-WPU Pune. Building high-throughput SQL pipelines, vector embeddings, and full-stack solutions.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-300">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-300 transition-colors">Education</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#awards" className="hover:text-cyan-300 transition-colors">Awards</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
            <button onClick={onOpenResume} className="text-cyan-400 hover:underline">Resume</button>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-purple-400/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} Mansi Zinjad. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed with Apple & Google level standards</span>
            <span className="text-cyan-400">•</span>
            <span>Pune, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
