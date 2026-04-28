'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/admin/login', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({ username, password })
    })
    const data = await res.json()
    if (res.ok) {
      router.push('/admin/dashboard')
    } else {
      setError(data.message || 'Login gagal')
    }
    setLoading(false)
  }

  return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#fff' }}>
      <div style={{ width:'100%', maxWidth:'400px', padding:'2rem' }}>
        <div style={{ border:'2.5px solid #0a0a0a', padding:'2.5rem', boxShadow:'6px 6px 0 #0a0a0a' }}>
          <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'10px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:'#0047FF', marginBottom:'8px' }}>// Admin</div>
          <h1 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'40px', letterSpacing:'2px', color:'#0a0a0a', marginBottom:'2rem' }}>PANEL LOGIN</h1>

          <form onSubmit={handleLogin} style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            <div>
              <label style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'10px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1.5px', display:'block', marginBottom:'6px' }}>Username</label>
              <input value={username} onChange={e=>setUsername(e.target.value)}
                style={{ width:'100%', padding:'10px 14px', border:'2.5px solid #0a0a0a', fontSize:'14px', fontFamily:'Space Grotesk, sans-serif', outline:'none' }}
                placeholder="admin"
              />
            </div>
            <div>
              <label style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'10px', fontWeight:700, textTransform:'uppercase', letterSpacing:'1.5px', display:'block', marginBottom:'6px' }}>Password</label>
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)}
                style={{ width:'100%', padding:'10px 14px', border:'2.5px solid #0a0a0a', fontSize:'14px', fontFamily:'Space Grotesk, sans-serif', outline:'none' }}
                placeholder="••••••••"
              />
            </div>
            {error && <p style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'12px', color:'red', fontWeight:700 }}>{error}</p>}
            <button type="submit" disabled={loading} style={{
              padding:'12px', background:loading?'#999':'#0047FF', color:'#fff',
              border:'2.5px solid #0a0a0a', fontSize:'12px', fontWeight:700,
              textTransform:'uppercase', letterSpacing:'1.5px',
              fontFamily:'Space Grotesk, sans-serif',
              transition:'all .1s',
            }}>
              {loading ? 'Loading...' : 'Login →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
