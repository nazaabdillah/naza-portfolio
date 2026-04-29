'use client'

type Project = { id: string; title: string; description: string; tags: string[]; url: string }

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return (
    <div className="p-10 md:p-16 text-center border-b-[3px] border-black bg-gray-50">
      <span className="font-mono text-xs md:text-sm text-gray-400 uppercase tracking-[0.2em]">
        // Null Set: No projects deployed.
      </span>
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-t-0 md:border-t-0">
      {projects.map((p, i) => (
        <a 
          key={p.id} 
          href={p.url || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`group relative p-8 md:p-12 transition-all duration-300 border-b-[3px] border-black flex flex-col justify-between overflow-hidden
            ${(i % 2 === 0) ? 'md:border-r-[3px]' : ''}
            bg-white hover:bg-[#0047FF] hover:text-white
          `}
        >
          {/* Background Decoration (Terminal Vibe) */}
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <span className="font-mono text-4xl md:text-6xl font-black select-none">
              0{i + 1}
            </span>
          </div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-[#0047FF] group-hover:bg-white transition-colors"></div>
                <div className="w-8 h-1.5 bg-black group-hover:bg-white transition-colors"></div>
              </div>
              <span className="font-mono text-lg font-bold transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                ↗
              </span>
            </div>

            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight mb-3">
              {p.title}
            </h2>
            
            <p className="font-mono text-xs md:text-sm leading-relaxed mb-8 opacity-70 group-hover:opacity-100 transition-opacity max-w-sm">
              {p.description}
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
            {(p.tags || []).map((t: string) => (
              <span 
                key={t} 
                className="font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-1 border-[2px] border-black group-hover:border-white transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  )
}