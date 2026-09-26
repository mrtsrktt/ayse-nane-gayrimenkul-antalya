'use client';

import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, RotateCcw, Filter, ChevronDown } from 'lucide-react';
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
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  React.useEffect(() => {
    if (initialType) setSelectedType(initialType);
    if (initialLocation) setSelectedDistrict(initialLocation);
  }, [initialType, initialLocation]);

  const categories = [
    { id: 'all', label: 'Tüm Koleksiyon' },
    { id: 'villa', label: 'Müstakil Villalar' },
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

  const isFiltered = selectedType !== 'all' || selectedDistrict !== 'all';

  return (
    <section id="portfoy" className="py-20 lg:py-28 bg-paper">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-bronze" />
            <span className="text-xs font-semibold uppercase tracking-widest text-bronze">
              Portföy & Gayrimenkul Koleksiyonu
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink leading-tight mb-4">
            Doğrulanmış ve Seçkin Mülkler
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
            Hukuki, imar ve tapu denetimleri bizzat yapılmış; vatandaşlık kriterlerine ve güvenli alım-satım standartlarına uygun gayrimenkul seçkisi.
          </p>
        </div>

        {/* Desktop Single-Line Filter Toolbar */}
        <div className="hidden lg:flex items-center justify-between border-y border-limestone/50 py-4 mb-10 gap-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedType(cat.id)}
                className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors ${
                  selectedType === cat.id
                    ? 'bg-ink text-paper'
                    : 'text-brand-muted hover:text-ink hover:bg-ivory'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Region & Sort Controls */}
          <div className="flex items-center gap-3">
            {/* Region Selector */}
            <div className="flex items-center gap-1.5 bg-ivory/80 px-3 py-1.5 rounded-lg border border-limestone/50">
              <span className="text-[11px] text-brand-muted font-medium">Bölge:</span>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="bg-transparent text-xs font-semibold text-ink focus:outline-none cursor-pointer"
              >
                {districts.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 bg-ivory/80 px-3 py-1.5 rounded-lg border border-limestone/50">
              <span className="text-[11px] text-brand-muted font-medium">Sırala:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs font-semibold text-ink focus:outline-none cursor-pointer"
              >
                <option value="featured">Öne Çıkanlar</option>
                <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
                <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
              </select>
            </div>

            {/* Reset Button */}
            {isFiltered && (
              <button
                onClick={handleResetFilters}
                className="p-2 text-brand-muted hover:text-ink rounded-lg hover:bg-ivory transition-colors"
                title="Filtreleri Sıfırla"
                aria-label="Filtreleri sıfırla"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Filter Toggle & Collapsible Bar */}
        <div className="lg:hidden mb-8 space-y-3">
          <div className="flex items-center justify-between bg-ivory p-3 rounded-xl border border-limestone/60">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="flex items-center gap-2 text-xs font-semibold text-ink"
            >
              <Filter className="w-4 h-4 text-bronze" />
              <span>Filtrele & Sırala</span>
              {isFiltered && (
                <span className="w-2 h-2 rounded-full bg-bronze" />
              )}
            </button>

            <span className="text-xs text-brand-muted">
              {filteredProperties.length} İlan
            </span>
          </div>

          {mobileFilterOpen && (
            <div className="bg-white p-4 rounded-xl border border-limestone/60 space-y-3">
              {/* Category Pills */}
              <div>
                <label className="block text-[10px] font-bold text-brand-muted uppercase mb-1.5">
                  Mülk Tipi
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedType(cat.id)}
                      className={`text-xs px-2.5 py-1.5 rounded-lg font-medium transition-colors ${
                        selectedType === cat.id
                          ? 'bg-ink text-white'
                          : 'bg-ivory text-brand-text'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* District & Sort Dropdowns */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-limestone/30">
                <div>
                  <label className="block text-[10px] font-bold text-brand-muted uppercase mb-1">
                    Bölge
                  </label>
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="w-full bg-ivory border border-limestone/60 rounded-lg p-2 text-xs text-ink font-semibold"
                  >
                    {districts.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-brand-muted uppercase mb-1">
                    Sıralama
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full bg-ivory border border-limestone/60 rounded-lg p-2 text-xs text-ink font-semibold"
                  >
                    <option value="featured">Öne Çıkanlar</option>
                    <option value="price-desc">Fiyat: Yüksek</option>
                    <option value="price-asc">Fiyat: Düşük</option>
                  </select>
                </div>
              </div>

              {isFiltered && (
                <button
                  onClick={handleResetFilters}
                  className="w-full text-center text-xs font-semibold text-bronze pt-1"
                >
                  Tüm Filtreleri Temizle
                </button>
              )}
            </div>
          )}
        </div>

        {/* Editorial Portfolio Showcase Grid */}
        {filteredProperties.length === 0 ? (
          <div className="py-16 text-center bg-ivory/50 rounded-2xl border border-limestone/40">
            <p className="font-serif text-xl font-bold text-ink mb-2">Aramanıza Uygun İlan Bulunamadı</p>
            <p className="text-xs text-brand-muted max-w-md mx-auto mb-4">
              Seçtiğiniz kriterlerde şu anda yayında olan bir portföy bulunmuyor. Farklı bir bölge veya mülk tipi seçebilirsiniz.
            </p>
            <button onClick={handleResetFilters} className="btn-secondary text-xs">
              Tüm Portföyü Göster
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* When not filtered: First item is large featured, followed by 2 editorial cards, then 3-column grid */}
            {!isFiltered && filteredProperties.length >= 3 ? (
              <>
                {/* 1. Large Lead Feature */}
                <PropertyCard
                  property={filteredProperties[0]}
                  onOpenModal={setActiveProperty}
                  isFeatured={true}
                />

                {/* 2. Editorial Duo (2 cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {filteredProperties.slice(1, 3).map((item) => (
                    <PropertyCard
                      key={item.id}
                      property={item}
                      onOpenModal={setActiveProperty}
                    />
                  ))}
                </div>

                {/* 3. Remaining Properties (3-column grid) */}
                {filteredProperties.length > 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-4">
                    {filteredProperties.slice(3).map((item) => (
                      <PropertyCard
                        key={item.id}
                        property={item}
                        onOpenModal={setActiveProperty}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              /* When filtered: Direct responsive grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProperties.map((item) => (
                  <PropertyCard
                    key={item.id}
                    property={item}
                    onOpenModal={setActiveProperty}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Property Detail Modal */}
      {activeProperty && (
        <PropertyModal
          property={activeProperty}
          onClose={() => setActiveProperty(null)}
        />
      )}
    </section>
  );
}
