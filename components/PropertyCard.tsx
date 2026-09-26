'use client';

import React from 'react';
import Image from 'next/image';
import { Bed, Bath, Maximize2, MapPin, Sparkles, MessageCircle, ExternalLink, CheckCircle } from 'lucide-react';
import { Property } from '@/data/properties';
import { siteConfig } from '@/data/siteConfig';

interface PropertyCardProps {
  property: Property;
  onOpenModal: (property: Property) => void;
}

export default function PropertyCard({ property, onOpenModal }: PropertyCardProps) {
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

  const whatsappMessage = `Merhaba Ayşe Hanım, web sitenizdeki "${property.title}" (${formattedTRY}) ilanınız hakkında detaylı bilgi ve randevu almak istiyorum.`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-900 cursor-pointer" onClick={() => onOpenModal(property)}>
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-navy-900/90 text-gold-300 border border-gold-500/30 backdrop-blur-md shadow-md">
            {property.typeName}
          </span>
          {property.badge && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-gold-500 text-navy-950 shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {property.badge}
            </span>
          )}
        </div>

        {/* Bottom Price in Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between z-10 text-white">
          <div>
            <span className="text-xl font-bold font-serif tracking-tight drop-shadow-md text-gold-300">
              {formattedTRY}
            </span>
            <span className="block text-xs text-slate-300 font-medium">
              ~ {formattedEUR}
            </span>
          </div>
          {property.suitableForCitizenship && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-600/90 text-white px-2 py-0.5 rounded backdrop-blur-sm">
              <CheckCircle className="w-3 h-3" /> Vatandaşlık
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gold-700 uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-gold-600" />
            <span>{property.location}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onOpenModal(property)}
            className="text-lg font-serif font-bold text-slate-900 group-hover:text-gold-700 transition-colors line-clamp-1 cursor-pointer mb-1"
          >
            {property.title}
          </h3>

          {/* Subtitle */}
          <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
            {property.subtitle}
          </p>

          {/* Specs Grid */}
          <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-slate-50 rounded-xl border border-slate-100 mb-4 text-center">
            {property.bedrooms !== 'Arsa' && property.bedrooms !== 'Ticari' && (
              <div className="flex flex-col items-center justify-center">
                <span className="flex items-center gap-1 text-slate-700 text-xs font-semibold">
                  <Bed className="w-3.5 h-3.5 text-gold-600" /> {property.bedrooms}
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Oda Sayısı</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex flex-col items-center justify-center">
                <span className="flex items-center gap-1 text-slate-700 text-xs font-semibold">
                  <Bath className="w-3.5 h-3.5 text-gold-600" /> {property.bathrooms}
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Banyo</span>
              </div>
            )}
            <div className="flex flex-col items-center justify-center col-span-1">
              <span className="flex items-center gap-1 text-slate-700 text-xs font-semibold">
                <Maximize2 className="w-3.5 h-3.5 text-gold-600" /> {property.area} m²
              </span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">Net Alan</span>
            </div>
            {(property.bedrooms === 'Arsa' || property.bedrooms === 'Ticari') && (
              <div className="col-span-2 flex items-center justify-center text-xs font-medium text-slate-600">
                Müstakil Parsel / İmar Durumu Hazır
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
          <button
            onClick={() => onOpenModal(property)}
            className="flex-1 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Detayları İncele</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </button>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 py-2.5 px-3.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm hover:shadow"
            title="WhatsApp ile Sor"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
