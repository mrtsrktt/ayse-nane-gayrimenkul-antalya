'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, X, Send, Sparkles, PhoneCall } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { text: 'Lüks villa portföyü hakkında bilgi almak istiyorum.' },
    { text: 'Antalya’daki mülkümü değerletip satmak istiyorum.' },
    { text: 'Yatırım ve Türk Vatandaşlığı şartlarını öğrenmek istiyorum.' },
  ];

  const handleOpenWhatsApp = (customText?: string) => {
    const text = customText || 'Merhaba Ayşe Hanım, web sitenizden ulaşıyorum. Portföyünüz hakkında bilgi alabilir miyim?';
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Pop-up Chat Card */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-96 max-w-sm bg-white rounded-3xl shadow-[0_20px_50px_rgba(15,30,54,0.18)] border border-[#DFC596] overflow-hidden animate-fade-in text-slate-800">
          {/* Header */}
          <div className="bg-[#FAF9F5] p-4 flex items-center justify-between border-b border-[#EAE6DF]">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#B89047]">
                <Image
                  src="/ayse-nane.jpg"
                  alt={siteConfig.agentName}
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F1E36] leading-tight">{siteConfig.agentName}</h4>
                <p className="text-[11px] text-emerald-600 font-semibold">Şu an çevrim içi</p>
                <p className="text-[10px] text-slate-400">Ortalama 5 dk içinde yanıtlar</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-400 hover:text-[#0F1E36] rounded-full transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-white space-y-3">
            <div className="bg-[#FAF9F5] p-3.5 rounded-2xl rounded-tl-sm border border-[#EAE6DF] shadow-sm text-xs text-slate-700 leading-relaxed">
              <p className="font-bold text-[#0F1E36] mb-1">Merhaba! 👋</p>
              <p>
                Antalya’da lüks villa, deniz manzaralı rezidans veya mülkünüzün değerleme ve satışı konusunda size nasıl yardımcı olabilirim?
              </p>
            </div>

            {/* Quick Chips */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] uppercase font-bold text-[#7E6128] tracking-wider">
                Hızlı Konu Seçin:
              </p>
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenWhatsApp(msg.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-[#FAF9F5] hover:bg-[#F4F1EA] border border-[#EAE6DF] hover:border-[#B89047] text-xs text-slate-700 transition-colors flex items-center justify-between"
                >
                  <span className="truncate">{msg.text}</span>
                  <Send className="w-3 h-3 text-[#B89047] shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-3 bg-[#FAF9F5] border-t border-[#EAE6DF] flex gap-2">
            <button
              onClick={() => handleOpenWhatsApp()}
              className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 text-white font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Başlat</span>
            </button>
            <a
              href={`tel:${siteConfig.phone}`}
              className="p-2.5 rounded-xl bg-white border border-[#EAE6DF] hover:bg-[#F4F1EA] text-[#0F1E36] transition-colors shadow-sm"
              title="Telefonla Ara"
            >
              <PhoneCall className="w-4 h-4 text-[#B89047]" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-3 sm:px-5 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(5,150,105,0.4)] hover:shadow-[0_15px_35px_rgba(5,150,105,0.6)] transition-all hover:scale-105 active:scale-95"
        aria-label="WhatsApp İletişim Hattı"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-300 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full" />
        </div>
        <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider">
          Ayşe Hanım ile İletişim
        </span>
      </button>
    </div>
  );
}
