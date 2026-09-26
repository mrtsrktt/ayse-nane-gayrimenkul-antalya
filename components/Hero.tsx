'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, ArrowRight, MapPin, Home } from 'lucide-react';

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
    <div className="relative bg-paper pt-20 sm:pt-24 lg:pt-28 overflow-hidden">
      {/* 1. Main Architectural Visual Canvas with Balanced Editorial Composition */}
      <section className="relative min-h-[62vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Architectural Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=85"
            alt="Antalya Akdeniz Mimari Yaşam"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Directional daylight overlay for high typography contrast without heavy dark masks */}
          <div className="absolute inset-0 bg-gradient-to-r from-paper/95 via-paper/90 to-paper/60 lg:to-paper/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-paper/30" />
        </div>

        {/* Content Container - Two Column Editorial Composition */}
        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Column (Desktop 7 cols): Editorial Narrative & CTAs */}
            <div className="lg:col-span-7 text-left min-w-0">
              {/* 1. Upper Tag / Eyebrow */}
              <div className="flex items-center gap-2 mb-2.5 sm:mb-3.5">
                <span className="w-5 sm:w-6 h-px bg-bronze" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-bronze">
                  Ayşe Nane • Antalya Lüks Gayrimenkul
                </span>
              </div>

              {/* 2. Strong H1 Headline */}
              <h1 className="text-xl sm:text-3xl lg:text-5xl font-serif font-bold text-ink leading-snug tracking-tight mb-2.5 sm:mb-4 break-normal">
                Antalya’da Rafine Yaşam <br className="sm:hidden" />ve Stratejik Mülk Yatırımı
              </h1>

              {/* 3. Concise Description */}
              <p className="text-xs sm:text-base lg:text-lg text-brand-muted font-normal leading-relaxed mb-5 sm:mb-6 max-w-xl break-normal">
                Döşemealtı’nın müstakil villalarından Lara falez hattı ve Kaş sahillerine; 12 yıllık lisanslı danışmanlık güvencesiyle kişiye özel gayrimenkul yönetimi.
              </p>

              {/* 4. Dedicated Mobile Editorial Portrait Card (Visible strictly on mobile/tablet <lg) */}
              <div className="lg:hidden mb-5 sm:mb-6 animate-hero-portrait">
                <div className="bg-ivory/95 border border-limestone/80 p-2.5 sm:p-3 rounded-2xl shadow-[0_4px_16px_rgba(16,28,44,0.06)] flex items-center gap-3.5 max-w-sm">
                  {/* 4:5 Editorial Portrait Thumbnail */}
                  <div className="relative w-[110px] sm:w-[130px] aspect-[4/5] rounded-xl overflow-hidden border border-bronze/25 bg-limestone/20 shrink-0 shadow-sm">
                    <Image
                      src="/ayse-nane.jpg"
                      alt="Ayşe Nane - Gayrimenkul & Yatırım Danışmanı"
                      fill
                      priority
                      sizes="(max-width: 640px) 110px, 130px"
                      className="object-cover object-[50%_0%]"
                    />
                  </div>

                  {/* Clean Identity Details - Strictly the 3 specified items */}
                  <div className="flex flex-col justify-center text-left min-w-0 pr-1">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-ink tracking-tight truncate">
                      Ayşe Nane
                    </h3>
                    <p className="text-xs text-brand-muted font-medium mt-0.5 leading-snug">
                      Gayrimenkul & Yatırım Danışmanı
                    </p>
                    <div className="mt-2.5">
                      <span className="inline-flex items-center text-[10px] font-semibold text-bronze bg-white px-2 py-0.5 rounded border border-limestone/80">
                        MYK Seviye 5
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 max-w-md">
                <a href="#portfoy" className="btn-primary text-center">
                  <span>Seçkin Portföyü Keşfet</span>
                  <ArrowRight className="w-4 h-4 ml-1 inline" />
                </a>

                <a href="#degerleme" className="btn-secondary text-center">
                  <span>Ücretsiz Mülk Değerleme</span>
                </a>
              </div>
            </div>

            {/* Right Column (Desktop 5 cols): Grand Editorial Portrait (Visible on lg+) */}
            <div className="hidden lg:flex justify-end lg:col-span-5 lg:pr-2 xl:pr-4">
              <div className="w-full max-w-[330px] xl:max-w-[360px] animate-hero-portrait">
                {/* Passepartout Frame */}
                <div className="bg-ivory/95 backdrop-blur-sm border border-limestone p-3 sm:p-3.5 rounded-2xl shadow-[0_12px_36px_rgba(16,28,44,0.07)] transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_16px_44px_rgba(16,28,44,0.10)] motion-reduce:transform-none motion-reduce:transition-none">
                  {/* 4:5 Architectural Gallery Window */}
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-bronze/25 bg-limestone/20 shadow-inner">
                    <Image
                      src="/ayse-nane.jpg"
                      alt="Ayşe Nane - Antalya Lüks Gayrimenkul & Yatırım Danışmanı"
                      fill
                      priority
                      sizes="360px"
                      className="object-cover object-[50%_0%]"
                    />
                  </div>

                  {/* Understated Identity Strip */}
                  <div className="pt-3 pb-0.5 px-1 text-left">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif text-lg font-bold text-ink tracking-tight">
                        Ayşe Nane
                      </h3>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-bronze px-2 py-0.5 rounded bg-white border border-limestone/70">
                        MYK Seviye 5
                      </span>
                    </div>
                    <p className="text-xs text-brand-muted font-medium mt-0.5">
                      Lüks Konut & Yatırım Danışmanı
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Streamlined Property Finder Toolbar */}
      <div className="relative z-20 max-w-content mx-auto px-4 sm:px-6 lg:px-8 -mt-5 sm:-mt-7 mb-10 sm:mb-12">
        <div className="bg-white border border-limestone rounded-xl p-3 sm:p-4 shadow-[0_8px_30px_rgba(16,28,44,0.06)]">
          <form onSubmit={handleFilterSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            {/* Property Type Dropdown */}
            <div className="sm:col-span-5 bg-paper rounded-lg border border-limestone/60 px-3 py-2 min-w-0 overflow-hidden">
              <label className="block text-[10px] font-bold text-brand-muted uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-bronze shrink-0" />
                <span>Mülk Kategorisi</span>
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-transparent text-ink text-xs font-semibold focus:outline-none cursor-pointer truncate"
              >
                <option value="all">Tüm Portföy</option>
                <option value="villa">Müstakil Villalar & Malikâneler</option>
                <option value="apartment">Deniz Manzaralı Rezidans & Penthouse</option>
                <option value="land">Yatırımlık Arsa & Proje Parselleri</option>
                <option value="commercial">Ticari Varlıklar</option>
              </select>
            </div>

            {/* Region Dropdown */}
            <div className="sm:col-span-4 bg-paper rounded-lg border border-limestone/60 px-3 py-2 min-w-0 overflow-hidden">
              <label className="block text-[10px] font-bold text-brand-muted uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-bronze shrink-0" />
                <span>Bölge Seçimi</span>
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-transparent text-ink text-xs font-semibold focus:outline-none cursor-pointer truncate"
              >
                <option value="all">Tüm Antalya Bölgeleri</option>
                <option value="Döşemealtı">Döşemealtı (Villalar)</option>
                <option value="Lara">Lara & Şirinyalı Falez Hattı</option>
                <option value="Konyaaltı">Konyaaltı & Sahil Bandı</option>
                <option value="Kaş">Kaş & Kalkan Sahil Şeridi</option>
                <option value="Belek">Belek Golf & Yaşam</option>
                <option value="Alanya">Alanya</option>
              </select>
            </div>

            {/* Filter Action */}
            <div className="sm:col-span-3 min-w-0">
              <button
                type="submit"
                className="w-full btn-primary h-[48px]"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
            <div className="border-l-2 border-bronze pl-3 min-w-0">
              <p className="font-serif text-lg sm:text-xl font-bold text-ink truncate">12+ Yıllık</p>
              <p className="text-xs text-brand-muted font-medium">Antalya Bölge Deneyimi</p>
            </div>

            <div className="border-l-2 border-bronze pl-3 min-w-0">
              <p className="font-serif text-lg sm:text-xl font-bold text-ink truncate">MYK Seviye 5</p>
              <p className="text-xs text-brand-muted font-medium">Lisanslı Sorumlu Emlak Danışmanı</p>
            </div>

            <div className="border-l-2 border-bronze pl-3 min-w-0">
              <p className="font-serif text-lg sm:text-xl font-bold text-ink truncate">Döşemealtı & Lara</p>
              <p className="text-xs text-brand-muted font-medium">Mikro-Piyasa Uzmanlığı</p>
            </div>

            <div className="border-l-2 border-bronze pl-3 min-w-0">
              <p className="font-serif text-lg sm:text-xl font-bold text-ink truncate">Uçtan Uca Destek</p>
              <p className="text-xs text-brand-muted font-medium">Hukuki, Tapu & Ekspertiz</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
