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
    <section className="py-24 bg-[#FAF9F5] text-slate-800 relative">
      <div className="editorial-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Instagram Branding */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#C13584] text-[11px] font-bold uppercase tracking-[0.2em] mb-3 shadow-sm">
              <Instagram className="w-3.5 h-3.5 text-[#C13584]" />
              Sosyal Medya & Canlı Turlar
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F1E36] tracking-tight">
              Instagram’da Güncel Portföy & <br />
              <span className="gold-gradient-text italic font-normal">Antalya Yaşamı</span>
            </h2>
            <p className="text-slate-500 text-sm mt-3 max-w-xl font-light">
              En yeni villa turlarımızı, falez manzaralı canlı yayınlarımızı ve piyasa analizlerimizi doğrudan Ayşe Nane’nin resmi hesabından takip edin.
            </p>
          </div>

          {/* Follow Button */}
          <div className="shrink-0">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-transform hover:scale-105 active:scale-95"
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
              className="group relative h-88 rounded-2xl overflow-hidden bg-slate-100 border border-[#EAE6DF] hover:border-pink-300 shadow-[0_10px_30px_rgba(15,30,54,0.06)] hover:shadow-[0_20px_45px_rgba(15,30,54,0.12)] transition-all duration-500 flex flex-col justify-end p-5 hover:-translate-y-1.5"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/90 via-[#0F1E36]/40 to-transparent" />

              {/* Top Tag & Type Icon */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/95 text-[#0F1E36] backdrop-blur-md shadow-sm border border-[#EAE6DF]">
                  {post.tag}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#0F1E36] shadow-sm">
                  {post.type === 'reel' ? (
                    <Play className="w-3.5 h-3.5 fill-[#B89047] text-[#B89047]" />
                  ) : (
                    <Instagram className="w-3.5 h-3.5 text-[#C13584]" />
                  )}
                </div>
              </div>

              {/* Bottom Post Info */}
              <div className="relative z-10 space-y-2.5">
                <p className="text-xs text-white/95 line-clamp-2 font-medium leading-relaxed group-hover:text-white">
                  {post.title}
                </p>

                <div className="flex items-center justify-between text-[11px] text-white/80 pt-2 border-t border-white/20">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-200" /> {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Profile Card Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-[#EAE6DF] shadow-[0_10px_30px_rgba(15,30,54,0.05)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#DFC596] via-pink-500 to-purple-600">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white">
                <Image src="/ayse-nane.jpg" alt="Ayşe Nane" fill className="object-cover" />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-[#0F1E36] flex items-center gap-1.5">
                <span>{siteConfig.instagramHandle}</span>
                <span className="w-4 h-4 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center font-bold">✓</span>
              </p>
              <p className="text-xs text-slate-500">
                Ayşe Nane Gayrimenkul • Günlük Villa Paylaşımları & Antalya Hikâyeleri
              </p>
            </div>
          </div>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#0F1E36] bg-[#FAF9F5] hover:bg-[#F4F1EA] px-5 py-3 rounded-xl border border-[#EAE6DF] transition-colors flex items-center gap-2"
          >
            <span>Instagram Profilini Ziyaret Et</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#B89047]" />
          </a>
        </div>
      </div>
    </section>
  );
}
