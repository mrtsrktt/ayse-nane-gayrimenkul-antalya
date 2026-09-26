'use client';

import React, { useState, useMemo } from 'react';
import { Sparkles, SlidersHorizontal, Check, RefreshCw } from 'lucide-react';
import { properties, Property } from '@/data/properties';
import PropertyCard from './PropertyCard';
import PropertyModal from './PropertyModal';

interface PropertyPortfolioProps {
  initialType?: string;
  initialLocation?: string;
}

export default function PropertyPortfolio({
  initialType = 'all',
  initialLocation = 'all',
}: PropertyPortfolioProps) {
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedDistrict, setSelectedDistrict] = useState(initialLocation);
  const [sortBy, setSortBy] = useState<'featured' | 'price-desc' | 'price-asc'>('featured');
  const [activeProperty, setActiveProperty] = useState<Property | null>(null);

  // Sync if initial props change
  React.useEffect(() => {
    if (initialType) setSelectedType(initialType);
    if (initialLocation) setSelectedDistrict(initialLocation);
  }, [initialType, initialLocation]);

  const categories = [
    { id: 'all', label: 'Tüm Portföy' },
    { id: 'villa', label: 'Lüks Villalar' },
    { id: 'apartment', label: 'Rezidans & Daire' },
    { id: 'land', label: 'Yatırımlık Arsa' },
    { id: 'commercial', label: 'Ticari Mülkler' },
  ];

  const districts = [
    { id: 'all', label: 'Tüm Bölgeler' },
    { id: 'Döşemealtı', label: 'Döşemealtı' },
    { id: 'Lara', label: 'Lara & Muratpaşa' },
    { id: 'Konyaaltı', label: 'Konyaaltı' },
    { id: 'Kaş', label: 'Kaş & Kalkan' },
    { id: 'Belek', label: 'Belek' },
    { id: 'Alanya', label: 'Alanya' },
  ];

  const filteredProperties = useMemo(() => {
    return properties
      .filter((item) => {
        if (selectedType !== 'all' && item.type !== selectedType) return false;
        if (
          selectedDistrict !== 'all' &&
          !item.location.toLowerCase().includes(selectedDistrict.toLowerCase()) &&
          !item.district.toLowerCase().includes(selectedDistrict.toLowerCase())
        ) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-desc') return b.priceTRY - a.priceTRY;
        if (sortBy === 'price-asc') return a.priceTRY - b.priceTRY;
        return a.featured ? -1 : 1;
      });
  }, [selectedType, selectedDistrict, sortBy]);

  const handleResetFilters = () => {
    setSelectedType('all');
    setSelectedDistrict('all');
    setSortBy('featured');
  };

  return (
    <section id="portfoy" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Özel & Doğrulanmış Portföy
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            Antalya’nın En Seçkin Gayrimenkul Vitrini
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hukuki ve imar incelemeleri bizzat Ayşe Nane tarafından tamamlanmış, tapu devrine hazır lüks konutlar, villalar ve yüksek potansiyelli yatırımlar.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 mb-10">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedType(cat.id)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-all ${
                  selectedType === cat.id
                    ? 'bg-navy-950 text-white shadow-md border border-navy-900'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* District Pills & Sorting */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-200">
            {/* Districts */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
                Bölge:
              </span>
              {districts.map((dist) => (
                <button
                  key={dist.id}
                  onClick={() => setSelectedDistrict(dist.id)}
                  className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                    selectedDistrict === dist.id
                      ? 'bg-gold-500 text-navy-950 font-bold'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {dist.label}
                </button>
              ))}
            </div>

            {/* Sorting & Counter */}
            <div className="flex items-center gap-3 ml-auto">
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                <strong className="text-slate-900">{filteredProperties.length}</strong> ilan bulundu
              </span>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs">
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent font-medium text-slate-700 focus:outline-none cursor-pointer"
                >
                  <option value="featured">Öne Çıkanlar</option>
                  <option value="price-desc">Fiyat: Azalan</option>
                  <option value="price-asc">Fiyat: Artan</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onOpenModal={setActiveProperty}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <SlidersHorizontal className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
              Seçilen Kriterlere Uygun İlan Bulunamadı
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Filtreleri sıfırlayarak tüm portföyü görüntüleyebilir veya özel portföy talebi için Ayşe Hanım ile doğrudan iletişime geçebilirsiniz.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-navy-950 text-white hover:bg-navy-900 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Filtreleri Sıfırla</span>
            </button>
          </div>
        )}

        {/* Bottom VIP Note */}
        <div className="mt-16 bg-navy-950 text-white rounded-3xl p-8 sm:p-10 border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-1">
              Gizli & Off-Market Portföy Hizmeti
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
              Web Sitemizde Yayınlanmayan Özel Malikâneleri Keşfedin
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Mülk sahiplerinin gizlilik talebi doğrultusunda internette açık olarak listelenmeyen Antalya falez villaları ve özel resort arazileri için doğrudan Ayşe Hanım ile özel gizlilik sözleşmesi kapsamında görüşebilirsiniz.
            </p>
          </div>
          <a
            href="#iletisim"
            className="gold-gradient-button text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shrink-0 shadow-lg"
          >
            VIP Portföy Talep Et
          </a>
        </div>
      </div>

      {/* Property Details Modal */}
      <PropertyModal
        property={activeProperty}
        onClose={() => setActiveProperty(null)}
      />
    </section>
  );
}
