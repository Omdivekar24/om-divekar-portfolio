import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Code, Cpu, Terminal, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Header Tag */}
      <div className="flex items-center space-x-3 mb-12">
        <span className="w-8 h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF]" />
        <span className="font-mono-code text-xs text-[#00E5FF] tracking-widest uppercase">
          01 // ABOUT ME
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Cyber Interactive Avatar Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative group mx-auto max-w-md">
            {/* Outer Glowing Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5FF] via-[#8A5CFF] to-[#00E5FF] rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />
            
            <div className="relative glass-panel rounded-3xl p-8 overflow-hidden border border-white/10 flex flex-col items-center text-center">
              
              {/* Avatar Frame */}
              <div className="relative w-40 h-40 mb-6 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-br from-[#00E5FF] to-[#8A5CFF]">
                <div className="w-full h-full bg-[#09090e] rounded-2xl flex flex-col items-center justify-center p-4 relative group-hover:scale-105 transition-transform duration-500">
                  {/* Cyber Holographic Graphic */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#00E5FF]/20 to-[#8A5CFF]/20 flex items-center justify-center mb-2 border border-[#00E5FF]/30">
                    <Cpu className="w-8 h-8 text-[#00E5FF] animate-pulse" />
                  </div>
                  <span className="font-mono-code text-xs text-slate-300 font-semibold tracking-wider">
                    OM DIVEKAR
                  </span>
                  <span className="font-mono-code text-[10px] text-[#8A5CFF]">
                    SYSTEM.DEV_v2.0
                  </span>
                </div>
              </div>

              {/* Bio Highlights */}
              <h3 className="font-display text-xl font-bold text-white mb-1">
                Om Divekar
              </h3>
              <p className="font-mono-code text-xs text-[#00E5FF] mb-4">
                Zeal College of Engineering & Research, Pune
              </p>
              <div className="w-full h-[1px] bg-white/10 mb-5" />

              <div className="w-full space-y-2.5 text-left font-mono-code text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500">Degree:</span>
                  <span>B.E. Computer Engg</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500">CGPA:</span>
                  <span className="text-[#00E5FF] font-semibold">7.92 / 10</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500">Batch:</span>
                  <span>2022 – 2026 Graduate</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500">Focus:</span>
                  <span>MERN • AI • AWS Cloud</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio Narrative & Fitted Animated Statistics */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-8"
        >
          <div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white leading-tight mb-5">
              Architecting <span className="text-gradient-cyan-purple">Scalable Systems</span> & Intelligent Solutions.
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-4">
              {resumeData.personal.summary}
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              With hands-on experience as a <strong className="text-white">MERN Stack Development Intern</strong> at EduNet Foundation, I designed RESTful APIs that achieved an <span className="text-[#00E5FF] font-semibold">80-90% data retrieval efficiency boost</span>. My work spans full-stack e-commerce (GYMHUB), data-driven smart city analytical systems (Urban Intel), AI healthcare report analysis (Medi-Assist AI), and cloud deployments using AWS (EC2, S3) and Python Django.
            </p>
          </div>

          {/* Fitted Statistics Grid - Numbers sized cleanly to fit containers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
            {resumeData.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-4 rounded-xl border border-white/10 hover:border-[#00E5FF]/40 transition-all text-center flex flex-col justify-center"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF] mb-1 tracking-tight">
                  {stat.value}{stat.suffix}
                </div>
                <div className="font-mono-code text-[11px] text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Engineering Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <Zap className="w-4 h-4 text-[#00E5FF] shrink-0" />
              <span className="text-xs font-mono-code text-slate-200">REST API Optimization</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <ShieldCheck className="w-4 h-4 text-[#8A5CFF] shrink-0" />
              <span className="text-xs font-mono-code text-slate-200">Full-Stack MERN Architecture</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <Cpu className="w-4 h-4 text-[#FF2E93] shrink-0" />
              <span className="text-xs font-mono-code text-slate-200">AI Medical Report Analysis</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
