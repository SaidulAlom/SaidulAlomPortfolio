import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ImageSlider from '../../../components/ImageSlider';
import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';

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

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Convert slug to a readable title
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const images = projectImages[slug] || [];

  const filePath = path.join(process.cwd(), 'src/content/projects', `${slug}.mdx`);
  let mdxSource: string | null = null;
  if (fs.existsSync(filePath)) {
    mdxSource = fs.readFileSync(filePath, 'utf8');
  }

  return (
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
            {mdxSource ? (
              <div className="prose prose-invert prose-lg prose-headings:text-[#a3ff33] prose-a:text-[#a3ff33] max-w-none">
                <MDXRemote source={mdxSource} />
              </div>
            ) : (
              <>
                <section>
                  <h2 className="text-2xl font-bold uppercase tracking-widest mb-8 flex items-center gap-4">
                    Overview
                    <div className="h-[1px] flex-1 bg-white/10" />
                  </h2>
                  <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                    <p>
                      This is the conceptual foundation and dedicated case study layout for the <strong>{title}</strong> project. Building robust case studies requires explaining the context, your design decisions, the problems you faced, and essentially telling the narrative of your engineering journey.
                    </p>
                    <p>
                      You can edit this structural page inside <code>src/app/project/[slug]/page.tsx</code>. Currently, this dynamic route is serving identical layout files for everything located at <code>/project/*</code>. To implement entirely unique case study data, you can build a JSON object array or a Markdown-based parsing system to drop unique typography and code samples perfectly into this brutalist layout based on the URL parameter!
                    </p>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold uppercase tracking-widest mb-8 flex items-center gap-4">
                    Challenges & Solutions
                    <div className="h-[1px] flex-1 bg-white/10" />
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-lg mb-8">
                    Every significant software endeavor introduces complex scaling or logical issues. Describe an intricate technical challenge you successfully resolved while developing {title}. Highlighting these shows senior-level competence.
                  </p>
                  
                  <div className="p-8 bg-neutral-900/50 border border-white/5 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#a3ff33]/50 group-hover:bg-[#a3ff33] transition-colors" />
                    <p className="text-[#a3ff33] font-mono text-sm leading-loose">
                       <span className="text-gray-500">// Pseudo Architecture snippet</span><br/>
                       const architecture = await optimizeProject(requirements);<br/>
                       if (architecture.isEfficient) &#123;<br/>
                       &nbsp;&nbsp;return deployToProduction(architecture);<br/>
                       &#125;
                    </p>
                  </div>
                </section>
              </>
            )}
          </div>

          {/* Sidebar Detail Column */}
          <div className="space-y-8">
            <section className="p-8 border border-white/10 rounded-3xl bg-neutral-900/40 backdrop-blur-3xl hover:border-[#a3ff33]/30 transition-colors">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#a3ff33] mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "TailwindCSS", "Node.js", "MongoDB", "Framer Motion"].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-white/5 rounded-full text-xs font-medium text-white border border-white/10 cursor-default hover:bg-[#a3ff33] hover:text-black transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
            
            <section className="p-8 border border-white/10 rounded-3xl bg-neutral-900/40 backdrop-blur-3xl hover:border-[#a3ff33]/30 transition-colors">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#a3ff33] mb-6">Project Links</h3>
              <div className="flex flex-col gap-6">
                <a href="#" className="text-white hover:text-[#a3ff33] transition-colors text-lg font-bold flex items-center justify-between group">
                  Live Preview <span className="group-hover:translate-x-2 transition-transform opacity-50 group-hover:opacity-100">→</span>
                </a>
                <div className="h-[1px] w-full bg-white/10" />
                <a href="#" className="text-white hover:text-[#a3ff33] transition-colors text-lg font-bold flex items-center justify-between group">
                  Source Code <span className="group-hover:translate-x-2 transition-transform opacity-50 group-hover:opacity-100">→</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Subtle Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}
