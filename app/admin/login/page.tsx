'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

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
    
    // Validasi basic sebelum nge-hit API buat hemat resource
    if (!username || !password) {
      setError('System Error: Fields cannot be empty.')
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      
      const data = await res.json()
      
      if (res.ok) {
        router.push('/admin/dashboard')
      } else {
        setError(data.message || 'Access Denied: Invalid credentials.')
      }
    } catch (err) {
      setError('Network Error: Failed to reach the server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 selection:bg-[#0047FF] selection:text-white">
      
      {/* Tombol kembali ke dunia nyata */}
      <Link 
        href="/" 
        className="absolute top-6 left-6 font-mono text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
      >
        ← Return
      </Link>

      {/* LOGIN PANEL CONTAINER */}
      <div className="w-full max-w-md bg-white border-[3px] border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] p-8 md:p-10 opacity-0 animate-fade-up">
        
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="font-mono text-[#0047FF] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2">
              // Restricted Area
            </div>
            <h1 className="font-display text-4xl uppercase tracking-tight text-black">
              System Access
            </h1>
          </div>
          <span className="w-3 h-3 bg-[#0047FF] animate-pulse"></span>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          
          {/* USERNAME INPUT */}
          <div>
            <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-black block mb-2">
              Username ID
            </label>
            <input 
              type="text"
              value={username} 
              onChange={e => setUsername(e.target.value)}
              className="w-full px-4 py-3 border-[3px] border-black font-mono text-sm outline-none focus:border-[#0047FF] focus:bg-gray-50 transition-colors"
              placeholder="admin_root"
              autoComplete="off"
            />
          </div>

          {/* PASSWORD INPUT */}
          <div>
            <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-black block mb-2">
              Passcode
            </label>
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-[3px] border-black font-mono text-sm outline-none focus:border-[#0047FF] focus:bg-gray-50 transition-colors"
              placeholder="••••••••"
            />
          </div>

          {/* ERROR LOG */}
          {error && (
            <div className="bg-red-50 border-l-[3px] border-red-500 p-3 mt-2">
              <p className="font-mono text-[10px] md:text-xs font-bold text-red-600 uppercase tracking-widest">
                {error}
              </p>
            </div>
          )}

          {/* SUBMIT ACTION */}
          <button 
            type="submit" 
            disabled={loading} 
            className={`mt-4 w-full px-6 py-4 border-[3px] border-black font-mono text-xs md:text-sm font-bold uppercase tracking-widest transition-all ${
              loading 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-[#0047FF] text-white hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1'
            }`}
          >
            {loading ? 'Authenticating...' : 'Initialize Login →'}
          </button>

        </form>
      </div>
    </div>
  )
}