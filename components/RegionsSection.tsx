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
    <section id="bolgeler" className="py-24 bg-[#FAF9F5] text-slate-800 relative">
      <div className="editorial-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFC596] text-[#7E6128] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
            Bölgesel Yatırım & Yaşam Atlası
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0F1E36] tracking-tight leading-tight mb-4">
            Antalya’nın En Değerli <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">Mikro-Yatırım Havzaları</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Her bölgenin kendine has mimarisi, döviz getiri dinamikleri ve yaşam ritmi vardır. Doğru mikromarketi seçmek yatırımınızın değerini katlar.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regionsData.map((region) => (
            <div
              key={region.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#EAE6DF] hover:border-[#B89047]/60 shadow-[0_10px_30px_rgba(15,30,54,0.06)] hover:shadow-[0_20px_45px_rgba(15,30,54,0.12)] transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Region Image */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/80 via-transparent to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase bg-white/95 text-[#7E6128] border border-[#DFC596] shadow-sm backdrop-blur-md">
                      {region.propertyCount} Özel Portföy
                    </span>
                  </div>

                  {/* Bottom Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="text-2xl font-serif font-bold text-white mb-0.5 drop-shadow-md">
                      {region.name}
                    </h3>
                    <p className="text-xs text-white/90 font-medium line-clamp-1">
                      {region.tagline}
                    </p>
                  </div>
                </div>

                {/* Content & Metrics */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {region.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 py-3 px-3.5 bg-[#FAF9F5] rounded-2xl border border-[#EAE6DF] text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Değer Artış Trendi</span>
                      <span className="font-bold text-[#0F1E36] mt-0.5 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-600" /> {region.averagePriceTrend}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Yaşam Stili</span>
                      <span className="font-bold text-[#7E6128] mt-0.5 truncate block">
                        {region.lifestyle}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleRegionClick(region.name)}
                  className="w-full text-xs font-bold text-[#0F1E36] bg-[#F8F6F1] hover:bg-[#B89047] hover:text-white py-3 px-4 rounded-xl transition-all border border-[#EAE6DF] flex items-center justify-center gap-2 group-hover:border-[#B89047]"
                >
                  <span>{region.name} İlanlarını Filtrele</span>
                  <ArrowRight className="w-4 h-4 text-[#B89047] group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
