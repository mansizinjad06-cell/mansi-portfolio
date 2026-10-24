"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Certifications from "@/sections/Certifications";
import Education from "@/sections/Education";
import Journey from "@/sections/Journey";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-slate-100 flex flex-col relative overflow-hidden">
      {/* Dynamic Background Matrix Lighting */}
      <div className="fixed inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-cyan-900/10 via-indigo-950/5 to-transparent pointer-events-none blur-3xl" />

      {/* Floating Navbar */}
      <Navbar />

      {/* Page Sections */}
      <div className="relative z-10 space-y-4">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Journey />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
