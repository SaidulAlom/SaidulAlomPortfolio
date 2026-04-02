"use client";

import { motion, MotionValue } from "motion/react";

interface SkillsProps {
  styles: {
    scale: MotionValue<number>;
    opacity: MotionValue<number>;
    y: MotionValue<string>;
  };
}

export default function Skills({ styles }: SkillsProps) {
  return (
    <motion.section 
      id="skills" 
      style={{ y: styles.y, scale: styles.scale, opacity: styles.opacity }}
      className="h-screen sticky top-0 flex items-center justify-center p-8 md:p-24 bg-neutral-950 z-30"
    >
      <div className="max-w-4xl w-full">
        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase">Skills</h2>
            <div className="h-[2px] flex-1 bg-[#a3ff33]/20" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                category: "Frontend", 
                focus: "UI/UX & Performance",
                description: "Architecting buttery-smooth, interactive client interfaces that hook users and optimize conversion funnels.",
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"] 
              },
              { 
                category: "Backend", 
                focus: "APIs & Scalability",
                description: "Engineering secure, high-throughput server ecosystems capable of processing massive datasets dynamically.",
                skills: ["Node.js", "Express", "PostgreSQL", "Firebase"] 
              },
              { 
                category: "Tools", 
                focus: "DevOps & Workflow",
                description: "Automating CI/CD deployment pipelines, containerizing environments, and strictly maintaining code health.",
                skills: ["Git", "Docker", "Vercel", "Figma", "Sanity"] 
              }
            ].map((item, idx) => (
              <div 
                key={item.category}
                className="p-8 border border-white/10 rounded-3xl bg-black/50 hover:bg-white/5 hover:border-[#a3ff33]/50 transition-colors flex flex-col group h-full"
              >
                <div className="flex flex-col gap-1 mb-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide group-hover:text-[#a3ff33] transition-colors">{item.category}</h3>
                  <p className="text-[#a3ff33] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">{item.focus}</p>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map(skill => (
                    <motion.span 
                      key={skill} 
                      whileHover={{ y: -3, backgroundColor: "#a3ff33", color: "#000000" }}
                      className="px-3 py-1.5 border border-white/10 bg-white/5 rounded-full text-[10px] md:text-xs font-semibold cursor-default transition-colors duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
