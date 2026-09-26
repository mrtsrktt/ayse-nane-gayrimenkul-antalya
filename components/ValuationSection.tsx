'use client';

import React, { useState } from 'react';
import {
  Calculator,
  CheckCircle2,
  Camera,
  Globe2,
  ShieldCheck,
  TrendingUp,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '@/data/siteConfig';

export default function ValuationSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyType: 'villa',
    district: 'Döşemealtı',
    area: '',
    rooms: '4+1',
    note: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // safe fallback
    }
    setSubmitted(true);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Doğru Emsal Değerleme',
      desc: 'Bölgedeki son 6 ayın gerçek tapu devir verileri ve piyasa dinamikleriyle mülkünüzün en yüksek ve gerçekçi değerini tespit ediyoruz.',
    },
    {
      icon: Camera,
      title: 'Profesyonel Prodüksiyon',
      desc: '4K Drone çekimleri, profesyonel mimari fotoğrafçılık ve 3D sanal tur ile mülkünüzü en etkileyici şekilde vitrine taşıyoruz.',
    },
    {
      icon: Globe2,
      title: 'Küresel Yatırımcı Ağı',
      desc: 'Portföyünüzü sadece Türkiye değil; Almanya, Rusya, İngiltere ve Körfez ülkelerindeki hazır nitelikli alıcılarımıza sunuyoruz.',
    },
    {
      icon: ShieldCheck,
      title: 'Uçtan Uca Tapu Güvencesi',
      desc: 'Pazarlıktan kapora sözleşmesine, belediye rayiç belgesinden tapu devrine kadar tüm yasal süreçleri güvenle yürütüyoruz.',
    },
  ];

  return (
    <section id="degerleme" className="py-24 bg-[#FAF9F5] text-slate-800 relative">
      <div className="editorial-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info Column (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DFC596] text-[#7E6128] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
                Mülk Sahiplerine Özel Danışmanlık
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F1E36] tracking-tight leading-tight">
                Mülkünüzün Gerçek Değerini <br />
                <span className="gold-gradient-text italic font-serif font-normal">Ücretsiz & Bilimsel</span> Olarak Öğrenin
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4 font-light">
                Antalya’da villanızı, rezidans dairenizi veya arsanızı satmak istiyorsanız; yanlış fiyatlandırma ile zaman kaybetmeyin. Ayşe Nane’nin 12 yıllık bölge tecrübesiyle hazırlanan detaylı ekspertiz ve pazarlama planıyla mülkünüzü en doğru alıcıyla buluşturun.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#EAE6DF] shadow-[0_4px_20px_rgba(15,30,54,0.04)] hover:border-[#DFC596] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F4F1EA] border border-[#DFC596] flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#B89047]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0F1E36] mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <span>Form doldurmak istemiyor musunuz?</span>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  'Merhaba Ayşe Hanım, Antalya’daki mülkümü satmak istiyorum ve değerleme talep ediyorum.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#B89047] hover:text-[#7E6128] font-bold underline underline-offset-4"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                WhatsApp’tan Hemen İletişime Geçin
              </a>
            </div>
          </div>

          {/* Right Form Column (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-[#DFC596] rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,30,54,0.08)] relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0F1E36]">Değerleme Talebiniz Alındı!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Sayın <strong>{formData.fullName}</strong>, ilettiğiniz bilgiler doğrultusunda ön emsal analizi hazırlanmaktadır. Ayşe Nane en kısa sürede sizinle iletişime geçecektir.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-[#B89047] hover:underline"
                  >
                    Yeni bir mülk değerleme formu doldur
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-xl font-serif font-bold text-[#0F1E36] flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-[#B89047]" /> Ücretsiz Ekspertiz Talep Formu
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Mülk bilgilerinizi iletin, 24 saat içinde kapsamlı değerleme raporunuzu sunalım.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Adınız & Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: Mehmet Yılmaz"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-3 text-xs text-[#0F1E36] placeholder-slate-400 focus:outline-none focus:border-[#B89047]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Telefon Numaranız *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0505 172 52 84"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-3 text-xs text-[#0F1E36] placeholder-slate-400 focus:outline-none focus:border-[#B89047]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Mülk Türü
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-3 text-xs text-[#0F1E36] focus:outline-none focus:border-[#B89047] cursor-pointer"
                      >
                        <option value="villa">Müstakil Villa / Malikâne</option>
                        <option value="apartment">Rezidans / Daire</option>
                        <option value="land">İmarlı Arsa / Arazi</option>
                        <option value="commercial">Ticari Mülk / Otel</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Bulunduğu Bölge
                      </label>
                      <select
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-3 text-xs text-[#0F1E36] focus:outline-none focus:border-[#B89047] cursor-pointer"
                      >
                        <option value="Döşemealtı">Döşemealtı</option>
                        <option value="Lara">Lara / Muratpaşa</option>
                        <option value="Konyaaltı">Konyaaltı</option>
                        <option value="Kaş">Kaş / Kalkan</option>
                        <option value="Belek">Belek / Serik</option>
                        <option value="Alanya">Alanya</option>
                        <option value="Diğer">Diğer Antalya Bölgesi</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Yaklaşık Alan (m²)
                      </label>
                      <input
                        type="number"
                        placeholder="Örn: 250"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-3 text-xs text-[#0F1E36] placeholder-slate-400 focus:outline-none focus:border-[#B89047]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Oda Sayısı / Durum
                      </label>
                      <input
                        type="text"
                        placeholder="Örn: 4+1 veya Arsa"
                        value={formData.rooms}
                        onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                        className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-3 text-xs text-[#0F1E36] placeholder-slate-400 focus:outline-none focus:border-[#B89047]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Ek Bilgiler & Mülkün Öne Çıkan Detayları
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Özel havuz, deniz manzarası, tapu durumu veya beklediğiniz tahmini fiyat aralığı..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-2.5 text-xs text-[#0F1E36] placeholder-slate-400 focus:outline-none focus:border-[#B89047] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gold-gradient-button text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg mt-2 flex items-center justify-center gap-2"
                  >
                    <span>Ücretsiz Değerleme Raporumu Hazırla</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Bilgileriniz 6698 sayılı KVKK kapsamında gizli tutulur ve 3. şahıslarla asla paylaşılmaz.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
