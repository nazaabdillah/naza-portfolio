import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { verifyToken } from '@/lib/auth'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function isAdmin(req: NextRequest) {
  const token = req.cookies.get('admin_token')?.value
  if (!token) return false
  return verifyToken(token)
}

export async function GET() {
  const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
  if (error) return NextResponse.json({ message: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
  if (!await isAdmin(req)) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const { data, error } = await supabase.from('projects').insert([{
    title: body.title,
    description: body.description,
    tags: body.tags,
    url: body.url,
  }]).select()

  if (error) return NextResponse.json({ message: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function DELETE(req: NextRequest) {
  if (!await isAdmin(req)) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })

  const id = req.nextUrl.searchParams.get('id')
  if (!id) return NextResponse.json({ message: 'ID required' }, { status: 400 })

  const { error } = await supabase.from('projects').delete().eq('id', id)
  if (error) return NextResponse.json({ message: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
