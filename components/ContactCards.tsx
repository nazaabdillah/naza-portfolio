'use client'

const contacts = [
  { 
    label: 'GitHub', 
    sub: 'Source code & system repositories', 
    val: '@nazaabdillah', 
    url: 'https://github.com/nazaabdillah', 
    bg: 'bg-black', 
    text: 'text-white' 
  },
  { 
    label: 'Email', 
    sub: 'Direct line for collaborations', 
    val: 'naza@email.com', 
    url: 'mailto:naza@email.com', 
    bg: 'bg-[#0047FF]', 
    text: 'text-white' 
  },
  { 
    label: 'LinkedIn', 
    sub: 'Professional identity & network', 
    val: 'Naza Abdillah', 
    url: 'https://www.linkedin.com/in/qori-naza-abdillah-a42045290', 
    bg: 'bg-white', 
    text: 'text-black' 
  },
]

export default function ContactCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 border-b-[3px] border-black overflow-hidden bg-black gap-[3px]">
      {contacts.map((c) => (
        <a 
          key={c.label} 
          href={c.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`group relative p-10 md:p-14 ${c.bg} ${c.text} flex flex-col justify-between transition-all duration-300 hover:z-10`}
        >
          {/* Visual Highlight Overlay */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

          <div className="relative z-10">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
              // {c.label}
            </p>
            <p className="font-mono text-xs md:text-sm opacity-60 mb-8 leading-relaxed group-hover:opacity-100 transition-opacity">
              {c.sub}
            </p>
          </div>

          <div className="relative z-10 flex items-end justify-between">
            <p className="font-display text-2xl md:text-3xl uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
              {c.val}
            </p>
            <span className="font-mono text-xl group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300">
              ↗
            </span>
          </div>

          {/* Hover Shadow Effect (Neobrutalist Style) */}
          <div className="absolute inset-0 border-[3px] border-transparent group-hover:border-black transition-all"></div>
        </a>
      ))}
    </section>
  )
}