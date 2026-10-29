import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Phone, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { resumeData } from '../data/resumeData';

const Contact = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Tag */}
      <div className="flex items-center space-x-3 mb-8">
        <span className="w-8 h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF]" />
        <span className="font-mono-code text-xs text-[#00E5FF] tracking-widest uppercase">
          06 // INITIATE CONTACT
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headline & Direct Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-8"
        >
          <div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight mb-6">
              Let's Build <br />
              <span className="text-gradient-cyan-purple">Something Amazing.</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-lg">
              Seeking an IT/Systems Trainee or Full Stack / AI Engineer role. Open for technical discussions, project collaborations, or recruitment inquiries.
            </p>
          </div>

          {/* Quick Direct Contacts */}
          <div className="space-y-4">
            
            {/* Copyable Email Box */}
            <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono-code text-[11px] text-slate-400">Direct Email</div>
                  <div className="font-mono-code text-sm text-white font-semibold">
                    {resumeData.personal.email}
                  </div>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-[#00E5FF]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-[#8A5CFF]/10 text-[#8A5CFF]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono-code text-[11px] text-slate-400">Location</div>
                <div className="font-mono-code text-sm text-white font-semibold">
                  {resumeData.personal.location}
                </div>
              </div>
            </div>

          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 pt-4">
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl glass-card border border-white/10 text-slate-300 hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-all duration-300"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="p-4 rounded-2xl glass-card border border-white/10 text-slate-300 hover:text-[#8A5CFF] hover:border-[#8A5CFF]/50 transition-all duration-300"
              title="Send Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href={resumeData.personal.driveLink}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl glass-card border border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-400/50 transition-all duration-300"
              title="Certificates Drive Folder"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>

        </motion.div>

        {/* Right Column: Futuristic Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6"
        >
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="font-mono-code text-xs text-slate-400">
                Direct transmission to Om Divekar's inbox.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center mx-auto border border-[#00E5FF]/40">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl font-bold text-white">
                  Message Transmitted!
                </h4>
                <p className="font-mono-code text-xs text-slate-300">
                  Thank you for reaching out. Om will respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-mono-code text-xs text-slate-400 mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-mono-code text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono-code text-xs text-slate-400 mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-mono-code text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono-code text-xs text-slate-400 mb-2">
                    MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, role, or inquiry..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-mono-code text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF] text-black font-bold text-sm shadow-lg shadow-[#00E5FF]/20 hover:shadow-[#00E5FF]/40 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}

          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default Contact;
