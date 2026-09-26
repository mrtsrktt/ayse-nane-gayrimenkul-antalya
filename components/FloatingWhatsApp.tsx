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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fade-in text-slate-800">
          {/* Header */}
          <div className="bg-navy-950 text-white p-4 flex items-center justify-between border-b border-gold-500/20">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400">
                <Image
                  src="/ayse-nane.jpg"
                  alt={siteConfig.agentName}
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-navy-950" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">{siteConfig.agentName}</h4>
                <p className="text-[11px] text-emerald-400 font-medium">Şu an çevrim içi</p>
                <p className="text-[10px] text-slate-400">Ortalama 5 dk içinde yanıtlar</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-full transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm border border-slate-200 shadow-sm text-xs text-slate-700 leading-relaxed">
              <p className="font-semibold text-slate-900 mb-1">Merhaba! 👋</p>
              <p>
                Antalya’da lüks villa, deniz manzaralı rezidans veya mülkünüzün değerleme ve satışı konusunda size nasıl yardımcı olabilirim?
              </p>
            </div>

            {/* Quick Chips */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Hızlı Seçenekler:
              </p>
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenWhatsApp(msg.text)}
                  className="w-full text-left p-2 rounded-xl bg-white hover:bg-gold-50 border border-slate-200 hover:border-gold-300 text-xs text-slate-800 transition-colors flex items-center justify-between"
                >
                  <span className="truncate">{msg.text}</span>
                  <Send className="w-3 h-3 text-gold-600 shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-3 bg-white border-t border-slate-200 flex gap-2">
            <button
              onClick={() => handleOpenWhatsApp()}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Sohbeti Başlat</span>
            </button>
            <a
              href={`tel:${siteConfig.phone}`}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
              title="Telefonla Ara"
            >
              <PhoneCall className="w-4 h-4 text-gold-600" />
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="WhatsApp Canlı Danışma"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>

        <MessageCircle className="w-6 h-6 text-white" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Ayşe Hanım’a WhatsApp’tan Yazın
        </span>
      </button>
    </div>
  );
}
