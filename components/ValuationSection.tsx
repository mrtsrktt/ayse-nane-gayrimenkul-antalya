'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, Camera, Globe, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function ValuationSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    propertyType: 'villa',
    district: 'Döşemealtı',
    area: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Merhaba Ayşe Hanım, web sitenizdeki Ücretsiz Mülk Değerleme Formunu doldurdum:
- Mülk Sahibi: ${formData.fullName}
- Telefon: ${formData.phone}
- Mülk Tipi: ${formData.propertyType}
- Bölge: ${formData.district}
- Yaklaşık Alan: ${formData.area ? `${formData.area} m²` : 'Belirtilmedi'}
- Notlar: ${formData.notes || 'Yok'}
Değerleme ve satış stratejisi hakkında görüşmek istiyorum.`;

    const targetUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(targetUrl, '_blank');
    }, 600);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Gerçek Tapu Emsal Analizi',
      desc: 'Spekülatif ilan fiyatları yerine bölgedeki son 6 ayın tescilli tapu satış rayiçlerine dayalı gerçekçi fiyatlandırma.',
    },
    {
      icon: Camera,
      title: 'Mimari Prodüksiyon & Sunum',
      desc: 'Mülkünüzün mimari değerini ortaya koyan profesyonel fotoğraf, 4K video ve özel portföy dosyası hazırlığı.',
    },
    {
      icon: Globe,
      title: 'Nitelikli Alıcı Ağı',
      desc: 'Portföyünüzü yerli sermayenin yanı sıra Avrupa ve Körfez bölgesindeki doğrulanmış yatırımcı havuzuna ulaştırma.',
    },
  ];

  return (
    <section id="degerleme" className="py-20 lg:py-28 bg-ink text-paper relative overflow-hidden">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Value Proposition (6 cols) */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-px bg-bronze" />
                <span className="text-xs font-semibold uppercase tracking-widest text-bronze">
                  Mülk Sahiplerine Özel Danışmanlık
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-4">
                Mülkünüzün Güncel Değerini Emsal Verileriyle Öğrenin
              </h2>

              <p className="text-sm sm:text-base text-limestone leading-relaxed font-light">
                Antalya’da villanızı, dairenizi veya arsanızı satmayı planlıyorsanız; yanlış fiyatlandırma ile zaman kaybetmeyin. Ayşe Nane’nin bölge tecrübesiyle hazırlanan objektif değerleme raporuyla doğru alıcıya ulaşın.
              </p>
            </div>

            {/* 3 Concrete Benefits */}
            <div className="space-y-4 pt-2">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-ink-800 border border-limestone/20 flex items-center justify-center shrink-0">
                    <b.icon className="w-4 h-4 text-bronze" />
                  </div>
                  <div>
                    <h3 className="text-sm font-serif font-bold text-white mb-0.5">{b.title}</h3>
                    <p className="text-xs text-limestone leading-relaxed font-light">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Lead Capture Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-paper text-brand-text p-6 sm:p-10 rounded-xl border border-limestone/50 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-ink">
                  Ücretsiz Mülk Değerleme Formu
                </h3>
                <p className="text-xs text-brand-muted mt-1">
                  Mülk detaylarını iletin; 24 saat içinde bölge emsalleriyle hazırlanan ön rapor tarafınıza iletilsin.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-brand-text uppercase mb-1">
                      Adınız ve Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ad Soyad"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-ivory border border-limestone/70 rounded-lg p-2.5 text-xs text-ink placeholder-brand-muted focus:outline-none focus:border-bronze"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-brand-text uppercase mb-1">
                      Telefon Numaranız *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+90 5XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-ivory border border-limestone/70 rounded-lg p-2.5 text-xs text-ink placeholder-brand-muted focus:outline-none focus:border-bronze"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-brand-text uppercase mb-1">
                      Mülk Türü
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-ivory border border-limestone/70 rounded-lg p-2.5 text-xs text-ink focus:outline-none focus:border-bronze cursor-pointer"
                    >
                      <option value="villa">Müstakil Villa / Malikâne</option>
                      <option value="apartment">Rezidans / Daire</option>
                      <option value="land">Yatırımlık Arsa</option>
                      <option value="commercial">Ticari Varlık</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-brand-text uppercase mb-1">
                      Bulunduğu Bölge
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full bg-ivory border border-limestone/70 rounded-lg p-2.5 text-xs text-ink focus:outline-none focus:border-bronze cursor-pointer"
                    >
                      <option value="Döşemealtı">Döşemealtı</option>
                      <option value="Lara">Lara & Şirinyalı</option>
                      <option value="Konyaaltı">Konyaaltı</option>
                      <option value="Kaş / Kalkan">Kaş / Kalkan</option>
                      <option value="Belek">Belek</option>
                      <option value="Alanya">Alanya</option>
                      <option value="Diğer">Diğer Antalya İlçeleri</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-brand-text uppercase mb-1">
                    Yaklaşık Alan (m²)
                  </label>
                  <input
                    type="number"
                    placeholder="Örn: 350"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full bg-ivory border border-limestone/70 rounded-lg p-2.5 text-xs text-ink placeholder-brand-muted focus:outline-none focus:border-bronze"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-brand-text uppercase mb-1">
                    Mülk Hakkında Ek Bilgi (Opsiyonel)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Oda sayısı, manzarası veya satıştaki özel beklentileriniz..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-ivory border border-limestone/70 rounded-lg p-2.5 text-xs text-ink placeholder-brand-muted focus:outline-none focus:border-bronze"
                  />
                </div>

                <div className="flex items-start gap-2 pt-1 text-[11px] text-brand-muted">
                  <input type="checkbox" required id="kvkk-check" className="mt-1 accent-bronze cursor-pointer" />
                  <label htmlFor="kvkk-check" className="cursor-pointer">
                    Paylaştığım iletişim bilgilerimin ekspertiz raporu sunumu amacıyla işlenmesini ve{' '}
                    <Link href="/kvkk" target="_blank" className="text-bronze underline font-semibold">
                      KVKK Aydınlatma Metni
                    </Link>
                    &apos;ni okuduğumu onaylıyorum.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-3.5 text-xs font-bold"
                >
                  {isSubmitting ? 'Rapor Talebi Hazırlanıyor...' : 'Ücretsiz Değerleme Talep Et'}
                </button>

                {submitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800">
                    Talebiniz WhatsApp üzerinden Ayşe Hanım&apos;a iletildi. En geç 24 saat içinde sizinle iletişime geçilecektir.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
