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
  ChevronLeft,
  ChevronRight,
  Share2,
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
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);
    // Real inquiry transition (redirects or opens WhatsApp with detailed lead prefill)
    const inquiryText = `Merhaba Ayşe Hanım, web sitenizdeki "${property.title}" (${formattedTRY}) portföyü için randevu/detay talep ediyorum. İsmim: ${inquiryName}, Telefonum: ${inquiryPhone}.`;
    const targetUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(inquiryText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(targetUrl, '_blank');
    }, 600);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const whatsappMessage = `Merhaba Ayşe Hanım, "${property.title}" (${property.location} - ${formattedTRY}) ilanı hakkında detaylı bilgi ve yerinde sunum talep ediyorum.`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-ink/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
    >
      <div className="relative bg-white w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-limestone my-6 flex flex-col max-h-[92vh]">
        {/* Modal Top Strip */}
        <div className="bg-ivory/60 px-6 py-4 flex items-center justify-between border-b border-limestone/50">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-white text-xs font-semibold text-ink border border-limestone/60">
              {property.typeName}
            </span>
            <span className="text-xs text-brand-muted hidden sm:inline">
              Portföy Kodu: #{property.id.slice(0, 8).toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-brand-muted hover:text-ink hover:bg-white rounded-lg transition-colors text-xs flex items-center gap-1.5"
              title="Bağlantıyı Kopyala"
            >
              <Share2 className="w-4 h-4 text-bronze" />
              <span className="hidden sm:inline font-medium">
                {copiedLink ? 'Kopyalandı' : 'Paylaş'}
              </span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-brand-muted hover:text-ink hover:bg-white rounded-lg transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1 bg-white">
          {/* Title & Price Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-limestone/40 pb-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-brand-muted mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-bronze" />
                <span>{property.location}</span>
                {property.suitableForCitizenship && (
                  <span className="ml-2 text-olive font-semibold">• Vatandaşlığa Uygun</span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink leading-snug">
                {property.title}
              </h2>
              <p className="text-brand-muted text-xs sm:text-sm mt-1">{property.subtitle}</p>
            </div>

            <div className="text-left md:text-right shrink-0 bg-ivory/50 md:bg-transparent p-4 md:p-0 rounded-xl border border-limestone/40 md:border-0">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-ink block">
                {formattedTRY}
              </span>
              <span className="text-xs font-medium text-brand-muted block mt-0.5">
                ~ {formattedEUR}
              </span>
            </div>
          </div>

          {/* Image Gallery Showcase */}
          <div className="space-y-3">
            <div className="relative h-64 sm:h-96 md:h-[400px] rounded-xl overflow-hidden bg-ivory border border-limestone/60">
              <Image
                src={property.images[currentImageIndex] || property.images[0]}
                alt={property.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 850px"
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
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-ink shadow transition-colors"
                    aria-label="Önceki Görsel"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === property.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-ink shadow transition-colors"
                    aria-label="Sonraki Görsel"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-ink/75 text-paper text-[11px] font-medium backdrop-blur-sm">
                {currentImageIndex + 1} / {property.images.length}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {property.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      currentImageIndex === idx
                        ? 'border-bronze opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Specs Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-ivory/60 rounded-xl border border-limestone/50 text-center text-xs">
            {property.bedrooms !== 'Arsa' && property.bedrooms !== 'Ticari' && (
              <div>
                <span className="text-[10px] text-brand-muted block uppercase font-bold">Oda Sayısı</span>
                <span className="text-base font-serif font-bold text-ink mt-0.5 block">{property.bedrooms}</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div>
                <span className="text-[10px] text-brand-muted block uppercase font-bold">Banyo</span>
                <span className="text-base font-serif font-bold text-ink mt-0.5 block">{property.bathrooms}</span>
              </div>
            )}
            <div>
              <span className="text-[10px] text-brand-muted block uppercase font-bold">Net Alan</span>
              <span className="text-base font-serif font-bold text-ink mt-0.5 block">{property.area} m²</span>
            </div>
            {property.lotArea ? (
              <div>
                <span className="text-[10px] text-brand-muted block uppercase font-bold">Arsa Payı</span>
                <span className="text-base font-serif font-bold text-ink mt-0.5 block">{property.lotArea} m²</span>
              </div>
            ) : (
              <div>
                <span className="text-[10px] text-brand-muted block uppercase font-bold">Yapı Durumu</span>
                <span className="text-base font-serif font-bold text-ink mt-0.5 block">{property.buildingAge}</span>
              </div>
            )}
          </div>

          {/* Details & Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Description & Features (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-base font-serif font-bold text-ink mb-2">
                  Mülk Detayları & Mimari Karakter
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
                  {property.description}
                </p>
              </div>

              {/* Highlights */}
              {property.highlights && property.highlights.length > 0 && (
                <div className="p-4 rounded-xl bg-ivory/50 border border-limestone/50">
                  <h4 className="text-[11px] font-bold text-brand-text uppercase tracking-wider mb-2.5">
                    Lokasyon ve Yatırım Avantajları
                  </h4>
                  <ul className="space-y-1.5 text-xs text-brand-muted">
                    {property.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-bronze mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features List */}
              <div>
                <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-3">
                  Donanım Özellikleri
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-text">
                  {property.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-paper border border-limestone/40"
                    >
                      <Check className="w-3 h-3 text-bronze shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Contact Card (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-xl bg-ivory/70 border border-limestone/60">
                <div className="flex items-center gap-3.5 pb-4 border-b border-limestone/50 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-limestone shrink-0">
                    <Image
                      src="/ayse-nane.jpg"
                      alt={siteConfig.agentName}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-ink">{siteConfig.agentName}</h4>
                    <p className="text-[11px] text-brand-muted">MYK Seviye 5 Lisanslı Danışman</p>
                  </div>
                </div>

                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  Bu portföy hakkında yerinde sunum ve detaylı ekspertiz raporu almak için doğrudan iletişime geçebilirsiniz.
                </p>

                <form onSubmit={handleInquirySubmit} className="space-y-3 mb-4">
                  <input
                    type="text"
                    required
                    placeholder="Adınız ve Soyadınız"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full bg-white border border-limestone/80 rounded-lg p-2.5 text-xs text-ink placeholder-brand-muted focus:outline-none focus:border-bronze"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Telefon Numaranız"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    className="w-full bg-white border border-limestone/80 rounded-lg p-2.5 text-xs text-ink placeholder-brand-muted focus:outline-none focus:border-bronze"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-xs py-3"
                  >
                    {isSubmitting ? 'Yönlendiriliyor...' : 'Randevu & Bilgi Talep Et'}
                  </button>

                  {isSubmitted && (
                    <p className="text-[11px] text-emerald-700 font-medium text-center pt-1">
                      Talebiniz hazırlandı, WhatsApp üzerinden doğrudan bağlanıyorsunuz.
                    </p>
                  )}
                </form>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-limestone/40">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="btn-secondary text-xs py-2 text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-bronze" />
                    <span>Ara</span>
                  </a>

                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-2 text-center hover:border-emerald-600 hover:text-emerald-700"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
