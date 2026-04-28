import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactCards from '@/components/ContactCards'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Contact' }

export default function Contact() {
  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column' }}>
      <Navbar />
      <main style={{ flex:1 }}>
        <section style={{ borderBottom:'2.5px solid #0a0a0a', padding:'4rem 2.5rem' }}>
          <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:'#0047FF', marginBottom:'1rem' }}>// Say Hello</div>
          <h1 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'72px', lineHeight:.85, letterSpacing:'2px', color:'#0a0a0a', marginBottom:'1.5rem' }}>
            GET IN<br/><span style={{color:'#0047FF'}}>TOUCH</span>
          </h1>
          <p style={{ fontSize:'15px', color:'#555', lineHeight:1.8, maxWidth:'480px' }}>
            Got a system idea that needs building, need a Project Manager to streamline your IT operations, or want to discuss backend architecture? Reach out. I respond fast.
          </p>
        </section>
        <ContactCards />
        <section style={{ padding:'3rem 2.5rem', borderBottom:'2.5px solid #0a0a0a' }}>
          <p style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'12px', fontWeight:700, textTransform:'uppercase', letterSpacing:'2px', color:'#0047FF', marginBottom:'1.5rem' }}>// Quick Note</p>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0' }}>
            <div style={{ padding:'1.5rem', border:'2.5px solid #0a0a0a' }}>
              <p style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'18px', letterSpacing:'1px', marginBottom:'6px' }}>Response Time</p>
              <p style={{ fontSize:'13px', color:'#666', lineHeight:1.6 }}>Biasanya 1-2 hari kerja. Weekend mungkin lebih lama.</p>
            </div>
            <div style={{ padding:'1.5rem', border:'2.5px solid #0a0a0a', borderLeft:'none' }}>
              <p style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'18px', letterSpacing:'1px', marginBottom:'6px' }}>Open For</p>
              <p style={{ fontSize:'13px', color:'#666', lineHeight:1.6 }}>Freelance, kolaborasi project, atau diskusi tech apapun.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
