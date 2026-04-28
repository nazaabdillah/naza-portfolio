'use client'

const contacts = [
  { label:'GitHub', sub:'Source code & projects', val:'@nazaabdillah', url:'https://github.com/nazaabdillah', bg:'#0a0a0a', color:'#fff' },
  { label:'Email', sub:'Buat kolaborasi atau ngobrolin project', val:'naza@email.com', url:'mailto:inazaproject@email.com', bg:'#0047FF', color:'#fff' },
  { label:'LinkedIn', sub:'Professional network', val:'Naza Abdillah', url:'www.linkedin.com/in/qori-naza-abdillah-a42045290', bg:'#fff', color:'#0a0a0a' },
]

export default function ContactCards() {
  return (
    <section style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', borderBottom:'2.5px solid #0a0a0a' }}>
      {contacts.map((c,i) => (
        <a key={c.label} href={c.url} target="_blank" rel="noopener noreferrer"
          style={{ padding:'2.5rem 2rem', background:c.bg, color:c.color, borderRight:i<contacts.length-1?'2.5px solid #0a0a0a':'none', textDecoration:'none', display:'block', transition:'all .12s' }}
          onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform='translate(-4px,-4px)';el.style.boxShadow='6px 6px 0 #0a0a0a'}}
          onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform='none';el.style.boxShadow='none'}}
        >
          <p style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'10px', fontWeight:700, textTransform:'uppercase', letterSpacing:'2px', opacity:.7, marginBottom:'8px' }}>{c.label}</p>
          <p style={{ fontSize:'11px', opacity:.6, marginBottom:'1rem', lineHeight:1.5 }}>{c.sub}</p>
          <p style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'22px', letterSpacing:'1px' }}>{c.val}</p>
        </a>
      ))}
    </section>
  )
}
