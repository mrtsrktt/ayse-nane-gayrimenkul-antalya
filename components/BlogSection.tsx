'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export default function BlogSection() {
  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const secondaryPosts = blogPosts.filter((p) => p.slug !== featuredPost.slug).slice(0, 2);

  return (
    <section className="py-20 lg:py-28 bg-paper border-t border-limestone/50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-bronze" />
              <span className="text-xs font-semibold uppercase tracking-widest text-bronze">
                Piyasa Raporları & Analizler
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink leading-tight mb-3">
              Antalya Gayrimenkul İçgörüleri
            </h2>

            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
              Fiyat trendleri, bölgesel amortisman süreleri, hukuki düzenlemeler ve yatırım stratejilerine dair güncel yazılar.
            </p>
          </div>

          <Link
            href="/blog"
            className="btn-secondary text-xs shrink-0 self-start md:self-end"
          >
            <span>Tüm Makaleleri Gör ({blogPosts.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial Layout: 1 Major Feature + 2 Secondary Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Major Lead Article (7 cols) */}
          <div className="lg:col-span-7 editorial-card overflow-hidden bg-white flex flex-col justify-between group">
            <Link href={`/blog/${featuredPost.slug}`} className="block">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-ivory">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-paper/95 text-xs font-semibold text-ink border border-limestone/60">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
            </Link>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs text-brand-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-bronze" />
                    <span>{featuredPost.publishDate}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-bronze" />
                    <span>{featuredPost.readTime}</span>
                  </span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-ink leading-snug group-hover:text-bronze transition-colors">
                    {featuredPost.title}
                  </h3>
                </Link>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal line-clamp-3">
                  {featuredPost.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-limestone/40 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-limestone">
                    <Image
                      src={featuredPost.author.image}
                      alt={featuredPost.author.name}
                      fill
                      sizes="32px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-xs text-ink">{featuredPost.author.name}</p>
                    <p className="text-[10px] text-brand-muted">{featuredPost.author.role}</p>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="text-xs font-semibold text-bronze hover:text-ink flex items-center gap-1"
                >
                  <span>Yazıyı Oku</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* 2 Secondary Articles (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {secondaryPosts.map((post) => (
              <div
                key={post.slug}
                className="editorial-card p-6 bg-white flex flex-col justify-between flex-1 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-brand-muted">
                    <span className="px-2.5 py-0.5 rounded bg-ivory text-[11px] font-semibold text-brand-text border border-limestone/50">
                      {post.category}
                    </span>
                    <span className="text-[11px]">{post.readTime}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h4 className="text-lg font-serif font-bold text-ink leading-snug group-hover:text-bronze transition-colors">
                      {post.title}
                    </h4>
                  </Link>

                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-limestone/30 flex items-center justify-between text-xs">
                  <span className="text-brand-muted text-[11px]">{post.publishDate}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-semibold text-bronze hover:text-ink flex items-center gap-1"
                  >
                    <span>İncele</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
