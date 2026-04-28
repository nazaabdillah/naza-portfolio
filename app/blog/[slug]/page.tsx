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
  const { slug } = await props.params
  const post = getPostBySlug(slug)
  return { title: post?.title || 'Post' }
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column' }}>
      <Navbar />
      <main style={{ flex:1 }}>
        <section style={{ borderBottom:'2.5px solid #0a0a0a', padding:'3rem 2.5rem', maxWidth:'720px' }}>
          <Link href="/blog" style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1.5px', color:'#0047FF', display:'inline-block', marginBottom:'1.5rem' }}>← Back to Blog</Link>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'1rem' }}>
            <span style={{
              fontFamily:'JetBrains Mono, monospace', fontSize:'9px', fontWeight:700, textTransform:'uppercase',
              letterSpacing:'1px', padding:'3px 10px', border:'2px solid #0a0a0a',
              background:post.category==='Tech'?'#0047FF':post.category==='Story'?'#0a0a0a':'#fff',
              color:post.category==='Tech'||post.category==='Story'?'#fff':'#0a0a0a',
            }}>{post.category}</span>
            <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', color:'#999' }}>
              {new Date(post.date).toLocaleDateString('id-ID',{day:'2-digit',month:'long',year:'numeric'})}
            </span>
          </div>
          <h1 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'52px', lineHeight:.9, letterSpacing:'2px', color:'#0a0a0a', marginBottom:'1rem' }}>{post.title}</h1>
          {post.tags.length > 0 && (
            <div style={{ display:'flex', gap:'4px', flexWrap:'wrap' }}>
              {post.tags.map(t => (
                <span key={t} style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'9px', padding:'2px 8px', border:'1.5px solid #ccc', color:'#888' }}>#{t}</span>
              ))}
            </div>
          )}
        </section>
        <section style={{ padding:'2.5rem', maxWidth:'720px', borderBottom:'2.5px solid #0a0a0a' }}>
          <div className="mdx-content">
            <MDXRemote source={post.content} />
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .mdx-content { font-size:15px; line-height:1.85; color:#333; }
        .mdx-content h2 { font-family:'Bebas Neue',sans-serif; font-size:28px; letter-spacing:1px; color:#0a0a0a; margin:2.5rem 0 1rem; border-left:4px solid #0047FF; padding-left:12px; }
        .mdx-content h3 { font-size:18px; font-weight:700; color:#0a0a0a; margin:2rem 0 .75rem; }
        .mdx-content p { margin-bottom:1.25rem; }
        .mdx-content a { color:#0047FF; text-decoration:underline; }
        .mdx-content code { font-family:'JetBrains Mono',monospace; font-size:13px; background:#f4f4f4; border:1.5px solid #ddd; padding:2px 6px; }
        .mdx-content pre { background:#0a0a0a; padding:1.5rem; margin:1.5rem 0; overflow-x:auto; border:2.5px solid #0a0a0a; }
        .mdx-content pre code { background:none; border:none; padding:0; color:#fff; }
        .mdx-content ul,.mdx-content ol { padding-left:1.5rem; margin-bottom:1.25rem; }
        .mdx-content li { margin-bottom:4px; }
        .mdx-content blockquote { border-left:4px solid #0047FF; padding-left:1rem; color:#666; margin:1.5rem 0; font-style:italic; }
        .mdx-content hr { border:none; border-top:2px solid #0a0a0a; margin:2rem 0; }
      `}</style>
    </div>
  )
}
