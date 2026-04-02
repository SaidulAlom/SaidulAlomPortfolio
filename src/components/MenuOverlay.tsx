"use client";

import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        const scrollRatio = window.scrollY / maxScroll;
        const index = Math.round(scrollRatio * 6);
        setActiveIndex(Math.min(Math.max(index, 0), 5));
      }
    }
  }, [isOpen]);
  const menuLinks = [
    { name: "Home", index: 0 },
    { name: "About", index: 1 },
    { name: "Skills", index: 2 },
    { name: "Projects", index: 3 },
    { name: "Experience", index: 4 },
    { name: "Contact", index: 5 },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    e.preventDefault();
    onClose();
    
    // Smooth scroll perfectly matched with Framer Motion timelines (index / 6)
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const targetY = (index / 6) * maxScroll;
    
    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-[#a3ff33] text-black flex flex-col p-6 md:p-12"
        >
          <div className="flex justify-between items-center mb-10 md:mb-20">
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase">NAVIGATION</span>
            <button 
              onClick={onClose}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shrink-0"
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {menuLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                onClick={(e) => handleNavClick(e, link.index)}
                className={`text-[12vw] md:text-[7vw] lg:text-[5vw] xl:text-[4vw] font-bold leading-none tracking-tighter hover:italic transition-all duration-300 cursor-pointer ${
                  i === activeIndex ? "text-black" : "text-black/30 hover:text-black/60"
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col md:flex-row justify-between gap-8 pt-8 border-t border-black/10">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase opacity-50">Socials</p>
              <div className="flex gap-4 text-sm font-medium">
                {[
                  { id: 'X', name: 'X', url: 'https://x.com/S_Alom_83' },
                  { id: 'LN', name: 'LinkedIn', url: 'https://www.linkedin.com/in/saidulalom/' },
                  { id: 'GH', name: 'GitHub', url: 'https://github.com/SaidulAlom' },
                  { id: 'CP', name: 'CodePen', url: 'https://codepen.io/SaidulAlom' }
                ].map(s => (
                  <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" title={s.name} className="hover:underline">{s.id}</a>
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase opacity-50">Get in touch</p>
              <a href="mailto:saidulalom525@gmail.com" className="text-sm font-medium hover:underline">saidulalom525@gmail.com</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
