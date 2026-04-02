"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";

import CustomCursor from "../components/CustomCursor";
import Loader from "../components/Loader";
import Header from "../components/Header";
import MenuOverlay from "../components/MenuOverlay";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";

export default function App() {
  const currentYear = new Date().getFullYear();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Animation values for stacking effect
  const homeStyles = {
    scale: useTransform(scrollYProgress, [1/6, 1/6 + 0.1], [1, 0.9]),
    opacity: useTransform(scrollYProgress, [1/6, 1/6 + 0.1], [1, 0]),
    y: useTransform(scrollYProgress, [0, 1], ["0vh", "0vh"])
  };

  const aboutStyles = {
    scale: useTransform(scrollYProgress, [2/6, 2/6 + 0.1], [1, 0.9]),
    opacity: useTransform(scrollYProgress, [2/6, 2/6 + 0.1], [1, 0]),
    y: useTransform(scrollYProgress, [1/6 - 0.1, 1/6], ["100vh", "0vh"])
  };

  const skillsStyles = {
    scale: useTransform(scrollYProgress, [3/6, 3/6 + 0.1], [1, 0.9]),
    opacity: useTransform(scrollYProgress, [3/6, 3/6 + 0.1], [1, 0]),
    y: useTransform(scrollYProgress, [2/6 - 0.1, 2/6], ["100vh", "0vh"])
  };

  const projectsStyles = {
    scale: useTransform(scrollYProgress, [4/6, 4/6 + 0.1], [1, 0.9]),
    opacity: useTransform(scrollYProgress, [4/6, 4/6 + 0.1], [1, 0]),
    y: useTransform(scrollYProgress, [3/6 - 0.1, 3/6], ["100vh", "0vh"])
  };

  const experienceStyles = {
    scale: useTransform(scrollYProgress, [5/6, 5/6 + 0.1], [1, 0.9]),
    opacity: useTransform(scrollYProgress, [5/6, 5/6 + 0.1], [1, 0]),
    y: useTransform(scrollYProgress, [4/6 - 0.1, 4/6], ["100vh", "0vh"])
  };

  const contactStyles = {
    scale: useTransform(scrollYProgress, [0.99, 1], [1, 1]),
    opacity: useTransform(scrollYProgress, [0.99, 1], [1, 1]),
    y: useTransform(scrollYProgress, [5/6 - 0.1, 5/6], ["100vh", "0vh"])
  };

  return (
    <div ref={containerRef} className="bg-black text-white font-sans selection:bg-[#a3ff33] selection:text-black relative cursor-none">
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" progress={progress} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <Header onOpenMenu={() => setIsMenuOpen(true)} />
            <Hero styles={homeStyles} currentYear={currentYear} />
            <About styles={aboutStyles} />
            <Skills styles={skillsStyles} />
            <Projects styles={projectsStyles} />
            <Experience styles={experienceStyles} />
            <Contact styles={contactStyles} />

            {/* Spacer to allow scrolling through all sections */}
            <div className="h-[500vh]" />

            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Grain/Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[70] opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}
