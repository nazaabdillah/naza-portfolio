'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [hover, setHover] = useState<string|null>(null)

  return (
    <nav style={{ background:'#fff', borderBottom:'2.5px solid #0a0a0a', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 2rem', height:'58px', position:'sticky', top:0, zIndex:100 }}>
      <Link href="/" style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'26px', letterSpacing:'2px', color:'#0a0a0a' }}>
        NAZA<span style={{color:'#0047FF'}}>.</span>DEV
      </Link>
      <div style={{ display:'flex', height:'100%', alignItems:'stretch' }}>
        {links.map(l => {
          const active = pathname === l.href
          const hov = hover === l.href
          return (
            <Link key={l.href} href={l.href}
              onMouseEnter={() => setHover(l.href)}
              onMouseLeave={() => setHover(null)}
              style={{
                display:'flex', alignItems:'center',
                padding:'0 18px',
                fontSize:'12px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1.5px',
                borderLeft:'2.5px solid #0a0a0a',
                background: active||hov ? '#0047FF' : 'transparent',
                color: active||hov ? '#fff' : '#0a0a0a',
                transition:'all .1s',
              }}
            >{l.label}</Link>
          )
        })}
      </div>
    </nav>
  )
}
