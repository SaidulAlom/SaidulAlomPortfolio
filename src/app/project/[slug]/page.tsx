import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ImageSlider from '../../../components/ImageSlider';
import PageTransition from '../../../components/PageTransition';

const projectImages: Record<string, string[]> = {
  "onesoul-e-corner": ["/projects/OneSoul 1.png", "/projects/OneSoul 2.png", "/projects/OneSoul 3.png"],
  "guwahati-flavors": ["/projects/Guwahati Flavors 1.png", "/projects/Guwahati Flavors 2.png", "/projects/Guwahati Flavors 3.png"],
  "bella-vista": ["/projects/Bella Vista 1.png", "/projects/Bella Vista 2.png", "/projects/Bella Vista 3.png"],
  "modern-landing-page": ["/projects/ModernApp 1.png", "/projects/ModernApp 2.png", "/projects/ModernApp 3.png"],
  "weather-app": ["/projects/weather-app 1.png", "/projects/weather-app 2.png", "/projects/weather-app.png"],
  "futuristic-start-up": ["/projects/futuristic-start-up-landing-page.png"],
  "fitflow-gym": ["/projects/FitFlow 1.png", "/projects/FitFlow 2.png", "/projects/FitFlow 3.png"],
  "buildmart10": ["/projects/BuildMart.png"],
  "fintrack": ["/projects/FinTrack 1.png", "/projects/FinTrack 2.png", "/projects/FinTrack 3.png", "/projects/FinTrack 4.png", "/projects/FinTrack 5.png"]
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const images = projectImages[slug] || ['/SaidulAlomLogo.png'];

  return {
    title: `${title} Case Study`,
    description: `Detailed case study and technical breakdown for the ${title} project built by Saidul Alom.`,
    openGraph: {
      title: `${title} Case Study | Saidul Alom`,
      description: `Detailed case study and technical breakdown for the ${title} project.`,
      images: [{ url: images[0] }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} Case Study | Saidul Alom`,
      description: `Detailed case study and technical breakdown for the ${title} project.`,
      images: [images[0]],
    }
  }
}

const projectData: Record<string, {
  title: string;
  tech: string[];
  description: string;
  problem: string;
  solution: string;
  result: string;
  live: string;
  github: string;
}> = {
  "onesoul-e-corner": {
    title: "OneSoul e-Corner",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Razorpay", "JWT", "Tailwind CSS"],
    description: "A full-stack e-commerce platform with JWT authentication, product management, cart system, and payment integration.",
    problem: "Users abandoned carts due to a complex, multi-step checkout with no guest option and slow page loads.",
    solution: "Redesigned checkout into a single-page flow with guest checkout and integrated Razorpay for seamless payments. Optimized API calls and added lazy loading.",
    result: "30% reduction in checkout drop-off and a 2x increase in completed orders post-launch.",
    live: "https://onesoul-e-corner.vercel.app/",
    github: "https://github.com/SaidulAlom/OneSoul-e-Corner"
  },
  "buildmart10": {
    title: "Buildmart10",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Netlify"],
    description: "A niche e-commerce store for construction materials with category filtering, product search, and a responsive mobile-first UI.",
    problem: "Existing construction supply stores had poor mobile UX and slow product discovery, losing mobile customers.",
    solution: "Built a mobile-first React storefront with instant search, category filters, and optimized image loading using lazy load.",
    result: "40% faster page loads and significantly improved product discoverability on mobile devices.",
    live: "https://buildmart10.netlify.app/",
    github: "https://github.com/SaidulAlom"
  },
  "guwahati-flavors": {
    title: "Guwahati Flavors",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    description: "A full-stack food ordering platform for local Guwahati restaurants with real-time menu updates, cart management, and order tracking.",
    problem: "Local restaurants lacked a digital ordering system, relying entirely on phone calls which caused frequent order errors.",
    solution: "Created a MERN-stack platform with live menu management for restaurant owners and a smooth ordering flow for customers.",
    result: "25% increase in order completion rate and eliminated manual order errors for partnered restaurants.",
    live: "https://guwahatiflavors.netlify.app/",
    github: "https://github.com/SaidulAlom/Guwahati-Flavors"
  },
  "bella-vista": {
    title: "Bella Vista",
    tech: ["React.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    description: "A premium hotel and restaurant website with animated UI, table reservation system, and gallery.",
    problem: "The client had no online presence, losing potential bookings to competitors with modern websites.",
    solution: "Built an elegant, animation-rich website with an integrated reservation form, menu showcase, and photo gallery.",
    result: "45% increase in average session duration and a measurable rise in direct reservation inquiries.",
    live: "https://bella-vista-restro.vercel.app/",
    github: "https://github.com/SaidulAlom/Bella-Vista/"
  },
  "fintrack": {
    title: "FinTrack",
    tech: ["React.js", "Chart.js", "Node.js", "MongoDB", "Tailwind CSS"],
    description: "A personal finance tracker with income/expense logging, visual chart breakdowns, and monthly summaries.",
    problem: "Users struggled to visualize where their money was going each month without a simple, intuitive tracking tool.",
    solution: "Developed a dashboard with categorized transactions, Chart.js visualizations, and monthly budget comparisons.",
    result: "Users reported an average 20% reduction in unnecessary spending after one month of consistent use.",
    live: "https://fintrackfinances.netlify.app/",
    github: "https://github.com/SaidulAlom/FinTrack"
  },
  "fitflow-gym": {
    title: "FitFlow Gym",
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    description: "A high-converting gym website with membership plans, trainer profiles, class schedules, and a contact form.",
    problem: "The gym had no website, relying on word-of-mouth which severely limited new member acquisition.",
    solution: "Built a visually bold, fully responsive website with clear CTAs, pricing tiers, and an inquiry form.",
    result: "35% increase in membership inquiries within the first month of going live.",
    live: "https://fitflow-gym.netlify.app/",
    github: "https://github.com/SaidulAlom/FitFlow-Gym-Website-"
  },
  "modern-landing-page": {
    title: "Modern Landing Page",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    description: "A pixel-perfect, fully responsive SaaS landing page with smooth scroll animations and optimized Core Web Vitals.",
    problem: "Generic landing page templates had poor performance scores and lacked the visual polish needed for SaaS products.",
    solution: "Hand-coded a custom landing page with CSS animations, lazy-loaded assets, and semantic HTML for maximum performance.",
    result: "Achieved a 98/100 Lighthouse score with sub-1s LCP and 100% accessibility compliance.",
    live: "https://modern-responsive-landing-page.vercel.app/",
    github: "https://github.com/SaidulAlom/Modern-Responsive-Landing-Page"
  },
  "weather-app": {
    title: "Weather App",
    tech: ["React.js", "OpenWeatherMap API", "Tailwind CSS", "Vercel"],
    description: "A real-time weather dashboard with 5-day forecasts, location search, and dynamic UI themes based on weather conditions.",
    problem: "Most weather apps show raw data without context — users couldn't quickly understand if conditions were good or bad.",
    solution: "Implemented dynamic background themes and weather icons that change based on conditions, making data instantly readable.",
    result: "Intuitive UX that communicates weather at a glance, with accurate real-time data for any city worldwide.",
    live: "https://weather-app-gamma-eight-59.vercel.app/",
    github: "https://github.com/SaidulAlom/weather-app"
  },
  "futuristic-start-up": {
    title: "Futuristic Start-up",
    tech: ["HTML", "CSS", "JavaScript", "Canvas API", "Vercel"],
    description: "An animation-heavy startup landing page with particle effects, scroll-triggered reveals, and a bold visual identity.",
    problem: "Startup landing pages often look generic and fail to communicate innovation or build excitement with visitors.",
    solution: "Used advanced CSS animations, canvas particle effects, and scroll reveals to create an immersive first impression.",
    result: "50% longer average session duration compared to a standard template, with strong visual recall.",
    live: "https://futuristic-start-up-landing-page.vercel.app/",
    github: "https://github.com/SaidulAlom/Futuristic-Start-up-Landing-Page"
  }
};

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const images = projectImages[slug] || [];
  const project = projectData[slug];

  return (
    <PageTransition>
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#a3ff33] selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 p-6 md:p-12 flex justify-between items-center z-50 pointer-events-none gap-4">
        <div className="pointer-events-auto shrink-0">
          <Link href="/">
            <img src="/SaidulAlomLogo.png" alt="Saidul Alom Logo" className="h-6 sm:h-8 md:h-10 w-auto object-contain hover:scale-105 transition-transform duration-300" />
          </Link>
        </div>
        <Link href="/#projects" className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-3 hover:scale-105 transition-transform duration-300 font-bold text-sm pointer-events-auto shadow-2xl">
          <ArrowLeft size={16} /> <span className="hidden md:inline">Back to Projects</span><span className="md:hidden">Back</span>
        </Link>
      </header>

      {/* Main Case Study Content */}
      <main className="pt-40 pb-24 px-8 md:px-12 max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase mb-6 text-[#a3ff33] leading-[0.9]">{title}</h1>
          <div className="w-24 h-[2px] bg-[#a3ff33]/50 mb-12" />
        </div>

        {/* Dynamic Image Gallery */}
        <ImageSlider images={images} title={title} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 flex items-center gap-4">
                Overview <div className="h-[1px] flex-1 bg-white/10" />
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project?.description ?? `A detailed case study for ${title}.`}
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-red-500/20 rounded-2xl bg-red-500/5">
                <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">Problem</p>
                <p className="text-gray-300 text-sm leading-relaxed">{project?.problem ?? "—"}</p>
              </div>
              <div className="p-6 border border-blue-500/20 rounded-2xl bg-blue-500/5">
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Solution</p>
                <p className="text-gray-300 text-sm leading-relaxed">{project?.solution ?? "—"}</p>
              </div>
              <div className="p-6 border border-[#a3ff33]/20 rounded-2xl bg-[#a3ff33]/5">
                <p className="text-[#a3ff33] text-xs font-bold uppercase tracking-widest mb-3">Result</p>
                <p className="text-gray-300 text-sm leading-relaxed">{project?.result ?? "—"}</p>
              </div>
            </section>
          </div>

          {/* Sidebar Detail Column */}
          <div className="space-y-8">
            <section className="p-8 border border-white/10 rounded-3xl bg-neutral-900/40 backdrop-blur-3xl hover:border-[#a3ff33]/30 transition-colors">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#a3ff33] mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {(project?.tech ?? ["React.js", "Tailwind CSS"]).map(tech => (
                  <span key={tech} className="px-4 py-2 bg-white/5 rounded-full text-xs font-medium text-white border border-white/10 cursor-default hover:bg-[#a3ff33] hover:text-black transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="p-8 border border-white/10 rounded-3xl bg-neutral-900/40 backdrop-blur-3xl hover:border-[#a3ff33]/30 transition-colors">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#a3ff33] mb-6">Project Links</h3>
              <div className="flex flex-col gap-6">
                {project?.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#a3ff33] transition-colors text-lg font-bold flex items-center justify-between group">
                    Live Preview <span className="group-hover:translate-x-2 transition-transform opacity-50 group-hover:opacity-100">→</span>
                  </a>
                )}
                {project?.live && project?.github && <div className="h-[1px] w-full bg-white/10" />}
                {project?.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#a3ff33] transition-colors text-lg font-bold flex items-center justify-between group">
                    Source Code <span className="group-hover:translate-x-2 transition-transform opacity-50 group-hover:opacity-100">→</span>
                  </a>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Subtle Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
    </PageTransition>
  );
}
