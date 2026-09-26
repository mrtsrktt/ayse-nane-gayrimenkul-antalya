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
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-36 pb-14 sm:pb-20 overflow-hidden bg-[#FAF9F5]">
      {/* Background Architectural Canvas - High Visibility Vivid Mediterranean Villa */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=90"
          alt="Antalya Lüks Gayrimenkul & Müstakil Villalar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100 opacity-90"
        />
        {/* Soft directional feather gradient: ensures high text readability on left while keeping villa, pool & sky vividly visible */}
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#FAF9F5]/95 via-[#FAF9F5]/80 to-[#FAF9F5]/40 sm:to-transparent" />
        {/* Subtle top & bottom blending */}
        <div className="absolute inset-x-0 top-0 h-24 sm:h-28 bg-gradient-to-b from-[#FAF9F5]/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#FAF9F5] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Mobile Executive Spotlight Card: Immediately visible on mobile entry above the fold */}
        <div className="lg:hidden w-full bg-white/95 backdrop-blur-xl border border-[#DFC596] rounded-3xl p-4 shadow-[0_12px_36px_rgba(15,30,54,0.1)] mb-6 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#DFC596]/30 via-transparent to-transparent pointer-events-none" />

          <div className="flex items-center gap-3.5 relative z-10">
            {/* Ayşe Nane High-Res Portrait Frame */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#B89047] shadow-md shrink-0">
              <Image
                src="/ayse-nane.jpg"
                alt="Ayşe Nane Lüks Gayrimenkul Danışmanı"
                fill
                priority
                className="object-cover object-top"
              />
              {/* Active Status Pulse */}
              <span className="absolute bottom-1 right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
              </span>
            </div>

            {/* Executive Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h2 className="font-serif font-bold text-lg sm:text-xl text-[#0F1E36] tracking-tight">
                  {siteConfig.agentName}
                </h2>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-[#F4F1EA] text-[#7E6128] border border-[#DFC596] px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-[#B89047]" /> MYK-5
                </span>
              </div>

              <p className="text-xs text-[#7E6128] font-bold mt-0.5 truncate">
                Lüks Konut & Yatırım Danışmanı • Antalya
              </p>

              <p className="text-[11px] text-emerald-700 font-medium mt-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Çevrim İçi • Hızlı Yanıt</span>
              </p>
            </div>
          </div>

          {/* Quick Mobile Action Buttons */}
          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-[#EAE6DF] relative z-10">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-[#F8F6F1] hover:bg-[#F0ECE1] text-[#0F1E36] font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 border border-[#EAE6DF] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B89047]" />
              <span>Hemen Ara</span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                'Merhaba Ayşe Hanım, Antalya gayrimenkul portföyünüz hakkında görüşmek istiyorum.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient-button text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Headlines & Search (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-7">
            {/* Top Architectural Coordinate Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#DFC596] text-[#7E6128] text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase shadow-sm max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89047] animate-pulse shrink-0" />
              <span className="truncate sm:hidden">36°53&apos;N 30°42&apos;E • ANTALYA PRIVÉ</span>
              <span className="hidden sm:inline">36°53&apos;N 30°42&apos;E • ANTALYA PRIVÉ • DÖŞEMEALTI • LARA • KAŞ</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[62px] font-serif font-bold text-[#0F1E36] tracking-tight leading-[1.15] drop-shadow-sm">
              Akdeniz’in En Nadide <br className="hidden sm:inline" />
              <span className="gold-gradient-text italic font-serif font-normal">Mülkleri & Prestijli</span> <br />
              Yatırım Danışmanlığı
            </h1>

            {/* Editorial Subtitle */}
            <p className="text-sm sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Antalya’nın en seçkin müstakil villaları, falez rezidansları ve yüksek getirili arsa portföyleriyle;
              <strong className="text-[#0F1E36] font-bold"> {siteConfig.agentName}</strong> güvencesinde, uluslararası standartlarda ayrıcalıklı bir mülk edinme deneyimi.
            </p>

            {/* High-End Search & Filter Bar */}
            <div className="bg-white/95 rounded-2xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(15,30,54,0.12)] border border-[#EAE6DF] backdrop-blur-xl">
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
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs pt-1">
              <span className="text-slate-600 font-semibold text-[11px] sm:text-xs">Öne Çıkanlar:</span>
              <a href="#portfoy" className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 border border-[#EAE6DF] text-[#475569] hover:text-[#0F1E36] hover:border-[#B89047] transition-colors text-[11px] sm:text-xs font-semibold shadow-sm backdrop-blur-sm">
                Döşemealtı Villa
              </a>
              <a href="#portfoy" className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 border border-[#EAE6DF] text-[#475569] hover:text-[#0F1E36] hover:border-[#B89047] transition-colors text-[11px] sm:text-xs font-semibold shadow-sm backdrop-blur-sm">
                Lara Falez Rezidans
              </a>
              <a href="#portfoy" className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 border border-[#EAE6DF] text-[#475569] hover:text-[#0F1E36] hover:border-[#B89047] transition-colors text-[11px] sm:text-xs font-semibold shadow-sm backdrop-blur-sm">
                Vatandaşlığa Uygun
              </a>
            </div>
          </div>

          {/* Right Column: Ayşe Nane Mediterranean Executive Portrait Card (Desktop only, 5 cols) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <div className="relative w-full max-w-md bg-white p-5 rounded-3xl border border-[#DFC596] shadow-[0_25px_60px_rgba(15,30,54,0.15)] backdrop-blur-xl">
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
                      <p className="text-xs text-[#7E6128] font-bold tracking-wide">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#EAE6DF]/60 text-left">
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="luxury-card p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EAE6DF] hover:border-[#DFC596] transition-all shadow-sm">
              <p className="text-xl sm:text-3xl font-serif font-bold text-[#7E6128] mb-0.5 sm:mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm font-bold text-[#0F1E36] tracking-wide">{stat.label}</p>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 line-clamp-1">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
