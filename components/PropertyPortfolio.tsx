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
    <section id="portfoy" className="py-28 bg-[#070A12] text-white relative">
      <div className="editorial-divider mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full luxury-glass text-gold-300 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Özel & Doğrulanmış Lüks Portföy
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
            Antalya’nın En Seçkin <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">Gayrimenkul Koleksiyonu</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hukuki, imar ve ekspertiz incelemeleri bizzat Ayşe Nane tarafından tamamlanmış; tapu devrine ve vatandaşlık kriterlerine uygun nadide mülkler.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-5 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedType(cat.id)}
                className={`text-xs sm:text-sm font-semibold px-5 py-3 rounded-2xl transition-all duration-300 ${
                  selectedType === cat.id
                    ? 'bg-gradient-to-r from-gold-500 to-amber-600 text-navy-950 font-bold shadow-lg shadow-gold-500/20'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* District Pills & Sorting */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            {/* Districts */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
                Bölge:
              </span>
              {districts.map((dist) => (
                <button
                  key={dist.id}
                  onClick={() => setSelectedDistrict(dist.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-xl transition-all ${
                    selectedDistrict === dist.id
                      ? 'bg-white text-navy-950 font-bold shadow-md'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {dist.label}
                </button>
              ))}
            </div>

            {/* Sorting & Counter */}
            <div className="flex items-center gap-4 ml-auto">
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                <strong className="text-gold-300">{filteredProperties.length}</strong> ilan listeleniyor
              </span>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 text-xs text-slate-200">
                <SlidersHorizontal className="w-3.5 h-3.5 text-gold-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent font-medium text-slate-200 focus:outline-none cursor-pointer"
                >
                  <option value="featured" className="bg-navy-900 text-white">Öne Çıkanlar</option>
                  <option value="price-desc" className="bg-navy-900 text-white">Fiyat: Azalan</option>
                  <option value="price-asc" className="bg-navy-900 text-white">Fiyat: Artan</option>
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
          <div className="luxury-glass rounded-3xl p-12 text-center max-w-lg mx-auto shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-white/5 text-slate-400 flex items-center justify-center mx-auto mb-4 border border-white/10">
              <SlidersHorizontal className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white mb-2">
              Seçilen Kriterlere Uygun İlan Bulunamadı
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Filtreleri sıfırlayarak tüm portföyü görüntüleyebilir veya aradığınız kriterleri Ayşe Hanım’a doğrudan iletebilirsiniz.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-xl gold-gradient-button"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Filtreleri Sıfırla</span>
            </button>
          </div>
        )}

        {/* Bottom VIP Off-Market Box */}
        <div className="mt-20 luxury-glass rounded-3xl p-8 sm:p-12 border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-2 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block">
              Gizli & Off-Market Portföy Hizmeti
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Web Sitemizde Listelenmeyen Özel Malikâneleri Keşfedin
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Mülk sahiplerinin yüksek gizlilik talebi doğrultusunda internette açık olarak yayınlanmayan falez villaları, özel resort arazileri ve golf malikâneleri için doğrudan Ayşe Hanım ile gizlilik sözleşmesi (NDA) kapsamında görüşebilirsiniz.
            </p>
          </div>

          <a
            href="#iletisim"
            className="gold-gradient-button text-xs uppercase tracking-wider font-bold px-7 py-4 rounded-xl shrink-0 shadow-xl flex items-center gap-2 relative z-10"
          >
            <span>VIP Portföy Talep Et</span>
            <ArrowRight className="w-4 h-4" />
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
