'use client';

import React from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  Award,
  CheckCircle,
  MessageCircle,
  Sparkles,
  Phone,
  FileCheck2,
  Lock,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function AboutSection() {
  const pillars = [
    {
      title: 'Hukuki & Tapu Güvencesi',
      desc: 'Her mülkün tapu kaydı, ipotek, haciz durumu, iskân ve imar uygunluğu bağımsız hukuk müşavirlerimizce denetlenir.',
    },
    {
      title: 'Doğru Emsal Değerleme',
      desc: 'Spekülatif değil; güncel tapu satış rayiçleri ve piyasa gerçeklerine dayalı adil, yüksek getirili fiyatlandırma.',
    },
    {
      title: 'VIP Temsil & Gizlilik',
      desc: 'Off-market malikâneler ve yüksek bütçeli yatırımcılar için tam gizlilik ilkelerine bağlı danışmanlık.',
    },
    {
      title: 'Vatandaşlık & İkamet Desteği',
      desc: 'Uluslararası yatırımcılar için SPK onaylı ekspertiz ve Türk Vatandaşlığı süreçlerinde anahtar teslim rehberlik.',
    },
  ];

  return (
    <section id="hakkimda" className="py-24 bg-[#FAF9F5] text-slate-800 relative overflow-hidden">
      <div className="editorial-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo & Badge Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white p-4 rounded-3xl border border-[#DFC596] shadow-[0_20px_50px_rgba(15,30,54,0.08)]">
              <div className="relative h-[480px] sm:h-[540px] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/ayse-nane.jpg"
                  alt={siteConfig.agentName}
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/90 via-transparent to-transparent opacity-85" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#DFC596] text-[#0F1E36] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-serif font-bold text-[#7E6128]">12+ Yıl</p>
                      <p className="text-xs font-semibold text-[#0F1E36]">Antalya Gayrimenkul Deneyimi</p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-[#F4F1EA] border border-[#DFC596] flex items-center justify-center">
                      <Award className="w-5 h-5 text-[#B89047]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Biography & Pillars Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFC596] text-[#7E6128] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
                Kişisel Vizyon & Lisanslı Uzmanlık
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0F1E36] tracking-tight leading-tight">
                Antalya’da Gayrimenkulü <br />
                <span className="gold-gradient-text italic font-normal">Güven ve Prestijle</span> Birleştiren Vizyon
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mt-4 font-light">
                <p>
                  Ben <strong>Ayşe Nane</strong>. 12 yılı aşkın süredir Akdeniz’in kalbi Antalya’da, seçkin ailelerin ve küresel yatırımcıların güvenle gayrimenkul edinmelerine rehberlik ediyorum.
                </p>
                <p>
                  MYK Seviye 5 lisansım, ATSO ve TÜGEM tescillerimle; spekülatif vaatler yerine doğrulanmış emsal satış verileri, şeffaf tapu denetimi ve doğru fiyatlandırma ilkeleriyle hareket ediyorum. Döşemealtı’nın müstakil villalarından Lara falez rezidanslarına, Kaş-Kalkan’ın yüksek kira getirili malikânelerinden Belek golf projelerine kadar tüm süreçlerde bizzat yanınızdayım.
                </p>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#EAE6DF] shadow-[0_4px_20px_rgba(15,30,54,0.04)] hover:border-[#DFC596] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-[#B89047]" />
                    <h3 className="text-sm font-bold text-[#0F1E36]">{pillar.title}</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA & Phone Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  'Merhaba Ayşe Hanım, web sitenizi inceledim. Sizinle tanışmak ve portföy danışmanlığı almak istiyorum.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-button text-xs uppercase tracking-wider font-bold px-6 py-4 rounded-xl flex items-center gap-2 shadow-md hover:scale-102 transition-transform"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ayşe Hanım ile Tanışın</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="text-xs font-bold text-[#0F1E36] bg-white hover:bg-[#F4F1EA] px-6 py-4 rounded-xl border border-[#EAE6DF] shadow-sm flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B89047]" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
