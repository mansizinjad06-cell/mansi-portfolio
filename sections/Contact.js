"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate sending message and allow mailto fallback
    setFormSubmitted(true);
  };

  const contactDetails = [
    {
      id: "email",
      label: "Email Address",
      value: "mansi.zinjad06@gmail.com",
      displayValue: "mansi.zinjad06@gmail.com",
      href: "mailto:mansi.zinjad06@gmail.com",
      icon: Mail,
      isCopyable: true,
      accent: "cyan",
    },
    {
      id: "linkedin",
      label: "LinkedIn Profile",
      value: "https://www.linkedin.com/in/mansi-zinjad-ba976a3a3",
      displayValue: "in/mansi-zinjad-ba976a3a3",
      href: "https://www.linkedin.com/in/mansi-zinjad-ba976a3a3",
      icon: Linkedin,
      isExternal: true,
      accent: "sky",
    },
    {
      id: "phone",
      label: "Direct Phone",
      value: "8329789906",
      displayValue: "+91 8329789906",
      href: "tel:8329789906",
      icon: Phone,
      isCopyable: true,
      accent: "indigo",
    },
    {
      id: "location",
      label: "Location Base",
      value: "Pune, Maharashtra, India",
      displayValue: "Pune, Maharashtra, India",
      icon: MapPin,
      accent: "purple",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="08"
          label="GET IN TOUCH"
          title="Let's Build Something With Data."
          subtitle="Have an opportunity, project, or internship in data analytics? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <GlassCard className="p-5 flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 text-cyan-400 flex items-center justify-center shrink-0 group-hover:border-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-slate-400 block uppercase">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.isExternal ? "_blank" : undefined}
                            rel={item.isExternal ? "noopener noreferrer" : undefined}
                            className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                          >
                            <span>{item.displayValue}</span>
                            {item.isExternal && <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />}
                          </a>
                        ) : (
                          <span className="text-sm sm:text-base font-semibold text-white">
                            {item.displayValue}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Copy button if applicable */}
                    {item.isCopyable && (
                      <button
                        onClick={() => handleCopy(item.value, item.id)}
                        aria-label={`Copy ${item.label}`}
                        className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors shrink-0"
                        title="Copy to clipboard"
                      >
                        {copiedField === item.id ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </GlassCard>
                </motion.div>
              );
            })}

            {/* Quick Note Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-xs font-mono text-cyan-300/90 flex items-center gap-3"
            >
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>
                Available for internships, data analytics collaborations, and dataset preparation assignments.
              </span>
            </motion.div>
          </div>

          {/* Right Column: Direct Message Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-6 sm:p-8 rounded-3xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                    <span>Send a Direct Message</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Fill in the form to start a conversation or dispatch an inquiry.
                  </p>
                </div>

                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-800/40">
                  FAST RESPONSE
                </span>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white">
                    Message Prepared!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. You can also send this directly via your default email client:
                  </p>
                  <div className="pt-2">
                    <a
                      href={`mailto:mansi.zinjad06@gmail.com?subject=${encodeURIComponent(
                        formData.subject || "Data Analytics Collaboration"
                      )}&body=${encodeURIComponent(
                        `Hi Mansi,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
                      )}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-cyan-500 text-slate-950 font-semibold text-xs sm:text-sm hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App (mansi.zinjad06@gmail.com)</span>
                    </a>
                  </div>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="block mx-auto text-xs text-slate-400 underline underline-offset-4 pt-4"
                  >
                    Reset form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Data Analyst Internship Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Mansi, we would love to discuss an analytics opportunity with you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.55)] hover:opacity-95 transition-all"
                  >
                    <span>Get In Touch</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
