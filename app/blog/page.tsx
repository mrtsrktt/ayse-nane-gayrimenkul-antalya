'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Sparkles,
  Tag,
  Share2,
  TrendingUp,
} from 'lucide-react';
import { blogPosts, BlogPost } from '@/data/blogPosts';
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
    <div className="pt-32 pb-24 bg-[#070A12] min-h-screen text-white">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="border-b border-white/[0.08] pb-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#C5A059]/30 text-[#DEC07E] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#DEC07E]" />
            Antalya Yatırım & Gayrimenkul Bülteni
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
            Akdeniz Gayrimenkul Piyasası, <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-serif font-normal">Yatırım ve Hukuk Rehberi</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Antalya, Kaş, Kalkan ve Döşemealtı’nda konut fiyat trendleri, döviz bazlı kira amortismanı, yabancıya vatandaşlık mevzuatı ve arsa imar kuralları üzerine Ayşe Nane’den derinlemesine analizler.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-semibold px-4 py-2.5 rounded-xl transition-all ${
                  selectedCategory === cat.id
                    ? 'gold-gradient-button text-[#070A12] shadow-lg'
                    : 'bg-[#0C1222] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Makalelerde arayın..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0C1222] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#DEC07E]/70 shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Featured Editorial Post Card */}
        {featuredPost && (
          <div className="bg-[#0C1222] text-white rounded-3xl overflow-hidden border border-[#C5A059]/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 group">
            {/* Image (7 cols) */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[360px] overflow-hidden">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1222] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0C1222]" />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider gold-gradient-button text-[#070A12] shadow-md">
                  Öne Çıkan Başyazı
                </span>
              </div>
            </div>

            {/* Content (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="text-[#DEC07E] font-semibold">{featuredPost.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#DEC07E]" /> {featuredPost.readTime}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#DEC07E]" /> {featuredPost.publishDate}
                  </span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white hover:text-[#DEC07E] transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {featuredPost.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C5A059] shrink-0">
                    <Image
                      src={featuredPost.author.image}
                      alt={featuredPost.author.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{featuredPost.author.name}</p>
                    <p className="text-[10px] text-[#DEC07E]">{featuredPost.author.role}</p>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="gold-gradient-button text-xs font-bold px-4 py-2.5 rounded-xl uppercase tracking-wider flex items-center gap-1.5 shadow-md"
                >
                  <span>Makaleyi Oku</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-[#0C1222] rounded-3xl overflow-hidden border border-white/[0.08] shadow-xl hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-[#070A12]">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-[#070A12]/85 text-[#DEC07E] border border-[#C5A059]/30 backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#DEC07E]" /> {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#DEC07E]" /> {post.publishDate}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#DEC07E] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-400">
                  Yazar: <strong className="text-white">{post.author.name}</strong>
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-[#DEC07E] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Devamını Oku</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter / Consultation CTA Banner */}
        <div className="bg-[#0C1222] text-white rounded-3xl p-8 sm:p-12 border border-[#C5A059]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DEC07E]">
              Kişiye Özel Yatırım Analizi
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Antalya’da Doğru Mülk Seçimi İçin Bize Danışın
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              İster Türk Vatandaşlığı hedefleyin, ister Kaş Kalkan’da yüksek döviz getirili bir villa; Ayşe Nane ile birebir yatırım planınızı oluşturun.
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              'Merhaba Ayşe Hanım, blog yazılarınızı inceledim. Yatırım danışmanlığı hakkında görüşmek istiyorum.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-button text-[#070A12] text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-xl shrink-0 shadow-xl flex items-center gap-2"
          >
            <span>Ayşe Hanım ile İletişime Geçin</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
