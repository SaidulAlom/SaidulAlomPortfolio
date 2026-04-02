import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return <div className="p-24 text-white font-mono bg-black h-screen selection:bg-[#a3ff33] selection:text-black">Post 404: Not Found</div>;
  }
  
  const mdxSource = fs.readFileSync(filePath, 'utf8');
  
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-24 selection:bg-[#a3ff33] selection:text-black">
      <Link href="/blog" className="text-[#a3ff33] font-bold uppercase tracking-widest flex gap-2 items-center mb-16 hover:underline">
        ← Back to Blog
      </Link>
      <article className="prose prose-invert prose-lg prose-headings:text-[#a3ff33] prose-a:text-[#a3ff33] prose-strong:text-white max-w-4xl mx-auto">
        <MDXRemote source={mdxSource} />
      </article>
      
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}
