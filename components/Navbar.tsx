'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'TR' | 'EN' | 'RU'>('TR');
  const [langMenuOpen, setLangMenuOpen] = useState(false);

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
    { name: 'Hizmetler', href: '/#degerleme' },
    { name: 'Ekip & CRM', href: '/ekip', isCrm: true },
    { name: 'Hakkımda', href: '/#hakkimda' },
    { name: 'İçgörüler', href: '/blog' },
    { name: 'İletişim', href: '/#iletisim' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`transition-all duration-300 border-b ${
          scrolled
            ? 'bg-paper/95 backdrop-blur-md border-limestone/60 py-3 shadow-[0_2px_12px_rgba(16,28,44,0.03)]'
            : 'bg-paper/90 backdrop-blur-sm border-limestone/40 py-4'
        }`}
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Subtle Consultant Mark */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-limestone shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/ayse-nane.jpg"
                alt="Ayşe Nane"
                fill
                priority
                sizes="36px"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-tight font-bold text-ink leading-tight">
                AYŞE NANE
              </span>
              <span className="text-[10px] tracking-widest uppercase text-brand-muted font-medium">
                Antalya Gayrimenkul
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium tracking-wide text-brand-text hover:text-bronze transition-colors py-1 relative flex items-center gap-1.5"
              >
                <span>{link.name}</span>
                {link.isCrm && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-ivory text-bronze border border-limestone/60 font-semibold tracking-wider">
                    CRM
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Area */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 text-xs font-semibold text-brand-muted hover:text-ink px-2 py-1 rounded transition-colors"
                aria-expanded={langMenuOpen}
              >
                <span>{language}</span>
                <ChevronDown className="w-3 h-3 text-limestone" />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-1 py-1 w-20 bg-white border border-limestone rounded-lg shadow-lg z-50">
                  {(['TR', 'EN', 'RU'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setLangMenuOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-1 text-xs font-semibold ${
                        language === lang ? 'text-bronze bg-ivory' : 'text-brand-muted hover:text-ink'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Phone / WhatsApp action */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                'Merhaba Ayşe Hanım, Antalya gayrimenkul portföyünüz hakkında bilgi almak istiyorum.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-brand-muted hover:text-ink flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Primary Action Button */}
            <a
              href="#degerleme"
              className="btn-primary"
            >
              Mülk Değerleme
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${siteConfig.phone}`}
              className="p-2 text-ink hover:text-bronze transition-colors"
              aria-label="Telefonla Ara"
            >
              <Phone className="w-4 h-4 text-bronze" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink hover:text-bronze rounded-lg transition-colors"
              aria-label="Menü"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-paper/98 backdrop-blur-xl border-b border-limestone px-6 py-6 transition-all shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-brand-text hover:text-bronze py-2 border-b border-limestone/30 flex items-center justify-between"
              >
                <span>{link.name}</span>
                {link.isCrm && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-ivory text-bronze border border-limestone/60 font-semibold tracking-wider">
                    CRM
                  </span>
                )}
              </Link>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#degerleme"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full text-center"
              >
                Ücretsiz Mülk Değerleme
              </a>

              <div className="flex items-center justify-between pt-2 text-xs text-brand-muted">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-medium text-brand-text hover:text-bronze"
                >
                  {siteConfig.phoneDisplay}
                </a>

                <div className="flex items-center gap-2">
                  {(['TR', 'EN', 'RU'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`text-xs px-2 py-0.5 rounded font-semibold ${
                        language === lang ? 'text-bronze font-bold' : 'text-brand-muted'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
