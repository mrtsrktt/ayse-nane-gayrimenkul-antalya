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
  const [propertyPrice, setPropertyPrice] = useState<number>(20000000); // 20M TL default
  const [monthlyRent, setMonthlyRent] = useState<number>(120000); // 120k TL default
  const [annualAppreciation, setAnnualAppreciation] = useState<number>(25); // %25 default

  const calculations = useMemo(() => {
    const annualRent = monthlyRent * 12;
    const grossYield = propertyPrice > 0 ? (annualRent / propertyPrice) * 100 : 0;
    const paybackYears = annualRent > 0 ? propertyPrice / annualRent : 0;

    // 5-Year compound projection with appreciation and cumulative rent
    let projectedValue = propertyPrice;
    let totalRentCollected = 0;
    let currentAnnualRent = annualRent;

    for (let i = 0; i < 5; i++) {
      projectedValue = projectedValue * (1 + annualAppreciation / 100);
      totalRentCollected += currentAnnualRent;
      currentAnnualRent = currentAnnualRent * (1 + annualAppreciation * 0.7 / 100); // rent grows moderately with property
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
    <section id="yatirim-hesapla" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Yatırımcı Analiz Aracı
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            Antalya Gayrimenkul Yatırım & Amortisman Hesaplayıcı
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hedeflediğiniz bütçe ve kira gelirine göre Antalya pazarındaki geri dönüş süresini, brüt getiri oranını ve 5 yıllık tahmini varlık değer artışını anında simüle edin.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Input 1: Property Price */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Mülk Yatırım Bedeli
                  </label>
                  <span className="text-lg font-serif font-bold text-slate-900">
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
                  className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-gold-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>3.000.000 ₺</span>
                  <span>40.000.000 ₺</span>
                  <span>80.000.000 ₺</span>
                </div>
              </div>

              {/* Input 2: Monthly Rent */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Tahmini Aylık Kira Geliri
                  </label>
                  <span className="text-lg font-serif font-bold text-emerald-700">
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
                  className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>20.000 ₺</span>
                  <span>200.000 ₺</span>
                  <span>400.000 ₺</span>
                </div>
              </div>

              {/* Input 3: Appreciation Expectation */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Yıllık Tahmini Sermaye / Prim Artışı
                  </label>
                  <span className="text-lg font-serif font-bold text-gold-700">
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
                  className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-gold-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>%10 (Temkinli)</span>
                  <span>%25 (Antalya Ortalaması)</span>
                  <span>%50 (Yüksek Prim)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
              <span>
                <strong>Uzman Notu:</strong> Kaş ve Kalkan bölgelerindeki döviz bazlı sezonluk kiralık villalarda yıllık getiri oranı ortalama <strong>%8 - %11</strong> seviyelerine ulaşabilmektedir.
              </span>
            </div>
          </div>

          {/* Results Column (5 cols) */}
          <div className="lg:col-span-5 bg-navy-950 text-white p-6 sm:p-8 rounded-3xl border border-gold-500/30 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-2">
                Simülasyon Çıktısı
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Yatırım Performans Özeti
              </h3>

              <div className="space-y-4">
                {/* Result 1: Gross Yield */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                      <Percent className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Yıllık Brüt Getiri</p>
                      <p className="text-[11px] text-slate-500">Kira / Alış Oranı</p>
                    </div>
                  </div>
                  <span className="text-2xl font-serif font-bold text-gold-300">
                    %{calculations.grossYield}
                  </span>
                </div>

                {/* Result 2: Payback Years */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Amortisman Süresi</p>
                      <p className="text-[11px] text-slate-500">Sadece Kira ile Dönüş</p>
                    </div>
                  </div>
                  <span className="text-2xl font-serif font-bold text-white">
                    {calculations.paybackYears} <span className="text-xs text-slate-400 font-sans">Yıl</span>
                  </span>
                </div>

                {/* Result 3: 5-Year Projected Value */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-gold-500/20 to-slate-900/90 border border-gold-500/40">
                  <p className="text-xs text-gold-300 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" /> 5 Yıl Sonraki Tahmini Mülk Değeri
                  </p>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    {formatCurrency(calculations.projectedValue)}
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Yıllık bileşik değer artışı baz alınarak hesaplanmıştır.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  `Merhaba Ayşe Hanım, web sitenizdeki getiri hesaplayıcıyı kullandım. Bütçem yaklaşık ${formatCurrency(
                    propertyPrice
                  )}, aylık hedef kira getirim ise ${formatCurrency(
                    monthlyRent
                  )}. Bu kriterlere uygun portföylerinizi öğrenebilir miyim?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full gold-gradient-button text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-xl"
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
