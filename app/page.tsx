import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectsGrid from '@/components/ProjectsGrid'
import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/blog'
import { supabase } from '@/lib/supabase'

export const revalidate = 60

const skills = ['System Design', 'IT Project Management', 'Business Analyst', 'Workflow Automation', 'Agile Workflows', 'Technical Documentation']

export default async function Home() {
  const posts = getAllPosts().slice(0,3)
  const { data: projects } = await supabase.from('projects').select('*').order('created_at',{ascending:false}).limit(3)

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans overflow-x-hidden">
      <Navbar />
      <main className="flex-1 flex flex-col">

        {/* 1. HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b-[3px] border-black">
          <div className="lg:col-span-8 p-6 md:p-10 lg:p-14 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black flex flex-col justify-center">
            
            <div className="opacity-0 animate-fade-up inline-flex items-center gap-2 bg-[#0047FF] text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase px-3 py-1.5 border-[2px] border-black w-max mb-6 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Available for Work
            </div>
            
            <h1 className="opacity-0 animate-fade-up-1 font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.9] tracking-wide mb-5 text-black">
              Naza Abdillah<br/>
              <span className="text-[#0047FF]">Systems Builder <br className="hidden md:block"/>& IT Manager</span>
            </h1>
            
            <p className="opacity-0 animate-fade-up-2 font-mono text-sm md:text-base text-gray-700 leading-relaxed max-w-lg mb-8">
               I help businesses and teams build efficient systems, manage workflows, and turn complex ideas into structured realities.
            </p>
            
            <div className="opacity-0 animate-fade-up-3 flex flex-col sm:flex-row w-full sm:w-max border-[2.5px] border-black shadow-[5px_5px_0px_rgba(0,0,0,1)] bg-black transition-transform duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <Link href="/projects" className="px-6 py-3 bg-[#0047FF] text-white font-mono font-bold uppercase tracking-widest text-xs md:text-sm text-center border-b-[2.5px] sm:border-b-0 sm:border-r-[2.5px] border-black hover:bg-blue-800 transition-colors">
                See My Work
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-white text-black font-mono font-bold uppercase tracking-widest text-xs md:text-sm text-center hover:bg-gray-200 transition-colors">
                Let's Talk
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col min-h-[300px]">
            <div className="opacity-0 animate-fade-up-1 flex-1 bg-black border-b-[3px] border-black relative overflow-hidden group">
              <img 
                src="https://api.dicebear.com/9.x/notionists/svg?seed=developer&backgroundColor=0047FF" 
                alt="Naza" 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black p-2 border-t-[3px] border-black flex justify-between items-center">
                <span className="font-mono text-[9px] text-white tracking-widest uppercase font-bold">@nazaabdillah</span>
                <span className="font-mono text-[9px] text-[#0047FF] tracking-widest uppercase font-bold animate-pulse">ONLINE</span>
              </div>
            </div>
            <div className="opacity-0 animate-fade-up-2 grid grid-cols-2 bg-white">
              {[['3+','Projects'],['2yr','Experience']].map(([n,l],i) => (
                <div key={l} className={`p-5 text-center flex flex-col justify-center transition-colors duration-300 hover:bg-gray-50 ${i === 0 ? 'border-r-[3px] border-black' : ''}`}>
                  <span className="font-display block text-4xl md:text-5xl text-[#0047FF] tracking-wide mb-1">{n}</span>
                  <span className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. TICKER SECTION */}
        <div className="opacity-0 animate-fade-up-3 border-b-[3px] border-black bg-[#0a0a0a] overflow-hidden py-3">
          <div className="flex gap-8 animate-ticker whitespace-nowrap">
            {[...skills,...skills,...skills,...skills].map((s,i) => (
              <span key={i} className={`font-display text-lg md:text-xl uppercase tracking-widest ${i%3===0 ? 'text-[#0047FF]' : 'text-white'}`}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* 3. WHAT I DO SECTION */}
        <section className="opacity-0 animate-fade-up-3 border-b-[3px] border-black bg-white group">
          <div className="flex flex-col sm:flex-row sm:items-stretch border-b-[3px] border-black bg-gray-50">
            <div className="flex items-stretch border-b-[3px] sm:border-b-0 border-black">
              <span className="bg-[#0047FF] text-white font-mono text-xs font-bold px-5 py-3 flex items-center tracking-widest uppercase">01</span>
              <span className="font-display text-xl md:text-2xl uppercase tracking-widest px-5 py-3 flex items-center sm:border-r-[3px] border-black">What I Do</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-[3px] divide-y-[3px] md:divide-y-0 divide-black border-t-[3px] border-black -mt-[3px]">
            {[
              { t: 'System Design', d: 'Planning & Architecture' },
              { t: 'Project Mgt', d: 'Team & Workflow' },
              { t: 'Business Analyst', d: 'Problem Solving' },
              { t: 'Automation', d: 'Efficiency Setup' }
            ].map((stack, i) => (
              <div key={i} className={`p-6 transition-colors duration-300 hover:bg-[#0047FF] hover:text-white group/stack ${i === 0 || i === 1 ? 'border-t-0' : ''}`}>
                <span className="font-display text-xl md:text-2xl block mb-2">{stack.t}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 group-hover/stack:text-gray-200">{stack.d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PROJECTS SECTION */}
        <section className="opacity-0 animate-fade-up-3 border-b-[3px] border-black bg-white group">
          <div className="flex flex-col sm:flex-row sm:items-stretch border-b-[3px] border-black">
            <div className="flex items-stretch border-b-[3px] sm:border-b-0 border-black transition-colors duration-300 group-hover:bg-gray-50">
              <span className="bg-black text-white font-mono text-xs font-bold px-5 py-3 flex items-center tracking-widest uppercase">02</span>
              <span className="font-display text-xl md:text-2xl uppercase tracking-widest px-5 py-3 flex items-center sm:border-r-[3px] border-black">Featured Projects</span>
            </div>
            <div className="hidden sm:block flex-1 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#f3f4f6_10px,#f3f4f6_20px)]"></div>
            <Link href="/projects" className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest px-5 py-3 bg-[#0047FF] text-white hover:bg-black transition-colors flex items-center justify-center sm:border-l-[3px] border-black">
              All Projects →
            </Link>
          </div>
          <div className="p-0">
            <ProjectsGrid projects={(projects||[]).slice(0,3)} />
          </div>
        </section>

        {/* 5. BLOG SECTION */}
        <section className="opacity-0 animate-fade-up-3 border-b-[3px] border-black bg-white group">
          <div className="flex flex-col sm:flex-row sm:items-stretch border-b-[3px] border-black">
            <div className="flex items-stretch border-b-[3px] sm:border-b-0 border-black transition-colors duration-300 group-hover:bg-gray-50">
              <span className="bg-black text-white font-mono text-xs font-bold px-5 py-3 flex items-center tracking-widest uppercase">03</span>
              <span className="font-display text-xl md:text-2xl uppercase tracking-widest px-5 py-3 flex items-center sm:border-r-[3px] border-black">Insights & Blog</span>
            </div>
            <div className="hidden sm:block flex-1 bg-gray-50"></div>
            <Link href="/blog" className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest px-5 py-3 bg-white text-black hover:bg-[#0047FF] hover:text-white transition-colors flex items-center justify-center sm:border-l-[3px] border-black">
              All Posts →
            </Link>
          </div>
          <div className="divide-y-[3px] divide-black">
            {posts.length === 0 ? (
              <p className="p-8 md:p-10 text-sm text-gray-500 font-mono tracking-wide">Belum ada tulisan. Pantau terus ya.</p>
            ) : posts.map((post,i) => (
              <BlogCard key={post.slug} post={post} index={i} total={posts.length} />
            ))}
          </div>
        </section>

      </main>
      <Footer />
      
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 15s linear infinite;
        }
      `}</style>
    </div>
  )
}