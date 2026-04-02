"use client";

import { motion, MotionValue } from "motion/react";

interface ExperienceProps {
  styles: {
    scale: MotionValue<number>;
    opacity: MotionValue<number>;
    y: MotionValue<string>;
  };
}

export default function Experience({ styles }: ExperienceProps) {
  const experiences = [
    {
      role: "Industrial Intern",
      company: "IOCL Digboi Refinery",
      period: "June 2024 - July 2024",
      points: [
        "Improved system monitoring efficiency by supporting real-time performance tracking and routine network audits across critical refinery infrastructure.",
        "Reduced documentation gaps by 40% through structured process workflow documentation, directly improving operational handover efficiency.",
        "Strengthened network security posture by applying cybersecurity protocols during live system audits under senior engineer supervision.",
        "Gained hands-on exposure to industrial automation and SCADA systems, bridging the gap between software and hardware-level operations."
      ]
    },
    {
      role: "Full Stack Development Trainee",
      company: "NIELIT Guwahati",
      period: "July 2023 - August 2023",
      points: [
        "Completed an intensive 200-hour industry-oriented MERN stack program, building production-ready full-stack applications from scratch.",
        "Delivered 3 end-to-end web applications covering authentication, REST APIs, and database design — demonstrating full-cycle development capability.",
        "Accelerated proficiency in React.js and Node.js by 60% through daily project-based learning under the Digital India Capacity Building initiative."
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Dhemaji Engineering College, ASTU",
      period: "2021 - 2025",
      details: "GPA: 6.69 / 10.0. Specialized in Artificial Intelligence (Python) and Web Development (JavaScript)."
    },
    {
      degree: "Higher Secondary (Class 12) - Science",
      institution: "Lakhiganj Higher Secondary School",
      period: "2017 - 2018",
      details: "Major Subjects: Physics, Chemistry, Mathematics. Secured 60.40%."
    },
    {
      degree: "HSLC (Class 10)",
      institution: "Bilsipara Public H.S. School",
      period: "2015 - 2016",
      details: "Secured 76%."
    }
  ];

  return (
    <motion.section 
      id="experience" 
      style={{ y: styles.y, scale: styles.scale, opacity: styles.opacity }}
      className="h-screen sticky top-0 flex items-center justify-center px-4 py-8 md:p-24 bg-neutral-950 z-50"
    >
      <div className="max-w-6xl w-full h-[88vh] flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6 md:mb-12 shrink-0">
          <h2 className="text-3xl md:text-7xl font-bold tracking-tighter uppercase">Exp & Edu</h2>
          <div className="h-[2px] w-full md:flex-1 bg-[#a3ff33]/20 md:min-w-[50px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 overflow-y-auto pb-12 pr-2 md:pr-4 flex-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
          
          {/* Experience Column */}
          <div className="space-y-6 md:space-y-10">
            <h3 className="text-sm md:text-xl font-bold uppercase tracking-widest text-[#a3ff33]">Experience</h3>
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10, backgroundColor: "rgba(163, 255, 51, 0.03)" }}
                className="flex flex-col gap-3 p-4 md:p-6 border-l-2 border-[#a3ff33]/20 hover:border-[#a3ff33] transition-all duration-300 cursor-default group rounded-r-2xl"
              >
                <div className="text-xs md:text-sm font-bold text-[#a3ff33]">{exp.period}</div>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold group-hover:text-white text-gray-200 transition-colors mb-1 md:mb-2">{exp.role}</h3>
                  <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-4">{exp.company}</p>
                  <ul className="space-y-1.5 text-xs md:text-sm text-gray-400">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-2 md:gap-3 leading-relaxed">
                        <span className="text-[#a3ff33] shrink-0 mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Column */}
          <div className="space-y-6 md:space-y-10">
            <h3 className="text-sm md:text-xl font-bold uppercase tracking-widest text-white">Education</h3>
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                className="flex flex-col gap-3 p-4 md:p-6 border-l-2 border-white/10 hover:border-white transition-all duration-300 cursor-default group rounded-r-2xl"
              >
                <div className="text-xs md:text-sm font-bold text-gray-500 group-hover:text-white transition-colors">{edu.period}</div>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-200 group-hover:text-white transition-colors mb-1 md:mb-2">{edu.degree}</h3>
                  <p className="text-[#a3ff33] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-4">{edu.institution}</p>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  );
}
