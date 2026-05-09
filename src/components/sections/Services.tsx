"use client";

import { motion, MotionValue, useAnimationControls } from "motion/react";
import { Check, Star, Zap, Clock } from "lucide-react";

interface ServicesProps {
  styles: {
    scale: MotionValue<number>;
    opacity: MotionValue<number>;
    y: MotionValue<string>;
  };
}

const services = [
  {
    title: "Portfolio Website",
    price: "$99",
    delivery: "Delivered in 2 Days",
    description: "Professional portfolio websites for students, job seekers, developers, and freelancers.",
    features: ["Responsive Design", "Dark/Light Mode", "Contact Form", "SEO Optimization", "Netlify/Vercel Deployment"],
    popular: false,
  },
  {
    title: "Landing Page",
    price: "$149",
    delivery: "Delivered in 3 Days",
    description: "High-converting landing pages for startups, coaches, and small businesses.",
    features: ["Modern UI/UX", "SEO Optimized", "Fast Loading", "Contact Form Integration"],
    popular: true,
  },
  {
    title: "Bug Fixing & UI Improvements",
    price: "$25+",
    delivery: "Quick Turnaround",
    description: "Fix responsive issues, styling bugs, animation issues, and deployment problems.",
    features: ["Responsive Fixes", "UI Improvements", "Performance Optimization", "Quick Delivery"],
    popular: false,
  },
];

function ServiceCard({ service, i }: { service: typeof services[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`flex flex-col flex-shrink-0 w-[72vw] md:w-auto p-4 md:p-6 rounded-2xl border transition-colors duration-300 ${
        service.popular
          ? "border-[#a3ff33]/50 bg-[#a3ff33]/5 hover:border-[#a3ff33]"
          : "border-white/10 bg-white/[0.03] hover:border-white/20"
      }`}
    >
      {service.popular && (
        <div className="flex justify-center mb-3">
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#a3ff33] text-black text-[9px] font-bold uppercase tracking-widest whitespace-nowrap">
            <Star size={9} fill="black" /> Most Popular
          </span>
        </div>
      )}
      <div className="mb-2 md:mb-4">
        <div className="flex items-baseline gap-2 mb-0.5">
          <p className="text-lg md:text-2xl font-black text-[#a3ff33]">{service.price}</p>
          <span className="flex items-center gap-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Clock size={9} className="shrink-0" />{service.delivery}
          </span>
        </div>
        <h3 className="text-sm md:text-lg font-bold tracking-tight mb-1">{service.title}</h3>
        <p className="text-[11px] md:text-sm text-gray-400 leading-relaxed">{service.description}</p>
      </div>
      <ul className="flex flex-col gap-1 md:gap-2 mt-auto">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-1.5 text-[11px] md:text-sm text-gray-300">
            <Check size={12} className="text-[#a3ff33] shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function InfiniteCardLoop() {
  const controls = useAnimationControls();
  const looped = [...services, ...services];

  const start = () =>
    controls.start({
      x: [`0px`, `calc(-${services.length * 72}vw - ${services.length * 12}px)`],
      transition: { duration: 18, ease: "linear", repeat: Infinity },
    });

  return (
    <motion.div
      className="flex gap-3 px-4"
      animate={controls}
      onViewportEnter={start}
      onHoverStart={() => controls.stop()}
      onHoverEnd={start}
      onTapStart={() => controls.stop()}
      onTap={start}
    >
      {looped.map((service, i) => (
        <ServiceCard key={`${service.title}-${i}`} service={service} i={0} />
      ))}
    </motion.div>
  );
}

export default function Services({ styles }: ServicesProps) {
  return (
    <motion.section
      id="services"
      style={{ y: styles.y, scale: styles.scale, opacity: styles.opacity }}
      className="h-screen sticky top-0 flex items-center justify-center px-4 md:px-16 bg-black z-50 overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2 md:mb-4">
          <h2 className="text-3xl md:text-7xl font-bold tracking-tighter uppercase">Freelance Services</h2>
          <div className="h-[2px] flex-1 bg-[#a3ff33]/20 min-w-[20px]" />
        </div>

        <p className="text-gray-400 text-[11px] md:text-base max-w-2xl mb-2 md:mb-4 leading-snug">
          I help individuals, startups, and small businesses build modern, responsive, and high-performance websites using React, Next.js, TypeScript, and Tailwind CSS.
        </p>

        {/* Trust Badges */}
        <div className="flex items-center gap-2 mb-4 md:mb-8">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#a3ff33]/30 bg-[#a3ff33]/10">
            <Zap size={11} className="text-[#a3ff33]" />
            <span className="text-[#a3ff33] text-[9px] md:text-xs font-bold uppercase tracking-widest">Delivered in 48 hours</span>
          </div>

        </div>

        {/* Cards — infinite loop on mobile, grid on desktop */}
        <div className="md:hidden -mx-4 overflow-hidden">
          <InfiniteCardLoop />
        </div>
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-4 md:mt-8">
          <motion.button
            onClick={() => {
              const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
              window.scrollTo({ top: totalHeight * (7 / 8), behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-glow px-8 md:px-10 py-3 md:py-4 bg-[#a3ff33] text-black font-bold uppercase tracking-widest rounded-xl hover:bg-white transition-colors text-xs md:text-sm"
          >
            Let's Work Together
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
