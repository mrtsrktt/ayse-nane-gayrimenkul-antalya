'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { faqData } from '@/data/faq';
import { siteConfig } from '@/data/siteConfig';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="sss" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Şeffaf Bilgilendirme
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Antalya’da gayrimenkul alım, satım, tapu devirleri ve vatandaşlık süreçleri hakkında merak edilenler.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p className="mb-2">{item.answer}</p>
                    <span className="inline-block text-[11px] font-semibold text-gold-700 bg-gold-50 px-2.5 py-0.5 rounded border border-gold-200">
                      Kategori: {item.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions banner */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-slate-200">
          <p className="text-sm font-semibold text-slate-800 mb-1">
            Farklı bir konuda danışmanlığa mı ihtiyacınız var?
          </p>
          <p className="text-xs text-slate-500 mb-4">
            Ayşe Nane ile doğrudan görüşerek hukuki ve bölgesel tüm sorularınıza yanıt alabilirsiniz.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              'Merhaba Ayşe Hanım, gayrimenkul alım/satım süreciyle ilgili bir sorum olacaktı.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient-button text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp’tan Soru Sorun</span>
          </a>
        </div>
      </div>
    </section>
  );
}
