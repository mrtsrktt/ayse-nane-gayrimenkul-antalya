'use client';

import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { faqData } from '@/data/faq';
import { siteConfig } from '@/data/siteConfig';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="sss" className="py-20 lg:py-28 bg-ivory/30 border-t border-limestone/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-bronze" />
            <span className="text-xs font-semibold uppercase tracking-widest text-bronze">
              Sıkça Sorulan Sorular
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink leading-tight mb-4">
            Hukuki ve Mali Süreçler
          </h2>

          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
            Antalya’da gayrimenkul alımı, tapu devirleri, değerleme, vatandaşlık kriterleri ve danışmanlık hizmetlerine dair temel bilgiler.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-limestone/60 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-ivory/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-serif font-bold text-ink">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-bronze shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-brand-muted leading-relaxed border-t border-limestone/30 font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 p-6 bg-white rounded-xl border border-limestone/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-serif font-bold text-base text-ink">
              Özel bir mülk sorunuz veya danışmanlık talebiniz mi var?
            </p>
            <p className="text-xs text-brand-muted mt-0.5">
              Tapu, ekspertiz ve yasal süreçler hakkında Ayşe Nane ile doğrudan görüşebilirsiniz.
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              'Merhaba Ayşe Hanım, web sitenizdeki SSS bölümünü inceledim ve özel bir konuda danışmak istiyorum.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp ile Sorun</span>
          </a>
        </div>
      </div>
    </section>
  );
}
