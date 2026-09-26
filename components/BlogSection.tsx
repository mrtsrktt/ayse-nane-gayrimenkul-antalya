'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export default function BlogSection() {
  const topArticles = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 text-gold-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              Uzman Görüşü & Piyasa Raporları
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Antalya Gayrimenkul & Yatırım Bülteni
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl">
              Döşemealtı villa fiyat dinamikleri, Türk Vatandaşlığı alım mevzuatı ve döviz bazlı kira amortismanı üzerine Ayşe Nane’den güncel analizler.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl border border-slate-300 hover:border-gold-500 hover:bg-gold-50 transition-all text-slate-800"
            >
              <span>Tüm 5 Makaleyi Görüntüle</span>
              <ArrowRight className="w-4 h-4 text-gold-600" />
            </Link>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topArticles.map((post) => (
            <article
              key={post.slug}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:border-gold-500/50 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-navy-950/90 text-gold-300 border border-gold-500/30 backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gold-600" /> {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gold-600" /> {post.publishDate}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-gold-700 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">
                  {post.author.name}
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-gold-700 hover:text-gold-900 flex items-center gap-1 transition-colors"
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
