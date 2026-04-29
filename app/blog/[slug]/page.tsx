import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await (await props.params)
  const post = getPostBySlug(slug)
  return { title: post?.title ? `${post.title} | Naza.dev` : 'Post Not Found' }
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await (await props.params)
  const post = getPostBySlug(slug)
  
  if (!post) notFound()

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans selection:bg-[#0047FF] selection:text-white">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center">
        {/* PROGRESS BAR (DECORATIVE) */}
        <div className="w-full h-1 bg-gray-100 sticky top-[58px] z-40">
          <div className="h-full bg-[#0047FF] animate-progress-load"></div>
        </div>

        <article className="w-full max-w-3xl border-x-0 md:border-x-[3px] border-black min-h-screen bg-white shadow-[20px_0_0_rgba(0,0,0,0.02)]">
          
          {/* POST HEADER */}
          <header className="p-6 md:p-12 border-b-[3px] border-black bg-gray-50">
            <Link 
              href="/blog" 
              className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0047FF] hover:text-black transition-colors mb-8 inline-block"
            >
              ← Back to Index
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 border-[2px] border-black bg-black text-white">
                {post.category}
              </span>
              <span className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                {new Date(post.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl uppercase leading-[0.9] tracking-tight mb-8">
              {post.title}
            </h1>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map(t => (
                  <span key={t} className="font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* CONTENT AREA */}
          <section className="p-6 md:p-12 prose-custom">
            <MDXRemote source={post.content} />
          </section>

          {/* POST FOOTER / CALL TO ACTION */}
          <footer className="p-6 md:p-12 border-t-[3px] border-black bg-gray-50 flex flex-col items-center text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-widest mb-4">End of Record</p>
            <div className="w-12 h-1 bg-[#0047FF] mb-8"></div>
            <Link 
              href="/blog"
              className="px-8 py-3 border-[3px] border-black bg-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#0047FF] hover:text-white hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all"
            >
              Back to Archive
            </Link>
          </footer>
        </article>
      </main>

      <Footer />

      {/* TAILWIND INJECTED STYLES FOR MDX */}
      <style>{`
        .prose-custom {
          font-family: var(--font-mono), monospace; /* Optional: keep it techy */
          font-size: 15px;
          line-height: 1.8;
          color: #1a1a1a;
        }
        .prose-custom p { margin-bottom: 1.5rem; }
        .prose-custom h2 { 
          font-family: 'Bebas Neue', sans-serif; 
          font-size: 2.25rem; 
          margin: 3rem 0 1.25rem; 
          line-height: 1;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .prose-custom h2::before {
          content: '## ';
          color: #0047FF;
        }
        .prose-custom h3 { 
          font-weight: 800; 
          font-size: 1.25rem; 
          margin: 2rem 0 1rem; 
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .prose-custom code { 
          background: #f0f0f0; 
          padding: 0.2rem 0.4rem; 
          border: 1px solid #ddd; 
          font-size: 0.9em;
        }
        .prose-custom pre { 
          background: #0a0a0a; 
          color: #fff; 
          padding: 1.5rem; 
          margin: 2rem 0; 
          border: 3px solid #0047FF;
          overflow-x: auto;
          box-shadow: 8px 8px 0px rgba(0,0,0,1);
        }
        .prose-custom pre code { background: none; border: none; padding: 0; color: inherit; }
        .prose-custom blockquote { 
          border-left: 4px solid #0047FF; 
          padding-left: 1.5rem; 
          margin: 2rem 0; 
          font-style: italic; 
          color: #444; 
          background: #f9f9f9;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        .prose-custom ul { list-style: square; padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .prose-custom li { margin-bottom: 0.5rem; }
        .prose-custom a { color: #0047FF; font-weight: 700; text-decoration: underline; text-underline-offset: 4px; }
        .prose-custom a:hover { background: #0047FF; color: #white; text-decoration: none; }
      `}</style>
    </div>
  )
}