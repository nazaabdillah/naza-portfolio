import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const DIR = path.join(process.cwd(), 'content/blog')

export type Post = {
  slug: string
  title: string
  date: string
  category: string
  tags: string[]
  excerpt: string
  content: string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(DIR)) return []
  return fs.readdirSync(DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => {
      const { data, content } = matter(fs.readFileSync(path.join(DIR, f), 'utf-8'))
      return { slug: f.replace('.mdx',''), title: data.title||'', date: data.date||'', category: data.category||'General', tags: data.tags||[], excerpt: data.excerpt||'', content }
    })
    .sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post|null {
  const fp = path.join(DIR, `${slug}.mdx`)
  if (!fs.existsSync(fp)) return null
  const { data, content } = matter(fs.readFileSync(fp,'utf-8'))
  return { slug, title: data.title||'', date: data.date||'', category: data.category||'General', tags: data.tags||[], excerpt: data.excerpt||'', content }
}
