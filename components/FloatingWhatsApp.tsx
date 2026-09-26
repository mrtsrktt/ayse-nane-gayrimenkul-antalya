'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, X, Send, PhoneCall } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { text: 'Lüks villa portföyü hakkında bilgi almak istiyorum.' },
    { text: 'Antalya’daki mülkümü değerletip satmak istiyorum.' },
    { text: 'Vatandaşlığa uygun yatırım seçeneklerini öğrenmek istiyorum.' },
  ];

  const handleOpenWhatsApp = (customText?: string) => {
    const text = customText || 'Merhaba Ayşe Hanım, web sitenizden ulaşıyorum. Antalya portföyünüz hakkında bilgi alabilir miyim?';
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Pop-up Chat Card */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-88 max-w-sm bg-white rounded-xl shadow-[0_10px_35px_rgba(16,28,44,0.12)] border border-limestone overflow-hidden text-brand-text">
          {/* Header */}
          <div className="bg-ivory p-3.5 flex items-center justify-between border-b border-limestone/50">
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-limestone">
                <Image
                  src="/ayse-nane.jpg"
                  alt={siteConfig.agentName}
                  fill
                  sizes="40px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h4 className="text-xs font-serif font-bold text-ink leading-tight">{siteConfig.agentName}</h4>
                <p className="text-[11px] text-emerald-700 font-medium">WhatsApp Danışma Hattı</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-brand-muted hover:text-ink rounded-lg transition-colors"
              aria-label="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-3.5 bg-paper space-y-2.5 text-left">
            <div className="bg-white p-3 rounded-lg border border-limestone/40 text-xs text-brand-muted leading-relaxed">
              <p className="font-semibold text-ink mb-1">Merhaba 👋</p>
              <p>
                Antalya’da villa, rezidans ya da mülk değerleme süreçleriniz için doğrudan mesaj gönderebilirsiniz.
              </p>
            </div>

            {/* Quick Chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase font-bold text-brand-muted tracking-wider block">
                Hızlı Konu:
              </span>
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenWhatsApp(msg.text)}
                  className="w-full text-left p-2 rounded-lg bg-white hover:bg-ivory border border-limestone/50 text-[11px] text-brand-text transition-colors flex items-center justify-between"
                >
                  <span className="truncate">{msg.text}</span>
                  <Send className="w-3 h-3 text-bronze shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-2.5 bg-ivory border-t border-limestone/50 flex gap-2">
            <button
              onClick={() => handleOpenWhatsApp()}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Başlat</span>
            </button>

            <a
              href={`tel:${siteConfig.phone}`}
              className="p-2 rounded-lg bg-white border border-limestone hover:bg-ivory text-brand-text transition-colors"
              title="Telefonla Ara"
              aria-label="Telefonla ara"
            >
              <PhoneCall className="w-3.5 h-3.5 text-bronze" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Discreet Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(16,28,44,0.15)] transition-all hover:scale-102"
        aria-label="WhatsApp İletişim Hattı"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          WhatsApp
        </span>
      </button>
    </div>
  );
}
