'use client';

import React, { useState, useMemo } from 'react';
import {
  TrendingUp,
  Percent,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  DollarSign
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function RoiCalculator() {
  const [propertyPrice, setPropertyPrice] = useState<number>(20000000);
  const [monthlyRent, setMonthlyRent] = useState<number>(120000);
  const [annualAppreciation, setAnnualAppreciation] = useState<number>(25);

  const calculations = useMemo(() => {
    const annualRent = monthlyRent * 12;
    const grossYield = propertyPrice > 0 ? (annualRent / propertyPrice) * 100 : 0;
    const paybackYears = annualRent > 0 ? propertyPrice / annualRent : 0;

    let projectedValue = propertyPrice;
    let totalRentCollected = 0;
    let currentAnnualRent = annualRent;

    for (let i = 0; i < 5; i++) {
      projectedValue = projectedValue * (1 + annualAppreciation / 100);
      totalRentCollected += currentAnnualRent;
      currentAnnualRent = currentAnnualRent * (1 + annualAppreciation * 0.7 / 100);
    }

    const totalFiveYearReturn = (projectedValue + totalRentCollected) - propertyPrice;

    return {
      annualRent,
      grossYield: grossYield.toFixed(1),
      paybackYears: paybackYears.toFixed(1),
      projectedValue: Math.round(projectedValue),
      totalFiveYearReturn: Math.round(totalFiveYearReturn),
    };
  }, [propertyPrice, monthlyRent, annualAppreciation]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="yatirim-hesapla" className="py-28 bg-[#070A12] text-white relative">
      <div className="editorial-divider mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full luxury-glass text-gold-300 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Finansal Projeksiyon & Getiri Simülatörü
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
            Antalya Yatırım & <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">Amortisman Hesaplayıcı</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hedeflediğiniz bütçe ve kira gelirine göre Antalya pazarındaki geri dönüş süresini, brüt getiri oranını ve 5 yıllık bileşik varlık değer artışını anında simüle edin.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 luxury-glass p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between shadow-2xl">
            <div className="space-y-8">
              {/* Input 1: Property Price */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                    Mülk Yatırım Bedeli
                  </label>
                  <span className="text-xl font-serif font-bold text-gold-300">
                    {formatCurrency(propertyPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min="3000000"
                  max="80000000"
                  step="500000"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-medium">
                  <span>3.000.000 ₺</span>
                  <span>40.000.000 ₺</span>
                  <span>80.000.000 ₺</span>
                </div>
              </div>

              {/* Input 2: Monthly Rent */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                    Tahmini Aylık Kira Geliri
                  </label>
                  <span className="text-xl font-serif font-bold text-emerald-400">
                    {formatCurrency(monthlyRent)} / ay
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="400000"
                  step="5000"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-medium">
                  <span>20.000 ₺</span>
                  <span>200.000 ₺</span>
                  <span>400.000 ₺</span>
                </div>
              </div>

              {/* Input 3: Appreciation Expectation */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                    Yıllık Sermaye / Prim Artışı
                  </label>
                  <span className="text-xl font-serif font-bold text-gold-300">
                    %{annualAppreciation}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="1"
                  value={annualAppreciation}
                  onChange={(e) => setAnnualAppreciation(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-medium">
                  <span>%10 (Muhafazakar)</span>
                  <span>%25 (Antalya Ortalaması)</span>
                  <span>%50 (Lüks Villa Primi)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10 text-xs text-slate-300 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <span>
                <strong>Uzman Tavsiyesi:</strong> Kaş ve Kalkan bölgelerindeki döviz bazlı sezonluk kiralık villalarda yıllık getiri oranı ortalama <strong>%8 - %11</strong> seviyelerine ulaşabilmektedir.
              </span>
            </div>
          </div>

          {/* Results Column (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0F172A] via-[#090D1A] to-[#070A12] p-8 sm:p-10 rounded-3xl border border-gold-500/40 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-2">
                Simülasyon Çıktısı
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mb-8">
                Yatırım Performans Özeti
              </h3>

              <div className="space-y-4">
                {/* Result 1: Gross Yield */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-gold-400">
                      <Percent className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-300 font-medium">Yıllık Brüt Getiri</p>
                      <p className="text-[11px] text-slate-500">Kira / Alış Oranı</p>
                    </div>
                  </div>
                  <span className="text-2xl font-serif font-bold text-gold-300">
                    %{calculations.grossYield}
                  </span>
                </div>

                {/* Result 2: Payback Years */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-300 font-medium">Amortisman Süresi</p>
                      <p className="text-[11px] text-slate-500">Kira ile Geri Dönüş</p>
                    </div>
                  </div>
                  <span className="text-2xl font-serif font-bold text-white">
                    {calculations.paybackYears} <span className="text-xs text-slate-400 font-sans">Yıl</span>
                  </span>
                </div>

                {/* Result 3: 5-Year Projected Value */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-gold-500/20 to-navy-950/80 border border-gold-500/40">
                  <p className="text-xs text-gold-300 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" /> 5 Yıl Sonraki Tahmini Mülk Değeri
                  </p>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    {formatCurrency(calculations.projectedValue)}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Yıllık bileşik sermaye kazancı projeksiyonudur.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  `Merhaba Ayşe Hanım, getiri simülatörünü kullandım. Bütçem ${formatCurrency(
                    propertyPrice
                  )}, hedef kira getirisi ${formatCurrency(monthlyRent)}. Bu getiriye uygun portföyleri öğrenebilir miyim?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full gold-gradient-button text-xs font-bold uppercase tracking-wider py-4 px-4 rounded-xl flex items-center justify-center gap-2 shadow-xl"
              >
                <span>Bu Kriterlerdeki Portföyleri İsteyin</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
