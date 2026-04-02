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
      className="h-screen sticky top-0 flex items-center justify-center p-8 md:p-24 bg-neutral-950 z-55"
    >
      <div className="max-w-6xl w-full">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase whitespace-nowrap">
            Testimonials
          </h2>
          <div className="h-[2px] flex-1 bg-[#a3ff33]/20 min-w-[50px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, borderColor: "rgba(163,255,51,0.4)" }}
              className="flex flex-col gap-6 p-8 border border-white/10 rounded-3xl bg-white/[0.03] transition-colors duration-300"
            >
              <Quote size={28} className="text-[#a3ff33] opacity-60 shrink-0" />
              <p className="text-gray-300 leading-relaxed text-sm flex-1">"{t.text}"</p>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#a3ff33]/20 border border-[#a3ff33]/30 flex items-center justify-center text-[#a3ff33] text-xs font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-sm text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
