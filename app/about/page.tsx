import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About | Naza Abdillah' }

const timeline = [
  { year:'2022', title:'SMK RPL', desc:'Foundational years. Mastering HTML, CSS, PHP, and basic system logic.' },
  { year:'2023', title:'Information Systems (UNSIL)', desc:'Broadening horizons into Business Analysis, System Design, and API architectures.' },
  { year:'2024', title:'Golang Exploration', desc:'Shifting backend stack to Golang (Gin/Fiber). Building high-performance services.' },
  { year:'2025', title:'Advanced Systems', desc:'Integrating IoT with Java and managing cloud deployments.' },
  { year:'2026', title:'Strategic Building', desc:'Focusing on real-world products and technical management.' },
]

const skills = [
  { cat:'Backend', items:['Golang','PHP','Laravel','REST API'] },
  { cat:'Frontend', items:['Next.js','React','TypeScript','Tailwind'] },
  { cat:'Database', items:['PostgreSQL','Supabase','MySQL'] },
  { cat:'Tools', items:['Git','Docker','Railway','Linux'] },
  { cat:'Core', items:['System Design','Analysis','IoT','Management'] },
]

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 border-b-[3px] border-black">
          <div className="p-6 md:p-12 lg:p-16 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black flex flex-col justify-center">
            <div className="opacity-0 animate-fade-up font-mono text-[#0047FF] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6">
              // Identity Initialization
            </div>
            <h1 className="opacity-0 animate-fade-up-1 font-display text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-8">
              A <span className="text-[#0047FF]">Systems Builder</span><br/> from Tasikmalaya
            </h1>
            <p className="opacity-0 animate-fade-up-2 font-mono text-sm md:text-base text-gray-700 leading-relaxed max-w-xl">
              I don't just write lines of code; I engineer solutions. My focus is on problem-solving through structured systems—whether that means architecting a highly efficient backend, designing project management workflows, or leading teams to execute IT objectives.
              <br /><br />
              For me, technology is a tool. My core value lies in logic, efficiency, and the ability to translate complex business bottlenecks into concrete, automated systems.
            </p>
          </div>
          
          <div className="p-6 md:p-12 lg:p-16 flex items-center justify-center bg-gray-50 relative group overflow-hidden">
            <div className="opacity-0 animate-fade-up-1 relative w-full aspect-[4/5] max-w-[400px] border-[3px] border-black bg-[#0047FF] shadow-[12px_12px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <img 
                src="https://api.dicebear.com/9.x/notionists/svg?seed=developer&backgroundColor=0047FF" 
                alt="Naza" 
                className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90"
              />
              <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 font-mono text-[10px] font-bold tracking-widest uppercase">
                STATUS: ACTIVE
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY SECTION */}
        <section className="border-b-[3px] border-black bg-white">
          <div className="flex items-stretch border-b-[3px] border-black overflow-hidden bg-white">
            <span className="bg-black text-white font-mono text-xs font-bold px-6 py-4 flex items-center tracking-widest uppercase">
              Path
            </span>
            <span className="font-display text-xl md:text-2xl uppercase tracking-widest px-6 py-4 flex items-center border-r-[3px] border-black">
              System History
            </span>
          </div>
          
          <div className="p-6 md:p-12 lg:p-16">
            <div className="max-w-4xl">
              {timeline.map((t, i) => (
                <div key={t.year} className="opacity-0 animate-fade-up flex gap-6 md:gap-10 group">
                  <div className="flex flex-col items-center">
                    <span className={`font-display text-2xl md:text-3xl leading-none transition-colors duration-300 ${t.year === '2026' ? 'text-[#0047FF]' : 'text-black'}`}>
                      {t.year}
                    </span>
                    {i < timeline.length - 1 && (
                      <div className="w-[3px] flex-1 bg-black my-2 min-h-[40px]"></div>
                    )}
                  </div>
                  <div className="pb-10 md:pb-14">
                    <h3 className="font-mono text-lg font-bold uppercase tracking-tight mb-2 group-hover:text-[#0047FF] transition-colors">
                      {t.title}
                    </h3>
                    <p className="font-mono text-sm md:text-base text-gray-600 leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="bg-white">
          <div className="flex items-stretch border-b-[3px] border-black bg-white overflow-hidden">
            <span className="bg-black text-white font-mono text-xs font-bold px-6 py-4 flex items-center tracking-widest uppercase">
              Data
            </span>
            <span className="font-display text-xl md:text-2xl uppercase tracking-widest px-6 py-4 flex items-center border-r-[3px] border-black">
              Core Capabilities
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y-[3px] sm:divide-y-0 lg:divide-x-[3px] lg:border-b-[3px] border-black">
            {skills.map((s, i) => (
              <div key={s.cat} className={`p-8 group hover:bg-[#0047FF] transition-colors duration-300 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50 lg:bg-white'}`}>
                <p className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#0047FF] group-hover:text-white mb-6 border-b-[2px] border-black group-hover:border-white pb-2 w-max">
                  {s.cat}
                </p>
                <div className="flex flex-col gap-3">
                  {s.items.map(item => (
                    <span key={item} className="font-mono text-xs md:text-sm font-bold group-hover:text-white">
                      {`> ${item}`}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}