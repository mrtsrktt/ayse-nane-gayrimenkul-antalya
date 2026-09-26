'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Send, Check } from 'lucide-react';
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappText = `Merhaba Ayşe Hanım, web sitenizden iletişim formu gönderdim:
- Ad Soyad: ${formData.fullName}
- Telefon: ${formData.phone}
- Konu: ${formData.subject}
- Mesaj: ${formData.message || 'Belirtilmedi'}`;

    const targetUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(targetUrl, '_blank');
    }, 600);
  };

  return (
    <section id="iletisim" className="py-20 lg:py-28 bg-paper border-t border-limestone/50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-px bg-bronze" />
                <span className="text-xs font-semibold uppercase tracking-widest text-bronze">
                  İletişim & Birebir Randevu
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink leading-tight mb-4">
                Antalya’da Hayalinizdeki Mülk İçin İletişime Geçin
              </h2>

              <p className="text-sm text-brand-muted leading-relaxed font-normal">
                Satın alma, satış veya portföy değerleme talepleriniz için ofisimizi ziyaret edebilir ya da doğrudan iletişime geçebilirsiniz.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-4 pt-2 border-t border-limestone/40">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-start gap-3.5 group text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-ivory border border-limestone/60 flex items-center justify-center shrink-0 group-hover:border-bronze transition-colors">
                  <Phone className="w-4 h-4 text-bronze" />
                </div>
                <div>
                  <span className="text-[11px] text-brand-muted block font-medium">Telefon & Doğrudan Hat</span>
                  <span className="text-sm font-semibold text-ink group-hover:text-bronze transition-colors">
                    {siteConfig.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 group text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-ivory border border-limestone/60 flex items-center justify-center shrink-0 group-hover:border-emerald-600 transition-colors">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <span className="text-[11px] text-brand-muted block font-medium">WhatsApp Danışma Hattı</span>
                  <span className="text-sm font-semibold text-ink group-hover:text-emerald-700 transition-colors">
                    Hemen Mesaj Gönderin
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-3.5 text-left">
                <div className="w-10 h-10 rounded-lg bg-ivory border border-limestone/60 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-bronze" />
                </div>
                <div>
                  <span className="text-[11px] text-brand-muted block font-medium">Ofis Lokasyonu</span>
                  <span className="text-xs text-brand-text leading-relaxed block mt-0.5">
                    {siteConfig.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-left">
                <div className="w-10 h-10 rounded-lg bg-ivory border border-limestone/60 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-bronze" />
                </div>
                <div>
                  <span className="text-[11px] text-brand-muted block font-medium">E-Posta</span>
                  <span className="text-xs text-brand-text block mt-0.5">
                    {siteConfig.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-xl border border-limestone/60 shadow-sm text-left">
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-ink">
                  Danışmanlık Talep Formu
                </h3>
                <p className="text-xs text-brand-muted mt-1">
                  Bilgilerinizi bırakın; aynı gün içinde telefonla geri dönüş sağlayalım.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-brand-text uppercase mb-1">
                      Adınız ve Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ad Soyad"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-ivory/50 border border-limestone/70 rounded-lg p-2.5 text-xs text-ink placeholder-brand-muted focus:outline-none focus:border-bronze"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-brand-text uppercase mb-1">
                      Telefon Numaranız *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+90 5XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-ivory/50 border border-limestone/70 rounded-lg p-2.5 text-xs text-ink placeholder-brand-muted focus:outline-none focus:border-bronze"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-brand-text uppercase mb-1">
                      E-Posta Adresi
                    </label>
                    <input
                      type="email"
                      placeholder="ornek@alanadi.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-ivory/50 border border-limestone/70 rounded-lg p-2.5 text-xs text-ink placeholder-brand-muted focus:outline-none focus:border-bronze"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-brand-text uppercase mb-1">
                      Danışmanlık Konusu
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-ivory/50 border border-limestone/70 rounded-lg p-2.5 text-xs text-ink focus:outline-none focus:border-bronze cursor-pointer"
                    >
                      <option value="Portföy Bilgisi Almak İstiyorum">Portföy Bilgisi Almak İstiyorum</option>
                      <option value="Mülkümü Satmak / Değerletmek İstiyorum">Mülkümü Satmak / Değerletmek İstiyorum</option>
                      <option value="Yatırım & Vatandaşlık Danışmanlığı">Yatırım & Vatandaşlık Danışmanlığı</option>
                      <option value="Bölge / İmar İncelemesi">Bölge / İmar İncelemesi</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-brand-text uppercase mb-1">
                    Mesajınız veya Tercih Ettiğiniz Mülk Kriterleri
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Bütçe aralığınız, tercih ettiğiniz bölge veya özel sorularınız..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-ivory/50 border border-limestone/70 rounded-lg p-2.5 text-xs text-ink placeholder-brand-muted focus:outline-none focus:border-bronze"
                  />
                </div>

                <div className="flex items-start gap-2 pt-1 text-[11px] text-brand-muted">
                  <input type="checkbox" required id="contact-kvkk" className="mt-1 accent-bronze cursor-pointer" />
                  <label htmlFor="contact-kvkk" className="cursor-pointer">
                    İletişim bilgilerimin danışmanlık talebi doğrultusunda işlenmesini ve{' '}
                    <Link href="/kvkk" target="_blank" className="text-bronze underline font-semibold">
                      KVKK Aydınlatma Metni
                    </Link>
                    &apos;ni okuduğumu kabul ediyorum.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-3.5 text-xs font-bold"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Talebiniz Hazırlanıyor...' : 'Danışmanlık Talebini İlet'}</span>
                </button>

                {submitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800">
                    Talebiniz hazırlandı ve WhatsApp üzerinden Ayşe Hanım&apos;a iletildi.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
