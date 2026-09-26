'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function RoiCalculator() {
  const [purchasePriceTRY, setPurchasePriceTRY] = useState<number>(25000000);
  const [expectedRentalYieldPercent, setExpectedRentalYieldPercent] = useState<number>(8.5);
  const [expectedAnnualCapitalGrowth, setExpectedAnnualCapitalGrowth] = useState<number>(18);
  const [currency, setCurrency] = useState<'TRY' | 'EUR' | 'USD'>('TRY');

  const exchangeRateEUR = 38.5;
  const exchangeRateUSD = 34.8;

  const currentRate = useMemo(() => {
    if (currency === 'EUR') return exchangeRateEUR;
    if (currency === 'USD') return exchangeRateUSD;
    return 1;
  }, [currency]);

  const priceInSelectedCurrency = purchasePriceTRY / currentRate;
  const annualRentalIncome = (purchasePriceTRY * (expectedRentalYieldPercent / 100)) / currentRate;
  const monthlyRentalIncome = annualRentalIncome / 12;
  const paybackYears = 100 / expectedRentalYieldPercent;

  const futureValue5Years = useMemo(() => {
    let val = purchasePriceTRY;
    for (let i = 0; i < 5; i++) {
      val *= 1 + expectedAnnualCapitalGrowth / 100;
    }
    return val / currentRate;
  }, [purchasePriceTRY, expectedAnnualCapitalGrowth, currentRate]);

  const total5YearGain = futureValue5Years - priceInSelectedCurrency + annualRentalIncome * 5;

  const formatCurrency = (val: number) => {
    const symbol = currency === 'TRY' ? '₺' : currency === 'EUR' ? '€' : '$';
    return `${new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 0 }).format(val)} ${symbol}`;
  };

  const whatsappMessage = `Merhaba Ayşe Hanım, web sitenizdeki yatırım simülatöründe ${formatCurrency(priceInSelectedCurrency)} bütçe ve %${expectedRentalYieldPercent} kira getirisi için hesaplama yaptım. Bu kritere uygun Antalya portföy seçeneklerini görüşmek istiyorum.`;

  return (
    <section id="yatirim-hesapla" className="py-20 lg:py-28 bg-paper">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-bronze" />
            <span className="text-xs font-semibold uppercase tracking-widest text-bronze">
              Yatırım Analizi & Amortisman Simülatörü
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink leading-tight mb-4">
            Gayrimenkul Getiri Projeksiyonu
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
            Bütçenize uygun tahmini yıllık kira geliri, sermaye değer artışı ve amortisman süresini değişken parametrelerle simüle edin.
          </p>
        </div>

        {/* 2-Column Clean Cockpit */}
        <div className="bg-white rounded-xl border border-limestone/60 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Controls (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Currency Selector */}
            <div className="flex items-center justify-between pb-4 border-b border-limestone/40">
              <span className="text-xs font-semibold text-brand-text">Para Birimi</span>
              <div className="flex items-center gap-1 bg-ivory p-1 rounded-lg border border-limestone/50">
                {(['TRY', 'EUR', 'USD'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                      currency === curr
                        ? 'bg-ink text-white shadow-sm'
                        : 'text-brand-muted hover:text-ink'
                    }`}
                  >
                    {curr === 'TRY' ? '₺ TRY' : curr === 'EUR' ? '€ EUR' : '$ USD'}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Purchase Price */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-brand-text">Mülk Alım Bütçesi</label>
                <span className="font-serif font-bold text-lg text-ink">
                  {formatCurrency(priceInSelectedCurrency)}
                </span>
              </div>
              <input
                type="range"
                min={5000000}
                max={150000000}
                step={1000000}
                value={purchasePriceTRY}
                onChange={(e) => setPurchasePriceTRY(Number(e.target.value))}
                className="w-full h-1.5 bg-ivory rounded-lg appearance-none cursor-pointer accent-bronze"
              />
              <div className="flex justify-between text-[11px] text-brand-muted">
                <span>5M ₺</span>
                <span>50M ₺</span>
                <span>150M ₺</span>
              </div>
            </div>

            {/* Slider 2: Rental Yield */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-brand-text">Tahmini Yıllık Kira Getirisi</label>
                <span className="font-serif font-bold text-lg text-bronze">
                  %{expectedRentalYieldPercent}
                </span>
              </div>
              <input
                type="range"
                min={4}
                max={15}
                step={0.5}
                value={expectedRentalYieldPercent}
                onChange={(e) => setExpectedRentalYieldPercent(Number(e.target.value))}
                className="w-full h-1.5 bg-ivory rounded-lg appearance-none cursor-pointer accent-bronze"
              />
              <div className="flex justify-between text-[11px] text-brand-muted">
                <span>%4 (Standart Daire)</span>
                <span>%8.5 (Lüks Rezidans)</span>
                <span>%15 (Sezonluk Villa)</span>
              </div>
            </div>

            {/* Slider 3: Capital Growth */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-brand-text">Tahmini Yıllık Sermaye Değer Artışı</label>
                <span className="font-serif font-bold text-lg text-ink">
                  %{expectedAnnualCapitalGrowth}
                </span>
              </div>
              <input
                type="range"
                min={8}
                max={30}
                step={1}
                value={expectedAnnualCapitalGrowth}
                onChange={(e) => setExpectedAnnualCapitalGrowth(Number(e.target.value))}
                className="w-full h-1.5 bg-ivory rounded-lg appearance-none cursor-pointer accent-bronze"
              />
              <div className="flex justify-between text-[11px] text-brand-muted">
                <span>%8 (Döviz Bazlı)</span>
                <span>%18 (Bölge Ortalaması)</span>
                <span>%30 (Yüksek Prim)</span>
              </div>
            </div>
          </div>

          {/* Results Summary (6 cols) */}
          <div className="lg:col-span-6 bg-ivory/70 rounded-xl p-6 sm:p-8 border border-limestone/60 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-bold text-bronze uppercase tracking-wider block mb-1">
                5 Yıllık Kümülatif Projeksiyon
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-1">
                +{formatCurrency(total5YearGain)}
              </div>
              <p className="text-xs text-brand-muted">
                Toplam 5 yıllık kira getirisi ve sermaye değer kazancı tahmini
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-limestone/50 text-xs">
              <div>
                <span className="text-brand-muted block text-[11px]">Aylık Kira Getirisi</span>
                <span className="font-serif font-bold text-base text-ink block mt-0.5">
                  {formatCurrency(monthlyRentalIncome)}
                </span>
              </div>

              <div>
                <span className="text-brand-muted block text-[11px]">Yıllık Kira Geliri</span>
                <span className="font-serif font-bold text-base text-ink block mt-0.5">
                  {formatCurrency(annualRentalIncome)}
                </span>
              </div>

              <div>
                <span className="text-brand-muted block text-[11px]">Tahmini Amortisman</span>
                <span className="font-serif font-bold text-base text-ink block mt-0.5">
                  {paybackYears.toFixed(1)} Yıl
                </span>
              </div>

              <div>
                <span className="text-brand-muted block text-[11px]">5. Yıl Mülk Değeri</span>
                <span className="font-serif font-bold text-base text-ink block mt-0.5">
                  {formatCurrency(futureValue5Years)}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[11px] text-brand-muted italic leading-relaxed">
                * Not: Hesaplamalar geçmiş bölge verilerine dayalı tahmini simülasyonlardır. Vergilendirme, tapu harcı ve bakım giderlerine göre net rakamlar değişebilir; kesin taahhüt niteliği taşımaz.
              </p>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary text-xs py-3 text-center"
              >
                <span>Özel Yatırım Fizibilitesi Talep Edin</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
