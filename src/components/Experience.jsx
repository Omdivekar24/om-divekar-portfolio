import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, ChevronRight, Code2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Tag */}
      <div className="flex items-center space-x-3 mb-8">
        <span className="w-8 h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF]" />
        <span className="font-mono-code text-xs text-[#00E5FF] tracking-widest uppercase">
          04 // PROFESSIONAL JOURNEY
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Professional <span className="text-gradient-cyan-purple">Journey & Projects</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base font-light">
          Industry internships, key full-stack engineering milestones (GYMHUB & Portfolio), specialized cloud training with Capgemini & Symbiosis, and formal education.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Work Experience & Projects Journey Timeline */}
        <div className="lg:col-span-7 space-y-8 relative">
          
          <div className="flex items-center space-x-3 mb-6">
            <Briefcase className="w-5 h-5 text-[#00E5FF]" />
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider">
              Work Experience & Major Engineering Projects
            </h3>
          </div>

          {/* Timeline Vertical Glowing Line */}
          <div className="absolute left-6 top-16 bottom-4 w-[2px] bg-gradient-to-b from-[#00E5FF] via-[#8A5CFF] to-transparent pointer-events-none hidden sm:block" />

          {/* Experience Items (EduNet, GYMHUB, Developer Portfolio) */}
          {resumeData.experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-0 sm:pl-14"
            >
              {/* Glowing Node Marker */}
              <div className="absolute left-4 top-1.5 w-5 h-5 rounded-full bg-[#050505] border-2 border-[#00E5FF] shadow-[0_0_15px_#00E5FF] flex items-center justify-center pointer-events-none hidden sm:flex">
                <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
              </div>

              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full font-mono-code text-[11px] font-semibold bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30">
                    {exp.type}
                  </span>
                  <div className="flex items-center space-x-2 font-mono-code text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
                  {exp.role}
                </h4>
                <div className="font-mono-code text-sm text-[#8A5CFF] mb-4 flex items-center space-x-2">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span className="text-slate-400">{exp.location}</span>
                </div>

                <div className="space-y-2 font-light text-xs sm:text-sm text-slate-300">
                  {exp.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-2">
                      <ChevronRight className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Industry Trainings */}
          {resumeData.trainings.map((train, idx) => (
            <motion.div
              key={train.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx + 3) * 0.15 }}
              className="relative pl-0 sm:pl-14"
            >
              <div className="absolute left-4 top-1.5 w-5 h-5 rounded-full bg-[#050505] border-2 border-[#8A5CFF] shadow-[0_0_15px_#8A5CFF] flex items-center justify-center pointer-events-none hidden sm:flex">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8A5CFF]" />
              </div>

              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#8A5CFF]/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full font-mono-code text-[11px] font-semibold bg-[#8A5CFF]/20 text-[#8A5CFF] border border-[#8A5CFF]/30">
                    SPECIALIZED TRAINING
                  </span>
                  <div className="flex items-center space-x-2 font-mono-code text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-[#8A5CFF]" />
                    <span>{train.period}</span>
                  </div>
                </div>

                <h4 className="font-display text-xl font-bold text-white mb-1">
                  {train.title}
                </h4>
                <p className="font-mono-code text-xs text-slate-400 mb-3">
                  {train.organization}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 font-light">
                  {train.details}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Education & IBM Certifications Column */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="w-5 h-5 text-[#8A5CFF]" />
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider">
              Education & Certifications
            </h3>
          </div>

          {/* Education List */}
          <div className="space-y-4">
            {resumeData.education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#00E5FF]/30 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-display text-base font-bold text-white">
                    {edu.degree}
                  </h4>
                  <span className="font-mono-code text-xs text-slate-400">
                    {edu.period}
                  </span>
                </div>
                <p className="font-mono-code text-xs text-slate-400 mb-2">
                  {edu.institution}
                </p>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#00E5FF]/10 text-[#00E5FF] font-mono-code text-xs font-bold">
                  {edu.score}
                </span>
              </motion.div>
            ))}
          </div>

          {/* IBM & Professional Certifications Badges */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
              <Award className="w-4 h-4 text-[#00E5FF]" />
              <span>Verified IBM & Professional Credentials</span>
            </h4>
            <div className="space-y-2.5">
              {resumeData.certifications.map((cert) => (
                <div key={cert.name} className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 font-mono-code text-xs">
                  <span className="text-slate-200">{cert.name}</span>
                  <span className="text-slate-500">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;
