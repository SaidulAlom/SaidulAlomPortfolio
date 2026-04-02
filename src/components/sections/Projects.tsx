"use client";

import { useState } from "react";
import { motion, MotionValue, AnimatePresence } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectsProps {
  styles: {
    scale: MotionValue<number>;
    opacity: MotionValue<number>;
    y: MotionValue<string>;
  };
}

export default function Projects({ styles }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Full Stack", "Frontend", "E-Commerce"];

  const projectsData = [
    {
      title: "OneSoul e-Corner",
      slug: "onesoul-e-corner",
      category: "E-Commerce",
      tech: "E-Commerce Application",
      live: "https://onesoul-e-corner.vercel.app/",
      github: "https://github.com/SaidulAlom/OneSoul-e-Corner",
      image: "/projects/onesoul.png"
    },
    {
      title: "Buildmart10",
      slug: "buildmart10",
      category: "E-Commerce",
      tech: "E-Commerce",
      live: "https://buildmart10.netlify.app/",
      github: "https://github.com/SaidulAlom",
      image: "/projects/BuildMart.png"
    },
    {
      title: "Guwahati Flavors",
      slug: "guwahati-flavors",
      category: "Full Stack",
      tech: "Food Ordering Platform",
      live: "https://guwahatiflavors.netlify.app/",
      github: "https://github.com/SaidulAlom/Guwahati-Flavors",
      image: "/projects/guwahati-flavors.png"
    },
    {
      title: "Bella Vista",
      slug: "bella-vista",
      category: "Full Stack",
      tech: "Property / Hotel Website",
      live: "https://bella-vista-restro.vercel.app/",
      github: "https://github.com/SaidulAlom/Bella-Vista/",
      image: "/projects/bella-vista-restro.png"
    },
    {
      title: "FinTrack",
      slug: "fintrack",
      category: "Full Stack",
      tech: "Finance Tracker",
      live: "https://fintrackfinances.netlify.app/",
      github: "https://github.com/SaidulAlom/FinTrack",
      image: "/projects/fintrack.png"
    },
    {
      title: "FitFlow Gym",
      slug: "fitflow-gym",
      category: "Frontend",
      tech: "Fitness Website",
      live: "https://fitflow-gym.netlify.app/",
      github: "https://github.com/SaidulAlom/FitFlow-Gym-Website-",
      image: "/projects/fitflow.png"
    },
    {
      title: "Modern Landing Page",
      slug: "modern-landing-page",
      category: "Frontend",
      tech: "Responsive Design",
      live: "https://modern-responsive-landing-page.vercel.app/",
      github: "https://github.com/SaidulAlom/Modern-Responsive-Landing-Page",
      image: "/projects/ModernApp.png"
    },
    {
      title: "Weather App",
      slug: "weather-app",
      category: "Frontend",
      tech: "Weather Dashboard",
      live: "https://weather-app-gamma-eight-59.vercel.app/",
      github: "https://github.com/SaidulAlom/weather-app",
      image: "/projects/weather-app.png"
    },
    {
      title: "Futuristic Start-up",
      slug: "futuristic-start-up",
      category: "Frontend",
      tech: "Landing Page",
      live: "https://futuristic-start-up-landing-page.vercel.app/",
      github: "https://github.com/SaidulAlom/Futuristic-Start-up-Landing-Page",
      image: "/projects/futuristic-start-up-landing-page.png"
    }
  ];

  const filteredProjects = projectsData.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <motion.section 
      id="projects" 
      style={{ y: styles.y, scale: styles.scale, opacity: styles.opacity }}
      className="h-screen sticky top-0 flex items-center justify-center p-8 md:p-24 bg-black z-40"
    >
      <div className="max-w-6xl w-full h-[85vh] flex flex-col">
        {/* Header and Filter Block */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 shrink-0 gap-6">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase">Projects</h2>
            <div className="h-[2px] w-12 md:flex-1 bg-[#a3ff33]/20 md:min-w-[50px]" />
          </div>
          
          {/* Filtering Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 lg:pb-0 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap border ${
                  activeFilter === cat 
                    ? "bg-[#a3ff33] text-black border-[#a3ff33] shadow-[0_0_15px_rgba(163,255,51,0.3)] scale-105" 
                    : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {/* Scrollable grid area for the projects */}
        <div className="overflow-y-auto pb-12 pr-2 md:pr-4 flex-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={p.title}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="border border-white/10 rounded-2xl bg-black/50 group relative overflow-hidden flex flex-col min-h-[350px]"
                >
                  {/* Image Section */}
                  <div className="h-48 w-full overflow-hidden relative border-b border-white/10 shrink-0 bg-neutral-900/50">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-[#a3ff33]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-1 relative z-10">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#a3ff33] transition-colors">{p.title}</h3>
                    <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 flex-1">{p.tech}</p>
                    
                    <div className="flex flex-col gap-4 mt-auto">
                      <div className="flex gap-6">
                        {p.live && (
                          <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-[#a3ff33] transition-colors">
                            <ExternalLink size={16} /> Live
                          </a>
                        )}
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-[#a3ff33] transition-colors">
                            <Github size={16} /> Code
                          </a>
                        )}
                      </div>
                      
                      <Link href={`/project/${p.slug}`} className="w-full text-center py-3 border border-white/20 text-white rounded-xl hover:bg-[#a3ff33] hover:border-[#a3ff33] hover:text-black font-bold uppercase tracking-widest transition-all duration-300 mt-2 text-[10px] md:text-xs">
                        View Case Study
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
