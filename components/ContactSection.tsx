'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Video,
  Coffee,
  Building
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '@/data/siteConfig';

export default function ContactSection() {
  const [appointment, setAppointment] = useState({
    name: '',
    phone: '',
    type: 'coffee',
    date: '',
    time: '14:00',
    topic: 'purchase',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({ particleCount: 70, spread: 60 });
    } catch {}
    setSubmitted(true);
  };

  return (
    <section id="iletisim" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Bize Ulaşın
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            Ayşe Nane ile Doğrudan İletişime Geçin
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Antalya’daki hayalinizdeki mülkü keşfetmek veya portföyünüzü en doğru değerle satışa çıkarmak için kahve eşliğinde tanışalım.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="bg-navy-950 text-white p-8 rounded-3xl border border-gold-500/30 shadow-xl space-y-6">
              <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                <span>İletişim & Ofis Bilgileri</span>
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-semibold text-gold-400">Ofis Adresi</span>
                    <p className="text-slate-200 font-medium leading-relaxed mt-0.5">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-semibold text-gold-400">Telefon Hattı</span>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-slate-200 font-bold hover:text-gold-300 transition-colors mt-0.5 block text-base"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-semibold text-emerald-400">WhatsApp Danışma</span>
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-200 font-medium hover:text-emerald-300 transition-colors mt-0.5 block"
                    >
                      Hızlı Yanıt İçin Tıklayın
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-semibold text-gold-400">E-Posta</span>
                    <p className="text-slate-200 font-medium mt-0.5">
                      {siteConfig.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-semibold text-gold-400">Çalışma Saatleri</span>
                    <p className="text-slate-200 font-medium mt-0.5">
                      Haftanın 7 Günü: 09:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Mock Card */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900 text-sm mb-1">Antalya / Muratpaşa Lokasyonu</p>
                <p>Şirinyalı Falezler bölgesinde, havalimanına 15 dk mesafede.</p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold shrink-0 shadow-sm"
              >
                Haritada Aç
              </a>
            </div>
          </div>

          {/* Right Appointment Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  Randevu Talebiniz Alındı!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Teşekkürler Sayın <strong>{appointment.name}</strong>. Ayşe Hanım belirtilen randevu tarihi ve saati için ajandasını kontrol edip WhatsApp veya telefonla randevu teyidini yapacaktır.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-gold-700 hover:underline"
                >
                  Yeni bir randevu talebi oluştur
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-200 pb-4 mb-2">
                  <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gold-600" /> Danışmanlık & Randevu Talebi
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Görüşme şeklinizi ve size uygun zamanı seçin, randevunuzu teyit edelim.
                  </p>
                </div>

                {/* Appointment Type Selector */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-2">
                    Görüşme Şekli
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setAppointment({ ...appointment, type: 'coffee' })}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                        appointment.type === 'coffee'
                          ? 'border-gold-500 bg-gold-50 text-gold-900 shadow-sm'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Coffee className="w-4 h-4 text-gold-600" />
                      <span>Ofiste / Kahve</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAppointment({ ...appointment, type: 'property' })}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                        appointment.type === 'property'
                          ? 'border-gold-500 bg-gold-50 text-gold-900 shadow-sm'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Building className="w-4 h-4 text-gold-600" />
                      <span>Mülk Başında</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAppointment({ ...appointment, type: 'online' })}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                        appointment.type === 'online'
                          ? 'border-gold-500 bg-gold-50 text-gold-900 shadow-sm'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Video className="w-4 h-4 text-gold-600" />
                      <span>Online (Meet/Zoom)</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Adınız Soyadınız"
                      value={appointment.name}
                      onChange={(e) => setAppointment({ ...appointment, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                      Telefon Numaranız *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0532 000 00 00"
                      value={appointment.phone}
                      onChange={(e) => setAppointment({ ...appointment, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                      Tercih Edilen Tarih
                    </label>
                    <input
                      type="date"
                      value={appointment.date}
                      onChange={(e) => setAppointment({ ...appointment, date: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                      Saat Aralığı
                    </label>
                    <select
                      value={appointment.time}
                      onChange={(e) => setAppointment({ ...appointment, time: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-gold-500 cursor-pointer"
                    >
                      <option value="10:00">10:00 - 12:00 (Sabah)</option>
                      <option value="14:00">14:00 - 16:00 (Öğleden Sonra)</option>
                      <option value="17:00">17:00 - 19:00 (Akşamüstü)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                      İlgilenilen Konu
                    </label>
                    <select
                      value={appointment.topic}
                      onChange={(e) => setAppointment({ ...appointment, topic: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-gold-500 cursor-pointer"
                    >
                      <option value="purchase">Lüks Villa / Konut Alımı</option>
                      <option value="sale">Mülkümü Satmak İstiyorum</option>
                      <option value="citizenship">Vatandaşlık & Yatırım</option>
                      <option value="land">Arsa & Proje Geliştirme</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Varsa Notunuz / Sorunuz
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Görüşmek istediğiniz özel bir portföy veya bölge varsa belirtebilirsiniz..."
                    value={appointment.message}
                    onChange={(e) => setAppointment({ ...appointment, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-gold-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gold-gradient-button text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Randevu Talebini Onayla</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
