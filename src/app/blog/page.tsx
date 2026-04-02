import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Engineering Blog | Saidul Alom',
  description: 'Technical insights, tutorials, and architectural thoughts by Saidul Alom.',
};

export default function Blog() {
  const blogDir = path.join(process.cwd(), 'src/content/blog');
  let posts: string[] = [];
  
  if (fs.existsSync(blogDir)) {
    posts = fs.readdirSync(blogDir).filter(file => file.endsWith('.mdx'));
  }

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-24 selection:bg-[#a3ff33] selection:text-black">
      <Link href="/" className="inline-flex items-center gap-2 text-[#a3ff33] hover:underline mb-12 font-bold tracking-widest uppercase">
        <ArrowLeft size={16} /> Back to Portfolio
      </Link>
      
      <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-6">Technical Blog</h1>
      <div className="h-[2px] w-24 bg-[#a3ff33]/50 mb-16" />
      
      {posts.length === 0 ? (
        <div className="text-gray-400 border border-white/10 p-12 rounded-3xl bg-white/5 border-dashed text-center">
          <p className="text-xl">No posts published yet.</p>
          <p className="mt-4 opacity-50">Publish `.mdx` files into `/src/content/blog/` to see your articles here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map(slug => (
            <Link key={slug} href={`/blog/${slug.replace('.mdx', '')}`} className="p-8 border border-white/10 rounded-2xl hover:border-[#a3ff33] hover:bg-[#a3ff33]/5 group transition-colors flex flex-col gap-4">
               <h2 className="text-2xl font-bold group-hover:text-[#a3ff33] transition-colors capitalize">{slug.replace('.mdx', '').split('-').join(' ')}</h2>
               <p className="text-gray-500 font-mono text-sm mt-auto">Read Article →</p>
            </Link>
          ))}
        </div>
      )}
      
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}
