import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectsGrid from '@/components/ProjectsGrid'
import { supabase } from '@/lib/supabase'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Projects | Naza Abdillah' }
export const revalidate = 60

export default async function Projects() {
  const { data: projects } = await supabase.from('projects').select('*').order('created_at', { ascending: false })

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 flex flex-col">
        
        {/* HERO SECTION / REPOSITORY HEADER */}
        <section className="border-b-[3px] border-black bg-gray-50 p-6 md:p-10 lg:p-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="opacity-0 animate-fade-up">
            <div className="font-mono text-[#0047FF] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4">
              // Deployment Archive
            </div>
            <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight text-black">
              Featured<br/>
              <span className="text-[#0047FF]">Works</span>
            </h1>
          </div>
          
          {/* SYSTEM STATS */}
          <div className="opacity-0 animate-fade-up-1 flex border-[3px] border-black bg-white shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            <div className="px-4 py-3 border-r-[3px] border-black flex flex-col items-center">
              <span className="font-display text-2xl text-[#0047FF] leading-none">{(projects || []).length}</span>
              <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-gray-500">Records</span>
            </div>
            <div className="px-5 py-3 flex flex-col justify-center bg-black">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white">Live Status</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS GRID WRAPPER */}
        <div className="opacity-0 animate-fade-up-2 bg-white flex-1">
          {(!projects || projects.length === 0) ? (
            <div className="p-20 text-center flex flex-col items-center justify-center border-b-[3px] border-black">
              <span className="font-mono text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                // Query: No results found
              </span>
              <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                System is currently empty. Check back later.
              </p>
            </div>
          ) : (
            <ProjectsGrid projects={projects} />
          )}
        </div>

        {/* BOTTOM CTA SECTION (Optional but Good for UX) */}
        <section className="p-8 md:p-12 border-b-[3px] border-black bg-[#0047FF] text-white flex flex-col items-center text-center">
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-widest mb-6">Have a project in mind?</h2>
            <Link 
              href="/contact"
              className="px-8 py-4 border-[3px] border-black bg-white text-black font-mono text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              Start Collaboration →
            </Link>
        </section>
        
      </main>

      <Footer />
    </div>
  )
}