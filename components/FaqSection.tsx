'use client';

import React, { useState } from 'react';
import { ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { faqData } from '@/data/faq';
import { siteConfig } from '@/data/siteConfig';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="sss" className="py-28 bg-[#070A12] text-white relative">
      <div className="editorial-divider mb-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full luxury-glass text-gold-300 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Şeffaf Bilgilendirme & Hukuk
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
            Sıkça Sorulan <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">Hukuki & Mali Sorular</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Antalya’da gayrimenkul alım, satım, tapu devirleri, değerleme ve vatandaşlık süreçleri hakkında merak edilenler.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="luxury-glass rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-gold-500/30"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-400 shrink-0" />
                    <span className="text-sm sm:text-base font-serif font-bold text-white">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 bg-slate-900/50">
                    <p className="mb-3">{item.answer}</p>
                    <span className="inline-block text-[11px] font-semibold text-gold-300 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
                      Kategori: {item.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* More questions banner */}
        <div className="mt-14 text-center luxury-glass p-8 rounded-3xl border border-gold-500/30">
          <p className="text-base font-serif font-bold text-white mb-2">
            Farklı bir konuda özel danışmanlığa mı ihtiyacınız var?
          </p>
          <p className="text-xs text-slate-400 mb-6">
            Ayşe Nane ile doğrudan görüşerek hukuki, finansal ve imar süreçleri hakkındaki tüm sorularınıza yanıt alabilirsiniz.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              'Merhaba Ayşe Hanım, gayrimenkul alım/satım süreciyle ilgili bir sorum olacaktı.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient-button text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp’tan Doğrudan Sorun</span>
          </a>
        </div>
      </div>
    </section>
  );
}
