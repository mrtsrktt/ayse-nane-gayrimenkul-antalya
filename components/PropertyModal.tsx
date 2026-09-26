'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  X,
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Check,
  MessageCircle,
  Phone,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Share2
} from 'lucide-react';
import { Property } from '@/data/properties';
import { siteConfig } from '@/data/siteConfig';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (property) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  const formattedTRY = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(property.priceTRY);

  const formattedEUR = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(property.priceEUR);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const whatsappMessage = `Merhaba Ayşe Hanım, "${property.title}" (${property.location} - ${formattedTRY}) hakkında yerinde inceleme randevusu oluşturmak istiyorum.`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in text-white">
      <div className="relative bg-[#0B1120] w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-gold-500/40 my-8 flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="bg-[#070A12] px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500 text-navy-950">
              {property.typeName}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">İlan No: #{property.id.slice(0, 8).toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors text-xs flex items-center gap-1.5"
              title="Bağlantıyı Kopyala"
            >
              <Share2 className="w-4 h-4 text-gold-400" />
              <span className="hidden sm:inline">{copiedLink ? 'Kopyalandı!' : 'Paylaş'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Kapat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1 bg-[#0B1120]">
          {/* Main Title & Price */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 uppercase tracking-widest mb-1.5">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>{property.location}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                {property.title}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">{property.subtitle}</p>
            </div>

            <div className="text-left md:text-right shrink-0 bg-white/5 md:bg-transparent p-4 md:p-0 rounded-2xl border border-white/5 md:border-0">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-gold-300 block">
                {formattedTRY}
              </span>
              <span className="text-sm font-medium text-slate-400 block">
                Yaklaşık {formattedEUR}
              </span>
              {property.rentalYield && (
                <span className="inline-block mt-1 text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-0.5 rounded-full border border-emerald-500/30">
                  {property.rentalYield}
                </span>
              )}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="relative h-72 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
              <Image
                src={property.images[currentImageIndex] || property.images[0]}
                alt={property.title}
                fill
                priority
                className="object-cover object-center"
              />
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === 0 ? property.images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md transition-colors"
                    aria-label="Önceki Fotoğraf"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === property.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md transition-colors"
                    aria-label="Sonraki Fotoğraf"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/80 text-white text-xs font-medium backdrop-blur-md border border-white/10">
                {currentImageIndex + 1} / {property.images.length} Fotoğraf
              </div>
            </div>

            {/* Thumbnails */}
            {property.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      currentImageIndex === idx
                        ? 'border-gold-500 scale-105 shadow-md'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 text-center">
            {property.bedrooms !== 'Arsa' && property.bedrooms !== 'Ticari' && (
              <div>
                <span className="text-xs text-slate-400 block mb-1 uppercase font-semibold">Oda Sayısı</span>
                <span className="text-lg font-bold text-white flex items-center justify-center gap-1.5">
                  <Bed className="w-4 h-4 text-gold-400" /> {property.bedrooms}
                </span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div>
                <span className="text-xs text-slate-400 block mb-1 uppercase font-semibold">Banyo</span>
                <span className="text-lg font-bold text-white flex items-center justify-center gap-1.5">
                  <Bath className="w-4 h-4 text-gold-400" /> {property.bathrooms}
                </span>
              </div>
            )}
            <div>
              <span className="text-xs text-slate-400 block mb-1 uppercase font-semibold">Net Kullanım</span>
              <span className="text-lg font-bold text-white flex items-center justify-center gap-1.5">
                <Maximize2 className="w-4 h-4 text-gold-400" /> {property.area} m²
              </span>
            </div>
            {property.lotArea && (
              <div>
                <span className="text-xs text-slate-400 block mb-1 uppercase font-semibold">Arsa / Parsel</span>
                <span className="text-lg font-bold text-white">{property.lotArea} m²</span>
              </div>
            )}
          </div>

          {/* Two Columns: Details & Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-400" /> Mülk Açıklaması
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light">
                  {property.description}
                </p>
              </div>

              {/* Highlights */}
              {property.highlights && property.highlights.length > 0 && (
                <div className="bg-gold-500/10 p-5 rounded-2xl border border-gold-500/30">
                  <h4 className="text-xs font-bold text-gold-300 uppercase tracking-widest mb-3">
                    Lokasyon & Yatırım Avantajları
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                    {property.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features Grid */}
              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-4">
                  Öne Çıkan Mimari & Donanım Özellikleri
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {property.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm font-medium text-slate-200"
                    >
                      <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-gold-400" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Contact Card (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-[#070A12] text-white p-6 rounded-2xl border border-gold-500/30 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold-400 shrink-0">
                    <Image
                      src="/ayse-nane.jpg"
                      alt={siteConfig.agentName}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-white">{siteConfig.agentName}</h4>
                    <p className="text-xs text-gold-300 font-medium">Lüks Gayrimenkul Danışmanı</p>
                    <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 mt-1">
                      <ShieldCheck className="w-3 h-3 text-gold-400" /> MYK Seviye 5 Lisanslı
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-navy-950 font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-opacity hover:opacity-95 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 text-navy-950" />
                    <span>WhatsApp’tan Hemen Yazın</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="w-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors border border-white/10"
                  >
                    <Phone className="w-4 h-4 text-gold-400" />
                    <span>Arayın: {siteConfig.phoneDisplay}</span>
                  </a>
                </div>

                {/* Instant Inquiry Form */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <h5 className="text-xs font-bold text-gold-300 uppercase tracking-widest mb-3">
                    Yerinde İnceleme / Bilgi Talebi
                  </h5>
                  {isSubmitted ? (
                    <div className="p-3 bg-emerald-950/80 border border-emerald-500 rounded-xl text-center text-xs text-emerald-300">
                      Talebiniz Ayşe Hanım’a ulaştı. En kısa sürede sizinle iletişime geçilecektir.
                    </div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} className="space-y-3">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Adınız Soyadınız"
                          value={inquiryName}
                          onChange={(e) => setInquiryName(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-gold-400"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          required
                          placeholder="Telefon Numaranız"
                          value={inquiryPhone}
                          onChange={(e) => setInquiryPhone(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-gold-400"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full gold-gradient-button text-xs font-bold py-2.5 rounded-xl uppercase tracking-wider"
                      >
                        Randevu Talebi Gönder
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
