'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, ShieldCheck, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
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

  return (
    <section id="yatirim-hesapla" className="py-24 bg-[#FAF9F5] text-slate-800 relative">
      <div className="editorial-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFC596] text-[#7E6128] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-[#B89047]" />
            Finansal Cockpit & ROI Analizi
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0F1E36] tracking-tight leading-tight mb-4">
            Antalya Gayrimenkul <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">Yatırım ve Amortisman Simülatörü</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Seçtiğiniz mülk bütçesi için yıllık döviz bazlı kira getirisi, değer artışı ve 5 yıllık toplam sermaye projeksiyonunu anında hesaplayın.
          </p>
        </div>

        {/* Main Cockpit Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DFC596] shadow-[0_20px_50px_rgba(15,30,54,0.08)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Controls Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Currency Selector */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                Hesaplama Para Birimi
              </span>
              <div className="flex items-center gap-1 bg-[#FAF9F5] p-1 rounded-xl border border-[#EAE6DF]">
                {(['TRY', 'EUR', 'USD'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      currency === curr
                        ? 'gold-gradient-button text-white shadow-sm'
                        : 'text-slate-500 hover:text-[#0F1E36]'
                    }`}
                  >
                    {curr === 'TRY' ? '₺ TL' : curr === 'EUR' ? '€ Euro' : '$ Dolar'}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Purchase Price */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Mülk Alım Bütçesi
                </label>
                <span className="font-serif font-bold text-xl text-[#0F1E36]">
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
                className="w-full h-2 bg-[#FAF9F5] rounded-lg appearance-none cursor-pointer accent-[#B89047]"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>5M ₺ (~130K €)</span>
                <span>50M ₺ (~1.3M €)</span>
                <span>150M ₺ (~3.9M €)</span>
              </div>
            </div>

            {/* Slider 2: Rental Yield */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Beklenen Yıllık Kira Getirisi
                </label>
                <span className="font-serif font-bold text-xl text-[#B89047]">
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
                className="w-full h-2 bg-[#FAF9F5] rounded-lg appearance-none cursor-pointer accent-[#B89047]"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>%4 (Uzun Dönem Standart)</span>
                <span>%8.5 (Lüks Rezidans)</span>
                <span>%15 (Kalkan Sezonluk Villa)</span>
              </div>
            </div>

            {/* Slider 3: Capital Growth */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Tahmini Yıllık Değer Artışı
                </label>
                <span className="font-serif font-bold text-xl text-emerald-700">
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
                className="w-full h-2 bg-[#FAF9F5] rounded-lg appearance-none cursor-pointer accent-[#B89047]"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>%8 (Döviz Bazlı Muhafazakar)</span>
                <span>%18 (Antalya Ortalaması)</span>
                <span>%30 (Gelişen Bölgeler)</span>
              </div>
            </div>
          </div>

          {/* Right Results Column (6 cols) */}
          <div className="lg:col-span-6 bg-[#FAF9F5] p-6 sm:p-8 rounded-2xl border border-[#EAE6DF] space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 pb-3 border-b border-[#EAE6DF]">
              Finansal Projeksiyon & Getiri Özeti
            </h3>

            {/* Key KPI Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#EAE6DF] shadow-sm">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                  Aylık Tahmini Kira
                </span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-[#0F1E36]">
                  {formatCurrency(monthlyRentalIncome)}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#EAE6DF] shadow-sm">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                  Amortisman Süresi
                </span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-[#B89047]">
                  {paybackYears.toFixed(1)} Yıl
                </span>
              </div>
            </div>

            {/* 5-Year Projection Banner */}
            <div className="p-5 rounded-2xl bg-white border border-[#DFC596] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  5 Yıl Sonraki Tahmini Mülk Değeri
                </span>
                <span className="font-serif font-bold text-xl text-[#0F1E36]">
                  {formatCurrency(futureValue5Years)}
                </span>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">5 Yıllık Net Kazanç (Kira + Değerleme):</span>
                <span className="font-bold text-emerald-700 text-sm">
                  + {formatCurrency(total5YearGain)}
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                `Merhaba Ayşe Hanım, web sitenizdeki yatırım hesaplayıcısında ${formatCurrency(
                  priceInSelectedCurrency
                )} bütçe için projeksiyon oluşturdum. Bu bütçeye uygun portföy önerilerinizi görüşmek istiyorum.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full gold-gradient-button text-xs font-bold uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:scale-102 transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Bu Bütçeye Uygun Portföyleri WhatsApp’tan İste</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
