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
    <footer className="bg-[#F4F1EA] text-slate-600 text-xs border-t border-[#EAE6DF] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#EAE6DF]">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full border-2 border-[#B89047] overflow-hidden shadow-sm shrink-0">
                <Image
                  src="/ayse-nane.jpg"
                  alt="Ayşe Nane"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-wider text-[#0F1E36]">
                  AYŞE NANE
                </span>
                <span className="block text-[10px] tracking-[0.25em] uppercase text-[#7E6128] font-semibold">
                  Gayrimenkul & Yatırım • Antalya
                </span>
              </div>
            </div>

            <p className="text-slate-500 text-xs leading-relaxed max-w-sm font-light">
              Antalya ve Akdeniz çanağında lüks konut, müstakil villalar, panoramik sahil rezidansları ve yüksek getirili arsa yatırımlarında 12 yıllık güven, şeffaflık ve uzmanlık.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#EAE6DF] flex items-center justify-center text-slate-600 hover:text-[#C13584] hover:border-pink-300 transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#EAE6DF] flex items-center justify-center text-slate-600 hover:text-[#0077B5] hover:border-blue-300 transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#EAE6DF] flex items-center justify-center text-slate-600 hover:text-red-600 hover:border-red-300 transition-colors shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[#0F1E36] text-xs font-bold uppercase tracking-wider">Hızlı Menü</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#portfoy" className="hover:text-[#B89047] transition-colors">Seçkin Portföy</Link>
              </li>
              <li>
                <Link href="/#bolgeler" className="hover:text-[#B89047] transition-colors">Bölge Rehberi</Link>
              </li>
              <li>
                <Link href="/#degerleme" className="hover:text-[#B89047] transition-colors">Mülk Değerleme</Link>
              </li>
              <li>
                <Link href="/#yatirim-hesapla" className="hover:text-[#B89047] transition-colors">Yatırım Hesaplayıcı</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#B89047] transition-colors text-[#7E6128] font-bold">Blog & Piyasa Raporları</Link>
              </li>
              <li>
                <Link href="/ekip" className="hover:text-[#B89047] transition-colors text-slate-600">Ekip & CRM Portalı</Link>
              </li>
              <li>
                <Link href="/#hakkimda" className="hover:text-[#B89047] transition-colors">Ayşe Nane Kimdir?</Link>
              </li>
              <li>
                <Link href="/#sss" className="hover:text-[#B89047] transition-colors">Sıkça Sorulan Sorular</Link>
              </li>
            </ul>
          </div>

          {/* Popular Regions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[#0F1E36] text-xs font-bold uppercase tracking-wider">Antalya Mikro-Piyasalar</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#portfoy" className="hover:text-[#B89047] transition-colors">Döşemealtı Müstakil Villalar</a>
              </li>
              <li>
                <a href="#portfoy" className="hover:text-[#B89047] transition-colors">Lara & Falez Rezidansları</a>
              </li>
              <li>
                <a href="#portfoy" className="hover:text-[#B89047] transition-colors">Konyaaltı Sahil Daireleri</a>
              </li>
              <li>
                <a href="#portfoy" className="hover:text-[#B89047] transition-colors">Kaş & Kalkan Panoramik Villalar</a>
              </li>
              <li>
                <a href="#portfoy" className="hover:text-[#B89047] transition-colors">Belek Golf & Malikâne Projeleri</a>
              </li>
              <li>
                <a href="#portfoy" className="hover:text-[#B89047] transition-colors">Alanya Denize Sıfır Konutlar</a>
              </li>
            </ul>
          </div>

          {/* Licenses & Regulatory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[#0F1E36] text-xs font-bold uppercase tracking-wider">Resmi Akreditasyonlar</h4>
            <div className="space-y-2.5 text-[11px] text-slate-500">
              {siteConfig.licenses.map((lic, i) => (
                <div key={i} className="p-3 rounded-xl bg-white border border-[#EAE6DF] shadow-sm">
                  <p className="font-bold text-[#0F1E36]">{lic.title}</p>
                  <p className="text-[#7E6128] text-[10px] mt-0.5 font-medium">{lic.code}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} Ayşe Nane Gayrimenkul & Yatırım Danışmanlığı. Tüm hakları saklıdır.
          </p>

          <div className="flex items-center gap-6">
            <span>Gizlilik Politikası</span>
            <span>KVKK Aydınlatma Metni</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white border border-[#EAE6DF] text-slate-600 hover:text-[#0F1E36] hover:border-[#DFC596] transition-colors shadow-sm"
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
