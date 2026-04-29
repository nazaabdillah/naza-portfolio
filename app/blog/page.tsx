import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'System Logs | Naza Abdillah' }

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans overflow-x-hidden">
      <Navbar />
      <main className="flex-1 flex flex-col">
        
        {/* HERO SECTION / LOG HEADER */}
        <section className="border-b-[3px] border-black bg-gray-50 p-6 md:p-10 lg:p-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="opacity-0 animate-fade-up">
            <div className="font-mono text-[#0047FF] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4">
              // Written Records
            </div>
            <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight text-black">
              System Logs &<br/>
              <span className="text-[#0047FF]">Insights</span>
            </h1>
          </div>
          
          <div className="opacity-0 animate-fade-up-1 font-mono text-[10px] md:text-xs font-bold bg-black text-white px-4 py-3 uppercase tracking-widest shadow-[4px_4px_0px_rgba(0,0,0,1)] border-[2px] border-black">
            Total Entries: {posts.length}
          </div>
        </section>

        {/* CATEGORY TABS (UI Placeholder for future routing) */}
        <div className="opacity-0 animate-fade-up-2 border-b-[3px] border-black bg-white flex overflow-x-auto scrollbar-hide">
          {['All Records', 'Architecture', 'Management', 'Thoughts'].map((c, i) => (
            <span 
              key={c} 
              className={`font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest px-6 py-4 border-r-[3px] border-black whitespace-nowrap cursor-pointer hover:bg-[#0047FF] hover:text-white transition-colors ${
                i === 0 ? 'bg-[#0047FF] text-white' : 'bg-white text-black'
              }`}
            >
              {c}
            </span>
          ))}
        </div>

        {/* POSTS LIST */}
        <div className="opacity-0 animate-fade-up-3 flex-1 flex flex-col divide-y-[3px] divide-black bg-white">
          {posts.length === 0 ? (
            <div className="p-12 md:p-20 text-center flex flex-col items-center justify-center h-full">
              <span className="font-mono text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
                Query Returned 0 Results
              </span>
              <span className="font-mono text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">
                Initialize content by pushing .mdx files to content/blog/
              </span>
            </div>
          ) : (
            posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} total={posts.length} />
            ))
          )}
        </div>
        
      </main>
      <Footer />

      {/* Utilities to hide scrollbar but keep functionality */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}