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
  Lock
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
    <section id="hakkimda" className="py-28 bg-[#070A12] text-white relative overflow-hidden">
      <div className="editorial-divider mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo & Badge Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold-500/20 via-transparent to-blue-600/10 rounded-3xl transform -rotate-1 blur-xl pointer-events-none" />

            <div className="relative bg-[#0B1120] p-4 rounded-3xl border-2 border-gold-500/40 shadow-2xl">
              <div className="relative h-[480px] sm:h-[540px] w-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/ayse-nane.jpg"
                  alt={siteConfig.agentName}
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-transparent to-transparent opacity-85" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl luxury-glass border border-gold-400/40 text-white backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl sm:text-3xl font-serif font-bold text-gold-300 block">
                        {siteConfig.experienceYears}+ Yıl
                      </span>
                      <span className="text-xs text-slate-200 font-medium">
                        Antalya Gayrimenkul Uzmanlığı
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center font-bold shadow-lg">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Accreditation Card */}
            <div className="mt-4 p-4 rounded-2xl bg-[#0B1120] border border-white/10 shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">MYK Seviye 5 Lisanslı Sorumlu Emlak Danışmanı</p>
                <p className="text-slate-400">Antalya Emlakçılar Odası & TÜGEM Akredite Üyesi</p>
              </div>
            </div>
          </div>

          {/* Biography & Philosophy Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full luxury-glass text-gold-300 text-xs font-semibold tracking-widest uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                Kişisel Marka & Felsefe
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                "Antalya’da Gayrimenkul Satın Almak Bir Ev Değil, <br />
                <span className="gold-gradient-text italic font-normal">Ayrıcalıklı Bir Yaşam Biçimidir."</span>
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Merhaba, ben <strong className="text-white font-medium">Ayşe Nane</strong>. 12 yılı aşkın süredir Akdeniz’in incisi Antalya’da; lüks villa, rezidans, panoramik sahil daireleri ve stratejik arsa yatırımları alanında danışmanlık veriyorum.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Gayrimenkul alım ve satımının sadece bir finansal işlem olmadığının; bir ailenin huzuru, geleceği ve birikiminin teminatı olduğunun bilincindeyim. Bu nedenle portföyüme dahil ettiğim her gayrimenkulü kendi aileme alıyormuşçasına titizlikle inceliyor; yasal güvenceden asla taviz vermiyorum.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#0B1120] border border-white/10 hover:border-gold-500/40 transition-colors shadow-md"
                >
                  <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{pillar.title}</span>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  'Merhaba Ayşe Hanım, web sitenizden ulaşıyorum. Sizinle tanışmak ve portföy danışmanlığı almak istiyorum.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-button text-xs uppercase tracking-wider font-bold px-7 py-4 rounded-xl shadow-xl flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ayşe Hanım ile Tanışın</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="text-xs uppercase tracking-wider font-bold px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Hemen Telefonla Arayın</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
