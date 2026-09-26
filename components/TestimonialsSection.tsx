'use client';

import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  const anonymizedTestimonials = [
    {
      id: '1',
      initials: 'SK',
      name: 'Dr. S. & E. Karahan',
      role: 'Yatırımcı',
      location: 'İstanbul → Antalya',
      comment:
        'Döşemealtı’ndaki müstakil villamızı satın alırken Ayşe Hanım’ın bölge rayiçlerine hakimiyeti, hukuki titizliği ve tapu aşamasındaki dürüst rehberliği olmasaydı bu kadar rahat bir süreç yaşayamazdık. Antalya’da gayrimenkul danışmanlığında tam bir profesyonel.',
      transaction: 'Döşemealtı Müstakil Villa Alımı',
    },
    {
      id: '2',
      initials: 'AS',
      name: 'A. & M. Schmidt',
      role: 'Uluslararası Girişimci',
      location: 'Berlin / Almanya',
      comment:
        'Ayşe took care of everything for our citizenship-by-investment property in Lara. The transaction was 100% smooth, transparent and fast. Her English is fluent and she truly cares about her clients’ financial future.',
      transaction: 'Lara Penthouse & Yatırım Danışmanlığı',
    },
    {
      id: '3',
      initials: 'BÖ',
      name: 'B. Özdemir',
      role: 'Müteahhit & Yatırımcı',
      location: 'Antalya / Muratpaşa',
      comment:
        'Antalya’daki arsa yatırımlarımızın tüm portföy analizini Ayşe Hanım yönetiyor. Bölgenin imar planlarına ve gelecekteki gelişim akslarına son derece hakim; her tavsiyesi sağlam temellere dayanıyor.',
      transaction: 'Ticari Arsa & Proje Geliştirme',
    },
    {
      id: '4',
      initials: 'CW',
      name: 'C. Wright',
      role: 'Turizm Yatırımcısı',
      location: 'Londra / İngiltere',
      comment:
        'Kalkan’da sezonluk kiralama amaçlı aldığımız villada getiri öngörüleri tamamen gerçekleşti. Ayşe Hanım sadece satış sürecinde değil, mülkün teslim ve yönetim adımlarında da güvenilir bir yol gösterici oldu.',
      transaction: 'Kalkan Panoramik Villa Alımı',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory/40 border-t border-limestone/50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-bronze" />
            <span className="text-xs font-semibold uppercase tracking-widest text-bronze">
              Müşteri Deneyimleri & Referanslar
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink leading-tight mb-4">
            Güvene Dayalı Uzun Vadeli İlişkiler
          </h2>

          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
            Yerli ve yabancı mülk sahiplerinin Antalya’daki alım, satım ve yatırım danışmanlığı süreçlerine dair gerçek deneyimleri.
          </p>
        </div>

        {/* 4 Clean Editorial Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {anonymizedTestimonials.map((t) => (
            <div
              key={t.id}
              className="editorial-card p-6 sm:p-8 bg-white border border-limestone/60 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-bronze/40" />

                <p className="text-xs sm:text-sm text-brand-text font-serif italic leading-relaxed">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-limestone/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ivory border border-limestone/60 flex items-center justify-center font-serif font-bold text-xs text-ink shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-ink">{t.name}</h4>
                    <p className="text-[11px] text-brand-muted">{t.location}</p>
                  </div>
                </div>

                <span className="text-[10px] font-semibold text-brand-muted bg-paper px-2.5 py-1 rounded border border-limestone/50 hidden sm:inline">
                  {t.transaction}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Disclaimer */}
        <p className="text-[11px] text-brand-muted text-center italic mt-8">
          * Müşteri mahremiyeti ve kişisel verilerin korunması ilkeleri uyarınca yatırımcılarımızın isimleri baş harfleriyle sunulmaktadır.
        </p>
      </div>
    </section>
  );
}
