import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Server, Database, Brain, Cloud, Terminal, 
  Layers, Network, FileCode, Layout, Palette, Cpu, Table, 
  Activity, BarChart3, GitBranch, Send, Monitor, Sparkles
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

const iconMap = {
  Code2, Server, Database, Brain, Cloud, Terminal,
  Layers, Network, FileCode, Layout, Palette, Cpu, Table,
  Activity, BarChart3, GitBranch, Send, Monitor
};

const categories = ["All", "Frontend", "Backend", "Database", "AI", "Cloud & Tools"];

const SkillCloud = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = activeCategory === "All"
    ? resumeData.skills
    : resumeData.skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Tag */}
      <div className="flex items-center space-x-3 mb-8">
        <span className="w-8 h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF]" />
        <span className="font-mono-code text-xs text-[#00E5FF] tracking-widest uppercase">
          02 // TECHNICAL ECOSYSTEM
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Interactive <span className="text-gradient-cyan-purple">Skill Matrix</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base font-light">
          Explore technologies across full-stack development, database management, AI algorithms, and cloud infrastructure. Hover any node to examine mastery.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-mono-code text-xs font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF] text-black shadow-[0_0_20px_rgba(0,229,255,0.4)] scale-105'
                : 'glass-card text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Interactive Orbiting Skill Matrix Container */}
      <div className="relative min-h-[420px] glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 overflow-hidden flex items-center justify-center">
        
        {/* Background Ambient Radial Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/10 via-transparent to-[#8A5CFF]/10 pointer-events-none" />
        <div className="absolute w-72 h-72 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        <motion.div 
          layout
          className="relative z-10 flex flex-wrap justify-center items-center gap-4 sm:gap-6 max-w-5xl"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              const isHovered = hoveredSkill === skill.name;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`group relative cursor-pointer p-4 rounded-2xl transition-all duration-300 ${
                    isHovered
                      ? 'bg-gradient-to-tr from-[#00E5FF]/20 to-[#8A5CFF]/20 border border-[#00E5FF] shadow-[0_0_30px_rgba(0,229,255,0.3)] scale-110 z-20'
                      : 'glass-card border border-white/10 hover:border-white/30 hover:scale-105'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2.5 rounded-xl transition-colors duration-300 ${
                      isHovered ? 'bg-[#00E5FF] text-black' : 'bg-white/5 text-[#00E5FF]'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    
                    <div>
                      <div className="font-display text-sm font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                        {skill.name}
                      </div>
                      <div className="font-mono-code text-[11px] text-slate-400">
                        {skill.category}
                      </div>
                    </div>
                  </div>

                  {/* Hover Proficiency Bar */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 pt-2 border-t border-white/10"
                    >
                      <div className="flex items-center justify-between font-mono-code text-[10px] text-slate-300 mb-1">
                        <span>Proficiency</span>
                        <span className="text-[#00E5FF] font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF] rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </motion.div>
                  )}

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

    </section>
  );
};

export default SkillCloud;
