import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Sparkles, Layers, Terminal, ShieldCheck, Zap, Monitor } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const PortfolioShowcase = () => {
  const details = resumeData.portfolioEngineering;

  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto">
      
      {/* Section Tag */}
      <div className="flex items-center space-x-3 mb-8">
        <span className="w-8 h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF]" />
        <span className="font-mono-code text-xs text-[#00E5FF] tracking-widest uppercase">
          03.5 // PORTFOLIO ARCHITECTURE
        </span>
      </div>

      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
        
        {/* Ambient Gradient Glow */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#8A5CFF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 font-mono-code text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BUILT FROM SCRATCH • JULY 2026</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
            {details.title}
          </h2>
          <p className="font-mono-code text-xs sm:text-sm text-[#8A5CFF] mb-4">
            {details.tagline}
          </p>
          <p className="text-slate-300 text-sm font-light leading-relaxed">
            {details.description}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {details.techDetails.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-5 rounded-2xl border border-white/10 hover:border-[#00E5FF]/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00E5FF] mb-3 group-hover:scale-110 transition-transform">
                {idx === 0 && <Terminal className="w-5 h-5" />}
                {idx === 1 && <Zap className="w-5 h-5" />}
                {idx === 2 && <Layers className="w-5 h-5" />}
                {idx === 3 && <Monitor className="w-5 h-5" />}
              </div>
              <h3 className="font-display text-sm font-bold text-white group-hover:text-[#00E5FF] transition-colors mb-1">
                {tech.name}
              </h3>
              <p className="font-mono-code text-xs text-slate-400 font-light leading-relaxed">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default PortfolioShowcase;
