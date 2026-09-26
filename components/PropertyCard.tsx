'use client';

import React from 'react';
import Image from 'next/image';
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Property } from '@/data/properties';
import { siteConfig } from '@/data/siteConfig';

interface PropertyCardProps {
  property: Property;
  onOpenModal: (property: Property) => void;
  isFeatured?: boolean;
}

export default function PropertyCard({ property, onOpenModal, isFeatured = false }: PropertyCardProps) {
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

  const whatsappMessage = `Merhaba Ayşe Hanım, web sitenizdeki "${property.title}" (${formattedTRY}) portföyünüz hakkında detaylı bilgi almak istiyorum.`;

  if (isFeatured) {
    return (
      <div className="group bg-white rounded-xl border border-limestone/60 overflow-hidden transition-all duration-200 hover:border-bronze hover:shadow-[0_8px_30px_rgba(16,28,44,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Large Featured Image (7 cols) */}
        <div
          className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[320px] overflow-hidden bg-ivory cursor-pointer"
          onClick={() => onOpenModal(property)}
        >
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-102"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded bg-paper/95 text-xs font-semibold text-ink border border-limestone/60 shadow-sm">
              {property.typeName}
            </span>
          </div>
        </div>

        {/* Featured Details (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            {/* Location & Tag */}
            <div className="flex items-center justify-between text-xs text-brand-muted">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-bronze" />
                <span>{property.location}</span>
              </span>
              {property.suitableForCitizenship && (
                <span className="text-olive font-semibold text-[11px]">
                  Vatandaşlığa Uygun
                </span>
              )}
            </div>

            {/* Title */}
            <h3
              onClick={() => onOpenModal(property)}
              className="text-xl sm:text-2xl font-serif font-bold text-ink leading-snug cursor-pointer group-hover:text-bronze transition-colors"
            >
              {property.title}
            </h3>

            {/* Subtitle / Excerpt */}
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3">
              {property.subtitle}
            </p>

            {/* Specs Bar */}
            <div className="flex items-center gap-4 py-3 border-y border-limestone/40 text-xs text-brand-text">
              {property.bedrooms !== 'Arsa' && property.bedrooms !== 'Ticari' && (
                <span className="flex items-center gap-1.5 font-medium">
                  <Bed className="w-3.5 h-3.5 text-bronze" /> {property.bedrooms}
                </span>
              )}
              {property.bathrooms > 0 && (
                <span className="flex items-center gap-1.5 font-medium">
                  <Bath className="w-3.5 h-3.5 text-bronze" /> {property.bathrooms} Banyo
                </span>
              )}
              <span className="flex items-center gap-1.5 font-medium">
                <Maximize2 className="w-3.5 h-3.5 text-bronze" /> {property.area} m²
              </span>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="pt-2">
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <span className="text-2xl font-serif font-bold text-ink">{formattedTRY}</span>
                <span className="block text-xs text-brand-muted font-medium mt-0.5">~ {formattedEUR}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenModal(property)}
                className="flex-1 btn-primary text-xs py-3"
              >
                <span>İlanı İncele</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-limestone hover:border-emerald-600 hover:text-emerald-700 transition-colors text-brand-muted"
                title="WhatsApp ile Sor"
                aria-label="WhatsApp üzerinden danış"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Editorial Card
  return (
    <div className="group bg-white rounded-xl border border-limestone/60 overflow-hidden transition-all duration-200 hover:border-bronze hover:shadow-[0_6px_20px_rgba(16,28,44,0.05)] flex flex-col justify-between">
      <div>
        {/* Photo Container */}
        <div
          className="relative h-64 w-full overflow-hidden bg-ivory cursor-pointer"
          onClick={() => onOpenModal(property)}
        >
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-102"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-0.5 rounded bg-paper/95 text-[11px] font-semibold text-ink border border-limestone/60 shadow-sm">
              {property.typeName}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-3">
          {/* Location */}
          <div className="flex items-center justify-between text-xs text-brand-muted">
            <span className="flex items-center gap-1 font-medium truncate">
              <MapPin className="w-3.5 h-3.5 text-bronze shrink-0" />
              <span className="truncate">{property.location}</span>
            </span>
            {property.suitableForCitizenship && (
              <span className="text-olive font-semibold text-[10px] shrink-0">
                Vatandaşlık
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            onClick={() => onOpenModal(property)}
            className="text-base sm:text-lg font-serif font-bold text-ink leading-snug cursor-pointer group-hover:text-bronze transition-colors line-clamp-2"
          >
            {property.title}
          </h3>

          {/* Specs */}
          <div className="flex items-center gap-3 text-xs text-brand-muted pt-1">
            {property.bedrooms !== 'Arsa' && property.bedrooms !== 'Ticari' && (
              <span className="flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-bronze" /> {property.bedrooms}
              </span>
            )}
            {property.bathrooms > 0 && (
              <span className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-bronze" /> {property.bathrooms} Banyo
              </span>
            )}
            <span className="flex items-center gap-1">
              <Maximize2 className="w-3.5 h-3.5 text-bronze" /> {property.area} m²
            </span>
          </div>
        </div>
      </div>

      {/* Footer / Price & Actions */}
      <div className="px-5 pb-5 pt-3 border-t border-limestone/30 flex items-center justify-between gap-3">
        <div>
          <span className="text-lg font-serif font-bold text-ink block leading-none">{formattedTRY}</span>
          <span className="text-[11px] text-brand-muted mt-1 block">~ {formattedEUR}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onOpenModal(property)}
            className="btn-secondary text-xs py-2 px-3"
          >
            <span>İncele</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-limestone/70 hover:border-emerald-600 hover:text-emerald-700 transition-colors text-brand-muted"
            title="WhatsApp ile Bilgi Al"
            aria-label="WhatsApp ile sor"
          >
            <MessageCircle className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
