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
    text: "Working with Saidul was smooth and professional from day one. He took our vague idea and turned it into a polished, fast product. Communication was clear, deadlines were met, and the code quality was exceptional.",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager, FinEdge",
    avatar: "PS",
    text: "Saidul rebuilt our dashboard from scratch in under 3 weeks. The new UI cut our support tickets by half — users just figured things out on their own. Genuinely impressive work.",
  },
  {
    name: "Rahul Das",
    role: "CTO, BuildSmart",
    avatar: "RD",
    text: "I've worked with a lot of freelance developers. Saidul stands out because he thinks like a product person, not just a coder. He flagged UX issues we hadn't even noticed and fixed them proactively.",
  },
];

export default function Testimonials({ styles }: TestimonialsProps) {
  return (
    <motion.section
      id="testimonials"
      style={{ y: styles.y, scale: styles.scale, opacity: styles.opacity }}
      className="h-screen sticky top-0 flex items-center justify-center px-4 py-8 md:p-24 bg-neutral-950 z-55"
    >
      <div className="max-w-6xl w-full h-[88vh] flex flex-col">
        <div className="flex items-center gap-4 mb-6 md:mb-12 shrink-0">
          <h2 className="text-3xl md:text-7xl font-bold tracking-tighter uppercase">
            Testimonials
          </h2>
          <div className="h-[2px] flex-1 bg-[#a3ff33]/20 min-w-[30px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 overflow-y-auto pb-6 pr-1 flex-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, borderColor: "rgba(163,255,51,0.4)" }}
              className="flex flex-col gap-4 md:gap-6 p-5 md:p-8 border border-white/10 rounded-3xl bg-white/[0.03] transition-colors duration-300"
            >
              <Quote size={22} className="text-[#a3ff33] opacity-60 shrink-0" />
              <p className="text-gray-300 leading-relaxed text-xs md:text-sm flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 md:gap-4 pt-3 md:pt-4 border-t border-white/10">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#a3ff33]/20 border border-[#a3ff33]/30 flex items-center justify-center text-[#a3ff33] text-[10px] md:text-xs font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-xs md:text-sm text-white">{t.name}</p>
                  <p className="text-[10px] md:text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
