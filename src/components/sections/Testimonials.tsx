"use client";

import { motion, MotionValue } from "motion/react";
import { Quote } from "lucide-react";

interface TestimonialsProps {
  styles: {
    scale: MotionValue<number>;
    opacity: MotionValue<number>;
    y: MotionValue<string>;
  };
}

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder, NexaLaunch",
    avatar: "AM",
    tag: "Product Build",
    text: "Working with Saidul was smooth and professional from day one. He took our vague idea and turned it into a polished, fast product. Communication was clear, deadlines were met, and the code quality was exceptional.",
    accent: "from-[#a3ff33]/30 via-[#a3ff33]/10 to-transparent",
    glow: "bg-[#a3ff33]/12",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager, FinEdge",
    avatar: "PS",
    tag: "Dashboard Rebuild",
    text: "Saidul rebuilt our dashboard from scratch in under 3 weeks. The new UI cut our support tickets by half — users just figured things out on their own. Genuinely impressive work.",
    accent: "from-[#38bdf8]/30 via-[#38bdf8]/10 to-transparent",
    glow: "bg-sky-400/12",
  },
  {
    name: "Rahul Das",
    role: "CTO, BuildSmart",
    avatar: "RD",
    tag: "Full Stack",
    text: "I've worked with a lot of freelance developers. Saidul stands out because he thinks like a product person, not just a coder. He flagged UX issues we hadn't even noticed and fixed them proactively.",
    accent: "from-[#f97316]/30 via-[#f97316]/10 to-transparent",
    glow: "bg-orange-400/12",
  },
];

export default function Testimonials({ styles }: TestimonialsProps) {
  return (
    <motion.section
      id="testimonials"
      style={{ y: styles.y, scale: styles.scale, opacity: styles.opacity }}
      className="min-h-screen sticky top-0 flex items-start md:items-center justify-center px-4 py-20 md:p-24 bg-neutral-950 z-55 overflow-y-auto"
    >
      <div className="max-w-6xl w-full flex flex-col">
        <div className="flex items-center gap-4 mb-4 md:mb-8 shrink-0">
          <h2 className="text-3xl md:text-7xl font-bold tracking-tighter uppercase">Testimonials</h2>
          <div className="h-[2px] flex-1 bg-[#a3ff33]/20 min-w-[30px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 md:p-6"
            >
              <div className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${t.accent}`} />
              <div className={`pointer-events-none absolute -right-10 top-8 h-24 w-24 rounded-full blur-3xl transition-opacity duration-500 ${t.glow} opacity-70 group-hover:opacity-100`} />

              <div className="relative z-10 flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.26em] text-white/60">
                    <span>{`0${i + 1}`}</span>
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    <span>{t.tag}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#a3ff33]">{t.name}</h3>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-white/80 transition-all duration-300 group-hover:border-[#a3ff33]/40 group-hover:text-[#a3ff33]">
                  <Quote size={18} />
                </div>
              </div>

              <div className="relative z-10 mt-4 border-t border-white/10 pt-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">Testimonial</p>
              </div>

              <p className="relative z-10 mt-3 text-xs leading-relaxed text-gray-400">
                &ldquo;{t.text}&rdquo;
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
