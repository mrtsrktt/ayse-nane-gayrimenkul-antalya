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
    <footer className="bg-[#070A12] text-slate-400 text-xs border-t border-white/[0.08] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full border-2 border-[#C5A059] overflow-hidden shadow-inner shrink-0">
                <Image
                  src="/ayse-nane.jpg"
                  alt="Ayşe Nane"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-wider text-white">
                  AYŞE NANE
                </span>
                <span className="block text-[10px] tracking-[0.25em] uppercase text-[#DEC07E] font-medium">
                  Gayrimenkul & Yatırım • Antalya
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
                className="w-9 h-9 rounded-xl bg-[#0C1222] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#DEC07E] hover:border-[#DEC07E]/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0C1222] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#DEC07E] hover:border-[#DEC07E]/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0C1222] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#DEC07E] hover:border-[#DEC07E]/40 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Hızlı Menü</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#portfoy" className="hover:text-[#DEC07E] transition-colors">Seçkin Portföy</Link>
              </li>
              <li>
                <Link href="/#bolgeler" className="hover:text-[#DEC07E] transition-colors">Bölge Rehberi</Link>
              </li>
              <li>
                <Link href="/#degerleme" className="hover:text-[#DEC07E] transition-colors">Mülk Değerleme</Link>
              </li>
              <li>
                <Link href="/#yatirim-hesapla" className="hover:text-[#DEC07E] transition-colors">Yatırım Hesaplayıcı</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#DEC07E] transition-colors text-[#DEC07E] font-semibold">Blog & Piyasa Raporları</Link>
              </li>
              <li>
                <Link href="/ekip" className="hover:text-[#DEC07E] transition-colors text-slate-300">Ekip & CRM Portalı</Link>
              </li>
              <li>
                <Link href="/#hakkimda" className="hover:text-[#DEC07E] transition-colors">Ayşe Nane Kimdir?</Link>
              </li>
              <li>
                <Link href="/#sss" className="hover:text-[#DEC07E] transition-colors">Sıkça Sorulan Sorular</Link>
              </li>
            </ul>
          </div>

          {/* Popular Regions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Antalya Mikro-Piyasalar</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#portfoy" className="hover:text-[#DEC07E] transition-colors">Döşemealtı Müstakil Villalar</a>
              </li>
              <li>
                <a href="#portfoy" className="hover:text-[#DEC07E] transition-colors">Lara & Falez Rezidansları</a>
              </li>
              <li>
                <a href="#portfoy" className="hover:text-[#DEC07E] transition-colors">Konyaaltı Sahil Daireleri</a>
              </li>
              <li>
                <a href="#portfoy" className="hover:text-[#DEC07E] transition-colors">Kaş & Kalkan Panoramik Villalar</a>
              </li>
              <li>
                <a href="#portfoy" className="hover:text-[#DEC07E] transition-colors">Belek Golf & Malikâne Projeleri</a>
              </li>
              <li>
                <a href="#portfoy" className="hover:text-[#DEC07E] transition-colors">Alanya Denize Sıfır Konutlar</a>
              </li>
            </ul>
          </div>

          {/* Licenses & Regulatory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Resmi Akreditasyonlar</h4>
            <div className="space-y-2.5 text-[11px] text-slate-400">
              {siteConfig.licenses.map((lic, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#0C1222] border border-white/[0.08]">
                  <p className="font-semibold text-slate-200">{lic.title}</p>
                  <p className="text-[#DEC07E] text-[10px] mt-0.5">{lic.code}</p>
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
              className="p-2.5 rounded-xl bg-[#0C1222] border border-white/10 text-slate-300 hover:text-white hover:border-[#DEC07E]/50 transition-colors"
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
