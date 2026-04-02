"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, Download } from "lucide-react";

export default function ResumeModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl h-[90vh] bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Toolbar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
            <span className="text-xs font-bold uppercase tracking-widest text-[#a3ff33]">Resume Preview</span>
            <div className="flex items-center gap-3">
              <a
                href="/Saidul_Alom_Resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-[#a3ff33] text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors"
              >
                <Download size={13} /> Download
              </a>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* PDF Embed */}
          <iframe
            src="/Saidul_Alom_Resume.pdf"
            className="flex-1 w-full"
            title="Saidul Alom Resume"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
