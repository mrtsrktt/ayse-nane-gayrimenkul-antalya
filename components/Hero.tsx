'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, MapPin, Home, ArrowRight, ShieldCheck, Award, Sparkles, PhoneCall } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface HeroProps {
  onSearch: (filters: { type: string; location: string }) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ type: selectedType, location: selectedLocation });
    const target = document.getElementById('portfoy');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-navy-950">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
          alt="Antalya Lüks Gayrimenkul"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-10000 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-navy-950/40 to-navy-950/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Gold Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-medium mb-6 shadow-xl animate-fade-in">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span>Antalya • Kaş • Kalkan • Lara • Konyaaltı • Döşemealtı</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-6">
          Akdeniz’in Kalbinde Hayalinizdeki Yaşama ve <br className="hidden md:inline" />
          <span className="gold-gradient-text">Doğru Yatırıma Açılan Kapı</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-300 font-light leading-relaxed mb-10">
          Antalya’nın en seçkin villaları, panoramik falez rezidansları ve yüksek getirili arsa portföyleriyle;
          <strong className="text-white font-medium"> Ayşe Nane</strong> güvencesiyle geleceğinizi inşa edin.
        </p>

        {/* Search & Filter Bar */}
        <div className="max-w-4xl mx-auto glass-panel p-3 sm:p-4 rounded-2xl shadow-2xl border border-gold-500/30 mb-12">
          <form onSubmit={handleFilterSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            {/* Property Type */}
            <div className="sm:col-span-5 text-left bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-3 focus-within:border-gold-400 transition-colors">
              <label className="block text-[11px] font-semibold text-gold-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5" /> Mülk Tipi
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-transparent text-white font-medium text-sm focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-navy-900 text-white">Tüm Mülk Tipleri</option>
                <option value="villa" className="bg-navy-900 text-white">Lüks Villalar & Malikâneler</option>
                <option value="apartment" className="bg-navy-900 text-white">Deniz Manzaralı Rezidans & Daire</option>
                <option value="land" className="bg-navy-900 text-white">Yatırımlık Villa & Ticari Arsalar</option>
                <option value="commercial" className="bg-navy-900 text-white">Turistik & Ticari Gayrimenkul</option>
              </select>
            </div>

            {/* Location */}
            <div className="sm:col-span-4 text-left bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-3 focus-within:border-gold-400 transition-colors">
              <label className="block text-[11px] font-semibold text-gold-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Konum / Bölge
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-transparent text-white font-medium text-sm focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-navy-900 text-white">Tüm Antalya Bölgeleri</option>
                <option value="Döşemealtı" className="bg-navy-900 text-white">Döşemealtı (Lüks Villalar)</option>
                <option value="Lara" className="bg-navy-900 text-white">Lara & Falezler</option>
                <option value="Konyaaltı" className="bg-navy-900 text-white">Konyaaltı Sahili</option>
                <option value="Kaş" className="bg-navy-900 text-white">Kaş & Kalkan</option>
                <option value="Belek" className="bg-navy-900 text-white">Belek Golf Bölgesi</option>
                <option value="Alanya" className="bg-navy-900 text-white">Alanya & Kargıcak</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-3">
              <button
                type="submit"
                className="w-full gold-gradient-button font-bold text-sm tracking-wide py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg"
              >
                <Search className="w-4 h-4" />
                <span>İlanları Bul</span>
              </button>
            </div>
          </form>
        </div>

        {/* Quick CTA Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <a
            href="#portfoy"
            className="inline-flex items-center gap-2 text-white font-medium hover:text-gold-300 transition-colors bg-white/10 hover:bg-white/15 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/10"
          >
            Öne Çıkan Portföyü İncele
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </a>
          <a
            href="#hakkimda"
            className="inline-flex items-center gap-2 text-gold-300 hover:text-white transition-colors bg-gold-500/10 hover:bg-gold-500/20 px-5 py-2.5 rounded-full border border-gold-400/30 backdrop-blur-sm"
          >
            <Award className="w-4 h-4 text-gold-400" />
            Ayşe Nane Kimdir?
          </a>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-10 border-t border-slate-800/80 text-left">
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="bg-navy-900/50 backdrop-blur-md p-4 rounded-xl border border-slate-800/60">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-gold-400 mb-1">{stat.value}</p>
              <p className="text-sm font-semibold text-white">{stat.label}</p>
              <p className="text-xs text-slate-400 mt-1 line-clamp-1">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
