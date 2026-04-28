'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

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
    const res = await fetch('/api/projects')
    const data = await res.json()
    if (res.ok) setProjects(data)
    setLoading(false)
  }

  async function addProject(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    const res = await fetch('/api/projects', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({ ...form, tags: form.tags.split(',').map(t=>t.trim()).filter(Boolean) })
    })
    if (res.ok) {
      setMsg('✓ Project berhasil ditambahkan')
      setForm({ title:'', description:'', tags:'', url:'' })
      fetchProjects()
    } else {
      setMsg('✗ Gagal menyimpan project')
    }
    setSaving(false)
    setTimeout(()=>setMsg(''), 3000)
  }

  async function deleteProject(id: string) {
    if (!confirm('Hapus project ini?')) return
    await fetch(`/api/projects?id=${id}`, { method:'DELETE' })
    fetchProjects()
  }

  const Label = ({children}:{children:string}) => (
    <label style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'10px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1.5px', display:'block', marginBottom:'6px' }}>{children}</label>
  )

  const Input = ({placeholder, value, onChange}:{placeholder:string,value:string,onChange:(v:string)=>void}) => (
    <input placeholder={placeholder} value={value} onChange={e=>onChange(e.target.value)}
      style={{ width:'100%', padding:'10px 14px', border:'2.5px solid #0a0a0a', fontSize:'14px', fontFamily:'Space Grotesk, sans-serif', outline:'none', marginBottom:'1rem' }}
    />
  )

  return (
    <div style={{ minHeight:'100vh', background:'#fff' }}>
      {/* Header */}
      <div style={{ borderBottom:'2.5px solid #0a0a0a', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 2rem', height:'58px' }}>
        <span style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'24px', letterSpacing:'2px' }}>ADMIN<span style={{color:'#0047FF'}}>.</span>PANEL</span>
        <div style={{ display:'flex', gap:'0' }}>
          {(['projects','blog'] as const).map(t => (
            <button key={t} onClick={()=>setTab(t)} style={{
              padding:'8px 18px', border:'2px solid #0a0a0a', borderRight:t==='projects'?'none':'2px solid #0a0a0a',
              background:tab===t?'#0047FF':'transparent', color:tab===t?'#fff':'#0a0a0a',
              fontFamily:'JetBrains Mono, monospace', fontSize:'11px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1px',
            }}>{t}</button>
          ))}
          <button onClick={()=>router.push('/')} style={{ padding:'8px 18px', border:'2px solid #0a0a0a', borderLeft:'none', background:'transparent', fontFamily:'JetBrains Mono, monospace', fontSize:'11px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1px' }}>← Site</button>
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'380px 1fr', minHeight:'calc(100vh - 58px)' }}>
        {/* FORM */}
        <div style={{ borderRight:'2.5px solid #0a0a0a', padding:'2rem' }}>
          {tab === 'projects' ? (
            <>
              <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'24px', letterSpacing:'1px', marginBottom:'1.5rem' }}>ADD PROJECT</h2>
              <form onSubmit={addProject}>
                <Label>Title</Label>
                <Input placeholder="REPD App" value={form.title} onChange={v=>setForm(f=>({...f,title:v}))} />
                <Label>Description</Label>
                <textarea value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))}
                  placeholder="Deskripsi singkat project..."
                  style={{ width:'100%', padding:'10px 14px', border:'2.5px solid #0a0a0a', fontSize:'14px', fontFamily:'Space Grotesk, sans-serif', outline:'none', marginBottom:'1rem', minHeight:'100px', resize:'vertical' }}
                />
                <Label>Tags (pisah koma)</Label>
                <Input placeholder="Golang, Next.js, Supabase" value={form.tags} onChange={v=>setForm(f=>({...f,tags:v}))} />
                <Label>URL</Label>
                <Input placeholder="https://github.com/..." value={form.url} onChange={v=>setForm(f=>({...f,url:v}))} />
                {msg && <p style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'12px', color: msg.startsWith('✓')?'green':'red', marginBottom:'1rem', fontWeight:700 }}>{msg}</p>}
                <button type="submit" disabled={saving} style={{ width:'100%', padding:'12px', background:saving?'#999':'#0047FF', color:'#fff', border:'2.5px solid #0a0a0a', fontSize:'12px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1.5px', fontFamily:'Space Grotesk, sans-serif' }}>
                  {saving ? 'Saving...' : 'Add Project →'}
                </button>
              </form>
            </>
          ) : (
            <div>
              <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'24px', letterSpacing:'1px', marginBottom:'1rem' }}>BLOG POSTS</h2>
              <div style={{ padding:'1.25rem', border:'2.5px solid #0047FF', background:'#f0f4ff' }}>
                <p style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1px', color:'#0047FF', marginBottom:'8px' }}>How to add posts</p>
                <p style={{ fontSize:'13px', color:'#555', lineHeight:1.7 }}>
                  Buat file <code style={{background:'#dde5ff',padding:'1px 5px'}}>nama-artikel.mdx</code> di folder <code style={{background:'#dde5ff',padding:'1px 5px'}}>content/blog/</code>, lalu push ke GitHub. Vercel akan auto-deploy.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* LIST */}
        <div style={{ padding:'2rem' }}>
          {tab === 'projects' && (
            <>
              <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'24px', letterSpacing:'1px', marginBottom:'1.5rem' }}>ALL PROJECTS ({projects.length})</h2>
              {loading ? (
                <p style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'12px', color:'#999' }}>Loading...</p>
              ) : projects.length === 0 ? (
                <p style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'12px', color:'#999' }}>Belum ada project.</p>
              ) : (
                <div style={{ display:'flex', flexDirection:'column', gap:'0' }}>
                  {projects.map((p,i) => (
                    <div key={p.id} style={{ padding:'1.25rem', border:'2.5px solid #0a0a0a', borderTop:i===0?'2.5px solid #0a0a0a':'none', display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'1rem' }}>
                      <div style={{ flex:1 }}>
                        <p style={{ fontWeight:700, fontSize:'15px', marginBottom:'4px' }}>{p.title}</p>
                        <p style={{ fontSize:'12px', color:'#666', marginBottom:'8px' }}>{p.description}</p>
                        <div style={{ display:'flex', gap:'4px', flexWrap:'wrap' }}>
                          {(p.tags||[]).map(t => (
                            <span key={t} style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'9px', padding:'2px 8px', border:'1.5px solid #0a0a0a' }}>{t}</span>
                          ))}
                        </div>
                      </div>
                      <button onClick={()=>deleteProject(p.id)} style={{ padding:'6px 12px', background:'#fff', border:'2px solid #0a0a0a', fontFamily:'JetBrains Mono, monospace', fontSize:'10px', fontWeight:700, textTransform:'uppercase', cursor:'pointer', flexShrink:0 }}>
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
          {tab === 'blog' && (
            <div>
              <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'24px', letterSpacing:'1px', marginBottom:'1rem' }}>MANAGE BLOG</h2>
              <p style={{ fontSize:'13px', color:'#666', lineHeight:1.7, maxWidth:'480px' }}>
                Blog posts dikelola lewat file MDX di repository GitHub lo. Push file baru = artikel baru. Edit file = artikel terupdate. Delete file = artikel hilang.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
