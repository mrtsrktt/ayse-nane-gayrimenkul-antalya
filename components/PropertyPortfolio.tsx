'use client';

import React, { useState, useMemo } from 'react';
import { Sparkles, SlidersHorizontal, RefreshCw, ArrowRight } from 'lucide-react';
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

  React.useEffect(() => {
    if (initialType) setSelectedType(initialType);
    if (initialLocation) setSelectedDistrict(initialLocation);
  }, [initialType, initialLocation]);

  const categories = [
    { id: 'all', label: 'Tüm Portföy' },
    { id: 'villa', label: 'Lüks Villalar' },
    { id: 'apartment', label: 'Rezidans & Penthouse' },
    { id: 'land', label: 'Yatırımlık Arsa' },
    { id: 'commercial', label: 'Ticari Mülkler' },
  ];

  const districts = [
    { id: 'all', label: 'Tüm Bölgeler' },
    { id: 'Döşemealtı', label: 'Döşemealtı' },
    { id: 'Lara', label: 'Lara & Falezler' },
    { id: 'Konyaaltı', label: 'Konyaaltı' },
    { id: 'Kaş', label: 'Kaş & Kalkan' },
    { id: 'Belek', label: 'Belek Golf' },
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
    <section id="portfoy" className="py-24 bg-[#FAF9F5] text-slate-800 relative">
      <div className="editorial-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFC596] text-[#7E6128] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
            Özel & Doğrulanmış Lüks Portföy
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0F1E36] tracking-tight leading-tight mb-4">
            Antalya’nın En Seçkin <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">Gayrimenkul Koleksiyonu</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Hukuki, imar ve ekspertiz incelemeleri bizzat Ayşe Nane tarafından tamamlanmış; tapu devrine ve vatandaşlık kriterlerine uygun nadide mülkler.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedType(cat.id)}
                className={`text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl transition-all duration-300 ${
                  selectedType === cat.id
                    ? 'gold-gradient-button text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-[#0F1E36] hover:bg-[#F4F1EA] border border-[#EAE6DF] shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* District Pills & Sorting */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
            {/* Districts */}
            <div className="flex flex-wrap items-center gap-1.5">
              {districts.map((dist) => (
                <button
                  key={dist.id}
                  onClick={() => setSelectedDistrict(dist.id)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-xl transition-all ${
                    selectedDistrict === dist.id
                      ? 'bg-[#0F1E36] text-white shadow-sm'
                      : 'bg-white text-slate-500 hover:text-[#0F1E36] border border-[#EAE6DF]'
                  }`}
                >
                  {dist.label}
                </button>
              ))}
            </div>

            {/* Sorting & Reset */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-[#EAE6DF] shadow-sm">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#B89047]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-xs font-semibold text-[#0F1E36] focus:outline-none cursor-pointer"
                >
                  <option value="featured">Öne Çıkan Sıralama</option>
                  <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
                  <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
                </select>
              </div>

              {(selectedType !== 'all' || selectedDistrict !== 'all') && (
                <button
                  onClick={handleResetFilters}
                  className="p-2 rounded-xl bg-white border border-[#EAE6DF] text-slate-500 hover:text-[#0F1E36] shadow-sm"
                  title="Filtreleri Sıfırla"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              )}
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
                onOpenModal={(prop) => setActiveProperty(prop)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#EAE6DF] shadow-sm">
            <p className="text-slate-500 text-sm mb-4">
              Seçtiğiniz kriterlere uygun ilan bulunamadı.
            </p>
            <button
              onClick={handleResetFilters}
              className="gold-gradient-button text-xs font-bold px-6 py-2.5 rounded-xl uppercase tracking-wider"
            >
              Tüm Portföyü Göster
            </button>
          </div>
        )}
      </div>

      {/* Property Details Modal */}
      {activeProperty && (
        <PropertyModal
          property={activeProperty}
          onClose={() => setActiveProperty(null)}
        />
      )}
    </section>
  );
}
