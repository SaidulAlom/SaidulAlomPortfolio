"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";

import dynamic from "next/dynamic";
import Loader from "../components/Loader";
import Header from "../components/Header";
import MenuOverlay from "../components/MenuOverlay";
import Hero from "../components/sections/Hero";

const About = dynamic(() => import("../components/sections/About"));
const Skills = dynamic(() => import("../components/sections/Skills"));
const Projects = dynamic(() => import("../components/sections/Projects"));
const Experience = dynamic(() => import("../components/sections/Experience"));
const Testimonials = dynamic(() => import("../components/sections/Testimonials"));
const Contact = dynamic(() => import("../components/sections/Contact"));

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
    scale: useTransform(scrollYProgress, [1 / 7, 1 / 7 + 0.1], [1, 0.9]),
    opacity: useTransform(scrollYProgress, [1 / 7, 1 / 7 + 0.1], [1, 0]),
    y: useTransform(scrollYProgress, [0, 1], ["0vh", "0vh"])
  };

  const aboutStyles = {
    scale: useTransform(scrollYProgress, [2 / 7, 2 / 7 + 0.1], [1, 0.9]),
    opacity: useTransform(scrollYProgress, [2 / 7, 2 / 7 + 0.1], [1, 0]),
    y: useTransform(scrollYProgress, [1 / 7 - 0.1, 1 / 7], ["100vh", "0vh"])
  };

  const skillsStyles = {
    scale: useTransform(scrollYProgress, [3 / 7, 3 / 7 + 0.1], [1, 0.9]),
    opacity: useTransform(scrollYProgress, [3 / 7, 3 / 7 + 0.1], [1, 0]),
    y: useTransform(scrollYProgress, [2 / 7 - 0.1, 2 / 7], ["100vh", "0vh"])
  };

  const projectsStyles = {
    scale: useTransform(scrollYProgress, [4 / 7, 4 / 7 + 0.1], [1, 0.9]),
    opacity: useTransform(scrollYProgress, [4 / 7, 4 / 7 + 0.1], [1, 0]),
    y: useTransform(scrollYProgress, [3 / 7 - 0.1, 3 / 7], ["100vh", "0vh"])
  };

  const experienceStyles = {
    scale: useTransform(scrollYProgress, [5 / 7, 5 / 7 + 0.1], [1, 0.9]),
    opacity: useTransform(scrollYProgress, [5 / 7, 5 / 7 + 0.1], [1, 0]),
    y: useTransform(scrollYProgress, [4 / 7 - 0.1, 4 / 7], ["100vh", "0vh"])
  };

  const testimonialsStyles = {
    scale: useTransform(scrollYProgress, [6 / 7, 6 / 7 + 0.1], [1, 0.9]),
    opacity: useTransform(scrollYProgress, [6 / 7, 6 / 7 + 0.1], [1, 0]),
    y: useTransform(scrollYProgress, [5 / 7 - 0.1, 5 / 7], ["100vh", "0vh"])
  };

  const contactStyles = {
    scale: useTransform(scrollYProgress, [0.99, 1], [1, 1]),
    opacity: useTransform(scrollYProgress, [0.99, 1], [1, 1]),
    y: useTransform(scrollYProgress, [6 / 7 - 0.1, 6 / 7], ["100vh", "0vh"])
  };

  return (
    <div ref={containerRef} className={`bg-black text-white font-sans selection:bg-[#a3ff33] selection:text-black relative ${loading ? 'h-screen overflow-hidden' : ''}`}>
      <AnimatePresence>
        {loading && <Loader key="loader" progress={progress} />}
      </AnimatePresence>

      <div className="relative">
        <Header onOpenMenu={() => setIsMenuOpen(true)} />
        <Hero styles={homeStyles} currentYear={currentYear} />
        <About styles={aboutStyles} />
        <Skills styles={skillsStyles} />
        <Projects styles={projectsStyles} />
        <Experience styles={experienceStyles} />
        <Testimonials styles={testimonialsStyles} />
        <Contact styles={contactStyles} />

        {/* Spacer to allow scrolling through all sections */}
        <div className="h-[500vh]" />

        <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>

      {/* Subtle Grain/Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[70] opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}
