'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { regionsData } from '@/data/regions';

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
    <section id="bolgeler" className="py-28 bg-[#070A12] text-white relative">
      <div className="editorial-divider mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full luxury-glass text-gold-300 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Bölgesel Yatırım & Yaşam Atlası
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
            Antalya’nın En Değerli <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">Mikro-Yatırım Havzaları</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Her bölgenin kendine has mimarisi, döviz getiri dinamikleri ve yaşam ritmi vardır. Doğru mikromarketi seçmek yatırımınızın değerini katlar.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regionsData.map((region) => (
            <div
              key={region.id}
              className="group bg-[#0B1120] rounded-3xl overflow-hidden border border-white/10 hover:border-gold-500/40 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Region Image */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-black/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest bg-black/60 text-gold-300 border border-gold-500/30 backdrop-blur-md">
                      {region.propertyCount}+ Portföy
                    </span>
                  </div>

                  {/* Trend Indicator */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10 text-white">
                    <span className="font-serif font-bold text-2xl drop-shadow-md">{region.name}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 px-3 py-1 rounded-full backdrop-blur-md">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      {region.averagePriceTrend}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <p className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                    {region.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {region.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-3 border-t border-white/10">
                    {region.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
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
                  className="w-full text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl bg-white/5 hover:bg-gold-500 hover:text-navy-950 text-slate-200 border border-white/10 hover:border-gold-400 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  <span>{region.name} İlanlarını Görüntüle</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
