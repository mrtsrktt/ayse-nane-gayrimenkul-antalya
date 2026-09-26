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
    <section className="relative min-h-[94vh] flex items-center justify-center pt-36 pb-20 overflow-hidden bg-[#FAF9F5]">
      {/* Background Architectural Canvas with Bright Sunlit Mediterranean Warmth */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          alt="Antalya Lüks Gayrimenkul"
          fill
          priority
          className="object-cover object-center scale-105 opacity-25"
        />
        {/* Luminous warm cream and alabaster gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/85 to-transparent" />
        <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-[#DFC596]/20 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headlines & Search (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            {/* Top Architectural Coordinate Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#DFC596] text-[#7E6128] text-[11px] font-bold tracking-[0.2em] uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89047] animate-pulse" />
              <span>36°53&apos;N 30°42&apos;E • ANTALYA PRIVÉ • DÖŞEMEALTI • LARA • KAŞ</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[62px] font-serif font-bold text-[#0F1E36] tracking-tight leading-[1.1]">
              Akdeniz’in En Nadide <br className="hidden sm:inline" />
              <span className="gold-gradient-text italic font-serif font-normal">Mülkleri & Prestijli</span> <br />
              Yatırım Danışmanlığı
            </h1>

            {/* Editorial Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Antalya’nın en seçkin müstakil villaları, falez rezidansları ve yüksek getirili arsa portföyleriyle;
              <strong className="text-[#0F1E36] font-semibold"> {siteConfig.agentName}</strong> güvencesinde, uluslararası standartlarda ayrıcalıklı bir mülk edinme deneyimi.
            </p>

            {/* High-End Search & Filter Bar */}
            <div className="bg-white/95 rounded-2xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(15,30,54,0.08)] border border-[#EAE6DF] backdrop-blur-xl">
              <form onSubmit={handleFilterSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                {/* Property Type */}
                <div className="sm:col-span-5 text-left bg-[#F9F8F5] border border-[#EAE6DF] rounded-xl px-4 py-3 focus-within:border-[#B89047] transition-colors">
                  <label className="block text-[10px] font-bold text-[#7E6128] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5 text-[#B89047]" /> Mülk Tipi
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-transparent text-[#0F1E36] font-semibold text-sm focus:outline-none cursor-pointer"
                  >
                    <option value="all">Tüm Mülk Tipleri</option>
                    <option value="villa">Lüks Villalar & Malikâneler</option>
                    <option value="apartment">Deniz Manzaralı Rezidans & Penthouse</option>
                    <option value="land">Yatırımlık Arsa & Proje Alanları</option>
                    <option value="commercial">Turistik & Ticari Varlıklar</option>
                  </select>
                </div>

                {/* Location */}
                <div className="sm:col-span-4 text-left bg-[#F9F8F5] border border-[#EAE6DF] rounded-xl px-4 py-3 focus-within:border-[#B89047] transition-colors">
                  <label className="block text-[10px] font-bold text-[#7E6128] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B89047]" /> Konum / Bölge
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-transparent text-[#0F1E36] font-semibold text-sm focus:outline-none cursor-pointer"
                  >
                    <option value="all">Tüm Antalya Bölgeleri</option>
                    <option value="Döşemealtı">Döşemealtı (Lüks Villalar)</option>
                    <option value="Lara">Lara & Şirinyalı Falezler</option>
                    <option value="Konyaaltı">Konyaaltı & Marina</option>
                    <option value="Kaş">Kaş & Kalkan Sahil Şeridi</option>
                    <option value="Belek">Belek Golf & Wellness</option>
                    <option value="Alanya">Alanya & Kargıcak</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-3">
                  <button
                    type="submit"
                    className="w-full gold-gradient-button text-xs font-bold uppercase tracking-wider py-4 px-5 rounded-xl flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Search className="w-4 h-4" />
                    <span>Portföyü Gör</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Quick Filter Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs pt-1">
              <span className="text-slate-500 font-medium">Öne Çıkanlar:</span>
              <a href="#portfoy" className="px-3.5 py-1.5 rounded-full bg-white border border-[#EAE6DF] text-[#475569] hover:text-[#0F1E36] hover:border-[#B89047] transition-colors font-medium shadow-sm">
                Döşemealtı Müstakil Villa
              </a>
              <a href="#portfoy" className="px-3.5 py-1.5 rounded-full bg-white border border-[#EAE6DF] text-[#475569] hover:text-[#0F1E36] hover:border-[#B89047] transition-colors font-medium shadow-sm">
                Lara Falez Rezidans
              </a>
              <a href="#portfoy" className="px-3.5 py-1.5 rounded-full bg-white border border-[#EAE6DF] text-[#475569] hover:text-[#0F1E36] hover:border-[#B89047] transition-colors font-medium shadow-sm">
                Vatandaşlığa Uygun
              </a>
            </div>
          </div>

          {/* Right Column: Ayşe Nane Mediterranean Executive Portrait Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white p-5 rounded-3xl border border-[#DFC596] shadow-[0_25px_60px_rgba(15,30,54,0.1)]">
              {/* Credentials Top Strip */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F1EA] text-[#7E6128] text-[11px] font-bold border border-[#DFC596]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B89047]" />
                  MYK Seviye 5 Lisanslı Danışman
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Müsait & Çevrim İçi
                </span>
              </div>

              {/* Portrait Container */}
              <div className="relative h-88 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#EAE6DF] shadow-md group">
                <Image
                  src="/ayse-nane.jpg"
                  alt="Ayşe Nane Gayrimenkul Danışmanı"
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/90 via-transparent to-transparent opacity-85" />

                {/* Floating Bottom Card on Photo */}
                <div className="absolute bottom-3 left-3 right-3 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#EAE6DF] text-[#0F1E36] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-xl text-[#0F1E36] flex items-center gap-1.5">
                        <span>{siteConfig.agentName}</span>
                        <CheckCircle2 className="w-4 h-4 text-[#B89047] fill-[#DFC596]" />
                      </h3>
                      <p className="text-xs text-[#7E6128] font-medium tracking-wide">
                        Lüks Konut & Yatırım Danışmanı • Antalya
                      </p>
                    </div>
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-pink-50 border border-pink-200 text-[#C13584] hover:bg-[#C13584] hover:text-white transition-colors"
                      title="Instagram Profili"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons in Hero Card */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="bg-[#F8F6F1] hover:bg-[#F0ECE1] text-[#0F1E36] font-bold text-xs py-3.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-colors border border-[#EAE6DF]"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#B89047]" />
                  <span className="truncate">{siteConfig.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    'Merhaba Ayşe Hanım, Antalya gayrimenkul portföyünüz hakkında görüşmek istiyorum.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient-button text-xs py-3.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Yazın</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Live Market Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-10 border-t border-[#EAE6DF] text-left">
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="luxury-card p-5 rounded-2xl bg-white border border-[#EAE6DF] hover:border-[#DFC596] transition-all">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#7E6128] mb-1">{stat.value}</p>
              <p className="text-sm font-bold text-[#0F1E36] tracking-wide">{stat.label}</p>
              <p className="text-xs text-slate-500 mt-1 line-clamp-1">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
