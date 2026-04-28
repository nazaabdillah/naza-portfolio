import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About' }

const timeline = [
  { year:'2022', title:'SMK RPL', desc:'Mulai coding web — HTML, CSS, PHP, Laravel & Bootstrap.' },
  { year:'2023', title:'Masuk UNSIL SI', desc:'Dunia terbuka lebih lebar — Business Analyst, System Design, API.' },
  { year:'2024', title:'Eksplorasi Golang', desc:'Ganti stack backend ke Golang. Bikin REPD App dari nol.' },
  { year:'2025', title:'IoT + Full Stack', desc:'Eksplorasi IoT dengan Java, deploy project ke cloud pertama kali.' },
  { year:'2026', title:'Now', desc:'Fokus bikin produk nyata, cari peluang freelance & kolaborasi.' },
]

const skills = [
  { cat:'Backend', items:['Golang','PHP','Laravel','REST API'] },
  { cat:'Frontend', items:['Next.js','React','TypeScript','Vue.js'] },
  { cat:'Database', items:['PostgreSQL','Supabase','MySQL'] },
  { cat:'Tools', items:['Git','Docker','Railway','Vercel'] },
  { cat:'Other', items:['Business Analyst','System Design','IoT','Java'] },
]

export default function About() {
  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column' }}>
      <Navbar />
      <main style={{ flex:1 }}>
        <section style={{ borderBottom:'2.5px solid #0a0a0a', padding:'4rem 2.5rem', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', alignItems:'center' }}>
          <div>
            <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:'#0047FF', marginBottom:'1rem' }}>// About Me</div>
            <h1 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'64px', lineHeight:.9, letterSpacing:'2px', color:'#0a0a0a', marginBottom:'1.5rem' }}>
              A<br/><span style={{color:'#0047FF'}}>SYSTEMS BUILDER</span><br/>FROM TASIK
            </h1>
            <p style={{ fontSize:'15px', color:'#555', lineHeight:1.8 }}>
              I don't just write lines of code; I engineer solutions. My focus is on problem-solving through structured systems—whether that means architecting a highly efficient backend, designing project management workflows, or leading teams to execute IT objectives.

For me, coding is merely a tool. My core value lies in logic, efficiency, and the ability to translate complex business bottlenecks into concrete, automated systems.
            </p>
          </div>
          <div style={{ position:'relative' }}>
            <div style={{ background:'#0047FF', border:'2.5px solid #0a0a0a', aspectRatio:'4/5', overflow:'hidden', boxShadow:'8px 8px 0 #0a0a0a' }}>
              <img src="https://api.dicebear.com/9.x/notionists/svg?seed=developer&backgroundColor=0047FF" alt="Naza" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
            </div>
          </div>
        </section>

        <section style={{ borderBottom:'2.5px solid #0a0a0a' }}>
          <div style={{ display:'flex', alignItems:'stretch', borderBottom:'2.5px solid #0a0a0a' }}>
            <span style={{ background:'#0a0a0a', color:'#fff', fontFamily:'JetBrains Mono, monospace', fontSize:'10px', fontWeight:700, padding:'10px 16px', display:'flex', alignItems:'center', letterSpacing:'1px', textTransform:'uppercase' }}>Journey</span>
            <span style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'20px', letterSpacing:'2px', padding:'10px 16px', display:'flex', alignItems:'center' }}>My Timeline</span>
          </div>
          <div style={{ padding:'2rem 2.5rem' }}>
            {timeline.map((t,i) => (
              <div key={t.year} style={{ display:'grid', gridTemplateColumns:'80px 1fr', gap:'1.5rem', paddingBottom:i<timeline.length-1?'2rem':'0' }}>
                <div style={{ textAlign:'right', paddingTop:'2px' }}>
                  <span style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'22px', letterSpacing:'1px', color:t.year==='2026'?'#0047FF':'#0a0a0a' }}>{t.year}</span>
                </div>
                <div style={{ borderLeft:'2.5px solid #0a0a0a', paddingLeft:'1.5rem', paddingBottom:i<timeline.length-1?'2rem':'0' }}>
                  <p style={{ fontWeight:700, fontSize:'15px', marginBottom:'4px' }}>{t.title}</p>
                  <p style={{ fontSize:'13px', color:'#666', lineHeight:1.7 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div style={{ display:'flex', alignItems:'stretch', borderBottom:'2.5px solid #0a0a0a' }}>
            <span style={{ background:'#0a0a0a', color:'#fff', fontFamily:'JetBrains Mono, monospace', fontSize:'10px', fontWeight:700, padding:'10px 16px', display:'flex', alignItems:'center', letterSpacing:'1px', textTransform:'uppercase' }}>Skills</span>
            <span style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'20px', letterSpacing:'2px', padding:'10px 16px', display:'flex', alignItems:'center' }}>Tech Stack</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)' }}>
            {skills.map((s,i) => (
              <div key={s.cat} style={{ padding:'1.5rem 1.25rem', borderRight:i<skills.length-1?'2.5px solid #0a0a0a':'none' }}>
                <p style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'10px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1.5px', color:'#0047FF', marginBottom:'12px' }}>{s.cat}</p>
                <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
                  {s.items.map(item => (
                    <span key={item} style={{ fontSize:'13px', fontWeight:500, padding:'4px 0', borderBottom:'1px solid #eee' }}>{item}</span>
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
