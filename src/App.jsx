import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillCloud from './components/SkillCloud';
import Projects from './components/Projects';
import PortfolioShowcase from './components/PortfolioShowcase';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-100 overflow-x-hidden selection:bg-[#00E5FF]/30 selection:text-[#00E5FF]">
      
      {/* Floating Glass Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      <main className="relative z-10 space-y-12">
        {/* Fullscreen Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Section */}
        <About />

        {/* Interactive 3D Skill Cloud */}
        <SkillCloud />

        {/* Product Showcase Projects Section (Includes GYMHUB) */}
        <Projects />

        {/* Portfolio Architecture & How It Was Built Container */}
        <PortfolioShowcase />

        {/* Experience, Education & Certifications Timeline */}
        <Experience />

        {/* Honors & Achievements */}
        <Achievements />

        {/* Contact Form & Direct Links */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Minimal Dark Footer */}
      <Footer />

      {/* Interactive Resume View & Download PDF Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}

export default App;
