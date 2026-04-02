"use client";

import { motion } from "motion/react";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  onOpenMenu: () => void;
}

export default function Header({ onOpenMenu }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 p-8 md:p-12 flex justify-between items-center z-[100] pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        className="pointer-events-auto cursor-pointer"
      >
        <Link href="/">
          <img src="/SaidulAlomLogo.png" alt="Saidul Alom Logo" className="h-8 md:h-10 w-auto object-contain hover:scale-105 transition-transform duration-300" />
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
    </header>
  );
}
