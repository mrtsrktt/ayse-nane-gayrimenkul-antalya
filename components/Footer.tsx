'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Compass, ShieldCheck, MapPin, Phone, Mail, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 text-xs border-t border-gold-500/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full border-2 border-gold-400 overflow-hidden shadow-inner shrink-0">
                <Image
                  src="/ayse-nane.jpg"
                  alt="Ayşe Nane"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-wider text-white">
                  AYŞE NANE
                </span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-gold-400 font-medium">
                  Gayrimenkul & Yatırım
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Antalya ve Akdeniz çanağında lüks konut, müstakil villalar, panoramik sahil rezidansları ve yüksek getirili arsa yatırımlarında 12 yıllık güven, şeffaflık ve uzmanlık.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:border-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:border-gold-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:border-gold-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Hızlı Erişim</h4>
            <ul className="space-y-2">
              <li>
                <a href="#portfoy" className="hover:text-gold-300 transition-colors">Seçkin Portföy</a>
              </li>
              <li>
                <a href="#bolgeler" className="hover:text-gold-300 transition-colors">Bölge Rehberi</a>
              </li>
              <li>
                <a href="#degerleme" className="hover:text-gold-300 transition-colors">Mülk Değerleme</a>
              </li>
              <li>
                <a href="#yatirim-hesapla" className="hover:text-gold-300 transition-colors">Yatırım Hesaplayıcı</a>
              </li>
              <li>
                <a href="#hakkimda" className="hover:text-gold-300 transition-colors">Ayşe Nane Kimdir?</a>
              </li>
              <li>
                <a href="#sss" className="hover:text-gold-300 transition-colors">Sıkça Sorulan Sorular</a>
              </li>
            </ul>
          </div>

          {/* Popular Regions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Antalya Bölgeleri</h4>
            <ul className="space-y-2">
              <li>
                <a href="#portfoy" className="hover:text-gold-300 transition-colors">Döşemealtı Müstakil Villalar</a>
              </li>
              <li>
                <a href="#portfoy" className="hover:text-gold-300 transition-colors">Lara & Falez Rezidansları</a>
              </li>
              <li>
                <a href="#portfoy" className="hover:text-gold-300 transition-colors">Konyaaltı Sahil Daireleri</a>
              </li>
              <li>
                <a href="#portfoy" className="hover:text-gold-300 transition-colors">Kaş & Kalkan Panoramik Villalar</a>
              </li>
              <li>
                <a href="#portfoy" className="hover:text-gold-300 transition-colors">Belek Golf & Malikâne Projeleri</a>
              </li>
              <li>
                <a href="#portfoy" className="hover:text-gold-300 transition-colors">Alanya Denize Sıfır Konutlar</a>
              </li>
            </ul>
          </div>

          {/* Licenses & Regulatory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Resmi Akreditasyonlar</h4>
            <div className="space-y-2 text-[11px] text-slate-400">
              {siteConfig.licenses.map((lic, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="font-semibold text-slate-200">{lic.title}</p>
                  <p className="text-gold-400/80 text-[10px] mt-0.5">{lic.code}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} Ayşe Nane Gayrimenkul & Yatırım Danışmanlığı. Tüm hakları saklıdır.
          </p>

          <div className="flex items-center gap-6">
            <span>Gizlilik Politikası</span>
            <span>KVKK Aydınlatma Metni</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-gold-400 transition-colors"
              title="Yukarı Çık"
              aria-label="Sayfanın Başına Dön"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
