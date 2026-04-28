import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Blog' }

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column' }}>
      <Navbar />
      <main style={{ flex:1 }}>
        <section style={{ borderBottom:'2.5px solid #0a0a0a', padding:'3rem 2.5rem', display:'grid', gridTemplateColumns:'1fr auto', alignItems:'flex-end', gap:'2rem' }}>
          <div>
            <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:'#0047FF', marginBottom:'1rem' }}>// Writing</div>
            <h1 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'72px', lineHeight:.85, letterSpacing:'2px', color:'#0a0a0a' }}>
              BLOG &<br/><span style={{color:'#0047FF'}}>ARTICLES</span>
            </h1>
          </div>
          <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'13px', fontWeight:700, color:'#999' }}>
            {posts.length} artikel
          </div>
        </section>

        <div style={{ borderBottom:'2.5px solid #0a0a0a', display:'flex', overflow:'auto' }}>
          {['All','Tech','Opinion','Story'].map((c,i) => (
            <span key={c} style={{
              fontFamily:'JetBrains Mono, monospace', fontSize:'11px', fontWeight:700,
              textTransform:'uppercase', letterSpacing:'1.5px',
              padding:'10px 20px', borderRight:'2px solid #0a0a0a',
              background:i===0?'#0047FF':'transparent',
              color:i===0?'#fff':'#0a0a0a',
              cursor:'pointer', whiteSpace:'nowrap',
            }}>{c}</span>
          ))}
        </div>

        <div>
          {posts.length === 0 ? (
            <p style={{ padding:'3rem 2.5rem', fontSize:'14px', color:'#888' }}>
              Belum ada post. Tambahkan file .mdx di <code>content/blog/</code>
            </p>
          ) : posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} total={posts.length} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
