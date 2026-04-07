"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  title: string;
}

export default function ImageSlider({ images, title }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-black/50 mb-16 group bg-neutral-900/50 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 p-4 md:p-8"
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} Screenshot ${currentIndex + 1}`}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-[#a3ff33] hover:text-black hover:border-[rgba(163,255,51,0.5)] transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-[#a3ff33] hover:text-black hover:border-[rgba(163,255,51,0.5)] transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-6 bg-[#a3ff33]" : "w-2 bg-white/30 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
