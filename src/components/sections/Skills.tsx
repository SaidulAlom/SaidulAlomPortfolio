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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
              { category: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "Firebase"] },
              { category: "Tools", skills: ["Git", "Docker", "Vercel", "Figma"] }
            ].map((item, idx) => (
              <div 
                key={item.category}
                className="p-8 border border-white/10 rounded-2xl bg-black/50"
              >
                <h3 className="text-[#a3ff33] text-sm font-bold uppercase tracking-widest mb-6">{item.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {item.skills.map(skill => (
                    <motion.span 
                      key={skill} 
                      whileHover={{ y: -5, backgroundColor: "#a3ff33", color: "#000000" }}
                      className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium cursor-default transition-colors duration-300"
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
