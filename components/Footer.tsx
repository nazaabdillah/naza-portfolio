import Link from 'next/link'

export default function Footer() {
  const links = [
    { label: 'GitHub', url: 'https://github.com/nazaabdillah' },
    { label: 'LinkedIn', url: '#' },
    { label: 'Email', url: 'mailto:naza@email.com' }
  ];

  return (
    <footer className="border-t-[3px] border-black bg-white flex flex-col mt-auto">
      <div className="flex flex-col md:flex-row">
        
        {/* LOGO & STATUS BLOCK */}
        <div className="flex-1 p-8 md:p-10 border-b-[3px] md:border-b-0 md:border-r-[3px] border-black bg-black text-white flex flex-col justify-center items-center md:items-start">
          <span className="font-display text-5xl md:text-6xl uppercase tracking-wide mb-2">
            NAZA<span className="text-[#0047FF]">.</span>DEV
          </span>
          <div className="flex items-center gap-3 mt-2 border-[2px] border-[#333] px-4 py-2 bg-[#0a0a0a]">
            <span className="w-2 h-2 bg-[#0047FF] rounded-full animate-pulse shadow-[0_0_8px_#0047FF]"></span>
            <span className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              All Systems Nominal
            </span>
          </div>
        </div>

        {/* SOCIAL LINKS GRID */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 divide-y-[3px] sm:divide-y-0 sm:divide-x-[3px] divide-black bg-white">
          {links.map((link) => (
            <Link 
              key={link.label} 
              href={link.url} 
              target="_blank"
              className="flex items-center justify-center p-6 md:p-8 font-mono text-xs font-bold text-black uppercase tracking-widest hover:bg-[#0047FF] hover:text-white transition-colors group"
            >
              <span className="group-hover:-translate-y-1 transition-transform duration-300 flex items-center gap-2">
                {link.label} 
                <span className="text-[#0047FF] group-hover:text-white">↗</span>
              </span>
            </Link>
          ))}
        </div>
        
      </div>

      {/* BOTTOM TERMINAL BAR */}
      <div className="border-t-[3px] border-black bg-[#0a0a0a] flex flex-col sm:flex-row justify-between items-center p-4 md:px-8">
        <span className="font-mono text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest text-center sm:text-left mb-2 sm:mb-0">
          © 2026 Naza Abdillah. Base: Singaparna, ID.
        </span>
        <span className="font-mono text-[9px] md:text-[10px] text-[#0047FF] uppercase tracking-[0.2em] font-bold">
          VERSION 1.0.0
        </span>
      </div>
    </footer>
  )
}