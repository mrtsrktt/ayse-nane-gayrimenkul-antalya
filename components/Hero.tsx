'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Search,
  MapPin,
  Home,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  PhoneCall,
  MessageCircle,
  Instagram,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
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
    <section className="relative min-h-[96vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#070A12]">
      {/* Background Architectural Canvas with Subtle Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          alt="Antalya Lüks Gayrimenkul"
          fill
          priority
          className="object-cover object-center scale-105 opacity-35"
        />
        {/* Multi-layered cinematic vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-[#070A12]/80 to-[#070A12]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A12] via-[#070A12]/85 to-transparent" />
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Filter (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            {/* Top Architectural Coordinate Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-[#C5A059]/30 text-[#DEC07E] text-[11px] font-semibold tracking-[0.25em] uppercase shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DEC07E] animate-pulse" />
              <span>36°53&apos;N 30°42&apos;E • ANTALYA PRIVÉ • DÖŞEMEALTI • LARA • KAŞ</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-serif font-bold text-white tracking-tight leading-[1.08]">
              Akdeniz’in En Nadide <br className="hidden sm:inline" />
              <span className="gold-gradient-text italic font-serif font-normal">Mülkleri & Prestijli</span> <br />
              Yatırım Danışmanlığı
            </h1>

            {/* Editorial Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Antalya’nın en seçkin müstakil villaları, falez rezidansları ve yüksek getirili arsa portföyleriyle;
              <strong className="text-white font-medium"> {siteConfig.agentName}</strong> güvencesinde, uluslararası standartlarda rafine bir mülk edinme deneyimi.
            </p>

            {/* High-End Search & Filter Bar */}
            <div className="luxury-glass p-3 sm:p-4 rounded-2xl shadow-2xl border border-[#C5A059]/30 backdrop-blur-xl">
              <form onSubmit={handleFilterSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                {/* Property Type */}
                <div className="sm:col-span-5 text-left bg-[#070A12]/90 border border-white/10 rounded-xl px-4 py-3 focus-within:border-[#DEC07E]/60 transition-colors">
                  <label className="block text-[10px] font-bold text-[#DEC07E] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5" /> Mülk Tipi
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-transparent text-white font-medium text-sm focus:outline-none cursor-pointer"
                  >
                    <option value="all" className="bg-[#0C1222] text-white">Tüm Mülk Tipleri</option>
                    <option value="villa" className="bg-[#0C1222] text-white">Lüks Villalar & Malikâneler</option>
                    <option value="apartment" className="bg-[#0C1222] text-white">Deniz Manzaralı Rezidans & Penthouse</option>
                    <option value="land" className="bg-[#0C1222] text-white">Yatırımlık Arsa & Proje Alanları</option>
                    <option value="commercial" className="bg-[#0C1222] text-white">Turistik & Ticari Varlıklar</option>
                  </select>
                </div>

                {/* Location */}
                <div className="sm:col-span-4 text-left bg-[#070A12]/90 border border-white/10 rounded-xl px-4 py-3 focus-within:border-[#DEC07E]/60 transition-colors">
                  <label className="block text-[10px] font-bold text-[#DEC07E] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> Konum / Bölge
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-transparent text-white font-medium text-sm focus:outline-none cursor-pointer"
                  >
                    <option value="all" className="bg-[#0C1222] text-white">Tüm Antalya Bölgeleri</option>
                    <option value="Döşemealtı" className="bg-[#0C1222] text-white">Döşemealtı (Lüks Villalar)</option>
                    <option value="Lara" className="bg-[#0C1222] text-white">Lara & Şirinyalı Falezler</option>
                    <option value="Konyaaltı" className="bg-[#0C1222] text-white">Konyaaltı & Marina</option>
                    <option value="Kaş" className="bg-[#0C1222] text-white">Kaş & Kalkan Sahil Şeridi</option>
                    <option value="Belek" className="bg-[#0C1222] text-white">Belek Golf & Wellness</option>
                    <option value="Alanya" className="bg-[#0C1222] text-white">Alanya & Kargıcak</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-3">
                  <button
                    type="submit"
                    className="w-full gold-gradient-button text-[#070A12] font-bold text-xs uppercase tracking-wider py-4 px-5 rounded-xl flex items-center justify-center gap-2 shadow-xl hover:opacity-95"
                  >
                    <Search className="w-4 h-4" />
                    <span>Portföyü Gör</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Editorial Quick Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs pt-1">
              <span className="text-slate-400 font-light">Popüler Aramalar:</span>
              <a href="#portfoy" className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-[#DEC07E]/40 transition-colors">
                Döşemealtı Müstakil Villa
              </a>
              <a href="#portfoy" className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-[#DEC07E]/40 transition-colors">
                Lara Falez Rezidans
              </a>
              <a href="#portfoy" className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-[#DEC07E]/40 transition-colors">
                Vatandaşlığa Uygun
              </a>
            </div>
          </div>

          {/* Right Column: Ayşe Nane Editorial Executive Portrait Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-[#0C1222]/90 p-5 rounded-3xl border border-[#C5A059]/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
              {/* Gold Top Credentials Strip */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#DEC07E] text-[11px] font-bold border border-[#C5A059]/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#DEC07E]" />
                  MYK Seviye 5 Lisanslı Danışman
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Müsait & Çevrim İçi
                </span>
              </div>

              {/* High-Resolution Portrait Container */}
              <div className="relative h-88 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-2xl group">
                <Image
                  src="/ayse-nane.jpg"
                  alt="Ayşe Nane Gayrimenkul Danışmanı"
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-transparent to-transparent opacity-90" />

                {/* Floating Bottom Card on Photo */}
                <div className="absolute bottom-3 left-3 right-3 p-4 rounded-xl bg-[#070A12]/90 backdrop-blur-md border border-[#C5A059]/30 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-xl text-white flex items-center gap-1.5">
                        <span>{siteConfig.agentName}</span>
                        <CheckCircle2 className="w-4 h-4 text-[#DEC07E] fill-[#DEC07E]/20" />
                      </h3>
                      <p className="text-xs text-[#DEC07E] font-medium tracking-wide">
                        Lüks Konut & Yatırım Danışmanı • Antalya
                      </p>
                    </div>
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-pink-600/20 border border-pink-500/40 text-pink-300 hover:text-white hover:bg-pink-600 transition-colors"
                      title="Instagram Profili"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Actions in Hero Card */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-xs py-3 px-3 rounded-xl flex items-center justify-center gap-2 transition-colors border border-white/10"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#DEC07E]" />
                  <span className="truncate">{siteConfig.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    'Merhaba Ayşe Hanım, Antalya gayrimenkul portföyünüz hakkında görüşmek istiyorum.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient-button text-[#070A12] font-bold text-xs py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-lg"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Yazın</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Live Market Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-10 border-t border-white/[0.08] text-left">
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="luxury-card p-5 rounded-2xl border border-white/[0.08] hover:border-[#C5A059]/40 transition-all">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#DEC07E] mb-1">{stat.value}</p>
              <p className="text-sm font-semibold text-white tracking-wide">{stat.label}</p>
              <p className="text-xs text-slate-400 mt-1 line-clamp-1">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
