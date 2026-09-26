'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Play, ExternalLink, Sparkles, Heart, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function InstagramSection() {
  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80',
      type: 'reel',
      title: 'Döşemealtı Müstakil Havuzlu Villa Turu 🌿 Gün batımı manzarası ve akıllı ev altyapısı...',
      likes: '1.420',
      comments: '68',
      tag: 'Villa Turu',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
      type: 'post',
      title: 'Lara Falezler Penthouse portföyümüz yeni sahibine hayırlı olsun 🔑✨',
      likes: '2.150',
      comments: '114',
      tag: 'Başarılı Satış',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      type: 'reel',
      title: 'Kalkan’da Meis adasına karşı sonsuzluk havuzlu rüya yatırım 🌊',
      likes: '3.890',
      comments: '182',
      tag: 'Yatırım Fırsatı',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      type: 'post',
      title: 'Antalya’da konut alırken tapuda dikkat edilmesi gereken 5 altın kural 📋',
      likes: '1.980',
      comments: '95',
      tag: 'Uzman Tavsiyesi',
    },
  ];

  return (
    <section className="py-24 bg-[#070A12] text-white relative overflow-hidden border-t border-white/[0.08]">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Instagram Branding */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#C5A059]/30 text-[#DEC07E] text-[11px] font-semibold uppercase tracking-[0.2em] mb-3">
              <Instagram className="w-3.5 h-3.5 text-[#DEC07E]" />
              Sosyal Medya & Canlı Turlar
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Instagram’da Güncel Portföy & <br />
              <span className="gold-gradient-text italic font-normal">Antalya Yaşamı</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-xl">
              En yeni villa turlarımızı, falez manzaralı canlı yayınlarımızı ve piyasa analizlerimizi doğrudan Ayşe Nane’nin resmi hesabından takip edin.
            </p>
          </div>

          {/* Follow Button */}
          <div className="shrink-0">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white text-xs font-bold uppercase tracking-wider shadow-xl transition-transform hover:scale-105 active:scale-95"
            >
              <Instagram className="w-4 h-4" />
              <span>Takip Et: {siteConfig.instagramHandle}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-88 rounded-2xl overflow-hidden bg-[#0C1222] border border-white/[0.08] hover:border-[#C5A059]/50 transition-all duration-500 flex flex-col justify-end p-5 shadow-xl hover:-translate-y-1.5"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-[#070A12]/50 to-transparent" />

              {/* Top Tag & Type Icon */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#070A12]/80 text-[#DEC07E] backdrop-blur-md border border-[#C5A059]/30">
                  {post.tag}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#070A12]/80 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                  {post.type === 'reel' ? (
                    <Play className="w-3.5 h-3.5 fill-[#DEC07E] text-[#DEC07E]" />
                  ) : (
                    <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  )}
                </div>
              </div>

              {/* Bottom Post Info */}
              <div className="relative z-10 space-y-3">
                <p className="text-xs text-slate-200 line-clamp-2 font-medium leading-relaxed group-hover:text-white">
                  {post.title}
                </p>

                <div className="flex items-center justify-between text-[11px] text-slate-300 pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-400" /> {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Profile Card Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-[#0C1222] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#DEC07E] via-pink-500 to-purple-600">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#070A12]">
                <Image src="/ayse-nane.jpg" alt="Ayşe Nane" fill className="object-cover" />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>{siteConfig.instagramHandle}</span>
                <span className="w-4 h-4 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center font-bold">✓</span>
              </p>
              <p className="text-xs text-slate-400">
                Ayşe Nane Gayrimenkul • Günlük Villa Paylaşımları & Antalya Hikâyeleri
              </p>
            </div>
          </div>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-white bg-white/[0.06] hover:bg-white/[0.12] px-5 py-3 rounded-xl border border-white/10 transition-colors flex items-center gap-2"
          >
            <span>Instagram Profilini Ziyaret Et</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#DEC07E]" />
          </a>
        </div>
      </div>
    </section>
  );
}
