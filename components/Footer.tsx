import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background:'#0a0a0a', borderTop:'2.5px solid #0a0a0a', padding:'1.25rem 2rem', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
      <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', color:'#fff', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase' }}>
        NAZA.DEV © 2026
      </span>
      <div style={{ display:'flex', gap:'1.5rem' }}>
        {[['GitHub','https://github.com/nazaabdillah'],['LinkedIn','#'],['Email','mailto:naza@email.com']].map(([l,u]) => (
          <Link key={l} href={u} target="_blank" style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', color:'#0047FF', fontWeight:700, letterSpacing:'1px', textTransform:'uppercase' }}>{l}</Link>
        ))}
      </div>
    </footer>
  )
}
