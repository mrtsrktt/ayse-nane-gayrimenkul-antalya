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
    <section id="sss" className="py-24 bg-[#FAF9F5] text-slate-800 relative">
      <div className="editorial-divider mb-16" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFC596] text-[#7E6128] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
            Şeffaf Bilgilendirme & Hukuk
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0F1E36] tracking-tight leading-tight mb-4">
            Sıkça Sorulan <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">Hukuki & Mali Sorular</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">
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
                className="bg-white rounded-2xl border border-[#EAE6DF] overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(15,30,54,0.04)] hover:border-[#DFC596]"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF9F5] transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#B89047] shrink-0" />
                    <span className="text-sm sm:text-base font-serif font-bold text-[#0F1E36]">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#B89047] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-light">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center bg-white p-8 rounded-3xl border border-[#DFC596] shadow-sm">
          <p className="text-sm font-semibold text-[#0F1E36] mb-2">
            Sorunuzun cevabını bulamadınız mı?
          </p>
          <p className="text-xs text-slate-500 mb-6 font-light">
            Tapu, eksper, vergi veya vatandaşlık mevzuatıyla ilgili sorularınız için doğrudan Ayşe Hanım ile görüşebilirsiniz.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              'Merhaba Ayşe Hanım, web sitenizdeki SSS bölümünü okudum ve bir soru sormak istiyorum.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient-button text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md hover:scale-102 transition-transform"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ayşe Hanım’a WhatsApp’tan Sorun</span>
          </a>
        </div>
      </div>
    </section>
  );
}
