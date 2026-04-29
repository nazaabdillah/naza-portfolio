'use client'
import Link from 'next/link'
import type { Post } from '@/lib/blog'

export default function BlogCard({ post, index, total }: { post: Post; index: number; total: number }) {
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className={`group grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-6 p-8 md:px-12 md:py-10 border-black transition-all duration-300 hover:bg-gray-50 ${
        index < total - 1 ? 'border-b-[3px]' : 'border-b-0'
      }`}
    >
      <div className="flex flex-col gap-3">
        {/* METADATA */}
        <div className="flex items-center gap-4">
          <span className={`font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 border-[2px] border-black transition-colors ${
            post.category === 'Architecture' ? 'bg-[#0047FF] text-white' : 
            post.category === 'Management' ? 'bg-black text-white' : 'bg-white text-black'
          }`}>
            {post.category}
          </span>
          <span className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            {new Date(post.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}
          </span>
        </div>

        {/* CONTENT */}
        <h2 className="font-display text-2xl md:text-3xl uppercase leading-tight tracking-tight text-black group-hover:text-[#0047FF] transition-colors">
          {post.title}
        </h2>
        
        <p className="font-mono text-xs md:text-sm text-gray-600 leading-relaxed max-w-2xl">
          {post.excerpt}
        </p>

        {/* TAGS */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {post.tags.map(t => (
              <span key={t} className="font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest border-b border-transparent group-hover:border-gray-300">
                #{t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ARROW INDICATOR */}
      <div className="hidden md:flex items-center justify-center w-12 h-12 border-[3px] border-transparent group-hover:border-black group-hover:bg-[#0047FF] group-hover:text-white transition-all duration-300">
        <span className="font-display text-3xl transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  )
}