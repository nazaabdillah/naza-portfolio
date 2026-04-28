import { NextRequest, NextResponse } from 'next/server'
import { createToken } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const { username, password } = await req.json()

  const validUser = process.env.ADMIN_USERNAME || 'admin'
  const validPass = process.env.ADMIN_PASSWORD || 'admin123'

  if (username !== validUser || password !== validPass) {
    return NextResponse.json({ message: 'Username atau password salah' }, { status: 401 })
  }

  const token = await createToken()

  const res = NextResponse.json({ ok: true })
  res.cookies.set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  return res
}
