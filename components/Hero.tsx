'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, ArrowRight, ShieldCheck, MapPin, Home } from 'lucide-react';
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
    <div className="relative bg-paper pt-24 sm:pt-28">
      {/* 1. Main Architectural Visual Canvas */}
      <section className="relative min-h-[72vh] sm:min-h-[78vh] flex items-center justify-center overflow-hidden">
        {/* Architectural Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=85"
            alt="Antalya Akdeniz Mimari Yaşam"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle directional daylight overlay for high typography contrast without darkness */}
          <div className="absolute inset-0 bg-gradient-to-r from-paper/95 via-paper/85 to-paper/30 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-paper/40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24">
          <div className="max-w-2xl text-left">
            {/* Subtle Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-bronze" />
              <span className="text-xs font-semibold uppercase tracking-widest text-bronze">
                Ayşe Nane • Antalya Lüks Gayrimenkul
              </span>
            </div>

            {/* Editorial Headline: Max 2-3 lines, crisp and grounded */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-ink leading-[1.15] tracking-tight mb-5">
              Antalya’da Rafine Yaşam ve Stratejik Mülk Yatırımı
            </h1>

            {/* Concise, Trustworthy Paragraph */}
            <p className="text-base sm:text-lg text-brand-muted font-normal leading-relaxed mb-8 max-w-xl">
              Döşemealtı’nın müstakil villalarından Lara falez hattı ve Kaş sahillerine; 12 yıllık lisanslı danışmanlık güvencesiyle kişiye özel gayrimenkul yönetimi.
            </p>

            {/* Two Clear CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a href="#portfoy" className="btn-primary">
                <span>Seçkin Portföyü Keşfet</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#degerleme" className="btn-secondary">
                <span>Ücretsiz Değerleme Al</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Streamlined Property Finder Toolbar */}
      <div className="relative z-20 max-w-content mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-12">
        <div className="bg-white border border-limestone rounded-xl p-3 sm:p-4 shadow-[0_8px_30px_rgba(16,28,44,0.06)]">
          <form onSubmit={handleFilterSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            {/* Property Type Dropdown */}
            <div className="sm:col-span-5 bg-paper rounded-lg border border-limestone/60 px-3.5 py-2.5">
              <label className="block text-[10px] font-bold text-brand-muted uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-bronze" />
                <span>Mülk Kategorisi</span>
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-transparent text-ink text-xs font-semibold focus:outline-none cursor-pointer"
              >
                <option value="all">Tüm Portföy (Villalar, Rezidanslar, Arsalar)</option>
                <option value="villa">Müstakil Villalar & Malikâneler</option>
                <option value="apartment">Deniz Manzaralı Rezidans & Penthouse</option>
                <option value="land">Yatırımlık Arsa & Proje Parselleri</option>
                <option value="commercial">Ticari Varlıklar</option>
              </select>
            </div>

            {/* Region Dropdown */}
            <div className="sm:col-span-4 bg-paper rounded-lg border border-limestone/60 px-3.5 py-2.5">
              <label className="block text-[10px] font-bold text-brand-muted uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-bronze" />
                <span>Bölge Seçimi</span>
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-transparent text-ink text-xs font-semibold focus:outline-none cursor-pointer"
              >
                <option value="all">Tüm Antalya Bölgeleri</option>
                <option value="Döşemealtı">Döşemealtı (Müstakil Villa Bölgesi)</option>
                <option value="Lara">Lara & Şirinyalı Falez Hattı</option>
                <option value="Konyaaltı">Konyaaltı & Sahil Bandı</option>
                <option value="Kaş">Kaş & Kalkan Sahil Şeridi</option>
                <option value="Belek">Belek Golf & Yaşam</option>
                <option value="Alanya">Alanya</option>
              </select>
            </div>

            {/* Filter Action */}
            <div className="sm:col-span-3">
              <button
                type="submit"
                className="w-full btn-primary h-[50px]"
              >
                <Search className="w-4 h-4" />
                <span>Portföyde Ara</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 3. Horizontal Credibility Strip */}
      <section className="border-y border-limestone/50 bg-ivory/60 py-6">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="border-l-2 border-bronze pl-3">
              <p className="font-serif text-lg sm:text-xl font-bold text-ink">12+ Yıllık</p>
              <p className="text-xs text-brand-muted font-medium">Antalya Bölge Deneyimi</p>
            </div>

            <div className="border-l-2 border-bronze pl-3">
              <p className="font-serif text-lg sm:text-xl font-bold text-ink">MYK Seviye 5</p>
              <p className="text-xs text-brand-muted font-medium">Lisanslı Sorumlu Emlak Danışmanı</p>
            </div>

            <div className="border-l-2 border-bronze pl-3">
              <p className="font-serif text-lg sm:text-xl font-bold text-ink">Döşemealtı & Lara</p>
              <p className="text-xs text-brand-muted font-medium">Mikro-Piyasa Uzmanlığı</p>
            </div>

            <div className="border-l-2 border-bronze pl-3">
              <p className="font-serif text-lg sm:text-xl font-bold text-ink">Uçtan Uca Destek</p>
              <p className="text-xs text-brand-muted font-medium">Hukuki, Tapu & Ekspertiz Güvencesi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
