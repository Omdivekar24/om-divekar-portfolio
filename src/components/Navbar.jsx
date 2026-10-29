import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sparkles, Terminal } from 'lucide-react';

const Navbar = ({ onOpenResume }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-4 ${
            scrolled ? 'py-3' : 'py-5'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <nav className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
              scrolled 
                ? 'bg-[#050505]/75 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
                : 'bg-black/20 backdrop-blur-md border border-white/5'
            }`}>
              
              {/* Logo */}
              <a href="#home" className="group flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00E5FF] to-[#8A5CFF] p-[1.5px] transition-transform duration-300 group-hover:scale-110">
                  <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center">
                    <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF] tracking-wider text-sm">
                      OD
                    </span>
                  </div>
                </div>
                <span className="hidden sm:inline font-mono-code text-xs text-slate-400 group-hover:text-[#00E5FF] transition-colors">
                  om.divekar()
                </span>
              </a>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 text-sm text-slate-300 hover:text-white rounded-full transition-all duration-200 hover:bg-white/5 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                  </a>
                ))}
              </div>

              {/* CTA Resume Action */}
              <div className="hidden sm:flex items-center space-x-3">
                <button
                  onClick={onOpenResume}
                  className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00E5FF] via-[#8A5CFF] to-[#00E5FF] animate-gradient-x rounded-full" />
                  <span className="relative flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#050505] text-xs font-semibold text-white group-hover:bg-opacity-90 transition-all duration-300">
                    <FileText className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>Resume</span>
                  </span>
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden mt-3 p-6 glass-panel rounded-3xl border border-white/10 shadow-2xl flex flex-col space-y-4"
                >
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base font-medium text-slate-300 hover:text-[#00E5FF] py-2 border-b border-white/5 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF] text-black font-bold text-sm shadow-lg shadow-[#00E5FF]/20 mt-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View & Download Resume</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
