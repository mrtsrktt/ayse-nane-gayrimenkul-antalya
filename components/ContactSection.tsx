'use client';

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Linkedin,
  Calendar,
  Send,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '@/data/siteConfig';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: 'Portföy Bilgisi Almak İstiyorum',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // safe fallback
    }
    setSubmitted(true);
  };

  return (
    <section id="iletisim" className="py-24 bg-[#FAF9F5] text-slate-800 relative">
      <div className="editorial-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFC596] text-[#7E6128] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
            Birebir Danışmanlık & Randevu
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0F1E36] tracking-tight leading-tight mb-4">
            Antalya’da Hayalinizdeki Mülk İçin <br />
            <span className="gold-gradient-text italic font-normal">İletişime Geçin</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">
            Portföy sunumu, yerinde mülk keşfi veya yatırım fizibilitesi için doğrudan Ayşe Nane ile randevu oluşturun.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Contact Information Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#EAE6DF] shadow-[0_4px_20px_rgba(15,30,54,0.04)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F4F1EA] border border-[#DFC596] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#B89047]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Telefon & WhatsApp Hattı
                  </span>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-lg font-serif font-bold text-[#0F1E36] hover:text-[#B89047] transition-colors"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Haftanın 7 günü 09:00 - 20:00</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#EAE6DF] shadow-[0_4px_20px_rgba(15,30,54,0.04)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F4F1EA] border border-[#DFC596] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#B89047]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    E-Posta Adresi
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm font-semibold text-[#0F1E36] hover:text-[#B89047] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">24 saat içinde yanıt verilir</p>
                </div>
              </div>
            </div>

            {/* Office Location Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#EAE6DF] shadow-[0_4px_20px_rgba(15,30,54,0.04)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F4F1EA] border border-[#DFC596] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#B89047]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Ofis Konumu
                  </span>
                  <p className="text-sm font-semibold text-[#0F1E36]">{siteConfig.address}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Önceden randevu alarak ziyaret edebilirsiniz</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                'Merhaba Ayşe Hanım, Antalya gayrimenkul portföyünüz hakkında görüşmek istiyorum.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-between shadow-lg hover:opacity-95 transition-opacity"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                <div>
                  <p className="text-sm font-bold">Hızlı WhatsApp İletişimi</p>
                  <p className="text-xs text-emerald-100">Doğrudan Ayşe Nane ile mesajlaşın</p>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-lg">
                Yazın →
              </span>
            </a>
          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#DFC596] rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,30,54,0.08)]">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0F1E36]">Mesajınız Başarıyla İletildi!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Sayın <strong>{formData.fullName}</strong>, talebiniz alınmıştır. Ayşe Nane en kısa sürede sizinle iletişime geçecektir.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-[#B89047] hover:underline"
                  >
                    Yeni bir mesaj gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-xl font-serif font-bold text-[#0F1E36]">
                      Görüşme & Randevu Talep Formu
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-light">
                      Bilgilerinizi bırakın, ihtiyaçlarınıza en uygun portföy seçkisiyle size dönelim.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Adınız & Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: Mehmet Yılmaz"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-3 text-xs text-[#0F1E36] placeholder-slate-400 focus:outline-none focus:border-[#B89047]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Telefon Numaranız *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0505 172 52 84"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-3 text-xs text-[#0F1E36] placeholder-slate-400 focus:outline-none focus:border-[#B89047]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Görüşme Konusu
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-3 text-xs text-[#0F1E36] focus:outline-none focus:border-[#B89047] cursor-pointer"
                      >
                        <option value="Portföy Bilgisi Almak İstiyorum">Portföy Bilgisi Almak İstiyorum</option>
                        <option value="Mülkümü Satmak / Değerleme İstiyorum">Mülkümü Satmak İstiyorum</option>
                        <option value="Yatırım & Kira Getirisi Danışmanlığı">Yatırım Danışmanlığı</option>
                        <option value="Türk Vatandaşlığı / Hukuki Danışmanlık">Türk Vatandaşlığı Mevzuatı</option>
                        <option value="Diğer">Diğer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Tercih Edilen Randevu Tarihi
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-3 text-xs text-[#0F1E36] focus:outline-none focus:border-[#B89047]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mesajınız veya İlgilendiğiniz Kriterler
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Bütçe aralığınız, tercih ettiğiniz bölge (Döşemealtı, Lara, Kaş...) veya özel talepleriniz..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-[#EAE6DF] rounded-xl px-3.5 py-2.5 text-xs text-[#0F1E36] placeholder-slate-400 focus:outline-none focus:border-[#B89047] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gold-gradient-button text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg mt-2 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Randevu Talebini Gönder</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center font-light">
                    Paylaştığınız bilgiler sadece sizinle iletişime geçmek amacıyla kullanılır ve gizli tutulur.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
