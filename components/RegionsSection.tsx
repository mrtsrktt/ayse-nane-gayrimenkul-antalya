'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { regionsData, RegionGuide } from '@/data/regions';

interface RegionsSectionProps {
  onSelectRegion: (regionName: string) => void;
}

export default function RegionsSection({ onSelectRegion }: RegionsSectionProps) {
  const handleRegionClick = (name: string) => {
    onSelectRegion(name);
    const el = document.getElementById('portfoy');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="bolgeler" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Bölgesel Yatırım Rehberi
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            Antalya’nın En Değerli Yaşam & Yatırım Havzaları
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Her bölgenin kendine has mimarisi, getiri dinamikleri ve yaşam ritmi vardır. Doğru lokasyonu seçmek, yatırımınızın değerini ikiye katlar.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regionsData.map((region) => (
            <div
              key={region.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Region Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-black/20" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-navy-900/90 text-gold-300 border border-gold-500/30 backdrop-blur-md">
                      {region.propertyCount}+ Portföy
                    </span>
                  </div>

                  {/* Trend Indicator */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10 text-white">
                    <span className="font-serif font-bold text-xl">{region.name}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-600/90 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
                      <TrendingUp className="w-3 h-3" />
                      {region.averagePriceTrend}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-bold text-gold-700 uppercase tracking-wider mb-2">
                    {region.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {region.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {region.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleRegionClick(region.name)}
                  className="w-full text-xs font-bold py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-gold-500 hover:text-navy-950 text-slate-700 border border-slate-200 transition-all flex items-center justify-center gap-2 group-hover:border-gold-400"
                >
                  <span>{region.name} İlanlarını Görüntüle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
