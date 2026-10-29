import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import LetterGlitch from './LetterGlitch';
import { resumeData } from '../data/resumeData';

const Hero = ({ onOpenResume }) => {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const subtitles = resumeData.personal.subtitles;

  // Typing effect for cycling titles
  useEffect(() => {
    const currentWord = subtitles[currentSubtitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentSubtitleIndex((prev) => (prev + 1) % subtitles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentWord.substring(0, displayText.length - 1)
            : currentWord.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentSubtitleIndex, subtitles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Fullscreen LetterGlitch Canvas Background */}
      <LetterGlitch
        glitchSpeed={35}
        smooth={true}
        centerVignette={true}
        outerVignette={true}
        glitchColors={["#00E5FF", "#8A5CFF", "#FFFFFF"]}
      />

      {/* Layered Background Visual Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505] pointer-events-none z-1" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-1" />
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none z-1" />

      {/* Ambient Radial Floating Blur Lights */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#00E5FF]/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow z-1" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8A5CFF]/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow z-1" style={{ animationDelay: '3s' }} />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border border-[#00E5FF]/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
          <span className="font-mono-code text-xs text-slate-300 tracking-wide">
            AVAILABLE FOR IT / SYSTEMS & FULL STACK ROLES • 2026 GRADUATE
          </span>
        </motion.div>

        {/* Headline - Sleek, Refined Medium Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl tracking-wide leading-tight mb-6 text-slate-100"
        >
          Engineering <span className="text-gradient-cyan-purple font-medium">Intelligent Digital</span> Experiences.
        </motion.h1>

        {/* Name & Cycling Subtitles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center space-y-2 mb-8"
        >
          <div className="text-slate-400 font-mono-code text-xs sm:text-sm tracking-[0.3em] uppercase">
            Hi, I'm
          </div>
          <div className="font-display text-2xl sm:text-4xl font-semibold tracking-[0.2em] text-white uppercase">
            OM DIVEKAR
          </div>

          <div className="h-9 flex items-center justify-center font-mono-code text-base sm:text-xl text-[#00E5FF] pt-1">
            <span className="mr-2 text-slate-500">&gt;</span>
            <span>{displayText}</span>
            <span className="w-2 h-5 bg-[#8A5CFF] ml-1 animate-pulse" />
          </div>
        </motion.div>

        {/* Intro Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-10 text-balance"
        >
          {resumeData.personal.shortBio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <a
            href="#projects"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF] text-black font-semibold text-sm shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA */}
          <button
            onClick={onOpenResume}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full glass-card border border-white/20 text-white font-medium text-sm hover:bg-white/10 hover:border-[#00E5FF]/50 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 mr-2 text-[#00E5FF] group-hover:scale-110 transition-transform" />
            <span>Download Resume</span>
          </button>
        </motion.div>

        {/* Tech Stack Tags Quick Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 flex flex-wrap justify-center items-center gap-2.5 text-xs font-mono-code text-slate-400"
        >
          <span className="text-slate-500">CORE TECH:</span>
          {["MERN Stack", "Python Django", "REST APIs", "AWS Cloud", "AI Integration", "MySQL / MongoDB"].map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
              {tech}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
