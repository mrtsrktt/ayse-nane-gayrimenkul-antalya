'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
} from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { siteConfig } from '@/data/siteConfig';

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Tüm Makaleler' },
    { id: 'Piyasa Analizi', label: 'Piyasa Analizi' },
    { id: 'Yatırım & Getiri', label: 'Yatırım & Getiri' },
    { id: 'Vatandaşlık & Hukuk', label: 'Vatandaşlık & Hukuk' },
    { id: 'Bölge Rehberi', label: 'Bölge Rehberi' },
    { id: 'Arsa & İmar', label: 'Arsa & İmar' },
  ];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter((p) => p.slug !== featuredPost?.slug);

  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen text-brand-text">
      {/* Editorial Header */}
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="border-b border-limestone/50 pb-10 text-left max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-bronze" />
            <span className="text-xs font-semibold uppercase tracking-widest text-bronze">
              Antalya Gayrimenkul İçgörüleri & Raporlar
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-ink leading-tight mb-4">
            Piyasa Analizleri, Yatırım Stratejileri ve Hukuk Rehberi
          </h1>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
            Döşemealtı villa trendleri, falez hattı değerlemeleri, döviz bazlı getiri modelleri ve tapu süreçleri üzerine Ayşe Nane’den derinlemesine analizler.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-ink text-white'
                    : 'bg-ivory text-brand-text hover:bg-limestone/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Makale veya konu arayın..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-ivory border border-limestone/70 rounded-lg pl-10 pr-4 py-2 text-xs text-ink placeholder-brand-muted focus:outline-none focus:border-bronze"
            />
          </div>
        </div>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Featured Editorial Post */}
        {featuredPost && (
          <div className="editorial-card overflow-hidden bg-white grid grid-cols-1 lg:grid-cols-12 group">
            {/* Image (7 cols) */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[360px] overflow-hidden bg-ivory">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded bg-paper/95 text-xs font-semibold text-ink border border-limestone/60">
                  Öne Çıkan Başyazı
                </span>
              </div>
            </div>

            {/* Content (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3 text-xs text-brand-muted font-medium">
                  <span className="text-bronze font-semibold">{featuredPost.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-bronze" /> {featuredPost.readTime}
                  </span>
                  <span>•</span>
                  <span>{featuredPost.publishDate}</span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink hover:text-bronze transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3 font-normal">
                  {featuredPost.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-limestone/40 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-limestone shrink-0">
                    <Image
                      src={featuredPost.author.image}
                      alt={featuredPost.author.name}
                      fill
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
                  className="btn-primary text-xs"
                >
                  <span>Makaleyi Oku</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {regularPosts.map((post) => (
            <article
              key={post.slug}
              className="editorial-card overflow-hidden bg-white flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-ivory">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded bg-paper/95 text-[11px] font-semibold text-ink border border-limestone/60">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3 text-left">
                  <div className="flex items-center gap-3 text-xs text-brand-muted">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.publishDate}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-serif font-bold text-ink group-hover:text-bronze transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-brand-muted line-clamp-3 leading-relaxed font-normal">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-limestone/30 flex items-center justify-between">
                <span className="text-[11px] text-brand-muted">
                  Yazar: <strong className="text-ink font-semibold">{post.author.name}</strong>
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-bronze hover:text-ink flex items-center gap-1 transition-colors"
                >
                  <span>Oku</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="bg-ivory rounded-xl p-8 sm:p-10 border border-limestone/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-bronze">
              Özel Yatırım Danışmanlığı
            </span>
            <h3 className="text-2xl font-serif font-bold text-ink">
              Antalya’da Doğru Mülk Seçimi İçin Bize Danışın
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
              Türk Vatandaşlığı kriterleri, Döşemealtı villa yatırımları ya da Kaş-Kalkan getiri analizi hakkında bizzat görüşün.
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              'Merhaba Ayşe Hanım, blog yazılarınızı inceledim. Yatırım danışmanlığı hakkında görüşmek istiyorum.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs shrink-0"
          >
            <span>Danışmanlık Randevusu Alın</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
