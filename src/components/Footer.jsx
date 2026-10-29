import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, Code2, Sparkles, Heart } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Date().toLocaleTimeString('en-US', options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030303] border-t border-white/10 py-12 px-6 overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF] p-[1px]">
            <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center font-display font-extrabold text-xs text-[#00E5FF]">
              OD
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-sm text-white">
              Om Divekar Portfolio
            </div>
            <div className="font-mono-code text-xs text-slate-500">
              © {new Date().getFullYear()} Om Divekar. All rights reserved.
            </div>
          </div>
        </div>

        {/* Center: Live Timezone Clock (Pune, IST) */}
        <div className="flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border border-white/5 font-mono-code text-xs text-slate-300">
          <Clock className="w-3.5 h-3.5 text-[#00E5FF] animate-pulse" />
          <span>PUNE, IN:</span>
          <span className="text-white font-bold">{time || '16:35 IST'}</span>
        </div>

        {/* Right: Tech Attribution & Scroll To Top */}
        <div className="flex items-center space-x-4 font-mono-code text-xs text-slate-400">
          <span>Engineered with React + Anime.js</span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full glass-card border border-white/10 text-slate-300 hover:text-[#00E5FF] hover:border-[#00E5FF] transition-all"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
