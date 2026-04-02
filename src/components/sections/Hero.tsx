"use client";

import { motion, MotionValue } from "motion/react";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import ParticleBackground from "../ParticleBackground";
import ResumeModal from "../ResumeModal";

interface HeroProps {
  styles: {
    scale: MotionValue<number>;
    opacity: MotionValue<number>;
    y: MotionValue<string>;
  };
  currentYear: number;
}

export default function Hero({ styles, currentYear }: HeroProps) {
  const [showResume, setShowResume] = useState(false);
  return (
    <motion.section 
      id="home" 
      style={{ scale: styles.scale, opacity: styles.opacity }}
      className="h-screen sticky top-0 overflow-hidden flex flex-col md:block z-10"
    >
      {/* Background Image Container */}
      <div className="relative md:absolute md:inset-0 z-0 bg-neutral-900 h-[65vh] md:h-full shrink-0">
        <ParticleBackground />
        <img 
          src="https://lh3.googleusercontent.com/d/1zl9tr3oqn7zPfyddQULvcKVfL1A9UQKq" 
          alt="Saidul Alom Portrait" 
          className="w-full h-full object-cover opacity-90 transition-opacity duration-1000"
          style={{ objectPosition: 'center 35%' }}
          referrerPolicy="no-referrer"
        />
        
        {/* Desktop Overlays */}
        <div className="hidden md:block absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80"></div>
        <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_100%)] opacity-50"></div>
        
        {/* Mobile Gradient Transition */}
        <div className="md:hidden absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black"></div>
      </div>

      {/* Main Content */}
      <main className="relative md:absolute md:inset-0 flex flex-col justify-center px-8 md:px-12 z-10 py-12 md:py-0">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-xl md:text-2xl font-medium drop-shadow-md">Hey👋, I build high-performance web apps that scale, convert, and make businesses money.</span>
          </motion.div>

          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-[12vw] md:text-[10vw] leading-[0.9] font-bold tracking-tighter text-[#a3ff33] uppercase drop-shadow-[0_10px_30px_rgba(163,255,51,0.2)]"
            >
              SAIDUL ALOM
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <button 
                onClick={() => {
                  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                  window.scrollTo({ top: (2 / 6) * maxScroll, behavior: "smooth" });
                }}
                className="btn-glow px-8 py-3 bg-[#a3ff33] text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(163,255,51,0.3)] w-full sm:w-auto"
              >
                View Projects
              </button>
              <button 
                onClick={() => {
                  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                  window.scrollTo({ top: (4 / 6) * maxScroll, behavior: "smooth" });
                }}
                className="btn-glow px-8 py-3 bg-transparent border border-[#a3ff33] text-[#a3ff33] font-bold uppercase tracking-widest text-xs rounded-full hover:bg-[#a3ff33] hover:text-black transition-all w-full sm:w-auto"
              >
                Hire Me
              </button>
              <button
                onClick={() => setShowResume(true)}
                className="btn-glow px-8 py-3 bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:border-white transition-all w-full sm:w-auto"
              >
                Preview Resume
              </button>
            </motion.div>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              className="h-[1px] bg-[#a3ff33]/30 mt-8"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 text-sm text-gray-400 font-medium flex items-center gap-4"
          >
            <span>@{currentYear}</span>
            <span className="w-8 h-[1px] bg-gray-700"></span>
            <span className="uppercase tracking-widest text-[10px]">Based in India</span>
          </motion.div>
        </div>
      </main>

      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <div className="w-[26px] h-[44px] border-2 border-white rounded-full relative flex justify-center">
          <motion.div
            animate={{ 
              y: [0, 20, 20],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              times: [0, 0.2, 0.8, 1],
              ease: "easeInOut"
            }}
            className="w-1 h-1 bg-white rounded-full absolute top-2"
          />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">Scroll Down</span>
      </motion.div>

      {/* Footer */}
      <footer className="relative md:absolute md:bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row justify-between items-end md:items-center gap-8 z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="space-y-1"
        >
          <div className="text-xs md:text-sm tracking-tight group">
            <span className="text-gray-500 group-hover:text-[#a3ff33] transition-colors">E </span>
            <a href="mailto:saidulalom525@gmail.com" className="hover:text-[#a3ff33] transition-colors">saidulalom525@gmail.com</a>
          </div>
          <div className="text-xs md:text-sm tracking-tight group">
            <span className="text-gray-500 group-hover:text-[#a3ff33] transition-colors">T </span>
            <span className="hover:text-[#a3ff33] transition-colors cursor-default">+91 84860 28737</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm font-medium"
        >
          {[
            { label: 'X', url: 'https://x.com/S_Alom_83' },
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/saidulalom/' },
            { label: 'GitHub', url: 'https://github.com/SaidulAlom' },
            { label: 'CodePen', url: 'https://codepen.io/SaidulAlom' }
          ].map((link, i) => (
            <motion.a 
              key={link.label} 
              href={link.url} 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: "#a3ff33" }}
              className="flex items-center gap-1 transition-colors group cursor-pointer"
            >
              <span className="text-gray-500 group-hover:text-[#a3ff33] transition-colors">/</span> {link.label}
            </motion.a>
          ))}
        </motion.div>
      </footer>
    </motion.section>
  );
}
