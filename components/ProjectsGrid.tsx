'use client'

type Project = { id: string; title: string; description: string; tags: string[]; url: string }

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return (
    <div style={{ padding:'3rem 2.5rem', color:'#888', fontSize:'14px' }}>
      Belum ada project. Tambahkan lewat <a href="/admin/dashboard" style={{color:'#0047FF',fontWeight:700}}>Admin Panel</a>.
    </div>
  )

  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)' }}>
      {projects.map((p, i) => (
        <a key={p.id} href={p.url||'#'} target="_blank" rel="noopener noreferrer"
          style={{ padding:'2rem', display:'block', textDecoration:'none', borderRight:i%2===0?'2.5px solid #0a0a0a':'none', borderBottom:'2.5px solid #0a0a0a', transition:'all .12s' }}
          onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.background='#0047FF';el.style.transform='translate(-3px,-3px)';el.style.boxShadow='5px 5px 0 #0a0a0a'}}
          onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.background='transparent';el.style.transform='none';el.style.boxShadow='none'}}
        >
          <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:'12px' }}>
            <div style={{ width:'40px', height:'5px', background:'#0047FF', border:'1.5px solid #0a0a0a' }}></div>
            <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'16px', fontWeight:700, color:'#999' }}>↗</span>
          </div>
          <h2 style={{ fontSize:'20px', fontWeight:900, color:'#0a0a0a', marginBottom:'8px', letterSpacing:'-0.5px' }}>{p.title}</h2>
          <p style={{ fontSize:'13px', color:'#666', lineHeight:1.7, marginBottom:'16px' }}>{p.description}</p>
          <div style={{ display:'flex', gap:'5px', flexWrap:'wrap' }}>
            {(p.tags||[]).map((t:string) => (
              <span key={t} style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'9px', fontWeight:700, textTransform:'uppercase', padding:'3px 8px', border:'1.5px solid #0a0a0a' }}>{t}</span>
            ))}
          </div>
        </a>
      ))}
    </div>
  )
}
