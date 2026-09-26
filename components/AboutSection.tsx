'use client';

import React from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  Award,
  CheckCircle,
  FileCheck,
  Compass,
  MessageCircle,
  HeartHandshake,
  Sparkles,
  Phone
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function AboutSection() {
  const pillars = [
    {
      title: 'Hukuki & Tapu Güvencesi',
      desc: 'Her portföyün tapu kaydı, ipotek, haciz durumu, iskân ve imar uygunluğu bağımsız hukukçularımızla taranır.',
    },
    {
      title: 'Doğru Emsal Değerleme',
      desc: 'Spekülatif değil, gerçek piyasa verileri ve güncel tapu satış rayiçleriyle belirlenen adil fiyatlandırma.',
    },
    {
      title: 'VIP Temsil & Gizlilik',
      desc: 'Yüksek bütçeli malikâne ve off-market portföy sahipleri için tam gizlilik ilkelerine bağlı danışmanlık.',
    },
    {
      title: 'Vatandaşlık & İkamet Desteği',
      desc: 'Uluslararası yatırımcılar için SPK onaylı ekspertiz ve Türk Vatandaşlığı süreçlerinde uçtan uca rehberlik.',
    },
  ];

  return (
    <section id="hakkimda" className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo & Badge Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Background luxury frame decoration */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold-500/20 via-transparent to-navy-900/10 rounded-3xl transform -rotate-2" />

            <div className="relative bg-white p-3 rounded-3xl shadow-2xl border border-slate-200">
              <div className="relative h-[460px] sm:h-[520px] w-full rounded-2xl overflow-hidden bg-navy-950">
                <Image
                  src="/ayse-nane.jpg"
                  alt={siteConfig.agentName}
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-gold-400/40 text-white backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl sm:text-3xl font-serif font-bold text-gold-300 block">
                        {siteConfig.experienceYears}+ Yıl
                      </span>
                      <span className="text-xs text-slate-200 font-medium">
                        Antalya Gayrimenkul Uzmanlığı
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center font-bold">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Certification Card */}
            <div className="mt-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center text-gold-700 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900">MYK Seviye 5 Lisanslı Sorumlu Emlak Danışmanı</p>
                <p className="text-slate-500">Antalya Emlakçılar Odası & TÜGEM Akredite Üyesi</p>
              </div>
            </div>
          </div>

          {/* Biography & Philosophy Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                Kişisel Marka & Vizyon
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                "Antalya’da Gayrimenkul Sahibi Olmak Bir Ev Değil, <br />
                <span className="text-gold-700">Ayrıcalıklı Bir Yaşam Biçimidir."</span>
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Merhaba, ben <strong>Ayşe Nane</strong>. 12 yılı aşkın süredir Akdeniz’in incisi Antalya’da; lüks villa, rezidans, panoramik sahil daireleri ve stratejik arsa yatırımları alanında danışmanlık veriyorum.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Gayrimenkul alım ve satımının sadece bir finansal işlem olmadığının; bir ailenin huzuru, geleceği ve birikiminin teminatı olduğunun bilincindeyim. Bu nedenle portföyüme dahil ettiğim her gayrimenkulü kendi aileme alıyormuşçasına titizlikle inceliyor; yasal güvenceden asla taviz vermiyorum.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm"
                >
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-1.5">
                    <CheckCircle className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>{pillar.title}</span>
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
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
                className="gold-gradient-button text-xs uppercase tracking-wider font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ayşe Hanım ile Tanışın</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="text-xs uppercase tracking-wider font-bold px-6 py-3.5 rounded-xl bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold-600" />
                <span>Hemen Telefonla Arayın</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
