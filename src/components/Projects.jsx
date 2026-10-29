import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight, CheckCircle, X, ShieldAlert, Cpu, Activity, Database, ShoppingBag } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-8">
        <span className="w-8 h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF]" />
        <span className="font-mono-code text-xs text-[#00E5FF] tracking-widest uppercase">
          03 // FEATURED PRODUCT LAUNCHES
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Engineered <span className="text-gradient-cyan-purple">Systems & Products</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light max-w-2xl">
            Production-ready web applications, smart city analytical systems, full-stack e-commerce platforms, and AI-driven healthcare assistants.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {resumeData.projects.map((project, index) => {
          const isHovered = hoveredCard === project.id;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-[#00E5FF]/50 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Product Card Top Image / Interactive Mockup Area */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gradient-to-b from-[#0d0f17] to-[#050505] p-6 flex flex-col justify-between">
                
                {/* Dynamic Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} opacity-30 group-hover:opacity-70 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />

                {/* Badge Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full font-mono-code text-[11px] font-semibold bg-white/10 backdrop-blur-md text-white border border-white/20">
                    {project.badge}
                  </span>
                  <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white group-hover:bg-[#00E5FF] group-hover:text-black transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>

                {/* Visual Decorative Cyber Emblem */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-2xl glass-card border border-white/20 flex items-center justify-center text-[#00E5FF] mb-2 shadow-2xl">
                    {project.id === 'gymhub-ecommerce' && <ShoppingBag className="w-8 h-8 text-[#00E5FF]" />}
                    {project.id === 'urban-intel' && <ShieldAlert className="w-8 h-8 text-[#00E5FF]" />}
                    {project.id === 'medi-assist' && <Activity className="w-8 h-8 text-[#8A5CFF]" />}
                    {project.id === 'recipe-sharing' && <Database className="w-8 h-8 text-[#10B981]" />}
                  </div>
                  <span className="font-mono-code text-xs text-slate-300 font-semibold tracking-wider text-center">
                    {project.title}
                  </span>
                </div>

              </div>

              {/* Product Content Bottom Area */}
              <div className="p-8 relative z-10 bg-[#07070b]/90 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono-code text-xs text-[#8A5CFF] mb-4">
                    {project.tagline}
                  </p>
                  <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono-code text-[11px] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono-code text-xs">
                    <span className="text-[#00E5FF] font-semibold group-hover:underline flex items-center">
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                    <div className="flex items-center space-x-3 text-slate-400">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-white p-1 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Project Case Study Detailed Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass-card text-slate-400 hover:text-white hover:border-[#00E5FF] transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 rounded-full font-mono-code text-xs font-semibold bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30">
                  {selectedProject.badge}
                </span>
                <span className="font-mono-code text-xs text-slate-400">
                  PROJECT SPECIFICATION
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-2">
                {selectedProject.title}
              </h2>
              <p className="font-mono-code text-sm text-[#8A5CFF] mb-6">
                {selectedProject.tagline}
              </p>

              <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                <p>{selectedProject.description}</p>

                <div>
                  <h4 className="font-mono-code text-xs text-white uppercase tracking-wider mb-3">
                    // Key Engineering Deliverables
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm">
                        <CheckCircle className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                        <span className="text-slate-200">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono-code text-xs text-white uppercase tracking-wider mb-3">
                    // Tech Stack & Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-white/10 border border-white/10 font-mono-code text-xs text-white">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source on GitHub</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;
