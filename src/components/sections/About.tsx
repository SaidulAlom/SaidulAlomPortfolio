"use client";

import { motion, MotionValue } from "motion/react";
import { Download } from "lucide-react";

interface AboutProps {
  styles: {
    scale: MotionValue<number>;
    opacity: MotionValue<number>;
    y: MotionValue<string>;
  };
}

export default function About({ styles }: AboutProps) {
  return (
    <motion.section
      id="about"
      style={{ y: styles.y, scale: styles.scale, opacity: styles.opacity }}
      className="h-screen sticky top-0 flex items-center justify-center p-8 md:p-24 bg-black z-20"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="space-y-6 md:space-y-12"
        >
          <div className="space-y-4 md:space-y-6">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-xl md:text-5xl font-bold leading-tight tracking-tight text-white"
            >
              I architect and build fast, scalable, and <span className="text-[#a3ff33]">user-focused web applications</span> from the ground up. Utilizing React and Next.js, I engineer full-stack solutions designed for real-world traffic.
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-sm md:text-2xl text-gray-300 leading-relaxed font-medium"
            >
              My focus is squarely on absolute performance, pixel-perfect frontend execution, and solving complex business problems. Whether it's designing secure RESTful APIs in Node.js or crafting immersive WebGL interfaces, I deliver digital products that scale rapidly, convert users natively, and drive tangible outcome.
            </motion.p>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1 }
            }}
            className="flex items-center gap-4 md:gap-8 origin-left"
          >
            <div className="h-[1px] flex-1 bg-[#a3ff33]/20" />
            <a
              href="/Saidul_Alom_Resume.pdf"
              download="Saidul_Alom_Resume.pdf"
              className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-black bg-[#a3ff33] px-4 py-2 md:px-6 md:py-3 rounded-full hover:scale-105 hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(163,255,51,0.2)] whitespace-nowrap"
            >
              <Download size={16} className="md:w-5 md:h-5 text-black" /> Resume
            </a>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-[#a3ff33] whitespace-nowrap">About Me</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
