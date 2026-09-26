'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Menu, X, ShieldCheck, Globe, Instagram, Lock } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'TR' | 'EN' | 'RU'>('TR');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portföy', href: '/#portfoy' },
    { name: 'Bölgeler', href: '/#bolgeler' },
    { name: 'Mülk Değerleme', href: '/#degerleme' },
    { name: 'Yatırım Getirisi', href: '/#yatirim-hesapla' },
    { name: 'Blog', href: '/blog' },
    { name: 'Ekip & CRM', href: '/ekip', isLock: true },
    { name: 'Hakkımda', href: '/#hakkimda' },
    { name: 'İletişim', href: '/#iletisim' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Warm Stone Bar */}
      <div className="bg-[#F4F1EA] text-[#475569] text-xs border-b border-[#EAE6DF] py-1.5 sm:py-2 px-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAE6DF] text-[#7E6128] text-[10px] sm:text-xs font-bold border border-[#DFC596]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B89047]" />
              MYK-5 Lisanslı Danışman
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:inline text-[#0F1E36] font-medium text-xs">
              Antalya Lüks Konut & Yatırım Danışmanlığı
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 ml-auto">
            {/* Instagram Profile */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#475569] hover:text-[#C13584] transition-colors"
              title="Ayşe Nane Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C13584]" />
              <span className="hidden md:inline font-medium text-xs">{siteConfig.instagramHandle}</span>
            </a>

            {/* Direct Call */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1 text-[#0F1E36] hover:text-[#B89047] font-semibold transition-colors text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#B89047]" />
              <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
              <span className="sm:hidden font-bold">Ara</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center gap-0.5 sm:gap-1 bg-white rounded-lg border border-[#EAE6DF] px-1 sm:px-1.5 py-0.5 shadow-sm">
              <Globe className="w-3 h-3 text-[#B89047]" />
              {(['TR', 'EN', 'RU'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded transition-all font-semibold ${
                    language === lang
                      ? 'bg-[#B89047] text-white'
                      : 'text-slate-500 hover:text-[#0F1E36]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 px-3 sm:px-8 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2.5 sm:py-3.5 border-b border-[#EAE6DF]'
            : 'bg-white/90 backdrop-blur-md py-3 sm:py-5 border-b border-[#EAE6DF]/60 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo with Ayşe Hanım Portrait */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-[#B89047] overflow-hidden shadow-sm group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/ayse-nane.jpg"
                alt="Ayşe Nane"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-2xl font-bold tracking-wider text-[#0F1E36] group-hover:text-[#B89047] transition-colors leading-tight">
                AYŞE NANE
              </span>
              <span className="block text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#B89047] font-semibold">
                Gayrimenkul & Yatırım
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-[#475569] hover:text-[#B89047] transition-colors relative py-1 flex items-center gap-1.5"
              >
                <span>{link.name}</span>
                {link.isLock && (
                  <span className="inline-flex items-center gap-1 text-[9px] bg-[#F4F1EA] text-[#7E6128] border border-[#DFC596] px-1.5 py-0.5 rounded-full font-bold">
                    <Lock className="w-2.5 h-2.5 text-[#B89047]" /> CRM
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#degerleme"
              className="text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded-xl border border-[#B89047] text-[#7E6128] bg-[#FDFCF9] hover:bg-[#F4F1EA] transition-all"
            >
              Mülk Değerleme
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                'Merhaba Ayşe Hanım, Antalya gayrimenkul portföyünüz ve danışmanlık hizmetleriniz hakkında bilgi almak istiyorum.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient-button text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-md hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Hattı</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#0F1E36] hover:bg-[#F4F1EA] transition-colors"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-[#EAE6DF] px-5 py-5 transition-all shadow-2xl">
          {/* Mobile Drawer Consultant Spotlight */}
          <div className="flex items-center gap-3.5 p-3.5 bg-[#FAF9F5] rounded-2xl border border-[#DFC596] mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#B89047] shrink-0">
              <Image
                src="/ayse-nane.jpg"
                alt="Ayşe Nane"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-sm text-[#0F1E36]">Ayşe Nane</span>
                <span className="text-[9px] bg-[#F4F1EA] text-[#7E6128] border border-[#DFC596] px-1.5 py-0.5 rounded-full font-bold">
                  MYK-5
                </span>
              </div>
              <p className="text-[11px] text-[#7E6128] font-medium truncate">
                Lüks Konut & Yatırım Danışmanı
              </p>
            </div>
            <a
              href={`tel:${siteConfig.phone}`}
              className="p-2.5 rounded-xl bg-white border border-[#EAE6DF] text-[#0F1E36] hover:bg-[#F4F1EA] shadow-sm shrink-0"
              title="Telefonla Ara"
            >
              <Phone className="w-4 h-4 text-[#B89047]" />
            </a>
          </div>

          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#0F1E36] hover:text-[#B89047] py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                {link.isLock && (
                  <span className="inline-flex items-center gap-1 text-[10px] bg-[#F4F1EA] text-[#7E6128] border border-[#DFC596] px-2 py-0.5 rounded-full font-bold">
                    <Lock className="w-2.5 h-2.5" /> Danışman Portalı
                  </span>
                )}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#degerleme"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center text-xs uppercase tracking-wider font-bold px-4 py-3 rounded-xl border border-[#B89047] text-[#7E6128] bg-[#FDFCF9]"
              >
                Ücretsiz Mülk Değerleme Formu
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  'Merhaba Ayşe Hanım, portföyünüz hakkında bilgi almak istiyorum.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-button text-center text-xs uppercase tracking-wider font-bold px-4 py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp İle İletişime Geç</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
