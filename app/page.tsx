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
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column' }}>
      <Navbar />
      <main style={{ flex:1 }}>

        {/* HERO */}
        <section style={{ borderBottom:'2.5px solid #0a0a0a', display:'grid', gridTemplateColumns:'1fr 220px' }}>
          <div style={{ padding:'4rem 2.5rem', borderRight:'2.5px solid #0a0a0a' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'#0047FF', color:'#fff', fontSize:'10px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', padding:'6px 14px', border:'2.5px solid #0a0a0a', marginBottom:'1.5rem' }}>
              <span style={{ width:'6px', height:'6px', background:'#fff', borderRadius:'50%', display:'inline-block', animation:'blink 1.2s infinite' }}></span>
              Open to Opportunities
            </div>
            <h1 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'80px', lineHeight:.85, letterSpacing:'2px', color:'#0a0a0a', marginBottom:'1.5rem' }}>
              Naza Abdillah<br/><span style={{color:'#0047FF'}}>Systems Builder & IT Project Manager</span>
            </h1>
            <p style={{ fontSize:'15px', color:'#555', lineHeight:1.8, maxWidth:'420px', marginBottom:'2rem' }}>
               architect logic, manage workflows, and build systems from scratch.
            </p>
            <div style={{ display:'flex' }}>
              <Link href="/projects" style={{ padding:'14px 24px', background:'#0047FF', color:'#fff', border:'2.5px solid #0a0a0a', fontSize:'12px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1.5px' }}>See Projects</Link>
              <Link href="/contact" style={{ padding:'14px 24px', background:'#fff', color:'#0a0a0a', border:'2.5px solid #0a0a0a', borderLeft:'none', fontSize:'12px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1.5px' }}>Get in Touch</Link>
            </div>
          </div>
          <div style={{ display:'flex', flexDirection:'column' }}>
            <div style={{ flex:1, background:'#0047FF', borderBottom:'2.5px solid #0a0a0a', position:'relative', minHeight:'240px', overflow:'hidden' }}>
              <img src="https://api.dicebear.com/9.x/notionists/svg?seed=developer&backgroundColor=0047FF" alt="Naza" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'#0a0a0a', padding:'8px 12px' }}>
                <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'10px', color:'#fff', letterSpacing:'1px', textTransform:'uppercase' }}>Naza Abdillah</span>
              </div>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr' }}>
              {[['3+','Projects'],['2yr','Coding']].map(([n,l],i) => (
                <div key={l} style={{ padding:'14px 10px', textAlign:'center', borderRight:i===0?'2.5px solid #0a0a0a':'none' }}>
                  <span style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'28px', color:'#0047FF', display:'block', letterSpacing:'1px' }}>{n}</span>
                  <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'9px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1px' }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div style={{ borderBottom:'2.5px solid #0a0a0a', background:'#0a0a0a', overflow:'hidden', padding:'10px 0' }}>
          <div style={{ display:'flex', gap:'3rem', animation:'ticker 20s linear infinite', whiteSpace:'nowrap' }}>
            {[...skills,...skills,...skills].map((s,i) => (
              <span key={i} style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'18px', letterSpacing:'3px', color:i%3===0?'#0047FF':'#fff' }}>{s}</span>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <section style={{ borderBottom:'2.5px solid #0a0a0a' }}>
          <div style={{ display:'flex', alignItems:'stretch', borderBottom:'2.5px solid #0a0a0a' }}>
            <span style={{ background:'#0a0a0a', color:'#fff', fontFamily:'JetBrains Mono, monospace', fontSize:'10px', fontWeight:700, padding:'10px 16px', display:'flex', alignItems:'center', letterSpacing:'1px', textTransform:'uppercase' }}>01</span>
            <span style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'20px', letterSpacing:'2px', padding:'10px 16px', display:'flex', alignItems:'center' }}>Featured Projects</span>
            <div style={{ flex:1 }}></div>
            <Link href="/projects" style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1px', padding:'10px 18px', borderLeft:'2.5px solid #0a0a0a', display:'flex', alignItems:'center' }}>All Projects →</Link>
          </div>
          <ProjectsGrid projects={(projects||[]).slice(0,3)} />
        </section>

        {/* BLOG */}
        <section style={{ borderBottom:'2.5px solid #0a0a0a' }}>
          <div style={{ display:'flex', alignItems:'stretch', borderBottom:'2.5px solid #0a0a0a' }}>
            <span style={{ background:'#0a0a0a', color:'#fff', fontFamily:'JetBrains Mono, monospace', fontSize:'10px', fontWeight:700, padding:'10px 16px', display:'flex', alignItems:'center', letterSpacing:'1px', textTransform:'uppercase' }}>02</span>
            <span style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'20px', letterSpacing:'2px', padding:'10px 16px', display:'flex', alignItems:'center' }}>Latest Posts</span>
            <div style={{ flex:1 }}></div>
            <Link href="/blog" style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1px', padding:'10px 18px', borderLeft:'2.5px solid #0a0a0a', display:'flex', alignItems:'center' }}>All Posts →</Link>
          </div>
          {posts.length === 0 ? (
            <p style={{ padding:'1.5rem 2.5rem', fontSize:'13px', color:'#888' }}>Belum ada post. Push .mdx ke content/blog/</p>
          ) : posts.map((post,i) => (
            <BlogCard key={post.slug} post={post} index={i} total={posts.length} />
          ))}
        </section>

      </main>
      <Footer />
      <style>{`
        @keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}
        @keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-33.33%)}}
      `}</style>
    </div>
  )
}
