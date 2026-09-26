'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export default function BlogSection() {
  const topArticles = blogPosts.slice(0, 3);

  return (
    <section className="py-28 bg-[#070A12] text-white relative">
      <div className="editorial-divider mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full luxury-glass text-gold-300 text-xs font-semibold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              Piyasa Analizleri & Yatırım Bülteni
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Akdeniz Gayrimenkul <br className="hidden sm:inline" />
              <span className="gold-gradient-text italic font-normal">Piyasa Raporları</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
              Döşemealtı villa fiyat dinamikleri, Türk Vatandaşlığı alım mevzuatı ve döviz bazlı kira amortismanı üzerine Ayşe Nane’den güncel analizler.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl border border-white/10 hover:border-gold-400 hover:bg-gold-500/10 transition-all text-slate-200"
            >
              <span>Tüm 5 Makaleyi Görüntüle</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topArticles.map((post) => (
            <article
              key={post.slug}
              className="group bg-[#0B1120] rounded-3xl overflow-hidden border border-white/10 hover:border-gold-500/40 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-black/60 text-gold-300 border border-gold-500/30 backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gold-400" /> {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gold-400" /> {post.publishDate}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold-300 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-400">
                  {post.author.name}
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-gold-400 hover:text-gold-200 flex items-center gap-1 transition-colors"
                >
                  <span>Oku</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
