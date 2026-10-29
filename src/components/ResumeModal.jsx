import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, Phone, MapPin, Linkedin, FileText } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrintPdf = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `
====================================================
OM DIVEKAR - RESUME
====================================================
Address: Flat No 4, Prasad Bibve Nagar, Bibwewadi, Pune, Maharashtra
Email: ${resumeData.personal.email}
Phone: ${resumeData.personal.phone}
LinkedIn: ${resumeData.personal.linkedin}

PROFESSIONAL SUMMARY:
${resumeData.personal.summary}

EDUCATION:
- Bachelor of Engineering (Computer Engineering): Zeal College of Engineering & Research, Pune (2022-2026) | CGPA: 7.52 / 10
- HSC (Science): Laxman Rao Apte Junior College, Pune (2022) | 67%
- SSC (ICSE): Kline Memorial School, Pune (2020) | 88%

WORK EXPERIENCE & PROJECTS:
- MERN Stack Development Intern @ EduNet Foundation, Pune (Jan-Feb 2025)
  * Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
  * Designed & integrated 5+ RESTful API endpoints, achieving an 80-90% efficiency improvement in frontend-backend data retrieval.
  * Optimized MongoDB queries & performed complete CRUD testing using Postman.
- GYMHUB E-Commerce Platform (MERN Stack)
  * Modern full-stack e-commerce platform for gym apparel and accessories with secure authentication, cart management, and dark-theme UI.
- Urban Intel System (Final Year Smart City Analytics Platform)
  * Data-driven urban analytics pipeline identifying emergency events (fire, accidents, natural disasters).
- Medi-Assist AI (AI Healthcare Assistant)
  * AI symptom assessor and medical PDF report analysis module.

HARD SKILLS:
Programming Languages: Python, Java, C++, SQL, JavaScript
Web Technologies: React.js, HTML5, CSS3, Node.js, Express.js, TailwindCSS
Databases: MySQL, MongoDB
Cloud & Tools: AWS (EC2, S3), Git, GitHub, Postman, VS Code, Jupyter

TRAINING & CERTIFICATIONS:
- AWS with Python Training (Capgemini & Symbiosis Skills University | March 2026)
- Python Django Training (Rubicon Foundation | Feb 2025)
- IBM Certificates: Job Application Essentials, Project Management, Cloud Computing, AI Fundamentals
- EduNet & Rubicon Completion Certificates

ACHIEVEMENTS:
- 1st Prize in Aptitude Level Test
- 3rd Prize in Talent Hunt Competition
- Solved 100+ Data Structures & Algorithms problems
- 1st Place Interdepartmental Basketball Championship
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Om_Divekar_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl overflow-y-auto print:p-0 print:bg-white print:static">
        
        {/* Printable CSS Rules */}
        <style>{`
          @media print {
            body { background: white !important; color: black !important; }
            .no-print { display: none !important; }
            .print-only-container { 
              background: white !important; 
              color: black !important; 
              border: none !important; 
              box-shadow: none !important;
              max-width: 100% !important;
              padding: 0 !important;
            }
            .print-text-dark { color: #111827 !important; }
            .print-[#00E5FF] { color: #0284c7 !important; }
            .print-border { border-color: #e5e7eb !important; }
            .print-bg { background-color: #f9fafb !important; }
          }
        `}</style>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl glass-panel rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl my-8 max-h-[90vh] overflow-y-auto print-only-container print:max-h-none print:overflow-visible"
        >
          {/* Header Controls (Hidden during print) */}
          <div className="no-print flex items-center justify-between pb-6 border-b border-white/10 mb-8 sticky top-0 bg-[#07070b]/95 backdrop-blur-md z-20 pt-2">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                CURRICULUM VITAE
              </h2>
              <p className="font-mono-code text-xs text-[#00E5FF]">
                OM DIVEKAR • SOFTWARE ENGINEER & AI DEVELOPER
              </p>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={handlePrintPdf}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#8A5CFF] text-black font-bold text-xs shadow-lg hover:brightness-110 transition-all cursor-pointer"
                title="Download / Save as PDF"
              >
                <Printer className="w-4 h-4" />
                <span>Save / Print PDF</span>
              </button>
              <button
                onClick={handleDownloadText}
                className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-xl glass-card text-slate-300 hover:text-white border border-white/10 text-xs transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download TXT</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl glass-card text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Clean Document Body */}
          <div className="space-y-8 font-['Outfit',sans-serif] text-slate-200 print:text-gray-900 print-text-dark">
            
            {/* Header / Contact Info */}
            <div className="text-center pb-6 border-b border-white/10 print-border">
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white print:text-black mb-1">
                OM DIVEKAR
              </h1>
              <p className="font-mono-code text-xs text-slate-400 print:text-gray-600 max-w-xl mx-auto mb-3">
                Flat No 4, Prasad Bibve Nagar, Bibwewadi, Pune, Maharashtra
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 font-mono-code text-xs text-[#00E5FF] print:text-blue-600">
                <span>{resumeData.personal.phone}</span>
                <span>•</span>
                <a href={`mailto:${resumeData.personal.email}`} className="hover:underline">
                  {resumeData.personal.email}
                </a>
                <span>•</span>
                <a href={resumeData.personal.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h3 className="font-mono-code text-xs text-[#00E5FF] print:text-blue-600 font-bold uppercase tracking-widest mb-2">
                // PROFESSIONAL SUMMARY
              </h3>
              <p className="text-xs sm:text-sm font-light leading-relaxed text-slate-300 print:text-gray-800 bg-white/5 print-bg p-4 rounded-xl border border-white/5 print-border">
                {resumeData.personal.summary}
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-mono-code text-xs text-[#00E5FF] print:text-blue-600 font-bold uppercase tracking-widest mb-3">
                // EDUCATION
              </h3>
              <div className="space-y-2">
                {resumeData.education.map(edu => (
                  <div key={edu.degree} className="p-3.5 rounded-xl bg-white/5 print-bg border border-white/5 print-border font-mono-code text-xs flex justify-between items-center">
                    <div>
                      <div className="text-white print:text-black font-bold">{edu.degree}</div>
                      <div className="text-slate-400 print:text-gray-600 text-[11px]">{edu.institution} ({edu.period})</div>
                    </div>
                    <div className="text-[#00E5FF] print:text-blue-600 font-bold text-sm">{edu.score}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience & Projects */}
            <div>
              <h3 className="font-mono-code text-xs text-[#00E5FF] print:text-blue-600 font-bold uppercase tracking-widest mb-3">
                // WORK EXPERIENCE & MAJOR PROJECTS
              </h3>
              <div className="space-y-4">
                {resumeData.experience.map(exp => (
                  <div key={exp.company} className="glass-card print-bg p-4 sm:p-5 rounded-xl border border-white/10 print-border space-y-2">
                    <div className="flex flex-wrap justify-between items-start">
                      <div>
                        <h4 className="font-display text-sm sm:text-base font-bold text-white print:text-black">{exp.role}</h4>
                        <p className="font-mono-code text-xs text-[#8A5CFF] print:text-purple-700">{exp.company}</p>
                      </div>
                      <span className="font-mono-code text-xs text-slate-400 print:text-gray-500">{exp.period}</span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300 print:text-gray-700 list-disc list-inside font-light">
                      {exp.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Projects Detail */}
            <div>
              <h3 className="font-mono-code text-xs text-[#00E5FF] print:text-blue-600 font-bold uppercase tracking-widest mb-3">
                // FEATURED PROJECT PORTFOLIO
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {resumeData.projects.map(p => (
                  <div key={p.id} className="p-4 rounded-xl bg-white/5 print-bg border border-white/5 print-border space-y-1.5">
                    <div className="flex justify-between items-center">
                      <h4 className="font-display text-xs sm:text-sm font-bold text-white print:text-black">{p.title}</h4>
                      <span className="font-mono-code text-[10px] text-[#8A5CFF] print:text-purple-600">{p.badge}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 print:text-gray-700 font-light line-clamp-3">{p.description}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {p.tech.map(t => (
                        <span key={t} className="px-1.5 py-0.5 rounded bg-white/10 print:bg-gray-200 text-[9px] font-mono-code text-slate-300 print:text-gray-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-mono-code text-xs text-[#00E5FF] print:text-blue-600 font-bold uppercase tracking-widest mb-3">
                // INDUSTRY TRAINING & CERTIFICATIONS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono-code text-xs">
                {resumeData.trainings.map(t => (
                  <div key={t.title} className="p-3 rounded-xl bg-white/5 print-bg border border-white/5 print-border">
                    <div className="text-white print:text-black font-semibold">{t.title}</div>
                    <div className="text-slate-400 print:text-gray-600 text-[11px]">{t.organization} ({t.period})</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
