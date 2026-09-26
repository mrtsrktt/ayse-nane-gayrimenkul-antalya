'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, MapPin, Compass } from 'lucide-react';
import { regionsData, RegionGuide } from '@/data/regions';

interface RegionsSectionProps {
  onSelectRegion: (regionName: string) => void;
}

export default function RegionsSection({ onSelectRegion }: RegionsSectionProps) {
  const [featuredRegionId, setFeaturedRegionId] = useState('dosemealti');

  const featuredRegion = regionsData.find((r) => r.id === featuredRegionId) || regionsData[0];
  const otherRegions = regionsData.filter((r) => r.id !== featuredRegionId);

  const handleRegionClick = (name: string) => {
    onSelectRegion(name);
    const el = document.getElementById('portfoy');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="bolgeler" className="py-20 lg:py-28 bg-ivory/50 border-t border-limestone/50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-bronze" />
            <span className="text-xs font-semibold uppercase tracking-widest text-bronze">
              Bölgesel Yaşam & Mikro-Piyasa Rehberi
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink leading-tight mb-4">
            Antalya’nın Öne Çıkan Yaşam Havzaları
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
            Her bölgenin kendine has mimari karakteri, yaşam ritmi ve getiri dinamikleri bulunur. İhtiyacınıza en uygun lokasyonu keşfedin.
          </p>
        </div>

        {/* Editorial Layout: Large Featured Region + Compact Regional Grid */}
        <div className="space-y-8">
          {/* 1. Large Featured Region Showcase */}
          <div className="editorial-card overflow-hidden bg-white border border-limestone/60 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[320px] bg-paper">
              <Image
                src={featuredRegion.image}
                alt={featuredRegion.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded bg-paper/95 text-xs font-semibold text-ink border border-limestone/60">
                  Öne Çıkan Bölge
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-brand-muted">
                  <MapPin className="w-3.5 h-3.5 text-bronze" />
                  <span className="font-semibold text-ink">{featuredRegion.name}</span>
                  <span>•</span>
                  <span>{featuredRegion.propertyCount} Aktif Portföy</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink leading-snug">
                  {featuredRegion.tagline}
                </h3>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {featuredRegion.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold text-brand-text uppercase tracking-wider block">
                    Bölgesel Karakteristik
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {featuredRegion.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-ivory text-xs text-brand-text border border-limestone/50"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-limestone/40 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-brand-muted block">Yaşam Ritmi</span>
                  <span className="text-xs font-semibold text-ink">{featuredRegion.lifestyle}</span>
                </div>

                <button
                  onClick={() => handleRegionClick(featuredRegion.name)}
                  className="btn-primary text-xs"
                >
                  <span>Bölgeyi Portföyde Filtrele</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. Secondary Regions Row / Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {regionsData.map((reg) => {
              const isSelected = reg.id === featuredRegionId;
              return (
                <div
                  key={reg.id}
                  onClick={() => setFeaturedRegionId(reg.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-bronze shadow-[0_4px_16px_rgba(16,28,44,0.06)] ring-1 ring-bronze'
                      : 'bg-white/80 border-limestone/60 hover:border-bronze/50 hover:bg-white'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-bold text-base text-ink">{reg.name}</h4>
                      <span className="text-[10px] text-brand-muted font-medium">
                        {reg.propertyCount} İlan
                      </span>
                    </div>

                    <p className="text-[11px] text-brand-muted line-clamp-2 leading-relaxed font-light">
                      {reg.tagline}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-limestone/30 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-bronze font-medium">
                      {isSelected ? 'İnceleniyor' : 'Detayı Gör'}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRegionClick(reg.name);
                      }}
                      className="text-brand-muted hover:text-ink text-[11px] font-semibold flex items-center gap-1"
                      title="Portföyü Filtrele"
                    >
                      <span>Filtrele</span>
                      <ArrowRight className="w-3 h-3 text-bronze" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
