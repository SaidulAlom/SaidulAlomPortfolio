"use client";

import { motion, MotionValue } from "motion/react";
import { Code2, DatabaseZap, Workflow } from "lucide-react";

interface SkillsProps {
  styles: {
    scale: MotionValue<number>;
    opacity: MotionValue<number>;
    y: MotionValue<string>;
  };
}

const skillGroups = [
  {
    category: "Frontend",
    focus: "UI Systems",
    description:
      "Designing responsive, motion-rich interfaces that feel premium, load fast, and stay maintainable as products grow.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Motion"],
    icon: Code2,
    accent: "from-[#a3ff33]/30 via-[#a3ff33]/10 to-transparent",
    glow: "bg-[#a3ff33]/12",
  },
  {
    category: "Backend",
    focus: "Data + APIs",
    description:
      "Building secure application backends with clean APIs, database design, validation layers, and production-focused architecture.",
    skills: ["Node.js", "Express", "PostgreSQL", "Supabase", "Prisma", "Firebase"],
    icon: DatabaseZap,
    accent: "from-[#38bdf8]/30 via-[#38bdf8]/10 to-transparent",
    glow: "bg-sky-400/12",
  },
  {
    category: "Tools",
    focus: "Workflow Stack",
    description:
      "Shaping reliable developer workflows with version control, deployment pipelines, CMS tooling, design handoff, and shipping discipline.",
    skills: ["Git", "Docker", "Vercel", "Render", "Figma", "Sanity"],
    icon: Workflow,
    accent: "from-[#f97316]/30 via-[#f97316]/10 to-transparent",
    glow: "bg-orange-400/12",
  },
];

export default function Skills({ styles }: SkillsProps) {
  return (
    <motion.section
      id="skills"
      style={{ y: styles.y, scale: styles.scale, opacity: styles.opacity }}
      className="min-h-screen sticky top-0 flex items-start md:items-center justify-center px-4 py-20 md:p-24 bg-neutral-950 z-30 overflow-y-auto"
    >
      <div className="max-w-6xl w-full flex flex-col">
        <div className="flex items-center gap-4 mb-4 md:mb-8 shrink-0">
          <h2 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase">Skills</h2>
          <div className="h-[2px] flex-1 bg-[#a3ff33]/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {skillGroups.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 md:p-6"
              >
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${item.accent}`} />
                <div className={`pointer-events-none absolute -right-10 top-8 h-24 w-24 rounded-full blur-3xl transition-opacity duration-500 ${item.glow} opacity-70 group-hover:opacity-100`} />

                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.26em] text-white/60">
                      <span>{`0${idx + 1}`}</span>
                      <span className="h-1 w-1 rounded-full bg-white/30" />
                      <span>{item.focus}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#a3ff33]">{item.category}</h3>
                      <p className="mt-1 max-w-[28ch] text-xs leading-relaxed text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-white/80 transition-all duration-300 group-hover:border-[#a3ff33]/40 group-hover:text-[#a3ff33]">
                    <Icon size={18} />
                  </div>
                </div>

                <div className="relative z-10 mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">Core Stack</p>
                  <p className="text-xs font-medium text-white/45">{item.skills.length} tools</p>
                </div>

                <div className="relative z-10 mt-3 grid grid-cols-2 gap-2">
                  {item.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2 }}
                      className="flex min-h-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-center text-[11px] font-semibold text-white/85 transition-colors duration-300 hover:border-[#a3ff33]/35 hover:bg-[#a3ff33]/10 hover:text-[#e9ffc8]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
