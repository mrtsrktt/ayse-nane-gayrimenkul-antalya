'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Check, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function AboutSection() {
  const pillars = [
    {
      title: 'Hukuki & Tapu Güvencesi',
      desc: 'Portföye alınan her mülkün ipotek, haciz, iskân ve imar kayıtları bağımsız hukuk danışmanlarımızca denetlenir.',
    },
    {
      title: 'Doğru Emsal Değerleme',
      desc: 'İlan spekülasyonları yerine gerçekleşen tapu devir rayiçleri ve bölge dinamikleriyle objektif fiyat tespiti.',
    },
    {
      title: 'VIP Temsil & Gizlilik',
      desc: 'Yüksek bütçeli yatırımcılar ve mülk sahipleri için tam gizlilik ilkelerine bağlı off-market danışmanlık.',
    },
    {
      title: 'Vatandaşlık & İkametgah Desteği',
      desc: 'Uluslararası alıcılar için SPK onaylı ekspertiz ve yasal devir süreçlerinde anahtar teslim rehberlik.',
    },
  ];

  return (
    <section id="hakkimda" className="py-20 lg:py-28 bg-ivory/40 border-t border-limestone/50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5 text-left">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Photo Frame */}
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-xl overflow-hidden bg-white border border-limestone shadow-sm">
                <Image
                  src="/ayse-nane.jpg"
                  alt="Ayşe Nane • Antalya Lüks Gayrimenkul Danışmanı"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                />
              </div>

              {/* Caption & Asset Note */}
              <div className="mt-3 text-left">
                <p className="font-serif font-bold text-base text-ink">{siteConfig.agentName}</p>
                <p className="text-xs text-brand-muted">Lüks Konut & Yatırım Danışmanı • Antalya</p>
              </div>
            </div>
          </div>

          {/* Biography & Pillars Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-px bg-bronze" />
                <span className="text-xs font-semibold uppercase tracking-widest text-bronze">
                  Kişisel Marka & Danışmanlık Vizyonu
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink leading-tight mb-5">
                Antalya’da Gayrimenkulü Güven ve Rafine Standartlarla Buluşturan Deneyim
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
                <p>
                  12 yılı aşkın süredir Akdeniz’in en değerli gayrimenkul havzası Antalya’da; seçkin ailelerin ve kurumsal yatırımcıların doğru mülk kararları almalarına rehberlik ediyorum.
                </p>
                <p>
                  MYK Seviye 5 lisansım ve ATSO tescilimle; spekülatif vaatler yerine sahada doğrulanmış emsal satış verileri, şeffaf tapu incelemesi ve doğru değerleme prensipleriyle çalışıyorum. Döşemealtı’nın müstakil villalarından Lara falez hattına, Kaş-Kalkan’ın yüksek kira getirili yapılarından Belek projelerine kadar sürecin her adımında bizzat yanınızdayım.
                </p>
              </div>
            </div>

            {/* 4 Pillars Clean 2-Column List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-limestone/40">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-bronze shrink-0" />
                    <h3 className="text-xs sm:text-sm font-serif font-bold text-ink">{pillar.title}</h3>
                  </div>
                  <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed font-light pl-6">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quiet Accreditation Bar */}
            <div className="p-4 bg-white rounded-xl border border-limestone/60 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-ink font-semibold">
                <ShieldCheck className="w-4 h-4 text-bronze" />
                <span>Resmi Akreditasyonlar:</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-[11px] text-brand-muted">
                <span>MYK-5 (YB0044/17UY0333-5)</span>
                <span>•</span>
                <span>Yetki No: 0701234</span>
                <span>•</span>
                <span>TÜGEM & ATSO Üyesi</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  'Merhaba Ayşe Hanım, web sitenizdeki biyografinizi inceledim. Sizinle tanışmak ve portföy danışmanlığı almak istiyorum.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ayşe Hanım ile Tanışın</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-secondary text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-bronze" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
