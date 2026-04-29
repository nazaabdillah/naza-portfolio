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
  // useState cuma dipakai buat buka-tutup menu di HP, bukan buat hover
  const [isOpen, setIsOpen] = useState(false) 

  return (
    <nav className="bg-white border-b-[3px] border-black sticky top-0 z-50">
      <div className="flex items-center justify-between h-14 md:h-16">
        
        {/* LOGO */}
        <Link 
          href="/" 
          className="font-display text-2xl md:text-3xl font-bold tracking-widest text-black px-5 md:px-6 flex items-center h-full border-r-[3px] border-transparent md:border-black hover:opacity-80 transition-opacity"
        >
          NAZA<span className="text-[#0047FF]">.</span>DEV
        </Link>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden md:flex h-full items-stretch">
          {links.map(l => {
            const active = pathname === l.href
            return (
              <Link 
                key={l.href} 
                href={l.href}
                className={`font-mono flex items-center px-6 text-xs font-bold uppercase tracking-widest border-l-[3px] border-black transition-colors ${
                  active 
                    ? 'bg-[#0047FF] text-white' 
                    : 'bg-transparent text-black hover:bg-[#0047FF] hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </div>

        {/* MOBILE MENU TOGGLE (Visible only on Mobile) */}
        <button 
          className="md:hidden font-mono text-xs font-bold uppercase px-5 h-full border-l-[3px] border-black hover:bg-[#0047FF] hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden flex flex-col border-t-[3px] border-black bg-white animate-fade-up">
          {links.map(l => {
            const active = pathname === l.href
            return (
              <Link 
                key={l.href} 
                href={l.href}
                onClick={() => setIsOpen(false)}
                className={`font-mono block px-5 py-4 text-xs font-bold uppercase tracking-widest border-b-[3px] border-black last:border-b-0 transition-colors ${
                  active 
                    ? 'bg-[#0047FF] text-white' 
                    : 'bg-transparent text-black hover:bg-[#0047FF] hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}