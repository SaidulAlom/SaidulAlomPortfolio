"use client";

import { motion } from "motion/react";

interface LoaderProps {
  progress: number;
}

export default function Loader({ progress }: LoaderProps) {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-black flex flex-col justify-center items-center p-8"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-500"
        >
          SAIDUL ALOM — PORTFOLIO
        </motion.div>
        <div className="flex items-baseline gap-4">
          <motion.span 
            className="text-[20vw] md:text-[15vw] leading-none font-bold tracking-tighter text-[#a3ff33]"
          >
            {Math.min(progress, 100)}%
          </motion.span>
        </div>
        <div className="w-full h-[1px] bg-gray-800 mt-8 relative overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="absolute inset-0 bg-[#a3ff33]"
          />
        </div>
      </div>
    </motion.div>
  );
}
