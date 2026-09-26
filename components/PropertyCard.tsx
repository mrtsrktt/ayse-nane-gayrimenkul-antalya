'use client';

import React from 'react';
import Image from 'next/image';
import { Bed, Bath, Maximize2, MapPin, Sparkles, MessageCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';
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
    <div className="group bg-white rounded-3xl overflow-hidden border border-[#EAE6DF] hover:border-[#B89047]/60 shadow-[0_10px_30px_rgba(15,30,54,0.06)] hover:shadow-[0_25px_50px_rgba(15,30,54,0.12)] transition-all duration-500 flex flex-col hover:-translate-y-1.5">
      {/* Image Container */}
      <div
        className="relative h-72 w-full overflow-hidden bg-slate-100 cursor-pointer"
        onClick={() => onOpenModal(property)}
      >
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-108 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/80 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
          <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase bg-white/95 text-[#7E6128] border border-[#DFC596] shadow-sm backdrop-blur-md">
            {property.typeName}
          </span>
          {property.badge && (
            <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide gold-gradient-button text-white shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {property.badge}
            </span>
          )}
        </div>

        {/* Bottom Location & Price Badge inside Photo */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-white/90 uppercase tracking-wider mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#DFC596]" />
              <span>{property.location}</span>
            </div>
            <div className="text-2xl font-bold font-serif tracking-tight text-white drop-shadow-md">
              {formattedTRY}
            </div>
          </div>
          <div className="text-right">
            <span className="block text-xs text-white/90 font-medium bg-black/40 px-2.5 py-0.5 rounded backdrop-blur-sm">
              ~ {formattedEUR}
            </span>
            {property.suitableForCitizenship && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-400/40 px-2 py-0.5 rounded mt-1 backdrop-blur-sm">
                <CheckCircle2 className="w-3 h-3" /> Vatandaşlık
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Title */}
          <h3
            onClick={() => onOpenModal(property)}
            className="text-lg sm:text-xl font-serif font-bold text-[#0F1E36] group-hover:text-[#B89047] transition-colors line-clamp-1 cursor-pointer mb-2"
          >
            {property.title}
          </h3>

          {/* Subtitle */}
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
            {property.subtitle}
          </p>

          {/* Specs Grid */}
          <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-[#FAF9F5] rounded-2xl border border-[#EAE6DF] text-center">
            {property.bedrooms !== 'Arsa' && property.bedrooms !== 'Ticari' && (
              <div className="flex flex-col items-center justify-center">
                <span className="flex items-center gap-1 text-[#0F1E36] text-xs font-bold">
                  <Bed className="w-3.5 h-3.5 text-[#B89047]" /> {property.bedrooms}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Oda</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex flex-col items-center justify-center">
                <span className="flex items-center gap-1 text-[#0F1E36] text-xs font-bold">
                  <Bath className="w-3.5 h-3.5 text-[#B89047]" /> {property.bathrooms}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Banyo</span>
              </div>
            )}
            <div className="flex flex-col items-center justify-center col-span-1">
              <span className="flex items-center gap-1 text-[#0F1E36] text-xs font-bold">
                <Maximize2 className="w-3.5 h-3.5 text-[#B89047]" /> {property.area} m²
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Net Alan</span>
            </div>
            {(property.bedrooms === 'Arsa' || property.bedrooms === 'Ticari') && (
              <div className="col-span-2 flex items-center justify-center text-xs font-semibold text-[#7E6128]">
                Müstakil Parsel / İmar Hazır
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#EAE6DF] flex items-center gap-3">
          <button
            onClick={() => onOpenModal(property)}
            className="flex-1 text-xs font-bold text-[#0F1E36] bg-[#F8F6F1] hover:bg-[#EAE6DF] py-3 px-4 rounded-xl transition-all border border-[#EAE6DF] flex items-center justify-center gap-1.5"
          >
            <span>İncele</span>
            <ArrowUpRight className="w-4 h-4 text-[#B89047]" />
          </button>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md"
            title="WhatsApp ile Sor"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
