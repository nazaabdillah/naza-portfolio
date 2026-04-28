'use client'
import Link from 'next/link'
import type { Post } from '@/lib/blog'

export default function BlogCard({ post, index, total }: { post: Post; index: number; total: number }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{
      display:'grid', gridTemplateColumns:'1fr auto',
      alignItems:'center', gap:'2rem',
      padding:'1.75rem 2.5rem',
      borderBottom: index < total - 1 ? '2.5px solid #0a0a0a' : 'none',
      textDecoration:'none', transition:'background .1s',
    }}
      onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background='#f5f5f5'}}
      onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background='transparent'}}
    >
      <div>
        <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'8px' }}>
          <span style={{
            fontFamily:'JetBrains Mono, monospace', fontSize:'9px', fontWeight:700,
            textTransform:'uppercase', letterSpacing:'1px', padding:'3px 10px',
            border:'2px solid #0a0a0a',
            background:post.category==='Tech'?'#0047FF':post.category==='Story'?'#0a0a0a':'#fff',
            color:post.category==='Tech'||post.category==='Story'?'#fff':'#0a0a0a',
          }}>{post.category}</span>
          <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'10px', color:'#999' }}>
            {new Date(post.date).toLocaleDateString('id-ID',{day:'2-digit',month:'long',year:'numeric'})}
          </span>
        </div>
        <h2 style={{ fontSize:'20px', fontWeight:900, color:'#0a0a0a', marginBottom:'6px', letterSpacing:'-0.5px' }}>{post.title}</h2>
        <p style={{ fontSize:'13px', color:'#666', lineHeight:1.6 }}>{post.excerpt}</p>
        {post.tags.length > 0 && (
          <div style={{ display:'flex', gap:'4px', flexWrap:'wrap', marginTop:'10px' }}>
            {post.tags.map(t => (
              <span key={t} style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'9px', padding:'2px 8px', border:'1.5px solid #ccc', color:'#888' }}>#{t}</span>
            ))}
          </div>
        )}
      </div>
      <span style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'32px', color:'#0047FF', letterSpacing:'1px', flexShrink:0 }}>→</span>
    </Link>
  )
}
