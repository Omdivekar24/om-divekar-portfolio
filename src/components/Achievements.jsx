import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Code, Flame, Users, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const iconMap = {
  Trophy, Award, Code, Flame, Users
};

const Achievements = () => {
  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto">
      
      {/* Section Tag */}
      <div className="flex items-center space-x-3 mb-8">
        <span className="w-8 h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF]" />
        <span className="font-mono-code text-xs text-[#00E5FF] tracking-widest uppercase">
          05 // HONORS & ACHIEVEMENTS
        </span>
      </div>

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
          Recognitions & <span className="text-gradient-cyan-purple">Milestones</span>
        </h2>
        <p className="text-slate-400 text-sm font-light">
          Competitive problem solving, academic excellence, and technical leadership.
        </p>
      </div>

      {/* Grid of Honors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {resumeData.achievements.map((item, index) => {
          const IconComp = iconMap[item.icon] || Trophy;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}40` }}
              >
                <IconComp className="w-7 h-7" style={{ color: item.color }} />
              </div>
              <h3 className="font-display text-sm font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                {item.title}
              </h3>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

export default Achievements;
