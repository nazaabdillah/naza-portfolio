import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactCards from '@/components/ContactCards'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Contact | Naza Abdillah' }

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 flex flex-col">
        
        {/* HERO SECTION / SIGNAL HEADER */}
        <section className="border-b-[3px] border-black bg-gray-50 p-6 md:p-12 lg:p-16">
          <div className="max-w-4xl">
            <div className="opacity-0 animate-fade-up font-mono text-[#0047FF] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6">
              // Initialize Connection
            </div>
            <h1 className="opacity-0 animate-fade-up-1 font-display text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-8">
              Get in<br/>
              <span className="text-[#0047FF]">Touch</span>
            </h1>
            <p className="opacity-0 animate-fade-up-2 font-mono text-sm md:text-base text-gray-700 leading-relaxed max-w-xl">
              Got a system idea that needs building, need a Project Manager to streamline your IT operations, or want to discuss backend architecture? Reach out. All signals are monitored.
            </p>
          </div>
        </section>

        {/* CONTACT CARDS COMPONENT */}
        <section className="opacity-0 animate-fade-up-3">
          <ContactCards />
        </section>

        {/* COMMUNICATION PROTOCOLS (Formerly Quick Note) */}
        <section className="border-y-[3px] border-black bg-white">
          <div className="flex items-stretch border-b-[3px] border-black bg-white overflow-hidden">
            <span className="bg-black text-white font-mono text-xs font-bold px-6 py-4 flex items-center tracking-widest uppercase">
              Info
            </span>
            <span className="font-display text-xl md:text-2xl uppercase tracking-widest px-6 py-4 flex items-center border-r-[3px] border-black">
              Protocols
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-black">
            
            {/* PROTOCOL 1 */}
            <div className="p-8 md:p-12 group hover:bg-gray-50 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-[#0047FF] rounded-full"></div>
                <h3 className="font-display text-2xl uppercase tracking-wider">Response Time</h3>
              </div>
              <p className="font-mono text-sm text-gray-600 leading-relaxed">
                Standard latency is 24-48 hours during business days. Weekend signals may experience delays.
              </p>
            </div>

            {/* PROTOCOL 2 */}
            <div className="p-8 md:p-12 group hover:bg-gray-50 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-[#0047FF] rounded-full animate-pulse"></div>
                <h3 className="font-display text-2xl uppercase tracking-wider">Available For</h3>
              </div>
              <p className="font-mono text-sm text-gray-600 leading-relaxed">
                Open for Freelance contracts, Project Management, System Architecture, or technical consultations.
              </p>
            </div>

          </div>
        </section>

        {/* FINAL SYSTEM FOOTER DECORATION */}
        <div className="p-6 bg-white flex justify-center items-center">
            <span className="font-mono text-[9px] text-gray-300 uppercase tracking-[0.5em] animate-pulse">
              Waiting for incoming signal...
            </span>
        </div>

      </main>

      <Footer />
    </div>
  )
}