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
        "Gained practical exposure to industrial automation, data security, and network infrastructure.",
        "Assisted engineers in monitoring system performance and performing routine network audits.",
        "Documented process workflows to improve operational efficiency.",
        "Strengthened understanding of cybersecurity protocols and real-time system monitoring."
      ]
    },
    {
      role: "Full Stack Development Trainee",
      company: "NIELIT Guwahati",
      period: "July 2023 - August 2023",
      points: [
        "Completed 200-hour industry-oriented training on Full Stack Development with ReactJS & NodeJS.",
        "Learned the complete MERN stack ecosystem — including MongoDB, Express.js, React.js, and Node.js.",
        "Built end-to-end web applications as part of the Capacity Building in IECT program under Digital India."
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
      className="h-screen sticky top-0 flex items-center justify-center p-8 md:p-24 bg-neutral-950 z-50"
    >
      <div className="max-w-6xl w-full h-[80vh] flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12 shrink-0">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase whitespace-nowrap">Exp & Edu</h2>
          <div className="h-[2px] w-full md:flex-1 bg-[#a3ff33]/20 md:min-w-[50px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 overflow-y-auto pb-12 pr-2 md:pr-4 flex-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
          
          {/* Experience Column */}
          <div className="space-y-10">
            <h3 className="text-xl font-bold uppercase tracking-widest text-[#a3ff33] mb-8">Experience</h3>
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10, backgroundColor: "rgba(163, 255, 51, 0.03)" }}
                className="flex flex-col gap-4 p-6 border-l-2 border-[#a3ff33]/20 hover:border-[#a3ff33] transition-all duration-300 cursor-default group rounded-r-2xl"
              >
                <div className="text-sm font-bold text-[#a3ff33] transition-colors">{exp.period}</div>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-white text-gray-200 transition-colors mb-2">{exp.role}</h3>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">{exp.company}</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed">
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
          <div className="space-y-10">
            <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-8">Education</h3>
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                className="flex flex-col gap-4 p-6 border-l-2 border-white/10 hover:border-white transition-all duration-300 cursor-default group rounded-r-2xl"
              >
                <div className="text-sm font-bold text-gray-500 group-hover:text-white transition-colors">{edu.period}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-200 group-hover:text-white transition-colors mb-2">{edu.degree}</h3>
                  <p className="text-[#a3ff33] text-xs font-bold uppercase tracking-widest mb-4">{edu.institution}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  );
}
