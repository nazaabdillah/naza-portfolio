import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectsGrid from '@/components/ProjectsGrid'
import { supabase } from '@/lib/supabase'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Projects' }
export const revalidate = 60

export default async function Projects() {
  const { data: projects } = await supabase.from('projects').select('*').order('created_at', { ascending: false })

  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column' }}>
      <Navbar />
      <main style={{ flex:1 }}>
        <section style={{ borderBottom:'2.5px solid #0a0a0a', padding:'3rem 2.5rem' }}>
          <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:'#0047FF', marginBottom:'1rem' }}>// Work</div>
          <h1 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'72px', lineHeight:.85, letterSpacing:'2px', color:'#0a0a0a' }}>
            ALL<br/><span style={{color:'#0047FF'}}>PROJECTS</span>
          </h1>
        </section>
        <ProjectsGrid projects={projects || []} />
      </main>
      <Footer />
    </div>
  )
}
