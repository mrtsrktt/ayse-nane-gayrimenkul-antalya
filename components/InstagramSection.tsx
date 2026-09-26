'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, ArrowUpRight, Video } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function InstagramSection() {
  const highlights = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80',
      title: 'Döşemealtı Müstakil Villa Çekimleri',
      category: 'Villa Turu',
      note: 'Geniş bahçe, müstakil havuz ve akıllı ev altyapısı detayları.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
      title: 'Lara Falez Hattı Penthouse Sunumu',
      category: 'Portföy İnceleme',
      note: 'Akdeniz panoraması ve iç mimari donanım sunumu.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      title: 'Kaş & Kalkan Sahil Yaşamı',
      category: 'Bölge Turu',
      note: 'Turkuaz koylarda gün batımı ve sezonluk kira dinamikleri.',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      title: 'Tapu ve Gayrimenkul Hukuku İpuçları',
      category: 'Danışman Notları',
      note: 'Konut edinirken tapuda dikkat edilmesi gereken hukuki maddeler.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-paper border-t border-limestone/50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-bronze" />
              <span className="text-xs font-semibold uppercase tracking-widest text-bronze">
                Sosyal Medya & Saha Günlüğü
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink leading-tight mb-3">
              Instagram’dan Seçmeler
            </h2>

            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
              Ayşe Nane’nin saha turları, mülk çekimleri ve piyasa bilgilendirmelerini Instagram profilinden güncel olarak takip edebilirsiniz.
            </p>
          </div>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs shrink-0 self-start md:self-end"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>{siteConfig.instagramHandle} Takip Et</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Clean Editorial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <a
              key={item.id}
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-card group overflow-hidden bg-white flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-ivory">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded bg-paper/95 text-[10px] font-semibold text-ink border border-limestone/60">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h4 className="font-serif font-bold text-base text-ink group-hover:text-bronze transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-2">
                    {item.note}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 pt-2 border-t border-limestone/30 flex items-center justify-between text-[11px] text-bronze font-medium">
                <span>Instagram’da İzle</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
