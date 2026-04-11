"use client";

import { useState, useRef } from "react";
import { motion, MotionValue, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { ExternalLink, Github, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectsProps {
  styles: {
    scale: MotionValue<number>;
    opacity: MotionValue<number>;
    y: MotionValue<string>;
  };
}

interface Project {
  title: string;
  slug: string;
  category: string;
  tech: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  live: string;
  github: string;
  image: string;
}

function ProjectCard({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#a3ff33]/40 transition-colors duration-300 will-change-transform"
    >
      <Link href={`/project/${p.slug}`} className="block overflow-hidden relative h-48 w-full">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="flex flex-col flex-1 p-5 gap-3">
        <span className="text-[10px] font-bold tracking-widest uppercase text-[#a3ff33]/70">{p.tech}</span>
        <Link href={`/project/${p.slug}`}>
          <h3 className="text-lg font-bold tracking-tight hover:text-[#a3ff33] transition-colors">{p.title}</h3>
        </Link>
        <p className="text-sm text-gray-400 line-clamp-3">{p.description}</p>
        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/5">
          <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#a3ff33] transition-colors">
            <ExternalLink size={14} /> Live
          </a>
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#a3ff33] transition-colors">
            <Github size={14} /> Code
          </a>
          <Link
            href={`/project/${p.slug}`}
            className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#a3ff33]/10 border border-[#a3ff33]/20 text-[#a3ff33] text-xs font-bold hover:bg-[#a3ff33] hover:text-black transition-all duration-200"
          >
            <BookOpen size={12} /> Case Study
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ styles }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Full Stack", "Frontend", "E-Commerce", "Health & Fitness"];

  const projectsData = [
    {
      title: "Saffron & Spice",
      slug: "saffron-and-spice",
      category: "Full Stack",
      tech: "React 19 / TypeScript / Express / Supabase",
      description: "Built a premium Indian fine dining web app with animated storytelling, an interactive menu, cart and checkout flow, reservations, contact handling, and a hardened Express API.",
      problem: "Most restaurant portfolio projects stop at visuals and do not prove real backend, booking, or ordering workflows in production.",
      solution: "Combined a polished React frontend with an Express backend, Supabase persistence, CSRF protection, rate limiting, and graceful fallback data for stable demos.",
      result: "A portfolio-grade full-stack restaurant experience deployed live with real reservations, orders, SEO setup, and production-minded security.",
      live: "https://saffron-and-spice.onrender.com/",
      github: "https://github.com/SaidulAlom/saffron-and-spice/",
      image: "/projects/saffron-and-spice.svg"
    },
    {
      title: "Modern Fitness Tracker",
      slug: "modern-fitness-tracker",
      category: "Health & Fitness",
      tech: "Next.js · TypeScript · CSS",
      description: "Built a full-stack fitness tracking app with workout logging, streak system, nutrition tracking, body metrics, PR detection, membership plans, and interactive progress charts.",
      problem: "Fitness enthusiasts lacked a single, beautifully designed app that combined workout tracking, nutrition logging, and progress visualization without overwhelming complexity.",
      solution: "Architected a multi-page Next.js app with isolated feature domains, local data persistence, real streak logic, and a premium glassmorphism UI that keeps users motivated.",
      result: "A polished, fully-featured fitness platform deployed on Netlify with sub-second load times and an immersive user experience that drives daily engagement.",
      live: "https://modernfitnesstracker.netlify.app/",
      github: "https://github.com/SaidulAlom/Fitness_Tracker",
      image: "/projects/fitness-tracker.png"
    },
    {
      title: "OneSoul e-Corner",
      slug: "onesoul-e-corner",
      category: "E-Commerce",
      tech: "Full Stack E-Commerce Platform",
      description: "Built a full-stack e-commerce platform with JWT authentication, product management, cart system, and payment integration — reducing checkout drop-off by 30%.",
      problem: "Users abandoned carts due to a complex, multi-step checkout with no guest option.",
      solution: "Redesigned checkout into a single-page flow with guest checkout and integrated Razorpay for seamless payments.",
      result: "30% reduction in checkout drop-off and a 2x increase in completed orders post-launch.",
      live: "https://onesoul-e-corner.vercel.app/",
      github: "https://github.com/SaidulAlom/OneSoul-e-Corner",
      image: "/projects/onesoul.png"
    },
    {
      title: "Buildmart10",
      slug: "buildmart10",
      category: "E-Commerce",
      tech: "Construction E-Commerce Store",
      description: "Developed a niche e-commerce store for construction materials with category filtering, product search, and a responsive mobile-first UI — cutting page load time by 40%.",
      problem: "Existing construction supply stores had poor mobile UX and slow product discovery.",
      solution: "Built a mobile-first React storefront with instant search, category filters, and optimized image loading.",
      result: "40% faster page loads and significantly improved product discoverability on mobile devices.",
      live: "https://buildmart10.netlify.app/",
      github: "https://github.com/SaidulAlom",
      image: "/projects/BuildMart.png"
    },
    {
      title: "Guwahati Flavors",
      slug: "guwahati-flavors",
      category: "Full Stack",
      tech: "Full Stack Food Ordering Platform",
      description: "Built a full-stack food ordering platform for local Guwahati restaurants with real-time menu updates, cart management, and order tracking — increasing order completion rate by 25%.",
      problem: "Local restaurants lacked a digital ordering system, relying entirely on phone calls which caused order errors.",
      solution: "Created a MERN-stack platform with live menu management for restaurant owners and a smooth ordering flow for customers.",
      result: "25% increase in order completion rate and eliminated manual order errors for partnered restaurants.",
      live: "https://guwahatiflavors.netlify.app/",
      github: "https://github.com/SaidulAlom/Guwahati-Flavors",
      image: "/projects/guwahati-flavors.png"
    },
    {
      title: "Bella Vista",
      slug: "bella-vista",
      category: "Full Stack",
      tech: "Hotel & Restaurant Website",
      description: "Designed and built a premium hotel and restaurant website with animated UI, table reservation system, and gallery — boosting user engagement time by 45%.",
      problem: "The client had no online presence, losing potential bookings to competitors with modern websites.",
      solution: "Built an elegant, animation-rich website with an integrated reservation form, menu showcase, and photo gallery.",
      result: "45% increase in average session duration and a measurable rise in direct reservation inquiries.",
      live: "https://bella-vista-restro.vercel.app/",
      github: "https://github.com/SaidulAlom/Bella-Vista/",
      image: "/projects/bella-vista-restro.png"
    },
    {
      title: "FinTrack",
      slug: "fintrack",
      category: "Full Stack",
      tech: "Personal Finance Tracker App",
      description: "Built a personal finance tracker with income/expense logging, visual chart breakdowns, and monthly summaries — helping users cut unnecessary spending by an average of 20%.",
      problem: "Users struggled to visualize where their money was going each month without a simple tracking tool.",
      solution: "Developed a dashboard with categorized transactions, Chart.js visualizations, and monthly budget comparisons.",
      result: "Users reported an average 20% reduction in unnecessary spending after one month of consistent use.",
      live: "https://fintrackfinances.netlify.app/",
      github: "https://github.com/SaidulAlom/FinTrack",
      image: "/projects/fintrack.png"
    },
    {
      title: "FitFlow Gym",
      slug: "fitflow-gym",
      category: "Frontend",
      tech: "Fitness & Gym Website",
      description: "Designed a high-converting gym website with membership plans, trainer profiles, class schedules, and a contact form — increasing membership inquiry conversions by 35%.",
      problem: "The gym had no website, relying on word-of-mouth which severely limited new member acquisition.",
      solution: "Built a visually bold, fully responsive website with clear CTAs, pricing tiers, and an inquiry form.",
      result: "35% increase in membership inquiries within the first month of going live.",
      live: "https://fitflow-gym.netlify.app/",
      github: "https://github.com/SaidulAlom/FitFlow-Gym-Website-",
      image: "/projects/fitflow.png"
    },
    {
      title: "Modern Landing Page",
      slug: "modern-landing-page",
      category: "Frontend",
      tech: "Responsive SaaS Landing Page",
      description: "Crafted a pixel-perfect, fully responsive SaaS landing page with smooth scroll animations and optimized Core Web Vitals — achieving a 98/100 Lighthouse performance score.",
      problem: "Generic landing page templates had poor performance scores and lacked the visual polish needed for SaaS products.",
      solution: "Hand-coded a custom landing page with CSS animations, lazy-loaded assets, and semantic HTML for maximum performance.",
      result: "Achieved a 98/100 Lighthouse score with sub-1s LCP and 100% accessibility compliance.",
      live: "https://modern-responsive-landing-page.vercel.app/",
      github: "https://github.com/SaidulAlom/Modern-Responsive-Landing-Page",
      image: "/projects/ModernApp.png"
    },
    {
      title: "Weather App",
      slug: "weather-app",
      category: "Frontend",
      tech: "Real-Time Weather Dashboard",
      description: "Built a real-time weather dashboard using the OpenWeatherMap API with 5-day forecasts, location search, and dynamic UI themes based on weather conditions.",
      problem: "Most weather apps show raw data without context — users couldn't quickly understand if conditions were good or bad.",
      solution: "Implemented dynamic background themes and weather icons that change based on conditions, making data instantly readable.",
      result: "Intuitive UX that communicates weather at a glance, with accurate real-time data for any city worldwide.",
      live: "https://weather-app-gamma-eight-59.vercel.app/",
      github: "https://github.com/SaidulAlom/weather-app",
      image: "/projects/weather-app.png"
    },
    {
      title: "Futuristic Start-up",
      slug: "futuristic-start-up",
      category: "Frontend",
      tech: "Animated Start-up Landing Page",
      description: "Designed a futuristic, animation-heavy startup landing page with particle effects, scroll-triggered reveals, and a bold visual identity — driving 50% longer average session time.",
      problem: "Startup landing pages often look generic and fail to communicate innovation or build excitement.",
      solution: "Used advanced CSS animations, canvas particle effects, and Framer Motion scroll reveals to create an immersive first impression.",
      result: "50% longer average session duration compared to a standard template, with strong visual recall.",
      live: "https://futuristic-start-up-landing-page.vercel.app/",
      github: "https://github.com/SaidulAlom/Futuristic-Start-up-Landing-Page",
      image: "/projects/futuristic-start-up-landing-page.png"
    }
  ];

  const filteredProjects = projectsData.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <motion.section 
      id="projects" 
      style={{ y: styles.y, scale: styles.scale, opacity: styles.opacity }}
      className="h-screen sticky top-0 flex items-center justify-center p-8 md:p-24 bg-black z-40"
    >
      <div className="max-w-6xl w-full h-[85vh] flex flex-col">
        {/* Header and Filter Block */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 shrink-0 gap-6">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase">Projects</h2>
            <div className="h-[2px] w-12 md:flex-1 bg-[#a3ff33]/20 md:min-w-[50px]" />
          </div>
          
          {/* Filtering Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 lg:pb-0 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap border ${
                  activeFilter === cat 
                    ? "bg-[#a3ff33] text-black border-[#a3ff33] shadow-[0_0_15px_rgba(163,255,51,0.3)] scale-105" 
                    : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {/* Scrollable grid area for the projects */}
        <div className="overflow-y-auto pb-12 pr-2 md:pr-4 flex-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <ProjectCard key={p.title} p={p} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
