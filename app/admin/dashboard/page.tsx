'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Project = { id: string; title: string; description: string; tags: string[]; url: string }

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<'projects'|'blog'>('projects')
  const [form, setForm] = useState({ title:'', description:'', tags:'', url:'' })
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')
  const router = useRouter()

  useEffect(() => { fetchProjects() }, [])

  async function fetchProjects() {
    try {
      const res = await fetch('/api/projects')
      const data = await res.json()
      if (res.ok) setProjects(data)
    } catch (error) {
      console.error("Failed to fetch projects")
    } finally {
      setLoading(false)
    }
  }

  async function addProject(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    try {
      const res = await fetch('/api/projects', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({ ...form, tags: form.tags.split(',').map(t=>t.trim()).filter(Boolean) })
      })
      if (res.ok) {
        setMsg('✓ System Updated: Project Added')
        setForm({ title:'', description:'', tags:'', url:'' })
        fetchProjects()
      } else {
        setMsg('✗ Error: Failed to save project')
      }
    } catch (error) {
      setMsg('✗ Network Error')
    } finally {
      setSaving(false)
      setTimeout(() => setMsg(''), 3000)
    }
  }

  async function deleteProject(id: string) {
    if (!confirm('WARNING: Are you sure you want to delete this record?')) return
    try {
      await fetch(`/api/projects?id=${id}`, { method:'DELETE' })
      fetchProjects()
    } catch (error) {
      alert("Failed to delete project")
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-black font-sans selection:bg-[#0047FF] selection:text-white">
      
      {/* HEADER / TOPBAR */}
      <header className="bg-white border-b-[3px] border-black flex flex-col sm:flex-row items-center justify-between px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-4 mb-4 sm:mb-0 w-full sm:w-auto justify-between">
          <span className="font-display text-2xl md:text-3xl uppercase tracking-widest">
            Control<span className="text-[#0047FF]">.</span>Panel
          </span>
          <Link href="/" className="sm:hidden font-mono text-[10px] font-bold uppercase tracking-widest border-[2px] border-black px-3 py-1 hover:bg-black hover:text-white transition-colors">
            Exit
          </Link>
        </div>
        
        <div className="flex w-full sm:w-auto border-[3px] border-black bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          {(['projects','blog'] as const).map(t => (
            <button 
              key={t} 
              onClick={() => setTab(t)} 
              className={`flex-1 sm:flex-none px-6 py-2 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors ${
                tab === t 
                  ? 'bg-[#0047FF] text-white border-r-[3px] border-black last:border-r-0' 
                  : 'bg-transparent text-black border-r-[3px] border-black last:border-r-0 hover:bg-gray-100'
              }`}
            >
              {t}
            </button>
          ))}
          <Link 
            href="/" 
            className="hidden sm:flex px-6 py-2 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-red-500 hover:text-white transition-colors items-center"
          >
            Exit →
          </Link>
        </div>
      </header>

      {/* MAIN DASHBOARD GRID */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 opacity-0 animate-fade-up">
        
        {/* LEFT COLUMN: CONTROLS & FORMS (4 Columns) */}
        <div className="lg:col-span-4 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black bg-white p-6 md:p-8">
          
          {tab === 'projects' ? (
            <div className="animate-fade-up">
              <div className="font-mono text-[#0047FF] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                // Database Write
              </div>
              <h2 className="font-display text-3xl uppercase tracking-tight mb-6">Add Project</h2>
              
              <form onSubmit={addProject} className="flex flex-col gap-4">
                <div>
                  <label className="font-mono text-[10px] font-bold uppercase tracking-widest block mb-2">Title</label>
                  <input placeholder="e.g. Workflow Engine" value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} required
                    className="w-full px-4 py-3 border-[3px] border-black font-mono text-sm outline-none focus:border-[#0047FF] focus:bg-gray-50 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="font-mono text-[10px] font-bold uppercase tracking-widest block mb-2">Description</label>
                  <textarea placeholder="Brief system overview..." value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))} required
                    className="w-full px-4 py-3 border-[3px] border-black font-mono text-sm outline-none focus:border-[#0047FF] focus:bg-gray-50 transition-colors min-h-[120px] resize-y"
                  />
                </div>
                
                <div>
                  <label className="font-mono text-[10px] font-bold uppercase tracking-widest block mb-2">Tags (Comma Separated)</label>
                  <input placeholder="Golang, Postgres, API" value={form.tags} onChange={e=>setForm(f=>({...f,tags:e.target.value}))} required
                    className="w-full px-4 py-3 border-[3px] border-black font-mono text-sm outline-none focus:border-[#0047FF] focus:bg-gray-50 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="font-mono text-[10px] font-bold uppercase tracking-widest block mb-2">Target URL</label>
                  <input placeholder="https://github.com/..." value={form.url} onChange={e=>setForm(f=>({...f,url:e.target.value}))}
                    className="w-full px-4 py-3 border-[3px] border-black font-mono text-sm outline-none focus:border-[#0047FF] focus:bg-gray-50 transition-colors"
                  />
                </div>

                {msg && (
                  <div className={`p-3 border-[3px] font-mono text-[10px] font-bold uppercase tracking-widest ${msg.includes('✓') ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700'}`}>
                    {msg}
                  </div>
                )}

                <button type="submit" disabled={saving} 
                  className={`mt-2 w-full px-6 py-4 border-[3px] border-black font-mono text-xs font-bold uppercase tracking-widest transition-all ${saving ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-black text-white hover:bg-[#0047FF] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1'}`}
                >
                  {saving ? 'Executing...' : 'Deploy Record →'}
                </button>
              </form>
            </div>
          ) : (
            <div className="animate-fade-up">
              <div className="font-mono text-[#0047FF] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                // Instructions
              </div>
              <h2 className="font-display text-3xl uppercase tracking-tight mb-6">Blog Sync</h2>
              
              <div className="border-[3px] border-[#0047FF] bg-blue-50 p-6">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0047FF] mb-4 border-b-[2px] border-[#0047FF] pb-2">
                  Deployment Pipeline
                </p>
                <p className="font-mono text-xs text-gray-700 leading-relaxed">
                  System reads directly from the repository.
                  <br/><br/>
                  Create an <code className="bg-white border-[2px] border-black px-1.5 py-0.5 text-black">.mdx</code> file in the <code className="bg-white border-[2px] border-black px-1.5 py-0.5 text-black">content/blog/</code> directory. Push to remote origin. Vercel will trigger automatic rebuild.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: DATA LIST (8 Columns) */}
        <div className="lg:col-span-8 p-6 md:p-8">
          
          {tab === 'projects' && (
            <div className="animate-fade-up-1">
              <div className="flex justify-between items-end mb-6 border-b-[3px] border-black pb-4">
                <div>
                  <div className="font-mono text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                    // Database Read
                  </div>
                  <h2 className="font-display text-3xl uppercase tracking-tight">Active Systems</h2>
                </div>
                <span className="font-mono text-xs font-bold bg-black text-white px-3 py-1">
                  TOTAL: {projects.length}
                </span>
              </div>

              {loading ? (
                <div className="flex gap-2 items-center text-[#0047FF] font-mono text-xs font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 bg-[#0047FF] animate-ping"></span> Fetching Records...
                </div>
              ) : projects.length === 0 ? (
                <div className="border-[3px] border-dashed border-gray-300 p-10 text-center">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Database is empty</span>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {projects.map((p) => (
                    <div key={p.id} className="bg-white border-[3px] border-black p-5 flex flex-col sm:flex-row gap-4 justify-between items-start hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-shadow group">
                      <div className="flex-1">
                        <h3 className="font-display text-xl uppercase tracking-wide mb-1 group-hover:text-[#0047FF] transition-colors">{p.title}</h3>
                        <p className="font-mono text-xs text-gray-600 mb-4 leading-relaxed max-w-2xl">{p.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {(p.tags||[]).map(t => (
                            <span key={t} className="font-mono text-[9px] font-bold px-2 py-1 bg-gray-100 border-[2px] border-black uppercase tracking-widest">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button onClick={() => deleteProject(p.id)} className="w-full sm:w-auto mt-4 sm:mt-0 border-[3px] border-black bg-white text-black px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors">
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === 'blog' && (
            <div className="animate-fade-up-1">
               <div className="font-mono text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                // Log Index
              </div>
              <h2 className="font-display text-3xl uppercase tracking-tight mb-6">Management Logs</h2>
              <div className="border-[3px] border-black bg-white p-8">
                <p className="font-mono text-sm text-gray-700 leading-relaxed max-w-2xl">
                  Log entries are currently handled via headless Git-based CMS. 
                  <br/><br/>
                  To edit or delete logs, modify the source Markdown files in your IDE and push the changes. The Next.js compiler handles static generation automatically.
                </p>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  )
}