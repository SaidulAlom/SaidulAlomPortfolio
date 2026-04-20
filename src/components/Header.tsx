"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  onOpenMenu: () => void;
}

export default function Header({ onOpenMenu }: HeaderProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="h-[2px] w-full bg-[#a3ff33] shadow-[0_0_8px_rgba(163,255,51,0.6)]"
      />
      <div className="p-6 md:p-12 flex justify-between items-center gap-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        className="pointer-events-auto cursor-pointer shrink-0"
      >
        <Link href="/">
            <Image src="/SaidulAlomLogo.png" alt="Saidul Alom Logo" width={64} height={64} className="h-10 sm:h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300" priority />
          </Link>
      </motion.div>
      
      <motion.button 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        onClick={onOpenMenu}
        className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-4 hover:scale-105 transition-transform duration-300 group pointer-events-auto shadow-2xl"
      >
        <span className="text-sm font-bold">Menu</span>
        <MoreHorizontal size={18} className="group-hover:rotate-90 transition-transform duration-300" />
      </motion.button>
      </div>
    </header>
  );
}
