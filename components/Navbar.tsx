'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Menu, X, ShieldCheck, Globe, Compass, Instagram } from 'lucide-react';
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
    { name: 'Portföy', href: '#portfoy' },
    { name: 'Bölgeler', href: '#bolgeler' },
    { name: 'Mülk Değerleme', href: '#degerleme' },
    { name: 'Yatırım Getirisi', href: '#yatirim-hesapla' },
    { name: 'Hakkımda', href: '#hakkimda' },
    { name: 'S.S.S.', href: '#sss' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Gold Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs border-b border-gold-500/20 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-300 font-medium border border-gold-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              MYK Seviye 5 Lisanslı Danışman
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">
              Antalya Lüks Konut & Yatırım Danışmanlığı
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Instagram Profile */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-pink-400 transition-colors"
              title="Ayşe Nane Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span className="hidden md:inline font-medium">{siteConfig.instagramHandle}</span>
            </a>

            {/* Direct Call */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span className="font-medium hidden sm:inline">{siteConfig.phoneDisplay}</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-slate-900/80 rounded border border-slate-700/60 px-1.5 py-0.5">
              <Globe className="w-3 h-3 text-gold-400" />
              {(['TR', 'EN', 'RU'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`text-[11px] px-1.5 py-0.5 rounded transition-all ${
                    language === lang
                      ? 'bg-gold-500 text-navy-950 font-bold'
                      : 'text-slate-400 hover:text-white'
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
        className={`transition-all duration-300 px-4 sm:px-8 ${
          scrolled
            ? 'bg-navy-950/95 backdrop-blur-md shadow-2xl py-3 border-b border-gold-500/20'
            : 'bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo with Ayşe Hanım Portrait */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full border-2 border-gold-400 overflow-hidden shadow-md group-hover:border-gold-300 transition-colors shrink-0">
              <Image
                src="/ayse-nane.jpg"
                alt="Ayşe Nane"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-gold-200 transition-colors">
                AYŞE NANE
              </span>
              <span className="block text-[10px] tracking-[0.25em] uppercase text-gold-400 font-medium">
                Gayrimenkul & Yatırım
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-gold-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#degerleme"
              className="text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded border border-gold-500/50 text-gold-300 hover:bg-gold-500/10 transition-all"
            >
              Mülk Değerleme
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                'Merhaba Ayşe Hanım, Antalya gayrimenkul portföyünüz ve danışmanlık hizmetleriniz hakkında bilgi almak istiyorum.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient-button text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Hattı</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/98 backdrop-blur-xl border-b border-gold-500/20 px-6 py-6 transition-all shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-gold-300 py-1 border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#degerleme"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center text-xs uppercase tracking-wider font-semibold px-4 py-3 rounded border border-gold-500/50 text-gold-300 bg-gold-500/10"
              >
                Ücretsiz Mülk Değerleme Formu
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  'Merhaba Ayşe Hanım, portföyünüz hakkında bilgi almak istiyorum.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-button text-center text-xs uppercase tracking-wider font-bold px-4 py-3 rounded flex items-center justify-center gap-2"
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
